import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Search, 
  Filter, 
  ExternalLink, 
  Download, 
  FileText, 
  Quote, 
  Sparkles, 
  Copy, 
  Check, 
  Volume2, 
  VolumeX, 
  Globe, 
  Award, 
  Layers, 
  Compass, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  BookMarked, 
  Flame, 
  Atom, 
  Orbit, 
  Scroll, 
  Cpu, 
  Building2, 
  ShieldCheck, 
  ArrowUpRight,
  Share2,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Library,
  GraduationCap
} from "lucide-react";
import { INTERNATIONAL_RESEARCH_EBOOKS, INTERNATIONAL_EBOOK_CATEGORIES } from "../data/internationalResearchersEbooks";
import { InternationalEbook, InternationalEbookCategory, EbookChapter, EbookExcerpt } from "../types";

interface InternationalIndologyEbooksProps {
  onNavigateToScripture?: (searchQuery: string) => void;
  onNavigateToResearch?: (tabId: string) => void;
}

export default function InternationalIndologyEbooks({ onNavigateToScripture, onNavigateToResearch }: InternationalIndologyEbooksProps) {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<"library" | "reader" | "theses_matrix" | "citations">("library");

  // Filtering states
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedCountry, setSelectedCountry] = useState<string>("ALL");

  // Selected Ebook for detailed viewing / reading mode
  const [selectedEbookId, setSelectedEbookId] = useState<string>("staal-agni-fire-altar");
  const [readingChapterIndex, setReadingChapterIndex] = useState<number>(0);
  const [fontSizeLevel, setFontSizeLevel] = useState<"sm" | "md" | "lg">("md");

  // Copy state
  const [copiedEbookId, setCopiedEbookId] = useState<string | null>(null);
  const [copiedBibtexId, setCopiedBibtexId] = useState<string | null>(null);

  // Audio Speech Synthesis state
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [audioSpeed, setAudioSpeed] = useState<number>(1.0);

  // Unique countries list
  const uniqueCountries = useMemo(() => {
    const countries = new Set<string>();
    INTERNATIONAL_RESEARCH_EBOOKS.forEach(b => {
      b.authorCountry.split("/").forEach(c => countries.add(c.trim()));
    });
    return Array.from(countries).sort();
  }, []);

  const selectedEbook = useMemo(() => {
    return INTERNATIONAL_RESEARCH_EBOOKS.find(b => b.id === selectedEbookId) || INTERNATIONAL_RESEARCH_EBOOKS[0];
  }, [selectedEbookId]);

  // Filtered Ebooks
  const filteredEbooks = useMemo(() => {
    return INTERNATIONAL_RESEARCH_EBOOKS.filter(ebook => {
      const matchesSearch = 
        searchQuery === "" ||
        ebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (ebook.subtitle && ebook.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        ebook.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ebook.authorAffiliation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ebook.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ebook.executiveSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ebook.canonicalTextsAnalyzed.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        ebook.keyScholarlyTheses.some(th => th.toLowerCase().includes(searchQuery.toLowerCase())) ||
        ebook.tableOfContents.some(ch => 
          ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ch.keyKeywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))
        );

      const matchesCategory = selectedCategory === "ALL" || ebook.category === selectedCategory;
      const matchesCountry = selectedCountry === "ALL" || ebook.authorCountry.includes(selectedCountry);

      return matchesSearch && matchesCategory && matchesCountry;
    });
  }, [searchQuery, selectedCategory, selectedCountry]);

  // Handle Speech Synthesis
  const handleToggleSpeech = (textToRead: string) => {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported by your current browser.");
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = audioSpeed;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const copyCitation = (ebook: InternationalEbook) => {
    const citation = `${ebook.author} (${ebook.publicationYear}). ${ebook.title}: ${ebook.subtitle || ""}. ${ebook.publisher}. ${ebook.doiOrIsbn || ""}`;
    navigator.clipboard.writeText(citation);
    setCopiedEbookId(ebook.id);
    setTimeout(() => setCopiedEbookId(null), 2500);
  };

  const copyBibtex = (ebook: InternationalEbook) => {
    navigator.clipboard.writeText(ebook.bibtexCitation);
    setCopiedBibtexId(ebook.id);
    setTimeout(() => setCopiedBibtexId(null), 2500);
  };

  const getCategoryIcon = (category: InternationalEbookCategory) => {
    switch (category) {
      case "Vedic Ritual & Physics":
        return <Flame className="w-4 h-4 text-amber-400" />;
      case "Archaeo-Astronomy & Chronology":
        return <Orbit className="w-4 h-4 text-cyan-400" />;
      case "Mathematics & Geometry":
        return <Atom className="w-4 h-4 text-emerald-400" />;
      case "Linguistics & Paninian NLP":
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case "Medicine & Ayurveda":
        return <Sparkles className="w-4 h-4 text-rose-400" />;
      case "Temple Architecture & Sacred Arts":
        return <Building2 className="w-4 h-4 text-amber-300" />;
      case "Metallurgy & Ancient Technology":
        return <Layers className="w-4 h-4 text-orange-400" />;
      case "Philosophy & Epistemology":
      case "Indology & Textual Criticism":
      default:
        return <Scroll className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#100c09] text-stone-100 font-sans pb-28">
      {/* Header Banner */}
      <div className="relative border-b border-[#35251a] bg-gradient-to-b from-[#1c130d] via-[#140e0a] to-[#100c09] px-4 md:px-8 py-10 shadow-2xl">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-3.5 rounded-2xl bg-amber-950/90 border border-amber-500/60 text-amber-300 shadow-2xl shadow-amber-950/60 ring-1 ring-amber-500/30">
                <Library className="w-8 h-8" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-950/70 border border-amber-800">
                    International Indology & Vedic Science Library
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/60">
                    Open Access & Peer-Reviewed Monographs
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold font-serif text-[#fcf5e6] mt-1 tracking-tight">
                  E-Books of Global Researchers on Vedic Tradition & Indology
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 bg-stone-950 px-3.5 py-2 rounded-xl border border-stone-800">
              <Globe className="w-4 h-4 text-amber-500" />
              <span>UC Berkeley • Princeton • Oxford • Brown • Collège de France • Harvard</span>
            </div>
          </div>

          <p className="text-sm md:text-base text-stone-300 max-w-4xl font-sans leading-relaxed">
            Exhaustive digital library of monumental monographs, peer-reviewed treaties, and archaeo-scientific research volumes authored by leading international scholars on the Vedic fire altars, Sulba geometry, archaeo-astronomy, Paninian formal syntax, Ayurveda, and material pyrotechnology.
          </p>

          {/* Navigation Bar */}
          <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-stone-800/80">
            <button
              onClick={() => setActiveTab("library")}
              className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                activeTab === "library"
                  ? "bg-amber-900 text-amber-100 border-amber-500 shadow-xl shadow-amber-950/60"
                  : "bg-stone-900/80 text-stone-400 hover:text-stone-200 border-stone-800"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>1. E-Book Library & Search Explorer ({INTERNATIONAL_RESEARCH_EBOOKS.length} Volumes)</span>
            </button>

            <button
              onClick={() => setActiveTab("reader")}
              className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                activeTab === "reader"
                  ? "bg-amber-900 text-amber-100 border-amber-500 shadow-xl shadow-amber-950/60"
                  : "bg-stone-900/80 text-stone-400 hover:text-stone-200 border-stone-800"
              }`}
            >
              <BookMarked className="w-4 h-4" />
              <span>2. Interactive Monograph Dossier & Reader ({selectedEbook.title.slice(0, 24)}...)</span>
            </button>

            <button
              onClick={() => setActiveTab("theses_matrix")}
              className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                activeTab === "theses_matrix"
                  ? "bg-amber-900 text-amber-100 border-amber-500 shadow-xl shadow-amber-950/60"
                  : "bg-stone-900/80 text-stone-400 hover:text-stone-200 border-stone-800"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>3. Cross-Disciplinary Scientific Theses Matrix</span>
            </button>

            <button
              onClick={() => setActiveTab("citations")}
              className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                activeTab === "citations"
                  ? "bg-amber-900 text-amber-100 border-amber-500 shadow-xl shadow-amber-950/60"
                  : "bg-stone-900/80 text-stone-400 hover:text-stone-200 border-stone-800"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>4. Academic Citations & BibTeX Generator</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        
        {/* =========================================================================
            TAB 1: E-BOOK LIBRARY & MULTI-DIMENSIONAL EXPLORER
           ========================================================================= */}
        {activeTab === "library" && (
          <div className="space-y-6">
            {/* Search & Filter Toolbar */}
            <div className="bg-[#17110d] border border-[#382618] rounded-2xl p-5 space-y-4 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-3">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search international ebooks, authors (Staal, Kak, Plofker, Thibaut), Sanskrit treatises, or theses..."
                    className="w-full bg-[#110d0a] text-stone-100 pl-10 pr-4 py-2.5 rounded-xl border border-stone-800 text-xs focus:outline-none focus:border-amber-500 placeholder:text-stone-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-2.5 text-xs text-stone-500 hover:text-stone-300 cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-[#110d0a] text-stone-200 px-3.5 py-2.5 rounded-xl border border-stone-800 text-xs focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  <option value="ALL">All Disciplines & Research Fields</option>
                  {INTERNATIONAL_EBOOK_CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                {/* Country Filter */}
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="bg-[#110d0a] text-stone-200 px-3.5 py-2.5 rounded-xl border border-stone-800 text-xs focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  <option value="ALL">All Scholar Countries</option>
                  {uniqueCountries.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Status & Results Counter */}
              <div className="flex flex-wrap items-center justify-between text-xs font-mono text-stone-400 pt-2 border-t border-stone-800/80 gap-2">
                <span>
                  Displaying <strong className="text-amber-400">{filteredEbooks.length}</strong> monumental research monographs matching parameters
                </span>
                {(searchQuery || selectedCategory !== "ALL" || selectedCountry !== "ALL") && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("ALL");
                      setSelectedCountry("ALL");
                    }}
                    className="text-amber-400 hover:underline cursor-pointer font-sans"
                  >
                    Reset All Filters
                  </button>
                )}
              </div>
            </div>

            {/* E-Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredEbooks.map((ebook) => {
                const isSelected = selectedEbookId === ebook.id;
                return (
                  <div
                    key={ebook.id}
                    className={`bg-[#15100c] rounded-2xl border transition-all duration-200 p-5 flex flex-col justify-between relative overflow-hidden group shadow-lg ${
                      isSelected
                        ? "border-amber-500/90 shadow-amber-950/40 ring-1 ring-amber-500/30"
                        : "border-stone-800 hover:border-amber-700/60 hover:bg-[#1b140f]"
                    }`}
                  >
                    {/* Top Badges */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800/70">
                          {getCategoryIcon(ebook.category)}
                          <span>{ebook.category}</span>
                        </span>
                        <span className="text-[10px] font-mono text-stone-400">
                          {ebook.publicationYear}
                        </span>
                      </div>

                      <div className="text-[11px] font-mono text-amber-400 font-bold mb-1 flex items-center gap-1.5">
                        <span>{ebook.author}</span>
                        <span className="text-stone-500">•</span>
                        <span className="text-stone-400 text-[10px]">{ebook.authorCountry}</span>
                      </div>

                      <h3 className="text-lg font-serif font-bold text-stone-100 group-hover:text-amber-200 transition-colors leading-snug">
                        {ebook.title}
                      </h3>

                      {ebook.subtitle && (
                        <p className="text-xs text-stone-400 font-serif italic mt-0.5 line-clamp-1">
                          {ebook.subtitle}
                        </p>
                      )}

                      <p className="text-xs text-stone-300 font-sans mt-3 line-clamp-3 leading-relaxed">
                        {ebook.executiveSummary}
                      </p>

                      {/* Primary Canonical Sanskrit Texts Analyzed */}
                      <div className="mt-3.5 pt-3 border-t border-stone-800/80 space-y-1.5">
                        <div className="text-[10px] font-mono uppercase text-stone-400 font-bold">
                          Canonical Treatises Analyzed:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {ebook.canonicalTextsAnalyzed.slice(0, 3).map((t, idx) => (
                            <span 
                              key={idx}
                              className="text-[10px] font-serif text-amber-300 bg-[#22160e] px-2 py-0.5 rounded border border-amber-900/60 truncate max-w-full"
                            >
                              {t}
                            </span>
                          ))}
                          {ebook.canonicalTextsAnalyzed.length > 3 && (
                            <span className="text-[10px] font-mono text-stone-500 self-center">
                              +{ebook.canonicalTextsAnalyzed.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="mt-5 pt-3 border-t border-stone-800 flex items-center justify-between gap-2">
                      <div className="text-[11px] font-mono text-stone-400">
                        {ebook.pageCount} Pages • {ebook.tableOfContents.length} Chapters
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedEbookId(ebook.id);
                            setActiveTab("reader");
                          }}
                          className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-serif font-bold text-xs flex items-center gap-1.5 shadow transition-all cursor-pointer"
                        >
                          <BookMarked className="w-3.5 h-3.5" />
                          <span>Open Dossier</span>
                        </button>

                        <a
                          href={ebook.archiveOrOpenAccessUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="Open Digital Archive / Publisher E-Book"
                          className="p-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-800 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredEbooks.length === 0 && (
              <div className="text-center py-16 bg-[#16100c] rounded-3xl border border-stone-800 space-y-3">
                <BookOpen className="w-10 h-10 text-stone-600 mx-auto" />
                <h4 className="text-lg font-serif font-bold text-stone-300">No matching international monographs found</h4>
                <p className="text-xs text-stone-500 max-w-md mx-auto">
                  Try adjusting your search terms or clearing the country and academic domain filters.
                </p>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 2: INTERACTIVE MONOGRAPH DOSSIER & READER
           ========================================================================= */}
        {activeTab === "reader" && (
          <div className="space-y-8">
            {/* Header / Meta Profile Card */}
            <div className="bg-[#17110d] border border-[#3b2719] rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
              
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6 border-b border-stone-800 pb-6">
                <div className="space-y-2.5 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-800">
                      {getCategoryIcon(selectedEbook.category)}
                      <span>{selectedEbook.category}</span>
                    </span>
                    <span className="text-xs font-mono text-stone-400 bg-stone-900 px-2.5 py-1 rounded border border-stone-800">
                      {selectedEbook.coverBadge}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      {selectedEbook.publicationYear} • {selectedEbook.pageCount} Pages
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-[#fcf5e7]">
                    {selectedEbook.title}
                  </h2>

                  {selectedEbook.subtitle && (
                    <p className="text-sm md:text-base text-amber-400 font-serif italic">
                      {selectedEbook.subtitle}
                    </p>
                  )}

                  <div className="text-xs font-mono text-stone-300 pt-1 space-y-1">
                    <div><strong className="text-amber-400">Author:</strong> {selectedEbook.author} ({selectedEbook.authorAffiliation}, {selectedEbook.authorCountry})</div>
                    <div><strong className="text-amber-400">Publisher:</strong> {selectedEbook.publisher}</div>
                    {selectedEbook.doiOrIsbn && <div><strong className="text-amber-400">Identifier:</strong> {selectedEbook.doiOrIsbn}</div>}
                  </div>
                </div>

                {/* Right Quick Actions */}
                <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">
                  <a
                    href={selectedEbook.archiveOrOpenAccessUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold font-serif text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-950/60 transition-all"
                  >
                    <span>Read Full E-Book on Archive.org</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => copyCitation(selectedEbook)}
                    className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-200 border border-amber-900/60 font-serif text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    {copiedEbookId === selectedEbook.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                    <span>{copiedEbookId === selectedEbook.id ? "Citation Copied!" : "Copy Formatted Citation"}</span>
                  </button>

                  <button
                    onClick={() => copyBibtex(selectedEbook)}
                    className="px-4 py-2 rounded-xl bg-stone-950 hover:bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800 font-mono text-[11px] flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    {copiedBibtexId === selectedEbook.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <FileText className="w-3.5 h-3.5" />}
                    <span>Copy BibTeX Code</span>
                  </button>
                </div>
              </div>

              {/* Executive Summary & Methodology */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#120e0b] p-5 rounded-2xl border border-stone-800/80 space-y-2.5">
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-serif font-bold">
                    <BookOpen className="w-4 h-4" />
                    <span>Executive Abstract</span>
                  </div>
                  <p className="text-xs md:text-sm text-stone-300 font-sans leading-relaxed">
                    {selectedEbook.executiveSummary}
                  </p>
                </div>

                <div className="bg-[#120e0b] p-5 rounded-2xl border border-stone-800/80 space-y-2.5">
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-serif font-bold">
                    <Atom className="w-4 h-4" />
                    <span>Scientific & Empirical Methodology</span>
                  </div>
                  <p className="text-xs md:text-sm text-stone-300 font-sans leading-relaxed">
                    {selectedEbook.scientificOrEmpiricalMethodology}
                  </p>
                </div>
              </div>

              {/* Core Scholarly Theses */}
              <div className="space-y-3">
                <h3 className="text-base font-serif font-bold text-stone-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Key Scholarly Theses & Empirical Discoveries</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedEbook.keyScholarlyTheses.map((thesis, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#120d0a] border border-amber-900/40 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-amber-950 text-amber-300 border border-amber-700/80 text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs text-stone-200 font-sans leading-relaxed">
                        {thesis}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Audio Synthesizer Bar */}
              <div className="p-4 rounded-2xl bg-[#130f0c] border border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleToggleSpeech(`${selectedEbook.title}. By ${selectedEbook.author}. ${selectedEbook.executiveSummary}`)}
                    className={`p-3 rounded-xl flex items-center gap-2 text-xs font-serif font-bold transition-all cursor-pointer ${
                      isPlayingAudio
                        ? "bg-red-950 text-red-300 border border-red-800"
                        : "bg-amber-600 hover:bg-amber-500 text-stone-950 shadow"
                    }`}
                  >
                    {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    <span>{isPlayingAudio ? "Stop Audio Playback" : "Listen to Monograph Summary"}</span>
                  </button>

                  <div className="flex items-center gap-1 text-xs font-mono text-stone-400">
                    <span>Speed:</span>
                    {[0.8, 1.0, 1.2].map(spd => (
                      <button
                        key={spd}
                        onClick={() => setAudioSpeed(spd)}
                        className={`px-2 py-0.5 rounded text-[11px] cursor-pointer ${audioSpeed === spd ? "bg-amber-950 text-amber-300 font-bold" : "text-stone-500 hover:text-stone-300"}`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>
                </div>

                {onNavigateToScripture && selectedEbook.canonicalTextsAnalyzed.length > 0 && (
                  <button
                    onClick={() => onNavigateToScripture(selectedEbook.canonicalTextsAnalyzed[0])}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-900/60 text-xs font-serif font-bold cursor-pointer transition-all"
                  >
                    <Scroll className="w-3.5 h-3.5 text-amber-400" />
                    <span>Open Analyzed Treatises in Scripture Pothi Scrolls</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Table of Contents & Chapter Breakdown */}
              <div className="space-y-4 pt-4 border-t border-stone-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif font-bold text-stone-100 flex items-center gap-2">
                    <BookMarked className="w-5 h-5 text-amber-400" />
                    <span>Table of Contents & Chapter Excerpts</span>
                  </h3>
                  <span className="text-xs font-mono text-stone-400">
                    {selectedEbook.tableOfContents.length} Chapters Documented
                  </span>
                </div>

                <div className="space-y-3">
                  {selectedEbook.tableOfContents.map((ch, cIdx) => (
                    <div 
                      key={cIdx}
                      className="p-4 rounded-xl bg-[#130f0c] border border-stone-800 hover:border-amber-700/60 transition-all space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                            Chapter {ch.chapterNumber}
                          </span>
                          <h4 className="text-sm md:text-base font-serif font-bold text-stone-100">
                            {ch.title}
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-stone-500">
                          Pages {ch.pages}
                        </span>
                      </div>

                      <p className="text-xs text-stone-300 font-sans leading-relaxed">
                        {ch.summary}
                      </p>

                      {ch.sampleExcerpt && (
                        <div className="p-3 rounded-lg bg-[#1a130e] border-l-2 border-amber-500 text-xs font-serif italic text-amber-200/90 mt-2">
                          "{ch.sampleExcerpt}"
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {ch.keyKeywords.map((kw, kIdx) => (
                          <span key={kIdx} className="text-[10px] font-mono text-stone-400 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                            #{kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notable Excerpts & Scholarly Commentary */}
              {selectedEbook.notableExcerpts.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-stone-800">
                  <h3 className="text-lg font-serif font-bold text-stone-100 flex items-center gap-2">
                    <Quote className="w-5 h-5 text-amber-400" />
                    <span>Notable Excerpts & Commentary</span>
                  </h3>
                  <div className="space-y-4">
                    {selectedEbook.notableExcerpts.map((excerpt, eIdx) => (
                      <div key={eIdx} className="p-5 rounded-2xl bg-[#140f0c] border border-stone-800 space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                          <span className="font-bold">{excerpt.title}</span>
                          <span className="text-stone-500">{excerpt.citation}</span>
                        </div>
                        <blockquote className="text-xs md:text-sm font-serif italic text-stone-200 border-l-2 border-amber-500 pl-4 py-1 leading-relaxed">
                          "{excerpt.text}"
                        </blockquote>
                        <div className="text-xs text-stone-400 font-sans pt-1 border-t border-stone-850">
                          <strong className="text-amber-400">Scholarly Significance:</strong> {excerpt.scholarlyCommentary}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Peer Reviews & Critical Praise */}
              {selectedEbook.peerReviewsAndPraise.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-stone-800">
                  <h3 className="text-base font-serif font-bold text-stone-200 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>International Peer Reviews & Critical Reception</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedEbook.peerReviewsAndPraise.map((rev, rIdx) => (
                      <div key={rIdx} className="p-4 rounded-xl bg-[#130f0c] border border-stone-800 text-xs font-serif italic text-stone-300">
                        "{rev}"
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: CROSS-DISCIPLINARY THESES MATRIX
           ========================================================================= */}
        {activeTab === "theses_matrix" && (
          <div className="space-y-6">
            <div className="bg-[#17110d] border border-[#382618] rounded-2xl p-6 space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-amber-400 px-2.5 py-0.5 rounded bg-amber-950 border border-amber-800">
                Comparative Indology & Indic Science Synthesizer
              </span>
              <h2 className="text-2xl font-serif font-extrabold text-[#fcf5e7]">
                Cross-Disciplinary Scientific Discoveries
              </h2>
              <p className="text-xs text-stone-300 font-sans max-w-3xl">
                Synthesized comparative view of major empirical theorems, archaeological revisions, and scientific methodologies established by international researchers over the past 150 years.
              </p>
            </div>

            {/* Matrix Table */}
            <div className="overflow-x-auto rounded-2xl border border-stone-800 bg-[#140f0c] shadow-2xl">
              <table className="w-full text-left text-xs text-stone-300 border-collapse">
                <thead className="bg-[#1d140e] text-amber-400 font-serif font-bold border-b border-stone-800">
                  <tr>
                    <th className="p-4 min-w-[200px]">Researcher & Monograph</th>
                    <th className="p-4 min-w-[160px]">Domain & Academic Base</th>
                    <th className="p-4 min-w-[280px]">Core Empirical Thesis</th>
                    <th className="p-4 min-w-[200px]">Canonical Treatises</th>
                    <th className="p-4 min-w-[140px]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800 font-sans">
                  {INTERNATIONAL_RESEARCH_EBOOKS.map((ebook) => (
                    <tr key={ebook.id} className="hover:bg-[#1a130f] transition-colors">
                      <td className="p-4 align-top">
                        <div className="font-serif font-bold text-stone-100 text-sm">{ebook.title}</div>
                        <div className="text-xs text-amber-400 font-mono mt-0.5">{ebook.author} ({ebook.publicationYear})</div>
                      </td>
                      <td className="p-4 align-top">
                        <div className="text-xs font-mono text-stone-300">{ebook.category}</div>
                        <div className="text-[11px] text-stone-500 font-sans mt-0.5">{ebook.authorAffiliation}</div>
                      </td>
                      <td className="p-4 align-top leading-relaxed text-stone-300">
                        {ebook.keyScholarlyTheses[0]}
                      </td>
                      <td className="p-4 align-top">
                        <div className="flex flex-wrap gap-1">
                          {ebook.canonicalTextsAnalyzed.slice(0, 2).map((t, idx) => (
                            <span key={idx} className="text-[10px] font-serif text-amber-200 bg-[#22160e] px-2 py-0.5 rounded border border-amber-900/60 truncate max-w-full">
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 align-top">
                        <button
                          onClick={() => {
                            setSelectedEbookId(ebook.id);
                            setActiveTab("reader");
                          }}
                          className="px-3 py-1.5 rounded-lg bg-amber-900/80 hover:bg-amber-800 text-amber-200 text-xs font-serif font-bold flex items-center gap-1 cursor-pointer transition-all"
                        >
                          <span>View Dossier</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: ACADEMIC CITATIONS & BIBTEX GENERATOR
           ========================================================================= */}
        {activeTab === "citations" && (
          <div className="space-y-6">
            <div className="bg-[#17110d] border border-[#382618] rounded-2xl p-6 space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-amber-400 px-2.5 py-0.5 rounded bg-amber-950 border border-amber-800">
                Academic Reference Engine
              </span>
              <h2 className="text-2xl font-serif font-extrabold text-[#fcf5e7]">
                Bibliographic Index & BibTeX Code
              </h2>
              <p className="text-xs text-stone-300 font-sans max-w-3xl">
                Directly copy formatted APA/Chicago academic citations and BibTeX blocks for research papers, dissertations, and university lecture syllabi.
              </p>
            </div>

            <div className="space-y-4">
              {INTERNATIONAL_RESEARCH_EBOOKS.map((ebook) => (
                <div key={ebook.id} className="p-5 rounded-2xl bg-[#140f0c] border border-stone-800 space-y-3">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <div>
                      <h4 className="text-base font-serif font-bold text-stone-100">
                        {ebook.title}
                      </h4>
                      <p className="text-xs text-amber-400 font-mono">
                        {ebook.author} ({ebook.publicationYear}) • {ebook.publisher}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => copyCitation(ebook)}
                        className="px-3 py-1.5 rounded-xl bg-amber-900/80 hover:bg-amber-800 text-amber-200 text-xs font-serif font-bold flex items-center gap-1.5 cursor-pointer"
                      >
                        {copiedEbookId === ebook.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedEbookId === ebook.id ? "Copied Citation" : "Copy Citation"}</span>
                      </button>

                      <button
                        onClick={() => copyBibtex(ebook)}
                        className="px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-mono flex items-center gap-1.5 cursor-pointer border border-stone-800"
                      >
                        {copiedBibtexId === ebook.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <FileText className="w-3.5 h-3.5" />}
                        <span>{copiedBibtexId === ebook.id ? "Copied BibTeX" : "Copy BibTeX"}</span>
                      </button>
                    </div>
                  </div>

                  {/* BibTeX Code Box */}
                  <pre className="p-3.5 rounded-xl bg-[#0e0a08] border border-stone-900 font-mono text-[11px] text-amber-300/90 overflow-x-auto">
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
