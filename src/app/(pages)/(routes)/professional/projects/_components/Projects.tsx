import Project from "./Project";

export default async function Projects() {
  async function getRepos() {
    const res = await fetch("https://api.github.com/users/munraitoo13/repos", {
      next: {
        revalidate: 30, // refresh data every 30 seconds
      },
    });

    if (!res.ok) throw new Error("Failed to fetch repos");

    return res.json();
  }
  const repos = await getRepos();

  return (
    <div className="flex flex-col gap-5">
      {repos.map((repo: any) => {
        return (
          <Project
            key={repo.id}
            href={repo.html_url}
            repo={repo.full_name}
            projectTitle={repo.name}
            projectDescription={repo.description}
            language={repo.language}
          />
        );
      })}
    </div>
  );
}
