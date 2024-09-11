import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
import { Metadata } from "next";
import Posts from "@/components/Blog/Posts";
import { prisma, getUserLocale } from "@/lib";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Blog | munraitoo13",
  description: "munraitoo13's blog",
};

export default async function Page() {
  const allPosts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      tags: true,
    },
  });

  const locale = await getUserLocale();
  const t = await getTranslations("Blog");
  const Content = (await import(`./${locale}.mdx`)).default;

  return (
    <>
      <Header
        category={t("category")}
        pageTitle={t("title")}
        pageDescription={t("description")}
      />

      <div className="flex flex-col gap-10">
        <Markdown>
          <Content />
        </Markdown>

        <Posts allPosts={allPosts} />
      </div>
    </>
  );
}
