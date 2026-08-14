"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Instagram, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import MagneticButton from "@/ui/MagneticButton";
import { cn } from "@/lib/utils";

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/** Przycisk hamburgera — trzy linie płynnie przekształcające się w X. */
function HamburgerButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  const bar =
    "absolute left-1/2 h-px w-5 -translate-x-1/2 bg-bone transition-colors duration-300 group-hover:bg-copper";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Zamknij menu" : "Otwórz menu"}
      aria-expanded={open}
      className="group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bone/15 text-bone transition-colors duration-300 hover:border-copper lg:hidden"
    >
      <span className="relative block h-4 w-5">
        <motion.span
          className={bar}
          style={{ top: 0 }}
          animate={open ? { top: "50%", rotate: 45 } : { top: "0%", rotate: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
        />
        <motion.span
          className={bar}
          style={{ top: "50%" }}
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.2, ease: EASE }}
        />
        <motion.span
          className={bar}
          style={{ top: "100%" }}
          animate={open ? { top: "50%", rotate: -45 } : { top: "100%", rotate: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
        />
      </span>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blokada scrolla tła + zamykanie klawiszem Escape, gdy menu mobilne jest otwarte.
  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-4 sm:py-6"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-6 lg:px-8",
          scrolled
            ? "border border-white/10 bg-graphite-900/60 py-2.5 backdrop-blur-xl sm:py-3"
            : "border border-transparent bg-transparent py-2"
        )}
      >
        <a
          href="#start"
          className="font-sora text-base font-semibold tracking-wide text-bone sm:text-lg"
          data-cursor-hover
        >
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

        <HamburgerButton open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-[90] flex flex-col overflow-hidden bg-graphite-950/98 backdrop-blur-xl lg:hidden"
          >
            {/* Delikatna siatka w tle, w duchu rysunku technicznego */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #EDE8E1 1px, transparent 1px), linear-gradient(to bottom, #EDE8E1 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Narożniki jak na rysunku architektonicznym */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l border-t border-copper/40 sm:left-6 sm:top-6"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r border-copper/40 sm:bottom-6 sm:right-6"
            />

            <div className="relative flex items-center justify-between px-4 pb-2 pt-4 sm:px-6">
              <a
                href="#start"
                onClick={() => setMobileOpen(false)}
                className="font-sora text-base font-semibold tracking-wide text-bone"
              >
                NEGRA<span className="text-copper">DESIGN</span>
              </a>
              <HamburgerButton open={mobileOpen} onClick={() => setMobileOpen(false)} />
            </div>

            <div className="relative flex flex-1 flex-col justify-between overflow-y-auto px-4 pb-8 pt-6 sm:px-6">
              <nav className="flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + i * 0.05, duration: 0.5, ease: EASE }}
                    data-cursor-hover
                    className="group flex items-center gap-4 border-b border-bone/10 py-4 first:pt-0 active:opacity-60"
                  >
                    <span className="annotation text-copper/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sora text-2xl font-light text-bone transition-colors group-hover:text-copper sm:text-3xl">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.12 + NAV_LINKS.length * 0.05 + 0.05,
                  duration: 0.5,
                  ease: EASE,
                }}
                className="mt-10 flex flex-col gap-6"
              >
                <MagneticButton className="w-full !py-3.5" onClick={() => setMobileOpen(false)}>
                  Umów konsultację
                </MagneticButton>

                <div className="flex items-center justify-between border-t border-bone/10 pt-6">
                  <a
                    href="mailto:kontakt@negradesign.pl"
                    data-cursor-hover
                    className="flex items-center gap-2 text-xs text-bone/60 transition-colors hover:text-copper"
                  >
                    <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                    kontakt@negradesign.pl
                  </a>

                  <div className="flex items-center gap-3">
                    {SOCIALS.map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        data-cursor-hover
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors hover:border-copper hover:text-copper"
                      >
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                      </a>
                    ))}
                    <button
                      data-cursor-hover
                      aria-label="Zmień język"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/15 text-xs text-bone/70 transition-colors hover:border-copper hover:text-copper"
                    >
                      PL
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
