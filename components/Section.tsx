import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'dark' | 'darker';
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children,
  background = 'dark' 
}) => {
  const bgClass = background === 'darker' ? 'bg-[#081522]' : 'bg-platinum-900';
  
  return (
    <section id={id} className={`py-16 md:py-32 relative overflow-hidden ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;