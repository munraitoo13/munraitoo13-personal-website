import Header from "@/components/General/Header";
import Markdown from "@/components/Pages/Markdown";
import Contents from "@/components/Pages/TableOfContents";
import Content from "./content.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences | munraitoo13",
  description: "munraitoo13's experiences",
};

export default async function Experiences() {
  return (
    <>
      <Header
        cathegory="Professional"
        pageTitle="Experiences"
        pageDescription="My experiences in the professional world."
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
