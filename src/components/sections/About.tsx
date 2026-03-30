import { motion, useReducedMotion } from "framer-motion";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="sobre-mi"
      className="relative z-10 scroll-mt-28 px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={
            reduce
              ? { opacity: 0, y: 8 }
              : { opacity: 0, y: 28, filter: "blur(12px)" }
          }
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-md max-md:backdrop-blur-sm md:p-12"
        >
          <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-neon-blue/90 md:text-lg">
            Sobre mí
          </h2>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-4xl">
            Código limpio, comunicación clara y entregas que cumplen.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/55 md:text-xl">
            Soy desarrollador especializado en el ecosistema moderno de la web.
            Me importa que cada proyecto sea mantenible, rápido de cargar y
            fácil de usar en cualquier dispositivo. Trabajo directo contigo: me
            cuentas qué necesitás, yo me encargo del resto — sin vueltas ni
            tecnicismos innecesarios. Vos no tenés que pensar en documentación ni
            en procesos internos; yo me ocupo de que todo quede claro y usable
            para tu negocio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
