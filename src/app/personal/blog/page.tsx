import Sorting from "@/components/Blog/Sorting";
import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
import { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Blog | munraitoo13",
  description: "munraitoo13's blog",
};

export default async function Page() {
  return (
    <>
      <Header
        cathegory="Personal"
        pageTitle="Blog"
        pageDescription="All of my blog posts in one place."
      />

      <div className="flex flex-col gap-3 lg:flex-row-reverse lg:justify-between">
        <Sorting />
        <Markdown>
          <Content />
        </Markdown>
      </div>
    </>
  );
}
