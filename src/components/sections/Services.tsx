import { motion } from "framer-motion";
import { services, type ServiceAccent } from "../../data/services";

const accentStyles: Record<
  ServiceAccent,
  { icon: string; border: string; floor: string; shadow: string }
> = {
  cyan: {
    icon: "text-neon-blue",
    border: "border-neon-blue/35 hover:border-neon-blue/55",
    floor: "from-neon-blue/25 to-transparent",
    shadow: "shadow-card-cyan hover:shadow-[0_24px_60px_-12px_rgba(59,130,246,0.45)]",
  },
  purple: {
    icon: "text-neon-purple",
    border: "border-neon-purple/35 hover:border-neon-purple/55",
    floor: "from-neon-purple/25 to-transparent",
    shadow:
      "shadow-card-purple hover:shadow-[0_24px_60px_-12px_rgba(139,92,246,0.45)]",
  },
  lime: {
    icon: "text-lime-400",
    border: "border-lime-400/30 hover:border-lime-400/50",
    floor: "from-lime-400/20 to-transparent",
    shadow:
      "shadow-card-lime hover:shadow-[0_24px_60px_-12px_rgba(163,230,53,0.28)]",
  },
};

function ServiceIcon({ accent }: { accent: ServiceAccent }) {
  const c = accentStyles[accent].icon;
  if (accent === "cyan") {
    return (
      <svg
        className={c}
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden
      >
        <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        <path d="M8 12h8M8 16h5" />
      </svg>
    );
  }
  if (accent === "purple") {
    return (
      <svg
        className={c}
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M11 14h2a2 2 0 002-2v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2z" />
        <path d="M15 10V8a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-1" />
        <path d="M7 18v-2a2 2 0 012-2h2" />
      </svg>
    );
  }
  return (
    <svg
      className={c}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

export function Services() {
  return (
    <section
      id="servicios"
      className="relative z-10 scroll-mt-28 px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neon-purple/90 md:text-lg">
            Servicios
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.5rem]">
            Lo que construyo contigo
          </p>
          <p className="mt-4 text-lg text-white/50 md:text-xl">
            Tres pilares para llevar tu producto o marca al siguiente nivel en la
            web.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const st = accentStyles[s.accent];
            return (
              <motion.article
                key={s.id}
                className="group relative"
                initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <div
                  className={`pointer-events-none absolute -bottom-6 left-1/2 h-24 w-[85%] -translate-x-1/2 rounded-full bg-gradient-to-t ${st.floor} blur-2xl opacity-60 transition-opacity duration-500 ease-out group-hover:opacity-100`}
                  aria-hidden
                />
                <motion.div
                  className={`relative flex h-full flex-col rounded-3xl border border-white/[0.08] border-b-2 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8 backdrop-blur-xl max-md:backdrop-blur-md ${st.border} ${st.shadow} transition-[border-color,box-shadow] duration-500 ease-out ${
                    s.accent === "cyan"
                      ? "border-b-neon-blue/70"
                      : s.accent === "purple"
                        ? "border-b-neon-purple/70"
                        : "border-b-lime-400/55"
                  }`}
                  whileHover={{ scale: 1.04 }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 26,
                    mass: 0.34,
                  }}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <ServiceIcon accent={s.accent} />
                  </div>
                  <h3 className="text-xl font-semibold text-white md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-white/50 md:text-lg">
                    {s.description}
                  </p>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
