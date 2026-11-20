import React, { useState, useMemo } from "react";
import {
  BookOpen,
  Search,
  Sparkles,
  ShieldCheck,
  Flame,
  Award,
  Video,
  ExternalLink,
  ChevronRight,
  Info,
  Zap,
  MapPin,
  Heart,
  User,
  Compass,
  Star,
  Layers,
  History
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

// ---------------------------------------------------------------------------
// DATA STRUCTURES
// ---------------------------------------------------------------------------

interface PhilosophyPillar {
  id: string;
  term: string;
  meaning: string;
  explanation: string;
  scripturalContext: string;
}

interface ShastricInsight {
  id: string;
  topic: string;
  summary: string;
  source: string;
  application: string;
}

interface TraditionModule {
  id: string;
  title: string;
  description: string;
  importance: string;
  rituals: string[];
}

// ---------------------------------------------------------------------------
// DATA CORPUS (Based on Jagadguru Kaushalendra Prapannacharyaji's Teachings)
// ---------------------------------------------------------------------------

const VISHISHTADVAITA_PILLARS: PhilosophyPillar[] = [
  {
    id: "p-1",
    term: "Vishishtadvaita (विशिष्टाद्वैत)",
    meaning: "Qualified Non-Dualism",
    explanation: "The philosophy that Brahman (God) is the supreme reality, but is characterized by attributes (Viseshas). The individual souls (Chit) and the material world (Achit) are real and form the body of God.",
    scripturalContext: "Propounded by Adi Ramanujacharya, emphasizing that the universe is not an illusion (Maya) but a real manifestation of Brahman's glory."
  },
  {
    id: "p-2",
    term: "Prapatti (प्रपत्ति)",
    meaning: "Absolute Surrender (Saranagati)",
    explanation: "The highest form of devotion where the seeker completely surrenders to the will of Shriman Narayana, acknowledging total dependence on His grace for salvation.",
    scripturalContext: "The core path of the Shri Sampradaya, accessible to all regardless of caste or knowledge."
  },
  {
    id: "p-3",
    term: "Ubhaya Vedanta (उभय वेदान्त)",
    meaning: "Dual Vedanta",
    explanation: "The integration of Sanskrit Upanishads and the Tamil Divya Prabandham (composed by the Alvars). Both are considered equally authoritative revelations.",
    scripturalContext: "A hallmark of the Ramanuja tradition, blending Vedic rigor with the intense emotional devotion of the Alvars."
  }
];

const SHASTRIC_INSIGHTS: ShastricInsight[] = [
  {
    id: "si-1",
    topic: "The Glory of Ayodhya",
    summary: "Ayodhya is not just a city but the very 'Mokshadayini' (giver of liberation). Its spiritual geometry is mapped to the cosmic body of Vishnu.",
    source: "Skanda Purana & Valmiki Ramayana",
    application: "Understanding the spiritual necessity of the Ram Janmabhoomi and its significance in Sanatan history."
  },
  {
    id: "si-2",
    topic: "Divinity of Sri Rama",
    summary: "Rama is 'Maryada Purushottama'—the supreme being who defines the limits of righteous conduct. His exile is a lesson in 'Tyaga' (sacrifice) for 'Dharma'.",
    source: "Ramcharitmanas & Valmiki Ramayana",
    application: "Implementing ethical leadership and familial harmony in modern life."
  },
  {
    id: "si-3",
    topic: "Significance of Tirunaman (Tilaka)",
    summary: "The Urdhva Pundra (vertical mark) represents the feet of Narayana, with the central red line (Shri Churna) representing Mahalaksmi. It is a protective shield for the practitioner.",
    source: "Agama Shastras",
    application: "Maintaining cultural identity and inviting divine protection through external symbols."
  }
];

const TRADITION_MODULES: TraditionModule[] = [
  {
    id: "tm-1",
    title: "Pancha Samskara (Samashrayanam)",
    description: "The five purificatory rites that initiate a seeker into the Shri Sampradaya.",
    importance: "It establishes a direct link between the disciple and the lineage (Guru Parampara) leading back to Ramanujacharya and Narayana.",
    rituals: [
      "Tapah (Branding of the shoulders with Shanka and Chakra)",
      "Pundra (Wearing the Tilaka)",
      "Nama (Receiving a spiritual name)",
      "Mantra (Initiation into the Ashtakshari Mantra)",
      "Yaga (Learning internal and external worship)"
    ]
  },
  {
    id: "tm-2",
    title: "The Alvar Tradition",
    description: "Study of the 12 poetic saints (Alvars) who submerged themselves in the nectar of Vishnu's love.",
    importance: "Their hymns, the Nalayira Divya Prabandham, provide the emotional and devotional foundation of the tradition.",
    rituals: ["Recitation of Tiruppavai", "Singing Divya Prabandham in Temples", "Celebrating Alvar Jayantis"]
  }
];

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------

export default function KaushalendraKrishnaLab() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"philosophy" | "shastras" | "tradition" | "discourses">("philosophy");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInsights = useMemo(() => {
    return SHASTRIC_INSIGHTS.filter(si => 
      si.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      si.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 text-stone-100 font-sans">
      
      {/* Dynamic Header */}
      <div className="mb-10 p-8 bg-gradient-to-br from-[#1e140d] via-[#2d1b0f] to-[#1a110a] border-2 border-amber-800/40 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-900 border border-amber-400/50 flex items-center justify-center shadow-lg">
                <Flame className="w-8 h-8 text-amber-200" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black font-serif tracking-tight text-white">
                  Jagadguru Kaushalendra Krishna Lab
                </h1>
                <p className="text-amber-400 font-hindi text-lg">जगद्गुरु कौशलेन्द्र कृष्ण विमर्श-शाला</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-stone-300 max-w-2xl leading-relaxed">
              Exploring the depths of **Shri Sampradaya**, **Vishishtadvaita philosophy**, and **Shastric exegesis** 
              under the guidance of Jagadguru Shri Kaushalendra Prapannacharyaji Maharaj. 
              Authentic insights into the Ramanuja tradition, Puranic wisdom, and devotional practices.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-900/30 border border-amber-800/60 text-[11px] font-mono text-amber-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Shri Sampradaya Authenticity</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-800/60 text-[11px] font-mono text-emerald-200">
                <Heart className="w-3.5 h-3.5" />
                <span>Bhakti & Prapatti Path</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col gap-3">
            <a 
              href="https://facebook.com/Kaushalendrakrishna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-950/40 hover:bg-blue-900/60 border border-blue-700/60 text-xs font-bold text-blue-200 transition-all shadow-lg hover:scale-105"
            >
              <Compass className="w-4 h-4" />
              <span>Official Facebook</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-60" />
            </a>
            <div className="p-4 bg-stone-900/80 border border-stone-700 rounded-2xl text-center">
              <span className="text-[10px] font-mono text-stone-500 block uppercase">Tradition Anchor</span>
              <span className="text-sm font-serif font-bold text-amber-200">Ramanujacharya Lineage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dock */}
      <div className="mb-8 flex flex-wrap items-center gap-3 p-1.5 bg-[#17120e] rounded-2xl border border-stone-800 shadow-inner">
        {[
          { id: "philosophy", label: "Vishishtadvaita", icon: Layers, desc: "Philosophy of Ramanuja" },
          { id: "shastras", label: "Shastric Insights", icon: BookOpen, desc: "Ramayana & Purana Exegesis" },
          { id: "tradition", label: "Shri Tradition", icon: Star, desc: "Rites & Samskaras" },
          { id: "discourses", label: "Vāṇī & Discourses", icon: Video, desc: "Wisdom Streams" },
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

      {/* Content Area */}
      <div className="min-h-[500px]">
        <AnimatePresence mode="wait">
          
          {/* TAB: PHILOSOPHY */}
          {activeTab === "philosophy" && (
            <motion.div
              key="philosophy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {VISHISHTADVAITA_PILLARS.map((p) => (
                  <div key={p.id} className="p-6 bg-[#1a1511] border border-stone-800 rounded-3xl space-y-4 hover:border-amber-900/60 transition-all shadow-xl group">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-serif font-bold text-amber-200">{p.term}</h3>
                      <Award className="w-5 h-5 text-amber-600 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase text-stone-500 block">Definition</span>
                      <p className="text-sm text-stone-300 italic">"{p.meaning}"</p>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed font-sans">
                      {p.explanation}
                    </p>
                    <div className="pt-3 border-t border-stone-800">
                      <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest block mb-1">Context</span>
                      <p className="text-[11px] text-stone-500 leading-relaxed italic">{p.scripturalContext}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tattva Traya Visual */}
              <div className="p-8 bg-stone-900/40 border border-stone-800 rounded-[2.5rem] flex flex-col items-center gap-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-white">The Tattva Traya (The Three Realities)</h3>
                  <p className="text-xs text-stone-500 font-mono">The Structural Core of Vishishtadvaita</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
                  {[
                    { label: "CIT (चित्)", desc: "The Sentient Souls (Individual Spirits)", color: "text-sky-400" },
                    { label: "ISVARA (ईश्वरः)", desc: "The Supreme Lord (The Whole / Organism)", color: "text-amber-400" },
                    { label: "ACIT (अचित्)", desc: "The In-Sentient Matter (Physical World)", color: "text-emerald-400" }
                  ].map((t, i) => (
                    <div key={i} className="p-5 bg-stone-950/60 border border-stone-800 rounded-2xl text-center space-y-2">
                      <span className={`text-xl font-black font-serif ${t.color}`}>{t.label}</span>
                      <p className="text-xs text-stone-400">{t.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-amber-950/10 border border-amber-900/30 rounded-2xl text-center max-w-2xl">
                  <p className="text-xs text-stone-300 font-sans italic">
                    "Just as the soul resides in the body, the Lord (Isvara) resides as the inner controller (Antaryami) within Cit and Acit. They are His attributes, His modes, and His body."
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: SHASTRAS */}
          {activeTab === "shastras" && (
            <motion.div
              key="shastras"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-serif font-bold text-amber-100 flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-amber-400" />
                  <span>Critical Shastric Discourses</span>
                </h2>
                <div className="relative w-full md:w-64">
                  <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Filter topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-stone-900/60 border border-stone-800 rounded-xl pl-10 pr-4 py-2 text-sm focus:border-amber-600 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {filteredInsights.map((si) => (
                  <div key={si.id} className="p-6 bg-[#1a1511] border border-stone-800 rounded-3xl hover:border-amber-900/40 transition-all flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3 space-y-3">
                      <div className="px-3 py-1 rounded-full bg-amber-950/30 border border-amber-900/40 w-fit text-[10px] font-mono text-amber-500 uppercase tracking-widest">Topic Focus</div>
                      <h3 className="text-xl font-serif font-bold text-white">{si.topic}</h3>
                      <div className="flex items-center gap-2 text-xs text-stone-500 font-mono italic">
                        <History className="w-3.5 h-3.5" />
                        <span>Source: {si.source}</span>
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 space-y-4">
                      <div className="p-4 bg-stone-900/60 rounded-2xl border border-stone-800">
                        <p className="text-sm text-stone-300 leading-relaxed font-sans">
                          {si.summary}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 text-xs">
                        <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-amber-300 uppercase block mb-1">Practical Application:</span>
                          <p className="text-stone-400 italic">{si.application}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB: TRADITION */}
          {activeTab === "tradition" && (
            <motion.div
              key="tradition"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TRADITION_MODULES.map((tm) => (
                  <div key={tm.id} className="p-8 bg-gradient-to-br from-[#1e1a15] to-[#120e0a] border border-amber-900/40 rounded-[2rem] space-y-6 shadow-2xl relative overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all" />
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Compass className="w-6 h-6 text-amber-400" />
                        <h2 className="text-2xl font-serif font-bold text-amber-100 uppercase tracking-tight">{tm.title}</h2>
                      </div>
                      <p className="text-sm text-stone-300 leading-relaxed font-sans">
                        {tm.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="p-5 bg-[#17120e] border border-stone-800 rounded-2xl space-y-3">
                        <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-amber-500">
                          <Info className="w-3.5 h-3.5" />
                          <span>Core Importance</span>
                        </div>
                        <p className="text-xs text-stone-400 italic leading-relaxed">
                          {tm.importance}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Key Elements / Rituals</span>
                        <div className="grid grid-cols-1 gap-2">
                          {tm.rituals.map((r, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-stone-900/40 border border-stone-800 rounded-xl group-hover:border-amber-900/40 transition-colors">
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                              <span className="text-xs text-stone-300">{r}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB: DISCOURSES */}
          {activeTab === "discourses" && (
            <motion.div
              key="discourses"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-10 bg-[#181310] border border-stone-800 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <Video className="w-32 h-32 text-blue-500" />
                </div>
                
                <div className="space-y-6 relative z-10 max-w-2xl">
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Wisdom Streams</h2>
                    <p className="text-amber-400 font-hindi text-xl">भगवत्-वाणी एवं प्रवचन</p>
                  </div>
                  <p className="text-stone-300 leading-relaxed font-sans text-sm md:text-base">
                    Daily discourses and Shastric vimarsha covering Ramayana, Shrimad Bhagavatam, and the Guru Parampara. 
                    Jagadguru Kaushalendra Prapannacharyaji's sessions bridge the gap between ancient Sanskrit wisdom and modern life challenges.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://facebook.com/Kaushalendrakrishna" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Watch Live on Facebook</span>
                    </a>
                  </div>
                </div>
                
                <div className="shrink-0 relative z-10">
                  <div className="p-6 bg-stone-950/80 border border-stone-700 rounded-[2rem] shadow-2xl flex flex-col items-center gap-4">
                    <div className="w-24 h-24 rounded-3xl bg-amber-900/20 border border-amber-600/30 flex items-center justify-center">
                      <Star className="w-12 h-12 text-amber-400" />
                    </div>
                    <div className="text-center">
                      <span className="text-[10px] font-mono text-stone-500 block uppercase tracking-widest">Discourse Archive</span>
                      <span className="text-lg font-serif font-bold text-amber-200">5000+ Hours</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Ramayana Vimarsha", icon: MapPin, desc: "Detailed spiritual geography and character analysis of the solar dynasty." },
                  { title: "Bhagavata Tattva", icon: Flame, desc: "The essence of Krishna Bhakti and the science of the 10 avataras." },
                  { title: "Modern Vairagya", icon: User, desc: "How to maintain spiritual detachment while fulfilling worldly duties." }
                ].map((feature, i) => (
                  <div key={i} className="p-6 bg-[#1a1511] border border-stone-800 rounded-3xl space-y-4 hover:border-amber-900/40 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-amber-100">{feature.title}</h3>
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
