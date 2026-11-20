import * as XLSX from "xlsx";
import { FirebaseSpreadsheetDoc, SheetTab, SpreadsheetColumn, SpreadsheetRow, SpreadsheetImportResult } from "../types/spreadsheet";

/**
 * Export a multi-sheet spreadsheet document to Excel (.xlsx) file
 */
export function exportToExcel(doc: FirebaseSpreadsheetDoc, fileName?: string): void {
  const wb = XLSX.utils.book_new();

  doc.sheets.forEach((sheet) => {
    // Convert rows to array of objects with column labels or keys
    const headers = sheet.columns.map(c => c.label || c.key);
    const keys = sheet.columns.map(c => c.key);

    const sheetData: any[][] = [];
    // Row 1: Headers
    sheetData.push(headers);

    // Rows: Data
    sheet.rows.forEach(row => {
      const rowArr = keys.map(k => {
        const val = row[k];
        return val !== undefined && val !== null ? val : "";
      });
      sheetData.push(rowArr);
    });

    const ws = XLSX.utils.aoa_to_sheet(sheetData);

    // Auto-fit column widths
    const colWidths = sheet.columns.map(c => ({
      wch: Math.max(c.width ? Math.round(c.width / 8) : 15, (c.label || c.key).length + 4)
    }));
    ws["!cols"] = colWidths;

    // Sanitize sheet name (Excel limit 31 chars, no special chars)
    const sanitizedSheetName = (sheet.name || "Sheet").replace(/[\/\\?*:[\]]/g, "_").slice(0, 31);
    XLSX.utils.book_append_sheet(wb, ws, sanitizedSheetName);
  });

  const finalFileName = `${(fileName || doc.title).replace(/[^a-zA-Z0-9_-]/g, "_")}_${new Date().toISOString().split("T")[0]}.xlsx`;
  XLSX.writeFile(wb, finalFileName);
}

/**
 * Export active sheet to CSV
 */
export function exportToCsv(sheet: SheetTab, fileName: string = "export.csv"): void {
  const keys = sheet.columns.map(c => c.key);
  const headers = sheet.columns.map(c => c.label || c.key);

  const sheetData: any[][] = [headers];
  sheet.rows.forEach(row => {
    const rowArr = keys.map(k => row[k] !== undefined && row[k] !== null ? row[k] : "");
    sheetData.push(rowArr);
  });

  const ws = XLSX.utils.aoa_to_sheet(sheetData);
  const csv = XLSX.utils.sheet_to_csv(ws);

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", fileName.endsWith(".csv") ? fileName : `${fileName}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Export active sheet or document to JSON
 */
export function exportToJson(doc: FirebaseSpreadsheetDoc, fileName: string = "export.json"): void {
  const jsonStr = JSON.stringify(doc, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", fileName.endsWith(".json") ? fileName : `${fileName}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Parse an uploaded spreadsheet file (.xlsx, .xls, .csv, .tsv) into structured sheets
 */
export async function parseSpreadsheetFile(file: File): Promise<SpreadsheetImportResult> {
  const buffer = await file.arrayBuffer();
  const wb = XLSX.read(buffer, { type: "array" });

  const sheets: SpreadsheetImportResult["sheets"] = [];

  wb.SheetNames.forEach((sheetName) => {
    const ws = wb.Sheets[sheetName];
    // Read raw data as array of arrays
    const rawData: any[][] = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });

    if (rawData.length === 0) return;

    // First row as headers
    const headerRow = rawData[0] || [];
    const columns: SpreadsheetColumn[] = headerRow.map((header: any, index: number) => {
      const label = String(header || `Col_${index + 1}`).trim();
      const key = label.toLowerCase().replace(/[^a-z0-9_]/g, "_").replace(/^_+|_+$/g, "") || `col_${index + 1}`;
      
      // Infer type from sample rows
      let inferredType: SpreadsheetColumn["type"] = "string";
      for (let r = 1; r < Math.min(rawData.length, 10); r++) {
        const sampleVal = rawData[r]?.[index];
        if (typeof sampleVal === "number") {
          inferredType = "number";
          break;
        } else if (typeof sampleVal === "boolean") {
          inferredType = "boolean";
          break;
        } else if (typeof sampleVal === "string" && (sampleVal.startsWith("http://") || sampleVal.startsWith("https://"))) {
          inferredType = "url";
          break;
        } else if (typeof sampleVal === "string" && /[\u0900-\u097F]/.test(sampleVal)) {
          inferredType = "sanskrit";
          break;
        }
      }

      return {
        key,
        label,
        type: inferredType,
        width: Math.max(120, label.length * 10)
      };
    });

    const rows: SpreadsheetRow[] = [];
    for (let r = 1; r < rawData.length; r++) {
      const rawRow = rawData[r];
      if (!rawRow || rawRow.every((cell: any) => cell === "" || cell === null || cell === undefined)) {
        continue; // skip empty rows
      }

      const rowObj: SpreadsheetRow = {};
      columns.forEach((col, idx) => {
        let cellVal = rawRow[idx];
        if (cellVal === undefined || cellVal === null) cellVal = "";
        rowObj[col.key] = cellVal;
      });
      rows.push(rowObj);
    }

    sheets.push({
      name: sheetName,
      rowCount: rows.length,
      columnCount: columns.length,
      columns,
      rows
    });
  });

  return {
    fileName: file.name,
    fileSize: file.size,
    sheets
  };
}
