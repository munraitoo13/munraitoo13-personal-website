import { Header } from "@/components/common/Header";
import { Posts } from "@/components/blog/Posts";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturedPost } from "@/components/blog/FeaturedPost";

export const metadata: Metadata = {
  title: "Blog | munraitoo13",
  description: "munraitoo13's blog",
};

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
