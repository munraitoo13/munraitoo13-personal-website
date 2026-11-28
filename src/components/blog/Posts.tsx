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
    <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
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
            className="group hover:bg-background-contrast/60 flex flex-col gap-4 py-8 transition-colors duration-200 md:px-4"
            href={`/blog/${slug}`}
            key={slug}
          >
            <div className="text-tertiary flex flex-wrap items-center gap-3 font-mono text-xs tabular-nums">
              <span>{postLocale}</span>
              <span>·</span>
              <span>{formatDate(new Date(date), locale)}</span>
              <span>·</span>
              <span>{readingTimeMinutes} min</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-primary group-hover:text-accent-text text-2xl font-semibold tracking-tight transition-colors">
                {title}
              </h2>
              <p className="text-secondary max-w-[65ch] text-base leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <p className="text-tertiary font-mono text-xs">
                {tags.join(" · ")}
              </p>

              <span className="text-secondary group-hover:text-accent-text inline-flex items-center gap-1.5 text-sm font-medium transition-colors">
                <span>{t("readPost")}</span>
                <ArrowRight className="size-4" strokeWidth={1.75} />
              </span>
            </div>
          </Link>
        ),
      )}
    </div>
  );
}
