import Header from "@/components/General/Header";
import Markdown from "@/components/Pages/Markdown";
import Contents from "@/components/Pages/TableOfContents";
import Content from "./content.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | munraitoo13",
  description: "munraitoo13's blog",
};

export default async function Blog() {
  return (
    <>
      <Header
        cathegory="Personal"
        pageTitle="Blog"
        pageDescription="All of my blog posts in one place."
      />

      <div className="flex flex-col gap-3 lg:flex-row-reverse lg:justify-between">
        <Contents />
        <Markdown>
          <Content />
        </Markdown>
      </div>
    </>
  );
}
