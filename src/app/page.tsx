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

export default function Home() {
  return (
    <main>
      {/* header */}
      <header className="bg-gradient-to-t from-neutral-999 via-neutral-999 pt-48 pb-24 w-screen flex flex-col items-center justify-center">
        {/* presentation */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold mb-5">
            What's up!
            <br />
            My name is <span className="text-red-600">Augusto</span>.
          </h1>

          <p className="text-lg">
            <span className="opacity-75">
              Also known as munraitoo13, I'm a passionate
            </span>
            <b> Software Engineer </b>
            <span className="opacity-75">from Brazil!</span>
          </p>
        </div>

        {/* buttons */}
        <div className="mt-10 flex font-semibold">
          <a
            href="/personal/contact"
            className="bg-red-600 px-5 py-3 rounded-2xl hover:opacity-75"
          >
            Get in touch
          </a>

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
      <div className="bg-gradient-to-t from-neutral-999 via-neutral-999 w-screen pb-20 px-20 flex justify-center">
        <div className="flex justify-evenly gap-5 max-w-screen-xl">
          {/* competent */}
          <div className="border border-neutral-900 rounded-xl p-3 w-1/3 text-white">
            <div className="flex items-center ">
              <IconBriefcase2
                size={24}
                stroke={1.25}
                className="rounded-full bg-red-600 p-3 box-content min-w-fit z-10"
              />

              <h3 className="bg-neutral-900 py-2 pl-10 rounded-r-full font-bold w-full relative right-5">
                Competent
              </h3>
            </div>

            <p className="p-3 opacity-75">
              A must-have trait that significantly enhances the overall working
              experience.
            </p>
          </div>

          {/* detail-oriented */}
          <div className="border border-neutral-900 rounded-xl p-3 w-1/3 text-white">
            <div className="flex items-center ">
              <IconStars
                size={24}
                stroke={1.25}
                className="rounded-full bg-red-600 p-3 box-content min-w-fit z-10"
              />

              <h3 className="bg-neutral-900 py-2 pl-10 rounded-r-full font-bold w-full relative right-5">
                Detail-oriented
              </h3>
            </div>

            <p className="p-3 opacity-75">
              Awareness to good coding and security practises, consistency and
              flawless UX/UI.
            </p>
          </div>

          {/* comunicative */}
          <div className="border border-neutral-900 rounded-xl p-3 w-1/3 text-white">
            <div className="flex items-center ">
              <IconBrandHipchat
                size={24}
                stroke={1.25}
                className="rounded-full bg-red-600 p-3 box-content min-w-fit z-10"
              />

              <h3 className="bg-neutral-900 py-2 pl-10 rounded-r-full font-bold w-full relative right-5">
                Communicative
              </h3>
            </div>

            <p className="p-3 opacity-75">
              Another must-have quality that enhances the overall team working
              experience.
            </p>
          </div>
        </div>
      </div>

      {/* phrase */}
      <div className="bg-gradient-to-b from-neutral-999 py-20 text-center w-screen flex items-center justify-center">
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
