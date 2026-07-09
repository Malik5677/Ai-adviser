import { motion } from "framer-motion";

const blobs = [
  { color: "#22d3ee", size: 560, top: "-10%", left: "-10%", duration: 22 },
  { color: "#8b5cf6", size: 620, top: "20%", left: "60%", duration: 26 },
  { color: "#fbbf24", size: 420, top: "60%", left: "5%", duration: 30 },
  { color: "#2563eb", size: 500, top: "65%", left: "65%", duration: 24 }
];

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-niilm-navy" aria-hidden="true">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: `radial-gradient(circle at 30% 30%, ${b.color}55, transparent 70%)`
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.15, 0.95, 1]
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0b1120_85%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
        }}
      />
    </div>
  );
}
