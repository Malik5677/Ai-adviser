import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
<<<<<<< HEAD
import * as Icons from "lucide-react";
=======
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
import { RefreshCcw, Sparkles, Star } from "lucide-react";
import TypingText from "./TypingText";
import CareerTimeline from "./CareerTimeline";
import ProgramCard from "./ProgramCard";
import { CAREER_JOURNEY, DREAM_COMPANIES } from "../data/niilmData";
import { sfx } from "../utils/sound";

function fireConfetti() {
  const colors = ["#22d3ee", "#8b5cf6", "#fbbf24", "#2563eb"];
  const duration = 1600;
  const end = Date.now() + duration;

  (function frame() {
    confetti({ particleCount: 4, angle: 60, spread: 65, origin: { x: 0 }, colors });
    confetti({ particleCount: 4, angle: 120, spread: 65, origin: { x: 1 }, colors });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();

  confetti({ particleCount: 90, spread: 100, origin: { y: 0.35 }, colors, startVelocity: 45 });
}

<<<<<<< HEAD
function StreamHero({ stream }) {
  const Icon = Icons[stream.icon] || Icons.Sparkles;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 16 }}
      className="w-full max-w-md mx-auto rounded-3xl glass-card border-niilm-cyan/50 shadow-[0_0_45px_-10px_rgba(34,211,238,0.5)] p-8 text-center"
    >
      <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-2xl bg-niilm-cyan/15 text-niilm-cyan mb-5">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <span className="inline-block text-[10px] uppercase tracking-wider bg-niilm-gold text-niilm-navy font-bold px-2.5 py-1 rounded-full mb-3">
        Recommended Stream
      </span>
      <h3 className="font-display font-bold text-2xl">{stream.label}</h3>
      <p className="text-slate-400 text-sm mt-1">{stream.description}</p>
    </motion.div>
  );
}

=======
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
export default function Result({ name, result, onRestart }) {
  const [headlineDone, setHeadlineDone] = useState(false);

  useEffect(() => {
    fireConfetti();
    sfx.reveal();
  }, []);

  if (!result) return null;
<<<<<<< HEAD
  const { type, primary, alternates = [], recommendedStream, futurePrograms = [], headline, reasoning, encouragement, source } = result;
  const isStream = type === "stream";
=======
  const { primary, alternates = [], headline, reasoning, encouragement, source } = result;
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative z-10 w-full flex flex-col items-center px-6 py-16 min-h-[100dvh]"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full glass-card border-niilm-cyan/30 text-xs uppercase tracking-[0.2em] text-niilm-cyan"
      >
        <Sparkles size={14} />
<<<<<<< HEAD
        {source === "nvidia-ai-flavor" ? "Styled by NVIDIA AI" : "Recommendation Ready"}
=======
        {source === "nvidia-ai" ? "Recommendation by NVIDIA AI" : "Recommendation Ready"}
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
      </motion.div>

      <div className="max-w-2xl text-center min-h-[3.5rem]">
        <h2 className="font-display font-bold text-2xl sm:text-4xl">
          <TypingText text={headline || `${name}, here's your perfect fit!`} speed={20} onDone={() => setHeadlineDone(true)} />
        </h2>
      </div>

      {headlineDone && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 max-w-2xl text-center text-slate-300 text-sm sm:text-base"
        >
          {reasoning}
        </motion.p>
      )}

<<<<<<< HEAD
      <div className="mt-10 w-full max-w-2xl">
        {isStream ? <StreamHero stream={recommendedStream} /> : <ProgramCard program={primary} featured />}
      </div>
=======
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 16 }}
        className="mt-10 w-full max-w-2xl"
      >
        <ProgramCard program={primary} featured />
      </motion.div>
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

      {encouragement && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 flex items-center gap-2 text-niilm-gold text-sm font-medium"
        >
          <Star size={16} className="fill-niilm-gold" />
          {encouragement}
        </motion.p>
      )}

<<<<<<< HEAD
      {isStream && futurePrograms.length > 0 && (
        <div className="mt-14 w-full max-w-4xl">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-slate-400 text-xs uppercase tracking-[0.2em] mb-2"
          >
            What this stream leads to at NIILM
          </motion.h3>
          <p className="text-center text-slate-500 text-xs mb-6">
            These are for later, after Class 12 — not something to enrol in right now.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {futurePrograms.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>
        </div>
      )}

      {!isStream && alternates.length > 0 && (
=======
      {alternates.length > 0 && (
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
        <div className="mt-14 w-full max-w-4xl">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-slate-400 text-xs uppercase tracking-[0.2em] mb-6"
          >
            Other great options for you
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {alternates.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-16 w-full max-w-4xl">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 text-xs uppercase tracking-[0.2em] mb-8"
        >
          Your Career Journey at NIILM
        </motion.h3>
        <CareerTimeline steps={CAREER_JOURNEY} />
      </div>

      <div className="mt-14 w-full max-w-3xl text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-5"
        >
          Dream Companies Hiring NIILM Graduates
        </motion.h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {DREAM_COMPANIES.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 rounded-full glass-card border-white/10 text-sm text-slate-200"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => {
          sfx.click();
          onRestart();
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-16 inline-flex items-center gap-2 rounded-full glass-card border-white/15 px-6 py-3 text-sm text-slate-200 hover:text-niilm-cyan hover:border-niilm-cyan/50 transition-colors"
      >
        <RefreshCcw size={15} />
        Try again with someone else
      </motion.button>
    </motion.div>
  );
}
