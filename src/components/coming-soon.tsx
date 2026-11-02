export function ComingSoon() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="font-serif text-[26px] font-bold tracking-[0.1em] md:text-[32px]">TOIRO JOURNEYS</div>
      <p className="font-serif text-xl italic md:text-2xl">Our new website is on its way.</p>
      <p className="max-w-[32em] text-sm leading-[1.85]">
        Private custom tours in Japan, designed around its traditions, countryside, and the people behind them. In the
        meantime, write to us at{" "}
        <a href="mailto:info@toirojourneys.com" className="whitespace-nowrap">
          info@toirojourneys.com
        </a>
        .
      </p>
    </main>
  );
}
