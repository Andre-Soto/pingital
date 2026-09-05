import type { Metadata } from "next";
import "../globals.css";
import { notFound } from "next/navigation";

import { locales, type Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Pingital",
  description: "Software built around your business",
};

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
    </html>
  );
}