import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Volume2, 
  VolumeX, 
  Waves, 
  Sparkles, 
  Activity, 
  Play, 
  Square, 
  Layers, 
  Sliders, 
  Music, 
  Compass,
  Radio
} from "lucide-react";

const MUSICAL_PILLARS = [
  { note: "Sa (Shadja)", freq: 240, raga: "Bhairav", desc: "Fundamental earth tone / monolithic granite base resonance" },
  { note: "Ri (Rishabha)", freq: 270, raga: "Kalyani", desc: "Second modal resonance in hollow granite bore" },
  { note: "Ga (Gandhara)", freq: 300, raga: "Bhairavi", desc: "Major third overtone produced by slender shaft column" },
  { note: "Ma (Madhyama)", freq: 320, raga: "Todi", desc: "Fourth tone reflecting internal crystalline quartz lattice" },
  { note: "Pa (Panchama)", freq: 360, raga: "Kedar", desc: "Perfect fifth resonance matching Vedic chant Svarita pitch" },
  { note: "Dha (Dhaivata)", freq: 400, raga: "Yaman", desc: "Sixth harmonic stone shear-wave dispersion" },
  { note: "Ni (Nishada)", freq: 450, raga: "Kafi", desc: "Seventh leading tone from bell-metal granite alloy" },
  { note: "Sa' (Tara Shadja)", freq: 480, raga: "Shankarabharanam", desc: "Octave harmonic apex resonance" }
];

