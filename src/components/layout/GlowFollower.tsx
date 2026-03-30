import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function GlowFollower() {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 420, damping: 38, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 420, damping: 38, mass: 0.35 });

  useEffect(() => {
    if (reduce) return;
    const fine =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, x, y]);

  if (reduce) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-7 w-7 md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      aria-hidden
    >
      <div
        className="h-full w-full rounded-full bg-neon-purple/35 blur-md"
        style={{ boxShadow: "0 0 28px 8px rgba(139, 92, 246, 0.32)" }}
      />
    </motion.div>
  );
}
