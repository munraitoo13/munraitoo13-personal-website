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

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface AcademicProject {
  name: string;
  description: string;
  stack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  metric: string;
  projects: AcademicProject[];
}

export interface SpokenLanguage {
  name: string;
  level: string;
}

export interface ExperiencesData {
  summary: string;
  work: WorkExperience[];
  education: EducationItem;
  languages: SpokenLanguage[];
}

export interface SkillCategory {
  id: string;
  index: string;
  title: string;
  description: string;
  items: string[];
}
