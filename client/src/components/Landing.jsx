import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { sfx } from "../utils/sound";

export default function Landing({ onStart }) {
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 min-h-[100dvh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.05, duration: 0.5 }}
      >
        <div style={{ width: 92, height: 92, color: "white" }}>
          AI
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="flex items-center gap-2 -mt-2 mb-6 px-4 py-1.5 rounded-full glass-card border-niilm-cyan/30 text-xs uppercase tracking-[0.2em] text-niilm-cyan"
      >
        <Sparkles size={14} />
        NIILM University · AI Career Advisor
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl leading-[1.05] max-w-4xl"
      >
        Discover the Career{" "}
        <span className="text-gradient">Built for You</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-6 max-w-xl text-slate-300 text-base sm:text-lg"
      >
        Answer a few quick questions and let AI — powered by NVIDIA — match you
        with the perfect program at NIILM University.
      </motion.p>

      <motion.button
        type="button"
        onClick={() => {
          sfx.advance();
          onStart?.();
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 40px -6px rgba(34,211,238,0.65)",
        }}
        whileTap={{ scale: 0.96 }}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-niilm-cyan via-niilm-blue to-niilm-violet px-8 py-4 font-semibold text-niilm-navy shadow-[0_0_30px_-6px_rgba(34,211,238,0.5)]"
      >
        Start My Journey
        <ArrowRight size={18} />
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-400 text-xs uppercase tracking-wider"
      >
        <span>Est. 2011 · UGC Recognised</span>
        <span className="hidden sm:inline">•</span>
        <span>AI-Integrated Campus</span>
        <span className="hidden sm:inline">•</span>
        <span>Kaithal, Haryana</span>
      </motion.div>
    </motion.div>
  );
}