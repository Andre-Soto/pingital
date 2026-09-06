type PositioningProps = {
  eyebrow: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
};

export default function Positioning({
  eyebrow,
  title,
  paragraph1,
  paragraph2,
}: PositioningProps) {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-neutral-500">
            {eyebrow}
          </p>

          <h2 className="max-w-[520px] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <p className="text-base leading-7 text-neutral-600">
            {paragraph1}
          </p>

          <p className="text-base leading-7 text-neutral-600">
            {paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
}