type ComparisonRow = {
  label: string;
  standard: string;
  pingital: string;
};

type Benefit = {
  title: string;
  description: string;
  accent?: boolean;
};

type AgencyComparisonProps = {
  eyebrow: string;
  title: string;
  description: string;

  columns: {
    dimension: string;
    standard: string;
    pingital: string;
  };

  rows: ComparisonRow[];
  benefits: Benefit[];
};

export default function AgencyComparison({
  eyebrow,
  title,
  description,
  columns,
  rows,
  benefits,
}: AgencyComparisonProps) {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 max-w-[760px]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
            {eyebrow}
          </p>

          <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            {title}
          </h2>

          <p className="mt-6 max-w-[680px] text-base leading-7 text-neutral-600">
            {description}
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-neutral-200">
          <div className="grid grid-cols-[1fr_1.2fr_1.2fr] bg-[#f3f1f2]">
            <div className="p-5">
              <span className="text-sm font-semibold uppercase tracking-[0.06em] text-neutral-500">
                {columns.dimension}
              </span>
            </div>

            <div className="p-5">
              <span className="text-sm font-semibold text-neutral-600">
                {columns.standard}
              </span>
            </div>

            <div className="bg-black p-5 text-white">
              <span className="text-sm font-semibold">
                {columns.pingital}
              </span>
            </div>
          </div>

          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 border-t border-neutral-200 md:grid-cols-[1fr_1.2fr_1.2fr]"
            >
              <div className="p-5">
                <p className="text-sm font-semibold text-neutral-950">
                  {row.label}
                </p>
              </div>

              <div className="bg-[#fafafa] p-5">
                <p className="text-sm leading-6 text-neutral-600">
                  {row.standard}
                </p>
              </div>

              <div className="p-5">
                <p className="text-sm leading-6 text-neutral-800">
                  {row.pingital}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
                <article key={benefit.title}>
                <h3
                    className={[
                    "text-base font-semibold",
                    benefit.accent
                        ? "text-[#ff5a36]"
                        : "text-neutral-950",
                    ].join(" ")}
                >
                    {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {benefit.description}
                </p>
                </article>
            ))}
        </div>
      </div>
    </section>
  );
}