import Header from "@/components/General/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | munraitoo13",
  description: "munraitoo13's contact.",
};

export default function Contact() {
  return (
    <>
      <Header
        cathegory="Personal"
        pageTitle="Contact"
        pageDescription="All the ways you can contact me."
      />
    </>
  );
}
