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

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main>
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