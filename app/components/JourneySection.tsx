'use client';

import { useEffect, useRef, useState } from 'react';

interface JourneyItem {
  title: string;
  year: string;
  description: string;
  icon?: string;
}

interface JourneySectionProps {
  title: string;
  items: JourneyItem[];
}

const COLORS = [
  { accent: '#10b981', bg: 'rgba(16,185,129,0.08)',  border: 'rgba(16,185,129,0.2)',  hoverBorder: 'rgba(16,185,129,0.5)',  shadow: 'rgba(16,185,129,0.2)',  text: '#6ee7b7' },
  { accent: '#3b82f6', bg: 'rgba(59,130,246,0.08)',  border: 'rgba(59,130,246,0.2)',  hoverBorder: 'rgba(59,130,246,0.5)',  shadow: 'rgba(59,130,246,0.2)',  text: '#93c5fd' },
  { accent: '#d946ef', bg: 'rgba(217,70,239,0.08)',  border: 'rgba(217,70,239,0.2)',  hoverBorder: 'rgba(217,70,239,0.5)',  shadow: 'rgba(217,70,239,0.2)',  text: '#f0abfc' },
  { accent: '#8b5cf6', bg: 'rgba(139,92,246,0.08)',  border: 'rgba(139,92,246,0.2)',  hoverBorder: 'rgba(139,92,246,0.5)',  shadow: 'rgba(139,92,246,0.2)',  text: '#c4b5fd' },
  { accent: '#6366f1', bg: 'rgba(99,102,241,0.08)',  border: 'rgba(99,102,241,0.2)',  hoverBorder: 'rgba(99,102,241,0.5)',  shadow: 'rgba(99,102,241,0.2)',  text: '#a5b4fc' },
  { accent: '#06b6d4', bg: 'rgba(6,182,212,0.08)',   border: 'rgba(6,182,212,0.2)',   hoverBorder: 'rgba(6,182,212,0.5)',   shadow: 'rgba(6,182,212,0.2)',   text: '#67e8f9' },
  { accent: '#f59e0b', bg: 'rgba(245,158,11,0.08)',  border: 'rgba(245,158,11,0.2)',  hoverBorder: 'rgba(245,158,11,0.5)',  shadow: 'rgba(245,158,11,0.2)',  text: '#fcd34d' },
  { accent: '#ef4444', bg: 'rgba(239,68,68,0.08)',   border: 'rgba(239,68,68,0.2)',   hoverBorder: 'rgba(239,68,68,0.5)',   shadow: 'rgba(239,68,68,0.2)',   text: '#fca5a5' },
];

const ICONS = ['⚡', '🔁', '📈', '💰', '🗾', '🖥️', '🚀', '🏷️'];

// ─── Single card with self-contained tilt ───────────────────────────────────
interface CardProps {
  item: JourneyItem;
  index: number;
  isRight: boolean;
}

function TiltCard({ item, index, isRight }: CardProps) {
  const c = COLORS[index % COLORS.length];
  const icon = item.icon || ICONS[index % ICONS.length];

  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 … +0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    setRotX(-y * 8);
    setRotY(isRight ? -x * 10 : x * 10);
    setShinePos({ x: (x + 0.5) * 100, y: (y + 0.5) * 100 });
  };

  const handleMouseEnter = () => setHovered(true);

  const handleMouseLeave = () => {
    setHovered(false);
    setRotX(0);
    setRotY(0);
  };

  const transform = hovered
    ? `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(14px) translateY(-6px)`
    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)';

  const boxShadow = hovered
    ? `0 12px 48px rgba(0,0,0,0.5), 0 0 0 1px ${c.hoverBorder}, 0 0 40px ${c.shadow}, inset 0 1px 0 rgba(255,255,255,0.06)`
    : `0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)`;

  const borderColor = hovered ? c.hoverBorder : c.border;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl p-5 md:p-7 cursor-default group"
      style={{
        background: 'linear-gradient(135deg, rgba(20,20,35,0.92), rgba(14,14,24,0.96))',
        border: `1px solid ${borderColor}`,
        boxShadow,
        transform,
        // single transition covers ALL properties — always active, no gaps
        transition: 'transform 0.45s cubic-bezier(0.23,1,0.32,1), box-shadow 0.45s ease, border-color 0.45s ease',
      }}
    >
      {/* Shine */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10"
        style={{
          background: hovered
            ? `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(255,255,255,0.07) 0%, transparent 65%)`
            : 'none',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${c.accent}, transparent 70%)` }}
      />

      <div className="relative z-20">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-base"
              style={{ background: c.bg, border: `1px solid ${c.border}` }}
            >
              {icon}
            </div>
            <h3 className="text-base md:text-lg font-bold text-white leading-tight min-w-0">
              {item.title}
            </h3>
          </div>
          <span
            className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
            style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
          >
            {item.year}
          </span>
        </div>

        {/* Description */}
        <p
          className="text-sm md:text-base leading-relaxed"
          style={{ color: hovered ? '#d1d5db' : '#6b7280', transition: 'color 0.3s ease' }}
        >
          {item.description}
        </p>

        {/* Bottom bar */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
          <div
            className="h-0.5 flex-1 rounded-full"
            style={{ background: `linear-gradient(90deg, ${c.accent}, transparent)`, opacity: 0.3 }}
          />
          <span className="text-xs tabular-nums" style={{ color: c.text, opacity: 0.5 }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Section ────────────────────────────────────────────────────────────────
export default function JourneySection({ title, items }: JourneySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0a1a 50%, #0a0a0f 100%)' }}
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-24 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 blink inline-block" />
            Timeline
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">{title}</h2>
          <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto">
            From first line of code to building real companies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.4) 10%, rgba(139,92,246,0.4) 50%, rgba(217,70,239,0.3) 90%, transparent)' }} />
          {/* Traveling dot */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
            style={{ top: 0, animation: 'travelLine 8s ease-in-out infinite', background: '#818cf8', boxShadow: '0 0 8px rgba(99,102,241,0.9)' }} />
          {/* Mobile line */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.5) 5%, rgba(217,70,239,0.4) 95%, transparent)' }} />

          <div className="space-y-10 md:space-y-16">
            {items.map((item, i) => {
              const c = COLORS[i % COLORS.length];
              const isRight = i % 2 !== 0;

              return (
                <div key={i} className={`relative flex items-center ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                  {/* Mobile dot */}
                  <div className="md:hidden relative z-20 flex-shrink-0 mr-5 mt-1">
                    <div className="relative w-3 h-3 rounded-full dot-ping"
                      style={{ background: c.accent, boxShadow: `0 0 8px ${c.accent}` }} />
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[46%] ${isRight ? 'reveal-right' : 'reveal-left'}`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <TiltCard item={item} index={i} isRight={isRight} />
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: c.bg, border: `2px solid ${c.accent}`, boxShadow: `0 0 12px ${c.accent}55` }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: c.accent }} />
                    </div>
                  </div>

                  <div className="hidden md:block w-[46%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes travelLine {
          0%   { top: 0%;   opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
