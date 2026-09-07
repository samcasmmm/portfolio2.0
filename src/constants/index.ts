import type { StaticImageData } from 'next/image';
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
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
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

export const experiences: Experience[] = [
  {
    title: 'ReactJS Developer Intern',
    company_name: 'hookfish.in',
    icon: hookfish,
    iconBg: '#383E56',
    date: 'April 2023 - June 2023',
    points: [
      'I modernized the admin panel’s architecture by migrating from PHP to ReactJS, introducing streamlined pagination and robust search features, all while elevating the overall user experience with a sleek, intuitive interface.',
      'I delved into React Native, crafting HookFish, a seller app, from the ground up.',
      'Ensured reliability by conducting end-to-end testing using Cypress for a React application, validating the entire user journey for stability',
    ],
  },
  {
    title: 'Frontend & React Native Developer',
    company_name: 'hookfish.in',
    icon: hookfish,
    iconBg: '#383E56',
    date: 'July 2023 - Present',
    points: [
      'Enhanced PHP-Laravel website by implementing a role-based model, resolving bugs, and refining access controls for a smoother user experience.',
      'Optimized performance and introduced a new feature in our React Native broker app, elevating UI standards for seamless user interactions.',
      'Improved React Native app with a dynamic map view centered on user location and integrated a robust roles and permissions modal for enhanced security and streamlined access management.',
      'Boosted performance in a complex React app through memoization and code splitting, reducing load times and enhancing user interactions.',
      'Implemented lazy loading and code splitting in a React dashboard app, optimizing initial loading and improving performance by loading components based on user interactions.',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

export const projects: Project[] = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];
