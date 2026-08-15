"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 550);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-graphite-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: EASE } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.4, ease: EASE } }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col items-center"
          >
            {/* Wordmark — proste, spokojne wejście, bez animacji litera-po-literze */}
            <span className="font-sora text-xl font-semibold tracking-[0.25em] text-bone sm:text-2xl">
              NEGRA<span className="text-copper">DESIGN</span>
            </span>

            {/* Cienka linia postępu — czysto transformowa (scaleX), zero reflow */}
            <div className="relative mt-7 h-px w-28 overflow-hidden bg-bone/10 sm:w-36">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.05, ease: EASE, delay: 0.15 }}
                style={{ transformOrigin: "left" }}
                className="absolute inset-y-0 left-0 block w-full bg-copper"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
