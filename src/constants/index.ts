import type { StaticImageData } from 'next/image';
import type { IconName } from 'tech-stack-icons';
import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  hookfish,
  catalyst,
  texto,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '@/assets';

export interface NavLink {
  id: string;
  title: string;
}

export interface Service {
  title: string;
  icon: StaticImageData | string;
}

export interface Technology {
  name: string;
  icon: StaticImageData | string;
}

export type TechCategory =
  | 'Frontend & Mobile'
  | 'Backend & APIs'
  | 'Databases & Queues'
  | 'Cloud & DevOps'
  | 'Testing & QA'
  | 'AI & Dev Tools';

export interface TechStackItem {
  name: string;
  icon: IconName | 'jenkins' | 'detox';
  category: TechCategory;
  highlight?: string;
}

export interface Experience {
  title: string;
  company_name: string;
  icon: StaticImageData | string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export interface ProjectTag {
  name: string;
  color: string;
}

export interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: StaticImageData | string;
  source_code_link: string;
}

export const navLinks: NavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'tech',
    title: 'Tech Stack',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const services: Service[] = [
  {
    title: 'React Native & Mobile Engineer',
    icon: mobile,
  },
  {
    title: 'Full Stack & Web Architect',
    icon: web,
  },
  {
    title: 'Backend & API Developer',
    icon: backend,
  },
];

export const technologies: Technology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

export const techStack: TechStackItem[] = [
  // Frontend & Mobile
  { name: 'JavaScript', icon: 'js', category: 'Frontend & Mobile', highlight: 'ES6+, Async Logic & Web APIs' },
  { name: 'TypeScript', icon: 'typescript', category: 'Frontend & Mobile', highlight: 'Type-Safe Architecture' },
  { name: 'React', icon: 'react', category: 'Frontend & Mobile', highlight: 'Modern Component Systems' },
  { name: 'React Native', icon: 'react', category: 'Frontend & Mobile', highlight: '60fps Cross-Platform Apps' },
  { name: 'Next.js', icon: 'nextjs', category: 'Frontend & Mobile', highlight: 'App Router & SSR' },

  // Backend & APIs
  { name: 'Node.js', icon: 'nodejs', category: 'Backend & APIs', highlight: 'High-Concurrency Runtime' },
  { name: 'NestJS', icon: 'nestjs', category: 'Backend & APIs', highlight: 'Enterprise Microservices' },
  { name: 'Express.js', icon: 'expressjs', category: 'Backend & APIs', highlight: 'RESTful API Services' },
  { name: 'GraphQL', icon: 'graphql', category: 'Backend & APIs', highlight: 'Declarative Schemas & APIs' },
  { name: 'WebSocket', icon: 'socketio', category: 'Backend & APIs', highlight: 'Real-Time Bi-Directional' },

  // Databases & Queues
  { name: 'MongoDB', icon: 'mongodb', category: 'Databases & Queues', highlight: 'NoSQL & Aggregations' },
  { name: 'PostgreSQL', icon: 'postgresql', category: 'Databases & Queues', highlight: 'Relational & Indexing' },
  { name: 'Redis', icon: 'redis', category: 'Databases & Queues', highlight: 'In-Memory Caching & Queues' },
  { name: 'RabbitMQ', icon: 'rabbitmq', category: 'Databases & Queues', highlight: 'Message Broker & Workers' },

  // Cloud & DevOps
  { name: 'AWS Cloud', icon: 'aws', category: 'Cloud & DevOps', highlight: 'Cognito, Lambda, S3, CloudWatch' },
  { name: 'Firebase', icon: 'firebase', category: 'Cloud & DevOps', highlight: 'Auth, Firestore, Cloud Messaging' },
  { name: 'Docker', icon: 'docker', category: 'Cloud & DevOps', highlight: 'Containerization & Builds' },
  { name: 'Kubernetes', icon: 'kubernetes', category: 'Cloud & DevOps', highlight: 'Container Orchestration' },
  { name: 'Jenkins', icon: 'jenkins', category: 'Cloud & DevOps', highlight: 'Automated CI/CD Pipelines' },
  { name: 'Linux', icon: 'linux', category: 'Cloud & DevOps', highlight: 'UNIX Shell, System Admin & Kernels' },

  // Testing & QA
  { name: 'Jest', icon: 'jest', category: 'Testing & QA', highlight: 'Unit & Snapshot Testing' },
  { name: 'Cypress', icon: 'cypress', category: 'Testing & QA', highlight: 'End-to-End Test Automation' },
  { name: 'Detox', icon: 'detox', category: 'Testing & QA', highlight: 'Mobile Gray-Box Testing' },

  // AI & Dev Tools
  { name: 'Antigravity IDE', icon: 'antigravity', category: 'AI & Dev Tools', highlight: 'Agentic AI Pair-Programming & CLI' },
  { name: 'Claude Code', icon: 'claude', category: 'AI & Dev Tools', highlight: 'Anthropic AI Coding & Architecture' },
  { name: 'VS Code', icon: 'vscode', category: 'AI & Dev Tools', highlight: 'Primary IDE & Extension Ecosystem' },
  { name: 'Cursor AI', icon: 'cursor', category: 'AI & Dev Tools', highlight: 'AI-Native IDE & Code Generation' },
  { name: 'GitHub Copilot', icon: 'copilotgithub', category: 'AI & Dev Tools', highlight: 'AI Autocomplete & Chat' },
  { name: 'Postman', icon: 'postman', category: 'AI & Dev Tools', highlight: 'API Testing & Mocking' },
  { name: 'Figma', icon: 'figma', category: 'AI & Dev Tools', highlight: 'UI/UX Design Systems' },
  { name: 'Linear', icon: 'linear', category: 'AI & Dev Tools', highlight: 'Issue Tracking & Project Management' },
  { name: 'Notion', icon: 'notion', category: 'AI & Dev Tools', highlight: 'Technical Documentation & Notes' },
];

