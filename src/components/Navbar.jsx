import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants/index';
import { sblogo, menu, close,ResumePDF } from '../assets';
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={sblogo}
            alt='sb-logo'
            className='w-16 h-16 object-contain'
          />
          {/* <p className='text-white text-[14px] font-bold cursor-pointer'>
            Sameer <span className='sm:block hidden'> Bagwan</span>
          </p> */}
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } hover:text-white duration-300 ease-in-out text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
           <li>
            <a id='downloadLink' href={ResumePDF} target='_blank'>
              <button class='rounded bg-white px-4 py-2 font-bold text-black transition-all duration-150 hover:bg-slate-200'>
                Button
              </button>
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu-icon'
            className='w-[20px] h-[20px] object-contain cursor-pointer'
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`${
                      active === link.title ? 'text-white' : 'text-secondary'
                    } hover:text-white duration-300 ease-in-out text-[16px] font-medium cursor-pointer font-poppins`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
               <li>
            <a id='downloadLink' href={ResumePDF} target='_blank'>
              <button class='rounded bg-white px-4 py-2 font-bold text-black transition-all duration-150 hover:bg-slate-200'>
                Button
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
