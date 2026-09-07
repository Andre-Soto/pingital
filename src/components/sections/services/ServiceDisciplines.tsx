type Discipline = {
  eyebrow: string;
  title: string;
  description: string;
  problems: string[];
  stack: string[];
};

type ServiceDisciplinesProps = {
  eyebrow: string;
  title: string;
  description: string;
  problemsLabel: string;
  stackLabel: string;
  items: Discipline[];
};

export default function ServiceDisciplines({
  eyebrow,
  title,
  description,
  problemsLabel,
  stackLabel,
  items,
}: ServiceDisciplinesProps) {
  return (
    <section id="services" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 max-w-[760px]">
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

        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
          {items.map((discipline) => (
            <article
              key={discipline.title}
              className="border-t border-neutral-200 pt-7"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
                {discipline.eyebrow}
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em] text-neutral-950">
                {discipline.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-neutral-600">
                {discipline.description}
              </p>

              <div className="mt-7">
                <p className="text-sm font-semibold uppercase tracking-[0.06em] text-neutral-950">
                  {problemsLabel}
                </p>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {discipline.problems.map((problem) => (
                    <li
                      key={problem}
                      className="flex items-start gap-3 text-sm leading-5 text-neutral-600"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a36]" />
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 rounded-lg bg-[#f5f3f4] p-4">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.06em] text-neutral-500">
                  {stackLabel}
                </p>

                <div className="flex flex-wrap gap-2">
                  {discipline.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-white px-3 py-1.5 text-sm text-neutral-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}