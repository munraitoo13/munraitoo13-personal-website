import { resolveLocale } from "@/i18n/config";
import type { BlogPostMeta } from "@/types/types";
import { formatDate } from "@/utils/formatDate";
import { ArrowRight, Pin } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export async function FeaturedPost({
  featuredPost,
}: {
  featuredPost: BlogPostMeta | null;
}) {
  const t = await getTranslations("Blog");
  const locale = resolveLocale(await getLocale());

  if (!featuredPost) {
    return null;
  }

  return (
    <Link
      href={`/blog/${featuredPost.slug}`}
      className="group bg-background-contrast hover:border-accent-text flex flex-col gap-5 border border-[var(--color-border)] border-l-2 border-l-accent p-6 transition-colors duration-200 md:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-accent-text inline-flex items-center gap-2 text-xs font-medium">
          <Pin className="size-3.5" strokeWidth={1.75} />
          <span>{t("featured")}</span>
        </div>

        <span className="text-tertiary font-mono text-xs tabular-nums">
          {formatDate(new Date(featuredPost.date), locale)} ·{" "}
          {featuredPost.readingTimeMinutes} min
        </span>
      </div>

      <div className="space-y-3">
        <h2 className="text-primary group-hover:text-accent-text text-2xl font-semibold tracking-tight transition-colors md:text-3xl">
          {featuredPost.title}
        </h2>

        <p className="text-secondary max-w-[65ch] text-base leading-relaxed">
          {featuredPost.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-4">
        <p className="text-tertiary font-mono text-xs">
          {featuredPost.tags.join(" · ")}
        </p>

        <span className="text-primary group-hover:text-accent-text inline-flex items-center gap-1.5 text-sm font-medium transition-colors">
          <span>{t("readFeatured")}</span>
          <ArrowRight className="size-4" strokeWidth={1.75} />
        </span>
      </div>
    </Link>
  );
}
