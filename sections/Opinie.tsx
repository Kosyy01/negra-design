"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.8, ease: EASE },
  }),
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Opinie() {
  const { t } = useLanguage();
  const items = t.opinie.testimonials;

  const [perView, setPerView] = useState(3);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth < 768) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const pageCount = Math.ceil(items.length / perView);

  // Chronimy przed wyjściem poza zakres przy zmianie liczby kart na widoku (np. resize).
  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const goTo = (next: number) => {
    setDirection(next > page ? 1 : -1);
    setPage(((next % pageCount) + pageCount) % pageCount);
  };

  const visible = items.slice(page * perView, page * perView + perView);

  return (
    <section
      id="opinie"
      className="relative w-full overflow-hidden bg-graphite-900 py-24 sm:py-32"
    >
      {/* Pionowa linia pionu — spójna z motywem pozostałych sekcji */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-bone/5 lg:block" />
      <div className="pointer-events-none absolute left-0 top-1/3 -z-0 h-[26rem] w-[26rem] rounded-full bg-copper/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {/* Nagłówek + strzałki nawigacji */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end"
        >
          <div className="max-w-lg">
            <motion.span variants={fadeUp} custom={0} className="annotation text-copper">
              {t.opinie.badge}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-6 font-sora text-4xl font-light leading-[1.15] text-bone sm:text-5xl"
            >
              {t.opinie.heading}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-5 max-w-md text-balance text-sm leading-relaxed text-bone-dim sm:text-base"
            >
              {t.opinie.paragraph}
            </motion.p>
          </div>

          {pageCount > 1 && (
            <motion.div variants={fadeUp} custom={3} className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                data-cursor-hover
                aria-label={t.opinie.prevAria}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors duration-300 hover:border-copper hover:text-copper"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => goTo(page + 1)}
                data-cursor-hover
                aria-label={t.opinie.nextAria}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors duration-300 hover:border-copper hover:text-copper"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Karuzela — 3 karty w linii (desktop), 2 (tablet), 1 (mobile) */}
        <div className="relative mt-14 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={page}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.5, ease: EASE }}
              className={cn(
                "grid gap-6",
                perView === 1 && "grid-cols-1",
                perView === 2 && "grid-cols-2",
                perView === 3 && "grid-cols-3"
              )}
            >
              {visible.map((item) => (
                <div
                  key={item.name}
                  className="relative flex flex-col justify-between rounded-2xl border border-bone/10 bg-graphite-800/40 p-6 backdrop-blur-sm sm:p-7"
                >
                  <Quote
                    className="h-7 w-7 text-copper/40"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-bone-dim sm:text-base">
                    „{item.quote}”
                  </p>
                  <div className="mt-7 flex items-center gap-3 border-t border-bone/10 pt-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-copper/40 font-sora text-sm font-semibold text-copper">
                      {initials(item.name)}
                    </span>
                    <span className="flex flex-col">
                      <span className="font-sora text-sm text-bone">{item.name}</span>
                      <span className="text-xs leading-snug text-bone-dim">{item.role}</span>
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Podziałka jak na rysunku technicznym — wskaźnik aktualnej strony */}
        {pageCount > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${t.opinie.dotAria} ${i + 1}`}
                data-cursor-hover
                className="p-1"
              >
                <span
                  className={cn(
                    "block h-px transition-all duration-300",
                    i === page ? "w-8 bg-copper" : "w-4 bg-bone/25"
                  )}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
