import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../../config/snigdha';
import './Projects.css';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle projects-subtitle">
          A selection of projects showcasing my skills in full-stack development and UI design.
        </p>

        <div className="projects-list">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} {...project} animationDelay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
