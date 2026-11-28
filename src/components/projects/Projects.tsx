import { buttonClasses } from "@/components/common/Button";
import type { CuratedProject } from "@/types/types";
import { ArrowUpRight, Lock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const GITHUB_PROFILE_URL = "https://github.com/munraitoo13";

export async function Projects({ projects }: { projects: CuratedProject[] }) {
  const t = await getTranslations("Projects");

  return (
    <section className="space-y-16">
      <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
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
            const isLead = idx === 0;

            return (
              <article
                key={id}
                className="motion-surface-hover grid gap-8 px-2 py-10 md:px-4 md:py-12 lg:grid-cols-12 lg:gap-10"
              >
                <div className="flex flex-col justify-between gap-5 lg:col-span-4">
                  <div className="space-y-2.5">
                    <span className="text-accent-text block font-mono text-xs">
                      {status}
                    </span>
                    <h2
                      className={
                        isLead
                          ? "text-primary text-3xl font-semibold tracking-[-0.02em] md:text-4xl"
                          : "text-primary text-2xl font-semibold tracking-[-0.02em] md:text-3xl"
                      }
                    >
                      {name}
                    </h2>
                    <p className="text-secondary text-sm leading-relaxed">
                      {tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-5 text-sm font-medium">
                    {liveUrl && (
                      <Link
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group motion-press-subtle text-primary hover:text-accent-text inline-flex min-h-11 items-center gap-1.5"
                      >
                        <span>{t("visitLive")}</span>
                        <ArrowUpRight className="motion-arrow-up-right size-4" strokeWidth={1.75} />
                      </Link>
                    )}

                    {repoUrl ? (
                      <Link
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group motion-press-subtle text-primary hover:text-accent-text inline-flex min-h-11 items-center gap-1.5"
                      >
                        <span>{t("viewProject")}</span>
                        <ArrowUpRight className="motion-arrow-up-right size-4" strokeWidth={1.75} />
                      </Link>
                    ) : (
                      isPrivateRepo && (
                        <span className="text-tertiary inline-flex items-center gap-1.5 font-mono text-xs">
                          <Lock className="size-3.5" strokeWidth={1.75} />
                          <span>{t("privateRepo")}</span>
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="space-y-6 lg:col-span-8">
                  <p className="text-secondary max-w-[65ch] text-base leading-relaxed">
                    {summary}
                  </p>

                  <div className="grid divide-y divide-[var(--color-border)] border-y border-[var(--color-border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    {metrics.map((metric) => (
                      <p
                        key={metric}
                        className="text-primary py-3 pr-4 font-mono text-xs leading-snug tabular-nums sm:px-4 sm:first:pl-0"
                      >
                        {metric}
                      </p>
                    ))}
                  </div>

                  <p className="text-tertiary font-mono text-xs leading-relaxed">
                    {stack.join(" · ")}
                  </p>
                </div>
              </article>
            );
          },
        )}
      </div>

      <div className="flex flex-col justify-between gap-6 border-t border-[var(--color-border)] pt-8 md:flex-row md:items-center">
        <div className="space-y-1.5">
          <h3 className="text-primary text-xl font-semibold tracking-tight">
            {t("ctaTitle")}
          </h3>
          <p className="text-secondary max-w-[60ch] text-sm leading-relaxed">
            {t("ctaDescription")}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className={buttonClasses({ variant: "primary" })}>
            {t("contactCta")}
          </Link>

          <Link
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses({ variant: "secondary" })}
          >
            {t("githubCta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
