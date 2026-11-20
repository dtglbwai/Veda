export interface SpreadsheetCell {
  value: string | number | boolean | null;
  formatted?: string;
  type?: "string" | "number" | "boolean" | "date" | "url" | "sanskrit";
  formula?: string;
}

export type SpreadsheetRow = Record<string, string | number | boolean | null>;

export interface SpreadsheetColumn {
  key: string;
  label: string;
  type: "string" | "number" | "boolean" | "date" | "url" | "sanskrit";
  width?: number;
  description?: string;
}

export interface SheetTab {
  id: string;
  name: string;
  columns: SpreadsheetColumn[];
  rows: SpreadsheetRow[];
  description?: string;
}

export interface FirebaseSpreadsheetDoc {
  id: string;
  title: string;
  description: string;
  category: "Ayurveda & Health" | "Vedic Scriptures" | "Astronomy & Ephemeris" | "Epigraphy & Archaeology" | "IKS Academic Standards" | "Custom Datasets";
  tags: string[];
  sheets: SheetTab[];
  rowCount: number;
  columnCount: number;
  createdBy: string;
  authorName?: string;
  isPublic: boolean;
  createdAt: string | number;
  updatedAt: string | number;
  syncStatus?: "synced" | "syncing" | "local_only" | "error";
}

export interface SpreadsheetImportResult {
  fileName: string;
  fileSize: number;
  sheets: {
    name: string;
    rowCount: number;
    columnCount: number;
    columns: SpreadsheetColumn[];
    rows: SpreadsheetRow[];
  }[];
}
