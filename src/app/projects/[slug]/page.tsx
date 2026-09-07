import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import StackIcon, { type IconName } from 'tech-stack-icons';
import { github } from '@/assets';
import { projects, type Project, type ProjectMetric } from '@/constants';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, ExternalLink, Zap } from 'lucide-react';

export function generateStaticParams() {
  return projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const TechIconRenderer: React.FC<{ icon: string }> = ({ icon }) => {
  if (icon === 'jenkins') {
    return (
      <svg viewBox='0 0 128 178' className='h-8 w-8' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M64 0C39.2 0 19.1 20.1 19.1 44.9c0 11.7 4.5 22.3 11.8 30.3L1.2 113.9c-1.6 1.6-1.6 4.1 0 5.7l12.9 12.9c1.6 1.6 4.1 1.6 5.7 0l30.1-30.1c4.5 2.1 9.4 3.2 14.2 3.2 24.8 0 44.9-20.1 44.9-44.9S88.8 0 64 0z'
          fill='#D33833'
        />
        <path
          d='M64 17.8c-15 0-27.2 12.2-27.2 27.2 0 7.1 2.7 13.5 7.2 18.4L23.7 83.7c-.6.6-.6 1.6 0 2.1l6.4 6.4c.6.6 1.6.6 2.1 0l20.3-20.3c4.9 4.5 11.3 7.2 18.4 7.2 15 0 27.2-12.2 27.2-27.2S79 17.8 64 17.8z'
          fill='#FFFFFF'
        />
      </svg>
    );
  }

  if (icon === 'detox') {
    return (
      <svg viewBox='0 0 100 100' className='h-8 w-8' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='25' y='10' width='50' height='80' rx='10' stroke='#00f5ff' strokeWidth='4' fill='#0d0e17' />
        <line x1='42' y1='18' x2='58' y2='18' stroke='#ffffff' strokeWidth='2.5' strokeLinecap='round' />
        <circle cx='50' cy='80' r='3.5' fill='#00f5ff' />
        <path d='M38 46l8 8 16-16' stroke='#38ef7d' strokeWidth='4.5' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    );
  }

  return <StackIcon name={icon as IconName} variant='dark' className='h-8 w-8' />;
};

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p: Project) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className='relative z-0 min-h-screen bg-[#050816] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Background ambient lighting */}
      <div className='pointer-events-none absolute top-0 left-1/2 h-[700px] w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(145,94,255,0.12)_0%,transparent_70%)]' />

      <div className='mx-auto max-w-5xl relative z-10'>
        {/* Top Header Navigation */}
        <div className='flex items-center justify-between border-b border-white/10 pb-6 mb-12'>
          <Link
            href='/#work'
            className='group inline-flex items-center gap-2 font-mono text-xs text-white/60 hover:text-white transition-colors'
          >
            <ArrowLeft className='h-4 w-4 transition-transform group-hover:-translate-x-1' />
            <span>Back to Engineering Overview</span>
          </Link>

          <div className='flex items-center gap-3'>
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs font-medium text-white hover:border-[#915EFF] hover:bg-[#915EFF]/20 transition-all'
              >
                <Image src={github} alt='github' width={14} height={14} className='object-contain' />
                <span>Source</span>
              </a>
            )}
            {project.live_demo_link && (
              <a
                href={project.live_demo_link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 rounded-lg border border-[#915EFF]/40 bg-[#915EFF]/20 px-3 py-1.5 font-mono text-xs font-medium text-cyan-300 hover:border-cyan-400 hover:bg-[#915EFF]/40 transition-all shadow-[0_0_12px_rgba(145,94,255,0.3)]'
              >
                <ExternalLink className='h-3.5 w-3.5' />
                <span>Live System</span>
              </a>
            )}
          </div>
        </div>

        {/* Case Study Title & Meta */}
        <header className='space-y-6 mb-12'>
          <div className='flex flex-wrap items-center gap-3 font-mono text-xs'>
            <span className='px-3 py-1 rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 text-[#00f5ff] uppercase tracking-widest font-bold'>
              {project.role}
            </span>
            <span className='text-white/30'>•</span>
            <span className='text-white/60 tracking-wider'>{project.period}</span>
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono tracking-tight text-white'>
            {project.name}
          </h1>

          <p className='text-xl sm:text-2xl font-light text-cyan-300 font-mono tracking-wide'>{project.subtitle}</p>

          <p className='text-base sm:text-lg leading-relaxed text-secondary max-w-3xl font-light'>
            {project.description}
          </p>
        </header>

        {/* Key Performance Metrics Grid */}
        {project.keyMetrics && project.keyMetrics.length > 0 && (
          <section className='mb-16'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              {project.keyMetrics.map((metric: ProjectMetric, i: number) => (
                <div
                  key={i}
                  className='relative overflow-hidden rounded-xl border border-white/10 bg-[#0d0e17]/90 p-6 backdrop-blur-md transition-all hover:border-[#915EFF]/50 hover:shadow-[0_0_20px_rgba(145,94,255,0.2)]'
                >
                  <div className='flex items-center gap-2 mb-2'>
                    <Zap className='h-4 w-4 text-[#00f5ff]' />
                    <span className='font-mono text-xs text-white/50 uppercase tracking-wider'>{metric.label}</span>
                  </div>
                  <div className='font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight my-1'>
                    {metric.value}
                  </div>
                  {metric.subtext && (
                    <p className='font-mono text-[11px] text-[#915EFF] tracking-wide'>{metric.subtext}</p>
                  )}
                  <div className='absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#915EFF] to-cyan-400' />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Hero Visual Preview */}
        <div className='relative w-full h-[320px] sm:h-[450px] rounded-2xl overflow-hidden border border-white/10 mb-16 shadow-[0_0_50px_rgba(0,0,0,0.8)]'>
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes='(max-width: 1200px) 100vw, 1200px'
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-black/20' />
        </div>

        {/* Problem Statement & Architecture Solution */}
        <section className='grid md:grid-cols-2 gap-8 mb-16'>
          <div className='rounded-2xl border border-white/10 bg-[#0c0d18]/80 p-8 backdrop-blur-md space-y-4'>
            <div className='flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-widest'>
              <Cpu className='h-4 w-4' />
              <span>The Technical Problem</span>
            </div>
            <h3 className='text-xl font-bold font-mono text-white'>Challenge & Bottlenecks</h3>
            <p className='text-sm leading-relaxed text-secondary font-light'>{project.problemStatement}</p>
          </div>

          <div className='rounded-2xl border border-white/10 bg-[#0c0d18]/80 p-8 backdrop-blur-md space-y-4'>
            <div className='flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-widest'>
              <Zap className='h-4 w-4' />
              <span>The Engineering Solution</span>
            </div>
            <h3 className='text-xl font-bold font-mono text-white'>Architecture & Design</h3>
            <p className='text-sm leading-relaxed text-secondary font-light'>{project.solutionOverview}</p>
          </div>
        </section>

        {/* Technology Stack Used in Project */}
        <section className='mb-16 rounded-2xl border border-white/10 bg-[#0d0e17]/90 p-8 backdrop-blur-md'>
          <h3 className='text-xl font-bold font-mono text-white mb-6 flex items-center gap-2'>
            <span>Project Tech Stack</span>
            <span className='font-mono text-xs text-white/40 font-normal'>
              ({project.techStackIcons.length} Technologies)
            </span>
          </h3>

          <div className='flex flex-wrap gap-4'>
            {project.techStackIcons.map((iconName: string) => (
              <div
                key={iconName}
                className='flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 transition-all hover:border-[#915EFF]/40 hover:bg-[#915EFF]/10'
              >
                <TechIconRenderer icon={iconName} />
                <span className='font-mono text-xs font-semibold text-white/90 capitalize'>
                  {iconName === 'socketio'
                    ? 'WebSocket'
                    : iconName === 'nextjs'
                      ? 'Next.js'
                      : iconName === 'js'
                        ? 'JavaScript'
                        : iconName}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Key Highlights & Achievements */}
        <section className='mb-16 rounded-2xl border border-white/10 bg-[#0c0d18]/80 p-8 backdrop-blur-md space-y-6'>
          <h3 className='text-2xl font-bold font-mono text-white tracking-tight'>Key Engineering Accomplishments</h3>

          <div className='space-y-4'>
            {project.highlights.map((highlight: string, idx: number) => (
              <div key={idx} className='flex items-start gap-4 text-sm text-secondary leading-relaxed font-light'>
                <CheckCircle2 className='h-5 w-5 text-[#38ef7d] shrink-0 mt-0.5' />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sequential Navigation Footer */}
        <nav className='border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <Link
            href={`/projects/${prevProject.slug}`}
            className='group flex flex-col items-start rounded-xl border border-white/10 bg-white/5 p-4 w-full sm:w-auto min-w-[220px] transition-all hover:border-[#915EFF]/50 hover:bg-white/10'
          >
            <span className='font-mono text-[10px] text-white/40 uppercase tracking-widest flex items-center gap-1'>
              <ArrowLeft className='h-3 w-3 transition-transform group-hover:-translate-x-1' />
              <span>Previous Case Study</span>
            </span>
            <span className='font-mono text-sm font-bold text-white mt-1 group-hover:text-[#00f5ff]'>
              {prevProject.name}
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className='group flex flex-col items-end text-right rounded-xl border border-white/10 bg-white/5 p-4 w-full sm:w-auto min-w-[220px] transition-all hover:border-[#915EFF]/50 hover:bg-white/10'
          >
            <span className='font-mono text-[10px] text-white/40 uppercase tracking-widest flex items-center gap-1'>
              <span>Next Case Study</span>
              <ArrowUpRight className='h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
            </span>
            <span className='font-mono text-sm font-bold text-white mt-1 group-hover:text-[#00f5ff]'>
              {nextProject.name}
            </span>
          </Link>
        </nav>
      </div>
    </main>
  );
}
