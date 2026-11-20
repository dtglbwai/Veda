import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Send, 
  Orbit, 
  FileText, 
  Layers, 
  Cpu, 
  Flame, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  ShieldCheck, 
  BookOpen, 
  RefreshCw,
  SlidersHorizontal,
  Bot,
  MessageSquareQuote,
  Zap,
  Globe,
  Radio,
  Mic,
  MicOff,
  Image as ImageIcon,
  Upload,
  Search,
  Download,
  Volume2,
  VolumeX,
  ExternalLink,
  Tag,
  MapPin,
  Clock,
  Check,
  X
} from "lucide-react";
import { AgentResearchResult, ResearchAgent } from "../types";

export interface AgenticFetcherResult {
  identifiedSubject: string;
  category: string;
  executiveSummary: string;
  keyPublicFacts: string[];
  scripturalCitations: {
    textName: string;
    chapterVerse?: string;
    devanagari: string;
    transliteration: string;
    anvaya?: string;
    englishMeaning: string;
    hindiMeaning?: string;
  }[];
  historicalContext: string;
  multiAgentPerspectives: {
    agentName: string;
    role: string;
    insight: string;
  }[];
  geolocationAndTimeline: {
    locationName: string;
    coordinates?: string;
    epochOrPeriod: string;
  };
  verifiedPublicReferences: {
    title: string;
    sourceType: string;
    urlOrCitation: string;
    snippet: string;
  }[];
  confidenceScore: number;
}

const PRESET_RESEARCH_TOPICS = [
  {
    title: "Submerged Dwarka & Mahabharata Archaeo-Astronomy",
    topic: "Investigate submerged fortified structures in Bet Dwarka, marine 3-holed anchors, and verify 3067/3102 BCE astronomical planetary conjunctions described in Mahabharata Udyoga & Bhishma Parva.",
    period: "3100 BCE – 1500 BCE",
    coordinates: "22.2442° N, 68.9685° E (Dwarka Coast)",
    domains: ["archeology", "astronomy", "epigraphy", "scriptures", "sensors"]
  },
  {
    title: "Rakhigarhi Stratigraphy & Indus Script Decipherment",
    topic: "Analyze Mound 7 stratigraphy, Hakra to Mature Harappan transitions, GPR buried mud-brick grid walls, and decipher steatite unicorn seals as astronomical logograms.",
    period: "5500 BCE – 2000 BCE",
    coordinates: "29.2882° N, 76.1158° E (Saraswati Basin)",
    domains: ["archeology", "epigraphy", "iconography", "sensors"]
  },
  {
    title: "Hyper Quest & Praveen Mohan Megalithic Stone Lathe Turning",
    topic: "Investigate Belur Chennakesava temple lathe-turned basalt pillars, mirror polish Ra < 0.1 µm, Ellora Cave 16 top-down basalt excavation, and Ramappa floating bricks.",
    period: "11th – 13th Century CE",
    coordinates: "13.1623° N, 75.8624° E (Belur & Palampet)",
    domains: ["archeology", "sensors", "iconography"]
  },
  {
    title: "Nityananda Misra Sunāma & Classical Grammar Audits",
    topic: "Analyze Paninian Dhatu derivations for authentic Sanskrit names (Sunama), correct stotra mispronunciations in Hanuman Chalisa, and verify Puranic etymology.",
    period: "Classical Sanskrit to Modern Corpus",
    coordinates: "Global Sanskrit Research Matrix",
    domains: ["scriptures", "epigraphy"]
  },
  {
    title: "Jagadguru Kaushalendra Krishna Vishishtadvaita & Ayodhya Geography",
    topic: "Examine Shri Sampradaya exegesis, Ubhaya Vedanta (Upanishads & Divya Prabandham), Tattva Traya, and sacred geography of Ayodhya Ram Janmabhoomi.",
    period: "Ramanuja Lineage to Modern Era",
    coordinates: "26.7922° N, 82.1998° E (Ayodhya)",
    domains: ["scriptures", "traditions"]
  },
  {
    title: "Deepak Verma 10 Mahavidya Rahasya & Planetary Science",
    topic: "Analyze Dasa Mahavidya space-time principles, planetary rulers (Kali-Saturn, Tara-Jupiter, Tripura Sundari-Mercury, Bagalamukhi-Mars), and Sattvic household Upayas.",
    period: "Tantric & Shakta Shastras",
    coordinates: "Universal Shakta Pitha Matrix",
    domains: ["astronomy", "scriptures", "traditions"]
  }
];

