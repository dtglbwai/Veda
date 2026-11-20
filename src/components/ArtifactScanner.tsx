import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Scan, 
  Upload, 
  Camera, 
  Sparkles, 
  RefreshCw, 
  CheckCircle, 
  AlertCircle, 
  Layers, 
  Cpu, 
  Orbit, 
  FileText, 
  Image as ImageIcon,
  Zap,
  Sliders,
  Maximize2,
  Eye,
  SwitchCamera
} from "lucide-react";
import { ArtifactAnalysisResult } from "../types";

const SAMPLE_ARTIFACT_IMAGES = [
  {
    title: "Ashokan Brahmi Rock Edict (Girnar)",
    category: "Epigraphical Inscription",
    description: "3rd Century BCE Mauryan rock inscription in Brahmi script and Prakrit language.",
    promptHint: "Rock inscription with Brahmi characters carved into polished granite boulder.",
    simulatedResult: {
      title: "Ashokan Major Rock Edict VII & IX",
      identifiedEpoch: "c. 257 BCE (Mauryan Empire / Emperor Ashoka Maurya)",
      material: "Porphyritic Granite Boulder with Alkali-glazed Polish",
      scriptIdentified: "Ashokan Brahmi Script (Magadhi Prakrit Language)",
      transliteration: "𑀤𑁂𑀯𑀸𑀦𑀁𑀧𑀺𑀬𑀲 𑀧𑀺𑀬𑀤𑀲𑀺𑀦𑁄 𑀭𑀜𑁄 (Devanaṁpiyasa Piyadasino Raño)",
      translation: "King Piyadassi, Beloved of the Gods, desires that in all places should reside men of diverse faiths and self-restraint.",
      iconographicCanon: "Linear 14-edict epigraphical grid with standard 18mm character height.",
      talamanaRatios: "Standardized Mauryan royal chisel depth: 2.5mm groove cross-section.",
      astronomicalSignificance: "Promulgated during the full moon of Ashadha (summer solstice season).",
      sensorRecommendations: [
        "RTI Photometric Stereo with grazing light at 15° elevation",
        "3D Optical Profilometry for chisel groove micro-wear",
        "Hyperspectral imaging at 940nm NIR to detect residual iron pigment in grooves"
      ],
      conservationStatus: "Stable granite substrate; slight surface biological patina.",
      fullScholarlyAnalysis: "The Girnar rock edict in Junagadh, Gujarat represents one of the best-preserved epigraphical records of Ashoka's moral edicts (Dharmalipi). The epigraph exhibits classic Mauryan monumental Brahmi letterforms with distinct circular 'ma' and cross-shaped 'ka'."
    }
  },
  {
    title: "Indus Valley Pashupati Steatite Seal",
    category: "Pictography & Seal Glyphs",
    description: "c. 2500 BCE Mohenjo-daro steatite seal depicting seated yogic figure surrounded by animals.",
    promptHint: "Steatite square seal with horned figure in yogic Mulabandhasana posture, flanked by elephant, tiger, rhino, and water buffalo.",
    simulatedResult: {
      title: "Pashupati / Mahayogi Steatite Stamp Seal (Seal 420)",
      identifiedEpoch: "Mature Harappan Phase (c. 2600–1900 BCE)",
      material: "Fired Steatite (Soapstone) with High-Temperature Alkali Glaze",
      scriptIdentified: "Indus Valley / Saraswati Logosyllabic Script",
      transliteration: "7-glyph upper pictographic inscription (Signs M-001, M-048, M-112, M-245)",
      translation: "Sacred lord of creatures / Auspicious planetary conjunction guardian invocation.",
      iconographicCanon: "Ithiphallic Proto-Shiva seated on throne in Mulabandhasana (heels pressed to perineum), wearing trishula horned crown.",
      talamanaRatios: "Micro-iconometry: 3.4cm x 3.4cm square format with 1:1 bilateral symmetry.",
      astronomicalSignificance: "Horned deity correlates with Taurus (Rishabha) constellation and winter solstice star alignments.",
      sensorRecommendations: [
        "Micro-CT 3D X-Ray Scanning for internal steatite grain structure",
        "pXRF elemental assay to confirm magnesium silicate talc composition",
        "Confocal 3D microscopy to identify rotary burr intaglio carving marks"
      ],
      conservationStatus: "Intact seal body; minor micro-flaking at lower right corner.",
      fullScholarlyAnalysis: "Discovered during the 1928–29 excavations at Mohenjo-daro by Ernest Mackay, this masterpiece represents the earliest known visual depiction of Yogic posture (Mulabandhasana/Bhadrasana) and animal master iconography in the ancient world."
    }
  },
  {
    title: "Chola Dynasty Bronze Nataraja",
    category: "Iconometric Sculpture",
    description: "11th Century CE Tamil Nadu lost-wax cire perdue bronze sculpture of Shiva cosmic dancer.",
    promptHint: "Bronze sculpture of dancing Shiva inside flame halo (Prabhavali), standing on dwarf Apasmara.",
    simulatedResult: {
      title: "Ananda Tandava Nataraja (Cosmic Dancer)",
      identifiedEpoch: "c. 1050 CE (Imperial Chola Dynasty / Rajendra Chola I)",
      material: "Ashtadhatu (Eight-Metal Alloy: Copper 85%, Tin 10%, Lead 3%, trace Zn, Fe, Ag, Au)",
      scriptIdentified: "Tamil Grantha donor dedicatory inscription on pedestal base",
      transliteration: "Chidambaram Sabhai Tiruppani (Dedicated to the Golden Hall)",
      translation: "Eternal dance of creation (Srishti), preservation (Sthiti), destruction (Samhara), illusion (Tirobhava), and liberation (Anugraha).",
      iconographicCanon: "Uttama Dasha Tala (120 Angulas); Abhaya Mudra (upper right), Agni (upper left), Gajahasta (lower left crossing chest), Varada (lower right).",
      talamanaRatios: "Perfect 1:1.618 golden ratio scaling between torso height and Prabhavali flame halo radius.",
      astronomicalSignificance: "Prabhavali contains 27 flame tongues corresponding to the 27 Nakshatras circling the cosmic pole.",
      sensorRecommendations: [
        "Portable XRF (pXRF) for elemental metallurgical composition map",
        "High-density 3D Structured Light photogrammetry for Talamana verification",
        "Gamma Radiography to inspect lost-wax clay core residue"
      ],
      conservationStatus: "Excellent preservation with authentic dark olive-green copper patina.",
      fullScholarlyAnalysis: "A quintessential exemplar of Chola bronzecasting excellence, this icon harmonizes sublime aesthetic ecstasy with rigorous Agamic mathematical canon."
    }
  }
];

