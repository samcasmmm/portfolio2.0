'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '@/styles';
import { services } from '@/constants';
import { fadeIn, textVariant } from '@/utils/motion';
import { SectionWrapper } from '@/hoc';
import { ServiceCard } from '@/components/cards';

export const AboutSection: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-7.5'>
        {`I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Next.js, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!`}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center sm:justify-start'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(AboutSection, 'about');
