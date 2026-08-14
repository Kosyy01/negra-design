"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import MagneticButton from "@/ui/MagneticButton";
import ScrollCue from "@/ui/ScrollCue";

const TITLE_LINES = ["Każdy budynek zaczyna się", "od decyzji, której nie widać."];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { x, y } = useMousePosition();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const parallaxX = typeof window !== "undefined" ? (x / window.innerWidth - 0.5) * 20 : 0;
  const parallaxY = typeof window !== "undefined" ? (y / window.innerHeight - 0.5) * 20 : 0;

  return (
    <section
      id="start"
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-graphite-900"
    >
      {/* Tło z parallaksą scrollową + subtelną parallaksą myszy */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 h-[125%] w-full">
        <motion.div
          animate={{ x: parallaxX, y: parallaxY }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="h-full w-full scale-110"
        >
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2400&auto=format&fit=crop"
            alt="Nowoczesna architektura w otoczeniu miejskim, projekt studia NEGRA DESIGN"
            fill
            priority
            className="object-cover object-center opacity-45"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-900/60 via-graphite-900/70 to-graphite-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-900/40 via-transparent to-graphite-900/40" />
      </motion.div>

      {/* Treść */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="annotation mb-6 text-bone/60"
        >
          Projekt · Wizualizacja · Realizacja
        </motion.span>

        <h1 className="max-w-4xl font-sora text-4xl font-light leading-[1.15] text-bone sm:text-5xl md:text-6xl lg:text-7xl">
          {TITLE_LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 0.4 + i * 0.12,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-5 font-sora text-2xl font-semibold tracking-wide text-copper sm:text-3xl"
        >
          NEGRA DESIGN
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mt-6 max-w-xl text-balance text-sm leading-relaxed text-bone-dim sm:text-base"
        >
          Projektujemy architekturę, wnętrza i wizualizacje 3D dla inwestorów,
          którzy traktują detal jako standard, a nie dodatek. Od pierwszego
          szkicu po nadzór nad realizacją — jeden zespół, jedna wizja.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton variant="filled">Umów konsultację</MagneticButton>
          <MagneticButton variant="outline" href="#realizacje">
            Zobacz realizacje
          </MagneticButton>
        </motion.div>
      </motion.div>

      <ScrollCue />
    </section>
  );
}
