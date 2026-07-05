import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { Posts } from "@/components/blog/Posts";
import { Header } from "@/components/common/Header";
import { Button } from "@/components/common/Button";
import { prisma } from "@/lib/prisma";
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
  const featuredPost = await prisma.post.findFirst({
    where: {
      published: true,
      isFeatured: true,
    },
    include: {
      tags: true,
    },
  });

  const posts = await prisma.post.findMany({
    where: {
      published: true,
      isFeatured: false,
    },
    include: {
      tags: true,
    },
  });

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
          <Link href="/personal/contact">
            <Button className="font-normal">{t("contactCta")}</Button>
          </Link>

          <Link href="/personal/projects">
            <Button variant="secondary" className="font-normal">
              {t("projectsCta")}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
