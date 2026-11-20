import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { 
  PenTool, 
  Sparkles, 
  Download, 
  RotateCcw, 
  Layers, 
  FileText, 
  BookOpen, 
  Feather, 
  RefreshCw, 
  Check, 
  Palette,
  Eye
} from "lucide-react";
import { CalligraphyResult } from "../types";

const SCRIPT_PRESETS = [
  { id: "Ashokan Brahmi", name: "Ashokan Brahmi (3rd c. BCE)", era: "Mauryan Epigraphs", sample: "𑀥𑀁𑀫𑀁 𑀲𑀭𑀡𑀁 𑀕𑀙𑀸𑀫𑀺", ductus: "Upright geometric, circular curves, 45° reed cut" },
  { id: "Kharosthi", name: "Kharosthi (3rd c. BCE - 3rd c. CE)", era: "Gandhara & Silk Road", sample: "𐨢𐨨 𐨭𐨪𐨞 𐨒𐨖𐨨𐨁", ductus: "Right-to-left cursive, flowing pen strokes, 30° nib" },
  { id: "Siddhamatrika", name: "Siddham / Siddhamātṛkā (6th c. CE)", era: "Gupta & Harshavardhana", sample: "𑖭𑖰𑖟𑖿𑖠𑖽 𑖥𑖪𑖝𑖲", ductus: "Triangular head-marks (acutangle), broad chisel edge" },
  { id: "Sharada", name: "Sharada Script (8th c. CE)", era: "Kashmir Birch-Bark", sample: "𑆯𑆳𑆫𑆢𑆳 𑆥𑆵𑆜", ductus: "Horizontal top bar hanging loops, fine hair brush" },
  { id: "Grantha", name: "Pallava / Chola Grantha (7th c. CE)", era: "South Indian Manuscripts", sample: "𑌗𑍍𑌰𑌨𑍍𑌥 𑌲𑌿𑌪𑌿", ductus: "Curvilinear loops, rounded palm-leaf stylus incisions" },
  { id: "Modi", name: "Modi Script (13th c. CE)", era: "Maratha Administration", sample: "𑘦𑘻𑘚𑘲 𑘩𑘱𑘢𑘲", ductus: "Continuous cursive without lifting the pen, rounded top loops" },
  { id: "Devanagari", name: "Classical Devanagari", era: "Sanskrit Scholarly Treatises", sample: "धर्मं शरणं गच्छामि", ductus: "Shirorekha top hanging line, 45° reed pen ductus" }
];

