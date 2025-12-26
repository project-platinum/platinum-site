import React, { useEffect, useState, useRef, useCallback } from 'react';
import { 
  Check, 
  Shield, 
  ChevronRight,
  Menu,
  X,
  AlertTriangle,
  FileCode,
  Key,
  Copy,
  Download,
  Bug
} from 'lucide-react';
import Section from './components/Section';
import Button from './components/Button';
import Accordion from './components/Accordion';
import LegalOverlay from './components/LegalOverlay';
import BugReportModal from './components/BugReportModal'; // Import new modal
import VirusTotalWidget from './components/VirusTotalWidget';
import LanguageSelector from './components/LanguageSelector';
import ReviewSection from './components/ReviewSection'; 
import { getAppContent, getLegalContent, REQUIRED_PASSWORD } from './constants';

interface GridBlock {
  id: number;
  x: number;
  y: number;
}

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<'privacy' | 'disclaimer' | null>(null);
  const [isBugReportOpen, setIsBugReportOpen] = useState(false); // State for Bug Report
  const [currentLang, setCurrentLang] = useState('en');
  const [copied, setCopied] = useState(false);
  
  // Interactive Grid State
  const [activeBlocks, setActiveBlocks] = useState<GridBlock[]>([]);
  const lastBlockRef = useRef<{x: number, y: number} | null>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  // Load content based on current language
  const content = getAppContent(currentLang);
  const legalContent = getLegalContent(currentLang);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup old grid blocks to prevent memory leaks in the array
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlocks(prev => {
        const now = Date.now();
        // Keep blocks only if they are younger than 1.5s (animation duration)
        return prev.filter(block => now - block.id < 1500);
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleGridMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!gridContainerRef.current) return;
    
    const rect = gridContainerRef.current.getBoundingClientRect();
    const gridSize = 60; // Matches CSS background-size
    
    // Calculate snapped grid coordinates relative to the container
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;
    
    const x = Math.floor(relativeX / gridSize) * gridSize;
    const y = Math.floor(relativeY / gridSize) * gridSize;

    // Avoid adding the same block continuously if mouse is still inside the same cell
    if (lastBlockRef.current?.x === x && lastBlockRef.current?.y === y) {
      return;
    }

    lastBlockRef.current = { x, y };
    
    setActiveBlocks(prev => [
      ...prev, 
      { id: Date.now(), x, y }
    ]);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(REQUIRED_PASSWORD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    // Create a temporary link to force the specific filename
    const link = document.createElement('a');
    link.href = content.download.url;
    link.setAttribute('download', 'Platinum+Optimizer.exe');
    link.setAttribute('target', '_blank'); // Backup for some browsers
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-platinum-900 text-platinum-50 selection:bg-electric-500 selection:text-white overflow-x-hidden">
      
      {/* Legal Overlays */}
      <LegalOverlay 
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title={content.footer.privacy}
        content={legalContent.privacy}
        closeText={content.footer.closeBtn}
      />
      <LegalOverlay 
        isOpen={activeModal === 'disclaimer'}
        onClose={() => setActiveModal(null)}
        title={content.footer.legalDisclaimer}
        content={legalContent.disclaimer}
        closeText={content.footer.closeBtn}
      />
      
      {/* Bug Report Modal */}
      <BugReportModal 
         isOpen={isBugReportOpen}
         onClose={() => setIsBugReportOpen(false)}
         currentLang={currentLang}
      />

      {/* Sticky Navigation */}
      <nav 
        onMouseMove={handleGridMouseMove}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-platinum-900/95 backdrop-blur-md border-platinum-300/10 py-4 shadow-xl' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white flex items-center gap-3">
             <img 
               src="https://ik.imagekit.io/xsc5vax29/Logo%20Platinum%20Optimizer%201.png" 
               alt="Platinum+ Logo" 
               className="h-8 md:h-10 w-auto object-contain" 
             />
             <span className="truncate">Platinum+ Optimizer</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-platinum-300">
            <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">{content.nav.about}</button>
            <button onClick={() => scrollToSection('target')} className="hover:text-white transition-colors">{content.nav.target}</button>
            <button onClick={() => scrollToSection('activation')} className="hover:text-white transition-colors">{content.nav.howItWorks}</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">{content.nav.faq}</button>
            
            <div className="h-4 w-[1px] bg-platinum-300/20 mx-2"></div>
            
            <LanguageSelector 
              currentLang={currentLang} 
              onLanguageChange={setCurrentLang} 
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
           <div className="md:hidden absolute top-full left-0 right-0 bg-platinum-900 border-b border-platinum-300/10 p-6 flex flex-col space-y-4 shadow-2xl max-h-[80vh] overflow-y-auto">
              <button onClick={() => scrollToSection('features')} className="text-left py-2 text-platinum-300 hover:text-white">{content.nav.about}</button>
              <button onClick={() => scrollToSection('target')} className="text-left py-2 text-platinum-300 hover:text-white">{content.nav.target}</button>
              <button onClick={() => scrollToSection('activation')} className="text-left py-2 text-platinum-300 hover:text-white">{content.nav.howItWorks}</button>
              
              <LanguageSelector 
                currentLang={currentLang} 
                onLanguageChange={setCurrentLang} 
                mobile={true}
              />
           </div>
        )}
      </nav>

      {/* Hero Section */}
      <div 
        ref={gridContainerRef}
        onMouseMove={handleGridMouseMove}
        className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden px-4 bg-[#050a0f]"
      >
        
        {/* Technical Grid Background (Fishstrap Style) with Interactive Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Main Grid with Radial Fade */}
          <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
          
          {/* Dynamic Interactive Blocks */}
          {activeBlocks.map((block) => (
            <div
              key={block.id}
              className="absolute bg-electric-500 w-[60px] h-[60px] pointer-events-none animate-grid-fade border border-electric-500/50"
              style={{ 
                left: block.x, 
                top: block.y,
              }}
            ></div>
          ))}

          {/* Subtle Glow behind text */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-electric-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        </div>
        
        {/* Content Container - Expanded to 7xl for 3 columns */}
        <div className="max-w-[1440px] mx-auto px-2 md:px-6 relative z-10 pointer-events-none">
          
          {/* Re-enable pointer events for buttons/text interaction */}
          {/* 3-Column Layout: Image - Text - Image */}
          {/* MODIFIED GRID: Adjusted column ratios to give more space to images (1.2fr vs 0.8fr for text) */}
          <div className="pointer-events-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr_1.2fr] gap-8 items-center">
            
            {/* Left Column: Image Screenshot 1 (Order 2 on Mobile, 1 on Desktop) */}
            <div className="order-2 lg:order-1 relative group w-full max-w-lg mx-auto lg:max-w-none">
                <div className="text-center mb-4 text-electric-500 font-medium tracking-wide text-xs md:text-sm uppercase">
                  {content.hero.imageLabelLeft}
                </div>
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-electric-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                
                {/* Image Container - CHANGED rounded-2xl to rounded-xl to prevent text clipping in corners */}
                <div className="relative rounded-xl overflow-hidden border border-platinum-300/10 shadow-2xl bg-[#0B1522]">
                  <img 
                    src="https://ik.imagekit.io/xsc5vax29/Screenshot_80_upscayl_4x_upscayl-standard-4x.png" 
                    alt="Platinum+ Optimizer Interface Left" 
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                </div>
            </div>

            {/* Middle Column: Text & CTA (Order 1 on Mobile, 2 on Desktop) */}
            <div className="order-1 lg:order-2 text-center">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-5xl xl:text-7xl font-semibold leading-tight mb-6 md:mb-8 text-platinum-50 tracking-tight drop-shadow-lg">
                {content.hero.headline}
              </h1>
              <p className="text-base md:text-xl text-platinum-300 mb-8 md:mb-12 leading-relaxed font-light">
                {content.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button onClick={handleDownload} className="w-full sm:w-auto shadow-electric-500/20">
                  <Download className="mr-2 w-5 h-5" />
                  {content.hero.ctaDownloadExe}
                </Button>
              </div>
              <div className="mt-8 flex justify-center">
                 <button onClick={() => scrollToSection('features')} className="text-platinum-300 hover:text-white text-sm flex items-center gap-1 transition-colors">
                    {content.hero.ctaLearn} <ChevronRight size={14} />
                 </button>
              </div>
            </div>

            {/* Right Column: Image Screenshot 2 (Order 3 on Mobile, 3 on Desktop) */}
            <div className="order-3 lg:order-3 relative group w-full max-w-lg mx-auto lg:max-w-none">
                <div className="text-center mb-4 text-electric-500 font-medium tracking-wide text-xs md:text-sm uppercase">
                  {content.hero.imageLabelRight}
                </div>
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-l from-electric-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                
                {/* Image Container - CHANGED rounded-2xl to rounded-xl */}
                <div className="relative rounded-xl overflow-hidden border border-platinum-300/10 shadow-2xl bg-[#0B1522]">
                  <img 
                    src="https://ik.imagekit.io/xsc5vax29/Screenshot_79.png" 
                    alt="Platinum+ Optimizer Interface Right" 
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent pointer-events-none"></div>
                </div>
            </div>

          </div>
        </div>

        {/* Bottom Fade to blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-platinum-900 to-transparent pointer-events-none"></div>
      </div>

      {/* What is it */}
      <Section id="features" background="darker">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="absolute -inset-4 bg-electric-500/10 blur-xl rounded-full"></div>
            <div className="relative bg-platinum-900 border border-platinum-300/10 p-6 md:p-8 rounded-sm shadow-2xl">
              <div className="space-y-4 font-mono text-xs md:text-sm text-platinum-300/80">
                <div className="flex items-center gap-3 border-b border-platinum-300/5 pb-2">
                  <span className="text-electric-500">{'>'}</span> Initializing Kernel optimization...
                </div>
                <div className="flex items-center gap-3 border-b border-platinum-300/5 pb-2">
                  <span className="text-electric-500">{'>'}</span> Calibrating CPU thread affinity...
                </div>
                <div className="flex items-center gap-3 border-b border-platinum-300/5 pb-2">
                  <span className="text-electric-500">{'>'}</span> Reducing IRQ latency...
                </div>
                <div className="flex items-center gap-3 text-electric-500">
                  <span className="animate-pulse">_</span> System Ready
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
             <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-6">
              {content.about.title}
             </h2>
             <div className="w-20 h-1 bg-electric-500 mb-8"></div>
             <p className="text-platinum-300 text-base md:text-lg leading-relaxed mb-6">
               {content.about.description1}
             </p>
             <p className="text-platinum-300 text-base md:text-lg leading-relaxed">
               {content.about.description2}
             </p>
          </div>
        </div>
      </Section>

      {/* Target Audience */}
      <Section id="target">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-4">{content.target.title}</h2>
          <div className="w-12 h-1 bg-electric-500 mx-auto"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.target.items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="group bg-[#0E1F33] p-8 border border-platinum-300/5 hover:border-electric-500/30 transition-all duration-300 hover:-translate-y-1 rounded-sm shadow-lg hover:shadow-electric-500/5">
                <div className="w-12 h-12 bg-platinum-900 rounded-full flex items-center justify-center mb-6 text-electric-500 group-hover:scale-110 transition-transform duration-300 border border-platinum-300/10">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium mb-3 text-platinum-50">{item.title}</h3>
                <p className="text-platinum-300/80 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Benefits */}
      <Section id="benefits" background="darker">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-4">{content.benefits.title}</h2>
          </div>
          <div className="bg-platinum-900 border border-platinum-300/10 p-6 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
             <ul className="space-y-6 relative z-10">
               {content.benefits.items.map((benefit, idx) => (
                 <li key={idx} className="flex items-start gap-4">
                   <div className="mt-1 w-5 h-5 rounded-full border border-electric-500 flex items-center justify-center flex-shrink-0">
                      <div className="w-2.5 h-2.5 bg-electric-500 rounded-full"></div>
                   </div>
                   <span className="text-base md:text-lg text-platinum-300">{benefit}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </Section>

      {/* Security */}
      <Section id="security">
        <div className="bg-gradient-to-br from-[#0E1F33] to-[#0B1C2D] border border-platinum-300/10 p-6 md:p-16 rounded-sm relative overflow-hidden">
           <div className="flex flex-col md:flex-row items-center gap-10">
             <div className="flex-shrink-0">
               <div className="w-20 h-20 md:w-24 md:h-24 bg-electric-500/10 rounded-full flex items-center justify-center border border-electric-500/20">
                 <Shield size={32} className="text-electric-500 md:w-10 md:h-10" />
               </div>
             </div>
             <div>
               <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-platinum-50">{content.security.title}</h2>
               <p className="text-platinum-300 text-base md:text-lg leading-relaxed">
                 {content.security.content}
               </p>
             </div>
           </div>
        </div>
      </Section>

      {/* VirusTotal & Disclaimer Section */}
      <Section id="virustotal" background="darker">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-4">{content.virusTotal.title}</h2>
          <p className="text-platinum-300 text-base md:text-lg max-w-2xl mx-auto">{content.virusTotal.description}</p>
        </div>
        
        {/* Visual Widget */}
        <div className="mb-12">
           <VirusTotalWidget />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
           {/* False Positive Note */}
           <div className="bg-electric-500/5 border-l-4 border-electric-500 p-6 rounded-r-sm">
              <p className="text-platinum-300 text-sm leading-relaxed">
                <strong className="text-electric-500 block mb-2">{content.virusTotal.technicalNote}</strong>
                {content.virusTotal.note}
              </p>
           </div>

           {/* Giant Disclaimer */}
           <div className="border-2 border-red-500/50 bg-red-900/10 p-6 md:p-10 rounded-sm relative overflow-hidden group hover:bg-red-900/20 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                 <AlertTriangle size={80} className="text-red-500 md:w-[120px] md:h-[120px]" />
              </div>
              <div className="relative z-10">
                 <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-4 flex items-center gap-3">
                    <AlertTriangle size={24} className="md:w-7 md:h-7" />
                    {content.virusTotal.improperUseTitle}
                 </h3>
                 <p className="text-platinum-50 text-base md:text-lg leading-relaxed font-medium">
                    {content.virusTotal.improperUseText}
                 </p>
              </div>
           </div>
        </div>
      </Section>

      {/* Manual Activation Guide (Replaces Download) */}
      <Section id="activation" className="text-center">
        <div className="max-w-4xl mx-auto py-8 md:py-12">
          {/* Badge */}
          <div className="mb-8 inline-block px-4 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-500 text-sm font-semibold tracking-wide">
             {content.download.version}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-white px-2 break-words">{content.steps.title}</h2>
          
          <div className="bg-[#0B1522] border border-platinum-300/20 rounded-sm p-5 md:p-12 shadow-2xl relative overflow-hidden text-left mx-2 md:mx-0">
             <div className="absolute top-0 right-0 w-40 h-40 bg-electric-500/10 rounded-full blur-3xl pointer-events-none"></div>
             
             <div className="grid md:grid-cols-2 gap-10 md:gap-12">
               {/* Steps List */}
               <div className="space-y-8">
                  {content.steps.items.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-electric-500 text-white rounded-full flex items-center justify-center font-bold font-serif shadow-lg shadow-electric-500/20">
                        {step.number}
                      </div>
                      <div className="flex-1 min-w-0"> {/* min-w-0 ensures flex child shrinks properly */}
                        <h4 className="text-platinum-50 font-semibold mb-1 text-base md:text-lg">{step.title}</h4>
                        <p className="text-platinum-300/60 text-sm leading-relaxed break-words">{step.description}</p>
                      </div>
                    </div>
                  ))}
               </div>

               {/* Password & Download Box */}
               <div className="flex flex-col justify-center space-y-6">
                  
                  {/* Main Download Area */}
                  <div className="space-y-4">
                    <Button fullWidth onClick={handleDownload} className="text-lg py-4 md:py-5 shadow-electric-500/30">
                       <Download className="mr-2 w-6 h-6" />
                       <span className="truncate">{content.download.buttonExe}</span>
                    </Button>
                    <div className="text-center text-xs font-mono text-platinum-300/40 break-all px-2">
                       SHA256: b3d0ec5bbaabe2dc22a14decf9af5bdc1b1280ddad9eade1aeff0ae1aa580a3c
                    </div>
                  </div>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-platinum-300/10"></div>
                    <span className="flex-shrink-0 mx-4 text-platinum-300/30 text-xs uppercase tracking-widest">Secure Access</span>
                    <div className="flex-grow border-t border-platinum-300/10"></div>
                  </div>

                  {/* Key Box */}
                  <div className="bg-[#08101a] border border-electric-500/30 p-4 md:p-6 rounded-sm relative group">
                    <div className="absolute -top-3 left-4 bg-[#08101a] px-2 text-electric-500 text-xs font-bold tracking-widest flex items-center gap-1">
                      <Key size={12} />
                      ACCESS KEY
                    </div>
                    <code className="block font-mono text-green-400 break-all text-sm mb-4 select-all bg-black/30 p-2 rounded border border-white/5">
                      {REQUIRED_PASSWORD}
                    </code>
                    <button 
                      onClick={handleCopyPassword}
                      className="w-full flex items-center justify-center gap-2 bg-platinum-800 hover:bg-platinum-700 text-platinum-300 py-3 rounded-sm transition-colors text-sm font-medium border border-platinum-300/10 active:scale-[0.98]"
                    >
                      {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                      {copied ? content.download.copiedBtn : content.download.copyBtn}
                    </button>
                  </div>
                  
               </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Reviews Section */}
      <Section id="reviews" background="dark">
         <ReviewSection currentLang={currentLang} />
      </Section>

      {/* FAQ */}
      <Section id="faq" background="darker">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-4">{content.faq.title}</h2>
        </div>
        <Accordion items={content.faq.items} />
      </Section>

      {/* Footer */}
      <footer className="bg-[#050D15] py-12 border-t border-platinum-300/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-platinum-300/60 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <span>{content.footer.copyright}</span>
            <span className="text-xs text-platinum-300/40">Developed by two independent engineers.</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
            <button onClick={() => setActiveModal('privacy')} className="hover:text-electric-500 transition-colors">{content.footer.privacy}</button>
            <button onClick={() => setActiveModal('disclaimer')} className="hover:text-electric-500 transition-colors">{content.footer.legalDisclaimer}</button>
            
            {/* Bug Report Button */}
            <div className="h-4 w-[1px] bg-platinum-300/20 hidden sm:block"></div>
            <button 
              onClick={() => setIsBugReportOpen(true)}
              className="flex items-center gap-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-1.5 rounded-sm border border-transparent hover:border-red-500/20 transition-all"
            >
              <Bug size={14} />
              <span>{content.bugReport.btnLabel}</span>
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-8 text-xs text-platinum-300/30 text-center md:text-left leading-relaxed max-w-2xl mx-auto md:mx-0">
          {content.footer.disclaimer}
        </div>
      </footer>

    </div>
  );
};

export default App;