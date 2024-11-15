export type PageType = "about" | "projects" | "experience" | "skills";

export type ChapterType = {
  index: string;
  key: PageType;
  label: string;
};

export type TechStackType = { logo: string; name: string; style?: React.CSSProperties };

export type RepoLink = { label: string; link: string };

export type ProjectType = {
  id: number;
  title: string;
  slug: string;
  coverPhoto: string;
  company: string;
  oneLiner: string;
  description: string;
  duration: string;
  primaryTechnologies: TechStackType[];
  techStack: TechStackType[];
  link?: string;
  repoLink?: RepoLink[];
  contributions?: string[];
};

export type SlugList = {
  [key: string]: number;
};

export type WorkExperienceType = {
  title: string;
  company: string;
  location: string;
  duration: string;
  logo: string;
};

export type SkillType = TechStackType;
