'use client';

import React from 'react';
import { SectionWrapper } from '@/hoc';
import { projects } from '@/constants';
import { ProjectCard } from '@/components/cards';
import { RenderSectionHeader } from '@/components/shared';

export const WorksSection: React.FC = () => {
  return (
    <section aria-labelledby='works-heading' className='relative w-full py-6'>
      {/* Background ambient glow */}
      <div className='pointer-events-none absolute top-1/2 left-1/2 h-125 w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.06)_0%,transparent_70%)]' />

      <div className='mx-auto max-w-6xl'>
        {/* Header */}
        <div className='mb-12'>
          <RenderSectionHeader
            id='works-heading'
            badge='Production Work'
            title='Featured Systems & Engineering Projects.'
            highlightedWords={['Engineering', 'Systems']}
            description='Production platforms, high-concurrency SaaS engines, 60fps mobile architectures, and microservices engineered across my career.'
            wrapperClassName='mb-0 text-left'
          />
        </div>

        {/* Projects Grid */}
        <div className='flex flex-wrap gap-8 justify-center sm:justify-start items-stretch'>
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(WorksSection, 'work');
