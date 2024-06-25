import { Metadata } from "next";
import Presentation from "@/components/Pages/Home/Presentation";
import Qualities from "@/components/Pages/Home/Qualities";
import Phrase from "@/components/Pages/Home/Phrase";
import Stacks from "@/components/Pages/Home/Stacks";
import ContactAndResume from "@/components/Pages/Home/ContactAndResume";

export const metadata: Metadata = {
  title: "Home | munraitoo13",
  description: "munraitoo13's personal website home page.",
};

export default function Home() {
  return (
    <>
      {/* header */}
      <header className="flex w-full flex-col justify-center gap-5 pt-44">
        {/* presentation */}
        <Presentation />

        {/* stacks & tools */}
        <Stacks />

        {/* contact and resume */}
        <ContactAndResume />
      </header>

      {/* qualities */}
      <Qualities />

      {/* phrase */}
      <Phrase />
    </>
  );
}
