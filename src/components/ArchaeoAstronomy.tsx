import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Orbit, 
  Compass, 
  Sparkles, 
  Calendar, 
  RefreshCw, 
  Sun, 
  Moon, 
  Clock, 
  HelpCircle,
  Zap,
  Radio,
  BookOpen,
  Atom,
  Quote,
  ChevronRight,
  Layers,
  Infinity,
  Play,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
  Flame,
  Globe
} from "lucide-react";
import { ARCHAEO_ASTRONOMICAL_EVENTS, CARL_SAGAN_COSMOLOGY_DATA } from "../data/indicHeritageData";
import { EphemerisResult } from "../types";

const NAKSHATRAS = [
  { name: "Ashwini", span: "0°00' - 13°20' Mesha", star: "Alpha Arietis (Hamal)", deity: "Ashvini Kumaras" },
  { name: "Bharani", span: "13°20' - 26°40' Mesha", star: "35 Arietis", deity: "Yama" },
  { name: "Krittika", span: "26°40' Mesha - 10°00' Vrishabha", star: "Pleiades Cluster", deity: "Agni" },
  { name: "Rohini", span: "10°00' - 23°20' Vrishabha", star: "Aldebaran", deity: "Prajapati / Brahma" },
  { name: "Mrigashira", span: "23°20' Vrishabha - 6°40' Mithuna", star: "Lambda Orionis", deity: "Soma / Moon" },
  { name: "Ardra", span: "6°40' - 20°00' Mithuna", star: "Betelgeuse", deity: "Rudra / Shiva" },
  { name: "Punarvasu", span: "20°00' Mithuna - 3°20' Karka", star: "Castor & Pollux", deity: "Aditi" },
  { name: "Pushya", span: "3°20' - 16°40' Karka", star: "Delta Cancri", deity: "Brihaspati / Jupiter" },
  { name: "Ashlesha", span: "16°40' - 30°00' Karka", star: "Hydrae Cluster", deity: "Nagas / Serpents" },
  { name: "Magha", span: "0°00' - 13°20' Simha", star: "Regulus (Alpha Leonis)", deity: "Pitris / Ancestors" },
  { name: "Purva Phalguni", span: "13°20' - 26°40' Simha", star: "Delta Leonis", deity: "Bhaga" },
  { name: "Uttara Phalguni", span: "26°40' Simha - 10°00' Kanya", star: "Denebola", deity: "Aryaman" },
  { name: "Hasta", span: "10°00' - 23°20' Kanya", star: "Corvi Cluster", deity: "Surya / Savitur" },
  { name: "Chitra", span: "23°20' Kanya - 6°40' Tula", star: "Spica (Alpha Virginis)", deity: "Vishvakarma / Tvashtr" },
  { name: "Swati", span: "6°40' - 20°00' Tula", star: "Arcturus (Alpha Bootis)", deity: "Vayu / Wind" },
  { name: "Vishakha", span: "20°00' Tula - 3°20' Vrischika", star: "Alpha Librae", deity: "Indragni" },
  { name: "Anuradha", span: "3°20' - 16°40' Vrischika", star: "Delta Scorpii", deity: "Mitra" },
  { name: "Jyeshtha", span: "16°40' - 30°00' Vrischika", star: "Antares (Alpha Scorpii)", deity: "Indra" },
  { name: "Mula", span: "0°00' - 13°20' Dhanu", star: "Galactic Center (Epsilon Scorpii)", deity: "Nirriti" },
  { name: "Purva Ashadha", span: "13°20' - 26°40' Dhanu", star: "Delta Sagittarii", deity: "Apas / Waters" },
  { name: "Uttara Ashadha", span: "26°40' Dhanu - 10°00' Makara", star: "Sigma Sagittarii", deity: "Vishvadevas" },
  { name: "Shravana", span: "10°00' - 23°20' Makara", star: "Altair (Alpha Aquilae)", deity: "Vishnu" },
  { name: "Dhanishta", span: "23°20' Makara - 6°40' Kumbha", star: "Delphini Cluster", deity: "Ashta Vasus" },
  { name: "Shatabhisha", span: "6°40' - 20°00' Kumbha", star: "Gamma Aquarii", deity: "Varuna" },
  { name: "Purva Bhadrapada", span: "20°00' Kumbha - 3°20' Meena", star: "Alpha Pegasi (Markab)", deity: "Aja Ekapada" },
  { name: "Uttara Bhadrapada", span: "3°20' - 16°40' Meena", star: "Gamma Pegasi (Algenib)", deity: "Ahirbudhnya" },
  { name: "Revati", span: "16°40' - 30°00' Meena", star: "Zeta Piscium", deity: "Pushan" },
];

