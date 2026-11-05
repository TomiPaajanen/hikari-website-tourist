import type { MetadataRoute } from "next";

const SITE_URL = "https://www.toirojourneys.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...["/terms", "/privacy", "/cancellation", "/commercial-transactions"].map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
