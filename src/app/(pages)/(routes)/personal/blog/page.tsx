import Header from "@/app/(pages)/(routes)/_components/Header";
import Markdown from "@/app/(pages)/(routes)/_components/Markdown";
import Sorting from "@/app/(pages)/personal/blog/_components/Sorting";
import Content from "./content.mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | munraitoo13",
  description: "munraitoo13's blog",
};
const post = {
  title: "Blog",
  description: "All of my blog posts in one place.",
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
