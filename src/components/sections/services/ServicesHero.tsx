type ServicesHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;

  specification: {
    brand: string;
    label: string;
    disciplinesLabel: string;
    disciplinesValue: string;
    ownershipLabel: string;
    ownershipValue: string;
    coverageLabel: string;
    coverageValue: string;
    downtimeLabel: string;
    downtimeValue: string;
    reviewTitle: string;
    reviewDescription: string;
  };

  capabilities: string[];
};

type ServicesHeroProps = {
  content: ServicesHeroContent;
};

export default function ServicesHero({
  content,
}: ServicesHeroProps) {
  return (
    <section className="bg-white px-6 pb-16 pt-14 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          {/* Main content */}
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
              {content.eyebrow}
            </p>

            <h1 className="max-w-[760px] text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-neutral-950 md:text-7xl">
              {content.title}
            </h1>

            <p className="mt-8 max-w-[700px] text-base leading-7 text-neutral-600">
              {content.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
              >
                {content.primaryCta}
              </a>

              <a
                href="#engagement"
                className="rounded-md bg-neutral-100 px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-200"
              >
                {content.secondaryCta}
              </a>
            </div>
          </div>

          {/* Specification card */}
          <aside
            aria-label="Pingital engineering specifications"
            className="rounded-2xl bg-[#f3f1f2] p-7"
          >
            <div className="flex items-center justify-between border-b border-neutral-300 pb-5">
              <span className="text-sm font-semibold text-neutral-950">
                {content.specification.brand}
              </span>

              <span className="text-sm font-semibold uppercase text-[#ff5a36]">
                {content.specification.label}
              </span>
            </div>

            <dl className="mt-6 space-y-5">
              <div className="flex items-end justify-between gap-5">
                <dt className="text-sm text-neutral-500">
                  {content.specification.disciplinesLabel}
                </dt>
                <dd className="text-xl font-semibold text-neutral-950">
                  {content.specification.disciplinesValue}
                </dd>
              </div>

              <div className="flex items-end justify-between gap-5">
                <dt className="text-sm text-neutral-500">
                  {content.specification.ownershipLabel}
                </dt>
                <dd className="text-base font-semibold text-[#ff5a36]">
                  {content.specification.ownershipValue}
                </dd>
              </div>

              <div className="flex items-end justify-between gap-5">
                <dt className="text-sm text-neutral-500">
                  {content.specification.coverageLabel}
                </dt>
                <dd className="text-base font-semibold text-neutral-950">
                  {content.specification.coverageValue}
                </dd>
              </div>

              <div className="flex items-end justify-between gap-5">
                <dt className="text-sm text-neutral-500">
                  {content.specification.downtimeLabel}
                </dt>
                <dd className="text-base font-semibold text-neutral-950">
                  {content.specification.downtimeValue}
                </dd>
              </div>
            </dl>

            <div className="mt-7 rounded-lg border border-[#ff5a36]/20 bg-white p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.06em] text-[#ff5a36]">
                {content.specification.reviewTitle}
              </p>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {content.specification.reviewDescription}
              </p>
            </div>
          </aside>
        </div>

        {/* Capabilities strip */}
        <div className="mt-16 grid gap-4 border-y border-neutral-200 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.capabilities.map((item) => (
            <div
                key={item}
                className="flex items-center gap-3 text-sm text-neutral-600"
            >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a36]" />
                <span>{item}</span>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}