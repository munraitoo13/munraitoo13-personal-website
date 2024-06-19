import { IconFile } from "@tabler/icons-react";
import ScrollTop from "@/components/ScrollTop";
import Presentation from "@/components/Homepage/Presentation";
import Qualities from "@/components/Homepage/Qualities";
import Phrase from "@/components/Homepage/Phrase";
import Stacks from "@/components/Homepage/Stacks";
import ButtonLink from "@/components/ButtonLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | munraitoo13",
  description: "munraitoo13's personal website home page.",
};

export default function Home() {
  return (
    <>
      {/* header */}
      <header className="flex w-full flex-col items-center justify-center pb-24 pt-36">
        {/* presentation */}
        <Presentation />

        {/* buttons */}
        <div className="mt-10 flex">
          <ButtonLink href="/personal/contact">Get in touch</ButtonLink>
          <ButtonLink
            className="bg-transparent"
            href="#"
          >
            <IconFile stroke={1.25} />
            RESUME
          </ButtonLink>
        </div>

        {/* tech stacks */}
        <Stacks />
      </header>

      {/* qualities */}
      <Qualities />

      {/* phrase */}
      <Phrase />
    </>
  );
}
