import Header from "@/components/General/Header";
import { Metadata } from "next";

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
    </>
  );
}
