"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LETTERS = "NEGRA DESIGN".split("");

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Osoby preferujące ograniczone animacje nie powinny czekać na pełną sekwencję —
    // skracamy ekran powitalny niemal do minimum.
    const delay = prefersReducedMotion ? 300 : 2600;
    const exitDelay = prefersReducedMotion ? 50 : 900;

    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, exitDelay);
    }, delay);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Wczytywanie strony NEGRA DESIGN"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-graphite-900"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
          }}
        >
          {/* linia pionu - motyw architektoniczny */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-graphite-600">
            <motion.div
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
              className="w-px bg-copper"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="annotation mb-4"
          >
            Witamy w
          </motion.p>

          <div className="flex overflow-hidden px-6">
            {LETTERS.map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 0.5 + i * 0.035,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-sora font-semibold tracking-wide text-copper text-[clamp(1.75rem,7.5vw,3.75rem)]"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="annotation mt-6"
          >
            Architektura · Wnętrza · Wizualizacje
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