export default function SoundographyLab() {
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [rt60Time, setRt60Time] = useState<number>(3.8); // seconds
  const [sanctumVolume, setSanctumVolume] = useState<number>(450); // cubic meters
  const [chantFrequency, setChantFrequency] = useState<number>(432); // Hz (Omkara)
  const [isPlayingChant, setIsPlayingChant] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const chantOscRef = useRef<OscillatorNode | null>(null);
  const chantGainRef = useRef<GainNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Play single musical pillar tone with metallic stone damping
  const playPillarTone = (freq: number, noteName: string) => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = audioCtxRef.current || new AudioContextClass();
      audioCtxRef.current = ctx;

      setActiveNote(noteName);

      // Create dual oscillators for metallic-stone inharmonic overtones
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(freq, ctx.currentTime);

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(freq * 2.76, ctx.currentTime); // Inharmonic lithophone overtone

      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.4);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 2.5);
      osc2.stop(ctx.currentTime + 2.5);

      setTimeout(() => {
        setActiveNote(null);
      }, 600);
    } catch (err) {
      console.error("Audio playback error:", err);
    }
  };

  // Toggle continuous 432Hz Omkara / Garbhagriha drone
  const toggleChant = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = audioCtxRef.current || new AudioContextClass();
      audioCtxRef.current = ctx;

      if (isPlayingChant) {
        if (chantOscRef.current && chantGainRef.current) {
          chantGainRef.current.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
          setTimeout(() => {
            chantOscRef.current?.stop();
            chantOscRef.current?.disconnect();
            chantOscRef.current = null;
          }, 500);
        }
        setIsPlayingChant(false);
      } else {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(chantFrequency, ctx.currentTime);

        // Sub-harmonic for deep chest resonance
        const subOsc = ctx.createOscillator();
        subOsc.type = "triangle";
        subOsc.frequency.setValueAtTime(chantFrequency / 4, ctx.currentTime); // 108 Hz

        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 1.2);

        osc.connect(gain);
        subOsc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        subOsc.start();

        chantOscRef.current = osc;
        chantGainRef.current = gain;
        setIsPlayingChant(true);
      }
    } catch (err) {
      console.error("Chant audio error:", err);
    }
  };

  // Animate live frequency waterfall sonogram canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let offset = 0;
    const render = () => {
      offset += 0.05;
      ctx.fillStyle = "#0c0a09";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw acoustic wave harmonics
      ctx.lineWidth = 2;
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.strokeStyle = i === 1 ? "#f59e0b" : i === 2 ? "#06b6d4" : i === 3 ? "#10b981" : "#8b5cf6";
        for (let x = 0; x < canvas.width; x += 4) {
          const freqMultiplier = isPlayingChant ? 2.5 : 1.0;
          const y = canvas.height / 2 + Math.sin((x * 0.02 * i) + offset) * (15 * i * freqMultiplier) * Math.sin(x * 0.005);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlayingChant]);

  useEffect(() => {
    return () => {
      if (chantOscRef.current) {
        try {
          chantOscRef.current.stop();
          chantOscRef.current.disconnect();
        } catch (_) {}
      }
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#1a1410] via-[#241a12] to-[#120c08] text-stone-100 p-6 md:p-8 rounded-3xl border border-amber-900/40 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 border border-amber-500/40 text-amber-300 text-xs font-mono mb-2">
            <Waves className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>ARCHAEO-ACOUSTICS & SOUNDOGRAPHY CHAMBER</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#fbf4ea]">
            Acoustic Modal Resonance & Soundography
          </h2>
          <p className="text-sm text-stone-300 font-sans mt-1 max-w-2xl">
            Experience the physics of solid granite musical pillars (Vittala Temple Hampi, Nellaiappar), temple sanctum reverberation times ($RT_{60}$), and 432Hz Omkara harmonic soundscapes.
          </p>
        </div>

        <div className="text-right bg-black/40 p-4 rounded-2xl border border-amber-900/40 w-full md:w-auto">
          <div className="text-[10px] uppercase font-mono text-amber-400 font-bold">Lithophone Mode</div>
          <div className="text-xl font-mono font-bold text-amber-300">
            Hampi & Nellaiappar
          </div>
          <div className="text-[10px] font-mono text-stone-400">
            Granite Shear-Wave Dispersion
          </div>
        </div>
      </div>

      {/* Musical Pillars Section */}
      <div className="bg-[#1c1611] border-2 border-amber-900/40 rounded-3xl p-6 md:p-8 shadow-xl text-stone-100 space-y-6">
        <div className="flex justify-between items-center pb-3 border-b border-stone-800">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-amber-400">
              SOUTH INDIAN TEMPLE MUSICAL PILLARS (LITHOPHONES)
            </span>
            <h3 className="text-2xl font-bold font-serif text-[#fbf4ea] mt-0.5">
              Interactive 7-Svara Granite Column Array
            </h3>
          </div>
          <span className="text-xs font-mono text-stone-400">Tap columns to trigger resonance</span>
        </div>

        {/* Column Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {MUSICAL_PILLARS.map((p) => {
            const isSelected = activeNote === p.note;
            return (
              <button
                key={p.note}
                onClick={() => playPillarTone(p.freq, p.note)}
                className={`p-4 rounded-2xl border flex flex-col items-center justify-between min-h-[140px] transition-all cursor-pointer group ${
                  isSelected
                    ? "bg-gradient-to-t from-amber-700 to-orange-800 border-amber-400 text-white shadow-xl scale-105"
                    : "bg-stone-900 border-stone-800 text-stone-300 hover:border-amber-600 hover:bg-stone-800"
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-stone-400 group-hover:text-amber-300">
                  {p.freq} Hz
                </div>
                <div className="w-6 h-16 bg-gradient-to-b from-stone-700 to-stone-900 rounded-lg border border-stone-600 group-hover:border-amber-400 transition-colors my-2" />
                <div className="font-serif font-bold text-xs text-center">{p.note}</div>
              </button>
            );
          })}
        </div>

        <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 text-xs font-serif text-stone-300">
          <span className="font-bold text-amber-400 block mb-1">Lithophone Acoustic Physics:</span>
          The columns at Vittala Temple Hampi were carved from monolithic syenite/granite with variable shaft thicknesses and hollow cores, allowing each column to vibrate in fundamental bending and torsional modes that produce exact musical pitch intervals.
        </div>
      </div>

      {/* Sanctum Reverberation & Sonogram Waterfall */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Garbhagriha RT60 Simulator */}
        <div className="bg-[#1c1611] border-2 border-amber-900/40 rounded-3xl p-6 shadow-xl text-stone-100 space-y-5">
          <div className="flex justify-between items-center pb-2 border-b border-stone-800">
            <span className="text-xs font-mono font-bold uppercase text-amber-400">
              GARBHAGRIHA SANCTUM ACOUSTIC PARAMETERS
            </span>
            <span className="text-[10px] font-mono text-stone-400">Sabine Formula</span>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono text-stone-400 mb-1">
              <span>Sanctum Reverberation Time (RT₆₀):</span>
              <span className="text-cyan-300 font-bold">{rt60Time.toFixed(1)} s</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="6.5"
              step="0.1"
              value={rt60Time}
              onChange={(e) => setRt60Time(parseFloat(e.target.value))}
              className="w-full accent-cyan-500 bg-stone-800 cursor-pointer"
            />
            <div className="flex justify-between text-[9px] font-mono text-stone-500 mt-1">
              <span>1.0s (Small Shrine)</span>
              <span>3.8s (Brihadisvara Granite Sanctum)</span>
              <span>6.5s (Cathedral Vault)</span>
            </div>
          </div>

          {/* Continuous Chant Synthesizer */}
          <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-stone-300 font-bold">432Hz Omkara Harmonic Drone:</span>
              <button
                onClick={toggleChant}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isPlayingChant
                    ? "bg-amber-900 text-amber-200 border border-amber-500 shadow-md animate-pulse"
                    : "bg-stone-900 text-stone-300 border border-stone-700 hover:bg-stone-800"
                }`}
              >
                {isPlayingChant ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlayingChant ? "Halt Drone" : "Generate 432Hz Drone"}</span>
              </button>
            </div>
            <p className="text-[11px] font-serif text-stone-400">
              Synthesizes a 432Hz fundamental carrier wave overlaid with a 108Hz sub-octave chest resonance, replicating the acoustic focal standing wave inside monolithic stone shrines.
            </p>
          </div>
        </div>

        {/* Live Frequency Waterfall Canvas */}
        <div className="bg-[#1c1611] border-2 border-amber-900/40 rounded-3xl p-6 shadow-xl text-stone-100 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-stone-800">
            <span className="text-xs font-mono font-bold uppercase text-amber-400">
              ACOUSTIC FREQUENCY SPECTRUM WATERFALL
            </span>
            <span className="text-[10px] font-mono text-emerald-400">Live Waveform FFT</span>
          </div>

          <div className="flex justify-center">
            <canvas
              ref={canvasRef}
              width={500}
              height={180}
              className="w-full max-w-full rounded-2xl border border-stone-800 shadow-inner"
            />
          </div>

          <div className="flex justify-between text-[10px] font-mono text-stone-400">
            <span>Fundamental: 108Hz / 432Hz</span>
            <span>Harmonics: 864Hz, 1296Hz, 1728Hz</span>
          </div>
        </div>
      </div>
    </div>
  );
}
