export default function Footer() {
  return (
    <footer className="w-screen pt-24 p-10 bg-gradient-to-b from-neutral-999">
      <div className="flex flex-col">
        {/* links and about */}
        <div className="flex flex-col gap-10">
          {/* navigation */}
          <div className="flex gap-10">
            {/* Professional */}
            <div className="flex flex-col gap-2">
              <p className="opacity-75">Professional</p>

              <ul className="flex flex-col gap-2">
                <li>
                  <a href="/professional/projects" className="hover:opacity-75">
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    href="/professional/experience"
                    className="hover:opacity-75"
                  >
                    Experience
                  </a>
                </li>

                <li>
                  <a
                    href="/professional/skills-and-tools"
                    className="hover:opacity-75"
                  >
                    Skills & Tools
                  </a>
                </li>
              </ul>
            </div>

            {/* Personal */}
            <div className="flex flex-col gap-2">
              <p className="opacity-75">Personal</p>

              <ul className="flex flex-col gap-2">
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
            <div className="flex flex-col gap-2">
              <p className="opacity-75">This Website</p>

              <ul className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
            <p className="opacity-75">About-me</p>

            <p>
              What's up! My name is Augusto. Also known as munraitoo13, I'm a
              passionate software engineer from Brazil.
            </p>
          </div>
        </div>

        {/* separator */}
        <hr className="border-neutral-800 mt-5" />

        {/* bottom-end */}
        <div className="flex justify-between mt-5 text-xs">
          <p>&copy; 2024, munraitoo13</p>

          <a
            href="https://github.com/munraitoo13/munraitoo13-personal-website/tree/dev"
            target="_blank"
            className="opacity-75"
          >
            Development repository
          </a>
        </div>
      </div>
    </footer>
  );
}
