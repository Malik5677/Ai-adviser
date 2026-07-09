import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { GraduationCap, CheckCircle2, BookOpen, Code2, Building2, Trophy, Cpu, Rocket } from "lucide-react";

const ICONS = [GraduationCap, CheckCircle2, BookOpen, Code2, Building2, Trophy, Cpu, Rocket];

export default function CareerTimeline({ steps = [] }) {
  const pathRef = useRef(null);
  const svgWrapRef = useRef(null);

  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2.2,
      ease: "power2.inOut",
      delay: 0.3
    });
  }, [steps]);

  return (
    <div ref={svgWrapRef} className="relative w-full overflow-x-auto pb-4">
      <div className="relative min-w-[900px] md:min-w-0">
        <svg
          viewBox="0 0 1000 60"
          preserveAspectRatio="none"
          className="absolute top-6 left-0 w-full h-[3px]"
        >
          <path
            ref={pathRef}
            d="M 20 30 L 980 30"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative flex justify-between">
          {steps.map((label, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={label}
                className="flex flex-col items-center gap-2 w-[110px]"
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.15, type: "spring", stiffness: 160, damping: 14 }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full glass-card border-niilm-cyan/40 text-niilm-cyan shadow-[0_0_18px_-4px_rgba(34,211,238,0.6)]">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <span className="text-[11px] text-center text-slate-300 leading-tight">{label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
