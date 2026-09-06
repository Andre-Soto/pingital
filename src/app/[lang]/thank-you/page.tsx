import Link from "next/link";

import LeadConversionEvent from "@/components/common/LeadConversionEvent";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
      <LeadConversionEvent />

      <div className="max-w-[650px] text-center">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
          {dictionary.thankYou.eyebrow}
        </p>

        <h1 className="text-4xl font-semibold tracking-[-0.045em] text-neutral-950 md:text-6xl">
          {dictionary.thankYou.title}
        </h1>

        <p className="mx-auto mt-6 max-w-[520px] text-base leading-7 text-neutral-600">
          {dictionary.thankYou.description}
        </p>

        <Link
          href={`/${lang}`}
          className="mt-8 inline-flex rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
        >
          {dictionary.thankYou.button}
        </Link>
      </div>
    </main>
  );
}