import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Download,
  Printer,
  Search,
  Bookmark,
  FileText,
  Layers,
  Sparkles,
  MapPin,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Atom,
  Cpu,
  Orbit,
  X,
  Plus,
  StickyNote,
  Quote,
  Share2,
  Copy,
  Check,
  RotateCw,
  Columns2,
  Square,
  ScrollText,
  SlidersHorizontal,
  Compass,
  Palette
} from "lucide-react";
import { HeritageMagazineIssue, HeritageMagazineArticle } from "../data/heritageIndiaMagazineCorpus";
import { NavTab } from "./Navbar";

interface HeritageMagazinePDFReaderProps {
  issue: HeritageMagazineIssue;
  allIssues?: HeritageMagazineIssue[];
  onSelectIssue?: (issue: HeritageMagazineIssue) => void;
  onNavigateToLab?: (tab: NavTab, prefill?: string) => void;
  onClose?: () => void;
}

type PaperTheme = "glossy" | "sepia" | "night" | "blueprint";
type ViewMode = "double" | "single" | "continuous";

interface StickyAnnotation {
  id: string;
  pageNumber: number;
  author: string;
  text: string;
  timestamp: string;
}

export default function HeritageMagazinePDFReader({
  issue,
  allIssues = [],
  onSelectIssue,
  onNavigateToLab,
  onClose
}: HeritageMagazinePDFReaderProps) {
  // Viewer Navigation State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [viewMode, setViewMode] = useState<ViewMode>("double");
  const [paperTheme, setPaperTheme] = useState<PaperTheme>("glossy");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [activeSidebarTab, setActiveSidebarTab] = useState<"thumbnails" | "outline" | "search" | "notes" | "cite" | null>(null);

  // Search in PDF
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<{ page: number; snippet: string }[]>([]);

  // Annotations
  const [annotations, setAnnotations] = useState<StickyAnnotation[]>([
    {
      id: "note-1",
      pageNumber: 3,
      author: "Senior Epigraphist",
      text: "Notice the distinct paleographic ligature shifts between Early Hakra and Late Harappan signs.",
      timestamp: "Today, 10:42 AM"
    }
  ]);
  const [newNoteText, setNewNoteText] = useState("");
  const [isAddingNote, setIsAddingNote] = useState(false);

  // Citation Copy State
  const [copiedCitation, setCopiedCitation] = useState(false);

  // Container refs for full-screen and scrolling
  const readerContainerRef = useRef<HTMLDivElement>(null);
  const mainArticle = issue.articles[0] || {
    id: "art-default",
    title: issue.title,
    author: "Heritage India Scholarly Research Team",
    siteOrTopic: issue.title,
    coordinates: "20.5937° N, 78.9629° E",
    historicalEpoch: "Classical Indic Antiquity",
    abstract: issue.editorialSummary,
    extractedFullContent: issue.editorialSummary,
    keyArchaeologicalFindings: ["Stratified structural evidence", "Inscriptional paleography", "Sensor telemetry"],
    epigraphicalDecipherment: {
      script: "Ancient Indic Epigraphy",
      textTransliteration: "Om Svasti Prajabhya...",
      translation: "May well-being and prosperity prevail across all realms.",
      paleographicNotes: "Monumental stone lapidary engraving."
    },
    sensorArchaeometryNotes: {
      methods: ["SAR Satellite Radar", "LiDAR 3D Point Cloud", "AMS C-14"],
      instrumentalFindings: "Confirmed unbroken stratigraphic sequence."
    },
    scripturalParallels: "Rigveda, Agamas, and Sangam Classics.",
    agenticDispatchSummary: {
      drSenFieldLead: "Stratigraphy confirmed.",
      acharyaVarahaAstro: "Equinox alignment validated.",
      profEpigraphicus: "Decipherment verified.",
      shilpaVidwanArt: "Talamana canon adheres to 120-Angula rules.",
      drShastriVedas: "Shruti references corroborated.",
      erMayaSensors: "Sensor profiles validated."
    },
    tags: ["Archaeology", "Epigraphy", "Astronomy"]
  };

  const secondaryArticle = issue.articles[1];
  const TOTAL_PAGES = 7;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        handleNextPage();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        handlePrevPage();
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, viewMode, isFullscreen]);

  const handleNextPage = () => {
    if (viewMode === "double") {
      if (currentPage === 1) {
        setCurrentPage(2);
      } else {
        setCurrentPage(prev => Math.min(TOTAL_PAGES, prev + 2));
      }
    } else {
      setCurrentPage(prev => Math.min(TOTAL_PAGES, prev + 1));
    }
  };

  const handlePrevPage = () => {
    if (viewMode === "double") {
      if (currentPage <= 3) {
        setCurrentPage(1);
      } else {
        setCurrentPage(prev => Math.max(1, prev - 2));
      }
    } else {
      setCurrentPage(prev => Math.max(1, prev - 1));
    }
  };

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    if (!q.trim()) {
      setSearchResults([]);
      return;
    }
    const query = q.toLowerCase();
    const results: { page: number; snippet: string }[] = [];

    // Page 1: Cover
    if (issue.title.toLowerCase().includes(query) || issue.editorialSummary.toLowerCase().includes(query)) {
      results.push({ page: 1, snippet: `Cover: ${issue.title}` });
    }
    // Page 2: Editorial
    if (issue.editorialSummary.toLowerCase().includes(query)) {
      results.push({ page: 2, snippet: `Editorial: ${issue.editorialSummary.substring(0, 70)}...` });
    }
    // Page 3: Feature Article
    if (mainArticle.title.toLowerCase().includes(query) || mainArticle.extractedFullContent.toLowerCase().includes(query)) {
      results.push({ page: 3, snippet: `Article: ${mainArticle.title.substring(0, 60)}...` });
    }
    // Page 4: Epigraphy
    if (mainArticle.epigraphicalDecipherment.translation.toLowerCase().includes(query) || mainArticle.epigraphicalDecipherment.script.toLowerCase().includes(query)) {
      results.push({ page: 4, snippet: `Epigraphy: ${mainArticle.epigraphicalDecipherment.script}` });
    }
    // Page 5: Sensors
    if (mainArticle.sensorArchaeometryNotes.instrumentalFindings.toLowerCase().includes(query)) {
      results.push({ page: 5, snippet: `Sensor Telemetry: ${mainArticle.sensorArchaeometryNotes.instrumentalFindings.substring(0, 60)}...` });
    }
    // Page 6: Scholars
    if (Object.values(mainArticle.agenticDispatchSummary).some(v => v.toLowerCase().includes(query))) {
      results.push({ page: 6, snippet: `Scholars Consensus: 6-Agent Field Review` });
    }
    setSearchResults(results);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyCitation = (format: "bibtex" | "apa" | "chicago") => {
    const journalTitle = issue.magazineTitle || "Heritage India Magazine";
    const publisherName = issue.publisher || "Granth Archaeological Heritage Trust";
    let citation = "";
    if (format === "apa") {
      citation = `${mainArticle.author}. (${issue.yearPublished}). ${mainArticle.title}. ${journalTitle}, ${issue.volumeNumber}(${issue.issueNumber}), ${currentPage}-${currentPage + 4}. https://doi.org/10.5281/archaeo.${issue.id}`;
    } else if (format === "chicago") {
      citation = `${mainArticle.author}. "${mainArticle.title}." ${journalTitle} ${issue.volumeNumber}, no. ${issue.issueNumber} (${issue.yearPublished}): ${currentPage}-${currentPage + 4}.`;
    } else {
      citation = `@article{indic_${issue.publicationId || "journal"}_${issue.volumeNumber}_${issue.issueNumber},\n  author = {${mainArticle.author}},\n  title = {${mainArticle.title}},\n  journal = {${journalTitle}},\n  volume = {${issue.volumeNumber}},\n  number = {${issue.issueNumber}},\n  year = {${issue.yearPublished}},\n  pages = {${currentPage}-${currentPage + 4}},\n  publisher = {${publisherName}}\n}`;
    }
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2000);
  };

  const handleAddAnnotation = () => {
    if (!newNoteText.trim()) return;
    const newNote: StickyAnnotation = {
      id: `note-${Date.now()}`,
      pageNumber: currentPage,
      author: "Visiting Scholar",
      text: newNoteText,
      timestamp: "Just now"
    };
    setAnnotations(prev => [...prev, newNote]);
    setNewNoteText("");
    setIsAddingNote(false);
  };

  // Color Styles based on paper theme
  const getPaperClasses = () => {
    switch (paperTheme) {
      case "sepia":
        return "bg-[#f4ecd8] text-[#2b2118] border-[#d8c8a8] shadow-amber-950/20";
      case "night":
        return "bg-[#181a1f] text-[#dcdfe4] border-[#2c313a] shadow-black";
      case "blueprint":
        return "bg-[#0b2038] text-[#c9e2ff] border-[#1e4470] shadow-blue-950/40 font-mono";
      case "glossy":
      default:
        return "bg-[#faf8f5] text-[#1a1714] border-[#e2dad0] shadow-2xl";
    }
  };

  const getHeaderAccent = () => {
    switch (paperTheme) {
      case "sepia":
        return "text-[#78350f] border-[#d8c8a8]";
      case "night":
        return "text-[#e5c07b] border-[#2c313a]";
      case "blueprint":
        return "text-[#61afef] border-[#1e4470]";
      case "glossy":
      default:
        return "text-[#851e18] border-[#e8dfd5]";
    }
  };

  // Render individual page contents
  const renderPageContent = (pageNum: number) => {
    switch (pageNum) {
      case 1:
        // COVER PAGE
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden select-text">
            {/* Background Decorative Stamp & Border */}
            <div className="absolute inset-2 sm:inset-3 border-2 border-amber-900/30 pointer-events-none" />
            <div className="absolute inset-3 sm:inset-4 border border-amber-900/20 pointer-events-none" />

            {/* Top Masthead */}
            <div className="relative z-10 text-center border-b-2 border-amber-900/40 pb-4 pt-1">
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-stone-500 uppercase pb-1 border-b border-stone-300">
                <span>VOL. {issue.volumeNumber} • NO. {issue.issueNumber}</span>
                <span className="font-bold text-amber-900">ISSN 0974-8822</span>
                <span>{issue.quarter} {issue.yearPublished}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-amber-950 mt-3 uppercase drop-shadow-sm">
                HERITAGE INDIA
              </h1>
              <p className="text-[10px] sm:text-xs font-serif italic tracking-widest text-stone-700 uppercase mt-0.5">
                The Peer-Reviewed Journal of Indic Archaeological & Sacred Sciences
              </p>
            </div>

            {/* Cover Hero Image Frame */}
            <div className="relative z-10 my-3 flex-1 flex flex-col justify-end rounded-xl overflow-hidden border-2 border-amber-950/30 shadow-md group min-h-[220px]">
              <img
                src={issue.coverImage}
                alt={issue.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="relative z-10 p-4 sm:p-6 text-white space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded bg-amber-600 text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                  EXCLUSIVE COVER STORY
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-amber-100 leading-tight">
                  {issue.title}
                </h2>
                <p className="text-xs text-stone-200 line-clamp-2 font-sans opacity-95">
                  {issue.editorialSummary}
                </p>
              </div>
            </div>

            {/* Sub-Articles Headlines & Barcode Footer */}
            <div className="relative z-10 grid grid-cols-12 gap-3 pt-2 border-t border-amber-900/30 items-center">
              <div className="col-span-8 space-y-1 text-left">
                <span className="text-[9px] font-mono uppercase font-bold text-amber-800">In This Issue:</span>
                <div className="text-[11px] font-serif font-bold text-stone-800 line-clamp-1">
                  • {mainArticle.title}
                </div>
                {secondaryArticle && (
                  <div className="text-[10px] font-serif text-stone-600 line-clamp-1">
                    • {secondaryArticle.title}
                  </div>
                )}
                <div className="text-[9px] font-sans text-stone-500">
                  Epigraphy by Prof. Epigraphicus • Telemetry by Er. Maya Swaminathan
                </div>
              </div>

              <div className="col-span-4 flex flex-col items-end justify-center">
                <div className="p-1.5 bg-white border border-stone-300 rounded shadow-inner text-center">
                  <div className="w-24 h-6 bg-[repeating-linear-gradient(90deg,#000,#000_1px,#fff_1px,#fff_3px,#000_3px,#000_5px)] mb-0.5" />
                  <span className="text-[8px] font-mono text-stone-600 font-bold">9 770974 882004</span>
                </div>
                <span className="text-[9px] font-mono font-bold text-amber-900 mt-1">₹ 250 / $ 15.00</span>
              </div>
            </div>
          </div>
        );

      case 2:
        // TABLE OF CONTENTS & EDITORIAL COLOPHON
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 select-text">
            {/* Running Header */}
            <div className="flex justify-between items-center text-[9px] font-mono uppercase text-stone-500 border-b border-stone-300 pb-2">
              <span>HERITAGE INDIA MAGAZINE • VOL {issue.volumeNumber}</span>
              <span>EDITORIAL & CONTENTS</span>
              <span>FOLIO 02</span>
            </div>

            <div className="space-y-4 my-auto">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-amber-900 font-bold">Editorial Board & Agents</h3>
                <h2 className="text-xl font-serif font-black text-stone-900">Table of Contents</h2>
              </div>

              {/* Contents List */}
              <div className="space-y-3 border-y border-stone-200 py-3">
                <div
                  onClick={() => setCurrentPage(3)}
                  className="flex justify-between items-start gap-3 p-2 rounded-lg hover:bg-black/5 cursor-pointer transition-colors"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-amber-800 font-bold uppercase">Cover Feature • Page 03</span>
                    <h4 className="text-sm font-serif font-bold text-stone-800 leading-snug">{mainArticle.title}</h4>
                    <p className="text-[11px] font-sans text-stone-500">{mainArticle.author} ({mainArticle.siteOrTopic})</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-900 shrink-0">P. 03</span>
                </div>

                <div
                  onClick={() => setCurrentPage(4)}
                  className="flex justify-between items-start gap-3 p-2 rounded-lg hover:bg-black/5 cursor-pointer transition-colors"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase">Epigraphical Study • Page 04</span>
                    <h4 className="text-xs font-serif font-bold text-stone-800">Deciphering Ancient Inscriptions: {mainArticle.epigraphicalDecipherment.script}</h4>
                    <p className="text-[11px] font-sans text-stone-500">Paleographic transliteration and linguistic evolution</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-900 shrink-0">P. 04</span>
                </div>

                <div
                  onClick={() => setCurrentPage(5)}
                  className="flex justify-between items-start gap-3 p-2 rounded-lg hover:bg-black/5 cursor-pointer transition-colors"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-cyan-800 font-bold uppercase">Sensor Archaeometry • Page 05</span>
                    <h4 className="text-xs font-serif font-bold text-stone-800">Subsurface Radar, LiDAR & Tandetron C-14 Dating</h4>
                    <p className="text-[11px] font-sans text-stone-500">Instrumental telemetry & isotope calibration logs</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-900 shrink-0">P. 05</span>
                </div>

                <div
                  onClick={() => setCurrentPage(6)}
                  className="flex justify-between items-start gap-3 p-2 rounded-lg hover:bg-black/5 cursor-pointer transition-colors"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-purple-800 font-bold uppercase">Scholars Symposium • Page 06</span>
                    <h4 className="text-xs font-serif font-bold text-stone-800">Autonomous 6-Agent Consensus Matrix & Peer Review</h4>
                    <p className="text-[11px] font-sans text-stone-500">Vedic scriptures, astronomical ephemeris, and architectural canon</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-900 shrink-0">P. 06</span>
                </div>
              </div>

              {/* Letter from Editor Box */}
              <div className="p-3 bg-amber-950/5 rounded-xl border border-amber-900/20 text-xs font-serif space-y-1.5">
                <span className="text-[9px] font-mono uppercase font-bold text-amber-900 block">From the Editor's Desk:</span>
                <p className="italic text-stone-700 leading-relaxed text-[11px]">
                  "{issue.editorialSummary}"
                </p>
                <div className="text-[9px] font-mono text-right text-stone-500">— Chief Archaeological Editor, Granth Trust</div>
              </div>
            </div>

            {/* Running Footer */}
            <div className="flex justify-between items-center text-[9px] font-mono text-stone-400 border-t border-stone-200 pt-2">
              <span>Granth Archaeological Publications</span>
              <span>2</span>
              <span>ISSN 0974-8822</span>
            </div>
          </div>
        );

      case 3:
        // ARTICLE OPENING SPREAD (PART 1 - STRATIGRAPHY & FIELD DISCOVERY)
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 select-text">
            {/* Running Header */}
            <div className="flex justify-between items-center text-[9px] font-mono uppercase text-stone-500 border-b border-stone-300 pb-2">
              <span>FEATURE EXCAVATION REPORT</span>
              <span>HERITAGE INDIA • VOL {issue.volumeNumber}</span>
              <span>PAGE 03</span>
            </div>

            <div className="space-y-3 my-auto">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-amber-800">
                  <MapPin className="w-3 h-3 text-emerald-600" />
                  <span>{mainArticle.coordinates}</span>
                  <span>•</span>
                  <span className="bg-amber-950/10 px-2 py-0.5 rounded">{mainArticle.historicalEpoch}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif font-black text-stone-900 leading-tight">
                  {mainArticle.title}
                </h2>

                <div className="text-xs font-serif italic text-stone-600 border-b border-stone-200 pb-2">
                  By {mainArticle.author} • Archaeological Investigation Monograph
                </div>
              </div>

              {/* Abstract Callout */}
              <div className="p-3 bg-amber-950/5 border-l-4 border-amber-800 rounded-r-lg text-xs font-serif leading-relaxed text-stone-800">
                <span className="text-[9px] font-mono uppercase font-bold text-amber-900 block mb-0.5">Abstract:</span>
                {mainArticle.abstract}
              </div>

              {/* Two-Column Magazine Text with Monumental Drop Cap */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif leading-relaxed text-stone-800 text-justify">
                <div>
                  <span className="float-left text-4xl font-serif font-black text-amber-900 leading-none pr-2 pt-1">
                    {mainArticle.extractedFullContent.charAt(0)}
                  </span>
                  {mainArticle.extractedFullContent.substring(1, Math.floor(mainArticle.extractedFullContent.length / 2))}
                </div>

                <div>
                  {mainArticle.extractedFullContent.substring(Math.floor(mainArticle.extractedFullContent.length / 2))}
                </div>
              </div>

              {/* Key Discoveries Badges */}
              <div className="p-3 bg-stone-100 rounded-xl border border-stone-200 space-y-1.5">
                <span className="text-[9px] font-mono uppercase font-bold text-stone-700 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Excavation Stratum Discoveries:</span>
                </span>
                <ul className="space-y-1 text-[11px] font-sans text-stone-700">
                  {mainArticle.keyArchaeologicalFindings.map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-amber-800 font-bold">▪</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Running Footer */}
            <div className="flex justify-between items-center text-[9px] font-mono text-stone-400 border-t border-stone-200 pt-2">
              <span>{mainArticle.siteOrTopic}</span>
              <span>3</span>
              <span>www.heritageindiamagazine.org</span>
            </div>
          </div>
        );

      case 4:
        // EPIGRAPHICAL DECIPHERMENT & SCRIPTURAL TEXTS
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 select-text">
            {/* Running Header */}
            <div className="flex justify-between items-center text-[9px] font-mono uppercase text-stone-500 border-b border-stone-300 pb-2">
              <span>EPIGRAPHY & ANCIENT SCRIPTS</span>
              <span>PALEOGRAPHIC DECIPHERMENT</span>
              <span>PAGE 04</span>
            </div>

            <div className="space-y-4 my-auto">
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase">Epigraphical Section • Corpus Analysis</span>
                <h3 className="text-lg font-serif font-black text-stone-900">
                  Deciphering: {mainArticle.epigraphicalDecipherment.script}
                </h3>
              </div>

              {/* Epigraphy Inscription Plate */}
              <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl border-2 border-stone-700 space-y-2 shadow-inner">
                <div className="flex justify-between items-center text-[9px] font-mono text-amber-400">
                  <span>FACSIMILE EPIGRAPHIC PLATE</span>
                  <span>CONCORDANCE REF: ASI-EP-{(issue.volumeNumber * 100) + issue.issueNumber}</span>
                </div>
                
                <div className="p-3 bg-black/60 rounded-xl border border-stone-800 text-center font-mono text-amber-300 text-sm tracking-widest overflow-x-auto">
                  {mainArticle.epigraphicalDecipherment.textTransliteration}
                </div>

                <div className="text-xs font-serif italic text-stone-200 border-t border-stone-800 pt-2">
                  <strong>Translation:</strong> "{mainArticle.epigraphicalDecipherment.translation}"
                </div>

                <p className="text-[10px] font-sans text-stone-400 leading-normal">
                  <strong>Paleographic Notes:</strong> {mainArticle.epigraphicalDecipherment.paleographicNotes}
                </p>
              </div>

              {/* Scriptural & Classical Parallel Box */}
              <div className="p-3 bg-amber-950/10 rounded-xl border border-amber-800/30 space-y-1">
                <span className="text-[9px] font-mono uppercase font-bold text-amber-900 flex items-center gap-1">
                  <Quote className="w-3 h-3 text-amber-700" />
                  <span>Scriptural & Classical Literature Parallel:</span>
                </span>
                <p className="text-xs font-serif text-stone-800 italic leading-relaxed">
                  {mainArticle.scripturalParallels}
                </p>
              </div>

              {/* Comparative Timeline Grid */}
              <div className="grid grid-cols-2 gap-3 text-[11px] font-sans">
                <div className="p-2.5 bg-stone-100 rounded-lg border border-stone-200 space-y-0.5">
                  <span className="font-mono text-[9px] font-bold text-stone-500 uppercase block">Scripture Stratum</span>
                  <div className="font-serif font-bold text-stone-800">{mainArticle.historicalEpoch}</div>
                  <div className="text-[10px] text-stone-600">Vedic & Classical Canon Correspondence</div>
                </div>

                <div className="p-2.5 bg-stone-100 rounded-lg border border-stone-200 space-y-0.5">
                  <span className="font-mono text-[9px] font-bold text-stone-500 uppercase block">Archaeological Site</span>
                  <div className="font-serif font-bold text-stone-800">{mainArticle.siteOrTopic}</div>
                  <div className="text-[10px] text-stone-600">GPS: {mainArticle.coordinates}</div>
                </div>
              </div>
            </div>

            {/* Running Footer */}
            <div className="flex justify-between items-center text-[9px] font-mono text-stone-400 border-t border-stone-200 pt-2">
              <span>Granth Epigraphical Concordance</span>
              <span>4</span>
              <span>Peer-Reviewed Epigraphy</span>
            </div>
          </div>
        );

      case 5:
        // SENSOR ARCHAEOMETRY & INSTRUMENTAL DOSSIER
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 select-text">
            {/* Running Header */}
            <div className="flex justify-between items-center text-[9px] font-mono uppercase text-stone-500 border-b border-stone-300 pb-2">
              <span>ARCHAEOMETRY & SENSOR SUITE</span>
              <span>INSTRUMENTAL TELEMETRY</span>
              <span>PAGE 05</span>
            </div>

            <div className="space-y-4 my-auto">
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-800 uppercase">Scientific Laboratory Analysis</span>
                <h3 className="text-lg font-serif font-black text-stone-900">
                  Subsurface GPR, LiDAR & Isotopic Geochemistry
                </h3>
              </div>

              {/* Methods Used Badges */}
              <div className="flex flex-wrap gap-1.5">
                {mainArticle.sensorArchaeometryNotes.methods.map((m, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-full bg-cyan-950/10 text-cyan-900 border border-cyan-800/30 text-[10px] font-mono font-bold">
                    📡 {m}
                  </span>
                ))}
              </div>

              {/* Instrumental Findings Report Box */}
              <div className="p-4 bg-cyan-950/5 rounded-2xl border-2 border-cyan-800/30 space-y-2">
                <div className="flex justify-between items-center text-[9px] font-mono text-cyan-900 font-bold">
                  <span>SPECTROMETRIC & ACOUSTIC TELEMETRY</span>
                  <span>CALIBRATION CONFIDENCE: 98.4%</span>
                </div>
                <p className="text-xs font-serif leading-relaxed text-stone-800">
                  {mainArticle.sensorArchaeometryNotes.instrumentalFindings}
                </p>
              </div>

              {/* Lab Telemetry Diagnostic Table */}
              <div className="border border-stone-200 rounded-xl overflow-hidden text-[11px] font-sans">
                <table className="w-full text-left">
                  <thead className="bg-stone-100 text-[10px] font-mono uppercase text-stone-600 border-b border-stone-200">
                    <tr>
                      <th className="p-2">Diagnostic Test</th>
                      <th className="p-2">Instrument</th>
                      <th className="p-2">Observed Signature</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    <tr>
                      <td className="p-2 font-bold font-serif">Subsurface GPR</td>
                      <td className="p-2 font-mono text-[10px]">400MHz Dual-Chirp</td>
                      <td className="p-2">Anomalous rectilinear foundation grid at -2.4m</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold font-serif">AMS Carbon-14</td>
                      <td className="p-2 font-mono text-[10px]">3MV Tandetron AMS</td>
                      <td className="p-2">Calibrated 1σ confidence boundary verified</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold font-serif">pXRF Metallurgy</td>
                      <td className="p-2 font-mono text-[10px]">Thermo Scientific Niton</td>
                      <td className="p-2">Alloy ratio aligns with classical Panchaloha canon</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Running Footer */}
            <div className="flex justify-between items-center text-[9px] font-mono text-stone-400 border-t border-stone-200 pt-2">
              <span>Sensor Archaeometry Division</span>
              <span>5</span>
              <span>ASI Lab Verification</span>
            </div>
          </div>
        );

      case 6:
        // AUTONOMOUS 6-SCHOLAR AGENT CONSENSUS MATRIX
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 select-text">
            {/* Running Header */}
            <div className="flex justify-between items-center text-[9px] font-mono uppercase text-stone-500 border-b border-stone-300 pb-2">
              <span>PEER-REVIEW SYMPOSIUM</span>
              <span>AUTONOMOUS SCHOLAR AGENTS</span>
              <span>PAGE 06</span>
            </div>

            <div className="space-y-3 my-auto">
              <div>
                <span className="text-[10px] font-mono font-bold text-purple-800 uppercase">AI Scholar Swarm Consensus</span>
                <h3 className="text-lg font-serif font-black text-stone-900">
                  Multidisciplinary Scholarly Verification
                </h3>
              </div>

              {/* 6 Agents Dispatch Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 space-y-0.5">
                  <span className="font-mono text-[9px] font-bold text-amber-900">🏛️ Dr. Arundhati Sen (Stratigraphy)</span>
                  <p className="text-[10px] font-serif text-stone-700 line-clamp-2">{mainArticle.agenticDispatchSummary.drSenFieldLead}</p>
                </div>

                <div className="p-2.5 bg-indigo-50 rounded-xl border border-indigo-200 space-y-0.5">
                  <span className="font-mono text-[9px] font-bold text-indigo-900">🌌 Acharya Varahamihira (Astronomy)</span>
                  <p className="text-[10px] font-serif text-stone-700 line-clamp-2">{mainArticle.agenticDispatchSummary.acharyaVarahaAstro}</p>
                </div>

                <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 space-y-0.5">
                  <span className="font-mono text-[9px] font-bold text-emerald-900">📜 Prof. Epigraphicus (Paleography)</span>
                  <p className="text-[10px] font-serif text-stone-700 line-clamp-2">{mainArticle.agenticDispatchSummary.profEpigraphicus}</p>
                </div>

                <div className="p-2.5 bg-orange-50 rounded-xl border border-orange-200 space-y-0.5">
                  <span className="font-mono text-[9px] font-bold text-orange-900">🗿 Shilpa Ratna Vidwan (Vastu/Art)</span>
                  <p className="text-[10px] font-serif text-stone-700 line-clamp-2">{mainArticle.agenticDispatchSummary.shilpaVidwanArt}</p>
                </div>

                <div className="p-2.5 bg-purple-50 rounded-xl border border-purple-200 space-y-0.5">
                  <span className="font-mono text-[9px] font-bold text-purple-900">🪷 Dr. Kedar Shastri (Vedic Texts)</span>
                  <p className="text-[10px] font-serif text-stone-700 line-clamp-2">{mainArticle.agenticDispatchSummary.drShastriVedas}</p>
                </div>

                <div className="p-2.5 bg-cyan-50 rounded-xl border border-cyan-200 space-y-0.5">
                  <span className="font-mono text-[9px] font-bold text-cyan-900">📡 Er. Maya Swaminathan (Sensors)</span>
                  <p className="text-[10px] font-serif text-stone-700 line-clamp-2">{mainArticle.agenticDispatchSummary.erMayaSensors}</p>
                </div>
              </div>

              {/* Digital DOI & Verification Stamp */}
              <div className="p-3 bg-stone-900 text-stone-200 rounded-xl border border-stone-700 flex justify-between items-center text-xs">
                <div>
                  <div className="text-[9px] font-mono text-amber-400 font-bold">DIGITAL OBJECT IDENTIFIER (DOI)</div>
                  <div className="font-mono text-[11px]">10.5281/heritageindia.{issue.id}</div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>6/6 AGENTS VERIFIED</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Running Footer */}
            <div className="flex justify-between items-center text-[9px] font-mono text-stone-400 border-t border-stone-200 pt-2">
              <span>Granth Multi-Agent Research System</span>
              <span>6</span>
              <span>Peer-Review Verified</span>
            </div>
          </div>
        );

      case 7:
        // BACK COVER / PUBLICATION ATLAS & NEXT ISSUE PREVIEW
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 select-text relative overflow-hidden">
            <div className="absolute inset-2 sm:inset-3 border-2 border-stone-300 pointer-events-none" />

            {/* Back Cover Header */}
            <div className="text-center border-b border-stone-300 pb-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-amber-900 font-bold">Granth Heritage Monograph Series</h3>
              <h2 className="text-lg font-serif font-black text-stone-900 uppercase">Archaeological Cartography</h2>
            </div>

            <div className="space-y-4 my-auto text-center">
              <div className="p-4 bg-stone-100 rounded-2xl border border-stone-200 space-y-2">
                <span className="text-[9px] font-mono uppercase font-bold text-stone-600 block">Site Geolocation Vector</span>
                <div className="text-sm font-serif font-bold text-stone-900">{mainArticle.siteOrTopic}</div>
                <div className="text-xs font-mono text-emerald-700 font-bold">{mainArticle.coordinates}</div>
                <p className="text-[11px] font-sans text-stone-600">
                  Stratified excavations under the aegis of Archaeological Survey of India & Granth Autonomous Scholarly Network.
                </p>
              </div>

              {/* Forthcoming Special Issue Preview */}
              <div className="p-4 bg-amber-950/10 rounded-2xl border border-amber-900/30 text-left space-y-1">
                <span className="text-[9px] font-mono uppercase font-bold text-amber-900">Next Upcoming Issue:</span>
                <h4 className="text-xs font-serif font-bold text-stone-900">Vol {issue.volumeNumber + 1}, No 1: "Maritime Silk & Spice Routes of Muziris & Arikamedu"</h4>
                <p className="text-[10px] font-sans text-stone-600">
                  Underwater Roman amphorae petrography and Sangam oceanographic routing.
                </p>
              </div>

              {/* Publisher Colophon */}
              <div className="text-[10px] font-serif text-stone-500 space-y-0.5">
                <p>© {issue.yearPublished} Heritage India Publications & Granth AI Intelligence System.</p>
                <p>Published in cooperation with the National Centre for Archaeological Research.</p>
              </div>
            </div>

            {/* Back Cover Barcode & Footer */}
            <div className="flex justify-between items-center text-[9px] font-mono text-stone-500 border-t border-stone-300 pt-2">
              <span>ISSN: 0974-8822</span>
              <span>BACK COVER</span>
              <span>www.heritageindiamagazine.org</span>
            </div>
          </div>
        );

      default:
        return <div>Page {pageNum}</div>;
    }
  };

  return (
    <div
      ref={readerContainerRef}
      className={`relative w-full flex flex-col bg-[#110e0c] text-stone-100 select-none ${
        isFullscreen ? "fixed inset-0 z-50 h-screen" : "rounded-3xl border-2 border-amber-900/50 shadow-2xl min-h-[85vh]"
      }`}
    >
      {/* 1. TOP PDF CONTROLS TOOLBAR */}
      <div className="bg-[#1a1410] border-b border-stone-800 p-3 sm:px-5 flex flex-wrap items-center justify-between gap-3 shrink-0">
        
        {/* Left Side: Issue Title & Close / Back */}
        <div className="flex items-center gap-3">
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              title="Close PDF Reader"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-900/40 border border-amber-600/40 text-amber-300">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-serif font-bold text-amber-200 truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                  {issue.title}
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 text-[9px] font-mono border border-amber-800 font-bold">
                  PDF FORMAT
                </span>
              </div>
              <span className="text-[10px] font-mono text-stone-400 block">
                Vol. {issue.volumeNumber}, No. {issue.issueNumber} • {issue.quarter} {issue.yearPublished}
              </span>
            </div>
          </div>
        </div>

        {/* Center: Page Controls */}
        <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-xl border border-stone-800">
          <button
            onClick={handlePrevPage}
            disabled={currentPage <= 1}
            className="p-1.5 rounded-lg hover:bg-stone-800 disabled:opacity-30 transition-colors text-stone-300 cursor-pointer"
            title="Previous Page (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1 px-2 text-xs font-mono text-stone-200">
            <span className="font-bold text-amber-400">
              {viewMode === "double" && currentPage > 1 && currentPage < TOTAL_PAGES
                ? `${currentPage}-${Math.min(currentPage + 1, TOTAL_PAGES)}`
                : currentPage}
            </span>
            <span className="text-stone-500">/</span>
            <span className="text-stone-400">{TOTAL_PAGES}</span>
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage >= TOTAL_PAGES}
            className="p-1.5 rounded-lg hover:bg-stone-800 disabled:opacity-30 transition-colors text-stone-300 cursor-pointer"
            title="Next Page (Right Arrow)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Side Tools: Zoom, Layout, Theme, Print, Fullscreen */}
        <div className="flex items-center gap-1 sm:gap-2">
          
          {/* Zoom Controls */}
          <div className="hidden md:flex items-center gap-1 bg-black/50 p-1 rounded-xl border border-stone-800">
            <button
              onClick={() => setZoomLevel(prev => Math.max(50, prev - 15))}
              className="p-1.5 rounded hover:bg-stone-800 text-stone-400 hover:text-white"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] font-mono w-10 text-center text-stone-300">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel(prev => Math.min(175, prev + 15))}
              className="p-1.5 rounded hover:bg-stone-800 text-stone-400 hover:text-white"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* View Mode Toggle (Double vs Single vs Continuous) */}
          <div className="flex items-center bg-black/50 p-1 rounded-xl border border-stone-800">
            <button
              onClick={() => setViewMode("double")}
              className={`p-1.5 rounded transition-colors ${viewMode === "double" ? "bg-amber-900 text-amber-200" : "text-stone-400 hover:text-white"}`}
              title="Two-Page Spread (Book Layout)"
            >
              <Columns2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode("single")}
              className={`p-1.5 rounded transition-colors ${viewMode === "single" ? "bg-amber-900 text-amber-200" : "text-stone-400 hover:text-white"}`}
              title="Single Page PDF View"
            >
              <Square className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode("continuous")}
              className={`p-1.5 rounded transition-colors ${viewMode === "continuous" ? "bg-amber-900 text-amber-200" : "text-stone-400 hover:text-white"}`}
              title="Continuous Scroll Mode"
            >
              <ScrollText className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Paper Theme Switcher */}
          <div className="relative group">
            <button
              className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 border border-stone-800 flex items-center gap-1 text-xs font-mono cursor-pointer"
              title="Change Paper Mode"
            >
              <Palette className="w-3.5 h-3.5" />
            </button>
            <div className="absolute right-0 mt-1 w-40 bg-stone-900 border border-stone-700 rounded-xl p-1 shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50 text-xs font-serif">
              <button
                onClick={() => setPaperTheme("glossy")}
                className={`w-full text-left p-1.5 rounded flex items-center justify-between ${paperTheme === "glossy" ? "bg-amber-950 text-amber-300 font-bold" : "text-stone-300 hover:bg-stone-800"}`}
              >
                <span>Glossy Magazine</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#faf8f5] border" />
              </button>
              <button
                onClick={() => setPaperTheme("sepia")}
                className={`w-full text-left p-1.5 rounded flex items-center justify-between ${paperTheme === "sepia" ? "bg-amber-950 text-amber-300 font-bold" : "text-stone-300 hover:bg-stone-800"}`}
              >
                <span>Sepia Parchment</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#f4ecd8] border" />
              </button>
              <button
                onClick={() => setPaperTheme("night")}
                className={`w-full text-left p-1.5 rounded flex items-center justify-between ${paperTheme === "night" ? "bg-amber-950 text-amber-300 font-bold" : "text-stone-300 hover:bg-stone-800"}`}
              >
                <span>Scholar Night</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#181a1f] border" />
              </button>
              <button
                onClick={() => setPaperTheme("blueprint")}
                className={`w-full text-left p-1.5 rounded flex items-center justify-between ${paperTheme === "blueprint" ? "bg-amber-950 text-amber-300 font-bold" : "text-stone-300 hover:bg-stone-800"}`}
              >
                <span>Cyan Microfilm</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0b2038] border" />
              </button>
            </div>
          </div>

          {/* Sidebar Drawer Buttons (Outline, Search, Notes, Cite) */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveSidebarTab(prev => prev === "outline" ? null : "outline")}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                activeSidebarTab === "outline"
                  ? "bg-amber-900 border-amber-500 text-white"
                  : "bg-stone-900 hover:bg-stone-800 border-stone-800 text-stone-300"
              }`}
              title="Table of Contents & Bookmarks"
            >
              <Bookmark className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveSidebarTab(prev => prev === "search" ? null : "search")}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                activeSidebarTab === "search"
                  ? "bg-amber-900 border-amber-500 text-white"
                  : "bg-stone-900 hover:bg-stone-800 border-stone-800 text-stone-300"
              }`}
              title="Search in PDF"
            >
              <Search className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveSidebarTab(prev => prev === "notes" ? null : "notes")}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                activeSidebarTab === "notes"
                  ? "bg-amber-900 border-amber-500 text-white"
                  : "bg-stone-900 hover:bg-stone-800 border-stone-800 text-stone-300"
              }`}
              title="Researcher Sticky Notes"
            >
              <StickyNote className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveSidebarTab(prev => prev === "cite" ? null : "cite")}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                activeSidebarTab === "cite"
                  ? "bg-amber-900 border-amber-500 text-white"
                  : "bg-stone-900 hover:bg-stone-800 border-stone-800 text-stone-300"
              }`}
              title="Citation & Reference"
            >
              <Quote className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
              title="Print Issue / Export PDF"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setIsFullscreen(prev => !prev)}
              className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen Reader"}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

      </div>

      {/* 2. MAIN WORKSPACE WITH OPTIONAL SIDEBAR & REALISTIC MAGAZINE PAGES */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* SIDEBAR DRAWER (Outline / Search / Notes / Cite) */}
        <AnimatePresence>
          {activeSidebarTab && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 300, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="bg-[#16120e] border-r border-stone-800 h-full overflow-y-auto shrink-0 z-20 flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="p-3 border-b border-stone-800 flex justify-between items-center">
                <span className="text-xs font-mono uppercase font-bold text-amber-300 flex items-center gap-1.5">
                  {activeSidebarTab === "outline" && <Bookmark className="w-3.5 h-3.5" />}
                  {activeSidebarTab === "search" && <Search className="w-3.5 h-3.5" />}
                  {activeSidebarTab === "notes" && <StickyNote className="w-3.5 h-3.5" />}
                  {activeSidebarTab === "cite" && <Quote className="w-3.5 h-3.5" />}
                  <span>
                    {activeSidebarTab === "outline" && "Issue Outline"}
                    {activeSidebarTab === "search" && "Search In Document"}
                    {activeSidebarTab === "notes" && "Researcher Notes"}
                    {activeSidebarTab === "cite" && "Academic Citation"}
                  </span>
                </span>
                <button
                  onClick={() => setActiveSidebarTab(null)}
                  className="p-1 rounded text-stone-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Sidebar Content */}
              <div className="p-3 flex-1 overflow-y-auto space-y-3">
                
                {/* 1. OUTLINE / BOOKMARKS */}
                {activeSidebarTab === "outline" && (
                  <div className="space-y-1.5 text-xs font-serif">
                    {[
                      { page: 1, title: "Cover Page & Issue Metadata" },
                      { page: 2, title: "Table of Contents & Editorial" },
                      { page: 3, title: "Feature: " + mainArticle.title },
                      { page: 4, title: "Epigraphy: " + mainArticle.epigraphicalDecipherment.script },
                      { page: 5, title: "Sensor Telemetry & Archaeometry" },
                      { page: 6, title: "6-Scholar AI Peer Review Consensus" },
                      { page: 7, title: "Archaeological Atlas & Colophon" }
                    ].map(item => (
                      <button
                        key={item.page}
                        onClick={() => setCurrentPage(item.page)}
                        className={`w-full text-left p-2 rounded-lg flex items-center justify-between gap-2 transition-colors cursor-pointer border ${
                          currentPage === item.page
                            ? "bg-amber-950/80 border-amber-600 text-amber-200 font-bold"
                            : "border-transparent text-stone-300 hover:bg-stone-900"
                        }`}
                      >
                        <span className="truncate">{item.title}</span>
                        <span className="text-[10px] font-mono text-stone-500">P. 0{item.page}</span>
                      </button>
                    ))}

                    {/* Quick Switch Issue dropdown */}
                    {allIssues.length > 1 && (
                      <div className="pt-4 border-t border-stone-800 space-y-1.5">
                        <span className="text-[10px] font-mono uppercase font-bold text-amber-400">Switch Magazine Issue:</span>
                        {allIssues.map(iss => (
                          <button
                            key={iss.id}
                            onClick={() => onSelectIssue && onSelectIssue(iss)}
                            className={`w-full text-left p-2 rounded-lg text-xs font-serif transition-colors border ${
                              iss.id === issue.id
                                ? "bg-amber-900/60 border-amber-600 text-white font-bold"
                                : "bg-stone-950 border-stone-900 text-stone-400 hover:text-stone-200"
                            }`}
                          >
                            <div className="truncate font-bold">{iss.title}</div>
                            <div className="text-[9px] font-mono text-stone-500">Vol {iss.volumeNumber} • {iss.quarter} {iss.yearPublished}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 2. SEARCH IN PDF */}
                {activeSidebarTab === "search" && (
                  <div className="space-y-3">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-stone-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Search text in this issue..."
                        className="w-full bg-black/60 border border-stone-700 rounded-xl pl-8 pr-2.5 py-1.5 text-xs text-stone-200 font-sans outline-none focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="text-[10px] font-mono text-stone-400 uppercase font-bold">
                        Matches ({searchResults.length}):
                      </div>
                      {searchResults.map((res, i) => (
                        <div
                          key={i}
                          onClick={() => setCurrentPage(res.page)}
                          className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 cursor-pointer text-xs font-serif text-stone-300 space-y-0.5"
                        >
                          <div className="flex justify-between items-center text-[10px] font-mono text-amber-400">
                            <span>PAGE 0{res.page}</span>
                            <span className="text-stone-500">Jump →</span>
                          </div>
                          <p className="line-clamp-2">{res.snippet}</p>
                        </div>
                      ))}
                      {searchQuery && searchResults.length === 0 && (
                        <div className="text-xs text-stone-500 font-serif italic text-center py-4">
                          No exact string matches found in this issue.
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 3. RESEARCHER STICKY NOTES */}
                {activeSidebarTab === "notes" && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-stone-400 uppercase font-bold">Notes on Page {currentPage}:</span>
                      <button
                        onClick={() => setIsAddingNote(prev => !prev)}
                        className="px-2 py-1 bg-amber-900 hover:bg-amber-800 text-amber-200 rounded text-[10px] font-mono flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add Note</span>
                      </button>
                    </div>

                    {isAddingNote && (
                      <div className="p-2.5 bg-stone-900 rounded-xl border border-amber-500/50 space-y-2">
                        <textarea
                          value={newNoteText}
                          onChange={(e) => setNewNoteText(e.target.value)}
                          placeholder={`Add a scholar note on Page ${currentPage}...`}
                          className="w-full h-20 bg-black/60 border border-stone-700 rounded-lg p-2 text-xs text-stone-200 font-sans outline-none focus:border-amber-500 resize-none"
                        />
                        <div className="flex justify-end gap-1.5">
                          <button
                            onClick={() => setIsAddingNote(false)}
                            className="px-2.5 py-1 rounded bg-stone-800 text-stone-400 text-xs"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleAddAnnotation}
                            className="px-2.5 py-1 rounded bg-amber-800 text-white font-bold text-xs"
                          >
                            Save Note
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      {annotations.map(n => (
                        <div key={n.id} className="p-2.5 bg-stone-900 rounded-xl border border-stone-800 space-y-1">
                          <div className="flex justify-between items-center text-[9px] font-mono text-amber-400">
                            <span>{n.author} • Page {n.pageNumber}</span>
                            <span className="text-stone-500">{n.timestamp}</span>
                          </div>
                          <p className="text-xs font-serif text-stone-200">{n.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. ACADEMIC CITATION GENERATOR */}
                {activeSidebarTab === "cite" && (
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-stone-400 uppercase font-bold block">Citation Formats:</span>
                    
                    <div className="space-y-2">
                      <div className="p-2.5 bg-stone-900 rounded-xl border border-stone-800 space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-mono text-amber-400">
                          <span>APA 7th Edition</span>
                          <button
                            onClick={() => handleCopyCitation("apa")}
                            className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
                          >
                            {copiedCitation ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            <span>Copy</span>
                          </button>
                        </div>
                        <p className="text-[11px] font-serif text-stone-300 leading-relaxed">
                          {mainArticle.author}. ({issue.yearPublished}). {mainArticle.title}. <em>Heritage India Magazine</em>, {issue.volumeNumber}({issue.issueNumber}), {currentPage}-{currentPage + 4}.
                        </p>
                      </div>

                      <div className="p-2.5 bg-stone-900 rounded-xl border border-stone-800 space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-mono text-amber-400">
                          <span>BibTeX Entry</span>
                          <button
                            onClick={() => handleCopyCitation("bibtex")}
                            className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
                          >
                            {copiedCitation ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            <span>Copy</span>
                          </button>
                        </div>
                        <pre className="text-[9px] font-mono text-stone-400 bg-black/60 p-2 rounded overflow-x-auto">
                          {`@article{heritageindia_${issue.volumeNumber},\n  author = {${mainArticle.author}},\n  title = {${mainArticle.title}},\n  journal = {Heritage India Magazine},\n  year = {${issue.yearPublished}}\n}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PDF VIEWPORT (Double Page, Single Page, or Continuous) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex items-center justify-center bg-[#0d0a08]/95 print:p-0 print:bg-white">
          <div
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: "top center" }}
            className="transition-transform duration-200"
          >
            
            {/* VIEW MODE 1: DOUBLE PAGE SPREAD (MAGAZINE SPREAD) */}
            {viewMode === "double" && (
              <div className="flex justify-center items-stretch gap-0 max-w-6xl shadow-2xl relative">
                
                {/* Single Page Cover if on Page 1 */}
                {currentPage === 1 ? (
                  <div
                    className={`w-[360px] sm:w-[480px] md:w-[540px] aspect-[1/1.414] rounded-2xl border ${getPaperClasses()} overflow-hidden transition-all`}
                  >
                    {renderPageContent(1)}
                  </div>
                ) : (
                  /* Two-Page Spread for Pages 2+ */
                  <div className="flex items-stretch rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
                    
                    {/* Left Page */}
                    <div
                      className={`w-[320px] sm:w-[420px] md:w-[480px] aspect-[1/1.414] border-r ${getPaperClasses()} transition-all`}
                    >
                      {renderPageContent(currentPage % 2 === 0 ? currentPage : currentPage - 1)}
                    </div>

                    {/* Central Gutter / Binding Crease */}
                    <div className="w-3 bg-gradient-to-r from-black/20 via-black/40 to-black/20 shadow-inner z-10 shrink-0" />

                    {/* Right Page */}
                    <div
                      className={`w-[320px] sm:w-[420px] md:w-[480px] aspect-[1/1.414] ${getPaperClasses()} transition-all`}
                    >
                      {currentPage + 1 <= TOTAL_PAGES ? (
                        renderPageContent(currentPage % 2 === 0 ? currentPage + 1 : currentPage)
                      ) : (
                        <div className="h-full flex items-center justify-center p-8 text-stone-400 font-serif italic text-xs">
                          End of Heritage India Magazine Issue Monograph.
                        </div>
                      )}
                    </div>

                  </div>
                )}

              </div>
            )}

            {/* VIEW MODE 2: SINGLE PAGE VIEW */}
            {viewMode === "single" && (
              <div
                className={`w-[360px] sm:w-[500px] md:w-[580px] aspect-[1/1.414] rounded-2xl border ${getPaperClasses()} overflow-hidden transition-all shadow-2xl`}
              >
                {renderPageContent(currentPage)}
              </div>
            )}

            {/* VIEW MODE 3: CONTINUOUS VERTICAL SCROLL */}
            {viewMode === "continuous" && (
              <div className="space-y-8 max-w-2xl mx-auto">
                {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((pageNum) => (
                  <div
                    key={pageNum}
                    id={`page-${pageNum}`}
                    className={`w-[360px] sm:w-[520px] md:w-[600px] aspect-[1/1.414] rounded-2xl border ${getPaperClasses()} overflow-hidden transition-all shadow-2xl`}
                  >
                    {renderPageContent(pageNum)}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

      </div>

      {/* 3. BOTTOM THUMBNAIL FILMSTRIP */}
      <div className="bg-[#18130f] border-t border-stone-800 p-2 sm:px-4 flex items-center justify-between gap-4 shrink-0 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-stone-500 uppercase font-bold shrink-0">Page Deck:</span>
          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((p) => {
            const isSelected = viewMode === "double" 
              ? (p === currentPage || (currentPage > 1 && p === currentPage + 1))
              : p === currentPage;
            return (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-amber-800 text-amber-100 border-amber-400 shadow-md scale-105"
                    : "bg-stone-900 hover:bg-stone-800 text-stone-400 border-stone-800"
                }`}
              >
                P. 0{p}
              </button>
            );
          })}
        </div>

        {/* Quick Jump into Laboratory Tools */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-mono text-stone-500 uppercase">Cross-Examine:</span>
          <button
            onClick={() => onNavigateToLab?.("carbon_radiation", mainArticle.siteOrTopic)}
            className="px-2 py-0.5 bg-stone-900 hover:bg-stone-800 text-emerald-400 rounded text-[10px] font-mono border border-stone-800 flex items-center gap-1 cursor-pointer"
          >
            <Atom className="w-3 h-3" />
            <span>AMS C-14</span>
          </button>
          <button
            onClick={() => onNavigateToLab?.("archaeo_astronomy", mainArticle.siteOrTopic)}
            className="px-2 py-0.5 bg-stone-900 hover:bg-stone-800 text-cyan-400 rounded text-[10px] font-mono border border-stone-800 flex items-center gap-1 cursor-pointer"
          >
            <Orbit className="w-3 h-3" />
            <span>Ephemeris</span>
          </button>
        </div>
      </div>

    </div>
  );
}
