"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ScrollCue() {
  const { t } = useLanguage();
  return (
    <div className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
      <span className="annotation rotate-0 text-bone/50">{t.common.scroll}</span>
      <div className="relative h-16 w-px overflow-hidden bg-bone/15">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="absolute h-1/2 w-px bg-copper"
        />
      </div>
      {/* podziałka jak na rysunku technicznym */}
      <div className="flex flex-col items-center gap-1">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-px w-2 bg-bone/25" />
        ))}
      </div>
    </div>
  );
}
