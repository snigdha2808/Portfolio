import type { TimelineItem, Project, NameAndDescription, ExpertiseItem } from './types/config.types';

export const experienceData: TimelineItem[] = [
  {
    id: '1',
    title: 'Associate Software Developer',
    company: 'InstaVC Technologies Pvt Ltd | Oct 2023 – Present | Hyderabad, India',
    period: '2023–Present',
    responsibilities: [
      'Implemented real-time communication using Socket.IO, boosting user interactivity and responsiveness in web applications.',
      'Built responsive, dynamic UIs with React.js, focusing on performance optimization and component reusability.',
      'Integrated AWS S3 for file storage, reducing file retrieval time by 40% and improving upload reliability across devices.',
      'Utilised Firebase Realtime Database to support chat features, enabling real-time data sync for 1000+ active users.',
      'Managed state with Redux and Local Storage for persistent, consistent app behavior.',
      'Collaborated with design and backend teams on 2 major projects, delivering features 10% ahead of schedule.',
      'Supported API integration for efficient frontend-backend communication.',
      'Conducted code reviews and unit testing, reducing frontend QA bugs by 15%.'
    ]
  }
];

export const educationData: TimelineItem[] = [
  {
    id: 'edu1',
    title: 'Bachelor of Technology in Computer Science',
    company: 'GLA University, Mathura, India',
    period: '2020–2024 | CGPA: 7.8',
    responsibilities: [
      'Programming Languages: Java, C++, Python',
      'Major Subjects: OS, CN, COA, DBMS, DAA',
      'Relevant Coursework: Web Development, Data Structures, Algorithms'
    ]
  },
  {
    id: 'edu2',
    title: 'Senior Secondary Education',
    company: 'Smt. Sridevi Awasiya Vidhyapeeth, Agra, India',
    period: '2019–2020',
    responsibilities: [
      'Major in Physics, Chemistry, Mathematics, and Computer Science',
      'Scored 89.6% in final examinations'
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: 'EchoFlow Chat',
    description: 'Real-time chat application using MERN stack and Socket.IO. Designed sleek UI, enabled instantaneous communication, and scalable architecture.',
    imageUrl: '/chat.png',
    tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Socket.IO'],
    githubUrl: 'https://github.com/snigdha2808/socketChatAppReact',
    status: 'Completed'
  },
  
  {
    title: 'Invoice Generator',
    description: 'Dynamic invoice generation platform integrated with Razorpay. Features real-time updates and sleek UI.',
    imageUrl: '/invoice.jpg',
    tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Razorpay'],
    githubUrl: 'https://github.com/snigdha2808/EasyInvoice',
    status: 'Completed'
  },
  {
    title: 'Panel Game',
    description: 'Interactive quiz game built on MERN stack. Supports dynamic questions and real-time scoring.',
    imageUrl: '/quiz.jpg',
    tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
    githubUrl: 'https://github.com/snigdha2808/Panel_Game',
    status: 'Completed'
  }
];

export const nameAndDescriptionData: NameAndDescription = {
  name: 'Snigdha Gupta',
  summary: 'I craft high-performance, user-centric web applications that are fast, scalable, and built on clean, maintainable code',
  title: 'FRONT-END DEVELOPER',
  githubUrl: 'https://github.com/snigdha2808',
  cvUrl: '/snigdha_resume1.pdf',
  MyExpertise: `With hands-on experience in MERN stack, real-time features, and cloud integrations, I create performance-driven web applications.`,
  linkedinUrl: 'https://www.linkedin.com/in/snigdha-gupta-9a4888243/'
};

export const expertiseData: ExpertiseItem[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, performant user interfaces using modern frameworks',
    icon: 'CodeXml',
    tags: ['ReactJS', 'TypeScript', 'Redux', 'JavaScript', 'HTML5', 'CSS3'],
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #556270 100%)',
    iconClassName: 'w-6 h-6'
  },
  {
    title: 'Backend Development',
    description: 'Developing scalable backend systems and APIs',
    icon: 'Server',
    tags: ['NodeJS', 'ExpressJS', 'Socket.IO'],
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #556270 100%)',
    iconClassName: 'w-6 h-6'
  },
  {
    title: 'Database Management',
    description: 'Managing structured and unstructured data at scale',
    icon: 'Database',
    tags: ['MongoDB', 'SQL', 'Firebase Realtime DB'],
    gradient: 'linear-gradient(135deg, #6C5CE7 0%, #556270 100%)',
    iconClassName: 'w-6 h-6'
  }
];
