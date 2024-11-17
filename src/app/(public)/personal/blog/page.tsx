import { Markdown } from "@/components/common/Markdown";
import { Header } from "@/components/common/Header";
import { Posts } from "@/components/blog/Posts";
import { getUserLocale } from "@/utils/userLocale";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Blog | munraitoo13",
  description: "munraitoo13's blog",
};

export default async function Page() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
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

      <Posts posts={posts} />
    </>
  );
}
