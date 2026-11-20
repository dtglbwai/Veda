import { useState } from "react";
import { motion } from "motion/react";
import { 
  Layers, 
  Sparkles, 
  Eye, 
  Grid, 
  Compass, 
  Flame, 
  BookOpen, 
  CheckCircle2, 
  Zap,
  Sliders
} from "lucide-react";

const CANONICAL_TALAS = [
  {
    name: "Uttama Dasha Tala",
    angulas: 120,
    ratios: "Face: 12 | Throat: 4 | Chest: 12 | Stomach: 12 | Pelvis to Knee: 24 | Knee: 4 | Shin: 24 | Foot: 4 | Crown: 4",
    deities: "Parashiva, Mahavishnu, Mahalakshmi, Surya, Durga, Kartikeya",
    treatise: "Manasara Chapter 53 & Mayamata Chapter 26"
  },
  {
    name: "Madhyama Dasha Tala",
    angulas: 116,
    ratios: "Face: 12 | Torso: 22 | Thigh: 23 | Shin: 23 | Feet: 4 | Crown: 4",
    deities: "Rama, Krishna, Narasimha, Ganesha, Skanda",
    treatise: "Kasyapa Shilpa Shastra"
  },
  {
    name: "Navatala",
    angulas: 108,
    ratios: "Head to Toe divided into 9 equal units of 12 Angulas each",
    deities: "Ashta Dikpalas (Indra, Agni, Yama, Varuna), Gandharvas, Yakshas",
    treatise: "Vishnudharmottara Purana"
  },
  {
    name: "Ashtatala",
    angulas: 96,
    ratios: "8 Talas (96 Angulas) corresponding to the Golden Ratio for human form",
    deities: "Rishis, Kings, Devotees, Alvars, Nayanmars",
    treatise: "Shilpa Prakasha (Odisha)"
  },
  {
    name: "Saptatala",
    angulas: 84,
    ratios: "7 Talas (84 Angulas) for stout and dwarf proportions",
    deities: "Vamana, Shiva Ganas, Kinnaras, Dwarfs",
    treatise: "Mayamata"
  }
];

const MUDRAS_ASANAS = [
  {
    name: "Abhaya Mudra",
    sanskrit: "अभय मुद्रा",
    type: "Hand Gesture (Mudra)",
    meaning: "Gesture of Fearlessness, Protection and Divine Refuge",
    visual: "Right hand raised at shoulder height, palm facing outward, fingers extended upwards.",
    iconography: "Seen in Shiva Nataraja, Vishnu, Buddha, and Devi."
  },
  {
    name: "Varada Mudra",
    sanskrit: "वरद मुद्रा",
    type: "Hand Gesture (Mudra)",
    meaning: "Gesture of Dispensing Boons, Compassion and Wish-Fulfillment",
    visual: "Left hand lowered, palm facing outward, fingers pointing downwards.",
    iconography: "Seen in Mahalakshmi, Saraswati, Avalokiteshvara."
  },
  {
    name: "Dhyana / Samadhi Mudra",
    sanskrit: "ध्यान मुद्रा",
    type: "Hand Gesture (Mudra)",
    meaning: "Gesture of Deep Yogic Meditation and Absorption",
    visual: "Both hands resting in the lap, right hand over left, palms facing upward, thumbs touching.",
    iconography: "Seen in Dhyani Buddha, Shiva Mahayogi, Jain Tirthankaras."
  },
  {
    name: "Chin / Vyakhyana Mudra",
    sanskrit: "चिन्मुद्रा / व्याख्यान",
    type: "Hand Gesture (Mudra)",
    meaning: "Gesture of Ultimate Knowledge, Consciousness and Teaching",
    visual: "Tip of index finger touching tip of thumb forming a circle; remaining three fingers extended.",
    iconography: "Seen in Dakshinamurti Shiva, Adi Shankaracharya."
  },
  {
    name: "Tribhanga Asana",
    sanskrit: "त्रिभङ्ग आसन",
    type: "Body Posture (Asana)",
    meaning: "Three-fold Dynamic S-curve bending at neck, waist, and knee",
    visual: "Head tilted one way, torso slanted the opposite, hips swayed, conveying grace and dynamic balance.",
    iconography: "Seen in Krishna with Flute, Chola Bronzes, Konark Alasa Kanyas."
  },
  {
    name: "Mulabandhasana / Yogapitha",
    sanskrit: "मूलबन्धासन",
    type: "Body Posture (Asana)",
    meaning: "Ancient Yogic Root Lock Posture",
    visual: "Heels pressed together under perineum, knees turned outwards in extreme pelvic opening.",
    iconography: "Seen in Indus Valley Pashupati Seal (2500 BCE) and early Shiva sculptures."
  }
];

