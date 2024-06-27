import { Metadata } from "next";
import Header from "@/components/General/Header";
import Markdown from "@/components/Pages/Markdown";
import Contents from "@/components/Pages/TableOfContents";
import Content from "@/app/professional/skills-and-tools/content.mdx";

export const metadata: Metadata = {
  title: "Skills & Tools | munraitoo13",
  description: "munraitoo13's skills & tools.",
};

export default function SkillsAndTools() {
  return (
    <>
      <Header
        cathegory="Professional"
        pageTitle="Skills & Tools"
        pageDescription="All the skills I have and tools I use to build those beautiful websites."
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
