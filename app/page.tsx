'use client';

import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import LanguageSwitcher, { useLanguage } from './components/LanguageSwitcher';
import HackerTerminal from './components/HackerTerminal';
import JourneySection from './components/JourneySection';
import HeroBackground from './components/HeroBackground';
import { translations } from './translations';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { language, changeLanguage, isTransitioning } = useLanguage();
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
    <div className="min-h-screen relative" style={{ background: '#0a0a0f', color: '#f0f0f0' }}>
      <LanguageSwitcher language={language} onLanguageChange={changeLanguage} isTransitioning={isTransitioning} />
      <SmoothScroll />

      {/* Static grid — position absolute so it doesn't repaint on scroll */}
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" style={{ zIndex: 0 }} />

      {/* Content fade on language switch */}
      <div
        className="relative"
        style={{
          zIndex: 1,
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'translateY(3px)' : 'none',
          transition: 'opacity 0.18s ease, transform 0.18s ease',
        }}
      >

        {/* ─── HERO ─── */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
          <HeroBackground />
          <div className="relative max-w-5xl w-full text-center" style={{ zIndex: 1 }}>

            <div className="mb-8 fade-in-up">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.22)', color: '#a5b4fc' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink inline-block" />
                {t.hero.greeting}
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 fade-in-up stagger-1"
              style={{ color: '#f8f8ff', letterSpacing: '-0.03em' }}
            >
              {t.hero.name}
            </h1>

            <p className="text-xl md:text-2xl font-semibold mb-5 fade-in-up stagger-2 gradient-text">
              {t.hero.title}
            </p>

            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 fade-in-up stagger-3 leading-relaxed px-4">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-4 px-4">
              <a
                href="#projects"
                className="relative px-8 py-4 text-white rounded-2xl text-sm md:text-base font-semibold btn-primary btn-shimmer btn-float overflow-hidden"
              >
                <span className="relative z-10">{t.hero.cta1}</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl text-sm md:text-base font-semibold btn-secondary"
                style={{ color: '#e2e8f0' }}
              >
                {t.hero.cta2}
              </a>
            </div>

            <div className="mt-16 fade-in-up stagger-5 flex justify-center">
              <div className="flex flex-col items-center gap-2" style={{ opacity: 0.3 }}>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
                <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, #6366f1, transparent)' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="rounded-3xl p-8 md:p-12 lg:p-16 glass-card smooth-shadow"
            >
              <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">

                <div className="flex-shrink-0">
                  <img
                    src="/me.jpeg?v=3"
                    alt="Leon Trofimenko"
                    title="Leon Trofimenko"
                    className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-3xl object-cover float-subtle"
                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">{t.about.title}</h2>
                  <p className="text-base md:text-lg font-semibold mb-6 gradient-text">{t.about.subtitle}</p>

                  <div className="space-y-3 text-sm md:text-base text-gray-400 leading-relaxed">
                    <p>{t.about.description1}</p>
                    <p>{t.about.description2}</p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-base md:text-lg font-bold text-white mb-4">{t.about.expertise}</h3>
                    <div className="grid gap-3">
                      {[
                        { color: '#6366f1', label: t.about.skill1, desc: t.about.skill1desc },
                        { color: '#8b5cf6', label: t.about.skill2, desc: t.about.skill2desc },
                        { color: '#d946ef', label: t.about.skill3, desc: t.about.skill3desc },
                      ].map((skill, i) => (
                        <div
                          key={i}
                          className="flex gap-3 items-start p-3 rounded-xl"
                          style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}
                        >
                          <div
                            className="flex-shrink-0 w-5 h-5 rounded-full mt-0.5 flex items-center justify-center"
                            style={{ background: `${skill.color}20`, border: `1px solid ${skill.color}40` }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: skill.color }} />
                          </div>
                          <p className="text-sm md:text-base text-gray-400">
                            <span className="font-semibold text-gray-200">{skill.label}</span>{' '}{skill.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── JOURNEY (3D) ─── */}
        <JourneySection title={t.journey.title} items={t.journey.items} />

        {/* ─── PROJECTS ─── */}
        <section id="projects" className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-6"
                style={{ border: '1px solid rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.08)', color: '#c4b5fd' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 blink inline-block" />
                Portfolio
              </div>
              <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">{t.projects.title}</h2>
              <p className="text-gray-500 text-base md:text-lg">{t.projects.subtitle}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => {
                const statusColor =
                  project.status === 'Live' || project.status === '稼働中'
                    ? { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)', text: '#6ee7b7', dot: '#10b981' }
                    : project.status === 'Early Access' || project.status === '早期アクセス版'
                    ? { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)', text: '#fcd34d', dot: '#f59e0b' }
                    : { bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.25)', text: '#a5b4fc', dot: '#6366f1' };

                return (
                  <div
                    key={project.id}
                    className="rounded-2xl p-6 md:p-8 card-hover flex flex-col"
                    style={{ background: 'rgba(18,18,30,0.95)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div className="flex justify-between items-center mb-5">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: statusColor.bg, border: `1px solid ${statusColor.border}`, color: statusColor.text }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full pulse-minimal inline-block" style={{ background: statusColor.dot }} />
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-sm md:text-base text-gray-500 mb-5 leading-relaxed flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-lg font-medium"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#6b7280' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.isEarlyAccess && (
                      <div
                        className="mb-4 p-3 rounded-xl text-xs"
                        style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.18)', color: '#fcd34d' }}
                      >
                        {t.projects.earlyAccessWarning}
                      </div>
                    )}

                    <div className="pt-4 border-t mb-4 text-sm" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                      <span className="text-gray-500">{t.projects.projectValue} </span>
                      <span className="font-bold" style={{ color: '#a5b4fc' }}>{project.price || '?'}</span>
                    </div>

                    {project.website ? (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 rounded-xl text-sm font-semibold text-center button-hover"
                        style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff' }}
                      >
                        {t.projects.visitWebsite}
                      </a>
                    ) : (
                      <div
                        className="block w-full py-3 rounded-xl text-sm font-semibold text-center"
                        style={{ background: 'rgba(255,255,255,0.03)', color: '#374151', border: '1px solid rgba(255,255,255,0.05)' }}
                      >
                        {t.projects.comingSoon}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-16">
              <HackerTerminal />
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-3xl p-8 md:p-16 text-center glass-card smooth-shadow"
              style={{ border: '1px solid rgba(99,102,241,0.12)' }}
            >
              <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">{t.contact.title}</h2>
              <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                {t.contact.description}
              </p>
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm md:text-base font-semibold button-hover"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff' }}
              >
                <span>📧</span>
                <span>{t.contact.email}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="py-12 px-4 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-gray-600 text-sm">{t.footer.copyright}</p>
        </footer>

      </div>
    </div>
  );
}
