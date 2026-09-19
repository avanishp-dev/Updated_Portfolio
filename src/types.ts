export type ProjectCategory = 'all' | 'full-stack' | 'agentic-ai' | 'enterprise' | 'open-source';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  company: string;
  category: 'full-stack' | 'agentic-ai' | 'enterprise' | 'open-source';
  role: string;
  timeline: string;
  status: string;
  statusType: 'shipped' | 'handoff' | 'concept' | 'award';
  tools: string[];
  team: string[];
  coverImage: string;
  tags: string[];
  summary: string;
  externalUrl?: string;
  underNda?: boolean;
  ndaMessage?: string;
  hookQuestion?: string;
  overview?: string;
  context?: {
    headline: string;
    body: string[];
  };
  marketAnalysis?: {
    headline: string;
    body: string;
    points?: string[];
  };
  keyInsights?: {
    title: string;
    description: string;
  }[];
  problem?: string;
  solutions?: {
    title: string;
    description: string;
    points?: string[];
    image?: string;
  }[];
  outcome?: {
    headline: string;
    body: string[];
  };
  galleryImages?: string[];
  videoUrl?: string;
}

export interface TimelineStory {
  age: string;
  phase: string;
  title: string;
  description: string;
  badgeColor: string;
  iconType: 'craft' | 'lego' | 'bridge' | 'product' | 'code';
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlight?: string;
}

export interface CommunityItem {
  organization: string;
  role: string;
  period: string;
}

export interface CommunityPhoto {
  title: string;
  caption: string;
  imageUrl: string;
  rotation: number;
}
