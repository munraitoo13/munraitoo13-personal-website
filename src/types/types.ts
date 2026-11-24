export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  locale: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  readingTimeMinutes: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export interface CuratedProject {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  metrics: string[];
  stack: string[];
  repoUrl: string | null;
  liveUrl: string | null;
  isPrivateRepo: boolean;
  status: string;
}
