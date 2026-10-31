const legalLinks = [
  "Terms of use",
  "Cancellation policy",
  "Commercial transactions notice",
  "Privacy policy",
  "Instagram",
];

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="flex flex-col items-center gap-4 bg-ink px-4 pt-14 pb-[52px] text-paper md:px-14"
    >
      <div className="font-serif text-[22px] font-bold tracking-[0.1em]">TOIRO JOURNEYS</div>
      <a href="mailto:info@toirojourneys.com" className="text-xs text-paper no-underline hover:text-white">
        info@toirojourneys.com
      </a>
      {/* Pages for these don't exist yet. */}
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs">
        {legalLinks.map((label) => (
          <li key={label} className="underline">
            {label}
          </li>
        ))}
      </ul>
      <p className="text-[11px]">© 2026 TOIRO Journeys</p>
    </footer>
  );
}
