import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalOverlayProps {
  title: string;
  content: string | string[];
  isOpen: boolean;
  onClose: () => void;
  closeText?: string;
}

const LegalOverlay: React.FC<LegalOverlayProps> = ({ 
  title, 
  content, 
  isOpen, 
  onClose,
  closeText = "Chiudi" 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-[#0B1C2D] border border-platinum-300/10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-sm shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-platinum-300/10 bg-[#081522]">
          <h2 className="text-2xl font-serif font-bold text-white">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 text-platinum-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-6 text-platinum-300 font-light leading-relaxed">
          {Array.isArray(content) ? (
            <ul className="space-y-4">
              {content.map((point, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-platinum-50 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="whitespace-pre-line">
              {content}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-platinum-300/10 bg-[#081522] flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-electric-500 text-white rounded-sm hover:bg-electric-600 transition-colors"
          >
            {closeText}
          </button>
        </div>

      </div>
    </div>
  );
};

export default LegalOverlay;