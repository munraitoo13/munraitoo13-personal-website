import {
  IconFile,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandVscode,
  IconBrandFigma,
  IconBrandNodejs,
  IconBrandMongodb,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import ScrollTop from "@/components/ScrollTop";
import Presentation from "@/components/Home/Presentation";
import Qualities from "@/components/Home/Qualities";
import Phrase from "@/components/Home/Phrase";

export default function Home() {
  return (
    <main className="bg-gradient-to-t from-neutral-999 via-neutral-999">
      {/* back to top */}
      <ScrollTop />

      {/* header */}
      <header className="flex w-full flex-col items-center justify-center pb-24 pt-36">
        {/* presentation */}
        <Presentation />

        {/* buttons */}
        <div className="mt-10 flex font-semibold">
          {/* contact */}
          <a
            href="/personal/contact"
            className="rounded-2xl bg-red-600 px-5 py-3 hover:opacity-75"
          >
            Get in touch
          </a>

          {/* resume */}
          <a
            href="#"
            target="_blank"
            className="flex items-center rounded-2xl px-5 py-3 hover:opacity-75"
          >
            <IconFile
              size={20}
              stroke={2}
              className="mr-2"
            />
            RESUME
          </a>
        </div>

        {/* tech stacks */}
        <div className="mt-20 flex flex-col items-center gap-1">
          <span className="text-sm opacity-75">Favorite Stacks & Tools</span>
          <div className="flex items-center gap-2">
            <IconBrandTypescript
              stroke={1.25}
              className="opacity-75 hover:cursor-pointer hover:opacity-100"
            />
            <IconBrandReact
              stroke={1.25}
              className="opacity-75 hover:cursor-pointer hover:opacity-100"
            />
            <IconBrandNextjs
              stroke={1.25}
              className="opacity-75 hover:cursor-pointer hover:opacity-100"
            />
            <IconBrandTailwind
              stroke={1.25}
              className="opacity-75 hover:cursor-pointer hover:opacity-100"
            />
            <IconBrandNodejs
              stroke={1.25}
              className="opacity-75 hover:cursor-pointer hover:opacity-100"
            />
            <IconBrandMongodb
              size={24}
              stroke={1.25}
              className="opacity-75 hover:cursor-pointer hover:opacity-100"
            />
            <span className="opacity-75">|</span>
            <IconBrandVscode
              size={24}
              stroke={1.25}
              className="opacity-75 hover:cursor-pointer hover:opacity-100"
            />
            <IconBrandFigma
              size={24}
              stroke={1.25}
              className="opacity-75 hover:cursor-pointer hover:opacity-100"
            />
          </div>
        </div>
      </header>

      {/* qualities */}
      <Qualities />

      {/* phrase */}
      <Phrase />
    </main>
  );
}
