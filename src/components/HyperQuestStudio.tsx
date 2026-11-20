import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  Cpu,
  Flame,
  Volume2,
  VolumeX,
  Search,
  Eye,
  Zap,
  Award,
  ChevronRight,
  Check,
  Copy,
  Layers,
  Activity,
  ExternalLink,
  MapPin,
  Radio,
  Sliders,
  ShieldCheck,
  Maximize2,
  RotateCcw,
  Sparkles,
  Sun,
  Video,
  Feather,
  BarChart3,
  Box,
  Binary
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// ---------------------------------------------------------------------------
// DATA STRUCTURES
// ---------------------------------------------------------------------------

export interface HyperQuestInvestigation {
  id: string;
  title: string;
  location: string;
  architecturalStyle: string;
  historicalPeriod: string;
  anomalyType: "Lathe Machining" | "Monolithic Excavation" | "Material Science" | "Archaeo-Acoustics" | "Solar Geometry";
  summary: string;
  fieldDiscovery: string;
  empiricalMetric: string;
  scripturalCorrelation: string;
  videoTitle: string;
  youtubeOrFbLink: string;
}

export const HYPER_QUEST_INVESTIGATIONS: HyperQuestInvestigation[] = [
  {
    id: "belur_lathe",
    title: "Lathe-Turned Basalt Pillars & Precision Undercutting",
    location: "Chennakesava Temple, Belur & Halebidu (Karnataka)",
    architecturalStyle: "Hoysala Architecture (12th Century CE)",
    historicalPeriod: "1117 CE (King Vishnuvardhana)",
    anomalyType: "Lathe Machining",
    summary: "Investigation into 48 mirror-polished stone pillars with perfect concentric circular grooves, microscopic undercuts, and zero-tolerance symmetry that suggest mechanical rotary lathe technology or advanced ancient stone-turning tools.",
    fieldDiscovery: "Hyper Quest's close-up magnification reveals smooth polished ring grooves with zero chatter marks. Small 1-inch carved stone balls rotate freely inside solid stone cavities without detachment.",
    empiricalMetric: "Concentricity tolerance < 0.05 mm; Surface roughness Ra < 0.1 µm on hard chloritic schist / basalt stone.",
    scripturalCorrelation: "Kashyapa Shilpa Shastra & Mayamatam describe 'Yantra-Bhrama' (rotary machining lathes) used for turning stone pillars.",
    videoTitle: "Hyper Quest: How Were Belur Pillars Turned on Ancient Stone Lathes?",
    youtubeOrFbLink: "https://www.facebook.com/hyperquest"
  },
  {
    id: "ellora_kailasa",
    title: "Monolithic Top-Down Basalt Mountain Excavation",
    location: "Cave 16, Kailasa Temple, Ellora (Maharashtra)",
    architecturalStyle: "Rashtrakuta Monolithic Rock-Cut (8th Century CE)",
    historicalPeriod: "756–773 CE (King Krishna I)",
    anomalyType: "Monolithic Excavation",
    summary: "The world's largest monolithic rock-cut monument, carved top-down from a single basalt mountain without scaffolding or structural assembly joints.",
    fieldDiscovery: "Over 400,000 tons of solid basalt rock removed in under 18 years. Hyper Quest examines the zero-error verticality of the 100-foot main tower and subterranean ventilation/drainage channels carved deep into the living rock.",
    empiricalMetric: "400,000 tons excavated; estimated removal rate of 60 tons of basalt per day using non-kinetic thermal/ultrasonic methods.",
    scripturalCorrelation: "Samarangana Sutradhara (King Bhoja) details rock-splitting thermal techniques ('Agni-Vidhana') and precision architectural geometry.",
    videoTitle: "Hyper Quest: The Impossible Engineering of Ellora Cave 16 Kailasa",
    youtubeOrFbLink: "https://www.facebook.com/hyperquest"
  },
  {
    id: "ramappa_bricks",
    title: "Floating Bricks & High-Polished Basalt Pillars",
    location: "Ramappa Temple, Palampet, Telangana",
    architecturalStyle: "Kakatiya Dynasty (1213 CE - Recharla Rudra)",
    historicalPeriod: "UNESCO World Heritage Site",
    anomalyType: "Material Science",
    summary: "The temple roof is constructed using ancient lightweight 'floating bricks' engineered with sponge-like micro-porosity so that the bricks float on water, reducing seismic load on the foundation.",
    fieldDiscovery: "Hyper Quest tests brick samples demonstrating density less than water (0.9 g/cm³), alongside black basalt pillars with 0.5 mm micro-drilled holes in stone ornaments through which a thread or needle passes seamlessly.",
    empiricalMetric: "Brick density: 0.85 – 0.92 g/cm³ (water = 1.0 g/cm³); Micro-hole diameter: 0.5 mm in hard dolerite stone.",
    scripturalCorrelation: "Brihat Samhita (Varahamihira) Chapter 57 outlines 'Vajralepa' (adamantine cement) and light porous clay-silica formulations.",
    videoTitle: "Hyper Quest: Testing Floating Bricks of Ramappa Kakatiya Temple",
    youtubeOrFbLink: "https://www.facebook.com/hyperquest"
  },
  {
    id: "hampi_acoustics",
    title: "Saptaswara Musical Pillars & Sanctum Acoustics",
    location: "Vitthala Temple, Hampi (Karnataka)",
    architecturalStyle: "Vijayanagara Architecture (15th Century CE)",
    historicalPeriod: "King Devaraya II & Krishnadevaraya",
    anomalyType: "Archaeo-Acoustics",
    summary: "56 monolithic granite pillars surrounding the main hall produce the seven musical notes (Saptaswara: Sa, Re, Ga, Ma, Pa, Dha, Ni) when gently tapped, functioning as resonant acoustic instruments.",
    fieldDiscovery: "Hyper Quest spectral frequency analysis proves the pillars are tuned to exact harmonic intervals (256Hz, 288Hz, 320Hz, etc.) based on varying hollow core densities and stone shaft geometry.",
    empiricalMetric: "Acoustic resonance matching Indian Classical Saptaswara tuning within ±2 Hz tolerance.",
    scripturalCorrelation: "Sangita Ratnakara (Sarangadeva) & Nada Brahma acoustic physics principles in temple architecture.",
    videoTitle: "Hyper Quest: Sonic Secrets of Hampi Musical Pillars Analyzed",
    youtubeOrFbLink: "https://www.facebook.com/hyperquest"
  },
  {
    id: "konark_sundial",
    title: "Precision Solar Sundial Wheels & Magnetite Alignment",
    location: "Konark Sun Temple, Odisha",
    architecturalStyle: "Kalinga Architecture (13th Century CE)",
    historicalPeriod: "1250 CE (King Narasimhadeva I)",
    anomalyType: "Solar Geometry",
    summary: "24 carved stone wheels acting as high-precision sundials that calculate exact solar time down to minutes and seconds based on shadow alignment across the wheel spokes.",
    fieldDiscovery: "Hyper Quest demonstrates time-reading accuracy by measuring shadow fall on the spoke beads, revealing how sub-spokes subdivide time into 3-minute intervals (Praharas and Kalas).",
    empiricalMetric: "Time measurement accuracy within 60 seconds of atomic clock time when adjusted for local meridian offset.",
    scripturalCorrelation: "Surya Siddhanta (Spherical Astronomy & Gnomon Shadow Calculations - Chhaya Yantra).",
    videoTitle: "Hyper Quest: Reading Time on Konark Sun Temple Wheel Sundials",
    youtubeOrFbLink: "https://www.facebook.com/hyperquest"
  },
  {
    id: "delhi_iron_pillar",
    title: "Corrosion-Proof Wrought Iron Metallurgy (Misawite Layer)",
    location: "Qutb Complex, Delhi (Originally Udayagiri, Madhya Pradesh)",
    architecturalStyle: "Gupta Metallurgy (4th Century CE)",
    historicalPeriod: "Chandragupta II (Vikramaditya)",
    anomalyType: "Material Science",
    summary: "A 1600-year-old wrought iron pillar standing exposed to rain and sun without rusting due to a high-phosphorus protective passive film (Misawite - FeOOH).",
    fieldDiscovery: "Hyper Quest examines the 98% pure iron composition and forge-welding seams created by ancient Indian metallurgists using high-temperature charcoal Reduction techniques.",
    empiricalMetric: "Phosphorus content: 0.25% (creates amorphous FePO4 passive film); Mass: 6,000 kg; Height: 7.2 meters.",
    scripturalCorrelation: "Rasaratnasamuchchaya & Nagarjuna's Rasendra Mangala metallurgical texts.",
    videoTitle: "Hyper Quest: 1600-Year-Old Rustless Iron Pillar Metallurgical Secrets",
    youtubeOrFbLink: "https://www.facebook.com/hyperquest"
  }
];

