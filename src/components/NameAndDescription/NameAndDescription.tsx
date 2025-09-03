import './NameAndDescription.css';
import { FaGithub, FaDownload } from 'react-icons/fa';
import { nameAndDescriptionData } from '../../config/snigdha';
import { useEffect, useState } from 'react';

export const NameAndDescription = () => {
  const [firstName, setFirstName] = useState('');
useEffect(() => {
    const getFirstName = nameAndDescriptionData.name.split(' ')[0];
    setFirstName(getFirstName);
  }, [nameAndDescriptionData.name]);
  return (
    <div className="name-and-description">
    <h2 className="developer-title">{nameAndDescriptionData.title}</h2>
    <span className="Hello">Hey, I'm <span className="gradientTxt">{firstName}</span></span>
    <p>{nameAndDescriptionData.summary}</p>
    <div className="buttons-container">
      <a 
        href={nameAndDescriptionData.githubUrl} 
        className="action-button github-button"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <FaGithub size={20} />
        <span>GitHub Profile</span>
      </a>
      <a 
        href={nameAndDescriptionData.cvUrl} 
        className="action-button download-button"
        target="_blank"
        rel="noopener noreferrer"
        download
        style={{ textDecoration: 'none' }}
      >
        <FaDownload size={20} />
        <span>Download CV</span>
      </a>
    </div>
    </div>
  );
};

// CSS styles
NameAndDescription.displayName = 'NameAndDescription';

export default NameAndDescription;