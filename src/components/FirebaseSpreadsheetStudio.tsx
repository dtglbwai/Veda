import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Database, 
  FileSpreadsheet, 
  Table, 
  Download, 
  Upload, 
  Plus, 
  Trash2, 
  RefreshCw, 
  Search, 
  Filter, 
  ArrowUpDown, 
  CheckCircle2, 
  Cloud, 
  CloudOff, 
  Lock, 
  User as UserIcon, 
  LogOut, 
  LogIn, 
  Sparkles, 
  FileText, 
  Copy, 
  Save, 
  Layers, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Edit3,
  HelpCircle,
  Eye
} from "lucide-react";
import { useFirebase } from "../context/FirebaseContext";
import { FirebaseSpreadsheetDoc, SheetTab, SpreadsheetColumn, SpreadsheetRow } from "../types/spreadsheet";
import { exportToExcel, exportToCsv, exportToJson } from "../utils/spreadsheetExport";
import { useLanguage } from "../context/LanguageContext";

export default function FirebaseSpreadsheetStudio() {
  const {
    user,
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
  } = useFirebase();

  const { transliterate, currentScript } = useLanguage();

  // Active sheet within the active spreadsheet document
  const [activeSheetIndex, setActiveSheetIndex] = useState<number>(0);
  
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);

  // Selected cell for Inspector
  const [selectedCell, setSelectedCell] = useState<{ rowIdx: number; colKey: string; val: any } | null>(null);
  const [editingCell, setEditingCell] = useState<{ rowIdx: number; colKey: string } | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  // Modals state
  const [isNewDocModalOpen, setIsNewDocModalOpen] = useState<boolean>(false);
  const [newDocTitle, setNewDocTitle] = useState<string>("");
  const [newDocCategory, setNewDocCategory] = useState<FirebaseSpreadsheetDoc["category"]>("Ayurveda & Health");
  
  const [isAddColumnModalOpen, setIsAddColumnModalOpen] = useState<boolean>(false);
  const [newColLabel, setNewColLabel] = useState<string>("");
  const [newColType, setNewColType] = useState<SpreadsheetColumn["type"]>("string");

  const [isImportModalOpen, setIsImportModalOpen] = useState<boolean>(false);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Current sheet object
  const currentSheet: SheetTab | undefined = activeSpreadsheet?.sheets[activeSheetIndex] || activeSpreadsheet?.sheets[0];

  // Categories list
  const categories = ["All", "Ayurveda & Health", "Vedic Scriptures", "Astronomy & Ephemeris", "Epigraphy & Archaeology", "IKS Academic Standards", "Custom Datasets"];

  // Filtered spreadsheets list
  const filteredSpreadsheets = useMemo(() => {
    return spreadsheets.filter(s => {
      if (selectedCategory !== "All" && s.category !== selectedCategory) return false;
      return true;
    });
  }, [spreadsheets, selectedCategory]);

  // Filtered & Sorted rows for active sheet
  const displayRows = useMemo(() => {
    if (!currentSheet) return [];
    let rows = [...currentSheet.rows];

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      rows = rows.filter(row => {
        return Object.values(row).some(v => 
          v !== null && v !== undefined && String(v).toLowerCase().includes(q)
        );
      });
    }

    // Sorting
    if (sortColumn) {
      rows.sort((a, b) => {
        const valA = a[sortColumn];
        const valB = b[sortColumn];
        if (valA === valB) return 0;
        if (valA === null || valA === undefined) return 1;
        if (valB === null || valB === undefined) return -1;

        if (typeof valA === "number" && typeof valB === "number") {
          return sortDirection === "asc" ? valA - valB : valB - valA;
        }
        return sortDirection === "asc" 
          ? String(valA).localeCompare(String(valB))
          : String(valB).localeCompare(String(valA));
      });
    }

    return rows;
  }, [currentSheet, searchQuery, sortColumn, sortDirection]);

  // Paginated rows
  const paginatedRows = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return displayRows.slice(start, start + rowsPerPage);
  }, [displayRows, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(displayRows.length / rowsPerPage) || 1;

  // Sorting Handler
  const handleSort = (colKey: string) => {
    if (sortColumn === colKey) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else {
        setSortColumn(null);
      }
    } else {
      setSortColumn(colKey);
      setSortDirection("asc");
    }
  };

  // Cell Editing
  const startEditing = (rowIdx: number, colKey: string, currentVal: any) => {
    setEditingCell({ rowIdx, colKey });
    setEditValue(currentVal !== undefined && currentVal !== null ? String(currentVal) : "");
    setSelectedCell({ rowIdx, colKey, val: currentVal });
  };

  const commitCellEdit = async () => {
    if (!activeSpreadsheet || !currentSheet || !editingCell) return;

    const { rowIdx, colKey } = editingCell;
    const sheetIdx = activeSheetIndex;

    // Deep clone doc
    const updatedDoc: FirebaseSpreadsheetDoc = JSON.parse(JSON.stringify(activeSpreadsheet));
    const targetSheet = updatedDoc.sheets[sheetIdx];
    
    // Find absolute row index in targetSheet
    const targetRow = targetSheet.rows[rowIdx];
    if (targetRow) {
      // Type coercion
      const colDef = targetSheet.columns.find(c => c.key === colKey);
      let parsedVal: any = editValue;
      if (colDef?.type === "number") {
        const num = parseFloat(editValue);
        parsedVal = isNaN(num) ? editValue : num;
      } else if (colDef?.type === "boolean") {
        parsedVal = editValue.toLowerCase() === "true";
      }

      targetRow[colKey] = parsedVal;
    }

    setEditingCell(null);
    setSelectedCell(prev => prev ? { ...prev, val: editValue } : null);

    await saveSpreadsheetToFirestore(updatedDoc);
  };

  // Add New Row
  const handleAddRow = async () => {
    if (!activeSpreadsheet || !currentSheet) return;
    const updatedDoc: FirebaseSpreadsheetDoc = JSON.parse(JSON.stringify(activeSpreadsheet));
    const targetSheet = updatedDoc.sheets[activeSheetIndex];

    const newRow: SpreadsheetRow = {};
    targetSheet.columns.forEach(col => {
      if (col.key === "id" || col.key === "number") {
        newRow[col.key] = targetSheet.rows.length + 1;
      } else {
        newRow[col.key] = col.type === "number" ? 0 : "";
      }
    });

    targetSheet.rows.push(newRow);
    updatedDoc.rowCount = updatedDoc.sheets.reduce((sum, s) => sum + s.rows.length, 0);

    await saveSpreadsheetToFirestore(updatedDoc);
  };

  // Delete Row
  const handleDeleteRow = async (rowIndexInCurrentSheet: number) => {
    if (!activeSpreadsheet || !currentSheet) return;
    const updatedDoc: FirebaseSpreadsheetDoc = JSON.parse(JSON.stringify(activeSpreadsheet));
    const targetSheet = updatedDoc.sheets[activeSheetIndex];

    targetSheet.rows.splice(rowIndexInCurrentSheet, 1);
    updatedDoc.rowCount = updatedDoc.sheets.reduce((sum, s) => sum + s.rows.length, 0);

    await saveSpreadsheetToFirestore(updatedDoc);
  };

  // Add New Column
  const handleAddColumn = async () => {
    if (!activeSpreadsheet || !currentSheet || !newColLabel.trim()) return;
    const colKey = newColLabel.toLowerCase().replace(/[^a-z0-9_]/g, "_").replace(/^_+|_+$/g, "") || `col_${Date.now()}`;

    const updatedDoc: FirebaseSpreadsheetDoc = JSON.parse(JSON.stringify(activeSpreadsheet));
    const targetSheet = updatedDoc.sheets[activeSheetIndex];

    const newCol: SpreadsheetColumn = {
      key: colKey,
      label: newColLabel.trim(),
      type: newColType,
      width: Math.max(140, newColLabel.length * 10)
    };

    targetSheet.columns.push(newCol);
    updatedDoc.columnCount = targetSheet.columns.length;

    setIsAddColumnModalOpen(false);
    setNewColLabel("");
    await saveSpreadsheetToFirestore(updatedDoc);
  };

  // Add New Sheet Tab
  const handleAddSheetTab = async () => {
    if (!activeSpreadsheet) return;
    const updatedDoc: FirebaseSpreadsheetDoc = JSON.parse(JSON.stringify(activeSpreadsheet));
    const newSheetNum = updatedDoc.sheets.length + 1;
    const newSheet: SheetTab = {
      id: `sheet-${Date.now()}`,
      name: `Sheet${newSheetNum}`,
      description: `Data Table ${newSheetNum}`,
      columns: [
        { key: "id", label: "Index", type: "number", width: 70 },
        { key: "item_name", label: "Item Name", type: "string", width: 180 },
        { key: "sanskrit_term", label: "Sanskrit Term", type: "sanskrit", width: 180 },
        { key: "category", label: "Category", type: "string", width: 140 },
        { key: "notes", label: "Notes", type: "string", width: 240 }
      ],
      rows: [
        { id: 1, item_name: "Record 1", sanskrit_term: "ज्ञानम् (Jnanam)", category: "Epistemology", notes: "Primary knowledge" }
      ]
    };

    updatedDoc.sheets.push(newSheet);
    setActiveSheetIndex(updatedDoc.sheets.length - 1);
    await saveSpreadsheetToFirestore(updatedDoc);
  };

  // Handle File Drop / Select for Import
  const handleFileDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      await importSpreadsheetToFirestore(file);
      setIsImportModalOpen(false);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      await importSpreadsheetToFirestore(file);
      setIsImportModalOpen(false);
    }
  };

  return (
    <div className="w-full bg-[#110e0b] text-[#f7f2e7] min-h-screen flex flex-col font-sans pb-16">
      {/* Top Banner & Firebase Status Telemetry */}
      <div className="border-b border-[#30261c] bg-[#16120e] px-4 md:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-amber-100 tracking-wide font-serif">
                Cloud Firestore Database & Spreadsheet Studio
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 uppercase">
                Multi-Sheet Excel & CSV
              </span>
            </div>
            <p className="text-xs text-stone-400">
              Live Cloud Firestore synchronizer for Ayurvedic herbals, Vedic manuscripts, Ephemeris data & custom user research datasets
            </p>
          </div>
        </div>

        {/* Cloud Sync Status & User Profile */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Firestore Connection Indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1e1711] border border-[#3d2e1e] text-xs">
            {syncStatus === "connected" ? (
              <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Firestore Live</span>
              </span>
            ) : syncStatus === "syncing" ? (
              <span className="flex items-center gap-1.5 text-amber-400 font-mono">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Syncing Cloud...</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-stone-400 font-mono">
                <CloudOff className="w-3.5 h-3.5" />
                <span>Local Cache</span>
              </span>
            )}
            <span className="text-stone-600">|</span>
            <span className="text-[11px] text-stone-400 font-mono hidden sm:inline" title={syncMessage}>
              {syncMessage}
            </span>
          </div>

          {/* User Auth Card */}
          {user ? (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-950/40 border border-amber-800/40 text-xs">
              <div className="w-5 h-5 rounded-full bg-amber-600/30 flex items-center justify-center text-amber-300 font-bold text-[10px]">
                {user.displayName ? user.displayName[0].toUpperCase() : "S"}
              </div>
              <span className="text-amber-200 font-medium max-w-[120px] truncate">
                {user.displayName || user.email || "Scholar"}
              </span>
              <button 
                onClick={logoutScholar} 
                className="p-1 text-stone-400 hover:text-red-400 transition-colors"
                title="Sign out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={loginWithGoogle}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs transition-all shadow-md"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign in (Cloud Sync)</span>
              </button>
              <button
                onClick={loginAsGuestScholar}
                className="px-2.5 py-1.5 rounded-lg bg-[#251d16] hover:bg-[#32271d] text-stone-300 text-xs border border-[#423223] transition-all"
              >
                Guest Mode
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Studio Body */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-6 flex flex-col gap-6">
        
        {/* Dataset Selection Bar & Studio Controls */}
        <div className="bg-[#18130f] rounded-2xl border border-[#382a1d] p-4 flex flex-col gap-4 shadow-xl">
          
          {/* Top Level: Dataset Selector Dropdown & Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            
            {/* Active Dataset Dropdown */}
            <div className="flex items-center gap-2 flex-1 min-w-[280px]">
              <span className="text-xs font-mono uppercase text-amber-400/80 tracking-wider shrink-0 flex items-center gap-1">
                <FileSpreadsheet className="w-3.5 h-3.5 text-amber-400" /> Active Dataset:
              </span>
              <select
                value={activeSpreadsheet?.id || ""}
                onChange={(e) => {
                  const found = spreadsheets.find(s => s.id === e.target.value);
                  if (found) {
                    setActiveSpreadsheet(found);
                    setActiveSheetIndex(0);
                    setCurrentPage(1);
                  }
                }}
                className="flex-1 bg-[#221a13] text-amber-100 text-sm font-medium rounded-xl border border-[#4a3726] px-3 py-2 outline-none focus:border-amber-500 transition-all font-serif cursor-pointer"
              >
                {filteredSpreadsheets.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.title} ({s.sheets.reduce((acc, sh) => acc + sh.rows.length, 0)} records)
                  </option>
                ))}
              </select>
            </div>

            {/* Studio Action Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setIsNewDocModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-600/90 hover:bg-amber-500 text-stone-950 font-bold text-xs transition-all shadow-md"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Spreadsheet</span>
              </button>

              <button
                onClick={() => setIsImportModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#281f17] hover:bg-[#382b20] text-amber-200 border border-amber-800/40 text-xs font-medium transition-all"
                title="Import Excel (.xlsx, .xls) or CSV"
              >
                <Upload className="w-3.5 h-3.5 text-amber-400" />
                <span>Import File (.xlsx / .csv)</span>
              </button>

              {/* Export Menu */}
              {activeSpreadsheet && (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => exportToExcel(activeSpreadsheet)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 border border-emerald-700/60 text-xs font-medium transition-all shadow-sm"
                    title="Export all sheets to formatted Excel .xlsx workbook"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Export Excel (.xlsx)</span>
                  </button>

                  <button
                    onClick={() => currentSheet && exportToCsv(currentSheet, `${activeSpreadsheet.title}_${currentSheet.name}.csv`)}
                    className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-[#281f17] hover:bg-[#382b20] text-stone-300 border border-[#443322] text-xs font-medium transition-all"
                    title="Export active sheet to CSV"
                  >
                    <span>CSV</span>
                  </button>

                  <button
                    onClick={() => exportToJson(activeSpreadsheet, `${activeSpreadsheet.title}.json`)}
                    className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-[#281f17] hover:bg-[#382b20] text-stone-300 border border-[#443322] text-xs font-medium transition-all"
                    title="Export raw JSON"
                  >
                    <span>JSON</span>
                  </button>
                </div>
              )}

              {/* Delete Dataset Button (for custom docs) */}
              {activeSpreadsheet && activeSpreadsheet.createdBy !== "system_canonical" && (
                <button
                  onClick={() => {
                    if (confirm(`Are you sure you want to delete "${activeSpreadsheet.title}" from Cloud Firestore?`)) {
                      deleteSpreadsheetFromFirestore(activeSpreadsheet.id);
                    }
                  }}
                  className="p-2 rounded-xl bg-red-950/50 hover:bg-red-900/80 text-red-300 border border-red-800/40 text-xs transition-all"
                  title="Delete dataset"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Dataset Metadata & Summary Description */}
          {activeSpreadsheet && (
            <div className="pt-3 border-t border-[#2e2216] flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800/50 font-mono text-[11px]">
                  {activeSpreadsheet.category}
                </span>
                <span className="text-stone-300">{activeSpreadsheet.description}</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] font-mono text-stone-400">
                <span>Total Sheets: <strong className="text-amber-300">{activeSpreadsheet.sheets.length}</strong></span>
                <span>Total Rows: <strong className="text-amber-300">{activeSpreadsheet.rowCount}</strong></span>
                <span>Author: <strong className="text-amber-200">{activeSpreadsheet.authorName || "Scholar"}</strong></span>
              </div>
            </div>
          )}

          {/* Canonical Shortcuts Row */}
          <div className="pt-2 border-t border-[#281d13] flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
            <span className="text-[11px] font-mono uppercase text-amber-400/70 tracking-wider shrink-0 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" /> Presets:
            </span>
            {spreadsheets.map(s => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveSpreadsheet(s);
                  setActiveSheetIndex(0);
                  setCurrentPage(1);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-serif transition-all shrink-0 flex items-center gap-1.5 border ${
                  activeSpreadsheet?.id === s.id
                    ? "bg-amber-900/60 text-amber-200 border-amber-600/80 shadow-sm"
                    : "bg-[#221912] text-stone-400 border-[#38281b] hover:bg-[#2e2117] hover:text-stone-200"
                }`}
              >
                <span>{s.title.split("(")[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Workbook Sheets Tabs Bar & Grid Tooling */}
        {activeSpreadsheet && currentSheet && (
          <div className="bg-[#18130f] rounded-2xl border border-[#382a1d] shadow-2xl overflow-hidden flex flex-col">
            
            {/* Sheet Tabs Bar */}
            <div className="bg-[#14100c] px-4 pt-3 border-b border-[#302317] flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-1">
                {activeSpreadsheet.sheets.map((sheet, idx) => (
                  <button
                    key={sheet.id}
                    onClick={() => {
                      setActiveSheetIndex(idx);
                      setCurrentPage(1);
                      setSelectedCell(null);
                    }}
                    className={`px-4 py-2 rounded-t-xl text-xs font-medium font-serif flex items-center gap-2 border-t border-x transition-all ${
                      activeSheetIndex === idx
                        ? "bg-[#18130f] text-amber-200 border-[#4a3726] border-b-transparent -mb-[1px] z-10 shadow-md font-bold"
                        : "bg-[#1a140f] text-stone-400 border-transparent hover:text-stone-200 hover:bg-[#201913]"
                    }`}
                  >
                    <Table className="w-3.5 h-3.5 text-amber-500/80" />
                    <span>{sheet.name}</span>
                    <span className="px-1.5 py-0.2 rounded-full bg-[#2a1f16] text-[10px] font-mono text-stone-400">
                      {sheet.rows.length}
                    </span>
                  </button>
                ))}

                <button
                  onClick={handleAddSheetTab}
                  className="px-3 py-2 rounded-t-xl text-xs font-medium text-stone-400 hover:text-amber-300 hover:bg-[#201913] transition-all flex items-center gap-1"
                  title="Add new sheet to workbook"
                >
                  <Plus className="w-3 h-3" />
                  <span>New Sheet</span>
                </button>
              </div>

              <div className="pb-2 text-xs font-mono text-stone-400 flex items-center gap-3 shrink-0">
                <span>Cols: <strong className="text-amber-300">{currentSheet.columns.length}</strong></span>
                <span>Rows: <strong className="text-amber-300">{currentSheet.rows.length}</strong></span>
              </div>
            </div>

            {/* Grid Utility Toolbar: Search, Cell Formula Bar, Add Row & Add Column */}
            <div className="p-3 bg-[#16110d] border-b border-[#2d2115] flex flex-wrap items-center justify-between gap-3 text-xs">
              
              {/* Search Bar */}
              <div className="relative flex-1 min-w-[220px] max-w-sm">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder={`Search in ${currentSheet.name}...`}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 pr-3 py-1.5 bg-[#201812] rounded-lg border border-[#3e2e1e] text-amber-100 placeholder-stone-500 text-xs outline-none focus:border-amber-500"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Cell Value & Coordinate Inspector */}
              <div className="flex-1 min-w-[260px] flex items-center gap-2 bg-[#201812] px-3 py-1.5 rounded-lg border border-[#3e2e1e] font-mono text-xs">
                <span className="text-amber-500 font-bold shrink-0">
                  {selectedCell ? `[R${selectedCell.rowIdx + 1}:${selectedCell.colKey}]` : "Fx"}
                </span>
                <span className="text-stone-600">|</span>
                <span className="text-stone-300 truncate font-sans">
                  {selectedCell !== null ? String(selectedCell.val ?? "Empty") : "Click any cell to inspect / double click to edit"}
                </span>
              </div>

              {/* Table Modification Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAddRow}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-950/80 hover:bg-amber-900 text-amber-200 border border-amber-700/60 font-medium transition-all shadow-sm"
                >
                  <Plus className="w-3 h-3 text-amber-400" />
                  <span>Add Row</span>
                </button>

                <button
                  onClick={() => setIsAddColumnModalOpen(true)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#241c15] hover:bg-[#32261c] text-stone-300 border border-[#443323] transition-all"
                >
                  <Plus className="w-3 h-3" />
                  <span>Add Column</span>
                </button>
              </div>
            </div>

            {/* Interactive Data Table Grid */}
            <div className="overflow-x-auto max-h-[600px] border-b border-[#2d2115]">
              <table className="w-full text-left text-xs border-collapse font-sans">
                {/* Table Header */}
                <thead className="bg-[#1a140f] sticky top-0 z-20 border-b border-[#3d2c1c] text-amber-300/90 font-mono uppercase text-[11px] select-none">
                  <tr>
                    <th className="p-2.5 w-12 text-center text-stone-500 border-r border-[#2d2115] bg-[#1a140f]">
                      #
                    </th>
                    {currentSheet.columns.map((col) => (
                      <th
                        key={col.key}
                        style={{ width: col.width || 150 }}
                        className="p-2.5 font-semibold tracking-wider border-r border-[#2d2115] hover:bg-[#251c14] transition-colors cursor-pointer group"
                        onClick={() => handleSort(col.key)}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="truncate">{col.label}</span>
                          <div className="flex items-center gap-1 text-stone-500 group-hover:text-amber-400">
                            {sortColumn === col.key ? (
                              <span className="text-amber-400 font-bold">
                                {sortDirection === "asc" ? "▲" : "▼"}
                              </span>
                            ) : (
                              <ArrowUpDown className="w-3 h-3 opacity-40 group-hover:opacity-100" />
                            )}
                          </div>
                        </div>
                      </th>
                    ))}
                    <th className="p-2.5 w-12 text-center text-stone-500 bg-[#1a140f]">
                      Act
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-[#241a12] font-normal">
                  {paginatedRows.length === 0 ? (
                    <tr>
                      <td 
                        colSpan={currentSheet.columns.length + 2} 
                        className="text-center py-12 text-stone-500 font-serif text-sm"
                      >
                        No matching records found in this sheet. Click <strong>"Add Row"</strong> to insert new data.
                      </td>
                    </tr>
                  ) : (
                    paginatedRows.map((row, rIdx) => {
                      const absoluteRowIdx = (currentPage - 1) * rowsPerPage + rIdx;
                      return (
                        <tr 
                          key={rIdx}
                          className="hover:bg-[#1f1711] transition-colors group"
                        >
                          {/* Row Number */}
                          <td className="p-2.5 text-center text-stone-500 font-mono text-[11px] bg-[#14100c]/60 border-r border-[#241a12]">
                            {absoluteRowIdx + 1}
                          </td>

                          {/* Data Cells */}
                          {currentSheet.columns.map((col) => {
                            const val = row[col.key];
                            const isEditing = editingCell?.rowIdx === absoluteRowIdx && editingCell?.colKey === col.key;
                            const isSelected = selectedCell?.rowIdx === absoluteRowIdx && selectedCell?.colKey === col.key;

                            return (
                              <td
                                key={col.key}
                                onClick={() => setSelectedCell({ rowIdx: absoluteRowIdx, colKey: col.key, val })}
                                onDoubleClick={() => startEditing(absoluteRowIdx, col.key, val)}
                                className={`p-2.5 border-r border-[#241a12] transition-colors relative cursor-cell ${
                                  isSelected ? "bg-amber-950/40 ring-1 ring-amber-500/80 z-10" : ""
                                }`}
                              >
                                {isEditing ? (
                                  <input
                                    type="text"
                                    autoFocus
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    onBlur={commitCellEdit}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter") commitCellEdit();
                                      if (e.key === "Escape") setEditingCell(null);
                                    }}
                                    className="w-full bg-[#2a1f16] text-amber-100 px-2 py-1 rounded border border-amber-500 text-xs outline-none shadow-lg"
                                  />
                                ) : (
                                  <div className="truncate max-w-[320px]">
                                    {col.type === "sanskrit" ? (
                                      <span className="font-serif text-amber-200 tracking-wide font-medium">
                                        {val !== undefined && val !== null ? String(val) : "—"}
                                      </span>
                                    ) : col.type === "url" && val && String(val).startsWith("http") ? (
                                      <a
                                        href={String(val)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-amber-400 hover:text-amber-300 underline flex items-center gap-1"
                                      >
                                        <span className="truncate">{String(val)}</span>
                                        <ExternalLink className="w-3 h-3 shrink-0" />
                                      </a>
                                    ) : col.type === "number" ? (
                                      <span className="font-mono text-emerald-300">
                                        {val !== undefined && val !== null ? Number(val).toLocaleString() : "0"}
                                      </span>
                                    ) : (
                                      <span className="text-stone-300">
                                        {val !== undefined && val !== null && String(val).trim() !== "" ? String(val) : "—"}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </td>
                            );
                          })}

                          {/* Row Actions */}
                          <td className="p-2.5 text-center">
                            <button
                              onClick={() => handleDeleteRow(absoluteRowIdx)}
                              className="opacity-0 group-hover:opacity-100 p-1 text-stone-500 hover:text-red-400 transition-all"
                              title="Delete row"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Footer: Pagination & Stats */}
            <div className="p-3 bg-[#14100c] flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400 border-t border-[#2a1e14]">
              <div className="flex items-center gap-4 text-[11px] font-mono">
                <span>Showing {displayRows.length > 0 ? (currentPage - 1) * rowsPerPage + 1 : 0} to {Math.min(currentPage * rowsPerPage, displayRows.length)} of {displayRows.length} rows</span>
                {searchQuery && (
                  <span className="text-amber-400 font-semibold">(Filtered from {currentSheet.rows.length})</span>
                )}
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-[11px]">
                  <span>Rows per page:</span>
                  <select
                    value={rowsPerPage}
                    onChange={(e) => {
                      setRowsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="bg-[#201812] border border-[#3e2e1e] rounded px-1.5 py-0.5 text-stone-300 text-[11px] outline-none"
                  >
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>

                <div className="flex items-center gap-1 ml-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className="p-1 rounded bg-[#201812] border border-[#3e2e1e] disabled:opacity-30 hover:bg-[#2d2117] transition-all"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-2 py-0.5 font-mono text-[11px] text-amber-300">
                    {currentPage} / {totalPages}
                  </span>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    className="p-1 rounded bg-[#201812] border border-[#3e2e1e] disabled:opacity-30 hover:bg-[#2d2117] transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* MODAL 1: CREATE NEW SPREADSHEET */}
      <AnimatePresence>
        {isNewDocModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1a140f] border border-[#4a3726] rounded-2xl p-6 max-w-md w-full shadow-2xl flex flex-col gap-4 text-stone-200"
            >
              <div className="flex items-center justify-between border-b border-[#302317] pb-3">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-amber-100 font-serif text-lg">Create New Spreadsheet</h3>
                </div>
                <button 
                  onClick={() => setIsNewDocModalOpen(false)}
                  className="text-stone-400 hover:text-stone-200 text-lg"
                >
                  ×
                </button>
              </div>

              <div className="flex flex-col gap-3 text-xs">
                <div>
                  <label className="block text-stone-400 mb-1 font-mono uppercase text-[10px]">Spreadsheet Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Atharvaveda Botanical Herbarium"
                    value={newDocTitle}
                    onChange={(e) => setNewDocTitle(e.target.value)}
                    className="w-full bg-[#241b14] border border-[#443322] rounded-xl px-3 py-2 text-amber-100 outline-none focus:border-amber-500 font-serif text-sm"
                  />
                </div>

                <div>
                  <label className="block text-stone-400 mb-1 font-mono uppercase text-[10px]">Academic Category</label>
                  <select
                    value={newDocCategory}
                    onChange={(e) => setNewDocCategory(e.target.value as any)}
                    className="w-full bg-[#241b14] border border-[#443322] rounded-xl px-3 py-2 text-stone-200 outline-none focus:border-amber-500 text-xs"
                  >
                    <option value="Ayurveda & Health">Ayurveda & Health</option>
                    <option value="Vedic Scriptures">Vedic Scriptures</option>
                    <option value="Astronomy & Ephemeris">Astronomy & Ephemeris</option>
                    <option value="Epigraphy & Archaeology">Epigraphy & Archaeology</option>
                    <option value="IKS Academic Standards">IKS Academic Standards</option>
                    <option value="Custom Datasets">Custom Datasets</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#302317]">
                <button
                  onClick={() => setIsNewDocModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs text-stone-400 hover:bg-[#251d16] transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (newDocTitle.trim()) {
                      createNewSpreadsheet(newDocTitle.trim(), newDocCategory);
                      setIsNewDocModalOpen(false);
                      setNewDocTitle("");
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition-all shadow-md"
                >
                  Create & Sync to Firestore
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL 2: ADD COLUMN */}
      <AnimatePresence>
        {isAddColumnModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1a140f] border border-[#4a3726] rounded-2xl p-6 max-w-md w-full shadow-2xl flex flex-col gap-4 text-stone-200"
            >
              <div className="flex items-center justify-between border-b border-[#302317] pb-3">
                <div className="flex items-center gap-2">
                  <Table className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-amber-100 font-serif text-lg">Add Column to {currentSheet?.name}</h3>
                </div>
                <button 
                  onClick={() => setIsAddColumnModalOpen(false)}
                  className="text-stone-400 hover:text-stone-200 text-lg"
                >
                  ×
                </button>
              </div>

              <div className="flex flex-col gap-3 text-xs">
                <div>
                  <label className="block text-stone-400 mb-1 font-mono uppercase text-[10px]">Column Header Label</label>
                  <input
                    type="text"
                    placeholder="e.g. Botanical Virya / Potency"
                    value={newColLabel}
                    onChange={(e) => setNewColLabel(e.target.value)}
                    className="w-full bg-[#241b14] border border-[#443322] rounded-xl px-3 py-2 text-amber-100 outline-none focus:border-amber-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-stone-400 mb-1 font-mono uppercase text-[10px]">Data Type</label>
                  <select
                    value={newColType}
                    onChange={(e) => setNewColType(e.target.value as any)}
                    className="w-full bg-[#241b14] border border-[#443322] rounded-xl px-3 py-2 text-stone-200 outline-none focus:border-amber-500 text-xs"
                  >
                    <option value="string">Text / String</option>
                    <option value="sanskrit">Sanskrit (Devanagari / IAST)</option>
                    <option value="number">Numeric (Float / Int)</option>
                    <option value="url">URL Link</option>
                    <option value="boolean">Boolean (True / False)</option>
                    <option value="date">Date / Timestamp</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#302317]">
                <button
                  onClick={() => setIsAddColumnModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs text-stone-400 hover:bg-[#251d16] transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddColumn}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition-all shadow-md"
                >
                  Add Column
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL 3: IMPORT SPREADSHEET FILE */}
      <AnimatePresence>
        {isImportModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1a140f] border border-[#4a3726] rounded-2xl p-6 max-w-lg w-full shadow-2xl flex flex-col gap-4 text-stone-200"
            >
              <div className="flex items-center justify-between border-b border-[#302317] pb-3">
                <div className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-amber-100 font-serif text-lg">Import Spreadsheet to Firestore</h3>
                </div>
                <button 
                  onClick={() => setIsImportModalOpen(false)}
                  className="text-stone-400 hover:text-stone-200 text-lg"
                >
                  ×
                </button>
              </div>

              <div 
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleFileDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`p-8 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                  dragActive 
                    ? "border-amber-500 bg-amber-950/30" 
                    : "border-[#4a3726] bg-[#221a13] hover:border-amber-600/80 hover:bg-[#281f17]"
                }`}
              >
                <FileSpreadsheet className="w-12 h-12 text-amber-400 mb-3" />
                <p className="text-sm font-medium text-amber-100 mb-1">
                  Drag & Drop Excel (.xlsx, .xls) or CSV files here
                </p>
                <p className="text-xs text-stone-400 mb-4">
                  Supports multi-sheet workbooks, automatic header detection and data type inference
                </p>
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl bg-amber-600 text-stone-950 font-bold text-xs shadow-md"
                >
                  Browse Files from Computer
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".xlsx, .xls, .csv, .tsv"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>

              <div className="bg-[#14100c] p-3 rounded-xl border border-[#2d2115] text-[11px] text-stone-400 font-mono">
                <span className="text-amber-400 font-bold">Supported Formats:</span> Microsoft Excel (.xlsx, .xls), Comma-Separated Values (.csv), Tab-Separated (.tsv). Imported data will be saved to Cloud Firestore immediately.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
