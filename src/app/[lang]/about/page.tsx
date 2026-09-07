import type { Metadata } from "next";

import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

import AboutHero from "@/components/sections/about/AboutHero";
import AboutManifesto from "@/components/sections/about/AboutManifesto";
import AboutPrinciples from "@/components/sections/about/AboutPrinciples";
import AboutEngineeringStandard from "@/components/sections/about/AboutEngineeringStandard";
import AboutOperations from "@/components/sections/about/AboutOperations";
import AboutCTA from "@/components/sections/about/AboutCTA";

type AboutPageProps = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const isSpanish = lang === "es";

  const title = isSpanish
    ? "Empresa de Desarrollo de Software"
    : "Software Engineering Company";

  const description = isSpanish
    ? "Conoce Pingital, una empresa de ingeniería de software especializada en aplicaciones web, sistemas empresariales, cloud e integraciones diseñadas para operaciones críticas."
    : "Meet Pingital, a software engineering company specializing in custom web applications, enterprise systems, cloud architecture and integrations for critical operations.";

  return {
    title,
    description,

    alternates: {
      canonical: `${siteUrl}/${lang}/about`,
      languages: {
        en: `${siteUrl}/en/about`,
        es: `${siteUrl}/es/about`,
      },
    },

    openGraph: {
      title: `${title} | Pingital`,
      description,
      url: `${siteUrl}/${lang}/about`,
      siteName: "Pingital",
      type: "website",
      locale: isSpanish ? "es_MX" : "en_US",
    },
  };
}

export default async function AboutPage({
  params,
}: AboutPageProps) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);
    const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    const isSpanish = lang === "es";

    const aboutUrl = `${siteUrl}/${lang}/about`;

    const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: isSpanish ? "Sobre Pingital" : "About Pingital",
    description: isSpanish
        ? "Conoce Pingital, una empresa de ingeniería de software especializada en aplicaciones web, sistemas empresariales, cloud e integraciones diseñadas para operaciones críticas."
        : "Meet Pingital, a software engineering company specializing in custom web applications, enterprise systems, cloud architecture and integrations for critical operations.",
    url: aboutUrl,
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
    breadcrumb: {
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
            name: isSpanish ? "Sobre Pingital" : "About",
            item: aboutUrl,
        },
        ],
    },
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
                }}
            />
            <AboutHero
                eyebrow={dictionary.aboutPage.hero.eyebrow}
                topLabels={dictionary.aboutPage.hero.topLabels}
                title={dictionary.aboutPage.hero.title}
                leftEyebrow={dictionary.aboutPage.hero.leftEyebrow}
                leftDescription={dictionary.aboutPage.hero.leftDescription}
                description={dictionary.aboutPage.hero.description}
                stats={dictionary.aboutPage.hero.stats}
            />
            <AboutManifesto
                eyebrow={dictionary.aboutPage.manifesto.eyebrow}
                title={dictionary.aboutPage.manifesto.title}
                description={dictionary.aboutPage.manifesto.description}
                principleLabel={dictionary.aboutPage.manifesto.principleLabel}
                items={dictionary.aboutPage.manifesto.items}
            />
            <AboutPrinciples
                eyebrow={dictionary.aboutPage.principles.eyebrow}
                title={dictionary.aboutPage.principles.title}
                description={dictionary.aboutPage.principles.description}
                items={dictionary.aboutPage.principles.items}
            />
            <AboutEngineeringStandard
                eyebrow={dictionary.aboutPage.engineeringStandard.eyebrow}
                title={dictionary.aboutPage.engineeringStandard.title}
                description={dictionary.aboutPage.engineeringStandard.description}
                metricLabel={dictionary.aboutPage.engineeringStandard.metricLabel}
                metricValue={dictionary.aboutPage.engineeringStandard.metricValue}
                codeLabel={dictionary.aboutPage.engineeringStandard.codeLabel}
                codeLines={dictionary.aboutPage.engineeringStandard.codeLines}
            />
            <AboutOperations
                eyebrow={dictionary.aboutPage.operations.eyebrow}
                title={dictionary.aboutPage.operations.title}
                description={dictionary.aboutPage.operations.description}
                items={dictionary.aboutPage.operations.items}
            />
            <AboutCTA
                lang={lang}
                eyebrow={dictionary.aboutPage.cta.eyebrow}
                title={dictionary.aboutPage.cta.title}
                description={dictionary.aboutPage.cta.description}
                primaryCta={dictionary.aboutPage.cta.primaryCta}
                secondaryCta={dictionary.aboutPage.cta.secondaryCta}
                signals={dictionary.aboutPage.cta.signals}
            />
        </main>
        
        
    );
}