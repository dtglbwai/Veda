import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Video, 
  Clock, 
  Award, 
  CheckCircle2, 
  Play,
  Info,
  Layers,
  Sparkles,
  ChevronRight
} from "lucide-react";

interface Lecture {
  id: number;
  title: string;
  duration: string;
  topics: string[];
}

export default function DarshanasStudio() {
  const [activeLecture, setActiveLecture] = useState<number>(1);

  const curriculum: Lecture[] = [
    {
      id: 1,
      title: "दार्शनिक पृष्ठभूमि एवं सामान्य परिचय (General Introduction to Darshana)",
      duration: "47 min",
      topics: ["What is Darshana?", "Distinction between Western philosophy and Indian Darshana", "Relevance to everyday life", "Indian civilization foundations"]
    },
    {
      id: 2,
      title: "सांख्य दर्शन (Sankhya Darshana)",
      duration: "39 min",
      topics: ["Purusha and Prakriti", "Dualistic philosophical systems", "24 Tattvas", "Evolution of the Universe"]
    },
    {
      id: 3,
      title: "योग दर्शन (Yoga Darshana)",
      duration: "42 min",
      topics: ["Maharshi Patanjali’s Yoga Sutras", "Chittavritti Nirodha", "Practical meditative paths", "Ashtanga Yoga"]
    },
    {
      id: 4,
      title: "न्याय दर्शन (Nyaya Darshana)",
      duration: "47 min",
      topics: ["Logic and Epistemology", "Pramanas (Means of valid knowledge)", "Systematic methodology of reaching truth", "Debate & Dialectics"]
    },
    {
      id: 5,
      title: "मीमांसा दर्शन (Mimamsa Darshana)",
      duration: "49 min",
      topics: ["Philosophical foundations of Vedic ritualism", "Language interpretation", "Dharma", "Action-oriented philosophy"]
    },
    {
      id: 6,
      title: "वैशेषिक दर्शन (Vaisheshika Darshana)",
      duration: "48 min",
      topics: ["Ancient physics/ontology", "Categorization of reality (Padartha)", "Atomism (Paramanu)", "Characteristics of substances"]
    },
    {
      id: 7,
      title: "वेदान्त दर्शन — भाग १ (Vedanta Darshana - Part 1)",
      duration: "36 min",
      topics: ["Essence of the Upanishads", "Brahman and Atman", "Karma and Moksha", "The Prasthanatrayi"]
    },
    {
      id: 8,
      title: "वेदान्त दर्शन — भाग २ (Vedanta Darshana - Part 2)",
      duration: "50 min",
      topics: ["Advaita (Non-dualism)", "Vishishtadvaita (Qualified non-dualism)", "Dvaita (Dualism)", "Post-Shankara developments"]
    },
    {
      id: 9,
      title: "चार्वाक और बौद्ध दर्शन (Charvaka and Buddhist Darshana)",
      duration: "72 min",
      topics: ["Materialistic philosophy (Lokayata)", "Core tenets of Buddhism", "Ethics and psychological outlook", "Four Noble Truths"]
    },
    {
      id: 10,
      title: "जैन दर्शन और समारोप (Jain Darshana and Conclusion)",
      duration: "61 min",
      topics: ["Anekantavada & Syadvada", "Jain ethics", "Summary of Indian Philosophy", "Future of Darshana research"]
    }
  ];

  const currentLecture = curriculum.find(l => l.id === activeLecture);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#1a1c2c] via-[#2a2d4a] to-[#121420] text-stone-100 p-6 md:p-8 rounded-3xl border border-blue-900/40 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-500/40 text-blue-300 text-xs font-mono mb-2">
            <Layers className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>BHARATVIDYA (BORI) CERTIFICATION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#f0f4ff]">
            Indian Philosophy (दर्शनशास्त्र)
          </h2>
          <p className="text-sm text-stone-300 font-sans mt-1 max-w-2xl">
            A comprehensive introduction to the 9 schools of Indian Philosophy (Darshanas). Developed by the Bhandarkar Oriental Research Institute (BORI), Pune.
          </p>
        </div>

        <div className="text-right bg-black/40 p-4 rounded-2xl border border-blue-900/40 w-full md:w-auto">
          <div className="text-[10px] uppercase font-mono text-blue-400 font-bold">Course ID: 81110</div>
          <div className="text-xl font-mono font-bold text-amber-300">
            9 Darshanas • 10 Lectures
          </div>
          <div className="text-[10px] font-mono text-stone-400">
            Instructor: Dr. Pranav Gokhale
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Lecture List */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-serif font-bold text-amber-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" />
              <span>Course Curriculum</span>
            </h3>
            <span className="text-[10px] font-mono text-stone-500">8+ Hours of Content</span>
          </div>

          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {curriculum.map((lecture) => (
              <button
                key={lecture.id}
                onClick={() => setActiveLecture(lecture.id)}
                className={`w-full text-left p-4 rounded-2xl transition-all border flex items-start gap-4 ${
                  activeLecture === lecture.id
                    ? "bg-blue-950/40 border-blue-500 text-blue-100 shadow-lg ring-1 ring-blue-500/30"
                    : "bg-[#1a1714] border-stone-800 text-stone-400 hover:bg-[#25211d] hover:border-stone-700"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-mono font-bold text-sm ${
                  activeLecture === lecture.id ? "bg-blue-600 text-white" : "bg-stone-800 text-stone-500"
                }`}>
                  {lecture.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-serif font-bold text-sm mb-1 leading-tight">{lecture.title}</div>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-stone-500">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {lecture.duration}</span>
                    <span className="flex items-center gap-1"><Video className="w-3 h-3" /> Video Lecture</span>
                  </div>
                </div>
                {activeLecture === lecture.id && <ChevronRight className="w-5 h-5 text-blue-400" />}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Lecture Details & Agentic Research */}
        <div className="lg:col-span-7 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLecture}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 min-h-[500px] flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-blue-900 flex items-center gap-2 mb-1">
                    <Play className="w-3 h-3 fill-blue-900" />
                    Lecture {activeLecture} Analysis
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-stone-950">
                    {currentLecture?.title}
                  </h3>
                </div>
                <div className="p-3 bg-blue-100 rounded-2xl border border-blue-200">
                  <Video className="w-6 h-6 text-blue-700" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                <div className="space-y-4">
                  <h4 className="text-sm font-mono font-black uppercase text-amber-900 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    <span>Key Topics Covered</span>
                  </h4>
                  <ul className="space-y-2">
                    {currentLecture?.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-serif text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 mt-6">
                    <h5 className="text-xs font-bold text-amber-900 mb-2 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Agentic Research Prompt
                    </h5>
                    <p className="text-xs italic text-stone-600 font-serif leading-relaxed">
                      "Analyze the ontological commitments of {currentLecture?.title.split('(')[0]} in relation to modern quantum mechanics and emergence theory."
                    </p>
                    <button className="mt-3 w-full py-2 bg-amber-900 text-amber-100 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-amber-950 transition-colors">
                      Run AI Analysis
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="aspect-video bg-stone-900 rounded-2xl border border-stone-800 flex items-center justify-center relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                      <div className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-tighter">BharatVidya Video Player</div>
                      <div className="text-xs text-white font-serif mt-1">Lecture {activeLecture}: Full 4K Resolution</div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#ebdcc4] space-y-3">
                    <h4 className="text-xs font-mono font-black uppercase text-stone-500">Course Metadata</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[9px] text-stone-400 uppercase font-bold">Difficulty</div>
                        <div className="text-xs font-bold text-stone-800">Beginner to Intermediate</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-stone-400 uppercase font-bold">Certificate</div>
                        <div className="text-xs font-bold text-stone-800">BORI Accredited</div>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-600" />
                      <span className="text-[10px] text-stone-500 font-serif italic">This module is part of the Indian Knowledge Systems (IKS) standards.</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
