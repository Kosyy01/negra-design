"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { Locale } from "@/types";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LocaleFlag } from "@/ui/LocaleFlags";
import { cn } from "@/lib/utils";

const OPTIONS: { locale: Locale; code: string; name: string }[] = [
  { locale: "pl", code: "PL", name: "Polski" },
  { locale: "en-GB", code: "EN-GB", name: "English (UK)" },
  { locale: "en-US", code: "EN-US", name: "English (US)" },
  { locale: "de", code: "DE", name: "Deutsch" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export default function LanguageSwitcher({
  variant = "desktop",
  className,
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const current = OPTIONS.find((o) => o.locale === locale) ?? OPTIONS[0];

  if (variant === "mobile") {
    return (
      <div className={cn("grid grid-cols-4 gap-2", className)}>
        {OPTIONS.map((option) => {
          const active = option.locale === locale;
          return (
            <button
              key={option.locale}
              type="button"
              onClick={() => setLocale(option.locale)}
              data-cursor-hover
              aria-label={option.name}
              aria-pressed={active}
              className={cn(
                "flex flex-col items-center gap-1.5 rounded-xl border px-2 py-2.5 transition-colors duration-300",
                active
                  ? "border-copper bg-copper/10"
                  : "border-bone/15 hover:border-bone/30"
              )}
            >
              <LocaleFlag locale={option.locale} className="h-4 w-6 rounded-[3px] object-cover" />
              <span
                className={cn(
                  "text-[10px] font-medium tracking-wide",
                  active ? "text-copper" : "text-bone/60"
                )}
              >
                {option.code}
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        data-cursor-hover
        aria-label={t.common.changeLanguage}
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-transparent px-2 py-1.5 text-sm text-bone/70 transition-colors hover:border-bone/15 hover:text-copper"
      >
        <LocaleFlag locale={current.locale} className="h-3.5 w-5 rounded-[2px] object-cover" />
        {current.code}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-300", open && "rotate-180")}
          strokeWidth={1.5}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="absolute right-0 top-full z-10 mt-2 w-48 overflow-hidden rounded-2xl border border-bone/10 bg-graphite-900/95 p-1.5 shadow-2xl backdrop-blur-xl"
          >
            {OPTIONS.map((option) => {
              const active = option.locale === locale;
              return (
                <button
                  key={option.locale}
                  type="button"
                  onClick={() => {
                    setLocale(option.locale);
                    setOpen(false);
                  }}
                  data-cursor-hover
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors duration-200",
                    active ? "bg-copper/10 text-copper" : "text-bone/80 hover:bg-bone/5"
                  )}
                >
                  <LocaleFlag locale={option.locale} className="h-3.5 w-5 shrink-0 rounded-[2px] object-cover" />
                  <span className="flex-1">{option.name}</span>
                  {active && <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
