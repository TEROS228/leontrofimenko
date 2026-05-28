'use client';

import { useState, useEffect, useTransition } from 'react';

export type Language = 'en' | 'ja';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'ja')) setLanguage(saved);
  }, []);

  const changeLanguage = (lang: Language) => {
    if (lang === language) return;
    setIsTransitioning(true);
    // Short delay so the fade-out plays before text swaps
    setTimeout(() => {
      setLanguage(lang);
      localStorage.setItem('language', lang);
      setTimeout(() => setIsTransitioning(false), 250);
    }, 180);
  };

  return { language, changeLanguage, isTransitioning };
}

interface Props {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isTransitioning?: boolean;
}

export default function LanguageSwitcher({ language, onLanguageChange, isTransitioning }: Props) {
  return (
    <div
      className="fixed top-5 right-5 z-50 flex items-center gap-1 backdrop-blur-xl rounded-2xl p-1"
      style={{
        background: 'rgba(12,12,22,0.9)',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      {/* Loading indicator */}
      {isTransitioning && (
        <div className="absolute -bottom-0.5 left-3 right-3 h-px rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #d946ef)',
              animation: 'langLoadBar 0.4s ease-out forwards',
            }}
          />
        </div>
      )}

      {(['en', 'ja'] as const).map((lang) => {
        const active = language === lang;
        return (
          <button
            key={lang}
            onClick={() => onLanguageChange(lang)}
            disabled={isTransitioning}
            className="relative px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 select-none"
            style={{
              transition: 'color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease',
              color: active ? '#fff' : '#4b5563',
              background: active ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'transparent',
              boxShadow: active ? '0 2px 12px rgba(99,102,241,0.45)' : 'none',
              cursor: isTransitioning ? 'wait' : 'pointer',
            }}
          >
            <span className="text-base leading-none">{lang === 'en' ? '🇬🇧' : '🇯🇵'}</span>
            <span className="hidden sm:inline">{lang === 'en' ? 'EN' : '日本語'}</span>
          </button>
        );
      })}

      <style jsx>{`
        @keyframes langLoadBar {
          from { width: 0%; opacity: 1; }
          to   { width: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
