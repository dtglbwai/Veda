import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  BookOpen,
  Sparkles,
  Award,
  Video,
  ExternalLink,
  ChevronRight,
  Flame,
  Orbit,
  Compass,
  Layers,
  Check,
  Copy,
  Sliders,
  Volume2,
  Calendar,
  Share2,
  Microscope,
  Zap,
  Globe,
  Radio,
  FileText,
  Clock,
  Shield,
  Eye,
  CheckCircle2,
  RotateCcw
} from "lucide-react";
import {
  CONTEMPORARY_RESEARCHERS_CORPUS,
  CONTEMPORARY_RESEARCH_CATEGORIES,
  ContemporaryResearcher
} from "../data/contemporaryResearchersData";
import { NavTab } from "./Navbar";

interface ContemporaryResearchersStudioProps {
  onNavigateToTab?: (tabId: NavTab) => void;
}

export default function ContemporaryResearchersStudio({
  onNavigateToTab
}: ContemporaryResearchersStudioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResearcherId, setSelectedResearcherId] = useState<string>("nilesh_oak");
  const [activeStudioMode, setActiveStudioMode] = useState<
    "dossiers" | "av_simulator" | "kailasa_acoustics" | "epigraphy_archive" | "trs_podcasts"
  >("dossiers");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // --- 1. Nilesh Oak AV Epoch Simulator State ---
  // Year in BCE (positive number for BCE, negative for CE)
  const [simYearBCE, setSimYearBCE] = useState<number>(5561);

  // Calculate AV status based on Nilesh Oak's celestial proper motion curve
  // Arundhati ahead between 11091 BCE and 4508 BCE
  const avStatus = useMemo(() => {
    const isAhead = simYearBCE <= 11091 && simYearBCE >= 4508;
    // Normalized displacement metric
    const peakYear = (11091 + 4508) / 2; // ~7800 BCE
    const span = (11091 - 4508) / 2;
    const diff = Math.abs(simYearBCE - peakYear);
    const displacementAngle = isAhead ? (1 - diff / span) * 1.8 : -0.8;
    return {
      isArundhatiAhead: isAhead,
      displacementArcMinutes: displacementAngle.toFixed(2),
      verdict: isAhead
        ? "Arundhati (Alcor) WALKS AHEAD of Vasistha (Mizar) — VALID MAHĀBHĀRATA EPOCH"
        : "Vasistha (Mizar) walks ahead of Arundhati — INVALID for Vyasa's Observation"
    };
  }, [simYearBCE]);

  // --- 2. Praveen Mohan Musical Pillar Acoustic Synthesizer ---
  const audioCtxRef = useRef<AudioContext | null>(null);
  const [activeNote, setActiveNote] = useState<string | null>(null);

  const NOTES: { name: string; svara: string; freq: number; tone: string }[] = [
    { name: "Shadja", svara: "Sa", freq: 240, tone: "Granite Core (Base)" },
    { name: "Rishabha", svara: "Re", freq: 270, tone: "Resonant Quartz" },
    { name: "Gandhara", svara: "Ga", freq: 300, tone: "Metallic Ingot Vein" },
    { name: "Madhyama", svara: "Ma", freq: 320, tone: "Hollow Flute Cavity" },
    { name: "Panchama", svara: "Pa", freq: 360, tone: "Bell Metal Harmonic" },
    { name: "Dhaivata", svara: "Dha", freq: 400, tone: "Micro-Crystalline Granite" },
    { name: "Nishada", svara: "Ni", freq: 450, tone: "High Chime Resonator" },
    { name: "Tar Shadja", svara: "Sa'", freq: 480, tone: "Apex Acoustic Node" }
  ];

  const playPillarTone = (freq: number, svara: string) => {
    setActiveNote(svara);
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Stone resonant chime physics: fundamental + metallic inharmonic overtones
      const now = ctx.currentTime;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.3, now);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
      masterGain.connect(ctx.destination);

      // 1. Fundamental chime
      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(freq, now);
      osc1.connect(masterGain);
      osc1.start(now);
      osc1.stop(now + 1.8);

      // 2. Bell-metal overtone (1.78x harmonic)
      const osc2 = ctx.createOscillator();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(freq * 1.78, now);
      const gain2 = ctx.createGain();
      gain2.gain.setValueAtTime(0.12, now);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      osc2.connect(gain2);
      gain2.connect(masterGain);
      osc2.start(now);
      osc2.stop(now + 1.2);

      // 3. High ring chime (2.42x)
      const osc3 = ctx.createOscillator();
      osc3.type = "sine";
      osc3.frequency.setValueAtTime(freq * 2.42, now);
      const gain3 = ctx.createGain();
      gain3.gain.setValueAtTime(0.08, now);
      gain3.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
      osc3.connect(gain3);
      gain3.connect(masterGain);
      osc3.start(now);
      osc3.stop(now + 0.8);

      setTimeout(() => setActiveNote(null), 800);
    } catch (e) {
      console.error("Audio error", e);
    }
  };

  // Filtered researchers list
  const filteredResearchers = useMemo(() => {
    return CONTEMPORARY_RESEARCHERS_CORPUS.filter((r) => {
      const matchesCategory =
        selectedCategory === "all" || r.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.epithet.toLowerCase().includes(q) ||
        r.primaryDiscipline.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        r.groundbreakingDiscoveries.some(
          (d) =>
            d.title.toLowerCase().includes(q) ||
            d.description.toLowerCase().includes(q)
        ) ||
        r.keyBooksOrWorks.some((b) => b.title.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeResearcher = useMemo(() => {
    return (
      CONTEMPORARY_RESEARCHERS_CORPUS.find(
        (r) => r.id === selectedResearcherId
      ) || CONTEMPORARY_RESEARCHERS_CORPUS[0]
    );
  }, [selectedResearcherId]);

  const handleCopyCitation = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-6 space-y-6 text-stone-200">
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c1510] via-[#241a13] to-[#120e0b] border-2 border-amber-600/60 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Contemporary Sanatan Scholars & Investigators</span>
              <span className="text-[10px] px-2 py-0.2 rounded bg-amber-900/90 text-amber-200">
                OAK • MOHAN • JAIN • TRS • BHATY
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-serif font-black text-amber-100 tracking-tight leading-tight">
              Work of Modern Sanatan Researchers, Podcasters & Historians
            </h1>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
              Explore the empirical renaissance led by today's foremost investigators: Praveen Mohan's temple engineering investigations, Nilesh Oak's 5561 BCE & 12209 BCE archaeoastronomy proofs, Dr. Meenakshi Jain's epigraphic documentation of Ayodhya & sacred murtis, Ranveer Allahbadia's (BeerBiceps) 300+ TRS civilizational discourses, Tarun Bindlish's celestial simulations, Rupa Bhaty's Sanskrit astronomy, and the collective body of modern researchers defending Bharat's antiquity.
            </p>

            {/* Quick Stat Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono">
              <div className="px-3 py-1 rounded-xl bg-black/40 border border-amber-800/60 text-amber-300 flex items-center gap-1.5">
                <Microscope className="w-3.5 h-3.5 text-amber-400" />
                <span>16 Leading Researchers</span>
              </div>
              <div className="px-3 py-1 rounded-xl bg-black/40 border border-cyan-800/60 text-cyan-300 flex items-center gap-1.5">
                <Orbit className="w-3.5 h-3.5 text-cyan-400" />
                <span>5561 BCE Arundhati-Vasistha Epoch</span>
              </div>
              <div className="px-3 py-1 rounded-xl bg-black/40 border border-emerald-800/60 text-emerald-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kailasa & Lepakshi Engineering</span>
              </div>
              <div className="px-3 py-1 rounded-xl bg-black/40 border border-rose-800/60 text-rose-300 flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-rose-400" />
                <span>TRS 300+ Episodes Master Archive</span>
              </div>
            </div>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-auto shrink-0">
            <button
              onClick={() => setActiveStudioMode("dossiers")}
              className={`px-4 py-2.5 rounded-xl font-serif text-xs font-bold transition-all flex items-center justify-between gap-3 cursor-pointer border ${
                activeStudioMode === "dossiers"
                  ? "bg-amber-700 text-white border-amber-400 shadow-lg shadow-amber-950/60"
                  : "bg-stone-900/80 text-stone-300 border-stone-800 hover:bg-stone-800 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>Researcher Dossiers</span>
              </div>
              <span className="text-[10px] font-mono opacity-80">16 PROFILES</span>
            </button>

            <button
              onClick={() => setActiveStudioMode("av_simulator")}
              className={`px-4 py-2.5 rounded-xl font-serif text-xs font-bold transition-all flex items-center justify-between gap-3 cursor-pointer border ${
                activeStudioMode === "av_simulator"
                  ? "bg-cyan-700 text-white border-cyan-400 shadow-lg shadow-cyan-950/60"
                  : "bg-stone-900/80 text-stone-300 border-stone-800 hover:bg-stone-800 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <Orbit className="w-4 h-4 text-cyan-300" />
                <span>Nilesh Oak AV Simulator</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                5561 BCE
              </span>
            </button>

            <button
              onClick={() => setActiveStudioMode("kailasa_acoustics")}
              className={`px-4 py-2.5 rounded-xl font-serif text-xs font-bold transition-all flex items-center justify-between gap-3 cursor-pointer border ${
                activeStudioMode === "kailasa_acoustics"
                  ? "bg-orange-700 text-white border-orange-400 shadow-lg shadow-orange-950/60"
                  : "bg-stone-900/80 text-stone-300 border-stone-800 hover:bg-stone-800 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-orange-300" />
                <span>Praveen Mohan Stone Physics</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-orange-950 text-orange-300 border border-orange-800">
                PILLARS & CAVE 16
              </span>
            </button>

            <button
              onClick={() => setActiveStudioMode("trs_podcasts")}
              className={`px-4 py-2.5 rounded-xl font-serif text-xs font-bold transition-all flex items-center justify-between gap-3 cursor-pointer border ${
                activeStudioMode === "trs_podcasts"
                  ? "bg-rose-700 text-white border-rose-400 shadow-lg shadow-rose-950/60"
                  : "bg-stone-900/80 text-stone-300 border-stone-800 hover:bg-stone-800 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-rose-300" />
                <span>BeerBiceps TRS Discourse Index</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-rose-950 text-rose-300 border border-rose-800">
                PODCASTS
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Mode Content Switcher */}
      {activeStudioMode === "av_simulator" && (
        <div className="p-6 rounded-3xl bg-[#17130f] border-2 border-cyan-600/70 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase">
                <Orbit className="w-4 h-4 animate-spin text-cyan-400" />
                <span>Nilesh Nilkanth Oak's Master Discovery</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-black text-white mt-1">
                Arundhati-Vasistha (AV) Celestial Epoch Simulator
              </h2>
              <p className="text-xs text-stone-300 font-sans mt-0.5">
                Testing Sage Vyasa's observation in Mahabharata Bhishma Parva 6.3.29: "अरुन्धती तया राजञ्जितः श्वशुरमन्तः"
              </p>
            </div>
            <button
              onClick={() => setSimYearBCE(5561)}
              className="px-3.5 py-1.5 rounded-xl bg-cyan-950 border border-cyan-600 text-cyan-300 text-xs font-mono font-bold hover:bg-cyan-900 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to 5561 BCE</span>
            </button>
          </div>

          {/* Interactive Slider */}
          <div className="bg-[#1e1713] p-5 rounded-2xl border border-stone-800 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <label className="text-xs font-mono uppercase text-amber-300 font-bold">
                Select Year (BCE): <strong className="text-lg text-white font-serif">{simYearBCE} BCE</strong>
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSimYearBCE(12209)}
                  className="px-2.5 py-1 rounded bg-stone-900 border border-stone-700 text-stone-300 text-[11px] font-mono hover:text-white"
                >
                  12209 BCE (Ramayana)
                </button>
                <button
                  onClick={() => setSimYearBCE(5561)}
                  className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-500 text-cyan-300 text-[11px] font-mono font-bold"
                >
                  5561 BCE (Mahabharata)
                </button>
                <button
                  onClick={() => setSimYearBCE(3138)}
                  className="px-2.5 py-1 rounded bg-stone-900 border border-stone-700 text-stone-300 text-[11px] font-mono hover:text-white"
                >
                  3138 BCE (Aryabhata Tradition)
                </button>
                <button
                  onClick={() => setSimYearBCE(1500)}
                  className="px-2.5 py-1 rounded bg-stone-900 border border-stone-700 text-stone-300 text-[11px] font-mono hover:text-white"
                >
                  1500 BCE (Colonial AIT)
                </button>
              </div>
            </div>

            <input
              type="range"
              min="500"
              max="15000"
              step="50"
              value={simYearBCE}
              onChange={(e) => setSimYearBCE(Number(e.target.value))}
              className="w-full h-2.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />

            <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
              <span>15,000 BCE (Pleistocene)</span>
              <span className="text-cyan-400 font-bold">11,091 BCE (AV Transition Start)</span>
              <span className="text-amber-400 font-bold">5,561 BCE (War Year)</span>
              <span className="text-cyan-400 font-bold">4,508 BCE (AV Transition End)</span>
              <span>500 BCE (Classical Era)</span>
            </div>
          </div>

          {/* Results Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-5 rounded-2xl border-2 transition-all ${
              avStatus.isArundhatiAhead
                ? "bg-emerald-950/40 border-emerald-500/80 text-emerald-200"
                : "bg-rose-950/40 border-rose-500/80 text-rose-200"
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {avStatus.isArundhatiAhead ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <Zap className="w-5 h-5 text-rose-400 shrink-0" />
                )}
                <h3 className="text-sm font-serif font-bold uppercase tracking-wider">
                  Observation Status at {simYearBCE} BCE
                </h3>
              </div>
              <p className="text-base font-serif font-bold leading-snug">
                {avStatus.verdict}
              </p>
              <div className="mt-3 pt-3 border-t border-white/10 text-xs font-mono space-y-1">
                <div>Relative Right Ascension Offset: <strong>{avStatus.displacementArcMinutes} arcmin</strong></div>
                <div>Arundhati (Alcor) Proper Motion: <strong>Active Leading Quad</strong></div>
                <div>Vasistha (Mizar) Coordinate: <strong>Trailing / Preceded</strong></div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1a1410] border border-stone-800 space-y-2 text-xs">
              <h4 className="text-xs font-serif font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Why This Scientifically Proves 5561 BCE</span>
              </h4>
              <p className="text-stone-300 leading-relaxed">
                Nilesh Oak analyzed the relative proper motion and precession of Alcor and Mizar across 25,000 years. Arundhati (Alcor) walked ahead of Vasistha ONLY from <strong>11091 BCE to 4508 BCE</strong>. Before 11091 BCE, Vasistha walked ahead; after 4508 BCE, Vasistha walked ahead.
              </p>
              <p className="text-stone-300 leading-relaxed">
                Therefore, any date proposed for the Mahabharata after 4508 BCE (such as 3138 BCE, 1924 BCE, or 900 BCE) directly contradicts Sage Vyasa's eyewitness astronomical observation!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3. Praveen Mohan Kailasa & Resonant Acoustic Physics Mode */}
      {activeStudioMode === "kailasa_acoustics" && (
        <div className="p-6 rounded-3xl bg-[#17130f] border-2 border-orange-600/70 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2 text-orange-400 text-xs font-mono font-bold uppercase">
                <Flame className="w-4 h-4 text-orange-400" />
                <span>Praveen Mohan's Temple Archaeology & Physics</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-black text-white mt-1">
                Kailasa Temple Engineering & Musical Resonant Pillars
              </h2>
              <p className="text-xs text-stone-300 font-sans mt-0.5">
                Direct audio synthesis of the 7 musical granite pillars (Hampi & Nellaiappar) and structural analysis of Cave 16 Ellora.
              </p>
            </div>
          </div>

          {/* Interactive Musical Pillars Audio Player */}
          <div className="bg-[#1f1712] p-5 rounded-2xl border border-stone-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-serif font-bold text-amber-200">
                  Tap Resonant Granite Pillars (Sapta Svara Chimes)
                </h3>
              </div>
              <span className="text-[10px] font-mono text-stone-400">
                Web Audio API Physical Modeling
              </span>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              At Vittala Temple (Hampi) and Nellaiappar Temple, monolithic granite pillars are engineered with varied internal densities, bell-metal impurities, and hollow cavities to resonate at precise musical frequencies when struck:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {NOTES.map((note) => {
                const isPlaying = activeNote === note.svara;
                return (
                  <button
                    key={note.svara}
                    onClick={() => playPillarTone(note.freq, note.svara)}
                    className={`p-3 rounded-2xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                      isPlaying
                        ? "bg-amber-500 text-black border-white scale-105 shadow-xl shadow-amber-500/50 ring-2 ring-white"
                        : "bg-stone-900/90 border-stone-700 text-stone-200 hover:bg-amber-950/80 hover:border-amber-500 hover:text-amber-200"
                    }`}
                  >
                    <span className="text-lg font-serif font-black">{note.svara}</span>
                    <span className="text-[10px] font-mono opacity-80">{note.name}</span>
                    <span className="text-[9px] font-mono text-amber-400 mt-1">{note.freq} Hz</span>
                    <span className="text-[8px] text-stone-400 text-center mt-1 truncate w-full">
                      {note.tone}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Kailasa Temple Excavation Math */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#1c1511] border border-amber-900/40 space-y-2">
              <h4 className="text-xs font-serif font-bold text-amber-300 uppercase tracking-wider">
                400,000 Tons Basalt Scooped
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Carved completely top-down from a single basalt mountain cliff. If 1,000 men worked 12 hours a day with chisels, they would have had to quarry 5 tons of hard basalt per hour, 365 days a year for 20 years without a single mistake.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1c1511] border border-amber-900/40 space-y-2">
              <h4 className="text-xs font-serif font-bold text-amber-300 uppercase tracking-wider">
                Zero Debris in Surrounding Valley
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Praveen Mohan investigated the entire Aurangabad geography: 400,000 tons of quarry rubble would fill an entire valley or build a fortress, yet no rubble exists anywhere near Ellora.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1c1511] border border-amber-900/40 space-y-2">
              <h4 className="text-xs font-serif font-bold text-amber-300 uppercase tracking-wider">
                High-Speed Lathe & Rotary Tooling
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Hoysala temples (Belur & Halebidu) and Warangal thousand-pillar halls show microscopic circular grooves on hard granite and soapstone, proving high-RPM rotational machining (*Bhrama Yantras*).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 4. BeerBiceps TRS Podcast Archive Mode */}
      {activeStudioMode === "trs_podcasts" && (
        <div className="p-6 rounded-3xl bg-[#17130f] border-2 border-rose-600/70 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
                <Radio className="w-4 h-4 text-rose-400 animate-pulse" />
                <span>The Ranveer Show (TRS) Sanatan Archive</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-black text-white mt-1">
                BeerBiceps Ranveer Allahbadia's Civilizational Masterclasses
              </h2>
              <p className="text-xs text-stone-300 font-sans mt-0.5">
                Over 300 long-form deep conversations with India's leading archaeologists, Tantra sadhakas, historians, and Vedic scientists.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                guest: "Rajarshi Nandy",
                topic: "Tantra, Bhairava Sadhana & Kundalini",
                views: "15M+ Views",
                badge: "TANTRA SHASTRA",
                desc: "The monumental 4-part series that brought authentic Kaula and Shakta sadhana, mantra physics, and deity invocations into mainstream homes."
              },
              {
                guest: "Nilesh Nilkanth Oak",
                topic: "5561 BCE Mahabharata & 12209 BCE Ramayana",
                views: "5M+ Views",
                badge: "ARCHAEOASTRONOMY",
                desc: "Nilesh Oak explains the 300+ astronomy timestamps of Sage Vyasa and Sage Valmiki to millions of Indian youth."
              },
              {
                guest: "Praveen Mohan",
                topic: "Kailasa Temple & Lost Ancient Technology",
                views: "8M+ Views",
                badge: "TEMPLE TECH",
                desc: "High-impact video analysis of top-down basalt excavation, Lepakshi floating pillar, and sonic acoustic architecture."
              },
              {
                guest: "J. Sai Deepak",
                topic: "Temple Autonomy & The Deity as a Juristic Person",
                views: "4M+ Views",
                badge: "JURISPRUDENCE",
                desc: "Constitutional arguments for freeing Hindu temples from state control, Sabarimala, and civilizational decolonization."
              },
              {
                guest: "Sanjeev Sanyal",
                topic: "Satellite Radar Mapping of Sarasvati River",
                views: "3.5M+ Views",
                badge: "SATELLITE HYDROLOGY",
                desc: "How ISRO multispectral satellites proved that the Sarasvati river was 7 km wide and supported 80% of Harappan cities."
              },
              {
                guest: "Ami Ganatra",
                topic: "Debunking Mahabharata & Ramayana TV Myths",
                views: "2.8M+ Views",
                badge: "TEXTUAL CRITICISM",
                desc: "Reveals how popular television serials invented fake stories (Draupadi laughing at Duryodhana, Karna's false victimhood) not found in Vyasa's BORI edition."
              }
            ].map((ep, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#1c1511] border border-rose-900/40 space-y-2 hover:border-rose-600 transition-all group">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800">
                    {ep.badge}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">{ep.views}</span>
                </div>
                <h4 className="text-sm font-serif font-bold text-amber-200 group-hover:text-white transition-colors">
                  {ep.guest}: {ep.topic}
                </h4>
                <p className="text-xs text-stone-300 font-sans leading-relaxed">
                  {ep.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Main Explorer: Categories Strip + Search */}
      <div className="space-y-4">
        {/* Category Pills Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {CONTEMPORARY_RESEARCH_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all cursor-pointer border flex items-center gap-2 ${
                  isSelected
                    ? "bg-amber-700 text-white border-amber-400 shadow-md shadow-amber-950"
                    : "bg-stone-900/80 text-stone-300 border-stone-800 hover:bg-stone-800 hover:text-white"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-black/40 text-amber-300">
                  {cat.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by researcher name, discovery (e.g. 5561 BCE, Kailasa, Ayodhya, Tantra, Sarasvati, OIT)..."
            className="w-full bg-[#16120e] border border-stone-800 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 font-sans"
          />
        </div>
      </div>

      {/* 6. Two-Column Layout: Researcher Selector List & Detailed Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Researcher Selector Sidebar (4 Cols) */}
        <div className="lg:col-span-4 space-y-2 max-h-[85vh] overflow-y-auto no-scrollbar pr-1">
          <div className="text-[11px] font-mono uppercase text-amber-400 font-bold px-1 mb-1">
            {filteredResearchers.length} Researchers & Thinkers
          </div>

          {filteredResearchers.map((r) => {
            const isSelected = r.id === activeResearcher.id;
            return (
              <button
                key={r.id}
                onClick={() => setSelectedResearcherId(r.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 group ${
                  isSelected
                    ? "bg-gradient-to-r from-amber-900/90 to-[#2c1d14] border-amber-500 text-white shadow-lg shadow-amber-950/60"
                    : "bg-[#16120e]/90 border-stone-800/80 text-stone-300 hover:bg-[#201813] hover:border-amber-700/60 hover:text-stone-100"
                }`}
              >
                <span className="text-2xl shrink-0 p-1.5 rounded-xl bg-black/40 border border-stone-800">
                  {r.avatarEmoji}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-xs font-serif font-black text-amber-100 group-hover:text-amber-300 truncate">
                      {r.name}
                    </h3>
                    <span className="text-[8px] font-mono uppercase px-1.5 py-0.2 rounded bg-amber-950 text-amber-400 border border-amber-800/60 shrink-0">
                      {r.category.replace("_", " ")}
                    </span>
                  </div>

                  <p className="text-[10px] text-stone-400 line-clamp-1 font-sans mt-0.5">
                    {r.epithet}
                  </p>

                  <div className="flex items-center gap-2 mt-1 text-[9px] font-mono text-stone-500">
                    <span className="truncate">{r.keyPlatform}</span>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected
                      ? "text-amber-400 translate-x-0.5"
                      : "text-stone-600 group-hover:text-stone-400"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right: Comprehensive Researcher Dossier (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          {activeResearcher && (
            <div className="bg-[#17130f] border-2 border-amber-600/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 animate-in fade-in duration-150">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-stone-800">
                <div className="flex items-start sm:items-center gap-3.5">
                  <span className="text-4xl p-3 rounded-2xl bg-black/50 border border-amber-500/40 shrink-0">
                    {activeResearcher.avatarEmoji}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-serif font-black text-white">
                        {activeResearcher.name}
                      </h2>
                      {activeResearcher.honorific && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700">
                          {activeResearcher.honorific}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-amber-300 font-serif font-semibold mt-0.5">
                      {activeResearcher.epithet}
                    </p>
                    <p className="text-[11px] text-stone-400 font-mono mt-0.5">
                      {activeResearcher.keyPlatform} • {activeResearcher.followersOrReach}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleCopyCitation(
                        `${activeResearcher.name} - ${activeResearcher.epithet}. Key Works: ${activeResearcher.keyBooksOrWorks.map((b) => b.title).join(", ")}`,
                        activeResearcher.id
                      )
                    }
                    className="px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-300 text-xs font-mono hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedId === activeResearcher.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-amber-400" />
                    )}
                    <span>{copiedId === activeResearcher.id ? "Copied" : "Cite"}</span>
                  </button>
                </div>
              </div>

              {/* Summary Bio */}
              <div className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans bg-[#1d1712] p-4 rounded-2xl border border-stone-800">
                {activeResearcher.summary}
              </div>

              {/* Groundbreaking Discoveries */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-serif font-black text-amber-200 uppercase tracking-wider">
                    Groundbreaking Scientific & Historical Discoveries
                  </h3>
                </div>

                <div className="space-y-3">
                  {activeResearcher.groundbreakingDiscoveries.map((disc, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#1b1511] border border-amber-900/50 space-y-2"
                    >
                      <h4 className="text-xs sm:text-sm font-serif font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span>{disc.title}</span>
                      </h4>
                      <p className="text-xs text-stone-300 font-sans leading-relaxed">
                        {disc.description}
                      </p>

                      <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-sans">
                        <div className="p-2.5 rounded-xl bg-black/40 border border-stone-800 space-y-0.5">
                          <strong className="text-[10px] font-mono text-cyan-400 uppercase block">
                            Empirical Evidence:
                          </strong>
                          <span className="text-stone-300">{disc.empiricalEvidence}</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-black/40 border border-stone-800 space-y-0.5">
                          <strong className="text-[10px] font-mono text-amber-400 uppercase block">
                            Scriptural / Shastra Source:
                          </strong>
                          <span className="text-stone-300">
                            {disc.scripturalOrHistoricalCorrelation}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Books & Publications */}
              {activeResearcher.keyBooksOrWorks.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <h3 className="text-sm font-serif font-black text-amber-200 uppercase tracking-wider">
                      Seminal Books & Published Works
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeResearcher.keyBooksOrWorks.map((book, bIdx) => (
                      <div
                        key={bIdx}
                        className="p-3.5 rounded-2xl bg-[#1b1511] border border-stone-800 space-y-1.5 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[9px] font-mono px-2 py-0.2 rounded bg-amber-950 text-amber-400 border border-amber-800/40 inline-block mb-1">
                            {book.yearOrType}
                          </span>
                          <h4 className="text-xs font-serif font-bold text-stone-100">
                            {book.title}
                          </h4>
                          <p className="text-[11px] text-stone-400 font-sans leading-relaxed mt-1">
                            {book.description}
                          </p>
                        </div>
                        {book.externalLink && (
                          <a
                            href={book.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 hover:text-amber-200 pt-1"
                          >
                            <span>Explore Publication</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notable Videos / Podcast Episodes */}
              {activeResearcher.notableVideosOrEpisodes && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-rose-400" />
                    <h3 className="text-sm font-serif font-black text-rose-200 uppercase tracking-wider">
                      Notable Lectures & Podcast Dialogues
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeResearcher.notableVideosOrEpisodes.map((vid, vIdx) => (
                      <div
                        key={vIdx}
                        className="p-3.5 rounded-2xl bg-[#1c1512] border border-rose-950/60 space-y-1"
                      >
                        <div className="text-[10px] font-mono text-rose-400 uppercase font-semibold">
                          {vid.topic}
                        </div>
                        <h4 className="text-xs font-serif font-bold text-stone-100">
                          {vid.title}
                        </h4>
                        <p className="text-[11px] text-stone-400 font-sans leading-relaxed">
                          {vid.description}
                        </p>
                        <div className="pt-1 text-[10px] font-mono text-amber-300">
                          Key Takeaway: {vid.keyTakeaway}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Methodology & Quotes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#15110d] border border-stone-800 space-y-2">
                  <h4 className="text-xs font-serif font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Microscope className="w-3.5 h-3.5 text-amber-400" />
                    <span>Scientific Methodology</span>
                  </h4>
                  <ul className="space-y-1 text-xs text-stone-300 list-disc list-inside">
                    {activeResearcher.empiricalMethodology.map((m, mIdx) => (
                      <li key={mIdx} className="leading-relaxed">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#15110d] border border-stone-800 space-y-2">
                  <h4 className="text-xs font-serif font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Direct Quotation</span>
                  </h4>
                  <blockquote className="text-xs italic text-stone-300 leading-relaxed font-serif border-l-2 border-amber-500 pl-3">
                    "{activeResearcher.keyQuotes[0]}"
                  </blockquote>
                </div>
              </div>

              {/* Cross-References in App */}
              {onNavigateToTab && activeResearcher.crossReferencesInApp.length > 0 && (
                <div className="pt-3 border-t border-stone-800 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono uppercase text-stone-400 mr-1">
                    Direct App Navigation:
                  </span>
                  {activeResearcher.crossReferencesInApp.map((cr, idx) => (
                    <button
                      key={idx}
                      onClick={() => onNavigateToTab(cr.tabId as NavTab)}
                      className="px-3 py-1.5 rounded-xl bg-amber-950/80 border border-amber-700/60 text-amber-200 text-xs font-serif font-bold hover:bg-amber-900 transition-all flex items-center gap-1.5 cursor-pointer shadow"
                    >
                      <span>{cr.label}</span>
                      <ChevronRight className="w-3 h-3 text-amber-400" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