const ANCIENT_PIGMENTS = [
  {
    name: "Lapis Lazuli (Ultramarine)",
    sanskrit: "राजावर्त (Rajavarta)",
    formula: "(Na,Ca)8(AlSiO4)6(S,SO4,Cl)1-2",
    origin: "Badakhshan (Afghanistan) imported along Uttarapatha trade routes",
    use: "Ajanta Cave 1 Padmapani robes and Chola frescoes",
    spectroscopy: "Distinct absorption peak at 600nm in VIS-NIR spectrum"
  },
  {
    name: "Cinnabar (Vermilion)",
    sanskrit: "हिङ्गुल (Hingula)",
    formula: "HgS (Mercuric Sulfide)",
    origin: "Himalayan and Deccan cinnabar ores",
    use: "Sacred Kumkuma, temple wall base outlines, manuscript miniature borders",
    spectroscopy: "Sharp reflectance transition at 590nm"
  },
  {
    name: "Orpiment (King's Yellow)",
    sanskrit: "हरिताल (Haritala)",
    formula: "As2S3 (Arsenic Trisulfide)",
    origin: "Natural arsenic minerals",
    use: "Golden body radiance in Buddhist Thangkas and Jain Palm-Leaf illustrations",
    spectroscopy: "UV absorption edge at 470nm"
  },
  {
    name: "Malachite (Copper Green)",
    sanskrit: "वैक्रान्त / मयूराश्म (Mayurashma)",
    formula: "Cu2CO3(OH)2",
    origin: "Rajasthan and Deccan copper mines",
    use: "Foliage in Lepakshi and Brihadeeswarar murals",
    spectroscopy: "Characteristic Cu2+ ligand-field absorption at 800nm"
  }
];

