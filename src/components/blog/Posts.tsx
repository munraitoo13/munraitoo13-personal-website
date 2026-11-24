import { resolveLocale } from "@/i18n/config";
import type { BlogPostMeta } from "@/types/types";
import { formatDate } from "@/utils/formatDate";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Posts({ posts }: { posts: BlogPostMeta[] }) {
  const t = await getTranslations("Blog");
  const locale = resolveLocale(await getLocale());

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="max-w-4xl flex-1 space-y-5">
      {posts.map(
        ({ slug, title, description, tags, locale: postLocale, date, readingTimeMinutes }) => (
          <Link
            className="group bg-background-contrast hover:border-accent hover:shadow-background-contrast/80 flex items-center rounded-xl border border-transparent px-8 py-7 shadow-sm transition-all duration-500 ease-[var(--ease-smooth)] hover:-translate-y-0.5 hover:shadow-xl"
            href={`/blog/${slug}`}
            key={slug}
          >
            <div className="flex-1">
              <div className="text-tertiary flex flex-wrap items-center gap-3 text-sm">
                <span>{postLocale}</span>
                <span>&middot;</span>
                <span>{formatDate(new Date(date), locale)}</span>
                <span>&middot;</span>
                <span>{readingTimeMinutes} min</span>
              </div>

              <h2 className="group-hover:text-accent text-2xl">{title}</h2>
              <p className="text-secondary pt-2">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-tertiary text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-tertiary group-hover:text-accent pt-5 text-sm">
                {t("readPost")}
              </p>
            </div>
          </Link>
        ),
      )}
    </div>
  );
}
