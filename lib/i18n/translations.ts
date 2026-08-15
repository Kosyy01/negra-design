import { Locale } from "@/types";

interface ValueItem {
  title: string;
  desc: string;
}

interface StatItem {
  value: string;
  label: string;
}

export interface Dictionary {
  meta: { htmlLang: string };
  common: { bookConsultation: string; changeLanguage: string; scroll: string };
  nav: {
    start: string;
    oNas: string;
    uslugi: string;
    realizacje: string;
    faq: string;
    kontakt: string;
  };
  hero: {
    badge: string;
    titleLines: string[];
    paragraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  onas: {
    badge: string;
    heading: string;
    paragraph: string;
    imageAlt: string;
    stats: StatItem[];
    values: ValueItem[];
  };
  kontakt: {
    badge: string;
    heading: string;
    paragraph: string;
    details: { email: string; phone: string; studio: string };
    address: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      consent: string;
      submit: string;
      sentTitle: string;
      sentDesc: string;
      sendAnother: string;
    };
  };
  footer: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    brandBlurb: string;
    navTitle: string;
    contactTitle: string;
    hoursTitle: string;
    hours: { weekdays: string; weekend: string; weekdayHours: string; closed: string };
    copyright: string;
    backToTop: string;
  };
}

/**
 * Statyczny słownik treści strony. Żadnych zewnętrznych usług tłumaczeniowych
 * ani generowania w locie — to "graficzny" (czysto UI-owy) przełącznik
 * pomiędzy gotowymi, ręcznie przygotowanymi wersjami tekstów.
 */
