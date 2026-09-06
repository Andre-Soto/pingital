import Link from "next/link";
import type { Locale } from "@/i18n/config";
import LeadConversionEvent from "@/components/common/LeadConversionEvent";

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
      <LeadConversionEvent />
      <div className="max-w-[650px] text-center">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
          Pingital
        </p>

        <h1 className="text-4xl font-semibold tracking-[-0.045em] text-neutral-950 md:text-6xl">
          Thank you.
        </h1>

        <p className="mx-auto mt-6 max-w-[520px] text-base leading-7 text-neutral-600">
          Your project brief has been received. Our team will review it and get
          back to you shortly.
        </p>

        <Link
          href={`/${lang}`}
          className="mt-8 inline-flex rounded-md bg-black px-6 py-3 text-sm font-medium text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}