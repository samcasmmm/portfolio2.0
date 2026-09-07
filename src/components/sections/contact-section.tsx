'use client';

import React, { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';

import { styles } from '@/styles';
import { EarthCanvas } from '@/components/canvas';
import { SectionWrapper } from '@/hoc';
import { slideIn } from '@/utils/motion';

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
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl md:w-[50%]'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {submitted ? (
          <div className='mt-8 p-4 bg-tertiary rounded-xl border border-green-500/30 text-white'>
            <p className='font-semibold text-lg text-[#00cea8]'>Thank you for reaching out!</p>
            <p className='text-secondary text-sm mt-1'>{`I'll get back to you as soon as possible.`}</p>
            <button
              type='button'
              onClick={() => setSubmitted(false)}
              className='mt-4 bg-primary py-2 px-4 rounded-lg text-sm text-white font-medium hover:bg-black-200 transition-colors'
            >
              Send another message
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                required
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915eff]'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input
                type='email'
                name='email'
                required
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915eff]'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                required
                value={form.message}
                onChange={handleChange}
                placeholder='What would you like to discuss?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915eff] resize-none'
              />
            </label>

            <button
              type='submit'
              disabled={loading}
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915eff] transition-colors cursor-pointer disabled:opacity-50'
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:w-[50%] h-87.5'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactSection, 'contact');
