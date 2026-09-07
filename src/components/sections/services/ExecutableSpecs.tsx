type Stat = {
  value: string;
  label: string;
};

type ExecutableSpecsProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats: Stat[];
  codeLabel: string;
};

export default function ExecutableSpecs({
  eyebrow,
  title,
  description,
  stats,
  codeLabel,
}: ExecutableSpecsProps) {
  return (
    <section className="bg-black px-6 py-20 text-white md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
            {eyebrow}
          </p>

          <h2 className="max-w-[520px] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-5xl">
            {title}
          </h2>

          <p className="mt-6 max-w-[520px] text-base leading-7 text-neutral-400">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          aria-label="Example of strongly typed software specification"
          className="overflow-hidden rounded-xl border border-neutral-800 bg-[#111]"
        >
          <div className="flex h-11 items-center justify-between border-b border-neutral-800 px-5">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
            </div>

            <span className="text-sm text-neutral-500">
              {codeLabel}
            </span>
          </div>

          <pre className="overflow-x-auto p-6 text-sm leading-7 text-neutral-300">
            <code>{`interface PaymentRequest {
  customerId: string;
  amount: Money;
  currency: Currency;
}

async function processPayment(
  request: PaymentRequest
): Promise<PaymentResult> {
  return payments.execute(request);
}`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}