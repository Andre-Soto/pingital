import Link from "next/link";

import HeaderNavigation from "@/components/layout/HeaderNavigation";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type HeaderProps = {
  lang: Locale;
};

export default async function Header({ lang }: HeaderProps) {
  const dictionary = await getDictionary(lang);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white">
      <div className="relative mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-950"
        >
          <span className="h-2 w-2 rounded-full bg-black" />
          Pingital
        </Link>

        <HeaderNavigation
          lang={lang}
          navigation={dictionary.navigation}
        />
      </div>
    </header>
  );
}