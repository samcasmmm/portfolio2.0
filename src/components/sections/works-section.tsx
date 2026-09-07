'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/hoc';
import { projects } from '@/constants';
import { ProjectCard } from '@/components/cards';
import { Code2, Sparkles, Layers, Cpu } from 'lucide-react';
import { fadeIn } from '@/utils/motion';

export const WorksSection: React.FC = () => {
  return (
    <section aria-labelledby='works-heading' className='relative w-full py-6'>
      {/* Background ambient glow */}
      <div className='pointer-events-none absolute top-1/2 left-1/2 h-125 w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.08)_0%,transparent_70%)]' />

      <div className='mx-auto max-w-6xl'>
        {/* Reworked Works Header */}
        <div className='mb-12 space-y-4'>
          <motion.div variants={fadeIn('down', 'tween', 0.1, 0.6)} className='flex flex-wrap items-center gap-3'>
            <div className='inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 backdrop-blur-md shadow-[0_0_15px_rgba(0,245,255,0.15)]'>
              <Code2 className='h-3.5 w-3.5 text-cyan-400' />
              <span className='font-mono text-xs font-semibold tracking-wider text-cyan-200 uppercase'>
                // 03. FEATURED SYSTEMS & APPS
              </span>
            </div>

            <div className='inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70'>
              <span className='h-1.5 w-1.5 rounded-full bg-cyan-400' />
              <span>Production Architectures</span>
            </div>
          </motion.div>

          <motion.div variants={fadeIn('up', 'tween', 0.15, 0.7)} className='space-y-3'>
            <h2
              id='works-heading'
              className='font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white'
            >
              Featured Systems & <span className='wave-gradient-text font-black'>Projects.</span>
            </h2>
            <p className='max-w-3xl text-sm sm:text-base font-light leading-relaxed text-secondary'>
              Production SaaS engines, fluid 60fps mobile applications, high-throughput microservices, and automated
              messaging infrastructure engineered for real-world reliability.
            </p>
          </motion.div>

          {/* Quick Domain Tags */}
          <motion.div variants={fadeIn('up', 'tween', 0.25, 0.6)} className='flex flex-wrap items-center gap-2 pt-1'>
            <span className='rounded-md border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-1 font-mono text-[11px] font-medium text-cyan-300'>
              High-Concurrency SaaS
            </span>
            <span className='rounded-md border border-white/5 bg-white/3 px-2.5 py-1 font-mono text-[11px] font-medium text-white/70'>
              60 FPS Native Mobile
            </span>
            <span className='rounded-md border border-white/5 bg-white/3 px-2.5 py-1 font-mono text-[11px] font-medium text-white/70'>
              Redis Caching & Queues
            </span>
            <span className='rounded-md border border-white/5 bg-white/3 px-2.5 py-1 font-mono text-[11px] font-medium text-white/70'>
              REST & Microservices
            </span>
          </motion.div>
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
