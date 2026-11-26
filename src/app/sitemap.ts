import type { MetadataRoute } from "next";

const BASE_URL = "https://www.itpapi.pl";

const alternatesFor = (path: string) => ({
  languages: {
    en: `${BASE_URL}/en${path}`,
    pl: `${BASE_URL}/pl${path}`,
  },
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: alternatesFor(""),
    },
    {
      url: `${BASE_URL}/pl`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: alternatesFor(""),
    },
    {
      url: `${BASE_URL}/en/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: alternatesFor("/privacy"),
    },
    {
      url: `${BASE_URL}/pl/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: alternatesFor("/privacy"),
    },
  ];
}
