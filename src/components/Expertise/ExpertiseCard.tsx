import React from 'react';
import './Expertise.css';

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  animationDelay?: number;
}

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  title,
  description,
  icon,
  tags,
  animationDelay = 0,
}) => {
  return (
    <div
      className="expertise-card"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="expertise-card-icon">{icon}</div>
      <h3 className="expertise-card-title">{title}</h3>
      <p className="expertise-card-description">{description}</p>
      <div className="expertise-tags">
        {tags.map((tag) => (
          <span key={tag} className="tech-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};
