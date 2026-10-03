import React from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { TRACKS_DATA } from '../data/tracksData';
import { CareerTrack } from '../types';
import { translations } from '../data/translations';
import { X, Check, Compass, Sparkles } from 'lucide-react';

interface TrackComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrackComparisonModal: React.FC<TrackComparisonModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { language, profile, changeTrack } = useRoadmap();
  const t = translations[language];

  if (!isOpen) return null;

  const currentTrack = profile?.track || 'software-engineering';

  const handleSelectTrack = (trackKey: CareerTrack) => {
    changeTrack(trackKey);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-5xl w-full p-6 sm:p-8 my-8 relative flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-1">
              <Compass className="w-4 h-4" />
              <span>{language === 'en' ? 'Which Tech Track Fits You Best?' : 'Aapke Liye Kaunsa Tech Track Best Hai?'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {t.tracksCompare}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {language === 'en'
                ? 'Compare math demands, daily coding intensity, and typical roles before picking.'
                : 'Math requirements, daily coding aur hiring market ko analyze karein.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Tracks Cards */}
        <div className="overflow-y-auto pr-1 py-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(TRACKS_DATA).map(([key, meta]) => {
              const isCurrent = currentTrack === key;
              return (
                <div
                  key={key}
                  className={`border rounded-xl p-5 flex flex-col justify-between transition-all ${
                    isCurrent
                      ? 'border-teal-600 bg-teal-50/40 dark:bg-teal-950/30 ring-2 ring-teal-500/20 shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        {key.replace('-', ' ')}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] font-bold text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-900/60 px-2 py-0.5 rounded">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {meta.title[language]}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {meta.description[language]}
                    </p>

                    {/* Intensities */}
                    <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-slate-100 dark:border-slate-800">
                      <div>
                        <span className="text-slate-400 text-[10px] block">Coding Intensity:</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {meta.codingIntensity}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] block">Math Intensity:</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {meta.mathIntensity}
                        </span>
                      </div>
                    </div>

                    {/* Best suited for */}
                    <div className="text-xs space-y-0.5">
                      <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                        {language === 'en' ? 'Best Suited For:' : 'Kiske liye best hai:'}
                      </span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                        {meta.bestSuitedFor[language]}
                      </p>
                    </div>

                    {/* Typical roles */}
                    <div className="text-xs space-y-1">
                      <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                        {language === 'en' ? 'Target Roles:' : 'Target Job Roles:'}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {meta.typicalRoles.slice(0, 3).map((r) => (
                          <span
                            key={r}
                            className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded"
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => handleSelectTrack(key as CareerTrack)}
                      className={`w-full py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        isCurrent
                          ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          : 'bg-teal-600 hover:bg-teal-700 text-white'
                      }`}
                    >
                      {isCurrent ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{language === 'en' ? 'Currently Selected' : 'Abhi Selected Hai'}</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{language === 'en' ? 'Select & Load Roadmap' : 'Is Track Ka Roadmap Lode Karein'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
