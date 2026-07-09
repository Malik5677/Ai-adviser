import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { sfx } from "../utils/sound";

export default function StepShell({ title, subtitle, onBack, children, wide = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="relative z-10 w-full flex flex-col items-center px-6 py-16 min-h-[100dvh]"
    >
      {onBack && (
        <button
          type="button"
          onClick={() => {
            sfx.click();
            onBack();
          }}
          className="absolute left-5 top-5 flex items-center gap-1.5 text-sm text-slate-400 hover:text-niilm-cyan transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      )}

      <div className={`w-full ${wide ? "max-w-3xl" : "max-w-xl"} mx-auto text-center mt-10`}>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-2xl sm:text-3xl"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-2 text-slate-400 text-sm sm:text-base"
          >
            {subtitle}
          </motion.p>
        )}

        <div className="mt-10">{children}</div>
      </div>
    </motion.div>
  );
}
