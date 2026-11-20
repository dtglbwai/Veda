import React, { useState, useMemo, useRef } from "react";
import {
  PenTool,
  Sparkles,
  Watch,
  Wallet,
  ShieldCheck,
  Award,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  RotateCcw,
  Zap,
  Info,
  DollarSign,
  Heart,
  HelpCircle,
  Eye,
  Flame,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export interface SignatureAnalysisTrait {
  slant: "upward" | "horizontal" | "downward";
  initialSize: "large" | "medium" | "small";
  underline: "unbroken_upward" | "straight" | "broken" | "cutting" | "none";
  moneyLoop: "present_ascending" | "open_leaking" | "absent";
  cuttingStrokes: "none" | "cutting_name" | "backward_slashes";
  dots: "none" | "one_dot" | "two_dots" | "scattered";
}

export const CELEBRITY_SIGNATURES = [
  {
    name: "Dr. A.P.J. Abdul Kalam",
    role: "President of India & Missile Scientist",
    slant: "Strong Upward (30°)",
    traits: [
      "Ascending upward baseline: Unbounded vision and positive optimism.",
      "Clear, legible initial letters: Supreme humility coupled with clarity of mission.",
      "Balanced rhythmic flow: Deep mental poise and harmonious intellect."
    ],
    verdict: "Ideal visionary signature: High Sattvic vibrations, persistence, and national service."
  },
  {
    name: "Narendra Modi",
    role: "Prime Minister of India",
    slant: "Prominent Ascending Slant",
    traits: [
      "Large, confident first letter: Towering self-belief, executive authority, and leadership.",
      "Firm underline with steady base: Grounded connection to earth and strong support base.",
      "No cutting strokes: Unwavering focus and single-minded determination."
    ],
    verdict: "High-authority signature: Dominant Sun and Mars leadership energy."
  },
  {
    name: "Amitabh Bachchan",
    role: "Cinema Icon",
    slant: "Expansive & Elegant Loop",
    traits: [
      "Magnificent upper zone loops: Endless creative imagination and cultural resonance.",
      "Rhythmic forward momentum: Artistic eloquence and long-term public appeal.",
      "Graceful finishing flourish: Immense wealth accumulation and brand longevity."
    ],
    verdict: "Venusian / Shukra brilliance: Aesthetic royalty, mass adoration, and staying power."
  }
];

export const WALLET_ASTRO_VASTU = [
  {
    rashiOrNumber: "Mesha & Vrischika (Aries & Scorpio / Number 9)",
    element: "Agni / Mangal (Mars)",
    idealColors: "Dark Red, Maroon, Copper, Warm Brown",
    avoidColors: "Black, Dull Gray",
    kuberSecret: "Keep a small pure copper yantra coin or 3 unbroken cloves (Laung) wrapped in red paper."
  },
  {
    rashiOrNumber: "Vrishabha & Tula (Taurus & Libra / Number 6)",
    element: "Prithvi & Vayu / Shukra (Venus)",
    idealColors: "Cream, Off-White, Pastel Pink, Silver-Grey, Tan",
    avoidColors: "Dark Red, Neon Yellow",
    kuberSecret: "Keep a fresh silver coin or a pinch of fragrant sandalwood powder wrapped in white silk."
  },
  {
    rashiOrNumber: "Mithuna & Kanya (Gemini & Virgo / Number 5)",
    element: "Vayu & Prithvi / Budha (Mercury)",
    idealColors: "Forest Green, Emerald Green, Sage, Camel Tan",
    avoidColors: "Bright Red",
    kuberSecret: "Keep 5 unbroken green cardamoms (Elaichi) or a Gomti Chakra to multiply commercial gains."
  },
  {
    rashiOrNumber: "Karka (Cancer / Number 2)",
    element: "Jala / Chandra (Moon)",
    idealColors: "Pearl White, Light Silver, Pale Blue, Cream",
    avoidColors: "Dark Black, Harsh Neon",
    kuberSecret: "Keep 21 whole unbroken white rice grains (Akshata) in a small silver foil pouch."
  },
  {
    rashiOrNumber: "Simha (Leo / Number 1)",
    element: "Agni / Surya (Sun)",
    idealColors: "Golden Yellow, Royal Orange, Tan, Deep Crimson",
    avoidColors: "Dark Blue, Jet Black",
    kuberSecret: "Keep a clean bay leaf (Tejpatta) inscribed with your personal manifestation number in golden ink."
  },
  {
    rashiOrNumber: "Dhanu & Meena (Sagittarius & Pisces / Number 3)",
    element: "Agni & Jala / Brihaspati (Jupiter)",
    idealColors: "Bright Yellow, Saffron, Ochre, Gold",
    avoidColors: "Black, Dark Charcoal",
    kuberSecret: "Keep a small piece of whole turmeric root (Kacchi Haldi) or yellow mustard seeds."
  },
  {
    rashiOrNumber: "Makara & Kumbha (Capricorn & Aquarius / Number 8)",
    element: "Prithvi & Vayu / Shani (Saturn)",
    idealColors: "Navy Blue, Dark Teal, Rich Brown, Charcoal",
    avoidColors: "Bright Red, Flashing Pink",
    kuberSecret: "Keep currency notes neatly ordered from smallest to largest denomination; avoid folded clutter."
  }
];

export const WATCH_ASTROLOGY_GUIDELINES = [
  {
    title: "Round Dial (गोलाकार डायल)",
    planet: "Chandra (Moon) & Guru (Jupiter)",
    energy: "Brings emotional balance, family harmony, peace of mind, and smooth interpersonal relationships.",
    bestFor: "Teachers, counselors, healers, diplomats, artists, and those suffering from overthinking."
  },
  {
    title: "Square or Rectangular Dial (चौकोर डायल)",
    planet: "Shani (Saturn) & Budha (Mercury)",
    energy: "Instills rigorous discipline, punctuality, structured analytical clarity, and enduring patience.",
    bestFor: "Entrepreneurs, engineers, accountants, lawyers, project managers, and executives."
  },
  {
    title: "Golden or Rose-Gold Metal Chain (स्वर्ण धातु स्ट्रैप)",
    planet: "Surya (Sun) & Brihaspati (Jupiter)",
    energy: "Boosts charismatic leadership, public prestige, executive authority, and respect from seniors.",
    bestFor: "Corporate leaders, administrators, public speakers, politicians, and business heads."
  },
  {
    title: "Silver or Stainless Steel Chain (रजत / स्टील स्ट्रैप)",
    planet: "Shukra (Venus) & Chandra (Moon)",
    energy: "Enhances refinement, elegance, financial ease, artistic inspiration, and calm demeanor.",
    bestFor: "Designers, IT professionals, sales executives, consultants, and luxury entrepreneurs."
  },
  {
    title: "Dark Leather Strap (चमड़े का स्ट्रैप)",
    planet: "Prithvi Tattva / Rahu & Ketu grounding",
    energy: "Grounded focus, practicality, stability; must be kept in clean condition without fraying.",
    bestFor: "Academics, researchers, ground operators, and creative individual contributors."
  }
];

export default function AstroByVivekStudio() {
  const { t } = useLanguage();

  // Active Main Tab
  const [activeTab, setActiveTab] = useState<"signature_audit" | "watch_astrology" | "wallet_vastu" | "celebrity_breakdowns" | "daily_reels_hacks">("signature_audit");

  // Signature Form State
  const [sigName, setSigName] = useState<string>("Vivek Sharma");
  const [traits, setTraits] = useState<SignatureAnalysisTrait>({
    slant: "upward",
    initialSize: "large",
    underline: "unbroken_upward",
    moneyLoop: "present_ascending",
    cuttingStrokes: "none",
    dots: "two_dots"
  });

  // Calculate Signature Health Score & Index
  const signatureEvaluation = useMemo(() => {
    let score = 50;
    const strengths: string[] = [];
    const vulnerabilities: string[] = [];
    const prescriptions: string[] = [];

    // 1. Slant
    if (traits.slant === "upward") {
      score += 15;
      strengths.push("Ascending Slant: High ambition, optimism, progressive career trajectory.");
    } else if (traits.slant === "horizontal") {
      score += 8;
      strengths.push("Horizontal Baseline: Balanced realism, steady emotional poise.");
    } else {
      score -= 15;
      vulnerabilities.push("Downward Droop: Subconscious fatigue, pessimism, feeling weighed down by obstacles.");
      prescriptions.push("Elevate your signature angle upwards (+15° to +25°) to invite upward career momentum.");
    }

    // 2. Initial Size
    if (traits.initialSize === "large") {
      score += 15;
      strengths.push("Prominent First Letter: Strong self-esteem, healthy confidence, recognizable identity.");
    } else if (traits.initialSize === "medium") {
      score += 8;
      strengths.push("Balanced Letter Size: Approachable demeanor, modest self-worth.");
    } else {
      score -= 10;
      vulnerabilities.push("Tiny Initial: Fear of taking credit, suppressed identity, underpricing yourself.");
      prescriptions.push("Enlarge the initial letter of your first name; it directly represents your self-confidence.");
    }

    // 3. Underline
    if (traits.underline === "unbroken_upward") {
      score += 15;
      strengths.push("Unbroken Upward Underline: Solid foundational support, financial stability, self-reliance.");
    } else if (traits.underline === "straight") {
      score += 8;
      strengths.push("Straight Underline: Steady platform, emotional control.");
    } else if (traits.underline === "cutting") {
      score -= 20;
      vulnerabilities.push("Cutting Underline: Harsh strokes intersecting your name attract disputes and self-sabotage.");
      prescriptions.push("Draw the underline strictly beneath your name without cutting into lower loops like 'g', 'y', or 'p'.");
    } else if (traits.underline === "broken") {
      score -= 8;
      vulnerabilities.push("Broken Underline: Fluctuating cash flow, intermittent support from colleagues.");
      prescriptions.push("Ensure your underline is a single, confident, uninterrupted stroke.");
    }

    // 4. Money Loop
    if (traits.moneyLoop === "present_ascending") {
      score += 15;
      strengths.push("Ascending Money Bag Loop: Attracts high liquid wealth and retains savings securely.");
    } else if (traits.moneyLoop === "open_leaking") {
      score -= 15;
      vulnerabilities.push("Downward Open Loop (Money Leak): Earned wealth escapes easily through unplanned expenses.");
      prescriptions.push("Close your loops cleanly, ending with an upward flourish that locks the wealth frequency.");
    }

    // 5. Cutting Strokes
    if (traits.cuttingStrokes === "cutting_name") {
      score -= 25;
      vulnerabilities.push("Striking Through Name: Crossing out your own name is a grave graphological block (self-punishment).");
      prescriptions.push("Never strike through or cross out any letter of your own name; preserve pristine continuity.");
    }

    // 6. Dots
    if (traits.dots === "two_dots") {
      score += 10;
      strengths.push("Two Balanced Dots: Represents firm stability, social authority, and public respect.");
    } else if (traits.dots === "one_dot") {
      score += 5;
      strengths.push("Single Centered Dot: Sharp focus and attention to detail.");
    } else if (traits.dots === "scattered") {
      score -= 10;
      vulnerabilities.push("Random Dots: Overthinking, hesitation, doubting own decisions at crucial moments.");
      prescriptions.push("Either place two clean dots beneath the underline or omit dots altogether.");
    }

    const clampedScore = Math.min(100, Math.max(10, score));

    return {
      score: clampedScore,
      wealthIndex: traits.moneyLoop === "present_ascending" && traits.underline === "unbroken_upward" ? "High Prosperity (धनाकर्षण)" : traits.moneyLoop === "open_leaking" ? "Wealth Leak (धन क्षरण)" : "Moderate",
      confidenceIndex: traits.initialSize === "large" && traits.slant === "upward" ? "Magnetic Leadership (तेजस्वी)" : "Needs Elevation",
      strengths,
      vulnerabilities,
      prescriptions
    };
  }, [traits]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8 text-stone-100">
      {/* Studio Header Banner */}
      <div className="bg-gradient-to-r from-[#221612] via-[#2d1b14] to-[#1c120e] p-6 md:p-8 rounded-3xl border-2 border-amber-700/60 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-rose-950 border border-amber-400/50 flex items-center justify-center shadow-lg">
                <PenTool className="w-6 h-6 text-amber-200" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-white flex items-center gap-3">
                  Astro by Vivek Studio <span className="text-amber-400 font-hindi">(हस्ताक्षर एवं धन-ज्योतिष)</span>
                </h1>
                <p className="text-xs md:text-sm text-stone-300 font-sans tracking-wide">
                  Signature Astrology • Graphology Therapy • Wristwatch Jyotish • Astro-Vastu Wallet & Wealth Hacks
                </p>
              </div>
            </div>

            {/* Unboxed Metadata Line */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-amber-300/90 font-mono pt-1">
              <span>Standard of Signature Astrologer Vivek</span>
              <span className="text-stone-600">·</span>
              <span>Subconscious Graphology Therapy</span>
              <span className="text-stone-600">·</span>
              <span>Money Bag Loops & Upward Slopes</span>
              <span className="text-stone-600">·</span>
              <span>Wristwatch & Kuber Wallet Alignment</span>
            </div>
          </div>

          <div className="bg-black/50 p-4 rounded-2xl border border-amber-800/60 text-right self-start md:self-center shrink-0">
            <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">Social Channel Core</span>
            <span className="text-lg font-serif font-bold text-amber-100">@astrobyvivek</span>
            <span className="text-[10px] text-stone-400 block font-mono">Signature Therapy & Wealth Hacks</span>
          </div>
        </div>
      </div>

      {/* Main Studio Mode Navigation (Segmented Interactive Buttons) */}
      <div className="p-1.5 bg-[#17120e] rounded-2xl border border-stone-800 flex flex-wrap items-center gap-2 shadow-xl">
        <button
          onClick={() => setActiveTab("signature_audit")}
          className={`flex-1 min-w-[150px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeTab === "signature_audit"
              ? "bg-gradient-to-r from-amber-800 to-amber-950 text-amber-100 border-amber-500 shadow-lg ring-1 ring-amber-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <PenTool className="w-4 h-4 text-amber-400" />
          <span>Signature Analysis & Corrector</span>
        </button>

        <button
          onClick={() => setActiveTab("watch_astrology")}
          className={`flex-1 min-w-[150px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeTab === "watch_astrology"
              ? "bg-gradient-to-r from-amber-800 to-amber-950 text-amber-100 border-amber-500 shadow-lg ring-1 ring-amber-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Watch className="w-4 h-4 text-cyan-400" />
          <span>Wristwatch Astrology (घड़ी विज्ञान)</span>
        </button>

        <button
          onClick={() => setActiveTab("wallet_vastu")}
          className={`flex-1 min-w-[150px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeTab === "wallet_vastu"
              ? "bg-gradient-to-r from-amber-800 to-amber-950 text-amber-100 border-amber-500 shadow-lg ring-1 ring-amber-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Wallet className="w-4 h-4 text-emerald-400" />
          <span>Astro-Vastu Wallet & Kuber Hacks</span>
        </button>

        <button
          onClick={() => setActiveTab("celebrity_breakdowns")}
          className={`flex-1 min-w-[150px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeTab === "celebrity_breakdowns"
              ? "bg-gradient-to-r from-amber-800 to-amber-950 text-amber-100 border-amber-500 shadow-lg ring-1 ring-amber-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Award className="w-4 h-4 text-yellow-400" />
          <span>Celebrity Signatures Decoded</span>
        </button>

        <button
          onClick={() => setActiveTab("daily_reels_hacks")}
          className={`flex-1 min-w-[150px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeTab === "daily_reels_hacks"
              ? "bg-gradient-to-r from-amber-800 to-amber-950 text-amber-100 border-amber-500 shadow-lg ring-1 ring-amber-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Flame className="w-4 h-4 text-rose-400" />
          <span>Daily Astro & Nazar Hacks</span>
        </button>
      </div>

      {/* ===================== TAB 1: SIGNATURE ANALYSIS & CORRECTOR ===================== */}
      {activeTab === "signature_audit" && (
        <div className="space-y-8">
          <div className="p-6 md:p-8 bg-[#18130f] border border-amber-900/60 rounded-3xl space-y-4 shadow-xl">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-amber-200 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Interactive Signature Audit & 90-Day Therapy Engine</span>
            </h2>
            <p className="text-xs md:text-sm text-stone-300 font-sans leading-relaxed">
              In Signature Astrology, your signature is a physical seismograph of your subconscious mind. Adjusting your stroke angle, underlines, and letter loops acts as graphological therapy to dissolve internal sabotage and attract prosperity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-5 space-y-4 p-6 bg-[#18130f] border border-amber-950 rounded-3xl shadow-xl">
              <h3 className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
                Select Your Signature Characteristics
              </h3>

              {/* Name Input */}
              <div>
                <label className="block text-xs font-mono text-stone-400 mb-1">Your Full Name or Signature Text</label>
                <input
                  type="text"
                  value={sigName}
                  onChange={e => setSigName(e.target.value)}
                  placeholder="e.g. Vivek Sharma"
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-4 py-2.5 text-xs text-stone-200 outline-none focus:border-amber-500 font-serif"
                />
              </div>

              {/* Slant Selection */}
              <div>
                <label className="block text-xs font-mono text-stone-400 mb-1">Baseline Slant Angle</label>
                <select
                  value={traits.slant}
                  onChange={e => setTraits(prev => ({ ...prev, slant: e.target.value as any }))}
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3.5 py-2 text-xs text-stone-200 outline-none focus:border-amber-500"
                >
                  <option value="upward">Ascending Upward (+15° to +30°)</option>
                  <option value="horizontal">Horizontal Straight Line (0°)</option>
                  <option value="downward">Drooping Downward (-15° or lower)</option>
                </select>
              </div>

              {/* Initial Size */}
              <div>
                <label className="block text-xs font-mono text-stone-400 mb-1">Size of First Letter</label>
                <select
                  value={traits.initialSize}
                  onChange={e => setTraits(prev => ({ ...prev, initialSize: e.target.value as any }))}
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3.5 py-2 text-xs text-stone-200 outline-none focus:border-amber-500"
                >
                  <option value="large">Prominent & Substantially Larger</option>
                  <option value="medium">Proportional to rest of letters</option>
                  <option value="small">Small, compressed, or cramped</option>
                </select>
              </div>

              {/* Underline */}
              <div>
                <label className="block text-xs font-mono text-stone-400 mb-1">Underline Style</label>
                <select
                  value={traits.underline}
                  onChange={e => setTraits(prev => ({ ...prev, underline: e.target.value as any }))}
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3.5 py-2 text-xs text-stone-200 outline-none focus:border-amber-500"
                >
                  <option value="unbroken_upward">Unbroken line with upward ending hook</option>
                  <option value="straight">Simple straight underline</option>
                  <option value="broken">Broken or segmented underline</option>
                  <option value="cutting">Underline cutting through lower tails</option>
                  <option value="none">No underline at all</option>
                </select>
              </div>

              {/* Money Bag Loop */}
              <div>
                <label className="block text-xs font-mono text-stone-400 mb-1">Money Bag / Loop Formations</label>
                <select
                  value={traits.moneyLoop}
                  onChange={e => setTraits(prev => ({ ...prev, moneyLoop: e.target.value as any }))}
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3.5 py-2 text-xs text-stone-200 outline-none focus:border-amber-500"
                >
                  <option value="present_ascending">Clean closed loop with upward tail</option>
                  <option value="open_leaking">Open loop leaking downwards</option>
                  <option value="absent">No loops / purely sharp strokes</option>
                </select>
              </div>

              {/* Cutting Strokes */}
              <div>
                <label className="block text-xs font-mono text-stone-400 mb-1">Strike-Through / Crossing Name</label>
                <select
                  value={traits.cuttingStrokes}
                  onChange={e => setTraits(prev => ({ ...prev, cuttingStrokes: e.target.value as any }))}
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3.5 py-2 text-xs text-stone-200 outline-none focus:border-amber-500"
                >
                  <option value="none">No cutting strokes (Clean continuity)</option>
                  <option value="cutting_name">Pen strikes back through own name</option>
                  <option value="backward_slashes">Backward slashes crossing letters</option>
                </select>
              </div>

              {/* Dots */}
              <div>
                <label className="block text-xs font-mono text-stone-400 mb-1">Dots Below or Around Signature</label>
                <select
                  value={traits.dots}
                  onChange={e => setTraits(prev => ({ ...prev, dots: e.target.value as any }))}
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3.5 py-2 text-xs text-stone-200 outline-none focus:border-amber-500"
                >
                  <option value="two_dots">Two clean dots below underline</option>
                  <option value="one_dot">One confident dot</option>
                  <option value="none">No dots</option>
                  <option value="scattered">Scattered random dots</option>
                </select>
              </div>
            </div>

            {/* Right Column: Dynamic Diagnosis & Prescription */}
            <div className="lg:col-span-7 space-y-6">
              {/* Scorecard Box */}
              <div className="p-6 md:p-8 bg-[#18130f] border-2 border-amber-600 rounded-3xl space-y-6 shadow-2xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-stone-800 pb-5">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-amber-500 font-bold px-2.5 py-0.5 bg-amber-950 rounded-full border border-amber-800">
                      VIVEK'S GRAPHOLOGICAL DIAGNOSIS
                    </span>
                    <h3 className="text-2xl font-black font-serif text-amber-100 mt-2">
                      {sigName || "Your Signature"}
                    </h3>
                  </div>

                  <div className="text-right bg-[#120e0b] p-3 rounded-2xl border border-stone-800">
                    <span className="text-[10px] font-mono text-stone-500 block">DESTINY SCORE</span>
                    <span className={`text-3xl font-black font-mono ${signatureEvaluation.score >= 70 ? "text-emerald-400" : signatureEvaluation.score >= 50 ? "text-amber-400" : "text-rose-400"}`}>
                      {signatureEvaluation.score}/100
                    </span>
                  </div>
                </div>

                {/* Key Indices */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#120e0b] rounded-2xl border border-stone-800 space-y-1">
                    <span className="text-[10px] font-mono text-amber-400 uppercase font-bold flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5" />
                      <span>Wealth Retention Index</span>
                    </span>
                    <p className="text-xs font-serif font-bold text-stone-200">{signatureEvaluation.wealthIndex}</p>
                  </div>

                  <div className="p-4 bg-[#120e0b] rounded-2xl border border-stone-800 space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Confidence & Identity</span>
                    </span>
                    <p className="text-xs font-serif font-bold text-stone-200">{signatureEvaluation.confidenceIndex}</p>
                  </div>
                </div>

                {/* Strengths List */}
                {signatureEvaluation.strengths.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Auspicious Energetic Strengths</span>
                    </h4>
                    <ul className="space-y-1 text-xs text-stone-300 font-sans">
                      {signatureEvaluation.strengths.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Vulnerabilities & Blocks */}
                {signatureEvaluation.vulnerabilities.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase text-rose-400 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Karmic & Subconscious Blocks Identified</span>
                    </h4>
                    <ul className="space-y-1 text-xs text-rose-200 font-sans">
                      {signatureEvaluation.vulnerabilities.map((v, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-rose-400 mt-1">•</span>
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Vivek's 90-Day Signature Therapy Prescription */}
                <div className="p-5 bg-gradient-to-r from-amber-950/60 to-orange-950/60 border border-amber-600/70 rounded-3xl space-y-3">
                  <h4 className="text-xs font-serif font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Vivek's 90-Day Signature Therapy Protocol (हस्ताक्षर चिकित्सा)</span>
                  </h4>
                  {signatureEvaluation.prescriptions.length > 0 ? (
                    <div className="space-y-2 text-xs text-stone-200 font-sans">
                      {signatureEvaluation.prescriptions.map((p, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold">{idx + 1}.</span>
                          <span>{p}</span>
                        </div>
                      ))}
                      <p className="text-[11px] text-amber-300 font-serif italic pt-1">
                        "Practice this corrected signature 21 times every morning on unlined white paper for 90 consecutive days. It directly reconditions the neural pathways of self-belief and financial stability."
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-emerald-300 font-sans">
                      Your signature is already aligned with excellent graphological and financial principles! Maintain this ascending, confident flow without crossing your own letters.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================== TAB 2: WRISTWATCH ASTROLOGY ===================== */}
      {activeTab === "watch_astrology" && (
        <div className="space-y-6">
          <div className="p-6 bg-[#18130f] border border-cyan-900/60 rounded-3xl space-y-2 shadow-xl">
            <h2 className="text-xl font-bold font-serif text-cyan-200 flex items-center gap-2">
              <Watch className="w-5 h-5 text-cyan-400" />
              <span>Wristwatch Astrology & Time Energy (घड़ी ज्योतिष विज्ञान)</span>
            </h2>
            <p className="text-xs text-stone-400 font-sans">
              Your wristwatch connects the Sun (Atma / Time), Saturn (Karma & Delay), and Venus (Luxury & Status). Discover how dial geometry, strap material, and mechanical state govern your luck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WATCH_ASTROLOGY_GUIDELINES.map((item, idx) => (
              <div key={idx} className="p-6 bg-[#18130f] border border-stone-800 hover:border-cyan-600/60 rounded-3xl space-y-3 shadow-xl flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {item.planet}
                  </span>
                  <h3 className="text-lg font-bold font-serif text-cyan-100">{item.title}</h3>
                  <p className="text-xs text-stone-300 font-sans leading-relaxed">{item.energy}</p>
                </div>

                <div className="p-3 bg-black/40 rounded-2xl border border-stone-800 text-[11px] text-stone-300 font-sans">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block">Best Suited For:</span>
                  {item.bestFor}
                </div>
              </div>
            ))}
          </div>

          {/* Golden Rules Box */}
          <div className="p-6 bg-[#18130f] border border-amber-900/60 rounded-3xl space-y-4 shadow-xl">
            <h3 className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
              Vivek's Non-Negotiable Rules of Watch Astrology
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-300 font-sans">
              <div className="p-4 bg-[#120e0b] rounded-2xl border border-stone-800 space-y-1">
                <span className="font-bold text-rose-400 block">1. Never Wear a Stopped Watch</span>
                <p>A dead watch or stopped battery instantly triggers severe Rahu and Saturn afflictions, freezing career progress and delaying opportunities.</p>
              </div>
              <div className="p-4 bg-[#120e0b] rounded-2xl border border-stone-800 space-y-1">
                <span className="font-bold text-amber-300 block">2. Set Watch 1-2 Minutes Ahead</span>
                <p>Subconsciously conditions your psyche to stay ahead of deadlines, seize early initiatives, and lead rather than play catch-up.</p>
              </div>
              <div className="p-4 bg-[#120e0b] rounded-2xl border border-stone-800 space-y-1">
                <span className="font-bold text-emerald-400 block">3. Keep Glass Scratch-Free</span>
                <p>Scratched or cracked watch faces distort your vision of the future (Budha and Rahu distortion). Replace damaged glass immediately.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================== TAB 3: WALLET VASTU & KUBER HACKS ===================== */}
      {activeTab === "wallet_vastu" && (
        <div className="space-y-6">
          <div className="p-6 bg-[#18130f] border border-emerald-900/60 rounded-3xl space-y-2 shadow-xl">
            <h2 className="text-xl font-bold font-serif text-emerald-200 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-emerald-400" />
              <span>Astro-Vastu Wallet & Kuber Abundance Hub (कुबेर स्थान बटुआ विज्ञान)</span>
            </h2>
            <p className="text-xs text-stone-400 font-sans">
              Your wallet is your mobile treasury (Kuber Sthan). Aligning wallet color, internal organization, and sacred consecrated tokens creates continuous money flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WALLET_ASTRO_VASTU.map((w, idx) => (
              <div key={idx} className="p-6 bg-[#18130f] border border-emerald-950 hover:border-emerald-700/60 rounded-3xl space-y-4 shadow-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-bold font-serif text-emerald-200">{w.rashiOrNumber}</h3>
                    <span className="text-[10px] font-mono text-stone-400">{w.element}</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                    KUBER HACK
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                  <div className="p-3 bg-[#120e0b] rounded-xl border border-stone-800">
                    <span className="text-[10px] font-mono text-emerald-400 block font-bold">Recommended Colors:</span>
                    <span className="text-stone-200">{w.idealColors}</span>
                  </div>
                  <div className="p-3 bg-[#120e0b] rounded-xl border border-stone-800">
                    <span className="text-[10px] font-mono text-rose-400 block font-bold">Avoid Colors:</span>
                    <span className="text-stone-300">{w.avoidColors}</span>
                  </div>
                </div>

                <div className="p-3.5 bg-black/40 rounded-2xl border border-emerald-900/50 space-y-1 text-xs">
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">Secret Kuber Attraction Token:</span>
                  <p className="text-stone-300 font-sans">{w.kuberSecret}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Wallet Do's and Don'ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 bg-[#18130f] border border-emerald-800/60 rounded-3xl space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>What to ALWAYS Keep in Your Wallet</span>
              </h4>
              <ul className="space-y-2 text-xs text-stone-300 font-sans">
                <li>• Currency notes arranged neatly facing the same direction, from smallest to highest value.</li>
                <li>• An energized silver coin or small Gomti Chakra to attract Goddess Lakshmi's stable grace.</li>
                <li>• A clean, uncreased currency note of ₹20 or ₹50 blessed during Diwali / Lakshmi Puja as emergency reserve.</li>
              </ul>
            </div>

            <div className="p-6 bg-[#18130f] border border-rose-900/60 rounded-3xl space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase text-rose-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>What to NEVER Keep in Your Wallet</span>
              </h4>
              <ul className="space-y-2 text-xs text-rose-200 font-sans">
                <li>• Unpaid electricity/utility bills, credit card payment slips, or expired receipts (attracts debt).</li>
                <li>• Medical prescription slips or medicines (attracts continuous hospital expenditures).</li>
                <li>• Torn, taped, or badly soiled notes (offends Kuber and Lakshmi energies).</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ===================== TAB 4: CELEBRITY BREAKDOWNS ===================== */}
      {activeTab === "celebrity_breakdowns" && (
        <div className="space-y-6">
          <div className="p-6 bg-[#18130f] border border-yellow-900/60 rounded-3xl space-y-2 shadow-xl">
            <h2 className="text-xl font-bold font-serif text-yellow-200 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>Iconic & Celebrity Signatures Decoded (हस्ताक्षर विश्लेषण)</span>
            </h2>
            <p className="text-xs text-stone-400 font-sans">
              Learn how history's most celebrated leaders, scientists, and cultural icons unconsciously mirrored their monumental destiny through their handwriting strokes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CELEBRITY_SIGNATURES.map((celeb, idx) => (
              <div key={idx} className="p-6 bg-[#18130f] border border-stone-800 hover:border-yellow-600/60 rounded-3xl space-y-4 shadow-xl flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-yellow-950 text-yellow-300 border border-yellow-800">
                    {celeb.slant}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-amber-100">{celeb.name}</h3>
                  <p className="text-xs text-stone-400 font-sans">{celeb.role}</p>

                  <div className="space-y-1.5 pt-3 border-t border-stone-800">
                    {celeb.traits.map((t, i) => (
                      <p key={i} className="text-xs text-stone-300 font-sans flex items-start gap-1.5">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>{t}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 bg-black/50 rounded-2xl border border-yellow-900/50 text-xs font-serif text-yellow-200/90 italic">
                  "{celeb.verdict}"
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===================== TAB 5: DAILY REELS HACKS ===================== */}
      {activeTab === "daily_reels_hacks" && (
        <div className="space-y-6">
          <div className="p-6 bg-[#18130f] border border-rose-900/60 rounded-3xl space-y-2 shadow-xl">
            <h2 className="text-xl font-bold font-serif text-rose-200 flex items-center gap-2">
              <Flame className="w-5 h-5 text-rose-400" />
              <span>Vivek's Daily Instagram Micro-Remedies & Nazar Hacks</span>
            </h2>
            <p className="text-xs text-stone-400 font-sans">
              Simple 1-minute daily remedies shared on @astrobyvivek to dispel negative energies, overcome mental stagnation, and enhance prosperity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Hack 1 */}
            <div className="p-6 bg-[#18130f] border border-stone-800 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-base font-serif font-bold text-amber-300">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Twilight Camphor & Clove Cleansing (कपूर-लौंग उतारा)</span>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Every evening at twilight (Sandhya Bela), burn 2 cloves (Laung) and a small piece of natural camphor (Bhimseni Kapoor) in a brass bowl. Circulate the smoke clockwise through all corners of the home. It instantly burns away stagnant negative energy and neutralizes Nazar Dosha.
              </p>
            </div>

            {/* Hack 2 */}
            <div className="p-6 bg-[#18130f] border border-stone-800 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-base font-serif font-bold text-cyan-300">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Rock Salt Foot Soak for Rahu & Saturn Stagnation</span>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                If experiencing heavy mental anxiety, insomnia, or inexplicable career delays, soak your feet in warm water mixed with 2 tablespoons of rock salt (Sendha Namak) for 15 minutes before bed on Tuesdays and Saturdays. Flush the water immediately without looking back.
              </p>
            </div>

            {/* Hack 3 */}
            <div className="p-6 bg-[#18130f] border border-stone-800 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-base font-serif font-bold text-yellow-300">
                <Eye className="w-4 h-4 text-yellow-400" />
                <span>Turmeric Threshold Water Spray (हल्दी जल छिड़काव)</span>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Mix 1 pinch of pure turmeric in a small cup of water. Lightly sprinkle this water on the main entrance doorstep (Dahleez) every morning after sweeping. It blocks envious evil eye, aligns with Jupiter (Guru), and attracts harmonious abundance into the dwelling.
              </p>
            </div>

            {/* Hack 4 */}
            <div className="p-6 bg-[#18130f] border border-stone-800 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-base font-serif font-bold text-emerald-300">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Silver Glass Water for Moon / Emotional Calm</span>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Drinking water stored overnight in a pure silver tumbler strengthens Chandra (Moon) and balances Pitta-Vata oscillations, eliminating unnecessary worry and sharpening intuitive decision-making.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
