import React, { useState, useRef, useEffect } from "react";
import {
  Scroll,
  Sparkles, 
  Flame, 
  Compass, 
  Scan, 
  Atom, 
  PenTool, 
  Waves, 
  Palette, 
  Cpu, 
  Orbit, 
  Calendar, 
  Radio,
  ChevronDown,
  Layers,
  FlaskConical,
  BookOpen,
  Library,
  School,
  GraduationCap,
  Globe,
  Languages,
  Database,
  Plug,
  GitFork,
  Compass as CompassIcon,
  Award,
  Calculator,
  Search,
  Check,
  Video,
  Leaf,
  Volume2,
  Shield,
  Brain
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export type NavTab = 
  | "scriptures"
  | "pooja_vidhi"
  | "sanskar_and_devatas"
  | "panini_works"
  | "acharya_works"
  | "contemporary_researchers"
  | "csu_sanskrit_nic"
  | "sanskrit_learning"
  | "sanatan_philosophers"
  | "manvantara_tree"
  | "vedic_ebooks"
  | "database_spreadsheets"
  | "hardware_connectors"
  | "traditions"
  | "international_ebooks"
  | "pune_iks_institutes"
  | "agentic_lab"
  | "heritage_magazine"
  | "artifact_scanner"
  | "carbon_radiation"
  | "calligraphy"
  | "soundography"
  | "visualography_artography"
  | "sensors"
  | "archaeo_astronomy"
  | "panchang"
  | "darshanas"
  | "ayurveda"
  | "sunaama"
  | "vedic_astro_khagol"
  | "veda_pathana"
  | "astro_by_vivek"
  | "pracheen_niti_vagmay"
  | "nityananda_misra_lab"
  | "kaushalendra_krishna_lab"
  | "mahavidya_rahasya"
  | "hyperquest_studio"
  | "sacred_temple_energy"
  | "gosval_ayurveda_lab"
  | "sanskrit_llm_studio"
  | "kundalini_yoga";

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  systemStatus: "idle" | "researching" | "scanning" | "ready";
}

