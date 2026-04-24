export interface CaseStudySection {
  id: string;
  title: string;
  content: string;
  image?: string;
  imageAlt?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  coverImage: string;
  description: string;
  overview: string;
  problem: string;
  impact: string;
  behanceLink: string;
  sections: CaseStudySection[];
}

export type View = 'home' | 'project';
