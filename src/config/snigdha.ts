import type {
  TimelineItem,
  Project,
  ProfileData,
  ValueItem,
  TechStackItem,
  ExpertiseItem,
  CertificationItem,
  ContactInfo,
} from './types/config.types';

export const profileData: ProfileData = {
  name: 'Snigdha Gupta',
  greeting: "Hi, I'm",
  title: 'Frontend Engineer',
  summary:
    'I craft high-performance, user-centric web applications that are fast, scalable, and built on clean, maintainable code.',
  bio: [
    'I am a passionate Frontend Engineer with hands-on experience building modern web applications using React, TypeScript, and the MERN stack. I love turning complex problems into elegant, intuitive user experiences.',
    'With expertise in real-time features, cloud integrations, and performance optimization, I create applications that are not just functional but delightful to use. I thrive in collaborative environments and am always eager to learn new technologies.',
  ],
  location: 'Hyderabad, India',
  experienceYears: '1+ Years',
  email: 'snigdhagupta2802@gmail.com',
  phone: '+91 98765 43210',
  githubUrl: 'https://github.com/snigdha2808',
  cvUrl: '/snigdha_resume1.pdf',
  linkedinUrl: 'https://www.linkedin.com/in/snigdha-gupta-9a4888243/',
};

export const valuesData: ValueItem[] = [
  { title: 'Clean Code', description: 'Writing maintainable, scalable, and well-documented code.' },
  { title: 'Better UI', description: 'Crafting intuitive interfaces with attention to detail.' },
  { title: 'Great Experiences', description: 'Building products users love to interact with.' },
];

export const techStackData: TechStackItem[] = [
  { name: 'React', icon: 'React' },
  { name: 'TypeScript', icon: 'TypeScript' },
  { name: 'Next.js', icon: 'Nextjs' },
  { name: 'Tailwind', icon: 'Tailwind' },
  { name: 'JavaScript', icon: 'Javascript' },
];

export const expertiseData: ExpertiseItem[] = [
  {
    title: 'Frontend',
    description: 'Building responsive, performant user interfaces',
    icon: 'CodeXml',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'HTML5', 'CSS3'],
  },
  {
    title: 'UI & Architecture',
    description: 'State management and API integration patterns',
    icon: 'Layers',
    tags: ['Redux', 'Context API', 'REST APIs', 'Socket.IO', 'Responsive Design'],
  },
  {
    title: 'Tools & Platforms',
    description: 'Development workflow and deployment tools',
    icon: 'Wrench',
    tags: ['Git', 'GitHub', 'VS Code', 'Vite', 'AWS S3', 'Firebase'],
  },
  {
    title: 'Other',
    description: 'Additional technologies and integrations',
    icon: 'Cpu',
    tags: ['Socket.io', 'MongoDB', 'Node.js', 'Express.js', 'Razorpay'],
  },
];

export const projectsData: Project[] = [
  {
    title: 'EchoFlow Chat',
    description:
      'Real-time chat application using MERN stack and Socket.IO. Designed sleek UI, enabled instantaneous communication, and scalable architecture.',
    imageUrl: '/chat.png',
    tags: ['ReactJS', 'NodeJS', 'MongoDB', 'Socket.IO'],
    githubUrl: 'https://github.com/snigdha2808/socketChatAppReact',
    status: 'Completed',
  },
  {
    title: 'Invoice Generator',
    description:
      'Dynamic invoice generation platform integrated with Razorpay. Features real-time updates and a sleek, user-friendly interface.',
    imageUrl: '/invoice.jpg',
    tags: ['ReactJS', 'NodeJS', 'MongoDB', 'Razorpay'],
    githubUrl: 'https://github.com/snigdha2808/EasyInvoice',
    status: 'Completed',
  },
  {
    title: 'Panel Game',
    description:
      'Interactive quiz game built on MERN stack. Supports dynamic questions and real-time scoring with an engaging UI.',
    imageUrl: '/quiz.jpg',
    tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
    githubUrl: 'https://github.com/snigdha2808/Panel_Game',
    status: 'Completed',
  },
];

export const experienceData: TimelineItem[] = [
  {
    id: '1',
    title: 'Associate Software Developer',
    company: 'InstaVC Technologies Pvt Ltd',
    companyInitial: 'IV',
    location: 'Hyderabad, India',
    period: 'Oct 2023 – Present',
    responsibilities: [
      'Implemented real-time communication using Socket.IO, boosting user interactivity and responsiveness.',
      'Built responsive, dynamic UIs with React.js, focusing on performance optimization and component reusability.',
      'Integrated AWS S3 for file storage, reducing file retrieval time by 40%.',
      'Utilised Firebase Realtime Database to support chat features for 1000+ active users.',
      'Managed state with Redux and Local Storage for persistent, consistent app behavior.',
      'Collaborated with design and backend teams on 2 major projects, delivering features 10% ahead of schedule.',
    ],
  },
];

export const educationData: TimelineItem[] = [
  {
    id: 'edu1',
    title: 'Bachelor of Technology in Computer Science',
    company: 'GLA University, Mathura, India',
    companyInitial: 'GL',
    period: '2020 – 2024 | CGPA: 7.8',
    responsibilities: [
      'Programming Languages: Java, C++, Python',
      'Major Subjects: OS, CN, COA, DBMS, DAA',
      'Relevant Coursework: Web Development, Data Structures, Algorithms',
    ],
  },
  {
    id: 'edu2',
    title: 'Senior Secondary Education',
    company: 'Smt. Sridevi Awasiya Vidhyapeeth, Agra, India',
    companyInitial: 'SS',
    period: '2019 – 2020 | 89.6%',
    responsibilities: [
      'Major in Physics, Chemistry, Mathematics, and Computer Science',
    ],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert1',
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    year: '2023',
  },
  {
    id: 'cert2',
    title: 'JavaScript (Intermediate)',
    issuer: 'HackerRank',
    year: '2023',
  },
  {
    id: 'cert3',
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    year: '2022',
  },
];

export const contactInfo: ContactInfo = {
  email: profileData.email,
  phone: profileData.phone,
  location: profileData.location,
  linkedinUrl: profileData.linkedinUrl,
};

export const inspirationalQuote =
  'Continuous learning is the key to growth in the ever-evolving world of technology.';

// Legacy exports for backward compatibility
export const nameAndDescriptionData = profileData;
