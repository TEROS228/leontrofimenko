'use client';

import { useEffect, useState, useRef } from 'react';

export default function HackerTerminal() {
  const [lines, setLines] = useState<Array<{ text: string; type: string }>>([]);
  const [attacks, setAttacks] = useState<Array<{ id: number; from: string; to: string; status: string }>>([]);
  const [progress, setProgress] = useState(0);
  const [dataFlow, setDataFlow] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテト';
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0f0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  // Terminal commands
  useEffect(() => {
    const commands = [
      { text: '╔═══════════════════════════════════════════════╗', type: 'border', delay: 0 },
      { text: '║    LEON CYBERSECURITY FRAMEWORK v3.7.1      ║', type: 'border', delay: 100 },
      { text: '╚═══════════════════════════════════════════════╝', type: 'border', delay: 200 },
      { text: '', type: 'empty', delay: 300 },
      { text: 'root@leon:~$ initiating_osint_framework...', type: 'command', delay: 500 },
      { text: '[✓] OSINT modules loaded | Sherlock, Maltego, theHarvester', type: 'success', delay: 900 },
      { text: '[✓] Recon-ng framework initialized', type: 'success', delay: 1200 },
      { text: '', type: 'empty', delay: 1300 },
      { text: 'root@leon:~$ scanning_dark_web_intelligence...', type: 'command', delay: 1500 },
      { text: '[i] Tor relays: 7,341 active nodes discovered', type: 'info', delay: 2000 },
      { text: '[i] Scraping: Pastebin, GitHub, BreachDB', type: 'info', delay: 2400 },
      { text: '[✓] Found 12,847 leaked credentials', type: 'success', delay: 2900 },
      { text: '', type: 'empty', delay: 3000 },
      { text: 'root@leon:~$ deploying_network_mapper...', type: 'command', delay: 3200 },
      { text: '[i] Nmap -A -T4 -p- --script=vuln,exploit 0.0.0.0/0', type: 'info', delay: 3700 },
      { text: '[✓] Scanned 65,535 ports across 847 hosts', type: 'success', delay: 4400 },
      { text: '[!] CRITICAL: 23 vulnerabilities detected', type: 'warning', delay: 4900 },
      { text: '', type: 'empty', delay: 5000 },
      { text: 'root@leon:~$ launching_exploit_framework...', type: 'command', delay: 5200 },
      { text: '[i] Metasploit v6.3.14 | Exploits: 2,378 | Payloads: 1,094', type: 'info', delay: 5700 },
      { text: '[i] use exploit/multi/handler', type: 'info', delay: 6200 },
      { text: '[i] set PAYLOAD windows/meterpreter/reverse_tcp', type: 'info', delay: 6600 },
      { text: '[✓] Exploit completed | Meterpreter session opened', type: 'success', delay: 7200 },
      { text: '', type: 'empty', delay: 7300 },
      { text: 'root@leon:~$ executing_privilege_escalation...', type: 'command', delay: 7500 },
      { text: '[i] Searching for SUID binaries...', type: 'info', delay: 8000 },
      { text: '[✓] Root access obtained via CVE-2024-1337', type: 'success', delay: 8600 },
      { text: '[✓] UID=0(root) GID=0(root) groups=0(root)', type: 'success', delay: 9100 },
      { text: '', type: 'empty', delay: 9200 },
      { text: 'root@leon:~$ data_exfiltration_protocol...', type: 'command', delay: 9400 },
      { text: '[i] Compressing /etc/shadow, /var/log, /home/*', type: 'info', delay: 9900 },
      { text: '[i] Encrypting with AES-256-GCM', type: 'info', delay: 10400 },
      { text: '[✓] Exfiltrated 4.7 GB to C2 server', type: 'success', delay: 11000 },
      { text: '', type: 'empty', delay: 11100 },
      { text: 'root@leon:~$ installing_persistence_backdoor...', type: 'command', delay: 11300 },
      { text: '[✓] Rootkit installed in /usr/lib/.hidden', type: 'success', delay: 11900 },
      { text: '[✓] Reverse shell on port 4444 | SSH key injected', type: 'success', delay: 12400 },
      { text: '', type: 'empty', delay: 12500 },
      { text: 'root@leon:~$ anti_forensics_cleanup...', type: 'command', delay: 12700 },
      { text: '[✓] Cleared bash history, auth.log, syslog', type: 'success', delay: 13300 },
      { text: '[✓] Timestamps modified | File hashes randomized', type: 'success', delay: 13800 },
      { text: '', type: 'empty', delay: 13900 },
      { text: '╔═══════════════════════════════════════════════╗', type: 'border', delay: 14100 },
      { text: '║  OPERATION STATUS: SUCCESSFUL                ║', type: 'border', delay: 14300 },
      { text: '║  TARGETS COMPROMISED: 847                     ║', type: 'border', delay: 14500 },
      { text: '║  DATA EXTRACTED: 4.7 GB                       ║', type: 'border', delay: 14700 },
      { text: '║  DETECTION PROBABILITY: 0.03%                 ║', type: 'border', delay: 14900 },
      { text: '╚═══════════════════════════════════════════════╝', type: 'border', delay: 15100 },
    ];

    commands.forEach(cmd => {
      setTimeout(() => {
        setLines(prev => [...prev, { text: cmd.text, type: cmd.type }]);
      }, cmd.delay);
    });

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 150);

    return () => clearInterval(progressInterval);
  }, []);

  // Simulated attacks
  useEffect(() => {
    const locations = [
      { from: 'Moscow', to: 'New York' },
      { from: 'Beijing', to: 'London' },
      { from: 'Tokyo', to: 'Paris' },
      { from: 'Seoul', to: 'Berlin' },
      { from: 'Mumbai', to: 'Sydney' },
      { from: 'São Paulo', to: 'Toronto' },
    ];

    const interval = setInterval(() => {
      const attack = locations[Math.floor(Math.random() * locations.length)];
      const newAttack = {
        id: Date.now(),
        from: attack.from,
        to: attack.to,
        status: Math.random() > 0.3 ? 'SUCCESS' : 'BLOCKED',
      };
      setAttacks(prev => [...prev.slice(-4), newAttack]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Data flow animation
  useEffect(() => {
    const interval = setInterval(() => {
      setDataFlow(Math.random() * 100);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-green-500/30 bg-black/95 p-6 shadow-2xl">
      {/* Matrix background */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-20" />

      {/* Scanline effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-scan"></div>

      {/* Main content grid */}
      <div className="relative z-10 grid gap-4 md:grid-cols-2">
        {/* Terminal */}
        <div className="md:col-span-2">
          <div className="border-2 border-green-500/30 rounded-xl bg-black/80 p-4">
            <div className="mb-3 flex items-center justify-between border-b border-green-500/30 pb-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse"></div>
              </div>
              <span className="font-mono text-xs text-green-500 animate-pulse">◉ LIVE PENETRATION TEST</span>
            </div>

            <div
              ref={terminalRef}
              className="h-64 overflow-y-auto font-mono text-xs leading-relaxed"
            >
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`mb-1 animate-fadeIn ${
                    line.type === 'command' ? 'text-yellow-400 font-bold' :
                    line.type === 'success' ? 'text-green-400' :
                    line.type === 'warning' ? 'text-orange-400 font-bold' :
                    line.type === 'info' ? 'text-cyan-400' :
                    line.type === 'border' ? 'text-green-500 font-bold' :
                    line.type === 'empty' ? 'text-transparent' :
                    'text-green-500'
                  }`}
                >
                  {line.text}
                </div>
              ))}
              <div className="inline-block animate-blink text-green-500">▋</div>
            </div>
          </div>
        </div>

        {/* Attack Map */}
        <div className="border-2 border-cyan-500/30 rounded-xl bg-black/80 p-4">
          <div className="mb-3 border-b border-cyan-500/30 pb-2">
            <h3 className="font-mono text-xs text-cyan-500 font-bold">🌐 GLOBAL THREAT MAP</h3>
          </div>
          <div className="space-y-2 h-40 overflow-y-auto">
            {attacks.map(attack => (
              <div key={attack.id} className="flex items-center justify-between text-xs font-mono animate-fadeIn">
                <span className="text-yellow-400">{attack.from}</span>
                <span className="text-gray-500">→→→</span>
                <span className="text-cyan-400">{attack.to}</span>
                <span className={attack.status === 'SUCCESS' ? 'text-green-400' : 'text-red-400'}>
                  {attack.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* System Stats */}
        <div className="border-2 border-purple-500/30 rounded-xl bg-black/80 p-4">
          <div className="mb-3 border-b border-purple-500/30 pb-2">
            <h3 className="font-mono text-xs text-purple-500 font-bold">📊 SYSTEM METRICS</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-purple-400">CPU USAGE</span>
                <span className="text-green-400">{progress}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-purple-400">DATA FLOW</span>
                <span className="text-cyan-400">{dataFlow.toFixed(1)} MB/s</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                  style={{ width: `${dataFlow}%` }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="text-center p-2 bg-green-500/10 rounded border border-green-500/30">
                <div className="text-xs text-green-500">EXPLOITS</div>
                <div className="text-lg font-bold text-green-400"><AnimatedNumber max={2378} /></div>
              </div>
              <div className="text-center p-2 bg-red-500/10 rounded border border-red-500/30">
                <div className="text-xs text-red-500">VULNS</div>
                <div className="text-lg font-bold text-red-400"><AnimatedNumber max={847} /></div>
              </div>
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
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
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

function AnimatedNumber({ max = 200 }: { max?: number }) {
  const [count, setCount] = useState(max - 50);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(Math.floor(Math.random() * 50) + (max - 50));
    }, 2000);
    return () => clearInterval(interval);
  }, [max]);

  return <span>{count}</span>;
}
