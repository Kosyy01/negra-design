"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowUpRight, Check, Clock } from "lucide-react";
import MagneticButton from "@/ui/MagneticButton";
import { cn } from "@/lib/utils";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "E-mail",
    value: "kontakt@negradesign.pl",
    href: "mailto:kontakt@negradesign.pl",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 000 000 000",
    href: "tel:+48000000000",
  },
  {
    icon: MapPin,
    label: "Pracownia",
    value: "Warszawa, Polska",
    href: undefined,
  },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

// Narożniki jak rejestracyjne znaczniki na planie architektonicznym
function CornerMarks() {
  const base = "pointer-events-none absolute h-6 w-6 border-copper/40 sm:h-8 sm:w-8";
  return (
    <>
      <span className={`${base} -left-px -top-px border-l border-t`} />
      <span className={`${base} -right-px -top-px border-r border-t`} />
      <span className={`${base} -bottom-px -left-px border-b border-l`} />
      <span className={`${base} -bottom-px -right-px border-b border-r`} />
    </>
  );
}

export default function Kontakt() {
  const [form, setForm] = useState({ imie: "", email: "", wiadomosc: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: podłączyć docelowy adres e-mail / endpoint wysyłki formularza.
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-bone/12 bg-graphite-900/60 px-4 pb-3 pt-3.5 text-sm text-bone placeholder:text-bone/25 outline-none transition-all duration-300 focus:border-copper/60 focus:bg-graphite-900 sm:text-base";

  return (
    <section
      id="kontakt"
      className="relative w-full overflow-hidden bg-graphite-900 py-28 sm:py-36"
    >
      {/* Pionowa "linia pionu" jak w Hero/Loaderze, umieszczona w tle */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-bone/5 lg:block" />
      {/* Wygaszony wodny znak w tle, echo Footera */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[8vw] top-10 select-none font-sora text-[16vw] font-semibold leading-none tracking-tight text-bone/[0.02] sm:text-[11vw]"
      >
        06
      </span>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.span variants={fadeUp} custom={0} className="annotation text-copper">
            06 — Rozpocznijmy projekt
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 font-sora text-4xl font-light leading-[1.15] text-bone sm:text-5xl"
          >
            Porozmawiajmy o Twojej inwestycji.
          </motion.h2>
        </motion.div>

        {/* Ramka jak arkusz projektowy, ze znacznikami rejestracyjnymi w rogach */}
        <div className="relative rounded-[1.75rem] border border-bone/10 bg-graphite-800/30 p-8 backdrop-blur-sm sm:rounded-[2.25rem] sm:p-12 lg:p-16">
          <CornerMarks />

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            {/* Kolumna informacyjna */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col justify-center"
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="max-w-md text-balance text-sm leading-relaxed text-bone-dim sm:text-base"
              >
                Niezależnie od etapu, na którym jesteś — od pierwszego szkicu po
                gotową działkę — chętnie porozmawiamy o zakresie i możliwościach
                projektu.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={1}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-copper/30 bg-copper/10 px-4 py-2"
              >
                <Clock className="h-3.5 w-3.5 text-copper" strokeWidth={1.5} />
                <span className="text-xs text-bone/80 sm:text-sm">
                  Odpowiadamy w ciągu 48 godzin roboczych
                </span>
              </motion.div>

              <motion.ul variants={fadeUp} custom={2} className="mt-10 flex flex-col gap-2">
                {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <span className="flex items-center gap-4 rounded-2xl px-3 py-3 transition-colors duration-300 group-hover:bg-bone/[0.03]">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bone/15 text-copper transition-colors duration-300 group-hover:border-copper">
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <span className="flex flex-col">
                        <span className="annotation text-bone/40">{label}</span>
                        <span className="text-sm text-bone sm:text-base">{value}</span>
                      </span>
                    </span>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} data-cursor-hover className="group -mx-3 inline-flex w-[calc(100%+1.5rem)]">
                          {content}
                        </a>
                      ) : (
                        <span className="group -mx-3 inline-flex w-[calc(100%+1.5rem)]">{content}</span>
                      )}
                    </li>
                  );
                })}
              </motion.ul>

              <motion.div variants={fadeUp} custom={3} className="mt-8 flex items-center gap-4 border-t border-bone/10 pt-8">
                <span className="annotation text-bone/40">Obserwuj</span>
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
              </motion.div>
            </motion.div>

            {/* Kolumna formularza */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col justify-center rounded-2xl border border-bone/10 bg-graphite-900/40 p-6 sm:p-8"
            >
              {sent ? (
                <div className="flex flex-col items-start gap-4 py-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-copper text-graphite-950">
                    <Check className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <p className="font-sora text-xl font-light text-bone">
                    Wiadomość została wysłana.
                  </p>
                  <p className="text-sm text-bone-dim">
                    Dziękujemy za kontakt — odezwiemy się najszybciej, jak to możliwe.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="group relative flex flex-col gap-1.5">
                      <span className="annotation text-bone/40 transition-colors group-focus-within:text-copper">
                        Imię i nazwisko
                      </span>
                      <input
                        type="text"
                        name="imie"
                        required
                        value={form.imie}
                        onChange={handleChange}
                        placeholder="Jan Kowalski"
                        className={inputClass}
                      />
                    </label>

                    <label className="group relative flex flex-col gap-1.5">
                      <span className="annotation text-bone/40 transition-colors group-focus-within:text-copper">
                        E-mail
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jan@przyklad.pl"
                        className={inputClass}
                      />
                    </label>
                  </div>

                  <label className="group relative flex flex-col gap-1.5">
                    <span className="annotation text-bone/40 transition-colors group-focus-within:text-copper">
                      Wiadomość
                    </span>
                    <textarea
                      name="wiadomosc"
                      required
                      rows={4}
                      value={form.wiadomosc}
                      onChange={handleChange}
                      placeholder="Opowiedz nam krótko o swoim projekcie..."
                      className={cn("resize-none", inputClass)}
                    />
                  </label>

                  <div className="mt-2 flex flex-col-reverse items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-relaxed text-bone-dim/70">
                      Wysyłając formularz akceptujesz przetwarzanie danych w celu
                      kontaktu w sprawie zapytania.
                    </p>
                    <MagneticButton className="w-full shrink-0 sm:w-auto">
                      <span className="flex items-center justify-center gap-2">
                        Wyślij
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                    </MagneticButton>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
