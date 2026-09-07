'use client';

import React, { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';
import { EarthCanvas } from '@/components/canvas';
import { SectionWrapper } from '@/hoc';
import { slideIn, fadeIn } from '@/utils/motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const mailtoUrl = `mailto:sameerbagwanwork@gmail.com?subject=Contact%20from%20${encodeURIComponent(
      form.name,
    )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`;

    window.open(mailtoUrl, '_blank');
    setLoading(false);
    setSubmitted(true);
    setForm({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      {/* Left Form Card */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d18]/90 p-8 sm:p-10 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] md:w-[50%]'
      >
        {/* Subtle background ambient glow */}
        <div className='pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl' />

        {/* Reimagined Contact Header */}
        <div className='relative z-10 space-y-3 mb-8'>
          <div className='inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 backdrop-blur-md shadow-[0_0_15px_rgba(145,94,255,0.15)]'>
            <Mail className='h-3.5 w-3.5 text-[#915EFF]' />
            <span className='font-mono text-xs font-semibold tracking-wider text-[#dfd9ff] uppercase'>
              // 04. GET IN TOUCH
            </span>
          </div>

          <h2 className='font-mono text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white'>
            Get in Touch & <span className='wave-gradient-text font-black'>Contact.</span>
          </h2>

          <p className='text-xs sm:text-sm font-light leading-relaxed text-secondary'>
            Have an exciting opportunity, high-scale engineering project, or idea in mind? Drop a message below or connect directly at{' '}
            <a
              href='mailto:sameerbagwanwork@gmail.com'
              className='text-white hover:text-[#915EFF] underline underline-offset-4 transition-colors font-mono font-medium'
            >
              sameerbagwanwork@gmail.com
            </a>.
          </p>
        </div>

        {submitted ? (
          <div className='relative z-10 p-6 bg-emerald-950/30 rounded-xl border border-emerald-500/30 text-white space-y-3'>
            <div className='flex items-center gap-2 text-emerald-400 font-mono font-semibold text-lg'>
              <CheckCircle2 className='h-5 w-5' />
              <span>Thank you for reaching out!</span>
            </div>
            <p className='text-secondary text-sm font-light'>
              Your message has been initiated. I will get back to you promptly.
            </p>
            <button
              type='button'
              onClick={() => setSubmitted(false)}
              className='mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2 px-4 font-mono text-xs font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer'
            >
              Send another message
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className='relative z-10 flex flex-col gap-6'>
            <label className='flex flex-col gap-2'>
              <span className='font-mono text-xs font-semibold uppercase tracking-wider text-white/70'>
                Your Name
              </span>
              <input
                type='text'
                name='name'
                required
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='rounded-xl border border-white/10 bg-white/[0.03] py-3.5 px-5 font-mono text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-[#915EFF] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#915EFF]'
              />
            </label>

            <label className='flex flex-col gap-2'>
              <span className='font-mono text-xs font-semibold uppercase tracking-wider text-white/70'>
                Your Email
              </span>
              <input
                type='email'
                name='email'
                required
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='rounded-xl border border-white/10 bg-white/[0.03] py-3.5 px-5 font-mono text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-[#915EFF] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#915EFF]'
              />
            </label>

            <label className='flex flex-col gap-2'>
              <span className='font-mono text-xs font-semibold uppercase tracking-wider text-white/70'>
                Your Message
              </span>
              <textarea
                rows={5}
                name='message'
                required
                value={form.message}
                onChange={handleChange}
                placeholder='Tell me about your project, timeline, or engineering goals...'
                className='rounded-xl border border-white/10 bg-white/[0.03] py-3.5 px-5 font-mono text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-[#915EFF] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#915EFF] resize-none'
              />
            </label>

            <button
              type='submit'
              disabled={loading}
              className='group inline-flex items-center justify-center gap-2 rounded-xl border border-[#915EFF]/40 bg-gradient-to-r from-[#915EFF] to-[#7038e8] py-3.5 px-8 font-mono text-sm font-bold text-white shadow-[0_0_20px_rgba(145,94,255,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,94,255,0.5)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <span>{loading ? 'Sending...' : 'Send Message'}</span>
              <Send className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
            </button>
          </form>
        )}
      </motion.div>

      {/* Right 3D Canvas */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:w-[50%] h-87.5'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactSection, 'contact');

