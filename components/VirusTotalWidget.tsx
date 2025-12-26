import React from 'react';

const VirusTotalWidget: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-2 md:px-0">
      {/* Main Card Container */}
      <div className="rounded-sm overflow-hidden border border-platinum-300/10 shadow-2xl shadow-black/50 bg-[#0B1522] relative group hover:border-electric-500/30 transition-colors duration-300">
        
        <a 
          href="https://www.virustotal.com/gui/file/40bd9a337e4e1896c54fd57847a1de7176d588b6ac42bab7c02df6b07d666505" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block relative cursor-pointer"
          aria-label="View full VirusTotal Analysis Report"
        >
          {/* Image overlay gradient for better integration with dark theme - fades out on hover for crystal clear view */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1522]/30 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-0 z-10"></div>
          
          <img 
            src="https://ik.imagekit.io/xsc5vax29/Screenshot_78.png" 
            alt="VirusTotal Analysis Result - 0/62 No Security Vendors Flagged This File As Malicious" 
            className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.01]"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default VirusTotalWidget;