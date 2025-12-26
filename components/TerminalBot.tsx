import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2, Check } from 'lucide-react';
import { REQUIRED_PASSWORD } from '../constants';

interface Message {
  id: number;
  type: 'bot' | 'user' | 'system' | 'success' | 'menu';
  content: React.ReactNode;
  isWarning?: boolean;
}

interface TerminalBotProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const TerminalBot: React.FC<TerminalBotProps> = ({ isOpen, setIsOpen }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Terminal State Machine: INIT -> AWAIT_PASS -> MENU -> RUNNING
  const [state, setState] = useState<'INIT' | 'AWAIT_PASS' | 'MENU' | 'RUNNING'>('INIT');

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, type: 'bot', content: 'Microsoft Windows [Version 10.0.19045.3636]' },
    { id: 2, type: 'bot', content: '(c) Microsoft Corporation. All rights reserved.' },
    { id: 3, type: 'bot', content: <br /> },
    { id: 4, type: 'bot', content: 'C:\\Users\\Admin> Platinum+ Optimizer initialized. Security Lock Active.' },
    { id: 5, type: 'system', content: 'SYSTEM LOCKED. Please authenticate to proceed.' },
    { id: 6, type: 'bot', content: "Type '!password' to initiate authentication sequence." }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const addMessage = (type: Message['type'], content: React.ReactNode, isWarning = false) => {
    setMessages(prev => [...prev, { id: Date.now() + Math.random(), type, content, isWarning }]);
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const showMenu = async () => {
      setState('MENU');
      await delay(500);
      setMessages([]); // Clear screen for clean menu
      
      const menuLines = [
        "===========================================================",
        "           PLATINUM+ OPTIMIZER v7.0 [CLI INTERFACE]        ",
        "           (c) 2025 Platinum+ Engineering Team             ",
        "===========================================================",
        "",
        "   [1] CPU OPTIMIZATION (Unpark Cores, BCD Tweaks, Priority)",
        "   [2] GPU ACCELERATION (MSI Mode, DWM, MPO Disable)",
        "   [3] SYSTEM DEBLOATER (Appx Removal, Telemetry Kill)",
        "   [4] SERVICE MANAGER (SysMain, DiagTrack, Wsearch)",
        "   [5] NETWORK LATENCY FIX (TCP/IP, Nagle, DNS)",
        "   [6] RAM MANAGEMENT (Standby List, Heap Decommit)",
        "   [7] ALL-IN-ONE (RECOMMENDED - Runs all modules)",
        "   [8] EXIT",
        "",
        "Select an option [1-8]:"
      ];

      menuLines.forEach(line => {
        addMessage('menu', <pre className="whitespace-pre-wrap font-mono">{line}</pre>);
      });
  };

  const runModuleLogs = async (moduleName: string, logs: {text: string, delay: number}[]) => {
     setState('RUNNING');
     setIsProcessing(true);
     
     addMessage('system', `>>> INITIALIZING MODULE: ${moduleName.toUpperCase()}...`);
     await delay(800);

     for (const log of logs) {
        addMessage('bot', log.text);
        await delay(log.delay);
     }

     addMessage('success', `[SUCCESS] ${moduleName} applied successfully.`);
     await delay(1500);
     
     // Return to menu
     addMessage('system', 'Press any key to return to menu...');
     setIsProcessing(false);
  };

  const runAllModules = async () => {
    setState('RUNNING');
    setIsProcessing(true);

    addMessage('system', '>>> STARTING ALL-IN-ONE OPTIMIZATION SEQUENCE...');
    await delay(1000);

    const modules = [
      {
        name: 'CPU Optimization',
        logs: [
          { text: '[INIT] Power Plan: Ultimate Performance GUID check...', delay: 300 },
          { text: '[CMD] powercfg -setacvalueindex scheme_current sub_processor CPMINCORES 100', delay: 200 },
          { text: '[CMD] powercfg -setacvalueindex scheme_current sub_processor PROCTHROTTLEMAX 100', delay: 200 },
          { text: '[REG] Adding "ThreadPriority" DWORD=15 to Win32PrioritySeparation', delay: 300 },
          { text: '[BCD] bcdedit /set useplatformclock No', delay: 400 },
          { text: '[BCD] bcdedit /set tscsyncpolicy Legacy', delay: 300 },
          { text: '[BCD] bcdedit /set disabledynamictick Yes', delay: 300 }
        ]
      },
      {
        name: 'GPU Acceleration',
        logs: [
          { text: '[PCI] Enumerating Bus for Graphics Adapter...', delay: 400 },
          { text: '[MSI] Detected NVIDIA GeForce. Setting MSISupported=1...', delay: 300 },
          { text: '[REG] HKLM\\System\\CCS\\Enum\\PCI\\...\\Interrupt Management\\MessageSignaledInterruptProperties', delay: 300 },
          { text: '[REG] Setting InterruptPriority=High (Undefined)', delay: 200 },
          { text: '[DWM] Disabling Multiplane Overlay (MPO) via Registry...', delay: 400 },
          { text: '[REG] HKLM\\SOFTWARE\\Microsoft\\Windows\\Dwm\\OverlayTestMode=5', delay: 300 }
        ]
      },
      {
        name: 'System Debloater',
        logs: [
           { text: '[PS] Get-AppxPackage *Cortana* | Remove-AppxPackage', delay: 400 },
           { text: '[PS] Get-AppxPackage *XboxGamingOverlay* | Remove-AppxPackage', delay: 400 },
           { text: '[REG] Disabling "AllowTelemetry" in HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection', delay: 300 },
           { text: '[REG] Disabling "BingSearchEnabled" in Explorer Policies', delay: 300 }
        ]
      },
      {
        name: 'Service Manager',
        logs: [
           { text: '[SVC] sc config "SysMain" start= disabled', delay: 300 },
           { text: '[SVC] sc stop "SysMain"', delay: 400 },
           { text: '[SVC] sc config "DiagTrack" start= disabled', delay: 300 },
           { text: '[SVC] sc config "Wsearch" start= disabled', delay: 300 },
           { text: '[SVC] sc config "MapsBroker" start= disabled', delay: 300 }
        ]
      },
      {
        name: 'Network Fix',
        logs: [
           { text: '[NET] netsh int tcp set global autotuninglevel=normal', delay: 300 },
           { text: '[NET] netsh int tcp set global rss=enabled', delay: 300 },
           { text: '[REG] TcpAckFrequency=1 (Disabling Nagle Algorithm)', delay: 400 },
           { text: '[REG] TCPNoDelay=1', delay: 200 },
           { text: '[CMD] ipconfig /flushdns', delay: 500 }
        ]
      },
      {
        name: 'RAM Management',
        logs: [
           { text: '[API] Calling EmptyWorkingSet()...', delay: 500 },
           { text: '[MEM] Clearing System File Cache (Standby List)...', delay: 600 },
           { text: '[MEM] Releasing Heap blocks...', delay: 400 },
           { text: '[REG] LargeSystemCache=0 (Gaming Optimized)', delay: 300 }
        ]
      }
    ];

    for (const mod of modules) {
       addMessage('system', `--- Executing: ${mod.name} ---`);
       for (const log of mod.logs) {
         addMessage('bot', log.text);
         await delay(log.delay);
       }
       await delay(500);
    }

    addMessage('success', '---------------------------------------------------');
    addMessage('success', 'OPTIMIZATION COMPLETE.');
    addMessage('success', 'Please restart your computer to apply Kernel changes.');
    addMessage('success', '---------------------------------------------------');
    
    setIsProcessing(false);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (isProcessing) {
        if (state === 'RUNNING') {
             // If waiting for key press
             showMenu();
        }
        return; 
    }

    const userCmd = input.trim();
    if (!userCmd && state !== 'RUNNING') return; // Empty input ignored unless in "Press any key" state

    // If we were in "Press any key" state (simulated by isProcessing=false but state=RUNNING)
    if (state === 'RUNNING' && !isProcessing) {
        showMenu();
        setInput('');
        return;
    }

    // Echo user command
    if (state === 'AWAIT_PASS') {
       addMessage('user', `C:\\Users\\Admin> ************************`);
    } else if (state === 'MENU') {
       addMessage('user', `Choice: ${userCmd}`);
    } else {
       addMessage('user', `C:\\Users\\Admin> ${userCmd}`);
    }
    
    setInput('');

    // Logic
    setTimeout(() => {
        if (state === 'AWAIT_PASS') {
            if (userCmd === REQUIRED_PASSWORD) {
                addMessage('success', '[ACCESS GRANTED] Decryption Key Verified.');
                setTimeout(showMenu, 800);
            } else {
                addMessage('bot', 'Access denied. Invalid credentials.', true);
                setState('INIT'); 
            }
        } else if (state === 'MENU') {
            const choice = userCmd.toUpperCase();
            switch (choice) {
                case '1':
                    runModuleLogs('CPU Optimization', [
                        { text: '[INIT] CPUBalance Policy Manager started...', delay: 300 },
                        { text: '[CMD] powercfg -setacvalueindex scheme_current sub_processor CPMINCORES 100', delay: 300 },
                        { text: '[CMD] powercfg -setacvalueindex scheme_current sub_processor PROCTHROTTLEMAX 100', delay: 300 },
                        { text: '[REG] Disabling "Intelppm" Start=4 (Disabled)', delay: 300 },
                        { text: '[REG] Setting "Win32PrioritySeparation" to 26 (Hex)', delay: 400 },
                        { text: '[BCD] bcdedit /set useplatformclock No', delay: 400 },
                        { text: '[BCD] bcdedit /set tscsyncpolicy Legacy', delay: 300 },
                        { text: '[SUCCESS] Core Parking Disabled. CPU Threads Unlocked.', delay: 400 }
                    ]);
                    break;
                case '2':
                    runModuleLogs('GPU Acceleration', [
                        { text: '[SCAN] Enumerating PCI Bus for Graphics Adapters...', delay: 500 },
                        { text: '[FOUND] NVIDIA GeForce RTX Device identified at Bus 0x01', delay: 300 },
                        { text: '[MSI] Checking Message Signaled Interrupts support... Supported.', delay: 400 },
                        { text: '[REG] Writing MSISupported=1 to Device Parameters...', delay: 300 },
                        { text: '[REG] Setting InterruptPriority=High (Undefined)', delay: 300 },
                        { text: '[DWM] Disabling Multiplane Overlay (MPO)...', delay: 400 },
                        { text: '[REG] HKLM\\SOFTWARE\\Microsoft\\Windows\\Dwm\\OverlayTestMode=5', delay: 300 },
                        { text: '[SUCCESS] GPU Latency reduced. MSI Mode Active.', delay: 400 }
                    ]);
                    break;
                case '3':
                    runModuleLogs('System Debloater', [
                        { text: '[PS] Initializing Package Manager...', delay: 400 },
                        { text: '[PS] Get-AppxPackage *Microsoft.549981C3F5F10* | Remove-AppxPackage (Cortana)', delay: 500 },
                        { text: '[PS] Get-AppxPackage *Microsoft.XboxGamingOverlay* | Remove-AppxPackage', delay: 500 },
                        { text: '[PS] Get-AppxPackage *Microsoft.YourPhone* | Remove-AppxPackage', delay: 400 },
                        { text: '[REG] Adding "AllowTelemetry" DWORD=0 to Policies', delay: 300 },
                        { text: '[SUCCESS] Bloatware removed. Privacy enhanced.', delay: 400 }
                    ]);
                    break;
                case '4':
                     runModuleLogs('Service Manager', [
                        { text: '[SVC] Querying service status for "SysMain"...', delay: 300 },
                        { text: '[SVC] sc config "SysMain" start= disabled', delay: 300 },
                        { text: '[SVC] sc stop "SysMain"', delay: 400 },
                        { text: '[SVC] sc config "DiagTrack" start= disabled', delay: 300 },
                        { text: '[SVC] sc config "Wsearch" start= disabled', delay: 300 },
                        { text: '[SVC] sc config "MapsBroker" start= disabled', delay: 300 },
                        { text: '[SUCCESS] Background services optimized for gaming.', delay: 400 }
                    ]);
                    break;
                case '5':
                    runModuleLogs('Network Optimization', [
                        { text: '[NET] Configuring Global TCP Parameters...', delay: 300 },
                        { text: '[CMD] netsh int tcp set global autotuninglevel=normal', delay: 300 },
                        { text: '[CMD] netsh int tcp set global rss=enabled', delay: 300 },
                        { text: '[CMD] netsh int tcp set global timestamps=disabled', delay: 300 },
                        { text: '[REG] Adding TcpAckFrequency=1 (Disabling Nagle)', delay: 400 },
                        { text: '[REG] Adding TCPNoDelay=1', delay: 200 },
                        { text: '[CMD] ipconfig /flushdns', delay: 500 },
                        { text: '[SUCCESS] Network stack tuned for low latency.', delay: 400 }
                    ]);
                    break;
                case '6':
                    runModuleLogs('RAM Management', [
                        { text: '[API] Adjusting Token Privileges for SeIncreaseQuotaPrivilege...', delay: 400 },
                        { text: '[API] Calling EmptyWorkingSet() on process handles...', delay: 600 },
                        { text: '[MEM] Clearing System File Cache (Standby List)...', delay: 600 },
                        { text: '[REG] Setting "LargeSystemCache" to 0 (Gaming Profile)', delay: 300 },
                        { text: '[SUCCESS] 2400MB+ Memory Released.', delay: 200 }
                    ]);
                    break;
                case '7':
                case 'A':
                    runAllModules();
                    break;
                case '8':
                case 'X':
                    setIsOpen(false);
                    setState('INIT');
                    setMessages([]); // Reset for next open
                    break;
                default:
                    addMessage('bot', 'Invalid selection. Please enter a number 1-8.', true);
            }
        } else if (state === 'INIT') {
            const lowerCmd = userCmd.toLowerCase();
            if (lowerCmd === '!password') {
                addMessage('bot', (
                    <div className="space-y-2">
                    <div className="text-yellow-400">AUTHENTICATION REQUESTED</div>
                    <div className="text-platinum-300">Enter the decryption key (CTRL+V to paste):</div>
                    </div>
                ));
                setState('AWAIT_PASS');
            } else if (['help', '?', 'menu'].includes(lowerCmd)) {
                 addMessage('bot', "Type '!password' to access the secure menu.");
            } else if (['cls', 'clear'].includes(lowerCmd)) {
                 setMessages([
                    { id: 1, type: 'bot', content: 'Microsoft Windows [Version 10.0.19045.3636]' },
                    { id: 4, type: 'bot', content: 'C:\\Users\\Admin> ' }
                 ]);
            } else {
                 addMessage('bot', `'${userCmd}' is not recognized. Type '!password' to begin.`);
            }
        }
    }, 200);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#081522] border border-electric-500/50 rounded-full flex items-center justify-center text-electric-500 shadow-[0_0_15px_rgba(31,111,255,0.3)] hover:scale-110 hover:shadow-[0_0_25px_rgba(31,111,255,0.5)] transition-all duration-300 z-50 group"
      >
        <Terminal size={24} className="group-hover:animate-pulse" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-electric-500"></span>
        </span>
      </button>
    );
  }

  return (
    <div className={`fixed z-50 transition-all duration-300 ${isMinimized ? 'bottom-6 right-6 w-72' : 'bottom-6 right-6 w-[90vw] md:w-[600px] h-[600px]'}`}>
      <div className="bg-[#0c0c0c] border border-platinum-300/20 rounded-sm shadow-2xl flex flex-col h-full overflow-hidden backdrop-blur-md font-mono">
        
        {/* Header (Windows CMD Style) */}
        <div className="bg-white text-black p-1 px-3 flex items-center justify-between border-b border-platinum-300/10 cursor-pointer select-none" onClick={() => !isMinimized && setIsMinimized(!isMinimized)}>
          <div className="flex items-center gap-2 text-xs font-bold">
            <Terminal size={12} />
            <span>Administrator: Command Prompt - Platinum+ Optimizer</span>
          </div>
          <div className="flex items-center gap-1">
            <button 
              onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} 
              className="hover:bg-gray-200 p-1 rounded-sm"
            >
              <Minimize2 size={12} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); setIsMinimized(false); }} 
              className="hover:bg-red-500 hover:text-white p-1 rounded-sm"
            >
              <X size={12} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Console Output */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1 font-mono text-sm custom-scrollbar bg-black text-gray-300 selection:bg-white selection:text-black">
              {messages.map((msg) => (
                <div key={msg.id} className="break-words leading-tight">
                  {msg.type === 'system' && (
                     <div className="text-cyan-400 font-bold my-2">{msg.content}</div>
                  )}
                  {msg.type === 'success' && (
                     <div className="text-green-500">{msg.content}</div>
                  )}
                  {msg.type === 'user' && (
                     <div className="text-white">{msg.content}</div>
                  )}
                  {msg.type === 'menu' && (
                     <div className="text-platinum-300">{msg.content}</div>
                  )}
                  {msg.type === 'bot' && !msg.isWarning && (
                     <div>{msg.content}</div>
                  )}
                  {msg.isWarning && (
                     <div className="text-yellow-400 border border-yellow-600/30 p-2 bg-yellow-900/10 my-2">
                       {msg.content}
                     </div>
                  )}
                </div>
              ))}
              {isProcessing && (
                <div className="animate-pulse text-electric-500 mt-2">_</div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleCommand} className="bg-black p-2 border-t border-gray-800 flex items-center gap-1">
              <span className="text-gray-300 text-sm whitespace-nowrap">
                {state === 'MENU' ? 'Select Option:' : 'C:\\Users\\Admin>'}
              </span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-white font-mono text-sm outline-none caret-white"
                autoFocus
                disabled={isProcessing && state !== 'RUNNING'} // disable during processing, but allow "press any key"
                spellCheck={false}
                placeholder={state === 'AWAIT_PASS' ? "Paste password here..." : ""}
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default TerminalBot;