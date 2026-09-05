import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return [
    {
      url: `${siteUrl}/en`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteUrl}/en`,
          es: `${siteUrl}/es`,
        },
      },
    },
    {
      url: `${siteUrl}/es`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteUrl}/en`,
          es: `${siteUrl}/es`,
        },
      },
    },
  ];
}