import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Sparkles,
  Search,
  Filter,
  Layers,
  FileText,
  Compass,
  Atom,
  Orbit,
  Radio,
  RefreshCw,
  Download,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Cpu,
  Flame,
  Globe,
  Share2,
  Calendar,
  MapPin,
  Tag,
  ShieldCheck,
  Send,
  Zap,
  Info,
  Book,
  Printer
} from "lucide-react";
import { HERITAGE_INDIA_MAGAZINE_CORPUS, HeritageMagazineIssue, HeritageMagazineArticle } from "../data/heritageIndiaMagazineCorpus";
import HeritageMagazinePDFReader from "./HeritageMagazinePDFReader";
import { NavTab } from "./Navbar";

interface HeritageMagazineExtractorProps {
  onNavigateToLab?: (tab: NavTab, prefill?: string) => void;
}

const THEME_CATEGORIES = [
  "All Themes",
  "Archaeological Excavations & Stratigraphy",
  "Epigraphy & Ancient Scripts",
  "Temple Architecture & Archaeo-Acoustics",
  "Maritime Trade & Port Metallurgy",
  "Archaeo-Astronomy & Sacred Geography",
  "Living Traditions & Sacred Sciences"
];

const PRESET_QUERIES = [
  "Lothal Tidal Dockyard & Harappan Lapidary Beads",
  "Ajanta Cave 1 Frescoes: Lapis Lazuli Pigments & Mineral Spectroscopy",
  "Chola Lost-Wax Bronze Nataraja Metallurgy (Cu-Sn-Zn-Pb)",
  "Pattadakal Virupaksha Temple: Rekha-Nagara & Dravida Synthesis",
  "Sittanavasal Jain Cave Paintings & Archaeo-Acoustic Resonance",
  "Mahabalipuram Shore Temple Marine Salinity & Granite Conservation"
];

