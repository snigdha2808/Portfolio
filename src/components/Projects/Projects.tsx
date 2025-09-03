import React from 'react';
import { Briefcase } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import './Projects.css';
import { projectsData } from '../../config/snigdha';
import type { Project } from '../../config/snigdha';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <Briefcase className="projects-icon" />
          <h2 className="projects-title">Featured Projects</h2>
        </div>
        
        <div className="projects-grid">
          {projectsData.map((project: Project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              {...project}
              status={project.status as 'Completed' | 'In Progress'}
              animationDelay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
