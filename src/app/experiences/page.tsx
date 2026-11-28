import { buttonClasses } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import { RESUME_URL } from "@/constants/constants";
import { getExperiencesData } from "@/data/experiences";
import { resolveLocale } from "@/i18n/config";
import { ArrowUpRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("experiences"),
    description: t("experiencesDesc"),
  };
}

export default async function Page() {
  const t = await getTranslations("Experiences");
  const locale = resolveLocale(await getLocale());
  const data = getExperiencesData(locale);

  return (
    <>
      <Header pageTitle={t("title")} pageDescription={t("description")} />

      <div className="tui-rail space-y-16 px-6 py-12 md:py-16">
        <section className="space-y-6">
          <h2 className="text-primary text-2xl font-semibold tracking-[-0.02em]">
            {t("workHeading")}
          </h2>

          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {data.work.map((job) => (
              <article
                key={job.id}
                className="grid gap-6 py-8 md:py-10 lg:grid-cols-12 lg:gap-10"
              >
                <div className="space-y-1.5 font-mono text-xs tabular-nums lg:col-span-4">
                  <p className="text-accent-text">{job.period}</p>
                  <p className="text-tertiary">{job.location}</p>
                </div>

                <div className="space-y-5 lg:col-span-8">
                  <div>
                    <h3 className="text-primary text-2xl font-semibold tracking-tight">
                      {job.role}{" "}
                      <span className="text-secondary font-normal">
                        @ {job.company}
                      </span>
                    </h3>
                    <p className="text-secondary max-w-[65ch] pt-2 text-base leading-relaxed">
                      {job.summary}
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-sm leading-relaxed md:text-base">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-secondary max-w-[65ch] border-l border-[var(--color-border-strong)] pl-4"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="text-tertiary pt-1 font-mono text-xs leading-relaxed">
                    {job.stack.join(" · ")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-primary text-2xl font-semibold tracking-[-0.02em]">
            {t("educationHeading")}
          </h2>

          <div className="border border-[var(--color-border)]">
            <div className="bg-background-contrast flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)] p-6 md:p-8">
              <div className="space-y-1">
                <h3 className="text-primary text-2xl font-semibold tracking-tight">
                  {data.education.degree}
                </h3>
                <p className="text-secondary font-mono text-sm tabular-nums">
                  {data.education.institution} · {data.education.period}
                </p>
              </div>

              <span className="bg-background text-accent-text border border-[var(--color-border)] px-3.5 py-2 font-mono text-xs font-medium tabular-nums">
                {data.education.metric}
              </span>
            </div>

            <div className="border-b border-[var(--color-border)] px-6 py-4 md:px-8">
              <p className="text-tertiary text-xs font-medium">
                {t("academicProjectsHeading")}
              </p>
            </div>

            <div className="grid md:grid-cols-2">
              {data.education.projects.map((proj, idx) => (
                <div
                  key={proj.name}
                  className={`flex flex-col justify-between gap-4 border-[var(--color-border)] p-6 md:p-8 ${
                    idx % 2 === 0 ? "md:border-r" : ""
                  } ${idx < 2 ? "border-b" : idx === 2 ? "border-b md:border-b-0" : ""}`}
                >
                  <div className="space-y-2">
                    <h4 className="text-primary text-lg font-semibold tracking-tight">
                      {proj.name}
                    </h4>
                    <p className="text-secondary max-w-[55ch] text-sm leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <p className="text-tertiary font-mono text-xs">
                    {proj.stack.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-primary text-2xl font-semibold tracking-[-0.02em]">
            {t("languagesHeading")}
          </h2>

          <div className="grid divide-y divide-[var(--color-border)] border border-[var(--color-border)] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {data.languages.map((lang) => (
              <div
                key={lang.name}
                className="bg-background-contrast flex items-center justify-between p-6"
              >
                <span className="text-primary font-medium">{lang.name}</span>
                <span className="text-accent-text font-mono text-xs">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col justify-between gap-6 border-t border-[var(--color-border)] pt-8 md:flex-row md:items-center">
          <div className="space-y-1.5">
            <h2 className="text-primary text-xl font-semibold tracking-tight">
              {t("ctaTitle")}
            </h2>
            <p className="text-secondary max-w-[60ch] text-sm leading-relaxed">
              {t("ctaDescription")}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({ variant: "primary" })}
            >
              <span>{t("resumeCta")}</span>
              <ArrowUpRight className="size-4" strokeWidth={1.75} />
            </Link>

            <Link
              href="/contact"
              className={buttonClasses({ variant: "secondary" })}
            >
              {t("contactCta")}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
