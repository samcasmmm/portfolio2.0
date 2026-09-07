'use client';

import React, { useState } from 'react';
import StackIcon, { type IconName } from 'tech-stack-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '@/hoc';
import { techStack, type TechCategory, type TechStackItem } from '@/constants';
import { RenderSectionHeader } from '@/components/shared';

const CATEGORIES: ('All' | TechCategory)[] = [
  'All',
  'Frontend & Mobile',
  'Backend & APIs',
  'Databases & Queues',
  'Cloud & DevOps',
  'Testing & QA',
  'AI & Dev Tools',
];

const TechIconRenderer: React.FC<{ icon: IconName | 'jenkins' | 'detox' }> = ({ icon }) => {

  if (icon === 'jenkins') {
    return (
      <svg viewBox='0 0 128 178' className='h-10 w-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(211,56,51,0.6)]' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M64 0C39.2 0 19.1 20.1 19.1 44.9c0 11.7 4.5 22.3 11.8 30.3L1.2 113.9c-1.6 1.6-1.6 4.1 0 5.7l12.9 12.9c1.6 1.6 4.1 1.6 5.7 0l30.1-30.1c4.5 2.1 9.4 3.2 14.2 3.2 24.8 0 44.9-20.1 44.9-44.9S88.8 0 64 0z' fill='#D33833' />
        <path d='M64 17.8c-15 0-27.2 12.2-27.2 27.2 0 7.1 2.7 13.5 7.2 18.4L23.7 83.7c-.6.6-.6 1.6 0 2.1l6.4 6.4c.6.6 1.6.6 2.1 0l20.3-20.3c4.9 4.5 11.3 7.2 18.4 7.2 15 0 27.2-12.2 27.2-27.2S79 17.8 64 17.8z' fill='#FFFFFF' />
        <circle cx='53' cy='40' r='5' fill='#335061' />
        <circle cx='75' cy='40' r='5' fill='#335061' />
        <path d='M53 58c3.3 6 18.8 6 22 0' stroke='#335061' strokeWidth='3' strokeLinecap='round' />
      </svg>
    );
  }

  if (icon === 'detox') {
    return (
      <svg viewBox='0 0 100 100' className='h-10 w-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,245,255,0.6)]' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='25' y='10' width='50' height='80' rx='10' stroke='#00f5ff' strokeWidth='4' fill='#0d0e17' />
        <line x1='42' y1='18' x2='58' y2='18' stroke='#ffffff' strokeWidth='2.5' strokeLinecap='round' />
        <circle cx='50' cy='80' r='3.5' fill='#00f5ff' />
        <path d='M38 46l8 8 16-16' stroke='#38ef7d' strokeWidth='4.5' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    );
  }

  return (
    <StackIcon
      name={icon as IconName}
      variant='dark'
      className='h-10 w-10 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(145,94,255,0.6)]'
    />
  );
};

export const TechSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | TechCategory>('All');

  const filteredTech: TechStackItem[] =
    selectedCategory === 'All'
      ? techStack
      : techStack.filter((t) => t.category === selectedCategory);

  return (
    <section aria-labelledby='tech-heading' className='relative w-full py-8'>
      {/* Background ambient glow */}
      <div className='pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(145,94,255,0.08)_0%,transparent_70%)]' />

      <div className='mx-auto max-w-6xl'>
        {/* Header */}
        <div className='mb-10'>
          <RenderSectionHeader
            id='tech-heading'
            badge='Technical Capabilities'
            title='Core Technologies & Tooling.'
            highlightedWords={['Technologies']}
            description='Production-grade technologies across frontend, backend microservices, real-time engines, cloud infrastructure, and automated testing.'
            wrapperClassName='mb-0 text-left'
          />
        </div>

        {/* Category Filter Tabs */}
        <div className='flex flex-wrap items-center gap-2 mb-10'>
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'All'
                ? techStack.length
                : techStack.filter((t) => t.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border border-[#915EFF] bg-[#915EFF]/20 text-white shadow-[0_0_16px_rgba(145,94,255,0.35)]'
                    : 'border border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    isSelected
                      ? 'bg-[#915EFF] text-white'
                      : 'bg-white/10 text-white/40 group-hover:text-white'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid of 22 Tech Stack Cards */}
        <motion.div
          layout
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-4'
        >
          <AnimatePresence mode='popLayout'>
            {filteredTech.map((tech) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={tech.name}
                className='group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0d0e17]/90 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#915EFF]/50 hover:bg-[#121424] hover:shadow-[0_0_24px_rgba(145,94,255,0.18)]'
              >
                {/* Radial hover spotlight */}
                <div className='pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,rgba(145,94,255,0.15)_0%,transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

                {/* Top bar: Category Badge */}
                <div className='flex items-center justify-between'>
                  <span className='font-mono text-[9px] tracking-wider text-white/30 uppercase transition-colors group-hover:text-[#915EFF]/80'>
                    {tech.category}
                  </span>
                  <div className='h-1.5 w-1.5 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-[#915EFF]' />
                </div>

                {/* Center: Tech Icon in glowing dark container */}
                <div className='my-4 flex flex-col items-center justify-center'>
                  <div className='relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-2.5 transition-transform duration-300 group-hover:scale-110 group-hover:border-[#915EFF]/30 group-hover:bg-[#915EFF]/5'>
                    <TechIconRenderer icon={tech.icon} />
                  </div>

                  {/* Tech Title */}
                  <h3 className='mt-3.5 font-mono text-sm font-semibold tracking-wide text-white/90 transition-colors group-hover:text-white'>
                    {tech.name}
                  </h3>
                </div>

                {/* Bottom: Highlight details */}
                {tech.highlight && (
                  <div className='mt-2 border-t border-white/5 pt-2 text-center'>
                    <p className='font-mono text-[10px] leading-tight text-white/40 transition-colors group-hover:text-white/70'>
                      {tech.highlight}
                    </p>
                  </div>
                )}

                {/* Bottom accent glow bar with origin-center expansion */}
                <div className='absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#915EFF] via-cyan-400 to-[#915EFF] scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100' />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(TechSection, 'tech');
