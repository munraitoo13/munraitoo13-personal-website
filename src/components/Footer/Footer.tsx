export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-gradient-to-b from-neutral-999 px-10 pb-5 pt-36">
      <div className="flex w-full max-w-screen-xl flex-col">
        {/* links and about */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
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
                  <a href="/professional/experiences" className="hover:opacity-75">
                    Experience
                  </a>
                </li>

                <li>
                  <a href="/professional/skills-and-tools" className="hover:opacity-75">
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
          <div className="flex max-w-lg flex-col gap-2">
            <p className="opacity-75">About-me</p>

            <p>
              What's up! My name is Augusto. Also known as munraitoo13, I'm a passionate software
              engineer from Brazil.
            </p>
          </div>
        </div>

        {/* separator */}
        <hr className="mt-5 border-neutral-700" />

        {/* bottom-end */}
        <div className="mt-5 flex justify-between text-xs">
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
