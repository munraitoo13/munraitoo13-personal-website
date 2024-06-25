import { Metadata } from "next";
import Header from "@/components/General/Header";
import Markdown from "@/components/Pages/Personal/Contact/Markdown";
import Contents from "@/components/Pages/Contents";

export const metadata: Metadata = {
  title: "Contact | munraitoo13",
  description: "munraitoo13's contact.",
};

export default function SkillsAndTools() {
  return (
    <>
      <Header
        cathegory="Personal"
        pageTitle="Contact"
        pageDescription="All the ways you are able to contact me."
      />

      <div className="flex flex-col gap-3 lg:flex-row-reverse lg:justify-between">
        <Contents />
        <Markdown />
      </div>
    </>
  );
}
