"use client";

import { useLanguage } from "@/components/language";

export function SiteHeader() {
  const { lang, t } = useLanguage();

  return (
    <header className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 border-b border-sand px-4 py-[22px] md:px-14">
      <div className="font-serif text-[21px] font-bold tracking-[0.1em]">Toiro Journeys</div>
      <nav lang={lang} className="flex flex-wrap items-center justify-center gap-[22px]">
        {t.menu.map((item) => (
          <a key={item.href} href={item.href} className="text-[13px] text-ink no-underline hover:text-accent">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
