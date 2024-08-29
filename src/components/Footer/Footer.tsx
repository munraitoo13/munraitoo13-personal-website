import Link from "next/link";
import { personal, professional } from "../Navbar/NavItems";
import Socials from "@/components/Navbar/Socials";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-gradient-to-b from-neutral-950 px-10 pb-5 pt-36">
      <div className="flex w-full max-w-screen-xl flex-col gap-10">
        {/* top */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          {/* navigation */}
          <div className="flex flex-col gap-10 lg:flex-row">
            {/* Personal */}
            <div className="flex flex-col items-center gap-3">
              <p className="w-fit rounded-full bg-neutral-900/25 px-5 py-2 text-white">
                /personal
              </p>

              {/* links */}
              {personal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-red-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Professional */}
            <div className="flex flex-col items-center gap-3">
              <p className="w-fit rounded-full bg-neutral-900/25 px-5 py-2 text-white">
                /professional
              </p>

              {/* links */}
              {professional.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-red-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* about-me */}
          <div className="mx-auto flex max-w-lg flex-col items-center gap-2 lg:mx-0">
            <p className="w-fit rounded-full bg-neutral-900/25 px-5 py-2 text-white">
              About-me
            </p>

            <p className="text-center">
              What's up! My name is Augusto. Also known as munraitoo13, I'm a
              passionate software engineer from Brazil.
            </p>

            <Socials />
          </div>
        </div>

        {/* copy and repo */}
        <div className="flex justify-between text-xs">
          <p>&copy; 2024, munraitoo13</p>

          <Link
            href="https://github.com/munraitoo13/munraitoo13-personal-website/tree/dev"
            target="_blank"
          >
            Development Repository
          </Link>
        </div>
      </div>
    </footer>
  );
}