export default function HeritageMagazineExtractor({ onNavigateToLab }: HeritageMagazineExtractorProps) {
  // Corpus State
  const [corpus, setCorpus] = useState<HeritageMagazineIssue[]>(HERITAGE_INDIA_MAGAZINE_CORPUS);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Themes");
  const [searchQuery, setSearchQuery] = useState("");
  
  // View mode: PDF Reader or Scholarly Dossier
  const [activeViewMode, setActiveViewMode] = useState<"pdf_reader" | "dossier">("pdf_reader");
  
  // Selected Issue for PDF Reader
  const [selectedPDFIssue, setSelectedPDFIssue] = useState<HeritageMagazineIssue>(HERITAGE_INDIA_MAGAZINE_CORPUS[0]);

  // Selected Article Modal / Detail View
  const [activeArticle, setActiveArticle] = useState<HeritageMagazineArticle | null>(
    HERITAGE_INDIA_MAGAZINE_CORPUS[0].articles[0]
  );
  const [selectedAgentDispatch, setSelectedAgentDispatch] = useState<
    "drSenFieldLead" | "acharyaVarahaAstro" | "profEpigraphicus" | "shilpaVidwanArt" | "drShastriVedas" | "erMayaSensors"
  >("drSenFieldLead");

  // Agentic AI Extraction Engine State
  const [customTopic, setCustomTopic] = useState("");
  const [customVolume, setCustomVolume] = useState("");
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractionProgress, setExtractionProgress] = useState<{
    step: number;
    message: string;
    agent: string;
  } | null>(null);

  // Filtered Issues
  const filteredIssues = corpus.filter(issue => {
    const matchesCat = selectedCategory === "All Themes" || issue.themeCategory === selectedCategory;
    const matchesSearch = searchQuery === "" ||
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.editorialSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.articles.some(a => 
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.siteOrTopic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    return matchesCat && matchesSearch;
  });

  // Autonomous Extraction Execution
  const handleExtractWithAgents = async (topicToExtract: string, volumeSpec?: string) => {
    if (!topicToExtract.trim()) return;
    setIsExtracting(true);

    const steps = [
      { step: 1, message: "Dr. Arundhati Sen querying stratigraphic excavation logs & radiocarbon strata...", agent: "Dr. Arundhati Sen (Stratigrapher)" },
      { step: 2, message: "Acharya Varahamihira calculating equinox retro-precession and celestial ephemeris...", agent: "Acharya Varahamihira (Archaeo-Astronomy)" },
      { step: 3, message: "Prof. M. Epigraphicus parsing Brahmi/Indus inscriptional paleography...", agent: "Prof. M. Epigraphicus (Epigraphist)" },
      { step: 4, message: "Shilpa Ratna Vidwan analyzing 120-Angula Talamana temple architecture...", agent: "Shilpa Ratna Vidwan (Iconographer)" },
      { step: 5, message: "Dr. Kedar Shastri verifying Vedic Shrutis and Classical Sangam/Purana texts...", agent: "Dr. Kedar Shastri (Scriptural Philologist)" },
      { step: 6, message: "Er. Maya Swaminathan compiling GPR, LiDAR 3D, and pXRF sensor telemetry...", agent: "Er. Maya Swaminathan (Archaeometrist)" }
    ];

    // Trigger step progression for immersive UX
    for (let i = 0; i < steps.length; i++) {
      setExtractionProgress(steps[i]);
      await new Promise(r => setTimeout(r, 600));
    }

    try {
      const res = await fetch("/api/heritage-magazine/extract-agentic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topicOrIssue: topicToExtract,
          volume: volumeSpec || "Special Research Issue",
          historicalPeriod: "All Eras"
        })
      });

      const newIssue: HeritageMagazineIssue = await res.json();
      
      if (newIssue && newIssue.id) {
        setCorpus(prev => [newIssue, ...prev]);
        setSelectedPDFIssue(newIssue);
        if (newIssue.articles && newIssue.articles.length > 0) {
          setActiveArticle(newIssue.articles[0]);
        }
      }
    } catch (err) {
      console.error("Agent extraction error:", err);
    } finally {
      setIsExtracting(false);
      setExtractionProgress(null);
      setCustomTopic("");
    }
  };

  // Export Full Extracted Corpus
  const handleExportCorpus = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(corpus, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Heritage_India_Magazine_Extracted_Corpus_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Header & Agentic Mission Controller */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1d1611] via-[#261c14] to-[#140e0a] rounded-3xl border-2 border-amber-800/40 p-6 md:p-8 shadow-2xl text-stone-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-red-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/90 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>AGENTIC ARCHAEOLOGICAL REPOSITORY • HERITAGE INDIA MAGAZINE</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-black text-[#fdf4e3] tracking-tight">
              Heritage India Magazine AI Extraction & PDF Reader
            </h2>

            <p className="text-sm text-stone-300 font-sans leading-relaxed">
              Read all published volumes of <strong>Heritage India Magazine</strong> in an authentic multi-page PDF journal viewer with dual-page book spreads, epigraphical plates, sensor charts, and autonomous 6-scholar agent extraction.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full lg:w-auto">
            <button
              onClick={handleExportCorpus}
              className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-amber-500 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer text-stone-200"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Export Corpus (JSON)</span>
            </button>

            <button
              onClick={() => handleExtractWithAgents("Complete Heritage India Magazine Archive Monograph Compilation", "Volume Cumulative Special")}
              disabled={isExtracting}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-700 to-orange-800 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-950/50 cursor-pointer disabled:opacity-50"
            >
              {isExtracting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4 text-amber-300" />}
              <span>Extract All Volumes with 6 AI Agents</span>
            </button>
          </div>
        </div>

        {/* Live Multi-Agent Swarm Status Ticker during extraction */}
        {isExtracting && extractionProgress && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-2xl bg-black/60 border border-amber-500/50 backdrop-blur-md space-y-2"
          >
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-amber-300 font-bold flex items-center gap-2">
                <Radio className="w-4 h-4 text-red-400 animate-pulse" />
                Active Agent: {extractionProgress.agent}
              </span>
              <span className="text-stone-400 font-bold">Phase {extractionProgress.step}/6</span>
            </div>

            <div className="w-full bg-stone-900 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-full transition-all duration-300"
                style={{ width: `${(extractionProgress.step / 6) * 100}%` }}
              />
            </div>

            <p className="text-xs text-stone-300 font-sans italic">{extractionProgress.message}</p>
          </motion.div>
        )}

        {/* Custom Magazine Topic Extraction Input Bar */}
        <div className="mt-6 pt-5 border-t border-amber-900/30 flex flex-col md:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleExtractWithAgents(customTopic, customVolume)}
              placeholder="Enter any Heritage India Magazine issue, site, or article (e.g., 'Ajanta Frescoes', 'Lothal Tidal Dockyard')..."
              className="w-full bg-black/50 border border-stone-800 rounded-xl pl-4 pr-3 py-2.5 text-xs text-stone-200 font-sans outline-none focus:border-amber-500"
            />
          </div>

          <input
            type="text"
            value={customVolume}
            onChange={(e) => setCustomVolume(e.target.value)}
            placeholder="Volume / Issue (optional)..."
            className="w-full md:w-48 bg-black/50 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-stone-200 font-mono outline-none focus:border-amber-500"
          />

          <button
            onClick={() => handleExtractWithAgents(customTopic, customVolume)}
            disabled={isExtracting || !customTopic.trim()}
            className="w-full md:w-auto px-5 py-2.5 bg-amber-800 hover:bg-amber-700 text-white rounded-xl text-xs font-mono font-bold uppercase flex items-center justify-center gap-2 shadow cursor-pointer disabled:opacity-40"
          >
            {isExtracting ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
            <span>Deploy 6-Agent Extraction</span>
          </button>
        </div>

        {/* Preset Topic Chips */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          <span className="text-[11px] font-mono text-amber-400 font-bold shrink-0">Quick Issues:</span>
          {PRESET_QUERIES.map(q => (
            <button
              key={q}
              onClick={() => handleExtractWithAgents(q)}
              className="px-2.5 py-1 bg-stone-900 hover:bg-amber-950 border border-stone-800 hover:border-amber-600 rounded-lg text-[11px] font-sans text-stone-300 hover:text-amber-200 whitespace-nowrap transition-all cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Top Format Switcher & Theme Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-[#181410] p-4 rounded-2xl border border-stone-800 shadow-md">
        
        {/* Main Format View Switcher */}
        <div className="flex items-center bg-black/60 p-1 rounded-xl border border-stone-700">
          <button
            onClick={() => setActiveViewMode("pdf_reader")}
            className={`px-4 py-2 rounded-lg text-xs font-serif font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeViewMode === "pdf_reader"
                ? "bg-gradient-to-r from-amber-700 to-orange-800 text-white shadow-md"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>📖 Authentic Magazine PDF Reader</span>
            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-950 text-amber-200 border border-amber-800">
              PDF
            </span>
          </button>

          <button
            onClick={() => setActiveViewMode("dossier")}
            className={`px-4 py-2 rounded-lg text-xs font-serif font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeViewMode === "dossier"
                ? "bg-gradient-to-r from-amber-700 to-orange-800 text-white shadow-md"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            <FileText className="w-4 h-4 text-amber-300" />
            <span>🔬 Scholarly Dossier & Lab Dispatch</span>
          </button>
        </div>

        {/* Quick Issue Selector for Reader */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-stone-400">Issue:</span>
          <select
            value={selectedPDFIssue.id}
            onChange={(e) => {
              const found = corpus.find(iss => iss.id === e.target.value);
              if (found) {
                setSelectedPDFIssue(found);
                if (found.articles.length > 0) setActiveArticle(found.articles[0]);
              }
            }}
            className="bg-black/70 border border-stone-700 rounded-xl px-3 py-1.5 text-xs text-amber-300 font-serif outline-none focus:border-amber-500"
          >
            {corpus.map(iss => (
              <option key={iss.id} value={iss.id}>
                Vol. {iss.volumeNumber} ({iss.yearPublished}) - {iss.title.substring(0, 45)}...
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 3. CONDITIONAL VIEW: PDF FORMAT READER OR SCHOLARLY DOSSIER */}
      {activeViewMode === "pdf_reader" ? (
        <HeritageMagazinePDFReader
          issue={selectedPDFIssue}
          allIssues={corpus}
          onSelectIssue={(iss) => {
            setSelectedPDFIssue(iss);
            if (iss.articles.length > 0) setActiveArticle(iss.articles[0]);
          }}
          onNavigateToLab={onNavigateToLab}
        />
      ) : (
        /* DOSSIER & MULTI-AGENT VIEW */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Magazine Issues List (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Extracted Volumes ({filteredIssues.length})</span>
              </h3>
              <span className="text-[10px] font-mono text-stone-500">Autonomous Dossiers</span>
            </div>

            <div className="space-y-4 max-h-[85vh] overflow-y-auto pr-1">
              {filteredIssues.map((issue) => (
                <div
                  key={issue.id}
                  className="bg-[#1b1612] rounded-2xl border border-stone-800 hover:border-amber-700/60 p-4 transition-all space-y-3 shadow-lg"
                >
                  {/* Issue Header */}
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                        Vol {issue.volumeNumber}, No {issue.issueNumber} • {issue.quarter} {issue.yearPublished}
                      </span>
                      <h4 className="text-sm font-serif font-bold text-[#fdf4e3] mt-1.5 line-clamp-2">
                        {issue.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-stone-400 font-sans line-clamp-2 leading-relaxed">
                    {issue.editorialSummary}
                  </p>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => {
                        setSelectedPDFIssue(issue);
                        setActiveViewMode("pdf_reader");
                      }}
                      className="px-3 py-1.5 bg-amber-900/60 hover:bg-amber-800 border border-amber-600/60 rounded-xl text-[11px] font-serif font-bold text-amber-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3 h-3 text-amber-300" />
                      <span>Read in PDF Format</span>
                    </button>
                  </div>

                  {/* Articles inside this issue */}
                  <div className="space-y-1.5 pt-2 border-t border-stone-800/80">
                    <span className="text-[10px] font-mono text-stone-500 uppercase font-bold block">
                      Extracted Monographs ({issue.articles.length}):
                    </span>
                    {issue.articles.map(art => {
                      const isSelected = activeArticle?.id === art.id;
                      return (
                        <button
                          key={art.id}
                          onClick={() => {
                            setActiveArticle(art);
                            setSelectedPDFIssue(issue);
                          }}
                          className={`w-full text-left p-2 rounded-xl transition-all flex items-center justify-between gap-2 cursor-pointer border ${
                            isSelected
                              ? "bg-amber-950/80 border-amber-500 text-amber-100 shadow"
                              : "bg-stone-950/60 border-stone-900 hover:bg-stone-900 text-stone-300"
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-serif font-bold block truncate">{art.title}</span>
                            <span className="text-[10px] font-mono text-stone-400 block truncate">
                              {art.siteOrTopic} • {art.historicalEpoch}
                            </span>
                          </div>
                          <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-amber-400" : "text-stone-600"}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Full Scholarly Article Dossier & 6-Agent Dispatch (8 Cols) */}
          <div className="lg:col-span-8">
            {activeArticle ? (
              <motion.div
                key={activeArticle.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#1c1611] rounded-3xl border-2 border-amber-900/40 p-6 md:p-8 space-y-6 shadow-2xl text-stone-100"
              >
                {/* Article Header & Metadata */}
                <div className="space-y-3 border-b border-stone-800 pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>{activeArticle.coordinates}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          const parentIssue = corpus.find(iss => iss.articles.some(a => a.id === activeArticle.id)) || selectedPDFIssue;
                          setSelectedPDFIssue(parentIssue);
                          setActiveViewMode("pdf_reader");
                        }}
                        className="px-3 py-1 bg-amber-800 hover:bg-amber-700 text-white rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 shadow cursor-pointer"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>Open in PDF Reader</span>
                      </button>
                      <span className="text-xs font-mono text-stone-400">{activeArticle.historicalEpoch}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-black text-[#fdf4e3] leading-tight">
                    {activeArticle.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-stone-400">
                    <span className="text-stone-300 font-bold font-serif">{activeArticle.author}</span>
                    <span>•</span>
                    <span>Site: <strong className="text-amber-200">{activeArticle.siteOrTopic}</strong></span>
                  </div>
                </div>

                {/* Abstract & Full Content */}
                <div className="space-y-3">
                  <div className="p-4 bg-amber-950/20 rounded-2xl border border-amber-900/30 text-xs font-serif leading-relaxed text-stone-300">
                    <span className="text-[10px] font-mono uppercase font-bold text-amber-400 block mb-1">Executive Abstract:</span>
                    {activeArticle.abstract}
                  </div>

                  <div className="text-xs font-serif leading-relaxed text-stone-300 bg-black/40 p-4 rounded-2xl border border-stone-800/80">
                    <span className="text-[10px] font-mono uppercase font-bold text-stone-400 block mb-1">Extracted Full Content:</span>
                    <p>{activeArticle.extractedFullContent}</p>
                  </div>
                </div>

                {/* Key Field Discoveries Bullet Points */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Key Archaeological & Stratigraphic Discoveries</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeArticle.keyArchaeologicalFindings.map((finding, idx) => (
                      <div key={idx} className="p-3 bg-stone-900/80 rounded-xl border border-stone-800 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-stone-300 font-sans">{finding}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Epigraphy & Scriptural Cross-Examine Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Epigraphy Card */}
                  <div className="p-4 bg-stone-900/80 rounded-2xl border border-stone-800 space-y-2">
                    <span className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-1.5">
                      <FileText className="w-4 h-4" />
                      <span>Deciphered Inscriptions & Epigraphy</span>
                    </span>
                    <div className="text-xs font-serif space-y-1">
                      <div className="text-amber-300 font-mono text-[11px] bg-black/50 p-2 rounded">
                        <strong>Script:</strong> {activeArticle.epigraphicalDecipherment.script}
                      </div>
                      <p className="text-stone-300 text-[11px]">
                        <strong>Text:</strong> {activeArticle.epigraphicalDecipherment.textTransliteration}
                      </p>
                      <p className="text-stone-400 text-[11px] italic">
                        <strong>Translation:</strong> "{activeArticle.epigraphicalDecipherment.translation}"
                      </p>
                    </div>
                  </div>

                  {/* Sensor Archaeometry Card */}
                  <div className="p-4 bg-stone-900/80 rounded-2xl border border-stone-800 space-y-2">
                    <span className="text-xs font-mono uppercase font-bold text-cyan-400 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4" />
                      <span>Sensor Telemetry & Radiocarbon (C-14)</span>
                    </span>
                    <div className="text-xs font-serif space-y-1.5">
                      <div className="flex flex-wrap gap-1">
                        {activeArticle.sensorArchaeometryNotes.methods.map((m, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[9px] font-mono border border-cyan-800">
                            {m}
                          </span>
                        ))}
                      </div>
                      <p className="text-stone-300 text-[11px]">
                        {activeArticle.sensorArchaeometryNotes.instrumentalFindings}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6 AI Agents Peer-Review Round-Table */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Autonomous 6-Scholar Agent Consensus</span>
                    </span>
                    <span className="text-[10px] font-mono text-stone-500">Peer-Reviewed Dispatch</span>
                  </div>

                  {/* Agent Selectors */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                    {[
                      { key: "drSenFieldLead", name: "Dr. Sen", role: "Stratigraphy", icon: "🏛️" },
                      { key: "acharyaVarahaAstro", name: "Varahamihira", role: "Astronomy", icon: "🌌" },
                      { key: "profEpigraphicus", name: "Epigraphicus", role: "Epigraphy", icon: "📜" },
                      { key: "shilpaVidwanArt", name: "Shilpa Vidwan", role: "Architecture", icon: "🗿" },
                      { key: "drShastriVedas", name: "Dr. Shastri", role: "Vedas", icon: "🪷" },
                      { key: "erMayaSensors", name: "Er. Maya", role: "Sensors", icon: "📡" }
                    ].map(agent => (
                      <button
                        key={agent.key}
                        onClick={() => setSelectedAgentDispatch(agent.key as any)}
                        className={`p-2 rounded-xl text-center transition-all cursor-pointer border ${
                          selectedAgentDispatch === agent.key
                            ? "bg-amber-900 border-amber-400 text-white shadow"
                            : "bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200"
                        }`}
                      >
                        <div className="text-base">{agent.icon}</div>
                        <div className="text-[10px] font-mono font-bold truncate mt-0.5">{agent.name}</div>
                        <div className="text-[8px] font-sans text-stone-400">{agent.role}</div>
                      </button>
                    ))}
                  </div>

                  {/* Active Agent Finding Dispatch Card */}
                  <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-1.5">
                    <div className="text-xs font-mono font-bold text-amber-300 flex items-center justify-between">
                      <span>
                        {selectedAgentDispatch === "drSenFieldLead" && "🏛️ Dr. Arundhati Sen (Stratigraphic Field Lead)"}
                        {selectedAgentDispatch === "acharyaVarahaAstro" && "🌌 Acharya Varahamihira (Archaeo-Astronomy & Ephemeris)"}
                        {selectedAgentDispatch === "profEpigraphicus" && "📜 Prof. Mahadevan Epigraphicus (Paleography)"}
                        {selectedAgentDispatch === "shilpaVidwanArt" && "🗿 Shilpa Ratna Vidwan (Temple Architecture & Iconography)"}
                        {selectedAgentDispatch === "drShastriVedas" && "🪷 Dr. Kedar Shastri (Scriptural Philology)"}
                        {selectedAgentDispatch === "erMayaSensors" && "📡 Er. Maya Swaminathan (Sensor Archaeometry)"}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 bg-amber-950 text-amber-300 rounded font-mono border border-amber-800">
                        Verified Agent Dispatch
                      </span>
                    </div>
                    <p className="text-xs font-serif text-stone-200 leading-relaxed">
                      {activeArticle.agenticDispatchSummary[selectedAgentDispatch]}
                    </p>
                  </div>
                </div>

                {/* Cross-Link Action Dispatch to Other Granth Laboratories */}
                <div className="pt-3 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-mono text-stone-400">
                    Cross-examine this article in Granth Laboratories:
                  </span>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => onNavigateToLab?.("carbon_radiation", activeArticle.siteOrTopic)}
                      className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-emerald-500 rounded-xl text-xs font-mono text-stone-300 hover:text-emerald-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Atom className="w-3.5 h-3.5 text-emerald-400" />
                      <span>AMS C-14 Lab</span>
                    </button>

                    <button
                      onClick={() => onNavigateToLab?.("archaeo_astronomy", activeArticle.siteOrTopic)}
                      className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-cyan-500 rounded-xl text-xs font-mono text-stone-300 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Orbit className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Ephemeris</span>
                    </button>

                    <button
                      onClick={() => onNavigateToLab?.("artifact_scanner", activeArticle.title)}
                      className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-amber-500 rounded-xl text-xs font-mono text-stone-300 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      <span>Artifact Scanner</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center p-12 bg-[#1b1612] rounded-3xl border border-stone-800 text-stone-500 text-sm font-serif">
                Select an extracted article from the left to view the complete archaeological dossier.
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
}
