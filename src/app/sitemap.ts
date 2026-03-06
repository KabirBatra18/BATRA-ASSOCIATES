import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/app/data/valuation-services";
import { SITE_URL } from "@/app/data/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = getAllSlugs().map((slug) => ({
    url: `${SITE_URL}/valuation/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...servicePages,
  ];
}
