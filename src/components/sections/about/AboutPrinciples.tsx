type Principle = {
  number: string;
  title: string;
  description: string;
  footer: string;
};

type AboutPrinciplesProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: Principle[];
};

export default function AboutPrinciples({
  eyebrow,
  title,
  description,
  items,
}: AboutPrinciplesProps) {
  return (
    <section className="bg-[#f3f1f2] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
              {eyebrow}
            </p>

            <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              {title}
            </h2>
          </div>

          <p className="max-w-[500px] text-base leading-7 text-neutral-600 md:justify-self-end">
            {description}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((principle) => (
            <article
              key={principle.number}
              className="flex min-h-[280px] flex-col rounded-xl bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-neutral-400">
                  {principle.number}
                </span>

                <span
                  aria-hidden="true"
                  className="text-sm text-[#ff5a36]"
                >
                  ↗
                </span>
              </div>

              <h3 className="mt-8 max-w-[290px] text-xl font-semibold leading-tight tracking-[-0.03em] text-neutral-950">
                {principle.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-neutral-600">
                {principle.description}
              </p>

              <p className="mt-auto pt-8 text-sm font-medium uppercase tracking-[0.06em] text-neutral-400">
                {principle.footer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}