import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="w-screen bottom-0 flex flex-col mt-24 p-10">
      {/* navigation */}
      <div className="flex">
        {/* Professional */}
        <div className="mr-20">
          <b className="">Professional</b>

          <ul className="mt-5">
            <li>
              <a href="/professional/projects" className="hover:opacity-75">
                Projects
              </a>
            </li>

            <li>
              <a href="/professional/experience" className="hover:opacity-75">
                Experience
              </a>
            </li>

            <li>
              <a
                href="/professional/skills-and-tools"
                className="hover:opacity-75">
                Skills & Tools
              </a>
            </li>
          </ul>
        </div>

        {/* Personal */}
        <div className="mr-20">
          <b className="">Personal</b>

          <ul className="mt-5">
            <li>
              <a href="/personal/contact" className="hover:opacity-75">
                Contact
              </a>
            </li>

            <li>
              <a href="/personal/blog" className="hover:opacity-75">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* This Website */}
        <div className="mr-20">
          <b className="">This Website</b>

          <ul className="mt-5">
            <li>
              <a href="#" target="_blank" className="hover:opacity-75">
                Concept
              </a>
            </li>

            <li>
              <a href="#" target="_blank" className="hover:opacity-75">
                Source Code
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* about-me */}
      <div className="mt-10 flex flex-col gap-5 w-1/3">
        <b>About-me</b>

        <p>
          What's up! My name is Augusto. Also known as munraitoo13, I'm a
          passionate software engineer from Brazil.
        </p>

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

      {/* separator */}
      <hr className="border-neutral-800 mt-5" />

      {/* bottom-end */}
      <div className="flex justify-between mt-5 text-xs text-neutral-600">
        <p>&copy; 2024, munraitoo13</p>
        <a
          href="https://github.com/munraitoo13/munraitoo13-personal-website/tree/dev"
          target="_blank">
          development repository
        </a>
      </div>
    </footer>
  );
}
