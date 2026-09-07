import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface ProcessItem {
  title: string;
  description: string;
  icon?: string;
  links?: string[];
}

interface ProcessCardProps {
  process: ProcessItem;
  index: number;
}

export const ProcessCard: React.FC<ProcessCardProps> = ({ process, index }) => {
  return (
    <div className='group relative overflow-hidden rounded-xl border border-white/10 bg-tertiary/40 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#915EFF]/40 hover:bg-tertiary/80'>
      <div className='flex items-center justify-between'>
        <span className='font-mono text-xs font-bold tracking-widest text-[#915EFF]/70 uppercase'>
          Phase 0{index + 1}
        </span>
        <div className='h-2 w-2 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-[#915EFF]' />
      </div>

      <h3 className='mt-6 text-xl font-semibold text-white tracking-tight transition-colors duration-300 group-hover:text-[#915EFF]'>
        {process.title}
      </h3>

      <p className='mt-3 text-sm leading-relaxed text-secondary font-light'>{process.description}</p>

      {process.links && process.links.length > 0 && (
        <div className='mt-6 flex flex-wrap gap-2'>
          {process.links.map((link) => (
            <span
              key={link}
              className='inline-flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] tracking-wider text-white/60 transition-colors duration-300 hover:border-[#915EFF]/40 hover:text-white'
            >
              {link}
              <ArrowUpRight className='h-3 w-3 opacity-40' />
            </span>
          ))}
        </div>
      )}

      <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-[#915EFF] to-cyan-400 transition-all duration-500 group-hover:w-full' />
    </div>
  );
};

export default ProcessCard;