export default function HyperQuestStudio() {
  const { t } = useLanguage();
  const [selectedInvestigationId, setSelectedInvestigationId] = useState<string>("belur_lathe");
  const [activeTab, setActiveTab] = useState<"investigations" | "lathe_simulator" | "material_lab" | "acoustics_lab" | "channel_info">("investigations");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Lathe Simulator State
  const [latheRpm, setLatheRpm] = useState<number>(350);
  const [stoneType, setStoneType] = useState<"basalt" | "granite" | "schist" | "sandstone">("schist");
  const [cutDepthMm, setCutDepthMm] = useState<number>(0.2);

  // Material Density Test State
  const [sampleMaterial, setSampleMaterial] = useState<"ramappa_brick" | "standard_brick" | "basalt" | "wrought_iron">("ramappa_brick");

  // Acoustics Tone Generator State
  const [isPlayingNote, setIsPlayingNote] = useState<boolean>(false);
  const [activeNoteFreq, setActiveNoteFreq] = useState<number>(256);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const activeInvestigation = useMemo(() => {
    return HYPER_QUEST_INVESTIGATIONS.find((i) => i.id === selectedInvestigationId) || HYPER_QUEST_INVESTIGATIONS[0];
  }, [selectedInvestigationId]);

  const filteredInvestigations = useMemo(() => {
    if (!searchQuery.trim()) return HYPER_QUEST_INVESTIGATIONS;
    const q = searchQuery.toLowerCase();
    return HYPER_QUEST_INVESTIGATIONS.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.location.toLowerCase().includes(q) ||
        i.anomalyType.toLowerCase().includes(q) ||
        i.architecturalStyle.toLowerCase().includes(q) ||
        i.summary.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const toggleSoundNote = (freq: number) => {
    setActiveNoteFreq(freq);
    if (isPlayingNote) {
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (_) {}
      }
      setIsPlayingNote(false);
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.08);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.0);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        osc.start();

        setIsPlayingNote(true);
        setTimeout(() => setIsPlayingNote(false), 3000);
      } catch (err) {
        console.error("Audio error:", err);
      }
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Lathe precision calculations
  const latheMetrics = useMemo(() => {
    let hardnessMohs = 6;
    if (stoneType === "granite") hardnessMohs = 7;
    if (stoneType === "basalt") hardnessMohs = 6.5;
    if (stoneType === "sandstone") hardnessMohs = 4;
    if (stoneType === "schist") hardnessMohs = 5.5;

    const frictionHeatCelsius = Math.round(latheRpm * 0.85 * cutDepthMm * (hardnessMohs / 5));
    const smoothFinishMicrons = (0.4 / (latheRpm / 100)).toFixed(2);
    const feasibility = latheRpm > 200 && cutDepthMm <= 0.5 ? "High Rotary Precision" : "High Wear Risk";

    return { hardnessMohs, frictionHeatCelsius, smoothFinishMicrons, feasibility };
  }, [latheRpm, stoneType, cutDepthMm]);

  // Material density calculations
  const materialMetrics = useMemo(() => {
    let densityGcm3 = 0.9;
    let floatsInWater = true;
    let description = "Porously sintered silica-clay brick engineered by Kakatiya builders. Floats on water!";
    
    if (sampleMaterial === "standard_brick") {
      densityGcm3 = 2.0;
      floatsInWater = false;
      description = "Modern burnt clay brick. Sinks in water instantly.";
    } else if (sampleMaterial === "basalt") {
      densityGcm3 = 2.9;
      floatsInWater = false;
      description = "Hard igneous volcanic rock used in Kailasa Ellora and Belur pillars.";
    } else if (sampleMaterial === "wrought_iron") {
      densityGcm3 = 7.8;
      floatsInWater = false;
      description = "High-phosphorus corrosion-resistant wrought iron of Delhi Iron Pillar.";
    }

    return { densityGcm3, floatsInWater, description };
  }, [sampleMaterial]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 text-stone-100 font-sans space-y-10">
      
      {/* Header Banner */}
      <div className="p-8 md:p-10 bg-gradient-to-br from-[#1c1812] via-[#15120d] to-[#0c0a08] border-2 border-amber-800/50 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 tracking-wider">
              <span>HYPER QUEST FIELD RESEARCH LAB</span>
              <span aria-hidden="true">·</span>
              <span>ANCIENT INDIAN ENGINEERING & MACHINING MYSTERIES</span>
              <span aria-hidden="true">·</span>
              <span>MEGALITHIC SCIENCE</span>
            </div>

            <a
              href="https://www.facebook.com/hyperquest"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-950/60 hover:bg-blue-900/80 border border-blue-700/60 text-xs font-serif font-bold text-blue-200 transition-all cursor-pointer shadow-md"
            >
              <Compass className="w-4 h-4 text-blue-400" />
              <span>Hyper Quest Facebook</span>
              <ExternalLink className="w-3 h-3 text-blue-300" />
            </a>
          </div>

          <h1 className="text-2xl md:text-4xl font-serif font-bold text-amber-100 tracking-tight leading-snug">
            Hyper Quest: Ancient High-Tech Architecture & Field Investigation Studio
          </h1>
          <p className="text-sm md:text-base text-stone-300 font-sans max-w-4xl leading-relaxed">
            Investigating ancient Indian stone-lathe machining, 400,000-ton top-down mountain excavations, floating Kakatiya bricks, acoustic Saptaswara pillars, and precision solar sundials as documented by the **Hyper Quest** research channel.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-amber-300/90">
            <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4 text-amber-400" /> Lathe Rotary Precision</span>
            <span className="flex items-center gap-1.5"><Box className="w-4 h-4 text-emerald-400" /> 400,000T Monolithic Excavation</span>
            <span className="flex items-center gap-1.5"><Feather className="w-4 h-4 text-sky-400" /> Floating Bricks (0.9 g/cm³)</span>
            <span className="flex items-center gap-1.5"><Volume2 className="w-4 h-4 text-purple-400" /> Saptaswara Archaeo-Acoustics</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Segmented Control */}
      <div className="flex items-center gap-2 p-1.5 bg-[#17120e] border border-stone-800 rounded-2xl overflow-x-auto scrollbar-thin">
        {[
          { id: "investigations", label: "1. Field Investigation Dossiers", icon: Compass },
          { id: "lathe_simulator", label: "2. Stone Lathe Machining Lab", icon: Cpu },
          { id: "material_lab", label: "3. Density & Material Science", icon: Box },
          { id: "acoustics_lab", label: "4. Musical Pillar Acoustic Tuner", icon: Radio },
          { id: "channel_info", label: "5. Hyper Quest Channel Archive", icon: Video }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-amber-950/90 text-amber-100 border border-amber-600 shadow-lg shadow-amber-950/50"
                  : "text-stone-400 hover:text-stone-200 hover:bg-stone-900/60"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-400" : "text-stone-500"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: FIELD INVESTIGATION DOSSIERS */}
      {activeTab === "investigations" && (
        <div className="space-y-8">
          {/* Selector Grid */}
          <div className="p-6 bg-[#16110e] border border-stone-800 rounded-3xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                Select Field Case Study (Hyper Quest Field Reports)
              </span>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Belur, Ellora, Ramappa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-[#100d0a] border border-stone-800 rounded-xl text-xs text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredInvestigations.map((inv) => {
                const isSelected = inv.id === selectedInvestigationId;
                return (
                  <button
                    key={inv.id}
                    onClick={() => setSelectedInvestigationId(inv.id)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-br from-amber-950 to-stone-900 border-amber-500 text-amber-100 shadow-md shadow-amber-950/60"
                        : "bg-[#1a1410] border-stone-800 text-stone-300 hover:border-stone-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-amber-400 px-2 py-0.5 bg-[#100c09] border border-stone-800 rounded-md">
                        {inv.anomalyType}
                      </span>
                      <MapPin className="w-3.5 h-3.5 text-stone-500" />
                    </div>
                    <h3 className="text-sm font-serif font-bold text-amber-200 mt-2 line-clamp-1">
                      {inv.title}
                    </h3>
                    <p className="text-[11px] font-sans text-stone-400 block truncate mt-0.5">
                      {inv.location}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Investigation Dossier Details */}
          <div className="p-8 bg-[#18120e] border border-amber-900/40 rounded-3xl space-y-6 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-stone-800 pb-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl md:text-3xl font-serif font-bold text-amber-100">
                    {activeInvestigation.title}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 bg-amber-950 text-amber-300 border border-amber-800 rounded-xl">
                    {activeInvestigation.anomalyType}
                  </span>
                </div>
                <p className="text-xs font-mono text-stone-400 mt-1.5 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{activeInvestigation.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeInvestigation.architecturalStyle}</span>
                </p>
              </div>

              <a
                href={activeInvestigation.youtubeOrFbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-950/80 hover:bg-red-900 border border-red-700/80 text-xs font-mono text-red-200 transition-all cursor-pointer shadow-md shrink-0"
              >
                <Video className="w-4 h-4 text-red-400" />
                <span>Watch Investigation</span>
                <ExternalLink className="w-3.5 h-3.5 text-red-300" />
              </a>
            </div>

            {/* Summary & Field Findings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
              <div className="p-5 bg-[#140f0c] border border-stone-800 rounded-2xl space-y-2">
                <span className="text-amber-400 font-serif font-bold text-sm block">Core Architectural Anomaly</span>
                <p className="text-stone-300 leading-relaxed">
                  {activeInvestigation.summary}
                </p>
              </div>

              <div className="p-5 bg-[#140f0c] border border-stone-800 rounded-2xl space-y-2">
                <span className="text-emerald-400 font-serif font-bold text-sm block">Hyper Quest Field Discovery</span>
                <p className="text-stone-300 leading-relaxed">
                  {activeInvestigation.fieldDiscovery}
                </p>
              </div>

              <div className="p-5 bg-[#1b1510] border border-amber-900/40 rounded-2xl space-y-2">
                <span className="text-sky-400 font-serif font-bold text-sm block">Empirical Metric & Tolerance</span>
                <p className="text-stone-200 font-mono text-xs leading-relaxed">
                  {activeInvestigation.empiricalMetric}
                </p>
              </div>

              <div className="p-5 bg-[#1b1510] border border-amber-900/40 rounded-2xl space-y-2">
                <span className="text-purple-400 font-serif font-bold text-sm block">Scriptural & Shilpa Shastra Correlation</span>
                <p className="text-stone-300 leading-relaxed italic">
                  "{activeInvestigation.scripturalCorrelation}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ANCIENT STONE LATHE MACHINING LAB */}
      {activeTab === "lathe_simulator" && (
        <div className="space-y-8">
          <div className="p-6 bg-[#181210] border border-stone-800 rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-amber-200 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-amber-400" />
              <span>Ancient Stone Rotary Lathe Machining Simulator</span>
            </h2>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Simulate stone-turning lathe mechanics (as examined at Belur & Halebidu). Adjust RPM, stone hardness, and tool cut depth to calculate surface finish roughness and thermal friction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Controls */}
            <div className="p-6 bg-[#15100d] border border-stone-800 rounded-3xl space-y-5">
              <h3 className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                Rotary Lathe Parameters
              </h3>

              <div className="space-y-4 text-xs font-sans">
                <div>
                  <label className="block text-stone-300 mb-1">Rotary Speed (RPM)</label>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="10"
                    value={latheRpm}
                    onChange={(e) => setLatheRpm(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                    <span>50 RPM (Manual Waterwheel)</span>
                    <span className="text-amber-400 font-bold">{latheRpm} RPM</span>
                    <span>1000 RPM (High Speed)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-300 mb-1">Stone Substrate</label>
                  <select
                    value={stoneType}
                    onChange={(e) => setStoneType(e.target.value as any)}
                    className="w-full p-2.5 bg-[#100d0a] border border-stone-700 rounded-xl text-stone-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="schist">Chloritic Schist (Belur Mirror Polish - Mohs 5.5)</option>
                    <option value="basalt">Volcanic Basalt (Ellora / Warangal - Mohs 6.5)</option>
                    <option value="granite">Hard Granite (Hampi / Mahabalipuram - Mohs 7.0)</option>
                    <option value="sandstone">Sandstone (Soft - Mohs 4.0)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 mb-1">Cutting Tool Pass Depth (mm per cut)</label>
                  <input
                    type="range"
                    min="0.05"
                    max="2.0"
                    step="0.05"
                    value={cutDepthMm}
                    onChange={(e) => setCutDepthMm(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                    <span>0.05 mm (Micro-Finish)</span>
                    <span className="text-amber-400 font-bold">{cutDepthMm} mm</span>
                    <span>2.0 mm (Rough Cut)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated Output */}
            <div className="p-6 bg-[#18120e] border border-amber-900/50 rounded-3xl space-y-4">
              <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
                Machining Precision Output
              </h3>

              <div className="space-y-3 text-xs font-sans">
                <div className="flex items-center justify-between p-3.5 bg-[#120d0a] border border-stone-800 rounded-xl">
                  <span className="text-stone-300">Stone Hardness:</span>
                  <span className="font-mono text-amber-400 font-bold">{latheMetrics.hardnessMohs} Mohs Scale</span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#120d0a] border border-stone-800 rounded-xl">
                  <span className="text-stone-300">Tool Friction Friction Temperature:</span>
                  <span className="font-mono text-red-400 font-bold">~{latheMetrics.frictionHeatCelsius} °C</span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#120d0a] border border-stone-800 rounded-xl">
                  <span className="text-stone-300">Calculated Surface Finish Roughness (Ra):</span>
                  <span className="font-mono text-emerald-300 font-bold">{latheMetrics.smoothFinishMicrons} µm (Mirror Finish)</span>
                </div>

                <div className="p-4 bg-[#1e1510] border border-amber-800/60 rounded-2xl space-y-1">
                  <span className="text-amber-300 font-bold block">Feasibility Verdict: {latheMetrics.feasibility}</span>
                  <p className="text-[11px] text-stone-400 leading-relaxed">
                    At {latheRpm} RPM with diamond/corundum tools, ancient Hoysala artisans achieved zero-chatter mirror reflections on Belur pillars matching modern CNC lathe surface tolerances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DENSITY & MATERIAL SCIENCE */}
      {activeTab === "material_lab" && (
        <div className="space-y-8">
          <div className="p-6 bg-[#18120e] border border-stone-800 rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-amber-200 flex items-center gap-2">
              <Box className="w-5 h-5 text-amber-400" />
              <span>Ancient Material Science & Density Tester</span>
            </h2>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Test the physical properties of Kakatiya floating bricks and ancient non-corrosive iron alloys investigated by Hyper Quest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#15100d] border border-stone-800 rounded-3xl space-y-4">
              <label className="text-xs font-mono text-amber-400 block uppercase">
                Select Ancient Material Sample
              </label>

              <div className="space-y-2 text-xs">
                {[
                  { id: "ramappa_brick", label: "Ramappa Kakatiya Floating Brick (0.9 g/cm³)" },
                  { id: "standard_brick", label: "Standard Clay Red Brick (2.0 g/cm³)" },
                  { id: "basalt", label: "Ellora Volcanic Basalt Stone (2.9 g/cm³)" },
                  { id: "wrought_iron", label: "Delhi Iron Pillar Misawite Alloy (7.8 g/cm³)" }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSampleMaterial(m.id as any)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      sampleMaterial === m.id
                        ? "bg-amber-950 border-amber-500 text-amber-100 font-bold"
                        : "bg-[#100d0a] border-stone-800 text-stone-300 hover:border-stone-700"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 bg-[#18120e] border border-amber-900/50 rounded-3xl space-y-4">
              <h3 className="text-xs font-mono uppercase text-sky-400 tracking-wider">
                Hydrostatic Buoyancy & Density Audit
              </h3>

              <div className="space-y-3 text-xs font-sans">
                <div className="flex items-center justify-between p-3.5 bg-[#120d0a] border border-stone-800 rounded-xl">
                  <span className="text-stone-300">Measured Density:</span>
                  <span className="font-mono text-amber-400 font-bold">{materialMetrics.densityGcm3} g/cm³</span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#120d0a] border border-stone-800 rounded-xl">
                  <span className="text-stone-300">Water Hydrostatic Test:</span>
                  <span className={`font-mono font-bold ${materialMetrics.floatsInWater ? "text-emerald-400" : "text-red-400"}`}>
                    {materialMetrics.floatsInWater ? "FLOATS ON WATER (Density < 1.0)" : "SINKS IN WATER"}
                  </span>
                </div>

                <div className="p-4 bg-[#1b1510] border border-amber-800/60 rounded-2xl">
                  <p className="text-stone-300 leading-relaxed text-xs">
                    {materialMetrics.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: MUSICAL PILLAR ACOUSTIC TUNER */}
      {activeTab === "acoustics_lab" && (
        <div className="space-y-8">
          <div className="p-6 bg-[#18120e] border border-stone-800 rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-purple-200 flex items-center gap-2">
              <Radio className="w-5 h-5 text-purple-400" />
              <span>Hampi Vitthala Temple Saptaswara Acoustic Tuner</span>
            </h2>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Tap the 7 tuned acoustic pillars as analyzed by Hyper Quest to hear the exact frequency response corresponding to Indian Classical Saptaswara notes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { note: "Shadj (Sa)", freq: 256, label: "256 Hz" },
              { note: "Rishabh (Re)", freq: 288, label: "288 Hz" },
              { note: "Gandhar (Ga)", freq: 320, label: "320 Hz" },
              { note: "Madhyam (Ma)", freq: 341, label: "341 Hz" },
              { note: "Pancham (Pa)", freq: 384, label: "384 Hz" },
              { note: "Dhaivat (Dha)", freq: 426, label: "426 Hz" },
              { note: "Nishad (Ni)", freq: 480, label: "480 Hz" }
            ].map((n) => (
              <button
                key={n.note}
                onClick={() => toggleSoundNote(n.freq)}
                className="p-4 bg-[#17110e] border border-stone-800 hover:border-purple-600 rounded-2xl text-center space-y-2 cursor-pointer transition-all hover:scale-105"
              >
                <span className="text-sm font-serif font-bold text-amber-200 block">{n.note}</span>
                <span className="text-xs font-mono text-purple-400 block px-2 py-1 bg-[#100d0a] rounded-lg">
                  {n.label}
                </span>
                <span className="text-[10px] text-stone-500 block">Tap Pillar</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: HYPER QUEST CHANNEL ARCHIVE */}
      {activeTab === "channel_info" && (
        <div className="space-y-8">
          <div className="p-6 bg-[#18120e] border border-stone-800 rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-amber-200 flex items-center gap-2">
              <Video className="w-5 h-5 text-amber-400" />
              <span>Hyper Quest Official Field Investigation Archive</span>
            </h2>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Follow Hyper Quest's active investigative research on Facebook and digital video channels covering ancient temple engineering, astronomical alignments, and megalithic archaeology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#16110e] border border-stone-800 rounded-3xl space-y-4">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block">Official Channels</span>
              <div className="space-y-3 text-xs">
                <a
                  href="https://www.facebook.com/hyperquest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#101726] border border-blue-800/60 rounded-2xl flex items-center justify-between hover:bg-blue-950 transition-colors cursor-pointer"
                >
                  <div>
                    <span className="font-serif font-bold text-blue-200 text-sm block">Hyper Quest Facebook Page</span>
                    <span className="text-[11px] text-stone-400 font-mono">facebook.com/hyperquest</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                </a>
              </div>
            </div>

            <div className="p-6 bg-[#16110e] border border-stone-800 rounded-3xl space-y-4">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">Research Focus Areas</span>
              <ul className="space-y-2 text-xs text-stone-300 list-disc list-inside">
                <li>Rotary stone lathe turning & zero-tolerance undercuts (Belur/Halebidu)</li>
                <li>Monolithic top-down excavation of 400,000 tons of volcanic basalt (Ellora Cave 16)</li>
                <li>Lightweight floating silica bricks & dolerite micro-drilling (Kakatiya Ramappa)</li>
                <li>Saptaswara acoustic pillar frequency resonance (Hampi Vitthala)</li>
                <li>Solar wheel sundial shadow time-reckoning (Konark Sun Temple)</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
