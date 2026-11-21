import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Volume2, 
  VolumeX, 
  Sparkles,
  Radio,
  Globe,
  Languages
} from "lucide-react";
import Navbar, { NavTab } from "./components/Navbar";
import ScriptureLibrary from "./components/ScriptureLibrary";
import AgenticLab from "./components/AgenticLab";
import HeritageMagazineExtractor from "./components/HeritageMagazineExtractor";
import ArtifactScanner from "./components/ArtifactScanner";
import CarbonRadiationLab from "./components/CarbonRadiationLab";
import CalligraphyStudio from "./components/CalligraphyStudio";
import SoundographyLab from "./components/SoundographyLab";
import VisualographyArtographyStudio from "./components/VisualographyArtographyStudio";
import SensorSuite from "./components/SensorSuite";
import ArchaeoAstronomy from "./components/ArchaeoAstronomy";
import PanchangCalculator from "./components/PanchangCalculator";
import EpigraphyStudio from "./components/EpigraphyStudio";
import IconographyStudio from "./components/IconographyStudio";
import PracticesTraditions from "./components/PracticesTraditions";
import PuneInstitutesIKS from "./components/PuneInstitutesIKS";
import InternationalIndologyEbooks from "./components/InternationalIndologyEbooks";
import VedicScriptureEbookLibrary from "./components/VedicScriptureEbookLibrary";
import FirebaseSpreadsheetStudio from "./components/FirebaseSpreadsheetStudio";
import HardwareConnectorLab from "./components/HardwareConnectorLab";
import ManvantaraGenealogyTree from "./components/ManvantaraGenealogyTree";
import SanatanPhilosophersWorld from "./components/SanatanPhilosophersWorld";
import PoojaVidhiStudio from "./components/PoojaVidhiStudio";
import SanskarAndDevatasStudio from "./components/SanskarAndDevatasStudio";
import PaniniStudio from "./components/PaniniStudio";
import AcharyaShastraStudio from "./components/AcharyaShastraStudio";
import ContemporaryResearchersStudio from "./components/ContemporaryResearchersStudio";
import CentralSanskritUniversityStudio from "./components/CentralSanskritUniversityStudio";
import SanskritLearningStudio from "./components/SanskritLearningStudio";
import DarshanasStudio from "./components/DarshanasStudio";
import AyurvedaLab from "./components/AyurvedaLab";
import SunaamaVedicNamingStudio from "./components/SunaamaVedicNamingStudio";
import VedicAstroKhagolStudio from "./components/VedicAstroKhagolStudio";
import VedaPathanaStudio from "./components/VedaPathanaStudio";
import AstroByVivekStudio from "./components/AstroByVivekStudio";
import PracheenNitiVagmayStudio from "./components/PracheenNitiVagmayStudio";
import NityanandaMisraLab from "./components/NityanandaMisraLab";
import KaushalendraKrishnaLab from "./components/KaushalendraKrishnaLab";
import MahavidyaRahasyaStudio from "./components/MahavidyaRahasyaStudio";
import HyperQuestStudio from "./components/HyperQuestStudio";
import SacredTempleEnergyStudio from "./components/SacredTempleEnergyStudio";
import GosvalAyurvedaStudio from "./components/GosvalAyurvedaStudio";
import SanskritLLMStudio from "./components/SanskritLLMStudio";
import KundaliniYogaStudio from "./components/KundaliniYogaStudio";
import LanguageSelectorModal from "./components/LanguageSelectorModal";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { FirebaseProvider } from "./context/FirebaseContext";

