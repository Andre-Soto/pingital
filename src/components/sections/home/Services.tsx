type Service = {
  icon: string;
  title: string;
  description: string;
  features: string[];
  wide?: boolean;
};

type ServicesProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  items: Service[];
};

function ServiceIcon({ type }: { type: string }) {
  const paths: Record<string, React.ReactNode> = {
    web: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18M8 12h8M8 16h5" />
      </>
    ),
    mobile: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M10 5h4M11 19h2" />
      </>
    ),
    cloud: (
      <path d="M6 18h11a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 8.4 4.8 4.8 0 0 0 6 18Z" />
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),
    integration: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </>
    ),
  };

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-neutral-100">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {paths[type]}
      </svg>
    </div>
  );
}

export default function Services({
  eyebrow,
  title,
  description,
  cta,
  items,
}: ServicesProps) {
  return (
    <section className="bg-[#f3f1f2] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
              {eyebrow}
            </p>

            <h2 className="text-4xl font-semibold leading-none tracking-[-0.045em] text-neutral-950 md:text-5xl">
              {title}
            </h2>
          </div>

          <p className="max-w-[420px] text-base leading-6 text-neutral-600 md:justify-self-end">
            {description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((service) => (
            <article
              key={service.title}
              className={[
                "flex min-h-[390px] flex-col rounded-2xl bg-white p-7",
                service.wide ? "md:col-span-2" : "",
              ].join(" ")}
            >
              <ServiceIcon type={service.icon} />

              <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-neutral-950">
                {service.title}
              </h3>

              <p className="mt-3 text-base leading-6 text-neutral-600">
                {service.description}
              </p>

              <div
                className={
                  service.wide
                    ? "mt-6 grid gap-x-10 gap-y-3 md:grid-cols-2"
                    : "mt-6 space-y-3"
                }
              >
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-5 text-neutral-700"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a36]" />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-auto pt-8 text-sm font-medium text-neutral-950 transition-opacity hover:opacity-60"
              >
                {cta} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}