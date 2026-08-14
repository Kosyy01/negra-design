"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowUpRight, Check } from "lucide-react";
import MagneticButton from "@/ui/MagneticButton";

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

  return (
    <section
      id="kontakt"
      className="relative w-full overflow-hidden bg-graphite-900 py-20 sm:py-28 lg:py-36"
    >
      {/* Pionowa "linia pionu" jak w Hero/Loaderze, umieszczona w tle */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-bone/5 lg:block" />
      {/* Delikatna poświata w tle za kartą formularza — dodaje głębi bez odwracania uwagi */}
      <div className="pointer-events-none absolute right-0 top-1/4 -z-0 h-[28rem] w-[28rem] rounded-full bg-copper/[0.06] blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-10">
        {/* Kolumna informacyjna */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-center"
        >
          <motion.span variants={fadeUp} custom={0} className="annotation text-copper">
            Rozpocznijmy projekt
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 max-w-md font-sora text-4xl font-light leading-[1.15] text-bone sm:text-5xl"
          >
            Porozmawiajmy o Twojej inwestycji.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-md text-balance text-sm leading-relaxed text-bone-dim sm:text-base"
          >
            Niezależnie od etapu, na którym jesteś — od pierwszego szkicu po
            gotową działkę — chętnie porozmawiamy o zakresie i możliwościach
            projektu. Odpowiadamy w ciągu 48 godzin roboczych.
          </motion.p>

          <motion.ul variants={fadeUp} custom={3} className="mt-10 flex flex-col gap-5">
            {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bone/15 text-copper">
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
                    <a href={href} data-cursor-hover className="group inline-flex">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </motion.ul>

          <motion.div variants={fadeUp} custom={4} className="mt-10 flex items-center gap-4">
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
          className="relative flex flex-col justify-center"
        >
          <div className="relative rounded-3xl border border-bone/10 bg-graphite-800/40 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
            {/* Narożny "znacznik pomiarowy" nawiązujący do motywu technicznego rysunku */}
            <span className="pointer-events-none absolute -left-px -top-px h-6 w-6 rounded-tl-3xl border-l border-t border-copper/40" />
            <span className="pointer-events-none absolute -bottom-px -right-px h-6 w-6 rounded-br-3xl border-b border-r border-copper/40" />

            {sent ? (
              <div className="flex flex-col items-start gap-4 py-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-copper text-graphite-950">
                  <Check className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="font-sora text-xl font-light text-bone">
                  Wiadomość została wysłana.
                </p>
                <p className="text-sm leading-relaxed text-bone-dim">
                  Dziękujemy za kontakt — odezwiemy się najszybciej, jak to
                  możliwe.
                </p>
                <button
                  onClick={() => setSent(false)}
                  data-cursor-hover
                  className="mt-2 text-xs uppercase tracking-widest2 text-bone-dim/70 underline-offset-4 transition-colors hover:text-copper hover:underline"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7 sm:gap-8" noValidate>
                <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
                  <label className="group relative flex flex-col">
                    <span className="annotation mb-2 text-bone/40 transition-colors group-focus-within:text-copper">
                      Imię i nazwisko
                    </span>
                    <input
                      type="text"
                      name="imie"
                      required
                      autoComplete="name"
                      value={form.imie}
                      onChange={handleChange}
                      placeholder="Jan Kowalski"
                      className="border-b border-bone/20 bg-transparent py-2 pb-3 text-base text-bone placeholder:text-bone/25 outline-none transition-colors focus:border-copper"
                    />
                  </label>

                  <label className="group relative flex flex-col">
                    <span className="annotation mb-2 text-bone/40 transition-colors group-focus-within:text-copper">
                      E-mail
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jan@przyklad.pl"
                      className="border-b border-bone/20 bg-transparent py-2 pb-3 text-base text-bone placeholder:text-bone/25 outline-none transition-colors focus:border-copper"
                    />
                  </label>
                </div>

                <label className="group relative flex flex-col">
                  <span className="annotation mb-2 text-bone/40 transition-colors group-focus-within:text-copper">
                    Wiadomość
                  </span>
                  <textarea
                    name="wiadomosc"
                    required
                    rows={4}
                    value={form.wiadomosc}
                    onChange={handleChange}
                    placeholder="Opowiedz nam krótko o swoim projekcie..."
                    className="resize-none border-b border-bone/20 bg-transparent py-2 pb-3 text-base text-bone placeholder:text-bone/25 outline-none transition-colors focus:border-copper"
                  />
                </label>

                <div className="mt-2 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <p className="text-xs leading-relaxed text-bone-dim/70">
                    Wysyłając formularz akceptujesz przetwarzanie danych w
                    celu kontaktu w sprawie zapytania.
                  </p>
                  <MagneticButton className="shrink-0 justify-center !px-9 sm:w-auto">
                    <span className="flex items-center justify-center gap-2">
                      Wyślij
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
