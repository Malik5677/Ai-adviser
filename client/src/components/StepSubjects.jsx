import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import StepShell from "./StepShell";
import SelectCard from "./SelectCard";
<<<<<<< HEAD
import { sfx } from "../utils/sound";

/**
 * Generic multi-select subject step. The caller decides which subject list
 * to show (`subjectList`) — Class 10 passes a board-specific list, Class 12
 * passes the fixed SUBJECTS_12 list. This keeps the two paths from ever
 * mixing up Class 10 and Class 12 subjects (that mismatch used to cause
 * nonsensical recommendations).
 */
export default function StepSubjects({ subjectList, subtitle, value = [], onNext, onBack }) {
=======
import { SUBJECTS } from "../data/niilmData";
import { sfx } from "../utils/sound";

export default function StepSubjects({ value = [], onNext, onBack }) {
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
  const [selected, setSelected] = useState(value);

  const toggle = (id) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
  };

  return (
    <StepShell
      title="Which subjects do you enjoy most?"
<<<<<<< HEAD
      subtitle={subtitle || "Pick one or more — this helps us understand your strengths."}
=======
      subtitle="Pick one or more — this helps us understand your strengths."
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
      onBack={onBack}
      wide
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<<<<<<< HEAD
        {subjectList.map((s, i) => (
=======
        {SUBJECTS.map((s, i) => (
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
          <SelectCard
            key={s.id}
            label={s.label}
            icon={s.icon}
            index={i}
            selected={selected.includes(s.id)}
            onClick={() => toggle(s.id)}
          />
        ))}
      </div>

      <motion.button
        type="button"
        disabled={selected.length === 0}
        onClick={() => {
          sfx.advance();
          onNext(selected);
        }}
        whileHover={selected.length ? { scale: 1.04 } : {}}
        whileTap={selected.length ? { scale: 0.96 } : {}}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-niilm-cyan to-niilm-violet px-7 py-3.5 font-semibold text-niilm-navy disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
      >
        Continue
        <ArrowRight size={17} />
      </motion.button>
    </StepShell>
  );
}
