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
  myRole: string;
  targetUsers: string;
  problem: string;
  research: string;
  painPoints: string[];
  persona: {
    name: string;
    role: string;
    goal: string;
    frustration: string;
    image: string;
  };
  userJourney: string;
  wireframes: string;
  uiDesign: string;
  solution: string;
  outcome: {
    metrics: string[];
    summary: string;
  };
  sections: CaseStudySection[];
}

export type View = 'home' | 'project';
