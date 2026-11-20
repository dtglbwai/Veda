import React, { useState, useMemo } from "react";
import {
  Volume2,
  Sparkles,
  Award,
  BookOpen,
  CheckCircle2,
  Play,
  RotateCcw,
  Layers,
  ChevronRight,
  Info,
  ShieldCheck,
  Flame,
  Radio,
  FileText
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export interface VedicPathaMethod {
  id: string;
  nameSanskrit: string;
  nameEnglish: string;
  category: "Prakriti (Natural)" | "Vikriti (Permutational)";
  patternFormula: string;
  description: string;
  memoryRule: string;
  exampleSentence: string[];
}

export const VEDIC_SAMPLE_MANTRAS = [
  {
    id: "rigveda_1_1_1",
    title: "Rigveda 1.1.1 (Agni Sukta Opening)",
    words: ["अग्निम्", "ईळे", "पुरोहितम्", "यज्ञस्य", "देवम्", "ऋत्विजम्"],
    wordsIAST: ["agnim", "īḷe", "purohitam", "yajñasya", "devam", "ṛtvijam"],
    meaning: "I laud Agni, the chosen priest, god, minister of sacrifice, the hotr priest, best bestower of treasure."
  },
  {
    id: "gayatri_mantra",
    title: "Gayatri Mantra (Rigveda 3.62.10)",
    words: ["तत्", "सवितुः", "वरेण्यम्", "भर्गः", "देवस्य", "धीमहि"],
    wordsIAST: ["tat", "savituḥ", "vareṇyam", "bhargaḥ", "devasya", "dhīmahi"],
    meaning: "We meditate upon the supreme adorable effulgence of Savitr (the divine Sun), who illuminates our intellects."
  },
  {
    id: "mahamrityunjaya",
    title: "Maha Mrityunjaya (Rigveda 7.59.12)",
    words: ["त्र्यम्बकम्", "यजामहे", "सुगन्धिम्", "पुष्टिवर्धनम्"],
    wordsIAST: ["tryambakam", "yajāmahe", "sugandhim", "puṣṭivardhanam"],
    meaning: "We worship the Three-Eyed Lord Shiva, who is fragrant and nourishes all beings."
  }
];

export const VEDA_PATHANA_METHODS: VedicPathaMethod[] = [
  {
    id: "samhita",
    nameSanskrit: "संहिता पाठ (Samhita Patha)",
    nameEnglish: "Continuous Natural Flow",
    category: "Prakriti (Natural)",
    patternFormula: "1 2 3 4 5...",
    description: "The primary continuous recitation where mantras flow with strict grammatical euphonic Sandhi rules and musical Swaras.",
    memoryRule: "Mula Vakya (The root verse in natural flowing meter)",
    exampleSentence: ["1", "2", "3", "4"]
  },
  {
    id: "pada",
    nameSanskrit: "पद पाठ (Pada Patha)",
    nameEnglish: "Word-by-Word Separation",
    category: "Prakriti (Natural)",
    patternFormula: "1 / 2 / 3 / 4 / 5...",
    description: "Codified by Sage Shakalya. Every compound word (Samasa) is dissolved and uncoupled with Avagraha, establishing the precise grammatical integrity of each syllable.",
    memoryRule: "Padakara isolation (Zero Sandhi, pristine root identification)",
    exampleSentence: ["1", "2", "3", "4"]
  },
  {
    id: "krama",
    nameSanskrit: "क्रम पाठ (Krama Patha)",
    nameEnglish: "Sequential Step-Pairing",
    category: "Vikriti (Permutational)",
    patternFormula: "1-2 | 2-3 | 3-4 | 4-5...",
    description: "Words are paired consecutively in an overlapping step sequence. A scholar who masters Krama Patha was historically honored as a 'Krama-Vit'.",
    memoryRule: "Coupling every word with its predecessor and successor",
    exampleSentence: ["1-2", "2-3", "3-4"]
  },
  {
    id: "jata",
    nameSanskrit: "जटा पाठ (Jata Patha)",
    nameEnglish: "Braided Lock Permutation",
    category: "Vikriti (Permutational)",
    patternFormula: "1-2, 2-1, 1-2 | 2-3, 3-2, 2-3...",
    description: "Named after Jata (matted hair or braids). The words weave forward, backward, and forward again like braided strands of hair.",
    memoryRule: "Forward-Reverse-Forward Triad Check",
    exampleSentence: ["1-2, 2-1, 1-2", "2-3, 3-2, 2-3", "3-4, 4-3, 3-4"]
  },
  {
    id: "mala",
    nameSanskrit: "माला पाठ (Mala Patha)",
    nameEnglish: "Garland Interlaced Permutation",
    category: "Vikriti (Permutational)",
    patternFormula: "1-n, 2-(n-1), 3-(n-2)... & n-1, (n-1)-2...",
    description: "Forms an intricate circular garland where words from the beginning and end of the half-verse meet in the center and return.",
    memoryRule: "Symmetric bidirectional garland weave",
    exampleSentence: ["1-4, 2-3", "4-1, 3-2"]
  },
  {
    id: "shikha",
    nameSanskrit: "शिखा पाठ (Shikha Patha)",
    nameEnglish: "Crest / Peak Permutation",
    category: "Vikriti (Permutational)",
    patternFormula: "1-2, 2-1, 1-2-3 | 2-3, 3-2, 2-3-4...",
    description: "Similar to Jata Patha, but crowns the third word onto the sequence like a peacock's crest (Shikha).",
    memoryRule: "Jata foundation with third-word crowning apex",
    exampleSentence: ["1-2, 2-1, 1-2-3", "2-3, 3-2, 2-3-4"]
  },
  {
    id: "rekha",
    nameSanskrit: "रेखा पाठ (Rekha Patha)",
    nameEnglish: "Linear Streak Permutation",
    category: "Vikriti (Permutational)",
    patternFormula: "1-2, 2-1, 1-2-3-4, 4-3-2-1, 1-2...",
    description: "Crosses and streaks through word pairs and triples in escalating linear spans.",
    memoryRule: "Geometric linear expansion and contraction",
    exampleSentence: ["1-2, 2-1, 1-2", "2-3-4, 4-3-2"]
  },
  {
    id: "dhvaja",
    nameSanskrit: "ध्वज पाठ (Dhvaja Patha)",
    nameEnglish: "Banner / Flag Permutation",
    category: "Vikriti (Permutational)",
    patternFormula: "1-2, n-(n-1) | 2-3, (n-1)-(n-2)...",
    description: "Pairs words from the front and back of the hemistich like two fluttering flags mounted on opposite ramparts.",
    memoryRule: "Dual-column front-to-back cross check",
    exampleSentence: ["1-2, 4-3", "2-3, 3-2"]
  },
  {
    id: "danda",
    nameSanskrit: "दण्ड पाठ (Danda Patha)",
    nameEnglish: "Staff / Rod Cascading",
    category: "Vikriti (Permutational)",
    patternFormula: "1-2, 2-1, 1-2, 2-3, 3-2, 2-3...",
    description: "Words are chained like a continuous solid staff where every link is repeated forward, backward, forward with subsequent bridge.",
    memoryRule: "Continuous non-breaking interlocking staff",
    exampleSentence: ["1-2, 2-1, 1-2", "2-3, 3-2, 2-3"]
  },
  {
    id: "ratha",
    nameSanskrit: "रथ पाठ (Ratha Patha)",
    nameEnglish: "Chariot Quadripartite Symmetry",
    category: "Vikriti (Permutational)",
    patternFormula: "Multi-wheel 4-part symmetric permutation across half-verses",
    description: "Modeled on the two wheels and two horses of a chariot, reciting the first quarter with the second and the third with the fourth.",
    memoryRule: "Quadratic quadrant wheel symmetry",
    exampleSentence: ["1-2, 3-4", "4-3, 2-1"]
  },
  {
    id: "ghana",
    nameSanskrit: "घन पाठ (Ghana Patha)",
    nameEnglish: "The Supreme Dense Master Recitation",
    category: "Vikriti (Permutational)",
    patternFormula: "1-2, 2-1, 1-2-3, 3-2-1, 1-2-3 | 2-3, 3-2, 2-3-4, 4-3-2, 2-3-4...",
    description: "The absolute pinnacle of Vedic mastery. 'Ghana' means solid bell-metal or a dense cloud. A scholar who masters it is honored with the title 'Ghanapaati'. It provides a mathematical 100% error-proof oral cryptographic checksum.",
    memoryRule: "1-2, 2-1, 1-2-3, 3-2-1, 1-2-3 (The ultimate cyclic hash)",
    exampleSentence: [
      "1-2, 2-1, 1-2-3, 3-2-1, 1-2-3",
      "2-3, 3-2, 2-3-4, 4-3-2, 2-3-4"
    ]
  }
];

export default function VedaPathanaStudio() {
  const { t } = useLanguage();
  const [selectedMantraIndex, setSelectedMantraIndex] = useState<number>(0);
  const [selectedMethodId, setSelectedMethodId] = useState<string>("ghana");
  const [customWordsInput, setCustomWordsInput] = useState<string>("");
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const currentMantra = VEDIC_SAMPLE_MANTRAS[selectedMantraIndex];

  // Active word list
  const activeWords = useMemo(() => {
    if (customWordsInput.trim()) {
      return customWordsInput.trim().split(/\s+/).filter(w => w.length > 0);
    }
    return currentMantra.words;
  }, [customWordsInput, currentMantra]);

  const selectedMethod = useMemo(() => {
    return VEDA_PATHANA_METHODS.find(m => m.id === selectedMethodId) || VEDA_PATHANA_METHODS[10];
  }, [selectedMethodId]);

  // Algorithmic Generator for Vedic Patha Permutations
  const generatedSequence = useMemo(() => {
    const w = activeWords;
    const n = w.length;
    if (n < 2) return [];

    switch (selectedMethodId) {
      case "samhita":
        return [w.join(" ")];

      case "pada":
        return w.map(word => `${word} ।`);

      case "krama": {
        const out: string[] = [];
        for (let i = 0; i < n - 1; i++) {
          out.push(`${w[i]} ${w[i + 1]} ।`);
        }
        return out;
      }

      case "jata": {
        const out: string[] = [];
        for (let i = 0; i < n - 1; i++) {
          out.push(`${w[i]} ${w[i + 1]} । ${w[i + 1]} ${w[i]} । ${w[i]} ${w[i + 1]} ॥`);
        }
        return out;
      }

      case "shikha": {
        const out: string[] = [];
        for (let i = 0; i < n - 2; i++) {
          out.push(`${w[i]} ${w[i + 1]} । ${w[i + 1]} ${w[i]} । ${w[i]} ${w[i + 1]} ${w[i + 2]} ॥`);
        }
        return out;
      }

      case "ghana": {
        const out: string[] = [];
        for (let i = 0; i < n - 2; i++) {
          const w1 = w[i];
          const w2 = w[i + 1];
          const w3 = w[i + 2];
          out.push(
            `${w1} ${w2} । ${w2} ${w1} । ${w1} ${w2} ${w3} । ${w3} ${w2} ${w1} । ${w1} ${w2} ${w3} ॥`
          );
        }
        return out;
      }

      case "danda": {
        const out: string[] = [];
        for (let i = 0; i < n - 2; i++) {
          out.push(`${w[i]} ${w[i + 1]} । ${w[i + 1]} ${w[i]} । ${w[i]} ${w[i + 1]} । ${w[i + 1]} ${w[i + 2]} । ${w[i + 2]} ${w[i + 1]} । ${w[i + 1]} ${w[i + 2]} ॥`);
        }
        return out;
      }

      case "mala": {
        const out: string[] = [];
        for (let i = 0; i < Math.floor(n / 2); i++) {
          out.push(`${w[i]} ${w[n - 1 - i]} । ${w[n - 1 - i]} ${w[i]} ॥`);
        }
        return out;
      }

      case "dhvaja": {
        const out: string[] = [];
        for (let i = 0; i < Math.floor(n / 2); i++) {
          out.push(`${w[i]} ${w[i + 1]} । ${w[n - 1 - i]} ${w[n - 2 - i]} ॥`);
        }
        return out;
      }

      default: {
        // Fallback pair representation
        const out: string[] = [];
        for (let i = 0; i < n - 1; i++) {
          out.push(`${w[i]} ${w[i + 1]}`);
        }
        return out;
      }
    }
  }, [activeWords, selectedMethodId]);

  const playSynthesizedChant = (textToSpeak: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = "hi-IN";
      utterance.rate = 0.8;
      utterance.pitch = 1.0;
      utterance.onstart = () => setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8 text-stone-100">
      {/* Studio Header Banner */}
      <div className="bg-gradient-to-r from-[#221810] via-[#2f2015] to-[#1e150e] p-6 md:p-8 rounded-3xl border-2 border-amber-700/60 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-950 border border-amber-400/50 flex items-center justify-center shadow-lg">
                <Volume2 className="w-6 h-6 text-amber-200 animate-pulse" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-white flex items-center gap-3">
                  Veda Pathana Studio <span className="text-amber-400 font-hindi">(वेद-पाठ-शाला)</span>
                </h1>
                <p className="text-xs md:text-sm text-stone-300 font-sans tracking-wide">
                  11 Methods of Vedic Recitation (Prakriti & Ashta Vikriti) • Honoring Pandit Keshav Dixit Ji's Historic Completion
                </p>
              </div>
            </div>

            {/* Unboxed Metadata Line */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-amber-300/90 font-mono pt-1">
              <span>UNESCO Intangible Cultural Heritage</span>
              <span className="text-stone-600">·</span>
              <span>11 Recitation Permutations</span>
              <span className="text-stone-600">·</span>
              <span>Samhita, Pada, Krama, Jata & Ghana</span>
              <span className="text-stone-600">·</span>
              <span>3,500-Year Oral Zero-Error Preservation</span>
            </div>
          </div>

          <div className="bg-black/50 p-4 rounded-2xl border border-amber-800/60 text-right self-start md:self-center shrink-0">
            <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">Historic Milestone</span>
            <span className="text-lg font-serif font-bold text-amber-100">Pandit Dixit Ji's Sampoorna Pathan</span>
            <span className="text-[10px] text-stone-400 block font-mono">Mastery across all 11 Vedic Recitation Modes</span>
          </div>
        </div>
      </div>

      {/* Classical Memorial Verse Card */}
      <div className="p-6 bg-[#18130f] border border-amber-800/70 rounded-3xl space-y-3 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
            The Classical Shloka on Ashta Vikriti (अष्ट-विकृति लक्षण श्लोक)
          </span>
          <span className="text-xs font-mono text-stone-500">Rigveda Vyakarana & Shiksha</span>
        </div>
        <p className="text-xl md:text-2xl font-serif text-amber-200 text-center italic py-2 leading-relaxed">
          "जटा माला शिखा रेखा ध्वजो दण्डो रथो घनः।<br />
          इत्यष्टौ विकृतयः प्रोक्ताः क्रमपूर्वा महर्षिभिः॥"
        </p>
        <p className="text-xs text-stone-300 text-center font-sans">
          <em>"Jata, Mala, Shikha, Rekha, Dhvaja, Danda, Ratha, and Ghana—these eight structural permutations (Vikritis), preceded by Krama Patha, were declared by the ancient Maharshis to secure the Vedas."</em>
        </p>
      </div>

      {/* Main Interactive Studio Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: 11 Methods Selector */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-mono font-bold uppercase text-amber-400 px-1 tracking-wider flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Select Recitation Method ({VEDA_PATHANA_METHODS.length})</span>
          </h3>

          <div className="space-y-2 max-h-[620px] overflow-y-auto pr-1">
            {VEDA_PATHANA_METHODS.map((method) => {
              const isSelected = selectedMethodId === method.id;
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethodId(method.id)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-amber-900 to-amber-950 border-amber-500 text-amber-100 shadow-lg ring-1 ring-amber-500/40"
                      : "bg-[#14100c] border-stone-800 text-stone-400 hover:bg-[#1d1612]"
                  }`}
                >
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="text-xs font-bold font-serif text-stone-200 truncate">{method.nameSanskrit}</div>
                    <div className="text-[10px] font-mono text-amber-400/80 mt-0.5 truncate">{method.nameEnglish}</div>
                    <span className="inline-block mt-1 text-[9px] font-mono px-2 py-0.5 rounded bg-black/40 text-stone-400">
                      {method.category}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform shrink-0 ${isSelected ? "text-amber-400 translate-x-1" : "text-stone-700"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Interactive Permutation Engine & Recitation Box */}
        <div className="lg:col-span-8 space-y-6">
          {/* Mantra Selector Bar */}
          <div className="p-5 bg-[#18130f] border border-amber-900/60 rounded-3xl space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <h4 className="text-xs font-mono font-bold uppercase text-amber-300 tracking-wider">
                Select Classic Vedic Mantra or Enter Custom Words
              </h4>
              <span className="text-[10px] font-mono text-stone-500">Live Mathematical Permutation</span>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap gap-2">
              {VEDIC_SAMPLE_MANTRAS.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setSelectedMantraIndex(idx);
                    setCustomWordsInput("");
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition-all cursor-pointer border ${
                    selectedMantraIndex === idx && !customWordsInput
                      ? "bg-amber-950 text-amber-200 border-amber-600 shadow"
                      : "bg-[#120e0b] text-stone-400 border-stone-800 hover:text-white"
                  }`}
                >
                  {m.title}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div>
              <input
                type="text"
                value={customWordsInput}
                onChange={e => setCustomWordsInput(e.target.value)}
                placeholder="Or type custom Sanskrit words separated by space (e.g. हरिः ॐ तत् सत् श्री)..."
                className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-4 py-2 text-xs text-stone-200 outline-none focus:border-amber-500 font-serif"
              />
            </div>
          </div>

          {/* Detailed Method & Permutation Result Patrika */}
          <div className="bg-[#18130f] border-2 border-amber-600/70 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-stone-800 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400 font-bold px-2 py-0.5 bg-amber-950 rounded-full border border-amber-800">
                  {selectedMethod.category}
                </span>
                <h3 className="text-2xl font-bold font-serif text-amber-100 mt-2">
                  {selectedMethod.nameSanskrit}
                </h3>
                <p className="text-xs font-mono text-stone-400">{selectedMethod.nameEnglish}</p>
              </div>

              <div className="p-3 bg-[#120e0b] rounded-2xl border border-stone-800 text-right">
                <span className="text-[10px] font-mono text-stone-500 block">Permutation Algorithm</span>
                <span className="text-xs font-mono font-bold text-amber-300">{selectedMethod.patternFormula}</span>
              </div>
            </div>

            <p className="text-xs text-stone-300 font-sans leading-relaxed">
              {selectedMethod.description}
            </p>

            {/* Permutation Output Card */}
            <div className="p-5 bg-[#120e0b] border border-amber-900/50 rounded-3xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Algorithmic Permutation Output (क्रम-रचना)</span>
                </span>
                <button
                  onClick={() => playSynthesizedChant(generatedSequence.join(" "))}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-950 hover:bg-amber-900 border border-amber-700/60 text-amber-200 text-xs font-serif font-bold flex items-center gap-2 cursor-pointer shadow"
                >
                  <Volume2 className="w-4 h-4 text-amber-400" />
                  <span>{isPlayingAudio ? "Reciting..." : "Listen Recitation"}</span>
                </button>
              </div>

              <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-1">
                {generatedSequence.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-black/40 border border-stone-800/80 font-serif text-base text-amber-100/95 leading-relaxed tracking-wide flex items-start gap-3"
                  >
                    <span className="font-mono text-xs text-amber-500/70 shrink-0 mt-0.5">[{idx + 1}]</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cryptographic Zero-Error Note */}
            <div className="p-4 bg-black/50 border border-amber-950 rounded-2xl flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-stone-400 font-sans space-y-1">
                <span className="font-bold text-emerald-300 block">Why Ghana Patha is Mathematically Invariant:</span>
                <p>
                  Because every syllable is linked forwards, backwards, and cross-combined in triads ($1-2, 2-1, 1-2-3, 3-2-1, 1-2-3$), any dropped letter, wrong vowel duration (Matra), or misplaced tonal accent (Svara) instantly causes a mathematical dissonance in the recitation matrix, making oral corruption virtually impossible over thousands of years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
