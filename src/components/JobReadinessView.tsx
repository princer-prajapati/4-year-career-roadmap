import React from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { translations } from '../data/translations';
import {
  ShieldCheck,
  CheckCircle2,
  Circle,
  Lightbulb,
  Award,
  HelpCircle,
} from 'lucide-react';

export const JobReadinessView: React.FC = () => {
  const { language, readinessPillars, toggleReadinessItem } = useRoadmap();
  const t = translations[language];

  // Calculate overall readiness score
  const totalItems = readinessPillars.reduce((acc, p) => acc + p.items.length, 0);
  const completedItems = readinessPillars.reduce(
    (acc, p) => acc + p.items.filter((i) => i.completed).length,
    0
  );
  const readinessPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span>Engineering Hiring Rubric</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-600" />
            <span>{t.jobReadiness}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {language === 'en'
              ? 'Technical interviews test 6 critical pillars. Rate your readiness honestly before applying to tier-1 companies.'
              : 'Top tech companies in 6 pillars par shortlist karti hain. Khud ko audit karein aur weaknesses pehle hi pehchanein.'}
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 p-4 rounded-xl flex items-center gap-4 shrink-0">
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">
              {language === 'en' ? 'Overall Readiness' : 'Job Readiness Score'}
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl sm:text-3xl font-bold text-teal-700 dark:text-teal-400 tabular-nums">
                {readinessPercent}%
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {completedItems}/{totalItems} items
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {readinessPillars.map((pillar) => {
          const pillarCompleted = pillar.items.filter((i) => i.completed).length;
          const pillarPct = pillar.items.length > 0 ? Math.round((pillarCompleted / pillar.items.length) * 100) : 0;

          return (
            <div
              key={pillar.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {pillar.title[language]}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {pillar.description[language]}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-400 tabular-nums shrink-0 pt-0.5">
                    {pillarPct}%
                  </span>
                </div>

                {/* Target impact callout */}
                <div className="text-[11px] text-teal-800 dark:text-teal-300 bg-teal-50/70 dark:bg-teal-950/40 p-2.5 rounded-lg border border-teal-100 dark:border-teal-900/50">
                  <span className="font-semibold">{language === 'en' ? 'Target Impact: ' : 'Fayda: '}</span>
                  {pillar.targetImpact[language]}
                </div>

                {/* Items */}
                <div className="space-y-2.5 pt-1">
                  {pillar.items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleReadinessItem(item.id)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer space-y-1.5 ${
                        item.completed
                          ? 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-500'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <button className="mt-0.5 shrink-0 text-teal-600">
                          {item.completed ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-300" />
                          )}
                        </button>
                        <div className="text-xs leading-snug">
                          <span className={item.completed ? 'line-through text-slate-400' : 'font-semibold text-slate-900 dark:text-white'}>
                            {item.title[language]}
                          </span>
                        </div>
                      </div>

                      <div className="pl-6.5 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.explanation[language]}
                      </div>

                      <div className="pl-6.5 pt-1 flex items-center gap-1.5 text-[10px] text-amber-700 dark:text-amber-300 font-medium">
                        <Lightbulb className="w-3 h-3 shrink-0" />
                        <span>{item.actionTip[language]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
