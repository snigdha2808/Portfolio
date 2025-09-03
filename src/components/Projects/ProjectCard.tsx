import React from 'react';
import { Github } from 'lucide-react';
import './Projects.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  status: 'Completed' | 'In Progress';
  animationDelay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  githubUrl,
  status,
  animationDelay = 0,
}) => {
  return (
    <div 
      className="project-card"
      style={{
        animationDelay: `${animationDelay}ms`,
      }}
    >
      <div className="project-image-container">
        <img
          src={imageUrl}
          alt={title}
          className="project-image"
          loading="lazy"
        />
      </div>
      <div className="project-content">
        <h3 className="project-name">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
          >
            <Github className="project-link-icon" />
            GitHub
          </a>
          <span className="project-status">{status}</span>
        </div>
      </div>
    </div>
  );
};
