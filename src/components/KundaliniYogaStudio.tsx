import React, { useState, useRef, useEffect } from "react";
import {
  Flame,
  Volume2,
  VolumeX,
  Wind,
  Sparkles,
  BookOpen,
  Compass,
  ShieldCheck,
  Play,
  Pause,
  RotateCcw,
  Layers,
  Activity,
  ChevronRight,
  Droplets,
  Sun,
  Moon
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export interface ChakraSpec {
  id: string;
  order: number;
  name: string;
  sanskrit: string;
  location: string;
  endocrineGland: string;
  tattva: string;
  bijaMantra: string;
  frequencyHz: number;
  petals: number;
  colorHex: string;
  hermeticElement: string;
  qabalisticSphere: string;
  alchemyStage: string;
  planetaryRuler: string;
  crystal: string;
  essentialOil: string;
  balancedState: string;
  imbalancedState: string;
  asanaPractice: string;
}

export const KUNDALINI_CHAKRAS: ChakraSpec[] = [
  {
    id: "muladhara",
    order: 1,
    name: "Muladhara (Root Chakra)",
    sanskrit: "मूलाधार चक्र",
    location: "Perineum / Base of Spine (Coccygeal Plexus)",
    endocrineGland: "Adrenal Cortex & Medulla",
    tattva: "Prithvi (Earth — Yellow Square)",
    bijaMantra: "लं (LAM)",
    frequencyHz: 396,
    petals: 4,
    colorHex: "#dc2626",
    hermeticElement: "Earth (Assiah)",
    qabalisticSphere: "Malkuth (The Kingdom)",
    alchemyStage: "Calcination (Burning away primal fear)",
    planetaryRuler: "Shani (Saturn) & Mars",
    crystal: "Red Jasper, Black Obsidian, Hematite",
    essentialOil: "Cedarwood, Vetiver, Patchouli",
    balancedState: "Grounded security, physical vitality, steady endurance, calm nervous system.",
    imbalancedState: "Survival anxiety, chronic fatigue, lower back tension, restlessness.",
    asanaPractice: "Mula Bandha, Siddhasana, Malasana, Paschimottanasana"
  },
  {
    id: "svadhishthana",
    order: 2,
    name: "Svadhishthana (Sacral Chakra)",
    sanskrit: "स्वाधिष्ठान चक्र",
    location: "Sacrum / Lower Abdomen (Sacral Plexus)",
    endocrineGland: "Gonads (Testes / Ovaries)",
    tattva: "Apas (Water — White Crescent Moon)",
    bijaMantra: "वं (VAM)",
    frequencyHz: 417,
    petals: 6,
    colorHex: "#ea580c",
    hermeticElement: "Water (Yetzirah)",
    qabalisticSphere: "Yesod (The Foundation)",
    alchemyStage: "Dissolution (Fluidity of emotion & creative impulse)",
    planetaryRuler: "Chandra (Moon) & Shukra (Venus)",
    crystal: "Carnelian, Orange Calcite, Moonstone",
    essentialOil: "Ylang-Ylang, Sweet Orange, Sandalwood",
    balancedState: "Creative flow, emotional grace, healthy Ojas transmutation, adaptability.",
    imbalancedState: "Emotional rigidity, addictive cravings, pelvic stagnation.",
    asanaPractice: "Ashwini Mudra, Baddha Konasana, Bhujangasana"
  },
  {
    id: "manipura",
    order: 3,
    name: "Manipura (Solar Plexus Chakra)",
    sanskrit: "मणिपुर चक्र",
    location: "Navel Center / Lumbar Spine (Solar Plexus)",
    endocrineGland: "Pancreas (Islets of Langerhans)",
    tattva: "Tejas (Fire — Red Inverted Triangle)",
    bijaMantra: "रं (RAM)",
    frequencyHz: 528,
    petals: 10,
    colorHex: "#d97706",
    hermeticElement: "Fire (Briah)",
    qabalisticSphere: "Hod & Netzach (Splendor & Victory)",
    alchemyStage: "Separation & Combustion (Digestive Agni & Willpower)",
    planetaryRuler: "Surya (Sun) & Mangal (Mars)",
    crystal: "Citrine, Tiger's Eye, Pyrite",
    essentialOil: "Rosemary, Black Pepper, Ginger, Lemon",
    balancedState: "Strong Agni, mental clarity, resolute self-discipline, fearless radiance.",
    imbalancedState: "Control issues, digestive sluggishness, anger, self-doubt.",
    asanaPractice: "Uddiyana Bandha, Agnisara Kriya, Dhanurasana, Naukasana"
  },
  {
    id: "anahata",
    order: 4,
    name: "Anahata (Heart Chakra)",
    sanskrit: "अनाहत चक्र",
    location: "Center of Chest / Thoracic Spine (Cardiac Plexus)",
    endocrineGland: "Thymus Gland",
    tattva: "Vayu (Air — Smoky Hexagram)",
    bijaMantra: "यं (YAM)",
    frequencyHz: 639,
    petals: 12,
    colorHex: "#059669",
    hermeticElement: "Air (Tiphareth Coherence)",
    qabalisticSphere: "Tiphareth (Beauty & Heart Resonance)",
    alchemyStage: "Conjunction (Union of Solar & Lunar currents)",
    planetaryRuler: "Shukra (Venus) & Surya (Sun)",
    crystal: "Rose Quartz, Green Aventurine, Emerald",
    essentialOil: "Rose Otto, Bergamot, Frankincense",
    balancedState: "Electromagnetic heart coherence, unconditional compassion, immune strength.",
    imbalancedState: "Grief holding, guardedness, shallow chest breathing, bitterness.",
    asanaPractice: "Ustrasana, Matsyasana, Anahata Naad Meditation, Bhramari"
  },
  {
    id: "vishuddha",
    order: 5,
    name: "Vishuddha (Throat Chakra)",
    sanskrit: "विशुद्ध चक्र",
    location: "Throat Pit / Cervical Spine (Pharyngeal Plexus)",
    endocrineGland: "Thyroid & Parathyroid Glands",
    tattva: "Akasha (Ether — Pure White Circle)",
    bijaMantra: "हं (HAM)",
    frequencyHz: 741,
    petals: 16,
    colorHex: "#0284c7",
    hermeticElement: "Spirit / Aether (Daath Gateway)",
    qabalisticSphere: "Chesed & Geburah (Mercy & Severity)",
    alchemyStage: "Fermentation / Purification (Amrita filtration)",
    planetaryRuler: "Budha (Mercury)",
    crystal: "Lapis Lazuli, Aquamarine, Blue Lace Agate",
    essentialOil: "Eucalyptus, Peppermint, Chamomile",
    balancedState: "Truthful articulation (Satya-Vak), energetic purification, resonant voice.",
    imbalancedState: "Suppressed expression, neck stiffness, erratic metabolic rhythm.",
    asanaPractice: "Jalandhara Bandha, Sarvangasana, Simhasana, Ujjayi Breath"
  },
  {
    id: "ajna",
    order: 6,
    name: "Ajna (Third Eye Chakra)",
    sanskrit: "आज्ञा चक्र",
    location: "Eyebrow Center / Midbrain (Cavernous Plexus)",
    endocrineGland: "Pituitary Gland (Master Endocrine Regulator)",
    tattva: "Manas / Mahat (Subtle Mind beyond 5 gross elements)",
    bijaMantra: "ॐ (OM)",
    frequencyHz: 852,
    petals: 2,
    colorHex: "#4f46e5",
    hermeticElement: "Light / Astral Vision (Triveni Sangam of Nadis)",
    qabalisticSphere: "Binah & Chokmah (Understanding & Wisdom)",
    alchemyStage: "Distillation (Ascent to non-dual Buddhi)",
    planetaryRuler: "Brihaspati (Jupiter) & Ketu",
    crystal: "Amethyst, Fluorite, Labradorite",
    essentialOil: "Sandalwood, Clary Sage, Myrrh",
    balancedState: "Lucid perception, intuitive command, stabilized pituitary signaling, deep inner stillness.",
    imbalancedState: "Mental fog, hyper-intellectualization, fragmented focus, headaches.",
    asanaPractice: "Shambhavi Mudra, Trataka, Nadi Shodhana with Kumbhaka"
  },
  {
    id: "sahasrara",
    order: 7,
    name: "Sahasrara (Crown Center)",
    sanskrit: "सहस्रार पद्म",
    location: "Crown of the Head (Brahmarandhra)",
    endocrineGland: "Pineal Gland (Melatonin, Pinoline & DMT Pathways)",
    tattva: "Parama Shiva / Pure Consciousness",
    bijaMantra: "अ (Silent Visarga / Nada-Bindu)",
    frequencyHz: 963,
    petals: 1000,
    colorHex: "#7c3aed",
    hermeticElement: "Divine Light (Kether Crown)",
    qabalisticSphere: "Kether (The Supreme Crown)",
    alchemyStage: "Coagulation (The Philosopher's Stone / Permanent Awakening)",
    planetaryRuler: "Surya / Transcendental",
    crystal: "Clear Quartz, Selenite, Moldavite",
    essentialOil: "Sacred Lotus, White Frankincense, Spikenard",
    balancedState: "Unified toroidal coherence, transcendental witness awareness, serene integration.",
    imbalancedState: "Ungrounded dissociation when lower chakras lack preparation.",
    asanaPractice: "Maha Mudra, Khechari Mudra, Silent Vipassana & Turya Dhyana"
  }
];

export interface PracticeItem {
  id: string;
  category: "Asana" | "Pranayama" | "Mudra & Bandha" | "Vibrational Healing";
  title: string;
  sanskrit: string;
  targetEnergy: string;
  duration: string;
  instructions: string[];
  caution: string;
}

export const KUNDALINI_PRACTICES: PracticeItem[] = [
  {
    id: "nadi_shodhana",
    category: "Pranayama",
    title: "Nadi Shodhana (Alternate Nostril Purification)",
    sanskrit: "नाड़ी शोधन प्राणायाम",
    targetEnergy: "Balances Ida (Lunar Left) & Pingala (Solar Right) Nadis prior to Sushumna entry",
    duration: "10–15 Minutes daily",
    instructions: [
      "Sit in Siddhasana or Sukhasana with spine upright and shoulders relaxed.",
      "Close the right nostril gently with the right thumb; inhale smoothly through the left nostril (Ida) for 4 counts.",
      "Hold breath briefly if comfortable (Antar Kumbhaka, 4–8 counts) with light Mula Bandha.",
      "Close left nostril with ring finger and exhale completely through the right nostril (Pingala) for 8 counts.",
      "Inhale through right nostril (4 counts), hold briefly, and exhale through left (8 counts) to complete one round."
    ],
    caution: "Never strain breath retention (Kumbhaka) if experiencing dizziness, hypertension, or anxiety."
  },
  {
    id: "maha_bandha",
    category: "Mudra & Bandha",
    title: "Bandha Traya / Maha Bandha (The Three Locks)",
    sanskrit: "महाबन्धः (मूल-उड्डीयान-जालन्धर)",
    targetEnergy: "Compresses Prana and Apana at Manipura to pierce the Three Granthis",
    duration: "3–9 Rounds on empty stomach",
    instructions: [
      "Inhale deeply and perform a complete, gentle exhalation (Bahya Kumbhaka).",
      "Apply Jalandhara Bandha (chin lock tucked softly into sternal notch).",
      "Apply Uddiyana Bandha (draw abdomen inward and upward beneath the ribcage).",
      "Apply Mula Bandha (lift pelvic floor upward toward the base of the spine).",
      "Hold comfortably without tension, then release Mula → Uddiyana → Jalandhara before inhaling slowly."
    ],
    caution: "Strictly contraindicated during pregnancy, menstruation, active hernia, or high blood pressure."
  },
  {
    id: "sat_kriya",
    category: "Asana",
    title: "Sat Kriya Spine Pump & Ojas Transmutation",
    sanskrit: "सत् क्रिया",
    targetEnergy: "Channels sexual vitality (Swadhishthana) upward through Sushumna into higher centers",
    duration: "3–11 Minutes + Equal Rest",
    instructions: [
      "Sit on the heels in Vajrasana and interlace fingers overhead with index fingers pointing skyward.",
      "Chant 'Sat' firmly while drawing the navel point cleanly inward toward the spine.",
      "Chant 'Naam' softly while relaxing the abdominal wall.",
      "Maintain steady rhythmic pace for 3 minutes, then inhale, apply Mula Bandha, and mentally draw energy from base to crown."
    ],
    caution: "Rest supine in Shavasana for the same duration as practice to allow nervous system integration."
  },
  {
    id: "shambhavi_khechari",
    category: "Mudra & Bandha",
    title: "Shambhavi & Talabya/Khechari Seal",
    sanskrit: "शाम्भवी मुद्रा एवं खेचरी योगः",
    targetEnergy: "Connects Third Eye focus with pituitary-pineal neural circuit",
    duration: "5–10 Minutes",
    instructions: [
      "Rest tongue softly against the upper soft palate (Nabhah Mudra / early Khechari).",
      "Gaze gently upward behind closed eyelids toward the Ajna center (eyebrow point) without eye strain.",
      "Observe inner luminous space (Chidakasha) silently without forcing visions."
    ],
    caution: "If eye strain or brow tension arises, relax gaze straight ahead immediately."
  },
  {
    id: "bhastrika_kapalabhati",
    category: "Pranayama",
    title: "Kapalabhati & Controlled Bhastrika",
    sanskrit: "कपालभाति एवं भस्त्रिका",
    targetEnergy: "Stimulates cranial blood flow, clears mucus from Nadis, ignites Manipura Agni",
    duration: "3 Sets of 30–50 strokes",
    instructions: [
      "Sit erect on a firm cushion in morning hours on an empty stomach.",
      "Perform sharp, rhythmic exhalations by snapping lower belly inward; allow inhalations to rebound passively.",
      "Pause after each round for 30 seconds of calm silent observation before resuming."
    ],
    caution: "Stop immediately if lightheaded. Avoid during pregnancy, acid reflux flares, or epilepsy."
  },
  {
    id: "sound_tuning_forks",
    category: "Vibrational Healing",
    title: "Solfeggio Tuning Forks, Crystals & Tattva Balancing",
    sanskrit: "नाद-चिकित्सा एवं तत्त्व सन्तुलनम्",
    targetEnergy: "Entrains erratic brainwaves during intense awakening surges",
    duration: "15 Minutes evening integration",
    instructions: [
      "Select the tuning fork corresponding to an agitated center (e.g., 396Hz Root for grounding when top-heavy).",
      "Place the grounding crystal (Red Jasper / Hematite) at the feet or base of the spine.",
      "Listen to sustained harmonic sine resonance while slowing exhale to twice the duration of inhale."
    ],
    caution: "Always ground excess crown energy back to Earth/Root after high-frequency sound meditation."
  }
];

export const INTEGRATION_PROTOCOLS = [
  {
    id: "grounding_hydration",
    title: "1. Nervous System Grounding & Electrolyte Hydration",
    summary: "Spontaneous Kundalini activation dramatically increases neural firing rates and peripheral nerve heat.",
    steps: [
      "Drink 2.5–3 liters of structured spring water daily with trace mineral electrolytes (magnesium, potassium, rock salt).",
      "Walk barefoot on damp grass or soil for 20 minutes daily to discharge static charge buildup.",
      "Favor warm, grounding cooked root vegetables, ghee, soaked almonds, and whole grains; reduce caffeine and refined sugar."
    ]
  },
  {
    id: "granthi_clearance",
    title: "2. Navigating the Three Psychic Knots (Granthis)",
    summary: "As energy rises along Sushumna Nadi, it encounters three classical resistance seals that cause temporary symptoms:",
    steps: [
      "Brahma Granthi (Root / Pelvic region): Releases primal survival fears and bodily attachment through grounding Hatha postures.",
      "Vishnu Granthi (Heart region): Dissolves emotional grief, ego defense, and longing via Bhakti, compassion, and heart coherence.",
      "Rudra Granthi (Brow region): Surrenders hyper-analytical control and mental rigidity via witness meditation and non-duality."
    ]
  },
  {
    id: "toroidal_merkaba",
    title: "3. Toroidal Biofield Coherence & Lucid Dream Integration",
    summary: "Awakened subtle energy stabilizes into a balanced electromagnetic torus around the spine and heart.",
    steps: [
      "Keep a structured dream journal upon waking to track heightened REM intensity, lucid dreams, and hypnagogic phenomena.",
      "Maintain strict sleep circadian rhythm: wind down in dim amber lighting 60 minutes before rest without screens.",
      "Channel excess sacral libido upward via pranayama, physical movement, creative arts, and disciplined Brahmacharya/Ojas conservation."
    ]
  },
  {
    id: "three_nadis",
    title: "4. Subtle Anatomy: Ida, Pingala & Sushumna Calibration",
    summary: "Physical well-being depends on harmonic alternation of left (parasympathetic) and right (sympathetic) nostrils every ~90 minutes.",
    steps: [
      "Ida Nadi (Left / Lunar / Cooling): Controls rest, intuition, creative imagination, and anabolic recovery.",
      "Pingala Nadi (Right / Solar / Heating): Controls vitality, logical action, digestion, and sympathetic readiness.",
      "Sushumna Nadi (Central Channel): Opens only when Ida and Pingala achieve equilibrium, allowing coherent spinal ascent."
    ]
  }
];

export default function KundaliniYogaStudio() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<"subtle_body" | "compendium" | "practices" | "integration">("subtle_body");
  const [selectedChakraId, setSelectedChakraId] = useState<string>("anahata");
  const [awakeningStage, setAwakeningStage] = useState<number>(4); // 1 to 7 stages
  const [isPranaFlowActive, setIsPranaFlowActive] = useState<boolean>(true);
  const [practiceFilter, setPracticeFilter] = useState<string>("All");
  const [isPlayingTone, setIsPlayingTone] = useState<boolean>(false);
  const [playingFreq, setPlayingFreq] = useState<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  const selectedChakra = KUNDALINI_CHAKRAS.find((c) => c.id === selectedChakraId) || KUNDALINI_CHAKRAS[3];

  const stopAudio = () => {
    if (oscRef.current) {
      try {
        oscRef.current.stop();
        oscRef.current.disconnect();
      } catch (_) {}
      oscRef.current = null;
    }
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.close();
      } catch (_) {}
      audioCtxRef.current = null;
    }
    setIsPlayingTone(false);
    setPlayingFreq(null);
  };

  useEffect(() => {
    return () => stopAudio();
  }, []);

  const toggleTuningFork = (freq: number) => {
    if (isPlayingTone && playingFreq === freq) {
      stopAudio();
      return;
    }
    stopAudio();
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gainNode.gain.setValueAtTime(0.005, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.11, ctx.currentTime + 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 4.5);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc.start();
      oscRef.current = osc;

      setIsPlayingTone(true);
      setPlayingFreq(freq);
      setTimeout(() => {
        stopAudio();
      }, 4500);
    } catch (err) {
      console.error("Audio error:", err);
    }
  };

  const stageDescriptions: Record<number, { label: string; desc: string }> = {
    1: { label: "Stage 1 · Dormant Shakti (Muladhara Base)", desc: "Latent vital energy coiled 3.5 turns at the coccygeal plexus; foundational nervous system grounding." },
    2: { label: "Stage 2 · Pranic Stirring (Svadhishthana)", desc: "Pelvic warmth, emotional release, and initial cleansing of sacral memory impressions." },
    3: { label: "Stage 3 · Agni Ignition (Manipura & Brahma Granthi)", desc: "Piercing the first psychic knot; willpower amplification and solar-lunar breath balancing." },
    4: { label: "Stage 4 · Heart Coherence (Anahata & Toroidal Field)", desc: "Thymus resonance, expansion of the electromagnetic cardiac torus, and Vishnu Granthi softening." },
    5: { label: "Stage 5 · Etheric Purification (Vishuddha)", desc: "Vagus nerve calm, harmonic vocal expression, and thyroid/metabolic equilibrium." },
    6: { label: "Stage 6 · Triveni Convergence (Ajna & Rudra Granthi)", desc: "Ida and Pingala merge at the midbrain pituitary axis; lucid dream recall and witness awareness." },
    7: { label: "Stage 7 · Sahasrara Ascent & Stabilization", desc: "Pineal neuro-endocrine harmony, integrated non-dual awareness, and full subtle body coherence." }
  };

  const filteredPractices = practiceFilter === "All"
    ? KUNDALINI_PRACTICES
    : KUNDALINI_PRACTICES.filter((p) => p.category === practiceFilter);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8 text-stone-100">
      {/* Studio Editorial Header */}
      <header className="bg-[#181410] border border-stone-800 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2 text-xs text-amber-400/90 font-sans">
            <span>Subtle Body Anatomy</span>
            <span aria-hidden="true">·</span>
            <span>Shat-Chakra Science</span>
            <span aria-hidden="true">·</span>
            <span>Comparative Esotericism</span>
            <span aria-hidden="true">·</span>
            <span>Awakening Integration</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-serif tracking-tight text-stone-100 text-balance">
            Kundalini Yoga & Subtle Anatomy Compendium
          </h1>
          <p className="text-sm text-stone-300 font-sans leading-relaxed">
            Comprehensive systematic guide to the nervous system, Nadis (Ida, Pingala, Sushumna), seven primary Chakras, toroidal biofield mechanics, practical Kriyas, and holistic awakening integration.
          </p>
        </div>

        <div className="bg-[#120f0c] border border-stone-800 rounded-xl p-4 shrink-0 text-left lg:text-right">
          <div className="text-xs text-stone-400 font-sans">Active Frequency Resonance</div>
          <div className="text-2xl font-mono tabular-nums font-bold text-amber-300 mt-0.5">
            {selectedChakra.frequencyHz} Hz
          </div>
          <div className="text-xs text-stone-400 font-sans mt-0.5">
            {selectedChakra.bijaMantra} · {selectedChakra.tattva.split(" ")[0]} Tattva
          </div>
        </div>
      </header>

      {/* Functional Segmented Tab Navigation */}
      <nav aria-label="Kundalini Yoga sections" className="p-1.5 bg-[#16120f] border border-stone-800 rounded-xl flex flex-wrap gap-1.5">
        {[
          { id: "subtle_body", label: "Subtle Spine & Chakra Sandbox", icon: Sparkles },
          { id: "compendium", label: "Shat-Chakra & Esoteric Correspondences", icon: BookOpen },
          { id: "practices", label: "Asana, Pranayama, Mudra & Sound", icon: Wind },
          { id: "integration", label: "Awakening Symptoms & Integration", icon: ShieldCheck }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as any)}
              className={`flex-1 min-w-[180px] px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-amber-900/90 text-amber-100 border border-amber-500/60 shadow-sm"
                  : "text-stone-400 hover:text-stone-100 hover:bg-stone-900/60 border border-transparent"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* SECTION 1: TWO-ZONE INTERACTIVE SUBTLE BODY & TOROIDAL SANDBOX */}
      {activeSection === "subtle_body" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left 65% Interactive Canvas Stage */}
          <div className="lg:col-span-7 bg-[#14110e] border border-stone-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-4">
              <div>
                <h2 className="text-lg font-serif font-semibold text-stone-100">
                  Sushumna, Ida & Pingala Nadi Axis
                </h2>
                <p className="text-xs text-stone-400 font-sans">
                  Select any center along the spinal channel to inspect endocrine correlations and harmonic frequency.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPranaFlowActive(!isPranaFlowActive)}
                  className="px-3.5 py-2 rounded-lg text-xs font-medium bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  {isPranaFlowActive ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
                  <span>{isPranaFlowActive ? "Pause Flow" : "Start Flow"}</span>
                </button>
                <button
                  onClick={() => {
                    setAwakeningStage(1);
                    setSelectedChakraId("muladhara");
                  }}
                  className="px-3 py-2 rounded-lg text-xs font-medium bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 flex items-center gap-1 cursor-pointer whitespace-nowrap"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Interactive SVG Subtle Body Diagram */}
            <div className="relative w-full min-h-[440px] bg-[#0e0c0a] rounded-xl border border-stone-800/80 flex items-center justify-center p-4 overflow-hidden">
              <svg viewBox="0 0 420 500" className="w-full max-w-[400px] h-auto" role="img" aria-label="Interactive Sushumna Nadi and Seven Chakras diagram">
                <defs>
                  <radialGradient id="torusGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={selectedChakra.colorHex} stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#0e0c0a" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Toroidal Electromagnetic Biofield */}
                <ellipse
                  cx="210"
                  cy="250"
                  rx={isPranaFlowActive ? 165 : 140}
                  ry="215"
                  fill="url(#torusGlow)"
                  stroke="rgba(217, 119, 6, 0.25)"
                  strokeDasharray="4 4"
                  strokeWidth="1.2"
                />
                <ellipse
                  cx="210"
                  cy="250"
                  rx="110"
                  ry="185"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1"
                />

                {/* Central Sushumna Channel */}
                <line x1="210" y1="55" x2="210" y2="445" stroke="#d97706" strokeWidth="3.5" strokeOpacity="0.7" />

                {/* Left Ida Nadi (Cooling Lunar Sine Curve) */}
                <path
                  d="M 210 445 C 145 410, 145 360, 210 325 C 275 290, 275 240, 210 205 C 145 170, 145 120, 210 85"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeOpacity="0.65"
                  strokeDasharray={isPranaFlowActive ? "6 4" : "none"}
                />

                {/* Right Pingala Nadi (Heating Solar Cosine Curve) */}
                <path
                  d="M 210 445 C 275 410, 275 360, 210 325 C 145 290, 145 240, 210 205 C 275 170, 275 120, 210 85"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  strokeOpacity="0.65"
                  strokeDasharray={isPranaFlowActive ? "6 4" : "none"}
                />

                {/* Granthi Markers (Brahma, Vishnu, Rudra Knots) */}
                <text x="315" y="420" fill="#a8a29e" fontSize="10" fontFamily="monospace">Brahma Granthi</text>
                <text x="315" y="255" fill="#a8a29e" fontSize="10" fontFamily="monospace">Vishnu Granthi</text>
                <text x="315" y="122" fill="#a8a29e" fontSize="10" fontFamily="monospace">Rudra Granthi</text>

                {/* 7 Interactive Chakra Nodes */}
                {[...KUNDALINI_CHAKRAS].reverse().map((chakra) => {
                  const yPos = 495 - chakra.order * 60; // order 7 at y=75, order 1 at y=435
                  const isActiveNode = selectedChakraId === chakra.id;
                  const isIlluminated = chakra.order <= awakeningStage;

                  return (
                    <g
                      key={chakra.id}
                      onClick={() => setSelectedChakraId(chakra.id)}
                      className="cursor-pointer"
                    >
                      {isActiveNode && (
                        <circle
                          cx="210"
                          cy={yPos}
                          r="24"
                          fill="none"
                          stroke="#fbbf24"
                          strokeWidth="1.8"
                        />
                      )}
                      <circle
                        cx="210"
                        cy={yPos}
                        r={isActiveNode ? 17 : 13}
                        fill={isIlluminated ? chakra.colorHex : "#292524"}
                        stroke={isIlluminated ? "#fafaf9" : "#57534e"}
                        strokeWidth="1.5"
                      />
                      <text
                        x="210"
                        y={yPos + 3.5}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="10"
                        fontWeight="bold"
                        fontFamily="serif"
                      >
                        {chakra.order}
                      </text>
                      <text
                        x="175"
                        y={yPos + 4}
                        textAnchor="end"
                        fill={isActiveNode ? "#fde68a" : "#d6d3d1"}
                        fontSize="11"
                        fontWeight={isActiveNode ? "bold" : "normal"}
                      >
                        {chakra.name.split(" ")[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Stage Slider Control */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs font-sans">
                <label htmlFor="awakening-stage-slider" className="font-medium text-stone-200">
                  Kundalini Ascent Stage: <span className="font-mono tabular-nums text-amber-300">{awakeningStage} / 7</span>
                </label>
                <span className="text-stone-400">{stageDescriptions[awakeningStage].label}</span>
              </div>
              <input
                id="awakening-stage-slider"
                type="range"
                min={1}
                max={7}
                step={1}
                value={awakeningStage}
                onChange={(e) => {
                  const stage = parseInt(e.target.value, 10);
                  setAwakeningStage(stage);
                  const target = KUNDALINI_CHAKRAS.find((c) => c.order === stage);
                  if (target) setSelectedChakraId(target.id);
                }}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <p className="text-xs text-stone-400 font-sans">
                {stageDescriptions[awakeningStage].desc}
              </p>
            </div>
          </div>

          {/* Right 35% Concept & Acoustic Control Deck */}
          <div className="lg:col-span-5 bg-[#181410] border border-stone-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-3 border-b border-stone-800 pb-4">
                <div>
                  <div className="text-xs text-stone-400 font-sans">
                    Center {selectedChakra.order} · {selectedChakra.petals} Petals · {selectedChakra.bijaMantra}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-100 mt-1">
                    {selectedChakra.name}
                  </h3>
                  <div className="text-sm font-serif text-amber-300 mt-0.5">
                    {selectedChakra.sanskrit}
                  </div>
                </div>
              </div>

              <dl className="divide-y divide-stone-800/80 text-xs font-sans">
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-stone-400 shrink-0">Spinal & Nerve Location</dt>
                  <dd className="text-stone-200 text-right">{selectedChakra.location}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-stone-400 shrink-0">Endocrine Correlation</dt>
                  <dd className="text-stone-200 text-right">{selectedChakra.endocrineGland}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-stone-400 shrink-0">Element (Tattva)</dt>
                  <dd className="text-stone-200 text-right">{selectedChakra.tattva}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-stone-400 shrink-0">Esoteric Tree Correspondence</dt>
                  <dd className="text-stone-200 text-right">{selectedChakra.qabalisticSphere}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-stone-400 shrink-0">Alchemical Stage</dt>
                  <dd className="text-stone-200 text-right">{selectedChakra.alchemyStage}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-stone-400 shrink-0">Planetary Affinity</dt>
                  <dd className="text-stone-200 text-right">{selectedChakra.planetaryRuler}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-stone-400 shrink-0">Crystals & Aromatherapy</dt>
                  <dd className="text-stone-200 text-right">{selectedChakra.crystal} · {selectedChakra.essentialOil}</dd>
                </div>
              </dl>

              <div className="space-y-2 pt-1">
                <div className="text-xs font-medium text-emerald-400">Balanced Expression</div>
                <p className="text-xs text-stone-300 leading-relaxed">{selectedChakra.balancedState}</p>
                <div className="text-xs font-medium text-amber-400 pt-1">Signs of Congestion or Excess</div>
                <p className="text-xs text-stone-300 leading-relaxed">{selectedChakra.imbalancedState}</p>
                <div className="text-xs font-medium text-stone-400 pt-1">Recommended Practice</div>
                <p className="text-xs text-stone-200">{selectedChakra.asanaPractice}</p>
              </div>
            </div>

            <button
              onClick={() => toggleTuningFork(selectedChakra.frequencyHz)}
              className={`w-full py-3.5 px-4 rounded-xl text-xs font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                isPlayingTone && playingFreq === selectedChakra.frequencyHz
                  ? "bg-amber-600 text-stone-950 font-semibold"
                  : "bg-stone-900 hover:bg-stone-800 text-amber-200 border border-stone-700"
              }`}
            >
              {isPlayingTone && playingFreq === selectedChakra.frequencyHz ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>Stop {selectedChakra.frequencyHz} Hz Tuning Fork</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span>Play {selectedChakra.frequencyHz} Hz Tuning Fork Tone</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* SECTION 2: SHAT-CHAKRA & COMPARATIVE ESOTERIC CORRESPONDENCES TABLE */}
      {activeSection === "compendium" && (
        <div className="bg-[#181410] border border-stone-800 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="space-y-1 border-b border-stone-800 pb-4">
            <h2 className="text-2xl font-serif font-bold text-stone-100">
              Unified East–West Subtle Anatomy Matrix
            </h2>
            <p className="text-xs md:text-sm text-stone-300 font-sans">
              Comparative mapping of the seven spinal centers across Vedic Tattvas, endocrine physiology, Hermetic Alchemy, Qabalistic spheres, and vibrational tuning tools.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-stone-700 text-stone-400">
                  <th className="py-3 px-3 font-medium">Chakra & Bija</th>
                  <th className="py-3 px-3 font-medium">Endocrine Gland</th>
                  <th className="py-3 px-3 font-medium">Tattva / Element</th>
                  <th className="py-3 px-3 font-medium">Tree Sphere</th>
                  <th className="py-3 px-3 font-medium">Alchemy Phase</th>
                  <th className="py-3 px-3 font-medium">Tuning (Hz)</th>
                  <th className="py-3 px-3 font-medium">Crystals & Oils</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/70">
                {KUNDALINI_CHAKRAS.map((c) => (
                  <tr
                    key={c.id}
                    onClick={() => {
                      setSelectedChakraId(c.id);
                      setActiveSection("subtle_body");
                    }}
                    className="hover:bg-stone-900/50 transition-colors cursor-pointer"
                  >
                    <td className="py-3.5 px-3">
                      <div className="font-serif font-semibold text-stone-100">{c.name}</div>
                      <div className="text-[11px] text-amber-400/90">{c.bijaMantra} · {c.petals} petals</div>
                    </td>
                    <td className="py-3.5 px-3 text-stone-300">{c.endocrineGland}</td>
                    <td className="py-3.5 px-3 text-stone-300">{c.tattva}</td>
                    <td className="py-3.5 px-3 text-stone-300">{c.qabalisticSphere}</td>
                    <td className="py-3.5 px-3 text-stone-300">{c.alchemyStage}</td>
                    <td className="py-3.5 px-3 font-mono tabular-nums text-amber-300">{c.frequencyHz} Hz</td>
                    <td className="py-3.5 px-3 text-stone-300">{c.crystal} · {c.essentialOil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SECTION 3: SADHANAS — ASANAS, PRANAYAMAS, MUDRAS, BANDHAS & VIBRATIONAL HEALING */}
      {activeSection === "practices" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-serif font-bold text-stone-100">
                Structured Kundalini Sadhana Techniques
              </h2>
              <p className="text-xs text-stone-400 font-sans">
                Step-by-step breathwork, muscular seals (Bandhas), gestures (Mudras), and vibrational sound healing.
              </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 bg-[#16120f] p-1 rounded-xl border border-stone-800">
              {["All", "Pranayama", "Mudra & Bandha", "Asana", "Vibrational Healing"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPracticeFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap cursor-pointer transition-colors ${
                    practiceFilter === cat
                      ? "bg-amber-800 text-stone-100"
                      : "text-stone-400 hover:text-stone-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPractices.map((practice) => (
              <article key={practice.id} className="bg-[#181410] border border-stone-800 rounded-2xl p-6 space-y-4">
                <div className="space-y-1">
                  <div className="text-xs text-stone-400 font-sans">
                    {practice.category} · {practice.duration}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-100">
                    {practice.title}
                  </h3>
                  <div className="text-xs font-serif text-amber-300">
                    {practice.sanskrit}
                  </div>
                </div>

                <p className="text-xs text-stone-300 font-sans">
                  <strong className="text-stone-100">Purpose:</strong> {practice.targetEnergy}
                </p>

                <ol className="space-y-2 text-xs text-stone-300 font-sans list-decimal list-inside">
                  {practice.instructions.map((step, i) => (
                    <li key={i} className="leading-relaxed">{step}</li>
                  ))}
                </ol>

                <div className="pt-3 border-t border-stone-800 text-xs text-amber-300/90 font-sans">
                  <strong>Safety Guidance:</strong> {practice.caution}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 4: AWAKENING INTEGRATION, GRANTHIS, NADIS & MERKABA TOROIDAL MECHANICS */}
      {activeSection === "integration" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INTEGRATION_PROTOCOLS.map((item) => (
            <section key={item.id} className="bg-[#181410] border border-stone-800 rounded-2xl p-6 space-y-4">
              <div className="space-y-1.5">
                <h3 className="text-lg font-serif font-bold text-stone-100">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 font-sans leading-relaxed">
                  {item.summary}
                </p>
              </div>
              <ul className="space-y-2.5 pt-2 border-t border-stone-800 text-xs text-stone-300 font-sans">
                {item.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
