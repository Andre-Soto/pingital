import type { Metadata } from "next";

import "../globals.css";

import { notFound } from "next/navigation";
import { GoogleTagManager } from "@next/third-parties/google";

import { locales, type Locale } from "@/i18n/config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Pingital",

  title: {
    default: "Pingital",
    template: "%s | Pingital",
  },

  description:
    "Pingital engineers custom software, web applications, enterprise systems, integrations and cloud infrastructure.",

  openGraph: {
    siteName: "Pingital",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
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
      <body>
        <Header lang={lang as Locale} />

        {children}

        <Footer lang={lang as Locale} />

        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </body>
    </html>
  );
}