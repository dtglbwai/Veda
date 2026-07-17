import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scroll, BookOpen, RefreshCcw, Loader2, ChevronLeft, ChevronRight, Languages, Sparkles, BrainCircuit } from "lucide-react";
import { Scripture, ScriptureLanguage, ExplanationLanguage } from "./types";
import PalmLeaf from "./components/PalmLeaf";
import ScriptureVideo from "./components/ScriptureVideo";

const TOPICS = [
  "Bhagavad Gita",
  "Rig Veda",
  "Sama Veda",
  "Yajur Veda",
  "Atharva Veda",
  "Upanishads",
  "Puranas",
  "Aranyakas",
  "Samhitas",
  "Yoga Sutras",
  "Agamas (Rituals)"
];

const ORIGINAL_LANGUAGES: ScriptureLanguage[] = [
  "Sanskrit", "Hindi", "Marathi", "Gujarati", "Bengali", "Tamil", "Telugu", "Kannada", "Malayalam", "Odia", "Punjabi"
];
const EXPLANATION_LANGUAGES: ExplanationLanguage[] = [
  "English", "Hindi", "Spanish", "French", "German", "Russian", 
  "Japanese", "Chinese", "Arabic", "Italian", "Portuguese", "Korean"
];

const CHAT_LANGUAGES = ["English", "Hindi", "Sanskrit", "Spanish"];

