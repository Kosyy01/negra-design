"use client";

import { Instagram, Linkedin, Mail, ArrowUp } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-graphite-950">
      {/* Wielki, wygaszony wodny znak — echo loga w tle, jak pieczęć na rysunku technicznym */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-1/2 w-full -translate-x-1/2 select-none text-center font-sora text-[18vw] font-semibold leading-none tracking-tight text-bone/[0.025] sm:text-[15vw]"
      >
        NEGRA
      </span>

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20 sm:px-8">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marka */}
          <div className="lg:col-span-2">
            <a
              href="#start"
              data-cursor-hover
              className="font-sora text-xl font-semibold tracking-wide text-bone"
            >
              NEGRA<span className="text-copper">DESIGN</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone-dim">
              Pracownia architektoniczna specjalizująca się w projektowaniu,
              wizualizacjach 3D i modelowaniu — od pierwszego szkicu po nadzór
              nad realizacją.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-cursor-hover
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors duration-300 hover:border-copper hover:text-copper"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Nawigacja */}
          <div>
            <span className="annotation text-bone/40">Nawigacja</span>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-cursor-hover
                    className="text-sm text-bone/80 transition-colors hover:text-copper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <span className="annotation text-bone/40">Kontakt</span>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:kontakt@negradesign.pl"
                  data-cursor-hover
                  className="flex items-center gap-2 text-sm text-bone/80 transition-colors hover:text-copper"
                >
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                  kontakt@negradesign.pl
                </a>
              </li>
              <li className="text-sm text-bone/80">Warszawa, Polska</li>
            </ul>
          </div>
        </div>

        {/* Dolny pasek */}
        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-6 border-t border-bone/10 pt-8 sm:flex-row">
          <p className="text-xs text-bone-dim/70">
            © {year} NEGRA DESIGN. Wszystkie prawa zastrzeżone.
          </p>

          <button
            onClick={scrollToTop}
            data-cursor-hover
            aria-label="Wróć na górę strony"
            className="group flex items-center gap-2 text-xs uppercase tracking-widest2 text-bone-dim/70 transition-colors hover:text-copper"
          >
            Na górę
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-bone/15 transition-colors duration-300 group-hover:border-copper group-hover:text-copper">
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
