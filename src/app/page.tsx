import {
  IconFile,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandVscode,
  IconBrandFigma,
  IconQuote,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBriefcase2,
  IconStars,
  IconBrandHipchat,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import BackToTop from "@/components/BackToTop";
import Presentation from "@/components/Home/Presentation";
import Qualities from "@/components/Home/Qualities";

export default function Home() {
  return (
    <main className="bg-gradient-to-t from-neutral-999 via-neutral-999">
      {/* back to top */}
      <BackToTop />

      {/* header */}
      <header className=" pt-48 pb-24 w-screen flex flex-col items-center justify-center">
        {/* presentation */}
        <Presentation />

        {/* buttons */}
        <div className="mt-10 flex font-semibold">
          {/* contact */}
          <a
            href="/personal/contact"
            className="bg-red-600 px-5 py-3 rounded-2xl hover:opacity-75"
          >
            Get in touch
          </a>

          {/* resume */}
          <a
            href="#"
            target="_blank"
            className="px-5 py-3 rounded-2xl hover:opacity-75 flex items-center"
          >
            <IconFile size={20} stroke={2} className="mr-2" />
            RESUME
          </a>
        </div>

        {/* tech stacks */}
        <div className="mt-20 flex flex-col items-center gap-1">
          <span className="text-sm opacity-75">Favorite Stacks & Tools</span>
          <div className="flex gap-2 items-center">
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
      <div className="py-20 text-center w-screen flex items-center justify-center">
        <blockquote className="text-2xl w-1/2 flex flex-col gap-1">
          <div className="flex items-end justify-center">
            <IconQuote
              size={32}
              stroke={1.25}
              className="transform scale-x-[-1] scale-y-[-1] mb-2"
            />
            <span className="opacity-75">
              <span className="italic">Three responses</span> to a piece of
              product:
            </span>
          </div>

          <div>
            <span className="opacity-75">— yes, no, and </span>
            <span className="font-bold">WOW! </span>
            <span className="opacity-75">—</span>
          </div>

          <div>
            <span className="opacity-75">Wow is the one </span>
            <span className="font-bold p-1 bg-neutral-900 rounded-md">
              I aim for.
            </span>
          </div>
        </blockquote>
      </div>
    </main>
  );
}
