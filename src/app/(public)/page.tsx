import ContactAndResume from "@/components/home/ContactAndResume";
import Phrase from "@/components/home/Phrase";
import Presentation from "@/components/home/Presentation";
import Qualities from "@/components/home/Qualities";
import Stacks from "@/components/home/Stacks";
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

      {/* phrase */}
      <Phrase />

      <div className="flex flex-col gap-5">
        {/* qualities */}
        <Qualities />
      </div>
    </>
  );
}
