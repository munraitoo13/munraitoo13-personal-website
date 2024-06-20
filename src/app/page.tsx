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
      <header className="flex w-full flex-col justify-center gap-5 pt-44">
        {/* presentation */}
        <Presentation />

        {/* stacks & tools */}
        <Stacks />

        {/* contact and resume */}
        <div className="mt-10 flex">
          <ButtonLink href="/personal/contact">Contact me</ButtonLink>
          <ButtonLink
            className="bg-transparent"
            href="#"
          >
            <IconFile stroke={1.25} />
            RESUME
          </ButtonLink>
        </div>
      </header>

      {/* qualities */}
      <Qualities />

      {/* phrase */}
      <Phrase />
    </>
  );
}
