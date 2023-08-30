import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import ErrorBoundary from './ErrorBoundary';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className=''>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Sameer</span>
          </h1>
          <p className={`${styles.heroSubText} text-white`}>
            I'm MERN Stack Developer Crafting Seamless User Experiences,
            <br className='sm:block hidden' />
            Passionate about Code, Create, Collaborate
          </p>
        </div>
      </div>
      {/* <ErrorBoundary fallback={<p>Something went wrong</p>}> */}
      <ComputersCanvas />
      {/* </ErrorBoundary> */}
    </section>
  );
};

export default Hero;
