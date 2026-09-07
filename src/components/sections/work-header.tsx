'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Terminal, Smartphone, ChevronRight, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { fadeIn } from '@/utils/motion';

export interface WorkHeaderProps {
  currentRoleText?: string;
}

export const WorkHeader: React.FC<WorkHeaderProps> = ({
  currentRoleText = 'SDE @ Texto Digital Software Private Limited',
}) => {
  return (
    <div className='relative w-full space-y-8'>
      {/* Top Meta & Live Status Row */}
      <motion.div
        variants={fadeIn('down', 'tween', 0.1, 0.6)}
        className='flex flex-wrap items-center justify-between gap-3'
      >
        {/* Terminal Category Tag */}
        <div className='inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 backdrop-blur-md shadow-[0_0_15px_rgba(145,94,255,0.15)]'>
          <Terminal className='h-3.5 w-3.5 text-[#915EFF]' />
          <span className='font-mono text-xs font-semibold tracking-wider text-[#dfd9ff] uppercase'>
            // 02. CAREER_TRACK_RECORD
          </span>
        </div>

        {/* Live Active Role Status Badge */}
        <div className='inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-mono font-medium backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.12)]'>
          <span className='relative flex h-2 w-2'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
          </span>
          <span className='text-emerald-300 font-semibold'>CURRENTLY ACTIVE:</span>
          <span className='text-white/90'>{currentRoleText}</span>
        </div>
      </motion.div>

      {/* Main Headline & Context Narrative */}
      <motion.div variants={fadeIn('up', 'tween', 0.15, 0.7)} className='space-y-3'>
        <h2 className='font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white'>
          Work & Professional <span className='wave-gradient-text font-black'>Experience.</span>
        </h2>
        <p className='max-w-3xl text-sm sm:text-base font-light leading-relaxed text-secondary'>
          A chronological track record of shipping resilient, high-concurrency SaaS platforms, fluid 60fps mobile
          applications, and enterprise design systems across industry roles.
        </p>
      </motion.div>

      {/* 2 Detailed & Tailored Career Highlights Cards */}
      <motion.div variants={fadeIn('up', 'tween', 0.25, 0.7)} className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-2'>
        {/* Card 1: Engineering Journey & Milestones */}
        <div className='group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d18]/80 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#915EFF]/40 hover:bg-[#111326]/90 hover:shadow-[0_16px_36px_-10px_rgba(145,94,255,0.18)]'>
          {/* Ambient Purple Glow */}
          <div className='absolute inset-0 bg-linear-to-br from-purple-500/15 via-indigo-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

          <div className='relative z-10 space-y-5'>
            {/* Top Bar */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#915EFF]'>
                <Briefcase className='h-4 w-4' />
                <span>Engineering Journey</span>
              </div>
              <span className='rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#dfd9ff]'>
                4 Milestones
              </span>
            </div>

            {/* Value & Tagline */}
            <div>
              <div className='font-mono text-2xl sm:text-3xl font-bold tracking-tight text-white'>
                3+ Years Production
              </div>
              <p className='mt-1 font-mono text-xs text-secondary'>HookFish → Catalyst Media → Texto Digital</p>
            </div>

            {/* Tailored Career Progression Bullets */}
            <div className='space-y-2.5 pt-2 border-t border-white/5'>
              <div className='flex items-start gap-2.5 text-xs text-secondary leading-relaxed'>
                <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#915EFF] shadow-[0_0_6px_#915EFF]' />
                <span>
                  <strong className='text-white font-medium'>Texto Digital (SDE):</strong> Scaled high-concurrency SaaS
                  apps, optimized Core Web Vitals to 95+, and built modular component libraries.
                </span>
              </div>
              <div className='flex items-start gap-2.5 text-xs text-secondary leading-relaxed'>
                <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]' />
                <span>
                  <strong className='text-white font-medium'>Catalyst Media (App Dev):</strong> Engineered responsive
                  client products with fluid animations & sub-second page transitions.
                </span>
              </div>
              <div className='flex items-start gap-2.5 text-xs text-secondary leading-relaxed'>
                <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 shadow-[0_0_6px_#818cf8]' />
                <span>
                  <strong className='text-white font-medium'>HookFish (MERN & Native):</strong> Built cross-platform
                  mobile app from scratch, created REST APIs, and modernized admin architecture.
                </span>
              </div>
            </div>

            {/* Footer Tags */}
            <div className='flex flex-wrap items-center gap-2 pt-2'>
              <span className='rounded-md border border-white/5 bg-white/3 px-2 py-0.5 font-mono text-[10px] text-white/70'>
                Full-Time Track Record
              </span>
              <span className='rounded-md border border-white/5 bg-white/3 px-2 py-0.5 font-mono text-[10px] text-white/70'>
                High-Concurrency SaaS
              </span>
              <span className='rounded-md border border-white/5 bg-white/3 px-2 py-0.5 font-mono text-[10px] text-white/70'>
                Mumbai & Hybrid
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Core Architecture & Specialization */}
        <div className='group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d18]/80 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-[#111326]/90 hover:shadow-[0_16px_36px_-10px_rgba(0,245,255,0.18)]'>
          {/* Ambient Cyan Glow */}
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-emerald-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

          <div className='relative z-10 space-y-5'>
            {/* Top Bar */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400'>
                <Smartphone className='h-4 w-4' />
                <span>Core Specialization</span>
              </div>
              <span className='rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-cyan-200'>
                Full-Stack & Mobile
              </span>
            </div>

            {/* Value & Tagline */}
            <div>
              <div className='font-mono text-2xl sm:text-3xl font-bold tracking-tight text-white'>
                React Native & MERN
              </div>
              <p className='mt-1 font-mono text-xs text-secondary'>
                Cross-Platform Mobile Apps & High-Performance Full-Stack Systems
              </p>
            </div>

            {/* Tailored Architecture Highlights */}
            <div className='space-y-2.5 pt-2 border-t border-white/5'>
              <div className='flex items-start gap-2.5 text-xs text-secondary leading-relaxed'>
                <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]' />
                <span>
                  <strong className='text-white font-medium'>Cross-Platform Mobile:</strong> React Native, 60fps
                  gesture-driven interfaces, hardware acceleration, and seamless app store releases.
                </span>
              </div>
              <div className='flex items-start gap-2.5 text-xs text-secondary leading-relaxed'>
                <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]' />
                <span>
                  <strong className='text-white font-medium'>Modern Frontend:</strong> Next.js (App Router), React 19,
                  TypeScript, Tailwind CSS, and Framer Motion interactive systems.
                </span>
              </div>
              <div className='flex items-start gap-2.5 text-xs text-secondary leading-relaxed'>
                <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]' />
                <span>
                  <strong className='text-white font-medium'>Backend & Data:</strong> Node.js, Express.js microservices,
                  MongoDB schema design, Redis cache layers, and Cypress E2E.
                </span>
              </div>
            </div>

            {/* Footer Tags */}
            <div className='flex flex-wrap items-center gap-2 pt-2'>
              <span className='rounded-md border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 font-mono text-[10px] text-cyan-300'>
                React Native
              </span>
              <span className='rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-white/70'>
                Next.js / TypeScript
              </span>
              <span className='rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-white/70'>
                Node.js & Redis
              </span>
              <span className='rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-white/70'>
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkHeader;
