import { Metadata } from "next";
import Presentation from "@/app/components/Home/Presentation";
import Qualities from "@/app/components/Home/Qualities";
import Phrase from "@/app/components/Home/Phrase";
import Stacks from "@/app/components/Home/Stacks";
import ContactAndResume from "@/app/components/Main/ContactAndResume";

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
