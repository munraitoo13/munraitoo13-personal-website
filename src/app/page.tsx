import ContactAndResume from "@/components/Home/ContactAndResume";
import Phrase from "@/components/Home/Phrase";
import Presentation from "@/components/Home/Presentation";
import Qualities from "@/components/Home/Qualities";
import Stacks from "@/components/Home/Stacks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | munraitoo13",
  description: "munraitoo13's personal website home page.",
};

export default function Page() {
  return (
    <>
      {/* header */}
      <header className="flex w-full flex-col justify-center gap-5 pt-44">
        {/* presentation */}
        <Presentation />

        {/* contact and resume */}
        <ContactAndResume />
      </header>

      <div className="flex flex-col gap-10">
        {/* stacks & tools */}
        <Stacks />

        {/* qualities */}
        <Qualities />
      </div>

      {/* phrase */}
      <Phrase />
    </>
  );
}
