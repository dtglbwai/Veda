import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Layers, 
  Palette, 
  Compass, 
  Sparkles, 
  FileText, 
  RefreshCw, 
  Eye, 
  Sliders, 
  Check, 
  Image as ImageIcon,
  Scan,
  Maximize2
} from "lucide-react";
import { PigmentAnalysisResult } from "../types";

const PIGMENT_PRESETS = [
  { color: "Lapis Lazuli / Ultramarine", sanskrit: "Rajavarta (राजावर्त)", formula: "Na₈[Al₆Si₆O₂₄]Sₙ", xrf: "Si Kα 1.74 keV, S Kα 2.31 keV", binder: "Neem Gum Resin", style: "Ajanta Cave 1 Murals" },
  { color: "Cinnabar / Vermilion", sanskrit: "Hingula (हिङ्गुल)", formula: "HgS (Mercury Sulfide)", xrf: "Hg Lα 9.98 keV, S Kα 2.31 keV", binder: "Purified Ghee & Acacia", style: "Lepakshi Frescoes" },
  { color: "Malachite Green", sanskrit: "Haritashma (हरिताश्म)", formula: "Cu₂CO₃(OH)₂", xrf: "Cu Kα 8.04 keV, Cu Kβ 8.90 keV", binder: "Animal Glue & Casein", style: "Tanjore Miniatures" },
  { color: "Realgar / Orpiment Yellow", sanskrit: "Manashila / Haritala (मनःशिला)", formula: "As₄S₄ / As₂S₃", xrf: "As Kα 10.54 keV, S Kα 2.31 keV", binder: "Gum Arabic", style: "Kashmir Birch Bark" },
  { color: "Red Hematite Ochre", sanskrit: "Gairika (गैरिक)", formula: "Fe₂O₃ (Iron Oxide)", xrf: "Fe Kα 6.40 keV, Fe Kβ 7.06 keV", binder: "Water & Animal Fat", style: "Bhimbetka Rock Shelters" },
  { color: "Conch Shell Calcined White", sanskrit: "Shankha Bhasma (शङ्ख भस्म)", formula: "CaCO₃", xrf: "Ca Kα 3.69 keV, Sr Kα 14.16 keV", binder: "Tamarind Seed Slurry", style: "Kerala Temple Murals" }
];

const HARAPPAN_SIGNS = [
  { sign: "𐤀", num: "M-001", name: "Jar / Purna Kalasha", freq: "1395 occurrences", meaning: "Sacred vessel / Offering / Plenitude" },
  { sign: "𐤁", num: "M-048", name: "Horned Headdress", freq: "342 occurrences", meaning: "Deity insignia / Pashupati authority" },
  { sign: "𐤂", num: "M-112", name: "Fish / Matsya", freq: "876 occurrences", meaning: "Star / Nakshatra (Dravidian 'Meen' pun)" },
  { sign: "𐤃", num: "M-245", name: "Brahmani Bull / Rishabha", freq: "612 occurrences", meaning: "Vigour / Solar Constellation Taurus" },
  { sign: "𐤄", num: "M-389", name: "Endless Knot / Srivatsa", freq: "189 occurrences", meaning: "Eternal cycle of Dharma" },
  { sign: "𐤅", num: "M-402", name: "Spearman / Yodha", freq: "215 occurrences", meaning: "Chieftain / Protector guardian" }
];

const TALAMANA_SYSTEMS = [
  { name: "Uttama Dasha Tala (120 Angulas)", subject: "Maha Devas (Shiva, Vishnu, Surya)", ratio: "Crown to Sole: 10 Talas (120 Angulas)" },
  { name: "Madhyama Dasha Tala (116 Angulas)", subject: "Devis (Lakshmi, Saraswati, Parvati)", ratio: "Graceful feminine proportions with 4-angula deduction" },
  { name: "Nava Tala (108 Angulas)", subject: "Ashtadikpalakas, Yakshas, Siddhas", ratio: "9 Talas canonical height" },
  { name: "Ashta Tala (96 Angulas)", subject: "Mortal Humans, Kings & Donors", ratio: "8 Talas realistic human anatomy" }
];

