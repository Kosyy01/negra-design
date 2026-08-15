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

/** Przycisk hamburgera — trzy grube, proste paski. Bez okręgu, bez obrysu. */
function HamburgerButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  const bar =
    "absolute left-0 h-[3px] w-full rounded-full bg-bone transition-colors duration-300 group-hover:bg-copper";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Zamknij menu" : "Otwórz menu"}
      aria-expanded={open}
      className="group relative -mr-2 flex h-11 w-11 shrink-0 items-center justify-center lg:hidden"
    >
      <span className="relative block h-[15px] w-6">
        <motion.span
          className={bar}
          initial={false}
          animate={
            open
              ? { top: "50%", y: "-50%", rotate: 45 }
              : { top: "0%", y: "0%", rotate: 0 }
          }
          transition={{ duration: 0.3, ease: EASE }}
        />
        <motion.span
          className={bar}
          style={{ top: "50%", y: "-50%" }}
          initial={false}
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.2, ease: EASE }}
        />
        <motion.span
          className={bar}
          initial={false}
          animate={
            open
              ? { top: "50%", y: "-50%", rotate: -45 }
              : { top: "100%", y: "-100%", rotate: 0 }
          }
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

  // Blokada scrolla tła (odporna na iOS Safari) + zamykanie klawiszem Escape,
  // gdy menu mobilne jest otwarte. Zamykamy też menu automatycznie po
  // przełączeniu na szerszy, desktopowy układ.
  useEffect(() => {
    if (!mobileOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileOpen]);

  return (
    <header
      style={{
        paddingTop: `calc(env(safe-area-inset-top) + ${scrolled ? "0.75rem" : "1rem"})`,
      }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "pb-3" : "pb-4 sm:pb-6"
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
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-[90] flex h-[100dvh] flex-col overflow-y-auto bg-graphite-950/98 backdrop-blur-xl lg:hidden"
          >
            <div
              style={{ paddingTop: "calc(env(safe-area-inset-top) + 1rem)" }}
              className="flex shrink-0 items-center justify-between px-4 pb-2 sm:px-6"
            >
              <a
                href="#start"
                onClick={() => setMobileOpen(false)}
                className="font-sora text-base font-semibold tracking-wide text-bone"
              >
                NEGRA<span className="text-copper">DESIGN</span>
              </a>
              <HamburgerButton open={mobileOpen} onClick={() => setMobileOpen(false)} />
            </div>

            {/* Nawigacja wyśrodkowana — spokojny, minimalny układ */}
            <nav className="flex flex-1 flex-col items-start justify-center gap-1 px-6 sm:px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.045, duration: 0.4, ease: EASE }}
                  data-cursor-hover
                  className="group py-2.5 active:opacity-60"
                >
                  <span className="font-sora text-3xl font-light text-bone transition-colors group-hover:text-copper sm:text-4xl">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.08 + NAV_LINKS.length * 0.045 + 0.05,
                duration: 0.4,
                ease: EASE,
              }}
              style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 1.5rem)" }}
              className="flex shrink-0 flex-col gap-6 px-6 pt-6 sm:px-8"
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
