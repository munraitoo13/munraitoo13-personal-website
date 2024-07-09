import { Metadata } from "next";
import Presentation from "@/app/(pages)/_components/Homepage/Presentation";
import Qualities from "@/app/(pages)/_components/Homepage/Qualities";
import Phrase from "@/app/(pages)/_components/Homepage/Phrase";
import Stacks from "@/app/(pages)/_components/Homepage/Stacks";
import ContactAndResume from "@/app/(pages)/_components/Homepage/ContactAndResume";

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
