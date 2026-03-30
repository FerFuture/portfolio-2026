import { useId, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const LOADER_R = 30;

/** Compact orbit mark for navbar — full gradient ring + subtle track. */
export function NavOrbitMark({ className = "" }: { className?: string }) {
  const raw = useId().replace(/:/g, "");
  const gid = `nav-orbit-${raw}`;

  return (
    <svg
      viewBox="0 0 44 44"
      className={`h-[22px] w-[22px] shrink-0 md:h-[26px] md:w-[26px] ${className}`}
      aria-hidden
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <circle
        cx="22"
        cy="22"
        r="16"
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="2"
      />
      <circle
        cx="22"
        cy="22"
        r="16"
        fill="none"
        stroke={`url(#${gid})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

type OrbitLoaderVisualProps = {
  /** Seconds for the ring to draw from empty to full (sync with PageLoader timeout). */
  fillDurationSec: number;
};

/** Full-screen loader: ring fills 0→100% over load time; particles + glow preserved. */
export function OrbitLoaderVisual({ fillDurationSec }: OrbitLoaderVisualProps) {
  const reduce = useReducedMotion();
  const raw = useId().replace(/:/g, "");
  const gid = `load-orbit-${raw}`;

  const circumference = useMemo(
    () => 2 * Math.PI * LOADER_R,
    []
  );

  const drawDuration = reduce ? 0.12 : Math.max(0.35, fillDurationSec);

  return (
    <div className="relative flex h-[76px] w-[76px] items-center justify-center">
      <div
        className="absolute inset-[-20%] rounded-full opacity-80 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(59,130,246,0.12) 45%, transparent 70%)",
        }}
        aria-hidden
      />

      <motion.div
        className="relative flex h-[68px] w-[68px] items-center justify-center"
        animate={reduce ? {} : { scale: [1, 1.025, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="68"
          height="68"
          viewBox="0 0 72 72"
          className="relative z-[1]"
          aria-hidden
        >
          <defs>
            <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <circle
            cx="36"
            cy="36"
            r={LOADER_R}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="2.5"
          />
          <motion.circle
            cx="36"
            cy="36"
            r={LOADER_R}
            fill="none"
            stroke={`url(#${gid})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            transform="rotate(-90 36 36)"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: drawDuration,
              ease: [0.22, 0.92, 0.2, 1],
            }}
          />
        </svg>

        {!reduce && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-[2]"
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            {[0, 72, 144, 216, 288].map((deg) => (
              <div
                key={deg}
                className="absolute inset-0"
                style={{ transform: `rotate(${deg}deg)` }}
              >
                <span
                  className="absolute left-1/2 top-[5px] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/85"
                  style={{
                    boxShadow:
                      "0 0 10px rgba(139,92,246,0.85), 0 0 4px rgba(59,130,246,0.55)",
                  }}
                  aria-hidden
                />
              </div>
            ))}
          </motion.div>
        )}

        {!reduce && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-0"
            animate={{ opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <div
              className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-purple/40 blur-[2px]"
              style={{ transform: "translate(-50%, -50%) translate(18px, -10px)" }}
            />
            <div
              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-blue/50 blur-[1px]"
              style={{ transform: "translate(-50%, -50%) translate(-16px, 14px)" }}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
