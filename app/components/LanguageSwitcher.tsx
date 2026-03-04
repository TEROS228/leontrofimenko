'use client';

import { useState, useEffect } from 'react';

export type Language = 'en' | 'ru' | 'ja';

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
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-indigo-500 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange('ru')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'ru'
            ? 'bg-indigo-500 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        RU
      </button>
      <button
        onClick={() => onLanguageChange('ja')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'ja'
            ? 'bg-indigo-500 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        日本語
      </button>
    </div>
  );
}
