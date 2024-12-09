import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { Posts } from "@/components/blog/Posts";
import { Header } from "@/components/common/Header";
import { prisma } from "@/lib/prisma";
import { getTranslations } from "next-intl/server";

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
    </>
  );
}
