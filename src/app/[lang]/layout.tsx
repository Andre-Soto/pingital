import type { Metadata } from "next";
import "../globals.css";
import { notFound } from "next/navigation";
import { GoogleTagManager } from "@next/third-parties/google";

import { locales, type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const isSpanish = lang === "es";
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return {
    title: {
      default: "Pingital",
      template: "%s | Pingital",
    },

    description: isSpanish
      ? "Desarrollo de software, aplicaciones web y soluciones digitales adaptadas a tu negocio."
      : "Software development, web applications and digital solutions built around your business.",

    alternates: {
      canonical: `${siteUrl}/${lang}`,
      languages: {
        en: `${siteUrl}/en`,
        es: `${siteUrl}/es`,
      },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
    }

  return (
  <html lang={lang}>
    <body>{children}</body>

    {process.env.NEXT_PUBLIC_GTM_ID && (
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
    )}
  </html>
);
}