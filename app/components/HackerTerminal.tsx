'use client';

import { useEffect, useState, useRef } from 'react';

export default function HackerTerminal() {
  const [lines, setLines] = useState<Array<{ text: string; type: string }>>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const commands = [
      { text: 'root@leon:~$ initializing_secure_connection...', type: 'command', delay: 0 },
      { text: '[✓] Connection established | Encryption: AES-256', type: 'success', delay: 600 },
      { text: 'root@leon:~$ scanning_network_topology...', type: 'command', delay: 1200 },
      { text: '[✓] Active nodes: 247 | Firewall: ACTIVE', type: 'success', delay: 1800 },
      { text: 'root@leon:~$ deploying_ai_algorithms...', type: 'command', delay: 2400 },
      { text: '[✓] Neural network initialized', type: 'success', delay: 3000 },
      { text: 'root@leon:~$ analyzing_blockchain_data...', type: 'command', delay: 3600 },
      { text: '[✓] Processing 10,000 tx/sec', type: 'success', delay: 4200 },
      { text: '[!] WARNING: Intrusion attempt detected', type: 'warning', delay: 4800 },
      { text: '[✓] Threat neutralized automatically', type: 'success', delay: 5400 },
      { text: 'root@leon:~$ ALL SYSTEMS OPERATIONAL', type: 'success', delay: 6000 },
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
