import React from 'react';
import './Expertise.css';

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  gradient: string;
  animationDelay?: number;
}

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  title,
  description,
  icon,
  tags,
  gradient,
  animationDelay = 0,
}) => {
  const delayClass = `animate-delay-${Math.min(animationDelay, 400)}`;
  
  return (
    <div 
      className={`expertise-card ${delayClass}`}
      style={{
        animationDelay: `${animationDelay}ms`,
      }}
    >
      <div 
        className="expertise-card-content"
        style={{
          '--gradient': gradient,
        } as React.CSSProperties}
      >
        <div 
          className="expertise-card-icon"
          style={{
            background: gradient,
          }}
        >
          {icon}
        </div>
        <h3 className="expertise-card-title">{title}</h3>
        <p className="expertise-card-description">{description}</p>
        <div className="expertise-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
