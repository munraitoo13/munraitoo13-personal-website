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
} from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="bg-gradient-to-t from-neutral-999 via-neutral-999">
      {/* header */}
      <header className="pt-48 pb-24 w-screen flex flex-col items-center justify-center">
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
            className="bg-red-600 px-5 py-3 rounded-2xl hover:opacity-75">
            Get in touch
          </a>

          <a
            href="#"
            target="_blank"
            className="px-5 py-3 rounded-2xl hover:opacity-75 flex items-center">
            <IconFile size={20} stroke={2} className="mr-2" />
            RESUME
          </a>
        </div>

        {/* tech stacks */}
        <div className="mt-10 flex flex-col items-center gap-1">
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

      {/* phrase */}
      <div className="pb-20 text-center w-screen flex items-center justify-center">
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
