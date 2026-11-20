import React, { useState, useMemo } from "react";
import {
  Globe,
  Compass,
  BookOpen,
  Scroll,
  Sparkles,
  Search,
  Flame,
  Award,
  Share2,
  Copy,
  Check,
  ChevronRight,
  ChevronDown,
  Filter,
  Layers,
  MapPin,
  Maximize2,
  Info,
  ExternalLink,
  Shield,
  Clock,
  Eye,
  GitCompare,
  Feather
} from "lucide-react";
import {
  SANATAN_PHILOSOPHERS_CORPUS,
  REGION_CATEGORIES,
  SanatanPhilosopher,
  RegionFilterCategory
} from "../data/sanatanPhilosophersWorldData";

export default function SanatanPhilosophersWorld() {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedDarshana, setSelectedDarshana] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPhilosopher, setSelectedPhilosopher] = useState<SanatanPhilosopher | null>(
    SANATAN_PHILOSOPHERS_CORPUS[0]
  );
  const [activeTab, setActiveTab] = useState<"explorer" | "global_map" | "twelve_mahajanas" | "comparative_matrix">("explorer");
  const [copiedShlokaId, setCopiedShlokaId] = useState<string | null>(null);
  const [onlyBrahmavadini, setOnlyBrahmavadini] = useState<boolean>(false);
  const [onlyTwelveMahajanas, setOnlyTwelveMahajanas] = useState<boolean>(false);
  const [compareList, setCompareList] = useState<SanatanPhilosopher[]>([
    SANATAN_PHILOSOPHERS_CORPUS[0], // Kapila
    SANATAN_PHILOSOPHERS_CORPUS[6], // Adi Shankara
  ]);

  // Unique Darshanas
  const allDarshanas = useMemo(() => {
    const set = new Set<string>();
    SANATAN_PHILOSOPHERS_CORPUS.forEach(p => set.add(p.astikaDarshana));
    return Array.from(set);
  }, []);

  // Filtered corpus
  const filteredPhilosophers = useMemo(() => {
    return SANATAN_PHILOSOPHERS_CORPUS.filter(p => {
      // Region filter
      if (selectedRegion !== "all" && p.regionCategory !== selectedRegion) {
        return false;
      }
      // Darshana filter
      if (selectedDarshana !== "all" && p.astikaDarshana !== selectedDarshana) {
        return false;
      }
      // Special toggles
      if (onlyBrahmavadini && !p.isBrahmavadini) {
        return false;
      }
      if (onlyTwelveMahajanas && !p.isTwelveMahajana) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesSanskrit = p.sanskritName.toLowerCase().includes(q);
        const matchesRegion = p.region.toLowerCase().includes(q);
        const matchesSchool = p.primarySchool.toLowerCase().includes(q);
        const matchesDoctrine = p.philosophicalDoctrines.some(d => d.toLowerCase().includes(q));
        const matchesTreatise = p.keyTreatises.some(t => t.toLowerCase().includes(q));
        const matchesSource = p.vedicScriptureSource.text.toLowerCase().includes(q) || p.vedicScriptureSource.sanskritShloka.toLowerCase().includes(q);
        return matchesName || matchesSanskrit || matchesRegion || matchesSchool || matchesDoctrine || matchesTreatise || matchesSource;
      }
      return true;
    });
  }, [selectedRegion, selectedDarshana, searchQuery, onlyBrahmavadini, onlyTwelveMahajanas]);

  const handleCopyShloka = (philosopher: SanatanPhilosopher) => {
    const text = `${philosopher.name} (${philosopher.sanskritName})\n${philosopher.vedicScriptureSource.sanskritShloka}\n\n${philosopher.vedicScriptureSource.translation}\n[Source: ${philosopher.vedicScriptureSource.text} - ${philosopher.vedicScriptureSource.chapterVerse}]`;
    navigator.clipboard.writeText(text);
    setCopiedShlokaId(philosopher.id);
    setTimeout(() => setCopiedShlokaId(null), 2500);
  };

  const toggleCompare = (philosopher: SanatanPhilosopher) => {
    if (compareList.some(p => p.id === philosopher.id)) {
      setCompareList(compareList.filter(p => p.id !== philosopher.id));
    } else {
      if (compareList.length >= 3) {
        setCompareList([...compareList.slice(1), philosopher]);
      } else {
        setCompareList([...compareList, philosopher]);
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0f0d0a] text-[#f4ebd9] pb-24">
      {/* Header Banner */}
      <div className="relative border-b border-[#3d2e1e] bg-gradient-to-b from-[#1c1610] via-[#14100c] to-[#0f0d0a] px-4 md:px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold tracking-wide uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                वैदिक दर्शन एवं वैश्विक ऋषि मण्डल
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold tracking-wide uppercase bg-orange-950/60 text-orange-400 border border-orange-800/40">
                Sapta Dweepas & World Traditions
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-serif font-bold text-amber-100 tracking-tight">
              Sanatan Philosophers of the World
            </h1>
            <p className="text-stone-300 text-sm md:text-base mt-1 max-w-3xl leading-relaxed">
              Global lineages of Sanatan philosophy documented in the Vedas, Upanishads, Puranas, Mahabharata, and Brihat Samhita — from Aryavarta to Gandhara, Ancient Persia (Shakadvipa), Suvarnabhumi (Bali/Java/Cambodia), Yavanadvipa (Greece/Alexandria), Mahachina, and the 12 Universal Mahajanas.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 bg-[#1e1711] border border-[#4a3824] rounded-xl p-3 shadow-lg">
            <div className="text-center px-3 border-r border-[#3a2c1d]">
              <div className="text-2xl font-serif font-bold text-amber-400">
                {SANATAN_PHILOSOPHERS_CORPUS.length}
              </div>
              <div className="text-[11px] text-stone-300 uppercase tracking-wider">Masters</div>
            </div>
            <div className="text-center px-3 border-r border-[#3a2c1d]">
              <div className="text-2xl font-serif font-bold text-amber-400">7+</div>
              <div className="text-[11px] text-stone-300 uppercase tracking-wider">Regions</div>
            </div>
            <div className="text-center px-3">
              <div className="text-2xl font-serif font-bold text-amber-400">12</div>
              <div className="text-[11px] text-stone-300 uppercase tracking-wider">Mahajanas</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto mt-6 flex flex-wrap items-center gap-2 border-t border-[#2d2216] pt-4">
          <button
            onClick={() => setActiveTab("explorer")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === "explorer"
                ? "bg-amber-600 text-white shadow-md shadow-amber-900/30"
                : "bg-[#1a140e] text-stone-300 hover:bg-[#251d15] hover:text-amber-200 border border-[#382b1d]"
            }`}
          >
            <Scroll className="w-4 h-4" />
            Philosopher Explorer ({filteredPhilosophers.length})
          </button>

          <button
            onClick={() => setActiveTab("global_map")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === "global_map"
                ? "bg-amber-600 text-white shadow-md shadow-amber-900/30"
                : "bg-[#1a140e] text-stone-300 hover:bg-[#251d15] hover:text-amber-200 border border-[#382b1d]"
            }`}
          >
            <Globe className="w-4 h-4" />
            Global Vedic Geography & Dweepas
          </button>

          <button
            onClick={() => setActiveTab("twelve_mahajanas")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === "twelve_mahajanas"
                ? "bg-amber-600 text-white shadow-md shadow-amber-900/30"
                : "bg-[#1a140e] text-stone-300 hover:bg-[#251d15] hover:text-amber-200 border border-[#382b1d]"
            }`}
          >
            <Award className="w-4 h-4 text-amber-300" />
            The 12 Universal Mahajanas (द्वादश महाजन)
          </button>

          <button
            onClick={() => setActiveTab("comparative_matrix")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === "comparative_matrix"
                ? "bg-amber-600 text-white shadow-md shadow-amber-900/30"
                : "bg-[#1a140e] text-stone-300 hover:bg-[#251d15] hover:text-amber-200 border border-[#382b1d]"
            }`}
          >
            <GitCompare className="w-4 h-4" />
            Epistemic Comparison Matrix ({compareList.length})
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        
        {/* ================= VIEW 1: EXPLORER ================= */}
        {activeTab === "explorer" && (
          <div className="space-y-6">
            {/* Filter & Search Bar */}
            <div className="bg-[#17120d] border border-[#3a2c1c] rounded-xl p-4 shadow-xl space-y-4">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by philosopher, Sanskrit name, school, doctrine (e.g. Neti-Neti, Asha, Yavana)..."
                    className="w-full bg-[#100d09] border border-[#332618] rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#f4ebd9] placeholder-stone-400 focus:outline-none focus:border-amber-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-amber-300"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Darshana Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-300 font-medium whitespace-nowrap">Darshana:</span>
                  <select
                    value={selectedDarshana}
                    onChange={(e) => setSelectedDarshana(e.target.value)}
                    className="bg-[#100d09] border border-[#332618] rounded-lg px-3 py-2 text-sm text-amber-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="all">All Astika & Global Schools</option>
                    {allDarshanas.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                {/* Quick Filters */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setOnlyBrahmavadini(!onlyBrahmavadini)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                      onlyBrahmavadini
                        ? "bg-rose-900/60 text-rose-200 border-rose-600"
                        : "bg-[#130f0b] text-stone-400 border-[#332618] hover:text-rose-300"
                    }`}
                  >
                    Brahmavadinis
                  </button>
                  <button
                    onClick={() => setOnlyTwelveMahajanas(!onlyTwelveMahajanas)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                      onlyTwelveMahajanas
                        ? "bg-amber-900/60 text-amber-200 border-amber-600"
                        : "bg-[#130f0b] text-stone-400 border-[#332618] hover:text-amber-300"
                    }`}
                  >
                    12 Mahajanas
                  </button>
                </div>
              </div>

              {/* Regional Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar border-t border-[#2a2014]">
                {REGION_CATEGORIES.map(region => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                      selectedRegion === region.id
                        ? "bg-amber-700/80 text-amber-100 border-amber-500 shadow-sm"
                        : "bg-[#120e0a] text-stone-300 border-[#2d2216] hover:bg-[#1f1710] hover:text-amber-300"
                    }`}
                  >
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{region.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Layout: Grid of Cards + Detail Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: List/Cards (7 cols on lg) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-300 px-1">
                  <span>Showing <strong className="text-amber-300">{filteredPhilosophers.length}</strong> master philosophers</span>
                  <span>Click any philosopher to view full treatise & shloka</span>
                </div>

                {filteredPhilosophers.length === 0 ? (
                  <div className="bg-[#16110c] border border-[#332618] rounded-xl p-8 text-center text-stone-400">
                    <Compass className="w-10 h-10 mx-auto text-amber-600/60 mb-2" />
                    <p className="text-base font-serif text-amber-200">No philosophers found matching your filter.</p>
                    <p className="text-xs mt-1">Try clearing your search query or selecting "Global Sanatan Heritage (All)".</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredPhilosophers.map((phil) => {
                      const isSelected = selectedPhilosopher?.id === phil.id;
                      const isCompared = compareList.some(p => p.id === phil.id);

                      return (
                        <div
                          key={phil.id}
                          onClick={() => setSelectedPhilosopher(phil)}
                          className={`relative rounded-xl p-4 transition-all cursor-pointer border flex flex-col justify-between ${
                            isSelected
                              ? "bg-[#241a12] border-amber-500 shadow-lg shadow-amber-950/40 ring-1 ring-amber-500/50"
                              : "bg-[#14100c] border-[#312517] hover:bg-[#1b140e] hover:border-[#4d3824]"
                          }`}
                        >
                          <div>
                            {/* Card Badges */}
                            <div className="flex items-center justify-between gap-1 mb-2">
                              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#2b1f14] text-amber-300 border border-[#483421]">
                                {phil.astikaDarshana}
                              </span>
                              <div className="flex items-center gap-1">
                                {phil.isTwelveMahajana && (
                                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-900/60 text-amber-300 border border-amber-700/50">
                                    Mahajana
                                  </span>
                                )}
                                {phil.isBrahmavadini && (
                                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-rose-900/60 text-rose-300 border border-rose-700/50">
                                    Brahmavadini
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Name & Epithet */}
                            <h3 className="text-base font-serif font-bold text-amber-100 leading-snug">
                              {phil.name}
                            </h3>
                            <div className="text-xs text-amber-400 font-sans tracking-wide mt-0.5">
                              {phil.sanskritName}
                            </div>
                            <p className="text-xs text-stone-300 line-clamp-2 mt-2 leading-relaxed">
                              {phil.epithet}
                            </p>
                          </div>

                          {/* Footer Meta */}
                          <div className="mt-4 pt-3 border-t border-[#261d12] flex items-center justify-between text-[11px] text-stone-300">
                            <div className="flex items-center gap-1 text-stone-300 truncate max-w-[170px]">
                              <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                              <span className="truncate">{phil.region}</span>
                            </div>
                            
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleCompare(phil);
                              }}
                              className={`px-2 py-0.5 rounded text-[10px] font-semibold border transition-all ${
                                isCompared
                                  ? "bg-amber-600 text-white border-amber-400"
                                  : "bg-[#1c150e] text-stone-400 border-[#382b1d] hover:text-amber-200"
                              }`}
                            >
                              {isCompared ? "Compared" : "+ Compare"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Column: Detailed Dossier Panel (5 cols on lg) */}
              <div className="lg:col-span-5">
                {selectedPhilosopher ? (
                  <div className="sticky top-20 bg-[#16110c] border border-[#3f2f1e] rounded-xl p-5 md:p-6 shadow-2xl space-y-5">
                    {/* Header */}
                    <div className="border-b border-[#2e2114] pb-4">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          {selectedPhilosopher.regionNameSanskrit}
                        </span>
                        <span className="text-xs text-stone-400 font-mono">
                          {selectedPhilosopher.approxEra}
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-100">
                        {selectedPhilosopher.name}
                      </h2>
                      <div className="text-base text-amber-400/90 font-serif">
                        {selectedPhilosopher.sanskritName}
                      </div>
                      <p className="text-xs text-stone-300 mt-1 italic">
                        "{selectedPhilosopher.epithet}"
                      </p>
                    </div>

                    {/* Core Epistemology */}
                    <div className="bg-[#1c150e] border border-[#3b2b1a] rounded-lg p-3.5">
                      <div className="text-[11px] uppercase font-bold text-amber-400 flex items-center gap-1.5 mb-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Core Epistemic Siddhanta
                      </div>
                      <p className="text-xs md:text-sm text-stone-200 leading-relaxed font-sans">
                        {selectedPhilosopher.coreEpistemology}
                      </p>
                    </div>

                    {/* Sanskrit Shloka Source Box */}
                    <div className="bg-[#120e0a] border border-[#44321f] rounded-lg p-4 relative space-y-2.5">
                      <div className="flex items-center justify-between border-b border-[#281d11] pb-2">
                        <div className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                          <Scroll className="w-3.5 h-3.5 text-amber-400" />
                          <span>{selectedPhilosopher.vedicScriptureSource.text}</span>
                          <span className="text-[11px] text-stone-400 font-mono">
                            ({selectedPhilosopher.vedicScriptureSource.chapterVerse})
                          </span>
                        </div>
                        <button
                          onClick={() => handleCopyShloka(selectedPhilosopher)}
                          className="text-stone-400 hover:text-amber-300 text-xs flex items-center gap-1 transition-colors"
                          title="Copy Shloka with translation"
                        >
                          {copiedShlokaId === selectedPhilosopher.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400 text-[10px]">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span className="text-[10px]">Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Original Shloka in Devanagari */}
                      <div className="text-sm md:text-base font-serif text-amber-100 whitespace-pre-line leading-relaxed tracking-wide bg-[#17110c] p-3 rounded border border-[#2b1f13]">
                        {selectedPhilosopher.vedicScriptureSource.sanskritShloka}
                      </div>

                      {/* Transliteration */}
                      <div className="text-xs font-mono text-stone-300 whitespace-pre-line italic">
                        {selectedPhilosopher.vedicScriptureSource.transliteration}
                      </div>

                      {/* Translation */}
                      <div className="text-xs text-stone-300 pt-1 border-t border-[#24190e] leading-relaxed">
                        <strong className="text-amber-400">Translation:</strong> {selectedPhilosopher.vedicScriptureSource.translation}
                      </div>
                    </div>

                    {/* Key Doctrines & Treatises */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="bg-[#18120c] border border-[#2e2114] rounded-lg p-3">
                        <div className="font-bold text-amber-300 mb-1.5 flex items-center gap-1">
                          <BookOpen className="w-3 h-3 text-amber-400" />
                          Canonical Treatises
                        </div>
                        <ul className="space-y-1 text-stone-300">
                          {selectedPhilosopher.keyTreatises.map((t, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-amber-500">•</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-[#18120c] border border-[#2e2114] rounded-lg p-3">
                        <div className="font-bold text-amber-300 mb-1.5 flex items-center gap-1">
                          <Flame className="w-3 h-3 text-amber-400" />
                          Doctrinal Tenets
                        </div>
                        <ul className="space-y-1 text-stone-300">
                          {selectedPhilosopher.philosophicalDoctrines.map((d, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-amber-500">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Global Influence */}
                    <div className="bg-[#140f0a] border border-[#332516] rounded-lg p-3 text-xs text-stone-300">
                      <strong className="text-amber-300 font-semibold block mb-1">
                        Global Civilizational Legacy:
                      </strong>
                      <p className="leading-relaxed">
                        {selectedPhilosopher.globalInfluenceAndLegacy}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#16110c] border border-[#332618] rounded-xl p-8 text-center text-stone-400">
                    <p>Select a philosopher to view full scriptural dossier.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= VIEW 2: GLOBAL VEDIC GEOGRAPHY & DWEPAS ================= */}
        {activeTab === "global_map" && (
          <div className="space-y-6">
            <div className="bg-[#17120d] border border-[#3a2c1c] rounded-xl p-6 shadow-xl">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-100 mb-2">
                Cosmic Geography & Global Transmissions (सप्तद्वीप एवं वैश्विक वैदिक सम्प्रदाय)
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed max-w-4xl">
                As detailed in the <em>Vishnu Purana</em> (Book 2), <em>Matsya Purana</em>, <em>Surya Siddhanta</em>, and <em>Brihat Samhita</em>, the world is mapped across 7 concentric continents (Sapta Dweepas). Sages and philosophical schools were established in each sector of the globe, interacting through maritime trade, Himalayan hermitages, and astronomical symposia.
              </p>
            </div>

            {/* Regional Cards Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Region 1: Aryavarta */}
              <div className="bg-[#15100b] border border-[#3d2e1c] rounded-xl p-5 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    JAMBUDVIPA (CENTER)
                  </span>
                  <span className="text-xs text-stone-400 font-mono">Bharatavarsha</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-amber-100">
                  Aryavarta & The Gangetic-Himalayan Matrix
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Birthplace of the 6 Astika Darshanas (Sankhya, Yoga, Nyaya, Vaisheshika, Mimamsa, Vedanta), the 108 Upanishads, and the classical Vedanta Acharyas.
                </p>
                <div className="bg-[#1b140d] p-3 rounded border border-[#2d2013] text-xs space-y-1 text-stone-200">
                  <div><strong>Key Luminaries:</strong> Kapila, Patanjali, Gautama, Kanada, Yajnavalkya, Gargi, Shankara, Ramanuja, Madhva.</div>
                  <div className="text-amber-400/90 text-[11px]"><strong>Puranic Reference:</strong> <em>"Uttaram yat samudrasya himadreschaiva dakshinam / Varsham tad bharatam nama..."</em> (Vishnu Purana 2.3.1)</div>
                </div>
              </div>

              {/* Region 2: Gandhara & Central Asia */}
              <div className="bg-[#15100b] border border-[#3d2e1c] rounded-xl p-5 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    NORTH-WEST ASIA
                  </span>
                  <span className="text-xs text-stone-400 font-mono">Gandhara & Bahlika</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-amber-100">
                  Gandhara, Bahlika & Oxus River Basin
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  The intellectual gateway connecting the Sapta Sindhu to Central Asia, housing the great universities of Taxila, linguistics of Panini, and medicine of Charaka.
                </p>
                <div className="bg-[#1b140d] p-3 rounded border border-[#2d2013] text-xs space-y-1 text-stone-200">
                  <div><strong>Key Luminaries:</strong> Acharya Panini (Salatura), Maharshi Charaka, Sage Dirghatamas Mamateya, Upamanyu.</div>
                  <div className="text-amber-400/90 text-[11px]"><strong>Epistemic Contribution:</strong> Generative formal grammar, holistic medical epistemology, and Rigvedic monism.</div>
                </div>
              </div>

              {/* Region 3: Persia & West Asia */}
              <div className="bg-[#15100b] border border-[#3d2e1c] rounded-xl p-5 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    SHAKADVIPA / ARYANA
                  </span>
                  <span className="text-xs text-stone-400 font-mono">Ancient Persia</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-amber-100">
                  Ancient Iran, Shakadvipa & Near East
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  The Avestan-Vedic cognate matrix where Zarathushtra codified <em>Asha</em> (Ṛta) and <em>Atar</em> (Agni), and from where the Maga Solar Rishis migrated to establish Sun worship at Multan and Konark.
                </p>
                <div className="bg-[#1b140d] p-3 rounded border border-[#2d2013] text-xs space-y-1 text-stone-200">
                  <div><strong>Key Luminaries:</strong> Zarathushtra Spitama (Angirasa branch), Sage Medhatithi, The Mitanni Vedic Seers (Mitra-Varuna-Indra).</div>
                  <div className="text-amber-400/90 text-[11px]"><strong>Puranic Reference:</strong> Bhavishya Purana (Brahma Parva 139) & Samba Purana on Shakadvipiya Magas.</div>
                </div>
              </div>

              {/* Region 4: Southeast Asia */}
              <div className="bg-[#15100b] border border-[#3d2e1c] rounded-xl p-5 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    SUVARNABHUMI
                  </span>
                  <span className="text-xs text-stone-400 font-mono">Nusantara & Indochina</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-amber-100">
                  Java, Bali, Cambodia (Funan) & Champa
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  The maritime sphere where Sage Agastya is venerated as Bhatara Guru, Rishi Kaundinya founded Funan, and Dang Hyang Dwijendra formulated the living Balinese <em>Tri Hita Karana</em>.
                </p>
                <div className="bg-[#1b140d] p-3 rounded border border-[#2d2013] text-xs space-y-1 text-stone-200">
                  <div><strong>Key Luminaries:</strong> Maharshi Agastya, Rishi Kaundinya (Cambodia), Dang Hyang Dwijendra (Bali), Rishi Markandeya (Besakih).</div>
                  <div className="text-amber-400/90 text-[11px]"><strong>Epigraphic Evidence:</strong> Canggal Inscription (732 CE), Prambanan Shiva temple, Angkor Wat hydraulic Meru mandalas.</div>
                </div>
              </div>

              {/* Region 5: Yavana / Mediterranean */}
              <div className="bg-[#15100b] border border-[#3d2e1c] rounded-xl p-5 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    YAVANADVIPA / ROMAKA
                  </span>
                  <span className="text-xs text-stone-400 font-mono">Greece & Alexandria</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-amber-100">
                  Mediterranean, Greece & Alexandria
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Celebrated in Varahamihira's <em>Brihat Samhita</em> (2.14) where Yavana masters of astronomical mathematics are honored as equal to Rishis; home of Pythagorean transmigration and Neoplatonism.
                </p>
                <div className="bg-[#1b140d] p-3 rounded border border-[#2d2013] text-xs space-y-1 text-stone-200">
                  <div><strong>Key Luminaries:</strong> Yavanacharya, Pythagoras of Samos, Plotinus (Neoplatonism), Apollonius of Tyana.</div>
                  <div className="text-amber-400/90 text-[11px]"><strong>Scripture Quote:</strong> <em>"mlecchā hi yavanāsteṣu samyak śāstramidaṁ sthitam / ṛṣivat te'pi pūjyante"</em> (Brihat Samhita 2.14)</div>
                </div>
              </div>

              {/* Region 6: Mahachina & Tibet */}
              <div className="bg-[#15100b] border border-[#3d2e1c] rounded-xl p-5 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    MAHACHINA & BHOTADESHA
                  </span>
                  <span className="text-xs text-stone-400 font-mono">Tibet & East Asia</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-amber-100">
                  Mahachina, Tibet & Song Mountain
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  The trans-Himalayan conduit where Sage Vasishtha journeyed to learn Tara Vidya, Bodhidharma founded Shaolin Chan/Zen meditation, and Padmasambhava consecrated Vajrayana.
                </p>
                <div className="bg-[#1b140d] p-3 rounded border border-[#2d2013] text-xs space-y-1 text-stone-200">
                  <div><strong>Key Luminaries:</strong> Maharshi Vasishtha (Cinachara), Acharya Bodhidharma (Pallava prince), Guru Padmasambhava, Kumarajiva.</div>
                  <div className="text-amber-400/90 text-[11px]"><strong>Tantric Texts:</strong> Rudrayamala Tantra Patala 17 & Brahmayamala Tantra on Vasishtha's Mahachina Sadhana.</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= VIEW 3: THE 12 UNIVERSAL MAHAJANAS ================= */}
        {activeTab === "twelve_mahajanas" && (
          <div className="space-y-6">
            <div className="bg-[#17120d] border border-[#3a2c1c] rounded-xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Srimad Bhagavatam 6.3.20-21 Canonical Declaration
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-100">
                The 12 Universal Mahajanas (द्वादश महाजन मण्डल)
              </h2>
              <p className="text-sm text-stone-300 mt-1 leading-relaxed max-w-4xl">
                In the 6th Skandha of <em>Srimad Bhagavatam</em>, Yamaraja reveals to the Yamadutas that the true, esoteric science of Dharma is directly known only by twelve great cosmic authorities.
              </p>

              {/* Master Shloka */}
              <div className="mt-4 bg-[#100d09] border border-[#382a1a] rounded-lg p-4">
                <div className="text-sm md:text-base font-serif text-amber-200 leading-relaxed text-center">
                  स्वयम्भूर्नारदः शम्भुः कुमारः कपिलो मनुः ।<br />
                  प्रह्लादो जनको भीष्मो बलिर्वैयासकिर्वयम् ॥<br />
                  द्वादशैते विजानीमो धर्मं भागवतं भटाः । गुह्यं विशुद्धं दुर्बोधं यं ज्ञात्वाऽमृतमश्नुते ॥
                </div>
                <div className="text-xs text-stone-400 text-center mt-2 italic">
                  — Srimad Bhagavatam (6.3.20-21)
                </div>
              </div>
            </div>

            {/* 12 Mahajanas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[
                { no: 1, name: "Lord Brahma (Svayambhu)", sanskrit: "स्वयम्भू ब्रह्मा", domain: "First Progenitor & Revealer of the 4 Vedas", trait: "Cosmic creation & Vedic sound matrix" },
                { no: 2, name: "Deva-Rishi Narada", sanskrit: "देवर्षि नारद", domain: "Cosmic Traveling Sage of Bhakti Sutras", trait: "Parama Prema & Srimad Bhagavatam inspiration" },
                { no: 3, name: "Lord Shiva (Shambhu)", sanskrit: "भगवान् शम्भु / दक्षिणामूर्ति", domain: "Master of Yoga, Tantra & Cosmic Silence", trait: "Mouna Vyakhyana & 112 Vijnana Bhairava dharanas" },
                { no: 4, name: "The Four Kumaras", sanskrit: "सनकादि चतुष्कुमार", domain: "Eternal Brahmachari Sages of Self-Realization", trait: "Unwavering innocence & Brahma-Vidya realization" },
                { no: 5, name: "Maharshi Kapila", sanskrit: "भगवान् कपिल", domain: "Founding Father of Sankhya Philosophy", trait: "24 Tattvas & Viveka-Khyati discernment" },
                { no: 6, name: "Svayambhuva Manu", sanskrit: "स्वायम्भुव मनु", domain: "First Lawgiver & Progenitor of Humanity", trait: "Manusmriti, cosmic social ethics & Rajadharma" },
                { no: 7, name: "Prahlada Maharaja", sanskrit: "प्रह्लाद महाराज", domain: "Emperor of Daityas & Master of Navadha Bhakti", trait: "Unshakeable faith in Lord's omnipresence" },
                { no: 8, name: "Maharaja Janaka", sanskrit: "महाराज जनक (विदेह)", domain: "Rajarshi of Mithila & Karma Yoga Master", trait: "Jivanmukti in statecraft & Ashtavakra Gita realization" },
                { no: 9, name: "Bhishma Pitamaha", sanskrit: "भीष्म पितामह", domain: "Grand Patriarch of Kurus & Mokshadharma", trait: "Vishnu Sahasranama & Rajadharma from arrow bed" },
                { no: 10, name: "Bali Maharaja", sanskrit: "बलि महाराज", domain: "Sovereign of Sutala Loka & Atma-Nivedanam", trait: "Complete self-surrender to Lord Vamana" },
                { no: 11, name: "Sri Sukadeva Gosvami", sanskrit: "श्री शुकदेव गोस्वामी", domain: "Paramahamsa Speaker of Srimad Bhagavatam", trait: "Tattva Tri-Vadhita & 7-day fast to liberation" },
                { no: 12, name: "Yamaraja (Dharmaraja)", sanskrit: "यमराज (धर्मराज)", domain: "Lord of Cosmic Justice & Death", trait: "Katha Upanishad master instructing Nachiketa" },
              ].map(m => (
                <div
                  key={m.no}
                  className="bg-[#15100b] border border-[#332517] rounded-xl p-4 flex flex-col justify-between hover:border-amber-500/60 transition-all hover:bg-[#1a130d]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center text-xs font-bold">
                        {m.no}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-500">
                        Mahajana
                      </span>
                    </div>
                    <h3 className="text-base font-serif font-bold text-amber-100">
                      {m.name}
                    </h3>
                    <div className="text-xs text-amber-400 font-sans mt-0.5">
                      {m.sanskrit}
                    </div>
                    <p className="text-xs text-stone-300 mt-2 font-medium">
                      {m.domain}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#261c11] text-[11px] text-stone-400 italic">
                    {m.trait}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= VIEW 4: EPISTEMIC COMPARATIVE MATRIX ================= */}
        {activeTab === "comparative_matrix" && (
          <div className="space-y-6">
            <div className="bg-[#17120d] border border-[#3a2c1c] rounded-xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-100">
                  Side-by-Side Epistemic Comparison Matrix
                </h2>
                <p className="text-xs md:text-sm text-stone-300 mt-1">
                  Compare foundational ontologies, causal theories (Karya-Karana), valid instruments of knowledge (Pramanas), and liberation methods across world traditions.
                </p>
              </div>
              <button
                onClick={() => setCompareList([SANATAN_PHILOSOPHERS_CORPUS[0], SANATAN_PHILOSOPHERS_CORPUS[6], SANATAN_PHILOSOPHERS_CORPUS[8]])}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#261c12] text-amber-300 border border-[#44321e] hover:bg-[#312316] transition-all whitespace-nowrap"
              >
                Reset Default Trio (Kapila / Shankara / Madhva)
              </button>
            </div>

            {/* Comparison Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compareList.map(phil => (
                <div
                  key={phil.id}
                  className="bg-[#15100b] border border-[#3d2e1c] rounded-xl p-5 shadow-xl space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[#2b1f13] pb-3">
                      <div>
                        <h3 className="text-lg font-serif font-bold text-amber-100">
                          {phil.name}
                        </h3>
                        <div className="text-xs text-amber-400">
                          {phil.sanskritName}
                        </div>
                      </div>
                      <button
                        onClick={() => toggleCompare(phil)}
                        className="text-xs text-rose-400 hover:text-rose-200 border border-rose-900/50 px-2 py-0.5 rounded bg-rose-950/40"
                      >
                        Remove
                      </button>
                    </div>

                    {/* School & Region */}
                    <div className="text-xs space-y-1">
                      <div className="text-stone-400">
                        <strong className="text-stone-300">Darshana:</strong> {phil.primarySchool}
                      </div>
                      <div className="text-stone-400">
                        <strong className="text-stone-300">Region:</strong> {phil.region}
                      </div>
                      <div className="text-stone-400">
                        <strong className="text-stone-300">Era:</strong> {phil.approxEra}
                      </div>
                    </div>

                    {/* Epistemology */}
                    <div className="bg-[#1b140d] p-3 rounded border border-[#2b1e12] text-xs text-stone-200 leading-relaxed">
                      <strong className="text-amber-400 block mb-1">Central Thesis:</strong>
                      {phil.coreEpistemology}
                    </div>

                    {/* Treatises */}
                    <div className="text-xs">
                      <strong className="text-amber-300 block mb-1">Key Treatises:</strong>
                      <ul className="list-disc list-inside space-y-0.5 text-stone-300">
                        {phil.keyTreatises.map((t, idx) => (
                          <li key={idx}>{t}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Doctrines */}
                    <div className="text-xs">
                      <strong className="text-amber-300 block mb-1">Philosophical Tenets:</strong>
                      <ul className="list-disc list-inside space-y-0.5 text-stone-300">
                        {phil.philosophicalDoctrines.map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Shloka Source Box */}
                  <div className="mt-4 pt-3 border-t border-[#261c11] text-xs bg-[#100d08] p-3 rounded border border-[#24180e]">
                    <div className="text-[11px] text-amber-400 font-semibold mb-1">
                      {phil.vedicScriptureSource.text}
                    </div>
                    <div className="font-serif text-amber-100 text-xs line-clamp-3">
                      {phil.vedicScriptureSource.sanskritShloka}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
