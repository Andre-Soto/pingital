"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import type { Locale } from "@/i18n/config";

type Navigation = {
  home: string;
  services: string;
  about: string;
  blog: string;
  contact: string;
};

type HeaderNavigationProps = {
  lang: Locale;
  navigation: Navigation;
};

export default function HeaderNavigation({
  lang,
  navigation,
}: HeaderNavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      label: navigation.home,
      href: `/${lang}`,
      exact: true,
    },
    {
      label: navigation.services,
      href: `/${lang}/services`,
    },
    {
      label: navigation.about,
      href: `/${lang}/about`,
    },
    {
      label: navigation.blog,
      href: `/${lang}/blog`,
    },
  ];

  function isActive(href: string, exact?: boolean) {
    if (exact) {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  // Evita scroll de la página cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden items-center gap-8 md:flex">
        {links.map((link) => {
          const active = isActive(link.href, link.exact);

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={[
                "relative py-2 text-sm transition-colors",
                active
                  ? "font-medium text-neutral-950"
                  : "text-neutral-500 hover:text-neutral-950",
              ].join(" ")}
            >
              {link.label}

              {active && (
                <span className="absolute inset-x-0 -bottom-[13px] mx-auto h-[2px] bg-[#ff5a36]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Desktop contact */}
      <Link
        href={`/${lang}/contact`}
        className={[
          "hidden rounded-md px-4 py-2 text-sm font-medium transition-colors md:inline-flex",
          pathname.startsWith(`/${lang}/contact`)
            ? "bg-[#ff5a36] text-white"
            : "bg-black text-white hover:bg-neutral-800",
        ].join(" ")}
      >
        {navigation.contact}
      </Link>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="relative z-[60] flex h-10 w-10 items-center justify-center md:hidden"
      >
        <div className="relative h-4 w-5">
          <span
            className={[
              "absolute left-0 top-[4px] h-[1.5px] w-full bg-black transition-all duration-300",
              isOpen
                ? "top-[7px] rotate-45"
                : "",
            ].join(" ")}
          />

          <span
            className={[
              "absolute bottom-[4px] left-0 h-[1.5px] w-full bg-black transition-all duration-300",
              isOpen
                ? "bottom-[7px] -rotate-45"
                : "",
            ].join(" ")}
          />
        </div>
      </button>

      {/* Apple-style mobile menu */}
      <div
        className={[
          "fixed inset-x-0 bottom-0 top-16 z-50 bg-white transition-all duration-300 ease-out md:hidden",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto flex h-full max-w-[700px] flex-col px-8 pb-10 pt-12">
          <nav className="flex flex-col">
            {links.map((link, index) => {
              const active = isActive(link.href, link.exact);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "flex items-center justify-between py-3 text-[36px] font-semibold leading-tight tracking-[-0.04em] transition-all duration-300",
                    active
                      ? "text-neutral-950"
                      : "text-neutral-950 hover:text-neutral-500",
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0",
                  ].join(" ")}
                  style={{
                    transitionDelay: isOpen
                      ? `${80 + index * 50}ms`
                      : "0ms",
                  }}
                >
                  {link.label}

                  {active && (
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5a36]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto border-t border-neutral-200 pt-8">
            <Link
              href={`/${lang}/contact`}
              className="flex items-center justify-between text-base font-medium text-neutral-950"
            >
              {navigation.contact}

              <span>↗</span>
            </Link>

            <p className="mt-6 text-sm text-neutral-400">
              hello@pingital.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}