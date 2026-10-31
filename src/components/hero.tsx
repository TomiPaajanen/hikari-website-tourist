"use client";

import { useLanguage } from "@/components/language";
import { ButtonLink } from "@/components/ui";

export function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section
      lang={lang}
      className="relative flex min-h-[600px] flex-col items-center justify-center gap-6 overflow-hidden bg-hero px-4 py-16 text-white md:px-12 md:py-[88px]"
    >
      <p className="absolute top-[18px] left-5 hidden text-[10px] tracking-[0.08em] uppercase md:block">
        [ Background photo — natural light, a person or their hands ]
      </p>
      <h1 className="max-w-[17em] font-serif text-[30px] leading-[1.2] font-semibold md:text-[38px]">
        {t.heroTitle}
      </h1>
      <p className="max-w-[44em] text-[15px] leading-[1.85]">{t.heroSub}</p>
      <ButtonLink href="#about" className="mt-2.5 px-[38px] py-[18px] text-[15px] font-medium">
        {t.heroCta}
      </ButtonLink>
    </section>
  );
}
