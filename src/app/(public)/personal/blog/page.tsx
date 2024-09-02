import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import Content from "./content.mdx";
import Posts from "@/components/Blog/Posts";
import formatDate from "@/lib/formatDate";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Blog | munraitoo13",
  description: "munraitoo13's blog",
};

export default function Page() {
  const t = useTranslations("Blog");

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

        <Posts />
      </div>
    </>
  );
}
