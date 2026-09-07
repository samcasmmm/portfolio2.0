'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/constants';
import { fadeIn } from '@/utils/motion';
import { ArrowUpRight } from 'lucide-react';

export interface ProjectCardProps extends Project {
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  slug,
  name,
  subtitle,
  description,
  keyMetrics,
  tags,
  image,
}) => {
  const topMetric = keyMetrics && keyMetrics.length > 0 ? keyMetrics[0] : null;

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.3, 0.75)}>
      <div className='relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d18]/90 p-5 backdrop-blur-md sm:w-90 w-full h-full'>
        <div>
          {/* Card Image Banner */}
          <div className='relative w-full h-52 rounded-xl overflow-hidden border border-white/5'>
            <Image src={image} alt={name} fill sizes='(max-width: 768px) 100vw, 360px' className='object-cover' />

            {/* Ambient Image Gradient Overlay */}
            <div className='absolute inset-0 bg-linear-to-t from-[#0c0d18] via-transparent to-black/30' />

            {/* Top Metric Badge */}
            {topMetric && (
              <div className='absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-[#915EFF]/40 bg-black/70 px-3 py-1 font-mono text-[10px] font-bold text-[#00f5ff] backdrop-blur-md shadow-[0_0_12px_rgba(0,245,255,0.3)]'>
                <span className='h-1.5 w-1.5 rounded-full bg-cyan-400' />
                <span>
                  {topMetric.label}: {topMetric.value}
                </span>
              </div>
            )}
          </div>

          {/* Card Content */}
          <div className='mt-4 space-y-2'>
            <span className='font-mono text-[10px] font-semibold tracking-widest text-[#915EFF] uppercase'>
              {subtitle || 'Production Engineering'}
            </span>

            <h3 className='font-mono text-xl font-bold text-white'>{name}</h3>

            <p className='text-xs leading-relaxed font-light text-secondary line-clamp-3'>{description}</p>
          </div>
        </div>

        {/* Card Footer: Tags & Detail Case Study Link */}
        <div className='mt-5 space-y-4 border-t border-white/5 pt-4'>
          {/* Tags */}
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span key={`${name}-${tag.name}`} className={`font-mono text-[11px] ${tag.color}`}>
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Link to Detail Page */}
          <Link
            href={`/projects/${slug}`}
            className='inline-flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-xs font-semibold text-white hover:border-[#915EFF] hover:bg-[#915EFF]/20 hover:text-cyan-300 transition-all'
          >
            <span>Read Case Study</span>
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
