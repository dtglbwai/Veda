import React, { useState, useMemo } from "react";
import {
  BookOpen,
  Search,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Video,
  ExternalLink,
  ChevronRight,
  Info,
  Award,
  Zap,
  Volume2,
  Clock,
  Layers,
  Map,
  Compass
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

// ---------------------------------------------------------------------------
// DATA STRUCTURES
// ---------------------------------------------------------------------------

interface Misconception {
  id: string;
  word: string;
  commonMyth: string;
  authenticFact: string;
  explanation: string;
  rootOrEtymology?: string;
  severity: "high" | "medium" | "low";
  category: "naming" | "grammar" | "translation" | "stotra";
}

interface StotraCorrection {
  id: string;
  stotra: string;
  verse: string;
  commonError: string;
  correction: string;
  meaningChange: string;
  philologicalNote: string;
}

interface KumbhaResearch {
  id: string;
  topic: string;
  popularView: string;
  criticalFinding: string;
  sourceText: string;
}

// ---------------------------------------------------------------------------
// DATA CORPUS (Based on Nityananda Misra's Research)
// ---------------------------------------------------------------------------

const SANSKRIT_MISCONCEPTIONS: Misconception[] = [
  {
    id: "mis-1",
    word: "Ananya (अनन्य)",
    commonMyth: "It is an auspicious Sanskrit name for girls meaning 'unique'.",
    authenticFact: "In Sanskrit, it is a masculine adjective or a pronoun meaning 'not another' or 'having no other'.",
    explanation: "While often given to girls today, grammatically it is masculine in its primary form. For a feminine name, it should technically be 'Ananyā' (अनन्या). As a standalone name, it usually refers to devotion (having no other object of worship).",
    rootOrEtymology: "न + अन्य (Na + Anya)",
    severity: "medium",
    category: "naming"
  },
  {
    id: "mis-2",
    word: "Myra (मायरा)",
    commonMyth: "It is a Sanskrit name meaning 'beloved' or 'sweet'.",
    authenticFact: "Myra is not a Sanskrit name and has no root in Sanskrit literature or grammar.",
    explanation: "This is a modern 'pseudo-Sanskrit' coinage. It may have origins in Greek or other languages, but it is not part of the Sanskrit onomastic tradition.",
    severity: "high",
    category: "naming"
  },
  {
    id: "mis-3",
    word: "Vedant (वेदान्त)",
    commonMyth: "Spelled as 'Vedant' in English as a masculine name.",
    authenticFact: "The correct Sanskrit form is 'Vedānta' (वेदान्तः) with a terminal 'a' and visarga.",
    explanation: "Schwa-deletion in modern Indian languages (Hindi/Marathi) leads to 'Vedant', but in Sanskrit, the word is 'Vedānta'. Dropping the 'a' changes the structure of the word in classical grammar.",
    rootOrEtymology: "वेद + अन्त (Veda + Anta)",
    severity: "low",
    category: "grammar"
  },
  {
    id: "mis-4",
    word: "Saubhagyavati (सौभाग्यवती)",
    commonMyth: "Commonly used in wedding cards to mean 'fortunate'.",
    authenticFact: "In traditional Sanskrit literature, it is often used for a woman whose husband is alive (Sadhava).",
    explanation: "Nityananda Misra points out that while the literal meaning is 'fortunate', the specific usage in traditional contexts is very precise regarding marital status.",
    severity: "low",
    category: "grammar"
  },
  {
    id: "mis-5",
    word: "Shri Guru Charana Saroja Raja",
    commonMyth: "'Raja' here means 'King' (as in King of Lotus Feet).",
    authenticFact: "'Raja' (रजः) here means 'Dust'.",
    explanation: "In the first couplet of Hanuman Chalisa, 'Raja' refers to the dust of the Guru's lotus feet, which the devotee uses to purify the mirror of their mind. It is not 'Rājā' (King).",
    category: "stotra",
    severity: "high"
  }
];

const STOTRA_CORRECTIONS: StotraCorrection[] = [
  {
    id: "hc-1",
    stotra: "Hanuman Chalisa",
    verse: "Shri Guru Charana Saroja Raja, Nija Manu Mukuru Sudhari",
    commonError: "Misinterpreting 'Raja' as King and 'Sudhari' as 'to improve'.",
    correction: "'Raja' is Dust (रजः). 'Sudhari' (सुधारि) means 'Having cleansed/purified'.",
    meaningChange: "The devotee cleanses the mirror of the soul with the dust of the Guru's feet, not 'improves' it with a king.",
    philologicalNote: "Classical Awadhi usage where terminal 'i' denotes a completed action (Lyabanta-like)."
  },
  {
    id: "hc-2",
    stotra: "Hanuman Chalisa",
    verse: "Yuga Sahasra Yojana Para Bhanu",
    commonError: "Taking the numbers literally without understanding the units.",
    correction: "Yuga (12,000) * Sahasra (1,000) * Yojana (8 miles) = ~96 million miles.",
    meaningChange: "This accurately reflects the average distance between the Earth and the Sun (~93-96 million miles).",
    philologicalNote: "Corresponds to calculations in the Surya Siddhanta and other astronomical texts."
  }
];

const KUMBHA_RESEARCH: KumbhaResearch[] = [
  {
    id: "k-1",
    topic: "Number of Kumbha Locations",
    popularView: "Kumbha Mela only happens in 4 places (Haridwar, Prayag, Ujjain, Nashik).",
    criticalFinding: "Scriptural evidence (Skanda Purana etc.) suggests Kumbha occurs in many more sacred locations including Kurukshetra and even parts of South India.",
    sourceText: "Nityananda Misra's 'Kumbha: The Traditionally Modern Mela' provides extensive citations from Puranas."
  }
];

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------

export default function NityanandaMisraLab() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"misconceptions" | "stotra_lab" | "kumbha" | "sunama">("misconceptions");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMisconceptions = useMemo(() => {
    return SANSKRIT_MISCONCEPTIONS.filter(m => 
      m.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.commonMyth.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 text-stone-100">
      
      {/* Header Section */}
      <div className="mb-10 p-8 bg-gradient-to-br from-[#1e140d] via-[#2d1b0f] to-[#1a110a] border-2 border-amber-800/40 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-900 border border-amber-400/50 flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-amber-200" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black font-serif tracking-tight text-white">
                  Nityānanda Miśra Research Lab
                </h1>
                <p className="text-amber-400 font-hindi text-lg">नित्यानन्द मिश्र विद्वत्-शाला</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-stone-300 font-sans max-w-2xl leading-relaxed">
              An interactive space dedicated to the critical research of scholar Nityananda Misra. 
              Correcting Sanskrit misconceptions, auditing stotras, and exploring authentic naming traditions based on Paninian grammar and scriptural evidence.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-900/30 border border-amber-800/60 text-[11px] font-mono text-amber-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Paninian Authenticity</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-800/60 text-[11px] font-mono text-emerald-200">
                <Zap className="w-3.5 h-3.5" />
                <span>Misconception Buster</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col gap-3">
            <a 
              href="https://youtube.com/@NityanandaMisra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-red-950/40 hover:bg-red-900/60 border border-red-700/60 text-xs font-bold text-red-200 transition-all shadow-lg hover:scale-105"
            >
              <Video className="w-4 h-4" />
              <span>YouTube Channel</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-60" />
            </a>
            <a 
              href="https://facebook.com/nityanand.misra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-950/40 hover:bg-blue-900/60 border border-blue-700/60 text-xs font-bold text-blue-200 transition-all shadow-lg hover:scale-105"
            >
              <Compass className="w-4 h-4" />
              <span>Facebook Page</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-60" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-8 flex flex-wrap items-center gap-3 p-1.5 bg-[#17120e] rounded-2xl border border-stone-800 shadow-inner">
        {[
          { id: "misconceptions", label: "Misconception Buster", icon: Zap, desc: "Myth vs Fact" },
          { id: "stotra_lab", label: "Stotra Correction Lab", icon: Volume2, desc: "Hanuman Chalisa Audit" },
          { id: "sunama", label: "Sunāma Names", icon: Sparkles, desc: "Authentic Naming" },
          { id: "kumbha", label: "Kumbha Research", icon: Map, desc: "History & Geography" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 min-w-[160px] p-4 rounded-xl transition-all flex flex-col items-center gap-1 cursor-pointer border ${
              activeTab === tab.id
                ? "bg-gradient-to-b from-amber-800/80 to-amber-950/90 text-amber-100 border-amber-600/60 shadow-lg ring-1 ring-amber-500/20"
                : "bg-transparent text-stone-500 hover:text-stone-300 border-transparent hover:bg-stone-900/40"
            }`}
          >
            <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? "text-amber-300" : "text-stone-600"}`} />
            <span className="text-xs font-serif font-bold uppercase tracking-wider">{tab.label}</span>
            <span className="text-[10px] opacity-60">{tab.desc}</span>
          </button>
        ))}
      </div>

      {/* Tab Content Area */}
      <div className="min-h-[500px]">
        <AnimatePresence mode="wait">
          
          {/* TAB: MISCONCEPTIONS */}
          {activeTab === "misconceptions" && (
            <motion.div
              key="misconceptions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-900/20 border border-amber-800/40">
                    <Zap className="w-5 h-5 text-amber-400" />
                  </div>
                  <h2 className="text-xl font-serif font-bold text-amber-100">Sanskrit Bhrama-Nirāsa (Buster)</h2>
                </div>
                
                <div className="relative w-full md:w-64">
                  <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Search misconceptions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-stone-900/60 border border-stone-800 rounded-xl pl-10 pr-4 py-2 text-sm focus:border-amber-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMisconceptions.map((m) => (
                  <div 
                    key={m.id}
                    className="bg-[#1a1511] border border-stone-800 rounded-3xl overflow-hidden hover:border-amber-900/60 transition-all group"
                  >
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-serif font-bold text-amber-200">{m.word}</span>
                        <div className={`px-2 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest ${
                          m.severity === "high" ? "bg-red-950 text-red-400 border border-red-900" :
                          m.severity === "medium" ? "bg-amber-950 text-amber-400 border border-amber-900" :
                          "bg-blue-950 text-blue-400 border border-blue-900"
                        }`}>
                          {m.category}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] font-mono uppercase text-red-400 block mb-1">Common Myth</span>
                            <p className="text-sm text-stone-400">{m.commonMyth}</p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">Authentic Fact</span>
                            <p className="text-sm text-emerald-100 font-medium">{m.authenticFact}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-stone-900/40 rounded-2xl border border-stone-800/60 space-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-amber-500">
                          <Info className="w-3 h-3" />
                          <span>Detailed Explanation</span>
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed italic">
                          {m.explanation}
                        </p>
                        {m.rootOrEtymology && (
                          <div className="pt-2 border-t border-stone-800 flex items-center gap-2">
                            <span className="text-[10px] font-mono text-stone-500">Root:</span>
                            <span className="text-[11px] font-hindi text-amber-400">{m.rootOrEtymology}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="px-6 py-3 bg-[#130f0c] border-t border-stone-800 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Scholar Reference</span>
                      <Award className="w-4 h-4 text-amber-600" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB: STOTRA LAB */}
          {activeTab === "stotra_lab" && (
            <motion.div
              key="stotra_lab"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="p-6 bg-amber-950/20 border border-amber-800/40 rounded-3xl flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-amber-900/30 border border-amber-600/40 flex items-center justify-center shrink-0">
                  <Volume2 className="w-10 h-10 text-amber-400" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-serif font-bold text-amber-100">Hanuman Chalisa Correction Lab</h2>
                  <p className="text-sm text-stone-400 font-sans leading-relaxed">
                    Based on Nityananda Misra's critical edition and philological analysis of Tulsidas' Awadhi masterpiece. 
                    Correcting deep-rooted errors in pronunciation and semantic understanding.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {STOTRA_CORRECTIONS.map((c) => (
                  <div 
                    key={c.id}
                    className="p-8 bg-[#1a1511] border border-stone-800 rounded-3xl space-y-6 shadow-xl"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500">Verse Segment</span>
                        <h3 className="text-xl font-serif font-bold italic text-white">"{c.verse}"</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1 rounded-full bg-stone-900 border border-stone-700 text-[10px] font-mono text-stone-400">
                          AWADHI PHILOLOGY
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs font-mono uppercase text-red-400">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>Common Misunderstanding</span>
                          </div>
                          <p className="text-sm text-stone-400 bg-red-950/10 p-4 rounded-2xl border border-red-900/30">
                            {c.commonError}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Authentic Correction</span>
                          </div>
                          <p className="text-sm text-emerald-100 bg-emerald-950/10 p-4 rounded-2xl border border-emerald-900/30 font-medium">
                            {c.correction}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-5 bg-stone-900/60 rounded-3xl border border-stone-800 space-y-3">
                          <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-amber-500">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Impact on Meaning</span>
                          </div>
                          <p className="text-sm text-stone-200 leading-relaxed">
                            {c.meaningChange}
                          </p>
                          <div className="pt-3 border-t border-stone-800">
                            <p className="text-[11px] text-stone-500 italic font-sans">
                              <span className="font-bold text-stone-400 uppercase mr-1">Note:</span>
                              {c.philologicalNote}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB: KUMBHA */}
          {activeTab === "kumbha" && (
            <motion.div
              key="kumbha"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <div className="p-8 bg-gradient-to-br from-[#1e1a15] to-[#120e0a] border border-amber-900/40 rounded-[2rem] space-y-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Map className="w-6 h-6 text-amber-400" />
                        <h2 className="text-2xl font-serif font-bold text-amber-100 uppercase tracking-tight">Kumbha Chronology Research</h2>
                      </div>
                      <p className="text-sm text-stone-400 leading-relaxed font-sans">
                        Misra's research challenges the static '4-place' narrative of Kumbha Mela using historical records, astronomical data, and Puranic exegesis.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {KUMBHA_RESEARCH.map((k) => (
                        <div key={k.id} className="p-6 bg-[#17120e] border border-stone-800 rounded-3xl space-y-4">
                          <h3 className="text-lg font-serif font-bold text-amber-300">{k.topic}</h3>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Popular View</span>
                              <p className="text-xs text-stone-400 italic">"{k.popularView}"</p>
                            </div>
                            <div className="space-y-2">
                              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">Critical Finding</span>
                              <p className="text-xs text-amber-100 font-medium">{k.criticalFinding}</p>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-stone-800 flex items-center gap-2">
                            <HelpCircle className="w-3.5 h-3.5 text-stone-500" />
                            <span className="text-[11px] text-stone-500 font-mono italic">Source: {k.sourceText}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-stone-900/60 border border-stone-800 rounded-3xl space-y-4">
                    <h3 className="text-sm font-serif font-bold text-amber-200 uppercase tracking-wider">Historical Timeline</h3>
                    <div className="space-y-4">
                      {[
                        { period: "Puranic", event: "Nectar distribution at 4+ locations" },
                        { period: "7th Century", event: "Xuanzang mentions the assembly at Prayag" },
                        { period: "Modern Era", event: "Institutionalization of the 4-location cycle" },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-2 h-2 rounded-full bg-amber-600" />
                            <div className="w-0.5 h-full bg-stone-800" />
                          </div>
                          <div className="pb-4">
                            <span className="text-[10px] font-mono text-amber-500 uppercase">{item.period}</span>
                            <p className="text-xs text-stone-300">{item.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-[#1a110a] border border-amber-900/30 rounded-3xl space-y-4">
                    <h3 className="text-sm font-serif font-bold text-amber-200">Recommended Reading</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-stone-900/40 rounded-xl border border-stone-800 group hover:border-amber-700/50 transition-colors cursor-pointer">
                        <h4 className="text-xs font-bold text-stone-200 group-hover:text-amber-300">Kumbha: The Traditionally Modern Mela</h4>
                        <p className="text-[10px] text-stone-500 mt-1">Comprehensive historical & scriptural survey.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: SUNAMA */}
          {activeTab === "sunama" && (
            <motion.div
              key="sunama"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-[#181310] border border-stone-800 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <Sparkles className="w-32 h-32 text-amber-500" />
                </div>
                
                <div className="space-y-4 relative z-10 max-w-2xl">
                  <h2 className="text-3xl font-serif font-bold text-white">Sunāma: Authentic Sanskrit Names</h2>
                  <p className="text-stone-300 leading-relaxed font-sans">
                    Nityananda Misra's seminal work on naming provides thousands of authentic names derived from Puranas, Vedas, and Sanskrit roots. 
                    This module connects his grammatical rigor to our naming engine.
                  </p>
                  <div className="flex gap-4 pt-2">
                    <button className="px-6 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-lg flex items-center gap-2 cursor-pointer">
                      <span>Launch Sunāma Engine</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="shrink-0 relative z-10">
                  <div className="p-4 bg-stone-900/80 border border-stone-700 rounded-3xl shadow-2xl flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-amber-900/20 border border-amber-600/30 flex items-center justify-center">
                      <Award className="w-8 h-8 text-amber-400" />
                    </div>
                    <div className="text-center">
                      <span className="text-[10px] font-mono text-stone-500 block">Schoalrly Standard</span>
                      <span className="text-sm font-serif font-bold text-amber-200">Book of Sunāma</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Paninian Derivation", icon: Layers, desc: "Every name must be traceable to an authentic Dhatu (root) and Gana (class)." },
                  { title: "Scriptural Citation", icon: BookOpen, desc: "Evidence of the name in Ramayana, Mahabharata or major Puranas." },
                  { title: "Gender Precision", icon: HelpCircle, desc: "Maintaining the correct grammatical gender based on Sanskrit rules." }
                ].map((feature, i) => (
                  <div key={i} className="p-6 bg-[#1a1511] border border-stone-800 rounded-3xl space-y-3 hover:border-amber-900/40 transition-colors">
                    <feature.icon className="w-6 h-6 text-amber-500" />
                    <h3 className="text-base font-serif font-bold text-amber-100">{feature.title}</h3>
                    <p className="text-xs text-stone-400 leading-relaxed italic">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
}
