"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";

type Category = {
  value: string;
  label: string;
};

type ContactCTAProps = {
  lang: Locale;
  badge: string;
  title: string;
  description: string;
  securityTitle: string;
  securityDescription: string;

  fields: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    company: string;
    companyPlaceholder: string;
    category: string;
    categoryPlaceholder: string;
    budget: string;
    message: string;
    messagePlaceholder: string;
  };

  categories: Category[];
  budgets: string[];
  submit: string;
  sending: string;
  errorMessage: string;
};

export default function ContactCTA({
  lang,
  badge,
  title,
  description,
  securityTitle,
  securityDescription,
  fields,
  categories,
  budgets,
  submit,
  sending,
  errorMessage,
}: ContactCTAProps) {

  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setFormError("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      category: formData.get("category"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to send form");
      }

      sessionStorage.setItem("pingital_form_submitted", "true");

      router.push(`/${lang}/thank-you`);
    } catch {
      setFormError(errorMessage);
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-[#f3f1f2] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid overflow-hidden rounded-2xl bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:grid-cols-[0.85fr_1.35fr] md:gap-16 md:p-14">
          <div className="flex flex-col">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-700">
                <span className="h-2 w-2 rounded-full bg-[#ff5a36]" />
                {badge}
              </p>

              <h2 className="max-w-[420px] text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-neutral-950 md:text-5xl">
                {title}
              </h2>

              <p className="mt-6 max-w-[430px] text-base leading-7 text-neutral-600">
                {description}
              </p>
            </div>

            <div className="mt-10 rounded-xl bg-[#f5f3f4] p-5 md:mt-auto">
              <p className="text-sm font-semibold text-neutral-950">
                {securityTitle}
              </p>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {securityDescription}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 md:mt-0"
          >
            <div className="grid gap-x-5 gap-y-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium uppercase tracking-[0.04em] text-neutral-600"
                >
                  {fields.name}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={fields.namePlaceholder}
                  className="w-full rounded-md border-0 bg-[#faf7f8] px-4 py-3 text-base text-neutral-950 outline-none placeholder:text-neutral-400 focus:ring-1 focus:ring-neutral-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium uppercase tracking-[0.04em] text-neutral-600"
                >
                  {fields.email}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={fields.emailPlaceholder}
                  className="w-full rounded-md border-0 bg-[#faf7f8] px-4 py-3 text-base text-neutral-950 outline-none placeholder:text-neutral-400 focus:ring-1 focus:ring-neutral-400"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium uppercase tracking-[0.04em] text-neutral-600"
                >
                  {fields.company}
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder={fields.companyPlaceholder}
                  className="w-full rounded-md border-0 bg-[#faf7f8] px-4 py-3 text-base text-neutral-950 outline-none placeholder:text-neutral-400 focus:ring-1 focus:ring-neutral-400"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium uppercase tracking-[0.04em] text-neutral-600"
                >
                  {fields.category}
                </label>

                <select
                  id="category"
                  name="category"
                  defaultValue=""
                  className="w-full rounded-md border-0 bg-[#faf7f8] px-4 py-3 text-base text-neutral-700 outline-none focus:ring-1 focus:ring-neutral-400"
                >
                  <option value="" disabled>
                    {fields.categoryPlaceholder}
                  </option>

                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <fieldset className="mt-7">
              <legend className="mb-3 text-sm font-medium uppercase tracking-[0.04em] text-neutral-600">
                {fields.budget}
              </legend>

              <div className="grid gap-3 md:grid-cols-3">
                {budgets.map((budget, index) => (
                  <label key={budget} className="cursor-pointer">
                    <input
                      type="radio"
                      name="budget"
                      value={budget}
                      defaultChecked={index === 0}
                      className="peer sr-only"
                    />

                    <span className="flex min-h-12 items-center justify-center rounded-md bg-[#faf7f8] px-4 text-center text-sm font-medium text-neutral-700 transition-all hover:bg-neutral-100 peer-checked:bg-black peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-neutral-500 peer-focus-visible:ring-offset-2">
                      {budget}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-7">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium uppercase tracking-[0.04em] text-neutral-600"
              >
                {fields.message}
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={fields.messagePlaceholder}
                className="w-full resize-none rounded-md border-0 bg-[#faf7f8] px-4 py-3 text-base leading-6 text-neutral-950 outline-none placeholder:text-neutral-400 focus:ring-1 focus:ring-neutral-400"
              />
            </div>

            {formError && (
              <p className="mt-5 text-sm text-red-600">
                {formError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-black px-6 py-4 text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? sending : submit}

              <span className="h-2 w-2 rounded-full bg-[#ff5a36]" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}