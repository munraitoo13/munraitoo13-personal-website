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
      <Header pageTitle={t("title")} pageDescription={t("description")} />

      <FeaturedPost featuredPost={featuredPost} />

      <Posts posts={posts} />

      <section className="bg-background-contrast mt-12 flex max-w-4xl flex-col gap-4 rounded-xl p-8">
        <h2 className="text-2xl">{t("ctaTitle")}</h2>
        <p className="text-secondary">{t("ctaDescription")}</p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/contact">
            <Button className="font-normal">{t("contactCta")}</Button>
          </Link>

          <Link href="/projects">
            <Button variant="secondary" className="font-normal">
              {t("projectsCta")}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
