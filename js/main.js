// Global State
window.currentLanguage = 'en';

// Explicitly define global functions immediately
window.changeLanguage = function(lang) {
    window.currentLanguage = lang;
    updateLanguage(lang);
}

window.getNestedValue = function(obj, path) {
    return path.split('.').reduce((prev, curr) => {
        return prev ? prev[curr] : null;
    }, obj);
}

window.updateLanguage = function(lang) {
    const translations = window.TRANSLATIONS || {};
    const content = (translations[lang] || translations['en']).app;
    
    // 1. Update static text via data-i18n attributes
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = window.getNestedValue(content, key);
        if (value) {
            el.innerText = value;
        }
    });

    // 2. Update Dynamic Sections
    
    // Target Audience Grid
    const targetGrid = document.getElementById('target-grid');
    if (targetGrid) {
        targetGrid.innerHTML = '';
        const iconsMap = window.ICONS_MAP || {};
        
        content.target.items.forEach(item => {
            const div = document.createElement('div');
            div.className = "group bg-[#0E1F33] p-8 border border-platinum-300/5 hover:border-electric-500/30 transition-all duration-300 hover:-translate-y-1 rounded-sm shadow-lg hover:shadow-electric-500/5";
            const iconName = iconsMap[item.icon] || 'activity';
            
            div.innerHTML = `
                <div class="w-12 h-12 bg-platinum-900 rounded-full flex items-center justify-center mb-6 text-electric-500 group-hover:scale-110 transition-transform duration-300 border border-platinum-300/10">
                    <i data-lucide="${iconName}" class="w-6 h-6"></i>
                </div>
                <h3 class="text-xl font-medium mb-3 text-platinum-50">${item.title}</h3>
                <p class="text-platinum-300/80 text-sm leading-relaxed">${item.description}</p>
            `;
            targetGrid.appendChild(div);
        });
    }

    // Benefits List
    const benefitsList = document.getElementById('benefits-list');
    if (benefitsList) {
        benefitsList.innerHTML = '';
        content.benefits.items.forEach(benefit => {
            const li = document.createElement('li');
            li.className = "flex items-start gap-4";
            li.innerHTML = `
                <div class="mt-1 w-5 h-5 rounded-full border border-electric-500 flex items-center justify-center flex-shrink-0">
                    <div class="w-2.5 h-2.5 bg-electric-500 rounded-full"></div>
                </div>
                <span class="text-base md:text-lg text-platinum-300">${benefit}</span>
            `;
            benefitsList.appendChild(li);
        });
    }

    // Steps List (Activation)
    const stepsContainer = document.getElementById('steps-container');
    if (stepsContainer && content.steps) {
        stepsContainer.innerHTML = '';
        content.steps.items.forEach(step => {
            const div = document.createElement('div');
            div.className = "flex gap-4";
            div.innerHTML = `
                <div class="flex-shrink-0 w-8 h-8 bg-electric-500 text-white rounded-full flex items-center justify-center font-bold font-serif shadow-lg shadow-electric-500/20">
                    ${step.number}
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="text-platinum-50 font-semibold mb-1 text-base md:text-lg">${step.title}</h4>
                    <p class="text-platinum-300/60 text-sm leading-relaxed break-words">${step.description}</p>
                </div>
            `;
            stepsContainer.appendChild(div);
        });
    }
    
    // Access Key Injection
    const keyDisplay = document.getElementById('access-key-display');
    if (keyDisplay) {
        keyDisplay.innerText = window.REQUIRED_PASSWORD || "";
    }

    // Review Placeholders
    const reviewTextArea = document.getElementById('review-text-area');
    if (reviewTextArea && content.reviews) {
        reviewTextArea.placeholder = content.reviews.placeholderReview;
    }

    // Bug Report Placeholders
    const bugDesc = document.getElementById('bug-desc');
    if (bugDesc) {
        bugDesc.placeholder = content.bugReport.fields.descPlaceholder;
    }

    // FAQ
    if (window.renderFAQ) {
        window.renderFAQ(content.faq.items);
    }

    // Update Language Selector UI (Desktop)
    const flags = { en: '🇬🇧', it: '🇮🇹', ru: '🇷🇺' };
    const names = { en: 'EN', it: 'IT', ru: 'RU' };
    
    const currentFlagEl = document.getElementById('current-flag-desktop');
    const currentNameEl = document.getElementById('current-lang-name-desktop');
    
    if (currentFlagEl) currentFlagEl.innerText = flags[lang];
    if (currentNameEl) currentNameEl.innerText = names[lang];

    // Re-initialize icons for newly added DOM elements
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Initialization on Load
document.addEventListener('DOMContentLoaded', () => {
    if (window.initGrid) window.initGrid();
    if (window.initScroll) window.initScroll();
    if (window.initMobileMenu) window.initMobileMenu();
    if (window.initReviews) window.initReviews();
    
    // Default Language
    window.updateLanguage('en'); 
});