import { useState } from 'react';
import Experience from './Experience';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="experience" className="py-16">
      <Experience 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </section>
  );
};

export default ExperienceSection;
