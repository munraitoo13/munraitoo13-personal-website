"use client";

import { MotionDiv, MotionA } from "@/components/common/Motion";
import { revealVariants, contentVariants } from "@/animations/motionVariants";

export function Projects({ repos }: ProjectsProps) {
  return (
    <MotionDiv
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col"
    >
      {repos.map(({ html_url, id, full_name, name, description, language }) => (
        <MotionA
          variants={revealVariants}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          href={html_url}
          key={id}
          target="_blank"
          className="mb-14 flex"
        >
          {/* divider */}
          <div className="card-divider"></div>

          {/* project */}
          <div className="flex w-full flex-col gap-2">
            {/* project repo name */}
            <small className="text-red-500">{full_name}</small>

            {/* project title */}
            <p className="section-title">{name}</p>

            {/* project description */}
            <p className="text-lg">{description}</p>

            {/* lang */}

            <small className="mr-5">{language || "None"}</small>
          </div>
        </MotionA>
      ))}
    </MotionDiv>
  );
}
