"use client";

import { Instagram, Linkedin, Mail, MapPin, ArrowUp, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import MagneticButton from "@/ui/MagneticButton";

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

/** Pola „tabliczki rysunkowej” — jak w legendzie projektu architektonicznego. */
const SHEET_FIELDS = [
  {
    label: "Nawigacja",
    content: (
      <ul className="flex flex-col gap-2.5">
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
    ),
  },
  {
    label: "Kontakt",
    content: (
      <div className="flex flex-col gap-2.5">
        <a
          href="mailto:kontakt@negradesign.pl"
          data-cursor-hover
          className="flex items-start gap-2 text-sm text-bone/80 transition-colors hover:text-copper"
        >
          <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper/70" strokeWidth={1.5} />
          <span className="break-words">kontakt@negradesign.pl</span>
        </a>
        <span className="flex items-start gap-2 text-sm text-bone/80">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper/70" strokeWidth={1.5} />
          Warszawa, Polska
        </span>
      </div>
    ),
  },
  {
    label: "Godziny pracy",
    content: (
      <div className="flex flex-col gap-2.5 text-sm text-bone/80">
        <div className="flex items-center justify-between gap-4">
          <span className="text-bone-dim">Pon–Pt</span>
          <span>9:00–17:00</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-bone-dim">Sob–Nd</span>
          <span>Zamknięte</span>
        </div>
      </div>
    ),
  },
  {
    label: "Social",
    content: (
      <div className="flex items-center gap-3">
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
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-bone/10 bg-graphite-950">
      {/* Cienka miedziana linia otwierająca sekcję */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/50 to-transparent"
      />
      {/* Siatka w tle, echo motywu z menu mobilnego */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #EDE8E1 1px, transparent 1px), linear-gradient(to bottom, #EDE8E1 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-9 pt-16 sm:px-8 sm:pb-10 sm:pt-24">
        {/* Nagłówek arkusza: marka + skrócone CTA, jak nagłówek tabliczki rysunkowej */}
        <div className="flex flex-col justify-between gap-10 border-b border-bone/10 pb-12 sm:pb-14 lg:flex-row lg:items-end">
          <div>
            <span className="annotation text-copper/70">Pracownia architektoniczna</span>
            <a
              href="#start"
              data-cursor-hover
              className="mt-5 block font-sora text-4xl font-light leading-[1.05] tracking-tight text-bone sm:text-5xl lg:text-6xl"
            >
              NEGRA<span className="font-semibold text-copper">DESIGN</span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-bone-dim">
              Projektowanie, wizualizacje 3D i nadzór nad realizacją — od
              pierwszego szkicu po klucze do drzwi.
            </p>
          </div>

          <MagneticButton href="#kontakt" className="shrink-0">
            <span className="flex items-center gap-2">
              Rozpocznij projekt
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </span>
          </MagneticButton>
        </div>

        {/* Tabliczka rysunkowa — pola informacyjne oddzielone liniami, jak w legendzie projektu */}
        <div className="grid divide-y divide-bone/10 border-b border-bone/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {SHEET_FIELDS.map((field) => (
            <div key={field.label} className="py-8 sm:px-6 sm:py-10 sm:first:pl-0 lg:px-8">
              <span className="annotation text-bone/40">{field.label}</span>
              <div className="mt-5">{field.content}</div>
            </div>
          ))}
        </div>

        {/* Dolny pasek */}
        <div className="mt-9 flex flex-col-reverse items-center gap-5 sm:mt-10 sm:flex-row sm:justify-between sm:gap-6">
          <p className="text-center text-xs text-bone-dim/70 sm:text-left">
            © {year} NEGRA DESIGN. Wszystkie prawa zastrzeżone.
          </p>

          <button
            onClick={scrollToTop}
            data-cursor-hover
            aria-label="Wróć na górę strony"
            className="group flex items-center gap-3 text-xs uppercase tracking-widest2 text-bone-dim/70 transition-colors hover:text-copper"
          >
            Na górę
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-bone/15 transition-colors duration-300 group-hover:border-copper">
              <ArrowUp
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-8 group-hover:translate-x-8"
                strokeWidth={1.5}
              />
              <ArrowUp
                className="absolute h-3.5 w-3.5 -translate-x-8 translate-y-8 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
                strokeWidth={1.5}
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
