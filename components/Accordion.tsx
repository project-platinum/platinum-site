import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

interface AccordionProps {
  items: FAQItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border border-platinum-300/20 bg-platinum-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-platinum-300/40"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            aria-expanded={openIndex === index}
          >
            <span className={`text-lg font-medium tracking-wide ${openIndex === index ? 'text-electric-500' : 'text-platinum-50'}`}>
              {item.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-electric-500 transition-transform duration-300" />
            ) : (
              <ChevronDown className="w-5 h-5 text-platinum-300 transition-transform duration-300" />
            )}
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-6 pt-0 text-platinum-300 leading-relaxed font-light border-t border-platinum-300/10 mt-2">
              <div className="pt-4">
                {item.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;