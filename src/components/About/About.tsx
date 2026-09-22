import React from 'react';
import { MapPin, Briefcase, Mail, Phone, Linkedin } from 'lucide-react';
import { profileData, valuesData } from '../../config/snigdha';
import './About.css';

const details = [
  { icon: MapPin, label: 'Location', value: profileData.location },
  { icon: Briefcase, label: 'Experience', value: profileData.experienceYears },
  { icon: Mail, label: 'Email', value: profileData.email, href: `mailto:${profileData.email}` },
  { icon: Phone, label: 'Phone', value: profileData.phone },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'View Profile',
    href: profileData.linkedinUrl,
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <div className="section-container">
        <div className="about__grid">
          <div className="about__left">
            <h2 className="section-title">Who I Am</h2>
            {profileData.bio.map((paragraph, i) => (
              <p key={i} className="about__bio">{paragraph}</p>
            ))}

            <ul className="about__details">
              {details.map((item) => (
                <li key={item.label} className="about__detail">
                  <span className="about__detail-icon">
                    <item.icon size={18} />
                  </span>
                  <div>
                    <span className="about__detail-label">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="about__detail-value about__detail-link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="about__detail-value">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="about__right">
            <div className="about__values-card card">
              <ul className="about__values-list">
                {valuesData.map((value) => (
                  <li key={value.title} className="about__value-item">
                    <span className="about__value-bullet" />
                    <div>
                      <h3 className="about__value-title">{value.title}</h3>
                      <p className="about__value-desc">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="about__wave" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
