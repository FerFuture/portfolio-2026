import { motion, useReducedMotion } from "framer-motion";

const particles = [
  { l: "8%", t: "18%", d: 0 },
  { l: "22%", t: "62%", d: 1.2 },
  { l: "78%", t: "14%", d: 0.6 },
  { l: "88%", t: "48%", d: 2.1 },
  { l: "45%", t: "88%", d: 1.5 },
  { l: "62%", t: "32%", d: 0.9 },
  { l: "15%", t: "42%", d: 1.8 },
  { l: "92%", t: "78%", d: 0.3 },
];

export function TechBackdrop() {
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[0] overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, black 10%, transparent 75%)",
        }}
      />
      {!reduce &&
        particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/25"
            style={{ left: p.l, top: p.t }}
            animate={{ opacity: [0.08, 0.35, 0.08], scale: [1, 1.2, 1] }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.d,
            }}
          />
        ))}
    </div>
  );
}
