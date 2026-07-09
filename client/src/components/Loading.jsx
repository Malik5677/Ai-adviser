import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AIBrain from "./AIBrain";
import { sfx } from "../utils/sound";

const MESSAGES = [
  "Reading your interests...",
  "Matching you against NIILM programs...",
  "Consulting the NVIDIA AI model...",
  "Mapping your ideal career path...",
  "Almost ready..."
];

export default function Loading({ name }) {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      sfx.thinkPulse();
      setMsgIndex((i) => (i + 1) % MESSAGES.length);
    }, 1300);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] px-6 text-center"
    >
      <AIBrain size={200} />
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 font-display text-xl sm:text-2xl font-semibold"
      >
        Analysing {name ? `${name}'s` : "your"} perfect path...
      </motion.h2>
      <motion.p
        key={msgIndex}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="mt-3 text-slate-400 text-sm sm:text-base h-6"
      >
        {MESSAGES[msgIndex]}
      </motion.p>
    </motion.div>
  );
}
