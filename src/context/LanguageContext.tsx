import React, { createContext, useContext, useState, useEffect } from "react";
import { IndicScriptCode, LanguageMetadata, SupportedLanguageCode } from "../types";
import { SUPPORTED_LANGUAGES, TRANSLATIONS } from "../data/translations";
import { transliterateIndicText } from "../utils/indicTransliteration";

interface LanguageContextType {
  currentLanguage: SupportedLanguageCode;
  currentLanguageMeta: LanguageMetadata;
  setLanguage: (lang: SupportedLanguageCode) => void;
  currentScript: IndicScriptCode;
  setScript: (script: IndicScriptCode) => void;
  t: (key: string, fallback?: string) => string;
  transliterate: (text: string, targetScript?: IndicScriptCode) => string;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  supportedLanguages: LanguageMetadata[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "granth_platform_language";
const SCRIPT_STORAGE_KEY = "granth_platform_script";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguageState] = useState<SupportedLanguageCode>(() => {
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as SupportedLanguageCode;
      if (saved && TRANSLATIONS[saved]) return saved;
    } catch {
      // fallback
    }
    return "en";
  });

  const [currentScript, setCurrentScriptState] = useState<IndicScriptCode>(() => {
    try {
      const saved = localStorage.getItem(SCRIPT_STORAGE_KEY) as IndicScriptCode;
      if (saved) return saved;
    } catch {
      // fallback
    }
    return "Devanagari";
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentLanguageMeta = 
    SUPPORTED_LANGUAGES.find(l => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  const setLanguage = (lang: SupportedLanguageCode) => {
    if (TRANSLATIONS[lang]) {
      setCurrentLanguageState(lang);
      try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      } catch {
        // ignore
      }

      // Automatically set natural script if Indian language
      const meta = SUPPORTED_LANGUAGES.find(l => l.code === lang);
      if (meta && meta.region === "indian" && meta.defaultScript !== "Latin") {
        setScript(meta.defaultScript as IndicScriptCode);
      }
    }
  };

  const setScript = (script: IndicScriptCode) => {
    setCurrentScriptState(script);
    try {
      localStorage.setItem(SCRIPT_STORAGE_KEY, script);
    } catch {
      // ignore
    }
  };

  const t = (key: string, fallback?: string): string => {
    const langDict = TRANSLATIONS[currentLanguage];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    // Fallback to English dictionary
    if (TRANSLATIONS.en && TRANSLATIONS.en[key]) {
      return TRANSLATIONS.en[key];
    }
    return fallback || key;
  };

  const transliterate = (text: string, targetScript?: IndicScriptCode): string => {
    const scriptToUse = targetScript || currentScript;
    return transliterateIndicText(text, scriptToUse);
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        currentLanguageMeta,
        setLanguage,
        currentScript,
        setScript,
        t,
        transliterate,
        isModalOpen,
        setIsModalOpen,
        supportedLanguages: SUPPORTED_LANGUAGES
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
