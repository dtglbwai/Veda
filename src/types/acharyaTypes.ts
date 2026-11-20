export type AcharyaId = 
  | "bhaskaracharya"
  | "aryabhata"
  | "patanjali"
  | "bhagavati_rishikas"
  | "brahmagupta"
  | "varahamihira"
  | "madhava_kerala"
  | "kanada"
  | "baudhayana"
  | "pingala";

export interface KeyVerseOrTheorem {
  id: string;
  sanskrit: string;
  transliteration: string;
  translation: string;
  scientificSignificance: string;
  mathematicalProofOrExplanation?: string;
  sourceTreatise: string;
  chapterOrSutraNumber: string;
  practicalExample?: string;
}

export interface TreatiseDetail {
  id: string;
  title: string;
  sanskritTitle: string;
  totalVersesOrChapters: string;
  coreThemes: string[];
  summary: string;
  keyContributions: string[];
  sampleVerses: KeyVerseOrTheorem[];
}

export interface AcharyaProfile {
  id: AcharyaId;
  name: string;
  sanskritName: string;
  honorific: string;
  era: string;
  region: string;
  traditionOrSchool: string;
  domains: string[];
  biography: string;
  magnusOpus: string;
  treatises: TreatiseDetail[];
  quote: {
    sanskrit: string;
    transliteration: string;
    meaning: string;
  };
  globalImpact: string;
}
