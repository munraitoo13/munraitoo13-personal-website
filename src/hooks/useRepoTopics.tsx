import { useEffect, useState } from "react";

export function useRepoTopics(repoName: string) {
  const [topics, setTopics] = useState([]);

  const fetchTopics = async () => {
    const res = await fetch(
      `https://api.github.com/repos/munraitoo13/${repoName}/topics`,
    );
    const data = await res.json();
    setTopics(data.names);
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  return topics;
}
