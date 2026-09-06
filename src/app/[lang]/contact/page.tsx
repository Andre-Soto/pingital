import ContactHero from "@/components/sections/contact/ContactHero";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import ContactEngagement from "@/components/sections/contact/ContactEngagement";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main>
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