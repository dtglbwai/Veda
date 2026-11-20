import { useState } from "react";
import { motion } from "motion/react";
import { 
  FileText, 
  Sparkles, 
  RefreshCw, 
  Send, 
  BookOpen, 
  CheckCircle, 
  Layers, 
  Globe, 
  Zap, 
  Search
} from "lucide-react";
import { SAMPLE_INSCRIPTIONS } from "../data/indicHeritageData";
import { EpigraphyDecipherResult } from "../types";

const BRAHMI_KEYBOARD_GLYPHS = [
  { glyph: "𑀅", name: "a", dev: "अ" },
  { glyph: "𑀆", name: "ā", dev: "आ" },
  { glyph: "𑀇", name: "i", dev: "इ" },
  { glyph: "𑀈", name: "ī", dev: "ई" },
  { glyph: "𑀉", name: "u", dev: "उ" },
  { glyph: "𑀊", name: "ū", dev: "ऊ" },
  { glyph: "𑀏", name: "e", dev: "ए" },
  { glyph: "𑀑", name: "o", dev: "ओ" },
  { glyph: "𑀓", name: "ka", dev: "क" },
  { glyph: "𑀔", name: "kha", dev: "ख" },
  { glyph: "𑀕", name: "ga", dev: "ग" },
  { glyph: "𑀖", name: "gha", dev: "घ" },
  { glyph: "𑀘", name: "ca", dev: "च" },
  { glyph: "𑀙", name: "cha", dev: "छ" },
  { glyph: "𑀚", name: "ja", dev: "ज" },
  { glyph: "𑀛", name: "jha", dev: "झ" },
  { glyph: "𑀝", name: "ṭa", dev: "ट" },
  { glyph: "𑀞", name: "ṭha", dev: "ठ" },
  { glyph: "𑀟", name: "ḍa", dev: "ड" },
  { glyph: "𑀠", name: "ḍha", dev: "ढ" },
  { glyph: "𑀡", name: "ṇa", dev: "ण" },
  { glyph: "𑀢", name: "ta", dev: "त" },
  { glyph: "𑀣", name: "tha", dev: "थ" },
  { glyph: "𑀤", name: "da", dev: "द" },
  { glyph: "𑀥", name: "dha", dev: "ध" },
  { glyph: "𑀦", name: "na", dev: "न" },
  { glyph: "𑀧", name: "pa", dev: "प" },
  { glyph: "𑀨", name: "pha", dev: "फ" },
  { glyph: "𑀩", name: "ba", dev: "ब" },
  { glyph: "𑀪", name: "bha", dev: "भ" },
  { glyph: "𑀫", name: "ma", dev: "म" },
  { glyph: "𑀬", name: "ya", dev: "य" },
  { glyph: "𑀭", name: "ra", dev: "र" },
  { glyph: "𑀮", name: "la", dev: "ल" },
  { glyph: "𑀯", name: "va", dev: "व" },
  { glyph: "𑀰", name: "śa", dev: "श" },
  { glyph: "𑀱", name: "ṣa", dev: "ष" },
  { glyph: "𑀲", name: "sa", dev: "स" },
  { glyph: "𑀳", name: "ha", dev: "ह" },
  { glyph: "𑀁", name: "ṁ (Anusvara)", dev: "ं" },
  { glyph: "𑁆", name: "Virama", dev: "्" },
];

