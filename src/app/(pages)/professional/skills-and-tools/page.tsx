import Header from "@/components/Header";
import Markdown from "@/components/SkillsAndTools/Markdown";
import TableOfContents from "@/components/SkillsAndTools/TableOfContents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Tools | munraitoo13",
  description: "munraitoo13's skills & tools.",
};

export const headings = [
  { id: "skills", value: "Skills" },
  { id: "tools", value: "Tools" },
];

export default function SkillsAndTools() {
  return (
    <>
      <Header
        cathegory="Professional"
        pageTitle="Skills & Tools"
        pageDescription="All the skills I have and tools I use to build those beautiful websites."
      />

      <div className="flex flex-col lg:flex-row-reverse lg:justify-between">
        <TableOfContents headings={headings} />
        <Markdown />
      </div>
    </>
  );
}
