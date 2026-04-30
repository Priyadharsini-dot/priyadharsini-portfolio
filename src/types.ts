export interface CaseStudySection {
  id: string;
  title: string;
  content: string;
  image?: string;
  imageAlt?: string;
  fallback?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  coverImage: string;
  coverFallback?: string;
  description: string;
  overview: string;
  context: string;
  myRole: string;
  targetUsers: string;
  problem: string;
  research: string;
  painPoints: string[];
  userJourney?: string;
  userFlow?: string;
  uiDesign: string;
  finalUiImages?: string[];
  iterations?: string;
  solution: string;
  outcome: {
    metrics: string[];
    summary: string;
  };
  behanceLink: string;
  sections: CaseStudySection[];
}

export type View = 'home' | 'project';
