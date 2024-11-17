"use client";
import { MotionDiv, MotionA } from "@/components/common/Motion";
import { revealVariants, contentVariants } from "@/animations/motionVariants";
import { useTranslations } from "next-intl";
import { useRepoTopics } from "@/hooks/useRepoTopics";

export function Projects({ repos }: ProjectsProps) {
  const t = useTranslations("Projects");

  return (
    <MotionDiv
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col"
    >
      {repos.map((repo) => (
        <MotionA
          variants={revealVariants}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          href={repo.html_url}
          key={repo.id}
          target="_blank"
          className="mb-14 flex"
        >
          {/* divider */}
          <div className="card-divider"></div>

          {/* project */}
          <div className="flex w-full flex-col gap-2">
            {/* project repo name */}
            <small className="text-red-500">{repo.full_name}</small>

            {/* project title */}
            <p className="section-title">{repo.name}</p>

            {/* project description */}
            <p className="text-lg">{repo.description}</p>

            {/* tags and lang */}
            <div className="mt-5 flex flex-wrap items-center gap-1">
              <small className="mr-5">
                {repo.language ? repo.language : "Markdown"}
              </small>

              {useRepoTopics(repo.name)?.map((topic) => (
                <span key={topic} className="tag-badge">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </MotionA>
      ))}
    </MotionDiv>
  );
}
