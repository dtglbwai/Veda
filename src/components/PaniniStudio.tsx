import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Sparkles,
  Search,
  Volume2,
  Share2,
  Copy,
  Check,
  Flame,
  Binary,
  Layers,
  Award,
  ChevronRight,
  Feather,
  Info,
  Terminal,
  Cpu,
  Compass,
  Play,
  CheckCircle2,
  Shuffle
} from "lucide-react";
import {
  PANINI_BIOGRAPHY,
  SHIVA_SUTRAS_CORPUS,
  PRATYAHARA_CATALOG,
  ASHTADHYAYI_CORPUS,
  DHATUPATHA_CORPUS,
  GANAPATHA_CORPUS,
  UNADIPATHA_CORPUS,
  LINGANUSHASANA_CORPUS,
  PANINIYA_SHIKSHA_CORPUS,
  JAMBAVATI_KAVYA_CORPUS,
  COMPUTATIONAL_PANINI_CORPUS
} from "../data/paniniCorpus";
import { PaniniWorkId } from "../types/paniniTypes";
import { sacredAudio } from "../utils/sankalpaGenerator";
import { useLanguage } from "../context/LanguageContext";

export default function PaniniStudio() {
  const { transliterate } = useLanguage();
  const [activeWork, setActiveWork] = useState<PaniniWorkId>("shiva_sutras");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Shiva Sutras & Pratyahara State
  const [selectedPratyahara, setSelectedPratyahara] = useState<string>("अच् (Ac)");
  const [activeShivaSutraId, setActiveShivaSutraId] = useState<number | null>(null);
  const [isChantingShivaSutras, setIsChantingShivaSutras] = useState<boolean>(false);

  // Ashtadhyayi State
  const [selectedAdhyaya, setSelectedAdhyaya] = useState<number>(1);
  const [ashtadhyayiSearch, setAshtadhyayiSearch] = useState<string>("");
  const [sutraTypeFilter, setSutraTypeFilter] = useState<string>("all");

  // Dhatupatha State
  const [selectedGanaNumber, setSelectedGanaNumber] = useState<number>(1);
  const [dhatuSearch, setDhatuSearch] = useState<string>("");
  const [padaFilter, setPadaFilter] = useState<string>("all");

  // Sandhi Simulator State
  const [sandhiWord1, setSandhiWord1] = useState<string>("यदि");
  const [sandhiWord2, setSandhiWord2] = useState<string>("अपि");

  // Linganushasana Gender Filter
  const [selectedGender, setSelectedGender] = useState<number>(0);

  // Copy helper
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Sound reciter using browser speech synthesis with sacred chime
  const reciteSanskrit = (text: string) => {
    sacredAudio.playTempleBell();
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      const voices = window.speechSynthesis.getVoices();
      const indicVoice = voices.find(v => v.lang.includes("hi") || v.lang.includes("sa") || v.name.includes("India"));
      if (indicVoice) {
        utterance.voice = indicVoice;
      }
      window.speechSynthesis.speak(utterance);
    }
  };

  // Auto-play all 14 Shiva Sutras sequentially
  const playSequentialShivaSutras = () => {
    if (isChantingShivaSutras) {
      setIsChantingShivaSutras(false);
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      return;
    }
    setIsChantingShivaSutras(true);
    sacredAudio.playOmDrone();

    let index = 0;
    const reciteNext = () => {
      if (index >= SHIVA_SUTRAS_CORPUS.length) {
        setIsChantingShivaSutras(false);
        return;
      }
      const item = SHIVA_SUTRAS_CORPUS[index];
      setActiveShivaSutraId(item.id);
      if ("speechSynthesis" in window) {
        const u = new SpeechSynthesisUtterance(item.sutra);
        u.rate = 0.85;
        u.onend = () => {
          index++;
          setTimeout(reciteNext, 600);
        };
        u.onerror = () => {
          index++;
          setTimeout(reciteNext, 600);
        };
        window.speechSynthesis.speak(u);
      } else {
        sacredAudio.playTempleBell();
        setTimeout(() => {
          index++;
          reciteNext();
        }, 1500);
      }
    };
    reciteNext();
  };

  // Sandhi Simulator Rules Engine
  const computedSandhi = useMemo(() => {
    const w1 = sandhiWord1.trim();
    const w2 = sandhiWord2.trim();
    if (!w1 || !w2) return null;

    // 1. Yan Sandhi (इको यणचि 6.1.77)
    if ((w1.endsWith("इ") || w1.endsWith("ी") || w1.endsWith("ि")) && /^[अआइउऊऋएऐओऔ]/.test(w2)) {
      const base = w1.replace(/[इीि]$/, "");
      return {
        result: base + "्य" + (w2.startsWith("अ") ? w2.slice(1) : w2),
        sutra: "इको यणचि (६.१.७७)",
        name: "यण्-सन्धिः (Yaṇ Sandhi)",
        explanation: "The Ik vowel (i/ī) is replaced by semivowel 'y' (Yaṇ) before dissimilar vowel."
      };
    }
    if ((w1.endsWith("उ") || w1.endsWith("ू") || w1.endsWith("ु")) && /^[अआइइऋएऐओऔ]/.test(w2)) {
      const base = w1.replace(/[उूु]$/, "");
      return {
        result: base + "्व" + (w2.startsWith("अ") ? w2.slice(1) : w2),
        sutra: "इको यणचि (६.१.७७)",
        name: "यण्-सन्धिः (Yaṇ Sandhi)",
        explanation: "The Ik vowel (u/ū) is replaced by semivowel 'v' (Yaṇ) before dissimilar vowel."
      };
    }

    // 2. Savarna Dirgha (अकः सवर्णे दीर्घः 6.1.101)
    if (
      ((w1.endsWith("अ") || w1.endsWith("ा")) && (w2.startsWith("अ") || w2.startsWith("ा"))) ||
      ((w1.endsWith("इ") || w1.endsWith("ी") || w1.endsWith("ि")) && (w2.startsWith("इ") || w2.startsWith("ी"))) ||
      ((w1.endsWith("उ") || w1.endsWith("ू") || w1.endsWith("ु")) && (w2.startsWith("उ") || w2.startsWith("ू")))
    ) {
      if (w1.endsWith("अ") || w1.endsWith("ा")) {
        const base = w1.replace(/[अा]$/, "");
        const rest = w2.replace(/^[अा]/, "");
        return {
          result: base + "ा" + rest,
          sutra: "अकः सवर्णे दीर्घः (६.१.१०१)",
          name: "सवर्णदीर्घ-सन्धिः (Savarna Dīrgha)",
          explanation: "Two homogeneous short or long vowels merge into a single long vowel."
        };
      }
    }

    // 3. Guna Sandhi (आद् गुणः 6.1.87)
    if (
      (w1.endsWith("अ") || w1.endsWith("ा")) &&
      (w2.startsWith("इ") || w2.startsWith("ी"))
    ) {
      const base = w1.replace(/[अा]$/, "");
      const rest = w2.replace(/^[इी]/, "");
      return {
        result: base + "े" + rest,
        sutra: "आद् गुणः (६.१.८७)",
        name: "गुण-सन्धिः (Guṇa Sandhi)",
        explanation: "Vowel 'a/ā' followed by 'i/ī' merge into Guṇa vowel 'e'."
      };
    }
    if (
      (w1.endsWith("अ") || w1.endsWith("ा")) &&
      (w2.startsWith("उ") || w2.startsWith("ू"))
    ) {
      const base = w1.replace(/[अा]$/, "");
      const rest = w2.replace(/^[उू]/, "");
      return {
        result: base + "ो" + rest,
        sutra: "आद् गुणः (६.१.८७)",
        name: "गुण-सन्धिः (Guṇa Sandhi)",
        explanation: "Vowel 'a/ā' followed by 'u/ū' merge into Guṇa vowel 'o'."
      };
    }

    // 4. Scutva Sandhi (स्तोः श्चुना श्चुः 8.4.40)
    if (w1.endsWith("त्") && (w2.startsWith("च") || w2.startsWith("छ") || w2.startsWith("श"))) {
      const base = w1.slice(0, -1);
      return {
        result: base + "च्" + w2,
        sutra: "स्तोः श्चुना श्चुः (८.४.४०)",
        name: "श्चुत्व-सन्धिः (Ścutva Sandhi)",
        explanation: "Dental stop 't' assimilates into palatal stop 'c' when followed by palatals."
      };
    }

    // Fallback standard concatenation with Paninian note
    return {
      result: `${w1} ${w2}`,
      sutra: "संहितायाम् (६.१.७२)",
      name: "पदान्त-संहिता (General Co-occurrence)",
      explanation: "Words in syntactic proximity; verify specific internal/external sandhi conditioning."
    };
  }, [sandhiWord1, sandhiWord2]);

  // Selected Pratyahara details
  const activePratyaharaData = useMemo(() => {
    return PRATYAHARA_CATALOG.find(p => p.name === selectedPratyahara) || PRATYAHARA_CATALOG[0];
  }, [selectedPratyahara]);

  // Filtered Ashtadhyayi Adhyaya
  const currentAdhyayaData = useMemo(() => {
    const adh = ASHTADHYAYI_CORPUS.find(a => a.adhyaya === selectedAdhyaya) || ASHTADHYAYI_CORPUS[0];
    let filtered = adh.keySutras;
    if (ashtadhyayiSearch.trim()) {
      const q = ashtadhyayiSearch.toLowerCase();
      filtered = filtered.filter(s =>
        s.sutra.includes(q) ||
        s.transliteration.toLowerCase().includes(q) ||
        s.meaning.toLowerCase().includes(q) ||
        s.number.includes(q)
      );
    }
    if (sutraTypeFilter !== "all") {
      filtered = filtered.filter(s => s.type.startsWith(sutraTypeFilter));
    }
    return { ...adh, filteredSutras: filtered };
  }, [selectedAdhyaya, ashtadhyayiSearch, sutraTypeFilter]);

  // Filtered Dhatu Class
  const currentDhatuClass = useMemo(() => {
    const cls = DHATUPATHA_CORPUS.find(d => d.ganaNumber === selectedGanaNumber) || DHATUPATHA_CORPUS[0];
    let roots = cls.roots;
    if (dhatuSearch.trim()) {
      const q = dhatuSearch.toLowerCase();
      roots = roots.filter(r =>
        r.root.includes(q) ||
        r.transliteration.toLowerCase().includes(q) ||
        r.meaningEnglish.toLowerCase().includes(q) ||
        r.meaningSanskrit.includes(q)
      );
    }
    if (padaFilter !== "all") {
      roots = roots.filter(r => r.pada === padaFilter);
    }
    return { ...cls, filteredRoots: roots };
  }, [selectedGanaNumber, dhatuSearch, padaFilter]);

  const worksNav: { id: PaniniWorkId; title: string; devanagari: string; badge: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "shiva_sutras", title: "Māheśvara Sūtras & Pratyāhāras", devanagari: "माहेश्वर-सूत्राणि", badge: "14 SUTRAS", icon: Flame },
    { id: "ashtadhyayi", title: "Aṣṭādhyāyī & The Tripādī", devanagari: "अष्टाध्यायी", badge: "8 ADHYAYAS", icon: BookOpen },
    { id: "dhatupatha", title: "Dhātupāṭha (10 Gaṇas)", devanagari: "धातुपाठः", badge: "2000 ROOTS", icon: Layers },
    { id: "ganapatha", title: "Gaṇapāṭha (Nominal Lists)", devanagari: "गणपाठः", badge: "STEM LISTS", icon: Compass },
    { id: "unadipatha", title: "Uṇādipāṭha (Irregular Derivations)", devanagari: "उणादिपाठः", badge: "PRIMITIVES", icon: Feather },
    { id: "linganushasana", title: "Liṅgānuśāsana (Gender Rules)", devanagari: "लिङ्गानुशासनम्", badge: "GENDER", icon: Info },
    { id: "paniniya_shiksha", title: "Pāṇinīya Śikṣā (Phonetics)", devanagari: "पाणिनीय-शिक्षा", badge: "60 VERSES", icon: Volume2 },
    { id: "jambavati_vijaya", title: "Jāmbavatīvijaya (Lost Kāvya)", devanagari: "जाम्बवतीविजयम्", badge: "POETRY", icon: Award },
    { id: "computational_panini", title: "Computational Linguistics & AI", devanagari: "सङ्गणकीय-व्याकरणम्", badge: "TURING/BNF", icon: Cpu }
  ];

  return (
    <div className="w-full min-h-screen bg-stone-950 text-stone-100 font-sans pb-24">
      {/* Top Academic Provenance & Audio Telemetry Banner */}
      <div className="w-full bg-gradient-to-r from-amber-950/60 via-stone-900 to-amber-950/60 border-b border-amber-900/40 px-4 md:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-mono text-xs font-semibold tracking-wider border border-amber-500/30">
                PĀṆINĪYA VYĀKARAṆA PARAM PARĀ
              </span>
              <span className="px-2 py-0.5 rounded-md bg-stone-800 text-stone-300 text-xs font-mono border border-stone-700">
                ŚĀLĀTURA • TAKṢAŚILĀ • c. 6th-4th BCE
              </span>
              <span className="px-2 py-0.5 rounded-md bg-orange-950 text-orange-300 text-xs font-mono border border-orange-800/40">
                MUNI-TRAYA TRADITION
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-amber-100 tracking-tight flex items-center gap-3">
              <span>{transliterate("महर्षिपाणिनि-ग्रन्थसमवायः")}</span>
              <span className="text-lg md:text-xl font-light text-amber-400/80 font-sans">
                Complete Works of Sage Pāṇini
              </span>
            </h1>
            <p className="text-xs md:text-sm text-stone-300 max-w-4xl leading-relaxed">
              {PANINI_BIOGRAPHY.overview}
            </p>
          </div>

          {/* Sound & Recitation Synthesis Engine */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-center">
            <button
              onClick={() => sacredAudio.playOmDrone()}
              className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-medium flex items-center gap-2 shadow-sm transition-all"
              title="Play 108Hz Om Drone"
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>108Hz Om Drone</span>
            </button>
            <button
              onClick={() => sacredAudio.playTempleBell()}
              className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-medium flex items-center gap-2 shadow-sm transition-all"
              title="Strike 528Hz Temple Bronze Bell"
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              <span>528Hz Bell Chime</span>
            </button>
            <button
              onClick={playSequentialShivaSutras}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg transition-all ${
                isChantingShivaSutras
                  ? "bg-rose-600 text-white animate-pulse"
                  : "bg-amber-600 hover:bg-amber-500 text-stone-950"
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>{isChantingShivaSutras ? "Chanting Sūtras..." : "Recite 14 Sūtras"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Canonical Works Nav Bar */}
      <div className="w-full bg-stone-900/95 sticky top-[73px] z-40 border-b border-stone-800/80 backdrop-blur-md px-4 md:px-8 py-2">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {worksNav.map((work) => {
            const Icon = work.icon;
            const isActive = activeWork === work.id;
            return (
              <button
                key={work.id}
                onClick={() => setActiveWork(work.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  isActive
                    ? "bg-amber-500/20 text-amber-200 border border-amber-500/50 shadow-md shadow-amber-950/40 font-semibold"
                    : "bg-stone-900/60 text-stone-400 hover:text-stone-200 hover:bg-stone-800 border border-transparent"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-400" : "text-stone-500"}`} />
                <span className="font-serif">{transliterate(work.devanagari)}</span>
                <span className="hidden sm:inline text-stone-400">({work.badge})</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 space-y-8">
        {/* WORK 1: SHIVA SUTRAS & PRATYAHARAS */}
        {activeWork === "shiva_sutras" && (
          <motion.div
            key="shiva_sutras"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-8"
          >
            {/* Header intro */}
            <div className="bg-stone-900/80 border border-amber-900/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
                    <Sparkles className="w-4 h-4" />
                    <span>NṚTTĀVASĀNE NAṬARĀJARĀJO NANAṆḌA ḌHAKKĀM NAVAPAÑCAVĀRAM</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-100">
                    {transliterate("माहेश्वर-सूत्राणि (The 14 Shiva Sūtras & Pratyāhāra Generator)")}
                  </h2>
                  <p className="text-xs md:text-sm text-stone-300 max-w-3xl leading-relaxed">
                    At the conclusion of His cosmic dance, Lord Shiva struck His divine drum (Ḍamaru) fourteen times, revealing the 14 phonetic matrices to liberate Sanaka and the sages. Through rule 1.1.71 (आदिरन्त्येन सहेता), these 14 formulas generate the 42 algebraic Pratyāhāras forming the foundational architecture of the Sanskrit phonological engine.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(SHIVA_SUTRAS_CORPUS.map(s => `${s.id}. ${s.sutra} (${s.transliteration})`).join("\n"), "all_shiva_sutras")}
                    className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 rounded-lg text-xs font-mono flex items-center gap-1.5"
                  >
                    {copiedId === "all_shiva_sutras" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy 14 Sūtras</span>
                  </button>
                </div>
              </div>
            </div>

            {/* The 14 Sutras Interactive Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
              {SHIVA_SUTRAS_CORPUS.map((item) => {
                const isSelected = activeShivaSutraId === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveShivaSutraId(item.id);
                      reciteSanskrit(item.sutra);
                    }}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-amber-950/70 border-amber-500 shadow-lg shadow-amber-950/50 scale-[1.02]"
                        : "bg-stone-900/70 border-stone-800 hover:border-amber-700/60 hover:bg-stone-850"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-stone-400 pb-2 border-b border-stone-800">
                      <span className="font-bold text-amber-500">#{item.id}</span>
                      <span className="text-[10px] text-stone-500 truncate max-w-[90px]">{item.vowelOrConsonant}</span>
                    </div>

                    <div className="py-3 text-center space-y-1">
                      <div className="text-xl font-serif font-bold text-amber-100">
                        {transliterate(item.sutra)}
                      </div>
                      <div className="text-xs font-mono text-stone-400">
                        {item.transliteration}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px]">
                      <span className="text-rose-400 font-mono font-bold" title="It-Marker">
                        It: {item.itMarker}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          reciteSanskrit(item.sutra);
                        }}
                        className="text-amber-400 hover:text-amber-300 p-1 rounded hover:bg-stone-800"
                        title="Pronounce"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Pratyahara Explorer & Decoder */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                    <Binary className="w-4 h-4" />
                    <span>ALGEBRAIC PHONOLOGY ENGINE</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-amber-100">
                    Canonical Pratyāhāra Decoder (प्रत्याहार-साधनम्)
                  </h3>
                  <p className="text-xs text-stone-400">
                    Rule 1.1.71: Initial sound + final IT marker encapsulates every phoneme in between, deleting the IT markers via 1.3.3 & 1.3.9.
                  </p>
                </div>

                {/* Quick Selector Pills */}
                <div className="flex flex-wrap items-center gap-1.5 max-w-xl">
                  {PRATYAHARA_CATALOG.map((prat) => (
                    <button
                      key={prat.name}
                      onClick={() => setSelectedPratyahara(prat.name)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                        selectedPratyahara === prat.name
                          ? "bg-amber-500 text-stone-950 font-bold shadow-sm"
                          : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                      }`}
                    >
                      {prat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Pratyahara Analysis Display */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-stone-950/60 rounded-xl p-5 border border-stone-800/80">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-stone-400 uppercase tracking-wider">Formula & Bounds</div>
                  <div className="text-2xl font-serif font-bold text-amber-200">
                    {activePratyaharaData.name}
                  </div>
                  <div className="space-y-1 text-xs text-stone-300 font-mono">
                    <div>Starting Phoneme: <span className="text-amber-400 font-bold">{activePratyaharaData.startingSound}</span></div>
                    <div>Terminal IT Marker: <span className="text-rose-400 font-bold">{activePratyaharaData.endingMarker}</span></div>
                    <div>Phoneme Cardinality: <span className="text-emerald-400 font-bold">{activePratyaharaData.totalSounds} letters</span></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono text-stone-400 uppercase tracking-wider">Encapsulated Phoneme Set</div>
                  <div className="flex flex-wrap gap-1.5">
                    {activePratyaharaData.includedSounds.map((sound, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-amber-950/60 text-amber-200 border border-amber-800/40 rounded-md font-mono text-xs font-semibold"
                      >
                        {sound}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed pt-1">
                    {activePratyaharaData.significance}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono text-stone-400 uppercase tracking-wider">Governing Aṣṭādhyāyī Sūtras</div>
                  <div className="space-y-2">
                    {activePratyaharaData.sampleSutras.map((sut, i) => (
                      <div
                        key={i}
                        className="p-2.5 bg-stone-900 border border-stone-800 rounded-lg text-xs font-mono text-amber-300 flex items-center justify-between"
                      >
                        <span>{sut}</span>
                        <button
                          onClick={() => reciteSanskrit(sut.split(" ")[1] || sut)}
                          className="text-stone-400 hover:text-amber-300"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* WORK 2: ASHTADHYAYI & THE TRIPADI */}
        {activeWork === "ashtadhyayi" && (
          <motion.div
            key="ashtadhyayi"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-8"
          >
            {/* Header intro */}
            <div className="bg-stone-900/80 border border-amber-900/30 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
                    <BookOpen className="w-4 h-4" />
                    <span>AṢṬĀDHYĀYĪ • 8 ADHYĀYAS • 32 PĀDAS • ~3,995 SŪTRAS</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-100">
                    {transliterate("अष्टाध्यायी एवं त्रिपादी (The Generative Grammatical Engine)")}
                  </h2>
                  <p className="text-xs md:text-sm text-stone-300 max-w-3xl leading-relaxed">
                    The crown jewel of human analytical literature. Divided into the <strong className="text-amber-200">Sapāda-saptādhyāyī</strong> (Chapters 1 to 8.1, where rules mutually communicate via conflict resolution 1.4.2) and the <strong className="text-amber-200">Tripādī</strong> (Chapters 8.2 to 8.4, where rules execute sequentially and strictly one-way via 8.2.1 पूर्वत्रासिद्धम्).
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => {
                      const allText = ASHTADHYAYI_CORPUS.map(a => `${a.title}\n${a.keySutras.map(s => `${s.number} ${s.sutra} - ${s.meaning}`).join("\n")}`).join("\n\n");
                      copyToClipboard(allText, "ashtadhyayi_export");
                    }}
                    className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 rounded-lg text-xs font-mono flex items-center gap-1.5"
                  >
                    {copiedId === "ashtadhyayi_export" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Export Key Sūtras</span>
                  </button>
                </div>
              </div>

              {/* 8 Adhyayas Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-6">
                {ASHTADHYAYI_CORPUS.map((adh) => (
                  <button
                    key={adh.adhyaya}
                    onClick={() => setSelectedAdhyaya(adh.adhyaya)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedAdhyaya === adh.adhyaya
                        ? "bg-amber-950/80 border-amber-500 shadow-md shadow-amber-950/40 text-amber-200"
                        : "bg-stone-900 border-stone-800 text-stone-400 hover:bg-stone-850 hover:text-stone-200"
                    }`}
                  >
                    <div className="text-[10px] font-mono text-amber-400 font-semibold">ADHYĀYA {adh.adhyaya}</div>
                    <div className="text-xs font-serif font-bold truncate mt-0.5">{adh.title.split("—")[0]}</div>
                    <div className="text-[10px] text-stone-400 mt-1">{adh.padasCount} Pādas</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Current Adhyaya Overview & Key Sutras */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-800">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-amber-400">SELECTED CHAPTER</span>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-amber-100">
                    {currentAdhyayaData.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {currentAdhyayaData.primaryThemes.map((theme, i) => (
                      <span key={i} className="px-2 py-0.5 bg-stone-800 text-stone-300 rounded text-[11px] border border-stone-700">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Search & Filter Controls */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="text"
                      placeholder="Search sūtra (e.g. 1.1.1, गुण, वृद्धि)..."
                      value={ashtadhyayiSearch}
                      onChange={(e) => setAshtadhyayiSearch(e.target.value)}
                      className="pl-9 pr-3 py-1.5 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <select
                    value={sutraTypeFilter}
                    onChange={(e) => setSutraTypeFilter(e.target.value)}
                    className="px-3 py-1.5 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-300 focus:outline-none focus:border-amber-500"
                  >
                    <option value="all">All Sūtra Types</option>
                    <option value="Samjna">Saṁjñā (Definition)</option>
                    <option value="Paribhasha">Paribhāṣā (Metarule)</option>
                    <option value="Vidhi">Vidhi (Operational)</option>
                    <option value="Adhikara">Adhikāra (Governing)</option>
                  </select>
                </div>
              </div>

              {/* Sutras Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentAdhyayaData.filteredSutras.map((sutra) => (
                  <div
                    key={sutra.number}
                    className="p-5 bg-stone-950/70 border border-stone-800/90 rounded-xl space-y-3 hover:border-amber-800/60 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 font-mono text-xs font-bold border border-amber-800/40">
                          {sutra.number}
                        </span>
                        <span className="text-[11px] font-mono text-stone-400 px-2 py-0.5 bg-stone-900 rounded border border-stone-800">
                          {sutra.type}
                        </span>
                      </div>

                      <div className="flex items-baseline justify-between pt-1">
                        <div className="text-xl font-serif font-bold text-amber-200">
                          {transliterate(sutra.sutra)}
                        </div>
                        <button
                          onClick={() => reciteSanskrit(sutra.sutra)}
                          className="text-amber-400 hover:text-amber-300 p-1 rounded hover:bg-stone-900"
                          title="Recite Sūtra"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-xs font-mono text-stone-400 italic">
                        {sutra.transliteration}
                      </div>

                      <p className="text-xs text-stone-200 leading-relaxed font-medium">
                        {sutra.meaning}
                      </p>
                      <p className="text-xs text-stone-400 leading-relaxed">
                        {sutra.scholarlyExplanation}
                      </p>
                    </div>

                    {sutra.applicationExample && (
                      <div className="p-2.5 bg-stone-900/80 rounded-lg border border-stone-800 text-[11px] font-mono text-amber-300/90">
                        <span className="text-stone-400 font-semibold block mb-0.5">Application:</span>
                        {sutra.applicationExample}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Special Feature: The Tripādī Architecture & Asiddhatva */}
            <div className="bg-gradient-to-br from-amber-950/40 via-stone-900 to-stone-950 border border-amber-700/40 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold">
                <Terminal className="w-4 h-4" />
                <span>THE REWRITE TERMINATION PARADIGM</span>
              </div>
              <h3 className="text-lg md:text-xl font-serif font-bold text-amber-100">
                The Tripādī (त्रिपादी 8.2–8.4) & The Non-Looping Algorithm
              </h3>
              <p className="text-xs md:text-sm text-stone-300 leading-relaxed max-w-4xl">
                A classic problem in compiler design and string rewrite systems is preventing infinite loops. Panini solved this by dividing his grammar at rule 8.2.1: <strong>पूर्वत्रासिद्धम् (Pūrvatrāsiddham)</strong>. Any rule applied in the final three sections (Tripādī) is invisible to earlier rules, and within the Tripādī itself, rule N+1 cannot see the output of rule N. This guarantees that every word derivation completes deterministically in finite steps.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-stone-950/80 rounded-xl border border-stone-800 space-y-1">
                  <div className="text-xs font-mono text-amber-400 font-bold">Section 1 to 8.1</div>
                  <div className="text-sm font-serif font-bold text-stone-200">Sapāda-saptādhyāyī</div>
                  <p className="text-[11px] text-stone-400">Rules are mutually visible. Conflict is resolved by 1.4.2 (Vipratiṣedhe paraṁ kāryam).</p>
                </div>
                <div className="p-3 bg-stone-950/80 rounded-xl border border-stone-800 space-y-1">
                  <div className="text-xs font-mono text-amber-400 font-bold">Section 8.2 to 8.4</div>
                  <div className="text-sm font-serif font-bold text-stone-200">The Tripādī Cascade</div>
                  <p className="text-[11px] text-stone-400">Strictly unidirectional. Later rules cannot trigger prior rules. No backtracking.</p>
                </div>
                <div className="p-3 bg-stone-950/80 rounded-xl border border-stone-800 space-y-1">
                  <div className="text-xs font-mono text-amber-400 font-bold">Sūtra 8.4.68</div>
                  <div className="text-sm font-serif font-bold text-stone-200">Final Closure: अ अ</div>
                  <p className="text-[11px] text-stone-400">Restores closed short 'a' (saṁvṛta) after all operations were performed in open 'a'.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* WORK 3: DHATUPATHA */}
        {activeWork === "dhatupatha" && (
          <motion.div
            key="dhatupatha"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="bg-stone-900/80 border border-amber-900/30 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
                    <Layers className="w-4 h-4" />
                    <span>DHĀTUPĀṬHA • ~2,000 VERBAL ROOTS • 10 GAṆAS</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-100">
                    {transliterate("धातुपाठः (The 10 Classes of Sanskrit Verbal Roots)")}
                  </h2>
                  <p className="text-xs md:text-sm text-stone-300 max-w-3xl leading-relaxed">
                    The complete inventory of dynamic action roots from which all nominal and verbal words in Sanskrit are generated. Classified into 10 distinct conjugational classes (Gaṇas), each with its distinctive stem augment (Vikaraṇa), accentual rules, and semantic domain.
                  </p>
                </div>
              </div>

              {/* 10 Ganas Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-6">
                {DHATUPATHA_CORPUS.map((cls) => (
                  <button
                    key={cls.ganaNumber}
                    onClick={() => setSelectedGanaNumber(cls.ganaNumber)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedGanaNumber === cls.ganaNumber
                        ? "bg-amber-950/80 border-amber-500 shadow-md shadow-amber-950/40 text-amber-200"
                        : "bg-stone-900 border-stone-800 text-stone-400 hover:bg-stone-850 hover:text-stone-200"
                    }`}
                  >
                    <div className="text-[10px] font-mono text-amber-400 font-semibold">GAṆA {cls.ganaNumber}</div>
                    <div className="text-xs font-serif font-bold truncate mt-0.5">{cls.ganaName.split("(")[0]}</div>
                    <div className="text-[10px] text-stone-400 mt-1">Vikaraṇa: {cls.vikarana}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Current Gana Profile & Roots */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-800">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-amber-400">ACTIVE VERBAL CLASS</span>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-amber-100">
                    {currentDhatuClass.ganaName} ({currentDhatuClass.ganaNameSanskrit})
                  </h3>
                  <p className="text-xs text-stone-300 max-w-3xl">
                    {currentDhatuClass.description}
                  </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="text"
                      placeholder="Search root (e.g. भू, gam, stand)..."
                      value={dhatuSearch}
                      onChange={(e) => setDhatuSearch(e.target.value)}
                      className="pl-9 pr-3 py-1.5 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <select
                    value={padaFilter}
                    onChange={(e) => setPadaFilter(e.target.value)}
                    className="px-3 py-1.5 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-300 focus:outline-none focus:border-amber-500"
                  >
                    <option value="all">All Padas</option>
                    <option value="Parasmaipada">Parasmaipada</option>
                    <option value="Atmanepada">Ātmanepada</option>
                    <option value="Ubhayapada">Ubhayapada</option>
                  </select>
                </div>
              </div>

              {/* Roots Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentDhatuClass.filteredRoots.map((dhatu, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-stone-950/70 border border-stone-800/90 rounded-xl space-y-4 hover:border-amber-800/60 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/30">
                          {dhatu.pada}
                        </span>
                        <span className="text-[11px] font-mono text-stone-400 px-2 py-0.5 bg-stone-900 rounded border border-stone-800">
                          Status: {dhatu.itStatus}
                        </span>
                      </div>

                      <div className="flex items-baseline justify-between pt-1">
                        <div>
                          <span className="text-2xl font-serif font-bold text-amber-100 mr-2">
                            {transliterate(dhatu.root)}
                          </span>
                          <span className="text-xs font-mono text-stone-400">
                            ({dhatu.transliteration})
                          </span>
                        </div>
                        <button
                          onClick={() => reciteSanskrit(dhatu.presentThirdPersonSingular.split(" ")[0])}
                          className="text-amber-400 hover:text-amber-300 p-1 rounded hover:bg-stone-900"
                          title="Pronounce"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-xs text-amber-300/90 font-mono">
                        Meaning: <span className="text-stone-200 font-medium">{dhatu.meaningEnglish}</span> ({dhatu.meaningSanskrit})
                      </div>
                    </div>

                    {/* Conjugational Matrix (4 Lakaras) */}
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-stone-900/90 p-3 rounded-lg border border-stone-800">
                      <div>
                        <span className="text-stone-500 text-[10px] block">Present (Laṭ 3s):</span>
                        <span className="text-amber-200 font-semibold">{dhatu.presentThirdPersonSingular}</span>
                      </div>
                      <div>
                        <span className="text-stone-500 text-[10px] block">Past Imperfect (Laṅ 3s):</span>
                        <span className="text-stone-300">{dhatu.pastImperfect}</span>
                      </div>
                      <div>
                        <span className="text-stone-500 text-[10px] block">Future (Lṛṭ 3s):</span>
                        <span className="text-stone-300">{dhatu.future}</span>
                      </div>
                      <div>
                        <span className="text-stone-500 text-[10px] block">Perfect (Liṭ 3s):</span>
                        <span className="text-stone-300">{dhatu.perfect}</span>
                      </div>
                    </div>

                    {/* Example Sentence */}
                    <div className="p-2.5 bg-amber-950/30 rounded-lg border border-amber-900/30 text-xs">
                      <div className="text-amber-200 font-serif font-semibold">
                        {transliterate(dhatu.exampleSentence.split("(")[0])}
                      </div>
                      <div className="text-stone-400 text-[11px] mt-0.5">
                        {dhatu.exampleSentence.includes("(") ? "(" + dhatu.exampleSentence.split("(")[1] : ""}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* WORK 4: GANAPATHA */}
        {activeWork === "ganapatha" && (
          <motion.div
            key="ganapatha"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-8"
          >
            <div className="bg-stone-900/80 border border-amber-900/30 rounded-2xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
                <Compass className="w-4 h-4" />
                <span>GAṆAPĀṬHA • NOMINAL LEXICAL CLASSES</span>
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-100">
                {transliterate("गणपाठः (Nominal Stem Inventories & Closed Word Groups)")}
              </h2>
              <p className="text-xs md:text-sm text-stone-300 max-w-3xl leading-relaxed">
                The companion recension enumerating open and closed lists of nominal stems that share morphological behaviors under specific Aṣṭādhyāyī aphorisms. Including the 35 Pronouns (Sarvādi), the 22 Upasargas (Prādi), and indeclinables (Svarādi).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GANAPATHA_CORPUS.map((gana) => (
                <div
                  key={gana.id}
                  className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/30">
                        {gana.ashtadhyayiReference}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-amber-100">
                      {transliterate(gana.name)}
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {gana.description}
                    </p>
                    <p className="text-xs text-amber-300/80 font-mono">
                      {gana.significance}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono text-stone-400 uppercase">Sample Stems in this Gaṇa:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {gana.sampleStems.map((stem, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-stone-950 border border-stone-800 rounded text-xs font-mono text-stone-200"
                        >
                          {stem}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-stone-950/70 rounded-xl border border-stone-800 text-xs font-mono text-emerald-300">
                    <span className="text-stone-500 block mb-0.5 text-[10px]">Derivational Effect:</span>
                    {gana.derivationalOutcome}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* WORK 5: UNADIPATHA */}
        {activeWork === "unadipatha" && (
          <motion.div
            key="unadipatha"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-8"
          >
            <div className="bg-stone-900/80 border border-amber-900/30 rounded-2xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
                <Feather className="w-4 h-4" />
                <span>UṆĀDIPĀṬHA • PRIMITIVE & IRREGULAR NOUNS</span>
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-100">
                {transliterate("उणादिपाठः (Etymological Derivation of Primitive Words)")}
              </h2>
              <p className="text-xs md:text-sm text-stone-300 max-w-3xl leading-relaxed">
                Rules deriving words whose etymology was considered conventional (Rūḍha) by others, proving that even fundamental nouns like <em>Brahman</em>, <em>Ātman</em>, <em>Vāyu</em>, <em>Agni</em>, and <em>Sūrya</em> derive organically from active verbal roots using the 'Uṇ' affixes.
              </p>
            </div>

            <div className="space-y-6">
              {UNADIPATHA_CORPUS.map((rule, idx) => (
                <div
                  key={idx}
                  className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-stone-800">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/30">
                        {rule.sutraNumber}
                      </span>
                      <span className="text-base md:text-lg font-serif font-bold text-amber-200">
                        {transliterate(rule.sutra)}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-stone-400">
                      Affix: <strong className="text-rose-400">{rule.affix}</strong>
                    </span>
                  </div>

                  <p className="text-xs text-stone-300">
                    {rule.explanation}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                    {rule.derivedWords.map((word, wIdx) => (
                      <div
                        key={wIdx}
                        className="p-3 bg-stone-950/70 border border-stone-800 rounded-xl space-y-1.5"
                      >
                        <div className="text-base font-serif font-bold text-amber-100">
                          {transliterate(word.word)}
                        </div>
                        <div className="text-xs font-mono text-amber-300">
                          Root: {word.root}
                        </div>
                        <div className="text-xs text-stone-200">
                          {word.meaning}
                        </div>
                        <div className="text-[11px] text-stone-400 italic">
                          {word.linguisticNote}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* WORK 6: LINGANUSHASANA */}
        {activeWork === "linganushasana" && (
          <motion.div
            key="linganushasana"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-8"
          >
            <div className="bg-stone-900/80 border border-amber-900/30 rounded-2xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
                <Info className="w-4 h-4" />
                <span>LIṄGĀNUŚĀSANA • RULES OF GRAMMATICAL GENDER</span>
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-100">
                {transliterate("लिङ्गानुशासनम् (Systematic Gender Determination)")}
              </h2>
              <p className="text-xs md:text-sm text-stone-300 max-w-3xl leading-relaxed">
                Panini's scientific treatise formulating precise semantic and morphological criteria for assigning masculine (Puṁliṅga), feminine (Strīliṅga), neuter (Napuṁsakaliṅga), or common gender to Sanskrit words.
              </p>
            </div>

            {/* Gender Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {LINGANUSHASANA_CORPUS.map((sec, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedGender(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all ${
                    selectedGender === idx
                      ? "bg-amber-500 text-stone-950 shadow-md shadow-amber-950/40"
                      : "bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-stone-200 border border-stone-800"
                  }`}
                >
                  {sec.gender}
                </button>
              ))}
            </div>

            {/* Rules in Selected Gender */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LINGANUSHASANA_CORPUS[selectedGender].rules.map((rule, rIdx) => (
                <div
                  key={rIdx}
                  className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-amber-400 block font-semibold">
                      {rule.category}
                    </span>
                    <div className="text-base font-serif font-bold text-amber-100">
                      {transliterate(rule.sanskritRule)}
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {rule.englishExplanation}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-stone-800">
                    <div className="text-xs font-mono text-stone-400">Canonical Examples:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {rule.examples.map((ex, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-stone-950 border border-stone-800 rounded text-xs font-mono text-amber-300"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>

                    {rule.exceptions && (
                      <div className="pt-2 text-[11px] font-mono text-rose-300">
                        <span className="text-stone-500">Exceptions: </span>
                        {rule.exceptions.join(", ")}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* WORK 7: PANINIYA SHIKSHA */}
        {activeWork === "paniniya_shiksha" && (
          <motion.div
            key="paniniya_shiksha"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-8"
          >
            <div className="bg-stone-900/80 border border-amber-900/30 rounded-2xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
                <Volume2 className="w-4 h-4" />
                <span>PĀṆINĪYA ŚIKṢĀ • PHONETICS & VEDIC ARTICULATION</span>
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-100">
                {transliterate("पाणिनीय-शिक्षा (The Science of Articulation & Speech Production)")}
              </h2>
              <p className="text-xs md:text-sm text-stone-300 max-w-3xl leading-relaxed">
                The 60 stanzas formulating the neurological, somatic, and acoustic generation of Vak. Defines the 8 anatomical places of articulation (Ashtau Sthanani), internal/external efforts (Prayatna), and the strict moral/acoustic code of Vedic reciters.
              </p>
            </div>

            {/* Verses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PANINIYA_SHIKSHA_CORPUS.map((verse) => (
                <div
                  key={verse.verseNumber}
                  className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/30">
                        Verse {verse.verseNumber}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400 px-2 py-0.5 bg-stone-900 rounded border border-stone-800">
                        {verse.topic}
                      </span>
                    </div>

                    <div className="pt-2 text-base md:text-lg font-serif font-bold text-amber-100 whitespace-pre-line leading-relaxed">
                      {transliterate(verse.sanskrit)}
                    </div>
                    <div className="text-xs font-mono text-stone-400 italic whitespace-pre-line">
                      {verse.transliteration}
                    </div>

                    <p className="text-xs text-stone-200 leading-relaxed pt-2">
                      {verse.translation}
                    </p>
                  </div>

                  <div className="p-3 bg-amber-950/30 border border-amber-900/30 rounded-xl text-xs text-amber-300/90 leading-relaxed">
                    <span className="text-amber-400 font-bold block mb-0.5">Deep Significance:</span>
                    {verse.deepSignificance}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* WORK 8: JAMBAVATIVIJAYA (POETRY) */}
        {activeWork === "jambavati_vijaya" && (
          <motion.div
            key="jambavati_vijaya"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-8"
          >
            <div className="bg-stone-900/80 border border-amber-900/30 rounded-2xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
                <Award className="w-4 h-4" />
                <span>CLASSICAL MAHĀKĀVYA CORPUS</span>
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-100">
                {transliterate("जाम्बवतीविजयम् / पातालविजयम् (Panini's Classical Poetry)")}
              </h2>
              <p className="text-xs md:text-sm text-stone-300 max-w-3xl leading-relaxed">
                Ancient Sanskrit literary anthologists (Jalhaṇa, Vallabhadeva, Namisādhu, and Rājaśekhara) unanimously celebrated Panini not merely as an austere grammarian, but as an immortal lyric poet whose Mahākāvya celebrated Sri Krishna's conquest of Jambavati in the underworld.
              </p>
            </div>

            <div className="space-y-6">
              {JAMBAVATI_KAVYA_CORPUS.map((poem) => (
                <div
                  key={poem.id}
                  className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-stone-800">
                    <h3 className="text-lg font-serif font-bold text-amber-100">
                      {poem.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-mono text-xs border border-stone-700">
                        {poem.poeticMeter}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 font-mono text-xs border border-amber-800/40">
                        {poem.literarySource}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-400 italic">
                    {poem.context}
                  </p>

                  <div className="p-4 bg-stone-950/80 rounded-xl border border-stone-800 text-base md:text-lg font-serif font-bold text-amber-200 whitespace-pre-line text-center leading-relaxed">
                    {transliterate(poem.sanskrit)}
                  </div>

                  <div className="text-xs font-mono text-stone-400 text-center italic whitespace-pre-line">
                    {poem.transliteration}
                  </div>

                  <p className="text-xs md:text-sm text-stone-200 leading-relaxed text-center">
                    "{poem.translation}"
                  </p>

                  <div className="p-3 bg-stone-950/60 rounded-xl border border-stone-800 text-xs text-stone-400">
                    <strong className="text-amber-300">Literary Appraisal: </strong>
                    {poem.criticalAppraisal}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* WORK 9: COMPUTATIONAL PANINI & SANDHI SIMULATOR */}
        {activeWork === "computational_panini" && (
          <motion.div
            key="computational_panini"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-8"
          >
            <div className="bg-stone-900/80 border border-amber-900/30 rounded-2xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
                <Cpu className="w-4 h-4" />
                <span>TURING COMPLETENESS • BNF • ARTIFICIAL INTELLIGENCE</span>
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-100">
                {transliterate("सङ्गणकीय-पाणिनि (Panini & Modern Computer Science)")}
              </h2>
              <p className="text-xs md:text-sm text-stone-300 max-w-3xl leading-relaxed">
                As demonstrated by Peter Ingerman, Frits Staal, Paul Kiparsky, and Rick Briggs (NASA), Panini formulated the world's first formal generative meta-language. Features like Backus-Naur Form (BNF), zero-cost type tags, context-free rewriting, and acyclic rule engines were fully operational in ancient India.
              </p>
            </div>

            {/* Interactive Sandhi Simulator Engine */}
            <div className="bg-stone-900/90 border border-amber-500/40 rounded-2xl p-6 space-y-6 shadow-xl shadow-amber-950/30">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-amber-400 font-bold">LIVE EXECUTION TRANSDUCER</span>
                  <h3 className="text-lg font-serif font-bold text-amber-100">
                    Interactive Paninian Sandhi Simulator (सन्धि-साधनम्)
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const presets = [
                        { w1: "यदि", w2: "अपि" },
                        { w1: "सु", w2: "आगतम्" },
                        { w1: "विद्या", w2: "आलयः" },
                        { w1: "देव", w2: "इन्द्रः" },
                        { w1: "महा", w2: "उत्सवः" },
                        { w1: "सत्", w2: "चित्" }
                      ];
                      const rand = presets[Math.floor(Math.random() * presets.length)];
                      setSandhiWord1(rand.w1);
                      setSandhiWord2(rand.w2);
                    }}
                    className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg text-xs font-mono flex items-center gap-1.5"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                    <span>Random Pair</span>
                  </button>
                </div>
              </div>

              {/* Input Words */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-stone-400">Word 1 (पूर्वपदम्):</label>
                  <input
                    type="text"
                    value={sandhiWord1}
                    onChange={(e) => setSandhiWord1(e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-950 border border-stone-700 rounded-xl text-lg font-serif text-amber-200 focus:outline-none focus:border-amber-500"
                    placeholder="e.g. यदि, विद्या, सत्"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-stone-400">Word 2 (उत्तरपदम्):</label>
                  <input
                    type="text"
                    value={sandhiWord2}
                    onChange={(e) => setSandhiWord2(e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-950 border border-stone-700 rounded-xl text-lg font-serif text-amber-200 focus:outline-none focus:border-amber-500"
                    placeholder="e.g. अपि, आलयः, चित्"
                  />
                </div>
              </div>

              {/* Computed Transformation Result */}
              {computedSandhi && (
                <div className="p-5 bg-stone-950/80 rounded-xl border border-amber-500/30 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="text-xs font-mono text-amber-400">APPLIED SŪTRA & CLASSIFICATION</div>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono text-xs font-bold border border-emerald-800">
                      {computedSandhi.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 py-2">
                    <div className="text-3xl font-serif font-bold text-amber-300">
                      {computedSandhi.result}
                    </div>
                    <button
                      onClick={() => reciteSanskrit(computedSandhi.result)}
                      className="text-amber-400 hover:text-amber-300 p-2 rounded-lg bg-stone-900 border border-stone-800"
                      title="Pronounce"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-1 text-xs text-stone-300 font-mono">
                    <div>Governing Aphorism: <strong className="text-amber-200">{computedSandhi.sutra}</strong></div>
                    <div>Mechanic: <span className="text-stone-400">{computedSandhi.explanation}</span></div>
                  </div>
                </div>
              )}
            </div>

            {/* Computer Science Concept Concordance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMPUTATIONAL_PANINI_CORPUS.map((feat) => (
                <div
                  key={feat.id}
                  className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-amber-400 font-bold block">
                      {feat.computerScienceConcept}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-amber-100">
                      {feat.title}
                    </h3>
                    <div className="text-xs font-mono text-emerald-400">
                      Paninian Counterpart: {feat.paninianCounterpart}
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed pt-1">
                      {feat.explanation}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-stone-800">
                    <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs font-mono text-amber-300 whitespace-pre-line">
                      {feat.interactiveModel}
                    </div>
                    <div className="text-[11px] text-stone-500 italic">
                      Ref: {feat.academicCitation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
