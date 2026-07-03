import { motion } from "framer-motion";

export default function ProgressBar({ step, total, labels = [] }) {
  const pct = Math.min(100, Math.round(((step) / (total - 1)) * 100));
  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <div className="flex justify-between mb-2 text-[11px] uppercase tracking-wider text-slate-400">
        <span>
          Step {Math.min(step + 1, total)} of {total}
        </span>
        <span className="text-niilm-cyan">{labels[step] || ""}</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-niilm-cyan via-niilm-violet to-niilm-gold"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
        />
      </div>
    </div>
  );
}
