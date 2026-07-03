import { motion } from "framer-motion";
import { Brain } from "lucide-react";

const orbitDots = [0, 60, 120, 180, 240, 300];

export default function AIBrain({ size = 180 }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Outer pulsing rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-niilm-cyan/40"
          style={{ width: size, height: size }}
          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
        />
      ))}

      {/* Orbiting nodes */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        {orbitDots.map((deg, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-niilm-cyan to-niilm-violet shadow-[0_0_10px_2px_rgba(34,211,238,0.6)]"
            style={{
              transform: `rotate(${deg}deg) translate(${size / 2 - 6}px) rotate(-${deg}deg)`
            }}
          />
        ))}
      </motion.div>

      {/* Glow core */}
      <motion.div
        className="absolute rounded-full bg-niilm-cyan/20 blur-xl"
        style={{ width: size * 0.55, height: size * 0.55 }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Brain icon */}
      <motion.div
        className="relative z-10 text-niilm-cyan"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Brain size={size * 0.32} strokeWidth={1.5} />
      </motion.div>
    </div>
  );
}
