import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import StepShell from "./StepShell";
import { sfx } from "../utils/sound";

export default function StepName({ value, onNext, onBack }) {
  const [name, setName] = useState(value || "");

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    sfx.advance();
    onNext(name.trim());
  };

  return (
    <StepShell title="What's your name?" subtitle="Let's make this journey personal." onBack={onBack}>
      <form onSubmit={submit} className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="relative w-full"
        >
          <User
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full rounded-2xl glass-card border-white/10 focus:border-niilm-cyan/70 focus:outline-none focus:ring-2 focus:ring-niilm-cyan/30 py-4 pl-12 pr-4 text-lg text-center sm:text-left placeholder:text-slate-500 transition-colors"
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={!name.trim()}
          whileHover={name.trim() ? { scale: 1.04 } : {}}
          whileTap={name.trim() ? { scale: 0.96 } : {}}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-niilm-cyan to-niilm-violet px-7 py-3.5 font-semibold text-niilm-navy disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
        >
          Continue
          <ArrowRight size={17} />
        </motion.button>
      </form>
    </StepShell>
  );
}
