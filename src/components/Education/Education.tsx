import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { educationData, certificationsData, inspirationalQuote } from '../../config/snigdha';
import './Education.css';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="education-grid">
          <div className="education-card card">
            <div className="education-card-header">
              <GraduationCap size={22} className="education-card-icon" />
              <h3 className="education-card-title">Education</h3>
            </div>
            <ul className="education-list">
              {educationData.map((item) => (
                <li key={item.id} className="education-item">
                  <h4 className="education-item-degree">{item.title}</h4>
                  <p className="education-item-school">{item.company}</p>
                  <p className="education-item-period">{item.period}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="education-card card">
            <div className="education-card-header">
              <Award size={22} className="education-card-icon" />
              <h3 className="education-card-title">Certifications</h3>
            </div>
            <ul className="cert-list">
              {certificationsData.map((cert) => (
                <li key={cert.id} className="cert-item">
                  <div>
                    <h4 className="cert-item-title">{cert.title}</h4>
                    <p className="cert-item-issuer">{cert.issuer}</p>
                  </div>
                  <span className="cert-item-year">{cert.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote className="education-quote">
          <span className="education-quote-mark">"</span>
          {inspirationalQuote}
        </blockquote>
      </div>
    </section>
  );
};

export default Education;
