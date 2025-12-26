// --- Interactive Grid Logic ---
function initGrid() {
    const container = document.getElementById('hero-container');
    const blockContainer = document.getElementById('grid-blocks-container');
    let lastBlock = { x: null, y: null };
    
    if (!container || !blockContainer) return;

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const gridSize = 60; // Matches CSS background-size
        
        // Calculate relative coordinates
        const relativeX = e.clientX - rect.left;
        const relativeY = e.clientY - rect.top;
        
        // Snap to grid
        const x = Math.floor(relativeX / gridSize) * gridSize;
        const y = Math.floor(relativeY / gridSize) * gridSize;

        // Prevent duplicates in same cell
        if (lastBlock.x === x && lastBlock.y === y) return;
        lastBlock = { x, y };

        // Create Block
        const block = document.createElement('div');
        block.className = 'absolute bg-electric-500 w-[60px] h-[60px] pointer-events-none animate-grid-fade border border-electric-500/50';
        block.style.left = `${x}px`;
        block.style.top = `${y}px`;
        
        blockContainer.appendChild(block);

        // Remove after animation (1.5s)
        setTimeout(() => {
            block.remove();
        }, 1500);
    });
}

// --- Scroll Logic ---
function initScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-platinum-900/95', 'backdrop-blur-md', 'border-platinum-300/10', 'py-4', 'shadow-xl');
            navbar.classList.remove('bg-transparent', 'border-transparent', 'py-6');
        } else {
            navbar.classList.remove('bg-platinum-900/95', 'backdrop-blur-md', 'border-platinum-300/10', 'py-4', 'shadow-xl');
            navbar.classList.add('bg-transparent', 'border-transparent', 'py-6');
        }
    });
}

// --- Smooth Scroll ---
function scrollToSection(id) {
    const element = document.getElementById(id);
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
}

