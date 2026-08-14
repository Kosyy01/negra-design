"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import MagneticButton from "@/ui/MagneticButton";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 transition-all duration-500 sm:px-8",
          scrolled
            ? "border border-white/10 bg-graphite-900/60 py-3 backdrop-blur-xl"
            : "border border-transparent bg-transparent py-2"
        )}
      >
        <a href="#start" className="font-sora text-lg font-semibold tracking-wide text-bone" data-cursor-hover>
          NEGRA<span className="text-copper">DESIGN</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="group relative text-sm text-bone/80 transition-colors hover:text-bone"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-copper transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <button
            data-cursor-hover
            aria-label="Zmień język"
            className="flex items-center gap-1.5 text-sm text-bone/70 transition-colors hover:text-copper"
          >
            <Globe className="h-4 w-4" strokeWidth={1.5} />
            PL
          </button>
          <MagneticButton className="!px-6 !py-2.5 !text-xs">Umów konsultację</MagneticButton>
        </div>

        <button
          className="text-bone lg:hidden"
          aria-label="Otwórz menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-6 w-6" strokeWidth={1.5} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-graphite-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex justify-end p-6">
              <button
                aria-label="Zamknij menu"
                className="text-bone"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-7 w-7" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 pt-10">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="font-sora text-3xl text-bone"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.06 }}
                className="mt-4"
              >
                <MagneticButton>Umów konsultację</MagneticButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