export const experiences: Experience[] = [
  {
    title: 'Frontend Engineer / Full Stack Developer',
    company_name: 'Texto Digital',
    icon: texto,
    iconBg: '#1A1C23',
    date: 'Jan 2024 - Present',
    points: [
      'Architected high-performance web applications and internal tools using Next.js, React, TypeScript, and modern state architectures.',
      'Spearheaded performance optimization workflows reducing LCP by 40% and boosting overall Core Web Vitals to 95+.',
      'Collaborated closely with cross-functional product designers and backend engineers to integrate scalable REST/GraphQL APIs and microservices.',
      'Implemented robust component libraries with rigorous TypeScript typing, reusable design systems, and automated testing pipelines.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Catalyst Media',
    icon: catalyst,
    iconBg: '#0f172a',
    date: 'July 2023 - Dec 2023',
    points: [
      'Engineered interactive, conversion-optimized client web products using React, Tailwind CSS, and Framer Motion.',
      'Implemented responsive UI architectures ensuring pixel-perfect fidelity across mobile, tablet, and desktop viewports.',
      'Integrated third-party APIs, analytics, payment gateways, and backend endpoints with robust error handling and telemetry.',
      'Streamlined build setups and asset loading strategies to deliver sub-second page transition speeds.',
    ],
  },
  {
    title: 'Frontend & React Native Developer',
    company_name: 'hookfish.in',
    icon: hookfish,
    iconBg: '#383E56',
    date: 'April 2023 - June 2023',
    points: [
      'Modernized admin portal architecture by migrating legacy PHP systems to ReactJS with streamlined pagination and lightning-fast search.',
      'Built and launched HookFish cross-platform seller app from scratch using React Native.',
      'Conducted end-to-end testing using Cypress for React web apps, guaranteeing flawless user transaction journeys.',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    testimonial:
      'Sameer has an exceptional eye for detail and delivers lightning-fast, production-grade applications with modern design aesthetics.',
    name: 'Tech Lead',
    designation: 'Engineering Manager',
    company: 'Texto Digital',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    testimonial:
      'Working with Sameer was a breeze. He translated complex requirements into intuitive, sleek user experiences that our clients loved.',
    name: 'Product Manager',
    designation: 'Product Lead',
    company: 'Catalyst Media',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    testimonial:
      'Sameer took our mobile app and admin dashboard to the next level with smooth React Native performance and flawless state management.',
    name: 'Founder',
    designation: 'CTO',
    company: 'HookFish',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
];

export const projects: Project[] = [
  {
    name: 'Elevate Golf App',
    description:
      'Full-stack golf tracking and community platform engineered with Next.js, TypeScript, Tailwind CSS, interactive performance visualizations, and real-time tournament scoring.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/samcasmmm',
  },
  {
    name: 'HookFish Mobile & Web Suite',
    description:
      'Comprehensive real estate and broker ecosystem featuring a high-concurrency seller app in React Native, real-time map discovery, and a React administrative management dashboard.',
    tags: [
      {
        name: 'react-native',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'redux',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/samcasmmm',
  },
  {
    name: '3D Interactive Portfolio 2.0',
    description:
      'Futuristic, high-fidelity developer portfolio built with Next.js 16, React 19, Three.js / React Three Fiber, Framer Motion, and Tech Stack Icon index.',
    tags: [
      {
        name: 'threejs',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/samcasmmm/portfolio2.0',
  },
];
