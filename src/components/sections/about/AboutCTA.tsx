import Link from "next/link";

import type { Locale } from "@/i18n/config";

type AboutCTAProps = {
  lang: Locale;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  signals: string[];
};

export default function AboutCTA({
  lang,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  signals,
}: AboutCTAProps) {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="overflow-hidden rounded-2xl bg-black px-8 py-12 text-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:px-12 md:py-16 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
                {eyebrow}
              </p>

              <h2 className="max-w-[760px] text-4xl font-semibold leading-[0.96] tracking-[-0.045em] md:text-6xl">
                {title}
              </h2>

              <p className="mt-6 max-w-[680px] text-base leading-7 text-neutral-400">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/${lang}/contact`}
                  className="inline-flex items-center justify-center rounded-md bg-[#ff5a36] px-6 py-4 text-sm font-medium text-white transition-opacity hover:opacity-85"
                >
                  {primaryCta} →
                </Link>

                <Link
                  href={`/${lang}/services`}
                  className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  {secondaryCta}
                </Link>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="border-t border-neutral-800 pt-6 lg:min-w-[300px]">
                {signals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-center gap-3 border-b border-neutral-800 py-4"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a36]"
                    />

                    <span className="text-sm text-neutral-400">
                      {signal}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}