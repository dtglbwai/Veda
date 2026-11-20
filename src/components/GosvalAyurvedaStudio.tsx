import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Leaf,
  Activity,
  Heart,
  Sparkles,
  ShieldCheck,
  BookOpen,
  Volume2,
  VolumeX,
  Compass,
  Cpu,
  Check,
  RefreshCw,
  Search,
  Droplets,
  Flame,
  Globe,
  Award
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export interface DiagnosticTool {
  id: string;
  name: string;
  sanskritName: string;
  category: string;
  description: string;
  clinicalApplication: string;
  shlokaOrBasis: string;
}

export const GOSVAL_DIAGNOSTIC_TOOLS: DiagnosticTool[] = [
  {
    id: "nadi_pariksha",
    name: "Ayurvedic Pulse Examination (Nadi Pariksha)",
    sanskritName: "नाडी परीक्षा (वात-पित्त-कफ संज्ञान)",
    category: "Diagnostic Pillar 1",
    description: "Assessing radial artery pulsations at the wrist across the Index finger (Vata), Middle finger (Pitta), and Ring finger (Kapha) to detect root doshic vitiations before physical symptoms manifest.",
    clinicalApplication: "Identifies sub-clinical tissue (Dhatu) congestion, organ stress, and autonomic nervous system imbalances instantly.",
    shlokaOrBasis: "Yogaratnakara Nadi Pariksha: 'गुल्फस्य अधो भागे च मणिबन्धात् परं तथा। तत्र नाडी गतिं ज्ञात्वा शुभाशुभं विनिर्दिशेत् ॥'"
  },
  {
    id: "graha_chikitsa",
    name: "Medical Astrology & Graha Chikitsa",
    sanskritName: "ज्योतिषीय चिकित्सा एवं ग्रह-प्रभाव",
    category: "Diagnostic Pillar 2",
    description: "Evaluating planetary transits, birth chart (Janma Kundali) planetary afflictions, and constitutional vulnerabilities to understand chronic conditions of unknown origin and optimal healing windows.",
    clinicalApplication: "Correlates astrological timing with Ayurvedic doshic flare-ups, seasonal transitions, and karmic predispositions.",
    shlokaOrBasis: "Brihat Parashara Hora Shastra: 'रोगान् प्रकृतिमूलानि ग्रहाः सूचयन्ति च।'"
  },
  {
    id: "thrividha_pareeksha",
    name: "Thrividha Pareeksha (Clinical Examination)",
    sanskritName: "त्रिविध परीक्षा (दर्शन, स्पर्शन, प्रश्न)",
    category: "Diagnostic Pillar 3",
    description: "Comprehensive tripartite clinical examination covering Darshana (visual inspection of tongue, eyes, nails, skin), Sparshana (palpation of abdomen, lymph nodes, pulse), and Prashna (detailed patient dialogue).",
    clinicalApplication: "Establishes accurate Rogi-Bala (patient strength), Agni status, and Ama (toxin) accumulation levels.",
    shlokaOrBasis: "Charaka Samhita Vimanasthana 8: 'दर्शनं स्पर्शनं प्रश्नैः परीक्षा त्रिविधा मता।'"
  },
  {
    id: "modern_diagnostics",
    name: "Modern Clinical Lab Correlation",
    sanskritName: "आधुनिक रक्त-मूत्र-स्कैन परीक्षणम्",
    category: "Diagnostic Pillar 4",
    description: "Integrating modern blood biomarkers (KFT/LFT, lipid profile, HbA1c, inflammatory markers like CRP) and ultrasound/MRI scans with classical Ayurvedic pathology.",
    clinicalApplication: "Provides objective pre-and-post treatment verification for chronic disease reversal programs.",
    shlokaOrBasis: "Integration of modern bio-metrics with classical Dhatu Srotas pathology."
  }
];

export interface TherapeuticProtocol {
  id: string;
  name: string;
  sanskritName: string;
  category: string;
  description: string;
  mechanism: string[];
  herbsOrProcedures: string[];
}

