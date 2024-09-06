import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import { MotionA } from "@/components/Motion";

export default function Socials() {
  return (
    <div className="flex gap-1">
      {/* github */}

      <MotionA
        href="https://github.com/munraitoo13"
        target="_blank"
        className="hover:text-red-600"
        whileHover={{ scale: 1.1 }}
      >
        <IconBrandGithub stroke={1.25} />
      </MotionA>

      {/* linkedin */}

      <MotionA
        href="https://www.linkedin.com/in/munraitoo13/"
        target="_blank"
        className="hover:text-red-600"
        whileHover={{ scale: 1.1 }}
      >
        <IconBrandLinkedin stroke={1.25} />
      </MotionA>

      {/* instagram */}

      <MotionA
        href="https://www.instagram.com/munraitoo13/"
        target="_blank"
        className="hover:text-red-600"
        whileHover={{ scale: 1.1 }}
      >
        <IconBrandInstagram stroke={1.25} />
      </MotionA>

      {/* twitter */}

      <MotionA
        href="https://twitter.com/munraitoo13"
        target="_blank"
        className="hover:text-red-600"
        whileHover={{ scale: 1.1 }}
      >
        <IconBrandX stroke={1.25} />
      </MotionA>
    </div>
  );
}
