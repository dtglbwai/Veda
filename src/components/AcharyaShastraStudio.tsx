import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Sparkles,
  Search,
  Volume2,
  Copy,
  Check,
  Flame,
  Award,
  ChevronRight,
  Info,
  Terminal,
  Cpu,
  Compass,
  Play,
  RotateCcw,
  Sliders,
  ExternalLink,
  Share2,
  Layers,
  Activity,
  Calculator,
  Atom,
  Eye,
  CheckCircle2
} from "lucide-react";
import { ACHARYA_WORKS_CORPUS } from "../data/acharyaWorksCorpus";
import { AcharyaId, AcharyaProfile, KeyVerseOrTheorem, TreatiseDetail } from "../types/acharyaTypes";
import { sacredAudio } from "../utils/sankalpaGenerator";
import { useLanguage } from "../context/LanguageContext";

export default function AcharyaShastraStudio() {
  const { transliterate } = useLanguage();

  const [selectedAcharyaId, setSelectedAcharyaId] = useState<AcharyaId>("bhaskaracharya");
  const [activeTab, setActiveTab] = useState<"profile" | "treatises" | "interactive_lab" | "comparative_timeline">("profile");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTreatiseId, setSelectedTreatiseId] = useState<string>("");
  const [selectedVerse, setSelectedVerse] = useState<KeyVerseOrTheorem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isChanting, setIsChanting] = useState(false);

  // --- Interactive Lab State ---
  // 1. Lilavati Lotus Problem
  const [lotusH, setLotusH] = useState<number>(0.5); // height above water
  const [lotusX, setLotusX] = useState<number>(2.0); // distance tilted

  // 2. Aryabhata Pi calculator
  const [circleDiameter, setCircleDiameter] = useState<number>(20000);

  // 3. Madhava Kerala Infinite Series
  const [madhavaTerms, setMadhavaTerms] = useState<number>(25);

  // 4. Brahmagupta Cyclic Quadrilateral
  const [quadA, setQuadA] = useState<number>(10);
  const [quadB, setQuadB] = useState<number>(20);
  const [quadC, setQuadC] = useState<number>(14);
  const [quadD, setQuadD] = useState<number>(25);

  // 5. Patanjali Ashtanga Limb Selector
  const [selectedLimbIndex, setSelectedLimbIndex] = useState<number>(0);

  // Current Acharya Profile
  const currentAcharya: AcharyaProfile = useMemo(() => {
    return ACHARYA_WORKS_CORPUS.find((a) => a.id === selectedAcharyaId) || ACHARYA_WORKS_CORPUS[0];
  }, [selectedAcharyaId]);

  // Handle Copy
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Play Bell & Chant
  const handleChant = (text: string) => {
    sacredAudio.playTempleBell();
    setIsChanting(true);
    sacredAudio.speakMantra(text, 0.85);
    setTimeout(() => setIsChanting(false), 6000);
  };

  // Calculations for Lab
  // 1. Lotus: d = (x^2 - h^2) / (2h)
  const lotusCalculatedDepth = useMemo(() => {
    if (lotusH <= 0) return 0;
    const depth = (lotusX * lotusX - lotusH * lotusH) / (2 * lotusH);
    return Math.max(0, depth);
  }, [lotusH, lotusX]);

  // 2. Aryabhata Pi: 62832 / 20000 = 3.1416
  const aryabhataPiValue = 62832 / 20000;
  const aryabhataCircumference = circleDiameter * aryabhataPiValue;
  const modernCircumference = circleDiameter * Math.PI;
  const piDifference = Math.abs(aryabhataCircumference - modernCircumference);

  // 3. Madhava Series: π = 4 * (1 - 1/3 + 1/5 - 1/7 + ...)
  const madhavaCalculatedPi = useMemo(() => {
    let sum = 0;
    for (let k = 0; k < madhavaTerms; k++) {
      const term = Math.pow(-1, k) / (2 * k + 1);
      sum += term;
    }
    return 4 * sum;
  }, [madhavaTerms]);

  // 4. Brahmagupta Cyclic Quadrilateral Area
  const brahmaguptaArea = useMemo(() => {
    const s = (quadA + quadB + quadC + quadD) / 2;
    const product = (s - quadA) * (s - quadB) * (s - quadC) * (s - quadD);
    if (product <= 0) return 0;
    return Math.sqrt(product);
  }, [quadA, quadB, quadC, quadD]);

  // Filtered Acharyas based on search
  const filteredAcharyas = useMemo(() => {
    if (!searchQuery.trim()) return ACHARYA_WORKS_CORPUS;
    const q = searchQuery.toLowerCase();
    return ACHARYA_WORKS_CORPUS.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.sanskritName.includes(q) ||
        a.magnusOpus.toLowerCase().includes(q) ||
        a.domains.some((d) => d.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Ashtanga Yoga 8 Limbs Data
  const ashtangaLimbs = [
    {
      name: "1. Yama (यम)",
      subname: "Universal Ethical Restraints",
      desc: "Ahimsā (non-violence), Satya (truthfulness), Asteya (non-stealing), Brahmacarya (energy containment), Aparigraha (non-possessiveness). Purifies interpersonal relationships and social field.",
      sutra: "अहिंसासत्यास्तेयब्रह्मचर्यापरिग्रहा यमाः (2.30)",
      impact: "Calms amygdala hyperactivity and social stress hormones."
    },
    {
      name: "2. Niyama (नियम)",
      subname: "Personal Self-Disciplines",
      desc: "Śauca (purity of body & mind), Santoṣa (contentment), Tapas (ardent discipline), Svādhyāya (self-study of sacred texts), Īśvara-praṇidhāna (surrender to the divine).",
      sutra: "शौचसन्तोषतपःस्वाध्यायेश्वरप्रणिधानानि नियमाः (2.32)",
      impact: "Cultivates neuroplastic resilience and metabolic equanimity."
    },
    {
      name: "3. Āsana (आसन)",
      subname: "Steady & Comfortable Posture",
      desc: "Sthira-sukham-āsanam. Posture that is simultaneously steady, grounded, and easeful without muscular strain.",
      sutra: "स्थिरसुखमासनम्॥ प्रयत्नशैथिल्यानन्तसमापत्तिभ्याम् (2.46-47)",
      impact: "Aligns spinal biomechanics and optimizes cerebral spinal fluid flow."
    },
    {
      name: "4. Prāṇāyāma (प्राणायाम)",
      subname: "Breath & Vital Energy Regulation",
      desc: "Regulating inhalation, exhalation, and suspension. Dispels the veil covering inner illumination.",
      sutra: "ततः क्षीयते प्रकाशावरणम् (2.52)",
      impact: "Activates parasympathetic vagal tone and optimizes Heart Rate Variability (HRV)."
    },
    {
      name: "5. Pratyāhāra (प्रत्याहार)",
      subname: "Sensory Withdrawal",
      desc: "The senses withdraw from external sensory stimuli and mimic the quiet, inward-focused state of consciousness.",
      sutra: "स्वविषयासम्प्रयोगे चित्तस्य स्वरूपानुकार इवेन्द्रियाणां प्रत्याहारः (2.54)",
      impact: "Downregulates sensory cortex distractions and prepares anterior cingulate cortex."
    },
    {
      name: "6. Dhāraṇā (धारणा)",
      subname: "Focused Concentration",
      desc: "Fixing the mind-field upon a single sacred point, center (nābhi, hṛdaya, bhrūmadhya), or internal symbol.",
      sutra: "देशबन्धश्चित्तस्य धारणा (3.1)",
      impact: "Dorsolateral prefrontal cortex stabilization and high-focus gamma synchronization."
    },
    {
      name: "7. Dhyāna (ध्यान)",
      subname: "Sustained Meditative Flow",
      desc: "An uninterrupted, continuous stream of awareness toward that object, like pouring oil in an unbroken flow.",
      sutra: "तत्र प्रत्ययैकतानता ध्यानम् (3.2)",
      impact: "Deactivation of default mode network (DMN), generating deep peace."
    },
    {
      name: "8. Samādhi (समाधि)",
      subname: "Unitary Superconsciousness",
      desc: "The mind-field shines forth with the object alone, as if empty of its own subjective egoic identity.",
      sutra: "तदेवार्थमात्रनिर्भासं स्वरूपशून्यमिव समाधिः (3.3)",
      impact: "Dissolution of subject-object dichotomy; non-dual transcendental awareness."
    }
  ];

  return (
    <div id="acharya-shastra-studio" className="min-h-screen bg-stone-950 text-stone-100 pb-24 selection:bg-amber-500/30">
      {/* Top Banner & Header */}
      <div className="relative overflow-hidden border-b border-stone-800 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950 pt-8 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.08),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>COMPLETE WORKS OF MAHARSHIS & ACHARYAS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-stone-100">
                महर्षि-आचार्य-ग्रन्थसमवायः
              </h1>
              <p className="text-stone-400 text-sm sm:text-base max-w-3xl font-sans">
                The Monumental Works of <span className="text-amber-400 font-semibold">Bhāskarācārya</span>,{" "}
                <span className="text-amber-400 font-semibold">Āryabhaṭa</span>,{" "}
                <span className="text-amber-400 font-semibold">Sage Patañjali</span>,{" "}
                <span className="text-amber-400 font-semibold">Bhagavatī & Vedic Ṛṣikās</span>, and Ancient Indian Scientific Pioneers.
              </p>
            </div>

            {/* Quick Audio Chant & Actions */}
            <div className="flex items-center gap-3">
              <button
                id="btn-chant-quote"
                onClick={() => handleChant(currentAcharya.quote.sanskrit)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium text-sm transition-all shadow-lg shadow-amber-900/20 active:scale-95"
              >
                <Volume2 className="w-4 h-4" />
                <span>Chant Shloka</span>
              </button>
              <button
                id="btn-temple-bell"
                onClick={() => sacredAudio.playTempleBell()}
                className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 text-amber-400 transition-all hover:bg-stone-800"
                title="Sound 528Hz Temple Bell"
              >
                <Flame className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Acharya Selector Carousel / Horizontal Bar */}
          <div className="mt-8 pt-6 border-t border-stone-800/80">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                <span>Select Revered Sage or Acharya:</span>
              </div>
              <div className="relative w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                <input
                  type="text"
                  placeholder="Search works, sūtras, math..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-900/90 border border-stone-800 rounded-lg text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-stone-800">
              {filteredAcharyas.map((ach) => {
                const isSelected = ach.id === selectedAcharyaId;
                return (
                  <button
                    key={ach.id}
                    id={`btn-select-${ach.id}`}
                    onClick={() => {
                      setSelectedAcharyaId(ach.id);
                      setSelectedTreatiseId("");
                      setSelectedVerse(null);
                    }}
                    className={`shrink-0 px-4 py-2.5 rounded-xl text-left border transition-all ${
                      isSelected
                        ? "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold shadow-md shadow-amber-950/40"
                        : "bg-stone-900/70 border-stone-800/80 hover:border-stone-700 text-stone-300 hover:text-stone-100"
                    }`}
                  >
                    <div className="text-xs font-serif font-bold whitespace-nowrap">{ach.sanskritName}</div>
                    <div className="text-[11px] text-stone-400 whitespace-nowrap">{ach.name}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex gap-2 mt-6 border-b border-stone-800">
            <button
              id="tab-btn-profile"
              onClick={() => setActiveTab("profile")}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-all flex items-center gap-2 ${
                activeTab === "profile"
                  ? "border-amber-500 text-amber-400"
                  : "border-transparent text-stone-400 hover:text-stone-200"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Biography & Canon</span>
            </button>
            <button
              id="tab-btn-treatises"
              onClick={() => setActiveTab("treatises")}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-all flex items-center gap-2 ${
                activeTab === "treatises"
                  ? "border-amber-500 text-amber-400"
                  : "border-transparent text-stone-400 hover:text-stone-200"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Treatises & Fundamental Sūtras</span>
            </button>
            <button
              id="tab-btn-interactive-lab"
              onClick={() => setActiveTab("interactive_lab")}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-all flex items-center gap-2 ${
                activeTab === "interactive_lab"
                  ? "border-amber-500 text-amber-400"
                  : "border-transparent text-stone-400 hover:text-stone-200"
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Scientific & Mathematical Lab</span>
            </button>
            <button
              id="tab-btn-timeline"
              onClick={() => setActiveTab("comparative_timeline")}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-all flex items-center gap-2 ${
                activeTab === "comparative_timeline"
                  ? "border-amber-500 text-amber-400"
                  : "border-transparent text-stone-400 hover:text-stone-200"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Chronological Matrix</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* TAB 1: Profile & Overview */}
        {activeTab === "profile" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Acharya Hero Card */}
            <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col lg:flex-row gap-8 justify-between">
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-md bg-stone-800 text-stone-300 text-xs font-mono">
                      {currentAcharya.era}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-amber-950/60 border border-amber-800/40 text-amber-400 text-xs font-medium">
                      {currentAcharya.region}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-stone-800 text-stone-400 text-xs">
                      {currentAcharya.traditionOrSchool}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">
                      {currentAcharya.name} ({currentAcharya.sanskritName})
                    </h2>
                    <p className="text-stone-400 text-xs italic mt-0.5">{currentAcharya.honorific}</p>
                  </div>

                  <p className="text-stone-300 leading-relaxed text-sm sm:text-base">
                    {currentAcharya.biography}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {currentAcharya.domains.map((dom, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-stone-800/80 border border-stone-700/60 text-xs text-stone-300"
                      >
                        {dom}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Shloka Highlight Box */}
                <div className="lg:w-96 bg-stone-950/90 border border-amber-900/30 rounded-xl p-5 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-amber-500/80 font-medium">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-amber-500" />
                        <span>Canonical Shloka</span>
                      </span>
                      <button
                        onClick={() => handleCopy(currentAcharya.quote.sanskrit, "profile_shloka")}
                        className="text-stone-400 hover:text-stone-200"
                        title="Copy Shloka"
                      >
                        {copiedId === "profile_shloka" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <p className="text-stone-100 font-serif text-sm leading-relaxed">
                      {currentAcharya.quote.sanskrit}
                    </p>
                    <p className="text-stone-400 font-mono text-xs italic">
                      {currentAcharya.quote.transliteration}
                    </p>
                    <p className="text-stone-300 text-xs border-t border-stone-800/80 pt-2 leading-normal">
                      "{currentAcharya.quote.meaning}"
                    </p>
                  </div>

                  <button
                    onClick={() => handleChant(currentAcharya.quote.sanskrit)}
                    className="w-full mt-2 py-2 px-3 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-medium flex items-center justify-center gap-2 transition-all"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Recite with 528Hz Resonance</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Magnum Opus & Global Impact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-lg">
                  <BookOpen className="w-5 h-5 text-amber-500" />
                  <span>Magnum Opus: {currentAcharya.magnusOpus}</span>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  This work stands as an immortal pillar of Sanatan intellectual history, providing foundational principles, mathematical algorithms, and philosophical structures that guided centuries of scholarship.
                </p>
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Included Treatises:</span>
                  <ul className="mt-2 space-y-1.5">
                    {currentAcharya.treatises.map((t) => (
                      <li key={t.id} className="text-xs text-stone-300 flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                        <span className="font-semibold text-amber-300/90">{t.title}</span> — {t.totalVersesOrChapters}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-lg">
                  <GlobeIcon className="w-5 h-5 text-amber-500" />
                  <span>Global Historical Transmission & Impact</span>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {currentAcharya.globalImpact}
                </p>
                <div className="p-3 bg-stone-950/60 border border-stone-800/80 rounded-xl text-xs text-stone-400 leading-relaxed">
                  <strong className="text-stone-200">Historical Note:</strong> Transmission through Persian scholars (Al-Khwarizmi, Al-Biruni, Faizi) and European scholars (Colebrooke, Whish, Hankel) reshaped modern calculus, trigonometry, and computer science.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Treatises & Fundamental Sūtras */}
        {activeTab === "treatises" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Treatises Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentAcharya.treatises.map((treatise) => {
                const isSelected = selectedTreatiseId === treatise.id;
                return (
                  <div
                    key={treatise.id}
                    className={`bg-stone-900/80 border rounded-2xl p-6 space-y-4 transition-all flex flex-col justify-between ${
                      isSelected ? "border-amber-500 ring-1 ring-amber-500/50" : "border-stone-800 hover:border-stone-700"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono">
                          {treatise.totalVersesOrChapters}
                        </span>
                        <BookOpen className="w-4 h-4 text-stone-500" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-stone-100">{treatise.title}</h3>
                      <h4 className="text-xs text-amber-400/90 font-serif">{treatise.sanskritTitle}</h4>
                      <p className="text-stone-300 text-xs leading-relaxed pt-1">{treatise.summary}</p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-stone-800">
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-1">
                          Core Breakthroughs:
                        </div>
                        <ul className="space-y-1">
                          {treatise.keyContributions.slice(0, 2).map((c, i) => (
                            <li key={i} className="text-xs text-stone-400 flex items-start gap-1.5">
                              <span className="text-amber-500 font-bold">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => setSelectedTreatiseId(isSelected ? "" : treatise.id)}
                        className={`w-full py-2 px-3 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                          isSelected
                            ? "bg-amber-600 text-white"
                            : "bg-stone-800 hover:bg-stone-700 text-stone-200"
                        }`}
                      >
                        <span>{isSelected ? "Hide Sūtras & Proofs" : "View Sūtras & Mathematical Proofs"}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Verses & Proofs Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500" />
                <span>Primary Sūtras, Theorems & Mathematical Deductions</span>
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {currentAcharya.treatises
                  .filter((t) => !selectedTreatiseId || t.id === selectedTreatiseId)
                  .flatMap((t) => t.sampleVerses)
                  .map((verse) => (
                    <div
                      key={verse.id}
                      className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-800 text-amber-400">
                            {verse.sourceTreatise} • {verse.chapterOrSutraNumber}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleCopy(verse.sanskrit, verse.id)}
                              className="p-1 rounded text-stone-400 hover:text-stone-200"
                              title="Copy Sanskrit"
                            >
                              {copiedId === verse.id ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                            <button
                              onClick={() => handleChant(verse.sanskrit)}
                              className="p-1 rounded text-amber-400 hover:text-amber-300"
                              title="Chant Shloka"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Sanskrit text */}
                        <div className="p-3.5 rounded-xl bg-stone-950/80 border border-amber-950/40">
                          <p className="text-stone-100 font-serif text-sm leading-relaxed">
                            {verse.sanskrit}
                          </p>
                          <p className="text-stone-400 font-mono text-xs italic mt-1">
                            {verse.transliteration}
                          </p>
                        </div>

                        {/* Translation */}
                        <p className="text-stone-300 text-xs leading-relaxed">
                          <strong className="text-stone-100">Translation: </strong>
                          {verse.translation}
                        </p>

                        {/* Scientific significance */}
                        <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-xl space-y-1">
                          <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            <span>Scientific & Historical Significance:</span>
                          </div>
                          <p className="text-stone-300 text-xs leading-relaxed">
                            {verse.scientificSignificance}
                          </p>
                        </div>

                        {/* Mathematical Proof if applicable */}
                        {verse.mathematicalProofOrExplanation && (
                          <div className="p-3 bg-stone-950/90 border border-stone-800 rounded-xl space-y-1 font-mono text-xs text-stone-300">
                            <div className="text-amber-400 font-sans font-semibold text-[11px]">
                              Mathematical Proof / Formula:
                            </div>
                            <p className="text-amber-200/90">{verse.mathematicalProofOrExplanation}</p>
                          </div>
                        )}

                        {verse.practicalExample && (
                          <div className="text-xs text-stone-400">
                            <strong className="text-stone-300">Practical Demonstration: </strong>
                            {verse.practicalExample}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Interactive Scientific & Mathematical Lab */}
        {activeTab === "interactive_lab" && (
          <div className="space-y-10 animate-fadeIn">
            {/* Introduction */}
            <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-lg">
                  <Calculator className="w-5 h-5" />
                  <span>प्रत्यक्ष-प्रयोगशाला — Interactive Scientific Laboratory</span>
                </div>
                <p className="text-stone-400 text-xs sm:text-sm">
                  Simulate and calculate exact algorithms from Bhāskarācārya's Līlāvatī, Āryabhaṭa's Pi formula, Patañjali's Aṣṭāṅga Yoga limbs, and Mādhava's infinite series calculus.
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono whitespace-nowrap">
                Accurate Mathematical Verification
              </div>
            </div>

            {/* LAB 1: Bhaskaracharya's Lilavati Lotus Problem */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-xl">
                    <span>1. Bhāskarācārya's Līlāvatī: The Lotus in the Pond Problem</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    Solve the famous riddle of the lotus bud swaying in the wind using Pythagorean geometry: d = (x² - h²) / (2h)
                  </p>
                </div>
                <button
                  onClick={() => {
                    setLotusH(0.5);
                    setLotusX(2.0);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono flex items-center gap-1.5 transition-all self-start"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                  <span>Reset to Original Riddle</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Sliders & Inputs */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-300">Height of bud above water surface (h):</span>
                      <span className="font-mono text-amber-400 font-bold">{lotusH.toFixed(2)} cubits (हस्त)</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="3.0"
                      step="0.05"
                      value={lotusH}
                      onChange={(e) => setLotusH(parseFloat(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-300">Horizontal distance displaced by wind (x):</span>
                      <span className="font-mono text-amber-400 font-bold">{lotusX.toFixed(2)} cubits (हस्त)</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="6.0"
                      step="0.1"
                      value={lotusX}
                      onChange={(e) => setLotusX(parseFloat(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  {/* Shloka reference */}
                  <div className="p-3 bg-stone-950/80 border border-stone-800 rounded-xl text-xs space-y-1">
                    <div className="text-stone-400 font-serif italic">
                      "सरसोऽमलवारिपूर्णे नीरपृष्ठादधः स्थितात्..."
                    </div>
                    <p className="text-stone-300 text-[11px]">
                      A lotus bud stands h cubits above water. Swayed by wind, it touches the water at distance x. What is the depth of the lake?
                    </p>
                  </div>
                </div>

                {/* Mathematical Output Box */}
                <div className="bg-stone-950 border border-amber-900/30 rounded-xl p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
                      Calculated Geometric Solution:
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-1">
                      <div className="p-3 bg-stone-900/90 rounded-lg border border-stone-800">
                        <div className="text-[11px] text-stone-400">Pond Depth (d):</div>
                        <div className="text-2xl font-serif font-bold text-amber-400">
                          {lotusCalculatedDepth.toFixed(3)}
                        </div>
                        <div className="text-[10px] text-stone-500">cubits (हस्त)</div>
                      </div>

                      <div className="p-3 bg-stone-900/90 rounded-lg border border-stone-800">
                        <div className="text-[11px] text-stone-400">Total Lotus Stem Length:</div>
                        <div className="text-2xl font-serif font-bold text-stone-100">
                          {(lotusCalculatedDepth + lotusH).toFixed(3)}
                        </div>
                        <div className="text-[10px] text-stone-500">cubits (हस्त)</div>
                      </div>
                    </div>

                    <div className="p-3 bg-stone-900/50 rounded-lg font-mono text-[11px] text-stone-300 space-y-1">
                      <div>Formula: d = (x² - h²) / (2h)</div>
                      <div>Calculation: (({lotusX}²) - ({lotusH}²)) / (2 × {lotusH})</div>
                      <div>
                        = ({(lotusX * lotusX).toFixed(2)} - {(lotusH * lotusH).toFixed(2)}) / {(2 * lotusH).toFixed(2)} ={" "}
                        <strong className="text-amber-400">{lotusCalculatedDepth.toFixed(3)} cubits</strong>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Exact solution formulated by Bhāskarācārya in 1150 CE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 2: Aryabhata's Pi Approximation */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-xl">
                    <span>2. Āryabhaṭa's Value of Pi: 62,832 / 20,000 = 3.1416</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    Āryabhaṭīya Gaṇitapāda Verse 10: "चतुरधिकं शतमष्टगुणं द्वाषष्टिस्तथा सहस्राणाम्..."
                  </p>
                </div>
                <div className="text-xs font-mono text-stone-400">Composed 499 CE (Age 23)</div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <label className="text-xs text-stone-300 block">Circle Diameter (Units):</label>
                  <input
                    type="number"
                    value={circleDiameter}
                    onChange={(e) => setCircleDiameter(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-xl text-amber-400 font-mono text-sm focus:outline-none focus:border-amber-500"
                  />
                  <div className="flex gap-2">
                    {[100, 1000, 20000, 40000].map((val) => (
                      <button
                        key={val}
                        onClick={() => setCircleDiameter(val)}
                        className="px-2.5 py-1 rounded bg-stone-800 text-stone-300 text-xs hover:bg-stone-700"
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed pt-2">
                    Āryabhaṭa explicitly declared this value as <span className="text-amber-400 font-semibold">āsannaḥ</span> (approaching/approximate), anticipating the irrational nature of π centuries before European mathematicians proved it in 1761.
                  </p>
                </div>

                <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl space-y-2">
                  <div className="text-xs text-stone-400 font-medium">Āryabhaṭa's Circumference:</div>
                  <div className="text-2xl font-mono font-bold text-amber-400">
                    {aryabhataCircumference.toLocaleString("en-US", { maximumFractionDigits: 4 })}
                  </div>
                  <div className="text-xs text-stone-500 font-mono">
                    = Diameter × (62832 / 20000)
                  </div>
                  <div className="text-xs text-emerald-400 font-medium pt-2">
                    π = 3.1416 (Precision: 99.998%)
                  </div>
                </div>

                <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl space-y-2">
                  <div className="text-xs text-stone-400 font-medium">Modern Floating-Point Circumference:</div>
                  <div className="text-2xl font-mono font-bold text-stone-200">
                    {modernCircumference.toLocaleString("en-US", { maximumFractionDigits: 4 })}
                  </div>
                  <div className="text-xs text-stone-500 font-mono">
                    = Diameter × Math.PI
                  </div>
                  <div className="text-xs text-stone-400 pt-2">
                    Difference: {piDifference.toFixed(4)} units (negligible)
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 3: Madhava of Kerala Infinite Series Calculus */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-xl">
                    <span>3. Mādhava of Kerala's Infinite Series for Pi (c. 1380 CE)</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    The birth of mathematical analysis: π = 4 × (1 - 1/3 + 1/5 - 1/7 + 1/9 - ...)
                  </p>
                </div>
                <div className="px-3 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-mono">
                  Kerala School of Mathematics
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-300">Number of Series Terms (N):</span>
                    <span className="font-mono text-amber-400 font-bold">{madhavaTerms} terms</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={madhavaTerms}
                    onChange={(e) => setMadhavaTerms(parseInt(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl space-y-1">
                    <div className="text-xs text-stone-400">Approximation with {madhavaTerms} terms:</div>
                    <div className="text-2xl font-mono font-bold text-amber-400">
                      {madhavaCalculatedPi.toFixed(8)}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      True π: 3.14159265...
                    </div>
                  </div>

                  <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl space-y-1">
                    <div className="text-xs text-stone-400">Calculus Origin Truth:</div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Preserved in Jyeṣṭhadeva's <em>Yuktibhāṣā</em>, Madhava discovered this series 300 years before Leibniz (1673) and Newton. He added correction terms (Antya-saṁskāra) yielding 11 decimal places!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 4: Patanjali's Ashtanga Yoga Architecture */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-xl">
                  <span>4. Bhagavān Patañjali's Aṣṭāṅga Yoga Systematics (अष्टाङ्ग-योगः)</span>
                </div>
                <p className="text-xs text-stone-400 mt-1">
                  The 8-limbed architectural map for stilling the mind-field (Citta-vṛtti Nirodha) and realizing pure awareness.
                </p>
              </div>

              {/* Limbs Step Navigation */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                {ashtangaLimbs.map((limb, i) => {
                  const isSelected = selectedLimbIndex === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedLimbIndex(i)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold"
                          : "bg-stone-950/80 border-stone-800 hover:border-stone-700 text-stone-400 hover:text-stone-200"
                      }`}
                    >
                      <div className="text-xs font-bold truncate">{limb.name}</div>
                      <div className="text-[10px] text-stone-500 truncate">{limb.subname}</div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Limb Details */}
              <div className="p-6 bg-stone-950 border border-amber-900/30 rounded-2xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-amber-400">
                      {ashtangaLimbs[selectedLimbIndex].name} — {ashtangaLimbs[selectedLimbIndex].subname}
                    </h4>
                    <p className="text-xs font-mono text-stone-400 mt-0.5">
                      Canonical Sūtra: {ashtangaLimbs[selectedLimbIndex].sutra}
                    </p>
                  </div>
                  <button
                    onClick={() => handleChant(ashtangaLimbs[selectedLimbIndex].sutra)}
                    className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-medium flex items-center gap-1.5 self-start"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Recite Sūtra</span>
                  </button>
                </div>

                <p className="text-stone-300 text-sm leading-relaxed">
                  {ashtangaLimbs[selectedLimbIndex].desc}
                </p>

                <div className="p-3 bg-stone-900/60 border border-stone-800 rounded-xl text-xs space-y-1">
                  <div className="text-emerald-400 font-semibold">Neurological & Physiological Impact:</div>
                  <p className="text-stone-300">{ashtangaLimbs[selectedLimbIndex].impact}</p>
                </div>
              </div>
            </div>

            {/* LAB 5: Brahmagupta Cyclic Quadrilateral Formula */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-xl">
                  <span>5. Brahmagupta's Formula: Area = √((s-a)(s-b)(s-c)(s-d))</span>
                </div>
                <p className="text-xs text-stone-400 mt-1">
                  Brāhmasphuṭa Siddhānta 12.21: Exact area formula for any cyclic quadrilateral inscribed in a circle.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-stone-400">Side a:</label>
                    <input
                      type="number"
                      value={quadA}
                      onChange={(e) => setQuadA(Math.max(1, parseFloat(e.target.value) || 1))}
                      className="w-full px-3 py-1.5 bg-stone-950 border border-stone-800 rounded-lg text-amber-400 font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-stone-400">Side b:</label>
                    <input
                      type="number"
                      value={quadB}
                      onChange={(e) => setQuadB(Math.max(1, parseFloat(e.target.value) || 1))}
                      className="w-full px-3 py-1.5 bg-stone-950 border border-stone-800 rounded-lg text-amber-400 font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-stone-400">Side c:</label>
                    <input
                      type="number"
                      value={quadC}
                      onChange={(e) => setQuadC(Math.max(1, parseFloat(e.target.value) || 1))}
                      className="w-full px-3 py-1.5 bg-stone-950 border border-stone-800 rounded-lg text-amber-400 font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-stone-400">Side d:</label>
                    <input
                      type="number"
                      value={quadD}
                      onChange={(e) => setQuadD(Math.max(1, parseFloat(e.target.value) || 1))}
                      className="w-full px-3 py-1.5 bg-stone-950 border border-stone-800 rounded-lg text-amber-400 font-mono text-sm"
                    />
                  </div>
                </div>

                <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl space-y-2 flex flex-col justify-center">
                  <div className="text-xs text-stone-400">Semi-Perimeter (s):</div>
                  <div className="font-mono text-lg text-stone-200">
                    s = ({quadA} + {quadB} + {quadC} + {quadD}) / 2 = {((quadA + quadB + quadC + quadD) / 2).toFixed(2)}
                  </div>
                  <div className="text-xs text-amber-400 font-semibold pt-2">Calculated Area:</div>
                  <div className="text-3xl font-mono font-bold text-amber-400">
                    {brahmaguptaArea.toFixed(3)} sq units
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Comparative Chronological Matrix */}
        {activeTab === "comparative_timeline" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6">
              <h3 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-amber-500" />
                <span>Sanatana Scientific & Philosophical Chronological Matrix</span>
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm">
                A historical overview of ancient Indian thinkers, their major breakthroughs, and modern European equivalents.
              </p>
            </div>

            <div className="overflow-x-auto border border-stone-800 rounded-2xl bg-stone-900/90">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-stone-800 bg-stone-950 text-stone-400">
                    <th className="p-4 font-semibold">Sage / Acharya</th>
                    <th className="p-4 font-semibold">Era</th>
                    <th className="p-4 font-semibold">Core Treatise</th>
                    <th className="p-4 font-semibold">Breakthrough Discovery</th>
                    <th className="p-4 font-semibold">European Precedence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800/60">
                  {ACHARYA_WORKS_CORPUS.map((ach) => (
                    <tr
                      key={ach.id}
                      onClick={() => {
                        setSelectedAcharyaId(ach.id);
                        setActiveTab("profile");
                      }}
                      className="hover:bg-amber-500/5 cursor-pointer transition-colors"
                    >
                      <td className="p-4 font-serif font-bold text-amber-400">
                        {ach.name}
                        <div className="text-[10px] text-stone-500 font-sans font-normal">{ach.sanskritName}</div>
                      </td>
                      <td className="p-4 font-mono text-stone-300">{ach.era}</td>
                      <td className="p-4 font-medium text-stone-200">{ach.magnusOpus}</td>
                      <td className="p-4 text-stone-300">{ach.domains.join(", ")}</td>
                      <td className="p-4 text-emerald-400 text-[11px]">{ach.globalImpact.slice(0, 85)}...</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
