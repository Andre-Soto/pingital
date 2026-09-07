type AboutStat = {
  value: string;
  accent: string;
  label: string;
  description: string;
};

type AboutHeroProps = {
  eyebrow: string;
  topLabels: string[];
  title: string;
  leftEyebrow: string;
  leftDescription: string;
  description: string;
  stats: AboutStat[];
};

export default function AboutHero({
  eyebrow,
  topLabels,
  title,
  leftEyebrow,
  leftDescription,
  description,
  stats,
}: AboutHeroProps) {
  return (
    <section className="bg-white px-6 pb-16 pt-14 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
            {eyebrow}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-neutral-400">
            {topLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>

        <h1 className="mt-10 max-w-[980px] text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-neutral-950 md:text-7xl">
          {title}
        </h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
              {leftEyebrow}
            </p>

            <p className="mt-4 max-w-[340px] text-base leading-7 text-neutral-600">
              {leftDescription}
            </p>
          </div>

          <div>
            <p className="max-w-[720px] text-base leading-7 text-neutral-600">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-xl bg-[#f3f1f2] p-6"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-[-0.04em] text-neutral-950">
                  {stat.value}
                </span>

                {stat.accent && (
                  <span className="text-sm font-semibold text-[#ff5a36]">
                    {stat.accent}
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm font-semibold text-neutral-950">
                {stat.label}
              </p>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}