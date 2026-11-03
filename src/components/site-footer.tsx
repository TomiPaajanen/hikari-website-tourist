const footerLinks: { label: string; href?: string }[] = [
  // Pages for these don't exist yet.
  { label: "Terms of use" },
  { label: "Cancellation policy" },
  { label: "Commercial transactions notice" },
  { label: "Privacy policy" },
  { label: "Instagram", href: "https://www.instagram.com/toiro.journeys/" },
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
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs">
        {footerLinks.map(({ label, href }) => (
          <li key={label} className="underline">
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-paper hover:text-white">
                {label}
              </a>
            ) : (
              label
            )}
          </li>
        ))}
      </ul>
      <p className="text-[11px]">© 2026 TOIRO Journeys</p>
    </footer>
  );
}
