import React, { useEffect, useState } from 'react';
import { nameAndDescriptionData } from '../../config/snigdha';
import './Header.css';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Header: React.FC = () => {
  const [nameInitials, setNameInitials] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const getNameInitials = nameAndDescriptionData.name.split(' ')[0].split('')[0] + nameAndDescriptionData.name.split(' ')[1].split('')[0];
    setNameInitials(getNameInitials);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <header className="header">
      <div className="header-content">
        <span 
          className="header-name"
          onClick={() => scrollToSection('about')}
          style={{ cursor: 'pointer' }}
        >
          {isMobile ? nameInitials : nameAndDescriptionData.name}
        </span>
        <nav className="header-nav">
          <a href="#about" onClick={(e) => handleNavClick(e, 'expertise')}>About</a>
          {/* <a href="#expertise" onClick={(e) => handleNavClick(e, 'about')}>Expertise</a> */}
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
