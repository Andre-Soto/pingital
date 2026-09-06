"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import type { Locale } from "@/i18n/config";

type Protocol = {
  number: string;
  label: string;
  title: string;
  description: string;
};

type Horizon = {
  value: string;
  title: string;
  subtitle: string;
};

type ContactEngagementContent = {
  protocols: {
    title: string;
    revision: string;
    description: string;
    items: Protocol[];
  };

  security: {
    title: string;
    description: string;
    fingerprint: string;
    directEmail: string;
  };

  nodes: {
    title: string;
    status: string;
  };

  form: {
    eyebrow: string;
    title: string;
    description: string;

    stakeholder: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    company: string;
    companyPlaceholder: string;
    role: string;
    rolePlaceholder: string;

    scope: string;
    scopes: string[];

    horizon: string;
    horizons: Horizon[];

    budget: string;
    budgets: string[];

    specifications: string;
    specificationsPlaceholder: string;

    artefacts: string;
    artefactsTitle: string;
    artefactsDescription: string;

    nda: string;
    submit: string;

    sending: string;
    error: string;
  };
};

type ContactEngagementProps = {
  lang: Locale;
  content: ContactEngagementContent;
};

export default function ContactEngagement({
  lang,
  content,
}: ContactEngagementProps) {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setFormError("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      formName: "technical_scoping_brief",
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      role: formData.get("role"),
      scope: formData.getAll("scope"),
      horizon: formData.get("horizon"),
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
      setFormError(content.form.error);
      setIsSubmitting(false);
    }
  }
  return (
    <section className="bg-[#f3f1f2] px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.72fr_1.28fr]">

        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-7">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold tracking-[-0.025em] text-neutral-950">
                {content.protocols.revision}
              </h2>

              <span className="rounded bg-neutral-100 px-2 py-1 text-sm text-neutral-500">
                REV 4.2
              </span>
            </div>

            <p className="mt-5 text-sm leading-6 text-neutral-600">
              {content.protocols.description}
            </p>

            <div className="mt-7 space-y-6">
              {content.protocols.items.map((protocol) => (
                <article
                  key={protocol.number}
                  className="border-t border-neutral-200 pt-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-[#ff5a36]">
                      PROTOCOL / {protocol.number}
                    </span>

                    <span className="text-sm text-neutral-400">
                      {protocol.label}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-neutral-950">
                    {protocol.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {protocol.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="rounded-2xl bg-white p-7 shadow-[0_20px_50px_rgba(0,0,0,0.05)] md:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5a36]">
                {content.form.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-neutral-950">
                {content.form.title}
              </h2>

              <p className="mt-3 max-w-[620px] text-base leading-6 text-neutral-600">
                {content.form.description}
              </p>
            </div>

            <span className="rounded bg-neutral-100 px-2 py-1 text-sm text-neutral-500">
              SEC-MSG-V2
            </span>
          </div>

            <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-8"
            >
            {/* 01 */}
            <section>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.06em] text-neutral-700">
                  {content.form.stakeholder}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-600">
                    {content.form.name}
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder={content.form.namePlaceholder}
                    required
                    className="w-full rounded-md bg-[#faf7f8] px-4 py-3 text-base outline-none focus:ring-1 focus:ring-neutral-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-600">
                    {content.form.email}
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder={content.form.emailPlaceholder}
                    required
                    className="w-full rounded-md bg-[#faf7f8] px-4 py-3 text-base outline-none focus:ring-1 focus:ring-neutral-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-600">
                    {content.form.company}
                  </label>
                  <input
                    name="company"
                    type="text"
                    placeholder={content.form.companyPlaceholder}
                    className="w-full rounded-md bg-[#faf7f8] px-4 py-3 text-base outline-none focus:ring-1 focus:ring-neutral-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-600">
                    {content.form.role}
                  </label>
                  <input
                    name="role"
                    type="text"
                    placeholder={content.form.rolePlaceholder}
                    className="w-full rounded-md bg-[#faf7f8] px-4 py-3 text-base outline-none focus:ring-1 focus:ring-neutral-400"
                  />
                </div>
              </div>
            </section>

            {/* 02 */}
            <section>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.06em] text-neutral-700">
                {content.form.scope}
              </p>

              <div className="flex flex-wrap gap-3">
                {content.form.scopes.map((scope) => (
                  <label key={scope} className="cursor-pointer">
                    <input
                      type="checkbox"
                      name="scope"
                      value={scope}
                      className="peer sr-only"
                    />

                    <span className="inline-flex rounded-md bg-[#faf7f8] px-4 py-2 text-sm text-neutral-700 transition peer-checked:bg-black peer-checked:text-white">
                      {scope}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            {/* 03 */}
            <section>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.06em] text-neutral-700">
                {content.form.horizon}
              </p>

              <div className="grid gap-3 md:grid-cols-3">
                {content.form.horizons.map((horizon) => (
                  <label key={horizon.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="horizon"
                      value={horizon.value}
                      className="peer sr-only"
                    />

                    <span className="block rounded-md bg-[#faf7f8] p-4 transition peer-checked:bg-black peer-checked:text-white">
                      <span className="block text-sm font-semibold">
                        {horizon.title}
                      </span>

                      <span className="mt-2 block text-sm opacity-60">
                        {horizon.subtitle}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </section>

            {/* 04 */}
            <section>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.06em] text-neutral-700">
                {content.form.budget}
              </p>

              <div className="grid gap-3 md:grid-cols-4">
                {content.form.budgets.map((budget, index) => (
                  <label key={budget} className="cursor-pointer">
                    <input
                      type="radio"
                      name="budget"
                      value={budget}
                      defaultChecked={index === 1}
                      className="peer sr-only"
                    />

                    <span className="flex min-h-14 items-center justify-center rounded-md bg-[#faf7f8] px-3 text-center text-sm font-medium text-neutral-700 transition peer-checked:bg-black peer-checked:text-white">
                      {budget}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            {/* 05 */}
            <section>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.06em] text-neutral-700">
                {content.form.specifications}
              </p>

              <textarea
                name="message"
                rows={6}
                placeholder={content.form.specificationsPlaceholder}
                required
                className="w-full resize-none rounded-md bg-[#faf7f8] px-4 py-3 text-base leading-6 outline-none focus:ring-1 focus:ring-neutral-400"
              />
            </section>

            {/* 06 */}
            <section>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.06em] text-neutral-700">
                {content.form.artefacts}
              </p>

              <label className="flex min-h-[120px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-[#faf7f8] px-6 text-center">
                <span className="text-sm font-medium text-neutral-700">
                  {content.form.artefactsTitle}
                </span>

                <span className="mt-2 text-sm text-neutral-400">
                  {content.form.artefactsDescription}
                </span>

                <input
                  type="file"
                  name="artefact"
                  className="sr-only"
                />
              </label>
            </section>

            <div className="rounded-lg bg-[#f5f3f4] p-4">
              <p className="text-sm leading-6 text-neutral-600">
                {content.form.nda}
              </p>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-black px-6 py-4 text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
            >
            {isSubmitting
                ? content.form.sending
                : `${content.form.submit} →`}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}