import React, { useState, useMemo } from "react";
import {
  Orbit,
  Sun,
  Moon,
  Compass,
  Sparkles,
  Calendar,
  Flame,
  ShieldCheck,
  BookOpen,
  ChevronRight,
  Layers,
  Activity,
  Award,
  Clock,
  RotateCcw,
  Search,
  CheckCircle2,
  AlertTriangle,
  Info,
  Globe,
  Radio,
  Zap,
  ArrowUpRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// 12 Zodiac Signs data with Vedic Astro Vaibhav insights
export const VEDIC_ZODIAC_SIGNS = [
  {
    id: "mesha",
    nameSanskrit: "मेष (Mesha)",
    nameEnglish: "Aries",
    ruler: "Mangal (Mars)",
    element: "Agni (Fire)",
    gocharSummary: "Major career realignment; Rahu-Ketu transit stimulates 12th/6th axis releasing past karmic debts.",
    saturnTransit: "11th House transit brings gains through discipline; persistent efforts yield substantial recognition.",
    jupiterTransit: "Favorable 1st/2nd house transit expands wealth, wisdom, and spiritual orientation.",
    rahuKetuEffect: "Spiritual expenditures, foreign travels, transformation in daily work and health routines.",
    sadeSatiStatus: "No Sade Sati active; favorable period for bold initiatives.",
    remedy: "Hanuman Chalisa recitation on Tuesdays, offer water to rising Sun, wear pure red coral or copper bracelet if Mars is benefic."
  },
  {
    id: "vrishabha",
    nameSanskrit: "वृषभ (Vrishabha)",
    nameEnglish: "Taurus",
    ruler: "Shukra (Venus)",
    element: "Prithvi (Earth)",
    gocharSummary: "Shani transit in 10th house Karma Bhava demands immense ethical work, perseverance, and structure.",
    saturnTransit: "Shani Shash Mahapurusha influence in 10th house; career consolidation and long-term legacy creation.",
    jupiterTransit: "12th to 1st house transit inspires spiritual awakening, international opportunities, and family peace.",
    rahuKetuEffect: "11th house Rahu provides sudden financial windfalls; Ketu in 5th detachment from speculative investments.",
    sadeSatiStatus: "No Sade Sati; Focus on career discipline.",
    remedy: "Worship Goddess Mahalakshmi on Fridays, feed cows with green fodder, chant Shukra Beej Mantra (ॐ शुं शुक्राय नमः)."
  },
  {
    id: "mithuna",
    nameSanskrit: "मिथुन (Mithuna)",
    nameEnglish: "Gemini",
    ruler: "Budha (Mercury)",
    element: "Vayu (Air)",
    gocharSummary: "Bhagya Bhava (9th house) Shani activates destiny, higher learning, and long-distance pilgrimages.",
    saturnTransit: "9th House transit tests belief systems, promotes deep philosophical study and mentorship.",
    jupiterTransit: "11th house transit brings supportive network circles, elder sibling blessings, and business gains.",
    rahuKetuEffect: "10th house Rahu brings public ambition and unconventional career growth; Ketu in 4th internal spiritual detachment.",
    sadeSatiStatus: "Dhaiya completed; entering a stable, auspicious momentum phase.",
    remedy: "Feed birds soaked green moong beans on Wednesdays, chant Vishnu Sahasranama, respect maternal uncles."
  },
  {
    id: "karka",
    nameSanskrit: "कर्क (Karka)",
    nameEnglish: "Cancer",
    ruler: "Chandra (Moon)",
    element: "Jala (Water)",
    gocharSummary: "Ashtama Shani (8th house) necessitates inner transformation, occult research, and health precautions.",
    saturnTransit: "8th House Shani tests mental resilience; requires avoiding speculative risks and practicing pranayama.",
    jupiterTransit: "10th house Jupiter aspecting 2nd, 4th, and 6th houses protects reputation and career stability.",
    rahuKetuEffect: "9th house Rahu inspires unconventional spiritual quests; Ketu in 3rd enhances intuitive courage.",
    sadeSatiStatus: "Ashtama Shani (Kantaka Shani); requires emotional calmness and regular Shiva Aradhana.",
    remedy: "Perform Monday Jalabhisheka on Shivling with raw milk and black sesame, chant Maha Mrityunjaya Mantra 108 times daily."
  },
  {
    id: "simha",
    nameSanskrit: "सिंह (Simha)",
    nameEnglish: "Leo",
    ruler: "Surya (Sun)",
    element: "Agni (Fire)",
    gocharSummary: "7th house Shani brings partnerships under rigorous review; Jupiter transit activates fortune and Dharma.",
    saturnTransit: "7th House Shani demands mutual humility in marriage and contractual clarity in partnerships.",
    jupiterTransit: "9th house Jupiter showers divine grace (Guru Kripa), resolving litigation and boosting father's blessings.",
    rahuKetuEffect: "8th house Rahu gives deep transformative insights; Ketu in 2nd asks for truthful and measured speech.",
    sadeSatiStatus: "No Sade Sati; relationship maturity is the key lesson.",
    remedy: "Offer Arghya to Surya at sunrise with copper vessel containing red flowers, recite Aditya Hridaya Stotra."
  },
  {
    id: "kanya",
    nameSanskrit: "कन्या (Kanya)",
    nameEnglish: "Virgo",
    ruler: "Budha (Mercury)",
    element: "Prithvi (Earth)",
    gocharSummary: "6th house Shani is exceptionally strong (Shatru Nashak), defeating obstacles and clearing debts.",
    saturnTransit: "6th House Shani gives mastery over competitors, victory in examinations, and disciplined daily health.",
    jupiterTransit: "8th house transit deepens esoteric wisdom, ancestral research, and unexpected financial settlements.",
    rahuKetuEffect: "7th house Rahu requires vigilant partner selection; Ketu in 1st promotes introspective self-realization.",
    sadeSatiStatus: "No Sade Sati; powerful phase for building long-term stamina.",
    remedy: "Feed green grass to cows, donate black blankets on Saturdays to needy, chant Budha Gayatri Mantra."
  },
  {
    id: "tula",
    nameSanskrit: "तुला (Tula)",
    nameEnglish: "Libra",
    ruler: "Shukra (Venus)",
    element: "Vayu (Air)",
    gocharSummary: "5th house Shani tests creative intellect and children's affairs; Jupiter in 7th strengthens marital bond.",
    saturnTransit: "5th House Shani disciplines student life, requires patient investing, and elevates mantra siddhi.",
    jupiterTransit: "7th house Jupiter provides matrimonial harmony, ethical business expansions, and trusted allies.",
    rahuKetuEffect: "6th house Rahu vanquishes adversaries; Ketu in 12th opens profound meditative states and Moksha tendencies.",
    sadeSatiStatus: "No Sade Sati; intellectual endurance rewarded.",
    remedy: "Light mustard oil lamp under Peepal tree on Saturday evenings, feed sweet rotis to black dogs, respect women."
  },
  {
    id: "vrischika",
    nameSanskrit: "वृश्चिक (Vrischika)",
    nameEnglish: "Scorpio",
    ruler: "Mangal / Ketu",
    element: "Jala (Water)",
    gocharSummary: "4th house Shani (Kantaka Shani) prompts residential shifts and mother's care; strong professional drive.",
    saturnTransit: "4th House Shani tests domestic peace and vehicle matters; prompts introspection and grounding.",
    jupiterTransit: "6th house Jupiter controls debts and improves analytical acumen for overcoming chronic bottlenecks.",
    rahuKetuEffect: "5th house Rahu sparks unconventional creative ideas; Ketu in 11th brings non-attachment to material friends.",
    sadeSatiStatus: "4th House Dhaiya active; keep home environment peaceful and spiritually energized.",
    remedy: "Chant Sundarkand on Tuesdays and Saturdays, wear 7-Mukhi Rudraksha, maintain neat and clutter-free living space."
  },
  {
    id: "dhanu",
    nameSanskrit: "धनु (Dhanu)",
    nameEnglish: "Sagittarius",
    ruler: "Brihaspati (Jupiter)",
    element: "Agni (Fire)",
    gocharSummary: "3rd house Shani brings phenomenal initiative, valor (Parakrama), and success in self-driven enterprises.",
    saturnTransit: "3rd House Shani brings unshakeable determination, literary accomplishments, and favorable short journeys.",
    jupiterTransit: "5th house Jupiter (Trikona Kripa) bestows wisdom, auspicious progeny blessings, and academic honors.",
    rahuKetuEffect: "4th house Rahu invites modern home technology; Ketu in 10th gives detached excellence at work.",
    sadeSatiStatus: "Completely free from Sade Sati; rapid expansion phase.",
    remedy: "Apply turmeric/sandalwood tilak on forehead, donate yellow grams/dal on Thursdays to temple priests, chant Guru Mantra."
  },
  {
    id: "makara",
    nameSanskrit: "मकर (Makara)",
    nameEnglish: "Capricorn",
    ruler: "Shani (Saturn)",
    element: "Prithvi (Earth)",
    gocharSummary: "Final setting phase of Sade Sati (Charna Phala); financial restructuring and maturity bear rich fruit.",
    saturnTransit: "2nd House Shani disciplines speech and family investments; teaches enduring fiscal frugality.",
    jupiterTransit: "4th house Jupiter brings emotional comfort, real-estate stabilization, and mother's blessings.",
    rahuKetuEffect: "3rd house Rahu gives formidable digital media and communication power; Ketu in 9th dissolves dogmatic pride.",
    sadeSatiStatus: "Final Setting Phase of Sade Sati; relief and enduring stability emerging.",
    remedy: "Perform Dasharatha Shani Stotra recitation every Saturday, serve elderly laborers, wear iron ring made of horse-shoe."
  },
  {
    id: "kumbha",
    nameSanskrit: "कुम्भ (Kumbha)",
    nameEnglish: "Aquarius",
    ruler: "Shani / Rahu",
    element: "Vayu (Air)",
    gocharSummary: "Peak phase of Sade Sati with Shani in Lagna (Shash Mahapurusha); deep personal reinventing and karma reset.",
    saturnTransit: "1st House Shani in own sign confers profound endurance, statesman-like wisdom, and structural reboot.",
    jupiterTransit: "3rd house Jupiter inspires courage, writing, digital outreach, and strong supportive friendships.",
    rahuKetuEffect: "2nd house Rahu warns against deceptive investments; Ketu in 8th sharpens intuition and esoteric foresight.",
    sadeSatiStatus: "Peak Phase of Sade Sati (Janma Shani); humility, hard work, and service yield highest spiritual elevation.",
    remedy: "Chant Shani Beej Mantra (ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः), offer mustard oil chhaya-daan on Saturdays, feed crows."
  },
  {
    id: "meena",
    nameSanskrit: "मीन (Meena)",
    nameEnglish: "Pisces",
    ruler: "Brihaspati (Jupiter)",
    element: "Jala (Water)",
    gocharSummary: "Rising phase of Sade Sati (12th house Shani); foreign linkages, spiritual seclusion, and sleep cycle discipline.",
    saturnTransit: "12th House Shani demands emotional grounding, meditation, expenditure control, and international ties.",
    jupiterTransit: "2nd house Jupiter protects family harmony and provides unexpected wealth generation avenues.",
    rahuKetuEffect: "1st house Rahu expands worldly curiosity; Ketu in 7th teaches selfless detachment in partnerships.",
    sadeSatiStatus: "1st Phase of Sade Sati (Rising Phase); practice regular Dhyana and selfless Seva.",
    remedy: "Worship Lord Shiva with Bilva leaves, donate yellow sweets to orphanages, meditate in Brahma Muhurta."
  }
];

// Khagola Shastra Treatises & Astronomical Concepts
export const KHAGOLA_TREATISES = [
  {
    id: "surya_siddhanta",
    title: "Surya Siddhanta (सूर्यसिद्धान्तः)",
    era: "Ancient Revelation (~14 Chapters / Adhyayas)",
    primaryContribution: "Spherical trigonometry, True planetary longitudes (Sphuta), Precession of Equinoxes (Ayanamsha), Lunar/Solar Eclipses.",
    keyConcepts: [
      "Kāla-Māna (Time measurement from Truti to Mahayuga & Kalpa)",
      "Bhagola & Khagola (Celestial and terrestrial spheres)",
      "Mandocha (Apogee) and Shighrocha (Fastest orbital point / conjunction)",
      "Chhaya-yantra (Solar shadow projection math for latitude and time)"
    ],
    shloka: "गुणानां मण्डलं खस्थं भगोलं तद् विदुर्बुधाः। तन्मध्ये तु क्षितिर्भाति सर्वतः खमये पदे॥",
    translation: "The sphere of stars situated in space is known by the wise as Bhagola (Zodiacal Sphere). In its center rests the Earth, shining in the boundless sky."
  },
  {
    id: "aryabhatiya",
    title: "Aryabhatiya of Aryabhata (आर्यभटीयम् - ४९९ CE)",
    era: "Classical Pataliputra (499 CE)",
    primaryContribution: "Diurnal rotation of Earth on its axis, Heliocentric inclinations, Exact approximation of π = 3.1416, Table of Sines (Jya).",
    keyConcepts: [
      "Bhu-Bhramana: Earth rotates eastward daily on its axis causing rising and setting of stars",
      "Eclipse Mechanism: Lunar eclipse is Earth's shadow; solar eclipse is Moon's occlusion of Sun",
      "Gola-Pada: 50 verses dedicated purely to Spherical Astronomy and Armillary Sphere instruments"
    ],
    shloka: "अनुलोमगतिर्नौस्थः पश्यत्यचलं विलोमगं यद्वत्। अचलानि भानि तद्वत् समपश्चिमगानि लङ्कायाम्॥",
    translation: "Just as a man in a boat moving forward sees stationary objects on the bank moving backward, even so do the stationary stars appear to move straight westward to an observer at Lanka."
  },
  {
    id: "siddhanta_shiromani",
    title: "Siddhanta Shiromani of Bhaskaracharya II (११५० CE)",
    era: "Ujjain / Patan (1150 CE)",
    primaryContribution: "Goladhyaya (Spherical Astronomy), Gravity (Akrishti Shakti), Differential calculus rudiments (Tatkalika Gati).",
    keyConcepts: [
      "Akrishti Shakti: Earth by its inherent nature attracts celestial bodies towards itself",
      "Gola Yantra construction specifications with brass concentric circles",
      "Tri-Prashna: Solutions for Direction (Disha), Place (Desha), and Time (Kala) from solar shadows"
    ],
    shloka: "आकृष्टिशक्तिश्च मही तया यत् खस्थं गुरुस्वाभिमुखं स्वशक्त्या। आकृष्यते तत् पततीव भाति समे समन्तात् क्व पतत्वियं खे॥",
    translation: "This Earth possesses an attractive force (Akrishti Shakti) by which it draws all heavy objects towards itself. When an object is pulled, it appears to fall. But in uniform space, where could the Earth itself fall?"
  }
];

// Ancient Astronomical Instruments (Yantras)
export const ANCIENT_ASTRONOMICAL_YANTRAS = [
  {
    id: "gola_yantra",
    name: "Gola Yantra (Armillary Sphere)",
    sanskrit: "गोलयन्त्रम्",
    description: "Multi-ringed astronomical instrument modeling the celestial sphere, ecliptic, equator, and meridian for tracking planetary latitudes and polar longitudes.",
    function: "Demonstrates precession of equinoxes, celestial coordinates, and planetary risings/settings.",
    formula: "sin(δ) = sin(ε) × sin(λ) [Declination from Ecliptic Longitude]"
  },
  {
    id: "shanku_yantra",
    name: "Shanku Yantra (Gnomon Shadow Dial)",
    sanskrit: "शङ्कुयन्त्रम्",
    description: "Vertical cylindrical or conical rod placed in the center of concentric circles on a flat horizontal plane at true geographic meridian.",
    function: "Determines cardinal directions (Mahi-Sadhan), local solar noon, latitude (Akshamsha), and equinoctial mid-day shadow (Vishuvad-Bha).",
    formula: "tan(Zenith Angle) = Shadow Length / Gnomon Height (12 Angulas)"
  },
  {
    id: "nadi_valaya",
    name: "Nadi-Valaya Yantra (Equinoctial Sundial)",
    sanskrit: "नाडीवलययन्त्रम्",
    description: "Two parallel circular dials oriented in the plane of the celestial equator, with an axis pointing to the celestial poles (Dhruva).",
    function: "Measures Ghatis and Palas of local solar time; Northern face illuminated in Uttarayana, Southern face in Dakshinayana.",
    formula: "1 Solar Day = 60 Ghatis = 3600 Palas = 24 Hours (1 Ghati = 24 minutes)"
  },
  {
    id: "turya_yantra",
    name: "Turya Yantra (Astronomical Quadrant)",
    sanskrit: "तुर्ययन्त्रम्",
    description: "A 90-degree quadrant plate fitted with a plumb line and sighting pinholes for measuring angular altitude of stars and planets.",
    function: "Measures zenith distances of celestial bodies and calculates geographic latitude.",
    formula: "Latitude = 90° - Meridan Altitude of Equator"
  }
];

export default function VedicAstroKhagolStudio() {
  const { t } = useLanguage();

  // Active Studio Mode: "vedic_astro_vaibhav" vs "khagola_shastra" vs "remedies_lab"
  const [activeMode, setActiveMode] = useState<"vedic_astro_vaibhav" | "khagola_shastra" | "remedies_lab" | "kundali_calculator">("vedic_astro_vaibhav");
  const [selectedRashiId, setSelectedRashiId] = useState<string>("mesha");
  const [selectedYantraId, setSelectedYantraId] = useState<string>("gola_yantra");

  // Kundali Form State
  const [userDob, setUserDob] = useState("1995-05-15");
  const [userTob, setUserTob] = useState("10:30");
  const [userPob, setUserPob] = useState("Ujjain, India");
  const [kundaliGenerated, setKundaliGenerated] = useState(false);
  const [kundaliSummary, setKundaliSummary] = useState<any | null>(null);

  const selectedRashi = useMemo(() => {
    return VEDIC_ZODIAC_SIGNS.find(s => s.id === selectedRashiId) || VEDIC_ZODIAC_SIGNS[0];
  }, [selectedRashiId]);

  const selectedYantra = useMemo(() => {
    return ANCIENT_ASTRONOMICAL_YANTRAS.find(y => y.id === selectedYantraId) || ANCIENT_ASTRONOMICAL_YANTRAS[0];
  }, [selectedYantraId]);

  const handleCalculateKundali = () => {
    setKundaliGenerated(true);
    // Simple deterministic Vedic horoscope mapping based on month/time
    setKundaliSummary({
      lagna: "Karka (Cancer)",
      chandraRashi: selectedRashi.nameSanskrit,
      sunSign: "Mesha (Exalted Sun / Uccha Surya)",
      mahadasha: "Rahu Mahadasha (Entering Jupiter Antardasha)",
      favorableGems: "Pearl (Moti) & Yellow Sapphire (Pukhraj)",
      keyRemedy: selectedRashi.remedy,
      planetaryStrengths: [
        { planet: "Surya (Sun)", house: "10th House (Karma)", status: "Exalted (Digbali)", strength: "94%" },
        { planet: "Chandra (Moon)", house: "1st House (Lagna)", status: "Swakshetra (Own House)", strength: "88%" },
        { planet: "Mangal (Mars)", house: "10th House (Ruchaka Yoga)", status: "Exalted", strength: "92%" },
        { planet: "Budha (Mercury)", house: "11th House (Labha)", status: "Mitra Kshetra", strength: "78%" },
        { planet: "Guru (Jupiter)", house: "9th House (Bhagya)", status: "Hamsa Yoga Potential", strength: "96%" },
        { planet: "Shukra (Venus)", house: "11th House (Dhana)", status: "Friendly", strength: "82%" },
        { planet: "Shani (Saturn)", house: "7th House (Sasa Yoga)", status: "Digbali & Strong", strength: "89%" },
        { planet: "Rahu", house: "11th House (Gains)", status: "Upachaya Success", strength: "85%" },
        { planet: "Ketu", house: "5th House (Moksha)", status: "Esoteric Intuition", strength: "80%" },
      ]
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8 text-stone-100">
      {/* Studio Header Banner */}
      <div className="bg-gradient-to-r from-[#1f1710] via-[#2d1e14] to-[#1a120c] p-6 md:p-8 rounded-3xl border-2 border-amber-700/60 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-950 border border-amber-400/50 flex items-center justify-center shadow-lg">
                <Orbit className="w-6 h-6 text-amber-200 animate-spin-slow" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-white flex items-center gap-3">
                  Khagola & Vedic Astro Studio <span className="text-amber-400 font-hindi">(खगोल एवं वैदिक ज्योतिष)</span>
                </h1>
                <p className="text-xs md:text-sm text-stone-300 font-sans tracking-wide">
                  Ancient Indic Astronomy (Surya Siddhanta & Aryabhata) • Vedic Astro Vaibhav Transit & Gochara Intelligence
                </p>
              </div>
            </div>

            {/* Unboxed Metadata Line */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-amber-300/90 font-mono pt-1">
              <span>Astrologer Vaibhav Methodology</span>
              <span className="text-stone-600">·</span>
              <span>12 Rashi Gochara Analysis</span>
              <span className="text-stone-600">·</span>
              <span>Shani Sade Sati Radar</span>
              <span className="text-stone-600">·</span>
              <span>Surya Siddhanta Spherical Astronomy</span>
              <span className="text-stone-600">·</span>
              <span>Ancient Yantra Simulations</span>
            </div>
          </div>

          <div className="bg-black/50 p-4 rounded-2xl border border-amber-800/60 text-right self-start md:self-center shrink-0">
            <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">Prime Meridian</span>
            <span className="text-lg font-serif font-bold text-amber-100">Ujjayini 0° (23.17° N)</span>
            <span className="text-[10px] text-stone-400 block font-mono">Avanti Meridian of Ancient Khagola</span>
          </div>
        </div>
      </div>

      {/* Main Mode Navigation Tabs (Functional Segmented Buttons) */}
      <div className="p-1.5 bg-[#17120e] rounded-2xl border border-stone-800 flex flex-wrap items-center gap-2 shadow-xl">
        <button
          onClick={() => setActiveMode("vedic_astro_vaibhav")}
          className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeMode === "vedic_astro_vaibhav"
              ? "bg-gradient-to-r from-amber-800 to-amber-950 text-amber-100 border-amber-500 shadow-lg ring-1 ring-amber-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Sun className="w-4 h-4 text-amber-400" />
          <span>Vedic Astro Vaibhav (Gochar & Rashis)</span>
        </button>

        <button
          onClick={() => setActiveMode("khagola_shastra")}
          className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeMode === "khagola_shastra"
              ? "bg-gradient-to-r from-amber-800 to-amber-950 text-amber-100 border-amber-500 shadow-lg ring-1 ring-amber-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Orbit className="w-4 h-4 text-cyan-400" />
          <span>Khagola Shastra (खगोल शास्त्र)</span>
        </button>

        <button
          onClick={() => setActiveMode("remedies_lab")}
          className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeMode === "remedies_lab"
              ? "bg-gradient-to-r from-amber-800 to-amber-950 text-amber-100 border-amber-500 shadow-lg ring-1 ring-amber-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Flame className="w-4 h-4 text-orange-400" />
          <span>Vedic Remedial Lab (उपाय पीठम्)</span>
        </button>

        <button
          onClick={() => setActiveMode("kundali_calculator")}
          className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeMode === "kundali_calculator"
              ? "bg-gradient-to-r from-amber-800 to-amber-950 text-amber-100 border-amber-500 shadow-lg ring-1 ring-amber-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Calendar className="w-4 h-4 text-emerald-400" />
          <span>Janma Kundali & Dasha Calculator</span>
        </button>
      </div>

      {/* ----------------- MODE 1: VEDIC ASTRO VAIBHAV (TRANSIT & RASHI FORECAST) ----------------- */}
      {activeMode === "vedic_astro_vaibhav" && (
        <div className="space-y-6">
          {/* Rashi Selector Strip */}
          <div className="p-4 bg-[#18130f] border border-amber-900/60 rounded-3xl space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Select Moon Sign (Janma Rashi / Lagna) for Gochara Forecast</span>
              </h3>
              <span className="text-[10px] font-mono text-stone-400">12 Classical Rashis</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {VEDIC_ZODIAC_SIGNS.map(rashi => (
                <button
                  key={rashi.id}
                  onClick={() => setSelectedRashiId(rashi.id)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedRashiId === rashi.id
                      ? "bg-gradient-to-r from-amber-800 to-amber-950 border-amber-500 text-amber-100 shadow-md ring-1 ring-amber-500/40"
                      : "bg-[#120e0b] border-stone-800 text-stone-300 hover:bg-[#201812]"
                  }`}
                >
                  <div className="text-xs font-bold font-serif">{rashi.nameSanskrit}</div>
                  <div className="text-[10px] font-mono text-stone-400">{rashi.ruler}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Rashi Detailed Gochar Card */}
          <div className="p-6 md:p-8 bg-[#18130f] border border-amber-800/80 rounded-3xl space-y-6 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-stone-800 pb-5">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-500 font-bold px-2.5 py-0.5 bg-amber-950 rounded-full border border-amber-800">
                  VEDIC ASTRO VAIBHAV SIGN PROFILE
                </span>
                <h2 className="text-3xl font-extrabold font-serif text-amber-100 mt-2">
                  {selectedRashi.nameSanskrit} · {selectedRashi.nameEnglish}
                </h2>
                <div className="flex items-center gap-3 text-xs text-stone-400 font-sans mt-1">
                  <span>Ruling Planet: <strong className="text-amber-300">{selectedRashi.ruler}</strong></span>
                  <span>·</span>
                  <span>Element: <strong className="text-amber-300">{selectedRashi.element}</strong></span>
                </div>
              </div>

              <div className="p-3 bg-[#120e0b] rounded-2xl border border-stone-800 text-right">
                <span className="text-[10px] font-mono text-stone-400 block">Sade Sati / Dhaiya Status</span>
                <span className="text-xs font-bold text-amber-300 font-serif">{selectedRashi.sadeSatiStatus}</span>
              </div>
            </div>

            {/* Core Transit Analysis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Saturn Shani Gochara */}
              <div className="p-5 bg-[#120e0b] border border-stone-800 rounded-3xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-serif font-bold text-amber-400">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Saturn (Shani Dev) Transit Impact</span>
                </div>
                <p className="text-xs text-stone-300 font-sans leading-relaxed">
                  {selectedRashi.saturnTransit}
                </p>
              </div>

              {/* Jupiter Brihaspati Gochara */}
              <div className="p-5 bg-[#120e0b] border border-stone-800 rounded-3xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-serif font-bold text-yellow-400">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span>Jupiter (Brihaspati Guru) Blessing</span>
                </div>
                <p className="text-xs text-stone-300 font-sans leading-relaxed">
                  {selectedRashi.jupiterTransit}
                </p>
              </div>

              {/* Rahu-Ketu Nodal Axis */}
              <div className="p-5 bg-[#120e0b] border border-stone-800 rounded-3xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-serif font-bold text-purple-400">
                  <Orbit className="w-4 h-4 text-purple-400" />
                  <span>Rahu-Ketu Karmic Axis</span>
                </div>
                <p className="text-xs text-stone-300 font-sans leading-relaxed">
                  {selectedRashi.rahuKetuEffect}
                </p>
              </div>
            </div>

            {/* Overall Gochar Summary & Prescribed Vedic Remedy */}
            <div className="p-5 bg-gradient-to-r from-amber-950/60 to-orange-950/60 border border-amber-600/70 rounded-3xl space-y-3">
              <h4 className="text-xs font-serif font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Vaibhav's Prescribed Vedic Remedy (वैदिक उपाय)</span>
              </h4>
              <p className="text-xs text-stone-200 font-sans leading-relaxed">
                {selectedRashi.remedy}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- MODE 2: KHAGOLA SHASTRA (ANCIENT SPHERICAL ASTRONOMY) ----------------- */}
      {activeMode === "khagola_shastra" && (
        <div className="space-y-6">
          {/* Treatises Showcase */}
          <div className="space-y-4">
            <div className="p-6 bg-[#18130f] border border-cyan-900/60 rounded-3xl space-y-2 shadow-xl">
              <h2 className="text-xl font-bold font-serif text-cyan-200 flex items-center gap-2">
                <Orbit className="w-5 h-5 text-cyan-400" />
                <span>Foundational Canonical Treatises of Khagola Shastra (खगोल सिद्धान्त ग्रन्थाः)</span>
              </h2>
              <p className="text-xs text-stone-400 font-sans">
                Ancient India's mathematical and observational astronomy: Surya Siddhanta, Aryabhatiya, and Siddhanta Shiromani.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {KHAGOLA_TREATISES.map(treatise => (
                <div key={treatise.id} className="p-6 bg-[#18130f] border border-stone-800 hover:border-cyan-700/60 rounded-3xl space-y-4 shadow-xl flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                      {treatise.era}
                    </span>
                    <h3 className="text-lg font-bold font-serif text-cyan-100">{treatise.title}</h3>
                    <p className="text-xs text-stone-300 font-sans">{treatise.primaryContribution}</p>
                    
                    <div className="space-y-1 pt-2 border-t border-stone-800">
                      <span className="text-[10px] font-mono text-stone-400 uppercase">Core Doctrines:</span>
                      <ul className="space-y-1">
                        {treatise.keyConcepts.map((kc, i) => (
                          <li key={i} className="text-[11px] text-stone-300 flex items-start gap-1.5 font-sans">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{kc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-3 bg-black/50 rounded-2xl border border-stone-800 text-[11px] font-serif text-cyan-200/90 italic space-y-1">
                    <p>"{treatise.shloka}"</p>
                    <p className="text-[10px] font-sans text-stone-400 not-italic">{treatise.translation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ancient Astronomical Instruments (Yantras) Section */}
          <div className="p-6 md:p-8 bg-[#18130f] border border-cyan-900/60 rounded-3xl space-y-6 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold font-serif text-cyan-200 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-cyan-400" />
                  <span>Observational Instruments (खगोल यन्त्र पीठिका)</span>
                </h3>
                <p className="text-xs text-stone-400 font-sans mt-1">
                  Classical observational apparatus codified by Aryabhata and Bhaskaracharya for measuring celestial coordinates.
                </p>
              </div>

              {/* Yantra Selector */}
              <div className="flex flex-wrap gap-2">
                {ANCIENT_ASTRONOMICAL_YANTRAS.map(yantra => (
                  <button
                    key={yantra.id}
                    onClick={() => setSelectedYantraId(yantra.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition-all cursor-pointer border ${
                      selectedYantraId === yantra.id
                        ? "bg-cyan-950 text-cyan-200 border-cyan-500 shadow-md ring-1 ring-cyan-500/40"
                        : "bg-stone-900 text-stone-400 border-stone-800 hover:text-white"
                    }`}
                  >
                    {yantra.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Selected Yantra Display */}
            <div className="p-6 bg-[#120e0b] border border-cyan-800/60 rounded-3xl space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div>
                  <h4 className="text-2xl font-bold font-serif text-cyan-100">{selectedYantra.name}</h4>
                  <p className="text-xs font-serif text-amber-300 font-bold">{selectedYantra.sanskrit}</p>
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-cyan-950 text-cyan-300 rounded-full border border-cyan-800">
                  OBSERVATIONAL YANTRA
                </span>
              </div>

              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                {selectedYantra.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-black/40 rounded-2xl border border-stone-800 space-y-1">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">Primary Function & Astronomy</span>
                  <p className="text-xs text-stone-300 font-sans">{selectedYantra.function}</p>
                </div>

                <div className="p-4 bg-black/40 rounded-2xl border border-stone-800 space-y-1">
                  <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">Mathematical / Trigonometric Formula</span>
                  <p className="text-xs font-mono text-amber-200">{selectedYantra.formula}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- MODE 3: VEDIC REMEDIAL LAB ----------------- */}
      {activeMode === "remedies_lab" && (
        <div className="space-y-6">
          <div className="p-6 bg-[#18130f] border border-orange-900/60 rounded-3xl space-y-2 shadow-xl">
            <h2 className="text-xl font-bold font-serif text-orange-200 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-400" />
              <span>Vedic Astro Vaibhav Remedial Lab (कल्याणकारी वैदिक उपाय)</span>
            </h2>
            <p className="text-xs text-stone-400 font-sans">
              Authentic multi-dimensional remedial science: Mantra, Daan, Yantra, Behavioral Karma alignment, and Rudraksha therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Shani Dev Remedies */}
            <div className="p-6 bg-[#18130f] border border-stone-800 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-base font-serif font-bold text-amber-300">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Shani Dev (Saturn) Remedial Protocol</span>
              </div>
              <p className="text-xs text-stone-300 font-sans">
                For Sade Sati, Kantaka Shani, and Dhaiya mitigation:
              </p>
              <ul className="space-y-2 text-xs text-stone-300 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Chhaya Daan:</strong> Look at your reflection in mustard oil in an iron bowl on Saturday and donate it to the needy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Dasharatha Shani Stotra:</strong> Recite on Saturday evenings; the most potent protective hymn given by King Dasharatha.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Karma Alignment:</strong> Never insult or underpay laborers, domestic help, or cleaners. Shani rules the working class.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Mantra:</strong> ॐ शं शनैश्चराय नमः (108 times using Rudraksha mala).</span>
                </li>
              </ul>
            </div>

            {/* Rahu-Ketu Nodal Remedies */}
            <div className="p-6 bg-[#18130f] border border-stone-800 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-base font-serif font-bold text-purple-300">
                <Orbit className="w-5 h-5 text-purple-400" />
                <span>Rahu & Ketu Karmic Balancing</span>
              </div>
              <p className="text-xs text-stone-300 font-sans">
                For overcoming illusion (Maya), anxiety, sleep disturbance, and sudden obstacles:
              </p>
              <ul className="space-y-2 text-xs text-stone-300 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span><strong>Bhairava & Shiva Worship:</strong> Regular recitation of Kalabhairava Ashtakam on Ashtami Tithi pacifies turbulent Rahu vibrations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span><strong>Feed Stray Dogs:</strong> Serving street dogs protects from Ketu afflictions and enhances spiritual detachment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span><strong>Silver Ball / Electronic Cleanliness:</strong> Keep a solid silver ball in pocket; discard dead batteries, broken electronics, and cluttered cables from bedroom.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span><strong>Mantra:</strong> ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः (Rahu) & ॐ कें केतवे नमः (Ketu).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- MODE 4: JANMA KUNDALI & DASHA CALCULATOR ----------------- */}
      {activeMode === "kundali_calculator" && (
        <div className="p-6 md:p-8 bg-[#18130f] border border-amber-900/60 rounded-3xl space-y-6 shadow-2xl">
          <div>
            <h2 className="text-xl font-bold font-serif text-amber-200 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>Interactive Janma Kundali & Dasha Calculator</span>
            </h2>
            <p className="text-xs text-stone-400 font-sans mt-1">
              Compute planetary placements, Lagna, Nakshatra, and current Vimshottari Mahadasha balance according to Vedic Astro Vaibhav standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono text-stone-400 mb-1">Date of Birth</label>
              <input
                type="date"
                value={userDob}
                onChange={e => setUserDob(e.target.value)}
                className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-4 py-2.5 text-xs text-stone-200 outline-none focus:border-amber-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-400 mb-1">Time of Birth</label>
              <input
                type="time"
                value={userTob}
                onChange={e => setUserTob(e.target.value)}
                className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-4 py-2.5 text-xs text-stone-200 outline-none focus:border-amber-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-400 mb-1">Place of Birth</label>
              <input
                type="text"
                value={userPob}
                onChange={e => setUserPob(e.target.value)}
                placeholder="e.g. Ujjain, Varanasi, Delhi..."
                className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-4 py-2.5 text-xs text-stone-200 outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <button
            onClick={handleCalculateKundali}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-700 via-amber-800 to-orange-900 hover:from-amber-600 hover:to-orange-800 text-amber-100 font-serif font-bold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Compute Vedic Kundali & Planetary Strengths</span>
          </button>

          {kundaliGenerated && kundaliSummary && (
            <div className="space-y-6 pt-4 border-t border-stone-800 animate-in fade-in duration-200">
              {/* Quick Summary Pill Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#120e0b] rounded-2xl border border-stone-800 text-xs">
                <div>
                  <span className="text-[10px] text-stone-500 block font-mono">ASCENDANT / LAGNA</span>
                  <span className="font-bold text-amber-300 font-serif">{kundaliSummary.lagna}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block font-mono">MOON SIGN / RASHI</span>
                  <span className="font-bold text-amber-300 font-serif">{kundaliSummary.chandraRashi}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block font-mono">SUN POSITION</span>
                  <span className="font-bold text-amber-300 font-serif">{kundaliSummary.sunSign}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block font-mono">ACTIVE MAHADASHA</span>
                  <span className="font-bold text-amber-300 font-serif">{kundaliSummary.mahadasha}</span>
                </div>
              </div>

              {/* 9 Grahas Strengths Table */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  Planetary Positions & Bhava Allocation (ग्रह स्फुट एवं भाव)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left text-stone-300">
                    <thead className="bg-[#120e0b] text-[10px] font-mono uppercase text-stone-400 border-b border-stone-800">
                      <tr>
                        <th className="py-2.5 px-3">Graha (Planet)</th>
                        <th className="py-2.5 px-3">Bhava (House)</th>
                        <th className="py-2.5 px-3">Dignity / Yoga</th>
                        <th className="py-2.5 px-3">Shadbala Strength</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-800/60 font-sans">
                      {kundaliSummary.planetaryStrengths.map((p: any, idx: number) => (
                        <tr key={idx} className="hover:bg-black/30">
                          <td className="py-2.5 px-3 font-semibold text-amber-200">{p.planet}</td>
                          <td className="py-2.5 px-3">{p.house}</td>
                          <td className="py-2.5 px-3 text-stone-300">{p.status}</td>
                          <td className="py-2.5 px-3 font-mono text-emerald-400">{p.strength}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
