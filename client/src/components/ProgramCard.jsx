import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { GraduationCap, ArrowUpRight } from "lucide-react";

const GROUP_GRADIENTS = {
  "B.Tech Engineering": "from-niilm-cyan/30 via-niilm-blue/20 to-transparent",
  "Computer Science & Applications": "from-niilm-cyan/30 via-niilm-blue/20 to-transparent",
  "Commerce & Management": "from-niilm-gold/30 via-niilm-violet/20 to-transparent",
  "Legal Studies": "from-niilm-gold/30 via-niilm-blue/20 to-transparent",
  "Pharmaceutical Science": "from-emerald-400/30 via-niilm-cyan/15 to-transparent",
  "Health Science": "from-emerald-400/30 via-niilm-cyan/15 to-transparent",
  "Applied Science": "from-emerald-400/25 via-niilm-blue/15 to-transparent",
  "Agriculture": "from-lime-400/25 via-emerald-400/15 to-transparent",
  "Social Science & Humanities": "from-niilm-violet/30 via-niilm-cyan/15 to-transparent",
  "Journalism & Mass Communication": "from-niilm-violet/30 via-niilm-gold/15 to-transparent",
  "Fashion Designing": "from-pink-400/25 via-niilm-violet/15 to-transparent",
  "Beauty and Wellness": "from-pink-400/25 via-niilm-gold/15 to-transparent",
  "Hospitality & Tourism Management": "from-niilm-gold/25 via-pink-400/10 to-transparent",
  "Working Professionals": "from-niilm-cyan/25 via-niilm-gold/15 to-transparent"
};

export default function ProgramCard({ program, featured = false }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-40, 40], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-40, 40], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const gradient = GROUP_GRADIENTS[program.group] || GROUP_GRADIENTS["B.Tech Engineering"];

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 800 }}
      whileHover={{ scale: 1.015 }}
      className={`relative overflow-hidden rounded-3xl glass-card border-white/10 ${
        featured ? "shadow-[0_0_45px_-10px_rgba(139,92,246,0.5)]" : ""
      }`}
    >
      {/* "Image" hero area — gradient + icon, since no photo assets are bundled */}
      <div className={`relative h-32 sm:h-36 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        <GraduationCap size={44} strokeWidth={1.3} className="text-white/80 drop-shadow" />
        {featured && (
          <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider bg-niilm-gold text-niilm-navy font-bold px-2.5 py-1 rounded-full">
            Best Match
          </span>
        )}
      </div>

      <div className="p-5 sm:p-6 text-left">
        <p className="text-[11px] uppercase tracking-widest text-niilm-cyan/80 mb-1">{program.group}</p>
        <h4 className="font-display font-semibold text-lg sm:text-xl leading-snug">{program.name}</h4>
        <p className="text-slate-400 text-sm mt-1">{program.specialisation}</p>

        {program.careers?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {program.careers.slice(0, 4).map((c) => (
              <span
                key={c}
                className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
              >
                {c}
              </span>
            ))}
          </div>
        )}

        {program.blurb && <p className="mt-4 text-sm text-slate-400 leading-relaxed">{program.blurb}</p>}

        <div className="mt-4 flex items-center gap-1 text-xs text-niilm-cyan/90 font-medium">
          Explore at NIILM
          <ArrowUpRight size={14} />
        </div>
      </div>

      {program.link && (
        <a
          href={program.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 block w-full text-center py-3 border-t border-white/10 text-sm font-semibold text-niilm-cyan hover:bg-white/5 transition-colors"
        >
          Check it out on NIILM University →
        </a>
      )}
    </motion.div>
  );
}
