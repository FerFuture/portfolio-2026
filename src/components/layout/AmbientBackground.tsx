import { motion, useReducedMotion } from "framer-motion";

export function AmbientBackground() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute -right-32 -top-32 h-[min(80vw,640px)] w-[min(80vw,640px)] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-48 left-1/4 h-[50vh] w-[50vw] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute -right-[20%] -top-[15%] h-[min(90vw,720px)] w-[min(90vw,720px)] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(59,130,246,0.12) 45%, transparent 68%)",
        }}
        animate={{
          opacity: [0.4, 0.56, 0.4],
          scale: [1, 1.05, 1],
          x: [0, 10, 0],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -left-[10%] top-1/3 h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 65%)",
        }}
        animate={{
          opacity: [0.18, 0.32, 0.18],
          scale: [1, 1.04, 1],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-[40vh] w-[80vw] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 60%)",
        }}
        animate={{ opacity: [0.35, 0.5, 0.35] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </div>
  );
}
