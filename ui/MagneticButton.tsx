"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "filled" | "outline";
  onClick?: () => void;
  href?: string;
}

export default function MagneticButton({
  children,
  className,
  variant = "filled",
  onClick,
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: relX * 0.35, y: relY * 0.35 });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const sharedClassName = cn(
    "relative inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300",
    variant === "filled"
      ? "bg-copper text-graphite-950 hover:bg-copper-light"
      : "border border-bone/25 text-bone hover:border-copper hover:text-copper",
    className
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.5 }}
      className="inline-block"
      data-cursor-hover
    >
      {href ? (
        <a href={href} onClick={onClick} className={sharedClassName}>
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={sharedClassName}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
