import React, { useState, useMemo } from "react";
import {
  Sparkles,
  BookOpen,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Search,
  Filter,
  Flame,
  Sun,
  Moon,
  Compass,
  Heart,
  Brain,
  ShieldAlert,
  ArrowRight,
  Info,
  ChevronDown,
  ChevronUp,
  Layers,
  Award,
  Zap
} from "lucide-react";
import { SHODASHA_SAMSKARAS_CORPUS, GAUTAMA_40_SAMSKARAS } from "../data/sanskarsCorpus";
import {
  ALL_33_KOTI_DEVATAS,
  KOTI_ETYMOLOGY_EXPOSITION,
  BRIHADARANYAKA_REDUCTION_ENGINE
} from "../data/kotiDevatasCorpus";
import { SanskarItem, SanskarStage, KotiDevata, DevataGroup } from "../types/sanskarAndDevataTypes";
import { sacredAudio } from "../utils/sankalpaGenerator";

export const SanskarAndDevatasStudio: React.FC = () => {
  const [activeMainTab, setActiveMainTab] = useState<
    "sanskars" | "devatas" | "reduction" | "gautama40"
  >("sanskars");

  // Sanskars state
  const [selectedStage, setSelectedStage] = useState<"all" | SanskarStage>("all");
  const [sanskarSearch, setSanskarSearch] = useState("");
  const [selectedSanskar, setSelectedSanskar] = useState<SanskarItem | null>(
    SHODASHA_SAMSKARAS_CORPUS[0]
  );
  const [expandedSanskarId, setExpandedSanskarId] = useState<string | null>(
    SHODASHA_SAMSKARAS_CORPUS[0].id
  );

  // Devatas state
  const [selectedDevataGroup, setSelectedDevataGroup] = useState<"all" | DevataGroup>("all");
  const [devataSearch, setDevataSearch] = useState("");
  const [selectedDevata, setSelectedDevata] = useState<KotiDevata | null>(
    ALL_33_KOTI_DEVATAS[0]
  );

  // Reduction engine state
  const [activeReductionIndex, setActiveReductionIndex] = useState<number>(1); // Index 1 is 33 Devatas

  // Sound & Copy state
  const [copiedMantraId, setCopiedMantraId] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMantraId(id);
    setTimeout(() => setCopiedMantraId(null), 2200);
  };

  const handleRecite = (text: string) => {
    setIsPlayingAudio(true);
    sacredAudio.playTempleBell();
    sacredAudio.speakMantra(text, 0.82);
    setTimeout(() => setIsPlayingAudio(false), 5000);
  };

  const handleStopAudio = () => {
    sacredAudio.stopSpeech();
    setIsPlayingAudio(false);
  };

  // Filtered Sanskars
  const filteredSanskars = useMemo(() => {
    return SHODASHA_SAMSKARAS_CORPUS.filter((s) => {
      const matchesStage = selectedStage === "all" || s.stage === selectedStage;
      const q = sanskarSearch.toLowerCase().trim();
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.sanskritName.toLowerCase().includes(q) ||
        s.scripturalAuthority.toLowerCase().includes(q) ||
        s.overview.toLowerCase().includes(q);
      return matchesStage && matchesQuery;
    });
  }, [selectedStage, sanskarSearch]);

  // Filtered Devatas
  const filteredDevatas = useMemo(() => {
    return ALL_33_KOTI_DEVATAS.filter((d) => {
      const matchesGroup = selectedDevataGroup === "all" || d.group === selectedDevataGroup;
      const q = devataSearch.toLowerCase().trim();
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.sanskritName.toLowerCase().includes(q) ||
        d.cosmicElement.toLowerCase().includes(q) ||
        d.microcosmicCorrespondence.toLowerCase().includes(q) ||
        d.macrocosmicFunction.toLowerCase().includes(q);
      return matchesGroup && matchesQuery;
    });
  }, [selectedDevataGroup, devataSearch]);

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 p-4 md:p-6 lg:p-8 space-y-6">
      {/* ================= HEADER SECTION ================= */}
      <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-indigo-950/40 border border-amber-500/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Vedic Sacrament & Cosmological Intelligence
              </span>
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                Paraskara • Ashvalayana • Brihadaranyaka
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-amber-200 tracking-wide">
              षोडश संस्काराः एवं त्रयस्त्रिंशत् कोटि देवाः
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-3xl leading-relaxed">
              Exhaustive Canonical Encyclopedia of the <span className="text-amber-300 font-semibold">16 Vedic Samskaras</span> (Sacraments of Life from Conception to Final Sacrifice) and the <span className="text-amber-300 font-semibold">33 Koti Devatas</span> (The 33 Cosmic Classes of Divinity decoded from Brihadaranyaka Upanishad).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                sacredAudio.playOmDrone();
              }}
              className="px-3.5 py-2 bg-slate-900/90 hover:bg-slate-800 text-amber-300 border border-amber-500/30 rounded-lg text-xs font-medium flex items-center gap-2 shadow-sm transition-all"
              title="Play 108Hz Sacred Om Cosmic Drone"
            >
              <Volume2 className="w-4 h-4 text-amber-400" />
              108Hz Om Drone
            </button>
            <button
              onClick={() => {
                sacredAudio.playTempleBell();
              }}
              className="px-3.5 py-2 bg-slate-900/90 hover:bg-slate-800 text-amber-300 border border-amber-500/30 rounded-lg text-xs font-medium flex items-center gap-2 shadow-sm transition-all"
              title="Play 528Hz Temple Bell Chime"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              528Hz Ghanta
            </button>
            {isPlayingAudio && (
              <button
                onClick={handleStopAudio}
                className="px-3.5 py-2 bg-red-950/80 hover:bg-red-900 text-red-300 border border-red-500/40 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all"
              >
                <VolumeX className="w-4 h-4" /> Stop Recitation
              </button>
            )}
          </div>
        </div>

        {/* Primary Sub-Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-800/80">
          <button
            onClick={() => setActiveMainTab("sanskars")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
              activeMainTab === "sanskars"
                ? "bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20"
                : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
            }`}
          >
            <Heart className="w-4 h-4" />
            16 Shodasha Samskaras (षोडश संस्काराः)
          </button>

          <button
            onClick={() => setActiveMainTab("devatas")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
              activeMainTab === "devatas"
                ? "bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20"
                : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
            }`}
          >
            <Sun className="w-4 h-4" />
            33 Koti Devatas (त्रयस्त्रिंशत् कोटि देवाः)
          </button>

          <button
            onClick={() => setActiveMainTab("reduction")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
              activeMainTab === "reduction"
                ? "bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20"
                : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
            }`}
          >
            <Zap className="w-4 h-4" />
            Brihadaranyaka Reduction (३३ → १ ब्रह्म)
          </button>

          <button
            onClick={() => setActiveMainTab("gautama40")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
              activeMainTab === "gautama40"
                ? "bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20"
                : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Gautama Dharma Sutra 40 Samskaras
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: 16 SHODASHA SAMSKARAS (षोडश संस्काराः)                           */}
      {/* ========================================================================= */}
      {activeMainTab === "sanskars" && (
        <div className="space-y-6">
          {/* Controls Bar: Filters & Search */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-lg">
            {/* Stage filter pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              <span className="text-xs text-slate-400 font-medium mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Stage:
              </span>
              {[
                { id: "all", label: "All 16 Rites" },
                { id: "prenatal", label: "Prenatal (3)" },
                { id: "childhood", label: "Childhood (6)" },
                { id: "educational", label: "Educational (5)" },
                { id: "grihastha", label: "Grihastha (1)" },
                { id: "transcendent", label: "Transcendent (1)" }
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setSelectedStage(pill.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedStage === pill.id
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                      : "bg-slate-800/80 hover:bg-slate-800 text-slate-400 border border-slate-700/60"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Samskara, mantra, sutra..."
                value={sanskarSearch}
                onChange={(e) => setSanskarSearch(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
              />
            </div>
          </div>

          {/* Quick Lifecycle Grid / Timeline */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {SHODASHA_SAMSKARAS_CORPUS.map((sanskar) => {
              const isSelected = selectedSanskar?.id === sanskar.id;
              return (
                <button
                  key={sanskar.id}
                  onClick={() => {
                    setSelectedSanskar(sanskar);
                    setExpandedSanskarId(sanskar.id);
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all relative overflow-hidden ${
                    isSelected
                      ? "bg-amber-500/15 border-amber-500 text-amber-200 shadow-md shadow-amber-500/10"
                      : "bg-slate-900/60 hover:bg-slate-900 border-slate-800 text-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                        isSelected
                          ? "bg-amber-500 text-slate-950"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      #{sanskar.canonicalNumber}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400">
                      {sanskar.stage}
                    </span>
                  </div>
                  <div className="text-xs font-semibold truncate">
                    {sanskar.name.split(" ")[0]}
                  </div>
                  <div className="text-[10px] text-amber-400/80 font-serif truncate">
                    {sanskar.sanskritName.split(" ")[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Sanskara Deep-Dive Details */}
          {selectedSanskar && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
              {/* Header */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 text-xs font-bold rounded bg-amber-500 text-slate-950">
                      Samskara #{selectedSanskar.canonicalNumber} of 16
                    </span>
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                      {selectedSanskar.stageLabel}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-200">
                    {selectedSanskar.name}
                  </h2>
                  <div className="text-lg text-amber-400 font-serif mt-0.5">
                    {selectedSanskar.sanskritName}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="text-right">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Scriptural Authority
                    </div>
                    <div className="text-xs text-amber-300/90 font-mono">
                      {selectedSanskar.scripturalAuthority}
                    </div>
                  </div>
                </div>
              </div>

              {/* Time & Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5" /> Canonical Timing / Muhurta
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedSanskar.idealTime}
                  </p>
                </div>

                <div className="md:col-span-2 p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" /> Theological & Social Overview
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedSanskar.overview}
                  </p>
                </div>
              </div>

              {/* Canonical Mantras Box */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  Canonical Vedic Mantras & Invocations
                </h3>
                <div className="space-y-4">
                  {selectedSanskar.mantras.map((mantra) => (
                    <div
                      key={mantra.id}
                      className="bg-slate-950 border border-amber-500/25 rounded-xl p-5 relative group shadow-inner"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3 pb-2 border-b border-slate-800/80">
                        <div>
                          <span className="text-xs font-bold text-amber-300">
                            {mantra.title}
                          </span>
                          <span className="block text-[11px] text-slate-400">
                            Source: {mantra.sourceText}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleRecite(mantra.sanskrit)}
                            className="px-2.5 py-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded text-xs flex items-center gap-1 transition-all"
                            title="Recite mantra with speech synthesizer"
                          >
                            <Volume2 className="w-3.5 h-3.5" /> Recite
                          </button>
                          <button
                            onClick={() => handleCopy(mantra.sanskrit, mantra.id)}
                            className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs flex items-center gap-1 transition-all"
                            title="Copy Sanskrit text"
                          >
                            {copiedMantraId === mantra.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" /> Copy
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Sanskrit Devanagari */}
                      <pre className="font-serif text-sm sm:text-base text-amber-100 whitespace-pre-wrap leading-relaxed mb-3 font-medium bg-amber-950/20 p-3 rounded-lg border border-amber-500/15">
                        {mantra.sanskrit}
                      </pre>

                      {/* Transliteration */}
                      <div className="text-xs font-mono text-slate-300 italic mb-2 leading-relaxed">
                        {mantra.transliteration}
                      </div>

                      {/* English Meaning */}
                      <div className="text-xs text-slate-300 bg-slate-900/90 p-3 rounded-lg border border-slate-800 leading-relaxed">
                        <span className="text-amber-400 font-semibold mr-1">
                          Philosophical Meaning:
                        </span>
                        {mantra.meaning}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ritual Procedure (Kriya) & Essential Samagri */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-amber-400" /> Step-by-Step Ritual Sequence (क्रिया)
                  </h4>
                  <ol className="space-y-2 text-xs text-slate-300">
                    {selectedSanskar.ritualProcedure.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" /> Essential Ritual Samagri
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSanskar.essentialSamagri.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs bg-slate-900 text-slate-300 rounded-lg border border-slate-800 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Bio-spiritual & Ayurvedic Insight Card */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                    <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                      <Brain className="w-4 h-4" /> Neuro-developmental & Epigenetic Rationale
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedSanskar.bioSpiritualSignificance}
                    </p>
                    <div className="text-[11px] text-amber-300/80 italic pt-1">
                      {selectedSanskar.ayurvedicOrScientificInsight}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* List of all 16 Samskaras table / cards */}
          <div className="space-y-3">
            <h3 className="text-base font-serif font-bold text-amber-200">
              Complete Canonical List ({filteredSanskars.length} of 16)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredSanskars.map((s) => (
                <div
                  key={s.id}
                  onClick={() => {
                    setSelectedSanskar(s);
                    setExpandedSanskarId(s.id);
                  }}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedSanskar?.id === s.id
                      ? "bg-amber-500/10 border-amber-500/50 shadow-lg shadow-amber-500/5"
                      : "bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                        #{s.canonicalNumber}
                      </span>
                      <span className="text-xs uppercase font-medium text-slate-400">
                        {s.stageLabel}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-amber-100">
                    {s.name}
                  </h4>
                  <div className="text-xs text-amber-400 font-serif mb-2">
                    {s.sanskritName}
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {s.overview}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: 33 KOTI DEVATAS (त्रयस्त्रिंशत् कोटि देवाः)                        */}
      {/* ========================================================================= */}
      {activeMainTab === "devatas" && (
        <div className="space-y-6">
          {/* Crucial Etymological Expose Banner */}
          <div className="bg-gradient-to-r from-amber-950/50 via-slate-900 to-amber-950/30 border border-amber-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="px-2.5 py-0.5 text-xs font-bold rounded bg-amber-500 text-slate-950 uppercase tracking-wider">
                  Vedic Philological Clarification
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-amber-200 mt-2">
                  {KOTI_ETYMOLOGY_EXPOSITION.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                  {KOTI_ETYMOLOGY_EXPOSITION.primaryInsight}
                </p>
              </div>
              <div className="text-center bg-slate-950/80 border border-amber-500/20 p-4 rounded-xl shrink-0">
                <div className="text-3xl font-serif font-bold text-amber-400">३३</div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mt-0.5">
                  Cosmic Categories
                </div>
                <div className="text-[10px] text-amber-300/80">8 Vasus + 11 Rudras + 12 Adityas + 2</div>
              </div>
            </div>

            {/* Scriptural citations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-800/80">
              {KOTI_ETYMOLOGY_EXPOSITION.scripturalFoundations.map((cf, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 text-xs space-y-1"
                >
                  <div className="font-semibold text-amber-300/90">{cf.source}</div>
                  <div className="font-serif text-amber-100/90 italic text-[11px]">
                    "{cf.quote}"
                  </div>
                  <div className="text-slate-400 text-[11px]">{cf.translation}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Group Filter Bar & Search */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-lg">
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              <span className="text-xs text-slate-400 font-medium mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Group:
              </span>
              {[
                { id: "all", label: "All 33 Devatas" },
                { id: "vasu", label: "8 Vasus (Dwellings)" },
                { id: "rudra", label: "11 Rudras (Vital Breaths)" },
                { id: "aditya", label: "12 Adityas (Solar Months)" },
                { id: "indra_prajapati", label: "Indra & Prajapati (2 Summits)" }
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setSelectedDevataGroup(pill.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedDevataGroup === pill.id
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                      : "bg-slate-800/80 hover:bg-slate-800 text-slate-400 border border-slate-700/60"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by deity, element, or prana..."
                value={devataSearch}
                onChange={(e) => setDevataSearch(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
              />
            </div>
          </div>

          {/* 33 Devatas Visual Matrix / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDevatas.map((devata) => {
              const isSelected = selectedDevata?.id === devata.id;
              return (
                <div
                  key={devata.id}
                  onClick={() => setSelectedDevata(devata)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? "bg-gradient-to-b from-slate-900 to-amber-950/20 border-amber-500 shadow-xl shadow-amber-500/10"
                      : "bg-slate-900/70 hover:bg-slate-900 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div>
                    {/* Badge & Order */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        #{devata.orderNumber} • {devata.groupName.split(" ")[1] || devata.groupName}
                      </span>
                      {devata.associatedMonthOrDirection && (
                        <span className="text-[10px] text-slate-400 font-mono">
                          {devata.associatedMonthOrDirection}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-serif font-bold text-amber-200">
                      {devata.name}
                    </h3>
                    <div className="text-xs text-amber-400 font-serif mb-3">
                      {devata.sanskritName}
                    </div>

                    {/* Cosmic element */}
                    <div className="space-y-1.5 text-xs mb-4">
                      <div className="text-slate-300">
                        <span className="text-amber-400 font-semibold mr-1">Cosmic Element:</span>
                        {devata.cosmicElement}
                      </div>
                      <div className="text-slate-300">
                        <span className="text-amber-400 font-semibold mr-1">Microcosm (Body/Mind):</span>
                        {devata.microcosmicCorrespondence}
                      </div>
                      <div className="text-slate-400 text-[11px] leading-relaxed">
                        <span className="text-slate-300 font-medium mr-1">Macrocosmic Role:</span>
                        {devata.macrocosmicFunction}
                      </div>
                    </div>
                  </div>

                  {/* Mantra box */}
                  <div className="mt-2 pt-3 border-t border-slate-800/80 bg-slate-950/70 p-3 rounded-xl">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                        Vedic Mantra ({devata.vedicMantra.source})
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRecite(devata.vedicMantra.sanskrit);
                          }}
                          className="p-1 hover:bg-slate-800 text-amber-300 rounded"
                          title="Recite"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(devata.vedicMantra.sanskrit, devata.id);
                          }}
                          className="p-1 hover:bg-slate-800 text-slate-300 rounded"
                          title="Copy Mantra"
                        >
                          {copiedMantraId === devata.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="font-serif text-xs text-amber-100/90 whitespace-pre-wrap leading-relaxed line-clamp-2">
                      {devata.vedicMantra.sanskrit}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: BRIHADARANYAKA REDUCTION ENGINE (३३ → १ ब्रह्म)                     */}
      {/* ========================================================================= */}
      {activeMainTab === "reduction" && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-950/40 via-slate-900 to-amber-950/40 border border-indigo-500/20 rounded-2xl p-6 shadow-xl">
            <span className="px-2.5 py-0.5 text-xs font-bold rounded bg-indigo-500 text-white uppercase tracking-wider">
              Upanishadic Consolidation Engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-200 mt-2">
              The Cosmic Reduction Hierarchy (शाकल्य-याज्ञवल्क्य संवाद)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              In the Brihadaranyaka Upanishad (Chapter 3, Section 9), sage Yajnavalkya guides Vidagdha Sakalya through a profound meditation, systematically collapsing the seemingly infinite multiplicity of cosmic divinities into the single Non-Dual Reality (Brahman).
            </p>

            {/* Stepper Buttons */}
            <div className="flex flex-wrap items-center gap-2 mt-6">
              {BRIHADARANYAKA_REDUCTION_ENGINE.map((lvl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReductionIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    activeReductionIndex === idx
                      ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25"
                      : "bg-slate-950/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-slate-900/40 flex items-center justify-center text-[10px]">
                    {idx + 1}
                  </span>
                  {typeof lvl.level === "number" ? `${lvl.level} Devas` : `${lvl.level} Deva`}
                </button>
              ))}
            </div>
          </div>

          {/* Active Level Deep-Dive */}
          {(() => {
            const cur = BRIHADARANYAKA_REDUCTION_ENGINE[activeReductionIndex];
            return (
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                      Step {activeReductionIndex + 1} of {BRIHADARANYAKA_REDUCTION_ENGINE.length}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-200">
                      Level: {cur.level} Divine Principles
                    </h3>
                    <div className="text-sm text-amber-400/90 font-serif mt-0.5">
                      {cur.sanskritTerm}
                    </div>
                  </div>

                  <div className="px-4 py-2 bg-slate-950 rounded-xl border border-slate-800 text-right">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">
                      Cosmic Resolution
                    </span>
                    <span className="text-sm font-serif text-amber-300 font-bold">
                      {activeReductionIndex === 6 ? "Advaita (Non-Duality)" : "Analytical Taxonomy"}
                    </span>
                  </div>
                </div>

                {/* Dialogue excerpt */}
                <div className="bg-slate-950 border border-amber-500/20 rounded-xl p-5 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Brihadaranyaka Dialogue Excerpt
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-serif italic leading-relaxed">
                    "{cur.dialogueExcerpt}"
                  </p>
                </div>

                {/* Constituents */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Constituent Deities / Principles at this Level:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {cur.constituents.map((item, i) => (
                      <div
                        key={i}
                        className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg text-xs text-slate-300 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Philosophical Essence */}
                <div className="bg-gradient-to-r from-amber-950/20 via-slate-950 to-indigo-950/20 border border-amber-500/20 rounded-xl p-5 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <Brain className="w-4 h-4" /> Vedantic Philosophical Meaning
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cur.philosophicalEssence}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: GAUTAMA DHARMA SUTRA 40 SAMSKARAS                                 */}
      {/* ========================================================================= */}
      {activeMainTab === "gautama40" && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <span className="px-2.5 py-0.5 text-xs font-bold rounded bg-amber-500 text-slate-950 uppercase tracking-wider">
              Gautama Dharma Sutra 1.8.14-25
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-200 mt-2">
              गौतमधर्मसूत्रोक्ताः चत्वारिंशत् संस्काराः (The 40 Samskaras)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              Maharshi Gautama expands the classical sacraments into 40 distinct rites: the 16 personal bodily sacraments, 14 Vedic sacrifices (7 Paka-yajnas + 7 Havir-yajnas), 7 Soma-yajnas, and most importantly, <span className="text-amber-300 font-semibold">The 8 Soul Virtues (Ashta Atma-Gunas)</span>.
            </p>
            <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/25 rounded-xl text-xs text-amber-200 leading-relaxed">
              <span className="font-bold text-amber-300">Gautama's Crucial Injunction:</span> "He who has undergone all forty outer sacraments, but lacks the eight virtues of the soul (Atma-Gunas), does not attain communion with Brahman. But he who possesses the eight virtues of the soul, even if he has performed only a few outer rites, attains the highest liberation!"
            </div>
          </div>

          {/* 4 Categories */}
          <div className="space-y-6">
            {GAUTAMA_40_SAMSKARAS.map((group, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4"
              >
                <h3 className="text-lg font-serif font-bold text-amber-300 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  {group.category} ({group.items.length} Rites / Virtues)
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {group.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 hover:border-slate-700 space-y-1.5"
                    >
                      <div className="text-sm font-bold font-serif text-amber-200">
                        {item.sanskritName}
                      </div>
                      <div className="text-xs text-amber-400/80 font-medium">
                        {item.englishName}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SanskarAndDevatasStudio;

