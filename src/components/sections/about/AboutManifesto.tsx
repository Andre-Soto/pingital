type Principle = {
  number: string;
  title: string;
  description: string;
  footer: string;
};

type AboutManifestoProps = {
  eyebrow: string;
  title: string;
  description: string;
  principleLabel: string;
  items: Principle[];
};

export default function AboutManifesto({
  eyebrow,
  title,
  description,
  principleLabel,
  items,
}: AboutManifestoProps) {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 grid gap-8 md:grid-cols-[1.2fr_1fr]">
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

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((principle) => (
            <article
              key={principle.number}
              className="flex min-h-[330px] flex-col border-t border-neutral-200 pt-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#ff5a36]">
                  {principle.number}
                </span>

                <span className="text-sm text-neutral-400">
                  {principleLabel}
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-semibold leading-tight tracking-[-0.03em] text-neutral-950">
                {principle.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-neutral-600">
                {principle.description}
              </p>

              <div className="mt-auto rounded-lg bg-[#f3f1f2] px-4 py-3">
                <p className="text-sm text-neutral-500">
                  {principle.footer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}