import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, BrainCircuit } from "lucide-react";
import { Scripture } from "../types";

interface PalmLeafProps {
  scripture: Scripture;
}

export default function PalmLeaf({ scripture }: PalmLeafProps) {
  const [showInsight, setShowInsight] = useState(false);
  const rings = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="flex flex-col items-center w-full">
      <motion.div
        initial={{ opacity: 0, rotateX: -95, y: 120 }}
        animate={{ opacity: 1, rotateX: 0, y: 0 }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        className="palm-leaf py-16 px-20 relative"
        id={`leaf-${scripture.verseId}`}
        style={{ transformOrigin: "top" }}
      >
        {/* Spiral Rings */}
        <div className="spiral-container">
          {rings.map((i) => (
            <div key={i} className="spiral-ring" />
          ))}
        </div>

        <div className="palm-leaf-texture" />
        <div className="leaf-punch left-12" />
        <div className="leaf-punch right-12" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full gap-2 pt-16">
          <div className="flex flex-col items-center">
            <span className="text-[8px] uppercase tracking-[0.5em] text-orange-900/40 font-black mb-2">
              {scripture.book} / Chapter {scripture.chapter} / Verse {scripture.verseNumber}
            </span>
            <h2 className="sanskrit-text px-10">
              {scripture.sanskrit}
            </h2>
          </div>
          
          <div className="w-full flex flex-col items-center gap-2">
            <div className="w-24 h-px bg-orange-900/10"></div>
            <p className="english-text">
              {scripture.translation}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <button 
              onClick={() => setShowInsight(!showInsight)}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-900/20 bg-orange-900/5 text-[9px] uppercase font-black tracking-widest text-orange-900 hover:bg-orange-900 hover:text-white transition-all group"
            >
              <BrainCircuit className="w-3 h-3 group-hover:animate-pulse" />
              {showInsight ? "Hide AI Insights" : "Deep AI Insights"}
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showInsight && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            className="w-full max-w-3xl mt-4 bg-stone-900 text-stone-300 p-8 rounded-b-3xl shadow-2xl overflow-hidden border-t-2 border-orange-600/30"
          >
            <div className="flex items-center gap-3 mb-4 text-orange-400">
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] uppercase font-black tracking-[0.3em]">Spiritual Wisdom & Philosophy</span>
            </div>
            <p className="font-serif text-sm md:text-base leading-relaxed italic text-stone-200">
              {scripture.deepInsight}
            </p>
            {scripture.context && (
              <div className="mt-6 pt-6 border-t border-stone-800 text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                Essence: {scripture.context}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
