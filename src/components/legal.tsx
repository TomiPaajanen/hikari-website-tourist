import type { ReactNode } from "react";
import { LanguageProvider } from "@/components/language";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const contactEmail = (
  <a href="mailto:info@toirojourneys.com" className="whitespace-nowrap">
    info@toirojourneys.com
  </a>
);

export function LegalPage({
  title,
  details,
  children,
}: {
  title: string;
  details: { label: string; value: ReactNode }[];
  children: ReactNode;
}) {
  return (
    <LanguageProvider>
      <div className="mx-auto max-w-[1280px]">
        <SiteHeader />
        <main className="mx-auto flex max-w-[44em] flex-col gap-4 px-4 py-16 text-sm leading-[1.85] md:py-20">
          <h1 className="font-serif text-[34px] leading-tight font-semibold md:text-[40px]">{title}</h1>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 text-[13px]">
            {details.map(({ label, value }) => (
              <div key={label} className="contents">
                <dt className="font-semibold">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          {children}
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="mt-4 font-serif text-[22px] font-semibold">{title}</h2>
      {children}
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