export default function Navbar({ activeTab, setActiveTab, systemStatus }: NavbarProps) {
  const [isTopSubjectsOpen, setIsTopSubjectsOpen] = useState(false);
  const [isResearchMenuOpen, setIsResearchMenuOpen] = useState(false);
  const [topSubjectsSearch, setTopSubjectsSearch] = useState("");
  const { currentLanguageMeta, currentScript, setIsModalOpen, t } = useLanguage();

  const topSubjectsRef = useRef<HTMLDivElement>(null);
  const researchMenuRef = useRef<HTMLDivElement>(null);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (topSubjectsRef.current && !topSubjectsRef.current.contains(e.target as Node)) {
        setIsTopSubjectsOpen(false);
      }
      if (researchMenuRef.current && !researchMenuRef.current.contains(e.target as Node)) {
        setIsResearchMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  interface TopSubjectItem {
    id: NavTab;
    label: string;
    desc: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string;
  }

  interface TopSubjectCategory {
    category: string;
    items: TopSubjectItem[];
  }

  const topSubjectCategories: TopSubjectCategory[] = [
    {
      category: "Vedic Shastras & Ritual Liturgy",
      items: [
        { id: "scriptures", label: t("nav.scriptures", "Scriptures & Pothis"), desc: "Tala Palm-Leaf scrolls, Birch-Bark Pothis & Interlinear Sanskrit", icon: Scroll, badge: "SANCTUARY" },
        { id: "pooja_vidhi", label: t("nav.pooja_vidhi", "Pooja Vidhi & Mantras"), desc: "16-Step Shodashopachara, 10 Deity Liturgies, Samagri & Sankalpa", icon: Flame, badge: "ALL VIDHI" },
        { id: "sanskar_and_devatas", label: t("nav.sanskar_and_devatas", "16 Sanskars & 33 Devatas"), desc: "16 Shodasha Samskaras, 8 Vasus, 11 Rudras, 12 Adityas & Cosmic Pantheon", icon: Sparkles, badge: "SACRAMENTS" },
        { id: "traditions", label: t("nav.traditions", "Sacred Physics & Traditions"), desc: "Yajna Agni, Vedic Acoustics, Sacred Geometry & Living Shastras", icon: Flame, badge: "PHYSICS" },
        { id: "veda_pathana", label: "Veda Pathana Studio (11 Recitation Methods)", desc: "Samhita, Pada, Krama, Jata, Ghana & Ashta Vikritis • Pandit Dixit Ji Milestone", icon: Volume2, badge: "VEDA PATHANA" },
        { id: "kundalini_yoga", label: "Kundalini Yoga & Subtle Anatomy", desc: "Chakras, Nadis, Toroidal Field, Asanas, Pranayama, Mudras & Awakening Integration", icon: Sparkles, badge: "KUNDALINI" },
      ]
    },
    {
      category: "Sages, Acharyas & Mathematical Shastras",
      items: [
        { id: "sanskrit_learning", label: "AI Sanskrit Learning Studio", desc: "Interactive Conversational Tutor, Sentence Doctor, Shloka Anvaya, Karaka Graph & Certificate", icon: GraduationCap, badge: "AI TUTOR" },
        { id: "panini_works", label: t("nav.panini_works", "Works of Sage Panini"), desc: "Ashtadhyayi, 14 Shiva Sutras, Dhatupatha, Ganapatha & AI Sandhi", icon: BookOpen, badge: "ASHTADHYAYI" },
        { id: "acharya_works", label: t("nav.acharya_works", "Works of Sages & Acharyas"), desc: "Bhaskaracharya, Aryabhata, Patanjali Yoga, Gargi, Brahmagupta & Kerala Calculus", icon: Calculator, badge: "MATHEMATICS" },
        { id: "darshanas", label: "Darshanas: 9 Schools of Philosophy", desc: "Sankhya, Yoga, Nyaya, Vaisheshika, Mimamsa, Vedanta & Heterodox Schools", icon: Layers, badge: "PHILOSOPHY" },
        { id: "sunaama", label: "Sunāma: Authentic Sanskrit Naming Studio", desc: "Sanskrit Onomastics, 27 Nakshatras, 12 Rashis, Paninian Etymology & Shlokas", icon: Sparkles, badge: "SUNAMA.IN" },
        { id: "sanatan_philosophers", label: t("nav.sanatan_philosophers", "Global Sanatan Philosophers"), desc: "Aryavarta, Gandhara, Persia/Avesta, SE Asia, Greece, China & 12 Mahajanas", icon: Award, badge: "WORLD CORPUS" },
        { id: "pracheen_niti_vagmay", label: "Prāchīna Nīti, Vyāpāra & Vāgmay Sūtras", desc: "Mandala Geopolitics, Shadgunya, Shulkadhyaksha Trade Laws, Charaka Sambhasha Debate & Krishna-Hanuman Vagkutniti", icon: Shield, badge: "NITI & STATECRAFT" },
      ]
    },
    {
      category: "Cosmology & Dynastic Trees",
      items: [
        { id: "manvantara_tree", label: t("nav.manvantara_tree", "1st-7th Manvantara & Dynastic Tree"), desc: "Complete Suryavansha, Chandravansha, Yaduvansha, Pauravas & Kalpa Math", icon: GitFork, badge: "COSMOLOGY" },
        { id: "vedic_astro_khagol", label: "Khagola & Vedic Astro Vaibhav", desc: "Spherical Astronomy (Surya Siddhanta) & Astrologer Vaibhav Gochara Radar", icon: Orbit, badge: "KHAGOLA" },
      ]
    },
    {
      category: "Digital Repositories & Academic Standards",
      items: [
        { id: "csu_sanskrit_nic", label: "Central Sanskrit University (CSU)", desc: "sanskrit.nic.in: UG/PG/B.Tech, 12 Campuses, Shabda/Dhatu Tools & 35-Vol Dictionary", icon: School, badge: "SANSKRIT.NIC.IN" },
        { id: "vedic_ebooks", label: t("nav.vedic_ebooks", "Vedic Scripture E-Books"), desc: "Internet Archive, GRETIL, BORI, DLI Public Repositories in all languages", icon: BookOpen, badge: "OPEN ACCESS" },
        { id: "international_ebooks", label: t("nav.ebooks", "Indology Monographs Corpus"), desc: "Frits Staal, Subhash Kak, Kim Plofker, Thibaut, Pingree & Filliozat", icon: Library, badge: "GLOBAL RESEARCH" },
        { id: "pune_iks_institutes", label: t("nav.pune_iks", "Pune IKS Academies & Syllabi"), desc: "BSIKS, MIT-SVS, DESPU, VU, BORI, Deccan College Standards", icon: School, badge: "STANDARDS" },
        { id: "database_spreadsheets", label: t("nav.database_spreadsheets", "Cloud DB & Spreadsheets"), desc: "Live Firestore Sync, Multi-Sheet Excel/CSV Import & Export", icon: Database, badge: "FIRESTORE" },
        { id: "hardware_connectors", label: t("nav.hardware_connectors", "Hardware & 50+ Connectors"), desc: "Web Serial, WebUSB, WebHID, IEEE/TIA/USB-IF Standards & Pinouts", icon: Plug, badge: "HARDWARE" },
      ]
    },
    {
      category: "Modern Scholars, YouTubers & Field Investigators",
      items: [
        { id: "contemporary_researchers", label: "Modern Sanatan Researchers & YouTubers", desc: "Praveen Mohan (Kailasa & Pillars), Nilesh Oak (5561 BCE AV Proof), Meenakshi Jain (Ayodhya), Ranveer TRS, Tarun Bindlish, Rupa Bhaty", icon: Video, badge: "RESEARCHERS & TRS" },
        { id: "sacred_temple_energy", label: "79°E Meridian & Temple Energy Grid", desc: "Tarun Bindlish, Rupa Bhaty & Shivoham: 79°E Longitude Line, Chidambaram 21,600 Tiles & Pancha Bhoota Acoustics", icon: Compass, badge: "TEMPLE ENERGY" },
        { id: "astro_by_vivek", label: "Astro by Vivek (Signature & Graphology)", desc: "Vivek Tripathi: Signature Astrology, Money Loop, Wristwatch Astrology & Astro-Vastu Wallet", icon: PenTool, badge: "ASTRO BY VIVEK" },
        { id: "nityananda_misra_lab", label: "Nityananda Misra Research Lab", desc: "Authentic Sanskrit Names (Sunāma), Sanskrit Misconception Buster & Stotra Critical Audit", icon: BookOpen, badge: "VIDWAT LAB" },
        { id: "kaushalendra_krishna_lab", label: "Kaushalendra Krishna Lab", desc: "Jagadguru Kaushalendra Prapannacharyaji: Shri Sampradaya, Vishishtadvaita & Shastric Vimarsha", icon: Flame, badge: "SHRI LAB" },
        { id: "mahavidya_rahasya", label: "10 Mahavidya Rahasya (Deepak Verma)", desc: "Deepak Verma: 10 Dasa Mahavidya Tantra Rahasya, Sattvic Upayas, Planetary Rulers & Sound Lab", icon: Flame, badge: "10 MAHAVIDYAS" },
        { id: "hyperquest_studio", label: "Hyper Quest (Ancient Tech & Lathe Lab)", desc: "Hyper Quest: Stone Lathe Machining, Ellora Top-Down Basalt, Floating Bricks & Hampi Acoustics", icon: Compass, badge: "HYPER QUEST" }
      ]
    }
  ];

  const allTopSubjects = topSubjectCategories.flatMap(cat => cat.items);
  const isTopSubjectActive = allTopSubjects.some(s => s.id === activeTab && s.id !== "scriptures");
  const currentTopSubject = allTopSubjects.find(s => s.id === activeTab);

  // Filtered top subjects based on search input
  const filteredTopSubjectCategories = topSubjectCategories.map(group => ({
    ...group,
    items: group.items.filter(item => 
      !topSubjectsSearch ||
      item.label.toLowerCase().includes(topSubjectsSearch.toLowerCase()) ||
      item.desc.toLowerCase().includes(topSubjectsSearch.toLowerCase()) ||
      (item.badge && item.badge.toLowerCase().includes(topSubjectsSearch.toLowerCase()))
    )
  })).filter(group => group.items.length > 0);

  const researchTabs: { id: NavTab; label: string; icon: React.ComponentType<{ className?: string }>; desc: string; badge?: string }[] = [
    { id: "kundalini_yoga", label: "Kundalini Yoga & Subtle Anatomy Compendium", icon: Sparkles, desc: "Shat-Chakra Mechanics, Ida-Pingala-Sushumna Nadis, Esoteric Correspondences, Kriyas & Integration", badge: "KUNDALINI YOGA" },
    { id: "sanskrit_llm_studio", label: "Paninian Sanskrit LLM & Neural Studio", icon: Brain, desc: "Maheswara Tokenizers, 4,000 Ashtadhyayi Rule Engines, Dhatupatha & Karaka Semantic Graph Parsers", badge: "SANSKRIT LLM" },
    { id: "gosval_ayurveda_lab", label: "Shuddha Ayurveda & Dravyaguna Clinical Lab", icon: Leaf, desc: "5-Tool Nadi & Graha Assessment, Panchakarma Detoxification, Chronic Disease Reversal Protocols", badge: "VEDIC HEALING" },
    { id: "sacred_temple_energy", label: "79°E Meridian & Sacred Temple Grid (Bindlish & Bhaty)", icon: Compass, desc: "Kedarnath to Rameshwaram 79°E Line, Chidambaram 21,600 Roof Tiles, 72,000 Nadis & Pancha Bhoota Acoustics", badge: "TEMPLE GRID" },
    { id: "hyperquest_studio", label: "Hyper Quest: Ancient High-Tech Engineering", icon: Compass, desc: "Hyper Quest: Belur Stone Lathes, Ellora Monolithic Excavation, Ramappa Floating Bricks & Hampi Acoustics", badge: "HYPER QUEST" },
    { id: "mahavidya_rahasya", label: "10 Mahavidya Rahasya (Deepak Verma Tantra)", icon: Flame, desc: "Deepak Verma: 10 Dasa Mahavidya Planetary Rulers, Beeja Mantras, Sattvic Upayas & Crisis Alignment", badge: "10 MAHAVIDYAS" },
    { id: "kaushalendra_krishna_lab", label: "Kaushalendra Krishna Lab: Shri Sampradaya", icon: Flame, desc: "Vishishtadvaita Philosophy, Ramanuja Tradition & Shastric Insights", badge: "SHRI LAB" },
    { id: "nityananda_misra_lab", label: "Nityananda Misra Research Lab", icon: BookOpen, desc: "Authentic Sanskrit Names, Stotra Corrections & Grammar Myth-Busting", badge: "SCHOLAR LAB" },
    { id: "pracheen_niti_vagmay", label: "Prāchīna Nīti, Vyāpāra & Vāgmay Sūtras", icon: Shield, desc: "Kautilya Mandala Siddhanta, Shadgunya, Shulkadhyaksha Trade, Charaka Sambhasha & Vagkutniti", badge: "NITI & STATECRAFT" },
    { id: "astro_by_vivek", label: "Astro by Vivek: Signature Astrology & Graphology", icon: PenTool, desc: "Vivek Tripathi: Money Loops, Underline Slant, Wristwatch Dial Rules & Kuber Sthan Wallet Vastu", badge: "ASTRO BY VIVEK" },
    { id: "ayurveda", label: "Ayurveda Research Lab", icon: Leaf, desc: "Authentic Home Remedies, Shlokas, Pharmacological Mechanisms & Safety Limits", badge: "AYURVEDA" },
    { id: "sunaama", label: "Sunāma: Authentic Sanskrit Naming Studio", icon: Sparkles, desc: "Sanskrit Onomastics, 27 Nakshatras, 12 Rashis, Paninian Etymology & Shlokas", badge: "SUNAMA.IN" },
    { id: "vedic_astro_khagol", label: "Khagola Shastra & Vedic Astro Vaibhav", icon: Orbit, desc: "Spherical Astronomy, Surya Siddhanta Yantras, Gochara Transits & Remedies", badge: "KHAGOLA & ASTRO" },
    { id: "veda_pathana", label: "Veda Pathana Studio (11 Chanting Methods)", icon: Volume2, desc: "Samhita, Pada, Krama, Jata & Ghana Pathas • Pandit Dixit Ji Milestone", badge: "VEDA PATHA" },
    { id: "pooja_vidhi", label: t("nav.pooja_vidhi", "All Pooja Vidhi with Mantras & Vedic Sankalpa"), icon: Flame, desc: "16-Step Shodashopachara, 10 Deity Liturgies, Samagri Checklist & 528Hz Chime", badge: "POOJA VIDHI" },
    { id: "sanskar_and_devatas", label: t("nav.sanskar_and_devatas", "All 16 Sanskars & 33 Koti Devatas Corpus"), icon: Sparkles, desc: "16 Shodasha Samskaras, 8 Vasus, 11 Rudras, 12 Adityas, Indra-Prajapati & 40 Gautama Sacraments", badge: "SACRAMENTS & DEITIES" },
    { id: "darshanas", label: "Darshanas: 9 Philosophical Schools", icon: Layers, desc: "BharatVidya Course 81110, BORI Pune Curriculum & Lecture Series", badge: "PHILOSOPHY" },
    { id: "panini_works", label: t("nav.panini_works", "All Works of Sage Panini (Grammar & Corpus)"), icon: BookOpen, desc: "Ashtadhyayi, 14 Shiva Sutras, Dhatupatha, Ganapatha, Unadipatha, Linganushasana, Shiksha, Jambavati & AI Lab", badge: "PANINIAN CORPUS" },
    { id: "acharya_works", label: t("nav.acharya_works", "Works of Bhaskaracharya, Aryabhata, Patanjali & Sages"), icon: Calculator, desc: "Siddhanta Shiromani, Lilavati, Aryabhatiya, Yoga Sutras, Mahabhashya, Gargi, Brahmagupta & Kerala Calculus Lab", badge: "MATHEMATICS & SUTRAS" },
    { id: "contemporary_researchers", label: "Contemporary Sanatan Researchers, Podcasters & Historians", icon: Video, desc: "Praveen Mohan, Nilesh Oak (5561 BCE), Meenakshi Jain, Ranveer Allahbadia (TRS), Tarun Bindlish & Rupa Bhaty", badge: "NEW SCHOLARS" },
    { id: "csu_sanskrit_nic", label: "Central Sanskrit University (sanskrit.nic.in)", icon: School, desc: "Parliament Act No. 5 of 2020: Syllabi, Computational Sanskrit Tools, 12 Campuses & Encyclopedic Dictionary", badge: "CSU PORTAL" },
    { id: "sanskrit_learning", label: "AI Sanskrit Learning Studio (संस्कृत-कौशल-शाला)", icon: GraduationCap, desc: "Interactive Conversational Tutor, Sentence Doctor, Shloka Anvaya, Karaka Graph & Certificate", badge: "AI SKILLS" },
    { id: "sanatan_philosophers", label: t("nav.sanatan_philosophers", "Sanatan Philosophers of the World (Vedic Corpus)"), icon: Award, desc: "Aryavarta, Gandhara, Persia/Avesta, SE Asia, Yavana/Greece, Mahachina & 12 Mahajanas", badge: "GLOBAL PHILOSOPHY" },
    { id: "manvantara_tree", label: t("nav.manvantara_tree", "1st to 7th Manvantara & Royal Dynastic Tree"), icon: GitFork, desc: "Full Suryavansha, Chandravansha, Yaduvansha, Pauravas & Kalpa Math", badge: "COSMIC TREE" },
    { id: "hardware_connectors", label: t("nav.hardware_connectors", "Electronic Hardware & 50+ Connectors Standards"), icon: Plug, desc: "Web Serial, WebUSB, WebHID, IEEE/TIA/USB-IF Standards & Pinouts", badge: "STANDARDS" },
    { id: "database_spreadsheets", label: t("nav.database_spreadsheets", "Cloud Firestore Database & Spreadsheets"), icon: Database, desc: "Live Firestore Sync, Multi-Sheet Excel/CSV Import & Export", badge: "FIRESTORE" },
    { id: "vedic_ebooks", label: t("nav.vedic_ebooks", "Vedic & Hindu Scriptures E-Book Public Repository"), icon: BookOpen, desc: "Internet Archive, GRETIL, BORI, DLI in all languages", badge: "OPEN ACCESS" },
    { id: "international_ebooks", label: t("nav.ebooks", "International Researchers E-Books & Monograph Corpus"), icon: Library, desc: "Frits Staal, Subhash Kak, Kim Plofker, Thibaut, Pingree & Filliozat", badge: "GLOBAL RESEARCH" },
    { id: "pune_iks_institutes", label: t("nav.pune_iks", "Pune IKS Institutions & Syllabi Standards"), icon: GraduationCap, desc: "BSIKS, MIT-SVS, DESPU, VU, BORI, Deccan College Syllabi", badge: "IKS STANDARDS" },
    { id: "heritage_magazine", label: t("nav.heritage_magazine", "Heritage India Magazine Extractor"), icon: BookOpen, desc: "Agentic Extraction of All Volumes & Reports", badge: "NEW" },
    { id: "agentic_lab", label: t("nav.agentic_lab", "Autonomous Agentic Lab"), icon: Compass, desc: "6 Autonomous AI Scholar Personas" },
    { id: "artifact_scanner", label: t("nav.artifact_scanner", "Artifact & Vision Scanner"), icon: Scan, desc: "Live Camera, DStretch & Epigraphy" },
    { id: "carbon_radiation", label: t("nav.carbon_radiation", "AMS Carbon Dating & Radiation"), icon: Atom, desc: "Tandetron C-14 & Gamma Spectrometry" },
    { id: "calligraphy", label: t("nav.calligraphy", "Ancient Calligraphy Studio"), icon: PenTool, desc: "Brahmi, Kharosthi & Birch-bark" },
    { id: "soundography", label: t("nav.soundography", "Soundography & Archaeo-Acoustics"), icon: Waves, desc: "Musical Pillars & Sanctum Acoustics" },
    { id: "visualography_artography", label: t("nav.visualography", "Visualography & Indus Glyphs"), icon: Palette, desc: "pXRF Pigments & 417 Sign Concordance" },
    { id: "sensors", label: t("nav.sensors", "Sensor Telemetry & LiDAR"), icon: Cpu, desc: "Subsurface GPR, Satellite SAR & RTI" },
    { id: "archaeo_astronomy", label: t("nav.archaeo_astronomy", "Archaeo-Astronomy & Ephemeris"), icon: Orbit, desc: "Precession of Equinoxes & Sky Charts" },
    { id: "panchang", label: t("nav.panchang", "Panchanga Calculator"), icon: Calendar, desc: "Drik Ganitha & Surya Siddhanta Five Limbs" },
  ];

  const isResearchActive = researchTabs.some(t => t.id === activeTab && !allTopSubjects.some(s => s.id === activeTab));
  const currentResearchTab = researchTabs.find(t => t.id === activeTab);

  return (
    <header className="w-full bg-[#181410] text-[#f1e9d2] border-b border-[#3a2d21] sticky top-0 z-50 shadow-2xl backdrop-blur-md">
      {/* Top Telemetry Ticker */}
      <div className="px-4 md:px-8 py-1.5 bg-[#120f0c] border-b border-[#2d2218] flex flex-wrap items-center justify-between text-[11px] font-mono text-stone-400 gap-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold tracking-wider text-amber-500">
            <Radio className="w-3.5 h-3.5 animate-pulse text-red-500" />
            <span>GRANTH SACRED SCRIPTURES & ARCHAEO-SCIENCE</span>
          </div>
          <span className="text-stone-600 hidden sm:inline">|</span>
          <span className="hidden sm:inline text-stone-400">Core Indic Manuscripts with Scientific Laboratories Behind</span>
        </div>

        <div className="flex items-center gap-4 text-[10px]">
          <div className="hidden md:flex items-center gap-1.5">
            <span className="text-stone-500">MERIDIAN:</span>
            <span className="text-amber-400 font-semibold">Ujjain 0° (Avanti 75.78° E)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-emerald-400 font-bold uppercase">
              {systemStatus === "researching" ? "AGENTS ACTIVE" : systemStatus === "scanning" ? "SENSOR SCANNING" : "SYSTEM ONLINE"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="px-4 md:px-8 py-3 flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Brand Logo - Navigates directly to Core Scriptures */}
        <div 
          onClick={() => setActiveTab("scriptures")}
          className="cursor-pointer flex items-center gap-3 group w-full lg:w-auto justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-orange-900 border border-amber-500/40 flex items-center justify-center shadow-lg shadow-orange-950/50 group-hover:scale-105 transition-transform">
              <span className="font-serif text-2xl font-black text-amber-200">ग्र</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold tracking-tight text-[#fdf6ec] font-serif">
                  Granth
                </h1>
                <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800/80">
                  Scripture Core
                </span>
              </div>
              <p className="text-[11px] text-stone-400 font-sans tracking-wide">
                Sacred Indic Manuscripts & Pothi Sanctuary • Scientific Labs Behind
              </p>
            </div>
          </div>
        </div>

        {/* Tab & Research Suite Dock */}
        <div className="w-full lg:w-auto flex flex-wrap items-center gap-2 justify-start lg:justify-end">
          
          {/* 1. Core Sanctuary: Scriptures & Pothis Home Button */}
          <button
            onClick={() => {
              setActiveTab("scriptures");
              setIsTopSubjectsOpen(false);
              setIsResearchMenuOpen(false);
            }}
            className={`relative px-3.5 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
              activeTab === "scriptures"
                ? "bg-gradient-to-r from-amber-800 via-amber-900 to-[#3e2415] text-[#fdf4e3] border-amber-500 shadow-xl shadow-amber-950/60 ring-1 ring-amber-500/40"
                : "bg-[#1f1a16] text-stone-300 hover:text-white hover:bg-[#28211b] border-stone-800"
            }`}
          >
            <Scroll className={`w-4 h-4 ${activeTab === "scriptures" ? "text-amber-300" : "text-amber-500"}`} />
            <span className="tracking-wide">{t("nav.scriptures", "Scriptures & Pothis")}</span>
            <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-extrabold ${
              activeTab === "scriptures" ? "bg-amber-500 text-black" : "bg-amber-950 text-amber-300 border border-amber-800"
            }`}>
              HOME
            </span>
          </button>

          {/* 2. Quick Access: Pooja Vidhi */}
          <button
            onClick={() => {
              setActiveTab("pooja_vidhi");
              setIsTopSubjectsOpen(false);
              setIsResearchMenuOpen(false);
            }}
            className={`hidden sm:flex px-3 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all items-center gap-1.5 border cursor-pointer ${
              activeTab === "pooja_vidhi"
                ? "bg-gradient-to-r from-amber-800 to-[#3e2415] text-[#fdf4e3] border-amber-500 shadow-lg"
                : "bg-[#1f1a16] text-stone-300 hover:text-white hover:bg-[#28211b] border-stone-800"
            }`}
          >
            <Flame className={`w-3.5 h-3.5 ${activeTab === "pooja_vidhi" ? "text-amber-300" : "text-orange-400"}`} />
            <span>Pooja Vidhi</span>
          </button>

          {/* 3. Quick Access: Works of Sages & Acharyas */}
          <button
            onClick={() => {
              setActiveTab("acharya_works");
              setIsTopSubjectsOpen(false);
              setIsResearchMenuOpen(false);
            }}
            className={`hidden md:flex px-3 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all items-center gap-1.5 border cursor-pointer ${
              activeTab === "acharya_works"
                ? "bg-gradient-to-r from-amber-800 to-[#3e2415] text-[#fdf4e3] border-amber-500 shadow-lg"
                : "bg-[#1f1a16] text-stone-300 hover:text-white hover:bg-[#28211b] border-stone-800"
            }`}
          >
            <Calculator className={`w-3.5 h-3.5 ${activeTab === "acharya_works" ? "text-amber-300" : "text-amber-400"}`} />
            <span>Sages & Acharyas</span>
          </button>

          {/* 3B. Quick Access: Modern Scholars & YouTubers */}
          <button
            onClick={() => {
              setActiveTab("contemporary_researchers");
              setIsTopSubjectsOpen(false);
              setIsResearchMenuOpen(false);
            }}
            className={`hidden lg:flex px-3 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all items-center gap-1.5 border cursor-pointer ${
              activeTab === "contemporary_researchers"
                ? "bg-gradient-to-r from-amber-800 to-[#3e2415] text-[#fdf4e3] border-amber-500 shadow-lg"
                : "bg-[#1f1a16] text-stone-300 hover:text-white hover:bg-[#28211b] border-stone-800"
            }`}
          >
            <Video className={`w-3.5 h-3.5 ${activeTab === "contemporary_researchers" ? "text-amber-300" : "text-amber-400"}`} />
            <span>Modern Scholars</span>
            <span className="text-[9px] font-mono px-1 rounded bg-amber-950 text-amber-300 border border-amber-800">
              NEW
            </span>
          </button>

          {/* 3C. Quick Access: Central Sanskrit University (CSU) */}
          <button
            onClick={() => {
              setActiveTab("csu_sanskrit_nic");
              setIsTopSubjectsOpen(false);
              setIsResearchMenuOpen(false);
            }}
            className={`hidden xl:flex px-3 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all items-center gap-1.5 border cursor-pointer ${
              activeTab === "csu_sanskrit_nic"
                ? "bg-gradient-to-r from-amber-800 to-[#3e2415] text-[#fdf4e3] border-amber-500 shadow-lg"
                : "bg-[#1f1a16] text-stone-300 hover:text-white hover:bg-[#28211b] border-stone-800"
            }`}
          >
            <School className={`w-3.5 h-3.5 ${activeTab === "csu_sanskrit_nic" ? "text-amber-300" : "text-amber-400"}`} />
            <span>CSU (sanskrit.nic.in)</span>
            <span className="text-[9px] font-mono px-1 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">
              GOVT
            </span>
          </button>

          {/* 3D. Quick Access: AI Sanskrit Learning Studio */}
          <button
            onClick={() => {
              setActiveTab("sanskrit_learning");
              setIsTopSubjectsOpen(false);
              setIsResearchMenuOpen(false);
            }}
            className={`hidden 2xl:flex px-3 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all items-center gap-1.5 border cursor-pointer ${
              activeTab === "sanskrit_learning"
                ? "bg-gradient-to-r from-amber-800 to-[#3e2415] text-[#fdf4e3] border-amber-500 shadow-lg ring-1 ring-amber-500/50"
                : "bg-[#1f1a16] text-stone-300 hover:text-white hover:bg-[#28211b] border-stone-800"
            }`}
          >
            <GraduationCap className={`w-3.5 h-3.5 ${activeTab === "sanskrit_learning" ? "text-amber-300" : "text-amber-400"}`} />
            <span>Sanskrit AI Studio</span>
            <span className="text-[9px] font-mono px-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
              AI
            </span>
          </button>

          {/* 4. TOP SUBJECTS DROP DOWN MENU */}
          <div className="relative" ref={topSubjectsRef}>
            <button
              onClick={() => {
                setIsTopSubjectsOpen(!isTopSubjectsOpen);
                setIsResearchMenuOpen(false);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer shadow-md ${
                isTopSubjectActive
                  ? "bg-gradient-to-r from-amber-800 via-amber-900 to-[#3e2415] text-[#fdf4e3] border-amber-500 ring-2 ring-amber-500/50 shadow-xl shadow-amber-950/70"
                  : isTopSubjectsOpen
                    ? "bg-[#2a211a] text-amber-200 border-amber-600 ring-1 ring-amber-500/30"
                    : "bg-[#201913] text-amber-200 hover:text-white hover:bg-[#2c221a] border-amber-800/80"
              }`}
            >
              <Layers className={`w-4 h-4 ${isTopSubjectActive ? "text-amber-300" : "text-amber-400"}`} />
              <span>
                {isTopSubjectActive && currentTopSubject
                  ? `Subject: ${currentTopSubject.label}`
                  : "Top Subjects"}
              </span>
              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-extrabold ${
                isTopSubjectActive ? "bg-amber-400 text-black font-black" : "bg-amber-950 text-amber-300 border border-amber-700/60"
              }`}>
                14 SUBJECTS
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-amber-400 transition-transform duration-200 ${isTopSubjectsOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Top Subjects Dropdown Panel */}
            {isTopSubjectsOpen && (
              <div className="absolute left-0 lg:right-0 lg:left-auto mt-2 w-80 sm:w-[460px] bg-[#14100c] border-2 border-amber-600/70 rounded-3xl p-3.5 shadow-2xl z-50 backdrop-blur-2xl ring-1 ring-amber-500/30 animate-in fade-in zoom-in-95 duration-150">
                {/* Header & Filter */}
                <div className="pb-3 mb-2 border-b border-stone-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                      <h4 className="text-xs font-serif font-black uppercase text-amber-300 tracking-wider">
                        Top Shastras & Research Subjects
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950 text-amber-400 border border-amber-800">
                      13 Canonical Areas
                    </span>
                  </div>

                  {/* Search within Subjects */}
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={topSubjectsSearch}
                      onChange={(e) => setTopSubjectsSearch(e.target.value)}
                      placeholder="Search subjects (e.g., Panini, Aryabhata, Pooja, Vedas)..."
                      className="w-full bg-black/60 border border-stone-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-stone-200 placeholder-stone-500 outline-none focus:border-amber-500 transition-all font-sans"
                    />
                    {topSubjectsSearch && (
                      <button
                        onClick={() => setTopSubjectsSearch("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-stone-400 hover:text-white"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* Categorized List of Subjects */}
                <div className="max-h-[62vh] overflow-y-auto space-y-3.5 pr-1 no-scrollbar">
                  {filteredTopSubjectCategories.map((group) => (
                    <div key={group.category} className="space-y-1.5">
                      <div className="text-[10px] font-mono uppercase font-bold text-amber-500/80 px-2 tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600/70" />
                        <span>{group.category}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {group.items.map((item) => {
                          const Icon = item.icon;
                          const isSelected = activeTab === item.id;
                          return (
                            <button
                              key={item.id}
                              onClick={() => {
                                setActiveTab(item.id);
                                setIsTopSubjectsOpen(false);
                              }}
                              className={`text-left p-2.5 rounded-2xl flex items-start gap-2.5 transition-all cursor-pointer border ${
                                isSelected
                                  ? "bg-gradient-to-r from-amber-900/90 to-amber-950 border-amber-500 text-amber-100 shadow-md ring-1 ring-amber-400/40"
                                  : "bg-[#1a1511]/70 border-stone-800/80 hover:bg-[#251d16] hover:border-amber-900/60 text-stone-300"
                              }`}
                            >
                              <div className={`p-2 rounded-xl border shrink-0 mt-0.5 ${
                                isSelected
                                  ? "bg-amber-800 text-amber-200 border-amber-500"
                                  : "bg-stone-900 text-amber-400 border-stone-800"
                              }`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-serif font-bold text-stone-100 truncate">
                                    {item.label}
                                  </span>
                                  {isSelected && (
                                    <Check className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                                  )}
                                </div>
                                <p className="text-[10px] text-stone-400 font-sans line-clamp-2 leading-tight mt-0.5">
                                  {item.desc}
                                </p>
                                {item.badge && (
                                  <span className="inline-block mt-1 text-[8px] font-mono uppercase px-1.5 py-0.2 rounded bg-amber-950 text-amber-400 border border-amber-800/50">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  {filteredTopSubjectCategories.length === 0 && (
                    <div className="py-6 text-center text-xs text-stone-400 font-sans">
                      No subjects found matching "{topSubjectsSearch}".
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 5. Research & Science Laboratories (Accessible Behind) */}
          <div className="relative" ref={researchMenuRef}>
            <button
              onClick={() => {
                setIsResearchMenuOpen(!isResearchMenuOpen);
                setIsTopSubjectsOpen(false);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${
                isResearchActive
                  ? "bg-cyan-950 text-cyan-200 border-cyan-500 shadow-lg shadow-cyan-950/50"
                  : "bg-[#1b1714] text-stone-300 hover:text-white hover:bg-[#251e19] border-stone-800"
              }`}
            >
              <FlaskConical className={`w-4 h-4 ${isResearchActive ? "text-cyan-400" : "text-stone-400"}`} />
              <span>
                {isResearchActive && currentResearchTab 
                  ? `Lab: ${currentResearchTab.label}` 
                  : "Research & Science Suite"}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isResearchMenuOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Research Dropdown / Sub-dock */}
            {isResearchMenuOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-[#16120e] border-2 border-amber-900/60 rounded-3xl p-3 shadow-2xl z-50 space-y-1.5 backdrop-blur-xl">
                <div className="px-3 py-1.5 border-b border-stone-800 flex justify-between items-center text-[10px] font-mono uppercase text-amber-400 font-bold">
                  <span>Archaeo-Science Laboratories Behind</span>
                  <span className="text-stone-500">9 Modules</span>
                </div>

                <div className="max-h-[65vh] overflow-y-auto space-y-1 pr-1">
                  {researchTabs.map(rt => {
                    const Icon = rt.icon;
                    const isSelected = activeTab === rt.id;
                    return (
                      <button
                        key={rt.id}
                        onClick={() => {
                          setActiveTab(rt.id);
                          setIsResearchMenuOpen(false);
                        }}
                        className={`w-full text-left p-2.5 rounded-2xl flex items-center gap-3 transition-all cursor-pointer border ${
                          isSelected
                            ? "bg-amber-950/80 border-amber-500/80 text-amber-100 shadow"
                            : "bg-stone-950/50 border-transparent hover:bg-stone-900 hover:border-stone-800 text-stone-300"
                        }`}
                      >
                        <div className={`p-2 rounded-xl border ${
                          isSelected ? "bg-amber-900 text-amber-200 border-amber-600" : "bg-stone-900 text-stone-400 border-stone-800"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-serif font-bold text-stone-200 truncate">
                            {rt.label}
                          </div>
                          <div className="text-[10px] font-sans text-stone-400 truncate">
                            {rt.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Language & Indic Script Switcher */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#2a1c12] to-[#1c120a] hover:from-[#352317] hover:to-[#251810] text-amber-200 border border-amber-600/70 text-xs font-serif font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer group ring-1 ring-amber-500/30 hover:ring-amber-400"
            title="Change Platform Language and Indic Script Transliteration"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-sm">{currentLanguageMeta.flag}</span>
              <Globe className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-45 transition-transform" />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[11px] font-bold text-amber-100 flex items-center gap-1">
                <span>{currentLanguageMeta.name}</span>
                <span className="text-[9px] px-1 py-0.2 rounded bg-amber-950/80 text-amber-300 font-mono">
                  {currentLanguageMeta.code.toUpperCase()}
                </span>
              </span>
              <span className="text-[9px] text-amber-400/70 font-sans mt-0.5">
                {currentScript}
              </span>
            </div>
            <ChevronDown className="w-3 h-3 text-amber-400/80 ml-0.5" />
          </button>

          {/* Quick Direct Buttons for Direct Access */}
          <div className="hidden xl:flex items-center gap-1">
            <button
              onClick={() => { setActiveTab("agentic_lab"); setIsResearchMenuOpen(false); }}
              className={`p-2 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                activeTab === "agentic_lab" ? "bg-amber-900 text-amber-200 border-amber-500" : "bg-[#1b1714] text-stone-400 border-stone-800 hover:text-white"
              }`}
              title="Autonomous Agentic Lab"
            >
              <Compass className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => { setActiveTab("artifact_scanner"); setIsResearchMenuOpen(false); }}
              className={`p-2 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                activeTab === "artifact_scanner" ? "bg-amber-900 text-amber-200 border-amber-500" : "bg-[#1b1714] text-stone-400 border-stone-800 hover:text-white"
              }`}
              title="Artifact Vision Scanner"
            >
              <Scan className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => { setActiveTab("carbon_radiation"); setIsResearchMenuOpen(false); }}
              className={`p-2 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                activeTab === "carbon_radiation" ? "bg-amber-900 text-amber-200 border-amber-500" : "bg-[#1b1714] text-stone-400 border-stone-800 hover:text-white"
              }`}
              title="AMS Carbon Dating & Radiation"
            >
              <Atom className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => { setActiveTab("soundography"); setIsResearchMenuOpen(false); }}
              className={`p-2 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                activeTab === "soundography" ? "bg-amber-900 text-amber-200 border-amber-500" : "bg-[#1b1714] text-stone-400 border-stone-800 hover:text-white"
              }`}
              title="Archaeo-Acoustic Lithophones"
            >
              <Waves className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => { setActiveTab("archaeo_astronomy"); setIsResearchMenuOpen(false); }}
              className={`p-2 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                activeTab === "archaeo_astronomy" ? "bg-amber-900 text-amber-200 border-amber-500" : "bg-[#1b1714] text-stone-400 border-stone-800 hover:text-white"
              }`}
              title="Archaeo-Astronomy & Ephemeris"
            >
              <Orbit className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
