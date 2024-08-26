export default async function getRepos() {
  const res = await fetch("https://api.github.com/users/munraitoo13/repos", {
    next: {
      revalidate: 30, // refresh data every 30 seconds
    },
  });

  if (!res.ok) throw new Error("Failed to fetch repos");

  return res.json();
}
