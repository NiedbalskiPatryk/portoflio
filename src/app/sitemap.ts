import type { MetadataRoute } from "next";

const BASE_URL = "https://itpapi.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          pl: `${BASE_URL}/pl`,
        },
      },
    },
    {
      url: `${BASE_URL}/pl`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          pl: `${BASE_URL}/pl`,
        },
      },
    },
  ];
}
