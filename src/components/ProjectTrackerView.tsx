import React, { useState } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { translations } from '../data/translations';
import {
  FolderGit2,
  ExternalLink,
  Github,
  CheckCircle2,
  Clock,
  Circle,
  Sparkles,
  Search,
} from 'lucide-react';

export const ProjectTrackerView: React.FC = () => {
  const { language, roadmap, projectStatuses, updateProjectDetails, setSelectedQuarterId, setActiveTab } = useRoadmap();
  const t = translations[language];

  // Gather all projects across all 16 quarters
  const allProjects = roadmap.flatMap((q) =>
    q.projects.map((proj) => ({
      ...proj,
      quarterId: q.id,
      year: q.year,
      quarter: q.quarter,
    }))
  );

  const [filterStatus, setFilterStatus] = useState<'all' | 'not-started' | 'in-progress' | 'completed'>('all');
  const [search, setSearch] = useState('');
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [tempLiveUrl, setTempLiveUrl] = useState('');
  const [tempRepoUrl, setTempRepoUrl] = useState('');
  const [tempStatus, setTempStatus] = useState<'not-started' | 'in-progress' | 'completed'>('not-started');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);

  const handleEditClick = (projId: string) => {
    const current = projectStatuses[projId];
    const original = allProjects.find((p) => p.id === projId);
    setEditingProjectId(projId);
    setTempStatus(current?.status || original?.status || 'not-started');
    setTempLiveUrl(current?.liveUrl || '');
    setTempRepoUrl(current?.repoUrl || '');
  };

  const handleSave = (projId: string) => {
    updateProjectDetails(projId, tempStatus, tempLiveUrl.trim(), tempRepoUrl.trim());
    setEditingProjectId(null);
    setSaveSuccessMsg(true);
    setTimeout(() => setSaveSuccessMsg(false), 2500);
  };

  const filteredProjects = allProjects.filter((p) => {
    const status = projectStatuses[p.id]?.status || p.status;
    if (filterStatus !== 'all' && status !== filterStatus) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const titleMatch = (p.title[language] || p.title.en).toLowerCase().includes(q);
      const descMatch = (p.description[language] || p.description.en).toLowerCase().includes(q);
      const techMatch = p.technologies.some((tech) => tech.toLowerCase().includes(q));
      if (!titleMatch && !descMatch && !techMatch) return false;
    }
    return true;
  });

  const completedCount = allProjects.filter(
    (p) => (projectStatuses[p.id]?.status || p.status) === 'completed'
  ).length;

  return (
    <div className="space-y-6">
      {/* Header & Stats */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span>Portfolio Quality Over Tutorial Quantity</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-teal-600" />
            <span>{t.portfolioDeliverables}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {language === 'en'
              ? 'Hiring managers filter candidates on verifiable production repositories. Add live demo URLs and clean code repos.'
              : 'Recruiters ko dikhane ke liye real projects jisme live link, Docker, database aur clean Git commits hon.'}
          </p>
        </div>

        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 p-3 rounded-lg shrink-0">
          <div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
              {language === 'en' ? 'Completed Projects' : 'Completed Projects'}
            </span>
            <span className="text-xl font-bold text-teal-700 dark:text-teal-400 tabular-nums">
              {completedCount} / {allProjects.length}
            </span>
          </div>
        </div>
      </div>

      {saveSuccessMsg && (
        <div className="p-3 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900 rounded-lg text-xs text-teal-800 dark:text-teal-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-teal-600" />
          <span>{t.linksSaved}</span>
        </div>
      )}

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl">
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={language === 'en' ? 'Search by project name, tech stack...' : 'Project ya tech stack search karein...'}
            className="w-full pl-8 pr-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-teal-500"
          />
        </div>

        <div className="flex items-center gap-1 p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 self-stretch sm:self-auto text-xs">
          {[
            { id: 'all', label: t.filterAll },
            { id: 'not-started', label: t.notStarted },
            { id: 'in-progress', label: t.inProgress },
            { id: 'completed', label: t.completed },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterStatus(tab.id as any)}
              className={`px-3 py-1 rounded-md text-xs transition-all cursor-pointer whitespace-nowrap ${
                filterStatus === tab.id
                  ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((proj) => {
          const currentData = projectStatuses[proj.id];
          const status = currentData?.status || proj.status;
          const liveUrl = currentData?.liveUrl;
          const repoUrl = currentData?.repoUrl;
          const isEditing = editingProjectId === proj.id;

          return (
            <div
              key={proj.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="space-y-3">
                {/* Year/Quarter kicker & Status badge */}
                <div className="flex items-center justify-between text-xs">
                  <button
                    onClick={() => {
                      setSelectedQuarterId(proj.quarterId);
                      setActiveTab('quarters');
                    }}
                    className="font-bold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-900 px-2 py-0.5 rounded hover:underline cursor-pointer"
                  >
                    Year {proj.year} · Q{proj.quarter}
                  </button>

                  <div className="flex items-center gap-1.5">
                    {status === 'completed' && (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{t.completed}</span>
                      </span>
                    )}
                    {status === 'in-progress' && (
                      <span className="flex items-center gap-1 text-[11px] text-amber-700 dark:text-amber-400 font-semibold bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{t.inProgress}</span>
                      </span>
                    )}
                    {status === 'not-started' && (
                      <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        <Circle className="w-3 h-3 text-slate-400" />
                        <span>{t.notStarted}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {proj.title[language]}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {proj.description[language]}
                  </p>
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Portfolio impression rationale */}
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {language === 'en' ? 'Why recruiters care:' : 'Recruiter kyu notice karega:'}{' '}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {proj.portfolioImpact[language]}
                  </span>
                </div>

                {/* Live and repo links */}
                <div className="flex flex-wrap gap-3 pt-1 text-xs">
                  {liveUrl ? (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.liveDemo}</span>
                    </a>
                  ) : (
                    <span className="text-slate-400 text-[11px] italic">No live demo link added</span>
                  )}

                  {repoUrl ? (
                    <a
                      href={repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-slate-700 dark:text-slate-300 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repo</span>
                    </a>
                  ) : (
                    <span className="text-slate-400 text-[11px] italic">No code repo added</span>
                  )}
                </div>
              </div>

              {/* Editing Form / Trigger */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                {isEditing ? (
                  <div className="space-y-2.5 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-500 mb-0.5">Status</label>
                        <select
                          value={tempStatus}
                          onChange={(e) => setTempStatus(e.target.value as any)}
                          className="w-full text-xs p-1.5 bg-white dark:bg-slate-900 border rounded"
                        >
                          <option value="not-started">{t.notStarted}</option>
                          <option value="in-progress">{t.inProgress}</option>
                          <option value="completed">{t.completed}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-500 mb-0.5">{t.liveDemo}</label>
                        <input
                          type="url"
                          value={tempLiveUrl}
                          onChange={(e) => setTempLiveUrl(e.target.value)}
                          placeholder="https://..."
                          className="w-full text-xs p-1.5 bg-white dark:bg-slate-900 border rounded"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500 mb-0.5">{t.githubRepo}</label>
                      <input
                        type="url"
                        value={tempRepoUrl}
                        onChange={(e) => setTempRepoUrl(e.target.value)}
                        placeholder="https://github.com/..."
                        className="w-full text-xs p-1.5 bg-white dark:bg-slate-900 border rounded"
                      />
                    </div>
                    <div className="flex justify-end gap-1.5 pt-1">
                      <button
                        onClick={() => setEditingProjectId(null)}
                        className="px-2.5 py-1 text-xs text-slate-500"
                      >
                        {t.cancel}
                      </button>
                      <button
                        onClick={() => handleSave(proj.id)}
                        className="px-3 py-1 bg-teal-600 text-white rounded text-xs font-semibold hover:bg-teal-700 cursor-pointer"
                      >
                        {t.save}
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleEditClick(proj.id)}
                    className="w-full py-1.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                  >
                    {language === 'en' ? 'Update Status & Links' : 'Status aur Links Update Karein'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
