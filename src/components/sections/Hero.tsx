import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticLink } from "../ui/MagneticLink";

const HEADLINE = "Creo webs que convierten visitas en clientes";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const itemBlur = (reduce: boolean | null) => ({
  hidden: {
    opacity: 0,
    y: reduce ? 10 : 22,
    filter: reduce ? "blur(0px)" : "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
});

const GLITCH_KEY = "pf_hero_glitch_v1";

type HeroProps = {
  pageReady: boolean;
};

export function Hero({ pageReady }: HeroProps) {
  const reduce = useReducedMotion();
  const [glitchOn, setGlitchOn] = useState(false);

  const words = useMemo(() => HEADLINE.split(" "), []);

  useEffect(() => {
    if (!pageReady || reduce) return;
    try {
      if (sessionStorage.getItem(GLITCH_KEY)) return;
      sessionStorage.setItem(GLITCH_KEY, "1");
      setGlitchOn(true);
      const t = window.setTimeout(() => setGlitchOn(false), 720);
      return () => window.clearTimeout(t);
    } catch {
      return undefined;
    }
  }, [pageReady, reduce]);

  return (
    <section
      id="inicio"
      className="relative z-10 flex min-h-[100svh] flex-col justify-center px-4 pb-24 pt-28 md:px-6 md:pb-32 md:pt-32"
    >
      <motion.div
        className="mx-auto w-full max-w-4xl"
        variants={container}
        initial="hidden"
        animate={pageReady ? "show" : "hidden"}
      >
        <motion.p
          variants={itemBlur(reduce)}
          className="mb-4 text-base font-medium uppercase tracking-[0.18em] text-neon-purple/90 md:text-lg"
        >
          Desarrollo web orientado a resultados
        </motion.p>

        <motion.div variants={itemBlur(reduce)}>
          <h1
            className={`text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl ${
              !reduce ? "hero-headline-glow" : ""
            } ${glitchOn ? "hero-glitch-once" : ""}`}
          >
            <span className="flex flex-wrap gap-x-[0.28em] gap-y-1">
            {words.map((word, i) => (
              <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-0.5">
                <motion.span
                  className="inline-block"
                  initial={false}
                  animate={
                    pageReady
                      ? { y: 0, opacity: 1 }
                      : { y: reduce ? 0 : "108%", opacity: reduce ? 1 : 0 }
                  }
                  transition={{
                    delay: pageReady ? 0.05 + i * 0.045 : 0,
                    duration: reduce ? 0 : 0.52,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemBlur(reduce)}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/55 md:text-xl"
        >
          Ayudo a negocios a aumentar su presencia online con páginas modernas,
          rápidas y optimizadas para vender.
        </motion.p>
        <motion.div
          variants={itemBlur(reduce)}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticLink
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-white px-9 py-4 text-base font-semibold text-canvas shadow-lg transition-[box-shadow] duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_48px_-6px_rgba(255,255,255,0.45)] active:scale-[0.98] md:px-10 md:py-[1.1rem] md:text-[1.05rem]"
          >
            Pedí tu web ahora
          </MagneticLink>
          <MagneticLink
            href="#proyectos"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-9 py-4 text-base font-medium text-white/85 backdrop-blur-md transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out hover:scale-[1.03] hover:border-white/28 hover:bg-white/[0.09] hover:shadow-glow-mixed active:scale-[0.98] md:px-10 md:py-[1.1rem] md:text-[1.05rem]"
            strength={0.18}
            maxShift={8}
          >
            Ver proyectos
          </MagneticLink>
        </motion.div>
      </motion.div>

      <motion.div
        className="mx-auto mt-20 flex max-w-4xl flex-col items-center gap-4 text-center md:mt-24"
        initial={{ opacity: 0, y: 16 }}
        animate={pageReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ delay: pageReady ? 0.75 : 0, duration: 0.55 }}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-white/35 md:text-base">
          Más conversiones · Mejor imagen · Menos fricción
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base text-white/30 md:text-[1.05rem]">
          {["Performance", "SEO", "Móvil primero", "UX clara"].map((t, idx) => (
            <span key={t} className="flex items-center gap-2">
              {idx > 0 && (
                <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
              )}
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
