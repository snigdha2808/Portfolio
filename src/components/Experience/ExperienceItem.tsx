import React from 'react';
import type { TimelineItem } from '../../config/types/config.types';
import './Experience.css';

interface ExperienceItemProps {
  item: TimelineItem;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ item }) => {
  const initial = item.companyInitial || item.company.charAt(0);

  return (
    <div className="experience-item">
      <div className="experience-item-marker">
        <div className="experience-item-dot" />
        <div className="experience-item-line" />
      </div>

      <div className="experience-item-body">
        <div className="experience-item-header">
          <div className="experience-item-company-row">
            <div className="experience-item-logo">{initial}</div>
            <div>
              <h3 className="experience-item-company">{item.company}</h3>
              <p className="experience-item-title">{item.title}</p>
              {item.location && (
                <p className="experience-item-location">{item.location}</p>
              )}
            </div>
          </div>
          <span className="experience-item-period">{item.period}</span>
        </div>

        <ul className="experience-item-responsibilities">
          {item.responsibilities.map((resp, i) => (
            <li key={i}>{resp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
