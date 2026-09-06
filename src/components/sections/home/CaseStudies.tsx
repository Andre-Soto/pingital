type ProjectStat = {
  value: string;
  label: string;
};

type Project = {
  category: string;
  title: string;
  description: string;
  stat1: ProjectStat;
  stat2: ProjectStat;
};

type CaseStudiesProps = {
  eyebrow: string;
  title: string;
  cta: string;
  items: Project[];
};

export default function CaseStudies({
  eyebrow,
  title,
  cta,
  items,
}: CaseStudiesProps) {
  return (
    <section id="work" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
            {eyebrow}
          </p>

          <h2 className="text-4xl font-semibold leading-none tracking-[-0.045em] text-neutral-950 md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="space-y-8">
          {items.map((project, index) => (
            <article
              key={project.title}
              className="grid overflow-hidden rounded-2xl bg-[#f5f3f4] md:min-h-[360px] md:grid-cols-2"
            >
              <div
                className={[
                  "flex flex-col justify-center p-8 md:p-12",
                  index % 2 !== 0 ? "md:order-2" : "",
                ].join(" ")}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
                  {project.category}
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-neutral-950">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-[480px] text-base leading-7 text-neutral-600">
                  {project.description}
                </p>

                <div className="mt-8 grid max-w-[360px] grid-cols-2 gap-8 border-t border-neutral-300 pt-6">
                  <div>
                    <p className="text-xl font-semibold text-neutral-950">
                      {project.stat1.value}
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">
                      {project.stat1.label}
                    </p>
                  </div>

                  <div>
                    <p className="text-xl font-semibold text-neutral-950">
                      {project.stat2.value}
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">
                      {project.stat2.label}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={[
                  "flex min-h-[300px] items-center justify-center p-8",
                  index % 2 !== 0 ? "md:order-1" : "",
                ].join(" ")}
              >
                <div className="flex h-full min-h-[260px] w-full items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-lg">
                  <span className="text-sm text-neutral-400">
                    Project interface image
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            {cta} →
          </a>
        </div>
      </div>
    </section>
  );
}