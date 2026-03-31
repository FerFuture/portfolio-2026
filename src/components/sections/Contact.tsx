import { motion } from "framer-motion";
import { WHATSAPP_URL } from "../../constants/whatsapp";
import { MagneticLink } from "../ui/MagneticLink";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative z-10 scroll-mt-28 px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-white/[0.08] bg-white/[0.03] px-8 py-14 backdrop-blur-xl max-md:backdrop-blur-sm md:px-12 md:py-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            ¿Querés más clientes para tu negocio?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/55 md:text-xl">
            Escribime y empecemos hoy mismo
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              strength={0.26}
              maxShift={12}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-neon-purple to-neon-blue px-11 py-[1.1rem] text-base font-semibold text-white shadow-[0_0_50px_-10px_rgba(139,92,246,0.55),0_0_40px_-12px_rgba(59,130,246,0.35)] transition-[box-shadow,filter] duration-300 ease-out hover:scale-[1.04] hover:shadow-[0_0_70px_-8px_rgba(139,92,246,0.75),0_0_55px_-10px_rgba(59,130,246,0.5),0_0_120px_-30px_rgba(139,92,246,0.35)] active:scale-[0.98] md:px-12 md:text-[1.05rem]"
            >
              Hablar por WhatsApp
            </MagneticLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