export default function CalligraphyStudio() {
  const [selectedScript, setSelectedScript] = useState("Ashokan Brahmi");
  const [inputText, setInputText] = useState("Dharmam Sharanam Gacchami");
  const [loading, setLoading] = useState(false);
  const [calligraphyData, setCalligraphyData] = useState<CalligraphyResult | null>(null);

  // Canvas drawing state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [toolType, setToolType] = useState<"reed" | "brush" | "chisel" | "gold">("reed");
  const [nibSize, setNibSize] = useState(6);
  const [inkColor, setInkColor] = useState("#1a1310"); // Charcoal Lampblack
  const [surfaceTexture, setSurfaceTexture] = useState<"palm_leaf" | "birch_bark" | "granite_stone" | "copper_plate">("palm_leaf");

  // Initialize Canvas background
  const initCanvasBackground = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (surfaceTexture === "palm_leaf") {
      ctx.fillStyle = "#e8d5b5";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Faint horizontal palm-leaf grain lines
      ctx.strokeStyle = "rgba(180, 140, 90, 0.25)";
      ctx.lineWidth = 1;
      for (let y = 15; y < canvas.height; y += 12) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    } else if (surfaceTexture === "birch_bark") {
      ctx.fillStyle = "#edd9be";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Dark birch horizontal lenticels
      ctx.fillStyle = "rgba(110, 75, 45, 0.15)";
      for (let i = 0; i < 40; i++) {
        const rx = Math.random() * canvas.width;
        const ry = Math.random() * canvas.height;
        ctx.fillRect(rx, ry, 25 + Math.random() * 40, 2);
      }
    } else if (surfaceTexture === "granite_stone") {
      ctx.fillStyle = "#2d2a28";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else if (surfaceTexture === "copper_plate") {
      ctx.fillStyle = "#b86b43";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    initCanvasBackground();
  }, [surfaceTexture]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineCap = toolType === "chisel" ? "square" : "round";
    ctx.lineJoin = "round";

    if (toolType === "gold") {
      ctx.strokeStyle = "#ffd700";
      ctx.shadowColor = "#ffaa00";
      ctx.shadowBlur = 4;
      ctx.lineWidth = nibSize * 1.2;
    } else if (toolType === "chisel") {
      ctx.strokeStyle = surfaceTexture === "granite_stone" ? "#ece6df" : "#4a3528";
      ctx.shadowBlur = 0;
      ctx.lineWidth = nibSize;
    } else if (toolType === "brush") {
      ctx.strokeStyle = inkColor;
      ctx.shadowColor = "rgba(0,0,0,0.2)";
      ctx.shadowBlur = 2;
      ctx.lineWidth = nibSize * 1.4;
    } else {
      // Reed pen
      ctx.strokeStyle = inkColor;
      ctx.shadowBlur = 0;
      ctx.lineWidth = nibSize;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    initCanvasBackground();
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `Granth_Calligraphy_${selectedScript.replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleTranscribe = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/calligraphy-transcribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inputText,
          sourceLanguage: "Sanskrit",
          targetScript: selectedScript
        }),
      });
      const data = await res.json();
      setCalligraphyData(data);
    } catch (err) {
      console.error("Transcribe error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#241a12] via-[#2d1e13] to-[#170e08] text-stone-100 p-6 md:p-8 rounded-3xl border border-amber-900/40 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 border border-amber-500/40 text-amber-300 text-xs font-mono mb-2">
            <PenTool className="w-3.5 h-3.5 text-amber-400" />
            <span>ANCIENT INDIC CALLIGRAPHY & PENMANSHIP STUDIO</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#fbf5e8]">
            Master Calligraphy & Epigraphic Penmanship
          </h2>
          <p className="text-sm text-stone-300 font-sans mt-1 max-w-2xl">
            Simulate historical reed pens (*Kalama*), hair brushes (*Tulika*), and bronze chisels across authentic palm-leaf, birch-bark (*Bhurjapatra*), and copper-plate surfaces for Brahmi, Kharosthi, Siddham, Sharada, Grantha, Modi, and Devanagari.
          </p>
        </div>

        <div className="text-right bg-black/40 p-4 rounded-2xl border border-amber-900/40 w-full md:w-auto">
          <div className="text-[10px] uppercase font-mono text-amber-400 font-bold">Script Archetype</div>
          <div className="text-xl font-mono font-bold text-amber-300">
            {selectedScript}
          </div>
          <div className="text-[10px] font-mono text-stone-400">
            Ductus & Nib Angle Dynamics
          </div>
        </div>
      </div>

      {/* Script Archetype Selector Badges */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {SCRIPT_PRESETS.map((scr) => (
          <button
            key={scr.id}
            onClick={() => {
              setSelectedScript(scr.id);
            }}
            className={`px-4 py-2.5 rounded-2xl text-xs font-serif font-bold whitespace-nowrap transition-all border ${
              selectedScript === scr.id
                ? "bg-gradient-to-r from-amber-800 to-orange-900 text-white border-amber-500 shadow-lg"
                : "bg-[#1f1813] text-stone-300 hover:text-white border-stone-800 hover:bg-stone-800"
            }`}
          >
            {scr.name}
          </button>
        ))}
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Tool Controls & Transcribe Form */}
        <div className="bg-[#1c1611] border-2 border-amber-900/40 rounded-3xl p-6 shadow-xl text-stone-100 space-y-5">
          <div className="pb-3 border-b border-stone-800 flex justify-between items-center">
            <span className="text-xs font-mono font-bold uppercase text-amber-400">
              STYLUS & SURFACE CONTROLS
            </span>
            <span className="text-[10px] font-mono bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800">
              Canvas Tools
            </span>
          </div>

          {/* Stylus Type Selection */}
          <div>
            <label className="text-xs font-mono text-stone-400 block mb-2">Historical Stylus:</label>
            <div className="grid grid-cols-2 gap-2 text-xs font-serif">
              {[
                { id: "reed", label: "Reed Kalama", desc: "45° cut split-nib" },
                { id: "brush", label: "Tulika Brush", desc: "Fine goat hair" },
                { id: "chisel", label: "Stone Chisel", desc: "Square incision" },
                { id: "gold", label: "Gold Leaf Ink", desc: "Swarna Varna" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setToolType(t.id as any)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    toolType === t.id
                      ? "bg-amber-900/60 border-amber-500 text-amber-200 shadow"
                      : "bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200"
                  }`}
                >
                  <div className="font-bold text-xs">{t.label}</div>
                  <div className="text-[10px] text-stone-400 font-sans">{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Surface Texture */}
          <div>
            <label className="text-xs font-mono text-stone-400 block mb-1">Canvas Surface Texture:</label>
            <select
              value={surfaceTexture}
              onChange={(e) => setSurfaceTexture(e.target.value as any)}
              className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3 py-2 text-xs text-stone-200 outline-none focus:border-amber-500 font-sans"
            >
              <option value="palm_leaf">Tala Palm-Leaf (Talapatra)</option>
              <option value="birch_bark">Kashmir Birch-Bark (Bhurjapatra)</option>
              <option value="granite_stone">Ashokan Polished Granite</option>
              <option value="copper_plate">Chola Copper Plate (Tamra Patra)</option>
            </select>
          </div>

          {/* Nib Size Slider */}
          <div>
            <div className="flex justify-between text-xs font-mono text-stone-400 mb-1">
              <span>Nib Stroke Thickness:</span>
              <span className="text-amber-300 font-bold">{nibSize} px</span>
            </div>
            <input
              type="range"
              min="2"
              max="24"
              step="1"
              value={nibSize}
              onChange={(e) => setNibSize(parseInt(e.target.value))}
              className="w-full accent-amber-500 bg-stone-800 cursor-pointer"
            />
          </div>

          {/* AI Transcribe Input Box */}
          <div className="pt-2 border-t border-stone-800 space-y-3">
            <label className="text-xs font-mono font-bold uppercase text-amber-400 block">
              AI Transcribe into Ancient Script:
            </label>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter Sanskrit or English phrase..."
              className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-stone-200 outline-none focus:border-amber-500 font-serif"
            />

            <button
              onClick={handleTranscribe}
              disabled={loading || !inputText.trim()}
              className="w-full py-2.5 bg-gradient-to-r from-amber-700 to-orange-800 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 transition-all cursor-pointer"
            >
              {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4 text-amber-300" />}
              <span>Generate Historical Calligraphy Ductus</span>
            </button>
          </div>
        </div>

        {/* Center & Right: Interactive Drawing Canvas & Practice Sheet */}
        <div className="lg:col-span-2 space-y-6">
          {/* Canvas Wrapper */}
          <div className="bg-[#1c1611] border-2 border-amber-900/40 rounded-3xl p-6 shadow-xl text-stone-100 space-y-4">
            <div className="flex flex-wrap justify-between items-center gap-3 pb-2 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold uppercase text-stone-200">
                  INTERACTIVE STYLUS CANVAS ({surfaceTexture.toUpperCase()})
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={clearCanvas}
                  className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 hover:border-red-500 text-[11px] font-mono text-stone-300 hover:text-red-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>

                <button
                  onClick={downloadCanvas}
                  className="px-3 py-1.5 rounded-lg bg-amber-800 hover:bg-amber-700 text-white text-[11px] font-mono font-bold flex items-center gap-1.5 shadow transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Scroll</span>
                </button>
              </div>
            </div>

            {/* Drawing Canvas Element */}
            <div className="flex justify-center">
              <canvas
                ref={canvasRef}
                width={700}
                height={320}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="w-full max-w-full rounded-2xl border-2 border-amber-900/50 shadow-inner cursor-crosshair touch-none"
              />
            </div>
            <div className="text-[10px] font-mono text-stone-400 text-center">
              Draw glyph strokes using mouse, pen stylus, or touch screen.
            </div>
          </div>

          {/* AI Transcribed Calligraphy Ductus Guide */}
          {calligraphyData && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1c1611] border-2 border-amber-500/40 rounded-3xl p-6 shadow-2xl text-stone-100 space-y-4"
            >
              <div className="flex justify-between items-start border-b border-stone-800 pb-3">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-amber-400">
                    HISTORICAL DUCTUS & STROKE BREAKDOWN
                  </span>
                  <h4 className="text-2xl font-bold font-serif text-[#fbf5e8] mt-0.5">
                    {calligraphyData.transcribedText}
                  </h4>
                  <div className="text-xs font-mono text-emerald-400">{calligraphyData.iastPhonetics}</div>
                </div>

                <div className="text-right text-xs font-mono text-stone-400">
                  <div>Tool: <span className="text-amber-300 font-bold">{calligraphyData.calligraphicDuctus.recommendedTool}</span></div>
                  <div>Nib: <span className="text-cyan-300 font-bold">{calligraphyData.calligraphicDuctus.nibAngleDegrees}° Angle</span></div>
                </div>
              </div>

              {/* Stroke Order Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {calligraphyData.glyphBreakdownList.map((g, idx) => (
                  <div key={idx} className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-serif text-amber-300 font-bold">{g.glyph}</span>
                      <span className="text-[10px] font-mono text-stone-400 bg-stone-900 px-2 py-0.5 rounded">
                        Char: {g.char}
                      </span>
                    </div>
                    <p className="text-[11px] font-sans text-stone-300 leading-tight">
                      {g.strokeOrderGuide}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
