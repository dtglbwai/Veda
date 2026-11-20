import React, { useState, useMemo } from "react";
import {
  MANVANTARA_CORPUS,
  GENEALOGICAL_TREE_NODES,
  COSMIC_TIME_CONSTANTS,
  FUTURE_MANVANTARAS_SUMMARY,
  OTHER_VAIVASVATA_BRANCHES,
  DynastyNode,
  ManvantaraRecord
} from "../data/manvantaraTreeData";
import {
  GitFork,
  Search,
  Clock,
  Sparkles,
  Layers,
  Crown,
  BookOpen,
  ChevronRight,
  Calculator,
  Compass,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Share2,
  Filter,
  Info
} from "lucide-react";

type ViewMode = "tree" | "matrix" | "calculator" | "scriptures" | "branches";

export default function ManvantaraGenealogyTree() {
  const [activeView, setActiveView] = useState<ViewMode>("tree");
  const [selectedManvantaraId, setSelectedManvantaraId] = useState<number>(7);
  const [selectedDynastyFilter, setSelectedDynastyFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedNode, setSelectedNode] = useState<DynastyNode | null>(null);
  const [customYear, setCustomYear] = useState<number>(2026);

  // Filtered dynasty nodes
  const filteredNodes = useMemo(() => {
    return GENEALOGICAL_TREE_NODES.filter((node) => {
      const matchesSearch =
        searchQuery === "" ||
        node.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.nameSa.includes(searchQuery) ||
        node.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.dynasty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (node.titles && node.titles.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesDynasty =
        selectedDynastyFilter === "All" || node.dynasty.includes(selectedDynastyFilter);

      return matchesSearch && matchesDynasty;
    });
  }, [searchQuery, selectedDynastyFilter]);

  const selectedManvantara = useMemo(() => {
    return MANVANTARA_CORPUS.find((m) => m.id === selectedManvantaraId) || MANVANTARA_CORPUS[6];
  }, [selectedManvantaraId]);

  // Cosmic time calculations
  const cosmicTimeData = useMemo(() => {
    const elapsedPriorManvantaras = 6 * COSMIC_TIME_CONSTANTS.manvantaraDurationYears; // 6 * 306,720,000 = 1,840,320,000
    const elapsedPriorSandhis = 7 * COSMIC_TIME_CONSTANTS.sandhiPeriodYears; // 7 * 1,728,000 = 12,096,000
    const elapsedPriorMahayugasIn7th = 27 * COSMIC_TIME_CONSTANTS.chaturyugaTotalYears; // 27 * 4,320,000 = 116,640,000
    const elapsedIn28thMahayuga =
      COSMIC_TIME_CONSTANTS.kritaYugaYears +
      COSMIC_TIME_CONSTANTS.tretaYugaYears +
      COSMIC_TIME_CONSTANTS.dvaparaYugaYears; // 3,888,000
    const kaliElapsed = 3102 + customYear;
    const totalElapsedYearsInCurrentKalpa =
      elapsedPriorManvantaras +
      elapsedPriorSandhis +
      elapsedPriorMahayugasIn7th +
      elapsedIn28thMahayuga +
      kaliElapsed;

    const totalKalpaYears = COSMIC_TIME_CONSTANTS.kalpaTotalYears;
    const remainingYearsInKalpa = totalKalpaYears - totalElapsedYearsInCurrentKalpa;
    const percentageElapsedInKalpa = (
      (totalElapsedYearsInCurrentKalpa / totalKalpaYears) *
      100
    ).toFixed(4);

    return {
      elapsedPriorManvantaras,
      elapsedPriorSandhis,
      elapsedPriorMahayugasIn7th,
      elapsedIn28thMahayuga,
      kaliElapsed,
      totalElapsedYearsInCurrentKalpa,
      totalKalpaYears,
      remainingYearsInKalpa,
      percentageElapsedInKalpa,
      remainingInKaliYuga: COSMIC_TIME_CONSTANTS.kaliYugaYears - kaliElapsed
    };
  }, [customYear]);

  const dynastyCategories = [
    "All",
    "Svayambhuva Lineage",
    "Suryavansha (Solar)",
    "Chandravansha (Lunar)",
    "Yaduvansha (Yadu)",
    "Pauravavansha (Kuru/Bharata)"
  ];

  return (
    <div className="w-full bg-[#120f0d] text-[#f4ecd8] min-h-screen pb-24 font-sans">
      {/* Header Banner */}
      <div className="border-b border-[#36271c] bg-gradient-to-r from-[#1c1510] via-[#241a13] to-[#1a130e] px-4 md:px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Vedic & Puranic Cosmological Tree • 1st to 7th Manvantara</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-amber-100 tracking-tight">
              मन्वन्तर एवं राजवंशावली महावृक्ष
            </h1>
            <p className="text-stone-300 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
              Complete genealogical and cosmic succession from the <strong>1st Svayambhuva Manvantara</strong> through the present <strong>7th Vaivasvata Manvantara</strong>. Explore the full <strong>Suryavansha</strong> (Solar Dynasty to Sri Rama), <strong>Chandravansha</strong> (Lunar Dynasty), <strong>Yaduvansha</strong> (to Sri Krishna), and <strong>Pauravavansha</strong> (Bharata, Kuru, and Pandavas).
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="bg-[#18130e]/80 border border-[#483525] rounded-xl p-4 flex flex-col gap-2 min-w-[260px] shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs text-stone-400">
              <span>Present Era</span>
              <span className="text-amber-400 font-bold font-mono">7th Vaivasvata</span>
            </div>
            <div className="flex items-center justify-between text-xs text-stone-400">
              <span>Chaturyuga Cycle</span>
              <span className="text-emerald-400 font-mono font-bold">28th of 71</span>
            </div>
            <div className="flex items-center justify-between text-xs text-stone-400">
              <span>Current Yuga</span>
              <span className="text-red-400 font-mono font-bold">Kali Yuga (Year ~5,128)</span>
            </div>
            <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden mt-1">
              <div
                className="bg-amber-500 h-full rounded-full"
                style={{ width: `${(7 / 14) * 100}%` }}
              ></div>
            </div>
            <span className="text-[10px] text-stone-400 text-right">Kalpa Progress: ~45.6%</span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="max-w-7xl mx-auto mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#342419]">
          <button
            id="tab-btn-tree"
            onClick={() => setActiveView("tree")}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium flex items-center gap-2 transition-all ${
              activeView === "tree"
                ? "bg-amber-700 text-amber-100 shadow-lg border border-amber-500/50"
                : "bg-[#1f1712] text-stone-300 hover:bg-[#2b1f17] border border-stone-800"
            }`}
          >
            <GitFork className="w-4 h-4" />
            <span>Interactive Dynastic Tree</span>
          </button>

          <button
            id="tab-btn-matrix"
            onClick={() => setActiveView("matrix")}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium flex items-center gap-2 transition-all ${
              activeView === "matrix"
                ? "bg-amber-700 text-amber-100 shadow-lg border border-amber-500/50"
                : "bg-[#1f1712] text-stone-300 hover:bg-[#2b1f17] border border-stone-800"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>1st to 7th Manvantara Comparative Matrix</span>
          </button>

          <button
            id="tab-btn-branches"
            onClick={() => setActiveView("branches")}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium flex items-center gap-2 transition-all ${
              activeView === "branches"
                ? "bg-amber-700 text-amber-100 shadow-lg border border-amber-500/50"
                : "bg-[#1f1712] text-stone-300 hover:bg-[#2b1f17] border border-stone-800"
            }`}
          >
            <Crown className="w-4 h-4" />
            <span>Sons of Vaivasvata & Other Branches</span>
          </button>

          <button
            id="tab-btn-calculator"
            onClick={() => setActiveView("calculator")}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium flex items-center gap-2 transition-all ${
              activeView === "calculator"
                ? "bg-amber-700 text-amber-100 shadow-lg border border-amber-500/50"
                : "bg-[#1f1712] text-stone-300 hover:bg-[#2b1f17] border border-stone-800"
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Cosmic Time Engine (Kalpa Math)</span>
          </button>

          <button
            id="tab-btn-scriptures"
            onClick={() => setActiveView("scriptures")}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium flex items-center gap-2 transition-all ${
              activeView === "scriptures"
                ? "bg-amber-700 text-amber-100 shadow-lg border border-amber-500/50"
                : "bg-[#1f1712] text-stone-300 hover:bg-[#2b1f17] border border-stone-800"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Puranic Verses & Citations</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: INTERACTIVE DYNASTIC TREE */}
      {activeView === "tree" && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          {/* Controls Bar */}
          <div className="bg-[#1b140f] border border-[#3b2b1e] rounded-2xl p-4 mb-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="search-tree-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Rama, Krishna, Bharata, Dhruva, Manu..."
                className="w-full bg-[#120e0b] border border-stone-700 rounded-xl pl-9 pr-4 py-2 text-sm text-stone-100 placeholder-stone-400 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Dynasty Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-xs text-stone-400 font-mono flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter:
              </span>
              {dynastyCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedDynastyFilter(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedDynastyFilter === cat
                      ? "bg-amber-500 text-stone-950 font-bold shadow"
                      : "bg-[#251b14] text-stone-300 hover:bg-[#34261c] border border-stone-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tree Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNodes.map((node) => {
              const isSelected = selectedNode?.id === node.id;
              const isAvatar = node.isAvatarOrDivine;

              return (
                <div
                  key={node.id}
                  id={`node-card-${node.id}`}
                  onClick={() => setSelectedNode(node)}
                  className={`cursor-pointer rounded-2xl border p-5 transition-all relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#281b12] border-amber-400 shadow-2xl scale-[1.02]"
                      : isAvatar
                      ? "bg-[#1c140d] border-amber-600/50 hover:border-amber-400/80 hover:bg-[#23180f]"
                      : "bg-[#16110d] border-[#38281b] hover:border-stone-500 hover:bg-[#1c1510]"
                  }`}
                >
                  {/* Top Badges */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          node.dynasty.includes("Solar")
                            ? "bg-amber-950/80 text-amber-300 border border-amber-800/60"
                            : node.dynasty.includes("Lunar") || node.dynasty.includes("Yadu") || node.dynasty.includes("Paurava")
                            ? "bg-sky-950/80 text-sky-300 border border-sky-800/60"
                            : "bg-emerald-950/80 text-emerald-300 border border-emerald-800/60"
                        }`}
                      >
                        {node.dynasty}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400">
                        Gen {node.generation} • {node.manvantara === 1 ? "1st Manu" : `${node.manvantara}th Manu`}
                      </span>
                    </div>

                    {/* Name in Sanskrit and English */}
                    <div className="mb-2">
                      <div className="text-xl font-serif font-bold text-amber-100 flex items-center gap-2">
                        <span>{node.nameSa}</span>
                        {isAvatar && (
                          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                        )}
                      </div>
                      <div className="text-sm text-stone-300 font-medium">{node.nameEn}</div>
                    </div>

                    {/* Titles */}
                    {node.titles && (
                      <div className="text-xs text-amber-400/90 font-mono mb-3 italic">
                        {node.titles}
                      </div>
                    )}

                    {/* Brief description */}
                    <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed mb-4">
                      {node.description}
                    </p>
                  </div>

                  {/* Footer metadata */}
                  <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                    <span className="truncate max-w-[180px]">
                      {node.era ? node.era : `Manvantara ${node.manvantara}`}
                    </span>
                    <span className="text-amber-400 flex items-center gap-1 font-mono text-xs">
                      Details <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Drawer / Detail Modal for Selected Node */}
          {selectedNode && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
              <div
                id="node-modal-content"
                className="bg-[#1a130e] border border-amber-500/50 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedNode(null)}
                  className="absolute top-4 right-4 text-stone-400 hover:text-white bg-stone-800/60 rounded-full p-2"
                >
                  ✕
                </button>

                <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 mb-2">
                  <span>{selectedNode.dynasty}</span>
                  <span>•</span>
                  <span>Generation {selectedNode.generation}</span>
                  <span>•</span>
                  <span>
                    {selectedNode.manvantara === 7
                      ? "7th Vaivasvata Manvantara"
                      : `${selectedNode.manvantara}st Svayambhuva Manvantara`}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-100">
                  {selectedNode.nameSa} ({selectedNode.nameEn})
                </h2>

                {selectedNode.titles && (
                  <p className="text-amber-400 font-mono text-sm mt-1">{selectedNode.titles}</p>
                )}

                {/* Avatar Badge */}
                {selectedNode.isAvatarOrDivine && (
                  <div className="mt-3 inline-flex items-center gap-2 bg-amber-950/80 border border-amber-600/80 px-3 py-1.5 rounded-lg text-xs font-bold text-amber-200">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>{selectedNode.avatarDetail || "Divine Avatar Manifestation"}</span>
                  </div>
                )}

                <div className="my-5 border-t border-[#38281b] pt-4">
                  <h3 className="text-xs uppercase font-mono tracking-wider text-stone-400 mb-2">
                    Lineage & Parentage
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#120e0b] p-3 rounded-xl border border-stone-800">
                    {selectedNode.motherName && (
                      <div>
                        <span className="text-stone-400">Mother:</span>{" "}
                        <strong className="text-stone-200">{selectedNode.motherName}</strong>
                      </div>
                    )}
                    {selectedNode.spouseName && (
                      <div>
                        <span className="text-stone-400">Spouse:</span>{" "}
                        <strong className="text-stone-200">{selectedNode.spouseName}</strong>
                      </div>
                    )}
                    {selectedNode.era && (
                      <div className="col-span-2">
                        <span className="text-stone-400">Puranic Epoch:</span>{" "}
                        <strong className="text-amber-300">{selectedNode.era}</strong>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-5">
                  <h3 className="text-xs uppercase font-mono tracking-wider text-stone-400 mb-2">
                    Puranic Profile & Significance
                  </h3>
                  <p className="text-stone-200 text-sm leading-relaxed bg-[#140f0c] p-4 rounded-xl border border-[#2f2116]">
                    {selectedNode.description}
                  </p>
                </div>

                <div className="mb-5">
                  <h3 className="text-xs uppercase font-mono tracking-wider text-stone-400 mb-2">
                    Key Feats & Cosmic Milestones
                  </h3>
                  <ul className="space-y-2">
                    {selectedNode.keyFeats.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-stone-300 bg-[#140e0a] p-2.5 rounded-lg border border-stone-800/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs uppercase font-mono tracking-wider text-stone-400 mb-2">
                    Scriptural Citations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedNode.scripturalReferences.map((ref, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono bg-stone-900 text-amber-300/90 border border-stone-700 px-2.5 py-1 rounded-md"
                      >
                        {ref}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* VIEW 2: 1ST TO 7TH MANVANTARA COMPARATIVE MATRIX */}
      {activeView === "matrix" && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          {/* Manvantara Selector Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
            {MANVANTARA_CORPUS.map((m) => {
              const isSelected = selectedManvantaraId === m.id;
              return (
                <button
                  key={m.id}
                  id={`manvantara-tab-${m.id}`}
                  onClick={() => setSelectedManvantaraId(m.id)}
                  className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden ${
                    isSelected
                      ? "bg-amber-900/60 border-amber-400 shadow-xl ring-2 ring-amber-500/20"
                      : "bg-[#17120e] border-[#312419] hover:bg-[#201813] hover:border-stone-600"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-stone-400">Epoch {m.id}</span>
                    {m.isCurrent && (
                      <span className="bg-emerald-600 text-emerald-100 text-[9px] font-mono font-bold px-1.5 py-0.2 rounded">
                        CURRENT
                      </span>
                    )}
                  </div>
                  <div className="font-serif font-bold text-amber-100 text-sm truncate">
                    {m.nameSa.split(" ")[0]}
                  </div>
                  <div className="text-[11px] text-stone-300 truncate">{m.nameEn.split(" ")[0]}</div>
                </button>
              );
            })}
          </div>

          {/* Deep Detail Card for Selected Manvantara */}
          <div className="bg-[#19130f] border border-[#3f2e20] rounded-2xl p-6 md:p-8 shadow-2xl mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#3b2b1d] pb-6 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
                  <span>{selectedManvantara.orderNumber}</span>
                  {selectedManvantara.isCurrent && (
                    <span className="bg-emerald-950 text-emerald-300 border border-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">
                      PRESENT WORLD AGE (28TH MAHAYUGA)
                    </span>
                  )}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-100">
                  {selectedManvantara.nameSa} • {selectedManvantara.nameEn}
                </h2>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono bg-[#110d0a] border border-stone-800 p-3 rounded-xl">
                <div>
                  <span className="text-stone-400 block">Duration:</span>
                  <strong className="text-amber-300">306,720,000 Years</strong>
                </div>
                <div className="h-6 w-px bg-stone-800"></div>
                <div>
                  <span className="text-stone-400 block">Mahayugas:</span>
                  <strong className="text-emerald-400">71 Chaturyugas</strong>
                </div>
              </div>
            </div>

            {/* 4 Pillars of the Manvantara: Manu, Indra, Avatar, Saptarshis */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Manu */}
              <div className="bg-[#120e0b] border border-[#2f2217] rounded-xl p-4">
                <div className="text-[10px] font-mono text-amber-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5" /> <span>Ruler / Manu</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-amber-200">
                  {selectedManvantara.manu.nameSa}
                </h3>
                <p className="text-xs text-stone-300 font-medium mb-2">{selectedManvantara.manu.nameEn}</p>
                <p className="text-[11px] text-stone-300 leading-relaxed mb-2">
                  {selectedManvantara.manu.description}
                </p>
                <div className="text-[10px] text-stone-400 font-mono bg-stone-900 p-2 rounded border border-stone-800">
                  {selectedManvantara.manu.parentage}
                </div>
              </div>

              {/* Indra */}
              <div className="bg-[#120e0b] border border-[#2f2217] rounded-xl p-4">
                <div className="text-[10px] font-mono text-sky-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> <span>King of Heaven (Indra)</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-sky-200">
                  {selectedManvantara.indra.nameSa}
                </h3>
                <p className="text-xs text-stone-300 font-medium mb-2">{selectedManvantara.indra.nameEn}</p>
                <p className="text-[11px] text-stone-300 leading-relaxed">
                  {selectedManvantara.indra.description}
                </p>
              </div>

              {/* Avatar */}
              <div className="bg-[#120e0b] border border-[#2f2217] rounded-xl p-4">
                <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> <span>Supreme Avatar</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-emerald-200">
                  {selectedManvantara.avatar.nameSa}
                </h3>
                <p className="text-xs text-stone-300 font-medium mb-2">{selectedManvantara.avatar.nameEn}</p>
                <p className="text-[11px] text-stone-300 leading-relaxed mb-2">
                  {selectedManvantara.avatar.significance}
                </p>
                <div className="text-[10px] text-emerald-300 font-mono bg-emerald-950/40 p-2 rounded border border-emerald-900/50">
                  {selectedManvantara.avatar.manifestation}
                </div>
              </div>

              {/* Devas / Ganas */}
              <div className="bg-[#120e0b] border border-[#2f2217] rounded-xl p-4">
                <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> <span>Deva-Ganas</span>
                </div>
                <div className="space-y-2 text-[11px]">
                  {selectedManvantara.devaGanas.map((deva, idx) => (
                    <div key={idx} className="bg-stone-900/80 p-2 rounded border border-stone-800">
                      <div className="font-bold text-stone-200">
                        {deva.nameEn} ({deva.count})
                      </div>
                      <div className="text-[10px] text-stone-400 mt-0.5">{deva.members}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Saptarshis of this Epoch */}
            <div className="mb-8">
              <h3 className="text-sm font-serif font-bold text-amber-200 mb-3 flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>The Seven Great Sages (सप्तर्षयः - Saptarshis of {selectedManvantara.nameEn})</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
                {selectedManvantara.saptarshis.map((sage, idx) => (
                  <div
                    key={idx}
                    className="bg-[#130f0c] border border-[#342419] rounded-xl p-3 text-center"
                  >
                    <div className="text-amber-400 font-serif font-bold text-sm">{sage.nameSa}</div>
                    <div className="text-xs text-stone-300 font-medium mb-1">{sage.nameEn}</div>
                    <div className="text-[10px] text-stone-400 leading-tight">{sage.gotraOrRole}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Events & Significance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#130f0c] border border-[#342419] rounded-xl p-5">
                <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
                  Cosmological Significance
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed mb-4">
                  {selectedManvantara.puranicSignificance}
                </p>

                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                  Prominent Sons & Progeny
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedManvantara.prominentSons.map((son, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono bg-stone-900 border border-stone-800 text-stone-300 px-2 py-0.5 rounded"
                    >
                      {son}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#130f0c] border border-[#342419] rounded-xl p-5">
                <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
                  Key Historical & Mythological Events
                </h3>
                <ul className="space-y-2">
                  {selectedManvantara.keyEvents.map((evt, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-stone-300 bg-[#17120e] p-2.5 rounded-lg border border-stone-800/80"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{evt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Future Manvantaras (8th to 14th) Accordion / Summary */}
          <div className="bg-[#17120e] border border-[#312419] rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-serif font-bold text-amber-200 mb-2">
              The 8th to 14th Future Manvantaras of Shvetavaraha Kalpa
            </h3>
            <p className="text-xs text-stone-400 mb-4">
              As described in Bhagavata Purana (8.13) and Vishnu Purana (3.2), the future seven Manus will continue the divine cosmic administration up to the close of the Kalpa:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {FUTURE_MANVANTARAS_SUMMARY.map((fut) => (
                <div
                  key={fut.id}
                  className="bg-[#110d0a] border border-stone-800 rounded-xl p-3.5 text-xs"
                >
                  <div className="flex items-center justify-between text-amber-400 font-bold mb-1">
                    <span>{fut.id}th Manvantara</span>
                    <span className="text-[10px] font-mono text-stone-400">Future Epoch</span>
                  </div>
                  <div className="font-serif text-sm font-bold text-stone-200 mb-1">{fut.name}</div>
                  <div className="text-stone-400 text-[11px]">
                    <span className="text-emerald-400">Avatar:</span> {fut.avatar} •{" "}
                    <span className="text-sky-400">Indra:</span> {fut.indra}
                  </div>
                  <div className="text-[10px] text-stone-400 mt-1 truncate">
                    Sages: {fut.saptarshis}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: VAIVASVATA SONS & OTHER BRANCHES */}
      {activeView === "branches" && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="bg-[#1b140f] border border-[#3a291c] rounded-2xl p-6 mb-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-100 mb-2">
              The 10 Progeny Branches of Vaivasvata Manu (वैवस्वत मनोः पुत्राः)
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed max-w-4xl">
              From Vaivasvata Manu arose the fundamental dynasties of human civilization. While <strong>Ikshvaku</strong> founded the prominent <strong>Suryavansha</strong> (Solar Dynasty) and <strong>Ila</strong> gave rise to the <strong>Chandravansha</strong> (Lunar Dynasty), his other sons established celebrated kingdoms across ancient Bharata:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OTHER_VAIVASVATA_BRANCHES.map((branch, idx) => (
              <div
                key={idx}
                className="bg-[#16110d] border border-[#36271c] rounded-2xl p-6 shadow-xl hover:border-amber-500/60 transition-all"
              >
                <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-lg mb-3">
                  <Crown className="w-5 h-5 text-amber-500" />
                  <span>{branch.nameEn}</span>
                </div>
                <p className="text-xs md:text-sm text-stone-300 leading-relaxed">
                  {branch.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 4: COSMIC TIME ENGINE & KALPA MATH */}
      {activeView === "calculator" && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="bg-[#19130f] border border-[#3b2b1e] rounded-2xl p-6 md:p-8 shadow-2xl mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#3b2b1d] pb-6 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Surya Siddhanta & Puranic Chronology Engine</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-amber-100">
                  कालचक्र एवं मन्वन्तर गणना (Cosmic Time Calculator)
                </h2>
              </div>

              {/* Year Input */}
              <div className="flex items-center gap-3 bg-[#110d0a] border border-stone-700 px-4 py-2 rounded-xl">
                <span className="text-xs text-stone-400 font-mono">Gregorian Year:</span>
                <input
                  id="custom-year-input"
                  type="number"
                  value={customYear}
                  onChange={(e) => setCustomYear(parseInt(e.target.value) || 2026)}
                  className="w-24 bg-stone-900 border border-stone-600 rounded px-2 py-1 text-sm font-mono text-amber-300 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Cosmological Mathematical Decomposition */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#120e0b] border border-stone-800 rounded-xl p-4">
                <div className="text-[10px] font-mono text-stone-400 uppercase">1 Kalpa (Day of Brahma)</div>
                <div className="text-xl font-bold font-mono text-amber-200 mt-1">4,320,000,000</div>
                <div className="text-[11px] text-stone-400 mt-1">Human Years (1,000 Mahayugas)</div>
              </div>

              <div className="bg-[#120e0b] border border-stone-800 rounded-xl p-4">
                <div className="text-[10px] font-mono text-stone-400 uppercase">1 Manvantara (71 Yugas)</div>
                <div className="text-xl font-bold font-mono text-emerald-300 mt-1">306,720,000</div>
                <div className="text-[11px] text-stone-400 mt-1">Human Years</div>
              </div>

              <div className="bg-[#120e0b] border border-stone-800 rounded-xl p-4">
                <div className="text-[10px] font-mono text-stone-400 uppercase">1 Sandhi (Transition Period)</div>
                <div className="text-xl font-bold font-mono text-sky-300 mt-1">1,728,000</div>
                <div className="text-[11px] text-stone-400 mt-1">Years (= Krita Yuga duration)</div>
              </div>

              <div className="bg-[#120e0b] border border-stone-800 rounded-xl p-4">
                <div className="text-[10px] font-mono text-stone-400 uppercase">Current Kali Yuga Elapsed</div>
                <div className="text-xl font-bold font-mono text-red-400 mt-1">
                  {cosmicTimeData.kaliElapsed.toLocaleString()} Yrs
                </div>
                <div className="text-[11px] text-stone-400 mt-1">Since 18 Feb 3102 BCE</div>
              </div>
            </div>

            {/* Step-by-step Puranic Cosmic Addition Breakdown */}
            <div className="bg-[#130f0c] border border-[#322317] rounded-xl p-6 mb-8">
              <h3 className="text-sm font-serif font-bold text-amber-200 mb-4 flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-400" />
                <span>Exact Mathematical Step-by-Step Breakdown of Current Kalpa Time</span>
              </h3>

              <div className="space-y-3 font-mono text-xs text-stone-300">
                <div className="flex items-center justify-between p-2.5 bg-[#18120e] rounded border border-stone-800">
                  <span>1. Six Elapsed Manvantaras (6 × 306,720,000):</span>
                  <span className="text-amber-300 font-bold">1,840,320,000 Years</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#18120e] rounded border border-stone-800">
                  <span>2. Seven Sandhis between & before Manvantaras (7 × 1,728,000):</span>
                  <span className="text-amber-300 font-bold">12,096,000 Years</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#18120e] rounded border border-stone-800">
                  <span>3. 27 Prior Mahayugas in 7th Vaivasvata (27 × 4,320,000):</span>
                  <span className="text-amber-300 font-bold">116,640,000 Years</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#18120e] rounded border border-stone-800">
                  <span>4. Elapsed Yugas in 28th Mahayuga (Krita + Treta + Dvapara):</span>
                  <span className="text-amber-300 font-bold">3,888,000 Years</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#18120e] rounded border border-stone-800">
                  <span>5. Elapsed Kali Yuga up to CE {customYear} (3102 + {customYear}):</span>
                  <span className="text-amber-300 font-bold">{cosmicTimeData.kaliElapsed.toLocaleString()} Years</span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-amber-950/40 rounded-xl border border-amber-500/50 text-sm text-amber-100 font-bold mt-4">
                  <span>TOTAL ELAPSED TIME IN PRESENT KALPA:</span>
                  <span className="text-amber-300 text-base">
                    {cosmicTimeData.totalElapsedYearsInCurrentKalpa.toLocaleString()} Human Years (~1.972 Billion Years)
                  </span>
                </div>
              </div>
            </div>

            {/* Sankalpa Mantra Alignment */}
            <div className="bg-[#120e0b] border border-amber-900/60 rounded-xl p-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
                Traditional Vedic Sankalpa Recitation (वैदिक सङ्कल्प पाठ)
              </h3>
              <p className="font-serif text-sm md:text-base text-amber-200/90 leading-relaxed italic bg-black/40 p-4 rounded-lg border border-stone-800">
                &ldquo;...अद्य ब्रह्मणो द्वितीयपरार्धे श्रीश्वेतवाराहकल्पे वैवस्वतमन्वन्तरे अष्टाविंशतितमे कलियुगे कलिप्रथमचरणे...&rdquo;
              </p>
              <p className="text-xs text-stone-400 mt-2">
                Chanted daily across all traditional Hindu rituals, encoding this exact cosmic coordinates: 2nd half of Brahma's life (51st year), Shvetavaraha Kalpa, 7th Vaivasvata Manvantara, 28th Mahayuga, 1st Quarter of Kali Yuga.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 5: SCRIPTURAL VERSES & CITATIONS */}
      {activeView === "scriptures" && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="bg-[#19130f] border border-[#3b2b1e] rounded-2xl p-6 md:p-8 shadow-2xl mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-100 mb-2">
              Puranic Shlokas & Scriptural Foundation
            </h2>
            <p className="text-stone-300 text-sm mb-6">
              Authentic Sanskrit verses from the Bhagavata Purana, Vishnu Purana, and Manusmriti describing the 1st to 7th Manvantaras and the dynastic branches:
            </p>

            <div className="space-y-6">
              {/* Verse 1 */}
              <div className="bg-[#130f0c] border border-[#322317] rounded-xl p-5">
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
                  <span>Manusmriti 1.34-36 • The Seven Manus</span>
                  <span>मनुस्मृतिः</span>
                </div>
                <p className="font-serif text-base text-amber-100 mb-2 leading-relaxed">
                  स्वायम्भुवो मनुर्धीमान् स्वारोचिषस्तथापरः।<br />
                  औत्तमिस्तामसश्चैव रैवतश्चाक्षुषस्तथा॥<br />
                  वैवस्वतश्च सप्तैते मनवः सूरिसत्तमाः।<br />
                  स्वे स्वेऽन्तरे सर्वमिदमुत्पाद्यापुः प्रजा नृप॥
                </p>
                <p className="text-xs text-stone-300 leading-relaxed">
                  &ldquo;Svayambhuva the wise, Svarochisha, Uttama, Tamasa, Raivata, Chakshusha, and Vaivasvata—these seven Manus of exalted wisdom have created and protected all beings during their respective epochs.&rdquo;
                </p>
              </div>

              {/* Verse 2 */}
              <div className="bg-[#130f0c] border border-[#322317] rounded-xl p-5">
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
                  <span>Vishnu Purana 2.1.32 • Definition of Bharatavarsha</span>
                  <span>विष्णुपुराणम्</span>
                </div>
                <p className="font-serif text-base text-amber-100 mb-2 leading-relaxed">
                  उत्तरं यत्समुद्रस्य हिमाद्रेश्चैव दक्षिणम्।<br />
                  वर्षं तद् भारतं नाम भारती यत्र संततिः॥
                </p>
                <p className="text-xs text-stone-300 leading-relaxed">
                  &ldquo;The country that lies north of the ocean and south of the snowy mountains is called Bharatavarsha, for there dwell the descendants of Emperor Bharata.&rdquo;
                </p>
              </div>

              {/* Verse 3 */}
              <div className="bg-[#130f0c] border border-[#322317] rounded-xl p-5">
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
                  <span>Bhagavad Gita 4.1 • Transmission of Solar Yoga</span>
                  <span>श्रीमद्भगवद्गीता</span>
                </div>
                <p className="font-serif text-base text-amber-100 mb-2 leading-relaxed">
                  इमं विवस्वते योगं प्रोक्तवानहमव्ययम्।<br />
                  विवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत्॥
                </p>
                <p className="text-xs text-stone-300 leading-relaxed">
                  &ldquo;I taught this immortal science of yoga to the sun-god Vivasvan, and Vivasvan taught it to Manu (Vaivasvata), and Manu in turn taught it to King Ikshvaku.&rdquo;
                </p>
              </div>

              {/* Verse 4 */}
              <div className="bg-[#130f0c] border border-[#322317] rounded-xl p-5">
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
                  <span>Bhagavata Purana 8.1.1-2 • The Nature of Manvantara</span>
                  <span>श्रीमद्भागवतम्</span>
                </div>
                <p className="font-serif text-base text-amber-100 mb-2 leading-relaxed">
                  स्वायम्भुवस्यान्तरं ते कथितं यत्र धीमतोः।<br />
                  प्रियव्रतोत्तानपादोश्चरितं लोकपावनम्॥
                </p>
                <p className="text-xs text-stone-300 leading-relaxed">
                  &ldquo;I have described unto you the epoch of Svayambhuva Manu, wherein unfolded the world-purifying lives of his two illustrious sons, King Priyavrata and King Uttanapada.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