export default function EpigraphyStudio() {
  const [inputText, setInputText] = useState("𑀤𑁂𑀯𑀸𑀦𑀁𑀧𑀺𑀬𑀲 𑀧𑀺𑀬𑀤𑀲𑀺𑀦𑁄 𑀭𑀜𑁄");
  const [selectedScript, setSelectedScript] = useState("Ashokan Brahmi");
  const [targetScript, setTargetScript] = useState("Devanagari");
  const [loading, setLoading] = useState(false);
  const [decipherResult, setDecipherResult] = useState<EpigraphyDecipherResult | null>(null);
  const [selectedInscription, setSelectedInscription] = useState(SAMPLE_INSCRIPTIONS[0]);

  const handleDecipher = async (customText?: string) => {
    const textToAnalyze = customText || inputText;
    if (!textToAnalyze.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/epigraphy-decipher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          script: selectedScript,
          textOrGlyphs: textToAnalyze,
          targetScript,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setDecipherResult(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInsertGlyph = (glyph: string) => {
    setInputText((prev) => prev + glyph);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#121c17] via-[#162720] to-[#0e1713] text-stone-100 p-6 md:p-8 rounded-3xl border border-emerald-900/40 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-mono mb-2">
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>PALEOGRAPHY & EPIGRAPHICAL MORPHOLOGY LAB</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#f0faf5]">
            Epigraphy & Ancient Script Decipherer
          </h2>
          <p className="text-sm text-stone-300 font-sans mt-1 max-w-2xl">
            Decipher Ashokan Brahmi, Indus Valley Saraswati Glyphs, Kharosthi, Pallava Grantha, and Sharada inscriptions with glyph-by-glyph IPA phonetics, IAST transliteration, and RTI micro-relief sensor guidance.
          </p>
        </div>

        <div className="text-right bg-black/40 p-4 rounded-2xl border border-emerald-900/40 w-full md:w-auto">
          <div className="text-[10px] uppercase font-mono text-emerald-400 font-bold">Script Evolution</div>
          <div className="text-xl font-mono font-bold text-amber-300">
            Brahmi → Grantha / Nagari
          </div>
          <div className="text-[10px] font-mono text-stone-400">
            3rd C. BCE Maurya to 10th C. CE Chola/Gupta
          </div>
        </div>
      </div>

      {/* Interactive Script Input & Virtual Brahmi Keyboard */}
      <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-emerald-900">
              PALEOGRAPHIC DECODER CONSOLE
            </span>
            <h3 className="text-2xl font-bold font-serif text-stone-950">
              Input Epigraphical Inscription
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedScript}
              onChange={(e) => setSelectedScript(e.target.value)}
              className="bg-white border border-[#d8c29d] rounded-xl px-3 py-2 text-xs font-serif font-bold text-stone-800 outline-none"
            >
              <option value="Ashokan Brahmi">Ashokan Brahmi (3rd C. BCE)</option>
              <option value="Indus Valley Script">Indus Valley / Saraswati Glyphs</option>
              <option value="Kharosthi">Kharosthi (Gandhara Script)</option>
              <option value="Pallava Grantha">Pallava Grantha (South Indian)</option>
              <option value="Sharada Script">Sharada Script (Kashmir)</option>
              <option value="Siddhamatrika">Siddhamatrika / Gupta Script</option>
            </select>

            <button
              onClick={() => handleDecipher()}
              disabled={loading || !inputText.trim()}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-800 to-teal-900 hover:from-emerald-700 hover:to-teal-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
            >
              {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Zap className="w-3.5 h-3.5 text-amber-300" />}
              <span>Decipher Epigraph</span>
            </button>
          </div>
        </div>

        {/* Text Input Area */}
        <div>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type or click Brahmi glyphs below to assemble inscription..."
            rows={3}
            className="w-full bg-[#f4ece0] border-2 border-[#caa87a] rounded-2xl p-4 font-mono text-xl text-stone-950 focus:ring-2 focus:ring-emerald-700 outline-none resize-none shadow-inner"
          />
        </div>

        {/* On-Screen Virtual Brahmi Keyboard */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-mono text-stone-600">
            <span className="font-bold uppercase">Virtual Ashokan Brahmi Typographer:</span>
            <button 
              onClick={() => setInputText("")}
              className="text-[10px] text-red-700 hover:underline font-bold"
            >
              Clear Input
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5 p-3 bg-stone-900 rounded-2xl border border-stone-800 max-h-48 overflow-y-auto">
            {BRAHMI_KEYBOARD_GLYPHS.map((k, idx) => (
              <button
                key={idx}
                onClick={() => handleInsertGlyph(k.glyph)}
                className="px-3 py-1.5 bg-stone-800 hover:bg-emerald-900 text-stone-100 hover:text-white rounded-xl text-lg font-mono border border-stone-700 hover:border-emerald-500 transition-all flex flex-col items-center group"
                title={`${k.name} (${k.dev})`}
              >
                <span>{k.glyph}</span>
                <span className="text-[8px] text-stone-400 group-hover:text-amber-300 font-mono">{k.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Historic Inscription Benchmark Presets */}
        <div className="pt-4 border-t border-[#e2d0b5]">
          <span className="text-xs font-mono uppercase font-bold text-stone-600 block mb-3">
            Famous Monumental Inscriptions (Click to Load & Decipher):
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SAMPLE_INSCRIPTIONS.map((ins) => (
              <button
                key={ins.id}
                onClick={() => {
                  setSelectedInscription(ins);
                  setInputText(ins.brahmiText);
                  handleDecipher(ins.brahmiText);
                }}
                className={`p-3 rounded-2xl text-left border transition-all ${
                  selectedInscription.id === ins.id
                    ? "bg-gradient-to-br from-emerald-950 to-stone-900 text-white border-emerald-500 shadow-md"
                    : "bg-white/80 hover:bg-white text-stone-900 border-[#decbb0]"
                }`}
              >
                <div className="text-xs font-serif font-bold truncate">{ins.title}</div>
                <div className="text-[10px] font-mono text-amber-500">{ins.period}</div>
                <div className="text-[9px] font-mono text-stone-400 mt-1">{ins.script}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Deciphered Analysis Output */}
      {decipherResult && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-stone-900 text-stone-100 rounded-3xl p-6 md:p-8 border border-emerald-900/40 shadow-2xl space-y-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-stone-800">
            <div>
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase">
                EPIGRAPHICAL TRANSLITERATION & PHONOLOGY REPORT
              </div>
              <h4 className="text-2xl font-bold font-serif text-amber-200 mt-0.5">
                Script: {decipherResult.scriptName} ({decipherResult.historicalPeriod})
              </h4>
            </div>

            <div className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1.5 rounded-xl border border-cyan-500/40">
              Language: {decipherResult.languageFamily}
            </div>
          </div>

          {/* Transliteration and Target Script Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800">
              <span className="text-[10px] uppercase font-mono text-stone-400 font-bold block mb-1">
                IAST Roman Transliteration
              </span>
              <p className="text-lg font-serif text-emerald-300 font-bold">
                {decipherResult.iastTransliteration}
              </p>
            </div>

            <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800">
              <span className="text-[10px] uppercase font-mono text-stone-400 font-bold block mb-1">
                Devanagari Normalized Orthography
              </span>
              <p className="text-lg font-serif text-amber-300 font-bold">
                {decipherResult.targetScriptOutput}
              </p>
            </div>
          </div>

          {/* Glyph-by-Glyph Breakdown Grid */}
          <div>
            <h5 className="text-xs font-mono uppercase font-bold text-amber-400 mb-3">
              Glyph-by-Glyph Paleographic & IPA Phonetic Decomposition:
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
              {decipherResult.glyphBreakdown.map((item, idx) => (
                <div key={idx} className="p-3 bg-stone-950/70 rounded-xl border border-stone-800 text-center">
                  <div className="text-2xl font-mono text-amber-400">{item.glyph}</div>
                  <div className="text-xs font-bold font-serif text-stone-200 mt-1">{item.devanagariEquiv}</div>
                  <div className="text-[10px] font-mono text-cyan-400">IPA: {item.phoneticIpa}</div>
                  {item.strokeDescription && (
                    <div className="text-[8px] font-mono text-stone-400 mt-0.5">{item.strokeDescription}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Linguistic Meaning & Historical Context */}
          <div className="p-5 bg-stone-950/90 rounded-2xl border border-stone-800 space-y-3">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-emerald-400 block mb-1">
                Linguistic & Epigraphical Translation:
              </span>
              <p className="text-sm font-serif italic text-stone-200 leading-relaxed">
                "{decipherResult.linguisticMeaning}"
              </p>
            </div>

            {decipherResult.sensorImagingRecommendation && (
              <div className="pt-3 border-t border-stone-800 text-xs font-mono text-stone-400 flex items-start gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Sensor Protocol: {decipherResult.sensorImagingRecommendation}</span>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
