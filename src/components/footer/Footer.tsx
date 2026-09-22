import React from 'react';
import styles from './Footer.module.css';
import { profileData } from '../../config/snigdha';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {currentYear} {profileData.name}. Crafted with passion and code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