export const dictionary: Record<Locale, Dictionary> = {
  pl: {
    meta: {
      htmlLang: "pl",
    },
    common: {
      bookConsultation: "Umów konsultację",
      changeLanguage: "Zmień język",
      scroll: "Przewiń",
    },
    nav: {
      start: "Start",
      oNas: "O nas",
      uslugi: "Usługi",
      realizacje: "Realizacje",
      faq: "FAQ",
      kontakt: "Kontakt",
    },
    hero: {
      badge: "Projekt · Wizualizacja · Realizacja",
      titleLines: ["Każdy budynek zaczyna się", "od decyzji, której nie widać."],
      paragraph:
        "Projektujemy architekturę, wnętrza i wizualizacje 3D dla inwestorów, którzy traktują detal jako standard, a nie dodatek. Od pierwszego szkicu po nadzór nad realizacją — jeden zespół, jedna wizja.",
      ctaPrimary: "Umów konsultację",
      ctaSecondary: "Zobacz realizacje",
    },
    onas: {
      badge: "O nas",
      heading: "Architektura, którą projektuje się z uwagą, nie pośpiechem.",
      paragraph:
        "NEGRA DESIGN to pracownia architektoniczna łącząca precyzję inżynierską z estetyką, która ma trwać dłużej niż jeden trend. Projektujemy domy, wnętrza i przestrzenie komercyjne — zawsze zaczynając od pytania „po co”, a nie „jak ładnie”.",
      imageAlt: "Zespół pracowni NEGRA DESIGN przy stole projektowym",
      stats: [
        { value: "12+", label: "lat na rynku" },
        { value: "140+", label: "zrealizowanych projektów" },
        { value: "98%", label: "zadowolonych inwestorów" },
      ],
      values: [
        {
          title: "Precyzja projektu",
          desc: "Każda decyzja projektowa poparta analizą — od nasłonecznienia po konstrukcję.",
        },
        {
          title: "Jeden zespół",
          desc: "Architekci, wnętrzarze i wizualizerzy pracują nad projektem równolegle, nie po kolei.",
        },
        {
          title: "Nadzór do końca",
          desc: "Zostajemy przy inwestycji od pierwszego szkicu aż po odbiór budynku.",
        },
      ],
    },
    kontakt: {
      badge: "Rozpocznijmy projekt",
      heading: "Porozmawiajmy o Twojej inwestycji.",
      paragraph:
        "Niezależnie od etapu, na którym jesteś — od pierwszego szkicu po gotową działkę — chętnie porozmawiamy o zakresie i możliwościach projektu. Odpowiadamy w ciągu 48 godzin roboczych.",
      details: { email: "E-mail", phone: "Telefon", studio: "Pracownia" },
      address: "Warszawa, Polska",
      form: {
        name: "Imię i nazwisko",
        namePlaceholder: "Jan Kowalski",
        email: "E-mail",
        emailPlaceholder: "jan@przyklad.pl",
        message: "Wiadomość",
        messagePlaceholder: "Opowiedz nam krótko o swoim projekcie...",
        consent:
          "Wysyłając formularz akceptujesz przetwarzanie danych w celu kontaktu w sprawie zapytania.",
        submit: "Wyślij",
        sentTitle: "Wiadomość została wysłana.",
        sentDesc: "Dziękujemy za kontakt — odezwiemy się najszybciej, jak to możliwe.",
        sendAnother: "Wyślij kolejną wiadomość",
      },
    },
    footer: {
      badge: "Rozpocznijmy",
      headingLine1: "Masz w głowie projekt, który",
      headingLine2: "czeka na formę?",
      brandBlurb:
        "Pracownia architektoniczna. Projektowanie, wizualizacje 3D i nadzór nad realizacją — jeden zespół, jedna wizja.",
      navTitle: "Nawigacja",
      contactTitle: "Kontakt",
      hoursTitle: "Godziny pracy",
      hours: { weekdays: "Pon–Pt", weekend: "Sob–Nd", weekdayHours: "9:00–17:00", closed: "Zamknięte" },
      copyright: "Wszystkie prawa zastrzeżone.",
      backToTop: "Na górę",
    },
  },
  "en-GB": {
    meta: { htmlLang: "en-GB" },
    common: {
      bookConsultation: "Book a consultation",
      changeLanguage: "Change language",
      scroll: "Scroll",
    },
    nav: {
      start: "Home",
      oNas: "About",
      uslugi: "Services",
      realizacje: "Projects",
      faq: "FAQ",
      kontakt: "Contact",
    },
    hero: {
      badge: "Design · Visualisation · Delivery",
      titleLines: ["Every building begins", "with a decision you can't see."],
      paragraph:
        "We design architecture, interiors and 3D visualisations for investors who treat detail as standard, not an add-on. From the first sketch to construction supervision — one team, one vision.",
      ctaPrimary: "Book a consultation",
      ctaSecondary: "See our projects",
    },
    onas: {
      badge: "About us",
      heading: "Architecture designed with care, not haste.",
      paragraph:
        "NEGRA DESIGN is an architecture studio combining engineering precision with an aesthetic built to outlast a single trend. We design houses, interiors and commercial spaces — always starting with “why”, not “how pretty”.",
      imageAlt: "The NEGRA DESIGN team at the drawing table",
      stats: [
        { value: "12+", label: "years on the market" },
        { value: "140+", label: "completed projects" },
        { value: "98%", label: "satisfied investors" },
      ],
      values: [
        {
          title: "Design precision",
          desc: "Every design decision is backed by analysis — from sunlight exposure to structural integrity.",
        },
        {
          title: "One team",
          desc: "Architects, interior designers and visualisers work on the project in parallel, not in sequence.",
        },
        {
          title: "Support to the end",
          desc: "We stay with the investment from the first sketch through to the building handover.",
        },
      ],
    },
    kontakt: {
      badge: "Let's start your project",
      heading: "Let's talk about your investment.",
      paragraph:
        "Wherever you are in the process — from a first sketch to a ready plot — we're happy to talk through the scope and possibilities of your project. We reply within 48 working hours.",
      details: { email: "Email", phone: "Phone", studio: "Studio" },
      address: "Warsaw, Poland",
      form: {
        name: "Full name",
        namePlaceholder: "John Smith",
        email: "Email",
        emailPlaceholder: "john@example.com",
        message: "Message",
        messagePlaceholder: "Tell us briefly about your project...",
        consent:
          "By submitting this form you agree to your data being processed in order to respond to your enquiry.",
        submit: "Send",
        sentTitle: "Your message has been sent.",
        sentDesc: "Thanks for getting in touch — we'll get back to you as soon as possible.",
        sendAnother: "Send another message",
      },
    },
    footer: {
      badge: "Let's start",
      headingLine1: "Got a project in your head",
      headingLine2: "waiting to take shape?",
      brandBlurb:
        "An architecture studio. Design, 3D visualisation and construction supervision — one team, one vision.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      hoursTitle: "Opening hours",
      hours: { weekdays: "Mon–Fri", weekend: "Sat–Sun", weekdayHours: "9am–5pm", closed: "Closed" },
      copyright: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
  "en-US": {
    meta: { htmlLang: "en-US" },
    common: {
      bookConsultation: "Book a consultation",
      changeLanguage: "Change language",
      scroll: "Scroll",
    },
    nav: {
      start: "Home",
      oNas: "About",
      uslugi: "Services",
      realizacje: "Projects",
      faq: "FAQ",
      kontakt: "Contact",
    },
    hero: {
      badge: "Design · Visualization · Delivery",
      titleLines: ["Every building begins", "with a decision you can't see."],
      paragraph:
        "We design architecture, interiors, and 3D visualizations for investors who treat detail as standard, not an add-on. From the first sketch to construction supervision — one team, one vision.",
      ctaPrimary: "Book a consultation",
      ctaSecondary: "See our projects",
    },
    onas: {
      badge: "About us",
      heading: "Architecture designed with care, not haste.",
      paragraph:
        "NEGRA DESIGN is an architecture studio combining engineering precision with an aesthetic built to outlast a single trend. We design houses, interiors, and commercial spaces — always starting with “why”, not “how pretty”.",
      imageAlt: "The NEGRA DESIGN team at the drawing table",
      stats: [
        { value: "12+", label: "years in business" },
        { value: "140+", label: "completed projects" },
        { value: "98%", label: "satisfied investors" },
      ],
      values: [
        {
          title: "Design precision",
          desc: "Every design decision is backed by analysis — from sun exposure to structural integrity.",
        },
        {
          title: "One team",
          desc: "Architects, interior designers, and visualizers work on the project in parallel, not in sequence.",
        },
        {
          title: "Support to the end",
          desc: "We stay with the investment from the first sketch through to the building handover.",
        },
      ],
    },
    kontakt: {
      badge: "Let's start your project",
      heading: "Let's talk about your investment.",
      paragraph:
        "Wherever you are in the process — from a first sketch to a ready lot — we're happy to talk through the scope and possibilities of your project. We reply within 48 business hours.",
      details: { email: "Email", phone: "Phone", studio: "Studio" },
      address: "Warsaw, Poland",
      form: {
        name: "Full name",
        namePlaceholder: "John Smith",
        email: "Email",
        emailPlaceholder: "john@example.com",
        message: "Message",
        messagePlaceholder: "Tell us briefly about your project...",
        consent:
          "By submitting this form you agree to your data being processed in order to respond to your inquiry.",
        submit: "Send",
        sentTitle: "Your message has been sent.",
        sentDesc: "Thanks for reaching out — we'll get back to you as soon as possible.",
        sendAnother: "Send another message",
      },
    },
    footer: {
      badge: "Let's start",
      headingLine1: "Got a project in your head",
      headingLine2: "waiting to take shape?",
      brandBlurb:
        "An architecture studio. Design, 3D visualization, and construction supervision — one team, one vision.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      hoursTitle: "Business hours",
      hours: { weekdays: "Mon–Fri", weekend: "Sat–Sun", weekdayHours: "9am–5pm", closed: "Closed" },
      copyright: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
  de: {
    meta: { htmlLang: "de" },
    common: {
      bookConsultation: "Beratung vereinbaren",
      changeLanguage: "Sprache ändern",
      scroll: "Scrollen",
    },
    nav: {
      start: "Start",
      oNas: "Über uns",
      uslugi: "Leistungen",
      realizacje: "Projekte",
      faq: "FAQ",
      kontakt: "Kontakt",
    },
    hero: {
      badge: "Entwurf · Visualisierung · Umsetzung",
      titleLines: ["Jedes Gebäude beginnt", "mit einer Entscheidung, die man nicht sieht."],
      paragraph:
        "Wir entwerfen Architektur, Innenräume und 3D-Visualisierungen für Investoren, die Detail als Standard behandeln, nicht als Extra. Vom ersten Entwurf bis zur Bauüberwachung — ein Team, eine Vision.",
      ctaPrimary: "Beratung vereinbaren",
      ctaSecondary: "Projekte ansehen",
    },
    onas: {
      badge: "Über uns",
      heading: "Architektur, die mit Sorgfalt entworfen wird, nicht mit Eile.",
      paragraph:
        "NEGRA DESIGN ist ein Architekturbüro, das ingenieurtechnische Präzision mit einer Ästhetik verbindet, die länger hält als ein einzelner Trend. Wir entwerfen Häuser, Innenräume und Gewerbeflächen — immer ausgehend von der Frage „wozu”, nicht „wie hübsch”.",
      imageAlt: "Das Team von NEGRA DESIGN am Zeichentisch",
      stats: [
        { value: "12+", label: "Jahre am Markt" },
        { value: "140+", label: "abgeschlossene Projekte" },
        { value: "98%", label: "zufriedene Investoren" },
      ],
      values: [
        {
          title: "Planungspräzision",
          desc: "Jede Planungsentscheidung basiert auf einer Analyse — von der Besonnung bis zur Statik.",
        },
        {
          title: "Ein Team",
          desc: "Architekten, Innenarchitekten und Visualisierer arbeiten parallel am Projekt, nicht nacheinander.",
        },
        {
          title: "Begleitung bis zum Schluss",
          desc: "Wir begleiten das Projekt vom ersten Entwurf bis zur Bauabnahme.",
        },
      ],
    },
    kontakt: {
      badge: "Beginnen wir Ihr Projekt",
      heading: "Sprechen wir über Ihr Bauvorhaben.",
      paragraph:
        "Egal in welcher Phase Sie sich befinden — vom ersten Entwurf bis zum baureifen Grundstück — wir sprechen gern über Umfang und Möglichkeiten Ihres Projekts. Wir antworten innerhalb von 48 Werktagsstunden.",
      details: { email: "E-Mail", phone: "Telefon", studio: "Büro" },
      address: "Warschau, Polen",
      form: {
        name: "Vor- und Nachname",
        namePlaceholder: "Max Mustermann",
        email: "E-Mail",
        emailPlaceholder: "max@beispiel.de",
        message: "Nachricht",
        messagePlaceholder: "Erzählen Sie uns kurz von Ihrem Projekt...",
        consent:
          "Mit dem Absenden des Formulars stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung Ihrer Anfrage zu.",
        submit: "Senden",
        sentTitle: "Ihre Nachricht wurde gesendet.",
        sentDesc: "Danke für Ihre Nachricht — wir melden uns so schnell wie möglich.",
        sendAnother: "Weitere Nachricht senden",
      },
    },
    footer: {
      badge: "Fangen wir an",
      headingLine1: "Haben Sie ein Projekt im Kopf,",
      headingLine2: "das auf seine Form wartet?",
      brandBlurb:
        "Ein Architekturbüro. Entwurf, 3D-Visualisierung und Bauüberwachung — ein Team, eine Vision.",
      navTitle: "Navigation",
      contactTitle: "Kontakt",
      hoursTitle: "Öffnungszeiten",
      hours: { weekdays: "Mo–Fr", weekend: "Sa–So", weekdayHours: "9:00–17:00", closed: "Geschlossen" },
      copyright: "Alle Rechte vorbehalten.",
      backToTop: "Nach oben",
    },
  },
};