function MainAppContent() {
  // Primary core is scriptures by default
  const [activeTab, setActiveTab] = useState<NavTab>("scriptures");
  const [systemStatus, setSystemStatus] = useState<"idle" | "researching" | "scanning" | "ready">("ready");
  const { currentLanguageMeta, currentScript, transliterate, setIsModalOpen, t } = useLanguage();

  // Background Ambient Tanpura Sound
  const [isAmbiencePlaying, setIsAmbiencePlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ambienceNodesRef = useRef<{ oscs: OscillatorNode[]; gain: GainNode } | null>(null);

  const toggleAmbience = () => {
    if (isAmbiencePlaying) {
      if (ambienceNodesRef.current) {
        ambienceNodesRef.current.oscs.forEach(o => {
          try {
            o.stop();
            o.disconnect();
          } catch (_) {}
        });
      }
      setIsAmbiencePlaying(false);
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Create harmonic Tanpura chord (Sa - Pa - Sa' - Sa base frequencies: 108Hz, 162Hz, 216Hz, 432Hz)
        const freqs = [108, 162, 216, 432];
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.5);
        gainNode.connect(ctx.destination);

        const oscs = freqs.map((f, i) => {
          const osc = ctx.createOscillator();
          osc.type = i % 2 === 0 ? "sine" : "triangle";
          osc.frequency.setValueAtTime(f, ctx.currentTime);
          osc.connect(gainNode);
          osc.start();
          return osc;
        });

        ambienceNodesRef.current = { oscs, gain: gainNode };
        setIsAmbiencePlaying(true);
      } catch (err) {
        console.error("Tanpura audio error:", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (ambienceNodesRef.current) {
        ambienceNodesRef.current.oscs.forEach(o => {
          try {
            o.stop();
            o.disconnect();
          } catch (_) {}
        });
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#14110f] text-stone-100 font-sans selection:bg-amber-700 selection:text-white">
      {/* Universal Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        systemStatus={systemStatus}
      />

      {/* Global Multi-Language & Script Modal */}
      <LanguageSelectorModal />

      {/* Main View Area */}
      <main className="flex-1 w-full pb-16">
        <AnimatePresence mode="wait">
          
          {/* 1. CORE MANUSCRIPT & SCRIPTURE SANCTUARY (PRIMARY LANDING) */}
          {activeTab === "scriptures" && (
            <motion.div
              key="scriptures"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ScriptureLibrary 
                onNavigateToResearch={(tab, _prefill) => setActiveTab(tab)} 
              />
            </motion.div>
          )}

          {/* 1A. SAMPOORNA POOJA VIDHI STUDIO */}
          {activeTab === "pooja_vidhi" && (
            <motion.div
              key="pooja_vidhi"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <PoojaVidhiStudio onNavigateToTab={(t) => setActiveTab(t as NavTab)} />
            </motion.div>
          )}

          {/* 1A-2. SHODASHA SAMSKARAS & 33 KOTI DEVATAS */}
          {activeTab === "sanskar_and_devatas" && (
            <motion.div
              key="sanskar_and_devatas"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <SanskarAndDevatasStudio />
            </motion.div>
          )}

          {/* 1A-2.5. DARSHANAS PHILOSOPHY STUDIO */}
          {activeTab === "darshanas" && (
            <motion.div
              key="darshanas"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <DarshanasStudio />
            </motion.div>
          )}

          {/* 1A-2.6. AYURVEDA REMEDY LAB */}
          {activeTab === "ayurveda" && (
            <motion.div
              key="ayurveda"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <AyurvedaLab />
            </motion.div>
          )}

          {/* 1A-2.7. SUNAAMA VEDIC SANSKRIT NAMING STUDIO */}
          {activeTab === "sunaama" && (
            <motion.div
              key="sunaama"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <SunaamaVedicNamingStudio />
            </motion.div>
          )}

          {/* 1A-2.8. VEDIC ASTRO VAIBHAV & KHAGOLA SHASTRA STUDIO */}
          {activeTab === "vedic_astro_khagol" && (
            <motion.div
              key="vedic_astro_khagol"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <VedicAstroKhagolStudio />
            </motion.div>
          )}

          {/* 1A-2.9. VEDA PATHANA STUDIO (11 CHANTING METHODS & PANDIT DIXIT JI MILESTONE) */}
          {activeTab === "veda_pathana" && (
            <motion.div
              key="veda_pathana"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <VedaPathanaStudio />
            </motion.div>
          )}

          {/* 1A-2.95. ASTRO BY VIVEK: SIGNATURE ASTROLOGY & GRAPHOLOGY */}
          {activeTab === "astro_by_vivek" && (
            <motion.div
              key="astro_by_vivek"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <AstroByVivekStudio />
            </motion.div>
          )}

          {/* 1A-2.96. PRACHEEN NITI, VYAPAAR & VAGMAY SUTRAS STUDIO */}
          {activeTab === "pracheen_niti_vagmay" && (
            <motion.div
              key="pracheen_niti_vagmay"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <PracheenNitiVagmayStudio />
            </motion.div>
          )}

          {/* 1A-2.97. NITYANANDA MISRA RESEARCH LAB */}
          {activeTab === "nityananda_misra_lab" && (
            <motion.div
              key="nityananda_misra_lab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <NityanandaMisraLab />
            </motion.div>
          )}

          {/* 1A-2.98. KAUSHALENDRA KRISHNA RESEARCH LAB */}
          {activeTab === "kaushalendra_krishna_lab" && (
            <motion.div
              key="kaushalendra_krishna_lab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <KaushalendraKrishnaLab />
            </motion.div>
          )}

          {/* 1A-2.99. 10 MAHAVIDYA RAHASYA (DEEPAK VERMA) */}
          {activeTab === "mahavidya_rahasya" && (
            <motion.div
              key="mahavidya_rahasya"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <MahavidyaRahasyaStudio />
            </motion.div>
          )}

          {/* 1A-2.995. HYPER QUEST ANCIENT HIGH-TECH ENGINEERING STUDIO */}
          {activeTab === "hyperquest_studio" && (
            <motion.div
              key="hyperquest_studio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <HyperQuestStudio />
            </motion.div>
          )}

          {/* 1A-2.996. SACRED TEMPLE ENERGY GRID & 79°E MERIDIAN (TARUN BINDLISH & RUPA BHATY) */}
          {activeTab === "sacred_temple_energy" && (
            <motion.div
              key="sacred_temple_energy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <SacredTempleEnergyStudio />
            </motion.div>
          )}

          {/* 1A-2.997. SHUDDHA AYURVEDA & DRAVYAGUNA CLINICAL LAB (GOSVAL PROTOCOLS) */}
          {activeTab === "gosval_ayurveda_lab" && (
            <motion.div
              key="gosval_ayurveda_lab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <GosvalAyurvedaStudio />
            </motion.div>
          )}

          {/* 1A-2.998. PANINIAN SANSKRIT LLM & NEURAL STUDIO */}
          {activeTab === "sanskrit_llm_studio" && (
            <motion.div
              key="sanskrit_llm_studio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <SanskritLLMStudio />
            </motion.div>
          )}

          {/* 1A-2.999. KUNDALINI YOGA & SUBTLE ANATOMY COMPENDIUM */}
          {activeTab === "kundalini_yoga" && (
            <motion.div
              key="kundalini_yoga"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <KundaliniYogaStudio />
            </motion.div>
          )}

          {/* 1A-3. ALL WORKS OF SAGE PANINI (GRAMMAR, SUTRAS, AND COMPUTATIONAL AI) */}
          {activeTab === "panini_works" && (
            <motion.div
              key="panini_works"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <PaniniStudio />
            </motion.div>
          )}

          {/* 1A-4. WORKS OF BHASKARACHARYA, ARYABHATA, PATANJALI & SAGES */}
          {activeTab === "acharya_works" && (
            <motion.div
              key="acharya_works"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <AcharyaShastraStudio />
            </motion.div>
          )}

          {/* 1A-5. CONTEMPORARY SANATAN RESEARCHERS, YOUTUBERS & HISTORIANS */}
          {activeTab === "contemporary_researchers" && (
            <motion.div
              key="contemporary_researchers"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ContemporaryResearchersStudio
                onNavigateToTab={(tabId) => setActiveTab(tabId as NavTab)}
              />
            </motion.div>
          )}

          {/* 1A-6. CENTRAL SANSKRIT UNIVERSITY (sanskrit.nic.in) */}
          {activeTab === "csu_sanskrit_nic" && (
            <motion.div
              key="csu_sanskrit_nic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <CentralSanskritUniversityStudio
                onNavigateToTab={(tabId) => setActiveTab(tabId as NavTab)}
              />
            </motion.div>
          )}

          {/* 1A-7. AI SANSKRIT LEARNING SKILLS STUDIO */}
          {activeTab === "sanskrit_learning" && (
            <motion.div
              key="sanskrit_learning"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <SanskritLearningStudio />
            </motion.div>
          )}

          {/* 1B. SANATAN PHILOSOPHERS OF THE WORLD */}
          {activeTab === "sanatan_philosophers" && (
            <motion.div
              key="sanatan_philosophers"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <SanatanPhilosophersWorld />
            </motion.div>
          )}

          {/* 1C. 1ST TO 7TH MANVANTARA & GENEALOGICAL TREE */}
          {activeTab === "manvantara_tree" && (
            <motion.div
              key="manvantara_tree"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ManvantaraGenealogyTree />
            </motion.div>
          )}

          {/* 2. VEDIC & HINDU SCRIPTURES PUBLIC REPOSITORY E-BOOKS IN ALL LANGUAGES */}
          {activeTab === "vedic_ebooks" && (
            <motion.div
              key="vedic_ebooks"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <VedicScriptureEbookLibrary 
                onNavigateToTab={(tabId) => setActiveTab(tabId as NavTab)}
              />
            </motion.div>
          )}

          {/* 2. CLOUD FIRESTORE DATABASE & SPREADSHEETS STUDIO */}
          {activeTab === "database_spreadsheets" && (
            <motion.div
              key="database_spreadsheets"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <FirebaseSpreadsheetStudio />
            </motion.div>
          )}

          {/* 2B. ELECTRONIC HARDWARE & CONNECTORS COMPATIBILITY STANDARDS */}
          {activeTab === "hardware_connectors" && (
            <motion.div
              key="hardware_connectors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <HardwareConnectorLab />
            </motion.div>
          )}

          {/* 2. SACRED PHYSICS & LIVING TRADITIONS */}
          {activeTab === "traditions" && (
            <motion.div
              key="traditions"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <PracticesTraditions />
            </motion.div>
          )}

          {/* 3. INTERNATIONAL RESEARCHERS E-BOOKS & INDOLOGY MONOGRAPHS */}
          {activeTab === "international_ebooks" && (
            <motion.div
              key="international_ebooks"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <InternationalIndologyEbooks 
                onNavigateToScripture={(_query) => {
                  setActiveTab("scriptures");
                }}
                onNavigateToResearch={(tabId) => {
                  setActiveTab(tabId as NavTab);
                }}
              />
            </motion.div>
          )}

          {/* 4. PUNE IKS ACADEMIES & SYLLABI STANDARDS PORTAL */}
          {activeTab === "pune_iks_institutes" && (
            <motion.div
              key="pune_iks_institutes"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <PuneInstitutesIKS 
                onNavigateToScripture={(_query) => {
                  setActiveTab("scriptures");
                }}
              />
            </motion.div>
          )}

          {/* 4. ARCHAEO-SCIENCE RESEARCH SUITE BEHIND */}
          {activeTab === "heritage_magazine" && (
            <motion.div
              key="heritage_magazine"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-7xl mx-auto px-4 py-6"
            >
              <HeritageMagazineExtractor 
                onNavigateToLab={(tab) => setActiveTab(tab)} 
              />
            </motion.div>
          )}

          {activeTab === "agentic_lab" && (
            <motion.div
              key="agentic_lab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <AgenticLab onNavigateToMagazine={() => setActiveTab("heritage_magazine")} />
            </motion.div>
          )}

          {activeTab === "artifact_scanner" && (
            <motion.div
              key="artifact_scanner"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ArtifactScanner />
            </motion.div>
          )}

          {activeTab === "carbon_radiation" && (
            <motion.div
              key="carbon_radiation"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <CarbonRadiationLab />
            </motion.div>
          )}

          {activeTab === "calligraphy" && (
            <motion.div
              key="calligraphy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <CalligraphyStudio />
            </motion.div>
          )}

          {activeTab === "soundography" && (
            <motion.div
              key="soundography"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <SoundographyLab />
            </motion.div>
          )}

          {activeTab === "visualography_artography" && (
            <motion.div
              key="visualography_artography"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <VisualographyArtographyStudio />
            </motion.div>
          )}

          {activeTab === "sensors" && (
            <motion.div
              key="sensors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <SensorSuite />
            </motion.div>
          )}

          {activeTab === "archaeo_astronomy" && (
            <motion.div
              key="archaeo_astronomy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ArchaeoAstronomy />
            </motion.div>
          )}

          {activeTab === "panchang" && (
            <motion.div
              key="panchang"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <PanchangCalculator />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Global Footer with Tanpura Ambience, Language status, and Telemetry */}
      <footer className="w-full bg-[#0d0b0a] border-t border-[#261e18] px-4 md:px-8 py-3 flex flex-wrap items-center justify-between text-xs text-stone-400 gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleAmbience}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[11px] font-mono font-bold transition-all cursor-pointer ${
              isAmbiencePlaying
                ? "bg-amber-950 text-amber-300 border-amber-500/60 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                : "bg-stone-900 text-stone-400 border-stone-800 hover:text-white"
            }`}
          >
            {isAmbiencePlaying ? <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{isAmbiencePlaying ? "432Hz Tanpura Soundscape [Active]" : "Play 432Hz Tanpura Ambience"}</span>
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950/40 hover:bg-amber-950 text-amber-300 border border-amber-800/60 text-[11px] font-serif transition-colors"
          >
            <Globe className="w-3 h-3 text-amber-400" />
            <span>{currentLanguageMeta.flag} {currentLanguageMeta.name} ({currentScript})</span>
          </button>

          <span className="text-stone-700 hidden sm:inline">|</span>
          <span className="text-[11px] font-mono text-stone-500 hidden sm:inline">
            Granth • Indic Scripture Sanctuary & Archaeo-Science Matrix
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-serif italic text-amber-300/80">
          <span>{transliterate("ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्माऽमृतं गमय ॥")}</span>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <FirebaseProvider>
      <LanguageProvider>
        <MainAppContent />
      </LanguageProvider>
    </FirebaseProvider>
  );
}

