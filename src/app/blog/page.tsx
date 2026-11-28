import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { Posts } from "@/components/blog/Posts";
import { buttonClasses } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import { getAllPosts } from "@/lib/blog";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("blog"),
    description: t("blogDesc"),
  };
}

export default async function Page() {
  const allPosts = getAllPosts();
  const showFeaturedSplit = allPosts.length >= 3;
  const featuredPost = showFeaturedSplit
    ? (allPosts.find((post) => post.featured) ?? null)
    : null;
  const posts = featuredPost
    ? allPosts.filter((post) => post.slug !== featuredPost.slug)
    : allPosts;

  const t = await getTranslations("Blog");

  return (
    <>
      <Header pageTitle={t("title")} pageDescription={t("description")} />

      <div className="tui-rail space-y-14 px-6 py-12 md:py-16">
        {allPosts.length === 0 ? (
          <div className="bg-background-contrast border border-[var(--color-border)] p-8">
            <p className="text-secondary font-mono text-sm">
              {t("emptyState")}
            </p>
          </div>
        ) : (
          <>
            <FeaturedPost featuredPost={featuredPost} />
            <Posts posts={posts} />
          </>
        )}

        <section className="flex flex-col justify-between gap-6 border-t border-[var(--color-border)] pt-8 md:flex-row md:items-center">
          <div className="space-y-1.5">
            <h2 className="text-primary text-xl font-semibold tracking-tight">
              {t("ctaTitle")}
            </h2>
            <p className="text-secondary max-w-[60ch] text-sm leading-relaxed">
              {t("ctaDescription")}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className={buttonClasses({ variant: "primary" })}
            >
              {t("contactCta")}
            </Link>

            <Link
              href="/projects"
              className={buttonClasses({ variant: "secondary" })}
            >
              {t("projectsCta")}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
