import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../constants';

interface LanguageSelectorProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
  mobile?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  currentLang, 
  onLanguageChange,
  mobile = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: string) => {
    onLanguageChange(code);
    setIsOpen(false);
  };

  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.code === currentLang);
  const currentLangName = currentLangObj?.name.substring(0, 3).toUpperCase() || 'IT';
  const currentFlag = currentLangObj?.flag || '🇮🇹';

  if (mobile) {
    return (
      <div className="w-full border-t border-platinum-300/10 pt-4 mt-2">
        <div className="text-xs font-semibold text-platinum-300/50 mb-2 uppercase tracking-wider">Select Language</div>
        <div className="grid grid-cols-2 gap-2">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`flex items-center gap-2 px-3 py-2 rounded-sm text-sm transition-colors ${
                currentLang === lang.code 
                  ? 'bg-electric-500/20 text-electric-500 border border-electric-500/30' 
                  : 'bg-platinum-900 text-platinum-300 hover:bg-platinum-800'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
          isOpen 
            ? 'bg-platinum-800 border-electric-500 text-electric-500' 
            : 'bg-transparent border-platinum-300/20 text-platinum-300 hover:border-platinum-300/50 hover:text-white'
        }`}
      >
        <span className="text-base">{currentFlag}</span>
        <span className="text-xs font-medium tracking-wide">{currentLangName}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-[#0B1C2D] border border-platinum-300/10 shadow-2xl rounded-sm py-2 max-h-80 overflow-y-auto z-50 animate-in fade-in zoom-in-95 duration-200 custom-scrollbar">
           <div className="px-4 py-2 text-xs font-semibold text-platinum-300/40 uppercase tracking-wider border-b border-platinum-300/5 mb-1">
             Select Language
           </div>
           {SUPPORTED_LANGUAGES.map((lang) => (
             <button
               key={lang.code}
               onClick={() => handleSelect(lang.code)}
               className="w-full text-left px-4 py-2 text-sm text-platinum-300 hover:bg-white/5 hover:text-white transition-colors flex items-center justify-between group"
             >
               <div className="flex items-center gap-3">
                 <span className="text-lg">{lang.flag}</span>
                 <span>{lang.name}</span>
               </div>
               {currentLang === lang.code && <Check size={14} className="text-electric-500" />}
             </button>
           ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;