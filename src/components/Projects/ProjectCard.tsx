import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  status: string;
  animationDelay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  githubUrl,
  animationDelay = 0,
}) => {
  return (
    <div
      className="project-card"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="project-card-image">
        <img src={imageUrl} alt={title} loading="lazy" />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <div className="project-card-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-card-tag">{tag}</span>
          ))}
        </div>
        <p className="project-card-desc">{description}</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
          aria-label={`View ${title} on GitHub`}
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
    </div>
  );
};
