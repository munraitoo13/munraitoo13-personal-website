"use client";
import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMoodLookRight,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Link from "./Link";

export default function Navbar() {
  // hamburger menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-screen top-0 justify-center m-auto px-10 z-50">
      {/* content wrapper */}
      <div className="grid grid-cols-3 p-5 bg-neutral-800 mt-5 rounded-2xl backdrop-filter backdrop-blur-md bg-opacity-10">
        {/* logo */}
        <div className="justify-self-start text-nowrap">
          <a href="/">
            <span className="text-red-600 font-bold">&lt;</span>

            <b>munraitoo13</b>

            <span className="text-red-600 font-bold"> /&gt;</span>
          </a>
        </div>

        {/* navbar items */}
        <div className="justify-self-center">
          {isOpen ? (
            <div className="flex flex-col lg:flex-row gap-5 items-center mt-12">
              {/* professional */}
              <Dropdown name="Professional" />

              <ul className="flex flex-col lg:flex-row gap-5 items-center">
                <Link name="Projects" destination="/professional/projects" />

                <Link
                  name="Experience"
                  destination="/professional/experience"
                />

                <Link
                  name="Skills & Tools"
                  destination="/professional/skills-and-tools"
                />
              </ul>

              {/* personal */}
              <Dropdown name="Personal" />

              <ul className="flex flex-col gap-5 items-center">
                <Link name="Contact" destination="/personal/contact" />
                <Link name="Blog" destination="/personal/blog" />
              </ul>

              {/* socials */}
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
          ) : null}
        </div>

        {/* hamburger menu */}
        <div className="justify-self-end ">
          {isOpen ? (
            <IconX
              className="hover:opacity-75 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <IconMenu2
              className="hover:opacity-75 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
