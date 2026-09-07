'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/constants';
import { fadeIn } from '@/utils/motion';
import { SectionWrapper } from '@/hoc';
import { ServiceCard } from '@/components/cards';
import {
  Terminal,
  Sparkles,
  Layers,
  Cpu,
  ArrowRight,
  Code2,
  CheckCircle2,
  Zap,
  Globe2,
  ShieldCheck,
} from 'lucide-react';

const engineeringStats = [
  {
    label: 'Industry Experience',
    value: '3+ Years',
    subtext: 'Shipping Production Systems',
    icon: Code2,
    color: 'text-[#915EFF]',
    borderColor: 'border-purple-500/20',
    bgColor: 'bg-purple-500/5',
  },
  {
    label: 'Production User Reach',
    value: '10k+ MAU',
    subtext: 'High-Concurrency Workloads',
    icon: Globe2,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
    bgColor: 'bg-cyan-500/5',
  },
  {
    label: 'Backend Optimization',
    value: '52% Faster',
    subtext: 'Redis & Connection Pooling',
    icon: Zap,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    bgColor: 'bg-emerald-500/5',
  },
  {
    label: 'Platform Reliability',
    value: '99.7% SLA',
    subtext: 'High-Availability Architecture',
    icon: ShieldCheck,
    color: 'text-pink-400',
    borderColor: 'border-pink-500/20',
    bgColor: 'bg-pink-500/5',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <div className='relative w-full space-y-10 sm:space-y-12 md:space-y-14 py-2 sm:py-4'>
      {/* Background ambient radial glow */}
      <div className='pointer-events-none absolute top-1/4 left-1/2 h-[450px] w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(145,94,255,0.08)_0%,transparent_70%)]' />

      {/* Top Header & Meta Badge */}
      <div className='space-y-3 sm:space-y-4'>
        <motion.div
          variants={fadeIn('down', 'tween', 0.1, 0.6)}
          className='flex flex-wrap items-center justify-between gap-2.5 sm:gap-3'
        >
          <div className='inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 backdrop-blur-md shadow-[0_0_15px_rgba(145,94,255,0.15)]'>
            <Terminal className='h-3.5 w-3.5 text-[#915EFF]' />
            <span className='font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-[#dfd9ff] uppercase'>
              // 01. INTRODUCTION
            </span>
          </div>

          <div className='inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] sm:text-xs text-white/70'>
            <span className='h-1.5 w-1.5 rounded-full bg-[#915EFF]' />
            <span>Full-Stack &amp; Mobile Architecture</span>
          </div>
        </motion.div>

        <motion.div variants={fadeIn('up', 'tween', 0.15, 0.7)} className='space-y-2 sm:space-y-3'>
          <h2 className='font-mono text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white'>
            Engineering Philosophy &amp; <span className='wave-gradient-text font-black'>Overview.</span>
          </h2>
        </motion.div>
      </div>

      {/* Main 2-Column Overview: Narrative on Left, Developer Terminal Manifest on Right */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 0.7)}
        className='grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch'
      >
        {/* Left Column: Narrative */}
        <div className='lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6'>
          <div className='space-y-3 sm:space-y-4 text-secondary text-xs sm:text-sm md:text-base font-light leading-relaxed'>
            <p className='text-white/90 text-sm sm:text-base md:text-lg font-normal leading-relaxed'>
              I am a skilled <strong className='text-white font-semibold'>Full-Stack Software Engineer</strong> with extensive
              production experience in <span className='text-[#915EFF] font-medium'>TypeScript</span> and{' '}
              <span className='text-[#915EFF] font-medium'>JavaScript</span>, specializing in building high-scale web platforms,
              fluid mobile applications, and resilient microservices using{' '}
              <strong className='text-white font-semibold'>React, Next.js, React Native, Node.js, Redis, and Three.js</strong>.
            </p>

            <p>
              I take pride in translating complex business problems into elegant, maintainable code architectures.
              Whether architecting high-throughput REST APIs with sub-second response times, implementing granular
              RBAC security models, or engineering interactive cross-platform mobile experiences, I deliver software
              built for performance, scalability, and intuitive UX.
            </p>

            <p>
              As a proactive and agile collaborator, I work closely with engineering teams, founders, and stakeholders
              to take ideas from initial architecture sketches to robust, production-ready deployments.
            </p>
          </div>

          {/* Quick Action Navigation CTAs */}
          <div className='flex flex-wrap items-center gap-2.5 sm:gap-4 pt-2'>
            <a
              href='#tech'
              className='w-full xs:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#915EFF]/40 bg-[#915EFF]/10 px-4 sm:px-5 py-2.5 font-mono text-xs font-bold text-white shadow-[0_0_15px_rgba(145,94,255,0.2)] transition-all hover:bg-[#915EFF] hover:shadow-[0_0_25px_rgba(145,94,255,0.4)]'
            >
              <span>Explore Tech Stack</span>
              <ArrowRight className='h-3.5 w-3.5' />
            </a>

            <a
              href='#work'
              className='w-full xs:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 sm:px-5 py-2.5 font-mono text-xs font-semibold text-white/80 transition-all hover:bg-white/10 hover:border-white/20 hover:text-white'
            >
              <span>View Career History</span>
            </a>

            <a
              href='#contact'
              className='w-full xs:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 sm:px-5 py-2.5 font-mono text-xs font-semibold text-white/80 transition-all hover:bg-white/10 hover:border-white/20 hover:text-white'
            >
              <span>Let&apos;s Connect</span>
            </a>
          </div>
        </div>

        {/* Right Column: Cyberpunk Developer Manifest Terminal */}
        <div className='lg:col-span-5 relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d18]/90 p-4 sm:p-6 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between'>
          {/* Top Window Bar */}
          <div className='flex items-center justify-between border-b border-white/5 pb-3'>
            <div className='flex items-center gap-2'>
              <div className='h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-rose-500/80' />
              <div className='h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-amber-500/80' />
              <div className='h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500/80' />
              <span className='ml-1.5 sm:ml-2 font-mono text-[11px] sm:text-xs text-white/40'>engineer.manifest.ts</span>
            </div>
            <span className='rounded bg-purple-500/10 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] text-[#915EFF]'>
              NODE_ENV: production
            </span>
          </div>

          {/* Terminal Code Body */}
          <div className='py-3 sm:py-4 font-mono text-[11px] sm:text-xs leading-relaxed space-y-1.5 sm:space-y-2 text-white/80 overflow-x-auto'>
            <div>
              <span className='text-purple-400'>const</span> <span className='text-cyan-300'>engineer</span> = &#123;
            </div>
            <div className='pl-3 sm:pl-4'>
              <span className='text-white/50'>name:</span> <span className='text-emerald-300'>&apos;Sameer Bagwan&apos;</span>,
            </div>
            <div className='pl-3 sm:pl-4'>
              <span className='text-white/50'>role:</span>{' '}
              <span className='text-emerald-300'>&apos;Full-Stack &amp; Mobile Engineer&apos;</span>,
            </div>
            <div className='pl-3 sm:pl-4'>
              <span className='text-white/50'>coreStrengths:</span> [
              <div className='pl-3 sm:pl-4 text-amber-300 break-words'>
                &apos;Next.js &amp; React&apos;, &apos;React Native&apos;, &apos;Node.js&apos;, &apos;Redis&apos;, &apos;Three.js&apos;
              </div>
              ],
            </div>
            <div className='pl-3 sm:pl-4'>
              <span className='text-white/50'>architecturePatterns:</span> [
              <div className='pl-3 sm:pl-4 text-cyan-300 break-words'>
                &apos;Event-Driven Microservices&apos;, &apos;Distributed Redis Caching&apos;, &apos;Clean Architecture &amp; RBAC&apos;
              </div>
              ],
            </div>
            <div className='pl-3 sm:pl-4'>
              <span className='text-white/50'>status:</span>{' '}
              <span className='text-emerald-400'>&apos;Building High-Impact Systems&apos;</span>
            </div>
            <div>&#125;;</div>
          </div>

          {/* Terminal Footer Status */}
          <div className='border-t border-white/5 pt-2.5 sm:pt-3 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-white/50'>
            <div className='flex items-center gap-1.5 sm:gap-2'>
              <span className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse' />
              <span className='text-emerald-400 font-medium'>System Status: Active</span>
            </div>
            <span>UTF-8 // TS 5</span>
          </div>
        </div>
      </motion.div>

      {/* 4 Key Performance Metrics Row */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.25, 0.7)}
        className='grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4'
      >
        {engineeringStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`relative overflow-hidden rounded-xl border ${stat.borderColor} ${stat.bgColor} p-3 sm:p-4 md:p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)]`}
            >
              <div className='flex items-center justify-between mb-1.5 sm:mb-2'>
                <span className='font-mono text-[10px] sm:text-xs text-white/60 truncate mr-1'>{stat.label}</span>
                <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 ${stat.color}`} />
              </div>
              <div className={`font-mono text-lg sm:text-2xl md:text-3xl font-black ${stat.color} tracking-tight`}>
                {stat.value}
              </div>
              <div className='font-mono text-[9px] sm:text-[11px] text-white/50 mt-1 truncate'>{stat.subtext}</div>
            </div>
          );
        })}
      </motion.div>

      {/* 4 Architecture Pillars / Specialized Domains Section */}
      <div className='space-y-4 sm:space-y-6 pt-2'>
        <div className='flex flex-wrap items-center justify-between gap-2.5 sm:gap-3'>
          <div className='flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#915EFF]'>
            <Layers className='h-4 w-4' />
            <span>Core Engineering Disciplines</span>
          </div>
          <span className='font-mono text-[11px] sm:text-xs text-white/40'>4 Specialized Focus Areas</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutSection, 'about');
