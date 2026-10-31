import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Sans_JP, Zen_Old_Mincho } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  preload: false,
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-zen-old-mincho",
  subsets: ["latin"],
  weight: ["400", "500"],
  preload: false,
});

export const metadata: Metadata = {
  title: "TOIRO Journeys",
  description:
    "Private custom tours in Japan, designed around its traditions, countryside, and the people behind them.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansJp.variable} ${cormorant.variable} ${zenOldMincho.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
