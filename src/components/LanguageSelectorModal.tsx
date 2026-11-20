import React, { useState, useMemo } from "react";
import { 
  Globe, 
  Check, 
  X, 
  Languages, 
  Sparkles, 
  BookOpen, 
  Volume2, 
  Sliders,
  Compass,
  Layers,
  ArrowRight,
  Search,
  Filter,
  GraduationCap
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { IndicScriptCode, SupportedLanguageCode } from "../types";

export default function LanguageSelectorModal() {
  const { 
    currentLanguage, 
    currentLanguageMeta, 
    setLanguage, 
    currentScript, 
    setScript, 
    transliterate, 
    isModalOpen, 
    setIsModalOpen, 
    supportedLanguages,
    t
  } = useLanguage();

  const [activeTab, setActiveTab] = useState<"all" | "un_official" | "indian" | "european" | "asian_middle_east" | "scripts">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const scriptsList: { id: IndicScriptCode; name: string; nativeName: string; region: string; sample: string }[] = [
    { id: "Devanagari", name: "Devanagari", nativeName: "देवनागरी", region: "Northern / Pan-Indic", sample: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यम्" },
    { id: "IAST", name: "IAST (Roman Diacritics)", nativeName: "IAST Alphabet", region: "International Academic", sample: "oṃ bhūr bhuvaḥ svaḥ tat savitur vareṇyam" },
    { id: "Tamil", name: "Grantha-Tamil", nativeName: "தமிழ்", region: "Tamil Nadu / Sangam", sample: "ஓம் பூர்புவஸ்வஹ தத்ஸவிதுர்வரேண்யம்" },
    { id: "Telugu", name: "Telugu", nativeName: "తెలుగు", region: "Andhra / Telangana", sample: "ఓం భూర్భువః స్వః తత్సవితుర్వరేణ్యమ్" },
    { id: "Kannada", name: "Kannada", nativeName: "ಕನ್ನಡ", region: "Karnataka / Chalukya", sample: "ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ ತತ್ಸವಿತುರ್ವರೇಣ್ಯಮ್" },
    { id: "Malayalam", name: "Malayalam", nativeName: "മലയാളം", region: "Kerala / Tantra Samuccaya", sample: "ഓം ഭൂർഭുവഃ സ്വഃ തത്സവിതുർവരേണ്യം" },
    { id: "Bengali", name: "Bengali", nativeName: "বাংলা", region: "Bengal / Navya-Nyaya", sample: "ওঁ ভূর্ভুবঃ स्वः তৎসবিতুর্বরেণ্যম্" },
    { id: "Gujarati", name: "Gujarati", nativeName: "ગુજરાતી", region: "Gujarat / Patan Bhandars", sample: "ૐ ભૂર્ભુવઃ સ્વઃ તત્સવિતુર્વરેણ્યમ્" },
    { id: "Odia", name: "Odia", nativeName: "ଓଡ଼ିଆ", region: "Odisha / Kalinga Vastu", sample: "ଓଁ ଭୂର୍ଭୁବଃ ସ୍ୱଃ ତତ୍ସବିତୁର୍ବରେଣ୍ୟମ୍" },
    { id: "Gurmukhi", name: "Gurmukhi", nativeName: "ਗੁਰਮੁਖੀ", region: "Punjab / Sarasvati Basin", sample: "ੴ ਭੂਰ੍ਭੁਵਃ ਸ੍ਵਃ ਤਤ੍ਸਵਿਤੁਰ੍ਵਰੇਣ੍ਯਮ੍" },
    { id: "Brahmi", name: "Ashokan Brahmi", nativeName: "𑀩𑁆𑀭𑀸𑀳𑁆𑀫𑀻", region: "Pan-Indic 3rd BCE Epigraphy", sample: "𑀒𑀁 𑀪𑀽𑀭𑁆𑀪𑀼𑀯𑀂 𑀲𑁆𑀯𑀂" }
  ];

  // Test verse for live dynamic transliteration demo
  const sampleVerseDevanagari = "ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥";

  const handlePlayTTS = (text: string, langCode: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      
      const langMap: Record<string, string> = {
        sa: "hi-IN",
        hi: "hi-IN",
        mr: "mr-IN",
        ta: "ta-IN",
        te: "te-IN",
        kn: "kn-IN",
        ml: "ml-IN",
        bn: "bn-IN",
        gu: "gu-IN",
        or: "or-IN",
        pa: "pa-IN",
        ne: "ne-NP",
        as: "as-IN",
        zh: "zh-CN",
        es: "es-ES",
        ar: "ar-SA",
        fr: "fr-FR",
        ru: "ru-RU",
        de: "de-DE",
        it: "it-IT",
        pt: "pt-PT",
        ja: "ja-JP",
        ko: "ko-KR",
        fa: "fa-IR",
        tr: "tr-TR",
        he: "he-IL",
        el: "el-GR",
        pl: "pl-PL",
        sv: "sv-SE",
        id: "id-ID",
        th: "th-TH",
        vi: "vi-VN",
        cs: "cs-CZ",
        hu: "hu-HU",
        uk: "uk-UA",
        da: "da-DK",
        fi: "fi-FI",
        no: "no-NO",
        ro: "ro-RO",
        la: "la",
        bg: "bg-BG",
        sr: "sr-RS",
        tl: "fil-PH",
        sw: "sw-KE"
      };

      utterance.lang = langMap[langCode] || "en-US";
      window.speechSynthesis.speak(utterance);
    }
  };

  // Filtered by Search Query
  const filteredLanguages = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return supportedLanguages.filter(l => {
      const matchSearch = !q || 
        l.name.toLowerCase().includes(q) || 
        l.nativeName.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q) ||
        l.scholarlyTradition.toLowerCase().includes(q) ||
        l.defaultScript.toLowerCase().includes(q);

      if (!matchSearch) return false;

      if (activeTab === "all") return true;
      if (activeTab === "un_official") return l.isUNOfficial;
      if (activeTab === "indian") return l.category === "indian" || l.region === "indian";
      if (activeTab === "european") return l.category === "european";
      if (activeTab === "asian_middle_east") return l.category === "asian_middle_east";
      return true;
    });
  }, [supportedLanguages, searchQuery, activeTab]);

  const counts = useMemo(() => {
    return {
      all: supportedLanguages.length,
      un: supportedLanguages.filter(l => l.isUNOfficial).length,
      indian: supportedLanguages.filter(l => l.region === "indian").length,
      european: supportedLanguages.filter(l => l.category === "european").length,
      asian: supportedLanguages.filter(l => l.category === "asian_middle_east").length
    };
  }, [supportedLanguages]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#18110b] border border-amber-800/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-amber-100 ring-1 ring-amber-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 md:px-7 py-4 border-b border-amber-900/60 bg-gradient-to-r from-[#281a10] via-[#20140c] to-[#1a100a]">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-950/90 border border-amber-600/60 text-amber-300 shadow-md">
              <Globe className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-serif font-bold text-amber-100 flex items-center gap-2">
                <span>{t("lang.select_language", "Global Language & Script Localization")}</span>
                <span className="text-[11px] font-sans font-semibold px-2 py-0.5 rounded-full bg-amber-900/80 text-amber-200 border border-amber-700/60">
                  {supportedLanguages.length} Languages • 11 Scripts
                </span>
              </h2>
              <p className="text-xs text-amber-300/70 font-sans mt-0.5">
                Current: <strong className="text-amber-200">{currentLanguageMeta.flag} {currentLanguageMeta.name} ({currentLanguageMeta.nativeName})</strong> • Active Script: <strong className="text-amber-400 font-mono">{currentScript}</strong>
              </p>
            </div>
          </div>

          <button 
            onClick={() => setIsModalOpen(false)}
            className="p-2 rounded-xl bg-amber-950/60 hover:bg-amber-900 text-amber-400 hover:text-amber-200 transition-colors border border-amber-800/50 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="px-5 md:px-7 py-3 bg-[#1e130b] border-b border-amber-900/50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 p-1 bg-black/50 rounded-xl border border-amber-900/50 text-xs font-serif overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                activeTab === "all" ? "bg-amber-700 text-amber-100 font-bold shadow-md" : "text-amber-300/70 hover:text-amber-200"
              }`}
            >
              All ({counts.all})
            </button>
            <button
              onClick={() => setActiveTab("un_official")}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                activeTab === "un_official" ? "bg-amber-700 text-amber-100 font-bold shadow-md" : "text-amber-300/70 hover:text-amber-200"
              }`}
            >
              🇺🇳 UN Official ({counts.un})
            </button>
            <button
              onClick={() => setActiveTab("indian")}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                activeTab === "indian" ? "bg-amber-700 text-amber-100 font-bold shadow-md" : "text-amber-300/70 hover:text-amber-200"
              }`}
            >
              🇮🇳 Indian ({counts.indian})
            </button>
            <button
              onClick={() => setActiveTab("european")}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                activeTab === "european" ? "bg-amber-700 text-amber-100 font-bold shadow-md" : "text-amber-300/70 hover:text-amber-200"
              }`}
            >
              🇪🇺 European ({counts.european})
            </button>
            <button
              onClick={() => setActiveTab("asian_middle_east")}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                activeTab === "asian_middle_east" ? "bg-amber-700 text-amber-100 font-bold shadow-md" : "text-amber-300/70 hover:text-amber-200"
              }`}
            >
              🌏 Asian & Middle East ({counts.asian})
            </button>
            <button
              onClick={() => setActiveTab("scripts")}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                activeTab === "scripts" ? "bg-amber-700 text-amber-100 font-bold shadow-md" : "text-amber-300/70 hover:text-amber-200"
              }`}
            >
              📜 Indic Scripts & IAST
            </button>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px]">
            <input
              type="text"
              placeholder="Search language, ISO code or tradition..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-1.5 pl-8 rounded-xl bg-black/60 border border-amber-800/60 text-xs text-amber-100 placeholder-amber-400/40 focus:outline-none focus:border-amber-400"
            />
            <Search className="w-3.5 h-3.5 text-amber-400 absolute left-2.5 top-2.5 pointer-events-none" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-2 text-amber-400/60 hover:text-amber-200 text-xs"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 md:p-7 space-y-6">
          
          {/* SCRIPT TRANSLITERATION PANEL */}
          {(activeTab === "scripts" || activeTab === "all") && !searchQuery && (
            <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-b from-[#25180f] to-[#1e130b] border border-amber-700/60 space-y-3.5 shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-serif font-bold text-amber-200">
                    {t("lang.select_script", "Live Indic Script & Diacritics Transliteration Engine")}
                  </h3>
                </div>
                <span className="text-xs text-amber-300/60 font-sans">
                  Real-time conversion across all Vedic Samhitas, Upanishads and Sutras
                </span>
              </div>

              {/* Dynamic Transliteration Demo Box */}
              <div className="p-4 rounded-xl bg-black/60 border border-amber-800/50 space-y-2">
                <div className="flex items-center justify-between text-xs text-amber-300/80">
                  <span className="font-mono text-[11px]">Brihadaranyaka Upanishad 1.3.28 Live Preview:</span>
                  <span className="text-amber-400 font-mono font-bold bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/60">
                    Current Script: {currentScript}
                  </span>
                </div>
                <p className="text-lg md:text-xl font-serif text-amber-100 tracking-wide leading-relaxed drop-shadow">
                  {transliterate(sampleVerseDevanagari)}
                </p>
              </div>

              {/* Script Buttons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pt-1">
                {scriptsList.map((sc) => {
                  const isSelected = currentScript === sc.id;
                  return (
                    <button
                      key={sc.id}
                      onClick={() => setScript(sc.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between cursor-pointer ${
                        isSelected 
                          ? "bg-amber-900/80 border-amber-400 text-amber-100 shadow-md ring-1 ring-amber-400" 
                          : "bg-black/30 border-amber-900/60 hover:bg-amber-950/40 text-amber-200/80"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-serif font-bold">{sc.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-300" />}
                      </div>
                      <div className="text-sm font-serif text-amber-300 font-bold pt-1">{sc.nativeName}</div>
                      <div className="text-[10px] text-amber-400/50 pt-0.5 truncate">{sc.region}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* LANGUAGES LIST */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-serif font-bold text-amber-200 flex items-center gap-2">
                <span>🌐</span>
                <span>Recognized International & Indian Languages ({filteredLanguages.length})</span>
              </h3>
              <span className="text-xs text-amber-400/60 font-sans">
                Mapped to scholarly traditions, translations & speech pronunciation
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredLanguages.map((lang) => {
                const isSelected = currentLanguage === lang.code;
                return (
                  <div
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                      isSelected 
                        ? "bg-gradient-to-b from-amber-900/80 to-amber-950/90 border-amber-400 shadow-xl ring-2 ring-amber-400/80" 
                        : "bg-[#20140d] border-amber-900/50 hover:bg-[#281910] hover:border-amber-700/80 shadow-md"
                    }`}
                  >
                    {lang.isUNOfficial && (
                      <div className="absolute top-0 right-0 bg-blue-900/60 text-blue-200 border-l border-b border-blue-700/50 text-[9px] font-mono font-bold px-2 py-0.5 rounded-bl-lg">
                        UN OFFICIAL
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-1.5 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{lang.flag}</span>
                          <span className="font-serif font-bold text-amber-100 text-sm leading-tight">{lang.name}</span>
                        </div>
                        {isSelected ? (
                          <span className="px-2 py-0.5 rounded-md bg-amber-400 text-amber-950 font-bold text-[9px] uppercase tracking-wider">
                            ACTIVE
                          </span>
                        ) : (
                          <span className="text-[10px] text-amber-400/60 font-mono px-1.5 py-0.5 rounded bg-black/40 border border-amber-900/40">
                            {lang.code.toUpperCase()}
                          </span>
                        )}
                      </div>

                      <div className="text-base font-serif font-bold text-amber-300 tracking-wide mb-1.5">
                        {lang.nativeName}
                      </div>

                      <p className="text-[11px] text-amber-200/70 line-clamp-2 leading-relaxed font-sans">
                        {lang.scholarlyTradition}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-amber-900/40 flex items-center justify-between text-[11px]">
                      <span className="text-amber-400/60 text-[10px] font-mono">
                        Script: <strong className="text-amber-300/90">{lang.defaultScript}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayTTS(lang.nativeName, lang.code);
                        }}
                        className="p-1.5 rounded-lg bg-black/40 hover:bg-amber-900 text-amber-300 hover:text-amber-100 transition-colors border border-amber-800/40 cursor-pointer"
                        title={`Listen Pronunciation in ${lang.name}`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredLanguages.length === 0 && (
              <div className="text-center py-12 text-stone-400 space-y-2">
                <p className="font-serif text-base text-amber-200">No matching languages found for "{searchQuery}"</p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-1.5 rounded-xl bg-amber-900/60 text-amber-300 text-xs border border-amber-700/60"
                >
                  Clear Search Filter
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 md:px-7 py-3.5 bg-[#1b110a] border-t border-amber-900/60 flex items-center justify-between flex-wrap gap-3">
          <div className="text-xs text-amber-300/80 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Multi-language translations and selected script preferences are applied instantly and preserved locally.</span>
          </div>

          <button
            onClick={() => setIsModalOpen(false)}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-amber-950 font-serif font-bold text-xs transition-all shadow-lg flex items-center gap-1.5 cursor-pointer"
          >
            <span>Apply & Close</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
