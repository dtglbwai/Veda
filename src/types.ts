export interface Scripture {
  verseId: string;
  book: string;
  chapter: string;
  verseNumber: string;
  sanskrit: string;
  translation: string;
  context?: string;
  deepInsight?: string;
}

export interface ScriptureResponse {
  scriptures: Scripture[];
}

export type ScriptureLanguage = "Sanskrit" | "Hindi" | "Marathi" | "Gujarati" | "Bengali" | "Tamil" | "Telugu" | "Kannada" | "Malayalam" | "Odia" | "Punjabi";
export type ExplanationLanguage = "English" | "Hindi" | "Spanish" | "French" | "German" | "Russian" | "Japanese" | "Chinese" | "Arabic" | "Italian" | "Portuguese" | "Korean";
