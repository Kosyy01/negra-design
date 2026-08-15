"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Locale } from "@/types";
import { dictionary, Dictionary } from "./translations";

const STORAGE_KEY = "negra-locale";

const LOCALES: Locale[] = ["pl", "en-GB", "en-US", "de"];

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "pl";

  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && LOCALES.includes(stored)) return stored;

  const nav = window.navigator.language; // np. "en-US", "de-DE", "pl"
  if (nav.startsWith("de")) return "de";
  if (nav.toLowerCase() === "en-us") return "en-US";
  if (nav.toLowerCase().startsWith("en")) return "en-GB";
  return "pl";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Zawsze startujemy z "pl" na serwerze/pierwszym renderze, żeby uniknąć
  // niezgodności hydratacji — właściwy język ustawiamy zaraz po montażu.
  const [locale, setLocaleState] = useState<Locale>("pl");

  useEffect(() => {
    setLocaleState(detectInitialLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = dictionary[locale].meta.htmlLang;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: dictionary[locale] }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage musi być użyty wewnątrz LanguageProvider");
  return ctx;
}
