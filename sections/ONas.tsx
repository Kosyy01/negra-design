"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Layers, Ruler } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const VALUE_ICONS = [Compass, Layers, Ruler];

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.8, ease: EASE },
  }),
};

export default function ONas() {
  const { t } = useLanguage();
  const STATS = t.onas.stats;
  const VALUES = t.onas.values.map((v, i) => ({ ...v, icon: VALUE_ICONS[i] }));

  return (
    <section
      id="o-nas"
      className="relative w-full overflow-hidden bg-graphite-950 py-24 sm:py-32"
    >
      {/* Pionowa linia pionu — spójna z motywem Hero/Kontakt */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-bone/5 lg:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* Kolumna wizualna */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
              alt={t.onas.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/50 via-transparent to-transparent" />
          </div>

          {/* Narożniki jak na rysunku technicznym */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-3 -top-3 h-8 w-8 border-l border-t border-copper/50 sm:-left-4 sm:-top-4"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-3 -right-3 h-8 w-8 border-b border-r border-copper/50 sm:-bottom-4 sm:-right-4"
          />

          {/* Karta ze statystyką, zakotwiczona na krawędzi zdjęcia */}
          <div className="absolute -bottom-6 left-6 flex items-center gap-4 rounded-xl border border-bone/10 bg-graphite-900/90 px-5 py-4 backdrop-blur-md sm:left-8 sm:px-6 sm:py-5">
            <span className="font-sora text-3xl font-semibold text-copper sm:text-4xl">
              {STATS[0].value}
            </span>
            <span className="max-w-[7rem] text-xs leading-snug text-bone-dim">
              {STATS[0].label}
            </span>
          </div>
        </motion.div>

        {/* Kolumna treści */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 flex flex-col lg:order-2"
        >
          <motion.span variants={fadeUp} custom={0} className="annotation text-copper">
            {t.onas.badge}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 max-w-lg font-sora text-4xl font-light leading-[1.15] text-bone sm:text-5xl"
          >
            {t.onas.heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-lg text-balance text-sm leading-relaxed text-bone-dim sm:text-base"
          >
            {t.onas.paragraph}
          </motion.p>

          {/* Statystyki */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-10 grid grid-cols-3 gap-6 border-y border-bone/10 py-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-sora text-2xl font-semibold text-bone sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs leading-snug text-bone-dim sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Wartości */}
          <motion.ul variants={fadeUp} custom={4} className="mt-10 flex flex-col gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bone/15 text-copper">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span className="flex flex-col">
                  <span className="font-sora text-base text-bone">{title}</span>
                  <span className="mt-1 text-sm leading-relaxed text-bone-dim">
                    {desc}
                  </span>
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
