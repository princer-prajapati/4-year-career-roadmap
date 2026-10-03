import React, { useState } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { translations } from '../data/translations';
import {
  ListCheck,
  CheckCircle2,
  Circle,
  Search,
  Layers,
  ArrowRight,
} from 'lucide-react';

export const SkillsChecklistView: React.FC = () => {
  const { language, roadmap, completedTaskIds, toggleTask, setSelectedQuarterId, setActiveTab } = useRoadmap();
  const t = translations[language];

  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [search, setSearch] = useState('');

  // Collect all skills from all quarters
  const allSkills = roadmap.flatMap((q) =>
    q.skills.map((s) => ({
      ...s,
      quarterId: q.id,
      year: q.year,
      quarter: q.quarter,
      quarterTitle: q.title[language] || q.title.en,
    }))
  );

  const completedCount = allSkills.filter((s) => completedTaskIds.has(s.id)).length;
  const percentMastered = allSkills.length > 0 ? Math.round((completedCount / allSkills.length) * 100) : 0;

  const filteredSkills = allSkills.filter((s) => {
    if (selectedYear !== 'all' && s.year !== selectedYear) return false;
    const isDone = completedTaskIds.has(s.id);
    if (statusFilter === 'pending' && isDone) return false;
    if (statusFilter === 'completed' && !isDone) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const titleMatch = (s.title[language] || s.title.en).toLowerCase().includes(q);
      const qTitleMatch = s.quarterTitle.toLowerCase().includes(q);
      if (!titleMatch && !qTitleMatch) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header & Master Count */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span>Progressive Skill Acquisition</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ListCheck className="w-5 h-5 text-teal-600" />
            <span>{t.skillsChecklist}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {language === 'en'
              ? 'A sequential checklist of every fundamental, system, and framework competency across 4 years.'
              : 'Poore 4 saal me seekhne layak sabhi skills ki master list. Jo seekh liya hai use tick karein.'}
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 p-3 rounded-lg flex items-center gap-4 shrink-0">
          <div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
              {language === 'en' ? 'Skills Mastered' : 'Skills Mastered'}
            </span>
            <span className="text-xl font-bold text-teal-700 dark:text-teal-400 tabular-nums">
              {completedCount} / {allSkills.length} ({percentMastered}%)
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl">
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={language === 'en' ? 'Search skills...' : 'Skill search karein...'}
            className="w-full pl-8 pr-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-teal-500"
          />
        </div>

        {/* Year Filter */}
        <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto text-xs">
          <div className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            {['all', 1, 2, 3, 4].map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr as any)}
                className={`px-2.5 py-1 rounded-md text-xs transition-all cursor-pointer ${
                  selectedYear === yr
                    ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {yr === 'all' ? t.allYears : `Y${yr}`}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            {[
              { id: 'all', label: t.filterAll },
              { id: 'pending', label: t.filterPending },
              { id: 'completed', label: t.filterCompleted },
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setStatusFilter(st.id as any)}
                className={`px-2.5 py-1 rounded-md text-xs transition-all cursor-pointer ${
                  statusFilter === st.id
                    ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skills List Table / Cards */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs divide-y divide-slate-100 dark:divide-slate-800">
        {filteredSkills.length === 0 ? (
          <div className="p-10 text-center text-xs text-slate-400">
            {t.noTasksFound}
          </div>
        ) : (
          filteredSkills.map((skill) => {
            const isDone = completedTaskIds.has(skill.id);
            return (
              <div
                key={skill.id}
                className={`p-3.5 sm:px-5 flex items-center justify-between gap-3 transition-colors ${
                  isDone ? 'bg-slate-50/50 dark:bg-slate-900/40 opacity-75' : 'hover:bg-slate-50/80 dark:hover:bg-slate-800/40'
                }`}
              >
                <div
                  onClick={() => toggleTask(skill.id)}
                  className="flex items-center gap-3 cursor-pointer flex-1"
                >
                  <button className="text-teal-600 shrink-0">
                    {isDone ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4 text-slate-300" />}
                  </button>
                  <span
                    className={`text-xs ${
                      isDone
                        ? 'line-through text-slate-400 dark:text-slate-500'
                        : 'font-medium text-slate-900 dark:text-slate-100'
                    }`}
                  >
                    {skill.title[language] || skill.title.en}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      setSelectedQuarterId(skill.quarterId);
                      setActiveTab('quarters');
                    }}
                    className="text-[11px] text-slate-500 dark:text-slate-400 hover:text-teal-600 flex items-center gap-1 cursor-pointer"
                  >
                    <span>
                      Y{skill.year} Q{skill.quarter}
                    </span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
