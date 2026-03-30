import { motion } from "framer-motion";

const points = [
  {
    title: "Diseño enfocado en conversión",
    body: "Cada sección guía al visitante hacia una acción clara: contacto, reserva o compra.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    ),
  },
  {
    title: "Webs rápidas y optimizadas",
    body: "Código y assets pensados para cargar en segundos y posicionar mejor en buscadores.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "Adaptadas a celulares",
    body: "Tu sitio se ve y funciona impecable en móvil, donde está la mayoría de tus clientes.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Soporte y acompañamiento",
    body: "No te dejo solo: ajustes, mejoras y orientación para que sigas creciendo online.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WhyWorkWithMe() {
  return (
    <section
      id="por-que"
      className="relative z-10 scroll-mt-28 px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neon-purple/90 md:text-lg">
            Ventajas
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.5rem]">
            ¿Por qué trabajar conmigo?
          </p>
          <p className="mt-4 text-lg text-white/50 md:text-xl">
            Un enfoque práctico: menos relleno, más resultados medibles para tu
            negocio.
          </p>
        </motion.div>

        <motion.ul
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {points.map((p) => (
            <motion.li key={p.title} variants={item}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-md transition-[border-color,box-shadow,transform] duration-500 ease-out hover:border-white/15 hover:shadow-[0_20px_50px_-20px_rgba(139,92,246,0.2)] hover:-translate-y-0.5 max-md:backdrop-blur-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-neon-purple/25 bg-neon-purple/10 text-neon-purple transition-[border-color,box-shadow] duration-500 group-hover:border-neon-purple/45 group-hover:shadow-[0_0_24px_-6px_rgba(139,92,246,0.45)]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    {p.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-white/50">
                  {p.body}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
