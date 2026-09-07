'use client';

import React, { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StackIcon, { type IconName } from 'tech-stack-icons';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MapPin,
  Clock,
  Globe,
  Sparkles,
  MessageSquareCode,
  ArrowUpRight,
  Terminal,
} from 'lucide-react';
import { EarthCanvas } from '@/components/canvas';
import { SectionWrapper } from '@/hoc';
import { slideIn, fadeIn } from '@/utils/motion';
import { socialLinks, contactDetails } from '@/constants';

const LinkedinBrandIcon: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
  <svg viewBox='0 0 24 24' className={className} fill='currentColor'>
    <path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37h2.79V10.9H6.46M7.86 6.54a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z' />
  </svg>
);

const GmailBrandIcon: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
  <svg viewBox='0 0 24 24' className={className} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6Z'
      stroke='currentColor'
      strokeWidth='1.75'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M2 7L12 13L22 7' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

interface FormData {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

const inquiryTypes = [
  'Full-Stack App',
  'Mobile Development',
  'Backend & APIs',
  'Full-time / Contract',
  'General Inquiry',
];

export const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    inquiryType: 'Full-Stack App',
    message: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(contactDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTypeSelect = (type: string) => {
    setForm((prev) => ({
      ...prev,
      inquiryType: type,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const subject = encodeURIComponent(`[${form.inquiryType}] Inbound Contact from ${form.name}`);
    const bodyContent = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic / Interest: ${form.inquiryType}\n\nMessage:\n${form.message}`,
    );

    const mailtoUrl = `mailto:${contactDetails.email}?subject=${subject}&body=${bodyContent}`;

    window.open(mailtoUrl, '_blank');
    setLoading(false);
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setForm({
      name: '',
      email: '',
      inquiryType: 'Full-Stack App',
      message: '',
    });
  };

  return (
    <div className='relative w-full space-y-12 py-4'>
      {/* Background ambient radial glow */}
      <div className='pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(145,94,255,0.08)_0%,transparent_70%)]' />

      {/* Top Header & Context */}
      <div className='space-y-4'>
        <motion.div
          variants={fadeIn('down', 'tween', 0.1, 0.6)}
          className='flex flex-wrap items-center justify-between gap-3'
        >
          <div className='inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 backdrop-blur-md shadow-[0_0_15px_rgba(145,94,255,0.15)]'>
            <Terminal className='h-3.5 w-3.5 text-[#915EFF]' />
            <span className='font-mono text-xs font-semibold tracking-wider text-[#dfd9ff] uppercase'>
              // 04. GET IN TOUCH
            </span>
          </div>

          <div className='inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-mono font-medium backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
            </span>
            <span className='text-emerald-300 font-semibold'>AVAILABILITY:</span>
            <span className='text-white/90'>Open for new opportunities</span>
          </div>
        </motion.div>

        <motion.div variants={fadeIn('up', 'tween', 0.15, 0.7)} className='space-y-3'>
          <h2 className='font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white'>
            Get in Touch & <span className='wave-gradient-text font-black'>Contact.</span>
          </h2>
          <p className='max-w-3xl text-sm sm:text-base font-light leading-relaxed text-secondary'>
            Whether you are exploring high-impact full-stack development, distributed backend architecture, fluid mobile
            apps, or seeking an engineering partner—feel free to connect across any channel below.
          </p>
        </motion.div>
      </div>

      {/* 3 Quick-Connect Social Channels (GitHub, LinkedIn, Email) powered by Tech-Stack-Icons */}
      <motion.div variants={fadeIn('up', 'tween', 0.2, 0.7)} className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5'>
        {/* GitHub Card using Tech-Stack-Icons */}
        <a
          href={contactDetails.github}
          target='_blank'
          rel='noopener noreferrer'
          className='group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d18]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#915EFF]/50 hover:bg-[#121327]/90 hover:shadow-[0_12px_30px_-10px_rgba(145,94,255,0.25)]'
        >
          <div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          <div className='relative z-10 flex flex-col justify-between h-full space-y-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 p-2 backdrop-blur-md transition-all duration-300 group-hover:border-[#915EFF] group-hover:bg-[#915EFF]/20 group-hover:shadow-[0_0_15px_rgba(145,94,255,0.4)]'>
                  <StackIcon
                    name='github'
                    variant='dark'
                    className='h-6 w-6 transition-transform duration-300 group-hover:scale-110'
                  />
                </div>
                <div>
                  <h3 className='font-mono text-sm font-bold text-white group-hover:text-[#915EFF] transition-colors'>
                    GitHub
                  </h3>
                  <span className='font-mono text-[11px] text-white/50'>@samcasmmm</span>
                </div>
              </div>
              <div className='flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all group-hover:border-purple-500/40 group-hover:bg-purple-500/20 group-hover:text-white'>
                <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
              </div>
            </div>
            <p className='text-xs font-light text-secondary leading-relaxed'>
              Explore repositories, open-source codebases, full-stack microservices & live commit activity.
            </p>
            <div className='flex items-center gap-2 pt-1 font-mono text-[11px] font-medium text-[#915EFF]'>
              <span>View profile & code</span>
              <ExternalLink className='h-3 w-3' />
            </div>
          </div>
        </a>

        {/* LinkedIn Card using Tech-Stack-Icons */}
        <a
          href={contactDetails.linkedin}
          target='_blank'
          rel='noopener noreferrer'
          className='group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d18]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-[#0e1628]/90 hover:shadow-[0_12px_30px_-10px_rgba(0,245,255,0.2)]'
        >
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          <div className='relative z-10 flex flex-col justify-between h-full space-y-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-2 backdrop-blur-md transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] text-cyan-400'>
                  <LinkedinBrandIcon className='h-6 w-6 transition-transform duration-300 group-hover:scale-110' />
                </div>
                <div>
                  <h3 className='font-mono text-sm font-bold text-white group-hover:text-cyan-400 transition-colors'>
                    LinkedIn
                  </h3>
                  <span className='font-mono text-[11px] text-white/50'>/in/sameerbagwan</span>
                </div>
              </div>
              <div className='flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all group-hover:border-cyan-500/40 group-hover:bg-cyan-500/20 group-hover:text-white'>
                <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
              </div>
            </div>
            <p className='text-xs font-light text-secondary leading-relaxed'>
              Connect for career opportunities, full-time roles, engineering discussions & partnerships.
            </p>
            <div className='flex items-center gap-2 pt-1 font-mono text-[11px] font-medium text-cyan-400'>
              <span>Connect on LinkedIn</span>
              <ExternalLink className='h-3 w-3' />
            </div>
          </div>
        </a>

        {/* Direct Email / Gmail Card with One-Click Copy */}
        <div className='group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d18]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-[#0c1a1e]/90 hover:shadow-[0_12px_30px_-10px_rgba(16,185,129,0.2)]'>
          <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          <div className='relative z-10 flex flex-col justify-between h-full space-y-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2 backdrop-blur-md transition-all duration-300 group-hover:border-emerald-400 group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] text-emerald-400'>
                  <GmailBrandIcon className='h-6 w-6 transition-transform duration-300 group-hover:scale-110' />
                </div>
                <div>
                  <h3 className='font-mono text-sm font-bold text-white group-hover:text-emerald-400 transition-colors'>
                    Direct Email
                  </h3>
                  <span className='font-mono text-[11px] text-white/50 truncate max-w-[140px] block'>
                    sameerbagwanwork...
                  </span>
                </div>
              </div>
              <button
                type='button'
                onClick={handleCopyEmail}
                title='Copy email address'
                className='flex h-8 items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 font-mono text-[11px] font-medium text-emerald-300 transition-all hover:bg-emerald-500 hover:text-black cursor-pointer'
              >
                {copiedEmail ? (
                  <>
                    <Check className='h-3.5 w-3.5' />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className='h-3.5 w-3.5' />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <p className='text-xs font-light text-secondary leading-relaxed'>
              Direct inbox for fast responses, technical consultations, project scoping, and proposals.
            </p>
            <a
              href={`mailto:${contactDetails.email}`}
              className='flex items-center gap-2 pt-1 font-mono text-[11px] font-medium text-emerald-400 hover:underline'
            >
              <span>{contactDetails.email}</span>
              <ArrowUpRight className='h-3 w-3' />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Interactive Form & 3D Earth Section */}
      <div className='flex flex-col-reverse xl:flex-row gap-8 lg:gap-10 items-stretch'>
        {/* Left Form Container */}
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 0.8)}
          className='flex-1 xl:max-w-[55%] relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d18]/90 p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]'
        >
          {/* Ambient Purple Glow inside card */}
          <div className='pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-600/15 blur-3xl' />
          <div className='pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-600/10 blur-3xl' />

          <div className='relative z-10 space-y-6'>
            <div>
              <div className='flex items-center gap-2 text-[#915EFF] font-mono text-xs font-bold uppercase tracking-wider mb-2'>
                <MessageSquareCode className='h-4 w-4' />
                <span>Send a Direct Message</span>
              </div>
              <h3 className='font-mono text-xl sm:text-2xl font-bold text-white'>
                Let&apos;s build something exceptional.
              </h3>
              <p className='text-xs sm:text-sm text-secondary font-light mt-1'>
                Fill out the details below and I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <AnimatePresence mode='wait'>
              {submitted ? (
                <motion.div
                  key='submitted-state'
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className='p-6 sm:p-8 bg-emerald-950/40 rounded-xl border border-emerald-500/30 text-white space-y-4'
                >
                  <div className='flex items-center gap-3 text-emerald-400 font-mono font-bold text-lg'>
                    <CheckCircle2 className='h-6 w-6' />
                    <span>Message Ready to Send!</span>
                  </div>
                  <p className='text-secondary text-sm font-light leading-relaxed'>
                    Your default mail client has been opened with your pre-filled inquiry. You can also reach out
                    directly at <span className='text-emerald-300 font-mono font-medium'>{contactDetails.email}</span>.
                  </p>
                  <div className='flex flex-wrap gap-3 pt-2'>
                    <button
                      type='button'
                      onClick={handleResetForm}
                      className='inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2.5 px-5 font-mono text-xs font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer'
                    >
                      <span>Send another message</span>
                    </button>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className='inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/20 py-2.5 px-5 font-mono text-xs font-semibold text-emerald-300 hover:bg-emerald-500/30 transition-all'
                    >
                      <Mail className='h-3.5 w-3.5' />
                      <span>Open Mail Client</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-5'>
                  {/* Topic / Project Type Chips */}
                  <div className='flex flex-col gap-2'>
                    <span className='font-mono text-xs font-semibold uppercase tracking-wider text-white/70'>
                      Project / Inquiry Category
                    </span>
                    <div className='flex flex-wrap gap-2'>
                      {inquiryTypes.map((type) => {
                        const isSelected = form.inquiryType === type;
                        return (
                          <button
                            key={type}
                            type='button'
                            onClick={() => handleTypeSelect(type)}
                            className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-all cursor-pointer ${
                              isSelected
                                ? 'border border-[#915EFF] bg-[#915EFF]/20 text-white shadow-[0_0_12px_rgba(145,94,255,0.3)] font-semibold'
                                : 'border border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <label className='flex flex-col gap-2'>
                      <span className='font-mono text-xs font-semibold uppercase tracking-wider text-white/70'>
                        Your Name <span className='text-[#915EFF]'>*</span>
                      </span>
                      <input
                        type='text'
                        name='name'
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder='Sameer Bagwan'
                        className='rounded-xl border border-white/10 bg-white/3 py-3 px-4 font-mono text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-[#915EFF] focus:bg-white/6 focus:ring-1 focus:ring-[#915EFF]'
                      />
                    </label>

                    <label className='flex flex-col gap-2'>
                      <span className='font-mono text-xs font-semibold uppercase tracking-wider text-white/70'>
                        Your Email <span className='text-[#915EFF]'>*</span>
                      </span>
                      <input
                        type='email'
                        name='email'
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder='name@example.com'
                        className='rounded-xl border border-white/10 bg-white/3 py-3 px-4 font-mono text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-[#915EFF] focus:bg-white/6 focus:ring-1 focus:ring-[#915EFF]'
                      />
                    </label>
                  </div>

                  <label className='flex flex-col gap-2'>
                    <span className='font-mono text-xs font-semibold uppercase tracking-wider text-white/70'>
                      Your Message <span className='text-[#915EFF]'>*</span>
                    </span>
                    <textarea
                      rows={4}
                      name='message'
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder='Describe your project requirements, goals, timeline, or engineering role...'
                      className='rounded-xl border border-white/10 bg-white/3 py-3 px-4 font-mono text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-[#915EFF] focus:bg-white/6 focus:ring-1 focus:ring-[#915EFF] resize-none'
                    />
                  </label>

                  <div className='flex flex-wrap items-center justify-between gap-4 pt-2'>
                    <div className='flex items-center gap-2 text-[11px] font-mono text-secondary'>
                      <Clock className='h-3.5 w-3.5 text-emerald-400' />
                      <span>Typical response time: &lt; 24h</span>
                    </div>

                    <button
                      type='submit'
                      disabled={loading}
                      className='group inline-flex items-center justify-center gap-2 rounded-xl border border-[#915EFF]/50 bg-gradient-to-r from-[#915EFF] to-[#7038e8] py-3.5 px-7 font-mono text-sm font-bold text-white shadow-[0_0_20px_rgba(145,94,255,0.35)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,94,255,0.6)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                      <span>{loading ? 'Preparing...' : 'Send Inquiry'}</span>
                      <Send className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right 3D Earth Globe & Location HUD */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 0.8)}
          className='flex-1 flex flex-col justify-between relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d18]/60 backdrop-blur-xl p-4 sm:p-6 min-h-[480px]'
        >
          {/* Top Location & Info Status Badges */}
          <div className='relative z-10 flex flex-wrap gap-2.5 mb-2'>
            <div className='inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md'>
              <MapPin className='h-3.5 w-3.5 text-[#915EFF]' />
              <span className='font-mono text-xs font-medium text-white/90'>{contactDetails.location}</span>
            </div>
            <div className='inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md'>
              <Globe className='h-3.5 w-3.5 text-cyan-400' />
              <span className='font-mono text-xs font-medium text-white/90'>{contactDetails.timezone}</span>
            </div>
          </div>

          {/* Interactive 3D Earth Canvas */}
          <div className='relative w-full flex-1 h-[320px] sm:h-[380px]'>
            <EarthCanvas />
          </div>

          {/* Bottom Live Coordinates HUD with Tech Stack Icons Badge */}
          <div className='relative z-10 mt-2 rounded-xl border border-white/10 bg-black/40 p-3.5 backdrop-blur-md space-y-2.5'>
            <div className='flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-white/70'>
              <div className='flex items-center gap-2'>
                <span className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse' />
                <span className='text-emerald-400 font-semibold'>GLOBAL CONNECTIVITY</span>
              </div>
              <span className='text-white/40'>Interactive 3D Sphere • Drag to rotate</span>
            </div>

            {/* Core Tech Stack Icons Ribbon */}
            <div className='flex items-center gap-3 pt-1 border-t border-white/5 overflow-x-auto'>
              <span className='font-mono text-[10px] text-white/40 uppercase tracking-wider shrink-0'>Core Stack:</span>
              <div className='flex items-center gap-2.5'>
                {(['react', 'nextjs', 'typescript', 'nodejs', 'redis', 'mongodb', 'aws'] as IconName[]).map((tech) => (
                  <div
                    key={tech}
                    title={tech}
                    className='flex h-6 w-6 items-center justify-center rounded-md bg-white/5 p-1 border border-white/5 transition-all hover:bg-white/10 hover:border-white/20'
                  >
                    <StackIcon name={tech} variant='dark' className='h-4 w-4' />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(ContactSection, 'contact');
