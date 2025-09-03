import type { TimelineItem, Project, NameAndDescription, TechItem, ExpertiseItem } from './types/config.types';

export const experienceData: TimelineItem[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Advertt Online Services Pvt. Ltd.',
    period: '2021-2022',
    responsibilities: [
      'Created mobile applications utilizing React Native and Redux for efficient state management',
      'Increased user engagement by 30% through a rewards-based advertising model.',
      'Designed and executed a tailored application for a dynamic startup, optimizing operational processes and boosting overall productivity.'
    ]
  },
  {
    id: '2',
    title: 'Software Engineer',
    company: 'Advertt Online Services Pvt. Ltd.',
    period: '2021-2022',
    responsibilities: [
      'Created mobile applications utilizing React Native and Redux for efficient state management',
      'Increased user engagement by 30% through a rewards-based advertising model.',
      'Designed and executed a tailored application for a dynamic startup, optimizing operational processes and boosting overall productivity.'
    ]
  },
  {
    id: '3',
    title: 'Software Engineer',
    company: 'Advertt Online Services Pvt. Ltd.',
    period: '2021-2022',
    responsibilities: [
      'Created mobile applications utilizing React Native and Redux for efficient state management',
      'Increased user engagement by 30% through a rewards-based advertising model.',
      'Designed and executed a tailored application for a dynamic startup, optimizing operational processes and boosting overall productivity.'
    ]
  }
];

export const educationData: TimelineItem[] = [
  {
    id: 'edu1',
    title: 'Bachelor of Technology in Computer Science',
    company: 'Your University',
    period: '2017-2021',
    responsibilities: [
      'Specialized in Software Development',
      'Graduated with First Class Honors',
      'Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems'
    ]
  },
  {
    id: 'edu2',
    title: 'Senior Secondary Education',
    company: 'Your School',
    period: '2015-2017',
    responsibilities: [
      'Major in Science with Computer Science',
      'Scored XX% in final examinations',
      'Participated in various technical competitions'
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: 'SHOWZY',
    description: 'A ticket-booking web app built using Next.js, Tailwind CSS, and the MERN stack with PostgreSQL. It allows users to book tickets for IPL matches and concerts, ensuring a seamless booking experience.',
    imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=1000',
    tags: ['Next.js', 'Tailwind CSS', 'React', 'Node.js', 'PostgreSQL', 'Express', 'RabbitMQ', 'Redis'],
    githubUrl: 'https://github.com/Aditya-system32',
    status: 'In Progress'
  },
  {
    title: 'DUBBLY',
    description: 'Dubbly is a web app that automatically generates highly accurate subtitles and voice dubbing for videos in multiple languages using AI.',
    imageUrl: 'https://raw.githubusercontent.com/Aditya-system32/amazon-clone/refs/heads/master/public/Dubbly%20web%20ss.png',
    tags: ['Next.js', 'AssemblyAI', 'Tailwind CSS', 'React', 'Node.js', 'PostgreSQL', 'Express'],
    githubUrl: 'https://github.com/Aditya-system32',
    status: 'In Progress'
  },
  {
    title: 'Ad-Rebate',
    description: 'A mobile application that provides incentives such as rewards, coupons, and gifts in return for engaging with local advertisements.',
    imageUrl: 'https://raw.githubusercontent.com/Aditya-system32/Ad-Rebate/refs/heads/master/assets/images/logoBlack.png',
    tags: ['React', 'React-Native', 'Firebase', 'Framer', 'Redux'],
    githubUrl: 'https://github.com/Aditya-system32/Ad-Rebate',
    status: 'Completed'
  },
];

export const nameAndDescriptionData: NameAndDescription = {
  name: 'Snigdha Gupta',
  summary: 'I specialize in building fast, interactive, and scalable web applications with clean, maintainable code.',
  title: 'FRONT-END DEVELOPER',
  githubUrl: 'https://github.com/snigdha2808',
  cvUrl: '/snigdha_resume1.pdf',
  MyExpertise: 'With hands-on experience in MERN stack, real-time features, and cloud integrations, I create performance-driven web applications.',
  linkedinUrl: 'https://www.linkedin.com/in/snigdha-gupta-9a4888243/'
};

export const expertiseData: ExpertiseItem[] = [
  {
    title: 'Frontend Development',
    description: 'Crafting responsive and intuitive user interfaces with modern frameworks',
    icon: 'CodeXml',
    tags: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Redux'],
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #556270 100%)',
    iconClassName: 'w-6 h-6'
  },
  {
    title: 'Backend Development',
    description: 'Building scalable and robust server-side applications',
    icon: 'Server',
    tags: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #556270 100%)',
    iconClassName: 'w-6 h-6'
  },
  {
    title: 'Database Management',
    description: 'Designing and optimizing database architectures',
    icon: 'Database',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'],
    gradient: 'linear-gradient(135deg, #6C5CE7 0%, #556270 100%)',
    iconClassName: 'w-6 h-6'
  },
];

export const additionalTech: TechItem[] = [
  { icon: 'Terminal', text: 'Git & CI/CD', className: 'w-4 h-4' },
  { icon: 'Braces', text: 'Jest & Testing', className: 'w-4 h-4' },
  { icon: 'Cpu', text: 'Docker', className: 'w-4 h-4' },
];
