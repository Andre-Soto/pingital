type LeadershipMember = {
  name: string;
  role: string;
  description: string;
  expertise: string[];
  image?: string;
};

type AboutLeadershipProps = {
  eyebrow: string;
  title: string;
  description: string;
  members: LeadershipMember[];
};

export default function AboutLeadership({
  eyebrow,
  title,
  description,
  members,
}: AboutLeadershipProps) {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
            >
              <div className="aspect-[4/5] bg-[#efedee]">
                {member.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="h-full w-full object-cover grayscale"
                  />
                ) : (
                  <div className="flex h-full items-end p-5">
                    <span className="text-sm font-medium uppercase tracking-[0.08em] text-neutral-400">
                      Pingital
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
                  {member.role}
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-neutral-950">
                  {member.name}
                </h3>

                <p className="mt-4 text-base leading-7 text-neutral-600">
                  {member.description}
                </p>

                <div className="mt-6 border-t border-neutral-100 pt-4">
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.06em] text-neutral-400">
                    Expertise
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-[#f3f1f2] px-3 py-2 text-sm text-neutral-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}