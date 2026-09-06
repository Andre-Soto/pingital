type StackGroup = {
  title: string;
  items: string[];
};

type ModernStackProps = {
  eyebrow: string;
  title: string;
  description: string;
  groups: StackGroup[];
};

export default function ModernStack({
  eyebrow,
  title,
  description,
  groups,
}: ModernStackProps) {
  return (
    <section className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
              {eyebrow}
            </p>

            <h2 className="text-4xl font-semibold leading-none tracking-[-0.045em] text-neutral-950 md:text-5xl">
              {title}
            </h2>
          </div>

          <p className="max-w-[430px] text-base leading-6 text-neutral-600 md:justify-self-end">
            {description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {groups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-neutral-200 bg-[#fafafa] p-6"
            >
              <h3 className="text-base font-semibold text-neutral-950">
                {group.title}
              </h3>

              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between border-b border-neutral-200 pb-3 text-sm text-neutral-600 last:border-none"
                  >
                    <span>{item}</span>
                    <span className="text-neutral-300">+</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}