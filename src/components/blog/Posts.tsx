import { resolveLocale } from "@/i18n/config";
import { Post } from "@/types/types";
import { getTranslations } from "next-intl/server";
import { formatDate } from "@/utils/formatDate";
import { getLocale } from "next-intl/server";
import Link from "next/link";

export async function Posts({ posts }: { posts: Post[] }) {
  const t = await getTranslations("Blog");
  const locale = resolveLocale(await getLocale());

  return (
    <div className="max-w-4xl flex-1 space-y-5">
      {posts.map(({ id, title, description, tags, language, createdAt }) => (
        <Link
          className="group bg-background-contrast hover:border-accent hover:shadow-background-contrast/80 flex items-center rounded-xl border border-transparent px-8 py-7 shadow-sm transition-all duration-500 ease-[var(--ease-smooth)] hover:-translate-y-0.5 hover:shadow-xl"
          href={`/personal/blog/posts/${id}`}
          key={id}
        >
          <div className="flex-1">
            <div className="text-tertiary flex flex-wrap items-center gap-3 text-sm">
              <span>{language}</span>
              <span>&middot;</span>
              <span>{formatDate(createdAt, locale)}</span>
            </div>

            <h2 className="group-hover:text-accent text-2xl">{title}</h2>
            <p className="text-secondary pt-2">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map(({ id, name }) => (
                <span key={id} className="text-tertiary">
                  {name}
                </span>
              ))}
            </div>
            <p className="text-tertiary group-hover:text-accent pt-5 text-sm">
              {t("readPost")}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
