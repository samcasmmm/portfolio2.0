'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Experience } from '@/constants';
import { fadeIn } from '@/utils/motion';
import { MapPin } from 'lucide-react';

export interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLast?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
  isLast = false,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
      className='relative flex items-start gap-4 sm:gap-8 group'
    >
      {/* Left Timeline Spine & Company Logo Tile */}
      <div className='flex flex-col items-center shrink-0'>
        {/* Crisp Pure-White Company Logo Tile */}
        <div className='relative z-10 flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] ring-2 ring-white/30 transition-all duration-300 group-hover:scale-105 group-hover:ring-2 group-hover:ring-[#915EFF]'>
          <div className='relative h-[62%] w-[62%] flex items-center justify-center'>
            <Image
              src={experience.icon}
              alt={experience.company_name}
              fill
              sizes='72px'
              className='object-contain'
            />
          </div>

          {/* Active indicator dot for current role */}
          {experience.isCurrent && (
            <span className='absolute top-0.5 right-0.5 flex h-3.5 w-3.5'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
              <span className='relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-[#050816] bg-emerald-500' />
            </span>
          )}
        </div>

        {/* Continuous Connecting Line */}
        {!isLast && (
          <div className='h-full w-[2px] min-h-[140px] bg-gradient-to-b from-white/20 via-white/10 to-transparent my-2' />
        )}
      </div>

      {/* Right Content Card */}
      <div className='flex-1 pb-12 sm:pb-16'>
        <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d18]/90 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#0f1122]/90 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)]'>
          {/* Top Meta Bar */}
          <div className='flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4 mb-4'>
            <div>
              <span className='font-mono text-xs font-bold tracking-widest text-[#915EFF] uppercase'>
                {experience.company_name}
              </span>
              {experience.location && (
                <div className='flex items-center gap-1.5 mt-0.5 font-mono text-[11px] text-white/40'>
                  <MapPin className='h-3 w-3 text-white/30' />
                  <span>{experience.location}</span>
                </div>
              )}
            </div>

            {/* Date Pill */}
            <div className='flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 font-mono text-xs font-semibold text-white/80'>
              {experience.isCurrent && (
                <span className='h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]' />
              )}
              <span>{experience.date}</span>
            </div>
          </div>

          {/* Role Title */}
          <h3 className='font-mono text-xl sm:text-2xl font-bold text-white tracking-tight'>
            {experience.title}
          </h3>

          {/* Accomplishment Bullet Points */}
          <ul className='mt-4 space-y-3'>
            {experience.points.map((point, i) => (
              <li
                key={`exp-point-${i}`}
                className='flex items-start gap-3 text-xs sm:text-sm font-light leading-relaxed text-secondary'
              >
                <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(34,211,238,0.5)]' />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack Tags */}
          {experience.skills && experience.skills.length > 0 && (
            <div className='mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center gap-2'>
              <span className='font-mono text-[10px] font-semibold text-white/40 uppercase tracking-widest mr-1'>
                Stack:
              </span>
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className='rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] font-medium text-white/80 hover:border-[#915EFF]/40 hover:bg-[#915EFF]/10 hover:text-white transition-colors'
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;

