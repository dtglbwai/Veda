import { ExplanationLanguage } from "../types";

export interface TranslationLanguageMeta {
  id: ExplanationLanguage;
  name: string;
  nativeName: string;
  region: "indian" | "international";
  flag: string;
  scriptName: string;
  locale: string;
  description: string;
}

export const TRANSLATION_LANGUAGES: TranslationLanguageMeta[] = [
  // ================= 1. INDIAN CLASSICAL & REGIONAL LANGUAGES =================
  {
    id: "Hindi",
    name: "Hindi",
    nativeName: "हिन्दी",
    region: "indian",
    flag: "🇮🇳",
    scriptName: "Devanagari",
    locale: "hi-IN",
    description: "National Standard & Ayush Classical Exegesis"
  },
  {
    id: "Sanskrit",
    name: "Sanskrit (Chhaya)",
    nativeName: "संस्कृतम् (छाया)",
    region: "indian",
    flag: "🕉️",
    scriptName: "Devanagari",
    locale: "hi-IN",
    description: "Classical Shastric Commentary & Padartha"
  },
  {
    id: "Marathi",
    name: "Marathi",
    nativeName: "मराठी",
    region: "indian",
    flag: "🚩",
    scriptName: "Devanagari",
    locale: "mr-IN",
    description: "Pune IKS Cluster (BORI, Deccan College & Sant Sahitya)"
  },
  {
    id: "Tamil",
    name: "Tamil",
    nativeName: "தமிழ்",
    region: "indian",
    flag: "🛕",
    scriptName: "Tamil",
    locale: "ta-IN",
    description: "Sangam Epigraphy, Saiva Siddhanta & Siddha"
  },
  {
    id: "Telugu",
    name: "Telugu",
    nativeName: "తెలుగు",
    region: "indian",
    flag: "🏛️",
    scriptName: "Telugu",
    locale: "te-IN",
    description: "Andhra Shastra, Vijayanagara & Drik Ganita"
  },
  {
    id: "Kannada",
    name: "Kannada",
    nativeName: "ಕನ್ನಡ",
    region: "indian",
    flag: "🌾",
    scriptName: "Kannada",
    locale: "kn-IN",
    description: "Chalukya-Hoysala Inscriptions & Dvaita/Visishtadvaita"
  },
  {
    id: "Malayalam",
    name: "Malayalam",
    nativeName: "മലയാളം",
    region: "indian",
    flag: "🌴",
    scriptName: "Malayalam",
    locale: "ml-IN",
    description: "Kerala School of Mathematics & Tantra Samuccaya"
  },
  {
    id: "Bengali",
    name: "Bengali",
    nativeName: "বাংলা",
    region: "indian",
    flag: "🎨",
    scriptName: "Bengali",
    locale: "bn-IN",
    description: "Navya-Nyaya Logic & Gaudiya Vedanta"
  },
  {
    id: "Gujarati",
    name: "Gujarati",
    nativeName: "ગુજરાતી",
    region: "indian",
    flag: "🪷",
    scriptName: "Gujarati",
    locale: "gu-IN",
    description: "Patan Jain & Vedic Manuscript Archives"
  },
  {
    id: "Odia",
    name: "Odia",
    nativeName: "ଓଡ଼ିଆ",
    region: "indian",
    flag: "🐚",
    scriptName: "Odia",
    locale: "or-IN",
    description: "Kalinga Vastu Shastra & Jagannatha Tantra"
  },
  {
    id: "Punjabi",
    name: "Punjabi",
    nativeName: "ਪੰਜਾਬੀ",
    region: "indian",
    flag: "⚔️",
    scriptName: "Gurmukhi",
    locale: "pa-IN",
    description: "Sarasvati-Sindhu Basin Vedic Tradition"
  },
  {
    id: "Assamese",
    name: "Assamese",
    nativeName: "অসমীয়া",
    region: "indian",
    flag: "🌿",
    scriptName: "Bengali-Assamese",
    locale: "as-IN",
    description: "Kamarupa Tantra & Sankaradeva Vaishnavism"
  },

  // ================= 2. INTERNATIONAL RECOGNIZED LANGUAGES =================
  {
    id: "English",
    name: "English",
    nativeName: "English",
    region: "international",
    flag: "🇬🇧",
    scriptName: "Latin",
    locale: "en-US",
    description: "Global Academic Translation & Critical Apparatus"
  },
  {
    id: "Spanish",
    name: "Spanish",
    nativeName: "Español",
    region: "international",
    flag: "🇪🇸",
    scriptName: "Latin",
    locale: "es-ES",
    description: "Ibero-American Indic Studies & Philosophy"
  },
  {
    id: "French",
    name: "French",
    nativeName: "Français",
    region: "international",
    flag: "🇫🇷",
    scriptName: "Latin",
    locale: "fr-FR",
    description: "Indologie Française & EFEO Epigraphy"
  },
  {
    id: "German",
    name: "German",
    nativeName: "Deutsch",
    region: "international",
    flag: "🇩🇪",
    scriptName: "Latin",
    locale: "de-DE",
    description: "Indogermanische Sprachwissenschaft & Tübingen Archive"
  },
  {
    id: "Russian",
    name: "Russian",
    nativeName: "Русский",
    region: "international",
    flag: "🇷🇺",
    scriptName: "Cyrillic",
    locale: "ru-RU",
    description: "Russian Academy of Sciences Sanskritology"
  },
  {
    id: "Japanese",
    name: "Japanese",
    nativeName: "日本語",
    region: "international",
    flag: "🇯🇵",
    scriptName: "Kanji/Kana",
    locale: "ja-JP",
    description: "Kyoto & Tokyo University Vedic Studies"
  },
  {
    id: "Chinese",
    name: "Chinese",
    nativeName: "中文",
    region: "international",
    flag: "🇨🇳",
    scriptName: "Simplified Hanzi",
    locale: "zh-CN",
    description: "Xuanzang & Tang Dynasty Sanskrit Sutra Concordance"
  },
  {
    id: "Arabic",
    name: "Arabic",
    nativeName: "العربية",
    region: "international",
    flag: "🇸🇦",
    scriptName: "Arabic",
    locale: "ar-SA",
    description: "Al-Biruni Tarikh al-Hind & Classical Translation"
  },
  {
    id: "Italian",
    name: "Italian",
    nativeName: "Italiano",
    region: "international",
    flag: "🇮🇹",
    scriptName: "Latin",
    locale: "it-IT",
    description: "Italian Institute of Oriental Studies (IsIAO)"
  },
  {
    id: "Portuguese",
    name: "Portuguese",
    nativeName: "Português",
    region: "international",
    flag: "🇵🇹",
    scriptName: "Latin",
    locale: "pt-PT",
    description: "Lusophone Indic Epigraphy & Vedanta Studies"
  },
  {
    id: "Korean",
    name: "Korean",
    nativeName: "한국어",
    region: "international",
    flag: "🇰🇷",
    scriptName: "Hangul",
    locale: "ko-KR",
    description: "Dongguk University Buddhist & Sanskrit Studies"
  }
];

export const INDIAN_TRANSLATION_LANGUAGES = TRANSLATION_LANGUAGES.filter(l => l.region === "indian");
export const INTERNATIONAL_TRANSLATION_LANGUAGES = TRANSLATION_LANGUAGES.filter(l => l.region === "international");

export function getTranslationLanguageMeta(id: ExplanationLanguage): TranslationLanguageMeta {
  return TRANSLATION_LANGUAGES.find(l => l.id === id) || TRANSLATION_LANGUAGES.find(l => l.id === "English")!;
}
