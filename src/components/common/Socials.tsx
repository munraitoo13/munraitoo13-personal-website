import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import { linkVariants } from "@/animations/motionVariants";
import { MotionLink } from "@/components/common/Motion";

export function Socials() {
  return (
    <div className="flex gap-1">
      {/* github */}
      <MotionLink
        variants={linkVariants}
        whileHover={{ scale: 1.1 }}
        whileTap="tap"
        href="https://github.com/munraitoo13"
        target="_blank"
        className="hover:text-red-500"
      >
        <IconBrandGithub stroke={1.25} />
      </MotionLink>

      {/* linkedin */}
      <MotionLink
        variants={linkVariants}
        whileHover={{ scale: 1.1 }}
        whileTap="tap"
        href="https://www.linkedin.com/in/munraitoo13/"
        target="_blank"
        className="hover:text-red-500"
      >
        <IconBrandLinkedin stroke={1.25} />
      </MotionLink>

      {/* instagram */}
      <MotionLink
        variants={linkVariants}
        whileHover={{ scale: 1.1 }}
        whileTap="tap"
        href="https://www.instagram.com/munraitoo13/"
        target="_blank"
        className="hover:text-red-500"
      >
        <IconBrandInstagram stroke={1.25} />
      </MotionLink>

      {/* twitter */}
      <MotionLink
        variants={linkVariants}
        whileHover={{ scale: 1.1 }}
        whileTap="tap"
        href="https://twitter.com/munraitoo13"
        target="_blank"
        className="hover:text-red-500"
      >
        <IconBrandX stroke={1.25} />
      </MotionLink>
    </div>
  );
}
