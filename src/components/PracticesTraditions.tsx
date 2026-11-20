import { useState } from "react";
import { motion } from "motion/react";
import { 
  Flame, 
  Volume2, 
  Compass, 
  Sparkles, 
  Zap, 
  Activity, 
  Heart, 
  BookOpen, 
  ShieldCheck
} from "lucide-react";

export default function PracticesTraditions() {
  const [activeTab, setActiveTab] = useState<"yajna" | "chanting" | "sriyantra" | "temple">("yajna");
  const [yajnaTemp, setYajnaTemp] = useState<number>(850); // Celsius

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#241410] via-[#2a1711] to-[#170c09] text-stone-100 p-6 md:p-8 rounded-3xl border border-red-900/40 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-500/40 text-red-300 text-xs font-mono mb-2">
            <Flame className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            <span>SACRED BIO-PHYSICS & LIVING INDIC TRADITIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#fff0ea]">
            Practices, Customs & Sacred Physics
          </h2>
          <p className="text-sm text-stone-300 font-sans mt-1 max-w-2xl">
            Explore the scientific mechanisms behind ancient Indic traditions: Yajna aerosol thermodynamics, Vedic chanting acoustic frequency harmonics, Sri Yantra mathematical topology, and temple bio-electromagnetics.
          </p>
        </div>

        <div className="text-right bg-black/40 p-4 rounded-2xl border border-red-900/40 w-full md:w-auto">
          <div className="text-[10px] uppercase font-mono text-red-400 font-bold">Vedic Science Nexus</div>
          <div className="text-xl font-mono font-bold text-amber-300">
            Acoustics & Thermodynamics
          </div>
          <div className="text-[10px] font-mono text-stone-400">
            Rigveda, Yajurveda & Sulba Sutras
          </div>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "yajna", label: "Yajna & Agnihotra Thermodynamics", icon: Flame },
          { id: "chanting", label: "Vedic Chanting Sonic Harmonics", icon: Volume2 },
          { id: "sriyantra", label: "Sri Yantra Sacred Trigonometry", icon: Compass },
          { id: "temple", label: "Temple Sanctum Bio-Electromagnetics", icon: Zap },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold font-serif transition-all border ${
                isActive
                  ? "bg-gradient-to-r from-red-800 to-amber-900 text-white border-red-500 shadow-lg"
                  : "bg-[#fcf8f0] text-stone-800 border-[#decbb0] hover:bg-white"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ---------------- 1. YAJNA THERMODYNAMICS ---------------- */}
      {activeTab === "yajna" && (
        <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-red-900">
                PYROLYSIS & AEROSOL THERMODYNAMICS
              </span>
              <h3 className="text-2xl font-bold font-serif text-stone-950">
                The Bio-Physical Mechanism of Vedic Yajna (Homa)
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500">Sulba Sutra Geometry</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Pyramidal Kunda Temp Controller */}
            <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 space-y-5">
              <h4 className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-2">
                <Flame className="w-4 h-4" />
                <span>Inverted Pyramidal Kunda Simulator</span>
              </h4>

              <div>
                <div className="flex justify-between text-xs font-mono text-stone-400 mb-1">
                  <span>Combustion Core Temperature:</span>
                  <span className="text-red-400 font-bold">{yajnaTemp} °C</span>
                </div>
                <input
                  type="range"
                  min="450"
                  max="1200"
                  step="25"
                  value={yajnaTemp}
                  onChange={(e) => setYajnaTemp(parseInt(e.target.value))}
                  className="w-full accent-red-600 bg-stone-800 cursor-pointer"
                />
                <div className="flex justify-between text-[9px] font-mono text-stone-500 mt-1">
                  <span>450°C (Smoldering)</span>
                  <span>850°C (Ideal Pyrolysis)</span>
                  <span>1200°C (High Flash)</span>
                </div>
              </div>

              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs font-mono text-stone-300">
                <span className="text-amber-400 font-bold block mb-1">Thermal Vortex Effect:</span>
                The inverted pyramid shape creates a conical thermal chimney effect, ensuring complete vaporisation of herbal essential oils (eugenol, thymol) into sub-micron aerosol particles.
              </div>
            </div>

            {/* Scientific Explanation Breakdown */}
            <div className="lg:col-span-2 space-y-4">
              <div className="p-5 bg-white rounded-2xl border border-[#ebdcc4] space-y-2">
                <h4 className="text-base font-serif font-bold text-stone-900">1. Sub-Micron Aerosolization of Phytochemicals</h4>
                <p className="text-xs font-serif text-stone-700 leading-relaxed">
                  When pure cow ghee (Clarified Butter), dried Samidha woods (Banyan, Peepal, Palash, Sandalwood), and Havan Samagri herbs are combusted at ~850°C, the long-chain hydrocarbons undergo catalytic pyrolysis, producing volatile mono-terpenes and beta-sitosterol aerosol clouds that remain suspended in ambient air for 48+ hours.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-[#ebdcc4] space-y-2">
                <h4 className="text-base font-serif font-bold text-stone-900">2. Atmospheric Disinfection & Pathogen Reduction</h4>
                <p className="text-xs font-serif text-stone-700 leading-relaxed">
                  Laboratory bio-aerosol assays reveal a 94% reduction in airborne pathogenic bacteria (Staphylococcus, Streptococcus) within 100 meters of a Somayaga / Agnihotra sacrificial enclosure due to formaldehyde-like natural aldehydes and phenolic vapors produced during slow ghee combustion.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- 2. CHANTING ACOUSTICS ---------------- */}
      {activeTab === "chanting" && (
        <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-red-900">
                VEDIC PHONOLOGY & HARMONIC RATIOS
              </span>
              <h3 className="text-2xl font-bold font-serif text-stone-950">
                The Svaras of Vedic Recitation (Udatta, Anudatta, Svarita)
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500">Paniniya Shiksha</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-[#ebdcc4] space-y-2">
              <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">High Pitch (Acute)</span>
              <h4 className="text-lg font-serif font-bold text-red-900">उदात्त (Udātta)</h4>
              <p className="text-xs font-serif text-stone-700">
                High pitch uttered from the upper vocal resonance chamber (palate). Frequency ratio: 1.25x (Major Third / Gandhara).
              </p>
              <div className="text-[10px] font-mono text-amber-800">Frequency: ~165 Hz (Male) / ~275 Hz (Female)</div>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#ebdcc4] space-y-2">
              <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Low Pitch (Grave)</span>
              <h4 className="text-lg font-serif font-bold text-indigo-900">अनुदात्त (Anudātta)</h4>
              <p className="text-xs font-serif text-stone-700">
                Low tone produced with vocal cord relaxation (throat/chest resonance). Frequency ratio: 0.8x (Fourth below). Marked with a horizontal underline.
              </p>
              <div className="text-[10px] font-mono text-indigo-800">Frequency: ~110 Hz (Male) / ~185 Hz (Female)</div>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#ebdcc4] space-y-2">
              <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Circumflex (Rising-Falling)</span>
              <h4 className="text-lg font-serif font-bold text-emerald-900">स्वरित (Svarita)</h4>
              <p className="text-xs font-serif text-stone-700">
                Combination tone rising and falling back to the tonic fundamental. Marked with a vertical stroke above the syllable.
              </p>
              <div className="text-[10px] font-mono text-emerald-800">Frequency: ~137.5 Hz (Tonic Home Base)</div>
            </div>
          </div>

          {/* Neuro-Acoustic Induction */}
          <div className="p-5 bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 space-y-2">
            <span className="text-xs font-mono uppercase font-bold text-cyan-400">
              EEG Alpha Brainwave Entrainment (8 Hz – 12 Hz):
            </span>
            <p className="text-xs font-serif text-stone-300 leading-relaxed">
              Synchronous Vedic chanting follows a rhythmic meter (Gayatri 24 syllables, Trishtubh 44 syllables, Jagati 48 syllables) with exact syllable duration ratios (1 Matra for Hrasva short vowels, 2 Matras for Dirgha long vowels). This generates auditory steady-state resonance (ASSR) that stabilizes parasympathetic heart rate variability (HRV).
            </p>
          </div>
        </div>
      )}

      {/* ---------------- 3. SRI YANTRA TRIGONOMETRY ---------------- */}
      {activeTab === "sriyantra" && (
        <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-red-900">
                TRANSCENDENTAL MATHEMATICAL TOPOLOGY
              </span>
              <h3 className="text-2xl font-bold font-serif text-stone-950">
                Sri Yantra: The 9 Interlocking Isosceles Triangles
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500">Saundarya Lahari</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-stone-950 text-stone-100 rounded-2xl border border-stone-800 flex flex-col items-center justify-center text-center">
              <div className="text-6xl mb-4">🔯</div>
              <h4 className="text-xl font-bold font-serif text-amber-300">
                4 Upward Shiva + 5 Downward Shakti Triangles
              </h4>
              <p className="text-xs font-mono text-stone-400 mt-2 max-w-md">
                Interlocking generates exactly 43 subsidiary triangles enclosing the central Bindu point, with all vertices meeting exactly at common intersection nodes.
              </p>
            </div>

            <div className="space-y-3 text-xs font-serif">
              <div className="p-4 bg-white rounded-xl border border-[#ebdcc4]">
                <h5 className="font-bold text-stone-900 mb-1">1. The Mathematical Conundrum</h5>
                <p className="text-stone-700">
                  Modern mathematical analysis by computer scientists and topologists confirms that the Sri Yantra cannot be constructed with pure Euclidean straightedge-and-compass geometry without introducing infinitesimal non-linear spherical corrections, proving profound ancient geometric mastery.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#ebdcc4]">
                <h5 className="font-bold text-stone-900 mb-1">2. Golden Ratio & Pi Embedded Ratios</h5>
                <p className="text-stone-700">
                  The base angles of the largest triangles are precisely ~51.84° (matching the base angle of the Great Pyramid of Giza and arctan(sqrt(Phi))), relating directly to the Golden Ratio (Phi = 1.618033).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- 4. TEMPLE BIO-ELECTROMAGNETICS ---------------- */}
      {activeTab === "temple" && (
        <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-red-900">
                SANCTUM CAPACITANCE & GROUND CURRENTS
              </span>
              <h3 className="text-2xl font-bold font-serif text-stone-950">
                Temple Sanctum (Garbhagriha) Bio-Electromagnetics
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500">Agama Shastras</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-serif">
            <div className="p-5 bg-white rounded-2xl border border-[#ebdcc4] space-y-2">
              <h4 className="text-base font-bold text-stone-900">1. Copper Plate Yantra Pitha Energy Storage</h4>
              <p className="text-stone-700 leading-relaxed">
                During the Kumbhabhishekam consecration, energized copper and gold Yantra plates are embedded beneath the deity's granite pedestal (Pitha). Being diamagnetic and highly conductive, this plate network channels telluric earth currents (Ley lines) upward into the granite murti.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#ebdcc4] space-y-2">
              <h4 className="text-base font-bold text-stone-900">2. Parabolic Acoustic & Radiant Field Focusing</h4>
              <p className="text-stone-700 leading-relaxed">
                The thick, monolithic granite walls of the Garbhagriha act as a Faraday-like thermal and electromagnetic insulator, trapping the 432Hz acoustic chanting overtones and ionic aerosol emissions from burning sesame/camphor lamps.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
