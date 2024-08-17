import Header from "@/app/components/Header";
import Markdown from "@/app/components/Markdown";
import Sorting from "@/app/components/Blog/Sorting";
import { redirect } from "next/navigation";
import Content from "./content.mdx";
import { Metadata } from "next";
import { cookies } from "next/headers";

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
