import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMoodLookRight,
} from "@tabler/icons-react";

export default function Navbar() {
  return (
    <nav className="fixed w-screen top-0">
      <div className="flex justify-between items-center p-5 bg-neutral-800 mx-10 mt-5 rounded-2xl backdrop-filter backdrop-blur-md bg-opacity-10">
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
            <button
              disabled
              className="bg-neutral-900 px-5 py-2 rounded-2xl flex items-center gap-1">
              Professional
              <IconMoodLookRight size={14} stroke={2} />
            </button>

            <ul className="flex gap-5 items-center">
              <li className="hover:opacity-75">
                <a href="/professional/projects">Projects</a>
              </li>

              <li className="hover:opacity-75">
                <a href="/professional/experience">Experience</a>
              </li>

              <li className="hover:opacity-75">
                <a href="/professional/skills-and-tools">Skills & Tools</a>
              </li>
            </ul>

            {/* personal */}
            <button
              disabled
              className="bg-neutral-900 px-5 py-2 rounded-2xl flex items-center gap-1">
              Personal
              <IconMoodLookRight size={14} stroke={2} />
            </button>

            <ul className="flex gap-5 items-center">
              <li className="hover:opacity-75">
                <a href="/personal/contact">Contact</a>
              </li>

              <li className="hover:opacity-75">
                <a href="/personal/blog">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        {/* right */}
        <div className="flex gap-2">
          <a
            href="https://github.com/munraitoo13/"
            target="_blank"
            className="hover:opacity-75">
            <IconBrandGithub stroke={1.25} />
          </a>

          <a
            href="https://www.linkedin.com/in/munraitoo13/"
            target="_blank"
            className="hover:opacity-75">
            <IconBrandLinkedin stroke={1.25} />
          </a>

          <a
            href="https://www.instagram.com/munraitoo13"
            target="_blank"
            className="hover:opacity-75">
            <IconBrandInstagram stroke={1.25} />
          </a>

          <a
            href="https://x.com/munraitoo13"
            target="_blank"
            className="hover:opacity-75">
            <IconBrandX stroke={1.25} />
          </a>
        </div>
      </div>
    </nav>
  );
}
