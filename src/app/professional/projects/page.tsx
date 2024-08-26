import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
import Contents from "@/components/TableOfContents";
import { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Projects | munraitoo13",
  description: "munraitoo13's projects",
};

export default async function Page() {
  return (
    <>
      <Header
        cathegory="Professional"
        pageTitle="Projects"
        pageDescription="All of my wip and finished projects in one place."
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
