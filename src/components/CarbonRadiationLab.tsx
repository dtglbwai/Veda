import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Atom, 
  Activity, 
  Flame, 
  Zap, 
  RefreshCw, 
  CheckCircle, 
  Sliders, 
  FileText, 
  Cpu, 
  Radio, 
  ShieldAlert, 
  Sparkles,
  Layers,
  BarChart3,
  Waves
} from "lucide-react";
import { CarbonDatingResult, RadiationSpectrometryResult } from "../types";

export default function CarbonRadiationLab() {
  const [activeSubTab, setActiveSubTab] = useState<"ams_c14" | "gamma_hpge" | "osl_irsl" | "tl_glow" | "geiger">("ams_c14");

  // AMS C-14 interactive controls
  const [sampleType, setSampleType] = useState("Charcoal");
  const [sampleMassMg, setSampleMassMg] = useState(2.5);
  const [pmc, setPmc] = useState<number>(58.4); // % modern carbon
  const [delta13C, setDelta13C] = useState<number>(-24.5); // permil
  const [halfLifeMode, setHalfLifeMode] = useState<"Libby" | "Cambridge">("Libby");
  const [siteContext, setSiteContext] = useState("Saraswati-Ghaggar Basin (Stratum IV - mature hearth level)");
  const [c14Loading, setC14Loading] = useState(false);
  const [c14Result, setC14Result] = useState<CarbonDatingResult | null>(null);

  // Theoretical fast calculation based on pMC
  const halfLife = halfLifeMode === "Libby" ? 5568 : 5730;
  const meanLife = halfLife / Math.LN2;
  const fraction = Math.max(0.001, Math.min(1.0, pmc / 100));
  const uncalAgeTheoretical = Math.round(-meanLife * Math.log(fraction));

  // Radiation Spectrometry controls
  const [radSensorType, setRadSensorType] = useState<"HPGe_Gamma" | "OSL_BlueLED" | "TL_GlowCurve" | "Geiger_Survey">("HPGe_Gamma");
  const [radMaterial, setRadMaterial] = useState("Terracotta Storage Jar Shard");
  const [radDepth, setRadDepth] = useState(2.4);
  const [radLoading, setRadLoading] = useState(false);
  const [radResult, setRadResult] = useState<RadiationSpectrometryResult | null>(null);

  // Geiger Counter sound / live rate
  const [geigerActive, setGeigerActive] = useState(false);
  const [geigerCpm, setGeigerCpm] = useState(28);

  const calculateC14 = async () => {
    setC14Loading(true);
    try {
      const res = await fetch("/api/carbon-dating-calc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sampleType,
          sampleMassMg,
          pmc,
          delta13C,
          halfLifeMode,
          siteContext
        }),
      });
      const data = await res.json();
      setC14Result(data);
    } catch (err) {
      console.error("C14 calculation error:", err);
    } finally {
      setC14Loading(false);
    }
  };

  const calculateRadiation = async () => {
    setRadLoading(true);
    try {
      const res = await fetch("/api/radiation-spectrometry-calc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sensorType: radSensorType,
          sampleMaterial: radMaterial,
          depthMeters: radDepth
        }),
      });
      const data = await res.json();
      setRadResult(data);
    } catch (err) {
      console.error("Radiation spectrometry error:", err);
    } finally {
      setRadLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#121a1c] via-[#162426] to-[#0c1314] text-stone-100 p-6 md:p-8 rounded-3xl border border-cyan-900/40 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-2">
            <Atom className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>GEOCHRONOLOGY & NUCLEAR ARCHAEOMETRY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#eaf8fb]">
            AMS Radiocarbon & Radiation Sensor Laboratory
          </h2>
          <p className="text-sm text-stone-300 font-sans mt-1 max-w-2xl">
            Tandetron Accelerator Mass Spectrometry (AMS C-14), IntCal20 tree-ring atmospheric calibration curve, HPGe Gamma-Ray radioisotope decay spectrometry, OSL single-aliquot regenerative dosimetry, and pottery TL glow-curves.
          </p>
        </div>

        <div className="text-right bg-black/40 p-4 rounded-2xl border border-cyan-900/40 w-full md:w-auto">
          <div className="text-[10px] uppercase font-mono text-cyan-400 font-bold">Accelerator Baseline</div>
          <div className="text-xl font-mono font-bold text-emerald-300">
            3.0 MV Tandetron AMS
          </div>
          <div className="text-[10px] font-mono text-stone-400">
            Oxalic Acid II NIST SRM 4990C Standard
          </div>
        </div>
      </div>

      {/* Sub-Tab Navigation */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "ams_c14", label: "AMS C-14 Carbon Dating Machine", icon: Atom },
          { id: "gamma_hpge", label: "HPGe Gamma-Ray Radioisotope Spectrometry", icon: Radio },
          { id: "osl_irsl", label: "OSL & IRSL Luminescence Dosimeter", icon: Zap },
          { id: "tl_glow", label: "Thermoluminescence (TL) Glow-Curve", icon: Flame },
          { id: "geiger", label: "Stratigraphic Geiger-Müller Survey", icon: Activity },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold font-serif transition-all border ${
                isActive
                  ? "bg-gradient-to-r from-cyan-900 via-teal-900 to-cyan-950 text-cyan-100 border-cyan-500 shadow-lg"
                  : "bg-[#181f21] text-stone-300 border-stone-800 hover:bg-stone-800"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ---------------- 1. AMS C-14 CARBON DATING MACHINE ---------------- */}
      {activeSubTab === "ams_c14" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Machine Parameters & Sample Target Controller */}
            <div className="bg-[#141b1d] border-2 border-cyan-900/40 rounded-3xl p-6 shadow-xl text-stone-100 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <span className="text-xs font-mono font-bold uppercase text-cyan-400">
                  AMS SPECIMEN & TARGET PREP
                </span>
                <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                  Graphitization
                </span>
              </div>

              <div>
                <label className="text-xs font-mono text-stone-400 block mb-1">Sample Material Type:</label>
                <select
                  value={sampleType}
                  onChange={(e) => setSampleType(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3 py-2 text-xs text-stone-200 outline-none focus:border-cyan-500 font-sans"
                >
                  <option value="Charcoal">Charcoal (Burnt Hearth Residue)</option>
                  <option value="Bone Collagen">Purified Bone Collagen (Bio-Apatite)</option>
                  <option value="Samidha Sacred Wood">Samidha Wood (Ficus Religiosa / Peepal)</option>
                  <option value="Carbonized Grains">Carbonized Grains (Barley / Rice / Sesame)</option>
                  <option value="Mollusc Shells">Mollusc Shells (Marine Reservoir Corrected)</option>
                  <option value="Textile Fiber">Loom Textile / Hemp / Cotton Thread</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-stone-400 mb-1">
                  <span>Graphite Target Mass:</span>
                  <span className="text-cyan-300 font-bold">{sampleMassMg} mg</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="10.0"
                  step="0.1"
                  value={sampleMassMg}
                  onChange={(e) => setSampleMassMg(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 bg-stone-800 cursor-pointer"
                />
              </div>

              {/* pMC Interactive Slider */}
              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-stone-400">Percent Modern Carbon (pMC):</span>
                  <span className="text-emerald-400 font-black text-sm">{pmc.toFixed(1)} %</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="100.0"
                  step="0.5"
                  value={pmc}
                  onChange={(e) => setPmc(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 bg-stone-800 cursor-pointer"
                />
                <div className="flex justify-between text-[9px] font-mono text-stone-500">
                  <span>~40,000 BP (0.5%)</span>
                  <span>~4,400 BP (58%)</span>
                  <span>1950 CE (100%)</span>
                </div>
              </div>

              {/* delta13C Isotopic Fractionation */}
              <div>
                <div className="flex justify-between text-xs font-mono text-stone-400 mb-1">
                  <span>Isotopic Fractionation δ¹³C (‰ PDB):</span>
                  <span className="text-amber-400 font-bold">{delta13C.toFixed(1)} ‰</span>
                </div>
                <input
                  type="range"
                  min="-32.0"
                  max="-8.0"
                  step="0.5"
                  value={delta13C}
                  onChange={(e) => setDelta13C(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 bg-stone-800 cursor-pointer"
                />
                <div className="text-[10px] font-mono text-stone-500 mt-1">
                  Standard C3 plant photosynthesis: -25‰ | C4 plants: -12‰
                </div>
              </div>

              {/* Half-life switch */}
              <div className="flex items-center justify-between p-3 bg-stone-900 rounded-xl border border-stone-800 text-xs font-mono">
                <span className="text-stone-400">Half-Life Standard:</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setHalfLifeMode("Libby")}
                    className={`px-2.5 py-1 rounded-lg font-bold text-[11px] ${
                      halfLifeMode === "Libby" ? "bg-cyan-800 text-white" : "text-stone-500"
                    }`}
                  >
                    Libby (5568y)
                  </button>
                  <button
                    onClick={() => setHalfLifeMode("Cambridge")}
                    className={`px-2.5 py-1 rounded-lg font-bold text-[11px] ${
                      halfLifeMode === "Cambridge" ? "bg-cyan-800 text-white" : "text-stone-500"
                    }`}
                  >
                    Cambridge (5730y)
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-stone-400 block mb-1">Stratigraphic / Site Context:</label>
                <input
                  type="text"
                  value={siteContext}
                  onChange={(e) => setSiteContext(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3 py-2 text-xs text-stone-200 outline-none focus:border-cyan-500 font-serif"
                />
              </div>

              <button
                onClick={calculateC14}
                disabled={c14Loading}
                className="w-full py-3 bg-gradient-to-r from-cyan-700 via-teal-700 to-cyan-800 hover:from-cyan-600 hover:to-teal-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 transition-all cursor-pointer"
              >
                {c14Loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Atom className="w-4 h-4 text-cyan-300" />}
                <span>Execute AMS Beam Assay & IntCal20 Curve</span>
              </button>
            </div>

            {/* Accelerator Mass Spectrometer Live Chamber Visualizer & Math */}
            <div className="lg:col-span-2 space-y-6">
              {/* Ion Beam Visualizer Chamber */}
              <div className="bg-[#0e1416] border-2 border-cyan-900/40 rounded-3xl p-6 shadow-xl text-stone-100 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-stone-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-xs font-mono font-bold uppercase text-cyan-300">
                      TANDETRON AMS ACCELERATOR BEAM LINE (3.0 MV)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-stone-400">
                    Cesium Sputter Ion Source → Magnetic Dipole Analyzer → Faraday Cup
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 text-center">
                    <span className="text-[10px] font-mono uppercase text-stone-500 block">Uncalibrated Age</span>
                    <span className="text-xl font-mono font-black text-cyan-300">
                      ~ {uncalAgeTheoretical} BP
                    </span>
                    <span className="text-[9px] font-mono text-stone-400">Before Present (1950)</span>
                  </div>

                  <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 text-center">
                    <span className="text-[10px] font-mono uppercase text-stone-500 block">¹²C Beam Current</span>
                    <span className="text-xl font-mono font-black text-emerald-400">
                      24.8 μA
                    </span>
                    <span className="text-[9px] font-mono text-stone-400">High-intensity Faraday Cup</span>
                  </div>

                  <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 text-center">
                    <span className="text-[10px] font-mono uppercase text-stone-500 block">¹⁴C / ¹²C Ratio</span>
                    <span className="text-xl font-mono font-black text-amber-400">
                      {(fraction * 1.2e-12).toExponential(3)}
                    </span>
                    <span className="text-[9px] font-mono text-stone-400">Gas Ionization Detection</span>
                  </div>
                </div>

                {/* Calibration Curve Graph Visual Representation */}
                <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-amber-400 font-bold">IntCal20 Northern Hemisphere Tree-Ring Calibration Curve:</span>
                    <span className="text-stone-400">Atmospheric ¹⁴C Fluctuation Wiggle-Match</span>
                  </div>
                  <div className="relative h-28 bg-black/60 rounded-xl border border-stone-800 p-2 overflow-hidden flex items-end justify-between gap-1">
                    {/* Simulated IntCal20 Wiggle & Gaussian probability bell curve */}
                    {Array.from({ length: 30 }).map((_, i) => {
                      const x = (i - 15) / 5;
                      const bell = Math.exp(-0.5 * x * x);
                      const heightPercent = Math.max(10, Math.min(95, bell * 85 + Math.sin(i * 0.8) * 15));
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                          <div
                            style={{ height: `${heightPercent}%` }}
                            className={`w-full rounded-t transition-all ${
                              i >= 11 && i <= 19
                                ? "bg-gradient-to-t from-cyan-600 to-teal-400 opacity-90 shadow-sm"
                                : "bg-stone-800 opacity-40"
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-stone-500 px-1">
                    <span>Calendar Span: Earlier Epoch</span>
                    <span className="text-cyan-400 font-bold">1σ (68.2%) and 2σ (95.4%) Highest Density Region</span>
                    <span>Later Epoch</span>
                  </div>
                </div>
              </div>

              {/* Detailed Output Report if Generated */}
              {c14Result && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#141b1d] border-2 border-cyan-500/40 rounded-3xl p-6 shadow-2xl text-stone-100 space-y-4"
                >
                  <div className="flex justify-between items-start border-b border-stone-800 pb-3">
                    <div>
                      <span className="text-xs font-mono uppercase font-bold text-cyan-400">
                        OFFICIAL AMS DATING & CALIBRATION CERTIFICATE
                      </span>
                      <h4 className="text-xl font-bold font-serif text-[#eaf8fb] mt-0.5">
                        {c14Result.historicalPeriod}
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-bold bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/40">
                      Standard Quality Assured
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800">
                      <span className="text-xs font-mono text-stone-400 block mb-1">Calibrated 1σ Interval (68.2%):</span>
                      <span className="text-base font-serif font-bold text-cyan-300">{c14Result.calibrated1Sigma}</span>
                    </div>

                    <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800">
                      <span className="text-xs font-mono text-stone-400 block mb-1">Calibrated 2σ Interval (95.4%):</span>
                      <span className="text-base font-serif font-bold text-emerald-400">{c14Result.calibrated2Sigma}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2 text-xs font-serif text-stone-300">
                    <span className="text-xs font-mono font-bold uppercase text-amber-400 block">
                      Stratigraphic Significance:
                    </span>
                    <p>{c14Result.stratigraphicSignificance}</p>
                    <div className="text-[11px] font-mono text-stone-400 mt-2">
                      <span className="text-stone-300 font-bold">Pretreatment:</span> {c14Result.pretreatmentProtocol}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ---------------- 2. HPGe GAMMA-RAY SPECTROMETRY ---------------- */}
      {activeSubTab === "gamma_hpge" && (
        <div className="bg-[#141b1d] border-2 border-cyan-900/40 rounded-3xl p-6 md:p-8 shadow-xl text-stone-100 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-cyan-400">
                CRYO-COOLED HIGH-PURITY GERMANIUM (HPGe) DETECTOR
              </span>
              <h3 className="text-2xl font-bold font-serif text-[#eaf8fb] mt-0.5">
                Radioisotope Decay Spectrum & Pottery Provenance
              </h3>
            </div>

            <button
              onClick={calculateRadiation}
              disabled={radLoading}
              className="px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow cursor-pointer"
            >
              {radLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Radio className="w-4 h-4" />}
              <span>Acquire Gamma Spectrum (0-3000 keV)</span>
            </button>
          </div>

          {/* Interactive Spectrum Photopeak Analyzer Display */}
          <div className="space-y-4">
            <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-cyan-400 font-bold">Multichannel Analyzer (MCA) Photopeak Channel Map:</span>
                <span className="text-stone-400">Resolution FWHM &lt; 1.8 keV @ 1332 keV</span>
              </div>

              {/* Synthetic Gamma Spectrum Graph */}
              <div className="relative h-44 bg-black/80 rounded-xl border border-stone-800 p-3 flex items-end gap-1">
                {/* Specific known isotope peaks labeled */}
                <div className="absolute top-3 left-4 text-[10px] font-mono text-cyan-300 space-y-1">
                  <div>• ²¹⁴Pb / ²¹⁴Bi (²³⁸U series): 352 keV & 609 keV</div>
                  <div>• ¹³⁷Cs (Modern Marker): 661.7 keV</div>
                  <div>• ⁴⁰K (Natural Potassium): 1460.8 keV</div>
                  <div>• ²⁰⁸Tl (²³²Th series): 2614.5 keV</div>
                </div>

                {Array.from({ length: 60 }).map((_, i) => {
                  const energy = i * 50; // 0 to 3000 keV
                  let peak = Math.exp(-i / 15) * 40 + Math.random() * 5 + 4;
                  if (Math.abs(energy - 350) < 50) peak += 55; // Pb-214
                  if (Math.abs(energy - 600) < 50) peak += 65; // Bi-214
                  if (Math.abs(energy - 1460) < 60) peak += 90; // K-40
                  if (Math.abs(energy - 2614) < 60) peak += 75; // Tl-208
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                      <div
                        style={{ height: `${Math.min(98, peak)}%` }}
                        className="w-full bg-cyan-500/80 rounded-t hover:bg-emerald-400 transition-colors"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Isotope Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {[
                { name: "Potassium-40 (⁴⁰K)", energy: "1460.8 keV", role: "Primary clay mineral matrix emitter", decay: "Beta / EC" },
                { name: "Thallium-208 (²⁰⁸Tl)", energy: "2614.5 keV", role: "Thorium-232 decay series daughter", decay: "Gamma" },
                { name: "Bismuth-214 (²¹⁴Bi)", energy: "609.3 keV", role: "Uranium-238 decay series daughter", decay: "Gamma" },
                { name: "Cesium-137 (¹³⁷Cs)", energy: "661.7 keV", role: "Stratigraphic zero marker (Post-1945)", decay: "Fission" },
              ].map((iso, idx) => (
                <div key={idx} className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-1">
                  <span className="text-xs font-mono font-bold text-cyan-300">{iso.name}</span>
                  <div className="text-[10px] font-mono text-emerald-400">{iso.energy} • {iso.decay}</div>
                  <p className="text-[11px] font-serif text-stone-400">{iso.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---------------- 3. OSL & IRSL LUMINESCENCE DOSIMETRY ---------------- */}
      {activeSubTab === "osl_irsl" && (
        <div className="bg-[#141b1d] border-2 border-cyan-900/40 rounded-3xl p-6 md:p-8 shadow-xl text-stone-100 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-cyan-400">
                OPTICALLY STIMULATED LUMINESCENCE (OSL & IRSL)
              </span>
              <h3 className="text-2xl font-bold font-serif text-[#eaf8fb] mt-0.5">
                Quartz & Feldspar Sunlight Bleaching Sediment Dating
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-400">SAR Protocol</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-stone-950 rounded-2xl border border-stone-800 space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-cyan-300 block">
                1. Blue-LED Quartz Stimulation (470 nm):
              </span>
              <p className="text-xs font-serif text-stone-300 leading-relaxed">
                When quartz grains are buried beneath architectural layers or flood silt, trapped electrons accumulate in lattice defects from ambient natural radiation (U, Th, K, cosmic rays). Stimulation with blue LEDs evicts electrons, emitting ultraviolet photons (~340 nm) proportional to the burial duration.
              </p>
              <div className="p-3 bg-stone-900 rounded-xl font-mono text-[11px] text-cyan-400">
                Formula: Age (ka) = Paleodose De (Gy) / Annual Dose Rate Da (Gy/ka)
              </div>
            </div>

            <div className="p-5 bg-stone-950 rounded-2xl border border-stone-800 space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-amber-300 block">
                2. Infrared Stimulated Luminescence (IRSL 870 nm):
              </span>
              <p className="text-xs font-serif text-stone-300 leading-relaxed">
                Used for Potassium-rich Feldspars with anomalous fading correction (pIRIR 290°C protocol), enabling dating of archaeological strata extending back up to 300,000 years, bridging the radiocarbon limit.
              </p>
              <div className="p-3 bg-stone-900 rounded-xl font-mono text-[11px] text-amber-300">
                Post-IR IRSL protocol eliminates athermal tunneling loss.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- 4. THERMOLUMINESCENCE (TL) GLOW-CURVE ---------------- */}
      {activeSubTab === "tl_glow" && (
        <div className="bg-[#141b1d] border-2 border-cyan-900/40 rounded-3xl p-6 md:p-8 shadow-xl text-stone-100 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-cyan-400">
                CERAMIC FIRING ZEROING CLOCK
              </span>
              <h3 className="text-2xl font-bold font-serif text-[#eaf8fb] mt-0.5">
                Thermoluminescence (TL) Pottery Firing Glow-Curve
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-400">5°C/s Heating Ramp</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
              <span className="text-[10px] font-mono text-stone-400 uppercase font-bold">Low-Temp Peak</span>
              <h4 className="text-lg font-serif font-bold text-red-400">110 °C Peak (Unstable)</h4>
              <p className="text-xs font-serif text-stone-300">
                Fades within hours at ambient temperatures; used for rapid laboratory test sensitivity calibration.
              </p>
            </div>

            <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
              <span className="text-[10px] font-mono text-stone-400 uppercase font-bold">Archaeological Peak</span>
              <h4 className="text-lg font-serif font-bold text-amber-400">325 °C High Peak</h4>
              <p className="text-xs font-serif text-stone-300">
                Deep electron trap with half-life &gt; 100,000 years; represents true accumulated paleodose since pottery firing in ancient kiln.
              </p>
            </div>

            <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
              <span className="text-[10px] font-mono text-stone-400 uppercase font-bold">Blackbody Plateau</span>
              <h4 className="text-lg font-serif font-bold text-cyan-400">375 °C Plateau Test</h4>
              <p className="text-xs font-serif text-stone-300">
                Validates that thermal blackbody radiation does not distort the genuine luminescence emission signal.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- 5. STRATIGRAPHIC GEIGER-MULLER SURVEY ---------------- */}
      {activeSubTab === "geiger" && (
        <div className="bg-[#141b1d] border-2 border-cyan-900/40 rounded-3xl p-6 md:p-8 shadow-xl text-stone-100 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-cyan-400">
                PORTABLE FIELD RADIATION DOSIMETRY
              </span>
              <h3 className="text-2xl font-bold font-serif text-[#eaf8fb] mt-0.5">
                Stratigraphic Ambient Background Survey Meter
              </h3>
            </div>

            <button
              onClick={() => {
                setGeigerActive(!geigerActive);
                setGeigerCpm(Math.floor(22 + Math.random() * 18));
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 border transition-all ${
                geigerActive
                  ? "bg-red-950 text-red-300 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)] animate-pulse"
                  : "bg-stone-900 text-stone-300 border-stone-700 hover:bg-stone-800"
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>{geigerActive ? "Geiger Tube Active [Audio Clicks]" : "Activate Survey Tube"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-stone-950 rounded-2xl border border-stone-800 text-center">
              <span className="text-xs font-mono text-stone-500 block mb-1">Dose Rate (Air Kerma):</span>
              <span className="text-3xl font-mono font-black text-emerald-400">
                {(geigerCpm * 0.0057).toFixed(3)} μSv/h
              </span>
              <span className="text-[10px] font-mono text-stone-400 block mt-1">Normal Natural Indic Background</span>
            </div>

            <div className="p-5 bg-stone-950 rounded-2xl border border-stone-800 text-center">
              <span className="text-xs font-mono text-stone-500 block mb-1">Count Rate (CPM):</span>
              <span className="text-3xl font-mono font-black text-cyan-400">{geigerCpm} CPM</span>
              <span className="text-[10px] font-mono text-stone-400 block mt-1">LND 712 Mica Window Tube</span>
            </div>

            <div className="p-5 bg-stone-950 rounded-2xl border border-stone-800 text-center">
              <span className="text-xs font-mono text-stone-500 block mb-1">Cumulative Stratum Dose:</span>
              <span className="text-3xl font-mono font-black text-amber-400">1.48 mGy/yr</span>
              <span className="text-[10px] font-mono text-stone-400 block mt-1">Cosmic + Terrestrial Combined</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
