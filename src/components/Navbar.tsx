import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMoodLookRight,
} from "@tabler/icons-react";

import Dropdown from "./navbar/Dropdown";
import Link from "./navbar/Link";

export default function Navbar() {
  return (
    <nav className="fixed w-screen top-0 z-50 justify-center m-auto px-10">
      <div className="flex justify-between items-center p-5 bg-neutral-800 mt-5 rounded-2xl backdrop-filter backdrop-blur-md bg-opacity-10 max-w-screen-xl mx-auto">
        {/* left */}
        <div className="flex gap-10 items-center">
          {/* logo */}
          <div>
            <a href="/">
              <span className="text-red-600 font-bold">&lt;</span>

              <b>munraitoo13</b>

              <span className="text-red-600 font-bold"> /&gt;</span>
            </a>
          </div>

          {/* pages */}
          <div className="flex gap-5 items-center">
            {/* professional */}
            <Dropdown name="Professional" />

            <ul className="flex gap-5 items-center">
              <Link name="Projects" destination="/professional/projects" />

              <Link name="Experience" destination="/professional/experience" />

              <Link
                name="Skills & Tools"
                destination="/professional/skills-and-tools"
              />
            </ul>

            {/* personal */}
            <Dropdown name="Personal" />

            <ul className="flex gap-5 items-center">
              <Link name="Contact" destination="/personal/contact" />
              <Link name="Blog" destination="/personal/blog" />
            </ul>
          </div>
        </div>

        {/* right */}
        <div className="flex gap-2">
          <a
            href="https://github.com/munraitoo13/"
            target="_blank"
            className="hover:opacity-75"
          >
            <IconBrandGithub stroke={1.25} />
          </a>

          <a
            href="https://www.linkedin.com/in/munraitoo13/"
            target="_blank"
            className="hover:opacity-75"
          >
            <IconBrandLinkedin stroke={1.25} />
          </a>

          <a
            href="https://www.instagram.com/munraitoo13"
            target="_blank"
            className="hover:opacity-75"
          >
            <IconBrandInstagram stroke={1.25} />
          </a>

          <a
            href="https://x.com/munraitoo13"
            target="_blank"
            className="hover:opacity-75"
          >
            <IconBrandX stroke={1.25} />
          </a>
        </div>
      </div>
    </nav>
  );
}
