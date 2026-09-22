export interface TimelineItem {
  id: string;
  title: string;
  company: string;
  companyInitial?: string;
  location?: string;
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

export interface ProfileData {
  name: string;
  greeting: string;
  title: string;
  summary: string;
  bio: string[];
  location: string;
  experienceYears: string;
  email: string;
  phone: string;
  githubUrl: string;
  cvUrl: string;
  linkedinUrl: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
}

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedinUrl: string;
}
