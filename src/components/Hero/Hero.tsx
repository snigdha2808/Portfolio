import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { profileData, techStackData } from '../../config/snigdha';
import './Hero.css';

const techIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  React: SiReact,
  TypeScript: SiTypescript,
  Nextjs: SiNextdotjs,
  Tailwind: SiTailwindcss,
  Javascript: SiJavascript,
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const Hero: React.FC = () => {
  const initials = profileData.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <section id="home" className="hero">
      <div className="hero__bg-glow" />
      <div className="hero__inner section-container">
        <div className="hero__content">
          <p className="hero__greeting">{profileData.greeting}</p>
          <h1 className="hero__name">{profileData.name}</h1>
          <h2 className="hero__title">{profileData.title}</h2>
          <p className="hero__summary">{profileData.summary}</p>

          <div className="hero__actions">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>

          <div className="hero__tech">
            {techStackData.map((tech) => {
              const Icon = techIcons[tech.icon];
              return (
                <div key={tech.name} className="hero__tech-item" title={tech.name}>
                  {Icon && <Icon size={28} />}
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hero__image-wrapper">
          <div className="hero__image-glow" />
          <div className="hero__image-frame">
            <div className="hero__avatar" aria-label={profileData.name}>
              <span className="hero__avatar-initials">{initials}</span>
            </div>
          </div>
          <div className="hero__decor hero__decor--1" />
          <div className="hero__decor hero__decor--2" />
        </div>
      </div>

      <button
        className="hero__scroll"
        onClick={() => scrollTo('about')}
        aria-label="Scroll down"
      >
        <span>Scroll Down</span>
        <ChevronDown size={20} className="hero__scroll-icon" />
      </button>
    </section>
  );
};

export default Hero;
