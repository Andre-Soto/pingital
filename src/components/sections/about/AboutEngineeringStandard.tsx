type AboutEngineeringStandardProps = {
  eyebrow: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  codeLabel: string;
  codeLines: string[];
};

export default function AboutEngineeringStandard({
  eyebrow,
  title,
  description,
  metricLabel,
  metricValue,
  codeLabel,
  codeLines,
}: AboutEngineeringStandardProps) {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="overflow-hidden rounded-2xl bg-black text-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.08em] text-neutral-500">
              Pingital Engineering Standard
            </p>
          </div>

          <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
                {codeLabel}
              </p>

              <div className="overflow-x-auto">
                <pre className="min-w-[520px] font-mono text-sm leading-7 text-neutral-400">
                  <code>
                    {codeLines.map((line, index) => (
                      <span key={`${line}-${index}`} className="block">
                        <span className="mr-6 select-none text-neutral-700">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {line}
                      </span>
                    ))}
                  </code>
                </pre>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl bg-neutral-950 p-6 md:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
                  {eyebrow}
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-[1] tracking-[-0.04em] text-white md:text-4xl">
                  {title}
                </h2>

                <p className="mt-5 text-base leading-7 text-neutral-400">
                  {description}
                </p>
              </div>

              <div className="mt-10 border-t border-neutral-800 pt-6">
                <p className="text-sm uppercase tracking-[0.08em] text-neutral-500">
                  {metricLabel}
                </p>

                <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {metricValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}