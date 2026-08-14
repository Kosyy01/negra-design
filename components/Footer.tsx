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
      {/* Cienka miedziana linia otwierająca sekcję, jak krawędź na rysunku technicznym */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/50 to-transparent"
      />

      {/* Wielki, wygaszony wodny znak — echo loga w tle, jak pieczęć na rysunku technicznym */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-1/2 w-full -translate-x-1/2 select-none text-center font-sora text-[22vw] font-semibold leading-none tracking-tight text-bone/[0.025] sm:-bottom-10 sm:text-[15vw]"
      >
        NEGRA
      </span>

      <div className="relative mx-auto max-w-7xl px-5 pb-9 pt-16 sm:px-8 sm:pb-10 sm:pt-20">
        <span className="annotation text-copper/70">Pracownia architektoniczna</span>

        <div className="mt-8 grid gap-10 sm:mt-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-14">
          {/* Marka */}
          <div className="sm:col-span-2">
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

          <div className="grid grid-cols-2 gap-10 sm:col-span-2 sm:grid-cols-2 sm:gap-8 lg:col-span-2">
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
                    className="flex items-start gap-2 text-sm text-bone/80 transition-colors hover:text-copper"
                  >
                    <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                    <span className="break-words">kontakt@negradesign.pl</span>
                  </a>
                </li>
                <li className="text-sm text-bone/80">Warszawa, Polska</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dolny pasek */}
        <div className="mt-12 flex flex-col-reverse items-center gap-5 border-t border-bone/10 pt-7 sm:mt-16 sm:flex-row sm:justify-between sm:gap-6 sm:pt-8">
          <p className="text-center text-xs text-bone-dim/70 sm:text-left">
            © {year} NEGRA DESIGN. Wszystkie prawa zastrzeżone.
          </p>

          <button
            onClick={scrollToTop}
            data-cursor-hover
            aria-label="Wróć na górę strony"
            className="group flex items-center gap-2 text-xs uppercase tracking-widest2 text-bone-dim/70 transition-colors hover:text-copper"
          >
            Na górę
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/15 transition-colors duration-300 group-hover:border-copper group-hover:text-copper">
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
