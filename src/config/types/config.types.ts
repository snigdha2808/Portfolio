export interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  status: 'In Progress' | 'Completed' | 'On Hold' | 'Planned';
  demoUrl?: string;
}

export interface NameAndDescription {
  name: string;
  summary: string;
  title: string;
  githubUrl: string;
  cvUrl: string;
  MyExpertise: string;
  linkedinUrl?: string;
}

export interface TechItem {
  icon: string;
  text: string;
  className?: string;
}

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  gradient: string;
  iconClassName?: string;
}
