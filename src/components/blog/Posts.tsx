import { resolveLocale } from "@/i18n/config";
import type { BlogPostMeta } from "@/types/types";
import { formatDate } from "@/utils/formatDate";
import { ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Posts({ posts }: { posts: BlogPostMeta[] }) {
  const t = await getTranslations("Blog");
  const locale = resolveLocale(await getLocale());

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="divide-y divide-[var(--color-border)] border border-[var(--color-border)]">
      {posts.map(
        ({
          slug,
          title,
          description,
          tags,
          locale: postLocale,
          date,
          readingTimeMinutes,
        }) => (
          <Link
            className="group bg-background hover:bg-background-contrast flex flex-col gap-4 p-6 transition-colors duration-200 md:p-8"
            href={`/blog/${slug}`}
            key={slug}
          >
            <div className="text-tertiary flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.14em]">
              <span>{postLocale}</span>
              <span>/</span>
              <span>{formatDate(new Date(date), locale)}</span>
              <span>/</span>
              <span>{readingTimeMinutes} min</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-primary group-hover:text-accent text-2xl font-semibold tracking-tight transition-colors">
                {title}
              </h2>
              <p className="text-secondary max-w-3xl leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-background-contrast text-secondary border border-[var(--color-border)] px-2.5 py-1 font-mono text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="text-secondary group-hover:text-accent inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors">
                <span>{t("readPost")}</span>
                <ArrowRight className="size-3.5" strokeWidth={1.75} />
              </span>
            </div>
          </Link>
        ),
      )}
    </div>
  );
}
