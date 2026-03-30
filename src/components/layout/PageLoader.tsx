import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { OrbitLoaderVisual } from "../ui/OrbitBrandMark";

const LOAD_MS = 1500;
const FADE_MS = 0.45;

type PageLoaderProps = {
  onExitComplete: () => void;
};

export function PageLoader({ onExitComplete }: PageLoaderProps) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const loadMs = reduce ? 320 : LOAD_MS;

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), loadMs);
    return () => clearTimeout(t);
  }, [loadMs]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleExitComplete = () => {
    document.body.style.overflow = "";
    onExitComplete();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="loader"
          role="status"
          aria-live="polite"
          aria-label="Cargando"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-canvas"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.2 : FADE_MS, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <OrbitLoaderVisual fillDurationSec={loadMs / 1000} />
            <motion.p
              className="text-base font-semibold tracking-[0.3em] text-white/50 md:text-lg"
              animate={reduce ? {} : { opacity: [0.45, 0.95, 0.45] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              CARGANDO
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