export default function IconographyStudio() {
  const [selectedTalaIndex, setSelectedTalaIndex] = useState(0);
  const [selectedMudraIndex, setSelectedMudraIndex] = useState(0);
  const [mandalaType, setMandalaType] = useState<"manduka" | "paramasayika">("manduka");

  const activeTala = CANONICAL_TALAS[selectedTalaIndex];
  const activeMudra = MUDRAS_ASANAS[selectedMudraIndex];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#241712] via-[#2d1b14] to-[#180f0c] text-stone-100 p-6 md:p-8 rounded-3xl border border-orange-900/40 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950 border border-orange-500/40 text-orange-300 text-xs font-mono mb-2">
            <Layers className="w-3.5 h-3.5 text-orange-400" />
            <span>SHILPA SHASTRA & MURTI VIJNANA LABORATORY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#fff2e8]">
            Iconography, Pictography & Sacred Geometry
          </h2>
          <p className="text-sm text-stone-300 font-sans mt-1 max-w-2xl">
            Explore canonical Talamana proportional systems (120 Angulas), sacred Mudras and Asanas, Vastu Purusha Mandala floor-plan geometry, and ancient mineral pigment chromatography.
          </p>
        </div>

        <div className="text-right bg-black/40 p-4 rounded-2xl border border-orange-900/40 w-full md:w-auto">
          <div className="text-[10px] uppercase font-mono text-orange-400 font-bold">Canonical Treatises</div>
          <div className="text-xl font-mono font-bold text-amber-300">
            Manasara & Mayamata
          </div>
          <div className="text-[10px] font-mono text-stone-400">
            Iconometry, Mudras & Vastu Purusha
          </div>
        </div>
      </div>

      {/* Talamana Canonical Proportions */}
      <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-orange-900">
              TALAMANA CANONICAL METROLOGY
            </span>
            <h3 className="text-2xl font-bold font-serif text-stone-950">
              The Divine Proportional Grid (Talas & Angulas)
            </h3>
          </div>
          <div className="text-xs font-mono text-stone-600">
            1 Tala = 12 Angulas (Width of a finger)
          </div>
        </div>

        {/* Tala Selector Pills */}
        <div className="flex flex-wrap gap-2">
          {CANONICAL_TALAS.map((tala, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTalaIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-serif transition-all border ${
                selectedTalaIndex === idx
                  ? "bg-gradient-to-r from-orange-800 to-amber-900 text-white border-orange-500 shadow-md"
                  : "bg-white text-stone-800 border-[#decbb0] hover:bg-stone-100"
              }`}
            >
              {tala.name} ({tala.angulas} Angulas)
            </button>
          ))}
        </div>

        {/* Selected Tala Details */}
        <div className="p-6 bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 space-y-4">
          <div className="flex flex-wrap justify-between items-center gap-2 pb-3 border-b border-stone-800">
            <h4 className="text-xl font-bold font-serif text-amber-300">{activeTala.name}</h4>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-500/40">
              Total Height: {activeTala.angulas} Angulas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
              <span className="text-amber-400 block mb-1 font-bold">Canonical Anatomical Distribution:</span>
              <p className="text-stone-300">{activeTala.ratios}</p>
            </div>
            <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
              <span className="text-cyan-400 block mb-1 font-bold">Prescribed Deity Sculptures:</span>
              <p className="text-stone-300 font-serif">{activeTala.deities}</p>
            </div>
          </div>

          <div className="text-[11px] font-mono text-stone-400">
            Treatise Source: <span className="text-stone-200">{activeTala.treatise}</span>
          </div>
        </div>
      </div>

      {/* Mudras and Asanas Interactive Gallery */}
      <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-orange-900">
              GESTURAL VOCABULARY
            </span>
            <h3 className="text-2xl font-bold font-serif text-stone-950">
              Sacred Mudras & Asanas of Indic Statuary
            </h3>
          </div>
          <span className="text-xs font-mono text-stone-500">6 CANONICAL GESTURES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MUDRAS_ASANAS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#ebdcc4] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-base font-serif font-bold text-stone-900">{item.name}</h4>
                  <span className="text-[9px] font-mono uppercase bg-orange-100 text-orange-900 px-2 py-0.5 rounded-full font-bold">
                    {item.type.split(" ")[0]}
                  </span>
                </div>
                <div className="text-xs font-serif italic text-orange-800 mb-2">{item.sanskrit}</div>
                <p className="text-xs font-serif text-stone-700 leading-relaxed">{item.meaning}</p>
                <div className="mt-3 p-2.5 bg-stone-50 rounded-xl text-[11px] font-sans text-stone-600 border border-stone-200">
                  {item.visual}
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-stone-100 text-[10px] font-mono text-amber-800">
                ✨ {item.iconography}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vastu Purusha Mandala Grid Visualizer */}
      <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-orange-900">
              SACRED ARCHITECTURAL MATRIX
            </span>
            <h3 className="text-2xl font-bold font-serif text-stone-950">
              Vastu Purusha Mandala Grid Simulation
            </h3>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setMandalaType("manduka")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold ${
                mandalaType === "manduka"
                  ? "bg-orange-800 text-white"
                  : "bg-stone-200 text-stone-700 hover:bg-stone-300"
              }`}
            >
              Manduka (8×8 = 64 Padas)
            </button>
            <button
              onClick={() => setMandalaType("paramasayika")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold ${
                mandalaType === "paramasayika"
                  ? "bg-orange-800 text-white"
                  : "bg-stone-200 text-stone-700 hover:bg-stone-300"
              }`}
            >
              Paramasayika (9×9 = 81 Padas)
            </button>
          </div>
        </div>

        {/* Interactive Mandala Grid */}
        <div className="p-6 bg-stone-950 text-stone-100 rounded-2xl border border-stone-800 flex flex-col items-center justify-center">
          <div className="text-xs font-mono text-amber-400 mb-4 uppercase">
            {mandalaType === "manduka" ? "Manduka Mandala (64 Pada Temple Floorplan Matrix)" : "Paramasayika Mandala (81 Pada City/Temple Grid)"}
          </div>

          <div 
            className="grid gap-1 bg-stone-800 p-2 rounded-xl border border-stone-700 max-w-md w-full aspect-square"
            style={{
              gridTemplateColumns: `repeat(${mandalaType === "manduka" ? 8 : 9}, minmax(0, 1fr))`,
            }}
          >
            {Array.from({ length: mandalaType === "manduka" ? 64 : 81 }).map((_, idx) => {
              const total = mandalaType === "manduka" ? 8 : 9;
              const row = Math.floor(idx / total);
              const col = idx % total;
              
              // Center Brahma Sthana
              const isCenter = mandalaType === "manduka"
                ? (row === 3 || row === 4) && (col === 3 || col === 4)
                : (row >= 3 && row <= 5) && (col >= 3 && col <= 5);

              // Outer boundary (Paisacha Pada)
              const isOuter = row === 0 || row === total - 1 || col === 0 || col === total - 1;

              return (
                <div
                  key={idx}
                  className={`flex items-center justify-center rounded text-[8px] font-mono transition-all aspect-square ${
                    isCenter
                      ? "bg-amber-500 text-black font-bold shadow-[0_0_8px_gold]"
                      : isOuter
                      ? "bg-stone-900 text-stone-600"
                      : "bg-stone-700 text-stone-300"
                  }`}
                  title={isCenter ? "Brahma Sthana (Divine Center)" : isOuter ? "Paisacha Pada (Perimeter)" : "Deva / Manusha Pada"}
                >
                  {isCenter ? "🕉️" : idx + 1}
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-mono text-stone-400">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-500 inline-block" /> Brahma Sthana (Sanctum / Center)</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-stone-700 inline-block" /> Deva / Manusha Padas (Mandapa Halls)</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-stone-900 inline-block" /> Paisacha Padas (Prakara Wall)</span>
          </div>
        </div>
      </div>

      {/* Ancient Pigment Chromatography */}
      <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-orange-900">
              MINERAL SPECTROSCOPY
            </span>
            <h3 className="text-2xl font-bold font-serif text-stone-950">
              Ancient Fresco & Manuscript Pigment Chemistry
            </h3>
          </div>
          <span className="text-xs font-mono text-stone-500">AJANTA & LEPAKSHI PIGMENTS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ANCIENT_PIGMENTS.map((pig, idx) => (
            <div key={idx} className="p-5 bg-white rounded-2xl border border-[#ebdcc4] space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="text-base font-serif font-bold text-stone-900">{pig.name}</h4>
                <span className="text-xs font-serif italic text-orange-800">{pig.sanskrit}</span>
              </div>
              <div className="text-[10px] font-mono text-amber-700 font-bold">{pig.formula}</div>
              <p className="text-xs text-stone-600 font-sans"><span className="font-bold">Provenance:</span> {pig.origin}</p>
              <p className="text-xs text-stone-600 font-sans"><span className="font-bold">Usage:</span> {pig.use}</p>
              <div className="pt-2 border-t border-stone-100 text-[10px] font-mono text-cyan-800">
                🔬 {pig.spectroscopy}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
