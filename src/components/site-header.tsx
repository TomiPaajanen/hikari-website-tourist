"use client";

import { useLanguage, type Lang } from "@/components/language";

const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ja", label: "日本語" },
];

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 border-b border-sand px-4 py-[22px] md:px-14">
      <div className="font-serif text-[21px] font-bold tracking-[0.1em]">TOIRO JOURNEYS</div>
      <nav lang={lang} className="flex flex-wrap items-center justify-center gap-[22px]">
        {t.menu.map((item) => (
          <a key={item.href} href={item.href} className="text-[13px] text-ink no-underline hover:text-accent">
            {item.label}
          </a>
        ))}
        <div role="group" aria-label="Language" className="flex gap-0.5 rounded-full border border-sand p-[3px]">
          {languages.map(({ code, label }) => (
            <button
              key={code}
              type="button"
              aria-pressed={lang === code}
              onClick={() => setLang(code)}
              className={`min-h-9 cursor-pointer rounded-full px-[15px] py-2 text-xs ${
                lang === code ? "bg-accent font-semibold text-white" : "bg-transparent text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
