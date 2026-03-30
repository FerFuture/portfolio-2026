import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const raf = useRef<number>(0);
  const pending = useRef({ x: 50, y: 40 });

  useEffect(() => {
    if (reduce) return;

    const el = ref.current;
    if (!el) return;

    const fine =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const onMove = (e: MouseEvent) => {
      pending.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        const { x, y } = pending.current;
        el.style.setProperty("--spot-x", `${x}%`);
        el.style.setProperty("--spot-y", `${y}%`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      style={
        {
          "--spot-x": "50%",
          "--spot-y": "40%",
        } as React.CSSProperties
      }
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          background:
            "radial-gradient(600px circle at var(--spot-x) var(--spot-y), rgba(139,92,246,0.14), transparent 55%)",
        }}
      />
    </div>
  );
}
