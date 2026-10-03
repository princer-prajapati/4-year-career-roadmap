import React, { useState } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { translations } from '../data/translations';
import { TaskCategory } from '../types';
import {
  CheckCircle2,
  Circle,
  Plus,
  Trash2,
  Edit2,
  Sparkles,
  ExternalLink,
  BookOpen,
  Briefcase,
  Flag,
  FileCode,
  Clock,
  Layers,
  Search,
} from 'lucide-react';

export const QuarterDetailView: React.FC = () => {
  const {
    language,
    roadmap,
    selectedQuarterId,
    setSelectedQuarterId,
    completedTaskIds,
    toggleTask,
    notes,
    addNote,
    updateNote,
    deleteNote,
    addCustomTask,
    deleteCustomTask,
    setActiveTab,
  } = useRoadmap();
  const t = translations[language];

  // Current quarter object
  const quarter = roadmap.find((q) => q.id === selectedQuarterId) || roadmap[0];

  // Local state for custom task adder
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [customTaskTitle, setCustomTaskTitle] = useState('');
  const [customTaskCategory, setCustomTaskCategory] = useState<TaskCategory>('practice');

  // Local state for note adder
  const [noteText, setNoteText] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editingNoteText, setEditingNoteText] = useState('');
  const [deleteNoteConfirmId, setDeleteNoteConfirmId] = useState<string | null>(null);

  // Filter tasks in current quarter
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'completed'>('all');

  const handleAddCustomTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTaskTitle.trim()) return;
    addCustomTask(quarter.id, customTaskTitle.trim(), customTaskCategory);
    setCustomTaskTitle('');
    setShowTaskInput(false);
  };

  const handleSaveNote = () => {
    if (!noteText.trim()) return;
    addNote(quarter.id, noteText);
    setNoteText('');
  };

  const handleUpdateNote = (noteId: string) => {
    if (!editingNoteText.trim()) return;
    updateNote(quarter.id, noteId, editingNoteText);
    setEditingNoteId(null);
    setEditingNoteText('');
  };

  const quarterNotes = notes[quarter.id] || [];

  // Filter helper
  const filterTask = (id: string, text: string) => {
    const isCompleted = completedTaskIds.has(id);
    if (statusFilter === 'pending' && isCompleted) return false;
    if (statusFilter === 'completed' && !isCompleted) return false;
    if (searchQuery.trim() && !text.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  };

  return (
    <div className="space-y-6">
      {/* 16-Quarter Selector Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {language === 'en' ? 'Select 1 of 16 Quarters:' : '16 Quarters Me Se Chunein:'}
          </span>
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg self-start">
            {[1, 2, 3, 4].map((year) => (
              <button
                key={year}
                onClick={() => {
                  const firstOfYr = roadmap.find((q) => q.year === year);
                  if (firstOfYr) setSelectedQuarterId(firstOfYr.id);
                }}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  quarter.year === year
                    ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Year {year}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Quarters of Current Year */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {roadmap
            .filter((q) => q.year === quarter.year)
            .map((q) => {
              const isSelected = q.id === quarter.id;
              const quarterTasks = [...q.skills, ...q.practice, ...q.milestones];
              const completedCount = quarterTasks.filter((t) => completedTaskIds.has(t.id)).length;
              const pct = quarterTasks.length > 0 ? Math.round((completedCount / quarterTasks.length) * 100) : 0;

              return (
                <button
                  key={q.id}
                  onClick={() => setSelectedQuarterId(q.id)}
                  className={`p-2.5 text-left rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-teal-600 bg-teal-50/50 dark:bg-teal-950/40 dark:border-teal-500 ring-1 ring-teal-500'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                    <span>Q{q.quarter}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{pct}%</span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {q.title[language]}
                  </div>
                </button>
              );
            })}
        </div>
      </div>

      {/* Main Quarter Header Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-900 px-2.5 py-0.5 rounded">
                Year {quarter.year} · Quarter {quarter.quarter}
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5 text-teal-600" />
                <span>{quarter.baseHoursPerWeek} {t.hoursPerWeek}</span>
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {quarter.title[language]}
            </h1>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'en' ? 'Filter quarter tasks...' : 'Tasks filter karein...'}
                className="pl-8 pr-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white w-40 sm:w-48 focus:outline-hidden focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <div className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-2 py-1 rounded text-xs transition-colors cursor-pointer ${
                  statusFilter === 'all' ? 'bg-white dark:bg-slate-700 font-bold shadow-xs' : 'text-slate-500'
                }`}
              >
                {t.filterAll}
              </button>
              <button
                onClick={() => setStatusFilter('pending')}
                className={`px-2 py-1 rounded text-xs transition-colors cursor-pointer ${
                  statusFilter === 'pending' ? 'bg-white dark:bg-slate-700 font-bold shadow-xs' : 'text-slate-500'
                }`}
              >
                {t.filterPending}
              </button>
              <button
                onClick={() => setStatusFilter('completed')}
                className={`px-2 py-1 rounded text-xs transition-colors cursor-pointer ${
                  statusFilter === 'completed' ? 'bg-white dark:bg-slate-700 font-bold shadow-xs' : 'text-slate-500'
                }`}
              >
                {t.filterCompleted}
              </button>
            </div>
          </div>
        </div>

        {/* Focus description */}
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {quarter.focus[language]}
        </p>

        {/* Why this step matters */}
        <div className="p-4 rounded-lg bg-teal-50/50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/50 flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <span className="font-bold text-teal-900 dark:text-teal-200">
              {t.whyItMatters}:
            </span>
            <p className="text-teal-800/90 dark:text-teal-300/90 leading-relaxed">
              {quarter.whyItMatters[language]}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid: Left Checklist Sections, Right Projects & Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Skills & Practice Tasks */}
        <div className="lg:col-span-2 space-y-6">
          {/* 1. Core Skills to Master */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-600" />
                <span>{t.skillsToLearn}</span>
              </h2>
              <span className="text-xs text-slate-400 font-mono">
                {quarter.skills.filter((s) => completedTaskIds.has(s.id)).length}/{quarter.skills.length}
              </span>
            </div>

            <div className="space-y-2">
              {quarter.skills
                .filter((s) => filterTask(s.id, s.title[language] || s.title.en))
                .map((skill) => {
                  const isDone = completedTaskIds.has(skill.id);
                  return (
                    <div
                      key={skill.id}
                      onClick={() => toggleTask(skill.id)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${
                        isDone
                          ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-70'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-500'
                      }`}
                    >
                      <button className="mt-0.5 shrink-0 text-teal-600">
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4 text-slate-300" />}
                      </button>
                      <div className="text-xs text-slate-800 dark:text-slate-200 leading-snug">
                        <span className={isDone ? 'line-through text-slate-400' : 'font-medium'}>
                          {skill.title[language] || skill.title.en}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* 2. Practice Drills & Custom Tasks */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileCode className="w-4 h-4 text-teal-600" />
                <span>{t.practiceTasks}</span>
              </h2>
              <button
                onClick={() => setShowTaskInput(!showTaskInput)}
                className="text-xs text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{t.customTask}</span>
              </button>
            </div>

            {/* Custom Task Adder Form */}
            {showTaskInput && (
              <form onSubmit={handleAddCustomTask} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 space-y-2">
                <input
                  type="text"
                  value={customTaskTitle}
                  onChange={(e) => setCustomTaskTitle(e.target.value)}
                  placeholder={t.taskTitlePlaceholder}
                  className="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-teal-500"
                  autoFocus
                />
                <div className="flex items-center justify-between gap-2">
                  <select
                    value={customTaskCategory}
                    onChange={(e) => setCustomTaskCategory(e.target.value as TaskCategory)}
                    className="text-[11px] px-2 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-slate-700 dark:text-slate-300"
                  >
                    <option value="practice">Practice Drill</option>
                    <option value="skill">Skill</option>
                    <option value="career">Career Action</option>
                    <option value="milestone">Milestone</option>
                  </select>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setShowTaskInput(false)}
                      className="px-2.5 py-1 text-xs text-slate-500 hover:text-slate-800"
                    >
                      {t.cancel}
                    </button>
                    <button
                      type="submit"
                      className="px-3 py-1 bg-teal-600 text-white rounded text-xs font-semibold hover:bg-teal-700"
                    >
                      {t.save}
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div className="space-y-2">
              {quarter.practice
                .filter((p) => filterTask(p.id, p.title[language] || p.title.en))
                .map((task) => {
                  const isDone = completedTaskIds.has(task.id);
                  return (
                    <div
                      key={task.id}
                      className={`p-3 rounded-lg border transition-all flex items-start justify-between gap-3 ${
                        isDone
                          ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-70'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-500'
                      }`}
                    >
                      <div
                        onClick={() => toggleTask(task.id)}
                        className="flex items-start gap-3 cursor-pointer flex-1"
                      >
                        <button className="mt-0.5 shrink-0 text-teal-600">
                          {isDone ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4 text-slate-300" />}
                        </button>
                        <div className="text-xs text-slate-800 dark:text-slate-200 leading-snug">
                          <span className={isDone ? 'line-through text-slate-400' : 'font-medium'}>
                            {task.title[language] || task.title.en}
                          </span>
                          {task.isCustom && (
                            <span className="ml-2 text-[10px] text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-1.5 py-0.5 rounded">
                              Custom
                            </span>
                          )}
                        </div>
                      </div>

                      {task.isCustom && (
                        <button
                          onClick={() => deleteCustomTask(quarter.id, task.id)}
                          className="text-slate-400 hover:text-red-500 p-1 shrink-0 transition-colors"
                          title="Delete custom task"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>

          {/* 3. Career & Networking Actions */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-3">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-teal-600" />
              <span>{t.careerActions}</span>
            </h2>

            <div className="space-y-2">
              {quarter.careerActions
                .filter((c) => filterTask(c.id, c.title[language] || c.title.en))
                .map((action) => {
                  const isDone = completedTaskIds.has(action.id);
                  return (
                    <div
                      key={action.id}
                      onClick={() => toggleTask(action.id)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${
                        isDone
                          ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-70'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-500'
                      }`}
                    >
                      <button className="mt-0.5 shrink-0 text-teal-600">
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4 text-slate-300" />}
                      </button>
                      <div className="text-xs text-slate-800 dark:text-slate-200 leading-snug">
                        <span className={isDone ? 'line-through text-slate-400' : 'font-medium'}>
                          {action.title[language] || action.title.en}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* 4. Measurable Milestones Checklist */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-3">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Flag className="w-4 h-4 text-amber-500" />
              <span>{t.quarterMilestone}</span>
            </h2>

            <div className="space-y-2">
              {quarter.milestones
                .filter((m) => filterTask(m.id, m.title[language] || m.title.en))
                .map((ms) => {
                  const isDone = completedTaskIds.has(ms.id);
                  return (
                    <div
                      key={ms.id}
                      onClick={() => toggleTask(ms.id)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${
                        isDone
                          ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-70'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-amber-500'
                      }`}
                    >
                      <button className="mt-0.5 shrink-0 text-amber-500">
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4 text-slate-300" />}
                      </button>
                      <div className="text-xs text-slate-800 dark:text-slate-200 leading-snug">
                        <span className={isDone ? 'line-through text-slate-400' : 'font-medium'}>
                          {ms.title[language] || ms.title.en}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Right Col: Portfolio Project Deliverables, Notes & Resources */}
        <div className="space-y-6">
          {/* Portfolio Projects */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileCode className="w-4 h-4 text-teal-600" />
                <span>{t.portfolioDeliverables}</span>
              </h2>
              <button
                onClick={() => setActiveTab('projects')}
                className="text-[11px] text-teal-600 dark:text-teal-400 hover:underline font-semibold cursor-pointer"
              >
                {language === 'en' ? 'Manage All →' : 'Projects Tab →'}
              </button>
            </div>

            {quarter.projects.length === 0 ? (
              <p className="text-xs text-slate-400">
                {language === 'en' ? 'Focus is on fundamentals and competitive coding this quarter.' : 'Is quarter me theoretical aur coding practice par focus hai.'}
              </p>
            ) : (
              <div className="space-y-3">
                {quarter.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        {proj.title[language]}
                      </h4>
                      <span className="text-[10px] text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/80 px-1.5 py-0.5 rounded font-mono shrink-0">
                        {proj.difficulty}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {proj.description[language]}
                    </p>

                    <div className="pt-1 text-[11px] text-slate-600 dark:text-slate-300">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {language === 'en' ? 'Portfolio Impact:' : 'Impression:'}{' '}
                      </span>
                      {proj.portfolioImpact[language]}
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {proj.technologies.map((t) => (
                        <span key={t} className="text-[10px] text-slate-400 font-mono">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                      <button
                        onClick={() => setActiveTab('projects')}
                        className="text-xs text-teal-600 dark:text-teal-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <span>{language === 'en' ? 'Add Links & Status' : 'Project Track Karein'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Curated Resources */}
          {quarter.resources && quarter.resources.length > 0 && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-3">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal-600" />
                <span>{language === 'en' ? 'Curated Study Links' : 'Recommended Resources'}</span>
              </h2>

              <div className="space-y-2">
                {quarter.resources.map((res) => (
                  <a
                    key={res.id}
                    href={res.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-teal-500 block transition-colors group"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      <span className="truncate">{res.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-50 group-hover:opacity-100" />
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                      <span>{res.type}</span>
                      {res.free && <span>· Free</span>}
                    </div>
                    {res.notes && (
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                        {res.notes}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Personal Notes & Journal */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Edit2 className="w-4 h-4 text-teal-600" />
              <span>{t.quarterNotes}</span>
            </h2>

            {/* Note input */}
            <div className="space-y-2">
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder={t.notePlaceholder}
                rows={3}
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-teal-500 resize-none"
              />
              <button
                type="button"
                onClick={handleSaveNote}
                disabled={!noteText.trim()}
                className="w-full py-1.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white rounded-md text-xs font-semibold transition-colors cursor-pointer"
              >
                {t.addNote}
              </button>
            </div>

            {/* Existing notes */}
            {quarterNotes.length > 0 && (
              <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 max-h-72 overflow-y-auto pr-1">
                {quarterNotes.map((note) => {
                  const isEditing = editingNoteId === note.id;
                  return (
                    <div
                      key={note.id}
                      className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-2 text-xs"
                    >
                      {isEditing ? (
                        <div className="space-y-1.5">
                          <textarea
                            value={editingNoteText}
                            onChange={(e) => setEditingNoteText(e.target.value)}
                            rows={2}
                            className="w-full p-2 bg-white dark:bg-slate-800 border rounded text-xs text-slate-900 dark:text-white"
                          />
                          <div className="flex justify-end gap-1.5">
                            <button
                              onClick={() => setEditingNoteId(null)}
                              className="px-2 py-0.5 text-[11px] text-slate-500"
                            >
                              {t.cancel}
                            </button>
                            <button
                              onClick={() => handleUpdateNote(note.id)}
                              className="px-2.5 py-0.5 bg-teal-600 text-white rounded text-[11px] font-medium"
                            >
                              {t.save}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
                            {note.text}
                          </p>
                          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800">
                            <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  setEditingNoteId(note.id);
                                  setEditingNoteText(note.text);
                                }}
                                className="hover:text-slate-700 dark:hover:text-slate-200"
                              >
                                {t.edit}
                              </button>
                              <button
                                onClick={() => setDeleteNoteConfirmId(note.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                {t.delete}
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Note Confirmation Dialog */}
      {deleteNoteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 max-w-sm w-full space-y-4 shadow-xl">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {t.confirmDeleteNote}
            </h3>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeleteNoteConfirmId(null)}
                className="px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-md"
              >
                {t.cancel}
              </button>
              <button
                onClick={() => {
                  deleteNote(quarter.id, deleteNoteConfirmId);
                  setDeleteNoteConfirmId(null);
                }}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-md"
              >
                {t.delete}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
