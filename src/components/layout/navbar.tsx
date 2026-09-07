'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '@/styles/styles';
import { navLinks } from '@/constants';
import { sblogo, ResumePDF } from '@/assets';
import { FileText, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll spy for active section
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(navLinks[i].title);
          break;
        }
      }
      if (window.scrollY < 100) {
        setActive('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 inset-x-0 z-50 flex items-center transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#050816]/80 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Brand Logo & Name */}
        <Link
          href='/'
          className='flex items-center gap-3 group'
          onClick={() => {
            setActive('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className='relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-md transition-all duration-300 group-hover:border-[#915EFF]/50 group-hover:shadow-[0_0_15px_rgba(145,94,255,0.3)]'>
            <Image
              src={sblogo}
              alt='Sameer Bagwan Logo'
              width={40}
              height={40}
              className='h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105'
              priority
            />
          </div>
          <div className='flex flex-col'>
            <span className='font-mono text-sm font-bold tracking-tight text-white group-hover:text-[#915EFF] transition-colors'>
              Sameer Bagwan
            </span>
            <span className='font-mono text-[10px] text-white/50 tracking-wider uppercase'>
              Full Stack Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className='list-none hidden md:flex flex-row items-center gap-1.5 rounded-full border border-white/10 bg-[#0c0d18]/80 p-1.5 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]'>
          {navLinks.map((link) => {
            const isActive = active === link.title;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative rounded-full px-4 py-1.5 font-mono text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer block ${
                    isActive
                      ? 'text-white bg-[#915EFF]/20 border border-[#915EFF]/40 shadow-[0_0_12px_rgba(145,94,255,0.25)]'
                      : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                  onClick={() => {
                    setActive(link.title);
                  }}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right CTA: Resume Button */}
        <div className='hidden sm:flex items-center gap-3'>
          <a
            id='downloadLink'
            href={ResumePDF}
            target='_blank'
            rel='noopener noreferrer'
            className='group relative inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#915EFF]/60 hover:bg-[#915EFF]/15 hover:shadow-[0_0_20px_rgba(145,94,255,0.3)] hover:scale-[1.02] active:scale-[0.98]'
          >
            <FileText className='h-3.5 w-3.5 text-[#915EFF] transition-transform duration-200 group-hover:rotate-6' />
            <span>Resume</span>
            <ArrowUpRight className='h-3 w-3 text-white/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white' />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className='md:hidden flex items-center gap-2'>
          <a
            href={ResumePDF}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs font-semibold text-white/90'
          >
            <FileText className='h-3 w-3 text-[#915EFF]' />
            <span>CV</span>
          </a>

          <button
            type='button'
            onClick={() => setToggle((prev) => !prev)}
            aria-label='Toggle Navigation Menu'
            className='flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-all hover:bg-white/10 hover:text-white cursor-pointer'
          >
            {toggle ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className='md:hidden fixed top-20 inset-x-4 p-5 rounded-2xl border border-white/15 bg-[#0c0d18]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-50 space-y-4'
          >
            <div className='flex items-center justify-between border-b border-white/10 pb-3'>
              <span className='font-mono text-xs font-semibold text-white/50 uppercase tracking-wider'>
                Navigation Menu
              </span>
              <span className='font-mono text-[10px] text-[#915EFF]'>// 2026</span>
            </div>

            <ul className='list-none flex flex-col gap-2'>
              {navLinks.map((link) => {
                const isActive = active === link.title;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 font-mono text-sm font-semibold transition-all ${
                        isActive
                          ? 'text-white bg-[#915EFF]/20 border border-[#915EFF]/40'
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      <span>{link.title}</span>
                      <ArrowUpRight className='h-3.5 w-3.5 text-white/40' />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className='pt-2 border-t border-white/10'>
              <a
                href={ResumePDF}
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => setToggle(false)}
                className='flex items-center justify-center gap-2 rounded-xl border border-[#915EFF]/50 bg-gradient-to-r from-[#915EFF] to-[#7038e8] py-3 font-mono text-xs font-bold text-white shadow-[0_0_20px_rgba(145,94,255,0.3)]'
              >
                <FileText className='h-4 w-4' />
                <span>Download Full Resume</span>
                <ArrowUpRight className='h-3.5 w-3.5' />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
