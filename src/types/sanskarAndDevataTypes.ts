export type SanskarStage =
  | "prenatal"      // गर्भाधान, पुंसवन, सीमन्तोन्नयन
  | "childhood"     // जातकर्म, नामकरण, निष्क्रमण, अन्नप्राशन, चूडाकरण, कर्णवेध
  | "educational"   // विद्यारम्भ, उपनयन, वेदारम्भ, केशान्त, समावर्तन
  | "grihastha"     // विवाह
  | "transcendent"; // अन्त्येष्टि

export interface SanskarMantra {
  id: string;
  title: string;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  sourceText: string;
}

export interface SanskarItem {
  id: string;
  canonicalNumber: number; // 1 to 16
  name: string;
  sanskritName: string;
  stage: SanskarStage;
  stageLabel: string;
  idealTime: string;
  scripturalAuthority: string; // e.g. "Paraskara Grihyasutra 1.11, Manu Smriti 2.26"
  overview: string;
  ritualProcedure: string[];
  mantras: SanskarMantra[];
  essentialSamagri: string[];
  bioSpiritualSignificance: string;
  ayurvedicOrScientificInsight: string;
}

export type DevataGroup = "vasu" | "rudra" | "aditya" | "indra_prajapati";

export interface KotiDevata {
  id: string;
  group: DevataGroup;
  groupName: string;
  groupSanskrit: string;
  orderNumber: number;
  name: string;
  sanskritName: string;
  cosmicElement: string;
  microcosmicCorrespondence: string; // Body / Mind / Prana correspondence in Brihadaranyaka
  macrocosmicFunction: string;       // Role in cosmic sustenance
  associatedMonthOrDirection?: string;
  vedicMantra: {
    sanskrit: string;
    transliteration: string;
    meaning: string;
    source: string;
  };
  symbolOrIcon: string;
  philosophicalSignificance: string;
}

export interface ReductionLevel {
  level: number | string; // 3303, 303, 33, 6, 3, 2, 1.5, 1
  sanskritTerm: string;
  constituents: string[];
  dialogueExcerpt: string;
  philosophicalEssence: string;
}

export interface Gautama40Item {
  category: "Paka-Yajnas (पाकयज्ञाः)" | "Havir-Yajnas (हविर्यज्ञाः)" | "Soma-Yajnas (सोमयज्ञाः)" | "Atma-Gunas (आत्मगुणाः)";
  items: {
    sanskritName: string;
    englishName: string;
    description: string;
  }[];
}
