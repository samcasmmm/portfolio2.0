'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '@/styles';
import { SectionWrapper } from '@/hoc';
import { projects } from '@/constants';
import { fadeIn, textVariant } from '@/utils/motion';
import { ProjectCard } from '@/components/cards';

export const WorksSection: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-7.5'>
          Following projects showcase my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center sm:justify-start'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WorksSection, '');
