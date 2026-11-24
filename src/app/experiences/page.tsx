import { Button } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import { SectionLabel } from "@/components/common/SectionLabel";
import { RESUME_URL } from "@/constants/constants";
import { getExperiencesData } from "@/data/experiences";
import { resolveLocale } from "@/i18n/config";
import { ArrowUpRight, Briefcase, GraduationCap, Languages } from "lucide-react";
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
      <Header
        sectionIndex="02"
        sectionLabel={t("label")}
        pageTitle={t("title")}
        pageDescription={t("description")}
      />

      <div className="tui-rail space-y-16 px-6 py-16">
        <section className="space-y-6">
          <SectionLabel
            index="01"
            label={t("workHeading")}
            Icon={Briefcase}
          />

          <div className="space-y-6">
            {data.work.map((job, idx) => (
              <article
                key={job.id}
                className={`bg-background-contrast border border-[var(--color-border)] p-6 md:p-8 ${
                  idx === 0 ? "border-l-2 border-l-accent" : ""
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-border)] pb-4">
                  <span className="text-accent font-mono text-xs uppercase tracking-[0.16em]">
                    {job.period}
                  </span>
                  <span className="text-tertiary font-mono text-xs uppercase tracking-[0.14em]">
                    {job.location}
                  </span>
                </div>

                <div className="pt-5">
                  <h2 className="text-primary text-2xl font-semibold tracking-tight">
                    {job.role}{" "}
                    <span className="text-secondary font-normal">
                      @ {job.company}
                    </span>
                  </h2>
                  <p className="text-secondary pt-2 text-base leading-relaxed">
                    {job.summary}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-5 text-sm leading-relaxed md:text-base">
                  {job.highlights.map((item) => (
                    <li key={item} className="text-secondary flex gap-3">
                      <span
                        className="text-accent mt-0.5 font-mono text-xs"
                        aria-hidden="true"
                      >
                        &gt;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-background text-secondary border border-[var(--color-border)] px-2.5 py-1 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionLabel
            index="02"
            label={t("educationHeading")}
            Icon={GraduationCap}
          />

          <div className="border border-[var(--color-border)]">
            <div className="bg-background-contrast flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)] p-6 md:p-8">
              <div className="space-y-1">
                <h2 className="text-primary text-2xl font-semibold tracking-tight">
                  {data.education.degree}
                </h2>
                <p className="text-secondary text-base">
                  {data.education.institution} · {data.education.period}
                </p>
              </div>

              <span className="bg-background text-accent border border-[var(--color-border)] px-3.5 py-2 font-mono text-xs font-medium uppercase tracking-[0.14em]">
                {data.education.metric}
              </span>
            </div>

            <div className="p-6 pb-4 md:px-8">
              <p className="text-tertiary font-mono text-xs uppercase tracking-[0.16em]">
                // {t("academicProjectsHeading")}
              </p>
            </div>

            <div className="grid border-t border-[var(--color-border)] md:grid-cols-2">
              {data.education.projects.map((proj, idx) => (
                <div
                  key={proj.name}
                  className={`flex flex-col justify-between gap-4 border-[var(--color-border)] p-6 md:p-8 ${
                    idx % 2 === 0 ? "md:border-r" : ""
                  } ${idx < 2 ? "border-b" : idx === 2 ? "border-b md:border-b-0" : ""}`}
                >
                  <div className="space-y-2">
                    <h3 className="text-primary text-lg font-semibold tracking-tight">
                      {proj.name}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-background-contrast text-secondary border border-[var(--color-border)] px-2 py-0.5 font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <SectionLabel
            index="03"
            label={t("languagesHeading")}
            Icon={Languages}
          />

          <div className="grid border border-[var(--color-border)] sm:grid-cols-2">
            {data.languages.map((lang, idx) => (
              <div
                key={lang.name}
                className={`bg-background-contrast flex items-center justify-between p-6 ${
                  idx === 0 ? "border-b border-[var(--color-border)] sm:border-r sm:border-b-0" : ""
                }`}
              >
                <span className="text-primary font-medium">{lang.name}</span>
                <span className="text-accent font-mono text-xs uppercase tracking-[0.14em]">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-background-contrast flex flex-col gap-4 border border-[var(--color-border)] p-6 md:p-8">
          <h2 className="text-primary text-2xl font-semibold tracking-tight">
            {t("ctaTitle")}
          </h2>
          <p className="text-secondary max-w-2xl leading-relaxed">
            {t("ctaDescription")}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Button>
                <span>{t("resumeCta")}</span>
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="secondary">{t("contactCta")}</Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