export default function VisualographyArtographyStudio() {
  const [activeTab, setActiveTab] = useState<"artography" | "pictography" | "iconography" | "visualography" | "estampage">("artography");

  // Artography state
  const [selectedPigment, setSelectedPigment] = useState(PIGMENT_PRESETS[0]);
  const [xrfResult, setXrfResult] = useState<PigmentAnalysisResult | null>(null);
  const [xrfLoading, setXrfLoading] = useState(false);

  // Estampage rubbing state
  const [rubbingProgress, setRubbingProgress] = useState(30);

  // DStretch Filter simulation
  const [dStretchFilter, setDStretchFilter] = useState<"normal" | "lds" | "ybk" | "crgb">("normal");

  const runXrfAnalysis = async (pigment = selectedPigment) => {
    setXrfLoading(true);
    try {
      const res = await fetch("/api/pigment-spectroscopy-calc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pigmentColor: pigment.color,
          paintingStyle: pigment.style
        }),
      });
      const data = await res.json();
      setXrfResult(data);
    } catch (err) {
      console.error("XRF error:", err);
    } finally {
      setXrfLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#1a1318] via-[#241720] to-[#120a10] text-stone-100 p-6 md:p-8 rounded-3xl border border-pink-900/40 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950 border border-pink-500/40 text-pink-300 text-xs font-mono mb-2">
            <Palette className="w-3.5 h-3.5 text-pink-400" />
            <span>VISUALOGRAPHY • ARTOGRAPHY • PICTOGRAPHY • ICONOGRAPHY • EPIGRAPHY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#fcf2f7]">
            Visual Arts, Metallurgy & Epigraphic Estampage
          </h2>
          <p className="text-sm text-stone-300 font-sans mt-1 max-w-2xl">
            Elemental pXRF mineral spectroscopy, Harappan glyph pictography, 120-Angula Talamana iconometry, DStretch rock-art decorrelation, and museum-grade estampage rubbings.
          </p>
        </div>

        <div className="text-right bg-black/40 p-4 rounded-2xl border border-pink-900/40 w-full md:w-auto">
          <div className="text-[10px] uppercase font-mono text-pink-400 font-bold">Art Science</div>
          <div className="text-xl font-mono font-bold text-amber-300">
            pXRF & Estampage
          </div>
          <div className="text-[10px] font-mono text-stone-400">
            Silpa Prakasha & Manasara Canon
          </div>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "artography", label: "Artography & Pigment pXRF", icon: Palette },
          { id: "pictography", label: "Pictography & Indus Glyphs", icon: Sparkles },
          { id: "iconography", label: "Iconography & 120-Angula Talamana", icon: Compass },
          { id: "visualography", label: "Visualography & DStretch Rock-Art", icon: Eye },
          { id: "estampage", label: "Epigraphic Estampage Simulator", icon: FileText },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold font-serif transition-all border ${
                isActive
                  ? "bg-gradient-to-r from-pink-900 via-rose-900 to-amber-950 text-white border-pink-500 shadow-lg"
                  : "bg-[#1c141a] text-stone-300 border-stone-800 hover:bg-stone-800"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ---------------- 1. ARTOGRAPHY & PIGMENT SPECTROSCOPY ---------------- */}
      {activeTab === "artography" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Preset Selector */}
            <div className="bg-[#1c151b] border-2 border-pink-900/40 rounded-3xl p-6 shadow-xl text-stone-100 space-y-4">
              <div className="pb-2 border-b border-stone-800">
                <span className="text-xs font-mono font-bold uppercase text-pink-400">
                  ANCIENT INDIC MINERAL PIGMENTS
                </span>
                <h4 className="text-sm font-serif font-bold text-stone-200 mt-1">
                  Select Pigment Specimen:
                </h4>
              </div>

              <div className="space-y-2">
                {PIGMENT_PRESETS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedPigment(p);
                      runXrfAnalysis(p);
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      selectedPigment.color === p.color
                        ? "bg-pink-950/80 border-pink-500 text-white shadow"
                        : "bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs font-serif font-bold">
                      <span>{p.color}</span>
                      <span className="text-[10px] font-mono text-amber-300">{p.sanskrit}</span>
                    </div>
                    <div className="text-[10px] font-mono text-stone-500 mt-1">{p.formula}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* XRF Elemental Emission Chamber */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#1c151b] border-2 border-pink-900/40 rounded-3xl p-6 shadow-xl text-stone-100 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-stone-800">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-pink-400">
                      pXRF ELEMENTAL ENERGY DISPERSIVE EMISSION LINES
                    </span>
                    <h3 className="text-2xl font-bold font-serif text-[#fcf2f7] mt-0.5">
                      {selectedPigment.sanskrit} ({selectedPigment.color})
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500/40">
                    Non-Destructive Assay
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                    <span className="text-stone-500 block text-[10px]">Chemical Formula:</span>
                    <span className="text-amber-300 font-bold">{selectedPigment.formula}</span>
                  </div>
                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                    <span className="text-stone-500 block text-[10px]">Organic Binder:</span>
                    <span className="text-cyan-300 font-bold">{selectedPigment.binder}</span>
                  </div>
                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                    <span className="text-stone-500 block text-[10px]">Characteristic XRF:</span>
                    <span className="text-pink-300 font-bold">{selectedPigment.xrf}</span>
                  </div>
                </div>

                {/* AI Detailed Mineral Provenance */}
                {xrfResult && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2 text-xs font-serif text-stone-300"
                  >
                    <span className="text-xs font-mono font-bold text-pink-400 uppercase block">
                      Geological Ore Provenance & Trade Route:
                    </span>
                    <p>{xrfResult.geologicalSource}</p>
                    <div className="text-[11px] font-mono text-stone-400">
                      <span className="text-stone-300 font-bold">Conservation:</span> {xrfResult.conservationAdvice}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- 2. PICTOGRAPHY & INDUS GLYPHS ---------------- */}
      {activeTab === "pictography" && (
        <div className="bg-[#1c151b] border-2 border-pink-900/40 rounded-3xl p-6 md:p-8 shadow-xl text-stone-100 space-y-6">
          <div className="flex justify-between items-center pb-3 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-pink-400">
                HARAPPAN & SARASWATI SEALS PICTOGRAPHY
              </span>
              <h3 className="text-2xl font-bold font-serif text-[#fcf2f7] mt-0.5">
                Corpus of Indus Valley Glyph Signatures
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-400">Mahadevan & Parpola Concordance</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HARAPPAN_SIGNS.map((sign, idx) => (
              <div key={idx} className="p-5 bg-stone-950 rounded-2xl border border-stone-800 space-y-2 hover:border-pink-500/60 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-4xl font-serif text-amber-300">{sign.sign}</span>
                  <span className="text-[10px] font-mono text-pink-400 font-bold bg-pink-950 px-2 py-0.5 rounded border border-pink-800">
                    {sign.num}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm text-stone-200">{sign.name}</h4>
                <div className="text-[10px] font-mono text-stone-400">{sign.freq}</div>
                <p className="text-xs font-serif text-stone-300">{sign.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------- 3. ICONOGRAPHY & 120-ANGULA TALAMANA ---------------- */}
      {activeTab === "iconography" && (
        <div className="bg-[#1c151b] border-2 border-pink-900/40 rounded-3xl p-6 md:p-8 shadow-xl text-stone-100 space-y-6">
          <div className="flex justify-between items-center pb-3 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-pink-400">
                CANONICAL SHILPA SHASTRA METROLOGY
              </span>
              <h3 className="text-2xl font-bold font-serif text-[#fcf2f7] mt-0.5">
                The 120-Angula Uttama Dasha Tala Proportions
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-400">Manasara & Sukraniti</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TALAMANA_SYSTEMS.map((sys, idx) => (
              <div key={idx} className="p-5 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <span className="text-xs font-mono font-bold text-amber-400 block">{sys.name}</span>
                <h4 className="font-serif font-bold text-base text-stone-200">{sys.subject}</h4>
                <p className="text-xs font-serif text-stone-400">{sys.ratio}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------- 4. VISUALOGRAPHY & DSTRETCH ROCK-ART ---------------- */}
      {activeTab === "visualography" && (
        <div className="bg-[#1c151b] border-2 border-pink-900/40 rounded-3xl p-6 md:p-8 shadow-xl text-stone-100 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-3 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-pink-400">
                DIGITAL DECORRELATION STRETCH (DSTRETCH)
              </span>
              <h3 className="text-2xl font-bold font-serif text-[#fcf2f7] mt-0.5">
                Revealing Invisible Weathered Petroglyphs
              </h3>
            </div>

            <div className="flex gap-2">
              {[
                { id: "normal", label: "Normal Spectrum" },
                { id: "lds", label: "DStretch LDS (Ochre Boost)" },
                { id: "ybk", label: "DStretch YBK (Charcoal)" },
                { id: "crgb", label: "DStretch CRGB (Full Matrix)" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setDStretchFilter(f.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    dStretchFilter === f.id
                      ? "bg-pink-800 text-white shadow"
                      : "bg-stone-900 text-stone-400 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 bg-stone-950 rounded-2xl border border-stone-800 text-center space-y-4">
            <div className="aspect-video max-h-64 mx-auto bg-stone-900 rounded-xl border border-stone-700 flex flex-col items-center justify-center p-6 relative overflow-hidden">
              <div className={`text-6xl transition-all duration-500 ${
                dStretchFilter === "lds" ? "text-amber-500 scale-110 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]" :
                dStretchFilter === "ybk" ? "text-cyan-400 scale-110 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" :
                dStretchFilter === "crgb" ? "text-pink-400 scale-110 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]" :
                "text-stone-600"
              }`}>
                🦣 🏹 🦏
              </div>
              <span className="text-xs font-mono text-stone-400 mt-3">
                {dStretchFilter === "normal" ? "Weathered rock surface (Ochre pigments barely visible to naked eye)" :
                 `Enhanced via Decorrelation Matrix: ${dStretchFilter.toUpperCase()} (Bhimbetka Mesolithic Hunting Scene Revealed)`}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- 5. EPIGRAPHIC ESTAMPAGE SIMULATOR ---------------- */}
      {activeTab === "estampage" && (
        <div className="bg-[#1c151b] border-2 border-pink-900/40 rounded-3xl p-6 md:p-8 shadow-xl text-stone-100 space-y-6">
          <div className="flex justify-between items-center pb-3 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-pink-400">
                AUTHENTIC EPIGRAPHIC ESTAMPAGE RUBBING
              </span>
              <h3 className="text-2xl font-bold font-serif text-[#fcf2f7] mt-0.5">
                Dabber Tampon Ink Paper Rubbing on Weathered Stone
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-400">ASI Standard Protocol</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-3">
                <span className="text-xs font-mono uppercase font-bold text-amber-400 block">
                  Dabber Ink Progress: {rubbingProgress}%
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={rubbingProgress}
                  onChange={(e) => setRubbingProgress(parseInt(e.target.value))}
                  className="w-full accent-pink-500 bg-stone-800 cursor-pointer"
                />
                <p className="text-xs font-serif text-stone-300">
                  Dampened Chinese rag paper is beaten into chiseled grooves with a horsehair brush. Lampblack ink dabber is patted across the raised stone surface, leaving the chiseled letters pristine white against dark paper.
                </p>
              </div>
            </div>

            {/* Estampage Visual Output */}
            <div className="p-6 bg-black rounded-2xl border border-stone-800 flex flex-col items-center justify-center text-center space-y-2">
              <div
                style={{ opacity: Math.max(0.2, rubbingProgress / 100) }}
                className="text-2xl font-serif text-stone-100 tracking-widest bg-stone-950 p-6 rounded-xl border border-stone-700 w-full"
              >
                𑀤𑁂𑀯𑀸𑀦𑀁𑀧𑀺𑀬𑀲 𑀧𑀺𑀬𑀤𑀲𑀺𑀦𑁄 𑀭𑀜𑁄
              </div>
              <span className="text-[10px] font-mono text-stone-400">
                Ashokan Brahmi Estampage: "Devanaṁpiyasa Piyadasino Raño"
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
