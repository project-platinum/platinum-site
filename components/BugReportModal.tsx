import React, { useState, useEffect } from 'react';
import { X, Bug, AlertOctagon, Terminal, CheckCircle } from 'lucide-react';
import { getAppContent } from '../constants';
import Button from './Button';

interface BugReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: string;
}

const BugReportModal: React.FC<BugReportModalProps> = ({ isOpen, onClose, currentLang }) => {
  const content = getAppContent(currentLang).bugReport;
  const [submitted, setSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Form State
  const [errorType, setErrorType] = useState('');
  const [severity, setSeverity] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [includeLogs, setIncludeLogs] = useState(true);

  // Set default values when language or content changes
  useEffect(() => {
    if (content) {
      setErrorType(content.fields.typeOpts[0]);
      setSeverity(content.fields.severityOpts[0]);
    }
  }, [content, currentLang]);

  // Manage body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsAnimating(true);
    } else {
      document.body.style.overflow = 'unset';
      setSubmitted(false); // Reset on close
      setDescription(''); // Clear sensitive fields
      setEmail('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct Email Body
    const subject = `[BUG REPORT] ${errorType} - ${severity}`;
    
    let body = `--- PLATINUM+ OPTIMIZER BUG REPORT ---\n\n`;
    body += `TYPE: ${errorType}\n`;
    body += `SEVERITY: ${severity}\n`;
    body += `CONTACT: ${email || 'Not provided'}\n\n`;
    body += `DESCRIPTION:\n${description}\n\n`;
    
    if (includeLogs) {
      body += `--------------------------------------\n`;
      body += `SYSTEM DIAGNOSTICS (AUTO-GENERATED):\n`;
      body += `User Agent: ${navigator.userAgent}\n`;
      body += `Language: ${currentLang.toUpperCase()}\n`;
      body += `Platform: ${navigator.platform}\n`;
      body += `Screen: ${window.screen.width}x${window.screen.height}\n`;
      body += `--------------------------------------\n`;
    }

    // Open Mail Client
    const mailtoLink = `mailto:platinumoptimizerhelp@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Show success UI
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className={`relative bg-[#050a0f] border border-red-500/20 w-full max-w-2xl max-h-[90vh] flex flex-col rounded-sm shadow-[0_0_50px_rgba(239,68,68,0.1)] overflow-hidden transition-all duration-300 transform ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        
        {/* Header - Technical Style */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-red-500/10 bg-[#081522]">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-red-500/10 rounded-sm border border-red-500/30 flex items-center justify-center">
                <Bug size={20} className="text-red-500" />
             </div>
             <div>
                <h2 className="text-xl font-mono font-bold text-white tracking-tight flex items-center gap-2">
                   {content.modalTitle}
                   <span className="text-[10px] bg-red-900/30 text-red-400 px-1.5 py-0.5 rounded border border-red-500/20">BETA</span>
                </h2>
                <p className="text-xs text-platinum-300/50 uppercase tracking-wider">{content.subtitle}</p>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-platinum-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
           {!submitted ? (
             <form onSubmit={handleSubmit} className="space-y-6">
               
               {/* Error Type & Severity */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-platinum-300 uppercase tracking-wider flex items-center gap-2">
                        <Terminal size={12} className="text-electric-500" />
                        {content.fields.type}
                     </label>
                     <div className="relative">
                        <select 
                          value={errorType}
                          onChange={(e) => setErrorType(e.target.value)}
                          className="w-full bg-[#0B1522] border border-platinum-300/20 text-platinum-50 px-4 py-3 rounded-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none appearance-none transition-all cursor-pointer"
                        >
                           {content.fields.typeOpts.map((opt, i) => (
                             <option key={i} value={opt}>{opt}</option>
                           ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-platinum-300/10 pl-2">
                           <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-platinum-300"></div>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs font-bold text-platinum-300 uppercase tracking-wider flex items-center gap-2">
                        <AlertOctagon size={12} className="text-red-500" />
                        {content.fields.severity}
                     </label>
                     <div className="relative">
                        <select 
                          value={severity}
                          onChange={(e) => setSeverity(e.target.value)}
                          className="w-full bg-[#0B1522] border border-platinum-300/20 text-platinum-50 px-4 py-3 rounded-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none appearance-none transition-all cursor-pointer"
                        >
                           {content.fields.severityOpts.map((opt, i) => (
                             <option key={i} value={opt}>{opt}</option>
                           ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-platinum-300/10 pl-2">
                           <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-platinum-300"></div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Description */}
               <div className="space-y-2">
                  <label className="text-xs font-bold text-platinum-300 uppercase tracking-wider">
                     {content.fields.desc}
                  </label>
                  <textarea 
                     required
                     rows={5}
                     value={description}
                     onChange={(e) => setDescription(e.target.value)}
                     className="w-full bg-[#0B1522] border border-platinum-300/20 text-platinum-50 px-4 py-3 rounded-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all placeholder-white/10 resize-none font-mono text-sm"
                     placeholder={content.fields.descPlaceholder}
                  />
               </div>

               {/* Optional Email */}
               <div className="space-y-2">
                  <label className="text-xs font-bold text-platinum-300 uppercase tracking-wider">
                     {content.fields.email}
                  </label>
                  <input 
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="w-full bg-[#0B1522] border border-platinum-300/20 text-platinum-50 px-4 py-3 rounded-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all placeholder-white/10"
                  />
               </div>

               {/* System Logs Checkbox */}
               <div className="flex items-center gap-3 p-3 bg-red-500/5 border border-red-500/10 rounded-sm">
                  <input 
                    type="checkbox" 
                    id="logs" 
                    checked={includeLogs}
                    onChange={(e) => setIncludeLogs(e.target.checked)}
                    className="w-4 h-4 accent-red-500 bg-transparent border-platinum-300/30 rounded focus:ring-red-500" 
                  />
                  <label htmlFor="logs" className="text-xs text-platinum-300 cursor-pointer select-none">
                     {content.fields.sysInfo} <span className="text-platinum-300/40">(User Agent, Screen Res, Platform)</span>
                  </label>
               </div>

               {/* Submit Button */}
               <Button fullWidth type="submit" className="bg-red-600 hover:bg-red-700 shadow-red-500/20 hover:shadow-red-500/40">
                  {content.submit}
               </Button>

             </form>
           ) : (
             <div className="flex flex-col items-center justify-center py-12 text-center animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                   <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide text-green-500">SYSTEM LOGGED</h3>
                <p className="text-platinum-300/80 mb-8 max-w-sm mx-auto leading-relaxed font-mono text-sm">
                   {content.success}
                </p>
                <button 
                  onClick={onClose}
                  className="px-6 py-2 bg-[#0B1522] border border-platinum-300/20 text-platinum-300 hover:text-white hover:border-platinum-300/50 rounded-sm transition-all"
                >
                  {content.close}
                </button>
             </div>
           )}
        </div>

        {/* Footer Status Bar */}
        <div className="bg-[#020508] p-2 px-4 flex justify-between items-center text-[10px] text-platinum-300/30 font-mono border-t border-platinum-300/5">
           <span>PLATINUM_DEBUG_TOOL_V1.2</span>
           <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              SERVER_ONLINE
           </span>
        </div>

      </div>
    </div>
  );
};

export default BugReportModal;