export type Project = {
  id: number;
  name: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  language: string;
  topics: string[];
  featured: boolean;

  links: {
    github: string;
    live: string;
  };
};