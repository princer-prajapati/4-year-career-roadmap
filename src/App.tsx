import React, { useState } from 'react';
import { RoadmapProvider, useRoadmap } from './context/RoadmapContext';
import { Navbar } from './components/Navbar';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { LandingPage } from './components/LandingPage';
import { DashboardView } from './components/DashboardView';
import { QuarterDetailView } from './components/QuarterDetailView';
import { ProjectTrackerView } from './components/ProjectTrackerView';
import { SkillsChecklistView } from './components/SkillsChecklistView';
import { JobReadinessView } from './components/JobReadinessView';
import { ResourcesView } from './components/ResourcesView';
import { ProfileSettingsView } from './components/ProfileSettingsView';
import { OnboardingWizard } from './components/OnboardingWizard';
import { TrackComparisonModal } from './components/TrackComparisonModal';
import { translations } from './data/translations';
import { Compass, ShieldCheck } from 'lucide-react';

const MainAppContent: React.FC = () => {
  const { profile, activeTab, language } = useRoadmap();
  const t = translations[language];

  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [trackModalOpen, setTrackModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Top Navbar */}
      <Navbar
        onOpenOnboarding={() => setOnboardingOpen(true)}
        onOpenTrackModal={() => setTrackModalOpen(true)}
      />

      {/* Honest Reality Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* If user hasn't generated a plan yet, show Landing Page by default */}
        {!profile && activeTab === 'dashboard' ? (
          <LandingPage
            onOpenOnboarding={() => setOnboardingOpen(true)}
            onOpenTrackModal={() => setTrackModalOpen(true)}
          />
        ) : (
          <>
            {activeTab === 'dashboard' && (
              <DashboardView
                onOpenOnboarding={() => setOnboardingOpen(true)}
                onOpenTrackModal={() => setTrackModalOpen(true)}
              />
            )}
            {activeTab === 'quarters' && <QuarterDetailView />}
            {activeTab === 'projects' && <ProjectTrackerView />}
            {activeTab === 'skills' && <SkillsChecklistView />}
            {activeTab === 'readiness' && <JobReadinessView />}
            {activeTab === 'resources' && <ResourcesView />}
            {activeTab === 'settings' && (
              <ProfileSettingsView
                onOpenOnboarding={() => setOnboardingOpen(true)}
                onOpenTrackModal={() => setTrackModalOpen(true)}
              />
            )}
          </>
        )}
      </main>

      {/* Onboarding Questionnaire Wizard Modal */}
      <OnboardingWizard
        isOpen={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        onOpenTrackComparison={() => {
          setOnboardingOpen(false);
          setTrackModalOpen(true);
        }}
      />

      {/* Track Comparison Modal */}
      <TrackComparisonModal
        isOpen={trackModalOpen}
        onClose={() => setTrackModalOpen(false)}
      />

      {/* Clean Footer (No Telemetry / Anti-AI Slop) */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-auto py-6 px-4 sm:px-6 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-teal-600" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              IT Career Roadmap
            </span>
            <span>·</span>
            <span>{language === 'en' ? 'Structured 4-Year Technical Preparation' : '4-Saal Ka Realistic Tech Roadmap'}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>{t.savedLocally}</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <RoadmapProvider>
      <MainAppContent />
    </RoadmapProvider>
  );
}
