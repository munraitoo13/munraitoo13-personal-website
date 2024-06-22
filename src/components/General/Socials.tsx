import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex space-x-1">
      {/* github */}
      <Link
        className="hover:opacity-75"
        href="https://github.com/munraitoo13"
        target="_blank"
      >
        <IconBrandGithub stroke={1.25} />
      </Link>

      {/* linkedin */}
      <Link
        className="hover:opacity-75"
        href="https://www.linkedin.com/in/munraitoo13/"
        target="_blank"
      >
        <IconBrandLinkedin stroke={1.25} />
      </Link>

      {/* instagram */}
      <Link
        className="hover:opacity-75"
        href="https://www.instagram.com/munraitoo13/"
        target="_blank"
      >
        <IconBrandInstagram stroke={1.25} />
      </Link>

      {/* twitter */}
      <Link
        className="hover:opacity-75"
        href="https://twitter.com/munraitoo13"
        target="_blank"
      >
        <IconBrandX stroke={1.25} />
      </Link>
    </div>
  );
}
