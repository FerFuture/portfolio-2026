import { useCallback, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type MagneticLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  strength?: number;
  maxShift?: number;
  target?: string;
  rel?: string;
  title?: string;
  download?: string | boolean;
  "aria-label"?: string;
};

export function MagneticLink({
  href,
  className,
  children,
  strength = 0.22,
  maxShift = 10,
  target,
  rel,
  title,
  download,
  "aria-label": ariaLabel,
}: MagneticLinkProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const [shift, setShift] = useState({ x: 0, y: 0 });

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (reduce) return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      let x = (e.clientX - cx) * strength;
      let y = (e.clientY - cy) * strength;
      const m = maxShift;
      x = Math.max(-m, Math.min(m, x));
      y = Math.max(-m, Math.min(m, y));
      setShift({ x, y });
    },
    [reduce, strength, maxShift]
  );

  const onLeave = useCallback(() => setShift({ x: 0, y: 0 }), []);

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      target={target}
      rel={rel}
      title={title}
      download={download}
      aria-label={ariaLabel}
      style={{ x: shift.x, y: shift.y }}
      transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.4 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.a>
  );
}
