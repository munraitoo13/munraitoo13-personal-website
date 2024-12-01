import { Header } from "@/components/common/Header";
import { Posts } from "@/components/blog/Posts";
import { prisma } from "@/lib/prisma";
import { getTranslations } from "next-intl/server";
import { FeaturedPost } from "@/components/blog/FeaturedPost";

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
      <Header
        category={t("category")}
        pageTitle={t("title")}
        pageDescription={t("description")}
      />
      <FeaturedPost featuredPost={featuredPost} />
      <Posts posts={posts} />
    </>
  );
}
