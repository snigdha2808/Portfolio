import React from 'react';
import { CodeXml, Server, Database, Terminal, Braces, Cpu } from 'lucide-react';
import { ExpertiseCard } from './ExpertiseCard';
import { expertiseData } from '../../config/snigdha';
import {type ExpertiseItem } from '../../config/types/config.types';
import './Expertise.css';
import { nameAndDescriptionData } from '../../config/snigdha';

// Map of icon names to their components
const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  CodeXml,
  Server,
  Database,
  Terminal,
  Braces,
  Cpu
};

const DynamicIcon = ({ name, className = '' }: { name: string; className?: string }) => {
  const IconComponent = iconComponents[name];
  
  if (!IconComponent) {
    console.error(`Icon '${name}' not found`);
    return null;
  }
  
  return <IconComponent className={className} />;
};

export const Expertise: React.FC = () => {
  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-header">
          <h2 className="expertise-title">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="expertise-description">
            {nameAndDescriptionData.MyExpertise}
          </p>
        </div>

        <div className="expertise-grid">
          {expertiseData.map((item: ExpertiseItem, _index: number) => {
            const icon = <DynamicIcon name={item.icon} className={item.iconClassName} />;
            return (
              <ExpertiseCard
                key={`${item.title}-${_index}`}
                title={item.title}
                description={item.description}
                icon={icon}
                tags={item.tags}
                gradient={item.gradient}
                animationDelay={_index * 100}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
