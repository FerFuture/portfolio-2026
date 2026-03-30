import { motion } from "framer-motion";
import { projects } from "../../data/projects";

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 32, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Projects() {
  return (
    <section
      id="proyectos"
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
          <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neon-blue/90 md:text-lg">
            Proyectos
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.5rem]">
            Resultados reales para negocios como el tuyo
          </p>
          <p className="mt-4 text-lg text-white/50 md:text-xl">
            Sitios pensados para generar confianza, consultas y ventas — sin
            sacrificar velocidad ni claridad.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
        >
          {projects.map((p) => (
            <motion.article
              key={p.id}
              variants={card}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-lg transition-[border-color,box-shadow,transform] duration-500 ease-out hover:-translate-y-0.5 hover:border-neon-purple/40 hover:shadow-glow-purple"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas via-canvas/55 to-canvas/20 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 shadow-[inset_0_0_0_1px_rgba(139,92,246,0.45)] transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 opacity-0 transition-opacity duration-500 ease-out group-hover:pointer-events-auto group-hover:opacity-100">
                  <a
                    href={p.caseStudyUrl ?? "#proyectos"}
                    className="pointer-events-auto inline-flex min-w-[11rem] items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-3 text-base font-semibold text-white backdrop-blur-md transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out hover:scale-[1.04] hover:border-white/40 hover:bg-white/18 hover:shadow-[0_0_32px_-6px_rgba(139,92,246,0.5)] active:scale-[0.98]"
                  >
                    Ver proyecto
                  </a>
                  <a
                    href="#contacto"
                    className="pointer-events-auto inline-flex min-w-[11rem] items-center justify-center rounded-full border border-neon-purple/45 bg-neon-purple/20 px-5 py-3 text-base font-semibold text-white backdrop-blur-md transition-[transform,box-shadow,background-color] duration-300 ease-out hover:scale-[1.04] hover:bg-neon-purple/30 hover:shadow-[0_0_36px_-4px_rgba(139,92,246,0.55)] active:scale-[0.98]"
                  >
                    Contactar similar
                  </a>
                </div>
              </div>
              <div className="relative p-6">
                <span className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/45 md:text-[13px]">
                  {p.label}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-white/50 md:text-lg">
                  {p.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
