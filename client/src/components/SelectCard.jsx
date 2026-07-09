import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { sfx } from "../utils/sound";

export default function SelectCard({ label, icon, selected, onClick, index = 0 }) {
  const Icon = Icons[icon] || Icons.Sparkles;

  return (
    <motion.button
      type="button"
      onClick={() => {
        sfx.select();
        onClick();
      }}
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.06, type: "spring", stiffness: 140, damping: 16 }}
      whileHover={{ y: -6, scale: 1.03, rotateX: 4 }}
      whileTap={{ scale: 0.96 }}
      className={`group relative flex flex-col items-center justify-center gap-3 rounded-2xl px-4 py-6 text-center glass-card transition-colors duration-300
        ${selected ? "border-niilm-cyan/80 shadow-[0_0_25px_-3px_rgba(34,211,238,0.55)]" : "border-white/10 hover:border-niilm-violet/60"}
      `}
      style={{ transformStyle: "preserve-3d" }}
    >
      {selected && (
        <motion.div
          layoutId="select-glow"
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-niilm-cyan/15 via-niilm-violet/10 to-transparent"
        />
      )}
      <div
        className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-xl transition-colors
        ${selected ? "bg-niilm-cyan/20 text-niilm-cyan" : "bg-white/5 text-slate-300 group-hover:text-niilm-violet"}`}
      >
        <Icon size={24} strokeWidth={1.8} />
      </div>
      <span className="relative z-10 text-sm font-medium text-slate-100">{label}</span>
    </motion.button>
  );
}
