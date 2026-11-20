import { useState, useMemo } from "react";
import { 
  GraduationCap, 
  BookOpen, 
  Building2, 
  Cpu, 
  Award, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Globe2, 
  Volume2, 
  VolumeX, 
  HelpCircle,
  Library,
  Layers,
  MapPin,
  FileText,
  RotateCcw,
  Check,
  Copy,
  ChevronRight,
  School,
  Split,
  Binary
} from "lucide-react";
import { 
  CSU_REGULATORY_PROFILE, 
  CSU_COURSES, 
  CSU_CAMPUSES, 
  SHABDA_ROOPA_CORPUS, 
  DHATU_ROOPA_CORPUS, 
  SANDHI_RULES_CORPUS, 
  CHHANDAS_METERS_CORPUS, 
  AMARAKOSHA_LEXICON, 
  CSU_PUBLICATIONS, 
  CSU_OLYMPIAD_QUESTIONS,
  CSUCourse,
  ShabdaRoopaItem,
  DhatuRoopaItem,
  SandhiRule,
  ChhandasMeter
} from "../data/csuSanskritNicData";

interface CentralSanskritUniversityStudioProps {
  onNavigateToTab?: (tabId: string) => void;
}

export default function CentralSanskritUniversityStudio({ onNavigateToTab }: CentralSanskritUniversityStudioProps) {
  const [activeMainTab, setActiveMainTab] = useState<"tools" | "courses" | "campuses" | "publications" | "olympiad">("tools");
  
  // Computational Tools sub-state
  const [activeTool, setActiveTool] = useState<"shabda" | "dhatu" | "sandhi" | "chhandas" | "lexicon">("shabda");
  
  // Shabda Roopa state
  const [selectedShabda, setSelectedShabda] = useState<ShabdaRoopaItem>(SHABDA_ROOPA_CORPUS[0]);
  const [shabdaGenderFilter, setShabdaGenderFilter] = useState<string>("All");
  const [copiedCell, setCopiedCell] = useState<string | null>(null);

  // Dhatu Roopa state
  const [selectedDhatu, setSelectedDhatu] = useState<DhatuRoopaItem>(DHATU_ROOPA_CORPUS[0]);
  const [selectedLakaraIdx, setSelectedLakaraIdx] = useState<number>(0);

  // Sandhi state
  const [selectedSandhiRule, setSelectedSandhiRule] = useState<SandhiRule>(SANDHI_RULES_CORPUS[0]);
  const [customWord1, setCustomWord1] = useState<string>("हिम");
  const [customWord2, setCustomWord2] = useState<string>("आलयः");

  // Chhandas state
  const [selectedMeter, setSelectedMeter] = useState<ChhandasMeter>(CHHANDAS_METERS_CORPUS[0]);

  // Amarakosha state
  const [lexiconSearch, setLexiconSearch] = useState<string>("");

  // Courses state
  const [courseLevelFilter, setCourseLevelFilter] = useState<string>("All");
  const [courseSearch, setCourseSearch] = useState<string>("");

  // Campuses state
  const [campusSearch, setCampusSearch] = useState<string>("");
  const [selectedCampusState, setSelectedCampusState] = useState<string>("All");

  // Olympiad state
  const [olympiadAnswers, setOlympiadAnswers] = useState<Record<number, number>>({});
  const [olympiadSubmitted, setOlympiadSubmitted] = useState<boolean>(false);

  // Speech synthesis for Sanskrit recitation
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const speakText = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    if (isSpeaking) {
      setIsSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "sa-IN";
    utterance.rate = 0.85;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCell(id);
    setTimeout(() => setCopiedCell(null), 1500);
  };

  // Filtered lists
  const filteredShabdas = useMemo(() => {
    if (shabdaGenderFilter === "All") return SHABDA_ROOPA_CORPUS;
    return SHABDA_ROOPA_CORPUS.filter(s => s.gender === shabdaGenderFilter);
  }, [shabdaGenderFilter]);

  const filteredCourses = useMemo(() => {
    return CSU_COURSES.filter(c => {
      const matchesLevel = courseLevelFilter === "All" || c.level.toLowerCase().includes(courseLevelFilter.toLowerCase());
      const matchesSearch = !courseSearch || 
        c.title.toLowerCase().includes(courseSearch.toLowerCase()) ||
        c.sanskritTitle.toLowerCase().includes(courseSearch.toLowerCase()) ||
        c.overview.toLowerCase().includes(courseSearch.toLowerCase()) ||
        c.specializations.some(s => s.toLowerCase().includes(courseSearch.toLowerCase()));
      return matchesLevel && matchesSearch;
    });
  }, [courseLevelFilter, courseSearch]);

  const filteredCampuses = useMemo(() => {
    return CSU_CAMPUSES.filter(c => {
      const matchesState = selectedCampusState === "All" || c.state === selectedCampusState;
      const matchesSearch = !campusSearch ||
        c.name.toLowerCase().includes(campusSearch.toLowerCase()) ||
        c.hindiName.toLowerCase().includes(campusSearch.toLowerCase()) ||
        c.location.toLowerCase().includes(campusSearch.toLowerCase()) ||
        c.specialties.some(s => s.toLowerCase().includes(campusSearch.toLowerCase()));
      return matchesState && matchesSearch;
    });
  }, [selectedCampusState, campusSearch]);

  const uniqueCampusStates = useMemo(() => {
    return ["All", ...Array.from(new Set(CSU_CAMPUSES.map(c => c.state)))];
  }, []);

  const filteredLexicon = useMemo(() => {
    if (!lexiconSearch.trim()) return AMARAKOSHA_LEXICON;
    const q = lexiconSearch.toLowerCase();
    return AMARAKOSHA_LEXICON.filter(w => 
      w.word.toLowerCase().includes(q) ||
      w.stem.toLowerCase().includes(q) ||
      w.englishMeaning.toLowerCase().includes(q) ||
      w.synonyms.some(s => s.toLowerCase().includes(q))
    );
  }, [lexiconSearch]);

  // Olympiad Score calculation
  const olympiadScore = useMemo(() => {
    let score = 0;
    CSU_OLYMPIAD_QUESTIONS.forEach(q => {
      if (olympiadAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  }, [olympiadAnswers]);

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-6 space-y-6 text-stone-100">
      
      {/* 1. Master Portal Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1b1510] via-[#241a12] to-[#120e0a] border-2 border-amber-700/60 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-500/50 flex items-center justify-center text-amber-300 shadow-inner">
                <School className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800/80 font-bold">
                    CENTRAL UNIVERSITY • PARLIAMENT ACT NO. 5 OF 2020
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-900 text-stone-400 border border-stone-800">
                    NAAC 'A++' GRADE
                  </span>
                </div>
                <h1 className="text-xl sm:text-3xl font-black font-serif text-[#fdf4e3] tracking-tight mt-0.5">
                  केन्द्रीय संस्कृत विश्वविद्यालय • Central Sanskrit University
                </h1>
              </div>
            </div>

            <a 
              href="http://sanskrit.nic.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-950/80 hover:bg-amber-900/90 text-amber-200 border border-amber-700 text-xs font-mono font-bold transition-all shadow-md group cursor-pointer"
            >
              <span>sanskrit.nic.in Portal</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed max-w-4xl">
            Official statutory suite of standards, academic curricula, computational Sanskrit tools, and research monographs from India's apex institution for Sanskrit studies. Spanning 12 multi-state campuses, 184 affiliated institutions, the Mukta Swadhyaya Peetham (MSP) स्वाध्यायवेदी LMS distance platform, and the 2.2 million vocable Historical Sanskrit Encyclopedic Dictionary project.
          </p>

          {/* Quick Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2">
            <div className="bg-[#15100c]/90 p-3 rounded-2xl border border-stone-800/80">
              <div className="text-[10px] font-mono uppercase text-amber-400 font-bold">Campuses</div>
              <div className="text-xl font-bold font-serif text-white">{CSU_REGULATORY_PROFILE.totalCampuses} In 11 States</div>
              <div className="text-[10px] text-stone-400">Prayagraj, Puri, Sringeri, etc.</div>
            </div>
            <div className="bg-[#15100c]/90 p-3 rounded-2xl border border-stone-800/80">
              <div className="text-[10px] font-mono uppercase text-amber-400 font-bold">Affiliated Inst.</div>
              <div className="text-xl font-bold font-serif text-white">{CSU_REGULATORY_PROFILE.affiliatedInstitutions}+</div>
              <div className="text-[10px] text-stone-400">Adarsh Vidyapeethas</div>
            </div>
            <div className="bg-[#15100c]/90 p-3 rounded-2xl border border-stone-800/80">
              <div className="text-[10px] font-mono uppercase text-amber-400 font-bold">Rare Manuscripts</div>
              <div className="text-xl font-bold font-serif text-white">200,000+</div>
              <div className="text-[10px] text-stone-400">Palm-leaf & Birch-bark</div>
            </div>
            <div className="bg-[#15100c]/90 p-3 rounded-2xl border border-stone-800/80">
              <div className="text-[10px] font-mono uppercase text-amber-400 font-bold">Dictionary Scope</div>
              <div className="text-xl font-bold font-serif text-white">2.2 Million</div>
              <div className="text-[10px] text-stone-400">Vocables in 35 Volumes</div>
            </div>
            <div className="bg-[#15100c]/90 p-3 rounded-2xl border border-stone-800/80">
              <div className="text-[10px] font-mono uppercase text-amber-400 font-bold">Community Reach</div>
              <div className="text-xl font-bold font-serif text-white">1,000+ Centers</div>
              <div className="text-[10px] text-stone-400">NFSE Spoken Sanskrit</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-stone-800 pb-3">
        <button
          onClick={() => setActiveMainTab("tools")}
          className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-2 cursor-pointer border ${
            activeMainTab === "tools"
              ? "bg-gradient-to-r from-amber-700 to-amber-900 text-white border-amber-500 shadow-lg shadow-amber-950/60"
              : "bg-[#18130f] text-stone-300 hover:text-white hover:bg-[#221a14] border-stone-800"
          }`}
        >
          <Cpu className="w-4 h-4 text-amber-400" />
          <span>Computational Tools (संगणकीय उपकरणानि)</span>
          <span className="text-[9px] font-mono px-1 rounded bg-amber-950 text-amber-300 border border-amber-800">5 TOOLS</span>
        </button>

        <button
          onClick={() => setActiveMainTab("courses")}
          className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-2 cursor-pointer border ${
            activeMainTab === "courses"
              ? "bg-gradient-to-r from-amber-700 to-amber-900 text-white border-amber-500 shadow-lg shadow-amber-950/60"
              : "bg-[#18130f] text-stone-300 hover:text-white hover:bg-[#221a14] border-stone-800"
          }`}
        >
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <span>Courses & NEP 2020 (पाठ्यक्रम-सङ्ग्रहः)</span>
          <span className="text-[9px] font-mono px-1 rounded bg-amber-950 text-amber-300 border border-amber-800">UG / PG / ODL</span>
        </button>

        <button
          onClick={() => setActiveMainTab("campuses")}
          className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-2 cursor-pointer border ${
            activeMainTab === "campuses"
              ? "bg-gradient-to-r from-amber-700 to-amber-900 text-white border-amber-500 shadow-lg shadow-amber-950/60"
              : "bg-[#18130f] text-stone-300 hover:text-white hover:bg-[#221a14] border-stone-800"
          }`}
        >
          <Building2 className="w-4 h-4 text-amber-400" />
          <span>12 Campuses Network (द्वादश-परिसराः)</span>
          <span className="text-[9px] font-mono px-1 rounded bg-amber-950 text-amber-300 border border-amber-800">11 STATES</span>
        </button>

        <button
          onClick={() => setActiveMainTab("publications")}
          className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-2 cursor-pointer border ${
            activeMainTab === "publications"
              ? "bg-gradient-to-r from-amber-700 to-amber-900 text-white border-amber-500 shadow-lg shadow-amber-950/60"
              : "bg-[#18130f] text-stone-300 hover:text-white hover:bg-[#221a14] border-stone-800"
          }`}
        >
          <Library className="w-4 h-4 text-amber-400" />
          <span>Publications & 35-Vol Dictionary</span>
          <span className="text-[9px] font-mono px-1 rounded bg-amber-950 text-amber-300 border border-amber-800">JOURNALS</span>
        </button>

        <button
          onClick={() => setActiveMainTab("olympiad")}
          className={`px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-2 cursor-pointer border ${
            activeMainTab === "olympiad"
              ? "bg-gradient-to-r from-amber-700 to-amber-900 text-white border-amber-500 shadow-lg shadow-amber-950/60"
              : "bg-[#18130f] text-stone-300 hover:text-white hover:bg-[#221a14] border-stone-800"
          }`}
        >
          <Award className="w-4 h-4 text-amber-400" />
          <span>National Sanskrit Olympiad Simulator</span>
          <span className="text-[9px] font-mono px-1 rounded bg-amber-950 text-amber-300 border border-amber-800">TEST</span>
        </button>

        {onNavigateToTab && (
          <button
            onClick={() => onNavigateToTab("sanskrit_learning")}
            className="px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-2 cursor-pointer border bg-gradient-to-r from-emerald-900/60 via-teal-950 to-amber-950 text-emerald-200 border-emerald-600/70 hover:border-emerald-400 shadow-md ml-auto"
          >
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span>AI Sanskrit Learning Skills Studio</span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/30 text-emerald-200 border border-emerald-500/50 font-bold">
              AI TUTOR
            </span>
          </button>
        )}
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: COMPUTATIONAL SANSKRIT TOOLS */}
      {/* ========================================================================= */}
      {activeMainTab === "tools" && (
        <div className="space-y-6">
          {/* Sub-tool Selector Bar */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#14100c] border border-stone-800">
            <button
              onClick={() => setActiveTool("shabda")}
              className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTool === "shabda"
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-stone-400 hover:text-white hover:bg-stone-800/60"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>शब्दरूपसाधकम् (Shabda-Roopa Generator)</span>
            </button>
            <button
              onClick={() => setActiveTool("dhatu")}
              className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTool === "dhatu"
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-stone-400 hover:text-white hover:bg-stone-800/60"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>धातुरूपसाधकम् (Dhatu-Roopa Conjugator)</span>
            </button>
            <button
              onClick={() => setActiveTool("sandhi")}
              className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTool === "sandhi"
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-stone-400 hover:text-white hover:bg-stone-800/60"
              }`}
            >
              <Split className="w-3.5 h-3.5" />
              <span>सन्धि-विश्लेषकम् (Sandhi Rule Engine)</span>
            </button>
            <button
              onClick={() => setActiveTool("chhandas")}
              className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTool === "chhandas"
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-stone-400 hover:text-white hover:bg-stone-800/60"
              }`}
            >
              <Binary className="w-3.5 h-3.5" />
              <span>छन्दोलक्षणज्ञः (Chhandas Meter Scanner)</span>
            </button>
            <button
              onClick={() => setActiveTool("lexicon")}
              className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTool === "lexicon"
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-stone-400 hover:text-white hover:bg-stone-800/60"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>अमरकोशः & Lexicon (Amarakosha Synsets)</span>
            </button>
          </div>

          {/* SUB-TOOL 1: SHABDA-ROOPA GENERATOR */}
          {activeTool === "shabda" && (
            <div className="bg-[#14100c] border border-stone-800 rounded-3xl p-5 space-y-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-stone-800/80 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <h3 className="text-base font-serif font-black text-amber-300">
                      शब्दरूपसाधकम् • Subanta Morphological Declension Generator
                    </h3>
                  </div>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Generates all 21 nominal endings across 7 Vibhaktis (Prathama to Saptami) plus Sambodhana for masculine, feminine, neuter, and pronominal stems according to Paninian Sup-pratyayas.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-400 font-mono">Gender:</span>
                  <div className="flex gap-1 bg-[#1a140f] p-1 rounded-xl border border-stone-800">
                    {["All", "Masculine", "Feminine", "Neuter", "Pronoun"].map(g => (
                      <button
                        key={g}
                        onClick={() => setShabdaGenderFilter(g)}
                        className={`px-2 py-0.5 rounded-lg text-[10px] font-mono cursor-pointer transition-all ${
                          shabdaGenderFilter === g ? "bg-amber-600 text-white font-bold" : "text-stone-400 hover:text-stone-200"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stem Selectors */}
              <div className="flex flex-wrap gap-2">
                {filteredShabdas.map(s => (
                  <button
                    key={s.stem}
                    onClick={() => setSelectedShabda(s)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-serif cursor-pointer transition-all flex items-center gap-2 ${
                      selectedShabda.stem === s.stem
                        ? "bg-amber-900/90 text-amber-100 border-amber-500 shadow-md ring-1 ring-amber-500/50"
                        : "bg-[#1d1712] text-stone-300 border-stone-800 hover:bg-[#251e18]"
                    }`}
                  >
                    <span className="font-bold">{s.devanagari}</span>
                    <span className="text-[10px] font-mono text-stone-400">({s.stem})</span>
                    <span className="text-[9px] px-1 rounded bg-black/40 text-amber-300 border border-amber-900/50">
                      {s.gender}
                    </span>
                  </button>
                ))}
              </div>

              {/* Selected Shabda Detail Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-[#1c1611] p-3.5 rounded-2xl border border-amber-900/50">
                <div className="space-y-0.5">
                  <div className="text-lg font-serif font-black text-amber-200 flex items-center gap-2">
                    <span>{selectedShabda.devanagari} शब्दः</span>
                    <span className="text-xs font-sans text-stone-400 font-normal">({selectedShabda.ending})</span>
                  </div>
                  <div className="text-xs text-stone-300 font-sans">
                    Meaning: <span className="text-amber-100 font-serif italic">{selectedShabda.meaning}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => speakText(`${selectedShabda.devanagari} शब्दरूपाणि: ${selectedShabda.forms.map(f => `${f.singular}, ${f.dual}, ${f.plural}`).join(". ")}`)}
                    className="px-3 py-1.5 rounded-xl bg-amber-950 hover:bg-amber-900 text-amber-300 border border-amber-800 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    <span>{isSpeaking ? "Stop Chanting" : "Recite All Vibhaktis"}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = selectedShabda.forms.map(f => `${f.vibhaktiDev}: ${f.singular}\t${f.dual}\t${f.plural}`).join("\n");
                      copyToClipboard(text, "all_shabda");
                    }}
                    className="px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    {copiedCell === "all_shabda" ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCell === "all_shabda" ? "Copied!" : "Copy Table"}</span>
                  </button>
                </div>
              </div>

              {/* Shabda Roopa Table */}
              <div className="overflow-x-auto rounded-2xl border border-stone-800">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#221a13] text-amber-300 font-serif border-b border-stone-800">
                      <th className="py-2.5 px-3 border-r border-stone-800">विभक्तिः (Vibhakti Case)</th>
                      <th className="py-2.5 px-3 border-r border-stone-800">एकवचनम् (Singular)</th>
                      <th className="py-2.5 px-3 border-r border-stone-800">द्विवचनम् (Dual)</th>
                      <th className="py-2.5 px-3">बहुवचनम् (Plural)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedShabda.forms.map((row, idx) => (
                      <tr 
                        key={row.vibhakti}
                        className={`border-b border-stone-800/60 hover:bg-[#1f1812] transition-colors ${
                          idx % 2 === 0 ? "bg-[#16120e]" : "bg-[#130f0c]"
                        }`}
                      >
                        <td className="py-2.5 px-3 border-r border-stone-800 font-serif font-bold text-amber-400/90 whitespace-nowrap">
                          <div>{row.vibhaktiDev}</div>
                          <div className="text-[10px] text-stone-400 font-sans font-normal">{row.vibhakti}</div>
                        </td>
                        <td 
                          onClick={() => copyToClipboard(row.singular, `cell-s-${idx}`)}
                          className="py-2.5 px-3 border-r border-stone-800 font-serif font-black text-amber-100 text-sm cursor-pointer hover:text-amber-300"
                        >
                          <div className="flex items-center justify-between">
                            <span>{row.singular}</span>
                            {copiedCell === `cell-s-${idx}` && <Check className="w-3 h-3 text-green-400" />}
                          </div>
                        </td>
                        <td 
                          onClick={() => copyToClipboard(row.dual, `cell-d-${idx}`)}
                          className="py-2.5 px-3 border-r border-stone-800 font-serif font-black text-amber-100 text-sm cursor-pointer hover:text-amber-300"
                        >
                          <div className="flex items-center justify-between">
                            <span>{row.dual}</span>
                            {copiedCell === `cell-d-${idx}` && <Check className="w-3 h-3 text-green-400" />}
                          </div>
                        </td>
                        <td 
                          onClick={() => copyToClipboard(row.plural, `cell-p-${idx}`)}
                          className="py-2.5 px-3 font-serif font-black text-amber-100 text-sm cursor-pointer hover:text-amber-300"
                        >
                          <div className="flex items-center justify-between">
                            <span>{row.plural}</span>
                            {copiedCell === `cell-p-${idx}` && <Check className="w-3 h-3 text-green-400" />}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SUB-TOOL 2: DHATU-ROOPA CONJUGATOR */}
          {activeTool === "dhatu" && (
            <div className="bg-[#14100c] border border-stone-800 rounded-3xl p-5 space-y-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-stone-800/80 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <h3 className="text-base font-serif font-black text-cyan-300">
                      धातुरूपसाधकम् • Tinganta Verbal Conjugation Engine
                    </h3>
                  </div>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Computes verb conjugation across all 10 Lakaras, 3 Purushas (Prathama, Madhyama, Uttama), and 3 Vachanas based on Paninian Ting-pratyayas.
                  </p>
                </div>
              </div>

              {/* Dhatu Selectors */}
              <div className="flex flex-wrap gap-2">
                {DHATU_ROOPA_CORPUS.map(d => (
                  <button
                    key={d.dhatu}
                    onClick={() => {
                      setSelectedDhatu(d);
                      setSelectedLakaraIdx(0);
                    }}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-serif cursor-pointer transition-all flex items-center gap-2 ${
                      selectedDhatu.dhatu === d.dhatu
                        ? "bg-cyan-950 text-cyan-100 border-cyan-500 shadow-md ring-1 ring-cyan-500/50"
                        : "bg-[#1d1712] text-stone-300 border-stone-800 hover:bg-[#251e18]"
                    }`}
                  >
                    <span className="font-bold">{d.devanagari}</span>
                    <span className="text-[10px] font-mono text-stone-400">({d.gana})</span>
                    <span className="text-[9px] px-1 rounded bg-black/40 text-cyan-300 border border-cyan-900/50">
                      {d.pada}
                    </span>
                  </button>
                ))}
              </div>

              {/* Lakara Selector Tabs */}
              <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-[#1c1611] border border-stone-800">
                {selectedDhatu.forms.map((form, idx) => (
                  <button
                    key={form.lakara}
                    onClick={() => setSelectedLakaraIdx(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-serif cursor-pointer transition-all ${
                      selectedLakaraIdx === idx
                        ? "bg-cyan-800 text-white font-bold shadow-md"
                        : "text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    <div>{form.lakara.split(" - ")[0]}</div>
                    <div className="text-[9px] font-sans text-stone-300 opacity-80">{form.lakara.split(" - ")[1] || ""}</div>
                  </button>
                ))}
              </div>

              {/* Active Lakara Table */}
              {selectedDhatu.forms[selectedLakaraIdx] && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-300">
                    <span className="font-serif text-cyan-300 font-bold">
                      {selectedDhatu.forms[selectedLakaraIdx].lakaraDesc}
                    </span>
                    <button
                      onClick={() => speakText(
                        selectedDhatu.forms[selectedLakaraIdx].rows.map(r => `${r.purushaDev}: ${r.singular}, ${r.dual}, ${r.plural}`).join(". ")
                      )}
                      className="px-2.5 py-1 rounded-lg bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 text-[10px] font-mono flex items-center gap-1 cursor-pointer"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>Recite Verb Forms</span>
                    </button>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-stone-800">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-[#1c1712] text-cyan-300 font-serif border-b border-stone-800">
                          <th className="py-2.5 px-3 border-r border-stone-800">पुरुषः (Person)</th>
                          <th className="py-2.5 px-3 border-r border-stone-800">एकवचनम् (Singular)</th>
                          <th className="py-2.5 px-3 border-r border-stone-800">द्विवचनम् (Dual)</th>
                          <th className="py-2.5 px-3">बहुवचनम् (Plural)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedDhatu.forms[selectedLakaraIdx].rows.map((row, idx) => (
                          <tr 
                            key={row.purusha}
                            className={`border-b border-stone-800/60 hover:bg-[#1b1915] ${
                              idx % 2 === 0 ? "bg-[#15120e]" : "bg-[#120f0c]"
                            }`}
                          >
                            <td className="py-2.5 px-3 border-r border-stone-800 font-serif font-bold text-cyan-400">
                              <div>{row.purushaDev}</div>
                              <div className="text-[10px] text-stone-400 font-sans font-normal">{row.purusha}</div>
                            </td>
                            <td className="py-2.5 px-3 border-r border-stone-800 font-serif font-black text-stone-100 text-sm">
                              {row.singular}
                            </td>
                            <td className="py-2.5 px-3 border-r border-stone-800 font-serif font-black text-stone-100 text-sm">
                              {row.dual}
                            </td>
                            <td className="py-2.5 px-3 font-serif font-black text-stone-100 text-sm">
                              {row.plural}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SUB-TOOL 3: SANDHI ANALYZER */}
          {activeTool === "sandhi" && (
            <div className="bg-[#14100c] border border-stone-800 rounded-3xl p-5 space-y-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-stone-800/80 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <h3 className="text-base font-serif font-black text-emerald-300">
                      सन्धि-विश्लेषकम् • Paninian Sandhi Rule Engine & Splitter
                    </h3>
                  </div>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Interactive morphophonemic analysis showing exact Ashtadhyayi sutras, condition checking, and phonological transformations for Svara, Vyanjana, and Visarga sandhis.
                  </p>
                </div>
              </div>

              {/* Sandhi Rule Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {SANDHI_RULES_CORPUS.map(rule => (
                  <button
                    key={rule.id}
                    onClick={() => {
                      setSelectedSandhiRule(rule);
                      if (rule.examples[0]) {
                        setCustomWord1(rule.examples[0].word1);
                        setCustomWord2(rule.examples[0].word2);
                      }
                    }}
                    className={`text-left p-3 rounded-2xl border transition-all cursor-pointer ${
                      selectedSandhiRule.id === rule.id
                        ? "bg-emerald-950/80 border-emerald-500 text-emerald-100 shadow-md ring-1 ring-emerald-500/40"
                        : "bg-[#1a140f] border-stone-800 hover:bg-[#221a14] text-stone-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-xs text-stone-100">{rule.sanskritName}</span>
                      <span className="text-[9px] font-mono px-1 rounded bg-black/50 text-emerald-300 border border-emerald-800/60">
                        {rule.category}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-emerald-400/90 mt-1">{rule.sutra}</div>
                  </button>
                ))}
              </div>

              {/* Active Sandhi Rule Breakdown */}
              <div className="bg-[#1b1510] p-4 rounded-2xl border border-emerald-900/60 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-stone-800 pb-3">
                  <div>
                    <h4 className="text-sm font-serif font-black text-emerald-300 flex items-center gap-2">
                      <span>{selectedSandhiRule.sanskritName} ({selectedSandhiRule.name})</span>
                    </h4>
                    <span className="text-xs font-mono text-amber-300">
                      पाणिनीय-सूत्रम्: {selectedSandhiRule.sutra}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                    {selectedSandhiRule.category} Sandhi
                  </span>
                </div>

                <p className="text-xs text-stone-300 font-sans leading-relaxed">
                  {selectedSandhiRule.explanation}
                </p>

                {/* Example Pills */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase text-stone-400 font-bold">Canonical Examples:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {selectedSandhiRule.examples.map((ex, i) => (
                      <div 
                        key={i} 
                        onClick={() => {
                          setCustomWord1(ex.word1);
                          setCustomWord2(ex.word2);
                        }}
                        className="p-2.5 rounded-xl bg-black/40 border border-stone-800 hover:border-emerald-700/80 cursor-pointer transition-all"
                      >
                        <div className="font-serif font-black text-amber-200 text-sm">
                          {ex.word1} + {ex.word2}
                        </div>
                        <div className="text-xs font-serif font-bold text-emerald-400 mt-0.5">
                          = {ex.combined}
                        </div>
                        <div className="text-[10px] font-mono text-stone-400 mt-0.5">
                          {ex.breakdown}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SUB-TOOL 4: CHHANDAS METER SCANNER */}
          {activeTool === "chhandas" && (
            <div className="bg-[#14100c] border border-stone-800 rounded-3xl p-5 space-y-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-stone-800/80 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping" />
                    <h3 className="text-base font-serif font-black text-fuchsia-300">
                      छन्दोलक्षणज्ञः • Sanskrit Metrical Prosody & Yati Identifier
                    </h3>
                  </div>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Metrical scanner identifying Anushtubh, Indravajra, Vasantatilaka, Mandakranta, and Shardulavikridita with Laghu (।) and Guru (ऽ) syllabic weight sequences.
                  </p>
                </div>
              </div>

              {/* Meter Selector Buttons */}
              <div className="flex flex-wrap gap-2">
                {CHHANDAS_METERS_CORPUS.map(meter => (
                  <button
                    key={meter.name}
                    onClick={() => setSelectedMeter(meter)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-serif cursor-pointer transition-all flex items-center gap-2 ${
                      selectedMeter.name === meter.name
                        ? "bg-fuchsia-950 text-fuchsia-100 border-fuchsia-500 shadow-md ring-1 ring-fuchsia-500/50"
                        : "bg-[#1d1712] text-stone-300 border-stone-800 hover:bg-[#251e18]"
                    }`}
                  >
                    <span className="font-bold">{meter.devanagari}</span>
                    <span className="text-[10px] font-mono text-stone-400">({meter.syllablesPerPada} Syllables/Pada)</span>
                  </button>
                ))}
              </div>

              {/* Selected Meter Details */}
              <div className="bg-[#1c151b] p-4 rounded-2xl border border-fuchsia-900/60 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-stone-800 pb-3">
                  <div>
                    <h4 className="text-base font-serif font-black text-fuchsia-300">
                      {selectedMeter.devanagari} ({selectedMeter.name})
                    </h4>
                    <div className="text-xs font-serif text-amber-200 mt-0.5">
                      लक्षणम्: {selectedMeter.lakshanaSanskrit}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-fuchsia-950 text-fuchsia-300 border border-fuchsia-800">
                      {selectedMeter.syllablesPerPada} अक्षराणि प्रतिपादम्
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/40 text-stone-300 border border-stone-700">
                      यतिः: {selectedMeter.yati}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-stone-800">
                  <div className="text-[10px] font-mono text-stone-400 uppercase font-bold mb-1">
                    Syllable Pattern (Laghu । / Guru ऽ):
                  </div>
                  <div className="font-mono text-sm font-bold text-amber-300 tracking-wider">
                    {selectedMeter.pattern}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-stone-400 uppercase font-bold flex items-center justify-between">
                    <span>Classical Exemplar Shloka:</span>
                    <button
                      onClick={() => speakText(selectedMeter.exampleShloka)}
                      className="text-fuchsia-400 hover:text-fuchsia-300 flex items-center gap-1 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Listen to Metrical Chanting</span>
                    </button>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#140e13] border border-fuchsia-900/40 font-serif text-amber-100 text-sm whitespace-pre-line leading-relaxed shadow-inner">
                    {selectedMeter.exampleShloka}
                  </div>
                  <p className="text-xs text-stone-400 font-sans italic pt-1">
                    "{selectedMeter.exampleTranslation}"
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SUB-TOOL 5: AMARAKOSHA & LEXICON */}
          {activeTool === "lexicon" && (
            <div className="bg-[#14100c] border border-stone-800 rounded-3xl p-5 space-y-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-stone-800/80 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <h3 className="text-base font-serif font-black text-amber-300">
                      अमरकोशः • Amarasimha's Classical Synonymic Thesaurus
                    </h3>
                  </div>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Explore categorical Sanskrit synsets, gender classifications, and original metrical verses from the Namalinganushasana.
                  </p>
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={lexiconSearch}
                    onChange={(e) => setLexiconSearch(e.target.value)}
                    placeholder="Search words (e.g. Surya, Agni, Water)..."
                    className="w-full bg-black/60 border border-stone-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-stone-200 placeholder-stone-500 outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Lexicon Synset Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredLexicon.map(item => (
                  <div 
                    key={item.word}
                    className="bg-[#1a140f] p-4 rounded-2xl border border-stone-800 hover:border-amber-800/80 transition-all space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-serif font-black text-amber-200">{item.stem}</span>
                        <span className="text-xs font-mono text-stone-400">({item.word})</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                          {item.gender}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/50 text-stone-400 border border-stone-800">
                          {item.varga}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-300 font-sans">
                      {item.englishMeaning}
                    </p>

                    <div className="space-y-1">
                      <div className="text-[9px] font-mono uppercase text-stone-400 font-bold">Synonym Cluster (पर्यायाः):</div>
                      <div className="flex flex-wrap gap-1">
                        {item.synonyms.map(syn => (
                          <span 
                            key={syn}
                            onClick={() => speakText(syn)}
                            className="px-2 py-0.5 rounded-lg bg-black/40 hover:bg-amber-950 text-amber-300 hover:text-amber-100 border border-stone-800 hover:border-amber-700 text-xs font-serif cursor-pointer transition-all"
                          >
                            {syn}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-stone-800/80">
                      <div className="text-[9px] font-mono text-stone-400 mb-0.5">अमरकोश-श्लोकः ({item.kanda}):</div>
                      <div className="text-xs font-serif text-amber-100/90 italic">
                        {item.shlokaReference}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 2: COURSES & NEP 2020 CURRICULUM */}
      {/* ========================================================================= */}
      {activeMainTab === "courses" && (
        <div className="space-y-5">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-[#14100c] p-4 rounded-2xl border border-stone-800">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-stone-400 font-mono mr-1">Academic Stream:</span>
              {["All", "Prak-Shastri", "Shastri", "Acharya", "MSP", "NFSE"].map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setCourseLevelFilter(lvl)}
                  className={`px-3 py-1 rounded-xl text-xs font-serif cursor-pointer transition-all ${
                    courseLevelFilter === lvl 
                      ? "bg-amber-700 text-white font-bold shadow-md" 
                      : "bg-[#1c1611] text-stone-300 border border-stone-800 hover:bg-[#251e18]"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={courseSearch}
                onChange={(e) => setCourseSearch(e.target.value)}
                placeholder="Search syllabi & specializations..."
                className="w-full bg-black/60 border border-stone-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-stone-200 placeholder-stone-500 outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Courses List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCourses.map(course => (
              <div 
                key={course.id}
                className="bg-[#14100c] border border-stone-800 hover:border-amber-700/70 rounded-3xl p-5 transition-all shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800 font-bold">
                        {course.level} • {course.duration}
                      </span>
                      <h3 className="text-base font-serif font-black text-[#fdf4e3] mt-1.5">
                        {course.title}
                      </h3>
                      <div className="text-xs font-serif text-amber-300/90">
                        {course.sanskritTitle}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-stone-300 font-sans leading-relaxed">
                    {course.overview}
                  </p>

                  <div className="space-y-1.5 bg-[#1a140f] p-3 rounded-2xl border border-stone-800/80">
                    <div className="text-[10px] font-mono text-amber-400 font-bold uppercase">
                      Specializations & Branches:
                    </div>
                    <ul className="text-xs text-stone-300 space-y-1 pl-2">
                      {course.specializations.map((spec, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-500 mt-1">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-stone-400 uppercase font-bold">
                      Key Curriculum Elements:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {course.curriculumHighlights.map((hl, i) => (
                        <span key={i} className="text-[10px] font-sans px-2 py-0.5 rounded-lg bg-black/40 text-stone-300 border border-stone-800">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                  <span>Eligibility: {course.eligibility}</span>
                  <span className="text-amber-400 font-bold">{course.nepCredits}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3: 12 CAMPUSES NETWORK */}
      {/* ========================================================================= */}
      {activeMainTab === "campuses" && (
        <div className="space-y-5">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-[#14100c] p-4 rounded-2xl border border-stone-800">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-stone-400 font-mono mr-1">State:</span>
              {uniqueCampusStates.map(state => (
                <button
                  key={state}
                  onClick={() => setSelectedCampusState(state)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-serif cursor-pointer transition-all ${
                    selectedCampusState === state 
                      ? "bg-amber-700 text-white font-bold" 
                      : "bg-[#1c1611] text-stone-300 border border-stone-800 hover:bg-[#251e18]"
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={campusSearch}
                onChange={(e) => setCampusSearch(e.target.value)}
                placeholder="Search campus or specialty..."
                className="w-full bg-black/60 border border-stone-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-stone-200 placeholder-stone-500 outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Campus Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCampuses.map(campus => (
              <div 
                key={campus.id}
                className="bg-[#14100c] border border-stone-800 hover:border-amber-700/80 rounded-3xl p-5 transition-all shadow-xl space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800 font-bold">
                      ESTD. {campus.established}
                    </span>
                    <span className="text-[10px] font-mono text-stone-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-red-400" />
                      {campus.state}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-black text-[#fdf4e3]">
                    {campus.name}
                  </h3>
                  <div className="text-xs font-serif text-amber-300">
                    {campus.hindiName}
                  </div>
                  <div className="text-[11px] text-stone-400 font-mono">
                    📍 {campus.location}
                  </div>

                  <p className="text-xs text-stone-300 font-sans leading-relaxed pt-1">
                    {campus.description}
                  </p>

                  <div className="space-y-1 pt-1">
                    <div className="text-[9px] font-mono uppercase text-amber-400 font-bold">Key Specialties:</div>
                    <div className="flex flex-wrap gap-1">
                      {campus.specialties.map((spec, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-lg bg-black/40 text-stone-300 border border-stone-800">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 font-mono">
                  <span>Manuscripts Collection:</span>
                  <span className="text-amber-300 font-bold">{campus.libraryManuscripts.toLocaleString()}+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 4: PUBLICATIONS & 35-VOL ENCYCLOPEDIC DICTIONARY */}
      {/* ========================================================================= */}
      {activeMainTab === "publications" && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CSU_PUBLICATIONS.map(pub => (
              <div 
                key={pub.title}
                className="bg-[#14100c] border border-stone-800 hover:border-amber-700/80 rounded-3xl p-5 transition-all shadow-xl space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800 font-bold">
                    {pub.type}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">
                    {pub.yearOrFrequency}
                  </span>
                </div>

                <h3 className="text-base font-serif font-black text-[#fdf4e3]">
                  {pub.title}
                </h3>
                <div className="text-xs font-serif text-amber-300">
                  {pub.devanagari}
                </div>

                <p className="text-xs text-stone-300 font-sans leading-relaxed">
                  {pub.description}
                </p>

                <div className="p-3 rounded-2xl bg-[#1b1510] border border-stone-800 text-xs font-mono space-y-1 text-stone-300">
                  <div>Editor / Authority: <span className="text-amber-200">{pub.editorOrAuthor}</span></div>
                  <div>Archival Scope: <span className="text-stone-100">{pub.volumeInfo}</span></div>
                </div>
              </div>
            ))}
          </div>

          {/* Deccan College & CSU Encyclopedic Dictionary Deep Dive */}
          <div className="bg-[#16110d] p-6 rounded-3xl border border-amber-800/60 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-950 text-amber-300 border border-amber-700">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-serif font-black text-amber-200">
                  The Historic 35-Volume Sanskrit Encyclopedic Dictionary
                </h4>
                <p className="text-xs text-stone-400">
                  Joint National Project of Central Sanskrit University & Deccan College Postgraduate and Research Institute, Pune.
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-300 font-sans leading-relaxed">
              Initiated in 1948, this is the most exhaustive lexicographical enterprise ever undertaken for any classical language in human history. With 2.2 million vocables chronologically extracted from 1,500+ primary texts spanning the Rig Veda (c. 1500 BCE) down to 1800 CE, each entry provides full historical attestations, grammatical etymology, Paninian sutras, semantic evolutions, and cross-philosophical definitions across all Darshanas.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {onNavigateToTab && (
                <button
                  onClick={() => onNavigateToTab("pune_iks_institutes")}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-800 hover:bg-amber-700 text-white text-xs font-serif font-bold transition-all cursor-pointer shadow-md"
                >
                  Explore Deccan College & Pune IKS Portal →
                </button>
              )}
              {onNavigateToTab && (
                <button
                  onClick={() => onNavigateToTab("vedic_ebooks")}
                  className="px-3.5 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 text-xs font-serif font-bold transition-all cursor-pointer"
                >
                  Browse Open Vedic Repositories →
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 5: NATIONAL SANSKRIT OLYMPIAD SIMULATOR */}
      {/* ========================================================================= */}
      {activeMainTab === "olympiad" && (
        <div className="bg-[#14100c] border border-stone-800 rounded-3xl p-5 sm:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-stone-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <h3 className="text-base font-serif font-black text-amber-300">
                  National Sanskrit Olympiad & Shastric Knowledge Assessment
                </h3>
              </div>
              <p className="text-xs text-stone-400 mt-0.5">
                Practice official question formats from Central Sanskrit University covering Paninian grammar, metrics, institutional history, and Shastras.
              </p>
            </div>

            {olympiadSubmitted && (
              <div className="px-4 py-2 rounded-2xl bg-amber-950 border border-amber-500/80 text-amber-200 font-mono text-xs font-bold flex items-center gap-2">
                <span>Final Score:</span>
                <span className="text-base text-amber-300 font-black">{olympiadScore} / {CSU_OLYMPIAD_QUESTIONS.length}</span>
                <span>({Math.round((olympiadScore / CSU_OLYMPIAD_QUESTIONS.length) * 100)}%)</span>
              </div>
            )}
          </div>

          {/* Question Cards */}
          <div className="space-y-4">
            {CSU_OLYMPIAD_QUESTIONS.map((q, idx) => {
              const isAnswered = olympiadAnswers[q.id] !== undefined;
              const selectedOpt = olympiadAnswers[q.id];
              const isCorrect = selectedOpt === q.correctIndex;

              return (
                <div 
                  key={q.id}
                  className={`p-4 rounded-2xl border transition-all space-y-3 ${
                    olympiadSubmitted 
                      ? isCorrect 
                        ? "bg-emerald-950/20 border-emerald-800/80" 
                        : "bg-red-950/20 border-red-900/60"
                      : "bg-[#18120e] border-stone-800"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-amber-400 font-bold border border-amber-900/40">
                          QUESTION {idx + 1}
                        </span>
                        <span className="text-[10px] font-mono text-stone-400">
                          {q.shastricTopic}
                        </span>
                      </div>
                      <h4 className="text-sm font-serif font-black text-[#fdf4e3]">
                        {q.question}
                      </h4>
                      <div className="text-xs font-serif text-amber-300">
                        {q.sanskritQuestion}
                      </div>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isThisSelected = selectedOpt === optIdx;
                      let btnStyle = "bg-[#1d1712] border-stone-800 text-stone-300 hover:bg-[#251e18]";

                      if (olympiadSubmitted) {
                        if (optIdx === q.correctIndex) {
                          btnStyle = "bg-emerald-900/80 border-emerald-500 text-white font-bold";
                        } else if (isThisSelected) {
                          btnStyle = "bg-red-900/80 border-red-500 text-white";
                        }
                      } else if (isThisSelected) {
                        btnStyle = "bg-amber-800 border-amber-500 text-white font-bold ring-1 ring-amber-400";
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={olympiadSubmitted}
                          onClick={() => setOlympiadAnswers(prev => ({ ...prev, [q.id]: optIdx }))}
                          className={`p-2.5 rounded-xl border text-xs font-serif text-left transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {olympiadSubmitted && optIdx === q.correctIndex && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation if submitted */}
                  {olympiadSubmitted && (
                    <div className="pt-2 text-xs font-sans text-stone-300 border-t border-stone-800/60 leading-relaxed bg-black/30 p-2.5 rounded-xl">
                      <span className="text-amber-400 font-bold font-serif">Vyakhya: </span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit / Reset Buttons */}
          <div className="flex items-center justify-between pt-2">
            {!olympiadSubmitted ? (
              <button
                disabled={Object.keys(olympiadAnswers).length === 0}
                onClick={() => setOlympiadSubmitted(true)}
                className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-white font-serif font-bold text-xs shadow-xl shadow-amber-950/70 transition-all cursor-pointer disabled:opacity-50"
              >
                Submit Olympiad Assessment ({Object.keys(olympiadAnswers).length} / {CSU_OLYMPIAD_QUESTIONS.length} Answered)
              </button>
            ) : (
              <button
                onClick={() => {
                  setOlympiadAnswers({});
                  setOlympiadSubmitted(false);
                }}
                className="px-5 py-2 rounded-2xl bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-serif font-bold text-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset & Retake Olympiad</span>
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
