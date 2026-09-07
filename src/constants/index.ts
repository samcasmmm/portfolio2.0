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
  textoproject,
  elevategolf,
  hookfishproject,
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
  location?: string;
  isCurrent?: boolean;
  skills?: string[];
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

export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  role: string;
  period: string;
  description: string;
  problemStatement: string;
  solutionOverview: string;
  keyMetrics: ProjectMetric[];
  techStackIcons: (IconName | 'jenkins' | 'detox')[];
  tags: ProjectTag[];
  image: StaticImageData | string;
  highlights: string[];
  source_code_link?: string;
  live_demo_link?: string;
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
  {
    name: 'Antigravity IDE',
    icon: 'antigravity',
    category: 'AI & Dev Tools',
    highlight: 'Agentic AI Pair-Programming & CLI',
  },
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
    title: 'SDE',
    company_name: 'Texto Digital Software Private Limited',
    icon: texto,
    iconBg: '#FFFFFF',
    date: 'May 2026 – Present',
    location: 'Full-time • Navi Mumbai, India',
    isCurrent: true,
    skills: ['React Native', 'Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'WhatsApp API', 'Redis'],
    points: [
      'Architecting high-performance web applications and internal tools using Next.js, React, TypeScript, and modern state architectures.',
      'Spearheading performance optimization workflows reducing LCP by 40% and boosting overall Core Web Vitals to 95+.',
      'Collaborating closely with cross-functional product designers and backend engineers to integrate scalable REST/GraphQL APIs and microservices.',
      'Implementing robust component libraries with rigorous TypeScript typing, reusable design systems, and automated testing pipelines.',
    ],
  },
  {
    title: 'App Developer',
    company_name: 'Catalyst Media Integrated LLP',
    icon: catalyst,
    iconBg: '#FFFFFF',
    date: 'Feb 2025 – May 2026',
    location: 'Full-time • Mumbai, India',
    isCurrent: false,
    skills: ['React Native', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'REST APIs', 'Redux'],
    points: [
      'Architected and shipped responsive, high-performance web applications and native mobile interfaces with React Native & React.',
      'Developed modular UI components, integrated third-party APIs, and enhanced state management architectures for seamless user journeys.',
      'Optimized rendering cycles, bundle size, and animations using Framer Motion and native hardware-accelerated drivers.',
      'Collaborated closely with product stakeholders and design teams to deliver pixel-perfect client experiences.',
    ],
  },
  {
    title: 'MERN & React Native Developer',
    company_name: 'HookFish (hookfish.in)',
    icon: hookfish,
    iconBg: '#FFFFFF',
    date: 'June 2023 – Feb 2025',
    location: 'Full-time • Hybrid',
    isCurrent: false,
    skills: ['React Native', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'Redis', 'Tailwind CSS'],
    points: [
      'Engineered and scaled the HookFish cross-platform mobile app using React Native, delivering seamless buyer and seller transactions.',
      'Architected scalable backend microservices, REST APIs, and database schemas with Node.js, Express.js, and MongoDB.',
      'Integrated Redis caching mechanisms and optimized database indexes to reduce API latency across high-traffic endpoints.',
      'Maintained 99.9% uptime and streamlined admin portal operations with real-time analytics and fast data querying.',
    ],
  },
  {
    title: 'MERN Stack Developer (Intern)',
    company_name: 'HookFish (hookfish.in)',
    icon: hookfish,
    iconBg: '#FFFFFF',
    date: 'April 2023 – June 2023',
    location: 'Internship • Hybrid',
    isCurrent: false,
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'Cypress E2E'],
    points: [
      'Modernized admin portal architecture by migrating legacy PHP workflows to React.js with responsive pagination and fast search.',
      'Developed reusable UI components and integrated foundational REST APIs for user authentication and data management.',
      'Conducted end-to-end automated testing using Cypress for web applications, guaranteeing reliable user transaction flows.',
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
    slug: 'texto-whatsapp-automation',
    name: 'Texto Automation Engine',
    subtitle: 'WhatsApp Business API SaaS Platform & Chatbot Flow Builder',
    role: 'React Native Developer & SDE',
    period: 'May 2026 – Present',
    description:
      'Engineered core communication modules for Texto, a high-concurrency SaaS platform tailored for Indian businesses. Automated WhatsApp customer engagement via drag-and-drop chatbot flow builders, live lead pipelines, and scheduled broadcast engines.',
    problemStatement:
      'Indian SMBs faced fragmented lead tracking and manual customer messaging over WhatsApp, leading to delayed response times and high drop-off rates during campaign spikes.',
    solutionOverview:
      'Architected a multi-tenant Node.js + React SaaS application powered by WhatsApp Business API integration, Redis-backed queue scheduling, and real-time WebSocket dashboard sync.',
    keyMetrics: [
      { label: 'Broadcast Throughput', value: '10k+ msgs/min', subtext: 'Redis Queue Worker' },
      { label: 'Platform Availability', value: '99.9% Uptime', subtext: 'High Concurrency Node.js' },
      { label: 'Lead Conversion', value: '+45% Growth', subtext: 'Automated Bot Flows' },
    ],
    techStackIcons: ['react', 'nodejs', 'postgresql', 'redis', 'tailwindcss', 'socketio', 'js', 'typescript'],
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'whatsapp-api', color: 'pink-text-gradient' },
    ],
    image: textoproject,
    highlights: [
      'Architected drag-and-drop chatbot flow builder empowering non-technical users to build multi-step conversational funnels.',
      'Engineered Redis broadcast queue manager handling thousands of concurrent message dispatches with automatic retry logic.',
      'Integrated official WhatsApp Business API webhooks with real-time WebSocket status updates on live agent dashboards.',
      'Optimized PostgreSQL index structures and connection pooling to deliver instantaneous query speeds across millions of message logs.',
    ],
    source_code_link: 'https://github.com/samcasmmm',
    live_demo_link: 'https://github.com/samcasmmm',
  },
  {
    slug: 'elevate-golf-app',
    name: 'Elevate Golf Mobile Platform',
    subtitle: '60fps AI Swing Analysis & Real-Time Video Annotations',
    role: 'Lead React Native Developer',
    period: 'Feb 2025 – Feb 2026',
    description:
      'Built a React Native mobile coaching platform engineered for split-second 60fps video playback analysis, real-time drawing annotations, and AI performance metrics.',
    problemStatement:
      'Mobile video playback in coaching applications suffered from frame dropping and latency during drawing overlays, rendering micro-movement swing inspections inaccurate.',
    solutionOverview:
      'Optimized React Native native video decoding using Video-SDK, canvas overlays, 3-tier Firebase RBAC auth, Node.js microservices, and AWS CloudFront CDN media delivery.',
    keyMetrics: [
      { label: 'Playback Frame Rate', value: '60 FPS', subtext: 'Zero Jitter Annotation' },
      { label: 'Media Load Latency', value: '< 2s', subtext: 'AWS CloudFront CDN' },
      { label: 'System Uptime SLA', value: '99.5%', subtext: 'Firebase & AWS S3' },
    ],
    techStackIcons: ['react', 'nodejs', 'expressjs', 'mysql', 'firebase', 'aws', 'tailwindcss'],
    tags: [
      { name: 'react-native', color: 'blue-text-gradient' },
      { name: 'firebase', color: 'green-text-gradient' },
      { name: 'aws-cloudfront', color: 'pink-text-gradient' },
    ],
    image: elevategolf,
    highlights: [
      'Engineered 60fps React Native video player with sub-frame pause, slow-motion scrubbing, and touch drawing canvas overlays.',
      'Implemented Firebase Auth (OAuth 2.0/JWT) with 3-tier Role-Based Access Control (RBAC) supporting 500+ active user sessions.',
      'Optimized media pipeline with AWS S3 server-side encryption and CloudFront CDN signed URL delivery achieving sub-2s video startup.',
      'Delivered robust Node.js REST APIs for recording player progress, telemetry data, and coaching feedback loops.',
    ],
    source_code_link: 'https://github.com/samcasmmm',
    live_demo_link: 'https://github.com/samcasmmm',
  },
  {
    slug: 'hookfish-real-estate-suite',
    name: 'HookFish Mobile & Cloud Suite',
    subtitle: 'Real Estate Broker Mobile App & High-Throughput MERN Backend',
    role: 'MERN Stack Developer & React Native Engineer',
    period: 'Apr 2023 – Feb 2025',
    description:
      'Full-stack real estate ecosystem featuring a React Native mobile broker application with geolocation map discovery, administrative management dashboard, and automated image pipelines.',
    problemStatement:
      'Legacy PHP system suffered from slow API response times (2.1s), manual property flyer generation (6s), and security vulnerabilities due to lack of granular access control.',
    solutionOverview:
      'Refactored backend architecture to Node.js/Express, implemented Redis caching, migrated admin to React, built React Native seller app, and secured platform with 8-tier RBAC.',
    keyMetrics: [
      { label: 'API Response Speed', value: '2.1s → 1.0s', subtext: '52% Latency Reduction' },
      { label: 'Throughput', value: '1,200 req/sec', subtext: 'Serving 10k+ MAU' },
      { label: 'Image Cache Speed', value: '6s → 100ms', subtext: '98% Redis Speedup' },
    ],
    techStackIcons: ['react', 'nodejs', 'expressjs', 'mongodb', 'redis', 'cypress', 'js'],
    tags: [
      { name: 'react-native', color: 'blue-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
      { name: 'redis', color: 'pink-text-gradient' },
    ],
    image: hookfishproject,
    highlights: [
      'Architected 12+ RESTful Node.js/Express APIs with MongoDB connection pooling serving 10k+ monthly active users at 99.7% SLA.',
      'Optimized Puppeteer property flyer generation from 6s to 100ms using Redis caching & queue management (1,000+ images/hr).',
      'Designed 8-tier granular RBAC security model, eliminating 100% of unauthorized access incidents and reducing support tickets by 55%.',
      'Integrated dynamic React Native map view centered on user geolocation with real-time property boundary overlays.',
      'Enforced end-to-end reliability by executing automated Cypress test suites across critical user transaction funnels.',
    ],
    source_code_link: 'https://github.com/samcasmmm',
    live_demo_link: 'https://github.com/samcasmmm',
  },
];
