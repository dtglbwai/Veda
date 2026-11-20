import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Search, 
  Filter, 
  Download, 
  ExternalLink, 
  Layers, 
  Scroll, 
  Globe, 
  Check, 
  Copy, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Share2, 
  BookMarked, 
  Flame, 
  Orbit, 
  Compass, 
  ChevronRight, 
  ChevronLeft, 
  ZoomIn, 
  ZoomOut, 
  ArrowUpRight,
  GraduationCap,
  Library,
  Sliders,
  Maximize2,
  FileText,
  Bookmark
} from "lucide-react";
import { VEDIC_PUBLIC_REPOSITORY_EBOOKS, VEDIC_SCRIPTURE_CATEGORIES } from "../data/vedicPublicRepositoryCorpus";
import { VedicScriptureEbook, VedicScriptureCategory, PublicRepositorySource, VedicEbookVerseSample } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface VedicScriptureEbookLibraryProps {
  onSelectScriptureVerse?: (verseText: string) => void;
  onNavigateToTab?: (tabId: string) => void;
}

export default function VedicScriptureEbookLibrary({ onSelectScriptureVerse, onNavigateToTab }: VedicScriptureEbookLibraryProps) {
  const { currentScript, transliterate, t } = useLanguage();

  // Navigation tabs within E-Book component
  const [viewTab, setViewTab] = useState<"library" | "reader" | "repositories" | "citations">("library");

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<VedicScriptureCategory>("All Sacred Categories");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("ALL");
  const [selectedRepo, setSelectedRepo] = useState<string>("ALL");

  // Selected E-Book for active reading
  const [selectedEbookId, setSelectedEbookId] = useState<string>("rigveda-samhita-shakala");
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [readerMode, setReaderMode] = useState<"pothi" | "interlinear" | "dual_language">("pothi");
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg" | "xl">("md");
  const [targetComparisonLang, setTargetComparisonLang] = useState<string>("en");

  // Copy feedback
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Audio Vedic chant TTS state
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Active Ebook Object
  const selectedEbook = useMemo(() => {
    return VEDIC_PUBLIC_REPOSITORY_EBOOKS.find(b => b.id === selectedEbookId) || VEDIC_PUBLIC_REPOSITORY_EBOOKS[0];
  }, [selectedEbookId]);

  // Unique Languages across all editions
  const allLanguagesInCorpus = useMemo(() => {
    const langSet = new Set<string>();
    VEDIC_PUBLIC_REPOSITORY_EBOOKS.forEach(b => {
      b.availableLanguageEditions.forEach(ed => langSet.add(ed.languageName));
    });
    return Array.from(langSet).sort();
  }, []);

  // Unique Repositories across all editions
  const allRepositoriesInCorpus = useMemo(() => {
    const repoSet = new Set<string>();
    VEDIC_PUBLIC_REPOSITORY_EBOOKS.forEach(b => {
      repoSet.add(b.canonicalRepository.name);
      b.alternateRepositories.forEach(ar => repoSet.add(ar.name));
    });
    return Array.from(repoSet).sort();
  }, []);

  // Filtered E-Books with Rigveda persistently on top
  const filteredEbooks = useMemo(() => {
    const list = VEDIC_PUBLIC_REPOSITORY_EBOOKS.filter(ebook => {
      const matchCat = selectedCategory === "All Sacred Categories" || ebook.category === selectedCategory;
      const matchLang = selectedLanguage === "ALL" || ebook.availableLanguageEditions.some(ed => ed.languageName.includes(selectedLanguage));
      const matchRepo = selectedRepo === "ALL" || ebook.canonicalRepository.name === selectedRepo || ebook.alternateRepositories.some(ar => ar.name === selectedRepo);
      
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q ||
        ebook.title.toLowerCase().includes(q) ||
        ebook.sanskritTitleDevanagari.includes(q) ||
        ebook.sanskritTitleIAST.toLowerCase().includes(q) ||
        ebook.traditionalRishiOrAuthor.toLowerCase().includes(q) ||
        ebook.recensionOrShakha.toLowerCase().includes(q) ||
        ebook.executiveSummary.toLowerCase().includes(q) ||
        ebook.availableLanguageEditions.some(ed => ed.translatorOrEditor.toLowerCase().includes(q) || ed.languageName.toLowerCase().includes(q));

      return matchCat && matchLang && matchRepo && matchSearch;
    });

    // Keep Rigveda persistently on top of all scriptures
    return list.sort((a, b) => {
      const aIsRig = a.id.toLowerCase().includes("rigveda") || a.title.toLowerCase().includes("rigveda");
      const bIsRig = b.id.toLowerCase().includes("rigveda") || b.title.toLowerCase().includes("rigveda");
      if (aIsRig && !bIsRig) return -1;
      if (!aIsRig && bIsRig) return 1;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedLanguage, selectedRepo]);

  // Play Audio / Chanting Simulation
  const handlePlayVedicChant = (textToChant: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      if (isAudioPlaying) {
        setIsAudioPlaying(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(textToChant);
      utterance.rate = 0.82;
      utterance.pitch = 0.95;
      utterance.lang = "hi-IN"; // Highest quality Sanskrit/Devanagari phonology
      utterance.onend = () => setIsAudioPlaying(false);
      utterance.onerror = () => setIsAudioPlaying(false);
      
      setIsAudioPlaying(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCopyCitation = (bibtex: string, id: string) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  return (
    <div className="w-full min-h-screen bg-[#110d0a] text-amber-100 flex flex-col font-sans pb-24">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#20140c] via-[#2a1a0f] to-[#1a100a] border-b border-amber-900/60 px-4 md:px-8 py-6 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="p-2 rounded-xl bg-amber-950/80 border border-amber-600/60 text-amber-400 shadow-md">
                <BookOpen className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800/60">
                GLOBAL OPEN ACCESS REPOSITORY
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-amber-100 drop-shadow">
              Hindu & Vedic Scriptures E-Book Corpus
            </h1>
            <p className="text-xs md:text-sm text-amber-300/70 font-serif mt-1 max-w-3xl leading-relaxed">
              Complete digital editions of the 4 Vedas, Brahmanas, Aranyakas, 108 Upanishads, Vedangas, Upavedas, Shad-Darshanas, Itihasas, 18 Mahapuranas, and Bhakti classics in all major languages with direct 1-click open-access downloads from Internet Archive, GRETIL, BORI, DLI, and Muktabodha.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-2 font-mono text-xs bg-black/50 border border-amber-900/60 p-2.5 rounded-2xl">
            <div className="text-center px-2.5 border-r border-amber-900/60">
              <span className="block text-amber-300 font-bold text-sm">{VEDIC_PUBLIC_REPOSITORY_EBOOKS.length}+</span>
              <span className="text-[10px] text-amber-400/60">Scriptures</span>
            </div>
            <div className="text-center px-2.5 border-r border-amber-900/60">
              <span className="block text-amber-300 font-bold text-sm">12+</span>
              <span className="text-[10px] text-amber-400/60">Languages</span>
            </div>
            <div className="text-center px-2.5">
              <span className="block text-emerald-400 font-bold text-sm">100%</span>
              <span className="text-[10px] text-amber-400/60">Public Domain</span>
            </div>
          </div>
        </div>

        {/* View Mode Navigation Tabs */}
        <div className="max-w-7xl mx-auto mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-amber-900/50 pt-3.5">
          <div className="flex items-center gap-2 p-1 bg-black/60 rounded-xl border border-amber-900/60 text-xs font-serif">
            <button
              onClick={() => setViewTab("library")}
              className={`px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                viewTab === "library" ? "bg-amber-700 text-amber-100 font-bold shadow-md" : "text-amber-300/70 hover:text-amber-200"
              }`}
            >
              <Library className="w-3.5 h-3.5" />
              <span>E-Book Corpus Library</span>
            </button>

            <button
              onClick={() => setViewTab("reader")}
              className={`px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                viewTab === "reader" ? "bg-amber-700 text-amber-100 font-bold shadow-md" : "text-amber-300/70 hover:text-amber-200"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Interactive Pothi & Interlinear Reader</span>
            </button>

            <button
              onClick={() => setViewTab("repositories")}
              className={`px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                viewTab === "repositories" ? "bg-amber-700 text-amber-100 font-bold shadow-md" : "text-amber-300/70 hover:text-amber-200"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Online Repositories & Downloads Matrix</span>
            </button>

            <button
              onClick={() => setViewTab("citations")}
              className={`px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                viewTab === "citations" ? "bg-amber-700 text-amber-100 font-bold shadow-md" : "text-amber-300/70 hover:text-amber-200"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>BibTeX Academic Citations</span>
            </button>
          </div>

          {/* Quick Active Book Pill */}
          <div className="text-xs text-amber-300/80 flex items-center gap-2">
            <span>Active E-Book:</span>
            <strong className="text-amber-200 bg-amber-950/80 px-2.5 py-1 rounded-lg border border-amber-800/60 font-serif">
              {selectedEbook.title}
            </strong>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 w-full flex-1">

        {/* 1. LIBRARY EXPLORER VIEW */}
        {viewTab === "library" && (
          <div className="space-y-6">
            
            {/* Filter Bar */}
            <div className="p-4 md:p-5 rounded-2xl bg-[#1b120a] border border-amber-900/60 space-y-4 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                {/* Search Bar */}
                <div className="relative w-full md:w-96">
                  <input
                    type="text"
                    placeholder="Search by scripture title, rishi, recension or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 rounded-xl bg-black/60 border border-amber-800/60 text-xs text-amber-100 placeholder-amber-400/40 focus:outline-none focus:border-amber-400 shadow-inner"
                  />
                  <Search className="w-4 h-4 text-amber-400 absolute left-3.5 top-2.5 pointer-events-none" />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-2 text-amber-400/60 hover:text-amber-200 text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Dropdowns */}
                <div className="flex items-center gap-2.5 w-full md:w-auto flex-wrap">
                  {/* Language Selector */}
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-black/60 border border-amber-800/60 text-xs text-amber-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value="ALL">🌐 All Languages ({allLanguagesInCorpus.length})</option>
                    {allLanguagesInCorpus.map(l => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>

                  {/* Repository Selector */}
                  <select
                    value={selectedRepo}
                    onChange={(e) => setSelectedRepo(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-black/60 border border-amber-800/60 text-xs text-amber-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value="ALL">🏛️ All Online Repositories ({allRepositoriesInCorpus.length})</option>
                    {allRepositoriesInCorpus.map(r => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1">
                {VEDIC_SCRIPTURE_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-serif whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? "bg-amber-600 text-amber-950 font-bold shadow-md"
                        : "bg-black/40 text-amber-300/70 hover:bg-amber-950/60 hover:text-amber-100 border border-amber-900/40"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Quick Spotlight Canonical Shortcuts */}
              <div className="pt-2 border-t border-amber-900/40 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
                <span className="text-[11px] font-mono uppercase text-amber-400/70 tracking-wider flex items-center gap-1 shrink-0">
                  <Sparkles className="w-3 h-3 text-amber-400" /> Featured Treatises:
                </span>
                
                <button
                  onClick={() => {
                    setSelectedCategory("Ayurveda & Health Sciences (Upaveda)");
                    setSearchQuery("");
                  }}
                  className="px-2.5 py-1 rounded-lg bg-emerald-950/70 text-emerald-300 border border-emerald-700/60 hover:bg-emerald-900/80 transition-all font-serif shrink-0 flex items-center gap-1"
                >
                  <span>🌿 All Ayurveda Treatises</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedEbookId("charaka-samhita-ayurveda-complete");
                    setViewTab("reader");
                  }}
                  className="px-2.5 py-1 rounded-lg bg-amber-950/80 text-amber-200 border border-amber-700/60 hover:bg-amber-900 transition-all font-serif shrink-0 flex items-center gap-1"
                >
                  <span>📖 चरक संहिता (Charaka Samhita)</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedEbookId("bhagavati-samhita-vyakhyaprajnapti");
                    setViewTab("reader");
                  }}
                  className="px-2.5 py-1 rounded-lg bg-indigo-950/80 text-indigo-200 border border-indigo-700/60 hover:bg-indigo-900 transition-all font-serif shrink-0 flex items-center gap-1"
                >
                  <span>🔬 भगवती संहिता (Bhagavati Sutra)</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedEbookId("sushruta-samhita-salya-tantra-complete");
                    setViewTab("reader");
                  }}
                  className="px-2.5 py-1 rounded-lg bg-red-950/80 text-red-200 border border-red-700/60 hover:bg-red-900 transition-all font-serif shrink-0 flex items-center gap-1"
                >
                  <span>🩺 सुश्रुत संहिता (Sushruta Samhita)</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedEbookId("ashtanga-hridayam-vagbhata-complete");
                    setViewTab("reader");
                  }}
                  className="px-2.5 py-1 rounded-lg bg-amber-950/80 text-amber-200 border border-amber-700/60 hover:bg-amber-900 transition-all font-serif shrink-0 flex items-center gap-1"
                >
                  <span>✨ अष्टाङ्गहृदयम् (Ashtanga Hridaya)</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedEbookId("sharngadhara-samhita-nadi-pariksha");
                    setViewTab("reader");
                  }}
                  className="px-2.5 py-1 rounded-lg bg-amber-950/80 text-amber-200 border border-amber-700/60 hover:bg-amber-900 transition-all font-serif shrink-0 flex items-center gap-1"
                >
                  <span>⚡ शार्ङ्गधर (Nadi Pariksha)</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedEbookId("kashyapa-samhita-kaumarbhritya");
                    setViewTab("reader");
                  }}
                  className="px-2.5 py-1 rounded-lg bg-amber-950/80 text-amber-200 border border-amber-700/60 hover:bg-amber-900 transition-all font-serif shrink-0 flex items-center gap-1"
                >
                  <span>👶 काश्यप (Suvarna Prashana)</span>
                </button>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredEbooks.map(ebook => {
                const isSelected = selectedEbookId === ebook.id;
                return (
                  <div
                    key={ebook.id}
                    className={`rounded-2xl border transition-all flex flex-col justify-between overflow-hidden shadow-lg group relative ${
                      isSelected 
                        ? "bg-gradient-to-b from-[#281a0f] to-[#1c1209] border-amber-400/90 ring-1 ring-amber-400" 
                        : "bg-[#1c120a] border-amber-900/60 hover:border-amber-700/80 hover:bg-[#22160d]"
                    }`}
                  >
                    {/* Header */}
                    <div className="p-4 md:p-5 border-b border-amber-900/40">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800/60">
                          {ebook.subCategory}
                        </span>
                        {ebook.swaraAccentsPreserved && (
                          <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700/50">
                            SWARA ACCENTED
                          </span>
                        )}
                      </div>

                      <h3 className="text-base md:text-lg font-serif font-bold text-amber-100 leading-snug group-hover:text-amber-300 transition-colors">
                        {ebook.title}
                      </h3>

                      <div className="text-sm font-serif text-amber-400/90 font-bold mt-1">
                        {transliterate(ebook.sanskritTitleDevanagari)}
                      </div>

                      <p className="text-[11px] text-amber-300/60 font-sans mt-2 line-clamp-3 leading-relaxed">
                        {ebook.executiveSummary}
                      </p>
                    </div>

                    {/* Metadata & Editions List */}
                    <div className="p-4 md:p-5 space-y-3 bg-black/20">
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-amber-200/80 font-mono">
                        <div>
                          <span className="text-amber-400/50 block text-[9px]">RISHI / TRADITION:</span>
                          <span className="truncate block font-serif font-semibold">{ebook.traditionalRishiOrAuthor}</span>
                        </div>
                        <div>
                          <span className="text-amber-400/50 block text-[9px]">CANON EXTENT:</span>
                          <span className="truncate block">{ebook.totalVersesOrMantras} Verses</span>
                        </div>
                      </div>

                      {/* Available Languages */}
                      <div>
                        <span className="text-[9px] font-mono text-amber-400/50 block mb-1">AVAILABLE TRANSLATIONS & EDITIONS:</span>
                        <div className="flex flex-wrap gap-1">
                          {ebook.availableLanguageEditions.map(ed => (
                            <span 
                              key={ed.languageCode}
                              className="text-[10px] font-sans px-2 py-0.5 rounded bg-amber-950/70 text-amber-200 border border-amber-900/50"
                              title={`${ed.languageName} by ${ed.translatorOrEditor}`}
                            >
                              {ed.languageName}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Repository Source Direct Link */}
                      <div className="pt-2 border-t border-amber-900/40 flex items-center justify-between text-xs">
                        <span className="text-[10px] font-mono text-amber-400/60 truncate max-w-[180px]">
                          Repo: {ebook.canonicalRepository.name}
                        </span>

                        <a 
                          href={ebook.canonicalRepository.viewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[11px] text-amber-300 hover:text-amber-100 font-semibold"
                        >
                          <span>Open Repo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="p-3.5 bg-[#170e08] border-t border-amber-900/60 flex items-center justify-between gap-2">
                      <button
                        onClick={() => {
                          setSelectedEbookId(ebook.id);
                          setViewTab("reader");
                        }}
                        className="flex-1 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-amber-950 font-serif font-bold text-xs transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Read Online</span>
                      </button>

                      {ebook.canonicalRepository.pdfDownloadUrl && (
                        <a
                          href={ebook.canonicalRepository.pdfDownloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          className="p-1.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 text-amber-300 border border-amber-800/60 transition-colors flex items-center justify-center"
                          title="Download PDF"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      )}

                      <button
                        onClick={() => handleCopyCitation(ebook.bibtexCitation, ebook.id)}
                        className="p-1.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 text-amber-300 border border-amber-800/60 transition-colors flex items-center justify-center cursor-pointer"
                        title="Copy BibTeX Citation"
                      >
                        {copiedId === ebook.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredEbooks.length === 0 && (
              <div className="text-center py-16 bg-[#18110a] rounded-2xl border border-amber-900/60 space-y-3">
                <p className="font-serif text-lg text-amber-200">No scriptures found matching your criteria</p>
                <p className="text-xs text-amber-400/60">Try searching for other terms or reset your filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Sacred Categories");
                    setSelectedLanguage("ALL");
                    setSelectedRepo("ALL");
                  }}
                  className="px-4 py-1.5 rounded-xl bg-amber-800/60 text-amber-200 text-xs border border-amber-700/60 cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* 2. INTERACTIVE POTHI & INTERLINEAR READER VIEW */}
        {viewTab === "reader" && (
          <div className="space-y-6">
            {/* Reader Controls Toolbar */}
            <div className="p-4 md:p-5 rounded-2xl bg-[#1b120a] border border-amber-900/60 flex flex-wrap items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3">
                {/* Scripture Switcher */}
                <select
                  value={selectedEbookId}
                  onChange={(e) => {
                    setSelectedEbookId(e.target.value);
                    setActiveChapterIndex(0);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-black/60 border border-amber-700/60 text-xs font-serif font-bold text-amber-100 focus:outline-none focus:border-amber-400"
                >
                  {VEDIC_PUBLIC_REPOSITORY_EBOOKS.map(b => (
                    <option key={b.id} value={b.id}>{b.title} ({b.subCategory})</option>
                  ))}
                </select>

                {/* Chapter Selector */}
                {selectedEbook.tableOfContents.length > 1 && (
                  <select
                    value={activeChapterIndex}
                    onChange={(e) => setActiveChapterIndex(Number(e.target.value))}
                    className="px-3.5 py-2 rounded-xl bg-black/60 border border-amber-800/60 text-xs font-serif text-amber-200 focus:outline-none focus:border-amber-400"
                  >
                    {selectedEbook.tableOfContents.map((ch, idx) => (
                      <option key={idx} value={idx}>{ch.chapterNumber}: {ch.title}</option>
                    ))}
                  </select>
                )}
              </div>

              {/* Reader Modes & Typography */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* Layout Mode Switcher */}
                <div className="flex items-center gap-1 p-1 bg-black/50 rounded-xl border border-amber-900/60 text-xs">
                  <button
                    onClick={() => setReaderMode("pothi")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      readerMode === "pothi" ? "bg-amber-700 text-amber-100 font-bold" : "text-amber-300/70 hover:text-amber-100"
                    }`}
                  >
                    📜 Pothi Manuscript
                  </button>
                  <button
                    onClick={() => setReaderMode("interlinear")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      readerMode === "interlinear" ? "bg-amber-700 text-amber-100 font-bold" : "text-amber-300/70 hover:text-amber-100"
                    }`}
                  >
                    🔍 Interlinear & Bhashya
                  </button>
                  <button
                    onClick={() => setReaderMode("dual_language")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      readerMode === "dual_language" ? "bg-amber-700 text-amber-100 font-bold" : "text-amber-300/70 hover:text-amber-100"
                    }`}
                  >
                    🌐 Side-by-Side Translation
                  </button>
                </div>

                {/* Font Scaling */}
                <div className="flex items-center gap-1 p-1 bg-black/50 rounded-xl border border-amber-900/60 text-xs font-mono">
                  <button 
                    onClick={() => setFontSize(fontSize === "xl" ? "lg" : fontSize === "lg" ? "md" : "sm")}
                    className="p-1 text-amber-300/70 hover:text-amber-100 cursor-pointer"
                    title="Decrease Font"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-1.5 text-amber-400 font-bold">{fontSize.toUpperCase()}</span>
                  <button 
                    onClick={() => setFontSize(fontSize === "sm" ? "md" : fontSize === "md" ? "lg" : "xl")}
                    className="p-1 text-amber-300/70 hover:text-amber-100 cursor-pointer"
                    title="Increase Font"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Audio Chanting Button */}
                {selectedEbook.sampleVerses.length > 0 && (
                  <button
                    onClick={() => handlePlayVedicChant(selectedEbook.sampleVerses[0].devanagari)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-serif flex items-center gap-1.5 cursor-pointer transition-all ${
                      isAudioPlaying
                        ? "bg-red-900/80 border-red-500 text-red-100 animate-pulse"
                        : "bg-amber-950/80 border-amber-700/60 text-amber-300 hover:bg-amber-900"
                    }`}
                  >
                    {isAudioPlaying ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    <span>{isAudioPlaying ? "Stop Chanting" : "Listen Swara Audio"}</span>
                  </button>
                )}
              </div>
            </div>

            {/* READER CANVAS */}
            <div className="space-y-6">

              {/* 1. POTHI MANUSCRIPT LAYOUT */}
              {readerMode === "pothi" && (
                <div className="p-6 md:p-10 rounded-2xl bg-gradient-to-b from-[#2a1b10] via-[#21140c] to-[#1a100a] border-2 border-amber-700/80 shadow-2xl space-y-6 relative overflow-hidden ring-1 ring-amber-500/30">
                  {/* Decorative Pothi Borders */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700 opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700 opacity-60" />

                  {/* Header Title */}
                  <div className="text-center space-y-1.5 border-b border-amber-800/60 pb-5">
                    <span className="text-xs font-mono tracking-widest text-amber-400/70 uppercase">
                      ॥ {selectedEbook.subCategory} ॥
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-100">
                      {transliterate(selectedEbook.sanskritTitleDevanagari)}
                    </h2>
                    <p className="text-xs font-serif text-amber-300/80">
                      {selectedEbook.sanskritTitleIAST} • {selectedEbook.recensionOrShakha}
                    </p>
                  </div>

                  {/* Verses In Pothi Parchment Style */}
                  <div className="space-y-8 py-2">
                    {selectedEbook.sampleVerses.map((verse, idx) => (
                      <div 
                        key={idx}
                        className="p-6 md:p-8 rounded-xl bg-black/40 border border-amber-800/50 space-y-4 shadow-inner relative"
                      >
                        <div className="flex items-center justify-between text-xs text-amber-400/80 font-mono border-b border-amber-900/40 pb-2">
                          <span className="font-bold">{verse.verseNumber}</span>
                          <span>Script: {currentScript}</span>
                        </div>

                        {/* Sacred Verse in Selected Script */}
                        <p className={`font-serif text-amber-100 tracking-wide leading-loose text-center drop-shadow-md ${
                          fontSize === "sm" ? "text-lg md:text-xl" :
                          fontSize === "md" ? "text-xl md:text-2xl" :
                          fontSize === "lg" ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
                        }`}>
                          {transliterate(verse.devanagari)}
                        </p>

                        {/* IAST Diacritics Transliteration */}
                        <p className="text-xs md:text-sm font-mono text-amber-300/70 text-center italic leading-relaxed">
                          {verse.iast}
                        </p>

                        {/* Padapatha (Word Separation) */}
                        {verse.padapatha && (
                          <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-900/40 text-xs font-serif text-amber-200/80 text-center">
                            <strong className="text-amber-400 block text-[10px] font-mono mb-0.5">पदपाठः (PADAPATHA):</strong>
                            {transliterate(verse.padapatha)}
                          </div>
                        )}

                        {/* English Translation */}
                        <div className="pt-3 border-t border-amber-900/40 space-y-1">
                          <span className="text-[10px] font-mono text-amber-400/60 uppercase">TRANSLATION (ENGLISH):</span>
                          <p className="text-sm md:text-base font-serif text-amber-200/90 leading-relaxed">
                            {verse.translationEnglish}
                          </p>
                        </div>

                        {/* Multilingual Translation Tab if present */}
                        {verse.translationsOtherLangs && Object.keys(verse.translationsOtherLangs).length > 0 && (
                          <div className="pt-2 flex flex-wrap gap-2">
                            {Object.entries(verse.translationsOtherLangs).map(([langKey, transText]) => (
                              <div key={langKey} className="w-full p-2.5 rounded-lg bg-black/60 border border-amber-900/40 text-xs">
                                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase block mb-0.5">
                                  {langKey.toUpperCase()} TRANSLATION:
                                </span>
                                <p className="text-amber-100/90 font-serif">{transText}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. INTERLINEAR & BHASHYA VIEW */}
              {readerMode === "interlinear" && (
                <div className="space-y-6">
                  {selectedEbook.sampleVerses.map((verse, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-[#1d130b] border border-amber-800/60 space-y-5 shadow-xl">
                      <div className="flex items-center justify-between border-b border-amber-900/50 pb-3">
                        <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-lg border border-amber-800/60">
                          {verse.verseNumber}
                        </span>
                        <span className="text-xs text-amber-300/70 font-serif">
                          {selectedEbook.title} • {selectedEbook.recensionOrShakha}
                        </span>
                      </div>

                      {/* Main Verse */}
                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-100 leading-relaxed">
                          {transliterate(verse.devanagari)}
                        </h3>
                        <p className="text-xs font-mono text-amber-300/80 italic">{verse.iast}</p>
                      </div>

                      {/* Word-For-Word Padapatha Glossary */}
                      {verse.wordForWord && verse.wordForWord.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-mono font-bold text-amber-400 uppercase">
                            WORD-BY-WORD (PADAVIGRAHA) GLOSSARY:
                          </h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                            {verse.wordForWord.map((w, wIdx) => (
                              <div key={wIdx} className="p-2 rounded-lg bg-black/40 border border-amber-900/50 text-xs">
                                <span className="font-serif font-bold text-amber-200 block">{w.word}</span>
                                <span className="text-amber-300/70 text-[11px] block mt-0.5">{w.meaning}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Commentaries Accordion */}
                      {verse.commentaries && verse.commentaries.length > 0 && (
                        <div className="space-y-3 pt-3 border-t border-amber-900/50">
                          <h4 className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                            <span>TRADITIONAL BHASHYAS & HERMENEUTICS:</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {verse.commentaries.map((c, cIdx) => (
                              <div key={cIdx} className="p-3.5 rounded-xl bg-black/50 border border-amber-800/40 space-y-1.5">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="font-serif font-bold text-amber-300">{c.commentator}</span>
                                  <span className="text-[10px] font-mono text-amber-400/60">{c.school}</span>
                                </div>
                                <p className="text-xs text-amber-100/80 font-serif leading-relaxed">
                                  {c.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* 3. DUAL LANGUAGE COMPARISON VIEW */}
              {readerMode === "dual_language" && (
                <div className="p-6 rounded-2xl bg-[#1d130b] border border-amber-800/60 space-y-6 shadow-xl">
                  <div className="flex items-center justify-between flex-wrap gap-2 border-b border-amber-900/50 pb-3">
                    <h3 className="text-sm font-serif font-bold text-amber-200">
                      Side-by-Side Dual Language & Commentary Comparator
                    </h3>
                    <div className="flex items-center gap-2 text-xs">
                      <span>Target Language:</span>
                      <select
                        value={targetComparisonLang}
                        onChange={(e) => setTargetComparisonLang(e.target.value)}
                        className="px-2.5 py-1 rounded-lg bg-black/60 border border-amber-800/60 text-xs text-amber-200"
                      >
                        <option value="en">English (Ralph T.H. Griffith / Gambhirananda)</option>
                        <option value="hi">Hindi (Gita Press / Acharya Shriram Sharma)</option>
                        <option value="de">German (Karl Friedrich Geldner / Paul Deussen)</option>
                        <option value="fr">French (Louis Renou / Eugène Burnouf)</option>
                        <option value="ru">Russian (Tatyana Elizarenkova)</option>
                        <option value="mr">Marathi (Sant Dnyaneshwar / Satwalekar)</option>
                        <option value="ta">Tamil (M.R. Jambunathan / Divya Prabandham)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Pane: Sanskrit Original */}
                    <div className="p-5 rounded-xl bg-black/50 border border-amber-900/60 space-y-4">
                      <span className="text-[11px] font-mono font-bold text-amber-400 block border-b border-amber-900/40 pb-1">
                        ORIGINAL SANSKRIT / SACRED SOURCE ({currentScript}):
                      </span>
                      {selectedEbook.sampleVerses.map((v, i) => (
                        <div key={i} className="space-y-2 border-b border-amber-900/30 pb-3 last:border-b-0">
                          <span className="text-[10px] font-mono text-amber-400/60">{v.verseNumber}</span>
                          <p className="text-lg font-serif font-bold text-amber-100 leading-relaxed">
                            {transliterate(v.devanagari)}
                          </p>
                          <p className="text-xs font-mono text-amber-300/70 italic">{v.iast}</p>
                        </div>
                      ))}
                    </div>

                    {/* Right Pane: Selected Target Translation */}
                    <div className="p-5 rounded-xl bg-black/50 border border-amber-900/60 space-y-4">
                      <span className="text-[11px] font-mono font-bold text-amber-400 block border-b border-amber-900/40 pb-1">
                        TRANSLATION IN {targetComparisonLang.toUpperCase()}:
                      </span>
                      {selectedEbook.sampleVerses.map((v, i) => {
                        const targetText = targetComparisonLang === "en" 
                          ? v.translationEnglish 
                          : (v.translationsOtherLangs && v.translationsOtherLangs[targetComparisonLang]) || v.translationEnglish;

                        return (
                          <div key={i} className="space-y-2 border-b border-amber-900/30 pb-3 last:border-b-0">
                            <span className="text-[10px] font-mono text-amber-400/60">{v.verseNumber}</span>
                            <p className="text-sm md:text-base font-serif text-amber-200/90 leading-relaxed">
                              {targetText}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* 3. REPOSITORIES & DOWNLOAD MATRIX VIEW */}
        {viewTab === "repositories" && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-[#1b120a] border border-amber-900/60 space-y-2">
              <h2 className="text-lg font-serif font-bold text-amber-100 flex items-center gap-2">
                <Globe className="w-5 h-5 text-amber-400" />
                <span>Global Public Domain Repository Open-Access Hub</span>
              </h2>
              <p className="text-xs text-amber-300/70 font-sans">
                Every text is linked directly to authoritative, verifiable public repositories including the Internet Archive (archive.org), GRETIL (University of Göttingen), BORI (Pune), TITUS (Frankfurt), and Muktabodha Digital Library.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-amber-900/60 shadow-xl bg-[#18110a]">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-[#26180f] text-amber-300 border-b border-amber-900/60 font-mono text-[11px]">
                  <tr>
                    <th className="p-3.5">Scripture Title</th>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Primary Public Repository</th>
                    <th className="p-3.5">Available Formats</th>
                    <th className="p-3.5">Languages</th>
                    <th className="p-3.5 text-right">Direct Access</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-950 text-amber-200/90">
                  {VEDIC_PUBLIC_REPOSITORY_EBOOKS.map(ebook => (
                    <tr key={ebook.id} className="hover:bg-amber-950/30 transition-colors">
                      <td className="p-3.5 font-serif font-bold text-amber-100">
                        {ebook.title}
                        <span className="block text-[10px] font-mono text-amber-400/60 font-normal">
                          {ebook.sanskritTitleIAST}
                        </span>
                      </td>
                      <td className="p-3.5 text-[11px] text-amber-300/80">
                        {ebook.category}
                      </td>
                      <td className="p-3.5 font-mono text-[11px] text-amber-400">
                        {ebook.canonicalRepository.name}
                      </td>
                      <td className="p-3.5">
                        <div className="flex items-center gap-1 flex-wrap font-mono text-[10px]">
                          {ebook.canonicalRepository.pdfDownloadUrl && (
                            <span className="px-1.5 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-800/50">
                              PDF
                            </span>
                          )}
                          {ebook.canonicalRepository.epubDownloadUrl && (
                            <span className="px-1.5 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/50">
                              EPUB
                            </span>
                          )}
                          {ebook.canonicalRepository.txtDownloadUrl && (
                            <span className="px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/50">
                              TXT
                            </span>
                          )}
                          {ebook.canonicalRepository.teiXmlUrl && (
                            <span className="px-1.5 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/50">
                              XML
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-3.5">
                        <span className="text-[11px] text-amber-300">
                          {ebook.availableLanguageEditions.length} languages
                        </span>
                      </td>
                      <td className="p-3.5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <a
                            href={ebook.canonicalRepository.viewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded-lg bg-amber-900/70 hover:bg-amber-800 text-amber-200 border border-amber-700/60 text-[11px] flex items-center gap-1"
                          >
                            <span>Open</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>

                          {ebook.canonicalRepository.pdfDownloadUrl && (
                            <a
                              href={ebook.canonicalRepository.pdfDownloadUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 rounded-lg bg-black/60 hover:bg-amber-900 text-amber-300 border border-amber-800/60"
                              title="Download PDF"
                            >
                              <Download className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 4. ACADEMIC BIBTEX CITATIONS */}
        {viewTab === "citations" && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-[#1b120a] border border-amber-900/60 space-y-2">
              <h2 className="text-lg font-serif font-bold text-amber-100 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-amber-400" />
                <span>Academic Citations & BibTeX Reference Matrix</span>
              </h2>
              <p className="text-xs text-amber-300/70 font-sans">
                Standardized bibliographic references for research publications, Indological papers, and academic theses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {VEDIC_PUBLIC_REPOSITORY_EBOOKS.map(ebook => (
                <div key={ebook.id} className="p-4 rounded-2xl bg-[#18110a] border border-amber-900/60 space-y-3 shadow-md">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-amber-100 text-sm">{ebook.title}</h3>
                    <button
                      onClick={() => handleCopyCitation(ebook.bibtexCitation, ebook.id)}
                      className="px-2.5 py-1 rounded-lg bg-amber-900/70 hover:bg-amber-800 text-amber-200 border border-amber-700/60 text-xs flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId === ebook.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === ebook.id ? "Copied!" : "Copy BibTeX"}</span>
                    </button>
                  </div>

                  <pre className="p-3 rounded-xl bg-black/60 border border-amber-950 text-[11px] font-mono text-amber-300/80 overflow-x-auto whitespace-pre-wrap">
                    {ebook.bibtexCitation}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