export default function App() {
  const [topic, setTopic] = useState("Bhagavad Gita");
  const [originalLang, setOriginalLang] = useState<ScriptureLanguage>("Sanskrit");
  const [explanationLang, setExplanationLang] = useState<ExplanationLanguage>("English");
  const [scriptures, setScriptures] = useState<Scripture[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatAnswer, setChatAnswer] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  const askAI = async () => {
    if (!chatMessage.trim() || !scriptures[currentIndex]) return;
    setChatLoading(true);
    setChatAnswer("");
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: chatMessage,
          scripture: scriptures[currentIndex],
          language: explanationLang
        }),
      });
      const data = await response.json();
      setChatAnswer(data.answer);
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setChatLoading(false);
    }
  };

  const fetchScriptures = async (selectedTopic: string, oLang: ScriptureLanguage, eLang: ExplanationLanguage) => {
    setLoading(true);
    setCurrentIndex(0);
    try {
      const response = await fetch("/api/scriptures", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          topic: selectedTopic, 
          count: 10,
          originalLang: oLang,
          explanationLang: eLang
        }),
      });
      const data = await response.json();
      if (data.scriptures) {
        setScriptures(data.scriptures);
      } else {
        console.error("No scriptures returned:", data);
        setScriptures([]);
      }
    } catch (error) {
      console.error("Failed to fetch:", error);
      setScriptures([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScriptures(topic, originalLang, explanationLang);
  }, [topic, originalLang, explanationLang]);

  const nextVerse = () => {
    if (currentIndex < scriptures.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      fetchScriptures(topic, originalLang, explanationLang);
    }
  };

  const prevVerse = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full py-8 px-12 flex flex-col md:flex-row justify-between items-center md:items-end border-b border-orange-900/10 bg-[#f1e9d2]/80 backdrop-blur sticky top-0 z-50 gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-orange-800 font-bold mb-1">
            Granth Digital Library
          </p>
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-extrabold text-stone-900 tracking-tight transition-all duration-500">
              {topic}
            </h1>
            <Sparkles className="w-5 h-5 text-orange-600 animate-pulse" />
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 self-center md:self-end">
            {TOPICS.map((t) => (
              <button
                key={t}
                onClick={() => setTopic(t)}
                className={`nav-link ${topic === t ? "nav-link-active" : ""}`}
              >
                {t}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-6 bg-stone-900/5 px-4 py-2 rounded-lg">
            <div className="flex items-center gap-2">
              <Languages className="w-3 h-3 text-stone-400" />
              <span className="text-[9px] uppercase font-bold text-stone-400">Original:</span>
              <select 
                value={originalLang}
                onChange={(e) => setOriginalLang(e.target.value as ScriptureLanguage)}
                className="bg-transparent text-[10px] font-bold text-orange-900 focus:outline-none cursor-pointer"
              >
                {ORIGINAL_LANGUAGES.map(lang => <option key={lang} value={lang}>{lang}</option>)}
              </select>
            </div>
            <div className="w-px h-4 bg-stone-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] uppercase font-bold text-stone-400">Explanation:</span>
              <select 
                value={explanationLang}
                onChange={(e) => setExplanationLang(e.target.value as ExplanationLanguage)}
                className="bg-transparent text-[10px] font-bold text-orange-900 focus:outline-none cursor-pointer"
              >
                {EXPLANATION_LANGUAGES.map(lang => <option key={lang} value={lang}>{lang}</option>)}
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 flex flex-col items-center justify-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center min-h-[500px]"
            >
              <div className="w-16 h-16 border-4 border-orange-800/20 border-t-orange-800 rounded-full animate-spin mb-4" />
              <p className="font-serif text-stone-500 uppercase tracking-widest text-[10px] font-bold">Unrolling the ancient scrolls...</p>
            </motion.div>
          ) : scriptures.length > 0 ? (
            <div className="w-full max-w-7xl flex flex-col items-center">
              <ScriptureVideo topic={topic} />
              <AnimatePresence mode="wait" initial={false}>
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, rotateX: 45, y: 50 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  exit={{ opacity: 0, rotateX: -45, y: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full flex justify-center"
                >
                  <PalmLeaf 
                    scripture={scriptures[currentIndex]} 
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex flex-col items-center mt-12 gap-8">
                <div className="flex items-center gap-12">
                  <button
                    onClick={prevVerse}
                    disabled={currentIndex === 0}
                    className={`flex flex-col items-center gap-2 group transition-all ${
                      currentIndex === 0 ? "opacity-20 cursor-not-allowed" : "hover:text-orange-800"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-stone-800/20 flex items-center justify-center group-hover:bg-stone-800 group-hover:text-[#f1e9d2] transition-colors">
                      <ChevronLeft className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Prev Manuscript</span>
                  </button>

                  <div className="flex flex-col items-center gap-1">
                    <div className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 bg-stone-900/5 px-6 py-2 rounded-full">
                      Leaf {currentIndex + 1} of {scriptures.length}
                    </div>
                    <button 
                      onClick={() => setShowChat(!showChat)}
                      className="text-[9px] uppercase tracking-[0.2em] font-bold text-orange-700 hover:underline flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3" />
                      Consult the Sage
                    </button>
                  </div>

                  <button
                    onClick={nextVerse}
                    className="flex flex-col items-center gap-2 group transition-all hover:text-orange-800"
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-stone-800/20 flex items-center justify-center group-hover:bg-stone-800 group-hover:text-[#f1e9d2] transition-colors">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Next Manuscript</span>
                  </button>
                </div>

                {/* AI Chat Drawer */}
                <AnimatePresence>
                  {showChat && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      className="w-full max-w-2xl bg-white/50 backdrop-blur-md rounded-2xl border border-orange-900/10 p-6 shadow-2xl mt-4"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-stone-800">
                          <BrainCircuit className="w-4 h-4" />
                          <span className="text-xs uppercase font-black tracking-widest">Speak with the AI Sage</span>
                        </div>
                        <button onClick={() => setShowChat(false)} className="text-stone-400 hover:text-stone-600">×</button>
                      </div>

                      <div className="flex flex-col gap-4">
                        <textarea
                          placeholder="Ask a question about this shloka's spiritual meaning..."
                          value={chatMessage}
                          onChange={(e) => setChatMessage(e.target.value)}
                          className="w-full bg-[#f1e9d2]/30 border border-orange-900/10 rounded-xl p-4 text-sm font-serif focus:ring-1 focus:ring-orange-800/20 outline-none min-h-[100px] resize-none"
                        />
                        <button
                          onClick={askAI}
                          disabled={chatLoading}
                          className="w-full py-3 bg-stone-900 text-[#f1e9d2] rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-stone-800 disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          {chatLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                          Seek Enlightenment
                        </button>

                        {chatAnswer && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="p-4 bg-orange-900/5 rounded-xl border-l-4 border-orange-800"
                          >
                            <p className="text-sm font-serif italic text-stone-800 leading-relaxed">
                              {chatAnswer}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="w-px h-12 bg-stone-900/10" />
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center p-20 bg-stone-900/5 rounded-3xl border border-dashed border-stone-300"
            >
              <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-4" />
              <p className="text-stone-500 font-serif lowercase tracking-widest italic">
                The library is silent. No scriptures found for this topic.
              </p>
              <button 
                onClick={() => fetchScriptures(topic, originalLang, explanationLang)}
                className="mt-6 text-[10px] uppercase tracking-widest font-bold text-orange-900 hover:underline flex items-center gap-2 mx-auto"
              >
                <RefreshCcw className="w-3 h-3" />
                Retry the scroll
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="w-full h-16 flex items-center justify-between px-12 bg-stone-900 text-stone-400 border-t border-stone-800">
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest font-sans font-bold">
          <span className="cursor-pointer hover:text-white transition-colors">Digital Manuscript</span>
          <span className="w-px h-4 bg-stone-700"></span>
          <span className="cursor-pointer hover:text-white transition-colors">Ancient Wisdom Reader</span>
        </div>
        <div className="flex gap-8 items-center">
          <div className="text-[11px] tracking-[0.2em] font-serif italic text-stone-500">
            Om Shanti Shanti Shanti
          </div>
        </div>
      </footer>
    </div>
  );
}

