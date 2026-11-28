import { CopyEmailButton } from "@/components/common/CopyEmailButton";
import { Socials } from "@/components/common/Socials";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT_EMAIL } from "@/constants/constants";
import type { Locale } from "@/i18n/config";
import type { BlogPostMeta } from "@/types/types";
import { formatDate } from "@/utils/formatDate";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function BlogAndContact({
  latestPost,
  locale,
}: {
  latestPost: BlogPostMeta | null;
  locale: Locale;
}) {
  const t = await getTranslations("HomePage");
  const tContact = await getTranslations("Contact");

  return (
    <section>
      <div className="tui-rail px-6 py-20 md:py-28">
        <div className="mb-10 space-y-2">
          <h2 className="text-primary max-w-2xl text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            {t("contactSectionTitle")}
          </h2>
          <p className="text-secondary max-w-[65ch] text-base leading-relaxed">
            {t("contactSectionDesc")}
          </p>
        </div>

        <div className="grid border border-[var(--color-border)] lg:grid-cols-12">
          <div className="flex flex-col divide-y divide-[var(--color-border)] border-b border-[var(--color-border)] lg:col-span-5 lg:border-r lg:border-b-0">
            {latestPost && (
              <div className="flex flex-1 flex-col justify-between gap-5 p-6 md:p-8">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-accent-text text-xs font-medium">
                      {t("latestArticle")}
                    </span>
                    <span className="text-tertiary font-mono text-xs tabular-nums">
                      {formatDate(new Date(latestPost.date), locale)} ·{" "}
                      {latestPost.readingTimeMinutes} min
                    </span>
                  </div>

                  <Link
                    href={`/blog/${latestPost.slug}`}
                    className="group block space-y-2"
                  >
                    <h3 className="text-primary group-hover:text-accent-text text-xl font-semibold tracking-tight transition-colors">
                      {latestPost.title}
                    </h3>
                    <p className="text-secondary max-w-[55ch] text-sm leading-relaxed">
                      {latestPost.description}
                    </p>
                  </Link>
                </div>

                <Link
                  href="/blog"
                  className="text-secondary hover:text-primary inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium transition-colors"
                >
                  <span>{t("allArticles")}</span>
                  <ArrowRight
                    className="text-accent-text size-4"
                    strokeWidth={1.75}
                  />
                </Link>
              </div>
            )}

            <div className="space-y-5 p-6 md:p-8">
              <div className="space-y-2">
                <p className="text-tertiary text-xs font-medium">
                  {tContact("emailSectionTitle")}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary hover:text-accent-text font-mono text-sm transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>

                  <CopyEmailButton
                    email={CONTACT_EMAIL}
                    label={t("copyEmail")}
                    copiedLabel={t("copiedEmail")}
                  />
                </div>
              </div>

              <Socials className="justify-start gap-2" />
            </div>
          </div>

          <div className="bg-background-contrast p-6 md:p-8 lg:col-span-7">
            <ContactForm compact />
          </div>
        </div>
      </div>
    </section>
  );
}
