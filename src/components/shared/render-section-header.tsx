'use client';

import React from 'react';

interface RenderSectionHeaderProps {
  id?: string;
  badge?: string;
  title: string;
  highlightedWords?: string[];
  description?: string;
  descriptionClassName?: string;
  wrapperClassName?: string;
}

export const RenderSectionHeader: React.FC<RenderSectionHeaderProps> = ({
  id,
  badge,
  title,
  highlightedWords = [],
  description,
  descriptionClassName = 'text-sm font-light text-secondary max-w-2xl',
  wrapperClassName = 'mb-12 text-center md:text-left',
}) => {
  const renderHighlightedTitle = () => {
    if (!highlightedWords.length) {
      return title;
    }

    const regex = new RegExp(`(${highlightedWords.join('|')})`, 'gi');
    const parts = title.split(regex);

    return parts.map((part, idx) => {
      const isHighlighted = highlightedWords.some(
        (word) => word.toLowerCase() === part.toLowerCase()
      );

      if (isHighlighted) {
        return (
          <span
            key={idx}
            className='wave-gradient-text font-bold tracking-tight'
          >
            {part}
          </span>
        );
      }

      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div id={id} className={`space-y-4 ${wrapperClassName}`}>
      {badge && (
        <div className='inline-flex items-center gap-2'>
          <span className='px-3.5 py-1 text-xs font-mono font-medium tracking-widest uppercase rounded-full border border-[#915EFF]/30 bg-[#915EFF]/10 text-[#915EFF] shadow-[0_0_12px_rgba(145,94,255,0.2)]'>
            {badge}
          </span>
        </div>
      )}

      <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight text-white'>
        {renderHighlightedTitle()}
      </h2>

      {description && <p className={descriptionClassName}>{description}</p>}
    </div>
  );
};

export default RenderSectionHeader;
