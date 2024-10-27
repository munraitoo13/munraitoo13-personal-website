import { IconBrandGithub } from "@tabler/icons-react";
import { MotionDiv, MotionA } from "@/components/common/Motion";
import { revealVariants, contentVariants } from "@/animations/motionVariants";
import { useTranslations } from "next-intl";

export function Projects({ repos }: ProjectsProps) {
  const t = useTranslations("Projects");

  return (
    <MotionDiv
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-5 lg:grid-cols-2"
    >
      {repos.map((repo) => (
        <MotionA
          variants={revealVariants}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          href={repo.html_url}
          key={repo.id}
          target="_blank"
          className="flex flex-col justify-between gap-10 rounded-xl bg-neutral-50 p-10 dark:bg-neutral-900/25"
        >
          {/* project */}
          <div className="flex flex-col gap-3">
            {/* project repo name */}
            <p className="text-xs font-bold text-red-600">{repo.full_name}</p>

            {/* project title */}
            <p className="text-4xl font-extrabold text-neutral-900 dark:text-white">
              {repo.name}
            </p>

            {/* project description */}
            <p className="text-lg">{repo.description}</p>
          </div>

          {/* github availability */}
          <div className="flex w-fit items-center gap-3 rounded-full bg-neutral-100 px-5 py-3 dark:bg-neutral-900/25">
            <IconBrandGithub stroke={1.25} />
            {t("github")}
          </div>
        </MotionA>
      ))}
    </MotionDiv>
  );
}
