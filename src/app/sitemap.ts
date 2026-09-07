import type { MetadataRoute } from "next";

import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const pages = ["", "/services", "/about", "/contact"];

  return pages.flatMap((path) =>
    locales.map((lang) => ({
      url: `${siteUrl}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority:
        path === ""
          ? 1
          : path === "/services"
            ? 0.9
            : 0.8,
      alternates: {
        languages: {
          en: `${siteUrl}/en${path}`,
          es: `${siteUrl}/es${path}`,
        },
      },
    })),
  );
}