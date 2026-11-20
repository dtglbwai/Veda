export type PoojaCategory = 
  | "shodashopachara"
  | "ganesha"
  | "shiva"
  | "lakshmi"
  | "vishnu"
  | "durga"
  | "hanuman"
  | "surya"
  | "krishna"
  | "navagraha"
  | "agnihotra";

export interface PoojaMantra {
  id: string;
  title: string;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  sourceText: string;
  kriya: string; // The ritual action to perform (e.g. "Offer water with spoon")
  samagriRequired?: string[];
  mudra?: string;
  significance?: string;
}

export interface PoojaStep {
  stepNumber: number;
  stepName: string;
  sanskritName: string;
  category: "purvanga" | "pradhana" | "uttaranga";
  kriyaInstruction: string;
  mantras: PoojaMantra[];
  itemsNeeded: string[];
  sacredSoundPrompt?: "bell" | "shankha" | "om";
}

export interface DeityPoojaVidhi {
  id: PoojaCategory;
  name: string;
  sanskritName: string;
  title: string;
  deity: string;
  scripturalAuthority: string;
  idealTime: string;
  samagriList: { item: string; sanskrit: string; quantity: string; purpose: string }[];
  steps: PoojaStep[];
  specialStotras?: { title: string; sanskrit: string; transliteration: string; meaning: string }[];
  aartiText?: { title: string; sanskrit: string; transliteration: string };
}

export interface SamagriItem {
  id: string;
  name: string;
  sanskritName: string;
  category: "panchopachara" | "abhisheka" | "shringara" | "naivedya" | "homa";
  description: string;
  scientificOrSpiritualReason: string;
}

export interface SankalpaParams {
  kaliyugaYear: number;
  vikramSamvat: number;
  ayana: "Uttarayana" | "Dakshinayana";
  ritu: "Vasanta" | "Grishma" | "Varsha" | "Sharad" | "Hemanta" | "Shishira";
  masa: string;
  paksha: "Shukla" | "Krishna";
  tithi: string;
  vasara: string;
  nakshatra: string;
  gotra: string;
  sadhakaName: string;
  placeName: string;
  deityTarget: string;
  pujaPurpose: string;
}
