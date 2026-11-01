"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language";
import { ButtonLink } from "@/components/ui";

export function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section
      lang={lang}
      className="relative isolate flex min-h-[600px] flex-col items-center justify-center gap-6 overflow-hidden bg-hero px-4 py-16 text-white md:px-12 md:py-[88px]"
    >
      <Image
        src="/images/top-2.jpg"
        alt="A canal boat passing cherry blossoms in Kyoto"
        fill
        sizes="(max-width: 1280px) 100vw, 1280px"
        loading="eager"
        fetchPriority="high"
        className="-z-10 object-cover"
      />
      {/* Darkens the photo so the white text stays readable. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-hero/55" />
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
