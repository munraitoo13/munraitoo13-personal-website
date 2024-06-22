import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function Socials() {
  return (
    <div className="flex space-x-1">
      {/* github */}
      <a className="hover:opacity-75" href="https://github.com/munraitoo13" target="_blank">
        <IconBrandGithub stroke={1.25} />
      </a>

      {/* linkedin */}
      <a
        className="hover:opacity-75"
        href="https://www.linkedin.com/in/munraitoo13/"
        target="_blank"
      >
        <IconBrandLinkedin stroke={1.25} />
      </a>

      {/* instagram */}
      <a className="hover:opacity-75" href="https://www.instagram.com/munraitoo13/" target="_blank">
        <IconBrandInstagram stroke={1.25} />
      </a>

      {/* twitter */}
      <a className="hover:opacity-75" href="https://twitter.com/munraitoo13" target="_blank">
        <IconBrandX stroke={1.25} />
      </a>
    </div>
  );
}
