import Link from "next/link";

import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type HeaderProps = {
  lang: Locale;
};

export default async function Header({ lang }: HeaderProps) {
  const dictionary = await getDictionary(lang);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-950"
        >
          <span className="h-2 w-2 rounded-full bg-black" />
          Pingital
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href={`/${lang}`}
            className="text-sm text-neutral-700 transition-colors hover:text-black"
          >
            {dictionary.navigation.home}
          </Link>

          <Link
            href={`/${lang}/services`}
            className="text-sm text-neutral-700 transition-colors hover:text-black"
          >
            {dictionary.navigation.services}
          </Link>

          <Link
            href={`/${lang}/about`}
            className="text-sm text-neutral-700 transition-colors hover:text-black"
          >
            {dictionary.navigation.about}
          </Link>

          <Link
            href={`/${lang}/blog`}
            className="text-sm text-neutral-700 transition-colors hover:text-black"
          >
            {dictionary.navigation.blog}
          </Link>
        </nav>

        <Link
          href={`/${lang}/contact`}
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
        >
          {dictionary.navigation.contact}
        </Link>

      </div>
    </header>
  );
}