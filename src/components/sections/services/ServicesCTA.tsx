import Link from "next/link";

import type { Locale } from "@/i18n/config";

type ServicesCTAProps = {
  lang: Locale;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  primaryCta: string;
};

export default function ServicesCTA({
  lang,
  eyebrow,
  title,
  description,
  points,
  primaryCta,
}: ServicesCTAProps) {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 rounded-2xl bg-black p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-12">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
              {eyebrow}
            </p>

            <h2 className="max-w-[700px] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-5xl">
              {title}
            </h2>

            <p className="mt-6 max-w-[650px] text-base leading-7 text-neutral-400">
              {description}
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-400">
              {points.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <Link
              href={`/${lang}/contact`}
              className="inline-flex min-w-[240px] justify-center rounded-md bg-[#ff5a36] px-6 py-4 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              {primaryCta} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}