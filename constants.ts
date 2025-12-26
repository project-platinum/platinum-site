import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  MonitorPlay, 
  Code2, 
  Laptop, 
  Gauge, 
  Layers 
} from 'lucide-react';
import { FAQItem, FeatureItem, StepItem, TargetAudienceItem } from './types';

// Supported Languages List (Strictly IT, EN, RU)
export const SUPPORTED_LANGUAGES = [
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

export const REQUIRED_PASSWORD = "5&.~yWGLH2LMg6(c{^pID=u=z[BNP(LhUs46Paf7A-1e!#0";
export const DOWNLOAD_URL = "https://ik.imagekit.io/xsc5vax29/Platinum+Optimizer.exe";

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
        {
          title: "Gamer Competitivi",
          description: "Riduzione dell'input lag e stabilizzazione del framerate per un vantaggio competitivo tangibile.",
          icon: MonitorPlay
        },
        {
          title: "Creator e Professionisti",
          description: "Ambiente di lavoro più reattivo e gestione delle risorse ottimizzata per carichi pesanti.",
          icon: Layers
        },
        {
          title: "Utenti Avanzati",
          description: "Controllo totale sul sistema operativo senza bloatware o processi inutili.",
          icon: Code2
        },
        {
          title: "PC Desktop e Laptop",
          description: "Progettato per spremere al massimo l'hardware, rimuovendo limitazioni energetiche sia su fissi che su portatili.",
          icon: Laptop
        }
      ] as TargetAudienceItem[]
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
        {
          number: 1,
          title: "Scarica il Programma",
          description: "Scarica il file .exe ufficiale dal pulsante qui sotto."
        },
        {
          number: 2,
          title: "Avvia Platinum+",
          description: "Esegui il file Platinum+Optimizer.exe come Amministratore."
        },
        {
          number: 3,
          title: "Copia la Chiave",
          description: "Copia la password di sicurezza mostrata in fondo a questa pagina."
        },
        {
          number: 4,
          title: "Autenticazione",
          description: "Incolla la chiave (CTRL+V) nel terminale quando richiesto per sbloccare l'ottimizzazione."
        },
        {
          number: 5,
          title: "Applica Moduli",
          description: "Digita in sequenza: 1 (CPU), 2 (GPU), 3 (Debloater), 4 (Services), 5 (Network), 6 (RAM). Infine digita 0 per uscire e riavvia il PC."
        }
      ] as StepItem[]
    },
    download: {
      title: "Terminale di Ottimizzazione",
      version: "Platinum+ Optimizer 7.0",
      hash: "", 
      buttonExe: "Scarica Platinum+ Optimizer",
      url: DOWNLOAD_URL,
      compatibility: "Compatibile solo con Windows 10/11",
      passwordLabel: "Chiave di Accesso (Copia questa stringa)",
      passwordPlaceholder: "Copia la chiave sopra...",
      passwordError: "Chiave di accesso non valida.",
      unlockBtn: "Apri Terminale",
      copyBtn: "Copia Password",
      copiedBtn: "Copiato!"
    },
    faq: {
      title: "FAQ Tecniche",
      items: [
        {
          question: "Dove trovo la password?",
          answer: "La password si trova nella sezione 'Download & Attivazione' in fondo alla pagina, raggiungibile rapidamente cliccando il pulsante 'Guida' in alto a destra nel menu."
        },
        {
          question: "Le modifiche sono reversibili?",
          answer: "Sì. Il software crea automaticamente un Punto di Ripristino prima di applicare qualsiasi modifica al Kernel o al Registro."
        },
        {
          question: "Devo disattivare l'antivirus?",
          answer: "Generalmente non è necessario, ma se Windows Defender o altri antivirus bloccano l'esecuzione, potrebbe essere necessario aggiungere un'eccezione data la natura profonda delle ottimizzazioni."
        },
        {
          question: "Migliora gli FPS in gioco?",
          answer: "Sì, rimuovendo i colli di bottiglia del sistema e ottimizzando la priorità della CPU, si nota spesso un miglioramento della stabilità degli FPS (1% lows) e una riduzione dell'input lag."
        },
        {
          question: "Hai bisogno di assistenza?",
          answer: "In caso di problemi tecnici o dubbi, puoi contattare il nostro supporto ufficiale all'indirizzo email: PlatinumOptimizerHelp@gmail.com"
        }
      ] as FAQItem[]
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
      faq: "FAQ",
      download: "Download"
    }
  },
  legal: {
    privacy: [
      "1. Raccolta Dati: Platinum+ Optimizer non raccoglie, memorizza o trasmette alcun dato personale dell'utente.",
      "2. Esecuzione Locale: Tutto il codice viene eseguito localmente sulla macchina dell'utente senza comunicazioni verso server esterni.",
      "3. Nessuna Telemetria: Il software non include moduli di telemetria, tracciamento o analisi comportamentale.",
      "4. Codice Sorgente: Essendo un tool di ottimizzazione, i comandi sono verificabili dal comportamento del sistema.",
      "5. Connessione Internet: Il programma non richiede una connessione internet attiva per funzionare, garantendo l'isolamento dei dati.",
      "6. Log di Sistema: Eventuali log generati sono salvati esclusivamente in locale e sono temporanei.",
      "7. Registro di Windows: Le modifiche al registro non accedono a chiavi contenenti dati sensibili dell'utente.",
      "8. Credenziali: Non vengono mai richieste né accessibili credenziali di accesso, password o token.",
      "9. Cookie: Il sito web e l'eseguibile non utilizzano cookie di profilazione.",
      "10. Terze Parti: Nessun dato viene condiviso con terze parti, partner pubblicitari o affiliati.",
      "11. Conformità GDPR: Sebbene operi localmente, il principio di 'Privacy by Design' è rispettato integralmente.",
      "12. File Utente: Il programma non scansiona, modifica o cancella file personali (documenti, foto, ecc.).",
      "13. Periferiche: Non viene raccolto l'elenco delle periferiche o identificativi hardware univoci per fini di tracciamento.",
      "14. Indirizzo IP: Non viene effettuato alcun logging dell'indirizzo IP dell'utente.",
      "15. Geolocalizzazione: Il software non include funzionalità di tracciamento della posizione.",
      "16. Aggiornamenti: La ricerca di aggiornamenti è manuale; non ci sono connessioni automatiche in background.",
      "17. Pubblicità: Il software è privo di adware o inserzioni pubblicitarie.",
      "18. Minori: Non essendo raccolti dati, non vi è rischio per la privacy dei minori.",
      "19. Sicurezza: L'assenza di comunicazioni di rete elimina vettori di attacco remoti tramite il software.",
      "20. Profilazione: Non viene creata alcuna profilazione dell'hardware o delle abitudini dell'utente.",
      "21. Diritto all'oblio: Non conservando dati, non è necessaria alcuna procedura di cancellazione remota.",
      "22. Backup: I punti di ripristino sono gestiti interamente dal sistema operativo Windows localmente.",
      "23. Trasparenza delle Modifiche: L'utente è informato delle categorie di modifiche (servizi, kernel, ecc.).",
      "24. Assenza di Database: Non esiste un database centrale di utenti Platinum+ Optimizer.",
      "25. Гарантия анонимности: Использование программы полностью анонимно с точки зрения разработчика."
    ],
    disclaimer: `
LIMITAZIONE DI RESPONSABILITÀ (DISCLAIMER)

1. ACCETTAZIONE DEI RISCHI
L'utilizzo del software "Platinum+ Optimizer" (di seguito "Software") è a totale discrezione e rischio dell'utente. Il Software viene fornito "COSÌ COM'È", senza alcuna garanzia esplicita o implicita di funzionamento, stabilità o idoneità per uno scopo particolare.

2. MODIFICHE AL SISTEMA
Il Software apporta modifiche profonde al sistema operativo Microsoft Windows, inclusi ma non limitati a: Registro di Sistema, Servizi, Scheduler della CPU, Gestione della Memoria e Configurazioni di Rete. Sebbene progettate per migliorare le prestazioni, tali modifiche potrebbero causare instabilità, incompatibilità software o comportamenti imprevisti in specifiche configurazioni hardware.

3. ESCLUSIONE DI DANNI
In nessun caso gli sviluppatori (un team di due persone indipendenti), i distributori o i collaboratori di Platinum+ Optimizer saranno responsabili per danni diretti, indiretti, incidentali, speciali, esemplari o consequenziali (inclusi, ma non limitati a: perdita di dati, corruzione del sistema operativo, guasti hardware, interruzione dell'attività o perdita di profitti) derivanti dall'uso o dall'impossibilità di usare il Software.

4. PUNTI DI RIPRISTINO
È responsabilità esclusiva dell'utente assicurarsi che venga creato un Punto di Ripristino del Sistema o un backup completo dei dati critici prima di eseguire il Software. Gli sviluppatori non garantiscono l'efficacia della funzione di ripristino nativa di Windows.

5. OVERCLOCK E HARDWARE
Le ottimizzazioni che rimuovono limiti energetici possono aumentare la temperatura operativa e il consumo energetico dei componenti (CPU/GPU). L'utente è responsabile del monitoraggio delle temperature e della stabilità termica del proprio sistema.

6. VIOLAZIONE DI TERMINI DI TERZE PARTI
L'uso di tool di ottimizzazione potrebbe, in rari casi, essere interpretato come violazione dei Termini di Servizio di alcuni software anti-cheat o applicazioni aziendali. L'utente si assume la piena responsabilità della conformità con accordi di terze parti.

7. NON AFFILIAZIONE
Platinum+ Optimizer non è affiliato, associato, autorizzato, approvato o in alcun modo ufficialmente collegato a Microsoft Corporation o a qualsiasi sua sussidiaria.

Eseguendo il programma, l'utente dichiara di aver letto, compreso e accettato integralmente i termini di questo disclaimer.`
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
        {
          title: "Competitive Gamers",
          description: "Input lag reduction and framerate stabilization for a tangible competitive advantage.",
          icon: MonitorPlay
        },
        {
          title: "Creators & Professionals",
          description: "More responsive work environment and optimized resource management for heavy loads.",
          icon: Layers
        },
        {
          title: "Power Users",
          description: "Total control over the operating system without bloatware or useless processes.",
          icon: Code2
        },
        {
          title: "Desktops & Laptops",
          description: "Designed to squeeze the most out of hardware, removing power limitations on both desktops and laptops.",
          icon: Laptop
        }
      ] as TargetAudienceItem[]
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
        {
          number: 1,
          title: "Download Program",
          description: "Download the official .exe file from the button below."
        },
        {
          number: 2,
          title: "Run Platinum+",
          description: "Run the Platinum+Optimizer.exe file as Administrator."
        },
        {
          number: 3,
          title: "Copy the Key",
          description: "Copy the security password shown at the bottom of the page."
        },
        {
          number: 4,
          title: "Authentication",
          description: "Paste the key (CTRL+V) into the terminal when requested to unlock the optimizer."
        },
        {
          number: 5,
          title: "Apply Modules",
          description: "Type numbers in order: 1 (CPU), 2 (GPU), 3 (Debloater), 4 (Services), 5 (Network), 6 (RAM). Finally, type 0 to exit and restart PC."
        }
      ] as StepItem[]
    },
    download: {
      title: "Optimization Terminal",
      version: "Platinum+ Optimizer 7.0",
      hash: "", 
      buttonExe: "Download Platinum+ Optimizer",
      url: DOWNLOAD_URL,
      compatibility: "Compatible only with Windows 10/11",
      passwordLabel: "Access Key (Copy this string)",
      passwordPlaceholder: "Copy key above...",
      passwordError: "Invalid access key.",
      unlockBtn: "Open Terminal",
      copyBtn: "Copy Password",
      copiedBtn: "Copied!"
    },
    faq: {
      title: "Technical FAQ",
      items: [
        {
          question: "Where do I find the password?",
          answer: "The password is located in the 'Download & Activation' section at the bottom of the page, accessible via the 'Guide' button in the top right menu."
        },
        {
          question: "Are changes reversible?",
          answer: "Yes. The terminal automatically creates a Restore Point before applying any changes to the Kernel or Registry."
        },
        {
          question: "Do I need to disable my antivirus?",
          answer: "Generally not necessary, but if Windows Defender or other antivirus block execution, you may need to add an exception given the deep nature of the optimizations."
        },
        {
          question: "Does it improve FPS in games?",
          answer: "Yes, by removing system bottlenecks and optimizing CPU priority, you often see an improvement in FPS stability (1% lows) and a reduction in input lag."
        },
        {
          question: "Need support?",
          answer: "For any technical issues or specific questions, please contact our official support at: PlatinumOptimizerHelp@gmail.com"
        }
      ] as FAQItem[]
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
      faq: "FAQ",
      download: "Download"
    }
  },
  legal: {
    privacy: [
      "1. Data Collection: Platinum+ Optimizer does not collect, store, or transmit any personal user data.",
      "2. Local Execution: All code runs locally on the user's machine without communication to external servers.",
      "3. No Telemetry: The software includes no telemetry, tracking, or behavioral analysis modules.",
      "4. Source Code: As an optimization tool, operations are verifiable via system behavior.",
      "5. Internet Connection: The program does not require an active internet connection to function, ensuring data isolation.",
      "6. System Logs: Any generated logs are saved exclusively locally and are temporary.",
      "7. Windows Registry: Registry changes do not access keys containing sensitive user data.",
      "8. Credentials: Login credentials, passwords, or tokens are never requested or accessed.",
      "9. Cookies: The website and executable do not use profiling cookies.",
      "10. Third Parties: No data is shared with third parties, advertising partners, or affiliates.",
      "11. GDPR Compliance: Although operating locally, the 'Privacy by Design' principle is fully respected.",
      "12. User Files: The program does not scan, modify, or delete personal files (documents, photos, etc.).",
      "13. Peripherals: Peripheral lists or unique hardware identifiers are not collected for tracking purposes.",
      "14. IP Address: No logging of the user's IP address is performed.",
      "15. Geolocation: No geolocation functionality is present in the software.",
      "16. Updates: The search for updates is manual; there are no automatic background connections.",
      "17. Advertising: The software is free of adware or advertising insertions.",
      "18. Minors: Since no data is collected, there is no risk to the privacy of minors.",
      "19. Security: The absence of network communications eliminates remote attack vectors via the software.",
      "20. Profiling: No profiling of hardware or user habits is created.",
      "21. Right to be Forgotten: Since no data is stored, no remote deletion procedure is necessary.",
      "22. Backups: Restore points are managed entirely by the Windows operating system locally.",
      "23. Change Transparency: The user is informed of the categories of changes (services, kernel, etc.).",
      "24. Absence of Database: There is no central database of Platinum+ Optimizer users.",
      "25. Anonymity Guarantee: Use of the program is totally anonymous from the developer's perspective."
    ],
    disclaimer: `
LIMITATION OF LIABILITY (DISCLAIMER)

1. ACCEPTANCE OF RISKS
The use of the software "Platinum+ Optimizer" (hereinafter "Software") is at the user's sole discretion and risk. The Software is provided "AS IS", without any express or implied warranty of operation, stability, or fitness for a particular purpose.

2. SYSTEM MODIFICATIONS
The Software makes deep changes to the Microsoft Windows operating system, including but not limited to: System Registry, Services, CPU Scheduler, Memory Management, and Network Configurations. Although designed to improve performance, such changes could cause instability, software incompatibility, or unexpected behavior in specific hardware configurations.

3. EXCLUSION OF DAMAGES
In no event shall the developers (a team of two independent people), distributors, or collaborators of Platinum+ Optimizer be liable for direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to: loss of data, OS corruption, hardware failure, business interruption, or loss of profits) arising from the use or inability to use the Software.

4. RESTORE POINTS
It is the user's sole responsibility to ensure that a System Restore Point or a full backup of critical data is created before running the Software. The developers do not guarantee the effectiveness of the native Windows restore function.

5. OVERCLOCK AND HARDWARE
Optimizations that remove power limits may increase the operating temperature and power consumption of components (CPU/GPU). The user is responsible for monitoring temperatures and thermal stability of their system.

6. VIOLAZIONE DI TERMINI DI TERZE PARTI
The use of optimization scripts could, in rare cases, be interpreted as a violation of the Terms of Service of some anti-cheat software or corporate applications. The user assumes full responsibility for compliance with third-party agreements.

7. NON-AFFILIATION
Platinum+ Optimizer is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Microsoft Corporation or any of its subsidiaries.

By executing the program, the user declares to have read, understood, and fully accepted the terms of this disclaimer.`
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
        {
          title: "Соревновательные геймеры",
          description: "Снижение задержки ввода (Input Lag) и стабилизация частоты кадров для ощутимого конкурентного преимущества.",
          icon: MonitorPlay
        },
        {
          title: "Креаторы и Профессионалы",
          description: "Более отзывчивая рабочая среда и оптимизированное управление ресурсами для тяжелых нагрузок.",
          icon: Layers
        },
        {
          title: "Опытные пользователи",
          description: "Полный контроль над операционной системой без bloatware и бесполезных процессов.",
          icon: Code2
        },
        {
          title: "ПК и Ноутбуки",
          description: "Создан, чтобы выжать максимум из железа, снимая ограничения энергопотребления как на стационарных ПК, так и на ноутбуках.",
          icon: Laptop
        }
      ] as TargetAudienceItem[]
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
        {
          number: 1,
          title: "Скачать программу",
          description: "Скачайте официальный файл .exe по кнопке ниже."
        },
        {
          number: 2,
          title: "Запустить Platinum+",
          description: "Запустите файл Platinum+Optimizer.exe от имени администратора."
        },
        {
          number: 3,
          title: "Скопировать ключ",
          description: "Скопируйте пароль безопасности, показанный внизу страницы."
        },
        {
          number: 4,
          title: "Аутентификация",
          description: "Вставьте ключ (CTRL+V) в терминал по запросу, чтобы разблокировать оптимизатор."
        },
        {
          number: 5,
          title: "Применить модули",
          description: "Введите цифры от 1 до 6 по порядку (CPU, GPU, Debloater, Services, Network, RAM). Нажмите 0 для выхода и перезагрузите ПК."
        }
      ] as StepItem[]
    },
    download: {
      title: "Терминал оптимизации",
      version: "Platinum+ Optimizer 7.0",
      hash: "", 
      buttonExe: "Скачать Platinum+ Optimizer",
      url: DOWNLOAD_URL,
      compatibility: "Совместимо только с Windows 10/11",
      passwordLabel: "Ключ доступа (Скопируйте эту строку)",
      passwordPlaceholder: "Скопируйте ключ выше...",
      passwordError: "Неверный ключ доступа.",
      unlockBtn: "Открыть терминал",
      copyBtn: "Копировать пароль",
      copiedBtn: "Скопировано!"
    },
    faq: {
      title: "Технические FAQ",
      items: [
        {
          question: "Где найти пароль?",
          answer: "Пароль находится в разделе «Скачивание и активация» внизу страницы, доступном через кнопку «Гид» в правом верхнем углу меню."
        },
        {
          question: "Обратимы ли изменения?",
          answer: "Да. Терминал автоматически создает точку восстановления перед применением любых изменений в ядре или реестре."
        },
        {
          question: "Нужно ли отключать антивирус?",
          answer: "Обычно нет, но если Windows Defender или другие антивирусы блокируют выполнение, возможно, потребуется добавить исключение, учитывая глубокий характер оптимизаций."
        },
        {
          question: "Улучшает ли это FPS в играх?",
          answer: "Да, устраняя узкие места системы и оптимизируя приоритет ЦП, вы часто видите улучшение стабильности FPS (1% lows) и снижение задержки ввода."
        },
        {
          question: "Нужна помощь?",
          answer: "В случае технических проблем или вопросов при установке обращайтесь в нашу официальную службу поддержки: PlatinumOptimizerHelp@gmail.com"
        }
      ] as FAQItem[]
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
      faq: "FAQ",
      download: "Скачать"
    }
  },
  legal: {
    privacy: [
      "1. Сбор данных: Platinum+ Optimizer не собирает, не хранит и не передает никаких персональных данных пользователя.",
      "2. Локальное выполнение: Весь код выполняется локально на машине пользователя без связи с внешними серверами.",
      "3. Никакой телеметрии: Программное обеспечение не содержит модулей телеметрии, трекинга или поведенческого анализа.",
      "4. Исходный код: Проверить работу можно по поведению системы.",
      "5. Подключение к Интернету: Программа не требует активного подключения к интернету для работы, гарантируя изоляцию данных.",
      "6. Системные логи: Любые созданные логи сохраняются исключительно локально и являются временными.",
      "7. Реестр Windows: Изменения в реестре не затрагивают ключи, содержащие конфиденциальные данные пользователя.",
      "8. Учетные данные: Логины, пароли или токены никогда не запрашиваются и к ним нет доступа.",
      "9. Cookie: Веб-сайт и программа не используют профилирующие cookie.",
      "10. Третьи лица: Данные не передаются третьим лицам, рекламным партнерам или аффилированным лицам.",
      "11. Соответствие GDPR: Несмотря на локальную работу, принцип 'Privacy by Design' полностью соблюдается.",
      "12. Файлы пользователя: Программа не сканирует, не изменяет и не удаляет личные файлы (документы, фото и т.д.).",
      "13. Периферия: Список периферийных устройств или уникальные идентификаторы оборудования не собираются для целей трекинга.",
      "14. IP-адрес: Логирование IP-адреса пользователя не производится.",
      "15. Геолокация: Функционал геолокации в программном обеспечении отсутствует.",
      "16. Обновления: Поиск обновлений осуществляется вручную; автоматических фоновых соединений нет.",
      "17. Реклама: В программном обеспечении нет рекламного ПО или рекламных вставок.",
      "18. Несовершеннолетние: Поскольку данные не собираются, риска для конфиденциальности несовершеннолетних нет.",
      "19. Безопасность: Отсутствие сетевых коммуникаций исключает векторы удаленных атак через скрипт.",
      "20. Профилирование: Профилирование оборудования или привычек пользователя не создается.",
      "21. Право на забвение: Поскольку данные не хранятся, процедура удаленного удаления не требуется.",
      "22. Резервное копирование: Точки восстановления управляются полностью операционной системой Windows локально.",
      "23. Прозрачность изменений: Пользователь информируется о категориях изменений (службы, ядро и т.д.).",
      "24. Отсутствие базы данных: Центральной базы данных пользователей Platinum+ Optimizer не существует.",
      "25. Гарантия анонимности: Использование программы полностью анонимно с точки зрения разработчика."
    ],
    disclaimer: `
ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ (DISCLAIMER)

1. ПРИНЯТИЕ РИСКОВ
Использование программного обеспечения "Platinum+ Optimizer" (далее "ПО") осуществляется исключительно по усмотрению и на риск пользователя. ПО предоставляется "КАК ЕСТЬ", без каких-либо явных или подразумеваемых гарантий работоспособности, стабильности или пригодности для конкретной цели.

2. МОДИФИКАЦИИ СИСТЕМЫ
ПО вносит глубокие изменения в операционную систему Microsoft Windows, включая, но не ограничиваясь: Системный реестр, Службы, Планировщик CPU, Управление памятью и Сетевые конфигурации. Хотя они предназначены для улучшения производительности, такие изменения могут вызвать нестабильность, несовместимость ПО или неожиданное поведение в специфических конфигурациях оборудования.

3. ИСКЛЮЧЕНИЕ УЩЕРБА
Ни при каких обстоятельствах разработчики (команда из двух независимых человек), распространители или сотрудники Platinum+ Optimizer не несут ответственности за прямой, косвенный, случайный, особый, штрафной или побочный ущерб (включая, но не ограничиваясь: потерю данных, повреждение ОС, отказ оборудования, прерывание деятельности или упущенную выгоду), возникший в результате использования или невозможности использования ПО.

4. ТОЧКИ ВОССТАНОВЛЕНИЯ
Пользователь несет исключительную ответственность за создание Точки Восстановления Системы или полной резервной копии критических данных перед запуском ПО. Разработчики не гарантируют эффективность нативной функции восстановления Windows.

5. РАЗГОН И ОБОРУДОВАНИЕ
Оптимизации, снимающие ограничения энергопотребления, могут повысить рабочую температуру и энергопотребление компонентов (CPU/GPU). Пользователь несет ответственность за мониторинг температур и термической стабильности своей системы.

6. НАРУШЕНИЕ УСЛОВИЙ ТРЕТЬИХ ЛИЦ
Использование скриптов оптимизации может, в редких случаях, интерпретироваться как нарушение Условий обслуживания некоторых античит-программ или корпоративных приложений. Пользователь берет на себя полную ответственность за соблюдение соглашений с третьими лицами.

7. ОТСУТСТВИЕ АФФИЛИАЦИИ
Platinum+ Optimizer не аффилирован, не связан, не авторизован, не одобрен и никаким образом официально не связан с Microsoft Corporation или любой из ее дочерних компаний.

Запуская программу, пользователь заявляет, что прочитал, понял и полностью принял условия этого отказа от ответственности.`
  }
};

const translations: Record<string, typeof IT_CONTENT> = {
  it: IT_CONTENT,
  en: EN_CONTENT,
  ru: RU_CONTENT,
};

export const getAppContent = (lang: string) => {
  return translations[lang]?.app || translations['en'].app;
};

export const getLegalContent = (lang: string) => {
  return translations[lang]?.legal || translations['en'].legal;
};