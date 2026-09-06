type Stat = {
  value: string;
  label: string;
};

type StatsProps = {
  stats: Stat[];
};

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="bg-neutral-100 px-6 py-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm leading-5 text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}