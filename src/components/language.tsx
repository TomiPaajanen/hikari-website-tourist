"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "ja";

const copy = {
  en: {
    heroTitle:
      "Private custom tours in Japan, designed around its traditions, countryside, and the people behind them.",
    heroSub:
      "Tell us what you're curious about, and we'll introduce you to the people behind each place: artisans, family-run businesses, and the communities around them.",
    heroCta: "Our story",
    menu: [
      { label: "Itineraries", href: "/#itineraries" },
      { label: "About", href: "/#about" },
      { label: "Travel guide", href: "/#guide" },
      { label: "For travel agents", href: "/#agents" },
    ],
  },
  ja: {
    heroTitle: "旅人が十人いれば、十色の日本がある。",
    heroSub:
      "興味を聞かせてください。その道に生きる人に、ご紹介します。同じ場所でも、会う人によって旅は変わります。あなたの興味から旅を組み、その道に生きる人へお引き合わせします。",
    heroCta: "私たちについて",
    menu: [
      { label: "旅程を見る", href: "/#itineraries" },
      { label: "About", href: "/#about" },
      { label: "トラベルガイド", href: "/#guide" },
      { label: "旅行会社・企業様", href: "/#agents" },
    ],
  },
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return <LanguageContext value={{ lang, setLang }}>{children}</LanguageContext>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return { ...context, t: copy[context.lang] };
}
