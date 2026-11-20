import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  Sparkles,
  MessageSquare,
  Volume2,
  VolumeX,
  Send,
  CheckCircle2,
  AlertCircle,
  Award,
  HelpCircle,
  RefreshCw,
  Play,
  ArrowRight,
  Layers,
  BookOpen,
  Feather,
  Copy,
  Check,
  Share2,
  Shuffle,
  Compass,
  Flame,
  ChevronRight,
  Cpu,
  Bookmark,
  CheckSquare,
  FileCheck,
  User,
  Bot
} from "lucide-react";
import { sacredAudio } from "../utils/sankalpaGenerator";
import { useLanguage } from "../context/LanguageContext";
import { ExplanationLanguage } from "../types";
import { INDIAN_TRANSLATION_LANGUAGES, INTERNATIONAL_TRANSLATION_LANGUAGES } from "../data/translationLanguages";

export type LearningLevel = "pravesha" | "parichaya" | "shiksha" | "kovida";
export type LearningTab = "chat" | "grammar_doctor" | "shloka_anvaya" | "drills" | "doubts" | "certificate";

interface ChatMessage {
  id: string;
  sender: "user" | "guru";
  text: string;
  transliteration?: string;
  translation?: string;
  wordGloss?: Array<{ sanskrit: string; rootOrStem: string; grammarTag: string; meaning: string }>;
  grammarNote?: string;
  suggestedReplies?: Array<{ sanskrit: string; english: string }>;
  timestamp: string;
}

interface KarakaItem {
  word: string;
  padartha: string;
  karaka: string;
  vibhakti: string;
  roleExplanation: string;
}

interface GrammarAnalysis {
  originalSentence: string;
  isCorrect: boolean;
  overallScore: number;
  correctedSentence: string;
  correctedIAST: string;
  englishMeaning: string;
  karakaAnalysis: KarakaItem[];
  grammaticalBreakdown: Array<{
    word: string;
    stemOrRoot: string;
    pratyaya: string;
    classification: string;
    sutraReference: string;
  }>;
  sandhiPoints: Array<{
    splitForm: string;
    combinedForm: string;
    sandhiType: string;
    sutra: string;
  }>;
  pedagogicalExplanation: string;
  paninianSummary: string;
}

interface ShlokaAnvayaData {
  originalShloka: string;
  padachheda: string[];
  anvayaOrderSanskrit: string;
  anvayaEnglishTranslation: string;
  wordMatrix: Array<{
    word: string;
    rootOrStem: string;
    morphologicalTag: string;
    meaningInContext: string;
    syntacticRole: string;
  }>;
  chhandas: {
    meterName: string;
    syllableCount: string;
    yatiRules: string;
  };
  alankara: string;
  bhavarthaCommentary: string;
}

interface QuizQuestion {
  id: string;
  questionSanskrit: string;
  questionEnglish: string;
  options: string[];
  correctIndex: number;
  hint: string;
  paninianExplanation: string;
  relatedSutra: string;
}

const LEVEL_META: Record<LearningLevel, { label: string; english: string; desc: string; icon: string; badge: string; color: string }> = {
  pravesha: {
    label: "प्रवेशः (Level 1)",
    english: "Beginner / Foundation",
    desc: "Sarala Samskritam, daily salutations, basic nouns, present tense (लट्) & essentials.",
    icon: "🌱",
    badge: "BEGINNER",
    color: "from-emerald-700 to-teal-900"
  },
  parichaya: {
    label: "परिचयः (Level 2)",
    english: "Intermediate / Karaka Core",
    desc: "All 7 Vibhaktis, Karaka relations, Past/Future lakaras, and gerunds (क्त्वा, ल्यप्, तुमुन्).",
    icon: "🌿",
    badge: "INTERMEDIATE",
    color: "from-amber-700 to-amber-950"
  },
  shiksha: {
    label: "शिक्षा (Level 3)",
    english: "Advanced / Shastric Syntax",
    desc: "Sandhi permutations, Samasas (compounds), Krdantas (कृदन्ताः) & complex prose.",
    icon: "🌳",
    badge: "ADVANCED",
    color: "from-orange-700 to-amber-900"
  },
  kovida: {
    label: "कोविदः (Level 4)",
    english: "Mastery / Shastra & Anvaya",
    desc: "Classical Kavya Anvaya, Paninian generative derivations, Chhandas & Subhashita analysis.",
    icon: "🏛️",
    badge: "SCHOLAR",
    color: "from-purple-800 to-amber-950"
  }
};

const SAMPLE_SENTENCES = [
  { text: "बालकः विद्यालयं गच्छति", label: "Boy goes to school (Accusative / Dvitiya)" },
  { text: "रामेण सह लक्ष्मणः वनं जगाम", label: "Lakshmana went to forest with Rama (Saha-yoga / Tritiya)" },
  { text: "विद्या ददाति विनयं विनयाद्याति पात्रताम्", label: "Classic Subhashita on Humility & Worthiness" },
  { text: "मुनये नमः शिवाय च वन्दनम्", label: "Namah with Chaturthi (Upapada)" },
  { text: "वृक्षात् पक्वानि फलानि भूमौ पतन्ति", label: "Fruits fall from tree to earth (Apadana + Adhikarana)" },
  { text: "छात्रः पुस्तकं पठित्वा ज्ञानं लभते", label: "Student, having read book, gains knowledge (Ktva-pratyaya)" }
];

const CURATED_SHLOKAS = [
  {
    title: "Bhagavad Gita 2.47 (Nishkama Karma)",
    text: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥"
  },
  {
    title: "Brihadaranyaka Shanti Mantra",
    text: "ॐ असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्मा अमृतं गमय। ॐ शान्तिः शान्तिः शान्तिः॥"
  },
  {
    title: "Rigvedic Gayatri Mantra",
    text: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥"
  },
  {
    title: "Subhashita on Knowledge (विद्या-प्रशंसा)",
    text: "न चौरहार्यं न च राजहार्यं न भ्रातृभाज्यं न च भारकारि। व्यये कृते वर्धत एव नित्यं विद्याधनं सर्वधनप्रधानम्॥"
  },
  {
    title: "Maha Mrityunjaya Mantra",
    text: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥"
  }
];

