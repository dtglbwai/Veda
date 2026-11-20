export type PaniniWorkId = 
  | "ashtadhyayi"
  | "shiva_sutras"
  | "dhatupatha"
  | "ganapatha"
  | "unadipatha"
  | "linganushasana"
  | "paniniya_shiksha"
  | "jambavati_vijaya"
  | "computational_panini";

export interface ShivaSutraItem {
  id: number;
  sutra: string;
  transliteration: string;
  itMarker: string;
  letters: string[];
  vowelOrConsonant: "Vowels (Ac)" | "Semi-vowels (Antastha)" | "Nasals" | "Voiced Aspirates" | "Voiced Non-aspirates" | "Unvoiced Aspirates" | "Unvoiced Non-aspirates" | "Sibilants & Aspirate (Śal)";
  pratyaharaSignificance: string;
  modernPhoneticClass: string;
}

export interface PratyaharaDefinition {
  name: string;
  startingSound: string;
  endingMarker: string;
  includedSounds: string[];
  totalSounds: number;
  significance: string;
  sampleSutras: string[];
}

export interface AshtadhyayiAdhyaya {
  adhyaya: number;
  title: string;
  padasCount: number;
  sutraCountEstimate: number;
  primaryThemes: string[];
  keySutras: {
    number: string; // e.g., "1.1.1"
    sutra: string;
    transliteration: string;
    type: "Samjna (Definition)" | "Paribhasha (Metarule)" | "Vidhi (Operational)" | "Adhikara (Governing)" | "Niyama (Restriction)" | "Pratishedha (Prohibition)" | "Atidesha (Extension)";
    meaning: string;
    scholarlyExplanation: string;
    applicationExample?: string;
  }[];
}

export interface DhatuClass {
  ganaNumber: number;
  ganaName: string;
  ganaNameSanskrit: string;
  vikarana: string;
  thematicSuffix: string;
  approximateCount: number;
  description: string;
  roots: {
    root: string;
    transliteration: string;
    anubandha: string;
    meaningEnglish: string;
    meaningSanskrit: string;
    pada: "Parasmaipada" | "Atmanepada" | "Ubhayapada";
    itStatus: "Set" | "Anit" | "Vet";
    presentThirdPersonSingular: string; // e.g. "भवति"
    pastImperfect: string; // e.g. "अभवत्"
    future: string; // e.g. "भविष्यति"
    perfect: string; // e.g. "बभूव"
    exampleSentence: string;
  }[];
}

export interface GanapathaGroup {
  id: string;
  name: string;
  nameSanskrit: string;
  ashtadhyayiReference: string;
  description: string;
  significance: string;
  sampleStems: string[];
  derivationalOutcome: string;
}

export interface UnadiSutraRule {
  sutraNumber: string;
  sutra: string;
  transliteration: string;
  affix: string;
  derivedWords: {
    word: string;
    root: string;
    meaning: string;
    linguisticNote: string;
  }[];
  explanation: string;
}

export interface LinganushasanaSection {
  gender: "Masculine (Pullinga)" | "Feminine (Strilinga)" | "Neuter (Napumsakalinga)" | "Variable / Common (Sarvalinga & Dvilinga)";
  rules: {
    category: string;
    sanskritRule: string;
    englishExplanation: string;
    examples: string[];
    exceptions?: string[];
  }[];
}

export interface PaniniyaShikshaVerse {
  verseNumber: number;
  sanskrit: string;
  transliteration: string;
  translation: string;
  topic: "Invocation & Divine Origin of Vak" | "Places of Articulation (Sthana)" | "Efforts (Prayatna)" | "Faults & Virtues in Recitation" | "Accents & Metres";
  deepSignificance: string;
}

export interface JambavatiKavyaVerse {
  id: string;
  title: string;
  context: string;
  sanskrit: string;
  transliteration: string;
  translation: string;
  poeticMeter: string;
  literarySource: string; // e.g., "Vallabhadeva Subhashitavali / Jalhana Suktimuktavali"
  criticalAppraisal: string;
}

export interface ComputationalPaniniFeature {
  id: string;
  title: string;
  computerScienceConcept: string;
  paninianCounterpart: string;
  academicCitation: string;
  explanation: string;
  interactiveModel: string;
}
