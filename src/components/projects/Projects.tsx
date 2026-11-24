import { Button } from "@/components/common/Button";
import type { CuratedProject } from "@/types/types";
import { ArrowUpRight, Lock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const GITHUB_PROFILE_URL = "https://github.com/munraitoo13";

export async function Projects({ projects }: { projects: CuratedProject[] }) {
  const t = await getTranslations("Projects");

  return (
    <section className="space-y-12">
      <div className="space-y-6">
        {projects.map(
          (
            {
              id,
              name,
              tagline,
              summary,
              metrics,
              stack,
              repoUrl,
              liveUrl,
              isPrivateRepo,
              status,
            },
            idx,
          ) => {
            const num = String(idx + 1).padStart(2, "0");

            return (
              <article
                key={id}
                className="bg-background-contrast hover:border-accent flex flex-col gap-6 border border-[var(--color-border)] p-6 transition-colors duration-200 md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--color-border)] pb-5">
                  <div className="space-y-1.5">
                    <span className="text-accent font-mono text-xs uppercase tracking-[0.16em]">
                      {num} // {tagline}
                    </span>
                    <h2 className="text-primary text-2xl font-semibold tracking-tight md:text-3xl">
                      {name}
                    </h2>
                  </div>

                  <span className="text-secondary border border-[var(--color-border)] bg-background px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em]">
                    {status}
                  </span>
                </div>

                <p className="text-secondary max-w-3xl text-base leading-relaxed">
                  {summary}
                </p>

                <div className="grid border-t border-l border-[var(--color-border)] sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <div
                      key={metric}
                      className="bg-background border-r border-b border-[var(--color-border)] p-3.5"
                    >
                      <p className="text-primary font-mono text-xs leading-snug">
                        {metric}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-background text-secondary border border-[var(--color-border)] px-2.5 py-1 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-6 border-t border-[var(--color-border)] pt-5 font-mono text-xs uppercase tracking-[0.14em]">
                  {liveUrl && (
                    <Link
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>{t("visitLive")}</span>
                      <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                    </Link>
                  )}

                  {repoUrl ? (
                    <Link
                      href={repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>{t("viewProject")}</span>
                      <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                    </Link>
                  ) : (
                    isPrivateRepo && (
                      <span className="text-tertiary inline-flex items-center gap-1.5">
                        <Lock className="size-3.5" strokeWidth={1.75} />
                        <span>{t("privateRepo")}</span>
                      </span>
                    )
                  )}
                </div>
              </article>
            );
          },
        )}
      </div>

      <div className="bg-background-contrast flex flex-col gap-4 border border-[var(--color-border)] p-6 md:p-8">
        <h3 className="text-primary text-2xl font-semibold tracking-tight">
          {t("ctaTitle")}
        </h3>
        <p className="text-secondary max-w-2xl leading-relaxed">
          {t("ctaDescription")}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/contact">
            <Button>{t("contactCta")}</Button>
          </Link>

          <Link
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">{t("githubCta")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
