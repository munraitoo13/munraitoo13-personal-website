type Repos = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
};

type ProjectsProps = {
  repos: Repos[];
};
