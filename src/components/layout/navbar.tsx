'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { styles } from '@/styles/styles';
import { navLinks } from '@/constants';
import { sblogo, menu, close, ResumePDF } from '@/assets';

export const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary/80 backdrop-blur-md`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image
            src={sblogo}
            alt='Sameer Bagwan Logo'
            width={64}
            height={64}
            className='w-16 h-16 object-contain'
            priority
          />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } hover:text-white transition-colors duration-300 text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a id='downloadLink' href={ResumePDF} target='_blank' rel='noopener noreferrer'>
              <button
                type='button'
                className='rounded-lg bg-white px-5 py-2 font-bold text-black transition-all duration-150 hover:bg-slate-200 cursor-pointer shadow-sm hover:shadow'
              >
                Resume
              </button>
            </a>
          </li>
        </ul>

        {/* Mobile Drawer */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            width={24}
            height={24}
            className='w-6 h-6 object-contain cursor-pointer'
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-35 z-10 rounded-xl shadow-lg`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`${
                      active === link.title ? 'text-white' : 'text-secondary'
                    } hover:text-white transition-colors duration-300 text-[16px] font-medium cursor-pointer`}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li>
                <a href={ResumePDF} target='_blank' rel='noopener noreferrer'>
                  <button
                    type='button'
                    className='rounded-lg bg-white px-4 py-2 font-bold text-black transition-all duration-150 hover:bg-slate-200 cursor-pointer'
                  >
                    Resume
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
