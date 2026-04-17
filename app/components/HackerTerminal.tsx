'use client';

import { useEffect, useState, useRef } from 'react';

export default function HackerTerminal() {
  const [lines, setLines] = useState<Array<{ text: string; type: string }>>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const commands = [
      { text: 'root@leon:~$ initiating_osint_framework...', type: 'command', delay: 0 },
      { text: '[✓] OSINT modules loaded | Sherlock, Maltego, theHarvester', type: 'success', delay: 500 },
      { text: 'root@leon:~$ scanning_public_databases...', type: 'command', delay: 1000 },
      { text: '[i] Querying: WHOIS, DNS, SSL certificates...', type: 'info', delay: 1400 },
      { text: '[✓] Found 3,247 public records', type: 'success', delay: 1900 },
      { text: 'root@leon:~$ analyzing_network_topology...', type: 'command', delay: 2400 },
      { text: '[✓] Mapped 847 nodes | 23 subnets identified', type: 'success', delay: 3000 },
      { text: 'root@leon:~$ running_vulnerability_scanner...', type: 'command', delay: 3600 },
      { text: '[i] Nmap -sV -sC --script vuln target.system', type: 'info', delay: 4000 },
      { text: '[!] CRITICAL: Open port 8080 detected', type: 'warning', delay: 4600 },
      { text: '[!] CVE-2024-1337 exploit available', type: 'warning', delay: 5000 },
      { text: 'root@leon:~$ executing_penetration_test...', type: 'command', delay: 5600 },
      { text: '[i] Metasploit framework engaged', type: 'info', delay: 6000 },
      { text: '[✓] Access granted | Root privileges obtained', type: 'success', delay: 6700 },
      { text: 'root@leon:~$ extracting_data...', type: 'command', delay: 7300 },
      { text: '[✓] Downloaded 2.3 GB | Encrypted archives', type: 'success', delay: 7900 },
      { text: 'root@leon:~$ clearing_traces...', type: 'command', delay: 8400 },
      { text: '[✓] Logs wiped | Backdoor installed', type: 'success', delay: 9000 },
      { text: '[✓] MISSION COMPLETE | Exfiltration successful', type: 'success', delay: 9500 },
    ];

    commands.forEach(cmd => {
      setTimeout(() => {
        setLines(prev => [...prev, { text: cmd.text, type: cmd.type }]);
      }, cmd.delay);
    });
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-green-500/30 bg-black/95 p-4 shadow-2xl">
      {/* Scanline effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-scan"></div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-green-500/10 blur-xl"></div>

      {/* Terminal content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-3 flex items-center justify-between border-b border-green-500/30 pb-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <span className="font-mono text-xs text-green-500">SECURE TERMINAL</span>
        </div>

        {/* Terminal output */}
        <div
          ref={terminalRef}
          className="h-48 overflow-y-auto font-mono text-xs leading-relaxed scrollbar-thin scrollbar-track-transparent scrollbar-thumb-green-500/30"
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className={`mb-1 animate-fadeIn ${
                line.type === 'command' ? 'text-yellow-400' :
                line.type === 'success' ? 'text-green-400' :
                line.type === 'warning' ? 'text-orange-400' :
                line.type === 'info' ? 'text-cyan-400' :
                'text-green-500'
              }`}
            >
              {line.text}
            </div>
          ))}
          <div className="inline-block animate-blink text-green-500">▋</div>
        </div>

        {/* Stats bar */}
        <div className="mt-3 grid grid-cols-3 gap-2 border-t border-green-500/30 pt-2 text-center font-mono text-xs">
          <div>
            <div className="text-green-500">STATUS</div>
            <div className="text-green-400">ONLINE</div>
          </div>
          <div>
            <div className="text-green-500">SECURITY</div>
            <div className="text-yellow-400">MAX</div>
          </div>
          <div>
            <div className="text-green-500">PROCESSES</div>
            <div className="text-green-400">
              <AnimatedNumber />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
}

function AnimatedNumber() {
  const [count, setCount] = useState(150);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(Math.floor(Math.random() * 50) + 150);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <span>{count}</span>;
}
