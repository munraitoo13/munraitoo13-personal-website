import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { Posts } from "@/components/blog/Posts";
import { Button } from "@/components/common/Button";
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
  const featuredPost = allPosts.find((post) => post.featured) ?? null;
  const posts = featuredPost
    ? allPosts.filter((post) => post.slug !== featuredPost.slug)
    : allPosts;

  const t = await getTranslations("Blog");

  return (
    <>
      <Header
        sectionIndex="04"
        sectionLabel={t("introLabel")}
        pageTitle={t("title")}
        pageDescription={t("description")}
      />

      <div className="tui-rail space-y-10 px-6 py-16">
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

        <section className="bg-background-contrast flex flex-col gap-4 border border-[var(--color-border)] p-6 md:p-8">
          <h2 className="text-primary text-2xl font-semibold tracking-tight">
            {t("ctaTitle")}
          </h2>
          <p className="text-secondary max-w-2xl leading-relaxed">
            {t("ctaDescription")}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact">
              <Button>{t("contactCta")}</Button>
            </Link>

            <Link href="/projects">
              <Button variant="secondary">{t("projectsCta")}</Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
