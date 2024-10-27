import { ContactAndResume } from "@/components/home/ContactAndResume";
import { Phrase } from "@/components/home/Phrase";
import { Presentation } from "@/components/home/Presentation";
import { Qualities } from "@/components/home/Qualities";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | munraitoo13",
  description: "munraitoo13's personal website home page.",
};

export default function Page() {
  return (
    <>
      <Presentation />
      <ContactAndResume />
      <Phrase />
      <Qualities />
    </>
  );
}