const AGENT_PERSONAS = [
  {
    id: "dr_sen",
    name: "Dr. Arundhati Sen",
    role: "Stratigrapher & Field Archaeologist",
    domain: "archeology",
    avatar: "🏛️",
    badge: "Field Lead",
    color: "from-amber-700 to-amber-900",
    specialty: "Excavation, C14/OSL Dating, GPR sub-surface scanning & Geo-spatial GIS"
  },
  {
    id: "acharya_varaha",
    name: "Acharya Varahamihira",
    role: "Archaeo-Astronomer & Mathematician",
    domain: "astronomy",
    avatar: "🌌",
    badge: "Ephemeris Calc",
    color: "from-indigo-700 to-blue-900",
    specialty: "Precession of Equinoxes, 27 Nakshatras, Surya Siddhanta & Retrograde Alignments"
  },
  {
    id: "prof_epigraphicus",
    name: "Prof. M. Epigraphicus",
    role: "Epigraphist & Paleographer",
    domain: "epigraphy",
    avatar: "📜",
    badge: "Script Decipherer",
    color: "from-emerald-700 to-teal-900",
    specialty: "Brahmi, Indus Glyphs, Kharosthi, Grantha, Sharada & Paleographic Epochs"
  },
  {
    id: "shilpa_vidwan",
    name: "Shilpa Ratna Vidwan",
    role: "Iconographer & Temple Architect",
    domain: "iconography",
    avatar: "🗿",
    badge: "Murti Vijnana",
    color: "from-orange-700 to-red-900",
    specialty: "Shilpa Shastras, Talamana (120 Angula canon), Mudras, Asanas & Vastu Purusha"
  },
  {
    id: "dr_shastri",
    name: "Dr. Kedar Shastri",
    role: "Scriptural Hermeneuticist",
    domain: "scriptures",
    avatar: "🪷",
    badge: "Vedic Philology",
    color: "from-purple-700 to-slate-900",
    specialty: "Vedas, Upanishads, Puranas, Astronomical verses in Shrutis/Smritis"
  },
  {
    id: "er_swaminathan",
    name: "Er. Maya Swaminathan",
    role: "Archaeometry & Sensor Lead",
    domain: "sensors",
    avatar: "📡",
    badge: "Sensor Telemetry",
    color: "from-cyan-700 to-blue-950",
    specialty: "LiDAR 3D, Hyperspectral UV-NIR, RTI Grazing Light, Archaeo-Acoustics"
  }
];

const SEARCH_CATEGORIES = [
  "All Subjects",
  "Scriptures & Sutras",
  "Scholars & YouTubers",
  "Temple Architecture",
  "Archaeo-Science",
  "Deities & Iconography",
  "Historical Sovereigns"
];

interface AgenticLabProps {
  onNavigateToMagazine?: () => void;
}

