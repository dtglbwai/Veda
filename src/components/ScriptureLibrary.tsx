import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  BookOpen, 
  Scroll, 
  Search, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause,
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Atom, 
  Compass, 
  Orbit, 
  Calendar, 
  Cpu, 
  Layers, 
  BrainCircuit, 
  RefreshCw, 
  Send, 
  Languages, 
  FileText,
  Bookmark,
  Share2,
  ExternalLink,
  Sliders,
  Check,
  Flame,
  Calculator,
  Award,
  GitFork,
  Database,
  Plug,
  Library,
  School,
  GraduationCap,
  Video
} from "lucide-react";
import { SCRIPTURE_CORPUS, VerseCorpusItem } from "../data/scriptureCorpus";
import { Scripture, ScriptureLanguage, ExplanationLanguage } from "../types";
import { 
  TRANSLATION_LANGUAGES, 
  INDIAN_TRANSLATION_LANGUAGES, 
  INTERNATIONAL_TRANSLATION_LANGUAGES,
  getTranslationLanguageMeta 
} from "../data/translationLanguages";
import { 
  resolveVerseTranslation, 
  VerseTranslationData 
} from "../data/scriptureTranslationsData";
import { NavTab } from "./Navbar";
import { useLanguage } from "../context/LanguageContext";
import { IndicScriptCode } from "../types";

interface ScriptureLibraryProps {
  onNavigateToResearch?: (tab: NavTab, prefillTopic?: string) => void;
}

interface SubjectCategoryMeta {
  name: string;
  icon: string;
  desc: string;
  badge: string;
}

const SUBJECT_CATEGORIES: SubjectCategoryMeta[] = [
  { name: "All Sacred Works", icon: "🕉️", desc: "Complete library across all Vedic & Classical branches", badge: "ALL CORPUS" },
  { name: "Vedas", icon: "📜", desc: "Rigveda (Foremost of all Scriptures), Samaveda, Yajurveda & Atharvaveda", badge: "RIGVEDA & SAMHITAS" },
  { name: "Shastras & Astronomy", icon: "🪐", desc: "Surya Siddhanta, Aryabhatiya, Jyotisha & Ephemeris", badge: "ASTRONOMY" },
  { name: "Upanishads", icon: "🧘", desc: "Mandukya, Isha, Kena, Katha, Chandogya & Vedanta", badge: "VEDANTA" },
  { name: "Darshana & Yoga", icon: "☸️", desc: "Patanjali Yoga Sutras, Nyaya, Vaisheshika & Samkhya", badge: "SHAD DARSHANA" },
  { name: "Epics & Gita", icon: "🏹", desc: "Bhagavad Gita, Mahabharata & Ramayana Shlokas", badge: "ITIHASA" },
];

const CATEGORIES = SUBJECT_CATEGORIES.map(c => c.name);

const HOME_TOP_RESEARCH_SUBJECTS: {
  id: NavTab;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  badge: string;
}[] = [
  { id: "pooja_vidhi", label: "Pooja Vidhi & Mantras", icon: Flame, desc: "16-Step Shodashopachara, 10 Deity Liturgies & Sankalpa", badge: "LITURGY" },
  { id: "sanskar_and_devatas", label: "16 Sanskars & 33 Devatas", icon: Sparkles, desc: "16 Samskaras & 33 Koti Cosmic Pantheon", badge: "SACRAMENTS" },
  { id: "panini_works", label: "Works of Sage Panini", icon: BookOpen, desc: "Ashtadhyayi, 14 Shiva Sutras & AI Sandhi", badge: "GRAMMAR" },
  { id: "acharya_works", label: "Works of Sages & Acharyas", icon: Calculator, desc: "Bhaskaracharya, Aryabhata, Patanjali & Kerala Math", badge: "MATHEMATICS" },
  { id: "contemporary_researchers", label: "Modern Scholars & YouTubers", icon: Video, desc: "Praveen Mohan, Nilesh Oak (5561 BCE), Meenakshi Jain, BeerBiceps TRS, Tarun Bindlish, Rupa Bhaty", badge: "RESEARCHERS" },
  { id: "csu_sanskrit_nic", label: "Central Sanskrit University (CSU)", icon: School, desc: "sanskrit.nic.in: UG/PG/B.Tech SKS, 12 Campuses, Shabda/Dhatu Tools & 35-Vol Dictionary", badge: "SANSKRIT.NIC.IN" },
  { id: "sanatan_philosophers", label: "Global Sanatan Philosophers", icon: Award, desc: "Aryavarta, Gandhara, Persia, Greece, China & 12 Mahajanas", badge: "PHILOSOPHY" },
  { id: "manvantara_tree", label: "1st-7th Manvantara Tree", icon: GitFork, desc: "Solar, Lunar, Yadu, Paurava Lines & Kalpa Math", badge: "COSMOLOGY" },
  { id: "vedic_ebooks", label: "Vedic Scripture E-Books", icon: BookOpen, desc: "Internet Archive, GRETIL, BORI, DLI Open Repos", badge: "E-BOOKS" },
  { id: "international_ebooks", label: "Indology Monographs", icon: Library, desc: "Frits Staal, Subhash Kak, Kim Plofker Corpus", badge: "RESEARCH" },
  { id: "pune_iks_institutes", label: "Pune IKS Academies", icon: School, desc: "BSIKS, MIT-SVS, BORI Vedic Curriculum & Syllabi", badge: "IKS STANDARDS" },
  { id: "database_spreadsheets", label: "Cloud DB & Spreadsheets", icon: Database, desc: "Live Firestore Sync & Multi-Sheet Excel/CSV", badge: "FIRESTORE" },
  { id: "hardware_connectors", label: "Hardware & 50+ Connectors", icon: Plug, desc: "Web Serial, WebUSB & IEEE Pinout Standards", badge: "HARDWARE" },
  { id: "traditions", label: "Sacred Physics & Traditions", icon: Flame, desc: "Yajna Agni, Vedic Acoustics & Living Shastras", badge: "PHYSICS" },
];

const PRESET_BOOKS = [
  "Rig Veda",
  "Surya Siddhanta",
  "Aryabhatiya",
  "Baudhayana Sulba Sutras",
  "Mandukya Upanishad",
  "Bhagavad Gita",
  "Patanjali Yoga Sutras",
  "Sama Veda",
  "Yajur Veda",
  "Atharva Veda",
  "Isha Upanishad",
  "Agamas & Shilpa Shastras"
];

