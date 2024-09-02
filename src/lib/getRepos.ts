export default async function getRepos() {
  
  });

  if (!res.ok) throw new Error("Failed to fetch repos");

  return res.json();
}
