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
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      }}
      className="w-screen pb-20 px-20 flex justify-center"
    >
      <div className="flex items-center flex-col lg:flex-row gap-5">
        {/* comunicative */}
        <div className="border border-neutral-900 rounded-xl p-3 text-white max-w-sm">
          <div className="flex items-center ">
            <IconBrandHipchat
              size={24}
              stroke={1.25}
              className="rounded-full bg-red-600 p-3 box-content min-w-fit z-10"
            />

            <h3 className="bg-neutral-900 py-2 pl-10 rounded-r-full font-bold w-full relative right-5">
              Communicative
            </h3>
          </div>

          <p className="p-3 opacity-75">
            I can communicate clearly. A must-have quality that enhances the
            entire team working experience.
          </p>
        </div>

        {/* competent */}
        <div className="border border-neutral-900 rounded-xl p-3 text-white max-w-sm">
          <div className="flex items-center ">
            <IconBriefcase2
              size={24}
              stroke={1.25}
              className="rounded-full bg-red-600 p-3 box-content min-w-fit z-10"
            />

            <h3 className="bg-neutral-900 py-2 pl-10 rounded-r-full font-bold w-full relative right-5">
              Competent
            </h3>
          </div>

          <p className="p-3 opacity-75">
            I'm dedicated. Another must-have trait that significantly enhances
            the overall working experience.
          </p>
        </div>

        {/* detail-oriented */}
        <div className="border border-neutral-900 rounded-xl p-3 text-white max-w-sm">
          <div className="flex items-center ">
            <IconStars
              size={24}
              stroke={1.25}
              className="rounded-full bg-red-600 p-3 box-content min-w-fit z-10"
            />

            <h3 className="bg-neutral-900 py-2 pl-10 rounded-r-full font-bold w-full relative right-5">
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
