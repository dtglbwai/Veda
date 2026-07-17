import { motion } from "motion/react";
import { Play, Info } from "lucide-react";

interface ScriptureVideoProps {
  topic: string;
}

// Simplified mapping for demonstration. In a real app, this could be dynamic or fetched from an API.
const VIDEO_MAP: Record<string, { id: string; title: string }> = {
  "Rigveda": { id: "aI_Oid0r8XY", title: "Introduction to Rigveda" },
  "Bhagavad Gita": { id: "287kU0-V-qU", title: "The Essence of Gita" },
  "Upanishads": { id: "f_E_s9R_6f0", title: "Wisdom of Upanishads" },
  "Yoga Sutras": { id: "W1Z7WJv-Z-w", title: "Patanjali Yoga Sutras Explained" },
  "Srimad Bhagavatam": { id: "jI1hS0G8v0A", title: "Bhagavata Purana Overview" },
  "Puranas": { id: "8nN1M9L-uD0", title: "The 18 Puranas" },
  "Agamas (Rituals)": { id: "fX4K6bW-fUo", title: "Vedic Ritual Mechanics" },
};

const DEFAULT_VIDEO = { id: "Z79tYFm8U-Y", title: "Ancient Vedic Wisdom" };

export default function ScriptureVideo({ topic }: ScriptureVideoProps) {
  const video = VIDEO_MAP[topic] || DEFAULT_VIDEO;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mb-6 bg-stone-900/5 rounded-xl border border-orange-900/10 p-2 overflow-hidden shadow-sm"
      id="video-section"
    >
      <div className="flex items-center gap-2 mb-2 px-2">
        <Play className="w-3 h-3 text-orange-800" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600">
           Visual Discourse: {video.title}
        </span>
      </div>
      <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="opacity-90 hover:opacity-100 transition-opacity"
        ></iframe>
      </div>
    </motion.div>
  );
}
