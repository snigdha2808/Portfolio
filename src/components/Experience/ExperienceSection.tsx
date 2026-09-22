import React from 'react';
import { experienceData } from '../../config/snigdha';
import { ExperienceItem } from './ExperienceItem';
import './Experience.css';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle experience-subtitle">
          My professional journey building impactful web applications.
        </p>

        <div className="experience-timeline">
          {experienceData.map((item) => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