export default function AgenticLab({ onNavigateToMagazine }: AgenticLabProps = {}) {
  // Query & Mode States
  const [topic, setTopic] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Subjects");
  const [inputMode, setInputMode] = useState<"text" | "voice" | "image">("text");
  
  // Voice Dictation State
  const [isListening, setIsListening] = useState(false);
  const [audioTranscript, setAudioTranscript] = useState("");

  // Image Scan Upload State
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Multi-Agent Domain & Research States
  const [selectedDomains, setSelectedDomains] = useState<string[]>([
    "archeology", "astronomy", "epigraphy", "iconography", "scriptures", "sensors"
  ]);
  const [period, setPeriod] = useState("Vedic to Medieval");
  const [coordinates, setCoordinates] = useState("23.1765° N, 75.7885° E (Ujjain Meridian)");
  const [depth, setDepth] = useState<"standard" | "comprehensive" | "exhaustive">("comprehensive");
  const [loading, setLoading] = useState(false);

  // Results State
  const [activeConsoleTab, setActiveConsoleTab] = useState<"fetcher" | "multi_agent" | "citations" | "references">("fetcher");
  const [researchResult, setResearchResult] = useState<AgentResearchResult | null>(null);
  const [fetcherResult, setFetcherResult] = useState<AgenticFetcherResult | null>(null);

  // Audio Speech Reader State
  const [isPlayingSpeech, setIsPlayingSpeech] = useState(false);

  // Chat follow-up state
  const [chatInquiry, setChatInquiry] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: "user" | "agent"; text: string; agent?: string }[]>([]);

  // Toggle Voice Dictation via Web Speech API
  const startVoiceDictation = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert("Speech recognition is not supported in this browser. You can type your query in the search bar.");
      return;
    }
    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = "en-IN";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        setInputMode("voice");
      };
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setAudioTranscript(transcript);
        setTopic(prev => (prev ? prev + " " + transcript : transcript));
        setIsListening(false);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
      recognition.start();
    } catch (err) {
      console.error("Speech error:", err);
      setIsListening(false);
    }
  };

  // Image Upload Handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setInputMode("image");
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleDomain = (domain: string) => {
    if (selectedDomains.includes(domain)) {
      if (selectedDomains.length > 1) {
        setSelectedDomains(selectedDomains.filter(d => d !== domain));
      }
    } else {
      setSelectedDomains([...selectedDomains, domain]);
    }
  };

  // Run Agentic Online Fetcher & Multi-Agent Engine
  const handleRunAgenticFetch = async (queryTopic?: string) => {
    const targetTopic = queryTopic || topic || audioTranscript || "Sanatan Heritage & Archaeo-Science Overview";
    if (!targetTopic.trim() && !selectedImage) return;

    setLoading(true);
    setFetcherResult(null);

    try {
      // 1. Call Agentic Fetcher Endpoint
      const res = await fetch("/api/agentic-fetcher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: targetTopic,
          inputMode,
          imageBase64: selectedImage,
          audioTranscript,
          categoryFilter,
          searchDepth: depth,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setFetcherResult(data);
        setActiveConsoleTab("fetcher");
      } else {
        alert(data.error || "Failed to fetch online information.");
      }

      // 2. Also run multi-agent research council call in parallel
      const resAgent = await fetch("/api/agent-research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: targetTopic,
          domains: selectedDomains,
          depth,
          historicalPeriod: period,
          coordinates,
        }),
      });
      const dataAgent = await resAgent.json();
      if (resAgent.ok) {
        setResearchResult(dataAgent);
      }
    } catch (err: any) {
      console.error("Fetcher error:", err);
      alert("Error contacting the Granth agentic fetcher engine.");
    } finally {
      setLoading(false);
    }
  };

  // Text-To-Speech Reader for Research Output
  const toggleSpeechReader = (text: string) => {
    if ("speechSynthesis" in window) {
      if (isPlayingSpeech) {
        window.speechSynthesis.cancel();
        setIsPlayingSpeech(false);
      } else {
        try {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text.slice(0, 500));
          utterance.lang = "en-IN";
          utterance.rate = 0.9;
          utterance.onstart = () => setIsPlayingSpeech(true);
          utterance.onend = () => setIsPlayingSpeech(false);
          utterance.onerror = () => setIsPlayingSpeech(false);
          window.speechSynthesis.speak(utterance);
        } catch (_) {
          setIsPlayingSpeech(false);
        }
      }
    }
  };

  const handleAskAgentFollowUp = async () => {
    if (!chatInquiry.trim()) return;
    const userMsg = chatInquiry;
    setChatInquiry("");
    setChatHistory(prev => [...prev, { role: "user", text: userMsg }]);
    setChatLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          context: {
            topic: fetcherResult?.identifiedSubject || topic,
            executiveSummary: fetcherResult?.executiveSummary || researchResult?.executiveSummary,
            keyPublicFacts: fetcherResult?.keyPublicFacts,
            citations: fetcherResult?.scripturalCitations,
          },
          agentPersona: "Multi-Agent Research Council & Agentic Fetcher",
        }),
      });
      const data = await res.json();
      if (res.ok && data.answer) {
        setChatHistory(prev => [...prev, { role: "agent", text: data.answer, agent: "Agentic Fetcher" }]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8 text-stone-100">
      
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-[#1e1713] via-[#241a14] to-[#16120f] border border-amber-900/40 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold mb-3">
              <Bot className="w-3.5 h-3.5 text-amber-400" />
              <span>AGENTIC AI ONLINE INFORMATION FETCHER & MULTIMODAL HUB</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#fdf4e3]">
              Agentic AI Public Information Fetcher (सर्वज्ञान-अन्वेषी)
            </h1>
            <p className="text-sm md:text-base text-stone-300 font-sans max-w-3xl mt-2 leading-relaxed">
              Fetch, cross-verify, and synthesize publicly available online information across scriptures, contemporary scholars (Praveen Mohan, Nilesh Oak, Hyper Quest, Nityananda Misra, Jagadguru Kaushalendra, Astro by Vivek), archaeo-astronomy, and temple architecture.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono bg-black/40 p-4 rounded-2xl border border-amber-900/40">
            <div className="px-3 py-2 bg-stone-900/60 rounded-xl border border-stone-800">
              <div className="text-xl font-bold text-amber-400">Voice</div>
              <div className="text-[10px] text-stone-400 uppercase">Mic Dictate</div>
            </div>
            <div className="px-3 py-2 bg-stone-900/60 rounded-xl border border-stone-800">
              <div className="text-xl font-bold text-emerald-400">Vision</div>
              <div className="text-[10px] text-stone-400 uppercase">Image Scan</div>
            </div>
            <div className="px-3 py-2 bg-stone-900/60 rounded-xl border border-stone-800">
              <div className="text-xl font-bold text-cyan-400">Multi</div>
              <div className="text-[10px] text-stone-400 uppercase">Agent AI</div>
            </div>
          </div>
        </div>

        {/* 6 Agent Personas */}
        <div className="mt-8 pt-6 border-t border-amber-900/30 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {AGENT_PERSONAS.map((agent) => (
            <div 
              key={agent.id}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-950/60 border border-stone-800/80 hover:border-amber-500/40 transition-colors"
            >
              <div className="text-2xl">{agent.avatar}</div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-stone-200 truncate">{agent.name}</div>
                <div className="text-[10px] text-amber-400/90 truncate font-mono">{agent.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Multi-Modal Fetcher Console */}
      <div className="bg-[#fcf7ec] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e2cfb0] pb-4">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-amber-800" />
            <h2 className="text-lg font-bold font-serif uppercase tracking-wider text-amber-950">
              Agentic Multi-Modal Information Fetcher
            </h2>
          </div>
          
          {/* Category Filter Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-stone-600">Category:</span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="p-2 bg-[#f4e6d0] border border-amber-800/40 rounded-xl text-xs font-serif font-bold text-amber-950 outline-none focus:border-amber-800 cursor-pointer"
            >
              {SEARCH_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Input Bar with Search, Voice Dictation & Image Upload */}
        <div className="space-y-4">
          <div className="relative flex flex-col md:flex-row items-stretch gap-3">
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Search or mention any subject, scripture title, scholar name (Praveen Mohan, Hyper Quest, Nilesh Oak, Nityananda Misra), temple site, or astronomical event..."
              rows={3}
              className="w-full bg-[#f6eee0] border-2 border-[#caa87a] rounded-2xl p-4 text-stone-900 font-serif text-base focus:ring-2 focus:ring-amber-700/50 focus:border-amber-700 outline-none resize-none shadow-inner placeholder:text-stone-400 placeholder:italic"
            />
          </div>

          {/* Controls: Voice, Image Upload & Search Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <div className="flex items-center gap-3 flex-wrap">
              {/* Voice Dictation Button */}
              <button
                onClick={startVoiceDictation}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-serif font-bold transition-all cursor-pointer border ${
                  isListening
                    ? "bg-red-700 text-white border-red-500 animate-pulse"
                    : "bg-[#eee1cd] text-amber-950 border-[#c4a982] hover:bg-[#e4d4bd]"
                }`}
              >
                {isListening ? <MicOff className="w-4 h-4 text-white" /> : <Mic className="w-4 h-4 text-red-600" />}
                <span>{isListening ? "Listening Voice..." : "Voice Dictate"}</span>
              </button>

              {/* Image Upload Button */}
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#eee1cd] hover:bg-[#e4d4bd] border border-[#c4a982] text-xs font-serif font-bold text-amber-950 transition-all cursor-pointer"
              >
                <ImageIcon className="w-4 h-4 text-amber-700" />
                <span>Upload Image / Scan</span>
              </button>

              {/* Show selected image preview chip */}
              {selectedImage && (
                <div className="flex items-center gap-2 p-1.5 pl-3 rounded-xl bg-amber-900 text-amber-100 text-xs font-mono">
                  <span>Image Loaded</span>
                  <button onClick={() => setSelectedImage(null)} className="p-1 hover:text-red-300">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Launch Fetch Button */}
            <button
              onClick={() => handleRunAgenticFetch()}
              disabled={loading || (!topic.trim() && !selectedImage && !audioTranscript)}
              className="px-6 py-3 bg-gradient-to-r from-amber-800 via-orange-800 to-amber-900 text-white rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:shadow-orange-950/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Agentic Fetcher Querying Online Data...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span>Fetch Online Public Info & Synthesize</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Preset Topic Quick Suggestions */}
        <div className="pt-4 border-t border-[#e6d4b9] space-y-2">
          <div className="text-xs font-bold font-serif uppercase tracking-wider text-amber-900">
            Quick Research Topics & Scholar Investigations:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {PRESET_RESEARCH_TOPICS.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setTopic(preset.topic);
                  handleRunAgenticFetch(preset.topic);
                }}
                className="p-3 rounded-xl bg-[#f2e6d2] hover:bg-[#e7d8c0] border border-[#d6bf9d] text-left transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between text-xs font-bold font-serif text-amber-950 group-hover:text-amber-800">
                  <span className="truncate">{preset.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                </div>
                <div className="text-[11px] font-mono text-stone-600 mt-1 truncate">
                  {preset.period}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RESULTS DISPLAY CONSOLE */}
      {fetcherResult && (
        <div className="bg-[#181310] border border-amber-900/60 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl text-stone-100">
          
          {/* Header Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-stone-800 pb-6">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-200">
                  {fetcherResult.identifiedSubject}
                </h2>
                <span className="text-xs font-mono px-3 py-1 bg-amber-950 text-amber-300 border border-amber-800 rounded-xl">
                  {fetcherResult.category}
                </span>
              </div>
              <p className="text-xs font-mono text-stone-400 mt-1 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{fetcherResult.geolocationAndTimeline.locationName}</span>
                <span aria-hidden="true">·</span>
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{fetcherResult.geolocationAndTimeline.epochOrPeriod}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleSpeechReader(fetcherResult.executiveSummary)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                  isPlayingSpeech
                    ? "bg-amber-950 text-amber-300 border-amber-500 shadow-md"
                    : "bg-stone-900 text-stone-300 border-stone-800 hover:text-white"
                }`}
              >
                {isPlayingSpeech ? <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
                <span>{isPlayingSpeech ? "Reading Aloud..." : "Read Research Aloud"}</span>
              </button>

              <div className="px-3.5 py-2 rounded-xl bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 font-mono text-xs font-bold">
                Confidence: {fetcherResult.confidenceScore}%
              </div>
            </div>
          </div>

          {/* Console Segmented Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-[#120f0c] border border-stone-800 rounded-2xl overflow-x-auto">
            {[
              { id: "fetcher", label: "Executive Synthesis & Facts", icon: FileText },
              { id: "multi_agent", label: "Multi-Agent Perspectives", icon: Bot },
              { id: "citations", label: "Scriptural Citations", icon: BookOpen },
              { id: "references", label: "Verified Public References", icon: Globe }
            ].map((ct) => {
              const Icon = ct.icon;
              const isActive = activeConsoleTab === ct.id;
              return (
                <button
                  key={ct.id}
                  onClick={() => setActiveConsoleTab(ct.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-amber-900 text-amber-100 border border-amber-600 shadow-md"
                      : "text-stone-400 hover:text-stone-200"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-300" : "text-stone-500"}`} />
                  <span>{ct.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: EXECUTIVE SYNTHESIS & FACTS */}
          {activeConsoleTab === "fetcher" && (
            <div className="space-y-6 text-xs font-sans">
              <div className="p-5 bg-[#140f0c] border border-stone-800 rounded-2xl space-y-2">
                <span className="text-amber-400 font-serif font-bold text-sm block">Executive Agentic Synthesis</span>
                <p className="text-stone-200 text-sm leading-relaxed font-sans">
                  {fetcherResult.executiveSummary}
                </p>
              </div>

              <div className="p-5 bg-[#140f0c] border border-stone-800 rounded-2xl space-y-3">
                <span className="text-emerald-400 font-serif font-bold text-sm block">Verified Public Knowledge Statements</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {fetcherResult.keyPublicFacts.map((fact, idx) => (
                    <div key={idx} className="p-3 bg-[#1c1611] border border-stone-800 rounded-xl flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-stone-300 leading-relaxed">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-[#1b1510] border border-amber-900/40 rounded-2xl space-y-2">
                <span className="text-purple-400 font-serif font-bold text-sm block">Historical & Textual Lineage Context</span>
                <p className="text-stone-300 leading-relaxed italic">
                  {fetcherResult.historicalContext}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: MULTI-AGENT PERSPECTIVES */}
          {activeConsoleTab === "multi_agent" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              {fetcherResult.multiAgentPerspectives.map((ap, idx) => (
                <div key={idx} className="p-5 bg-[#140f0c] border border-stone-800 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-amber-300 text-sm">{ap.agentName}</span>
                    <span className="text-[10px] font-mono text-stone-400 px-2 py-0.5 bg-[#1c1611] rounded-md">{ap.role}</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed">{ap.insight}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: SCRIPTURAL CITATIONS */}
          {activeConsoleTab === "citations" && (
            <div className="space-y-4 text-xs font-sans">
              {fetcherResult.scripturalCitations.map((sc, idx) => (
                <div key={idx} className="p-5 bg-[#140f0c] border border-stone-800 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-amber-300 text-sm">{sc.textName} {sc.chapterVerse && `(${sc.chapterVerse})`}</span>
                  </div>
                  <p className="text-base font-serif font-bold text-amber-100 leading-relaxed">{sc.devanagari}</p>
                  <p className="font-mono text-amber-400/80 italic">{sc.transliteration}</p>
                  <p className="text-stone-300 leading-relaxed">{sc.englishMeaning}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: VERIFIED PUBLIC REFERENCES */}
          {activeConsoleTab === "references" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              {fetcherResult.verifiedPublicReferences.map((ref, idx) => (
                <div key={idx} className="p-5 bg-[#140f0c] border border-stone-800 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-amber-300 text-sm">{ref.title}</span>
                    <span className="text-[10px] font-mono text-sky-400 px-2 py-0.5 bg-[#101726] border border-sky-900 rounded-md">{ref.sourceType}</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed">{ref.snippet}</p>
                  {ref.urlOrCitation && (
                    <div className="pt-2 text-[10px] font-mono text-stone-400 truncate">
                      Citation: <span className="text-amber-400">{ref.urlOrCitation}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Follow-up Interactive Agent Council Chat */}
      <div className="p-6 bg-[#16120e] border border-stone-800 rounded-3xl space-y-4">
        <div className="flex items-center gap-2 text-sm font-serif font-bold text-amber-300">
          <MessageSquareQuote className="w-4 h-4 text-amber-400" />
          <span>Interactive Follow-up Inquiry with the Agentic Fetcher Council</span>
        </div>

        <div className="space-y-3 max-h-60 overflow-y-auto scrollbar-thin p-3 bg-[#100d0a] border border-stone-800/80 rounded-2xl">
          {chatHistory.length === 0 ? (
            <p className="text-xs text-stone-500 italic">
              Ask follow-up questions about the fetched research data, manuscript sources, or astronomical dates...
            </p>
          ) : (
            chatHistory.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl text-xs font-sans space-y-1 ${
                  msg.role === "user"
                    ? "bg-amber-950/60 border border-amber-800/40 text-amber-100 ml-6"
                    : "bg-[#1c1611] border border-stone-800 text-stone-200 mr-6"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                  <span>{msg.role === "user" ? "Your Inquiry" : msg.agent || "Agentic Council"}</span>
                </div>
                <p className="leading-relaxed">{msg.text}</p>
              </div>
            ))
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={chatInquiry}
            onChange={(e) => setChatInquiry(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAskAgentFollowUp()}
            placeholder="Ask follow-up clarification on this fetched research..."
            className="flex-1 p-3 bg-[#120f0c] border border-stone-700 rounded-xl text-xs text-stone-200 placeholder:text-stone-500 outline-none focus:border-amber-500"
          />
          <button
            onClick={handleAskAgentFollowUp}
            disabled={chatLoading || !chatInquiry.trim()}
            className="px-4 py-3 bg-amber-900 hover:bg-amber-800 text-amber-100 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
          >
            {chatLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            <span>Ask</span>
          </button>
        </div>
      </div>
    </div>
  );
}
