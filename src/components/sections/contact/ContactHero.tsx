type ContactHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  nda: string;
  response: string;
  contact: string;
};

export default function ContactHero({
  eyebrow,
  title,
  description,
  nda,
  response,
  contact,
}: ContactHeroProps) {
  return (
    <section className="bg-white px-6 py-12 md:py-16">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
          {eyebrow}
        </p>

        <h1 className="max-w-[900px] text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-neutral-950 md:text-7xl">
          {title}
        </h1>

        <p className="mt-8 max-w-[700px] text-base leading-7 text-neutral-600">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-neutral-500">
          <span>{nda}</span>
          <span>{response}</span>
          <span>{contact}</span>
        </div>
      </div>
    </section>
  );
}