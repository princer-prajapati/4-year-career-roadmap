import React, { useState } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { translations } from '../data/translations';
import {
  Sliders,
  Download,
  Upload,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileJson,
  User,
  Clock,
  MapPin,
  TrendingUp,
} from 'lucide-react';

interface ProfileSettingsViewProps {
  onOpenOnboarding: () => void;
  onOpenTrackModal: () => void;
}

export const ProfileSettingsView: React.FC<ProfileSettingsViewProps> = ({
  onOpenOnboarding,
  onOpenTrackModal,
}) => {
  const {
    language,
    profile,
    setProfile,
    exportData,
    importData,
    resetAllData,
  } = useRoadmap();
  const t = translations[language];

  const [confirmResetOpen, setConfirmResetOpen] = useState(false);
  const [importJsonText, setImportJsonText] = useState('');
  const [showImportModal, setShowImportModal] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [copiedExport, setCopiedExport] = useState(false);

  // Quick edit hours
  const handleHoursChange = (hours: number) => {
    if (!profile) return;
    setProfile({ ...profile, weeklyHours: hours });
  };

  const handleDownloadBackup = () => {
    const jsonString = exportData();
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `it-career-roadmap-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setCopiedExport(true);
    setTimeout(() => setCopiedExport(false), 3000);
  };

  const handleImportSubmit = () => {
    if (!importJsonText.trim()) return;
    const ok = importData(importJsonText.trim());
    if (ok) {
      setImportStatus(language === 'en' ? 'Backup imported successfully!' : 'Backup successfully restore ho gaya!');
      setTimeout(() => {
        setShowImportModal(false);
        setImportStatus(null);
        setImportJsonText('');
      }, 1500);
    } else {
      setImportStatus(language === 'en' ? 'Invalid JSON format. Please check and retry.' : 'JSON format galat hai. Dobara check karein.');
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span>Profile & Local Storage Persistence</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sliders className="w-5 h-5 text-teal-600" />
            <span>{t.settings}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {language === 'en'
              ? 'Manage study pace, export your progress backups, or recalibrate questionnaire answers.'
              : 'Apna study pace adjust karein, backup JSON download karein ya data reset karein.'}
          </p>
        </div>
      </div>

      {/* Local Storage Privacy Notice */}
      <div className="p-4 rounded-xl border border-teal-200 dark:border-teal-900/60 bg-teal-50/60 dark:bg-teal-950/30 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
        <div className="text-xs text-teal-900 dark:text-teal-200 space-y-1">
          <span className="font-bold">
            {language === 'en' ? 'Local Browser Storage Policy:' : 'Local Storage Privacy Policy:'}
          </span>
          <p className="leading-relaxed">
            {language === 'en'
              ? 'All your completed tasks, custom tasks, project links, and notes are stored strictly inside your current browser (localStorage). No tracking cookies or sensitive personal passwords are collected. Use the export tool below to backup your data.'
              : 'Aapka sara data sirf aapke browser ki local memory me save hai. Kisi server par koi password ya personal data store nahi hota. Dusre device par chalane ke liye JSON export use karein.'}
          </p>
        </div>
      </div>

      {/* Profile Overview Card */}
      {profile && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <User className="w-4 h-4 text-teal-600" />
              <span>{language === 'en' ? 'Your Active Preferences' : 'Aapki Active Profile Details'}</span>
            </h2>
            <button
              onClick={onOpenOnboarding}
              className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline cursor-pointer"
            >
              {language === 'en' ? 'Recalibrate All Answers →' : 'Answers Dobara Bharein →'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-1">
              <span className="text-slate-400 text-[11px] block">Name & Role</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{profile.name}</span>
              <span className="text-slate-500 dark:text-slate-400 block text-[11px]">{profile.currentRole}</span>
            </div>

            <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-[11px]">Track</span>
                <button
                  onClick={onOpenTrackModal}
                  className="text-teal-600 text-[11px] hover:underline font-medium"
                >
                  Change
                </button>
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200 block uppercase font-mono">
                {profile.track.replace('-', ' ')}
              </span>
              <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Skill: {profile.skillLevel}</span>
            </div>

            <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-[11px] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-teal-600" />
                  <span>Weekly Study Commitment</span>
                </span>
                <span className="font-bold text-teal-700 dark:text-teal-400 tabular-nums">
                  {profile.weeklyHours} hrs/week
                </span>
              </div>
              <input
                type="range"
                min="6"
                max="35"
                step="2"
                value={profile.weeklyHours}
                onChange={(e) => handleHoursChange(Number(e.target.value))}
                className="w-full accent-teal-600 mt-2 cursor-pointer"
              />
            </div>

            <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-1">
              <span className="text-slate-400 text-[11px] flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-teal-600" />
                <span>Aspirational Target & Location</span>
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                {profile.targetSalaryAspiration}
              </span>
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] line-clamp-1">
                {profile.targetLocation}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Data Backup & Portability Actions */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
        <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileJson className="w-4 h-4 text-teal-600" />
          <span>{language === 'en' ? 'Data Backup & Recovery' : 'Backup & Data Portability'}</span>
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {language === 'en'
            ? 'Save a snapshot of your progress to your computer or restore a previously saved plan.'
            : 'Apne saare checklist progress aur personal notes ko JSON file me download karein ya restore karein.'}
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={handleDownloadBackup}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.exportJson}</span>
          </button>

          <button
            onClick={() => setShowImportModal(true)}
            className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{t.importJson}</span>
          </button>
        </div>

        {copiedExport && (
          <div className="text-xs text-teal-600 dark:text-teal-400 flex items-center gap-1.5 pt-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Backup JSON downloaded successfully!' : 'Backup JSON download ho gaya!'}</span>
          </div>
        )}
      </div>

      {/* Danger Zone: Reset Roadmap */}
      <div className="bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-xl p-5 sm:p-6 shadow-xs space-y-3">
        <h2 className="text-sm font-bold text-red-700 dark:text-red-400 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          <span>{language === 'en' ? 'Danger Zone' : 'Data Reset'}</span>
        </h2>
        <p className="text-xs text-red-600/90 dark:text-red-300/80 leading-relaxed">
          {language === 'en'
            ? 'This will wipe your completed tasks, custom tasks, project links, and personal notes.'
            : 'Is button se aapka sara checklist progress aur saved notes browser se delete ho jayenge.'}
        </p>

        <button
          onClick={() => setConfirmResetOpen(true)}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.resetData}</span>
        </button>
      </div>

      {/* Confirmation Modal for Reset */}
      {confirmResetOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 max-w-md w-full space-y-4 shadow-2xl">
            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {t.confirmResetTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {t.confirmResetDesc}
              </p>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setConfirmResetOpen(false)}
                className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100"
              >
                {t.cancel}
              </button>
              <button
                onClick={() => {
                  resetAllData();
                  setConfirmResetOpen(false);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg"
              >
                {t.resetData}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 max-w-lg w-full space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {t.importJson}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'en'
                ? 'Paste the contents of your backup JSON file below:'
                : 'Apni backup JSON file ka content yahan paste karein:'}
            </p>

            <textarea
              value={importJsonText}
              onChange={(e) => setImportJsonText(e.target.value)}
              placeholder='{ "profile": { ... }, "completedTaskIds": [...] }'
              rows={6}
              className="w-full p-2.5 font-mono text-[11px] bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-teal-500"
            />

            {importStatus && (
              <div className="text-xs font-medium text-teal-600 dark:text-teal-400">
                {importStatus}
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => {
                  setShowImportModal(false);
                  setImportStatus(null);
                }}
                className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100"
              >
                {t.cancel}
              </button>
              <button
                onClick={handleImportSubmit}
                className="px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg"
              >
                {language === 'en' ? 'Restore Backup' : 'Restore Karein'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
