import Header from "@/app/(pages)/(routes)/_components/Header";
import Markdown from "@/app/(pages)/(routes)/_components/Markdown";
import Contents from "@/app/(pages)/(routes)/_components/TableOfContents";
import Content from "./content.mdx";
import { Metadata } from "next";

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
