"use client";

import {
  IconBrandHipchat,
  IconBriefcase2,
  IconStars,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function Qualities() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      }}
      className="flex w-full justify-center px-20 pb-20"
    >
      <div className="flex flex-col items-center gap-5 lg:flex-row">
        {/* comunicative */}
        <div className="max-w-sm rounded-xl border border-neutral-900 p-3 text-white">
          <div className="flex items-center">
            <IconBrandHipchat
              size={24}
              stroke={1.25}
              className="z-10 box-content min-w-fit rounded-full bg-red-600 p-3"
            />

            <h3 className="relative right-5 w-full rounded-r-full bg-neutral-900 py-2 pl-10 font-bold">
              Communicative
            </h3>
          </div>

          <p className="p-3 opacity-75">
            I can communicate clearly. A must-have quality that enhances the
            entire team working experience.
          </p>
        </div>

        {/* competent */}
        <div className="max-w-sm rounded-xl border border-neutral-900 p-3 text-white">
          <div className="flex items-center">
            <IconBriefcase2
              size={24}
              stroke={1.25}
              className="z-10 box-content min-w-fit rounded-full bg-red-600 p-3"
            />

            <h3 className="relative right-5 w-full rounded-r-full bg-neutral-900 py-2 pl-10 font-bold">
              Competent
            </h3>
          </div>

          <p className="p-3 opacity-75">
            I'm dedicated. Another must-have trait that significantly enhances
            the overall working experience.
          </p>
        </div>

        {/* detail-oriented */}
        <div className="max-w-sm rounded-xl border border-neutral-900 p-3 text-white">
          <div className="flex items-center">
            <IconStars
              size={24}
              stroke={1.25}
              className="z-10 box-content min-w-fit rounded-full bg-red-600 p-3"
            />

            <h3 className="relative right-5 w-full rounded-r-full bg-neutral-900 py-2 pl-10 font-bold">
              Detail-oriented
            </h3>
          </div>

          <p className="p-3 opacity-75">
            I have good coding and security practises. A very important quality
            that ensures the success of the final product.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