export default function SanskritLearningStudio() {
  const { transliterate } = useLanguage();
  const [activeLevel, setActiveLevel] = useState<LearningLevel>("parichaya");
  const [activeTab, setActiveTab] = useState<LearningTab>("chat");
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Student Profile & XP State
  const [studentName, setStudentName] = useState<string>("जिज्ञासुः (Seeker)");
  const [studentXP, setStudentXP] = useState<number>(340);
  const [currentStreak, setCurrentStreak] = useState<number>(5);

  // 1. Spoken Chat State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "msg-welcome",
      sender: "guru",
      text: "नमस्ते प्रिय शिष्य! अहं भवतः 'संस्कृत-सखा' अस्मि। भवान् अद्य किं ज्ञातुम् इच्छति?",
      transliteration: "Namaste priya śiṣya! Ahaṁ bhavataḥ 'Saṁskṛta-Sakhā' asmi. Bhavān adya kiṁ jñātum icchati?",
      translation: "Salutations dear student! I am your 'Sanskrit Companion / Tutor'. What do you wish to explore today?",
      wordGloss: [
        { sanskrit: "नमस्ते", rootOrStem: "नमः + ते", grammarTag: "Avyaya + Chaturthi 4-sg", meaning: "Bowing unto you" },
        { sanskrit: "प्रिय", rootOrStem: "प्रिय (विशेषण)", grammarTag: "Sambodhana 8-sg", meaning: "Dear / beloved" },
        { sanskrit: "शिष्य", rootOrStem: "शिष्य (पुं)", grammarTag: "Sambodhana 8-sg", meaning: "O student" },
        { sanskrit: "अहम्", rootOrStem: "अस्मद्", grammarTag: "Prathama 1-sg", meaning: "I" },
        { sanskrit: "अस्मि", rootOrStem: "अस् (लट्)", grammarTag: "Uttama-purusha 1-sg", meaning: "Am" },
        { sanskrit: "भवान्", rootOrStem: "भवत्", grammarTag: "Punglinga Prathama 1-sg", meaning: "You (respectful)" },
        { sanskrit: "इच्छति", rootOrStem: "इष् (लट्)", grammarTag: "Prathama-purusha 1-sg", meaning: "Desires / wishes" }
      ],
      grammarNote: "Notice 'भवान् इच्छति': In Sanskrit, the polite second-person 'भवान्' (Sir/You) syntactically takes 3rd-person singular verbs (प्रथम-पुरुष एकवचन), unlike the informal 'त्वम्' which takes 'इच्छसि'.",
      suggestedReplies: [
        { sanskrit: "मम नाम जिज्ञासुः अस्ति।", english: "My name is Jijnasu." },
        { sanskrit: "अहं कारकाणां विषये ज्ञातुम् इच्छामि।", english: "I desire to learn about the Karakas (cases)." },
        { sanskrit: "भगवद्गीतायाः श्लोकम् अन्वेतुं साहाय्यं करोतु।", english: "Please help me deconstruct a Bhagavad Gita shloka." }
      ],
      timestamp: "Just now"
    }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [chatScenario, setChatScenario] = useState("daily_greeting");
  const [guruTranslationLang, setGuruTranslationLang] = useState<ExplanationLanguage>("English");
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // 2. Grammar Doctor State
  const [grammarInput, setGrammarInput] = useState("बालकः विद्यालयं गच्छति");
  const [grammarAnalysis, setGrammarAnalysis] = useState<GrammarAnalysis | null>(null);
  const [isGrammarLoading, setIsGrammarLoading] = useState(false);

  // 3. Shloka Anvaya State
  const [shlokaInput, setShlokaInput] = useState(CURATED_SHLOKAS[0].text);
  const [shlokaData, setShlokaData] = useState<ShlokaAnvayaData | null>(null);
  const [isShlokaLoading, setIsShlokaLoading] = useState(false);
  const [anvayaStep, setAnvayaStep] = useState<"verse" | "padachheda" | "matrix" | "anvaya" | "bhavartha">("matrix");

  // 4. Adaptive Drills State
  const [drillTopic, setDrillTopic] = useState("Vibhaktis & Karakas");
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswerResult, setShowAnswerResult] = useState(false);
  const [isQuizLoading, setIsQuizLoading] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // 5. Doubts / Q&A State
  const [doubtQuery, setDoubtQuery] = useState("क्त्वा एवं ल्यप् प्रत्यययोः मध्ये कः भेदः अस्ति?");
  const [doubtResponse, setDoubtResponse] = useState<any>(null);
  const [isDoubtLoading, setIsDoubtLoading] = useState(false);

  // Audio recite helper
  const reciteSanskrit = (text: string) => {
    if (!audioEnabled) return;
    sacredAudio.playTempleBell();
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "hi-IN";
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Scroll chat to bottom
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages, isChatLoading]);

  // Handle Chat Submit
  const handleSendChat = async (messageText?: string) => {
    const textToSend = messageText || chatInput;
    if (!textToSend.trim() || isChatLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: "Now"
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput("");
    setIsChatLoading(true);

    try {
      const res = await fetch("/api/sanskrit-learning/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userMessage: textToSend,
          history: chatMessages.slice(-6).map((m) => ({ sender: m.sender, text: m.text })),
          skillLevel: activeLevel,
          scenario: chatScenario,
          translationLang: guruTranslationLang
        })
      });

      if (!res.ok) throw new Error("Server error");
      const data = await res.json();

      const guruMsg: ChatMessage = {
        id: `guru-${Date.now()}`,
        sender: "guru",
        text: data.sanskritDevanagari,
        transliteration: data.transliterationIAST,
        translation: data.englishTranslation,
        wordGloss: data.wordByWordGloss,
        grammarNote: data.grammarNote,
        suggestedReplies: data.suggestedReplies,
        timestamp: "Just now"
      };

      setChatMessages((prev) => [...prev, guruMsg]);
      setStudentXP((prev) => prev + 15);
      if (audioEnabled && data.speechText) {
        reciteSanskrit(data.sanskritDevanagari);
      }
    } catch (err) {
      console.error(err);
      // Fallback response
      const fallbackMsg: ChatMessage = {
        id: `guru-${Date.now()}`,
        sender: "guru",
        text: "साधु! भवतः वाक्यं मया ज्ञातम्। संस्कृतस्य नित्य-अभ्यासेन एव बुद्धिः विमला भवति।",
        transliteration: "Sādhu! Bhavataḥ vākyaṁ mayā jñātam. Saṁskṛtasya nitya-abhyāsena eva buddhiḥ vimalā bhavati.",
        translation: "Well said! I comprehended your sentence. Through continuous Sanskrit practice alone does intellect become immaculate.",
        grammarNote: "Notice 'अभ्यासेन' (Tritiya Vibhakti 3-sg - by means of practice) under 'कर्तृकरणयोस्तृतीया' (२.३.१८).",
        suggestedReplies: [
          { sanskrit: "धन्यवादः गुरो!", english: "Thank you Guru!" },
          { sanskrit: "पुनः किञ्चित् अभ्यासं कारयतु।", english: "Please facilitate further practice." }
        ],
        timestamp: "Just now"
      };
      setChatMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Run Grammar Doctor
  const runGrammarDoctor = async (customSentence?: string) => {
    const text = customSentence || grammarInput;
    if (!text.trim() || isGrammarLoading) return;

    setIsGrammarLoading(true);
    try {
      const res = await fetch("/api/sanskrit-learning/grammar-doctor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sentence: text })
      });
      if (!res.ok) throw new Error("Failed to diagnose");
      const data = await res.json();
      setGrammarAnalysis(data);
      setStudentXP((prev) => prev + 25);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGrammarLoading(false);
    }
  };

  // Run Shloka Anvaya
  const runShlokaAnvaya = async (customVerse?: string) => {
    const text = customVerse || shlokaInput;
    if (!text.trim() || isShlokaLoading) return;

    setIsShlokaLoading(true);
    try {
      const res = await fetch("/api/sanskrit-learning/shloka-anvaya", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shloka: text, translationLang: guruTranslationLang })
      });
      if (!res.ok) throw new Error("Failed to deconstruct shloka");
      const data = await res.json();
      setShlokaData(data);
      setStudentXP((prev) => prev + 35);
    } catch (err) {
      console.error(err);
    } finally {
      setIsShlokaLoading(false);
    }
  };

  // Run Drills Generation
  const runGenerateQuiz = async () => {
    setIsQuizLoading(true);
    setSelectedAnswer(null);
    setShowAnswerResult(false);
    setCurrentQuestionIndex(0);

    try {
      const res = await fetch("/api/sanskrit-learning/generate-exercise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: drillTopic, level: activeLevel, count: 5 })
      });
      if (!res.ok) throw new Error("Failed to generate quiz");
      const data = await res.json();
      setQuizQuestions(data.questions || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsQuizLoading(false);
    }
  };

  // Run Doubt Clarification
  const runClarifyDoubt = async (customQuery?: string) => {
    const text = customQuery || doubtQuery;
    if (!text.trim() || isDoubtLoading) return;

    setIsDoubtLoading(true);
    try {
      const res = await fetch("/api/sanskrit-learning/clarify-doubt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text })
      });
      if (!res.ok) throw new Error("Failed to clarify doubt");
      const data = await res.json();
      setDoubtResponse(data);
      setStudentXP((prev) => prev + 20);
    } catch (err) {
      console.error(err);
    } finally {
      setIsDoubtLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    runGrammarDoctor(grammarInput);
    runShlokaAnvaya(shlokaInput);
    runGenerateQuiz();
    runClarifyDoubt(doubtQuery);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0b08] text-[#f7eedf] py-6 px-3 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* 1. HERO & LEARNER STATUS BAR */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#241a12] via-[#1c140d] to-[#120d09] border border-amber-800/50 p-5 sm:p-7 shadow-2xl overflow-hidden">
          {/* Subtle Vedic watermark */}
          <div className="absolute top-0 right-0 p-8 text-amber-500/5 font-serif text-9xl select-none pointer-events-none">
            सं
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase">
                  AI-POWERED SANSKRIT LAB
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  {LEVEL_META[activeLevel].badge} MODE
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  ASHTADHYAYI ALIGNED
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400">
                संस्कृत-कौशल-शाला (AI Sanskrit Skills Studio)
              </h1>
              <p className="text-sm text-stone-300 max-w-2xl font-serif">
                Master Paninian grammar, conversational fluency, morphological deconstruction (अन्वय-बोधः), and live syntactic diagnosis through intelligent generative tutors.
              </p>
            </div>

            {/* Learner Progress & Audio Toggle */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Audio Chime Toggle */}
              <button
                onClick={() => setAudioEnabled(!audioEnabled)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                  audioEnabled
                    ? "bg-amber-950/80 text-amber-300 border-amber-600/70 shadow"
                    : "bg-stone-900 text-stone-400 border-stone-800"
                }`}
                title="Pronunciation sound synthesis"
              >
                {audioEnabled ? <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
                <span>{audioEnabled ? "AUDIO ON" : "AUDIO MUTED"}</span>
              </button>

              {/* XP Pill */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#2b1f15] border border-amber-700/60 shadow">
                <Flame className="w-4 h-4 text-orange-400 animate-bounce" />
                <div className="text-left">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                    STREAK: {currentStreak} DAYS
                  </div>
                  <div className="text-xs font-bold text-amber-100">
                    {studentXP} XP EARNED
                  </div>
                </div>
              </div>

              {/* Student Name Trigger */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#2a1d13] border border-stone-700 text-stone-200 text-xs">
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-serif font-bold">{studentName}</span>
              </div>
            </div>
          </div>

          {/* LEVEL SELECTOR SLIDER */}
          <div className="mt-6 pt-5 border-t border-amber-900/40">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold mb-3 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>SELECT CURRICULUM LEVEL (दक्षता-स्तरः):</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {(Object.keys(LEVEL_META) as LearningLevel[]).map((levelKey) => {
                const meta = LEVEL_META[levelKey];
                const isActive = activeLevel === levelKey;
                return (
                  <button
                    key={levelKey}
                    onClick={() => {
                      setActiveLevel(levelKey);
                      sacredAudio.playTempleBell();
                    }}
                    className={`text-left p-3 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                      isActive
                        ? "bg-gradient-to-br from-[#3b2718] to-[#25170d] border-amber-400 ring-2 ring-amber-500/40 shadow-lg"
                        : "bg-[#18130e] hover:bg-[#201912] border-stone-800 text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg">{meta.icon}</span>
                      <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                        isActive ? "bg-amber-400 text-black" : "bg-stone-800 text-stone-400"
                      }`}>
                        {meta.badge}
                      </span>
                    </div>
                    <div className={`font-serif font-bold text-sm ${isActive ? "text-amber-200" : "text-stone-200"}`}>
                      {meta.label}
                    </div>
                    <div className="text-[11px] text-stone-400 font-medium truncate">
                      {meta.english}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. NAVIGATION MODES DOCK */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-stone-800">
          {[
            { id: "chat" as LearningTab, label: "संस्कृत-सखा (AI Dialogue)", icon: MessageSquare, badge: "CONVERSATION" },
            { id: "grammar_doctor" as LearningTab, label: "व्याकरण-वैद्यः (Sentence Doctor)", icon: Cpu, badge: "KARAKA ANALYSIS" },
            { id: "shloka_anvaya" as LearningTab, label: "श्लोक-अन्वयः (Verse Deconstructor)", icon: BookOpen, badge: "SYNTAX MATRIX" },
            { id: "drills" as LearningTab, label: "कण्ठस्थ & अभ्यासः (Adaptive Arena)", icon: CheckSquare, badge: "QUIZ & FLASHCARDS" },
            { id: "doubts" as LearningTab, label: "शङ्का-समाधानम् (Panini Guru Q&A)", icon: HelpCircle, badge: "SUTRA EXPLANATIONS" },
            { id: "certificate" as LearningTab, label: "दक्षता-प्रमाणपत्रम् (Certification)", icon: Award, badge: "ASSESSMENT" }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  sacredAudio.playTempleBell();
                }}
                className={`px-4 py-2.5 rounded-xl font-serif text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-amber-800 via-amber-900 to-[#3a2315] text-amber-100 border-amber-500 ring-2 ring-amber-500/40 shadow-lg"
                    : "bg-[#16120e] text-stone-300 hover:text-white hover:bg-[#201812] border-stone-800"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-300" : "text-stone-400"}`} />
                <span>{tab.label}</span>
                <span className={`text-[9px] font-mono px-1 rounded ${
                  isActive ? "bg-amber-400/20 text-amber-300 border border-amber-400/50" : "bg-stone-800 text-stone-400"
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. TAB 1: SPOKEN CHAT & INTERACTIVE DIALOGUE (संस्कृत-सखा) */}
        {activeTab === "chat" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Dialogue Canvas */}
            <div className="lg:col-span-8 flex flex-col h-[700px] rounded-2xl bg-[#14100c] border border-amber-900/40 shadow-xl overflow-hidden">
              {/* Chat Header */}
              <div className="p-4 bg-[#1e1711] border-b border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-500 flex items-center justify-center text-black font-serif font-black shadow">
                    सं
                  </div>
                  <div>
                    <div className="font-serif font-bold text-amber-200 text-sm flex items-center gap-2">
                      <span>संस्कृत-सखा (Samskrita-Sakha)</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    </div>
                    <div className="text-[11px] text-stone-400 font-mono">
                      Scenario: {chatScenario.replace("_", " ").toUpperCase()} • {LEVEL_META[activeLevel].label}
                    </div>
                  </div>
                </div>

                {/* Scenario & Translation Language Selectors */}
                <div className="flex items-center gap-2">
                  <select
                    value={chatScenario}
                    onChange={(e) => setChatScenario(e.target.value)}
                    className="bg-[#2a1e15] border border-stone-700 text-stone-200 text-xs rounded-lg px-2.5 py-1.5 focus:border-amber-500 outline-none"
                    title="Dialogue Scenario"
                  >
                    <option value="daily_greeting">दैनन्दिन-परिचयः (Daily Salutations)</option>
                    <option value="gurukula">गुरुकुल-संवादः (Gurukula Teacher-Student)</option>
                    <option value="market_travel">आपण-यात्रा (Market & Journey)</option>
                    <option value="shastra_debate">शास्त्र-चर्चा (Philosophical Inquiries)</option>
                    <option value="science_nature">विज्ञानं प्रकृतिश्च (Nature & Sciences)</option>
                  </select>

                  <select
                    value={guruTranslationLang}
                    onChange={(e) => setGuruTranslationLang(e.target.value as ExplanationLanguage)}
                    className="bg-[#2a1e15] border border-amber-800/80 text-amber-300 text-xs rounded-lg px-2 py-1.5 focus:border-amber-500 outline-none cursor-pointer"
                    title="Tutor Translation Language"
                  >
                    <optgroup label="🇮🇳 Indian Languages">
                      {INDIAN_TRANSLATION_LANGUAGES.map((l) => (
                        <option key={l.id} value={l.id}>
                          {l.flag} {l.nativeName}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🌐 Global Languages">
                      {INTERNATIONAL_TRANSLATION_LANGUAGES.map((l) => (
                        <option key={l.id} value={l.id}>
                          {l.flag} {l.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Messages Stream */}
              <div ref={chatScrollRef} className="flex-1 p-4 overflow-y-auto space-y-4">
                {chatMessages.map((msg) => {
                  const isUser = msg.sender === "user";
                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
                    >
                      {!isUser && (
                        <div className="w-8 h-8 rounded-full bg-amber-900/60 border border-amber-600/50 flex-shrink-0 flex items-center justify-center text-amber-300 font-serif text-xs font-bold">
                          गुरु
                        </div>
                      )}

                      <div className={`max-w-2xl rounded-2xl p-4 space-y-2.5 ${
                        isUser
                          ? "bg-gradient-to-r from-amber-700 to-amber-800 text-white rounded-tr-none shadow"
                          : "bg-[#1c1611] border border-amber-900/50 rounded-tl-none shadow"
                      }`}>
                        {/* Message Main Sanskrit */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="text-base sm:text-lg font-serif font-bold text-amber-100 leading-relaxed">
                            {transliterate(msg.text)}
                          </div>
                          {!isUser && (
                            <button
                              onClick={() => reciteSanskrit(msg.text)}
                              className="p-1.5 rounded-lg bg-amber-950/70 hover:bg-amber-900 text-amber-300 transition-colors flex-shrink-0"
                              title="Listen to pronunciation"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>

                        {/* Transliteration */}
                        {msg.transliteration && (
                          <div className="text-xs font-mono text-amber-300/80 italic">
                            {msg.transliteration}
                          </div>
                        )}

                        {/* English Translation */}
                        {msg.translation && (
                          <div className="text-xs text-stone-300 bg-black/30 p-2.5 rounded-xl border border-stone-800/80 leading-relaxed">
                            <span className="font-bold text-amber-400">Meaning: </span>
                            {msg.translation}
                          </div>
                        )}

                        {/* Word by Word Gloss Tag Cards */}
                        {msg.wordGloss && msg.wordGloss.length > 0 && (
                          <div className="pt-2 border-t border-stone-800">
                            <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1.5">
                              पदच्छेद एवं रूप-विश्लेषणम् (Word Breakdown):
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {msg.wordGloss.map((w, idx) => (
                                <div
                                  key={idx}
                                  className="text-[11px] bg-[#291e16] border border-amber-800/40 rounded-lg px-2 py-1 text-stone-200"
                                >
                                  <span className="font-serif font-bold text-amber-300 mr-1">{w.sanskrit}</span>
                                  <span className="text-[9px] text-stone-400">({w.grammarTag}): </span>
                                  <span className="text-stone-300">{w.meaning}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Grammar Note */}
                        {msg.grammarNote && (
                          <div className="text-xs bg-amber-950/40 border border-amber-800/50 p-2.5 rounded-xl text-amber-200 flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <div className="leading-snug">
                              <span className="font-bold text-amber-300">व्याकरण-रहस्यम्: </span>
                              {msg.grammarNote}
                            </div>
                          </div>
                        )}

                        {/* Suggested quick replies */}
                        {msg.suggestedReplies && msg.suggestedReplies.length > 0 && (
                          <div className="pt-2 space-y-1.5">
                            <div className="text-[10px] font-mono uppercase text-stone-400 font-semibold">
                              QUICK SUGGESTED RESPONSES (त्वरित-उत्तराणि):
                            </div>
                            <div className="flex flex-col gap-1.5">
                              {msg.suggestedReplies.map((r, rIdx) => (
                                <button
                                  key={rIdx}
                                  onClick={() => handleSendChat(r.sanskrit)}
                                  className="text-left text-xs bg-[#241a12] hover:bg-[#322318] border border-amber-700/40 rounded-xl px-3 py-1.5 text-amber-200 flex items-center justify-between transition-colors group cursor-pointer"
                                >
                                  <span className="font-serif font-medium">{r.sanskrit}</span>
                                  <span className="text-[10px] text-stone-400 group-hover:text-stone-200 ml-2 italic">
                                    "{r.english}"
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {isUser && (
                        <div className="w-8 h-8 rounded-full bg-amber-700 border border-amber-500 flex-shrink-0 flex items-center justify-center text-white font-serif text-xs font-bold">
                          अहम्
                        </div>
                      )}
                    </motion.div>
                  );
                })}

                {isChatLoading && (
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-mono italic p-3 bg-[#1a140f] rounded-xl border border-stone-800 w-fit">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>संस्कृत-सखा चिन्तयति (Formulating Paninian response)...</span>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <div className="p-3 bg-[#1a140f] border-t border-stone-800 flex items-center gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendChat()}
                  placeholder="Type in Sanskrit or English (e.g. 'अहं कुशली अस्मि' or 'How do I say thank you?')..."
                  className="flex-1 bg-[#251c14] border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  onClick={() => handleSendChat()}
                  disabled={!chatInput.trim() || isChatLoading}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-serif font-bold text-sm flex items-center gap-1.5 disabled:opacity-50 transition-all cursor-pointer shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>प्रेषयतु</span>
                </button>
              </div>
            </div>

            {/* Right Column: Pedagogical Companion & Tips */}
            <div className="lg:col-span-4 space-y-4">
              {/* Daily Sanskrit Wisdom Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#241a12] to-[#17120d] border border-amber-800/50 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-amber-400 flex items-center gap-1.5">
                    <Feather className="w-3.5 h-3.5" />
                    DAILY SANSKRIT RULE
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                    CONVERSATIONAL TIP
                  </span>
                </div>
                <div className="text-base font-serif font-bold text-amber-200 leading-snug">
                  गत्यर्थककर्मणि द्वितीया वा चतुर्थी
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  With verbs of motion (like <code className="text-amber-300">गम्, या, चर्</code>), the destination can take either <strong>Dvitiya (2nd case)</strong> or <strong>Chaturthi (4th case)</strong>:
                </p>
                <div className="space-y-1.5 bg-black/40 p-3 rounded-xl border border-stone-800 text-xs">
                  <div>
                    <span className="text-emerald-400 font-bold">1. ग्रामं गच्छति</span>
                    <span className="text-stone-400"> (Goes to the village - Dvitiya)</span>
                  </div>
                  <div>
                    <span className="text-emerald-400 font-bold">2. ग्रामाय गच्छति</span>
                    <span className="text-stone-400"> (Goes for the village - Chaturthi)</span>
                  </div>
                </div>
              </div>

              {/* 5-Minute Daily Spoken Vocabulary Chips */}
              <div className="p-5 rounded-2xl bg-[#16120e] border border-stone-800 space-y-3">
                <div className="text-xs font-mono font-bold uppercase text-stone-300 flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-amber-400" />
                  ESSENTIAL SPOKEN SANSKRIT CHIPS
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { san: "आम् / न", en: "Yes / No" },
                    { san: "कृपया", en: "Please" },
                    { san: "धन्यवादः", en: "Thank you" },
                    { san: "क्षम्यताम्", en: "Excuse me / Sorry" },
                    { san: "पुनर्मिलामः", en: "See you again" },
                    { san: "अस्तु / साधु", en: "Alright / Excellent" }
                  ].map((chip, cIdx) => (
                    <button
                      key={cIdx}
                      onClick={() => handleSendChat(chip.san)}
                      className="p-2.5 rounded-xl bg-[#231a12] hover:bg-[#302116] border border-stone-800 text-left transition-colors cursor-pointer"
                    >
                      <div className="font-serif font-bold text-amber-200">{chip.san}</div>
                      <div className="text-[10px] text-stone-400">{chip.en}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Prompt Starters */}
              <div className="p-5 rounded-2xl bg-[#16120e] border border-stone-800 space-y-2.5">
                <div className="text-xs font-mono font-bold uppercase text-stone-400">
                  TRY ASKING THE TUTOR:
                </div>
                {[
                  "Explain the difference between त्वम् and भवान्?",
                  "How to decline the word 'बालक' in 7 cases?",
                  "Give me 3 sentences using Past Tense (लङ् लकार)?",
                  "Why is 'रामेण सह' using Tritiya Vibhakti?"
                ].map((promptText, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => handleSendChat(promptText)}
                    className="w-full text-left p-2 rounded-lg bg-[#221811] hover:bg-[#2e2016] border border-stone-800/80 text-xs text-amber-200/90 transition-colors flex items-center justify-between"
                  >
                    <span className="truncate">{promptText}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. TAB 2: GRAMMAR DOCTOR & KARAKA ANALYZER (व्याकरण-वैद्यः) */}
        {activeTab === "grammar_doctor" && (
          <div className="space-y-6">
            {/* Input & Preset Bar */}
            <div className="p-5 rounded-2xl bg-[#17120d] border border-amber-900/40 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-serif font-bold text-amber-200 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-amber-400" />
                    व्याकरण-वैद्यः — AI Sentence Doctor & Karaka Graph
                  </h2>
                  <p className="text-xs text-stone-400">
                    Input any Sanskrit sentence to diagnose case concord, verbal tense, Sandhi points, and full syntactic roles (कारकाणि).
                  </p>
                </div>

                <button
                  onClick={() => runGrammarDoctor()}
                  disabled={isGrammarLoading || !grammarInput.trim()}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 text-white font-serif font-bold text-sm flex items-center gap-2 transition-all cursor-pointer shadow disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isGrammarLoading ? "animate-spin" : ""}`} />
                  <span>{isGrammarLoading ? "परीक्षणं क्रियते..." : "परीक्षताम् (Diagnose)"}</span>
                </button>
              </div>

              {/* Input field */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={grammarInput}
                  onChange={(e) => setGrammarInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && runGrammarDoctor()}
                  placeholder="Enter a Sanskrit sentence (e.g. 'बालकः विद्यालयं गच्छति')..."
                  className="w-full bg-[#241c14] border border-stone-700 rounded-xl px-4 py-3 text-base font-serif text-amber-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Sentence Presets */}
              <div className="flex items-center gap-2 flex-wrap pt-2">
                <span className="text-[10px] font-mono uppercase text-stone-400 font-bold">PRESETS:</span>
                {SAMPLE_SENTENCES.map((preset, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => {
                      setGrammarInput(preset.text);
                      runGrammarDoctor(preset.text);
                    }}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#271d15] hover:bg-[#34261c] border border-amber-800/40 text-amber-200 transition-colors cursor-pointer"
                  >
                    {preset.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Analysis Results View */}
            {grammarAnalysis && (
              <div className="space-y-6">
                {/* Score & Verdict Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-[#241a12] via-[#1d150e] to-[#16100a] border border-amber-800/50 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      {grammarAnalysis.isCorrect ? (
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          शुद्धं वाक्यम् (Grammatically Sound)
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/20 text-red-300 border border-red-500/40 flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4 text-red-400" />
                          दोषयुक्तम् (Revisions Recommended)
                        </span>
                      )}
                      <span className="text-xs font-mono text-stone-400">
                        Score: <strong className="text-amber-300">{grammarAnalysis.overallScore}/100</strong>
                      </span>
                    </div>

                    <div className="text-lg sm:text-xl font-serif font-black text-amber-100">
                      {grammarAnalysis.correctedSentence}
                    </div>
                    <div className="text-xs font-mono text-amber-400/80 italic">
                      {grammarAnalysis.correctedIAST} • "{grammarAnalysis.englishMeaning}"
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => reciteSanskrit(grammarAnalysis.correctedSentence)}
                      className="px-3.5 py-2 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-600/50 text-amber-300 text-xs font-serif font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>श्रूयताम् (Listen)</span>
                    </button>
                    <button
                      onClick={() => copyToClipboard(grammarAnalysis.correctedSentence, "diag-sent")}
                      className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedId === "diag-sent" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedId === "diag-sent" ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                </div>

                {/* 1. Karaka Role Flow (Visual Graph Cards) */}
                <div className="p-5 rounded-2xl bg-[#15110d] border border-stone-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-amber-300 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-amber-400" />
                      कारक-सम्बन्ध-चित्रणम् (Karaka Syntactic Dependency Mapping)
                    </h3>
                    <span className="text-[10px] font-mono text-stone-400">
                      ६ कारकाणि (Karta, Karma, Karana, Sampradana, Apadana, Adhikarana)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {grammarAnalysis.karakaAnalysis.map((item, kIdx) => (
                      <div
                        key={kIdx}
                        className="p-4 rounded-xl bg-gradient-to-br from-[#221810] to-[#19120c] border border-amber-800/40 space-y-2 shadow"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-serif font-black text-lg text-amber-200">{item.word}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700">
                            {item.vibhakti.split(" ")[0]}
                          </span>
                        </div>
                        <div className="text-xs font-serif font-bold text-emerald-400">
                          {item.karaka}
                        </div>
                        <div className="text-xs text-stone-300 italic">
                          {item.padartha}
                        </div>
                        <div className="text-[11px] text-stone-400 border-t border-stone-800/80 pt-2 leading-relaxed">
                          {item.roleExplanation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Morphological Subanta / Tinganta Matrix */}
                <div className="p-5 rounded-2xl bg-[#15110d] border border-stone-800 space-y-3">
                  <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-amber-300 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-400" />
                    पद-विश्लेषणम् (Morphological Breakdown)
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-stone-800 text-stone-400 font-mono">
                          <th className="py-2.5 px-3">पदम् (Word)</th>
                          <th className="py-2.5 px-3">प्रकृतिः (Stem/Root)</th>
                          <th className="py-2.5 px-3">प्रत्ययः (Affix)</th>
                          <th className="py-2.5 px-3">भेदः (Classification)</th>
                          <th className="py-2.5 px-3">पाणिनीय-सूत्रम् (Panini Sutra)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-800/60 font-serif">
                        {grammarAnalysis.grammaticalBreakdown.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-amber-950/20 transition-colors">
                            <td className="py-2.5 px-3 font-bold text-amber-200">{row.word}</td>
                            <td className="py-2.5 px-3 text-stone-300">{row.stemOrRoot}</td>
                            <td className="py-2.5 px-3 font-mono text-amber-400">{row.pratyaya}</td>
                            <td className="py-2.5 px-3 text-emerald-300">{row.classification}</td>
                            <td className="py-2.5 px-3 font-mono text-stone-400 text-[11px]">{row.sutraReference}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 3. Pedagogical Explanation & Sandhi */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#18130e] border border-amber-900/40 space-y-2">
                    <div className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      PEDAGOGICAL TEACHING NOTE
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed font-serif">
                      {grammarAnalysis.pedagogicalExplanation}
                    </p>
                    <div className="pt-2 text-[11px] font-mono text-amber-300/80">
                      Summary: {grammarAnalysis.paninianSummary}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#18130e] border border-stone-800 space-y-2">
                    <div className="text-xs font-mono font-bold text-stone-400 uppercase flex items-center gap-1.5">
                      <Feather className="w-3.5 h-3.5 text-amber-400" />
                      SANDHI COMBINATIONS IN SENTENCE
                    </div>
                    {grammarAnalysis.sandhiPoints.length > 0 ? (
                      <div className="space-y-2 pt-1">
                        {grammarAnalysis.sandhiPoints.map((s, sIdx) => (
                          <div key={sIdx} className="bg-black/30 p-2.5 rounded-xl border border-stone-800 text-xs">
                            <div className="flex items-center justify-between font-serif">
                              <span className="text-stone-300">{s.splitForm}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                              <span className="font-bold text-amber-200">{s.combinedForm}</span>
                            </div>
                            <div className="text-[10px] font-mono text-amber-400 mt-1">
                              {s.sandhiType} • Sutra: {s.sutra}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-stone-500 italic">
                        No complex Sandhi required or already resolved in pada-isolation.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 5. TAB 3: SHLOKA ANVAYA & VERSE DECONSTRUCTOR (श्लोक-अन्वय-दर्शकम्) */}
        {activeTab === "shloka_anvaya" && (
          <div className="space-y-6">
            {/* Shloka Selector & Custom Input */}
            <div className="p-5 rounded-2xl bg-[#17120d] border border-amber-900/40 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-serif font-bold text-amber-200 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-400" />
                    श्लोक-अन्वय-दर्शकम् — Classical Verse Deconstruction
                  </h2>
                  <p className="text-xs text-stone-400">
                    Transform poetic Sanskrit verses into logical prose word-order (अन्वयः), morphological roots, metrical scan (छन्दः), and profound philosophical commentary.
                  </p>
                </div>

                <button
                  onClick={() => runShlokaAnvaya()}
                  disabled={isShlokaLoading || !shlokaInput.trim()}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 text-white font-serif font-bold text-sm flex items-center gap-2 transition-all cursor-pointer shadow disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isShlokaLoading ? "animate-spin" : ""}`} />
                  <span>{isShlokaLoading ? "अन्वयः क्रियते..." : "अन्वयं पश्यतु (Deconstruct)"}</span>
                </button>
              </div>

              {/* Shloka Input */}
              <textarea
                value={shlokaInput}
                onChange={(e) => setShlokaInput(e.target.value)}
                rows={2}
                placeholder="Paste any Sanskrit shloka..."
                className="w-full bg-[#241c14] border border-stone-700 rounded-xl px-4 py-3 text-base font-serif text-amber-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />

              {/* Curated Verse Quick Selector */}
              <div className="flex items-center gap-2 flex-wrap pt-1">
                <span className="text-[10px] font-mono uppercase text-stone-400 font-bold">CLASSIC VERSES:</span>
                {CURATED_SHLOKAS.map((c, cIdx) => (
                  <button
                    key={cIdx}
                    onClick={() => {
                      setShlokaInput(c.text);
                      runShlokaAnvaya(c.text);
                    }}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#271d15] hover:bg-[#34261c] border border-amber-800/40 text-amber-200 transition-colors cursor-pointer"
                  >
                    {c.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Shloka Analysis Steps Navigation */}
            {shlokaData && (
              <div className="space-y-6">
                {/* Stage Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-stone-800">
                  {[
                    { id: "verse" as const, label: "१. मूलश्लोकः (Verse)" },
                    { id: "padachheda" as const, label: "२. पदच्छेदः (Word Split)" },
                    { id: "matrix" as const, label: "३. पदपरिचय-सारणी (Grammar Matrix)" },
                    { id: "anvaya" as const, label: "४. अन्वय-क्रमः (Prose Syntax)" },
                    { id: "bhavartha" as const, label: "५. भावार्थः एवं छन्दः (Essence & Meter)" }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setAnvayaStep(s.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-serif font-bold transition-all cursor-pointer whitespace-nowrap ${
                        anvayaStep === s.id
                          ? "bg-amber-800 text-amber-100 border border-amber-500 shadow"
                          : "bg-[#18130e] text-stone-400 hover:text-white"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                {/* STEP 1: ORIGINAL VERSE */}
                {anvayaStep === "verse" && (
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-[#241910] via-[#1c130b] to-[#120d08] border border-amber-800/50 shadow-xl text-center space-y-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                      ORIGINAL SANSKRIT VERSE (मूलश्लोकः)
                    </div>
                    <div className="text-xl sm:text-3xl font-serif font-black text-amber-100 leading-relaxed max-w-3xl mx-auto">
                      {shlokaData.originalShloka}
                    </div>
                    <div className="flex items-center justify-center gap-3 pt-3">
                      <button
                        onClick={() => reciteSanskrit(shlokaData.originalShloka)}
                        className="px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-serif font-bold text-xs flex items-center gap-2 shadow"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>सस्वर-पठनम् (Listen with Meter)</span>
                      </button>
                      <button
                        onClick={() => setAnvayaStep("anvaya")}
                        className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-800 text-xs font-serif font-bold flex items-center gap-2"
                      >
                        <span>अन्वयं पश्यतु</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: PADACHHEDA */}
                {anvayaStep === "padachheda" && (
                  <div className="p-6 rounded-2xl bg-[#16120e] border border-stone-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-mono uppercase tracking-wider text-amber-300 font-bold">
                        पदच्छेदः (Word-by-Word Sandhi Isolation)
                      </h3>
                      <span className="text-xs font-mono text-stone-400">
                        Total words isolated: {shlokaData.padachheda.length}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {shlokaData.padachheda.map((word, wIdx) => (
                        <div
                          key={wIdx}
                          className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#2a1e15] to-[#1e150e] border border-amber-800/40 text-amber-200 font-serif font-bold text-sm shadow flex items-center gap-2"
                        >
                          <span className="text-[10px] text-amber-500/70 font-mono">#{wIdx + 1}</span>
                          <span>{word}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 3: MORPHOLOGICAL MATRIX */}
                {anvayaStep === "matrix" && (
                  <div className="p-6 rounded-2xl bg-[#16120e] border border-stone-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-mono uppercase tracking-wider text-amber-300 font-bold flex items-center gap-2">
                        <Layers className="w-4 h-4 text-amber-400" />
                        पदपरिचय-सारणी (Detailed Morpho-Syntactic Matrix)
                      </h3>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-stone-800 text-stone-400 font-mono">
                            <th className="py-2.5 px-3">पदम् (Word)</th>
                            <th className="py-2.5 px-3">मूल-प्रकृतिः (Stem/Root)</th>
                            <th className="py-2.5 px-3">व्याकरण-रूपम् (Morphological Tag)</th>
                            <th className="py-2.5 px-3">प्रसङ्गानुसार-अर्थः (Meaning)</th>
                            <th className="py-2.5 px-3">अन्वये स्थानम् (Syntactic Role)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-800/60 font-serif">
                          {shlokaData.wordMatrix.map((item, mIdx) => (
                            <tr key={mIdx} className="hover:bg-amber-950/20 transition-colors">
                              <td className="py-2.5 px-3 font-bold text-amber-200 text-sm">{item.word}</td>
                              <td className="py-2.5 px-3 text-stone-300">{item.rootOrStem}</td>
                              <td className="py-2.5 px-3 font-mono text-amber-400">{item.morphologicalTag}</td>
                              <td className="py-2.5 px-3 text-stone-200 italic">{item.meaningInContext}</td>
                              <td className="py-2.5 px-3 text-emerald-300 font-semibold">{item.syntacticRole}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* STEP 4: ANVAYA PROSE */}
                {anvayaStep === "anvaya" && (
                  <div className="p-6 rounded-2xl bg-[#18130e] border border-amber-900/40 space-y-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      अन्वय-क्रमः (Syntactic Prose Re-ordering)
                    </div>

                    <div className="p-5 rounded-xl bg-black/40 border border-amber-800/40 space-y-3">
                      <div className="text-base sm:text-xl font-serif font-black text-amber-100 leading-relaxed">
                        {shlokaData.anvayaOrderSanskrit}
                      </div>
                      <div className="pt-2 border-t border-stone-800 text-xs sm:text-sm text-stone-300 leading-relaxed italic">
                        <span className="font-bold text-amber-400 not-italic">Prose Translation: </span>
                        "{shlokaData.anvayaEnglishTranslation}"
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: BHAVARTHA & METER */}
                {anvayaStep === "bhavartha" && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-8 p-6 rounded-2xl bg-[#18130e] border border-amber-900/40 space-y-3">
                      <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        दार्शनिक-भावार्थः (Philosophical & Practical Essence)
                      </div>
                      <p className="text-sm font-serif text-stone-200 leading-relaxed">
                        {shlokaData.bhavarthaCommentary}
                      </p>
                      {shlokaData.alankara && (
                        <div className="pt-3 border-t border-stone-800 text-xs text-amber-300 font-serif">
                          <span className="font-bold text-stone-400 font-mono uppercase mr-2">अलंकारः:</span>
                          {shlokaData.alankara}
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-4 p-6 rounded-2xl bg-[#15110d] border border-stone-800 space-y-3">
                      <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold">
                        छन्दोलक्षणम् (Metrical Pattern)
                      </div>
                      <div className="text-base font-serif font-bold text-amber-200">
                        {shlokaData.chhandas.meterName}
                      </div>
                      <div className="text-xs font-mono text-stone-400">
                        {shlokaData.chhandas.syllableCount}
                      </div>
                      <div className="text-xs text-stone-300 bg-black/40 p-3 rounded-xl border border-stone-800/80 leading-relaxed">
                        {shlokaData.chhandas.yatiRules}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* 6. TAB 4: ADAPTIVE DRILLS & FLASHCARD ARENA (कण्ठस्थ & अभ्यासः) */}
        {activeTab === "drills" && (
          <div className="space-y-6">
            {/* Drill Category & Topic Header */}
            <div className="p-5 rounded-2xl bg-[#17120d] border border-amber-900/40 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-serif font-bold text-amber-200 flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-amber-400" />
                    कण्ठस्थ & अभ्यास-कौशलम् (Adaptive Drills Arena)
                  </h2>
                  <p className="text-xs text-stone-400">
                    Solve Paninian grammar challenges, case declensions, verbal conjugations, and earn XP streaks.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => runGenerateQuiz()}
                    disabled={isQuizLoading}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 text-white font-serif font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow"
                  >
                    <Shuffle className={`w-3.5 h-3.5 ${isQuizLoading ? "animate-spin" : ""}`} />
                    <span>Generate New Challenge</span>
                  </button>
                </div>
              </div>

              {/* Topic Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {[
                  "Vibhaktis & Karakas",
                  "Sandhi Rules",
                  "Lakar Conjugation (लट्, लङ्, लृट्)",
                  "Samasa Compounds",
                  "Krdanta & Taddhita Suffixes",
                  "Subhashita Wisdom Interpretation"
                ].map((topic) => (
                  <button
                    key={topic}
                    onClick={() => {
                      setDrillTopic(topic);
                      runGenerateQuiz();
                    }}
                    className={`text-xs font-serif font-bold px-3 py-1.5 rounded-lg whitespace-nowrap transition-all border cursor-pointer ${
                      drillTopic === topic
                        ? "bg-amber-800 text-amber-100 border-amber-500 shadow"
                        : "bg-[#221811] text-stone-400 hover:text-white border-stone-800"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Question Card */}
            {isQuizLoading ? (
              <div className="p-12 text-center text-amber-400 font-mono text-sm space-y-3">
                <RefreshCw className="w-8 h-8 animate-spin mx-auto text-amber-500" />
                <div>AI-Driven Question Engine crafting questions with Paninian sutras...</div>
              </div>
            ) : quizQuestions.length > 0 && currentQuestionIndex < quizQuestions.length ? (
              (() => {
                const q = quizQuestions[currentQuestionIndex];
                return (
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#16120e] border border-amber-900/40 shadow-xl space-y-6">
                    {/* Header: Question Progress */}
                    <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                      <span className="text-xs font-mono font-bold uppercase text-amber-400">
                        QUESTION {currentQuestionIndex + 1} OF {quizQuestions.length} • {drillTopic}
                      </span>
                      <span className="text-xs font-mono text-stone-400">
                        CURRENT SCORE: <strong className="text-amber-300">{quizScore} PTS</strong>
                      </span>
                    </div>

                    {/* Question Statement */}
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-2xl font-serif font-black text-amber-100 leading-snug">
                        {q.questionSanskrit}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-300 italic font-sans">
                        "{q.questionEnglish}"
                      </p>
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = selectedAnswer === optIdx;
                        const isCorrect = optIdx === q.correctIndex;
                        let optionStyle = "bg-[#221810] hover:bg-[#2d2015] border-stone-800 text-stone-200";

                        if (showAnswerResult) {
                          if (isCorrect) {
                            optionStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-md";
                          } else if (isSelected && !isCorrect) {
                            optionStyle = "bg-red-950/80 border-red-500 text-red-200 shadow-md";
                          }
                        } else if (isSelected) {
                          optionStyle = "bg-amber-800/80 border-amber-500 text-amber-100 ring-2 ring-amber-500/40";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={showAnswerResult}
                            onClick={() => setSelectedAnswer(optIdx)}
                            className={`p-4 rounded-xl text-left border transition-all font-serif font-bold text-sm flex items-center justify-between cursor-pointer ${optionStyle}`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-6 h-6 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-xs font-mono text-amber-400">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span>{opt}</span>
                            </div>

                            {showAnswerResult && isCorrect && (
                              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                            )}
                            {showAnswerResult && isSelected && !isCorrect && (
                              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Hint Box (if visible) */}
                    <div className="text-xs bg-black/40 p-3 rounded-xl border border-stone-800 text-stone-300 flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-400">संकेतः (Hint): </span>
                        {q.hint}
                      </div>
                    </div>

                    {/* Detailed Result & Paninian Sutra after check */}
                    {showAnswerResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-[#221911] border border-amber-800/50 space-y-2"
                      >
                        <div className="flex items-center gap-2">
                          {selectedAnswer === q.correctIndex ? (
                            <span className="text-emerald-400 font-bold text-xs flex items-center gap-1.5 font-mono">
                              <CheckCircle2 className="w-4 h-4" /> साधु! CORRECT (+20 XP)
                            </span>
                          ) : (
                            <span className="text-red-400 font-bold text-xs flex items-center gap-1.5 font-mono">
                              <AlertCircle className="w-4 h-4" /> अशुद्धम्। Review the Paninian rule below:
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-stone-200 font-serif leading-relaxed">
                          {q.paninianExplanation}
                        </p>
                        <div className="text-[11px] font-mono text-amber-400 pt-1">
                          सम्बद्ध-सूत्रम्: {q.relatedSutra}
                        </div>
                      </motion.div>
                    )}

                    {/* Bottom Action Button */}
                    <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-800">
                      {!showAnswerResult ? (
                        <button
                          disabled={selectedAnswer === null}
                          onClick={() => {
                            setShowAnswerResult(true);
                            if (selectedAnswer === q.correctIndex) {
                              setQuizScore((prev) => prev + 20);
                              setStudentXP((prev) => prev + 20);
                              sacredAudio.playTempleBell();
                            }
                          }}
                          className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-serif font-bold text-sm disabled:opacity-40 transition-all cursor-pointer shadow"
                        >
                          उत्तरं परीक्षताम् (Check Answer)
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setSelectedAnswer(null);
                            setShowAnswerResult(false);
                            setCurrentQuestionIndex((prev) => prev + 1);
                          }}
                          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 text-white font-serif font-bold text-sm flex items-center gap-2 transition-all cursor-pointer shadow"
                        >
                          <span>अग्रिम-प्रश्नः (Next Question)</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="p-8 rounded-2xl bg-[#16120e] border border-amber-800 text-center space-y-4">
                <Award className="w-12 h-12 text-yellow-400 mx-auto" />
                <h3 className="text-xl font-serif font-bold text-amber-200">
                  अभ्यास-सत्रं समाप्तम् (Challenge Completed!)
                </h3>
                <p className="text-sm text-stone-300">
                  You scored <strong className="text-amber-400">{quizScore} Points</strong> on {drillTopic}.
                </p>
                <button
                  onClick={() => runGenerateQuiz()}
                  className="px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-serif font-bold text-sm"
                >
                  पुनः अभ्यासं करोतु (Practice Again)
                </button>
              </div>
            )}
          </div>
        )}

        {/* 7. TAB 5: PANINI GURU Q&A / DOUBTS DESK (शङ्का-समाधानम्) */}
        {activeTab === "doubts" && (
          <div className="space-y-6">
            {/* Doubt Input & Query Box */}
            <div className="p-5 rounded-2xl bg-[#17120d] border border-amber-900/40 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-serif font-bold text-amber-200 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-amber-400" />
                    शङ्का-समाधानम् — Instant Paninian Grammar Clarification
                  </h2>
                  <p className="text-xs text-stone-400">
                    Ask any question about Panini's Ashtadhyayi, verb roots, declensions, compound words, or classical Sanskrit usage.
                  </p>
                </div>

                <button
                  onClick={() => runClarifyDoubt()}
                  disabled={isDoubtLoading || !doubtQuery.trim()}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 text-white font-serif font-bold text-sm flex items-center gap-2 transition-all cursor-pointer shadow disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isDoubtLoading ? "animate-spin" : ""}`} />
                  <span>{isDoubtLoading ? "समाधानं क्रियते..." : "शङ्कां निवारयतु (Ask Doubt)"}</span>
                </button>
              </div>

              {/* Input */}
              <input
                type="text"
                value={doubtQuery}
                onChange={(e) => setDoubtQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && runClarifyDoubt()}
                placeholder="Ask any doubt (e.g. 'Difference between क्त्वा and ल्यप्?', 'When to use चतुर्थी with नमः?')..."
                className="w-full bg-[#241c14] border border-stone-700 rounded-xl px-4 py-3 text-base font-serif text-amber-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />

              {/* Preset FAQs */}
              <div className="flex items-center gap-2 flex-wrap pt-1">
                <span className="text-[10px] font-mono uppercase text-stone-400 font-bold">FREQUENT DOUBTS:</span>
                {[
                  "क्त्वा एवं ल्यप् प्रत्यययोः मध्ये कः भेदः?",
                  "कर्मणि प्रयोगे (Passive Voice) क्रियापदं कथं भवति?",
                  "कदा चतुर्थी विभक्तिः भवति? (नमः, स्वस्ति)",
                  "परस्मैपदम् एवं आत्मनेपदम् मध्ये कः भेदः?"
                ].map((faq, fIdx) => (
                  <button
                    key={fIdx}
                    onClick={() => {
                      setDoubtQuery(faq);
                      runClarifyDoubt(faq);
                    }}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#271d15] hover:bg-[#34261c] border border-amber-800/40 text-amber-200 transition-colors cursor-pointer"
                  >
                    {faq}
                  </button>
                ))}
              </div>
            </div>

            {/* Answer Display */}
            {doubtResponse && (
              <div className="space-y-6">
                {/* Core Answer */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#241a12] via-[#1d150e] to-[#140e08] border border-amber-800/50 shadow-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-amber-400">
                      RESOLVED PANINIAN CLARIFICATION (निर्णयः)
                    </span>
                    <button
                      onClick={() => reciteSanskrit(doubtResponse.coreAnswerDevanagari)}
                      className="px-3 py-1.5 rounded-lg bg-amber-950 hover:bg-amber-900 border border-amber-700 text-amber-300 text-xs font-serif font-bold flex items-center gap-1.5"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Listen</span>
                    </button>
                  </div>

                  <div className="text-lg font-serif font-bold text-amber-100 leading-relaxed">
                    {doubtResponse.coreAnswerDevanagari}
                  </div>
                  <div className="text-xs text-stone-300 bg-black/40 p-3 rounded-xl border border-stone-800 leading-relaxed">
                    <strong className="text-amber-400">Explanation: </strong>
                    {doubtResponse.coreAnswerEnglish}
                  </div>
                </div>

                {/* Paninian Sutras cited */}
                <div className="p-6 rounded-2xl bg-[#16120e] border border-stone-800 space-y-4">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-amber-300 font-bold flex items-center gap-2">
                    <Feather className="w-4 h-4 text-amber-400" />
                    सूत्र-प्रमाणम् (Ashtadhyayi Canonical Authority)
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {doubtResponse.paninianSutras.map((sutra: any, sIdx: number) => (
                      <div key={sIdx} className="p-4 rounded-xl bg-[#221811] border border-amber-800/40 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-amber-400 font-bold">
                            अष्टाध्यायी सूत्रम् {sutra.sutraNumber}
                          </span>
                        </div>
                        <div className="font-serif font-black text-amber-200 text-base">
                          {sutra.sutraText}
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          {sutra.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Worked Examples */}
                <div className="p-6 rounded-2xl bg-[#16120e] border border-stone-800 space-y-4">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-amber-300 font-bold">
                    उदाहरणात्मकम् (Comparative Worked Examples)
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {doubtResponse.workedExamples.map((ex: any, eIdx: number) => (
                      <div key={eIdx} className="p-4 rounded-xl bg-[#1f1610] border border-stone-800 space-y-2">
                        <div className="font-serif font-bold text-amber-200 text-sm">
                          {ex.sanskrit}
                        </div>
                        <div className="text-[11px] font-mono text-amber-400/80 italic">
                          {ex.iast}
                        </div>
                        <div className="text-xs text-stone-300">
                          "{ex.english}"
                        </div>
                        <div className="text-[11px] font-mono text-stone-400 pt-2 border-t border-stone-800">
                          {ex.grammaticalBreakdown}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Mistakes & Mnemonic */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#18130e] border border-stone-800 space-y-2">
                    <div className="text-xs font-mono font-bold text-red-400 uppercase">
                      COMMON PITFALLS TO AVOID (सावधानता)
                    </div>
                    <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside">
                      {doubtResponse.commonMistakesToAvoid.map((mistake: string, mIdx: number) => (
                        <li key={mIdx}>{mistake}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#18130e] border border-amber-900/40 space-y-2">
                    <div className="text-xs font-mono font-bold text-amber-400 uppercase">
                      MNEMONIC / CLASSIC APHORISM
                    </div>
                    <div className="text-sm font-serif font-bold text-amber-200 p-3 bg-black/40 rounded-xl border border-stone-800">
                      "{doubtResponse.mnemonicOrClassicQuote}"
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 8. TAB 6: CERTIFICATION OF MASTERY (दक्षता-प्रमाणपत्रम्) */}
        {activeTab === "certificate" && (
          <div className="space-y-6">
            <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-b from-[#241a12] via-[#1c140d] to-[#120d09] border-2 border-amber-500/60 shadow-2xl space-y-6 text-center relative overflow-hidden">
              {/* Outer decorative golden border frame */}
              <div className="absolute inset-2 border border-amber-500/20 rounded-2xl pointer-events-none"></div>

              {/* Certificate Seal */}
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-[#1c130b] flex items-center justify-center text-yellow-400">
                  <Award className="w-8 h-8" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono tracking-widest text-amber-400 uppercase font-bold">
                  GRANTH BHARATIYA JNANA-PARAMPARA ACADEMY
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif font-black text-amber-100 tracking-wide">
                  संस्कृत-दक्षता-प्रमाणपत्रम्
                </h2>
                <div className="text-sm font-serif text-stone-300 italic">
                  Certificate of Paninian Sanskrit Competency
                </div>
              </div>

              {/* Student Name */}
              <div className="py-4 border-y border-amber-800/60 max-w-xl mx-auto space-y-1">
                <div className="text-xs font-mono text-stone-400 uppercase">
                  THIS HONORS DIPLOMA IS CONFERRED UPON
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-black text-amber-200">
                  {studentName}
                </div>
                <div className="text-xs text-stone-300">
                  for demonstrating scholarly proficiency in <strong>{LEVEL_META[activeLevel].label}</strong>
                </div>
              </div>

              {/* Skills Achieved */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-left">
                {[
                  { title: "कारक-सम्बन्धः", desc: "Case syntax mastery" },
                  { title: "तिङन्त-रूपाणि", desc: "10 Lakara verbs" },
                  { title: "सन्धि-विधानम्", desc: "Phonetic sandhi" },
                  { title: "श्लोक-अन्वयः", desc: "Prose reconstruction" }
                ].map((sk, skIdx) => (
                  <div key={skIdx} className="p-3 rounded-xl bg-black/40 border border-stone-800 text-center">
                    <div className="font-serif font-bold text-amber-200 text-xs">{sk.title}</div>
                    <div className="text-[10px] text-stone-400">{sk.desc}</div>
                  </div>
                ))}
              </div>

              {/* Metrics & Signature */}
              <div className="flex flex-col sm:flex-row items-center justify-between max-w-xl mx-auto text-xs text-stone-400 font-mono pt-4 border-t border-stone-800/80 gap-4">
                <div>
                  DATE: {new Date().toLocaleDateString()}
                </div>
                <div>
                  EARNED XP: <strong className="text-amber-300">{studentXP} PTS</strong>
                </div>
                <div className="text-amber-400 font-serif font-bold">
                  मुद्रा: अष्टाध्यायी-पीठम्
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-serif font-bold text-xs flex items-center gap-2 shadow cursor-pointer"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>मुद्र्यताम् (Print Certificate)</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
