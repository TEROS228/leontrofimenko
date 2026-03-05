'use client';

import { useState, useEffect } from 'react';

export type Language = 'en' | 'ja';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved) setLanguage(saved);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return { language, changeLanguage };
}

interface Props {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSwitcher({ language, onLanguageChange }: Props) {
  return (
    <div className="fixed top-6 right-6 z-50 flex gap-3 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-2xl border border-gray-200/50 hover:shadow-indigo-500/20 transition-all duration-300">
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-4 py-2 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
          language === 'en'
            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/50'
            : 'text-gray-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50'
        }`}
      >
        <span className="flex items-center gap-2">
          🇬🇧 EN
        </span>
      </button>
      <button
        onClick={() => onLanguageChange('ja')}
        className={`px-4 py-2 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
          language === 'ja'
            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/50'
            : 'text-gray-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50'
        }`}
      >
        <span className="flex items-center gap-2">
          🇯🇵 日本語
        </span>
      </button>
    </div>
  );
}
