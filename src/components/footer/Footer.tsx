import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import { nameAndDescriptionData } from '../../config/snigdha';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [firstName, setFirstName] = useState('');
  useEffect(() => {
      const getFirstName = nameAndDescriptionData.name.split(' ')[0];
      setFirstName(getFirstName);
    }, [nameAndDescriptionData.name]);
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {currentYear} {firstName}. Crafted with passion and code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;