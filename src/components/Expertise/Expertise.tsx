import React from 'react';
import { CodeXml, Layers, Wrench, Cpu } from 'lucide-react';
import { expertiseData } from '../../config/snigdha';
import { ExpertiseCard } from './ExpertiseCard';
import './Expertise.css';

const iconComponents: Record<string, React.ComponentType<{ size?: number }>> = {
  CodeXml,
  Layers,
  Wrench,
  Cpu,
};

export const Expertise: React.FC = () => {
  return (
    <section id="skills" className="section expertise-section">
      <div className="section-container">
        <div className="expertise-header">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern, scalable web applications
            with performance and user experience at the core.
          </p>
        </div>

        <div className="expertise-grid">
          {expertiseData.map((item, index) => {
            const Icon = iconComponents[item.icon];
            return (
              <ExpertiseCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={Icon ? <Icon size={22} /> : null}
                tags={item.tags}
                animationDelay={index * 100}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