export default function ScriptureLibrary({ onNavigateToResearch }: ScriptureLibraryProps) {
  const { currentLanguageMeta, currentScript, setScript, transliterate, setIsModalOpen, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All Sacred Works");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVerseIndex, setActiveVerseIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"palm_leaf" | "pothi" | "interlinear" | "ocean_vedanta">("palm_leaf");
  
  // Custom Dynamic AI Scripture search state
  const [customBookQuery, setCustomBookQuery] = useState("");
  const [isFetchingCustom, setIsFetchingCustom] = useState(false);
  const [customScriptures, setCustomScriptures] = useState<VerseCorpusItem[]>([]);

  // Language settings
  const [displayScript, setDisplayScript] = useState<"Devanagari" | "IAST" | "Both">("Both");
  const [explanationLang, setExplanationLang] = useState<ExplanationLanguage>("English");
  const [runtimeTranslations, setRuntimeTranslations] = useState<Record<string, Partial<Record<ExplanationLanguage, VerseTranslationData>>>>({});
  const [isTranslating, setIsTranslating] = useState(false);

  // Top Subjects & Selection Dropdown States
  const [isTopSubjectsHeroOpen, setIsTopSubjectsHeroOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isBookDropdownOpen, setIsBookDropdownOpen] = useState(false);

  const topSubjectsHeroRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const bookDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (topSubjectsHeroRef.current && !topSubjectsHeroRef.current.contains(e.target as Node)) {
        setIsTopSubjectsHeroOpen(false);
      }
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(e.target as Node)) {
        setIsCategoryDropdownOpen(false);
      }
      if (bookDropdownRef.current && !bookDropdownRef.current.contains(e.target as Node)) {
        setIsBookDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Archaeo-Science Drawer toggle
  const [showScienceDossier, setShowScienceDossier] = useState(true);

  // Audio Vedic Chant & Tanpura
  const [isPlayingChant, setIsPlayingChant] = useState(false);
  const [isTanpuraActive, setIsTanpuraActive] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const activeOscillatorsRef = useRef<OscillatorNode[]>([]);
  const tanpuraOscsRef = useRef<{ oscs: OscillatorNode[]; gain: GainNode } | null>(null);

  // Interactive AI Sage discussion
  const [chatMessage, setChatMessage] = useState("");
  const [chatAnswer, setChatAnswer] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);

  // Combine pre-loaded corpus with any fetched custom items — Rigveda kept strictly on top as primordial Shruti
  const allVerses: VerseCorpusItem[] = [
    ...customScriptures.filter(s => s.book.toLowerCase().includes("rig")),
    ...SCRIPTURE_CORPUS.filter(s => s.book.toLowerCase().includes("rig")),
    ...customScriptures.filter(s => !s.book.toLowerCase().includes("rig")),
    ...SCRIPTURE_CORPUS.filter(s => !s.book.toLowerCase().includes("rig"))
  ];

  // Filter verses
  const filteredVerses = allVerses.filter(v => {
    const matchesCat = selectedCategory === "All Sacred Works" || v.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      v.book.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.devanagari.includes(searchQuery) ||
      v.iast.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.philosophicalStream.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const currentVerse = filteredVerses[activeVerseIndex] || filteredVerses[0] || SCRIPTURE_CORPUS[0];

  // Active translation resolved from precompiled canonical database or runtime AI cache
  const activeTranslation = useMemo(() => {
    if (!currentVerse) return { translation: "", deepInsight: "", isPrecompiled: true };
    return resolveVerseTranslation(currentVerse, explanationLang, runtimeTranslations);
  }, [currentVerse, explanationLang, runtimeTranslations]);

  const selectedLangMeta = useMemo(() => {
    return getTranslationLanguageMeta(explanationLang);
  }, [explanationLang]);

  // Speech synthesis for translated text using native locale
  const playTranslationTTS = (text: string, lang: ExplanationLanguage) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const meta = getTranslationLanguageMeta(lang);
      utterance.lang = meta.locale;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Dynamic on-demand translation fallback when switching to uncompiled language or custom verse
  useEffect(() => {
    if (!currentVerse || explanationLang === "English") return;
    const existing = resolveVerseTranslation(currentVerse, explanationLang, runtimeTranslations);
    if (existing.isPrecompiled) return;

    let isMounted = true;
    setIsTranslating(true);
    fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: currentVerse.translation,
        deepInsight: currentVerse.deepInsight,
        targetLanguage: explanationLang,
        verseId: currentVerse.id,
        book: currentVerse.book,
        chapter: currentVerse.chapter,
        verseNumber: currentVerse.verseNumber
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data.translatedText) {
          setRuntimeTranslations((prev) => ({
            ...prev,
            [currentVerse.id]: {
              ...prev[currentVerse.id],
              [explanationLang]: {
                translation: data.translatedText,
                deepInsight: data.translatedInsight || currentVerse.deepInsight
              }
            }
          }));
        }
      })
      .catch((err) => console.error("Dynamic translation error:", err))
      .finally(() => {
        if (isMounted) setIsTranslating(false);
      });

    return () => {
      isMounted = false;
    };
  }, [currentVerse?.id, explanationLang]);

  // Tanpura synthesis
  const toggleTanpura = () => {
    if (isTanpuraActive) {
      if (tanpuraOscsRef.current) {
        tanpuraOscsRef.current.oscs.forEach(o => {
          try { o.stop(); o.disconnect(); } catch (_) {}
        });
        tanpuraOscsRef.current = null;
      }
      setIsTanpuraActive(false);
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Frequencies for Pa (G# 207.65Hz / C# 136.1Hz Omkara baseline)
        const baseFreq = 136.1; // Om cosmic frequency
        const harmonics = [baseFreq * 0.75, baseFreq, baseFreq * 1.5, baseFreq * 2]; // Pa, Sa, Pa', Sa'
        
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.07, ctx.currentTime + 2.0);
        masterGain.connect(ctx.destination);

        const oscs = harmonics.map((freq, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx % 2 === 0 ? "sine" : "triangle";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          osc.connect(masterGain);
          osc.start();
          return osc;
        });

        tanpuraOscsRef.current = { oscs, gain: masterGain };
        setIsTanpuraActive(true);
      } catch (err) {
        console.error("Tanpura error:", err);
      }
    }
  };

  // Vedic Chant Synthesizer (synthesizes the 3 traditional Vedic svara accents: Udatta, Anudatta, Svarita)
  const playVedicChant = () => {
    if (isPlayingChant) {
      activeOscillatorsRef.current.forEach(o => {
        try { o.stop(); o.disconnect(); } catch (_) {}
      });
      activeOscillatorsRef.current = [];
      setIsPlayingChant(false);
      return;
    }

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = audioCtxRef.current || new AudioContextClass();
      audioCtxRef.current = ctx;

      const syllables = currentVerse.iast.split(/\s+/).slice(0, 16);
      const basePitch = 216; // Sa (A3)
      const udatta = basePitch * 1.125; // Ri (High)
      const anudatta = basePitch * 0.888; // Dha_low (Low)

      setIsPlayingChant(true);
      const oscs: OscillatorNode[] = [];

      syllables.forEach((_, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        // Vedic accent modulation pattern
        let pitch = basePitch;
        if (idx % 3 === 1) pitch = udatta;
        else if (idx % 3 === 2) pitch = anudatta;

        const startTime = ctx.currentTime + idx * 0.45;
        const duration = 0.4;

        osc.type = "sine";
        osc.frequency.setValueAtTime(pitch, startTime);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.12, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + duration);
        oscs.push(osc);
      });

      activeOscillatorsRef.current = oscs;

      setTimeout(() => {
        setIsPlayingChant(false);
      }, syllables.length * 450 + 200);

    } catch (err) {
      console.error("Chant error:", err);
      setIsPlayingChant(false);
    }
  };

  useEffect(() => {
    return () => {
      if (tanpuraOscsRef.current) {
        tanpuraOscsRef.current.oscs.forEach(o => {
          try { o.stop(); o.disconnect(); } catch (_) {}
        });
      }
      activeOscillatorsRef.current.forEach(o => {
        try { o.stop(); o.disconnect(); } catch (_) {}
      });
    };
  }, []);

  // Fetch new scripture from API via Gemini
  const handleFetchCustomBook = async (bookToFetch: string) => {
    if (!bookToFetch.trim()) return;
    setIsFetchingCustom(true);
    try {
      const res = await fetch("/api/scriptures", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: bookToFetch,
          count: 3,
          originalLang: "Sanskrit",
          explanationLang: explanationLang
        })
      });
      const data = await res.json();
      if (data.scriptures && data.scriptures.length > 0) {
        const converted: VerseCorpusItem[] = data.scriptures.map((s: any, idx: number) => ({
          id: `custom-${Date.now()}-${idx}`,
          category: "Shastras & Astronomy",
          book: s.book || bookToFetch,
          chapter: s.chapter || "1",
          verseNumber: s.verseNumber || `${idx + 1}`,
          devanagari: s.sanskrit,
          iast: s.sanskrit,
          wordForWord: [],
          translation: s.translation,
          deepInsight: s.deepInsight,
          philosophicalStream: s.context || "Classical Indic Canon",
          archaeoScienceDossier: {
            astronomicalAlignment: "Sidereal astronomical calculation in canonical treatises",
            archaeologicalSiteRef: "Ancient Indian manuscript archives and stone edicts",
            datingRange: "Classical to Vedic Epoch",
            scientificConcept: "Indic Metaphysics & Epistemology",
            sensorCorrelation: "Spectral ink chromatography and paleographic analysis"
          }
        }));
        setCustomScriptures(prev => [...converted, ...prev]);
        setActiveVerseIndex(0);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetchingCustom(false);
    }
  };

  // Ask AI Sage
  const handleAskSage = async () => {
    if (!chatMessage.trim()) return;
    setIsChatLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: chatMessage,
          context: {
            book: currentVerse.book,
            chapter: currentVerse.chapter,
            verse: currentVerse.verseNumber,
            devanagari: currentVerse.devanagari,
            translation: currentVerse.translation,
            dossier: currentVerse.archaeoScienceDossier
          },
          agentPersona: "Acharya Maharishi (Lead Scripture & Archaeo-Science Vidwan)",
          language: explanationLang
        })
      });
      const data = await res.json();
      setChatAnswer(data.answer || "No response received.");
    } catch (err) {
      console.error(err);
    } finally {
      setIsChatLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 space-y-6">
      
      {/* 1. Core Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#211913] via-[#2a1d14] to-[#17120e] text-[#f7efe1] rounded-3xl border-2 border-amber-800/40 p-6 md:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-orange-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/90 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>GRANTH CORE SANCTUARY • ANCIENT MANUSCRIPT CORPUS</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black font-serif text-[#fdf4e3] tracking-tight">
              Indic Scriptures & Pothi Sanctuary
            </h1>

            <p className="text-sm text-stone-300 font-sans leading-relaxed">
              Authentic Tala Palm-Leaf scrolls (*Talapatra*), Birch-bark pothis (*Bhurjapatra*), interlinear grammatical breakdowns, and sacred Vedic chant phonetics—with real-time empirical Archaeo-Science & Epigraphical dossiers behind every shloka.
            </p>

            {onNavigateToResearch && (
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                {/* Home Top Subjects Drop Down Menu */}
                <div className="relative" ref={topSubjectsHeroRef}>
                  <button
                    onClick={() => setIsTopSubjectsHeroOpen(!isTopSubjectsHeroOpen)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 via-amber-700 to-orange-800 hover:from-amber-500 hover:to-orange-700 text-white border border-amber-400 text-xs font-serif font-bold transition-all cursor-pointer shadow-xl shadow-amber-950/70 ring-2 ring-amber-400/40"
                  >
                    <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
                    <span>Top Subjects & Shastras</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950/90 text-amber-200 border border-amber-600/70">
                      {HOME_TOP_RESEARCH_SUBJECTS.length} TOP SUBJECTS
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-amber-200 transition-transform duration-200 ${isTopSubjectsHeroOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Top Subjects Hero Dropdown Panel */}
                  {isTopSubjectsHeroOpen && (
                    <div className="absolute left-0 mt-2 w-80 sm:w-[480px] bg-[#14100c] border-2 border-amber-600/80 rounded-3xl p-4 shadow-2xl z-50 backdrop-blur-2xl ring-1 ring-amber-500/40 animate-in fade-in zoom-in-95 duration-150">
                      <div className="flex items-center justify-between pb-3 mb-2 border-b border-stone-800">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                          <h4 className="text-xs font-serif font-black uppercase text-amber-300 tracking-wider">
                            Explore All Top Sanatan Subjects
                          </h4>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950 text-amber-400 border border-amber-800">
                          Direct Navigation
                        </span>
                      </div>

                      <div className="max-h-[60vh] overflow-y-auto space-y-1.5 pr-1 no-scrollbar grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {HOME_TOP_RESEARCH_SUBJECTS.map((sub) => {
                          const Icon = sub.icon;
                          return (
                            <button
                              key={sub.id}
                              onClick={() => {
                                onNavigateToResearch(sub.id);
                                setIsTopSubjectsHeroOpen(false);
                              }}
                              className="text-left p-2.5 rounded-2xl flex items-start gap-2.5 transition-all cursor-pointer border bg-[#1a1511]/80 border-stone-800/80 hover:bg-[#251d16] hover:border-amber-700/80 text-stone-300 group"
                            >
                              <div className="p-2 rounded-xl border shrink-0 mt-0.5 bg-stone-900 text-amber-400 border-stone-800 group-hover:bg-amber-900 group-hover:text-amber-200 group-hover:border-amber-600 transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-serif font-bold text-stone-100 group-hover:text-amber-200 truncate">
                                  {sub.label}
                                </div>
                                <p className="text-[10px] text-stone-400 font-sans line-clamp-2 leading-tight mt-0.5">
                                  {sub.desc}
                                </p>
                                <span className="inline-block mt-1 text-[8px] font-mono uppercase px-1.5 py-0.2 rounded bg-amber-950 text-amber-400 border border-amber-800/50">
                                  {sub.badge}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick direct links */}
                <button
                  onClick={() => onNavigateToResearch("vedic_ebooks")}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 text-amber-200 border border-amber-700/70 text-xs font-serif font-bold transition-all cursor-pointer shadow"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                  <span>Vedic E-Books</span>
                  <ChevronRight className="w-3 h-3 text-amber-400" />
                </button>

                <button
                  onClick={() => onNavigateToResearch("panini_works")}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#281c14] hover:bg-[#38261b] text-amber-300 border border-amber-800/80 text-xs font-serif font-bold transition-all cursor-pointer shadow"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Sage Panini</span>
                  <ChevronRight className="w-3 h-3 text-amber-400" />
                </button>

                <button
                  onClick={() => onNavigateToResearch("acharya_works")}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#281c14] hover:bg-[#38261b] text-amber-300 border border-amber-800/80 text-xs font-serif font-bold transition-all cursor-pointer shadow"
                >
                  <Calculator className="w-3.5 h-3.5 text-amber-400" />
                  <span>Bhaskaracharya & Sages</span>
                  <ChevronRight className="w-3 h-3 text-amber-400" />
                </button>
              </div>
            )}
          </div>

          {/* Audio Controls & Telemetry Widget */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-black/50 p-3.5 rounded-2xl border border-amber-900/50 backdrop-blur-md">
            {/* Tanpura Drone Toggle */}
            <button
              onClick={toggleTanpura}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isTanpuraActive
                  ? "bg-amber-800 text-amber-100 border border-amber-500 shadow-lg shadow-amber-950/60 animate-pulse"
                  : "bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800"
              }`}
            >
              {isTanpuraActive ? <Volume2 className="w-4 h-4 text-amber-300" /> : <VolumeX className="w-4 h-4 text-stone-500" />}
              <span>Tanpura 136.1Hz (Om)</span>
            </button>

            {/* Svara Chant Player */}
            <button
              onClick={playVedicChant}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isPlayingChant
                  ? "bg-orange-800 text-white border border-orange-500 animate-pulse"
                  : "bg-gradient-to-r from-amber-700 to-orange-800 hover:from-amber-600 hover:to-orange-700 text-white"
              }`}
            >
              {isPlayingChant ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlayingChant ? "Chanting Svaras..." : "Recite Shloka"}</span>
            </button>
          </div>
        </div>

        {/* Categories & Preset Book Navigation Strip */}
        <div className="mt-6 pt-5 border-t border-amber-900/30 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {/* Top Subjects / Category Dropdown Menu */}
            <div className="relative shrink-0" ref={categoryDropdownRef}>
              <button
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-900/90 via-[#2f2015] to-[#1f150e] hover:from-amber-800 hover:to-[#281b12] text-amber-200 border border-amber-600/80 text-xs font-serif font-bold transition-all shadow-md cursor-pointer ring-1 ring-amber-500/40"
              >
                <Layers className="w-4 h-4 text-amber-400" />
                <span>
                  Subject: <strong className="text-white">{selectedCategory}</strong>
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-amber-400 transition-transform duration-200 ${isCategoryDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Subject Category Dropdown Menu Panel */}
              {isCategoryDropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 sm:w-80 bg-[#16120d] border-2 border-amber-700/80 rounded-2xl p-2.5 shadow-2xl z-40 backdrop-blur-xl animate-in fade-in zoom-in-95">
                  <div className="px-2 py-1.5 mb-1.5 border-b border-stone-800 flex items-center justify-between text-[10px] font-mono uppercase text-amber-400 font-bold">
                    <span>Select Canonical Category</span>
                    <span className="text-stone-500">{SUBJECT_CATEGORIES.length} Subjects</span>
                  </div>

                  <div className="space-y-1">
                    {SUBJECT_CATEGORIES.map((cat) => {
                      const isSelected = selectedCategory === cat.name;
                      const count = cat.name === "All Sacred Works" 
                        ? allVerses.length 
                        : allVerses.filter(v => v.category === cat.name).length;
                      return (
                        <button
                          key={cat.name}
                          onClick={() => {
                            setSelectedCategory(cat.name);
                            setActiveVerseIndex(0);
                            setIsCategoryDropdownOpen(false);
                          }}
                          className={`w-full text-left p-2 rounded-xl flex items-center justify-between transition-all cursor-pointer border ${
                            isSelected
                              ? "bg-amber-900/90 border-amber-500 text-white shadow"
                              : "bg-transparent border-transparent hover:bg-stone-900 text-stone-300 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="text-base">{cat.icon}</span>
                            <div className="truncate">
                              <div className="text-xs font-serif font-bold truncate">
                                {cat.name}
                              </div>
                              <div className="text-[9px] text-stone-400 truncate">
                                {cat.desc}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 pl-2">
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-black/50 text-amber-400 border border-amber-900/40">
                              {count}
                            </span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-amber-300" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Category horizontal pills */}
            <div className="flex items-center gap-1.5">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setActiveVerseIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all cursor-pointer border ${
                    selectedCategory === cat
                      ? "bg-amber-800 text-white border-amber-500 shadow-md"
                      : "bg-stone-900/70 text-stone-400 hover:text-stone-200 border-stone-800 hover:bg-stone-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative flex-1 md:w-56">
              <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search verse, Sanskrit root..."
                className="w-full bg-black/50 border border-stone-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-stone-200 font-sans outline-none focus:border-amber-500"
              />
            </div>

            <select
              value={explanationLang}
              onChange={(e) => setExplanationLang(e.target.value as ExplanationLanguage)}
              className="bg-black/60 border border-stone-800 rounded-xl px-2.5 py-1.5 text-xs font-mono text-amber-300 outline-none cursor-pointer hover:border-amber-600 transition-colors"
              title="Translation Language"
            >
              <optgroup label="🇮🇳 Indian Classical & Regional Languages">
                {INDIAN_TRANSLATION_LANGUAGES.map((l) => (
                  <option key={l.id} value={l.id} className="bg-[#1c120c] text-amber-200">
                    {l.flag} {l.nativeName} ({l.name})
                  </option>
                ))}
              </optgroup>
              <optgroup label="🌐 International Languages">
                {INTERNATIONAL_TRANSLATION_LANGUAGES.map((l) => (
                  <option key={l.id} value={l.id} className="bg-[#1c120c] text-stone-300">
                    {l.flag} {l.name} ({l.nativeName})
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>
      </div>

      {/* 2. Fast Book Drawer & Dynamic AI Summoner */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#191410] border border-amber-900/30 rounded-2xl p-3.5">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full lg:max-w-3xl no-scrollbar">
          {/* Treatises / Texts Dropdown Selector */}
          <div className="relative shrink-0" ref={bookDropdownRef}>
            <button
              onClick={() => setIsBookDropdownOpen(!isBookDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-950 to-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-700/80 text-xs font-serif font-bold transition-all cursor-pointer shadow"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span className="truncate max-w-[130px] sm:max-w-[170px]">
                {currentVerse?.book || "Select Text"}
              </span>
              <ChevronDown className={`w-3 h-3 text-amber-400 transition-transform duration-200 ${isBookDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isBookDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-[#16120d] border-2 border-amber-700/80 rounded-2xl p-2 shadow-2xl z-40 backdrop-blur-xl animate-in fade-in zoom-in-95 max-h-72 overflow-y-auto no-scrollbar">
                <div className="px-2 py-1 border-b border-stone-800 text-[10px] font-mono uppercase text-amber-400 font-bold mb-1">
                  Preset Canonical Treatises
                </div>
                {PRESET_BOOKS.map(book => {
                  const isSelected = currentVerse?.book.toLowerCase().includes(book.toLowerCase());
                  return (
                    <button
                      key={book}
                      onClick={() => {
                        const foundIndex = allVerses.findIndex(v => v.book.toLowerCase().includes(book.toLowerCase()));
                        if (foundIndex >= 0) {
                          setActiveVerseIndex(foundIndex);
                        } else {
                          handleFetchCustomBook(book);
                        }
                        setIsBookDropdownOpen(false);
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-serif transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "bg-amber-900 text-amber-100 font-bold border border-amber-600"
                          : "text-stone-300 hover:bg-stone-900 hover:text-white"
                      }`}
                    >
                      <span className="truncate">{book}</span>
                      {isSelected && <Check className="w-3 h-3 text-amber-300" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {PRESET_BOOKS.map(book => (
            <button
              key={book}
              onClick={() => {
                const foundIndex = allVerses.findIndex(v => v.book.toLowerCase().includes(book.toLowerCase()));
                if (foundIndex >= 0) {
                  setActiveVerseIndex(foundIndex);
                } else {
                  handleFetchCustomBook(book);
                }
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-serif whitespace-nowrap transition-all cursor-pointer ${
                currentVerse?.book.toLowerCase().includes(book.toLowerCase())
                  ? "bg-amber-900 text-amber-200 border border-amber-500 font-bold"
                  : "bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800"
              }`}
            >
              {book}
            </button>
          ))}
        </div>

        {/* Custom Treatise Search Input */}
        <div className="flex items-center gap-1.5 w-full lg:w-auto">
          <input
            type="text"
            value={customBookQuery}
            onChange={(e) => setCustomBookQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleFetchCustomBook(customBookQuery)}
            placeholder="Unroll any other Treatise (e.g. Charaka Samhita)..."
            className="bg-black/60 border border-stone-800 rounded-xl px-3 py-1.5 text-xs text-stone-200 font-serif outline-none focus:border-amber-500 flex-1 lg:w-64"
          />
          <button
            onClick={() => handleFetchCustomBook(customBookQuery)}
            disabled={isFetchingCustom || !customBookQuery.trim()}
            className="px-3 py-1.5 bg-amber-800 hover:bg-amber-700 text-white rounded-xl text-xs font-bold font-mono uppercase flex items-center gap-1 shadow cursor-pointer disabled:opacity-40"
          >
            {isFetchingCustom ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
            <span>Fetch</span>
          </button>
        </div>
      </div>

      {/* 3. Main Manuscript Display Deck & Reading Modes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left / Center: The Sacred Manuscript (8 or 12 Cols) */}
        <div className={`space-y-6 ${showScienceDossier ? "lg:col-span-8" : "lg:col-span-12"}`}>
          
          {/* Mode Switcher Tabs & Script Controls */}
          <div className="flex flex-wrap items-center justify-between bg-[#191410] border border-amber-900/30 p-2 rounded-2xl gap-2">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              {[
                { id: "palm_leaf", label: "Talapatra (Palm Leaf)", icon: Scroll },
                { id: "pothi", label: "Pothi Manuscript", icon: BookOpen },
                { id: "interlinear", label: "Interlinear Gloss", icon: Layers },
                { id: "ocean_vedanta", label: "Ocean of Vedanta", icon: BrainCircuit }
              ].map(m => {
                const Icon = m.icon;
                return (
                  <button
                    key={m.id}
                    onClick={() => setViewMode(m.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-serif flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                      viewMode === m.id
                        ? "bg-amber-900/80 text-amber-200 font-bold border border-amber-600/50 shadow"
                        : "text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{m.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Indic Script Selector */}
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded-xl border border-amber-900/40 text-[11px] font-serif">
                <span className="text-amber-400/70 font-mono text-[10px] hidden sm:inline">Script:</span>
                <select
                  value={currentScript}
                  onChange={(e) => setScript(e.target.value as IndicScriptCode)}
                  className="bg-transparent text-amber-300 font-bold outline-none cursor-pointer text-xs"
                >
                  <option value="Devanagari" className="bg-[#1c120c] text-amber-200">Devanagari (देवनागरी)</option>
                  <option value="IAST" className="bg-[#1c120c] text-amber-200">IAST (Latin Diacritics)</option>
                  <option value="Tamil" className="bg-[#1c120c] text-amber-200">Tamil (தமிழ்)</option>
                  <option value="Telugu" className="bg-[#1c120c] text-amber-200">Telugu (తెలుగు)</option>
                  <option value="Kannada" className="bg-[#1c120c] text-amber-200">Kannada (ಕನ್ನಡ)</option>
                  <option value="Malayalam" className="bg-[#1c120c] text-amber-200">Malayalam (മലയാളം)</option>
                  <option value="Bengali" className="bg-[#1c120c] text-amber-200">Bengali (বাংলা)</option>
                  <option value="Gujarati" className="bg-[#1c120c] text-amber-200">Gujarati (ગુજરાતી)</option>
                  <option value="Odia" className="bg-[#1c120c] text-amber-200">Odia (ଓଡ଼ିଆ)</option>
                  <option value="Gurmukhi" className="bg-[#1c120c] text-amber-200">Gurmukhi (ਗੁਰਮੁਖੀ)</option>
                  <option value="Brahmi" className="bg-[#1c120c] text-amber-200">Brahmi (𑀩𑁆𑀭𑀸𑀳𑁆𑀫𑀻)</option>
                </select>
              </div>

              <button
                onClick={() => setShowScienceDossier(!showScienceDossier)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-all border cursor-pointer ${
                  showScienceDossier
                    ? "bg-cyan-950 text-cyan-200 border-cyan-700/60 font-bold"
                    : "bg-stone-900 text-stone-400 border-stone-800"
                }`}
              >
                <Atom className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden md:inline">Archaeo-Science Dossier</span>
                <span className="md:hidden">Science</span>
              </button>
            </div>
          </div>

          {/* Dedicated Multilingual Translation Bar with Indian & Global Languages */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2 bg-gradient-to-r from-[#1a120b] via-[#22180e] to-[#1a120b] border border-amber-900/50 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 max-w-full">
              <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400 font-bold shrink-0">
                <Languages className="w-3.5 h-3.5 text-amber-400" />
                <span>Translation:</span>
              </div>

              {/* Quick Indian & International Language Pills */}
              {[
                { id: "English", label: "English", flag: "🇬🇧" },
                { id: "Hindi", label: "हिन्दी", flag: "🇮🇳" },
                { id: "Sanskrit", label: "संस्कृतम्", flag: "🕉️" },
                { id: "Marathi", label: "मराठी", flag: "🚩" },
                { id: "Tamil", label: "தமிழ்", flag: "🛕" },
                { id: "Telugu", label: "తెలుగు", flag: "🏛️" },
                { id: "Bengali", label: "বাংলা", flag: "🎨" },
                { id: "Gujarati", label: "ગુજરાતી", flag: "🪷" },
                { id: "Kannada", label: "ಕನ್ನಡ", flag: "🌾" },
                { id: "Malayalam", label: "മലയാളം", flag: "🌴" }
              ].map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setExplanationLang(lang.id as ExplanationLanguage)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-medium shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                    explanationLang === lang.id
                      ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold shadow-md ring-1 ring-amber-400/60"
                      : "bg-stone-900/80 hover:bg-stone-800 text-stone-300 border border-stone-800"
                  }`}
                >
                  <span className="text-sm">{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>

            {/* Dropdown for All 23 Indian & Global Languages */}
            <div className="flex items-center gap-2 shrink-0">
              {isTranslating && (
                <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 animate-pulse">
                  <RefreshCw className="w-3 h-3 animate-spin" /> Translating...
                </span>
              )}
              <select
                value={explanationLang}
                onChange={(e) => setExplanationLang(e.target.value as ExplanationLanguage)}
                className="bg-black/70 border border-amber-900/60 rounded-xl px-2.5 py-1 text-xs font-mono text-amber-300 outline-none cursor-pointer hover:border-amber-600 transition-colors"
                title="All 23 Indian & International translation languages"
              >
                <optgroup label="🇮🇳 Indian Classical & Regional Languages">
                  {INDIAN_TRANSLATION_LANGUAGES.map((l) => (
                    <option key={l.id} value={l.id} className="bg-[#1c120c] text-amber-200">
                      {l.flag} {l.nativeName} ({l.name})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="🌐 International Languages">
                  {INTERNATIONAL_TRANSLATION_LANGUAGES.map((l) => (
                    <option key={l.id} value={l.id} className="bg-[#1c120c] text-stone-300">
                      {l.flag} {l.name} ({l.nativeName})
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
          </div>

          {/* Manuscript Viewer Container */}
          <div className="relative">
            {/* VIEW MODE 1: TALAPATRA PALM LEAF */}
            {viewMode === "palm_leaf" && (
              <motion.div
                key={`leaf-${currentVerse.id}-${currentScript}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-r from-[#caa670] via-[#e5c997] to-[#caa670] text-[#341d08] rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#825b29]/40 overflow-hidden"
              >
                {/* Traditional Palm Leaf Perforations & Binding Cord */}
                <div className="absolute top-1/2 left-6 -translate-y-1/2 w-5 h-5 rounded-full bg-[#523311] border-2 border-[#caa670] shadow-inner flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#201306]" />
                </div>
                <div className="absolute top-1/2 right-6 -translate-y-1/2 w-5 h-5 rounded-full bg-[#523311] border-2 border-[#caa670] shadow-inner flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#201306]" />
                </div>

                {/* Top Metadata Header */}
                <div className="text-center pb-4 border-b border-[#825b29]/30">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#663e14] font-black">
                    {currentVerse.book} • {currentVerse.subBook || `Chapter ${currentVerse.chapter}`} • Shloka {currentVerse.verseNumber} • {currentScript} Script
                  </span>
                </div>

                {/* Sanskrit Inscription Transliterated */}
                <div className="py-8 text-center space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-black leading-relaxed tracking-wide text-[#2b1605] drop-shadow-sm whitespace-pre-line">
                    {transliterate(currentVerse.devanagari)}
                  </h2>

                  <p className="text-xs md:text-sm font-serif italic text-[#543415] tracking-wide max-w-2xl mx-auto leading-relaxed border-t border-[#825b29]/20 pt-3">
                    {currentVerse.iast}
                  </p>
                </div>

                {/* Translation Box */}
                <div className="bg-[#f5e6ca]/80 p-5 rounded-2xl border border-[#a1743a]/40 shadow-inner">
                  <div className="flex items-center justify-between mb-2 border-b border-[#825b29]/20 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#633a10] font-bold flex items-center gap-1.5">
                        <span className="text-base">{selectedLangMeta.flag}</span>
                        <span>अनुवादः / Translation ({selectedLangMeta.nativeName} - {selectedLangMeta.name}):</span>
                      </span>
                      {isTranslating && (
                        <span className="flex items-center gap-1 text-[10px] font-mono text-amber-900 animate-pulse">
                          <RefreshCw className="w-2.5 h-2.5 animate-spin" /> Translating...
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => playTranslationTTS(activeTranslation.translation, explanationLang)}
                      title={`Listen to translation in ${selectedLangMeta.name}`}
                      className="p-1 px-2 rounded-lg bg-[#e2ceab] hover:bg-[#d6bc92] text-[#523311] text-xs font-mono flex items-center gap-1 transition-all cursor-pointer shadow-sm"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Recite</span>
                    </button>
                  </div>
                  <p className="text-sm md:text-base font-serif font-medium leading-relaxed text-[#2a1707]">
                    "{activeTranslation.translation}"
                  </p>
                </div>

                {/* Deep Philosophical Commentary */}
                <div className="mt-4 p-4 rounded-xl bg-[#e0c594]/60 text-xs font-serif text-[#3f240b] leading-relaxed flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#8a531a] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#5c3109]">Metaphysical & Scientific Essence ({selectedLangMeta.nativeName}): </span>
                    {activeTranslation.deepInsight}
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW MODE 2: POTHI TRADITIONAL MANUSCRIPT */}
            {viewMode === "pothi" && (
              <motion.div
                key={`pothi-${currentVerse.id}-${currentScript}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#fbf4e4] text-[#2c1d11] rounded-3xl p-8 md:p-10 shadow-2xl border-t-8 border-b-8 border-red-950 space-y-6"
              >
                {/* Traditional Vermilion Margins */}
                <div className="flex items-center justify-between border-b-2 border-red-900/30 pb-3">
                  <span className="text-xs font-mono font-bold text-red-950 uppercase tracking-widest">
                    ॥ {currentVerse.book} ॥ ({currentScript})
                  </span>
                  <span className="text-xs font-mono text-red-900">
                    Patra {currentVerse.chapter}.{currentVerse.verseNumber}
                  </span>
                </div>

                <div className="text-center py-6 bg-[#f3e7cb] p-6 rounded-2xl border border-amber-900/20">
                  <div className="text-2xl md:text-3xl font-serif font-black text-red-950 leading-loose whitespace-pre-line">
                    {transliterate(currentVerse.devanagari)}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-300 pb-1">
                    <h4 className="text-xs font-mono uppercase font-bold text-stone-600 flex items-center gap-1.5">
                      <span>{selectedLangMeta.flag}</span>
                      <span>{selectedLangMeta.nativeName} ({selectedLangMeta.name}) Exegesis:</span>
                    </h4>
                    <button
                      onClick={() => playTranslationTTS(activeTranslation.translation, explanationLang)}
                      title={`Listen to translation in ${selectedLangMeta.name}`}
                      className="p-1 px-2 rounded-lg hover:bg-stone-200 text-stone-700 text-xs font-mono flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Recite</span>
                    </button>
                  </div>
                  <p className="text-base font-serif leading-relaxed text-stone-900">
                    {activeTranslation.translation}
                  </p>
                </div>

                <div className="p-4 bg-amber-100/70 rounded-xl border border-amber-300 text-xs font-serif text-amber-950 space-y-1">
                  <div>
                    <span className="font-bold">Philosophical School: </span> {currentVerse.philosophicalStream}
                  </div>
                  {activeTranslation.deepInsight && (
                    <div className="pt-1 border-t border-amber-300/50 text-stone-800">
                      <span className="font-bold">Bhavartha ({selectedLangMeta.nativeName}): </span>
                      {activeTranslation.deepInsight}
                    </div>
                  )}
                </div>
              </motion.div>
            )}


            {/* VIEW MODE 3: INTERLINEAR GLOSS */}
            {viewMode === "interlinear" && (
              <motion.div
                key={`interlinear-${currentVerse.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#1c1611] text-stone-100 rounded-3xl p-6 md:p-8 border border-amber-900/40 shadow-xl space-y-6"
              >
                <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                  <h3 className="text-lg font-serif font-bold text-amber-300">
                    Interlinear Morphological Breakdown
                  </h3>
                  <span className="text-xs font-mono text-stone-400">
                    {currentVerse.book} ({currentVerse.verseNumber})
                  </span>
                </div>

                {currentVerse.wordForWord && currentVerse.wordForWord.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {currentVerse.wordForWord.map((w, idx) => (
                      <div key={idx} className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                        <span className="text-sm font-serif font-bold text-amber-300 block">{w.word}</span>
                        <span className="text-xs font-sans text-stone-400 block">{w.meaning}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 bg-stone-950 rounded-xl text-xs font-mono text-stone-400 text-center">
                    Original Devanagari text rendered with direct translation.
                  </div>
                )}

                <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-emerald-400 font-bold flex items-center gap-1.5">
                      <span>{selectedLangMeta.flag}</span>
                      <span>Complete Synthesized Reading ({selectedLangMeta.nativeName} - {selectedLangMeta.name}):</span>
                    </span>
                    <button
                      onClick={() => playTranslationTTS(activeTranslation.translation, explanationLang)}
                      title={`Listen to translation in ${selectedLangMeta.name}`}
                      className="p-1 px-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-mono flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Recite</span>
                    </button>
                  </div>
                  <p className="text-sm font-serif text-stone-200 leading-relaxed">{activeTranslation.translation}</p>
                </div>
              </motion.div>
            )}

            {/* VIEW MODE 4: OCEAN OF VEDANTA */}
            {viewMode === "ocean_vedanta" && (
              <motion.div
                key={`vedanta-${currentVerse.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-[#1b1510] via-[#241a12] to-[#140f0c] text-stone-100 rounded-3xl p-8 border border-amber-700/40 shadow-2xl space-y-6"
              >
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold">
                  <BrainCircuit className="w-4 h-4" />
                  <span>VEDANTA & CONSCIOUSNESS DISCOURSE</span>
                </div>

                <div className="p-6 bg-black/40 rounded-2xl border border-amber-900/40">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-200 leading-relaxed text-center">
                    {currentVerse.devanagari}
                  </h3>
                </div>

                <div className="space-y-3 font-serif text-stone-200 leading-relaxed text-sm md:text-base">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-1">
                    <h4 className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-1.5">
                      <span>{selectedLangMeta.flag}</span>
                      <span>Deep Philosophical Inquiry ({selectedLangMeta.nativeName} - {selectedLangMeta.name}):</span>
                    </h4>
                    <button
                      onClick={() => playTranslationTTS(activeTranslation.deepInsight, explanationLang)}
                      title={`Listen to translation in ${selectedLangMeta.name}`}
                      className="p-1 px-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-mono flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Recite</span>
                    </button>
                  </div>
                  <p>{activeTranslation.deepInsight}</p>
                  <div className="p-3 bg-black/40 rounded-xl border border-amber-900/30 text-xs text-stone-400 font-sans">
                    <span className="text-amber-400 font-mono font-bold">Canonical Translation: </span>
                    {activeTranslation.translation}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-800 text-xs font-mono text-stone-400">
                  <span>Stream: {currentVerse.philosophicalStream}</span>
                  <button
                    onClick={() => setShowChatModal(true)}
                    className="px-3 py-1.5 bg-amber-900 hover:bg-amber-800 text-amber-100 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Inquire with AI Sage</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Navigation Controls: Previous / Next Shloka */}
          <div className="flex items-center justify-between bg-[#191410] border border-amber-900/30 p-4 rounded-2xl text-stone-100">
            <button
              onClick={() => setActiveVerseIndex(prev => Math.max(0, prev - 1))}
              disabled={activeVerseIndex === 0}
              className={`px-4 py-2 bg-stone-900 border border-stone-800 rounded-xl text-xs font-serif font-bold flex items-center gap-2 cursor-pointer transition-all ${
                activeVerseIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:border-amber-500 hover:text-white"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Shloka</span>
            </button>

            <span className="text-xs font-mono text-stone-400">
              Shloka {activeVerseIndex + 1} of {filteredVerses.length}
            </span>

            <button
              onClick={() => setActiveVerseIndex(prev => Math.min(filteredVerses.length - 1, prev + 1))}
              disabled={activeVerseIndex >= filteredVerses.length - 1}
              className={`px-4 py-2 bg-stone-900 border border-stone-800 rounded-xl text-xs font-serif font-bold flex items-center gap-2 cursor-pointer transition-all ${
                activeVerseIndex >= filteredVerses.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:border-amber-500 hover:text-white"
              }`}
            >
              <span>Next Shloka</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Right: ARCHAEO-SCIENCE DOSSIER BEHIND THIS VERSE (4 Cols) */}
        {showScienceDossier && (
          <div className="lg:col-span-4 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#1c1611] text-stone-100 rounded-3xl p-6 border-2 border-cyan-900/40 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <Atom className="w-4 h-4 text-cyan-400 animate-spin" />
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-300">
                    Behind the Shloka
                  </h3>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 bg-cyan-950 text-cyan-300 rounded-full border border-cyan-800">
                  Archaeo-Science
                </span>
              </div>

              <p className="text-xs text-stone-400 font-sans">
                Empirical archaeological, astronomical, and sensor telemetry correlating with this specific text:
              </p>

              {/* Dossier Item 1: Astronomical Alignment */}
              {currentVerse.archaeoScienceDossier.astronomicalAlignment && (
                <div className="p-3.5 bg-stone-950 rounded-2xl border border-stone-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400">
                    <Orbit className="w-3.5 h-3.5" />
                    <span>Astronomical Alignment:</span>
                  </div>
                  <p className="text-xs font-serif text-stone-300">
                    {currentVerse.archaeoScienceDossier.astronomicalAlignment}
                  </p>
                </div>
              )}

              {/* Dossier Item 2: Archaeological Site Reference */}
              {currentVerse.archaeoScienceDossier.archaeologicalSiteRef && (
                <div className="p-3.5 bg-stone-950 rounded-2xl border border-stone-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Corroborating Site:</span>
                  </div>
                  <p className="text-xs font-serif text-stone-300">
                    {currentVerse.archaeoScienceDossier.archaeologicalSiteRef}
                  </p>
                </div>
              )}

              {/* Dossier Item 3: Scientific Concept */}
              {currentVerse.archaeoScienceDossier.scientificConcept && (
                <div className="p-3.5 bg-stone-950 rounded-2xl border border-stone-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Scientific Physics Concept:</span>
                  </div>
                  <p className="text-xs font-serif text-stone-300">
                    {currentVerse.archaeoScienceDossier.scientificConcept}
                  </p>
                </div>
              )}

              {/* Dossier Item 4: Sensor Correlation */}
              {currentVerse.archaeoScienceDossier.sensorCorrelation && (
                <div className="p-3.5 bg-cyan-950/30 rounded-2xl border border-cyan-800/40 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-cyan-300">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Sensor Telemetry Link:</span>
                  </div>
                  <p className="text-[11px] font-mono text-cyan-200">
                    {currentVerse.archaeoScienceDossier.sensorCorrelation}
                  </p>
                </div>
              )}

              {/* 1-Click Dispatch to Research Labs */}
              <div className="pt-2 space-y-2">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">
                  Cross-Examine in Research Laboratories:
                </span>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onNavigateToResearch?.("agentic_lab", `${currentVerse.book} (${currentVerse.devanagari.slice(0, 30)}...)`)}
                    className="p-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-amber-500 rounded-xl text-[11px] font-mono text-stone-300 hover:text-amber-300 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Compass className="w-3.5 h-3.5 text-amber-400" />
                    <span>Agentic Lab</span>
                  </button>

                  <button
                    onClick={() => onNavigateToResearch?.("archaeo_astronomy", currentVerse.book)}
                    className="p-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-cyan-500 rounded-xl text-[11px] font-mono text-stone-300 hover:text-cyan-300 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Orbit className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Ephemeris</span>
                  </button>

                  <button
                    onClick={() => onNavigateToResearch?.("carbon_radiation", currentVerse.book)}
                    className="p-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-emerald-500 rounded-xl text-[11px] font-mono text-stone-300 hover:text-emerald-300 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Atom className="w-3.5 h-3.5 text-emerald-400" />
                    <span>AMS C-14</span>
                  </button>

                  <button
                    onClick={() => onNavigateToResearch?.("calligraphy", currentVerse.devanagari)}
                    className="p-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-orange-500 rounded-xl text-[11px] font-mono text-stone-300 hover:text-orange-300 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-orange-400" />
                    <span>Calligraphy</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}

      </div>

      {/* 4. AI Sage Question-Answer Dialogue Modal */}
      {showChatModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#1c1611] text-stone-100 rounded-3xl p-6 md:p-8 max-w-2xl w-full border-2 border-amber-600/40 shadow-2xl space-y-5"
          >
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-serif font-bold text-amber-300">
                  Dialogue with Acharya Sage
                </h3>
              </div>
              <button
                onClick={() => setShowChatModal(false)}
                className="text-stone-400 hover:text-white text-xs font-mono px-2 py-1 bg-stone-900 rounded-lg cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs font-serif text-stone-300">
              <span className="text-amber-400 font-bold block mb-0.5">Currently Discussing:</span>
              "{currentVerse.devanagari.slice(0, 70)}..." — {currentVerse.book}
            </div>

            <div className="space-y-2">
              <textarea
                rows={3}
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask about grammatical etymology, philosophical Advaita/Samkhya interpretation, or astronomical context..."
                className="w-full bg-stone-950 border border-stone-700 rounded-xl p-3 text-xs text-stone-200 font-serif outline-none focus:border-amber-500"
              />
              <button
                onClick={handleAskSage}
                disabled={isChatLoading || !chatMessage.trim()}
                className="w-full py-2.5 bg-gradient-to-r from-amber-700 to-orange-800 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl font-bold font-mono text-xs uppercase flex items-center justify-center gap-2 shadow cursor-pointer disabled:opacity-50"
              >
                {isChatLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 text-amber-300" />}
                <span>Transmit Inquiry</span>
              </button>
            </div>

            {chatAnswer && (
              <div className="max-h-60 overflow-y-auto p-4 bg-stone-950 rounded-2xl border border-amber-900/40 text-xs font-serif text-stone-200 leading-relaxed space-y-2">
                <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
                  Sage Exegesis:
                </span>
                <p>{chatAnswer}</p>
              </div>
            )}
          </motion.div>
        </div>
      )}

    </div>
  );
}
