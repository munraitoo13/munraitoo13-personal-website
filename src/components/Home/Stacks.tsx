"use client";

import {
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandVscode,
  IconBrandFigma,
  IconBrandNodejs,
  IconBrandMongodb,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function Stacks() {
  return (
    <motion.div
      className="flex flex-col gap-1"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
    >
      <span>My Stacks & Tools</span>

      <div className="flex items-center gap-2">
        <IconBrandTypescript
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandReact
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandNextjs
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandTailwind
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandNodejs
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandMongodb
          size={24}
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />

        <span>|</span>

        <IconBrandVscode
          size={24}
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandFigma
          size={24}
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
      </div>
    </motion.div>
  );
}
