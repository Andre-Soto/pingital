import Image from "next/image";

type HeroProps = {
  title: string;
  description: string;
  badge: string;
  primaryCta: string;
  secondaryCta: string;
};

export default function Hero({
  title,
  description,
  badge,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="bg-white px-6 pb-20 pt-12 md:pt-14">
      <div className="mx-auto max-w-[1200px] text-center">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-6 inline-flex rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-neutral-700">
            {badge}
          </p>

          <h1 className="text-[48px] font-semibold leading-[0.95] tracking-[-0.055em] text-neutral-950 md:text-[68px] lg:text-[76px]">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-[650px] text-base leading-7 text-neutral-600">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              {primaryCta}
            </a>

            <a
              href="#work"
              className="rounded-md bg-neutral-100 px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-200"
            >
              {secondaryCta} →
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[1000px]">
          <Image
            src="/images/home/dashboard-horizontal.svg"
            alt="Pingital software dashboard"
            width={800}
            height={600}
            priority
            className="mx-auto h-auto w-full max-w-[850px]"
          />
        </div>
      </div>
    </section>
  );
}