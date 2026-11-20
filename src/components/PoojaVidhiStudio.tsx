import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Flame,
  Volume2,
  VolumeX,
  Bell,
  Sparkles,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  Search,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Share2,
  Printer,
  Compass,
  Sliders,
  Feather,
  Info,
  Calendar,
  Sun,
  Shield,
  Layers
} from "lucide-react";
import { SHODASHOPACHARA_STEPS } from "../data/poojaShodashopachara";
import { DEITY_POOJA_VIDHIS } from "../data/poojaDeityCorpus";
import { POOJA_SAMAGRI_CATALOG, SACRED_PUJA_MUDRAS, UNIVERSAL_SHANTI_PATHA } from "../data/poojaSamagriAndMudras";
import { generateVedicSankalpaText, sacredAudio } from "../utils/sankalpaGenerator";
import { SankalpaParams, PoojaCategory } from "../types/poojaVidhiTypes";
import { useLanguage } from "../context/LanguageContext";

interface PoojaVidhiStudioProps {
  onNavigateToTab?: (tab: string) => void;
}

export default function PoojaVidhiStudio({ onNavigateToTab }: PoojaVidhiStudioProps = {}) {
  const { transliterate, currentScript } = useLanguage();

  // Mode Selection
  const [activeMode, setActiveMode] = useState<
    "guided_shodasha" | "deity_vidhi" | "sankalpa_builder" | "samagri_list" | "mudras_guide" | "shanti_patha"
  >("guided_shodasha");

  // Guided Shodashopachara Step State
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Selected Deity Vidhi
  const [selectedDeityId, setSelectedDeityId] = useState<PoojaCategory>("ganesha");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Sankalpa Parameters State
  const [sankalpaParams, setSankalpaParams] = useState<SankalpaParams>({
    kaliyugaYear: 5126,
    vikramSamvat: 2081,
    ayana: "Uttarayana",
    ritu: "Vasanta",
    masa: "Chaitra",
    paksha: "Shukla",
    tithi: "Pratipada",
    vasara: "Ravivara",
    nakshatra: "Ashwini",
    gotra: "Kashyapa",
    sadhakaName: "Sadhaka Sharma",
    placeName: "Bharatavarshe",
    deityTarget: "Ganesha / Shiva / Vishnu / Devi",
    pujaPurpose: "Sarva Shanti, Arogya & Adhyatmika Kalyana"
  });

  // Samagri Checklist State
  const [checkedSamagri, setCheckedSamagri] = useState<Record<string, boolean>>({});
  const [samagriCategoryFilter, setSamagriCategoryFilter] = useState<string>("all");

  const currentStep = SHODASHOPACHARA_STEPS[currentStepIndex];
  const selectedDeity = useMemo(
    () => DEITY_POOJA_VIDHIS.find((d) => d.id === selectedDeityId) || DEITY_POOJA_VIDHIS[0],
    [selectedDeityId]
  );

  const generatedSankalpa = useMemo(
    () => generateVedicSankalpaText(sankalpaParams),
    [sankalpaParams]
  );

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleStepCompleted = (stepNum: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepNum]: !prev[stepNum]
    }));
  };

  const handlePlayMantraSpeech = (text: string) => {
    if (isPlayingAudio) {
      sacredAudio.stopSpeech();
      setIsPlayingAudio(false);
    } else {
      sacredAudio.speakMantra(text);
      setIsPlayingAudio(true);
    }
  };

  const triggerSound = (type?: "bell" | "shankha" | "om") => {
    if (type === "shankha") sacredAudio.playShankha();
    else if (type === "om") sacredAudio.playOmDrone();
    else sacredAudio.playTempleBell();
  };

  // Filtered samagri
  const filteredSamagri = useMemo(() => {
    return POOJA_SAMAGRI_CATALOG.filter((item) => {
      const matchesCat = samagriCategoryFilter === "all" || item.category === samagriCategoryFilter;
      const matchesQuery =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sanskritName.includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [samagriCategoryFilter, searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8 font-sans text-stone-900">
      {/* 1. TOP CEREMONIAL BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#2a1307] via-[#3d1a0b] to-[#1a0c06] text-stone-100 p-6 md:p-8 rounded-3xl border border-amber-500/30 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono">
              <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>वैदिक षोडशोपचार एवं आगमोक्त मन्त्र मण्डल • ALL POOJA VIDHIS</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#fff2e2]">
              {transliterate("सम्पूर्ण पूजा विधि एवं मन्त्र मण्डल")}
            </h1>
            <p className="text-sm text-stone-300 leading-relaxed">
              Authentic Vedic & Agamic rituals: Canonical 16-step Shodashopachara, deity-specific liturgies (Ganesha, Shiva Rudrabhisheka, Mahalakshmi, Vishnu, Durga, Hanuman, Surya, Krishna, Navagraha, Agnihotra), dynamic Desha-Kala Sankalpa generator, and sacred acoustic synthesis.
            </p>
            {onNavigateToTab && (
              <div className="pt-2">
                <button
                  onClick={() => onNavigateToTab("sanskar_and_devatas")}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-stone-950 font-bold text-xs tracking-wide shadow-lg shadow-amber-950/40 transition-all active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5 text-stone-950" />
                  <span>Explore 16 Sanskars & 33 Koti Devatas Corpus →</span>
                </button>
              </div>
            )}
          </div>

          {/* Quick Ceremonial Sound Controls */}
          <div className="bg-black/50 border border-amber-500/30 p-4 rounded-2xl space-y-2 w-full sm:w-auto flex-shrink-0">
            <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center justify-between">
              <span>Sacred Sound Chimes</span>
              <Sparkles className="w-3 h-3 text-amber-400" />
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-2">
              <button
                onClick={() => sacredAudio.playTempleBell()}
                title="528 Hz Bronze Temple Bell with Harmonic Decay"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-amber-900/60 hover:bg-amber-800 border border-amber-500/40 text-amber-200 text-xs font-serif font-bold transition-all shadow-md active:scale-95"
              >
                <Bell className="w-3.5 h-3.5 text-amber-400" />
                <span>घण्टा (528Hz)</span>
              </button>
              <button
                onClick={() => sacredAudio.playShankha()}
                title="Sacred Conch Shell Acoustic Sweep"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-orange-900/60 hover:bg-orange-800 border border-orange-500/40 text-orange-200 text-xs font-serif font-bold transition-all shadow-md active:scale-95"
              >
                <Volume2 className="w-3.5 h-3.5 text-orange-400" />
                <span>शङ्ख (Conch)</span>
              </button>
              <button
                onClick={() => sacredAudio.playOmDrone()}
                title="108 Hz Meditative Om Drone"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-red-950/80 hover:bg-red-900 border border-red-500/40 text-red-200 text-xs font-serif font-bold transition-all shadow-md active:scale-95"
              >
                <span className="font-bold text-amber-400">ॐ</span>
                <span>नाद (108Hz)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MODE NAVIGATION TABS */}
      <div className="flex flex-wrap gap-2 border-b border-amber-200 pb-3">
        {[
          {
            id: "guided_shodasha",
            label: "Guided Shodashopachara (षोडशोपचार)",
            icon: Flame,
            badge: "CANONICAL 16"
          },
          {
            id: "deity_vidhi",
            label: "Deity-Specific Pooja Vidhis (देव-देवी विधि)",
            icon: Sparkles,
            badge: "10 DEITIES"
          },
          {
            id: "sankalpa_builder",
            label: "Vedic Sankalpa Generator (सङ्कल्प)",
            icon: Compass,
            badge: "DYNAMIC"
          },
          {
            id: "samagri_list",
            label: "Pooja Samagri Checklist (सामग्री सूची)",
            icon: CheckCircle2,
            badge: "CHECKLIST"
          },
          {
            id: "mudras_guide",
            label: "Sacred Mudras & Asanas (मुद्रा विज्ञान)",
            icon: Layers,
            badge: "ESOTERIC"
          },
          {
            id: "shanti_patha",
            label: "Universal Shanti Patha (शान्ति पाठ)",
            icon: Sun,
            badge: "VEDIC"
          }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeMode === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveMode(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold font-serif transition-all border ${
                isActive
                  ? "bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white border-amber-600 shadow-md scale-[1.02]"
                  : "bg-[#fcf7ee] text-stone-700 border-amber-200 hover:bg-amber-50 hover:border-amber-300"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-amber-700"}`} />
              <span>{tab.label}</span>
              {tab.badge && (
                <span
                  className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-amber-950/80 text-amber-200" : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 3. MODE 1: GUIDED SHODASHOPACHARA POOJA RUNNER (STEP-BY-STEP)             */}
      {/* ========================================================================= */}
      {activeMode === "guided_shodasha" && (
        <div className="space-y-6">
          {/* Progress Header & Step Navigator */}
          <div className="bg-[#fcf8f2] border border-amber-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    Step {currentStepIndex + 1} of {SHODASHOPACHARA_STEPS.length}
                  </span>
                  <span className="text-xs font-mono uppercase text-stone-500">
                    {currentStep.category === "purvanga"
                      ? "पूर्वाङ्ग (Preliminary Rites)"
                      : currentStep.category === "pradhana"
                      ? "प्रधानावधान (16 Core Upacharas)"
                      : "उत्तराङ्ग (Concluding Rites)"}
                  </span>
                </div>
                <h2 className="text-2xl font-bold font-serif text-stone-900 mt-1">
                  {transliterate(currentStep.sanskritName)} — {currentStep.stepName}
                </h2>
              </div>

              {/* Action Buttons: Prev/Next & Sound Trigger */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => triggerSound(currentStep.sacredSoundPrompt)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold font-serif transition-all"
                  title="Ring bell or blow conch for this step"
                >
                  <Bell className="w-3.5 h-3.5 text-amber-700" />
                  <span>Sound Chime</span>
                </button>

                <button
                  onClick={() => toggleStepCompleted(currentStep.stepNumber)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold font-serif transition-all border ${
                    completedSteps[currentStep.stepNumber]
                      ? "bg-emerald-600 text-white border-emerald-700 shadow-sm"
                      : "bg-white text-stone-700 border-stone-300 hover:border-amber-400"
                  }`}
                >
                  {completedSteps[currentStep.stepNumber] ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>Completed</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4 text-stone-400" />
                      <span>Mark Done</span>
                    </>
                  )}
                </button>

                <button
                  disabled={currentStepIndex === 0}
                  onClick={() => setCurrentStepIndex((p) => Math.max(0, p - 1))}
                  className="p-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4 text-stone-700" />
                </button>

                <button
                  disabled={currentStepIndex === SHODASHOPACHARA_STEPS.length - 1}
                  onClick={() =>
                    setCurrentStepIndex((p) => Math.min(SHODASHOPACHARA_STEPS.length - 1, p + 1))
                  }
                  className="p-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4 text-stone-700" />
                </button>
              </div>
            </div>

            {/* Step Pills Bar */}
            <div className="flex gap-1.5 overflow-x-auto pb-2 pt-1 scrollbar-thin">
              {SHODASHOPACHARA_STEPS.map((step, idx) => {
                const isCurrent = idx === currentStepIndex;
                const isDone = completedSteps[step.stepNumber];
                return (
                  <button
                    key={step.stepNumber}
                    onClick={() => setCurrentStepIndex(idx)}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 border ${
                      isCurrent
                        ? "bg-amber-800 text-white border-amber-900 font-bold shadow-sm"
                        : isDone
                        ? "bg-emerald-50 text-emerald-800 border-emerald-300 font-medium"
                        : "bg-white text-stone-600 border-stone-200 hover:bg-amber-50"
                    }`}
                  >
                    {isDone ? (
                      <Check className="w-3 h-3 text-emerald-600" />
                    ) : (
                      <span>{step.stepNumber}.</span>
                    )}
                    <span className="truncate max-w-[120px]">{step.stepName.split(":")[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step Detail Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 Cols: Kriya Instructions & Mantras */}
            <div className="lg:col-span-2 space-y-6">
              {/* Kriya Box (Ritual Action Instruction) */}
              <div className="bg-amber-50/80 border-2 border-amber-300/80 rounded-3xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-amber-900">
                  <Flame className="w-4 h-4 text-amber-600" />
                  <span>Ritual Gesture & Action (क्रिया निर्देश)</span>
                </div>
                <p className="text-sm font-sans font-medium text-stone-800 leading-relaxed">
                  {currentStep.kriyaInstruction}
                </p>
              </div>

              {/* Mantras Accordion / Card */}
              {currentStep.mantras.map((m) => (
                <div
                  key={m.id}
                  className="bg-white border border-amber-200 rounded-3xl p-6 shadow-md space-y-4"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-stone-100 pb-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        {m.sourceText}
                      </span>
                      <h3 className="text-lg font-bold font-serif text-stone-900 mt-1">
                        {m.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handlePlayMantraSpeech(m.sanskrit)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all border ${
                          isPlayingAudio
                            ? "bg-red-100 text-red-800 border-red-300"
                            : "bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200"
                        }`}
                        title="Recite Sanskrit mantra aloud using Speech Synthesis"
                      >
                        {isPlayingAudio ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5 text-red-600" />
                            <span>Stop Recital</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                            <span>Chant Mantra</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => copyToClipboard(m.sanskrit, m.id)}
                        className="p-1.5 rounded-xl text-stone-600 hover:bg-amber-50 hover:text-amber-800 border border-stone-200 transition-all"
                        title="Copy Sanskrit text to clipboard"
                      >
                        {copiedId === m.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Sacred Devanagari Script Box */}
                  <div className="bg-[#fffcf7] border border-amber-200/80 p-5 rounded-2xl">
                    <div className="text-xs font-mono uppercase text-amber-900/60 mb-2 font-bold flex items-center justify-between">
                      <span>Devanagari Sanskrit (सस्वर मन्त्र)</span>
                      <span className="text-[10px] font-mono text-stone-400">
                        Script: {currentScript}
                      </span>
                    </div>
                    <pre className="text-base sm:text-lg font-serif font-bold text-stone-950 whitespace-pre-wrap leading-relaxed tracking-wide selection:bg-amber-200">
                      {transliterate(m.sanskrit)}
                    </pre>
                  </div>

                  {/* Transliteration (IAST) */}
                  <div className="bg-stone-50 border border-stone-200/80 p-4 rounded-2xl">
                    <div className="text-[10px] font-mono uppercase text-stone-500 mb-1 font-bold">
                      IAST Romanized Transliteration
                    </div>
                    <p className="text-xs sm:text-sm font-mono text-stone-800 whitespace-pre-wrap leading-relaxed italic">
                      {m.transliteration}
                    </p>
                  </div>

                  {/* Meaning */}
                  <div className="space-y-1">
                    <div className="text-xs font-mono uppercase text-amber-900 font-bold">
                      English Meaning & Philosophical Context:
                    </div>
                    <p className="text-sm font-sans text-stone-700 leading-relaxed">
                      {m.meaning}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Col: Items Needed, Mudra & Navigation Checklist */}
            <div className="space-y-6">
              {/* Items Needed for Current Step */}
              <div className="bg-white border border-amber-200 rounded-3xl p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-stone-800 border-b border-stone-100 pb-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Items Required for this Step (सामग्री)</span>
                </div>
                <ul className="space-y-2">
                  {currentStep.itemsNeeded.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs font-sans text-stone-700 bg-[#fdfaf4] p-2 rounded-xl border border-amber-100"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shodashopachara Full 16 Summary Checklist */}
              <div className="bg-[#fcf8f2] border border-amber-200 rounded-3xl p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                  <span className="text-xs font-mono uppercase font-bold text-amber-900">
                    Full Shodasha Sequence
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">
                    {Object.values(completedSteps).filter(Boolean).length}/
                    {SHODASHOPACHARA_STEPS.length} Completed
                  </span>
                </div>
                <div className="space-y-1 max-h-72 overflow-y-auto pr-1 scrollbar-thin">
                  {SHODASHOPACHARA_STEPS.map((s, idx) => (
                    <div
                      key={s.stepNumber}
                      onClick={() => setCurrentStepIndex(idx)}
                      className={`flex items-center justify-between p-2 rounded-xl text-xs cursor-pointer transition-all ${
                        idx === currentStepIndex
                          ? "bg-amber-200 text-amber-950 font-bold border border-amber-400"
                          : completedSteps[s.stepNumber]
                          ? "bg-emerald-50 text-emerald-900 line-through opacity-75"
                          : "hover:bg-white text-stone-700"
                      }`}
                    >
                      <span className="truncate pr-2">
                        {s.stepNumber}. {s.sanskritName}
                      </span>
                      {completedSteps[s.stepNumber] ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <Circle className="w-3 h-3 text-stone-300 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Fast Jump to Next Step Banner */}
              <div className="bg-gradient-to-br from-amber-700 to-amber-900 text-white p-5 rounded-3xl shadow-lg space-y-3">
                <div className="text-xs font-mono uppercase tracking-widest text-amber-300">
                  Ready for Next Offering?
                </div>
                <p className="text-xs text-amber-100">
                  Complete the offering gestures before chanting the next sacred Richa.
                </p>
                {currentStepIndex < SHODASHOPACHARA_STEPS.length - 1 ? (
                  <button
                    onClick={() => {
                      setCompletedSteps((prev) => ({
                        ...prev,
                        [currentStep.stepNumber]: true
                      }));
                      setCurrentStepIndex((prev) => prev + 1);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-serif font-bold text-xs shadow-md transition-all active:scale-95"
                  >
                    <span>Mark Complete & Next Step</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="text-center font-serif font-bold text-amber-200 text-xs py-2">
                    ॐ पूर्णमदः पूर्णमिदम् — Puja Fully Completed!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. MODE 2: DEITY-SPECIFIC POOJA VIDHIS                                    */}
      {/* ========================================================================= */}
      {activeMode === "deity_vidhi" && (
        <div className="space-y-6">
          {/* Deity Selector Carousel */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {DEITY_POOJA_VIDHIS.map((d) => {
              const isSel = d.id === selectedDeityId;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDeityId(d.id)}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                    isSel
                      ? "bg-gradient-to-br from-amber-800 to-amber-950 text-white border-amber-500 shadow-lg scale-[1.02]"
                      : "bg-[#fcf8f2] text-stone-800 border-amber-200 hover:bg-white hover:border-amber-400 shadow-sm"
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold mb-1">
                    {d.deity.split("/")[0]}
                  </div>
                  <div className="text-sm font-bold font-serif line-clamp-2">
                    {transliterate(d.sanskritName)}
                  </div>
                  <div className="text-[11px] font-sans mt-2 opacity-80">
                    {d.title.split("&")[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Deity Full Vidhi Dossier */}
          <div className="bg-white border-2 border-amber-300 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-amber-200 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{selectedDeity.scripturalAuthority}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 mt-2">
                  {transliterate(selectedDeity.sanskritName)} — {selectedDeity.name}
                </h2>
                <div className="text-xs font-mono text-stone-600 mt-1">
                  Ideal Muhurta: {selectedDeity.idealTime}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => sacredAudio.playTempleBell()}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold font-serif"
                >
                  <Bell className="w-3.5 h-3.5 text-amber-700" />
                  <span>Ring Bell</span>
                </button>
                <button
                  onClick={() => sacredAudio.playShankha()}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 text-xs font-bold font-serif"
                >
                  <Volume2 className="w-3.5 h-3.5 text-orange-700" />
                  <span>Blow Conch</span>
                </button>
              </div>
            </div>

            {/* Deity Special Samagri Pill Grid */}
            <div className="bg-amber-50/70 border border-amber-200 p-5 rounded-2xl space-y-3">
              <div className="text-xs font-mono uppercase font-bold text-amber-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>Essential Samagri for {selectedDeity.deity}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {selectedDeity.samagriList.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3 rounded-xl border border-amber-100 shadow-xs space-y-1"
                  >
                    <div className="flex items-center justify-between text-xs font-bold font-serif text-stone-900">
                      <span>{item.item}</span>
                      <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                        {transliterate(item.sanskrit)}
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-stone-500">{item.quantity}</div>
                    <p className="text-[11px] text-stone-600 font-sans italic">{item.purpose}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Liturgical Steps & Specific Mantras */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold font-serif text-stone-900 border-l-4 border-amber-600 pl-3">
                Liturgical Steps & Canonical Mantras
              </h3>

              {selectedDeity.steps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-[#fffdfa] border border-amber-200 rounded-2xl p-5 shadow-sm space-y-4"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-stone-100 pb-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded-full">
                        Step {step.stepNumber}: {step.category.toUpperCase()}
                      </span>
                      <h4 className="text-base font-bold font-serif text-stone-900 mt-1">
                        {transliterate(step.sanskritName)} — {step.stepName}
                      </h4>
                    </div>
                  </div>

                  <div className="text-xs font-sans font-medium text-stone-800 bg-amber-50/60 p-3 rounded-xl border border-amber-100">
                    <span className="font-bold text-amber-900">Kriya: </span>
                    {step.kriyaInstruction}
                  </div>

                  {step.mantras.map((m) => (
                    <div key={m.id} className="space-y-3">
                      <div className="bg-[#fcf8f0] border border-amber-200 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-mono uppercase text-amber-800 font-bold">
                            {m.title}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handlePlayMantraSpeech(m.sanskrit)}
                              className="text-xs text-amber-800 hover:text-amber-950 flex items-center gap-1 font-mono font-bold"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                              <span>Recite</span>
                            </button>
                            <button
                              onClick={() => copyToClipboard(m.sanskrit, m.id)}
                              className="text-xs text-stone-600 hover:text-stone-900"
                            >
                              {copiedId === m.id ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </div>
                        <pre className="text-base font-serif font-bold text-stone-950 whitespace-pre-wrap leading-relaxed">
                          {transliterate(m.sanskrit)}
                        </pre>
                      </div>

                      <div className="text-xs font-sans text-stone-700 leading-relaxed pl-2 border-l-2 border-amber-400">
                        <span className="font-bold text-amber-900">Translation: </span>
                        {m.meaning}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Special Stotras Section (if any) */}
            {selectedDeity.specialStotras && selectedDeity.specialStotras.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-amber-200">
                <h3 className="text-lg font-bold font-serif text-stone-900">
                  Special Canonical Stotras & Suktams
                </h3>
                {selectedDeity.specialStotras.map((stotra, idx) => (
                  <div
                    key={idx}
                    className="bg-[#fdfbf7] border border-amber-200 rounded-2xl p-5 space-y-3 shadow-xs"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold font-serif text-amber-900">
                        {stotra.title}
                      </span>
                      <button
                        onClick={() => copyToClipboard(stotra.sanskrit, `stotra-${idx}`)}
                        className="p-1 rounded-lg border border-stone-200 hover:bg-stone-100"
                      >
                        {copiedId === `stotra-${idx}` ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-stone-600" />
                        )}
                      </button>
                    </div>
                    <pre className="text-sm font-serif font-bold text-stone-900 whitespace-pre-wrap bg-white p-4 rounded-xl border border-amber-100 leading-relaxed">
                      {transliterate(stotra.sanskrit)}
                    </pre>
                    <p className="text-xs font-sans text-stone-700 italic">{stotra.meaning}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Aarti Section (if any) */}
            {selectedDeity.aartiText && (
              <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 border-2 border-amber-400/80 rounded-2xl p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-600" />
                    <span className="text-base font-bold font-serif text-stone-900">
                      {selectedDeity.aartiText.title}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(selectedDeity.aartiText!.sanskrit, "aarti-copy")
                    }
                    className="text-xs font-mono font-bold text-amber-900 flex items-center gap-1 bg-white/80 px-2 py-1 rounded-lg border border-amber-300"
                  >
                    {copiedId === "aarti-copy" ? (
                      <Check className="w-3 h-3 text-emerald-600" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                    <span>Copy Aarti</span>
                  </button>
                </div>
                <pre className="text-sm font-serif font-semibold text-stone-900 whitespace-pre-wrap leading-relaxed">
                  {transliterate(selectedDeity.aartiText.sanskrit)}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. MODE 3: VEDIC SANKALPA GENERATOR                                       */}
      {/* ========================================================================= */}
      {activeMode === "sankalpa_builder" && (
        <div className="bg-white border-2 border-amber-300 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
          <div className="border-b border-amber-200 pb-4">
            <span className="text-xs font-mono uppercase font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
              DESHA-KALA MAHASANKALPA ENGINE
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 mt-2">
              Vedic Desha-Kala Mahasankalpa Generator (सङ्कल्प निर्माता)
            </h2>
            <p className="text-xs font-sans text-stone-600 mt-1 max-w-2xl">
              Customize your astronomical coordinates, samvatsara, tithi, gotra, and spiritual purpose. The engine compiles the exact canonical Sanskrit Sankalpa ready for recitation with Kusha grass and water.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Col: Parameter Customization Form */}
            <div className="space-y-4 bg-[#fcf8f0] p-5 rounded-2xl border border-amber-200">
              <h3 className="text-sm font-bold font-serif text-stone-900 border-b border-amber-200 pb-2 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-amber-700" />
                <span>Astronomical & Personal Coordinates</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Sadhaka Name (यजमान नाम):
                  </label>
                  <input
                    type="text"
                    value={sankalpaParams.sadhakaName}
                    onChange={(e) =>
                      setSankalpaParams({ ...sankalpaParams, sadhakaName: e.target.value })
                    }
                    className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs"
                    placeholder="Your Name / Devotee Name"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Gotra (गोत्र - e.g. Kashyapa, Bharadvaja, Vasishtha):
                  </label>
                  <input
                    type="text"
                    value={sankalpaParams.gotra}
                    onChange={(e) =>
                      setSankalpaParams({ ...sankalpaParams, gotra: e.target.value })
                    }
                    className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs"
                    placeholder="Gotra"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Vikram Samvat:</label>
                    <input
                      type="number"
                      value={sankalpaParams.vikramSamvat}
                      onChange={(e) =>
                        setSankalpaParams({
                          ...sankalpaParams,
                          vikramSamvat: parseInt(e.target.value) || 2081
                        })
                      }
                      className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Ayana:</label>
                    <select
                      value={sankalpaParams.ayana}
                      onChange={(e) =>
                        setSankalpaParams({
                          ...sankalpaParams,
                          ayana: e.target.value as any
                        })
                      }
                      className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs"
                    >
                      <option value="Uttarayana">Uttarayana (उत्तरायण)</option>
                      <option value="Dakshinayana">Dakshinayana (दक्षिणायन)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Ritu (Season):</label>
                    <select
                      value={sankalpaParams.ritu}
                      onChange={(e) =>
                        setSankalpaParams({
                          ...sankalpaParams,
                          ritu: e.target.value as any
                        })
                      }
                      className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs"
                    >
                      <option value="Vasanta">Vasanta (वसन्त)</option>
                      <option value="Grishma">Grishma (ग्रीष्म)</option>
                      <option value="Varsha">Varsha (वर्षा)</option>
                      <option value="Sharad">Sharad (शरद्)</option>
                      <option value="Hemanta">Hemanta (हेमन्त)</option>
                      <option value="Shishira">Shishira (शिशिर)</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Paksha:</label>
                    <select
                      value={sankalpaParams.paksha}
                      onChange={(e) =>
                        setSankalpaParams({
                          ...sankalpaParams,
                          paksha: e.target.value as any
                        })
                      }
                      className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs"
                    >
                      <option value="Shukla">Shukla Paksha (शुक्ल)</option>
                      <option value="Krishna">Krishna Paksha (कृष्ण)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    City / Kshetra (स्थान):
                  </label>
                  <input
                    type="text"
                    value={sankalpaParams.placeName}
                    onChange={(e) =>
                      setSankalpaParams({ ...sankalpaParams, placeName: e.target.value })
                    }
                    className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs"
                    placeholder="e.g. Pune, Kashi, Prayag, Mumbai, New York"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Target Deity (देवता):
                  </label>
                  <input
                    type="text"
                    value={sankalpaParams.deityTarget}
                    onChange={(e) =>
                      setSankalpaParams({ ...sankalpaParams, deityTarget: e.target.value })
                    }
                    className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs"
                    placeholder="e.g. Ganesha, Shiva, Mahalakshmi"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Spiritual Purpose (उद्देश्य):
                  </label>
                  <input
                    type="text"
                    value={sankalpaParams.pujaPurpose}
                    onChange={(e) =>
                      setSankalpaParams({ ...sankalpaParams, pujaPurpose: e.target.value })
                    }
                    className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs"
                    placeholder="e.g. Health, prosperity, peace, liberation"
                  />
                </div>
              </div>
            </div>

            {/* Right 2 Cols: Generated Sanskrit Sankalpa Output */}
            <div className="md:col-span-2 space-y-4">
              <div className="bg-[#fffdf7] border-2 border-amber-300 p-6 rounded-2xl shadow-sm space-y-4">
                <div className="flex justify-between items-center border-b border-amber-200 pb-3">
                  <div className="flex items-center gap-2">
                    <Feather className="w-4 h-4 text-amber-700" />
                    <span className="text-sm font-bold font-serif text-stone-900">
                      Generated Sanskrit Mahasankalpa (सङ्कल्प मन्त्र)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handlePlayMantraSpeech(generatedSankalpa.sanskrit)}
                      className="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-mono font-bold flex items-center gap-1.5"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Recite</span>
                    </button>
                    <button
                      onClick={() =>
                        copyToClipboard(generatedSankalpa.sanskrit, "sankalpa-output")
                      }
                      className="px-3 py-1.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      {copiedId === "sankalpa-output" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-amber-200" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Sanskrit</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200">
                  <pre className="text-base font-serif font-bold text-stone-950 whitespace-pre-wrap leading-relaxed">
                    {transliterate(generatedSankalpa.sanskrit)}
                  </pre>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase font-bold text-stone-500">
                    Transliteration (IAST)
                  </span>
                  <p className="text-xs font-mono text-stone-700 italic bg-stone-50 p-3 rounded-xl border border-stone-200 whitespace-pre-wrap">
                    {generatedSankalpa.transliteration}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase font-bold text-amber-900">
                    English Meaning & Cosmic Declarations:
                  </span>
                  <p className="text-xs font-sans text-stone-700 leading-relaxed bg-white p-3 rounded-xl border border-stone-200">
                    {generatedSankalpa.english}
                  </p>
                </div>
              </div>

              {/* Ritual How-to instruction for Sankalpa */}
              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs font-sans text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-amber-700" />
                  <span>How to Execute the Sankalpa in Practice:</span>
                </div>
                <p>
                  Place a copper coin, unbroken akshata (rice), a betel nut (supari), and water in your right palm. Rest your left hand under the right palm upon your right knee. Recite this text with pure heart focus. At the end ("aham karishye"), pour the water and items into the Arghya bowl.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. MODE 4: POOJA SAMAGRI CHECKLIST & INVENTORY                            */}
      {/* ========================================================================= */}
      {activeMode === "samagri_list" && (
        <div className="bg-white border-2 border-amber-300 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-amber-200 pb-4">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                RITUAL INGREDIENTS & SCIENTIFIC REASONS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 mt-2">
                Pooja Samagri Inventory & Checklist (सामग्री प्रबन्ध)
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const listText = filteredSamagri
                    .map(
                      (s, i) =>
                        `${i + 1}. [${checkedSamagri[s.id] ? "X" : " "}] ${s.name} (${s.sanskritName})`
                    )
                    .join("\n");
                  copyToClipboard(listText, "samagri-clipboard");
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-serif font-bold"
              >
                {copiedId === "samagri-clipboard" ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>Copy Checklist</span>
              </button>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search samagri by name, Sanskrit, or scientific reason..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs bg-[#fdfaf4]"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {[
                { id: "all", label: "All Items" },
                { id: "panchopachara", label: "Panchopachara" },
                { id: "abhisheka", label: "Abhisheka" },
                { id: "shringara", label: "Shringara & Herbs" },
                { id: "naivedya", label: "Naivedya" }
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSamagriCategoryFilter(c.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap border ${
                    samagriCategoryFilter === c.id
                      ? "bg-amber-800 text-white border-amber-900"
                      : "bg-white text-stone-700 border-stone-200 hover:bg-amber-50"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Samagri Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSamagri.map((item) => {
              const isChecked = !!checkedSamagri[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() =>
                    setCheckedSamagri((p) => ({ ...p, [item.id]: !p[item.id] }))
                  }
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all space-y-2 ${
                    isChecked
                      ? "bg-emerald-50/70 border-emerald-400 shadow-sm"
                      : "bg-[#fffdf9] border-amber-100 hover:border-amber-300 shadow-xs"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-5 h-5 rounded-lg flex items-center justify-center border transition-all ${
                          isChecked
                            ? "bg-emerald-600 text-white border-emerald-700"
                            : "bg-white border-stone-300 text-transparent"
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span
                        className={`text-xs font-serif font-bold ${
                          isChecked ? "text-emerald-950 line-through" : "text-stone-900"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      {transliterate(item.sanskritName)}
                    </span>
                  </div>

                  <p className="text-xs font-sans text-stone-600 pl-7">{item.description}</p>

                  <div className="text-[11px] font-sans text-amber-900/80 bg-amber-50/50 p-2 rounded-xl border border-amber-100 ml-7 italic">
                    <span className="font-semibold">Significance: </span>
                    {item.scientificOrSpiritualReason}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. MODE 5: SACRED MUDRAS GUIDE                                            */}
      {/* ========================================================================= */}
      {activeMode === "mudras_guide" && (
        <div className="bg-white border-2 border-amber-300 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
          <div className="border-b border-amber-200 pb-4">
            <span className="text-xs font-mono uppercase font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
              AGAMIC BIO-GEOMETRY & MUDRA SHASTRA
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 mt-2">
              Sacred Puja Mudras & Subtle Energy Hand Postures (मुद्रा विज्ञान)
            </h2>
            <p className="text-xs font-sans text-stone-600 mt-1 max-w-2xl">
              Mudras align the 5 elements in the fingertips (Agni, Vayu, Akasha, Prithvi, Jala) to establish resonant bio-electromagnetic circuits between the sadhaka and the consecrated deity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SACRED_PUJA_MUDRAS.map((mudra) => (
              <div
                key={mudra.id}
                className="bg-[#fcf8f0] border-2 border-amber-200 rounded-2xl p-5 space-y-3 shadow-sm hover:border-amber-400 transition-all"
              >
                <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                  <span className="text-base font-bold font-serif text-stone-900">
                    {mudra.name}
                  </span>
                  <span className="text-xs font-serif font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-lg">
                    {transliterate(mudra.sanskritName)}
                  </span>
                </div>

                <div className="text-xs font-mono text-amber-900 bg-white p-2.5 rounded-xl border border-amber-100">
                  <span className="font-bold">Ritual Stage: </span>
                  {mudra.ritualContext}
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase font-bold text-stone-700">
                    Hand Gesture Execution:
                  </div>
                  <p className="text-xs font-sans text-stone-800 bg-amber-50/60 p-3 rounded-xl border border-amber-100/80 leading-relaxed">
                    {mudra.handGestureDescription}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase font-bold text-amber-900">
                    Esoteric & Energetic Significance:
                  </div>
                  <p className="text-xs font-sans text-stone-700 leading-relaxed italic">
                    {mudra.esotericSignificance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. MODE 6: UNIVERSAL SHANTI PATHA & KSHAMA PRARTHANA                      */}
      {/* ========================================================================= */}
      {activeMode === "shanti_patha" && (
        <div className="bg-white border-2 border-amber-300 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-amber-200 pb-4">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                UNIVERSAL VEDIC BENEDICTIONS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 mt-2">
                Universal Shanti Patha & Cosmic Peace Mantras (शान्ति पाठ)
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePlayMantraSpeech(UNIVERSAL_SHANTI_PATHA.sanskrit)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-serif font-bold"
              >
                <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                <span>Chant Shanti Patha</span>
              </button>
              <button
                onClick={() =>
                  copyToClipboard(UNIVERSAL_SHANTI_PATHA.sanskrit, "shanti-copy")
                }
                className="p-2 rounded-xl border border-stone-200 hover:bg-stone-100"
              >
                {copiedId === "shanti-copy" ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4 text-stone-600" />
                )}
              </button>
            </div>
          </div>

          <div className="bg-[#fffdf7] border-2 border-amber-200 p-6 rounded-2xl space-y-4">
            <pre className="text-lg font-serif font-bold text-stone-950 whitespace-pre-wrap leading-loose">
              {transliterate(UNIVERSAL_SHANTI_PATHA.sanskrit)}
            </pre>
          </div>

          <div className="space-y-1 bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <span className="text-xs font-mono uppercase font-bold text-stone-500">
              IAST Transliteration:
            </span>
            <p className="text-xs font-mono text-stone-700 whitespace-pre-wrap leading-relaxed italic">
              {UNIVERSAL_SHANTI_PATHA.transliteration}
            </p>
          </div>

          <div className="space-y-1 bg-amber-50/70 p-5 rounded-2xl border border-amber-200">
            <span className="text-xs font-mono uppercase font-bold text-amber-900">
              Universal Meaning:
            </span>
            <p className="text-sm font-sans text-stone-800 whitespace-pre-wrap leading-relaxed">
              {UNIVERSAL_SHANTI_PATHA.meaning}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
