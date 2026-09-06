import Link from "next/link";

import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type FooterProps = {
  lang: Locale;
};

export default async function Footer({ lang }: FooterProps) {
  const dictionary = await getDictionary(lang);
  const footer = dictionary.footer;

  return (
    <footer className="bg-[#f3f1f2] px-6 pb-10 pt-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 border-t border-neutral-300 pt-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link
              href={`/${lang}`}
              className="text-lg font-semibold tracking-tight text-neutral-950"
            >
              Pingital
            </Link>

            <p className="mt-5 max-w-[320px] text-base leading-7 text-neutral-600">
              {footer.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-neutral-950">
              {footer.company}
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href={`/${lang}/about`}
                className="text-sm text-neutral-600 transition-colors hover:text-black"
              >
                {footer.about}
              </Link>

              <Link
                href={`/${lang}/services`}
                className="text-sm text-neutral-600 transition-colors hover:text-black"
              >
                {footer.services}
              </Link>

              <Link
                href={`/${lang}/blog`}
                className="text-sm text-neutral-600 transition-colors hover:text-black"
              >
                {footer.insights}
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-neutral-950">
              {footer.capabilities}
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-neutral-600">
              <span>{footer.webApplications}</span>
              <span>{footer.mobileApplications}</span>
              <span>{footer.cloudArchitecture}</span>
              <span>{footer.integrations}</span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-neutral-950">
              {footer.contact}
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-neutral-600">
              <a href="mailto:hello@pingital.com">
                hello@pingital.com
              </a>

              <Link href={`/${lang}/contact`}>
                {footer.startProject}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-neutral-300 pt-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Pingital. {footer.rights}
          </p>

          <div className="flex gap-6">
            <Link href={`/${lang}/privacy`}>
              {footer.privacy}
            </Link>

            <Link href={`/${lang}/terms`}>
              {footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}