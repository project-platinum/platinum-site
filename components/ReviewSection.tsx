import React, { useState } from 'react';
import { Star, MessageSquare, Monitor, CheckCircle, Activity } from 'lucide-react';
import Button from './Button';
import { getAppContent } from '../constants';

interface ReviewSectionProps {
  currentLang: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ currentLang }) => {
  const content = getAppContent(currentLang).reviews;
  
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [specs, setSpecs] = useState('');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-3 text-white">
          {content.title}
        </h2>
        <div className="w-20 h-1 bg-electric-500 mx-auto mb-4"></div>
        <p className="text-platinum-300 text-sm md:text-base">{content.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Form Column */}
        <div className="lg:col-span-5 bg-[#0B1522] border border-platinum-300/10 rounded-sm p-6 md:p-8 shadow-2xl relative overflow-hidden group">
          {/* Decorative glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
               <h3 className="text-xl font-medium text-platinum-50 flex items-center gap-2">
                 <MessageSquare size={20} className="text-electric-500" />
                 {content.formTitle}
               </h3>

               {/* Star Rating */}
               <div className="flex gap-1 justify-center py-4 bg-black/20 rounded border border-white/5">
                 {[1, 2, 3, 4, 5].map((star) => (
                   <button
                     key={star}
                     type="button"
                     onMouseEnter={() => setHoverRating(star)}
                     onMouseLeave={() => setHoverRating(0)}
                     onClick={() => setRating(star)}
                     className="p-1 focus:outline-none transform transition-transform hover:scale-110"
                   >
                     <Star 
                       size={28} 
                       fill={(hoverRating || rating) >= star ? '#1F6FFF' : 'none'} 
                       className={(hoverRating || rating) >= star ? 'text-electric-500' : 'text-platinum-300/30'} 
                       strokeWidth={1.5}
                     />
                   </button>
                 ))}
               </div>

               <div className="space-y-4">
                 <div>
                   <label className="block text-xs font-bold text-platinum-300 uppercase tracking-wider mb-2">{content.labelName}</label>
                   <input 
                     type="text" 
                     required
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     className="w-full bg-[#050a0f] border border-platinum-300/20 text-platinum-50 px-4 py-3 rounded-sm focus:border-electric-500 focus:ring-1 focus:ring-electric-500 outline-none transition-all placeholder-white/10"
                     placeholder="e.g. ShadowSlayer99"
                   />
                 </div>

                 <div>
                   <label className="block text-xs font-bold text-platinum-300 uppercase tracking-wider mb-2">{content.labelSpecs}</label>
                   <div className="relative">
                     <Monitor className="absolute left-3 top-3.5 text-platinum-300/30" size={16} />
                     <input 
                       type="text" 
                       required
                       value={specs}
                       onChange={(e) => setSpecs(e.target.value)}
                       className="w-full bg-[#050a0f] border border-platinum-300/20 text-platinum-50 pl-10 pr-4 py-3 rounded-sm focus:border-electric-500 focus:ring-1 focus:ring-electric-500 outline-none transition-all placeholder-white/10 font-mono text-sm"
                       placeholder="e.g. Ryzen 5800X3D / RTX 3080"
                     />
                   </div>
                 </div>

                 <div>
                   <label className="block text-xs font-bold text-platinum-300 uppercase tracking-wider mb-2">{content.labelReview}</label>
                   <textarea 
                     rows={4}
                     required
                     value={text}
                     onChange={(e) => setText(e.target.value)}
                     className="w-full bg-[#050a0f] border border-platinum-300/20 text-platinum-50 px-4 py-3 rounded-sm focus:border-electric-500 focus:ring-1 focus:ring-electric-500 outline-none transition-all placeholder-white/10 resize-none"
                     placeholder={content.placeholderReview}
                   />
                 </div>
               </div>

               <Button fullWidth type="submit" disabled={rating === 0}>
                  {content.btnSubmit}
               </Button>
            </form>
          ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-500">
               <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                 <CheckCircle size={40} className="text-green-500" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2 tracking-wide">SYSTEM ACKNOWLEDGED</h3>
               <p className="text-platinum-300/80 mb-8 max-w-xs mx-auto leading-relaxed">
                 {content.successMessage}
               </p>
               <button 
                 onClick={() => {
                   setSubmitted(false);
                   setName('');
                   setSpecs('');
                   setText('');
                   setRating(0);
                 }}
                 className="text-sm text-electric-500 hover:text-white underline underline-offset-4 decoration-electric-500/50"
               >
                 Insert New Entry
               </button>
            </div>
          )}
        </div>

        {/* Reviews Feed Column (Empty State) */}
        <div className="lg:col-span-7 space-y-6">
           <div className="flex items-center justify-between border-b border-platinum-300/10 pb-4 mb-6">
             <h3 className="text-lg font-medium text-platinum-300 flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
               {content.recentReports}
             </h3>
             <span className="text-xs font-mono text-platinum-300/40">LIVE FEED</span>
           </div>

           {/* Empty/Loading State Placeholder */}
           <div className="flex flex-col items-center justify-center py-24 border border-dashed border-platinum-300/10 bg-[#08101a]/30 rounded-sm text-platinum-300/30 gap-6">
              <div className="relative">
                 <div className="w-16 h-16 rounded-full border border-platinum-300/10 flex items-center justify-center bg-black/40">
                    <Activity size={32} className="text-platinum-300/20" />
                 </div>
                 <span className="absolute top-0 right-0 flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-500 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-electric-500"></span>
                 </span>
              </div>
              <div className="text-center space-y-1">
                 <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric-500/50">Awaiting Data Stream</div>
                 <div className="text-[10px] text-platinum-300/20">System listening for incoming performance reports...</div>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
};

export default ReviewSection;