'use client';

import React from 'react';
import { motion } from 'framer-motion';
import StackIcon, { type IconName } from 'tech-stack-icons';
import type { Service } from '@/constants';
import { fadeIn } from '@/utils/motion';
import { CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

export interface ServiceCardProps extends Service {
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  indexNumber,
  title,
  subtitle,
  icon,
  description,
  capabilities,
  stackIcons,
  tags,
  gradient,
  accentBorder,
  accentText,
  badge,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.12, 0.75)}
      className='group relative h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-[#0c0d18]/90 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/40 hover:bg-[#101226]/95 hover:shadow-[0_16px_36px_-10px_rgba(255,255,255,0.08)]'
    >
      {/* Dynamic Gradient Ambient Glow on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          gradient || 'from-purple-500/15 via-transparent to-transparent'
        } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      {/* Ambient Top Light Beam */}
      <div className='pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-white/5 blur-3xl transition-all duration-300 group-hover:bg-white/10' />

      <div className='relative z-10 space-y-5'>
        {/* Top Bar: Index Counter & Badge */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span className={`font-mono text-xs font-bold tracking-wider ${accentText}`}>
              // {indexNumber || `0${index + 1}`}
            </span>
          </div>

          <div className='flex items-center gap-2'>
            {badge && (
              <span className='rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] font-semibold text-white/90 backdrop-blur-md transition-colors group-hover:border-white/20 group-hover:bg-white/10'>
                {badge}
              </span>
            )}
          </div>
        </div>

        {/* Title & Subtitle Header */}
        <div className='space-y-1.5'>
          {subtitle && (
            <span className={`font-mono text-xs font-semibold uppercase tracking-wider ${accentText}`}>
              {subtitle}
            </span>
          )}
          <h3 className='font-mono text-lg font-bold tracking-tight text-white transition-colors group-hover:text-white'>
            {title}
          </h3>
        </div>

        {/* Overview Description */}
        <p className='text-xs sm:text-sm font-light leading-relaxed text-secondary'>
          {description}
        </p>

        {/* Key Architecture Capabilities */}
        {capabilities && capabilities.length > 0 && (
          <div className='space-y-2 pt-1 border-t border-white/5'>
            <div className='font-mono text-[11px] font-semibold text-white/50 uppercase tracking-wider'>
              Core Deliverables:
            </div>
            <ul className='space-y-1.5'>
              {capabilities.map((cap) => (
                <li key={cap} className='flex items-center gap-2 font-mono text-xs text-white/80'>
                  <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 ${accentText}`} />
                  <span className='leading-tight'>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Bottom Row: Tech Stack Icons & Action Indicator */}
      <div className='relative z-10 pt-4 mt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2'>
        {/* Stack Icons from tech-stack-icons */}
        <div className='flex flex-wrap items-center gap-1.5 sm:gap-2'>
          {stackIcons &&
            stackIcons.map((tech) => (
              <div
                key={tech}
                title={tech}
                className='flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-1 transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:scale-110'
              >
                <StackIcon name={tech as IconName} variant='dark' className='h-3.5 w-3.5 sm:h-4 sm:w-4' />
              </div>
            ))}
        </div>

        <div className={`flex items-center gap-1 font-mono text-[10px] sm:text-[11px] font-semibold transition-transform duration-200 group-hover:translate-x-0.5 ${accentText}`}>
          <span>Spec Ready</span>
          <ArrowUpRight className='h-3 w-3' />
        </div>
      </div>

      {/* Bottom Glow Strip on Hover */}
      <div className='absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
    </motion.div>
  );
};

export default ServiceCard;