// --- Mobile Menu Toggle ---
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if(btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

// --- Accordion Logic ---
function renderFAQ(items) {
    const container = document.getElementById('faq-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing

    items.forEach((item, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = "border border-platinum-300/20 bg-platinum-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-platinum-300/40";
        
        const button = document.createElement('button');
        button.className = "w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none";
        button.innerHTML = `
            <span class="text-lg font-medium tracking-wide text-platinum-50 question-text">${item.question}</span>
            <i data-lucide="chevron-down" class="w-5 h-5 text-platinum-300 transition-transform duration-300 icon-arrow"></i>
        `;

        const content = document.createElement('div');
        content.className = "max-h-0 opacity-0 transition-all duration-300 ease-in-out overflow-hidden content-body";
        content.innerHTML = `
            <div class="px-6 pb-6 pt-0 text-platinum-300 leading-relaxed font-light border-t border-platinum-300/10 mt-2">
                <div class="pt-4">${item.answer}</div>
            </div>
        `;

        // Click Event
        button.addEventListener('click', () => {
            const isOpen = content.classList.contains('max-h-96');
            
            // Close all others
            document.querySelectorAll('#faq-container .content-body').forEach(el => {
                el.classList.remove('max-h-96', 'opacity-100');
                el.classList.add('max-h-0', 'opacity-0');
            });
            document.querySelectorAll('#faq-container .question-text').forEach(el => el.classList.remove('text-electric-500'));
            document.querySelectorAll('#faq-container .icon-arrow').forEach(el => el.style.transform = 'rotate(0deg)');

            if (!isOpen) {
                content.classList.remove('max-h-0', 'opacity-0');
                content.classList.add('max-h-96', 'opacity-100');
                button.querySelector('.question-text').classList.add('text-electric-500');
                button.querySelector('.icon-arrow').style.transform = 'rotate(180deg)';
            }
        });

        wrapper.appendChild(button);
        wrapper.appendChild(content);
        container.appendChild(wrapper);
    });
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// --- Modal Logic ---
function openModal(type) {
    const currentLang = window.currentLanguage || 'en';
    // Safely access global TRANSLATIONS
    const translations = window.TRANSLATIONS || {};
    const content = translations[currentLang] || translations['en'];
    
    if (!content) return;

    if (type === 'privacy' || type === 'disclaimer') {
        const modal = document.getElementById('legal-modal');
        const titleEl = document.getElementById('legal-modal-title');
        const contentEl = document.getElementById('legal-modal-content');
        
        if (type === 'privacy') {
            titleEl.textContent = content.app.footer.privacy;
            contentEl.textContent = content.legal.privacy;
        } else {
            titleEl.textContent = content.app.footer.legalDisclaimer;
            contentEl.textContent = content.legal.disclaimer;
        }
        
        modal.classList.remove('hidden');
    } else if (type === 'bugReport') {
        document.getElementById('bug-modal').classList.remove('hidden');
        populateBugOptions(content);
    }
    document.body.style.overflow = 'hidden';
}

function closeModal(type) {
    if (type === 'legal') {
        document.getElementById('legal-modal').classList.add('hidden');
    } else if (type === 'bugReport') {
        document.getElementById('bug-modal').classList.add('hidden');
    }
    document.body.style.overflow = 'unset';
}

function populateBugOptions(content) {
    const typeSelect = document.getElementById('bug-type');
    const sevSelect = document.getElementById('bug-severity');
    
    if (!typeSelect || !sevSelect) return;

    // Clear
    typeSelect.innerHTML = '';
    sevSelect.innerHTML = '';
    
    content.app.bugReport.fields.typeOpts.forEach(opt => {
        const el = document.createElement('option');
        el.value = opt;
        el.textContent = opt;
        typeSelect.appendChild(el);
    });
    
    content.app.bugReport.fields.severityOpts.forEach(opt => {
        const el = document.createElement('option');
        el.value = opt;
        el.textContent = opt;
        sevSelect.appendChild(el);
    });
}

function submitBugReport(e) {
    e.preventDefault();
    const type = document.getElementById('bug-type').value;
    const severity = document.getElementById('bug-severity').value;
    const desc = document.getElementById('bug-desc').value;
    const email = document.getElementById('bug-email').value;

    const subject = `[BUG REPORT] ${type} - ${severity}`;
    let body = `--- PLATINUM+ OPTIMIZER BUG REPORT ---\n\n`;
    body += `TYPE: ${type}\n`;
    body += `SEVERITY: ${severity}\n`;
    body += `CONTACT: ${email || 'Not provided'}\n\n`;
    body += `DESCRIPTION:\n${desc}\n\n`;
    body += `--------------------------------------\n`;
    body += `SYSTEM DIAGNOSTICS (AUTO-GENERATED):\n`;
    body += `User Agent: ${navigator.userAgent}\n`;
    body += `Platform: ${navigator.platform}\n`;
    
    const mailtoLink = `mailto:platinumoptimizerhelp@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    setTimeout(() => {
        closeModal('bugReport');
        const form = document.getElementById('bug-form');
        if (form) form.reset();
    }, 500);
}

// --- Reviews Logic ---
function initReviews() {
    const stars = document.querySelectorAll('.star-btn');
    const ratingInput = document.getElementById('review-rating');

    stars.forEach(star => {
        star.addEventListener('mouseenter', () => {
            const val = parseInt(star.getAttribute('data-value'));
            highlightStars(val);
        });
        
        star.addEventListener('mouseleave', () => {
            const currentVal = parseInt(ratingInput.value || '0');
            highlightStars(currentVal);
        });

        star.addEventListener('click', () => {
            const val = parseInt(star.getAttribute('data-value'));
            ratingInput.value = val;
            highlightStars(val);
        });
    });
}

function highlightStars(val) {
    const stars = document.querySelectorAll('.star-btn');
    stars.forEach(star => {
        const starVal = parseInt(star.getAttribute('data-value'));
        const icon = star.querySelector('i');
        // Lucide icons are SVG inside i, so we modify class or fill
        // However, Lucide renders SVGs. Let's toggle classes.
        if (starVal <= val) {
            icon.classList.remove('text-platinum-300/30');
            icon.classList.add('text-electric-500', 'fill-electric-500');
            // Assuming we added a custom class or style to fill
            icon.style.fill = '#1F6FFF';
            icon.style.color = '#1F6FFF';
        } else {
            icon.classList.remove('text-electric-500', 'fill-electric-500');
            icon.classList.add('text-platinum-300/30');
            icon.style.fill = 'none';
            icon.style.color = '';
        }
    });
}

function submitReview(e) {
    e.preventDefault();
    const rating = document.getElementById('review-rating').value;
    if (rating === '0') return;

    // Simulate Network Request
    setTimeout(() => {
        document.getElementById('review-form-container').classList.add('hidden');
        document.getElementById('review-success').classList.remove('hidden');
        document.getElementById('review-success').classList.add('flex');
    }, 800);
}

function resetReviewForm() {
    document.getElementById('review-form').reset();
    document.getElementById('review-rating').value = '0';
    highlightStars(0);
    document.getElementById('review-success').classList.add('hidden');
    document.getElementById('review-success').classList.remove('flex');
    document.getElementById('review-form-container').classList.remove('hidden');
}

// --- Download & Copy Logic ---
function handleDownload() {
    const url = window.DOWNLOAD_URL || '#';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Platinum+Optimizer.exe');
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function handleCopyPassword() {
    const pass = window.REQUIRED_PASSWORD || "";
    navigator.clipboard.writeText(pass).then(() => {
        const btn = document.getElementById('copy-btn');
        const originalText = btn.innerHTML;
        const currentLang = window.currentLanguage || 'en';
        const copiedText = window.TRANSLATIONS[currentLang].app.download.copiedBtn;
        
        btn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-green-500"></i> ${copiedText}`;
        setTimeout(() => {
            // Restore original text based on current language
            const text = window.TRANSLATIONS[currentLang].app.download.copyBtn;
            btn.innerHTML = `<i data-lucide="copy" class="w-4 h-4"></i> ${text}`;
            if(window.lucide) window.lucide.createIcons();
        }, 2000);
        if(window.lucide) window.lucide.createIcons();
    });
}

// Export to window explicitly
window.initGrid = initGrid;
window.initScroll = initScroll;
window.scrollToSection = scrollToSection;
window.initMobileMenu = initMobileMenu;
window.renderFAQ = renderFAQ;
window.openModal = openModal;
window.closeModal = closeModal;
window.populateBugOptions = populateBugOptions;
window.submitBugReport = submitBugReport;
window.downloadFile = handleDownload; // Alias
window.handleDownload = handleDownload;
window.handleCopyPassword = handleCopyPassword;
window.initReviews = initReviews;
window.submitReview = submitReview;
window.resetReviewForm = resetReviewForm;