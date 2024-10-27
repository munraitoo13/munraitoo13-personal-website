type Repos = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
};

type ProjectsProps = {
  repos: Repos[];
};
