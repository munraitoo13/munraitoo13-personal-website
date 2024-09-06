import { IconBrandGithub } from "@tabler/icons-react";
import { MotionDiv, MotionA } from "@/components/Motion";
import { useTranslations } from "next-intl";

type Repos = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
};

export default function Project({ repos }: { repos: Repos[] }) {
  const t = useTranslations("Projects");

  return (
    <MotionDiv
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="grid gap-5 lg:grid-cols-2"
    >
      {repos.map((repo) => (
        <MotionA
          initial={{ opacity: 1, x: 0 }}
          whileHover={{ x: 5 }}
          className="flex flex-col justify-between gap-10 rounded-xl bg-neutral-50 p-10 dark:bg-neutral-900/25"
          href={repo.html_url}
          key={repo.id}
          target="_blank"
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
