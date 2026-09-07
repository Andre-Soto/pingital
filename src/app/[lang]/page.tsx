import Hero from "@/components/sections/home/Hero";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Stats from "@/components/sections/home/Stats";
import Positioning from "@/components/sections/home/Positioning";
import Services from "@/components/sections/home/Services";
import CaseStudies from "@/components/sections/home/CaseStudies";
import Methodology from "@/components/sections/home/Methodology";
import ModernStack from "@/components/sections/home/ModernStack";
import ContactCTA from "@/components/sections/home/ContactCTA";
import type { Metadata } from "next";

type HomePageProps = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { lang } = await params;

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const isSpanish = lang === "es";

  const title = isSpanish
    ? "Desarrollo de Software a la Medida"
    : "Custom Software Development";

  const description = isSpanish
    ? "Pingital diseña aplicaciones web, apps móviles, sistemas empresariales, integraciones y arquitectura cloud adaptados a los procesos reales de tu negocio."
    : "Pingital engineers custom web applications, mobile apps, enterprise systems, integrations and cloud infrastructure around real business processes.";

  return {
    title,
    description,

    alternates: {
      canonical: `${siteUrl}/${lang}`,
      languages: {
        en: `${siteUrl}/en`,
        es: `${siteUrl}/es`,
      },
    },

    openGraph: {
      title: `${title} | Pingital`,
      description,
      url: `${siteUrl}/${lang}`,
      siteName: "Pingital",
      type: "website",
      locale: isSpanish ? "es_MX" : "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | Pingital`,
      description,
    },
  };
}

export default async function HomePage({
  params,
}: HomePageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const isSpanish = lang === "es";
  const homeUrl = `${siteUrl}/${lang}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Pingital",
        url: siteUrl,
        description: isSpanish
          ? "Empresa de ingeniería de software especializada en aplicaciones web, sistemas empresariales, integraciones, aplicaciones móviles y arquitectura cloud."
          : "Software engineering company specializing in web applications, enterprise systems, integrations, mobile applications and cloud architecture.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Pingital",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: ["en-US", "es-MX"],
      },
      {
        "@type": "WebPage",
        "@id": `${homeUrl}#webpage`,
        url: homeUrl,
        name: isSpanish
          ? "Pingital | Desarrollo de Software a la Medida"
          : "Pingital | Custom Software Development",
        description: isSpanish
          ? "Diseñamos aplicaciones web, apps móviles, sistemas empresariales, integraciones y arquitectura cloud alrededor de las necesidades reales de cada negocio."
          : "We engineer custom web applications, mobile apps, enterprise systems, integrations and cloud infrastructure around real business requirements.",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: isSpanish ? "es-MX" : "en-US",
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
      <Hero
        title={dictionary.home.title}
        description={dictionary.home.description}
        badge={dictionary.home.hero.badge}
        primaryCta={dictionary.home.hero.primaryCta}
        secondaryCta={dictionary.home.hero.secondaryCta}
      />

      <Stats stats={dictionary.home.stats} />
      <Positioning
        eyebrow={dictionary.home.positioning.eyebrow}
        title={dictionary.home.positioning.title}
        paragraph1={dictionary.home.positioning.paragraph1}
        paragraph2={dictionary.home.positioning.paragraph2}
      />
      <Services
        eyebrow={dictionary.home.services.eyebrow}
        title={dictionary.home.services.title}
        description={dictionary.home.services.description}
        cta={dictionary.home.services.cta}
        items={dictionary.home.services.items}
      />
      <CaseStudies
        eyebrow={dictionary.home.caseStudies.eyebrow}
        title={dictionary.home.caseStudies.title}
        cta={dictionary.home.caseStudies.cta}
        items={dictionary.home.caseStudies.items}
      />
      <Methodology
        eyebrow={dictionary.home.methodology.eyebrow}
        title={dictionary.home.methodology.title}
        items={dictionary.home.methodology.items}
      />
      <ModernStack
        eyebrow={dictionary.home.modernStack.eyebrow}
        title={dictionary.home.modernStack.title}
        description={dictionary.home.modernStack.description}
        groups={dictionary.home.modernStack.groups}
      />
      <ContactCTA
        lang={lang}
        badge={dictionary.home.contactCta.badge}
        title={dictionary.home.contactCta.title}
        description={dictionary.home.contactCta.description}
        securityTitle={dictionary.home.contactCta.securityTitle}
        securityDescription={dictionary.home.contactCta.securityDescription}
        fields={dictionary.home.contactCta.fields}
        categories={dictionary.home.contactCta.categories}
        budgets={dictionary.home.contactCta.budgets}
        submit={dictionary.home.contactCta.submit}
        sending={dictionary.home.contactCta.sending}
        errorMessage={dictionary.home.contactCta.error}
      />
    </main>
  );
}