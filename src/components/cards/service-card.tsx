'use client';

import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Service } from '@/constants';
import { fadeIn } from '@/utils/motion';

export interface ServiceCardProps extends Service {
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className='xs:w-[250px] w-full'
  >
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-px rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-70 flex justify-evenly items-center flex-col'>
        <div className='relative w-16 h-16'>
          <Image src={icon} alt={title} fill sizes='64px' className='object-contain' />
        </div>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

export default ServiceCard;
