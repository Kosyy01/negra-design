"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import MagneticButton from "@/ui/MagneticButton";

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.8, ease: EASE },
  }),
};

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-bone/10 bg-graphite-950">
      {/* Miedziana linia otwierająca sekcję */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/50 to-transparent"
      />
      {/* Ciepła poświata w tle, jak akcent na planie projektu */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-copper/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-9 pt-20 sm:px-8 sm:pb-10 sm:pt-28">
        {/* Duży, edytorialny blok CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={fadeUp} custom={0} className="annotation text-copper">
            Rozpocznijmy
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 max-w-3xl text-balance font-sora text-4xl font-light leading-[1.12] text-bone sm:text-5xl lg:text-6xl"
          >
            Masz w głowie projekt, który
            <br className="hidden sm:block" /> czeka na formę?
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-10 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10"
          >
            <MagneticButton href="#kontakt">
              <span className="flex items-center gap-2">
                Umów konsultację
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </MagneticButton>

            <a
              href="mailto:kontakt@negradesign.pl"
              data-cursor-hover
              className="group relative inline-flex items-center gap-2 font-sora text-lg text-bone/90 transition-colors hover:text-copper sm:text-xl"
            >
              kontakt@negradesign.pl
              <ArrowUpRight
                className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.5}
              />
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-copper transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          </motion.div>
        </motion.div>

        {/* Kolumny informacyjne */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid gap-12 border-t border-bone/10 pt-14 sm:mt-24 sm:grid-cols-2 sm:gap-10 sm:pt-16 lg:grid-cols-4"
        >
          {/* Marka */}
          <motion.div variants={fadeUp} custom={0} className="sm:col-span-2 lg:col-span-1">
            <a
              href="#start"
              data-cursor-hover
              className="font-sora text-xl font-semibold tracking-wide text-bone"
            >
              NEGRA<span className="text-copper">DESIGN</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone-dim">
              Pracownia architektoniczna. Projektowanie, wizualizacje 3D i
              nadzór nad realizacją — jeden zespół, jedna wizja.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-cursor-hover
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-copper hover:text-copper"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nawigacja */}
          <motion.div variants={fadeUp} custom={1}>
            <span className="annotation text-bone/40">Nawigacja</span>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-cursor-hover
                    className="group relative inline-flex text-sm text-bone/80 transition-colors hover:text-copper"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-copper transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kontakt */}
          <motion.div variants={fadeUp} custom={2}>
            <span className="annotation text-bone/40">Kontakt</span>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href="tel:+48000000000"
                  data-cursor-hover
                  className="flex items-start gap-2 text-sm text-bone/80 transition-colors hover:text-copper"
                >
                  <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper/70" strokeWidth={1.5} />
                  +48 000 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@negradesign.pl"
                  data-cursor-hover
                  className="flex items-start gap-2 text-sm text-bone/80 transition-colors hover:text-copper"
                >
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper/70" strokeWidth={1.5} />
                  <span className="break-words">kontakt@negradesign.pl</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-bone/80">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper/70" strokeWidth={1.5} />
                Warszawa, Polska
              </li>
            </ul>
          </motion.div>

          {/* Godziny pracy */}
          <motion.div variants={fadeUp} custom={3}>
            <span className="annotation text-bone/40">Godziny pracy</span>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-bone/80">
              <li className="flex items-center justify-between gap-4">
                <span className="text-bone-dim">Pon–Pt</span>
                <span>9:00–17:00</span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span className="text-bone-dim">Sob–Nd</span>
                <span>Zamknięte</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Dolny pasek */}
        <div className="mt-12 flex flex-col-reverse items-center gap-5 border-t border-bone/10 pt-7 sm:mt-16 sm:flex-row sm:justify-between sm:gap-6 sm:pt-8">
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

      {/* Wielki, wygaszony wodny znak — echo loga w tle */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-1/2 w-full -translate-x-1/2 select-none text-center font-sora text-[22vw] font-semibold leading-none tracking-tight text-bone/[0.025] sm:-bottom-10 sm:text-[15vw]"
      >
        NEGRA
      </span>
    </footer>
  );
}
