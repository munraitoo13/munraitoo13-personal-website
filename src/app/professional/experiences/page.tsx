import { Metadata } from "next";
import Header from "@/components/General/Header";
import Markdown from "@/components/Pages/Professional/Experiences/Markdown";
import Contents from "@/components/Pages/Contents";

export const metadata: Metadata = {
  title: "Experiences | munraitoo13",
  description: "munraitoo13's experiences.",
};

export default function Experience() {
  return (
    <>
      <Header
        cathegory="Professional"
        pageTitle="Experiences"
        pageDescription="All the professional experiences I had in the past."
      />

      <div className="flex flex-col gap-3 lg:flex-row-reverse lg:justify-between">
        <Contents />
        <Markdown />
      </div>
    </>
  );
}
