type FAQItem = {
  number: string;
  title: string;
  description: string;
};

type ContactFAQProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: FAQItem[];
};

export default function ContactFAQ({
  eyebrow,
  title,
  description,
  items,
}: ContactFAQProps) {
  return (
    <section className="bg-[#f3f1f2] px-6 py-10 md:py-14">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
            {eyebrow}
          </p>

          <h2 className="max-w-[650px] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            {title}
          </h2>

          <p className="mt-5 max-w-[620px] text-base leading-7 text-neutral-600">
            {description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((faq) => (
            <article
              key={faq.number}
              className="min-h-[260px] rounded-2xl bg-white p-7 md:p-8"
            >
              <p className="text-sm font-semibold text-[#ff5a36]">
                FAQ / {faq.number}
              </p>

              <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-neutral-950">
                {faq.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-neutral-600">
                {faq.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}