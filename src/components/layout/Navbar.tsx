import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { WHATSAPP_URL } from "../../constants/whatsapp";
import { NavOrbitMark } from "../ui/OrbitBrandMark";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#por-que", label: "Por qué" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

/** Móvil: cerrar el drawer desmonta el <a> antes de que iOS/Android apliquen el hash; scroll manual tras el cierre. */
const MOBILE_MENU_CLOSE_MS = 320;

function scrollToSectionHash(hash: string) {
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return;
  const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  window.history.replaceState(null, "", hash);
}

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 48);
  });

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6"
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-3.5 transition-[background-color,backdrop-filter,border-color] duration-300 md:gap-5 md:px-6 md:py-4 ${
          scrolled
            ? "border-white/10 bg-canvas/75 shadow-lg shadow-black/20 backdrop-blur-xl max-md:backdrop-blur-md"
            : "border-white/[0.06] bg-white/[0.02] backdrop-blur-md max-md:backdrop-blur-sm"
        }`}
      >
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-2.5 text-white no-underline md:gap-3"
          onClick={(e) => {
            const wasOpen = open;
            setOpen(false);
            if (
              typeof window === "undefined" ||
              window.innerWidth >= 768 ||
              !wasOpen
            ) {
              return;
            }
            e.preventDefault();
            window.setTimeout(
              () => scrollToSectionHash("#inicio"),
              MOBILE_MENU_CLOSE_MS
            );
          }}
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] shadow-[0_0_20px_-6px_rgba(139,92,246,0.35)] md:h-10 md:w-10"
            aria-hidden
          >
            <NavOrbitMark />
          </span>
          <span className="truncate text-base font-semibold leading-tight tracking-tight md:text-lg lg:text-xl">
            Fernando Jimenez
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex lg:gap-1">
          {links.map((l) => (
            <li key={l.href} className="flex items-center">
              <a
                href={l.href}
                className="nav-link-item inline-flex origin-center items-center justify-center px-3 py-2.5 transition-transform duration-300 ease-out md:hover:scale-[1.1] lg:px-3.5"
              >
                <span className="nav-link-label">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-neon-purple/50 bg-neon-purple/10 px-5 py-2.5 text-base font-medium text-white shadow-glow-purple transition-[box-shadow,border-color,background-color,transform] duration-300 ease-out hover:scale-[1.03] hover:border-neon-purple/70 hover:bg-neon-purple/20 hover:shadow-[0_0_50px_-12px_rgba(139,92,246,0.55)] active:scale-[0.98] md:inline-flex lg:px-6 lg:py-3 lg:text-[1.05rem]"
          >
            Pedí tu web
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-lg text-white/85 md:hidden"
            aria-expanded={open}
            aria-label="Menú"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-canvas/95 backdrop-blur-xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col p-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block origin-left touch-manipulation rounded-xl px-4 py-3.5 text-base text-white/80 transition-[color,background-color,box-shadow,transform] duration-300 ease-out hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_28px_-8px_rgba(139,92,246,0.4),0_0_20px_-10px_rgba(59,130,246,0.25)] active:scale-[0.99] hover:scale-[1.02]"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      const hash = l.href;
                      window.setTimeout(
                        () => scrollToSectionHash(hash),
                        MOBILE_MENU_CLOSE_MS
                      );
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="px-2 pb-2 pt-1">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-neon-purple/40 bg-neon-purple/15 py-3.5 text-center text-base font-medium text-white transition-[box-shadow,transform,border-color,background-color] duration-300 ease-out hover:scale-[1.02] hover:border-neon-purple/60 hover:bg-neon-purple/22 hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.5),0_0_28px_-10px_rgba(59,130,246,0.3)] active:scale-[0.98]"
                  onClick={() => setOpen(false)}
                >
                  Pedí tu web
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
