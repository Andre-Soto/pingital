type OperationItem = {
  number: string;
  title: string;
  description: string;
  details: string[];
};

type AboutOperationsProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: OperationItem[];
};

export default function AboutOperations({
  eyebrow,
  title,
  description,
  items,
}: AboutOperationsProps) {
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

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.number}
              className="flex min-h-[320px] flex-col rounded-xl bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#ff5a36]">
                  {item.number}
                </span>

                <span
                  aria-hidden="true"
                  className="text-sm text-neutral-400"
                >
                  ↗
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold leading-tight tracking-[-0.03em] text-neutral-950">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-neutral-600">
                {item.description}
              </p>

              <div className="mt-auto border-t border-neutral-100 pt-5">
                <ul className="space-y-2">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-sm leading-6 text-neutral-500"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#ff5a36]"
                      />

                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}