export default function ArchaeoAstronomy() {
  const [activeSubTab, setActiveSubTab] = useState<"carl_sagan" | "ephemeris" | "nakshatras">("carl_sagan");
  const [selectedYear, setSelectedYear] = useState<number>(-3102); // 3102 BCE Kali Yuga
  const [activeEvent, setActiveEvent] = useState(ARCHAEO_ASTRONOMICAL_EVENTS[0]);
  const [loading, setLoading] = useState(false);
  const [ephemerisResult, setEphemerisResult] = useState<EphemerisResult | null>(null);
  const [selectedNakshatra, setSelectedNakshatra] = useState<number>(0);

  // Sagan Reel / Step Calculator State
  const [activeStep, setActiveStep] = useState<number>(0);
  const [showMultiverse, setShowMultiverse] = useState<boolean>(false);
  const [activeMultiverseIndex, setActiveMultiverseIndex] = useState<number>(0);

  // Precession calculation
  const ayanamshaDeg = ((selectedYear - 285) / 71.6);
  const precessionShiftDeg = Math.round(ayanamshaDeg * 10) / 10;

  const getEquinoxNakshatra = (year: number) => {
    if (year <= -4000) return "Mrigashira (Orion) [~4500 BCE Rigvedic Era]";
    if (year <= -2500) return "Rohini (Aldebaran) [~3000 BCE Mahabharata Era]";
    if (year <= -1500) return "Krittika (Pleiades) [~2000 BCE Shatapatha Era]";
    if (year <= -500) return "Bharani [~1000 BCE]";
    if (year <= 500) return "Ashwini / Revati [~0 CE Classical Era]";
    return "Uttara Bhadrapada / Purva Bhadrapada [Modern Era]";
  };

  const getPoleStar = (year: number) => {
    if (year <= -2500 && year >= -3500) return "Thuban (Alpha Draconis) [Ancient Egyptian & Vedic Pole Star]";
    if (year <= -4000) return "Edasich (Iota Draconis)";
    if (year >= 1500) return "Polaris (Alpha Ursae Minoris / Dhruva)";
    if (year >= 0 && year < 1500) return "Kochab (Beta Ursae Minoris)";
    return "Polaris / Transition Zone";
  };

  const handleComputeEphemeris = async (yearTarget: number, eventLabel?: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/ephemeris-calc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          year: yearTarget,
          month: 2,
          day: 18,
          latitude: 23.1765,
          longitude: 75.7885,
          eventName: eventLabel || `Celestial Retro-calculation Year ${yearTarget}`,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setEphemerisResult(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const multiverseBubbles = [
    { name: "Our Universe (Brahmanda 1)", heads: 4, size: "1.0x", lifespan: "311.04 Trillion Years", brahma: "Chaturmukha Brahma", notes: "Current Observable Cosmos" },
    { name: "Brahmanda Alpha (8-Headed Brahma)", heads: 8, size: "2.4x", lifespan: "622 Trillion Years", brahma: "Ashtamukha Brahma", notes: "Higher dimensional gravity constant" },
    { name: "Brahmanda Gamma (16-Headed Brahma)", heads: 16, size: "5.1x", lifespan: "1.24 Quadrillion Years", brahma: "Shodashamukha Brahma", notes: "Extended cosmic inflation rate" },
    { name: "Brahmanda Omega (100-Headed Brahma)", heads: 100, size: "32.0x", lifespan: "7.77 Quadrillion Years", brahma: "Shatamukha Brahma", notes: "Colossal multi-stellar galaxy cluster realm" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#16131f] via-[#1f192b] to-[#120f18] text-stone-100 p-6 md:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950 border border-indigo-500/40 text-indigo-300 text-xs font-mono mb-2">
            <Orbit className="w-3.5 h-3.5 text-indigo-400 animate-spin" style={{ animationDuration: "12s" }} />
            <span>SIDEREAL SKY EPHEMERIS & COSMIC TIME CYCLES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#f5f0ff]">
            Archaeo-Astronomy & Cosmic Time Engine
          </h2>
          <p className="text-sm text-stone-300 font-sans mt-1 max-w-2xl">
            From the 25,772-year Precession of Equinoxes to the 8.64-Billion-Year Day & Night of Brahma featured by Dr. Carl Sagan in <em>Cosmos</em> and the Multiverse (Aneka Koti Brahmanda).
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex bg-black/50 p-1.5 rounded-2xl border border-indigo-900/60 w-full md:w-auto gap-1">
          <button
            onClick={() => setActiveSubTab("carl_sagan")}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              activeSubTab === "carl_sagan"
                ? "bg-amber-600 text-white shadow-lg"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>8.64B Yr Kalpa & Sagan</span>
          </button>

          <button
            onClick={() => setActiveSubTab("ephemeris")}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              activeSubTab === "ephemeris"
                ? "bg-indigo-700 text-white shadow-lg"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Sky Ephemeris</span>
          </button>

          <button
            onClick={() => setActiveSubTab("nakshatras")}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              activeSubTab === "nakshatras"
                ? "bg-indigo-700 text-white shadow-lg"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            <Orbit className="w-3.5 h-3.5" />
            <span>27 Nakshatras</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. CARL SAGAN & 8.64 BILLION YEARS COSMIC CYCLE (COSMOS & MULTIVERSE) */}
      {/* ========================================================================= */}
      {activeSubTab === "carl_sagan" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="space-y-8"
        >
          {/* Hero Reel Video Quote Card */}
          <div className="bg-[#1b1510] border-2 border-amber-800/60 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden text-[#fdf5ea]">
            <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between relative z-10">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 text-xs font-mono">
                  <Quote className="w-3.5 h-3.5 text-amber-400" />
                  <span>CARL SAGAN • COSMOS: A PERSONAL VOYAGE (EPISODE 10)</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-amber-100 leading-tight">
                  Carl Sagan, Hindu Cosmology & The 8.64 Billion-Year Cosmic Cycle
                </h3>

                <blockquote className="text-sm md:text-base font-serif italic text-amber-200/90 leading-relaxed border-l-2 border-amber-500/80 pl-4 py-1">
                  "{CARL_SAGAN_COSMOLOGY_DATA.quoteCosmos}"
                </blockquote>

                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-stone-300">
                  <span className="bg-stone-900/80 px-3 py-1.5 rounded-lg border border-stone-700 text-amber-400 font-bold">
                    4.32B Yrs (Day ☀️) + 4.32B Yrs (Night 🌙) = 8.64 BILLION YEARS 🌌
                  </span>
                  <span className="text-stone-400">Manusmriti 1.64-74 • Bhagavad Gita 8.17</span>
                </div>
              </div>

              {/* Quick Graphic Summary Badge */}
              <div className="bg-gradient-to-br from-amber-950 to-stone-900 border border-amber-700/60 p-6 rounded-2xl w-full lg:w-80 text-center shadow-xl space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                  Brahma's Full Cosmic Ahoratra
                </div>
                <div className="text-4xl font-extrabold font-mono text-amber-300 tracking-tight">
                  8.64 × 10⁹
                </div>
                <div className="text-xs text-stone-300 font-sans">
                  Solar Earth Years (Srishti + Pralaya)
                </div>
                <div className="pt-2 border-t border-amber-800/40 text-[11px] font-mono text-stone-400">
                  Modern Age of Earth: <strong>4.54 Billion Yrs</strong>
                  <br />
                  Modern Age of Universe: <strong>13.8 Billion Yrs</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Step-by-Step Reel Calculation Breakdown */}
          <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#ebdcc4] pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-900">
                  MATHEMATICAL STEP-BY-STEP REEL PROOF
                </span>
                <h4 className="text-2xl font-bold font-serif text-stone-950">
                  How Hindu Cosmology Computes 8.64 Billion Years
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-bold text-stone-700 disabled:opacity-30 cursor-pointer"
                >
                  Previous
                </button>
                <span className="text-xs font-mono font-bold text-amber-900">
                  Step {activeStep + 1} of {CARL_SAGAN_COSMOLOGY_DATA.stepByStepProof.length}
                </span>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(CARL_SAGAN_COSMOLOGY_DATA.stepByStepProof.length - 1, prev + 1))}
                  disabled={activeStep === CARL_SAGAN_COSMOLOGY_DATA.stepByStepProof.length - 1}
                  className="px-3 py-1.5 rounded-lg bg-amber-800 text-white text-xs font-bold hover:bg-amber-900 disabled:opacity-30 cursor-pointer"
                >
                  Next Step →
                </button>
              </div>
            </div>

            {/* Step Navigation Dots */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {CARL_SAGAN_COSMOLOGY_DATA.stepByStepProof.map((stepItem, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    activeStep === idx
                      ? "bg-amber-950 text-amber-100 border-amber-600 shadow-md scale-102"
                      : "bg-white/80 hover:bg-white text-stone-800 border-[#decbb0]"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold mb-1">
                    <span>STEP {stepItem.step}</span>
                    {activeStep === idx && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                  </div>
                  <div className="text-xs font-serif font-bold line-clamp-1">
                    {stepItem.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Step Detailed Card */}
            {(() => {
              const currentStep = CARL_SAGAN_COSMOLOGY_DATA.stepByStepProof[activeStep];
              return (
                <div className="bg-white rounded-2xl border-2 border-amber-200/80 p-6 shadow-inner space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-bold">
                      Step {currentStep.step} : {currentStep.title}
                    </span>
                    <span className="text-xs font-serif italic text-stone-600">
                      Citation: {currentStep.scripture}
                    </span>
                  </div>

                  <p className="text-base font-serif text-stone-900 leading-relaxed">
                    {currentStep.text}
                  </p>

                  {currentStep.subitems && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                      {currentStep.subitems.map((sub, sIdx) => (
                        <div key={sIdx} className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200 text-xs font-mono text-stone-900">
                          {sub}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="p-4 rounded-xl bg-amber-950 text-amber-200 border border-amber-800 font-mono text-sm md:text-base font-bold flex items-center justify-between">
                    <span>{currentStep.formula}</span>
                    <Sparkles className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Side-by-Side: Modern Scientific Cosmology vs Ancient Hindu Cosmology */}
          <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6">
            <div className="flex items-center gap-3">
              <Atom className="w-6 h-6 text-indigo-900" />
              <div>
                <h4 className="text-xl font-bold font-serif text-stone-950">
                  Cosmological Correlation Matrix: Modern Astrophysics vs Surya Siddhanta
                </h4>
                <p className="text-xs text-stone-600 font-sans">
                  Quantitative comparison of cosmic time horizons across gigayear and microsecond scales
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CARL_SAGAN_COSMOLOGY_DATA.scientificComparison.map((comp, cIdx) => (
                <div key={cIdx} className="bg-white p-5 rounded-2xl border border-[#decbb0] shadow-sm space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                    <span className="font-serif font-bold text-base text-stone-950">
                      {comp.phenomenon}
                    </span>
                    <span className="text-[10px] font-mono bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">
                      MATCH
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Indic Canon:</span>
                      <span className="text-amber-800 font-bold">{comp.indicDuration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Modern Astrophysics:</span>
                      <span className="text-indigo-900 font-bold">{comp.modernScience}</span>
                    </div>
                  </div>

                  <p className="text-xs font-sans text-stone-700 pt-1 border-t border-stone-100 leading-relaxed">
                    {comp.correlation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PART 2: MULTIVERSE (ANEKA KOTI BRAHMANDA) SIMULATOR */}
          {/* ========================================================================= */}
          <div className="bg-gradient-to-br from-[#0f111a] via-[#161926] to-[#0c0d14] text-white border-2 border-indigo-900/60 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950 border border-indigo-500/50 text-indigo-300 text-xs font-mono mb-2">
                  <Infinity className="w-3.5 h-3.5 text-indigo-400" />
                  <span>PART 2: MULTIVERSE SIMULATION</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-extrabold font-serif text-[#e8eaf6]">
                  {CARL_SAGAN_COSMOLOGY_DATA.multiverseConcept.title}
                </h4>
                <div className="text-amber-300 font-serif text-lg font-bold mt-1">
                  {CARL_SAGAN_COSMOLOGY_DATA.multiverseConcept.sanskritTerm}
                </div>
              </div>

              <div className="text-xs font-mono text-indigo-300 bg-indigo-950/80 px-4 py-2 rounded-xl border border-indigo-800">
                Srimad Bhagavatam 6.16.37 & 10.14.11
              </div>
            </div>

            {/* Multiverse Bubble Visualizer */}
            <div className="bg-black/60 rounded-2xl border border-indigo-900/40 p-6 space-y-4">
              <div className="text-xs font-mono uppercase text-indigo-400 font-bold flex items-center justify-between">
                <span>Select a Universe Bubble Floating in the Mahavishnu Causal Ocean (Karanodaka)</span>
                <span>4 Distinct Brahmandas Simulated</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {multiverseBubbles.map((bubble, bIdx) => (
                  <div
                    key={bIdx}
                    onClick={() => setActiveMultiverseIndex(bIdx)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all relative overflow-hidden ${
                      activeMultiverseIndex === bIdx
                        ? "bg-indigo-950/90 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] scale-102"
                        : "bg-stone-900/60 border-indigo-900/50 hover:bg-stone-900 text-stone-300"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 to-indigo-600 mb-3 flex items-center justify-center font-bold text-white shadow-lg mx-auto">
                      {bubble.heads}☿
                    </div>
                    <div className="text-sm font-serif font-bold text-center text-white mb-1">
                      {bubble.name}
                    </div>
                    <div className="text-center text-[11px] font-mono text-amber-300 mb-2">
                      Lord: {bubble.brahma}
                    </div>
                    <div className="space-y-1 text-[10px] font-mono text-stone-400 border-t border-indigo-900/40 pt-2">
                      <div className="flex justify-between">
                        <span>Heads of Brahma:</span>
                        <span className="text-white font-bold">{bubble.heads}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Universe Lifespan:</span>
                        <span className="text-amber-400">{bubble.lifespan}</span>
                      </div>
                      <div className="text-[10px] italic text-stone-300 pt-1">
                        {bubble.notes}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Multiverse Scripture Citing & Modern Physics Parallels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="text-sm font-mono uppercase font-bold text-amber-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Sanskrit Scripture Citations on Multiple Universes</span>
                </h5>
                <div className="space-y-3">
                  {CARL_SAGAN_COSMOLOGY_DATA.multiverseConcept.scriptureCitations.map((sc, sIdx) => (
                    <div key={sIdx} className="p-4 bg-stone-950/80 rounded-xl border border-indigo-900/40 space-y-2">
                      <div className="text-xs font-mono font-bold text-indigo-300">{sc.source}</div>
                      {sc.verse && <div className="text-xs font-serif italic text-amber-200/90">{sc.verse}</div>}
                      <div className="text-xs font-sans text-stone-300">{sc.translation}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-sm font-mono uppercase font-bold text-indigo-300 flex items-center gap-2">
                  <Atom className="w-4 h-4" />
                  <span>Modern Theoretical Physics Parallels</span>
                </h5>
                <div className="p-5 bg-stone-950/80 rounded-xl border border-indigo-900/40 space-y-3 text-xs font-sans text-stone-300">
                  <p className="leading-relaxed">
                    Ancient Indian cosmological texts describe countless bubble universes (Brahmandas) emerging with every exhalation of Mahavishnu and dissolving with every inhalation. This mirrors cutting-edge 21st-century astrophysical frameworks:
                  </p>
                  <ul className="space-y-2">
                    {CARL_SAGAN_COSMOLOGY_DATA.multiverseConcept.modernParallels.map((par, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-stone-200">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{par}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 rounded-lg bg-indigo-950/60 border border-indigo-800 text-[11px] font-mono text-indigo-200 mt-2">
                    "Countless universes float like dust particles in a ray of sunlight." — Bhagavata Purana 10.14.11
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ========================================================================= */}
      {/* 2. EPHEMERIS RETRO-CALCULATION & PRECESSION TIME MACHINE */}
      {/* ========================================================================= */}
      {activeSubTab === "ephemeris" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="space-y-8"
        >
          {/* Precession Timeline Slider (-5000 BCE to +3000 CE) */}
          <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-indigo-900">
                  TIME MACHINE EPHEMERIS CONTROLLER
                </span>
                <h3 className="text-2xl font-bold font-serif text-stone-950">
                  Precession of the Equinoxes ({selectedYear < 0 ? `${Math.abs(selectedYear)} BCE` : `${selectedYear} CE`})
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleComputeEphemeris(selectedYear)}
                  disabled={loading}
                  className="px-4 py-2 bg-indigo-900 hover:bg-indigo-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Zap className="w-3.5 h-3.5 text-amber-300" />}
                  <span>Compute Sky Snapshot</span>
                </button>
              </div>
            </div>

            {/* Timeline Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-stone-600">
                <span className="font-bold text-indigo-950">5000 BCE (Rigvedic Antiquity)</span>
                <span className="font-bold text-amber-900 text-sm">
                  Year: {selectedYear < 0 ? `${Math.abs(selectedYear)} BCE` : `${selectedYear} CE`}
                </span>
                <span className="font-bold text-indigo-950">3000 CE (Future Epoch)</span>
              </div>

              <input
                type="range"
                min="-5000"
                max="3000"
                step="25"
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="w-full accent-indigo-700 bg-stone-300 h-3 rounded-lg cursor-pointer"
              />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                <div className="p-3 bg-white rounded-xl border border-[#ebdcc4]">
                  <span className="text-[10px] font-mono text-stone-500 block uppercase">Vernal Equinox Nakshatra</span>
                  <span className="text-xs font-serif font-bold text-stone-900">
                    {getEquinoxNakshatra(selectedYear)}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#ebdcc4]">
                  <span className="text-[10px] font-mono text-stone-500 block uppercase">North Pole Star (Dhruva)</span>
                  <span className="text-xs font-serif font-bold text-stone-900">
                    {getPoleStar(selectedYear)}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#ebdcc4]">
                  <span className="text-[10px] font-mono text-stone-500 block uppercase">Ayanamsha Angle</span>
                  <span className="text-xs font-mono font-bold text-indigo-900">
                    {precessionShiftDeg}°
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#ebdcc4]">
                  <span className="text-[10px] font-mono text-stone-500 block uppercase">Ujjain Zero Meridian</span>
                  <span className="text-xs font-mono font-bold text-amber-900">
                    23.17° N, 75.78° E
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Celestial Events Presets */}
          <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold font-serif text-stone-950 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-800" />
                <span>Scriptural Archaeo-Astronomical Chronology Benchmarks</span>
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ARCHAEO_ASTRONOMICAL_EVENTS.map((ev) => (
                <div
                  key={ev.id}
                  onClick={() => {
                    setSelectedYear(ev.yearBCE ? -ev.yearBCE : 0);
                    setActiveEvent(ev);
                    handleComputeEphemeris(ev.yearBCE ? -ev.yearBCE : 0, ev.title);
                  }}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                    activeEvent.id === ev.id
                      ? "bg-indigo-950 text-white border-indigo-600 shadow-md"
                      : "bg-white hover:bg-stone-50 text-stone-900 border-[#decbb0]"
                  }`}
                >
                  <div className="text-xs font-mono font-bold text-amber-500 mb-1">
                    {ev.yearBCE ? `${ev.yearBCE} BCE` : "HISTORICAL"}
                  </div>
                  <div className="text-sm font-serif font-bold mb-2">{ev.title}</div>
                  <p className="text-xs opacity-80 line-clamp-3 mb-2">{ev.phenomenon}</p>
                  <div className="text-[10px] font-mono opacity-70 border-t border-stone-200/40 pt-2">
                    Ref: {ev.ancientReference}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Computed Ephemeris Snapshot Result */}
          {ephemerisResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#14111f] text-stone-100 rounded-3xl p-6 md:p-8 border border-indigo-800/60 shadow-2xl space-y-6"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-indigo-900/60 pb-4">
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                    EPHEMERIS COMPUTATION SNAPSHOT
                  </span>
                  <h4 className="text-2xl font-bold font-serif text-[#f2ecff]">
                    Planetary Coordinates at Epoch ({selectedYear < 0 ? `${Math.abs(selectedYear)} BCE` : `${selectedYear} CE`})
                  </h4>
                </div>

                <div className="text-xs font-mono text-stone-400">
                  Julian Day: <span className="text-amber-300 font-bold">{ephemerisResult.julianDay}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {ephemerisResult.planets.map((planet, pIdx) => (
                  <div key={pIdx} className="bg-stone-900/80 p-3.5 rounded-xl border border-indigo-900/40 space-y-1">
                    <div className="text-xs font-serif font-bold text-amber-200">{planet.name}</div>
                    <div className="text-sm font-mono font-bold text-white">
                      {Math.round(planet.longitudeDeg * 10) / 10}°
                    </div>
                    <div className="text-[11px] font-sans text-indigo-300">{planet.zodiacSign}</div>
                    <div className="text-[10px] font-mono text-stone-400">
                      {planet.nakshatra} (Pada {planet.pada})
                    </div>
                  </div>
                ))}
              </div>

              {ephemerisResult.scriptureCorrelation && (
                <div className="p-4 bg-stone-950/70 rounded-2xl border border-stone-800">
                  <span className="text-xs font-mono uppercase font-bold text-amber-400 block mb-2">
                    Vedic & Puranic Scripture Correlation:
                  </span>
                  <p className="text-xs font-serif italic text-stone-300 leading-relaxed">
                    "{ephemerisResult.scriptureCorrelation}"
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      )}

      {/* ========================================================================= */}
      {/* 3. 27 NAKSHATRAS CELESTIAL WHEEL DIRECTORY */}
      {/* ========================================================================= */}
      {activeSubTab === "nakshatras" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Orbit className="w-5 h-5 text-indigo-900" />
              <h3 className="text-xl font-bold font-serif uppercase tracking-wider text-stone-950">
                27 Nakshatras (Lunar Mansions) Sidereal Directory
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500">SURYA SIDDHANTA ASTRONOMY</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto pr-1">
            {NAKSHATRAS.map((nak, nIdx) => (
              <div 
                key={nIdx}
                onClick={() => setSelectedNakshatra(nIdx)}
                className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                  selectedNakshatra === nIdx
                    ? "bg-indigo-950 text-white border-indigo-500 shadow-md"
                    : "bg-white/80 hover:bg-white text-stone-900 border-[#decbb0]"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-serif font-bold">
                    {nIdx + 1}. {nak.name}
                  </span>
                  <span className="text-[9px] font-mono opacity-80">{nak.deity}</span>
                </div>
                <div className="text-[10px] font-mono text-amber-500">{nak.span}</div>
                <div className="text-[9px] font-sans opacity-70 mt-1">Star: {nak.star}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
