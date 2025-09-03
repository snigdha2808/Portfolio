import { type FC, useState, useEffect, useRef } from 'react';
import styles from './Experience.module.css';
import { ExperienceItem } from './ExperienceItem';
import { LucideBriefcase, LucideGraduationCap } from 'lucide-react';
import { experienceData, educationData } from '../../config/snigdha';

interface ExperienceProps {
  activeTab: 'experience' | 'education';
  onTabChange: (tab: 'experience' | 'education') => void;
}

const Experience: FC<ExperienceProps> = ({ activeTab, onTabChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`${styles.container} ${isVisible ? styles.animateOnScroll : ''}`}
    >
      <div className={styles.tabContainer}>
        <span
          className={`${styles.tabButton} ${activeTab === 'experience' ? styles.activeTab : ''}`}
          onClick={() => onTabChange('experience')}
        >
          <LucideBriefcase className={styles.tabIcon} />
          Experience
          {activeTab === 'experience' && <div className={styles.activeIndicator}></div>}
        </span>
        <span
          className={`${styles.tabButton} ${activeTab === 'education' ? styles.activeTab : ''}`}
          onClick={() => onTabChange('education')}
        >
          <LucideGraduationCap className={styles.tabIcon} />
          Education
          {activeTab === 'education' && <div className={styles.activeIndicator}></div>}
        </span>
      </div>

      <div className={styles.content}>
        {activeTab === 'experience' && (
          <div className={styles.experienceList}>
            {experienceData.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        )}
        
        {activeTab === 'education' && (
          <div className={styles.experienceList}>
            {educationData.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;