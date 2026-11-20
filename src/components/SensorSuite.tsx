import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Cpu, 
  Radio, 
  Layers, 
  Orbit, 
  Volume2, 
  VolumeX, 
  Sun, 
  Activity, 
  Sliders, 
  Eye, 
  RotateCw, 
  Sparkles, 
  Flame, 
  Compass,
  Maximize2,
  Play,
  Pause,
  Clock,
  ShieldAlert,
  Anchor,
  Waves,
  Dna,
  Mountain,
  Droplet,
  Binary,
  CheckCircle2,
  FileText
} from "lucide-react";
import { 
  SENSOR_METADATA_LIST, 
  HERITAGE_SITES,
  OCEANOGRAPHY_PROFILES,
  OCEANOLOGY_PROFILES,
  SEDIMENTOLOGY_PROFILES,
  GENOLOGY_PROFILES
} from "../data/indicHeritageData";
import { SensorType } from "../types";

export default function SensorSuite() {
  const [activeSensor, setActiveSensor] = useState<SensorType>("gpr_lidar");
  const [selectedSiteId, setSelectedSiteId] = useState(HERITAGE_SITES[0].id);

  // Sensor 1: GPR / LiDAR state
  const [gprFrequency, setGprFrequency] = useState<400 | 100 | 900>(400);
  const [gprDepth, setGprDepth] = useState<number>(3.2);

  // Sensor 2: Hyperspectral state
  const [spectralWavelength, setSpectralWavelength] = useState<number>(940); // nm
  const [dstretchMode, setDstretchMode] = useState<boolean>(true);

  // Sensor 3: RTI Lighting state
  const [lightAzimuth, setLightAzimuth] = useState<number>(45); // degrees
  const [lightElevation, setLightElevation] = useState<number>(30); // degrees
  const [specularEnhance, setSpecularEnhance] = useState<boolean>(true);

  // Sensor 4: Archaeo-Acoustic state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedFreq, setSelectedFreq] = useState<number>(432); // Hz
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // Sensor 5: Horizon Ray-Tracing state
  const [solarDayOfYear, setSolarDayOfYear] = useState<number>(80); // March 21 (Equinox)
  const [solarHour, setSolarHour] = useState<number>(6.2); // Dawn ~6:12 AM

  // Sensor 6: Carbon-14 state
  const [pMCPercent, setPMCPercent] = useState<number>(62.5); // Percent modern carbon

  // Sensor 7: Iconometry state
  const [talaSystem, setTalaSystem] = useState<"Uttama Dasha Tala" | "Madhyama Dasha Tala" | "Ashta Tala">("Uttama Dasha Tala");

  // Sensor 8: Oceanography (Marine Archaeology) state
  const [selectedOceanSiteIdx, setSelectedOceanSiteIdx] = useState<number>(0);
  const [sonarFreqKhz, setSonarFreqKhz] = useState<number>(410);

  // Sensor 9: Oceanology (Marine Geoscience) state
  const [selectedOceanologyIdx, setSelectedOceanologyIdx] = useState<number>(0);
  const [seaLevelSliderYearBCE, setSeaLevelSliderYearBCE] = useState<number>(7000);

  // Sensor 10: Sedimentology state
  const [selectedSedimentBasinIdx, setSelectedSedimentBasinIdx] = useState<number>(0);
  const [selectedSedimentLayerIdx, setSelectedSedimentLayerIdx] = useState<number>(1);

  // Sensor 11: Genology / Paleogenomics state
  const [selectedGenologyIdx, setSelectedGenologyIdx] = useState<number>(0);
  const [activeGenologyView, setActiveGenologyView] = useState<"haplogroups" | "damage_curves" | "osteology">("haplogroups");

  const selectedSite = HERITAGE_SITES.find(s => s.id === selectedSiteId) || HERITAGE_SITES[0];
  const activeSensorMeta = SENSOR_METADATA_LIST.find(s => s.id === activeSensor) || SENSOR_METADATA_LIST[0];

  // Play audio frequency for Archaeo-Acoustics
  const togglePlayResonance = (freq: number) => {
    if (isPlayingAudio) {
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.disconnect();
      }
      setIsPlayingAudio(false);
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Add gentle harmonics (Sapta Svara overtones)
        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        oscRef.current = osc;
        gainRef.current = gain;
        setIsPlayingAudio(true);
      } catch (err) {
        console.error("Audio error:", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch (_) {}
      }
    };
  }, []);

  // Calculate C14 Age based on pMC
  // t = -8033 * ln(pMC / 100) -> Calibrated BCE = BP - 1950
  const uncalibratedBP = Math.round(-8033 * Math.log(pMCPercent / 100));
  const calibratedBCE = uncalibratedBP > 1950 ? `${uncalibratedBP - 1950} BCE` : `${1950 - uncalibratedBP} CE`;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#1b1511] via-[#241a13] to-[#14100d] text-stone-100 p-6 md:p-8 rounded-3xl border border-amber-900/40 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-2">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>REAL-TIME HARDWARE TELEMETRY & ARCHAEOMETRY SIMULATOR</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#fdf5e6]">
            Heritage Technology Sensor Suite
          </h2>
          <p className="text-sm text-stone-300 font-sans mt-1 max-w-2xl">
            Simulate 11 cutting-edge archaeometric physical & earth science sensor systems: GPR/LiDAR, Hyperspectral, RTI, Archaeo-Acoustics, Archaeo-Astronomy, Carbon-14, 3D Iconometry, Oceanography, Oceanology, Sedimentology, and Paleogenomics.
          </p>
        </div>

        {/* Site Quick Selector */}
        <div className="bg-black/50 p-4 rounded-2xl border border-stone-800 space-y-2 w-full md:w-auto">
          <label className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-bold block">
            Select Archaeological Calibration Site:
          </label>
          <select
            value={selectedSiteId}
            onChange={(e) => setSelectedSiteId(e.target.value)}
            className="w-full bg-stone-900 border border-stone-700 text-stone-200 text-xs font-serif rounded-xl px-3 py-2 outline-none focus:border-amber-500"
          >
            {HERITAGE_SITES.map((site) => (
              <option key={site.id} value={site.id}>
                {site.name} ({site.coordinates.split("(")[0]})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sensor Switcher Horizontal Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-2">
        {SENSOR_METADATA_LIST.map((sensor) => {
          const isSelected = activeSensor === sensor.id;
          return (
            <button
              key={sensor.id}
              onClick={() => {
                setActiveSensor(sensor.id);
                if (isPlayingAudio && oscRef.current) {
                  oscRef.current.stop();
                  setIsPlayingAudio(false);
                }
              }}
              className={`p-3 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? "bg-gradient-to-b from-amber-900 via-stone-900 to-black text-white border-amber-500 shadow-xl shadow-amber-950/40 scale-101"
                  : "bg-[#fcf7ed] hover:bg-white text-stone-900 border-[#decbb0]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full ${
                    isSelected ? "bg-emerald-950 text-emerald-300 border border-emerald-500/40" : "bg-stone-200 text-stone-600"
                  }`}>
                    {sensor.status}
                  </span>
                  <Activity className={`w-3.5 h-3.5 ${isSelected ? "text-amber-400" : "text-stone-400"}`} />
                </div>
                <div className="text-xs font-bold font-serif line-clamp-2 leading-snug">
                  {sensor.name}
                </div>
              </div>
              <div className={`text-[9px] font-mono mt-2 truncate ${isSelected ? "text-amber-300" : "text-stone-500"}`}>
                {sensor.category}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Sensor Interactive Workbench */}
      <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6">
        {/* Sensor Header Metadata */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-6 border-b border-[#e2d0b5]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase text-amber-800">
                SENSOR METROLOGY ID: {activeSensorMeta.id.toUpperCase()}
              </span>
              <span className="text-stone-400">|</span>
              <span className="text-xs font-mono text-stone-600">
                Operating Unit: {activeSensorMeta.scientificUnit}
              </span>
            </div>
            <h3 className="text-2xl font-bold font-serif text-stone-950 mt-1">
              {activeSensorMeta.name}
            </h3>
            <p className="text-xs text-stone-600 font-sans mt-1 max-w-3xl">
              {activeSensorMeta.physicsPrinciple}
            </p>
          </div>

          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-right w-full lg:w-auto">
            <span className="text-[10px] uppercase font-mono text-amber-900 font-bold block">Calibrated Site Context</span>
            <span className="text-sm font-serif font-bold text-stone-900">{selectedSite.name}</span>
            <div className="text-[10px] font-mono text-stone-600">{selectedSite.coordinates}</div>
          </div>
        </div>

        {/* ---------------- SENSOR 1: GPR & LiDAR 3D ---------------- */}
        {activeSensor === "gpr_lidar" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Control Panel */}
            <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 space-y-5">
              <h4 className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                <span>GPR Radar Controller</span>
              </h4>

              {/* Frequency Selector */}
              <div>
                <label className="text-xs font-mono text-stone-400 block mb-2">Antenna Center Frequency:</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { freq: 100, label: "100 MHz", desc: "Deep Bedrock (15m)" },
                    { freq: 400, label: "400 MHz", desc: "Structures (5m)" },
                    { freq: 900, label: "900 MHz", desc: "High-Res Pottery (1.5m)" },
                  ].map((item) => (
                    <button
                      key={item.freq}
                      onClick={() => setGprFrequency(item.freq as any)}
                      className={`p-2 rounded-xl text-center border transition-all ${
                        gprFrequency === item.freq
                          ? "bg-amber-800 text-white border-amber-400 font-bold"
                          : "bg-stone-800 text-stone-400 border-stone-700 hover:bg-stone-700"
                      }`}
                    >
                      <div className="text-xs">{item.label}</div>
                      <div className="text-[8px] font-mono opacity-80">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Depth Slice Slider */}
              <div>
                <div className="flex justify-between text-xs font-mono text-stone-400 mb-1">
                  <span>Subsurface Slice Depth:</span>
                  <span className="text-amber-400 font-bold">{gprDepth.toFixed(1)} meters</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="8.0"
                  step="0.1"
                  value={gprDepth}
                  onChange={(e) => setGprDepth(parseFloat(e.target.value))}
                  className="w-full accent-amber-600 bg-stone-800 cursor-pointer"
                />
                <div className="flex justify-between text-[9px] font-mono text-stone-500 mt-1">
                  <span>0.5m Surface</span>
                  <span>4.0m Cultural Layer</span>
                  <span>8.0m Virgin Soil</span>
                </div>
              </div>

              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs font-mono text-stone-300">
                <span className="text-emerald-400 font-bold block mb-1">Site Telemetry:</span>
                {selectedSite.sensorReadings.gprAnomalyDepth}
              </div>
            </div>

            {/* Radargram Simulation Screen */}
            <div className="lg:col-span-2 bg-[#12100e] p-6 rounded-2xl border border-stone-800 text-stone-100 flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-center text-xs font-mono text-stone-400 pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>2D RADARGRAM HYPERBOLIC SCAN [{gprFrequency} MHz]</span>
                </div>
                <div>Relative Dielectric: εr = 6.4 (Compact Mud-Brick)</div>
              </div>

              {/* Visual Simulated Radargram Waves */}
              <div className="my-6 h-48 bg-black/60 rounded-xl border border-stone-800 relative overflow-hidden flex flex-col justify-around p-4 font-mono text-[10px]">
                {/* Stratigraphic layers */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Depth scan line indicator */}
                <div 
                  className="absolute left-0 right-0 h-0.5 bg-cyan-400/80 shadow-[0_0_8px_cyan] transition-all z-20"
                  style={{ top: `${(gprDepth / 8.0) * 100}%` }}
                />

                {/* Hyperbolic reflection arcs */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between text-stone-500">
                    <span>0.0m (Topsoil)</span>
                    <span className="text-stone-600">----------------------------------------------------</span>
                  </div>

                  {gprDepth >= 1.5 && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }}
                      className="p-2 bg-amber-950/40 rounded border border-amber-500/40 text-amber-300 flex items-center justify-between"
                    >
                      <span>ANOMALY A-1: Buried Foundation Wall (0.8m thick, Hakra/Harappan brick)</span>
                      <span className="text-emerald-400 font-bold">Reflectivity: 84%</span>
                    </motion.div>
                  )}

                  {gprDepth >= 3.0 && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }}
                      className="p-2 bg-cyan-950/40 rounded border border-cyan-500/40 text-cyan-300 flex items-center justify-between"
                    >
                      <span>ANOMALY B-3: Water Conduit / Submerged Stone Bastion Trench</span>
                      <span className="text-cyan-400 font-bold">Depth: 3.4m</span>
                    </motion.div>
                  )}

                  {gprDepth >= 5.0 && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }}
                      className="p-2 bg-purple-950/40 rounded border border-purple-500/40 text-purple-300 flex items-center justify-between"
                    >
                      <span>ANOMALY C-7: Paleochannel Silt Transition (Ancient River Bed)</span>
                      <span className="text-purple-400 font-bold">OSL: ~4500 BCE</span>
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="text-xs font-serif text-stone-400 italic">
                Indic Application: Penetrates soil without destructive excavation, mapping ancient Saraswati riverbed structures and buried urban grid layouts.
              </div>
            </div>
          </div>
        )}

        {/* ---------------- SENSOR 2: HYPERSPECTRAL UV-NIR ---------------- */}
        {activeSensor === "hyperspectral" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 space-y-5">
              <h4 className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                <span>Spectrometer Optics Controller</span>
              </h4>

              <div>
                <div className="flex justify-between text-xs font-mono text-stone-400 mb-1">
                  <span>Filter Band Wavelength:</span>
                  <span className="text-cyan-400 font-bold">{spectralWavelength} nm</span>
                </div>
                <input
                  type="range"
                  min="365"
                  max="1600"
                  step="25"
                  value={spectralWavelength}
                  onChange={(e) => setSpectralWavelength(parseInt(e.target.value))}
                  className="w-full accent-cyan-500 bg-stone-800 cursor-pointer"
                />
                <div className="flex justify-between text-[9px] font-mono text-stone-500 mt-1">
                  <span>365nm (UV)</span>
                  <span>550nm (Vis)</span>
                  <span>940nm (NIR)</span>
                  <span>1600nm (SWIR)</span>
                </div>
              </div>

              {/* DStretch Toggle */}
              <div className="flex items-center justify-between p-3 bg-stone-950 rounded-xl border border-stone-800">
                <div>
                  <div className="text-xs font-bold text-stone-200">DStretch Decorrelation</div>
                  <div className="text-[10px] text-stone-500">Color-space matrix stretch for eroded rock pigments</div>
                </div>
                <button
                  onClick={() => setDstretchMode(!dstretchMode)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold ${
                    dstretchMode ? "bg-amber-600 text-white" : "bg-stone-800 text-stone-400"
                  }`}
                >
                  {dstretchMode ? "ENABLED" : "OFF"}
                </button>
              </div>

              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs font-mono text-stone-300">
                <span className="text-cyan-400 font-bold block mb-1">Spectral Signature:</span>
                {spectralWavelength < 450 
                  ? "UV Band (365nm): Causes organic binding resins to fluoresce while carbon soot absorbs completely."
                  : spectralWavelength < 750
                  ? "Visible Band (400-700nm): Natural eye view showing heavy age-degradation and tannin staining."
                  : spectralWavelength < 1100
                  ? "Near-Infrared (940nm): Palm-leaf lignin becomes optically translucent, rendering ancient iron-gall and carbon ink ultra-sharp."
                  : "Short-Wave Infrared (1600nm): Separates mineral pigment layers (lapislazuli vs orpiment) on ancient murals."
                }
              </div>
            </div>

            {/* Manuscript / Mural Visualizer */}
            <div className="lg:col-span-2 bg-[#1b1714] p-6 rounded-2xl border border-stone-800 text-stone-100 flex flex-col justify-between">
              <div className="flex justify-between items-center text-xs font-mono text-stone-400 pb-3 border-b border-stone-800">
                <span className="text-amber-400 font-bold">DIGITAL PALIMPSEST MULTI-SPECTRAL EMULATION</span>
                <span>Band: {spectralWavelength} nm</span>
              </div>

              {/* Simulated Manuscript Canvas */}
              <div 
                className="my-6 p-8 rounded-2xl border-2 border-stone-800 transition-all flex flex-col items-center justify-center text-center relative overflow-hidden"
                style={{
                  backgroundColor: spectralWavelength >= 800 ? "#231f1a" : "#4a3c28",
                  filter: dstretchMode ? "contrast(1.3) saturate(1.4)" : "none",
                }}
              >
                <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-3">
                  Birch-Bark / Palm-Leaf Inscription Recovery Chamber
                </div>

                <div 
                  className="font-serif text-2xl md:text-3xl leading-relaxed tracking-wider transition-all"
                  style={{
                    color: spectralWavelength >= 850 ? "#00ffcc" : spectralWavelength <= 400 ? "#ffcc00" : "#a88d67",
                    opacity: spectralWavelength >= 800 || spectralWavelength <= 400 ? 1 : 0.4,
                    textShadow: spectralWavelength >= 850 ? "0 0 10px rgba(0,255,204,0.4)" : "none",
                  }}
                >
                  ॐ नमो भगवते वासुदेवाय । <br />
                  <span className="text-lg md:text-xl font-mono">
                    𑀤𑁂𑀯𑀸𑀦𑀁𑀧𑀺𑀬𑀲 𑀧𑀺𑀬𑀤𑀲𑀺𑀦𑁄 𑀭𑀜𑁄 𑀯𑀺𑀚𑀺𑀢𑀫𑁆𑀳𑀺
                  </span>
                </div>

                <div className="mt-4 text-xs font-mono text-stone-400 max-w-md">
                  {spectralWavelength >= 850 
                    ? "✨ HIGH-CONTRAST INK RECOVERY: Faded carbon ink strokes fully restored via NIR penetration."
                    : spectralWavelength <= 400
                    ? "✨ UV FLUORESCENCE: Revealing erased underlying palimpsest layer from 4th Century BCE."
                    : "⚠️ Visible Spectrum: Ink is partially obscured by moisture staining and palm oxidation."}
                </div>
              </div>

              <div className="text-xs font-serif text-stone-400 italic">
                Indic Application: Deciphers fragile Sharada, Grantha, and Brahmi palm-leaf scrolls stored in Indian temple granthashalas without physical contact.
              </div>
            </div>
          </div>
        )}

        {/* ---------------- SENSOR 3: RTI PHOTOMETRIC STEREO ---------------- */}
        {activeSensor === "rti_lighting" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 space-y-5">
              <h4 className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-2">
                <Orbit className="w-4 h-4" />
                <span>Grazing Light Controller</span>
              </h4>

              {/* Light Azimuth Angle */}
              <div>
                <div className="flex justify-between text-xs font-mono text-stone-400 mb-1">
                  <span>Light Azimuth (Angle around stone):</span>
                  <span className="text-amber-400 font-bold">{lightAzimuth}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={lightAzimuth}
                  onChange={(e) => setLightAzimuth(parseInt(e.target.value))}
                  className="w-full accent-amber-500 bg-stone-800 cursor-pointer"
                />
              </div>

              {/* Light Elevation Angle */}
              <div>
                <div className="flex justify-between text-xs font-mono text-stone-400 mb-1">
                  <span>Light Elevation (Grazing Height):</span>
                  <span className="text-amber-400 font-bold">{lightElevation}°</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="85"
                  value={lightElevation}
                  onChange={(e) => setLightElevation(parseInt(e.target.value))}
                  className="w-full accent-amber-500 bg-stone-800 cursor-pointer"
                />
                <div className="flex justify-between text-[9px] font-mono text-stone-500 mt-1">
                  <span>5° (Extreme Grazing)</span>
                  <span>45° (Standard)</span>
                  <span>85° (Direct Overhead)</span>
                </div>
              </div>

              {/* Specular Enhancement Toggle */}
              <div className="flex items-center justify-between p-3 bg-stone-950 rounded-xl border border-stone-800">
                <div>
                  <div className="text-xs font-bold text-stone-200">Specular Enhancement</div>
                  <div className="text-[10px] text-stone-500">Mathematical normal vector gradient rendering</div>
                </div>
                <button
                  onClick={() => setSpecularEnhance(!specularEnhance)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold ${
                    specularEnhance ? "bg-amber-600 text-white" : "bg-stone-800 text-stone-400"
                  }`}
                >
                  {specularEnhance ? "ON" : "OFF"}
                </button>
              </div>
            </div>

            {/* Inscription Specular Render */}
            <div className="lg:col-span-2 bg-[#12100e] p-6 rounded-2xl border border-stone-800 text-stone-100 flex flex-col justify-between">
              <div className="flex justify-between items-center text-xs font-mono text-stone-400 pb-3 border-b border-stone-800">
                <span className="text-amber-400 font-bold">RTI VIRTUAL DOME STEREO RENDERING</span>
                <span>Az: {lightAzimuth}° | El: {lightElevation}°</span>
              </div>

              {/* Weathered Stone Inscription Simulator */}
              <div className="my-6 p-8 bg-[#2d2822] rounded-2xl border-4 border-[#473e35] relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl">
                {/* Simulated directional lighting shadow */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-all duration-300"
                  style={{
                    background: `linear-gradient(${lightAzimuth}deg, rgba(255,220,150,${(90 - lightElevation) / 120}) 0%, rgba(0,0,0,${(90 - lightElevation) / 100}) 100%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="text-[9px] font-mono text-amber-200 uppercase tracking-widest mb-3">
                    Eroded Granite Edict (Ashokan Brahmi & Indus Glyphs)
                  </div>

                  <div 
                    className="text-2xl md:text-4xl font-mono tracking-widest transition-all select-none"
                    style={{
                      color: specularEnhance ? "#ffd700" : "#d8c4a5",
                      textShadow: `${Math.cos((lightAzimuth * Math.PI) / 180) * (90 - lightElevation) * 0.15}px ${Math.sin((lightAzimuth * Math.PI) / 180) * (90 - lightElevation) * 0.15}px 4px rgba(0,0,0,0.9)`,
                      filter: specularEnhance ? "drop-shadow(0px 0px 2px #fff)" : "none",
                    }}
                  >
                    𑀲𑀯𑀢 𑀯𑀺𑀚𑀺𑀢𑀫𑁆𑀳𑀺 𑀤𑁂𑀯𑀸𑀦𑀁𑀧𑀺𑀬𑀲
                  </div>

                  <div className="mt-4 text-xs font-serif text-amber-100">
                    {lightElevation <= 25 
                      ? "🔍 Micro-Chisel Depth Revealed: Scribe's 0.3mm stone incision angles clearly visible."
                      : "Direct overhead light obscures shallow character edges. Lower elevation angle for optimal reading."}
                  </div>
                </div>
              </div>

              <div className="text-xs font-serif text-stone-400 italic">
                Indic Application: Recovers worn inscriptions on pillars, temple basements, and Indus steatite seals without touching fragile antiquities.
              </div>
            </div>
          </div>
        )}

        {/* ---------------- SENSOR 4: ARCHAEO-ACOUSTICS & RESONANCE ---------------- */}
        {activeSensor === "archaeo_acoustics" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 space-y-5">
              <h4 className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-2">
                <Volume2 className="w-4 h-4" />
                <span>Sonic Frequency Generator</span>
              </h4>

              <div className="space-y-2">
                <label className="text-xs font-mono text-stone-400 block">
                  Select Lithophone / Musical Pillar Note:
                </label>
                {[
                  { freq: 432, note: "Vedic Chanting Resonance (432 Hz)", desc: "Universal Harmonic / Omkara Fundamental" },
                  { freq: 240, note: "Sa (Shadja) - 240 Hz", desc: "Hampi Vittala Column 1 Base" },
                  { freq: 270, note: "Re (Rishabha) - 270 Hz", desc: "Monolithic Granite High Res" },
                  { freq: 300, note: "Ga (Gandhara) - 300 Hz", desc: "Nellaiappar Musical Pillar" },
                  { freq: 320, note: "Ma (Madhyama) - 320 Hz", desc: "Madurai Meenakshi Mandapa" },
                  { freq: 528, note: "Solfeggio Transformation (528 Hz)", desc: "Garbhagriha Acoustic Focus" },
                ].map((item) => (
                  <button
                    key={item.freq}
                    onClick={() => {
                      setSelectedFreq(item.freq);
                      if (isPlayingAudio) {
                        togglePlayResonance(selectedFreq);
                        setTimeout(() => togglePlayResonance(item.freq), 50);
                      }
                    }}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all ${
                      selectedFreq === item.freq
                        ? "bg-amber-800 text-white border-amber-400 font-bold"
                        : "bg-stone-800/80 text-stone-300 border-stone-700 hover:bg-stone-700"
                    }`}
                  >
                    <div className="text-xs flex justify-between">
                      <span>{item.note}</span>
                      <span className="font-mono text-amber-300">{item.freq} Hz</span>
                    </div>
                    <div className="text-[9px] font-mono text-stone-400">{item.desc}</div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => togglePlayResonance(selectedFreq)}
                className={`w-full py-3 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all ${
                  isPlayingAudio
                    ? "bg-red-800 text-white animate-pulse"
                    : "bg-gradient-to-r from-amber-600 to-orange-800 text-white hover:scale-105"
                }`}
              >
                {isPlayingAudio ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>Mute Resonance Tone</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4" />
                    <span>Synthesize {selectedFreq} Hz Pillar Tone</span>
                  </>
                )}
              </button>
            </div>

            {/* Sonic Spectrogram Visualizer */}
            <div className="lg:col-span-2 bg-[#12100e] p-6 rounded-2xl border border-stone-800 text-stone-100 flex flex-col justify-between">
              <div className="flex justify-between items-center text-xs font-mono text-stone-400 pb-3 border-b border-stone-800">
                <span className="text-emerald-400 font-bold">FFT REAL-TIME SPECTRAL DENSITY MATRIX</span>
                <span>Target: {selectedFreq} Hz | RT60: 2.14s</span>
              </div>

              {/* Dynamic Waveform Graph */}
              <div className="my-6 h-48 bg-black/80 rounded-2xl border border-stone-800 p-4 flex items-end justify-between gap-1 relative overflow-hidden">
                <div className="absolute top-3 left-4 text-[10px] font-mono text-amber-400">
                  Resonance Harmonics [Fundamental: {selectedFreq} Hz]
                </div>

                {Array.from({ length: 32 }).map((_, i) => {
                  const isFundamental = i === 12;
                  const isHarmonic = i === 18 || i === 24;
                  const heightPercent = isPlayingAudio
                    ? isFundamental
                      ? 90
                      : isHarmonic
                      ? 65
                      : Math.max(10, Math.sin(i * 0.5) * 40 + 20)
                    : 15;
                  return (
                    <motion.div
                      key={i}
                      animate={{ height: `${heightPercent}%` }}
                      transition={{ duration: 0.15, repeat: isPlayingAudio ? Infinity : 0, repeatType: "reverse" }}
                      className={`w-full rounded-t-sm transition-all ${
                        isFundamental
                          ? "bg-amber-400 shadow-[0_0_12px_gold]"
                          : isHarmonic
                          ? "bg-emerald-400"
                          : "bg-stone-700"
                      }`}
                    />
                  );
                })}
              </div>

              <div className="text-xs font-serif text-stone-400 italic">
                Indic Application: Evaluates the acoustic architecture of Garbhagriha domes designed to amplify sacred Vedic phonetics and bell overtones.
              </div>
            </div>
          </div>
        )}

        {/* ---------------- SENSOR 5: HORIZON RAY-TRACING ---------------- */}
        {activeSensor === "horizon_alignment" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 space-y-5">
              <h4 className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-2">
                <Sun className="w-4 h-4" />
                <span>Archaeo-Solar Controller</span>
              </h4>

              {/* Day of Year (Equinox/Solstice) */}
              <div>
                <div className="flex justify-between text-xs font-mono text-stone-400 mb-1">
                  <span>Day of the Year:</span>
                  <span className="text-amber-400 font-bold">
                    {solarDayOfYear === 80 ? "March 21 (Vernal Equinox)" : solarDayOfYear === 172 ? "June 21 (Summer Solstice)" : solarDayOfYear === 265 ? "Sept 22 (Autumnal Equinox)" : `Day ${solarDayOfYear}`}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="365"
                  value={solarDayOfYear}
                  onChange={(e) => setSolarDayOfYear(parseInt(e.target.value))}
                  className="w-full accent-amber-500 bg-stone-800 cursor-pointer"
                />
                <div className="grid grid-cols-3 gap-1 mt-2">
                  <button onClick={() => setSolarDayOfYear(80)} className="px-2 py-1 bg-stone-800 text-[9px] font-mono rounded text-amber-300">Equinox (Mar 21)</button>
                  <button onClick={() => setSolarDayOfYear(172)} className="px-2 py-1 bg-stone-800 text-[9px] font-mono rounded text-amber-300">Solstice (Jun 21)</button>
                  <button onClick={() => setSolarDayOfYear(355)} className="px-2 py-1 bg-stone-800 text-[9px] font-mono rounded text-amber-300">Solstice (Dec 21)</button>
                </div>
              </div>

              {/* Time of Day */}
              <div>
                <div className="flex justify-between text-xs font-mono text-stone-400 mb-1">
                  <span>Local Solar Time:</span>
                  <span className="text-cyan-400 font-bold">
                    {Math.floor(solarHour)}:{Math.floor((solarHour % 1) * 60).toString().padStart(2, "0")} AM
                  </span>
                </div>
                <input
                  type="range"
                  min="5.5"
                  max="8.5"
                  step="0.05"
                  value={solarHour}
                  onChange={(e) => setSolarHour(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 bg-stone-800 cursor-pointer"
                />
              </div>

              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs font-mono text-stone-300">
                <span className="text-amber-400 font-bold block mb-1">Sanctum Alignment Check:</span>
                {Math.abs(solarDayOfYear - 80) <= 2 && Math.abs(solarHour - 6.2) <= 0.15 ? (
                  <span className="text-emerald-400 font-bold">✨ DIRECT SANCTUM PENETRATION: Solar beam hits Garbhagriha deity chest at Azimuth 90.0°</span>
                ) : (
                  <span className="text-stone-400">Beam offset from inner sanctum axis. Adjust to Equinox at ~6:12 AM.</span>
                )}
              </div>
            </div>

            {/* Temple Sanctum Ray-Tracing Chamber */}
            <div className="lg:col-span-2 bg-[#12100e] p-6 rounded-2xl border border-stone-800 text-stone-100 flex flex-col justify-between">
              <div className="flex justify-between items-center text-xs font-mono text-stone-400 pb-3 border-b border-stone-800">
                <span className="text-amber-400 font-bold">ARCHITECTURAL RAY-TRACING CROSS-SECTION</span>
                <span>Konark / Modhera Solar Vector</span>
              </div>

              {/* Simulated 2D Temple Elevation with Sun Ray */}
              <div className="my-6 h-48 bg-[#1e1915] rounded-2xl border border-stone-800 relative overflow-hidden flex items-center justify-between px-8">
                {/* Sun icon */}
                <div 
                  className="absolute transition-all duration-300"
                  style={{
                    left: "20px",
                    top: `${Math.max(10, Math.min(80, 100 - (solarHour - 5.5) * 35))}%`,
                  }}
                >
                  <Sun className="w-10 h-10 text-amber-400 animate-spin" style={{ animationDuration: "20s" }} />
                </div>

                {/* Ray of light beam */}
                <div 
                  className="absolute h-1 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 shadow-[0_0_15px_gold] transition-all duration-300"
                  style={{
                    left: "50px",
                    top: `${Math.max(10, Math.min(80, 100 - (solarHour - 5.5) * 35))}%`,
                    width: "80%",
                    transform: `rotate(${(solarHour - 6.2) * 15}deg)`,
                    transformOrigin: "left center",
                    opacity: Math.abs(solarDayOfYear - 80) <= 5 ? 1 : 0.3,
                  }}
                />

                {/* Temple Gopuram & Sanctum silhouettes */}
                <div className="absolute right-32 bottom-0 w-16 h-36 bg-stone-900 border-t-4 border-l-2 border-r-2 border-stone-700 rounded-t-lg flex items-center justify-center">
                  <span className="text-[8px] font-mono text-stone-400 rotate-90">Gopuram</span>
                </div>

                <div className="absolute right-10 bottom-0 w-20 h-28 bg-stone-950 border-4 border-amber-800/80 rounded-t-2xl flex flex-col items-center justify-center text-center p-1">
                  <span className="text-xl">🪷</span>
                  <span className="text-[7px] font-mono text-amber-300 uppercase">Garbhagriha</span>
                </div>
              </div>

              <div className="text-xs font-serif text-stone-400 italic">
                Indic Application: Validates ancient Shilpa Shastra temple orientations engineered to celebrate equinoxes and solstices with cosmic lighting phenomena.
              </div>
            </div>
          </div>
        )}

        {/* ---------------- SENSOR 6: CARBON-14 DATING ---------------- */}
        {activeSensor === "carbon14_dating" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 space-y-5">
              <h4 className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <span>AMS Accelerator Calibration</span>
              </h4>

              <div>
                <div className="flex justify-between text-xs font-mono text-stone-400 mb-1">
                  <span>Percent Modern Carbon (pMC):</span>
                  <span className="text-amber-400 font-bold">{pMCPercent}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="0.5"
                  value={pMCPercent}
                  onChange={(e) => setPMCPercent(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 bg-stone-800 cursor-pointer"
                />
                <div className="flex justify-between text-[9px] font-mono text-stone-500 mt-1">
                  <span>20% (~13,000 BP)</span>
                  <span>60% (~4,100 BP)</span>
                  <span>100% (Modern)</span>
                </div>
              </div>

              <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 space-y-2">
                <div className="text-xs font-mono text-stone-400">
                  Uncalibrated Radiocarbon Age: <span className="text-white font-bold">{uncalibratedBP} ± 35 BP</span>
                </div>
                <div className="text-sm font-mono text-emerald-400 font-bold">
                  IntCal20 Calibrated Age: {calibratedBCE}
                </div>
              </div>
            </div>

            {/* Radiocarbon Decay Curve Visualization */}
            <div className="lg:col-span-2 bg-[#12100e] p-6 rounded-2xl border border-stone-800 text-stone-100 flex flex-col justify-between">
              <div className="flex justify-between items-center text-xs font-mono text-stone-400 pb-3 border-b border-stone-800">
                <span className="text-amber-400 font-bold">C-14 HALF-LIFE ISOTOPE DECAY PLOT (t½ = 5,730 YR)</span>
                <span>Calibrated: {calibratedBCE}</span>
              </div>

              <div className="my-6 h-48 bg-black/70 rounded-2xl border border-stone-800 p-6 flex flex-col justify-center relative">
                <div className="text-xs font-mono text-amber-300 mb-2">
                  Sample: Charcoal from Vedic Yajna Pit / Submerged Timber Anchor
                </div>
                <div className="w-full bg-stone-800 h-4 rounded-full overflow-hidden relative">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-300"
                    style={{ width: `${pMCPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-2">
                  <span>0% Residual C-14</span>
                  <span>Current Reading: {pMCPercent}%</span>
                  <span>100% (Living Organism)</span>
                </div>
              </div>

              <div className="text-xs font-serif text-stone-400 italic">
                Indic Application: Establishes rigorous chronological anchors for archaeological strata without relying purely on textual conjecture.
              </div>
            </div>
          </div>
        )}

        {/* ---------------- SENSOR 7: 3D ICONOMETRY & TALAMANA ---------------- */}
        {activeSensor === "iconometry_3d" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 space-y-5">
              <h4 className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Shilpa Shastra Canon Selector</span>
              </h4>

              <div className="space-y-2">
                {[
                  { name: "Uttama Dasha Tala", units: "120 Angulas", application: "Major Deities (Shiva, Vishnu, Devi, Surya)" },
                  { name: "Madhyama Dasha Tala", units: "116 Angulas", application: "Avataras, Ganesha, Kartikeya" },
                  { name: "Ashta Tala", units: "96 Angulas", application: "Human Kings, Devotees, Rishis" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setTalaSystem(item.name as any)}
                    className={`w-full text-left p-3 rounded-xl border transition-all ${
                      talaSystem === item.name
                        ? "bg-amber-800 text-white border-amber-400 font-bold"
                        : "bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700"
                    }`}
                  >
                    <div className="text-xs font-serif font-bold">{item.name}</div>
                    <div className="text-[10px] font-mono text-amber-300">{item.units}</div>
                    <div className="text-[9px] font-mono text-stone-400">{item.application}</div>
                  </button>
                ))}
              </div>

              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs font-mono text-stone-300">
                <span className="text-emerald-400 font-bold block mb-1">Golden Proportion (Phi):</span>
                Navel-to-Crown / Total Height = 1.618 ± 0.02 (Matches Manasara & Vishnudharmottara Purana canons).
              </div>
            </div>

            {/* 3D Point Cloud Sculpture Measurement Wireframe */}
            <div className="lg:col-span-2 bg-[#12100e] p-6 rounded-2xl border border-stone-800 text-stone-100 flex flex-col justify-between">
              <div className="flex justify-between items-center text-xs font-mono text-stone-400 pb-3 border-b border-stone-800">
                <span className="text-amber-400 font-bold">3D POINT-CLOUD CANONICAL GRID OVERLAY</span>
                <span>Canon: {talaSystem} (120 Angulas)</span>
              </div>

              {/* Sculptural Wireframe Box */}
              <div className="my-6 h-52 bg-[#1b1612] rounded-2xl border-2 border-stone-800 flex items-center justify-center relative overflow-hidden p-4">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:12px_12px]" />

                {/* 10 Tala grid divisions */}
                <div className="absolute inset-x-8 inset-y-4 border border-amber-500/30 flex flex-col justify-between pointer-events-none">
                  {Array.from({ length: 10 }).map((_, idx) => (
                    <div key={idx} className="border-b border-amber-500/20 text-[8px] font-mono text-amber-400/60 pl-1">
                      Tala {10 - idx}: 12 Angulas
                    </div>
                  ))}
                </div>

                <div className="text-center relative z-10 space-y-1">
                  <div className="text-3xl">🕉️</div>
                  <div className="text-xs font-serif font-bold text-amber-200">
                    Chola Bronze Nataraja / Mahavishnu Iconometry
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400">
                    ✓ Head: 1 Tala (12 Angulas) | Neck to Navel: 3 Talas (36 Angulas) | Navel to Feet: 5 Talas (60 Angulas)
                  </div>
                </div>
              </div>

              <div className="text-xs font-serif text-stone-400 italic">
                Indic Application: Detects counterfeit or altered temple murtis by checking exact micro-ratio conformity to regional Shilpa Shastra lineages.
              </div>
            </div>
          </div>
        )}

        {/* ---------------- SENSOR 8: OCEANOGRAPHY (MARINE ARCHAEOLOGY & BATHYMETRY) ---------------- */}
        {activeSensor === "oceanography" && (() => {
          const oceanProfile = OCEANOGRAPHY_PROFILES[selectedOceanSiteIdx] || OCEANOGRAPHY_PROFILES[0];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 space-y-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase font-bold text-cyan-400 flex items-center gap-2">
                    <Anchor className="w-4 h-4" />
                    <span>Marine Archaeological Sector</span>
                  </h4>
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                    BATHYMETRY
                  </span>
                </div>

                {/* Submerged Site Selector */}
                <div className="space-y-2">
                  {OCEANOGRAPHY_PROFILES.map((site, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setSelectedOceanSiteIdx(sIdx)}
                      className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        selectedOceanSiteIdx === sIdx
                          ? "bg-cyan-950 text-cyan-100 border-cyan-500 shadow-md font-bold"
                          : "bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-750"
                      }`}
                    >
                      <div className="text-xs font-serif font-bold">{site.siteName}</div>
                      <div className="text-[10px] font-mono text-cyan-400 mt-0.5">
                        Depth: {site.submersionDepthMeters}m | {site.submergedStructuresCatalog.split(",")[0]}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Sonar Controls */}
                <div className="space-y-3 pt-2 border-t border-stone-800">
                  <span className="text-[11px] font-mono uppercase text-stone-400 font-bold block">
                    Acoustic Sonar Frequency:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {[120, 410].map((freq) => (
                      <button
                        key={freq}
                        onClick={() => setSonarFreqKhz(freq)}
                        className={`py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                          sonarFreqKhz === freq
                            ? "bg-cyan-600 text-white border-cyan-400 shadow-md"
                            : "bg-stone-800 text-stone-400 border-stone-700 hover:text-white"
                        }`}
                      >
                        {freq} kHz ({freq === 120 ? "Deep Penetration" : "High-Res Relief"})
                      </button>
                    ))}
                  </div>

                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs font-mono space-y-1">
                    <div className="text-stone-400">Tidal Current Velocity:</div>
                    <div className="text-cyan-300 font-bold">{oceanProfile.tidalHydrodynamics}</div>
                  </div>
                </div>
              </div>

              {/* Sonar Acoustic Waterfall & Submerged Feature Map */}
              <div className="lg:col-span-2 bg-[#0c141c] p-6 rounded-2xl border border-cyan-900/40 text-stone-100 flex flex-col justify-between space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-cyan-300 border-b border-cyan-900/40 pb-3">
                  <span className="font-bold">MULTI-BEAM BATHYMETRIC ACOUSTIC ECHOGRAM</span>
                  <span>Sensor: {oceanProfile.bathymetrySonarMethod.split("(")[0]}</span>
                </div>

                {/* Submarine Sonar Waterfall Visualizer */}
                <div className="h-56 bg-[#061019] rounded-2xl border-2 border-cyan-900/60 relative overflow-hidden p-4 flex flex-col justify-between">
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(6,182,212,0.08)_100%)] pointer-events-none" />
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Sonar Sweep Beam */}
                  <div className="absolute inset-x-0 h-1 bg-cyan-400/80 shadow-[0_0_15px_#22d3ee] animate-bounce top-1/3" />

                  <div className="relative z-10 flex justify-between items-start text-[11px] font-mono text-cyan-400">
                    <div>
                      <span className="font-bold text-white block">{oceanProfile.siteName}</span>
                      <span>Seabed Horizon: -{oceanProfile.submersionDepthMeters}m MSL</span>
                    </div>
                    <span className="bg-cyan-950/80 border border-cyan-700/80 px-2 py-0.5 rounded text-[10px]">
                      Acoustic Pulse: {sonarFreqKhz} kHz Active
                    </span>
                  </div>

                  <div className="relative z-10 bg-black/60 p-3 rounded-xl border border-cyan-800/40 backdrop-blur-sm space-y-1">
                    <div className="text-[10px] font-mono uppercase text-cyan-400 font-bold">
                      Sub-Bottom Acoustic Stratum:
                    </div>
                    <div className="text-xs font-sans text-stone-200">
                      {oceanProfile.subBottomAcousticStratum}
                    </div>
                  </div>
                </div>

                {/* Marine Archaeology Features Catalog */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase text-cyan-400 font-bold block">
                    Identified Submerged Architectural Artifacts & Anchors:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {oceanProfile.marineArchaeologyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="p-2.5 bg-stone-900/80 rounded-xl border border-cyan-900/30 text-xs font-sans text-stone-200 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ---------------- SENSOR 9: OCEANOLOGY (MARINE GEOSCIENCES & SEA-LEVEL CURVES) ---------------- */}
        {activeSensor === "oceanology" && (() => {
          const oceanologyProfile = OCEANOLOGY_PROFILES[selectedOceanologyIdx] || OCEANOLOGY_PROFILES[0];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 space-y-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase font-bold text-teal-400 flex items-center gap-2">
                    <Waves className="w-4 h-4" />
                    <span>Marine Geoscience Formation</span>
                  </h4>
                  <span className="text-[10px] font-mono text-teal-300 bg-teal-950 px-2 py-0.5 rounded border border-teal-800">
                    GEOSCIENCE
                  </span>
                </div>

                {/* Formation Selector */}
                <div className="space-y-2">
                  {OCEANOLOGY_PROFILES.map((form, fIdx) => (
                    <button
                      key={fIdx}
                      onClick={() => setSelectedOceanologyIdx(fIdx)}
                      className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        selectedOceanologyIdx === fIdx
                          ? "bg-teal-950 text-teal-100 border-teal-500 shadow-md font-bold"
                          : "bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-750"
                      }`}
                    >
                      <div className="text-xs font-serif font-bold">{form.formationName}</div>
                      <div className="text-[10px] font-mono text-teal-400 mt-0.5">
                        {form.luminescenceOSLAge}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Sea Level Slider */}
                <div className="space-y-2 pt-2 border-t border-stone-800">
                  <div className="flex justify-between text-xs font-mono text-stone-400">
                    <span>Transgression Chronology:</span>
                    <span className="text-teal-300 font-bold">{seaLevelSliderYearBCE} BCE</span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="12000"
                    step="500"
                    value={seaLevelSliderYearBCE}
                    onChange={(e) => setSeaLevelSliderYearBCE(parseInt(e.target.value))}
                    className="w-full accent-teal-500 bg-stone-700 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-500">
                    <span>2000 BCE (Late Holocene)</span>
                    <span>12000 BCE (Post-Glacial Inundation)</span>
                  </div>
                </div>

                <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs font-mono text-stone-300 space-y-1">
                  <div className="text-teal-400 font-bold">Luminescence OSL Geochronology:</div>
                  <div className="text-stone-200">{oceanologyProfile.luminescenceOSLAge}</div>
                </div>
              </div>

              {/* Geoscience Strata & Paleoclimatology Map */}
              <div className="lg:col-span-2 bg-[#0f1717] p-6 rounded-2xl border border-teal-900/40 text-stone-100 flex flex-col justify-between space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-teal-300 border-b border-teal-900/40 pb-3">
                  <span className="font-bold">HOLOCENE SEA-LEVEL CURVE & MARINE CORE TELEMETRY</span>
                  <span>Formation: {oceanologyProfile.formationName.split("(")[0]}</span>
                </div>

                <div className="p-4 bg-stone-900/90 rounded-2xl border border-teal-900/40 space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-stone-400">Sea-Level Delta vs Present MSL:</span>
                    <span className="text-teal-300 font-bold">{oceanologyProfile.holoceneSeaLevelDelta}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-800 text-xs font-mono text-teal-200">
                    <strong>Marine Sediment Core:</strong> {oceanologyProfile.marineSedimentCoreDepth}
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase text-teal-400 font-bold">
                      Coral Reef Paleoclimatology & Thermoluminescence Dating:
                    </span>
                    <p className="text-xs font-sans text-stone-300 leading-relaxed">
                      {oceanologyProfile.coralReefPaleoclimatology}
                    </p>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-stone-800">
                    <span className="text-[11px] font-mono uppercase text-stone-400 font-bold">
                      Geomorphological Evolution Model:
                    </span>
                    <p className="text-xs font-sans text-stone-300 leading-relaxed">
                      {oceanologyProfile.geomorphologicalEvolution}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-serif text-teal-300/80 italic">
                  Indic Application: Corroborates coastal sea-level inundation events recorded in Puranic traditions (e.g., Dwaraka Pravesha & Kumari Kandam shoreline shifts).
                </div>
              </div>
            </div>
          );
        })()}

        {/* ---------------- SENSOR 10: SEDIMENTOLOGY (FLUVIO-LACUSTRINE STRATIGRAPHY & ZIRCONS) ---------------- */}
        {activeSensor === "sedimentology" && (() => {
          const sedimentProfile = SEDIMENTOLOGY_PROFILES[selectedSedimentBasinIdx] || SEDIMENTOLOGY_PROFILES[0];
          const activeLayer = sedimentProfile.strataLayers[selectedSedimentLayerIdx] || sedimentProfile.strataLayers[0];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 space-y-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-2">
                    <Mountain className="w-4 h-4" />
                    <span>River Basin Borehole Core</span>
                  </h4>
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                    STRATIGRAPHY
                  </span>
                </div>

                {/* Basin Selector */}
                <div className="space-y-2">
                  {SEDIMENTOLOGY_PROFILES.map((basin, bIdx) => (
                    <button
                      key={bIdx}
                      onClick={() => {
                        setSelectedSedimentBasinIdx(bIdx);
                        setSelectedSedimentLayerIdx(0);
                      }}
                      className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        selectedSedimentBasinIdx === bIdx
                          ? "bg-amber-950 text-amber-100 border-amber-500 shadow-md font-bold"
                          : "bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-750"
                      }`}
                    >
                      <div className="text-xs font-serif font-bold">{basin.riverBasin}</div>
                      <div className="text-[10px] font-mono text-amber-400 mt-0.5">
                        {basin.boreholeId} (Depth: {basin.depthMeters}m)
                      </div>
                    </button>
                  ))}
                </div>

                {/* Stratigraphic Layer Selector */}
                <div className="space-y-2 pt-2 border-t border-stone-800">
                  <span className="text-[11px] font-mono uppercase text-stone-400 font-bold block">
                    Select Borehole Core Stratum:
                  </span>
                  <div className="space-y-1.5">
                    {sedimentProfile.strataLayers.map((layer, lIdx) => (
                      <button
                        key={lIdx}
                        onClick={() => setSelectedSedimentLayerIdx(lIdx)}
                        className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all cursor-pointer ${
                          selectedSedimentLayerIdx === lIdx
                            ? "bg-amber-900/80 text-white border-amber-400 font-bold"
                            : "bg-stone-950 text-stone-400 border-stone-800 hover:text-stone-200"
                        }`}
                      >
                        <div className="flex justify-between font-mono text-[10px]">
                          <span>{layer.depthRange}</span>
                          <span className="text-amber-300">{layer.calibratedDateBCE}</span>
                        </div>
                        <div className="truncate font-serif text-xs text-stone-200 mt-0.5">
                          {layer.sedimentType}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Stratum Inspector & Detrital Zircon Provenance */}
              <div className="lg:col-span-2 bg-[#171410] p-6 rounded-2xl border border-amber-900/40 text-stone-100 flex flex-col justify-between space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-amber-300 border-b border-amber-900/40 pb-3">
                  <span className="font-bold">FLUVIO-LACUSTRINE SEDIMENTARY DRILL CORE LOG</span>
                  <span>Borehole: {sedimentProfile.boreholeId}</span>
                </div>

                {/* Selected Stratum Card */}
                <div className="p-4 bg-stone-900/90 rounded-2xl border border-amber-800/40 space-y-3">
                  <div className="flex flex-wrap justify-between items-center gap-2 border-b border-stone-800 pb-2">
                    <span className="text-xs font-mono uppercase text-amber-400 font-bold">
                      Depth: {activeLayer.depthRange} | Epoch: {activeLayer.calibratedDateBCE}
                    </span>
                    <span className="text-[10px] font-mono bg-stone-800 text-stone-300 px-2 py-0.5 rounded">
                      Grain Size: {activeLayer.grainSizePhi} φ
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-stone-400 uppercase font-bold">
                      Sedimentary Petrology & Minerals:
                    </span>
                    <div className="text-xs font-serif text-amber-100">
                      {activeLayer.mineralComposition}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-950/70 border border-amber-700/60 text-xs font-sans text-amber-200 leading-relaxed">
                    <strong>Paleohydrology Insight:</strong> {activeLayer.paleoHydrologyInsight}
                  </div>
                </div>

                {/* Detrital Zircon Provenance Fingerprint */}
                <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-bold">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Detrital Zircon U-Pb Provenance Signature</span>
                  </div>
                  <p className="text-xs font-sans text-stone-300 leading-relaxed">
                    {sedimentProfile.zirconProvenanceSignature}
                  </p>
                  <div className="text-[11px] font-mono text-stone-400 pt-1 border-t border-stone-900">
                    <strong>Monsoon Varve Signature:</strong> {sedimentProfile.monsoonVarvePattern}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ---------------- SENSOR 11: GENOLOGY / PALEOGENOMICS & ANCIENT DNA ---------------- */}
        {activeSensor === "genology" && (() => {
          const genologyProfile = GENOLOGY_PROFILES[selectedGenologyIdx] || GENOLOGY_PROFILES[0];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 space-y-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase font-bold text-purple-400 flex items-center gap-2">
                    <Dna className="w-4 h-4" />
                    <span>Ancient Genome Sample</span>
                  </h4>
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">
                    aDNA SEQUENCER
                  </span>
                </div>

                {/* Sample Selector */}
                <div className="space-y-2">
                  {GENOLOGY_PROFILES.map((sample, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setSelectedGenologyIdx(sIdx)}
                      className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        selectedGenologyIdx === sIdx
                          ? "bg-purple-950 text-purple-100 border-purple-500 shadow-md font-bold"
                          : "bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-750"
                      }`}
                    >
                      <div className="text-xs font-serif font-bold">{sample.sampleId}</div>
                      <div className="text-[10px] font-mono text-purple-400 mt-0.5">
                        Dating: {sample.c14DatingRange}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Sub-view switcher */}
                <div className="space-y-2 pt-2 border-t border-stone-800">
                  <span className="text-[11px] font-mono uppercase text-stone-400 font-bold block">
                    Analytical Dimension:
                  </span>
                  <div className="grid grid-cols-3 gap-1">
                    {[
                      { id: "haplogroups", label: "Haplogroups" },
                      { id: "damage_curves", label: "C-to-T Damage" },
                      { id: "osteology", label: "Osteology" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveGenologyView(tab.id as any)}
                        className={`py-2 rounded-xl text-[10px] font-mono font-bold transition-all border ${
                          activeGenologyView === tab.id
                            ? "bg-purple-600 text-white border-purple-400"
                            : "bg-stone-800 text-stone-400 border-stone-700 hover:text-white"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs font-mono text-stone-300 space-y-1">
                  <div className="text-purple-400 font-bold">Endogenous aDNA Yield:</div>
                  <div className="text-emerald-400 font-bold">{genologyProfile.endogenousDnaYieldPercent}% (High Authentication)</div>
                </div>
              </div>

              {/* Genomic Architecture & Continuity Card */}
              <div className="lg:col-span-2 bg-[#16101c] p-6 rounded-2xl border border-purple-900/40 text-stone-100 flex flex-col justify-between space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-purple-300 border-b border-purple-900/40 pb-3">
                  <span className="font-bold">NEXT-GEN HIGH-THROUGHPUT aDNA PALEOGENOMICS</span>
                  <span>Sample: {genologyProfile.sampleId.split("(")[0]}</span>
                </div>

                {/* Dynamic Content based on View */}
                {activeGenologyView === "haplogroups" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 bg-stone-900 rounded-xl border border-purple-900/40 space-y-1">
                        <span className="text-[10px] font-mono uppercase text-purple-400 font-bold">
                          Maternal mtDNA Haplogroup:
                        </span>
                        <div className="text-base font-serif font-bold text-amber-300">
                          {genologyProfile.mTDNAHaplogroup}
                        </div>
                      </div>

                      <div className="p-3.5 bg-stone-900 rounded-xl border border-purple-900/40 space-y-1">
                        <span className="text-[10px] font-mono uppercase text-purple-400 font-bold">
                          Paternal Y-DNA Lineage:
                        </span>
                        <div className="text-base font-serif font-bold text-purple-300">
                          {genologyProfile.yDnaHaplogroup}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-purple-950/70 border border-purple-700/60 space-y-2">
                      <span className="text-xs font-mono uppercase text-purple-300 font-bold block">
                        Ancestry Continuity Clade (Shinde et al. / Cell 2019):
                      </span>
                      <p className="text-xs font-sans text-stone-200 leading-relaxed">
                        {genologyProfile.ancestryContinuityClade}
                      </p>
                    </div>
                  </div>
                )}

                {activeGenologyView === "damage_curves" && (
                  <div className="p-4 bg-stone-900 rounded-xl border border-purple-900/40 space-y-3">
                    <span className="text-xs font-mono uppercase text-purple-400 font-bold block">
                      Post-Mortem Cytosine Deamination (C-to-T Damage Profile):
                    </span>
                    <div className="p-3 rounded-lg bg-stone-950 border border-stone-800 text-xs font-mono text-emerald-300">
                      {genologyProfile.damagePatternCtoT}
                    </div>
                    <p className="text-xs font-sans text-stone-300 leading-relaxed">
                      Terminal C-to-T transition rates exceeding 15% confirm authentic ancient DNA preservation and strictly rule out modern laboratory contamination.
                    </p>
                  </div>
                )}

                {activeGenologyView === "osteology" && (
                  <div className="p-4 bg-stone-900 rounded-xl border border-purple-900/40 space-y-3">
                    <span className="text-xs font-mono uppercase text-purple-400 font-bold block">
                      Forensic Osteology & Paleopathology:
                    </span>
                    <p className="text-xs font-serif text-stone-200 leading-relaxed">
                      {genologyProfile.osteologicalFindings}
                    </p>
                  </div>
                )}

                <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                  <span className="text-[11px] font-mono uppercase text-amber-400 font-bold block">
                    Population Genomics & Civilizational Continuity Insight:
                  </span>
                  <p className="text-xs font-sans text-stone-300 leading-relaxed">
                    {genologyProfile.populationGenomicsInsight}
                  </p>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
