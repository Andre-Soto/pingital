import type { Metadata } from "next";

import type { Locale } from "@/i18n/config";

import { getDictionary } from "@/i18n/get-dictionary";

import ServicesHero from "@/components/sections/services/ServicesHero";
import ServiceDisciplines from "@/components/sections/services/ServiceDisciplines";
import ExecutableSpecs from "@/components/sections/services/ExecutableSpecs";
import AgencyComparison from "@/components/sections/services/AgencyComparison";
import DeliveryFramework from "@/components/sections/services/DeliveryFramework";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

type ServicesPageProps = {
  params: Promise<{ lang: Locale }>;
  
};

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { lang } = await params;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const isSpanish = lang === "es";

  return {
    title: isSpanish
      ? "Desarrollo de Software a la Medida"
      : "Custom Software Development",

    description: isSpanish
      ? "Desarrollamos aplicaciones web, apps móviles, integraciones y arquitectura cloud adaptadas a los procesos y objetivos de tu negocio."
      : "Custom web applications, mobile apps, integrations and cloud architecture engineered around your business processes and growth goals.",

    alternates: {
      canonical: `${siteUrl}/${lang}/services`,
      languages: {
        en: `${siteUrl}/en/services`,
        es: `${siteUrl}/es/services`,
      },
    },

    openGraph: {
      title: isSpanish
        ? "Desarrollo de Software a la Medida | Pingital"
        : "Custom Software Development | Pingital",

      description: isSpanish
        ? "Software, aplicaciones e infraestructura tecnológica diseñados alrededor de tu negocio."
        : "Software, applications and technology infrastructure designed around your business.",

      url: `${siteUrl}/${lang}/services`,
      siteName: "Pingital",
      type: "website",
      locale: isSpanish ? "es_MX" : "en_US",
    },
  };
}

export default async function ServicesPage({
  params,
}: ServicesPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const isSpanish = lang === "es";
  const servicesUrl = `${siteUrl}/${lang}/services`;

  const services = isSpanish
    ? [
        {
          name: "Aplicaciones Web a la Medida",
          description:
            "Desarrollo de aplicaciones web diseñadas alrededor de los procesos, operaciones y objetivos específicos de cada negocio.",
        },
        {
          name: "Aplicaciones Móviles",
          description:
            "Aplicaciones móviles modernas diseñadas para integrarse con sistemas empresariales, APIs y servicios cloud.",
        },
        {
          name: "Sistemas Empresariales",
          description:
            "ERP, dashboards, plataformas internas y herramientas operativas desarrolladas según los procesos reales de la organización.",
        },
        {
          name: "Integraciones y APIs",
          description:
            "Integración de plataformas, sistemas externos, CRMs, ERPs, servicios SaaS y APIs personalizadas.",
        },
        {
          name: "Arquitectura Cloud",
          description:
            "Diseño de infraestructura cloud escalable, automatizada y preparada para aplicaciones modernas.",
        },
        {
          name: "Modernización de Software",
          description:
            "Modernización progresiva de aplicaciones legacy, arquitectura, infraestructura y procesos de desarrollo.",
        },
      ]
    : [
        {
          name: "Custom Web Applications",
          description:
            "Web applications engineered around the specific processes, operations and objectives of each business.",
        },
        {
          name: "Mobile Applications",
          description:
            "Modern mobile applications designed to integrate with enterprise systems, APIs and cloud services.",
        },
        {
          name: "Enterprise Systems",
          description:
            "ERP systems, dashboards, internal platforms and operational tools built around real business processes.",
        },
        {
          name: "Integrations & APIs",
          description:
            "Integration of external platforms, enterprise systems, CRMs, ERPs, SaaS products and custom APIs.",
        },
        {
          name: "Cloud Architecture",
          description:
            "Scalable and automated cloud infrastructure designed for modern software applications.",
        },
        {
          name: "Software Modernization",
          description:
            "Progressive modernization of legacy applications, architecture, infrastructure and development workflows.",
        },
      ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${servicesUrl}#webpage`,
        url: servicesUrl,
        name: isSpanish
          ? "Desarrollo de Software a la Medida | Pingital"
          : "Custom Software Development | Pingital",
        description: isSpanish
          ? "Aplicaciones web, apps móviles, integraciones y arquitectura cloud diseñadas alrededor de las necesidades del negocio."
          : "Web applications, mobile apps, integrations and cloud architecture engineered around business requirements.",
        inLanguage: isSpanish ? "es-MX" : "en-US",
        isPartOf: {
          "@type": "WebSite",
          name: "Pingital",
          url: siteUrl,
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: service.name,
              description: service.description,
              provider: {
                "@type": "Organization",
                name: "Pingital",
                url: siteUrl,
              },
            },
          })),
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
            name: isSpanish ? "Servicios" : "Services",
            item: servicesUrl,
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
        <ServicesHero content={dictionary.servicesPage.hero} />
        <ServiceDisciplines
            eyebrow={dictionary.servicesPage.disciplines.eyebrow}
            title={dictionary.servicesPage.disciplines.title}
            description={dictionary.servicesPage.disciplines.description}
            problemsLabel={dictionary.servicesPage.disciplines.problemsLabel}
            stackLabel={dictionary.servicesPage.disciplines.stackLabel}
            items={dictionary.servicesPage.disciplines.items}
        />
        <ExecutableSpecs
            eyebrow={dictionary.servicesPage.executableSpecs.eyebrow}
            title={dictionary.servicesPage.executableSpecs.title}
            description={dictionary.servicesPage.executableSpecs.description}
            stats={dictionary.servicesPage.executableSpecs.stats}
            codeLabel={dictionary.servicesPage.executableSpecs.codeLabel}
        />
        <AgencyComparison
            eyebrow={dictionary.servicesPage.comparison.eyebrow}
            title={dictionary.servicesPage.comparison.title}
            description={dictionary.servicesPage.comparison.description}
            columns={dictionary.servicesPage.comparison.columns}
            rows={dictionary.servicesPage.comparison.rows}
            benefits={dictionary.servicesPage.comparison.benefits}
        />
        <DeliveryFramework
            eyebrow={dictionary.servicesPage.deliveryFramework.eyebrow}
            title={dictionary.servicesPage.deliveryFramework.title}
            description={dictionary.servicesPage.deliveryFramework.description}
            deliverableLabel={
            dictionary.servicesPage.deliveryFramework.deliverableLabel
            }
            phases={dictionary.servicesPage.deliveryFramework.phases}
        />
        <ServicesCTA
            lang={lang}
            eyebrow={dictionary.servicesPage.cta.eyebrow}
            title={dictionary.servicesPage.cta.title}
            description={dictionary.servicesPage.cta.description}
            points={dictionary.servicesPage.cta.points}
            primaryCta={dictionary.servicesPage.cta.primaryCta}
        />
    </main>
  );
}