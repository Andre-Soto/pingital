type Phase = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  deliverable: string;
};

type DeliveryFrameworkProps = {
  eyebrow: string;
  title: string;
  description: string;
  deliverableLabel: string;
  phases: Phase[];
};

export default function DeliveryFramework({
  eyebrow,
  title,
  description,
  deliverableLabel,
  phases,
}: DeliveryFrameworkProps) {
  return (
    <section
      id="engagement"
      className="bg-[#f3f1f2] px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 max-w-[760px]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
            {eyebrow}
          </p>

          <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            {title}
          </h2>

          <p className="mt-6 max-w-[700px] text-base leading-7 text-neutral-600">
            {description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="flex min-h-[330px] flex-col rounded-2xl bg-white p-7"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.06em] text-[#ff5a36]">
                  {phase.eyebrow}
                </p>

                <span className="text-sm text-neutral-400">
                  {phase.number}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold leading-tight tracking-[-0.025em] text-neutral-950">
                {phase.title}
              </h3>

              <p className="mt-4 text-base leading-6 text-neutral-600">
                {phase.description}
              </p>

              <div className="mt-auto border-t border-neutral-200 pt-5">
                <p className="text-sm font-semibold uppercase tracking-[0.05em] text-neutral-500">
                  {deliverableLabel}
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {phase.deliverable}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}