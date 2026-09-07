import ContactHero from "@/components/sections/contact/ContactHero";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import ContactEngagement from "@/components/sections/contact/ContactEngagement";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";
import type { Metadata } from "next";

type ContactPageProps = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { lang } = await params;

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const isSpanish = lang === "es";

  const title = isSpanish
    ? "Contacto para Desarrollo de Software"
    : "Software Development Contact";

  const description = isSpanish
    ? "Habla directamente con el equipo de Pingital para evaluar aplicaciones web, sistemas empresariales, integraciones, arquitectura cloud y desarrollo de software a la medida."
    : "Talk directly with Pingital's engineering team about custom web applications, enterprise systems, integrations, cloud architecture and software development.";

  return {
    title,
    description,

    alternates: {
      canonical: `${siteUrl}/${lang}/contact`,
      languages: {
        en: `${siteUrl}/en/contact`,
        es: `${siteUrl}/es/contact`,
      },
    },

    openGraph: {
      title: `${title} | Pingital`,
      description,
      url: `${siteUrl}/${lang}/contact`,
      siteName: "Pingital",
      type: "website",
      locale: isSpanish ? "es_MX" : "en_US",
    },
  };
}

export default async function ContactPage({
  params,
}: ContactPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const isSpanish = lang === "es";
  const contactUrl = `${siteUrl}/${lang}/contact`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${contactUrl}#webpage`,
        url: contactUrl,
        name: isSpanish ? "Contacto | Pingital" : "Contact | Pingital",
        description: isSpanish
          ? "Contacta al equipo de Pingital para evaluar requerimientos, arquitectura, integraciones y desarrollo de software a la medida."
          : "Contact Pingital to discuss software requirements, architecture, integrations and custom development.",
        inLanguage: isSpanish ? "es-MX" : "en-US",
        isPartOf: {
          "@type": "WebSite",
          name: "Pingital",
          url: siteUrl,
        },
        about: {
          "@type": "Organization",
          name: "Pingital",
          url: siteUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: isSpanish ? "Inicio" : "Home",
            item: `${siteUrl}/${lang}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isSpanish ? "Contacto" : "Contact",
            item: contactUrl,
          },
        ],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
        <ContactHero
            eyebrow={dictionary.contact.hero.eyebrow}
            title={dictionary.contact.hero.title}
            description={dictionary.contact.hero.description}
            nda={dictionary.contact.hero.nda}
            response={dictionary.contact.hero.response}
            contact={dictionary.contact.hero.contact}
        />
        <ContactEngagement
            lang={lang}
            content={dictionary.contact.engagement}
        />
        <ContactFAQ
            eyebrow={dictionary.contact.faq.eyebrow}
            title={dictionary.contact.faq.title}
            description={dictionary.contact.faq.description}
            items={dictionary.contact.faq.items}
        />
    </main>
  );
}