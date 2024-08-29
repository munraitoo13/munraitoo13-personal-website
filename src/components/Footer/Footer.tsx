import Link from "next/link";
import { personal, professional } from "../Navbar/NavItems";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-gradient-to-b from-neutral-950 px-10 pb-5 pt-36">
      <div className="flex w-full max-w-screen-xl flex-col">
        {/* top */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          {/* navigation */}
          <div className="flex gap-10">
            {/* Professional */}
            <div className="flex flex-col gap-3">
              <p>/professional</p>

              {/* links */}
              {professional.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:opacity-75"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Personal */}
            <div className="flex flex-col gap-3">
              <p>/personal</p>

              {/* links */}
              {personal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:opacity-75"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* about-me */}
          <div className="flex max-w-lg flex-col gap-2">
            <p>About-me</p>

            <p className="text-white">
              What's up! My name is Augusto. Also known as munraitoo13, I'm a
              passionate software engineer from Brazil.
            </p>
          </div>
        </div>

        {/* separator */}
        <hr className="mt-5 border-neutral-700" />

        {/* bottom */}
        <div className="mt-5 flex justify-between text-xs">
          <p>&copy; 2024, munraitoo13</p>

          <Link
            href="https://github.com/munraitoo13/munraitoo13-personal-website/tree/dev"
            target="_blank"
          >
            dev
          </Link>
        </div>
      </div>
    </footer>
  );
}
