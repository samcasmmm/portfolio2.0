'use client';

import React, { useMemo } from 'react';
import { experiences } from '@/constants';
import { SectionWrapper } from '@/hoc';
import { ExperienceCard } from '@/components/cards';
import { WorkHeader } from './work-header';

export const ExperienceSection: React.FC = () => {
  const currentRole = useMemo(() => experiences.find((e) => e.isCurrent), []);
  const currentRoleText = currentRole
    ? `${currentRole.title} @ ${currentRole.company_name}`
    : 'SDE @ Texto Digital Software Private Limited';

  return (
    <section aria-labelledby='experience-heading' className='relative w-full py-6'>
      {/* Ambient background glow */}
      <div className='pointer-events-none absolute top-1/2 left-1/2 h-[550px] w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(145,94,255,0.08)_0%,transparent_70%)]' />

      <div className='mx-auto max-w-4xl relative z-10'>
        {/* Reimagined Header */}
        <div className='mb-12'>
          <WorkHeader currentRoleText={currentRoleText} />
        </div>

        {/* Reimagined Timeline Stream */}
        <div className='relative mt-8'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company_name}-${experience.date}-${index}`}
              index={index}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(ExperienceSection, 'work');



