import type { BlogPostMeta } from "@/types/types";
import { IconPinnedFilled } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function FeaturedPost({
  featuredPost,
}: {
  featuredPost: BlogPostMeta | null;
}) {
  const t = await getTranslations("Blog");

  if (!featuredPost) {
    return null;
  }

  return (
    <Link
      href={`/blog/${featuredPost.slug}`}
      className="bg-background-contrast hover:border-accent mb-12 flex flex-col justify-center gap-4 rounded-xl border border-transparent p-8 transition-all duration-500 ease-[var(--ease-smooth)] hover:-translate-y-0.5 hover:shadow-xl"
    >
      <div className="flex items-center gap-2">
        <IconPinnedFilled className="text-primary" />
        <p className="text-accent text-sm">{t("featured")}</p>
      </div>

      <div className="flex flex-col">
        <h2 className="text-2xl">{featuredPost.title}</h2>

        <p className="text-secondary pt-2">{featuredPost.description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {featuredPost.tags.map((tag) => (
            <span key={tag} className="text-tertiary text-sm">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-tertiary pt-5 text-sm">{t("readFeatured")}</p>
      </div>
    </Link>
  );
}
