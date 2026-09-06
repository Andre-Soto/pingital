type Stage = {
  number: string;
  title: string;
  description: string;
};

type MethodologyProps = {
  eyebrow: string;
  title: string;
  items: Stage[];
};

export default function Methodology({
  eyebrow,
  title,
  items,
}: MethodologyProps) {
  return (
    <section className="bg-[#f3f1f2] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
            {eyebrow}
          </p>

          <h2 className="text-4xl font-semibold leading-none tracking-[-0.045em] text-neutral-950 md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((stage) => (
            <article
              key={stage.number}
              className="min-h-[240px] rounded-2xl bg-white p-7"
            >
              <p className="text-sm font-semibold text-[#ff5a36]">
                {stage.number}
              </p>

              <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-neutral-950">
                {stage.title}
              </h3>

              <p className="mt-4 text-base leading-6 text-neutral-600">
                {stage.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}