export const GOSVAL_THERAPEUTIC_PROTOCOLS: TherapeuticProtocol[] = [
  {
    id: "panchakarma_detox",
    name: "Panchakarma Deep Cleansing & Ama Purging",
    sanskritName: "पञ्चकर्म शोधन चिकित्सा",
    category: "Therapy 1",
    description: "Five-fold biological purification process (Vamana, Virechana, Basti, Nasya, Raktamokshana) designed to mobilize and expel deep-seated toxins (Ama) from deep tissue channels (Srotas).",
    mechanism: [
      "Snehana & Swedana: Internal and external oleation followed by therapeutic sweating to liquefy lipophilic toxins.",
      "Targeted Expulsion: Gentle elimination through upper or lower gastrointestinal tracts without mucosal damage.",
      "Receptor Reset: Restores cell membrane sensitivity and metabolic efficiency."
    ],
    herbsOrProcedures: ["Medicated Ghee Snehana", "Dashamoola Basti", "Kati Basti", "Nasya Tailam"]
  },
  {
    id: "rasayana_rejuvenation",
    name: "Rasayana Cellular Rejuvenation & Longevity",
    sanskritName: "रसायन पुनर्जीवन चिकित्सा",
    category: "Therapy 2",
    description: "Advanced rejuvenating formulations and disciplined regimens that nourish all seven bodily tissues (Rasa to Shukra), enhance Ojas, and reverse cellular aging.",
    mechanism: [
      "Antioxidant Protection: Neutralizes free radicals and protects mitochondrial DNA.",
      "Telomere Support: Promotes cellular repair and immune modulation.",
      "Ojas Amplification: Enhances vital life force and mental clarity."
    ],
    herbsOrProcedures: ["Amalaki Rasayana", "Brahma Rasayana", "Ashwagandha Ghrita", "Shilajit Gold Resin"]
  },
  {
    id: "mantra_sound_healing",
    name: "Mantra Chikitsa & Acoustic Resonance",
    sanskritName: "मन्त्र चिकित्सा एवं ध्वनि कंपन",
    category: "Therapy 3",
    description: "Utilization of sacred Vedic meters (Chandas), Dhanvantari mantras, and resonant sound frequencies to harmonize psycho-somatic energy centers (Chakras) and reduce cortisol.",
    mechanism: [
      "Vagus Nerve Stimulation: Rhythmic chanting stimulates parasympathetic nervous tone.",
      "Bio-Electric Resonance: Frequency vibrations clear energetic blockages in subtle channels (Nadis).",
      "Epigenetic Modulation: Lowers systemic inflammation and promotes psychological peace."
    ],
    herbsOrProcedures: ["Dhanvantari Maha-Mantra Chanting", "432Hz/528Hz Standing Sound Waves", "Pranayama Integration"]
  }
];

