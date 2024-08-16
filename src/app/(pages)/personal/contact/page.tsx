import { Metadata } from "next";
import Header from "@/app/components/Header";
import Markdown from "@/app/components/Markdown";
import TableOfContents from "@/app/components/TableOfContents";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Contact | munraitoo13",
  description: "munraitoo13's contact.",
};

export default function Page() {
  return (
    <>
      <Header
        cathegory="Personal"
        pageTitle="Contact"
        pageDescription="All the ways you are able to contact me."
      />

      <div className="flex flex-col gap-3 lg:flex-row-reverse lg:justify-between">
        <TableOfContents />
        <Markdown>
          <Content />
        </Markdown>
      </div>
    </>
  );
}