export default function ArtifactScanner() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<ArtifactAnalysisResult | null>(null);
  const [contextHint, setContextHint] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Live Camera states
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  // Photo Enhancement Filters
  const [activeFilter, setActiveFilter] = useState<"normal" | "dstretch" | "invert_rubbing" | "edge_sobel" | "infrared" | "uv_boost">("normal");

  // Camera start / stop
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      mediaStreamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setIsCameraActive(true);
    } catch (err) {
      console.error("Camera access error:", err);
      alert("Could not access camera. Please check camera permissions.");
    }
  };

  const stopCamera = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    setIsCameraActive(false);
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
    setImagePreview(dataUrl);
    stopCamera();
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const handleImageUpload = (file: File) => {
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleScan = async (presetResult?: any, presetHint?: string) => {
    if (presetResult) {
      setLoading(true);
      setTimeout(() => {
        setAnalysisResult(presetResult);
        setLoading(false);
      }, 700);
      return;
    }

    if (!imagePreview) return;
    setLoading(true);

    try {
      const cleanBase64 = imagePreview.split(",")[1];
      const res = await fetch("/api/analyze-artifact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: cleanBase64,
          artifactType: "Indic Archaeological Specimen / Inscription / Sculpture",
          contextNote: contextHint || "High-resolution artifact scan"
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setAnalysisResult(data);
      } else {
        alert(data.error || "Failed to analyze artifact.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Helper for filter CSS style
  const getFilterStyle = () => {
    switch (activeFilter) {
      case "dstretch":
        return "contrast(200%) saturate(250%) brightness(110%) hue-rotate(20deg)";
      case "invert_rubbing":
        return "invert(100%) contrast(180%) grayscale(100%)";
      case "edge_sobel":
        return "contrast(250%) grayscale(100%) brightness(130%)";
      case "infrared":
        return "hue-rotate(180deg) saturate(300%) contrast(150%)";
      case "uv_boost":
        return "hue-rotate(270deg) contrast(170%) brightness(120%)";
      default:
        return "none";
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#1b1915] via-[#26201a] to-[#12100d] text-stone-100 p-6 md:p-8 rounded-3xl border border-amber-900/40 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 border border-amber-500/40 text-amber-300 text-xs font-mono mb-2">
            <Scan className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>MULTIMODAL GEMINI ARCHAEOLOGICAL VISION SCANNER</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#fbf6ec]">
            Multimodal Artifact, Camera & Photo Lab
          </h2>
          <p className="text-sm text-stone-300 font-sans mt-1 max-w-2xl">
            Live camera video capture, multi-spectrum enhancement filters (DStretch LDS, Inverted Estampage, False-Color Infrared, UV Boost), script decipherment, and Talamana iconometry.
          </p>
        </div>

        <div className="text-right bg-black/40 p-4 rounded-2xl border border-amber-900/40 w-full md:w-auto">
          <div className="text-[10px] uppercase font-mono text-amber-400 font-bold">Vision Engine</div>
          <div className="text-xl font-mono font-bold text-emerald-300">
            Multimodal Indic AI
          </div>
          <div className="text-[10px] font-mono text-stone-400">
            Live Camera + DStretch Filters
          </div>
        </div>
      </div>

      {/* Main Upload / Camera / Enhancement Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Upload & Camera Station */}
        <div className="bg-[#1c1611] border-2 border-amber-900/40 rounded-3xl p-6 md:p-8 shadow-xl text-stone-100 space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold font-serif uppercase tracking-wider text-amber-300">
                Artifact Image Acquisition
              </h3>
              <div className="flex gap-2">
                {!isCameraActive ? (
                  <button
                    onClick={startCamera}
                    className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-300 border border-stone-700 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Open Camera</span>
                  </button>
                ) : (
                  <button
                    onClick={stopCamera}
                    className="px-3 py-1 bg-red-950 text-red-300 border border-red-800 rounded-lg text-xs font-mono cursor-pointer"
                  >
                    Cancel Camera
                  </button>
                )}
              </div>
            </div>

            {/* Live Camera View or Upload Box */}
            {isCameraActive ? (
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500 bg-black min-h-[220px] flex flex-col items-center justify-center">
                <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover rounded-xl" />
                <button
                  onClick={capturePhoto}
                  className="absolute bottom-4 px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl cursor-pointer"
                >
                  <Camera className="w-4 h-4" />
                  <span>Capture Frame</span>
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-[#caa87a]/60 hover:border-amber-500 bg-stone-950/60 rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[200px] group"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                  className="hidden"
                />

                {imagePreview ? (
                  <div className="relative w-full max-h-56 flex justify-center">
                    <img
                      src={imagePreview}
                      alt="Artifact Upload Preview"
                      style={{ filter: getFilterStyle() }}
                      className="max-h-52 rounded-xl object-contain shadow-md transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center text-white text-xs font-mono font-bold">
                      Click to choose different photo
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-full bg-amber-950 text-amber-300 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Upload className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-serif font-bold text-stone-200">
                      Click to upload photo or capture via camera
                    </p>
                    <p className="text-[11px] font-mono text-stone-500">
                      Supports high-resolution macro photography, palm-leaves, rock edicts
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Photo Enhancement Filter Deck */}
            {imagePreview && (
              <div className="mt-4 space-y-2">
                <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
                  Photo Enhancement Matrix:
                </span>
                <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono">
                  {[
                    { id: "normal", label: "Normal Spectrum" },
                    { id: "dstretch", label: "DStretch (Ochre)" },
                    { id: "invert_rubbing", label: "Estampage Invert" },
                    { id: "edge_sobel", label: "Chisel Sobel" },
                    { id: "infrared", label: "Thermal False-Color" },
                    { id: "uv_boost", label: "UV Fluorescent" },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setActiveFilter(f.id as any)}
                      className={`p-1.5 rounded-lg border text-center transition-all cursor-pointer ${
                        activeFilter === f.id
                          ? "bg-amber-900 text-amber-200 border-amber-400 font-bold"
                          : "bg-stone-900 text-stone-400 border-stone-800 hover:text-white"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-3">
              <input
                type="text"
                value={contextHint}
                onChange={(e) => setContextHint(e.target.value)}
                placeholder="Optional provenance hint: e.g., Found at Junagadh, 3rd c. BCE..."
                className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2 text-xs text-stone-200 font-serif outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <button
            onClick={() => handleScan()}
            disabled={loading || !imagePreview}
            className="w-full py-3 bg-gradient-to-r from-amber-700 via-orange-800 to-amber-900 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 transition-all cursor-pointer mt-4"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4 text-amber-300" />}
            <span>Execute Multimodal Deep AI Scan</span>
          </button>
        </div>

        {/* Right: High-Resolution Archaeological Presets */}
        <div className="bg-[#1c1611] border-2 border-amber-900/40 rounded-3xl p-6 md:p-8 shadow-xl text-stone-100 space-y-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-amber-400">
              OR TEST BENCHMARK ARTIFACTS
            </span>
            <h3 className="text-lg font-bold font-serif text-stone-100 mt-0.5">
              Pre-Loaded Landmark Artifact Samples
            </h3>
          </div>

          <div className="space-y-3">
            {SAMPLE_ARTIFACT_IMAGES.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => handleScan(sample.simulatedResult, sample.promptHint)}
                className="w-full text-left p-4 rounded-2xl bg-stone-950 border border-stone-800 hover:border-amber-500/60 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-serif font-bold text-stone-200 group-hover:text-amber-300">
                    {sample.title}
                  </span>
                  <span className="text-[10px] font-mono text-amber-300 font-bold bg-amber-950 px-2 py-0.5 rounded-full border border-amber-800">
                    {sample.category}
                  </span>
                </div>
                <p className="text-[11px] text-stone-400 font-sans line-clamp-2">
                  {sample.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Multimodal Scan Results Display */}
      {analysisResult && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1c1611] text-stone-100 rounded-3xl p-6 md:p-8 border-2 border-amber-500/40 shadow-2xl space-y-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-stone-800">
            <div>
              <div className="text-xs font-mono text-amber-400 font-bold uppercase">
                MULTIMODAL ARTIFACT IDENTIFICATION REPORT
              </div>
              <h4 className="text-2xl font-bold font-serif text-stone-100 mt-0.5">
                {analysisResult.title} ({analysisResult.material})
              </h4>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-mono uppercase text-stone-400 block">Identified Epoch</span>
              <span className="text-base font-serif font-bold text-emerald-400">
                {analysisResult.identifiedEpoch}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800">
              <span className="text-xs font-mono uppercase font-bold text-amber-400 block mb-1">
                Identified Script & Language:
              </span>
              <p className="text-sm font-serif text-stone-200">{analysisResult.scriptIdentified}</p>
            </div>

            <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400 block mb-1">
                Conservation Status:
              </span>
              <p className="text-sm font-serif text-stone-200">{analysisResult.conservationStatus}</p>
            </div>
          </div>

          {analysisResult.transliteration && (
            <div className="p-5 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
              <span className="text-xs font-mono uppercase font-bold text-amber-300 block">
                Inscription Decipherment / Pictographic Reading:
              </span>
              <p className="text-base font-serif text-amber-200 leading-relaxed bg-black/60 p-3 rounded-xl border border-stone-800">
                {analysisResult.transliteration}
              </p>
              {analysisResult.translation && (
                <p className="text-xs font-serif text-stone-300 italic">
                  Translation: "{analysisResult.translation}"
                </p>
              )}
            </div>
          )}

          <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-1 text-xs font-serif">
            <span className="font-mono uppercase font-bold text-cyan-400 block">
              Scholarly Archaeo-Scientific Synthesis:
            </span>
            <p className="text-stone-300 leading-relaxed">{analysisResult.fullScholarlyAnalysis}</p>
          </div>

          <div className="p-4 bg-amber-950/40 rounded-2xl border border-amber-600/40 text-xs font-mono text-amber-200 flex items-start gap-2">
            <Cpu className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold uppercase text-amber-300 block mb-1">
                Recommended Sensor & Telemetry Follow-Up:
              </span>
              <ul className="list-disc pl-4 space-y-0.5">
                {analysisResult.sensorRecommendations.map((rec, i) => (
                  <li key={i}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