export default function GosvalAyurvedaStudio() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"diagnostics" | "therapies" | "chronic_reversal" | "nadi_simulator">("diagnostics");
  const [selectedToolId, setSelectedToolId] = useState<string>("nadi_pariksha");
  const [selectedProtocolId, setSelectedProtocolId] = useState<string>("panchakarma_detox");

  // Nadi simulator state
  const [nadiVata, setNadiVata] = useState<number>(65);
  const [nadiPitta, setNadiPitta] = useState<number>(45);
  const [nadiKapha, setNadiKapha] = useState<number>(80);

  // Audio frequency state
  const [isPlayingMantraAudio, setIsPlayingMantraAudio] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const selectedTool = GOSVAL_DIAGNOSTIC_TOOLS.find(t => t.id === selectedToolId) || GOSVAL_DIAGNOSTIC_TOOLS[0];
  const selectedProtocol = GOSVAL_THERAPEUTIC_PROTOCOLS.find(p => p.id === selectedProtocolId) || GOSVAL_THERAPEUTIC_PROTOCOLS[0];

  const toggleMantraAudio = () => {
    if (isPlayingMantraAudio) {
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (_) {}
      }
      setIsPlayingMantraAudio(false);
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Dhanvantari frequency chord (136.1Hz Om frequency + 432Hz healing frequency)
        const freqs = [136.1, 272.2, 432];
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.0);
        gainNode.connect(ctx.destination);

        const oscs = freqs.map((f) => {
          const osc = ctx.createOscillator();
          osc.type = "sine";
          osc.frequency.setValueAtTime(f, ctx.currentTime);
          osc.connect(gainNode);
          osc.start();
          return osc;
        });

        setIsPlayingMantraAudio(true);
        setTimeout(() => {
          oscs.forEach(o => {
            try { o.stop(); o.disconnect(); } catch (_) {}
          });
          setIsPlayingMantraAudio(false);
        }, 5000);
      } catch (err) {
        console.error("Audio error:", err);
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8 text-stone-100">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#1b2a1b] via-[#243d24] to-[#121c12] text-stone-100 p-6 md:p-8 rounded-3xl border border-emerald-700/60 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
            <Leaf className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>SHUDDHA AYURVEDA & DRAVYAGUNA CLINICAL LAB</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#f0fff0]">
            Advanced Vedic Healing & Protocol Studio
          </h1>
          <p className="text-xs md:text-sm text-stone-300 font-sans max-w-2xl">
            5-Tool Diagnostic Nadi & Graha Assessment • Panchakarma Detoxification • Chronic Disease Reversal & Mantra Chikitsa
          </p>
        </div>

        <div className="text-right bg-black/40 p-4 rounded-2xl border border-emerald-900/60 w-full md:w-auto shrink-0">
          <div className="text-[10px] uppercase font-mono text-emerald-400 font-bold">Protocol Standard</div>
          <div className="text-lg font-mono font-bold text-amber-300">
            Charaka & Sushruta Samhita
          </div>
          <div className="text-[10px] font-mono text-stone-400">
            Integrative Holistic Healing
          </div>
        </div>
      </div>

      {/* Main Tab Segmented Control */}
      <div className="p-1.5 bg-[#17120e] rounded-2xl border border-stone-800 flex flex-wrap items-center gap-2 shadow-xl">
        <button
          onClick={() => setActiveTab("diagnostics")}
          className={`flex-1 min-w-[160px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeTab === "diagnostics"
              ? "bg-gradient-to-r from-emerald-800 to-emerald-950 text-emerald-100 border-emerald-500 shadow-lg ring-1 ring-emerald-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Activity className="w-4 h-4 text-emerald-400" />
          <span>5-Tool Diagnostics</span>
        </button>

        <button
          onClick={() => setActiveTab("therapies")}
          className={`flex-1 min-w-[160px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeTab === "therapies"
              ? "bg-gradient-to-r from-emerald-800 to-emerald-950 text-emerald-100 border-emerald-500 shadow-lg ring-1 ring-emerald-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Droplets className="w-4 h-4 text-cyan-400" />
          <span>Panchakarma & Rasayana</span>
        </button>

        <button
          onClick={() => setActiveTab("chronic_reversal")}
          className={`flex-1 min-w-[160px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeTab === "chronic_reversal"
              ? "bg-gradient-to-r from-emerald-800 to-emerald-950 text-emerald-100 border-emerald-500 shadow-lg ring-1 ring-emerald-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Heart className="w-4 h-4 text-rose-400" />
          <span>Chronic Disease Reversal</span>
        </button>

        <button
          onClick={() => setActiveTab("nadi_simulator")}
          className={`flex-1 min-w-[160px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeTab === "nadi_simulator"
              ? "bg-gradient-to-r from-emerald-800 to-emerald-950 text-emerald-100 border-emerald-500 shadow-lg ring-1 ring-emerald-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Compass className="w-4 h-4 text-amber-400" />
          <span>Nadi & Mantra Lab</span>
        </button>
      </div>

      {/* ===================== TAB 1: 5-TOOL DIAGNOSTICS ===================== */}
      {activeTab === "diagnostics" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase text-emerald-400 px-1 tracking-wider flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Diagnostic Pillars</span>
            </h3>
            <div className="space-y-2">
              {GOSVAL_DIAGNOSTIC_TOOLS.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setSelectedToolId(tool.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer ${
                    selectedToolId === tool.id
                      ? "bg-gradient-to-r from-emerald-950 to-[#1e331e] border-emerald-500 text-emerald-100 shadow-lg ring-1 ring-emerald-500/40"
                      : "bg-[#14100c] border-stone-800 text-stone-400 hover:bg-[#1d1612]"
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">{tool.category}</span>
                    <div className="text-xs font-bold font-serif text-stone-200 mt-0.5">{tool.name}</div>
                  </div>
                  <Compass className={`w-4 h-4 transition-transform ${selectedToolId === tool.id ? "text-emerald-400 rotate-45" : "text-stone-700"}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-2xl text-stone-900 space-y-6">
              <div className="flex justify-between items-start border-b border-stone-200 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold">
                    {selectedTool.category}
                  </span>
                  <h3 className="text-2xl font-black font-serif text-stone-950 mt-1">
                    {selectedTool.name}
                  </h3>
                  <p className="text-xs font-serif text-emerald-900 font-bold">
                    {selectedTool.sanskritName}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-emerald-50 rounded-2xl border-l-4 border-emerald-700 space-y-2">
                <span className="text-[10px] font-mono uppercase text-emerald-900 font-bold">Clinical Description</span>
                <p className="text-sm font-serif text-emerald-950 leading-relaxed">
                  {selectedTool.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-2xl border border-[#ebdcc4] space-y-1">
                  <span className="text-xs font-serif font-bold text-emerald-900 block">Clinical Application</span>
                  <p className="text-xs text-stone-700 font-sans leading-relaxed">{selectedTool.clinicalApplication}</p>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-[#ebdcc4] space-y-1">
                  <span className="text-xs font-serif font-bold text-amber-900 block">Classical Treatise & Basis</span>
                  <p className="text-xs font-serif text-stone-800 italic">{selectedTool.shlokaOrBasis}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================== TAB 2: THERAPIES & PANCHAKARMA ===================== */}
      {activeTab === "therapies" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase text-cyan-400 px-1 tracking-wider flex items-center gap-2">
              <Droplets className="w-4 h-4 text-cyan-400" />
              <span>Therapeutic Protocols</span>
            </h3>
            <div className="space-y-2">
              {GOSVAL_THERAPEUTIC_PROTOCOLS.map((protocol) => (
                <button
                  key={protocol.id}
                  onClick={() => setSelectedProtocolId(protocol.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer ${
                    selectedProtocolId === protocol.id
                      ? "bg-gradient-to-r from-cyan-950 to-[#122e2e] border-cyan-500 text-cyan-100 shadow-lg ring-1 ring-cyan-500/40"
                      : "bg-[#14100c] border-stone-800 text-stone-400 hover:bg-[#1d1612]"
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">{protocol.category}</span>
                    <div className="text-xs font-bold font-serif text-stone-200 mt-0.5">{protocol.name}</div>
                  </div>
                  <Check className={`w-4 h-4 ${selectedProtocolId === protocol.id ? "text-cyan-400" : "text-stone-700"}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-2xl text-stone-900 space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-900 font-bold">
                  {selectedProtocol.category}
                </span>
                <h3 className="text-2xl font-black font-serif text-stone-950 mt-1">
                  {selectedProtocol.name}
                </h3>
                <p className="text-xs font-serif text-cyan-950 font-bold">
                  {selectedProtocol.sanskritName}
                </p>
              </div>

              <p className="text-sm font-serif text-stone-800 leading-relaxed">
                {selectedProtocol.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-stone-900 tracking-wider">Mechanism of Action</h4>
                <div className="space-y-2">
                  {selectedProtocol.mechanism.map((m, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl border border-[#ebdcc4] text-xs font-sans text-stone-700 flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-700 mt-1 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase text-stone-900 tracking-wider">Key Herbs & Formulations</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProtocol.herbsOrProcedures.map((herb, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-cyan-100 text-cyan-900 text-xs font-serif font-bold border border-cyan-300">
                      {herb}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================== TAB 3: CHRONIC DISEASE NATURAL REVERSAL ===================== */}
      {activeTab === "chronic_reversal" && (
        <div className="space-y-6">
          <div className="p-6 md:p-8 bg-[#18130f] border border-emerald-900/60 rounded-3xl space-y-4 shadow-xl">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-emerald-100">
              Chronic Lifestyle Disease Natural Reversal Protocols
            </h2>
            <p className="text-xs md:text-sm text-stone-300 font-sans leading-relaxed">
              Targeting the root cause of chronic disorders (Kidney failure, Liver cirrhosis, Auto-immune conditions, Type-2 Diabetes, and Hypertension) through rigorous Dravyaguna phytomedicine, dietary sodium/protein resets, and Panchakarma detoxification without dependency on lifelong palliation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#17120e] border border-stone-800 rounded-3xl space-y-3">
              <div className="p-3 rounded-2xl bg-amber-950/60 text-amber-400 w-fit border border-amber-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-amber-200">Kidney Failure Reversal Protocol</h3>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Utilizes diuretic, nephro-protective herbs like Punarnava (Boerhavia diffusa), Gokshura (Tribulus terrestris), Varuna (Crataeva nurvala), and Pale Diet to lower serum creatinine and urea naturally while protecting nephrons.
              </p>
            </div>

            <div className="p-6 bg-[#17120e] border border-stone-800 rounded-3xl space-y-3">
              <div className="p-3 rounded-2xl bg-emerald-950/60 text-emerald-400 w-fit border border-emerald-800">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-emerald-200">Liver Cirrhosis & Fatty Liver Cleansing</h3>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Hepatoprotective formulation with Kutki (Picrorhiza kurroa), Bhumiamalaki (Phyllanthus niruri), and Kalmegh to regenerate hepatocytes, clear hepatic fat deposits, and normalize SGOT/SGPT enzymes.
              </p>
            </div>

            <div className="p-6 bg-[#17120e] border border-stone-800 rounded-3xl space-y-3">
              <div className="p-3 rounded-2xl bg-cyan-950/60 text-cyan-400 w-fit border border-cyan-800">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-cyan-200">Metabolic Reset & Diabetes Protocol</h3>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Karanja, Vijaysar, and Jamun seed extracts combined with pancreatic stimulation protocols to restore insulin sensitivity and achieve stable HbA1c control.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ===================== TAB 4: NADI SIMULATOR & MANTRA SOUND LAB ===================== */}
      {activeTab === "nadi_simulator" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Nadi Slider Simulator */}
          <div className="p-6 md:p-8 bg-[#18130f] border border-emerald-900/60 rounded-3xl space-y-6 shadow-xl">
            <div>
              <h3 className="text-xl font-bold font-serif text-emerald-200">Interactive Doshic Pulse Analyzer (नाडी स्पन्दन Simulator)</h3>
              <p className="text-xs text-stone-400 font-sans mt-1">Adjust doshic pulse intensity to view instant Ayurvedic health recommendations.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold">Vata Pulse (Index Finger - Air/Ether): {nadiVata}%</span>
                  <span className="text-stone-400">{nadiVata > 70 ? "Vitated (Anxiety/Gas)" : "Balanced"}</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={100}
                  value={nadiVata}
                  onChange={e => setNadiVata(parseInt(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-orange-400 font-bold">Pitta Pulse (Middle Finger - Fire/Water): {nadiPitta}%</span>
                  <span className="text-stone-400">{nadiPitta > 70 ? "Vitated (Inflammation/Acidity)" : "Balanced"}</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={100}
                  value={nadiPitta}
                  onChange={e => setNadiPitta(parseInt(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-bold">Kapha Pulse (Ring Finger - Earth/Water): {nadiKapha}%</span>
                  <span className="text-stone-400">{nadiKapha > 70 ? "Vitated (Congestion/Sluggishness)" : "Balanced"}</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={100}
                  value={nadiKapha}
                  onChange={e => setNadiKapha(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>
            </div>

            <div className="p-4 bg-black/40 border border-emerald-800/60 rounded-2xl space-y-2">
              <span className="text-xs font-serif font-bold text-emerald-300 block">Dosha Diagnostic Prescription:</span>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                {nadiVata > 70 ? "• Vata Pacification: Warm sesame oil abhyanga, dashamoola herbal tea, and calming lifestyle.\n" : ""}
                {nadiPitta > 70 ? "• Pitta Pacification: Coconut oil cooling massage, Shatavari, guduchi decoction, avoid spicy foods.\n" : ""}
                {nadiKapha > 70 ? "• Kapha Pacification: Trikatu churna, ginger honey tea, vigorous exercise, dry sauna." : ""}
                {nadiVata <= 70 && nadiPitta <= 70 && nadiKapha <= 70 ? "• Tridoshas in harmonious equilibrium. Maintain daily Dinacharya and seasonal Rutucharya." : ""}
              </p>
            </div>
          </div>

          {/* Mantra Chikitsa & Sound Healing */}
          <div className="p-6 md:p-8 bg-[#18130f] border border-emerald-900/60 rounded-3xl space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold font-serif text-emerald-200">Mantra Chikitsa & Acoustic Resonance</h3>
                <p className="text-xs text-stone-400 font-sans mt-1">Play healing 136.1Hz Om and Dhanvantari frequency standing waves for psycho-somatic relaxation.</p>
              </div>

              <div className="p-5 bg-emerald-950/40 border border-emerald-700/60 rounded-2xl text-center space-y-2">
                <span className="text-sm font-serif font-bold text-amber-300 block">ॐ नमो भगवते महासुदर्शनाय वासुदेवाय धन्वन्तरये ॥</span>
                <p className="text-[11px] text-stone-300 font-sans">Dhanvantari Healing Mantra for cellular rejuvenation and disease eradication.</p>
              </div>
            </div>

            <button
              onClick={toggleMantraAudio}
              className={`w-full py-4 rounded-2xl font-serif font-bold text-xs shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all ${
                isPlayingMantraAudio
                  ? "bg-amber-600 text-white animate-pulse"
                  : "bg-gradient-to-r from-emerald-800 to-emerald-950 text-emerald-100 border border-emerald-500 hover:bg-emerald-700"
              }`}
            >
              {isPlayingMantraAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-300" />}
              <span>{isPlayingMantraAudio ? "Stop Sound Frequency (Playing...)" : "Play 136.1Hz & 432Hz Healing Frequency"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
