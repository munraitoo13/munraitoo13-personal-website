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
      className="mt-20 flex flex-col items-center gap-1"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 } }}
    >
      <span className="text-sm opacity-75">Favorite Stacks & Tools</span>

      <div className="flex items-center gap-2">
        <IconBrandTypescript
          stroke={1.25}
          className="opacity-75 hover:cursor-pointer hover:opacity-100"
        />
        <IconBrandReact
          stroke={1.25}
          className="opacity-75 hover:cursor-pointer hover:opacity-100"
        />
        <IconBrandNextjs
          stroke={1.25}
          className="opacity-75 hover:cursor-pointer hover:opacity-100"
        />
        <IconBrandTailwind
          stroke={1.25}
          className="opacity-75 hover:cursor-pointer hover:opacity-100"
        />
        <IconBrandNodejs
          stroke={1.25}
          className="opacity-75 hover:cursor-pointer hover:opacity-100"
        />
        <IconBrandMongodb
          size={24}
          stroke={1.25}
          className="opacity-75 hover:cursor-pointer hover:opacity-100"
        />

        <span className="opacity-75">|</span>

        <IconBrandVscode
          size={24}
          stroke={1.25}
          className="opacity-75 hover:cursor-pointer hover:opacity-100"
        />
        <IconBrandFigma
          size={24}
          stroke={1.25}
          className="opacity-75 hover:cursor-pointer hover:opacity-100"
        />
      </div>
    </motion.div>
  );
}
