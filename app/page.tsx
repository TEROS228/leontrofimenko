'use client';

import { useState } from 'react';
import FloatingShapes from './components/FloatingShapes';
import SmoothScroll from './components/SmoothScroll';
import LanguageSwitcher, { useLanguage } from './components/LanguageSwitcher';
import { translations } from './translations';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: t.projects.list[0].title,
      description: t.projects.list[0].description,
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      status: t.projects.status.earlyAccess,
      price: '$60,000',
      website: 'http://154.12.247.109',
      isEarlyAccess: true,
    },
    {
      id: 2,
      title: t.projects.list[1].title,
      description: t.projects.list[1].description,
      tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API'],
      status: t.projects.status.live,
      price: null,
      website: 'https://www.wordlex.online',
      isEarlyAccess: false,
    },
    {
      id: 3,
      title: t.projects.list[2].title,
      description: t.projects.list[2].description,
      tech: ['React Native', 'Firebase', 'TypeScript'],
      status: t.projects.status.inDevelopment,
      price: null,
      website: null,
      isEarlyAccess: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Language Switcher */}
      <LanguageSwitcher language={language} onLanguageChange={changeLanguage} />

      {/* Smooth Scroll Handler */}
      <SmoothScroll />

      {/* Subtle Background Shapes */}
      <FloatingShapes />

      {/* Gradient Overlay */}
      <div className="fixed inset-0 gradient-bg opacity-5 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10">

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-20">
          <div className="max-w-6xl w-full text-center">
            <div className="mb-4 md:mb-6 fade-in-up">
              <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-full text-xs md:text-sm font-medium text-gray-600 shadow-sm">
                👋 {t.hero.greeting}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 fade-in-up stagger-1 text-gray-900 px-4">
              {t.hero.name}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium mb-3 md:mb-4 fade-in-up stagger-2 px-4">
              {t.hero.title}
            </p>

            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 fade-in-up stagger-3 leading-relaxed px-4">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center fade-in-up stagger-4 px-4">
              <a
                href="#projects"
                className="px-6 md:px-8 py-3 md:py-4 text-white rounded-xl text-sm md:text-base font-semibold btn-primary btn-shimmer btn-float"
              >
                <span className="relative z-10">{t.hero.cta1}</span>
              </a>
              <a
                href="#contact"
                className="px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 rounded-xl text-sm md:text-base font-semibold border-2 border-gray-200 btn-secondary"
              >
                <span className="relative z-10 text-gray-900">{t.hero.cta2}</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-6 md:p-10 lg:p-16 rounded-3xl smooth-shadow">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">

                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src="/me.jpeg?v=3"
                    alt="Leon Trofimenko - 16-year-old entrepreneur and developer, founder of Japrix and Wordlex"
                    title="Leon Trofimenko"
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-3xl object-cover float-subtle shadow-lg"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
                    {t.about.title}
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-indigo-600 font-semibold mb-4 md:mb-6">
                    {t.about.subtitle}
                  </p>

                  <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      {t.about.description1}
                    </p>
                    <p>
                      {t.about.description2}
                    </p>
                  </div>

                  {/* Core Expertise */}
                  <div className="mt-6 md:mt-8">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{t.about.expertise}</h3>
                    <div className="grid gap-2.5 md:gap-3">
                      <div className="flex gap-2 md:gap-3 items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 md:mt-2"></div>
                        <p className="text-sm md:text-base text-gray-700">
                          <span className="font-semibold">{t.about.skill1}</span> {t.about.skill1desc}
                        </p>
                      </div>
                      <div className="flex gap-2 md:gap-3 items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 md:mt-2"></div>
                        <p className="text-sm md:text-base text-gray-700">
                          <span className="font-semibold">{t.about.skill2}</span> {t.about.skill2desc}
                        </p>
                      </div>
                      <div className="flex gap-2 md:gap-3 items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-pink-500 rounded-full mt-1.5 md:mt-2"></div>
                        <p className="text-sm md:text-base text-gray-700">
                          <span className="font-semibold">{t.about.skill3}</span> {t.about.skill3desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey/Timeline Section */}
        <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 relative overflow-hidden">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 gradient-text px-4">
              {t.journey.title}
            </h2>

            <div className="relative">
              {/* Vertical Line for Mobile */}
              <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 via-pink-500 via-purple-500 via-indigo-500 via-cyan-500 to-amber-500 opacity-30"></div>

              {/* Curved Path SVG - Hidden on mobile */}
              <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1000 1500">
                {/* Outer glow */}
                <path
                  d="M 250 80 Q 400 120, 500 160 Q 600 200, 750 240 Q 600 320, 500 380 Q 400 440, 250 500 Q 400 560, 500 620 Q 600 680, 750 740 Q 600 820, 500 880 Q 400 940, 250 1000 Q 400 1060, 500 1120 Q 600 1180, 750 1240 Q 600 1320, 500 1380 Q 400 1440, 250 1500"
                  stroke="url(#glowGradient)"
                  strokeWidth="8"
                  fill="none"
                  className="opacity-20 blur-sm"
                />
                {/* Main line */}
                <path
                  d="M 250 80 Q 400 120, 500 160 Q 600 200, 750 240 Q 600 320, 500 380 Q 400 440, 250 500 Q 400 560, 500 620 Q 600 680, 750 740 Q 600 820, 500 880 Q 400 940, 250 1000 Q 400 1060, 500 1120 Q 600 1180, 750 1240 Q 600 1320, 500 1380 Q 400 1440, 250 1500"
                  stroke="url(#darkGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Animated dots */}
                <path
                  d="M 250 80 Q 400 120, 500 160 Q 600 200, 750 240 Q 600 320, 500 380 Q 400 440, 250 500 Q 400 560, 500 620 Q 600 680, 750 740 Q 600 820, 500 880 Q 400 940, 250 1000 Q 400 1060, 500 1120 Q 600 1180, 750 1240 Q 600 1320, 500 1380 Q 400 1440, 250 1500"
                  stroke="url(#accentGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="0,50"
                  strokeLinecap="round"
                  className="opacity-60"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="50"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                <defs>
                  <linearGradient id="darkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1f2937" />
                    <stop offset="25%" stopColor="#374151" />
                    <stop offset="50%" stopColor="#4b5563" />
                    <stop offset="75%" stopColor="#374151" />
                    <stop offset="100%" stopColor="#1f2937" />
                  </linearGradient>
                  <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="15%" stopColor="#3b82f6" />
                    <stop offset="30%" stopColor="#d946ef" />
                    <stop offset="45%" stopColor="#8b5cf6" />
                    <stop offset="60%" stopColor="#6366f1" />
                    <stop offset="75%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                  <linearGradient id="accentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="15%" stopColor="#3b82f6" />
                    <stop offset="30%" stopColor="#d946ef" />
                    <stop offset="45%" stopColor="#8b5cf6" />
                    <stop offset="60%" stopColor="#6366f1" />
                    <stop offset="75%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Timeline Items */}
              <div className="relative space-y-8 md:space-y-20">
                {/* Item 1 - Left - 2024 */}
                <div className="flex items-start justify-start fade-in-up group">
                  {/* Mobile dot */}
                  <div className="md:hidden flex-shrink-0 relative z-10 mr-6">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full ring-4 ring-emerald-500/20"></div>
                  </div>

                  <div className="w-full md:w-1/2 md:pr-12">
                    <div className="relative p-4 md:p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-emerald-500/20 transition-all duration-500 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-2">
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"></div>

                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">{t.journey.items[0].title}</h3>
                          <span className="text-xs md:text-sm font-semibold text-emerald-400 px-3 py-1 bg-emerald-500/20 rounded-full group-hover:bg-emerald-500/30 transition-all duration-300 whitespace-nowrap">{t.journey.items[0].year}</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {t.journey.items[0].description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>

                {/* Item 2 - Right - 2024 */}
                <div className="flex items-start md:justify-end fade-in-up stagger-1 group">
                  {/* Mobile dot */}
                  <div className="md:hidden flex-shrink-0 relative z-10 mr-6">
                    <div className="w-3 h-3 bg-blue-500 rounded-full ring-4 ring-blue-500/20"></div>
                  </div>

                  <div className="hidden md:block md:w-1/2"></div>
                  <div className="w-full md:w-1/2 md:pl-12">
                    <div className="relative p-4 md:p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-blue-500/20 transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2">
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"></div>

                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{t.journey.items[1].title}</h3>
                          <span className="text-xs md:text-sm font-semibold text-blue-400 px-3 py-1 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-all duration-300 whitespace-nowrap">{t.journey.items[1].year}</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {t.journey.items[1].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 3 - Left - 2025 */}
                <div className="flex items-start justify-start fade-in-up stagger-2 group">
                  {/* Mobile dot */}
                  <div className="md:hidden flex-shrink-0 relative z-10 mr-6">
                    <div className="w-3 h-3 bg-pink-500 rounded-full ring-4 ring-pink-500/20"></div>
                  </div>

                  <div className="w-full md:w-1/2 md:pr-12">
                    <div className="relative p-4 md:p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-pink-500/20 transition-all duration-500 hover:border-pink-500/60 hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"></div>
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300">{t.journey.items[2].title}</h3>
                          <span className="text-xs md:text-sm font-semibold text-pink-400 px-3 py-1 bg-pink-500/20 rounded-full group-hover:bg-pink-500/30 transition-all duration-300 whitespace-nowrap">{t.journey.items[2].year}</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {t.journey.items[2].description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>

                {/* Item 4 - Right - 2025 */}
                <div className="flex items-start md:justify-end fade-in-up stagger-3 group">
                  {/* Mobile dot */}
                  <div className="md:hidden flex-shrink-0 relative z-10 mr-6">
                    <div className="w-3 h-3 bg-purple-500 rounded-full ring-4 ring-purple-500/20"></div>
                  </div>

                  <div className="hidden md:block md:w-1/2"></div>
                  <div className="w-full md:w-1/2 md:pl-12">
                    <div className="relative p-4 md:p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-purple-500/20 transition-all duration-500 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"></div>
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">{t.journey.items[3].title}</h3>
                          <span className="text-xs md:text-sm font-semibold text-purple-400 px-3 py-1 bg-purple-500/20 rounded-full group-hover:bg-purple-500/30 transition-all duration-300 whitespace-nowrap">{t.journey.items[3].year}</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {t.journey.items[3].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 5 - Left - 2025 */}
                <div className="flex items-start justify-start fade-in-up stagger-4 group">
                  {/* Mobile dot */}
                  <div className="md:hidden flex-shrink-0 relative z-10 mr-6">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full ring-4 ring-indigo-500/20"></div>
                  </div>

                  <div className="w-full md:w-1/2 md:pr-12">
                    <div className="relative p-4 md:p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-indigo-500/20 transition-all duration-500 hover:border-indigo-500/60 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"></div>
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">{t.journey.items[4].title}</h3>
                          <span className="text-xs md:text-sm font-semibold text-indigo-400 px-3 py-1 bg-indigo-500/20 rounded-full group-hover:bg-indigo-500/30 transition-all duration-300 whitespace-nowrap">{t.journey.items[4].year}</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {t.journey.items[4].description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>

                {/* Item 6 - Right - 2025 */}
                <div className="flex items-start md:justify-end fade-in-up stagger-5 group">
                  {/* Mobile dot */}
                  <div className="md:hidden flex-shrink-0 relative z-10 mr-6">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full ring-4 ring-cyan-500/20"></div>
                  </div>

                  <div className="hidden md:block md:w-1/2"></div>
                  <div className="w-full md:w-1/2 md:pl-12">
                    <div className="relative p-4 md:p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 transition-all duration-500 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"></div>
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{t.journey.items[5].title}</h3>
                          <span className="text-xs md:text-sm font-semibold text-cyan-400 px-3 py-1 bg-cyan-500/20 rounded-full group-hover:bg-cyan-500/30 transition-all duration-300 whitespace-nowrap">{t.journey.items[5].year}</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {t.journey.items[5].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 7 - Left - 2026 */}
                <div className="flex items-start justify-start fade-in-up stagger-6 group">
                  {/* Mobile dot */}
                  <div className="md:hidden flex-shrink-0 relative z-10 mr-6">
                    <div className="w-3 h-3 bg-amber-500 rounded-full ring-4 ring-amber-500/20"></div>
                  </div>

                  <div className="w-full md:w-1/2 md:pr-12">
                    <div className="relative p-4 md:p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-amber-500/20 transition-all duration-500 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"></div>
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">{t.journey.items[6].title}</h3>
                          <span className="text-xs md:text-sm font-semibold text-amber-400 px-3 py-1 bg-amber-500/20 rounded-full group-hover:bg-amber-500/30 transition-all duration-300 whitespace-nowrap">{t.journey.items[6].year}</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {t.journey.items[6].description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 gradient-text px-4">
              {t.projects.title}
            </h2>
            <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg px-4">
              {t.projects.subtitle}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="glass-card p-6 md:p-8 rounded-2xl card-hover"
                >
                  {/* Status */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 text-white rounded-full text-xs font-semibold ${
                      project.status === 'Live'
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                        : project.status === 'Early Access'
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                        : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                    }`}>
                      {project.status}
                    </span>
                    {project.status === 'Live' && (
                      <div className="w-2 h-2 bg-green-500 rounded-full pulse-minimal"></div>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Early Access Warning */}
                  {project.isEarlyAccess && (
                    <div className="mb-4 p-2 md:p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-xs text-yellow-800 font-medium">
                        {t.projects.earlyAccessWarning}
                      </p>
                    </div>
                  )}

                  {/* Price */}
                  <div className="pt-3 md:pt-4 border-t border-gray-200 mb-3 md:mb-4">
                    <div className="text-xs md:text-sm text-gray-600">
                      <span className="font-semibold">{t.projects.projectValue}</span> <span className="text-indigo-600 font-bold">{project.price || '?'}</span>
                    </div>
                  </div>

                  {/* Website Link */}
                  {project.website ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl text-sm md:text-base font-semibold text-center button-hover"
                    >
                      {t.projects.visitWebsite}
                    </a>
                  ) : (
                    <div className="block w-full px-4 md:px-6 py-2.5 md:py-3 bg-gray-200 text-gray-500 rounded-xl text-sm md:text-base font-semibold text-center">
                      {t.projects.comingSoon}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 md:p-12 lg:p-16 rounded-3xl text-center smooth-shadow">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text px-4">
                {t.contact.title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                {t.contact.description}
              </p>

              <div className="flex justify-center px-4">
                <a
                  href={`mailto:${t.contact.email}`}
                  className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl text-sm md:text-base font-semibold button-hover inline-flex items-center justify-center gap-2"
                >
                  <span>📧</span>
                  <span className="break-all">{t.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 text-center bg-gray-50">
          <p className="text-gray-600 text-sm">
            {t.footer.copyright}
          </p>
        </footer>
      </div>
    </div>
  );
}
