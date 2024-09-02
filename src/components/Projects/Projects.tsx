"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";

type Repos = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
};

export default function Project() {
  const t = useTranslations("Projects");
  const [repos, setRepos] = useState<Repos[]>([]);

  useEffect(() => {
    fetchRepos();
  });

  async function fetchRepos() {
    const res = await fetch("https://api.github.com/users/munraitoo13/repos");
    setRepos(await res.json());
  }

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {repos.map((repo) => (
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex flex-col justify-between gap-10 rounded-xl bg-neutral-900/25 p-10"
          href={repo.html_url}
          key={repo.id}
          target="_blank"
          whileHover={{ x: 5 }}
        >
          {/* project */}
          <div className="flex flex-col gap-3">
            {/* project repo name */}
            <p className="text-xs text-red-600">{repo.full_name}</p>

            {/* project title */}
            <p className="text-4xl font-bold text-white">{repo.name}</p>

            {/* project description */}
            <p className="text-lg">{repo.description}</p>
          </div>

          {/* github availability */}
          <div className="flex w-fit items-center gap-3 rounded-full bg-neutral-900/25 px-5 py-3 font-bold">
            <IconBrandGithubFilled />
            {t("github")}
          </div>
        </motion.a>
      ))}
    </div>
  );
}
