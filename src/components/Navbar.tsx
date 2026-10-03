import React, { useState } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { translations } from '../data/translations';
import {
  Sun,
  Moon,
  Menu,
  X,
  Compass,
  LayoutDashboard,
  Calendar,
  FolderGit2,
  ListCheck,
  ShieldCheck,
  Sliders,
  BookOpen,
} from 'lucide-react';

interface NavbarProps {
  onOpenOnboarding: () => void;
  onOpenTrackModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOnboarding, onOpenTrackModal }) => {
  const { language, setLanguage, theme, setTheme, activeTab, setActiveTab, profile } = useRoadmap();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: t.dashboard, icon: LayoutDashboard },
    { id: 'quarters', label: t.quartersView, icon: Calendar },
    { id: 'projects', label: t.projectTracker, icon: FolderGit2 },
    { id: 'skills', label: t.skillsChecklist, icon: ListCheck },
    { id: 'readiness', label: t.jobReadiness, icon: ShieldCheck },
    { id: 'resources', label: t.resources, icon: BookOpen },
    { id: 'settings', label: t.settings, icon: Sliders },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Zone 1: Wordmark (Single text element) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2 text-left font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer"
          >
            <Compass className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
            <span>IT Career Roadmap</span>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Single-line controls) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.slice(0, 6).map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Language toggle, Theme toggle, Settings / Build Plan) */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Compare Tracks trigger */}
          <button
            onClick={onOpenTrackModal}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
            title={language === 'en' ? 'Compare all 6 tech tracks' : 'Sabhi 6 tech tracks compare karein'}
          >
            <span>{t.tracksCompare}</span>
          </button>

          {/* Bilingual Toggle [EN | Hinglish] */}
          <div className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 text-xs">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded transition-all font-medium cursor-pointer ${
                language === 'en'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-2 py-0.5 rounded transition-all font-medium cursor-pointer ${
                language === 'hi'
                  ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 font-semibold shadow-xs'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Hinglish
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title={t.themeToggle}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Profile / Onboarding CTA */}
          {profile ? (
            <button
              onClick={() => handleNavClick('settings')}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-teal-700 text-white'
                  : 'bg-slate-900 text-white dark:bg-teal-600 hover:bg-slate-800 dark:hover:bg-teal-700'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="truncate max-w-[100px]">{profile.name.split(' ')[0] || 'My Plan'}</span>
            </button>
          ) : (
            <button
              onClick={onOpenOnboarding}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-md transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              {t.buildRoadmapBtn}
            </button>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0 text-slate-500 dark:text-slate-400" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                onOpenTrackModal();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-teal-600 dark:text-teal-400 font-medium py-1.5"
            >
              {t.tracksCompare} →
            </button>
            {!profile && (
              <button
                onClick={() => {
                  onOpenOnboarding();
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 rounded-md"
              >
                {t.buildRoadmapBtn}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
