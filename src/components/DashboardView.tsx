import React from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { translations } from '../data/translations';
import { TRACKS_DATA } from '../data/tracksData';
import {
  CheckCircle2,
  Clock,
  Briefcase,
  Flame,
  ArrowRight,
  Sparkles,
  Target,
  Sliders,
  Flag,
} from 'lucide-react';

interface DashboardViewProps {
  onOpenOnboarding: () => void;
  onOpenTrackModal: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onOpenOnboarding,
  onOpenTrackModal,
}) => {
  const {
    language,
    profile,
    roadmap,
    stats,
    currentQuarter,
    setSelectedQuarterId,
    setActiveTab,
    completedTaskIds,
    toggleTask,
  } = useRoadmap();
  const t = translations[language];

  // Track info
  const trackKey = profile?.track || 'software-engineering';
  const trackInfo = TRACKS_DATA[trackKey] || TRACKS_DATA['software-engineering'];

  // Current Quarter pending tasks for "This Week's Recommended Action"
  const pendingQuarterTasks = [
    ...currentQuarter.skills.filter((s) => !completedTaskIds.has(s.id)),
    ...currentQuarter.practice.filter((p) => !completedTaskIds.has(p.id)),
  ].slice(0, 4);

  // Next milestone in current quarter
  const nextMilestone = currentQuarter.milestones.find((m) => !completedTaskIds.has(m.id)) || currentQuarter.milestones[0];

  return (
    <div className="space-y-8">
      {/* Top Banner / User Welcome */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span>{profile ? profile.currentRole : 'Aspiring Engineer'}</span>
            <span>·</span>
            <span className="font-semibold text-teal-700 dark:text-teal-400">{trackInfo.title[language]}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {profile ? `${language === 'en' ? 'Welcome back' : 'Swagat hai'}, ${profile.name}` : t.appName}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {language === 'en'
              ? `You're targeting ${trackInfo.title.en} with ${profile?.weeklyHours || 12} hrs/week study dedication.`
              : `${trackInfo.title.hi} par aapka 4-saal ka roadmap live chal raha hai.`}
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start md:self-auto shrink-0">
          <button
            onClick={onOpenTrackModal}
            className="px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {t.tracksCompare}
          </button>
          <button
            onClick={onOpenOnboarding}
            className="px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Edit Answers' : 'Preferences'}</span>
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Overall Completion */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 shadow-xs">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block mb-1">
            {t.overallProgress}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
              {stats.percentComplete}%
            </span>
            <span className="text-[11px] text-slate-400 tabular-nums">
              {stats.completedTasks}/{stats.totalTasks} tasks
            </span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mt-3">
            <div
              className="bg-teal-600 dark:bg-teal-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${stats.percentComplete}%` }}
            />
          </div>
        </div>

        {/* Current Quarter Stage */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 shadow-xs">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block mb-1">
            {t.currentQuarter}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-bold text-teal-700 dark:text-teal-400">
              Y{currentQuarter.year} Q{currentQuarter.quarter}
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
              Quarter {((currentQuarter.year - 1) * 4) + currentQuarter.quarter} of 16
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 mt-3 font-mono">
            <Clock className="w-3.5 h-3.5 text-teal-600" />
            <span>~{currentQuarter.baseHoursPerWeek} {t.hoursPerWeek}</span>
          </div>
        </div>

        {/* Portfolio Projects Built */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 shadow-xs">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block mb-1">
            {t.portfolioProjects}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
              {stats.completedProjects}
            </span>
            <span className="text-[11px] text-slate-400 tabular-nums">
              / {stats.totalProjects} {language === 'en' ? 'deliverables' : 'projects'}
            </span>
          </div>
          <button
            onClick={() => setActiveTab('projects')}
            className="text-[11px] text-teal-600 dark:text-teal-400 hover:underline font-semibold flex items-center gap-1 mt-3 cursor-pointer"
          >
            <span>{language === 'en' ? 'View all projects →' : 'Projects dekhein →'}</span>
          </button>
        </div>

        {/* Skills Mastered */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 shadow-xs">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block mb-1">
            {t.activeSkills}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
              {stats.completedSkills}
            </span>
            <span className="text-[11px] text-slate-400 tabular-nums">
              / {stats.totalSkills} {language === 'en' ? 'skills' : 'skills'}
            </span>
          </div>
          <button
            onClick={() => setActiveTab('skills')}
            className="text-[11px] text-teal-600 dark:text-teal-400 hover:underline font-semibold flex items-center gap-1 mt-3 cursor-pointer"
          >
            <span>{language === 'en' ? 'Check skills catalog →' : 'Skills list dekhein →'}</span>
          </button>
        </div>
      </div>

      {/* Current Quarter Focus & This Week's Action Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Current Stage Spotlight */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-900 px-2 py-0.5 rounded">
                  Year {currentQuarter.year}, Quarter {currentQuarter.quarter}
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {currentQuarter.baseHoursPerWeek} {t.hoursPerWeek}
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {currentQuarter.title[language]}
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('quarters')}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-teal-600 dark:hover:bg-teal-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>{language === 'en' ? 'Full Quarter Details' : 'Quarter Detail Kholein'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Focus explanation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              {language === 'en' ? 'Quarter Main Focus' : 'Quarter Ka Main Focus'}
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentQuarter.focus[language]}
            </p>
          </div>

          {/* Why it matters callout */}
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">
                  {t.whyItMatters}:
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentQuarter.whyItMatters[language]}
                </p>
              </div>
            </div>
          </div>

          {/* Active project highlight */}
          {currentQuarter.projects.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                {language === 'en' ? 'Target Deliverable' : 'Quarter Ka Portfolio Project'}
              </h3>
              <div className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {currentQuarter.projects[0].title[language]}
                    </span>
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded">
                      {currentQuarter.projects[0].difficulty}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {currentQuarter.projects[0].description[language]}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {currentQuarter.projects[0].technologies.map((tech) => (
                      <span key={tech} className="text-[10px] text-slate-500 font-mono">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('projects')}
                  className="text-xs text-teal-600 dark:text-teal-400 hover:underline font-semibold shrink-0 cursor-pointer pt-1"
                >
                  {language === 'en' ? 'Track →' : 'Links Dalein →'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Col: This Week's Action Tasks */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {t.thisWeeksFocus}
                </h3>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">
                {pendingQuarterTasks.length} pending
              </span>
            </div>

            {pendingQuarterTasks.length === 0 ? (
              <div className="text-center py-8 text-slate-500 text-xs">
                <CheckCircle2 className="w-8 h-8 text-teal-500 mx-auto mb-2 opacity-80" />
                <p className="font-semibold text-slate-700 dark:text-slate-200">
                  {language === 'en' ? 'All core tasks completed!' : 'Is quarter ke saare tasks poore ho gaye!'}
                </p>
                <p className="text-slate-400 mt-1 text-[11px]">
                  {language === 'en' ? 'Ready to move to the next quarter.' : 'Agla quarter shuru karne ke liye tayar.'}
                </p>
              </div>
            ) : (
              <div className="space-y-2.5">
                {pendingQuarterTasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500/50 transition-colors cursor-pointer flex items-start gap-3 text-left"
                  >
                    <div className="mt-0.5 text-slate-400 hover:text-teal-600 transition-colors">
                      <div className="w-4 h-4 rounded border border-slate-300 dark:border-slate-600" />
                    </div>
                    <div className="text-xs text-slate-800 dark:text-slate-200 leading-snug">
                      {task.title[language] || task.title.en}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Next milestone box */}
          {nextMilestone && (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                <Flag className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-semibold">{language === 'en' ? 'Next Key Milestone:' : 'Next Bada Milestone:'}</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                {nextMilestone.title[language] || nextMilestone.title.en}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 4-Year Interactive Matrix Timeline */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Flame className="w-4 h-4 text-teal-600" />
              <span>{language === 'en' ? 'Interactive 4-Year Progression Matrix' : '4-Saal Ka Visual Timeline Matrix'}</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {language === 'en'
                ? 'Click any quarter below to instantly jump into its tasks, projects, and interview actions.'
                : 'Kisi bhi quarter par click karke uske tasks aur projects kholiye.'}
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block" />
              <span>{language === 'en' ? 'Active' : 'Current'}</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 inline-block" />
              <span>{language === 'en' ? 'Quarter' : 'Quarters'}</span>
            </span>
          </div>
        </div>

        {/* 4 Years Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((yearNum) => {
            const quartersInYear = roadmap.filter((q) => q.year === yearNum);
            return (
              <div
                key={yearNum}
                className="border border-slate-200 dark:border-slate-800 rounded-lg p-3.5 bg-slate-50/50 dark:bg-slate-950/40 space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 pb-1 border-b border-slate-200 dark:border-slate-800">
                  <span>Year {yearNum}</span>
                  <span className="text-[10px] text-slate-400 font-normal">
                    {yearNum === 1 && (language === 'en' ? 'Foundations' : 'Basics')}
                    {yearNum === 2 && (language === 'en' ? 'Internships' : 'Internship Prep')}
                    {yearNum === 3 && (language === 'en' ? 'Architecture' : 'System Design')}
                    {yearNum === 4 && (language === 'en' ? 'Placement Blitz' : 'Placements')}
                  </span>
                </div>

                <div className="space-y-2">
                  {quartersInYear.map((quarter) => {
                    const isSelected = currentQuarter.id === quarter.id;
                    const quarterTasks = [...quarter.skills, ...quarter.practice, ...quarter.milestones];
                    const completedCount = quarterTasks.filter((t) => completedTaskIds.has(t.id)).length;
                    const pct = quarterTasks.length > 0 ? Math.round((completedCount / quarterTasks.length) * 100) : 0;

                    return (
                      <button
                        key={quarter.id}
                        type="button"
                        onClick={() => {
                          setSelectedQuarterId(quarter.id);
                          setActiveTab('quarters');
                        }}
                        className={`w-full text-left p-2.5 rounded-md border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-teal-600 bg-white dark:bg-slate-900 ring-2 ring-teal-500/20 shadow-xs'
                            : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white">
                          <span className="truncate">Q{quarter.quarter}: {quarter.title[language]}</span>
                          <span className="text-[10px] text-slate-400 tabular-nums ml-2 shrink-0">
                            {pct}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full overflow-hidden mt-2">
                          <div
                            className="bg-teal-600 dark:bg-teal-400 h-full rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
