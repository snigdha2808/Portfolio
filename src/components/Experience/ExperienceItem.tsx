import { type FC } from 'react';
import styles from './ExperienceItem.module.css';
import { LucideCalendar } from 'lucide-react';
import type { TimelineItem } from '../../config/snigdha';

export interface ExperienceItemProps {
  item: TimelineItem;
}

export const ExperienceItem: FC<ExperienceItemProps> = ({ item }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemContent}>
        <LucideCalendar className={styles.calendarIcon} />
        <div>
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <p className={styles.company}>{item.company}</p>
          <p className={styles.period}>{item.period}</p>
          <ul className={styles.responsibilities}>
            {item.responsibilities.map((responsibility, index) => (
              <li key={index} className={styles.responsibilityItem}>
                <span className={styles.bulletPoint}></span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};