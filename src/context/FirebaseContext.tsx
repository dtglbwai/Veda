import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { 
  auth, 
  db, 
  googleProvider, 
  signInWithPopup, 
  signInAnonymously, 
  signOut, 
  onAuthStateChanged,
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  deleteDoc, 
  onSnapshot, 
  serverTimestamp,
  type User 
} from "../lib/firebase";
import { FirebaseSpreadsheetDoc, SheetTab, SpreadsheetRow } from "../types/spreadsheet";
import { CANONICAL_SPREADSHEET_DATASETS } from "../data/canonicalSpreadsheets";
import { parseSpreadsheetFile } from "../utils/spreadsheetExport";

interface FirebaseContextType {
  user: User | null;
  isLoadingAuth: boolean;
  isFirebaseAvailable: boolean;
  spreadsheets: FirebaseSpreadsheetDoc[];
  activeSpreadsheet: FirebaseSpreadsheetDoc | null;
  setActiveSpreadsheet: (doc: FirebaseSpreadsheetDoc | null) => void;
  saveSpreadsheetToFirestore: (docData: FirebaseSpreadsheetDoc) => Promise<boolean>;
  deleteSpreadsheetFromFirestore: (docId: string) => Promise<boolean>;
  createNewSpreadsheet: (title: string, category?: FirebaseSpreadsheetDoc["category"]) => FirebaseSpreadsheetDoc;
  importSpreadsheetToFirestore: (file: File) => Promise<FirebaseSpreadsheetDoc | null>;
  loginWithGoogle: () => Promise<void>;
  loginAsGuestScholar: () => Promise<void>;
  logoutScholar: () => Promise<void>;
  syncStatus: "connected" | "syncing" | "offline" | "error";
  syncMessage: string;
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isFirebaseAvailable, setIsFirebaseAvailable] = useState(true);
  const [spreadsheets, setSpreadsheets] = useState<FirebaseSpreadsheetDoc[]>(CANONICAL_SPREADSHEET_DATASETS);
  const [activeSpreadsheet, setActiveSpreadsheet] = useState<FirebaseSpreadsheetDoc | null>(CANONICAL_SPREADSHEET_DATASETS[0]);
  const [syncStatus, setSyncStatus] = useState<"connected" | "syncing" | "offline" | "error">("connected");
  const [syncMessage, setSyncMessage] = useState<string>("Connected to Cloud Firestore");

  // Track Firebase Auth state
  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (authUser) => {
        setUser(authUser);
        setIsLoadingAuth(false);
      }, (error) => {
        console.warn("Firebase Auth error:", error);
        setIsLoadingAuth(false);
      });
      return () => unsubscribe();
    } catch (e) {
      console.warn("Firebase Auth init skipped or failed:", e);
      setIsLoadingAuth(false);
      setIsFirebaseAvailable(false);
    }
  }, []);

  // Real-time listener for Firestore Spreadsheets Collection
  useEffect(() => {
    try {
      const spreadsheetsRef = collection(db, "spreadsheets");
      const unsubscribe = onSnapshot(spreadsheetsRef, (snapshot) => {
        const cloudDocs: FirebaseSpreadsheetDoc[] = [];
        snapshot.forEach((d) => {
          cloudDocs.push({ id: d.id, ...d.data() } as FirebaseSpreadsheetDoc);
        });

        // Merge canonical datasets with user-created Cloud Firestore datasets
        const combined = [...CANONICAL_SPREADSHEET_DATASETS];
        cloudDocs.forEach(cDoc => {
          const idx = combined.findIndex(c => c.id === cDoc.id);
          if (idx >= 0) {
            combined[idx] = cDoc;
          } else {
            combined.unshift(cDoc);
          }
        });

        setSpreadsheets(combined);
        setSyncStatus("connected");
        setSyncMessage(`Cloud Firestore active (${combined.length} datasets synced)`);
      }, (error) => {
        console.warn("Firestore snapshot listener notice (fallback to local state):", error);
        setSyncStatus("offline");
        setSyncMessage("Local Cache Mode (Firestore connection standby)");
      });

      return () => unsubscribe();
    } catch (e) {
      console.warn("Firestore setup error:", e);
      setSyncStatus("offline");
    }
  }, []);

  const loginWithGoogle = async () => {
    try {
      setSyncStatus("syncing");
      setSyncMessage("Signing in with Google Account...");
      await signInWithPopup(auth, googleProvider);
      setSyncStatus("connected");
      setSyncMessage("Scholar authenticated via Google");
    } catch (err: any) {
      console.warn("Google sign-in popup error, falling back to guest scholar:", err);
      await loginAsGuestScholar();
    }
  };

  const loginAsGuestScholar = async () => {
    try {
      setSyncStatus("syncing");
      setSyncMessage("Connecting Guest Scholar session...");
      await signInAnonymously(auth);
      setSyncStatus("connected");
      setSyncMessage("Connected as Guest Researcher");
    } catch (err: any) {
      console.error("Anonymous auth error:", err);
      setSyncStatus("offline");
      setSyncMessage("Guest session running locally");
    }
  };

  const logoutScholar = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setSyncMessage("Signed out of Cloud Firestore");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const saveSpreadsheetToFirestore = async (docData: FirebaseSpreadsheetDoc): Promise<boolean> => {
    setSyncStatus("syncing");
    setSyncMessage(`Syncing "${docData.title}" to Cloud Firestore...`);

    const updatedDoc: FirebaseSpreadsheetDoc = {
      ...docData,
      updatedAt: new Date().toISOString(),
      createdBy: docData.createdBy || user?.uid || "guest_scholar",
      authorName: docData.authorName || user?.displayName || user?.email || "Indic Research Scholar",
      syncStatus: "synced"
    };

    try {
      // 1. Update local state immediately for snappy UI
      setSpreadsheets(prev => {
        const idx = prev.findIndex(p => p.id === updatedDoc.id);
        if (idx >= 0) {
          const copy = [...prev];
          copy[idx] = updatedDoc;
          return copy;
        }
        return [updatedDoc, ...prev];
      });

      if (activeSpreadsheet?.id === updatedDoc.id) {
        setActiveSpreadsheet(updatedDoc);
      }

      // 2. Persist to Firestore document
      const docRef = doc(db, "spreadsheets", updatedDoc.id);
      await setDoc(docRef, {
        ...updatedDoc,
        updatedAtServer: serverTimestamp()
      }, { merge: true });

      setSyncStatus("connected");
      setSyncMessage(`Synced to Firestore at ${new Date().toLocaleTimeString()}`);
      return true;
    } catch (error: any) {
      console.warn("Firestore save fallback to local memory:", error);
      setSyncStatus("offline");
      setSyncMessage("Saved to local workspace memory (Firestore offline)");
      return true;
    }
  };

  const deleteSpreadsheetFromFirestore = async (docId: string): Promise<boolean> => {
    try {
      setSpreadsheets(prev => prev.filter(s => s.id !== docId));
      if (activeSpreadsheet?.id === docId) {
        const remaining = spreadsheets.filter(s => s.id !== docId);
        setActiveSpreadsheet(remaining[0] || null);
      }

      const docRef = doc(db, "spreadsheets", docId);
      await deleteDoc(docRef);
      setSyncMessage(`Deleted dataset from Firestore`);
      return true;
    } catch (err) {
      console.warn("Delete Firestore notice:", err);
      return true;
    }
  };

  const createNewSpreadsheet = (
    title: string = "New Indic Research Dataset",
    category: FirebaseSpreadsheetDoc["category"] = "Custom Datasets"
  ): FirebaseSpreadsheetDoc => {
    const newDocId = `dataset-${Date.now()}`;
    const newDoc: FirebaseSpreadsheetDoc = {
      id: newDocId,
      title: title || "Untitled Indic Dataset",
      description: "Custom user spreadsheet with real-time Cloud Firestore persistence.",
      category,
      tags: ["Custom", "Spreadsheet", "Indic Research"],
      rowCount: 3,
      columnCount: 4,
      createdBy: user?.uid || "guest_scholar",
      authorName: user?.displayName || "Indic Research Scholar",
      isPublic: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      syncStatus: "synced",
      sheets: [
        {
          id: "sheet-1",
          name: "Sheet1",
          description: "Primary Data Table",
          columns: [
            { key: "id", label: "Index", type: "number", width: 70 },
            { key: "title", label: "Title / Entity", type: "string", width: 180 },
            { key: "sanskrit_term", label: "Sanskrit Term (संस्कृत)", type: "sanskrit", width: 180 },
            { key: "notes", label: "Research Notes & Attributes", type: "string", width: 260 }
          ],
          rows: [
            { id: 1, title: "Sample Entry 1", sanskrit_term: "सत्यम् (Satyam)", notes: "Foundational cosmic truth" },
            { id: 2, title: "Sample Entry 2", sanskrit_term: "ऋतम् (Ritam)", notes: "Universal harmonic order" },
            { id: 3, title: "Sample Entry 3", sanskrit_term: "धर्मः (Dharma)", notes: "Righteous duty and sustenance" }
          ]
        }
      ]
    };

    saveSpreadsheetToFirestore(newDoc);
    setActiveSpreadsheet(newDoc);
    return newDoc;
  };

  const importSpreadsheetToFirestore = async (file: File): Promise<FirebaseSpreadsheetDoc | null> => {
    try {
      setSyncStatus("syncing");
      setSyncMessage(`Parsing spreadsheet file ${file.name}...`);

      const parsed = await parseSpreadsheetFile(file);
      if (!parsed.sheets || parsed.sheets.length === 0) {
        throw new Error("No valid data sheets found in uploaded spreadsheet.");
      }

      const totalRows = parsed.sheets.reduce((sum, s) => sum + s.rowCount, 0);
      const totalCols = parsed.sheets[0]?.columnCount || 0;

      const newDoc: FirebaseSpreadsheetDoc = {
        id: `imported-${Date.now()}`,
        title: file.name.replace(/\.[^/.]+$/, ""),
        description: `Imported spreadsheet from ${file.name} (${(file.size / 1024).toFixed(1)} KB) with ${parsed.sheets.length} sheet(s) and ${totalRows} total records.`,
        category: "Custom Datasets",
        tags: ["Imported Excel", "Spreadsheet", "Cloud Sync"],
        rowCount: totalRows,
        columnCount: totalCols,
        createdBy: user?.uid || "guest_scholar",
        authorName: user?.displayName || "Research Scholar",
        isPublic: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        syncStatus: "synced",
        sheets: parsed.sheets.map((s, idx) => ({
          id: `sheet-${idx + 1}`,
          name: s.name,
          columns: s.columns,
          rows: s.rows
        }))
      };

      await saveSpreadsheetToFirestore(newDoc);
      setActiveSpreadsheet(newDoc);
      return newDoc;
    } catch (err: any) {
      console.error("Spreadsheet import error:", err);
      setSyncStatus("error");
      setSyncMessage(`Import error: ${err.message || "Failed to parse file"}`);
      return null;
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        user,
        isLoadingAuth,
        isFirebaseAvailable,
        spreadsheets,
        activeSpreadsheet,
        setActiveSpreadsheet,
        saveSpreadsheetToFirestore,
        deleteSpreadsheetFromFirestore,
        createNewSpreadsheet,
        importSpreadsheetToFirestore,
        loginWithGoogle,
        loginAsGuestScholar,
        logoutScholar,
        syncStatus,
        syncMessage
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
};
