import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import StepShell from "./StepShell";
import { STREAMS } from "../data/niilmData";
import { sfx } from "../utils/sound";

export default function StepStream({ value, onNext, onBack }) {
  return (
    <StepShell
      title="Which stream do you want to take?"
      subtitle="This is the big choice for Class 11 & 12 — pick what excites you most."
      onBack={onBack}
      wide
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {STREAMS.map((s, i) => {
          const Icon = Icons[s.icon] || Icons.Sparkles;
          const selected = value === s.id;
          return (
            <motion.button
              key={s.id}
              type="button"
              onClick={() => {
                sfx.select();
                onNext(s.id);
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, type: "spring", stiffness: 140, damping: 16 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-4 rounded-2xl px-5 py-5 text-left glass-card transition-colors
                ${selected ? "border-niilm-cyan/80 shadow-[0_0_25px_-3px_rgba(34,211,238,0.55)]" : "border-white/10 hover:border-niilm-violet/60"}`}
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-xl shrink-0
                ${selected ? "bg-niilm-cyan/20 text-niilm-cyan" : "bg-white/5 text-slate-300"}`}
              >
                <Icon size={24} strokeWidth={1.8} />
              </div>
              <div>
                <div className="font-semibold text-slate-100">{s.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.description}</div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </StepShell>
  );
}
