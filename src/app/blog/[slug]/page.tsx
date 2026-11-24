import { BlogHeader } from "@/components/blog/BlogHeader";
import { CustomMDX } from "@/components/blog/customMDX";
import { Markdown } from "@/components/common/Markdown";
import { resolveLocale } from "@/i18n/config";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/utils/formatDate";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const locale = resolveLocale(await getLocale());
  const t = await getTranslations("Blog");

  return (
    <article className="tui-rail px-6 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-tertiary hover:text-primary mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors"
        >
          <ArrowLeft className="text-accent size-3.5" strokeWidth={1.75} />
          <span>{t("backToBlog")}</span>
        </Link>

        <BlogHeader
          title={post.title}
          description={post.description}
          date={formatDate(new Date(post.date), locale)}
          language={`${post.locale} · ${post.readingTimeMinutes} min`}
        />

        <Markdown>
          <CustomMDX source={post.content} />
        </Markdown>
      </div>
    </article>
  );
}
