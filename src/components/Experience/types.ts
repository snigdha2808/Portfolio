export interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
    icon?: React.ReactNode;
  }
  
  export interface ExperienceProps {
    activeTab: 'experience' | 'education';
    onTabChange: (tab: 'experience' | 'education') => void;
    items: ExperienceItem[];
  }