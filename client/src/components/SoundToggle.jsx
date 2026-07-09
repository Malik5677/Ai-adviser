import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { setSoundEnabled } from "../utils/sound";

export default function SoundToggle() {
  const [on, setOn] = useState(true);

  return (
    <motion.button
      type="button"
      onClick={() => {
        const next = !on;
        setOn(next);
        setSoundEnabled(next);
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed top-5 right-5 z-50 flex items-center justify-center w-11 h-11 rounded-full glass-card border-white/10 text-slate-200 hover:text-niilm-cyan transition-colors"
      aria-label={on ? "Mute sound" : "Unmute sound"}
    >
      {on ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </motion.button>
  );
}
