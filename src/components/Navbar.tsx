import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function Navbar() {
  return (
    <nav className="fixed w-screen top-0 flex justify-between items-center p-5 bg-slate-800 ">
      {/* left */}
      <div className="flex gap-10">
        {/* logo */}
        <div>
          <a href="/">
            <span className="text-red-700 font-bold">&lt;</span>
            <span className="italic">munraitoo13</span>
            <span className="text-red-700 font-bold"> /&gt;</span>
          </a>
        </div>

        {/* pages */}
        <div className="flex gap-5">
          {/* professional */}
          <ul className="flex gap-2">
            <b>Professional:</b>
            <li>
              <a href="/professional/projects">Projects</a>
            </li>
            <li>
              <a href="/professional/experience">Experience</a>
            </li>
            <li>
              <a href="/professional/skills-and-tools">Skills & Tools</a>
            </li>
          </ul>

          {/* personal */}
          <ul className="flex gap-2">
            <b>Personal:</b>
            <li>
              <a href="/personal/blog">Blog</a>
            </li>
            <li>
              <a href="/personal/contact">Contact</a>
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
    </nav>
  );
}
