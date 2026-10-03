import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import {
  UserProfile,
  Language,
  CareerTrack,
  RoadmapQuarter,
  RoadmapTask,
  QuarterNote,
  JobReadinessPillar,
  TaskCategory,
} from '../types';
import { getRoadmapForTrack } from '../data/roadmaps';
import { INITIAL_JOB_READINESS } from '../data/jobReadinessData';

interface OverallStats {
  totalTasks: number;
  completedTasks: number;
  percentComplete: number;
  totalProjects: number;
  completedProjects: number;
  totalSkills: number;
  completedSkills: number;
}

interface RoadmapContextType {
  profile: UserProfile | null;
  setProfile: (p: UserProfile) => void;
  language: Language;
  setLanguage: (l: Language) => void;
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
  activeTab: string;
  setActiveTab: (t: string) => void;
  selectedQuarterId: string;
  setSelectedQuarterId: (id: string) => void;
  roadmap: RoadmapQuarter[];
  completedTaskIds: Set<string>;
  toggleTask: (taskId: string) => void;
  notes: Record<string, QuarterNote[]>;
  addNote: (quarterId: string, text: string) => void;
  updateNote: (quarterId: string, noteId: string, text: string) => void;
  deleteNote: (quarterId: string, noteId: string) => void;
  projectStatuses: Record<string, { status: 'not-started' | 'in-progress' | 'completed'; liveUrl?: string; repoUrl?: string }>;
  updateProjectDetails: (
    projectId: string,
    status: 'not-started' | 'in-progress' | 'completed',
    liveUrl?: string,
    repoUrl?: string
  ) => void;
  customTasks: Record<string, RoadmapTask[]>;
  addCustomTask: (quarterId: string, title: string, category?: TaskCategory) => void;
  deleteCustomTask: (quarterId: string, taskId: string) => void;
  readinessPillars: JobReadinessPillar[];
  toggleReadinessItem: (itemId: string) => void;
  stats: OverallStats;
  currentQuarter: RoadmapQuarter;
  exportData: () => string;
  importData: (jsonStr: string) => boolean;
  resetAllData: () => void;
  changeTrack: (newTrack: CareerTrack) => void;
}

const STORAGE_KEYS = {
  PROFILE: 'it_career_profile',
  LANG: 'it_career_lang',
  THEME: 'it_career_theme',
  COMPLETED_TASKS: 'it_career_completed_tasks',
  NOTES: 'it_career_notes',
  PROJECTS: 'it_career_projects',
  CUSTOM_TASKS: 'it_career_custom_tasks',
  READINESS: 'it_career_readiness',
  SELECTED_QUARTER: 'it_career_selected_quarter',
};

const RoadmapContext = createContext<RoadmapContextType | undefined>(undefined);

export const RoadmapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Language: Default to Hinglish ('hi') as explicitly requested by prompt
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LANG);
    return (saved === 'en' || saved === 'hi') ? saved : 'hi';
  });

  const setLanguage = (l: Language) => {
    setLanguageState(l);
    localStorage.setItem(STORAGE_KEYS.LANG, l);
  };

  // 2. Theme: Light or dark
  const [theme, setThemeState] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    return saved === 'dark' ? 'dark' : 'light';
  });

  const setTheme = (t: 'light' | 'dark') => {
    setThemeState(t);
    localStorage.setItem(STORAGE_KEYS.THEME, t);
    if (t === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // 3. User Profile
  const [profile, setProfileState] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const setProfile = (p: UserProfile) => {
    setProfileState(p);
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(p));
  };

  // 4. Navigation tabs
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  // 5. Active Roadmap Data based on selected track
  const currentTrack: CareerTrack = profile?.track || 'software-engineering';
  const rawRoadmap = useMemo(() => getRoadmapForTrack(currentTrack), [currentTrack]);

  // Selected quarter
  const [selectedQuarterId, setSelectedQuarterIdState] = useState<string>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SELECTED_QUARTER);
    return saved || rawRoadmap[0]?.id || 'swe-y1q1';
  });

  const setSelectedQuarterId = (id: string) => {
    setSelectedQuarterIdState(id);
    localStorage.setItem(STORAGE_KEYS.SELECTED_QUARTER, id);
  };

  // 6. Completed Task IDs
  const [completedTaskIds, setCompletedTaskIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_TASKS);
      return saved ? new Set(JSON.parse(saved)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  const toggleTask = (taskId: string) => {
    setCompletedTaskIds((prev) => {
      const updated = new Set(prev);
      if (updated.has(taskId)) {
        updated.delete(taskId);
      } else {
        updated.add(taskId);
      }
      localStorage.setItem(STORAGE_KEYS.COMPLETED_TASKS, JSON.stringify(Array.from(updated)));
      return updated;
    });
  };

  // 7. Notes
  const [notes, setNotes] = useState<Record<string, QuarterNote[]>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NOTES);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const addNote = (quarterId: string, text: string) => {
    if (!text.trim()) return;
    const newNote: QuarterNote = {
      id: 'note_' + Date.now(),
      text: text.trim(),
      createdAt: new Date().toISOString(),
    };
    setNotes((prev) => {
      const list = prev[quarterId] ? [newNote, ...prev[quarterId]] : [newNote];
      const updated = { ...prev, [quarterId]: list };
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(updated));
      return updated;
    });
  };

  const updateNote = (quarterId: string, noteId: string, text: string) => {
    setNotes((prev) => {
      const list = prev[quarterId] || [];
      const updatedList = list.map((n) =>
        n.id === noteId ? { ...n, text, updatedAt: new Date().toISOString() } : n
      );
      const updated = { ...prev, [quarterId]: updatedList };
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(updated));
      return updated;
    });
  };

  const deleteNote = (quarterId: string, noteId: string) => {
    setNotes((prev) => {
      const list = prev[quarterId] || [];
      const updatedList = list.filter((n) => n.id !== noteId);
      const updated = { ...prev, [quarterId]: updatedList };
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(updated));
      return updated;
    });
  };

  // 8. Custom tasks
  const [customTasks, setCustomTasks] = useState<Record<string, RoadmapTask[]>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CUSTOM_TASKS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const addCustomTask = (quarterId: string, titleText: string, category: TaskCategory = 'practice') => {
    if (!titleText.trim()) return;
    const newTask: RoadmapTask = {
      id: 'custom_' + Date.now(),
      title: { en: titleText.trim(), hi: titleText.trim() },
      category,
      completed: false,
      isCustom: true,
    };
    setCustomTasks((prev) => {
      const list = prev[quarterId] ? [...prev[quarterId], newTask] : [newTask];
      const updated = { ...prev, [quarterId]: list };
      localStorage.setItem(STORAGE_KEYS.CUSTOM_TASKS, JSON.stringify(updated));
      return updated;
    });
  };

  const deleteCustomTask = (quarterId: string, taskId: string) => {
    setCustomTasks((prev) => {
      const list = prev[quarterId] || [];
      const updated = { ...prev, [quarterId]: list.filter((t) => t.id !== taskId) };
      localStorage.setItem(STORAGE_KEYS.CUSTOM_TASKS, JSON.stringify(updated));
      return updated;
    });
    // Also remove from completedTaskIds if it was marked done
    if (completedTaskIds.has(taskId)) {
      toggleTask(taskId);
    }
  };

  // 9. Project statuses & URLs
  const [projectStatuses, setProjectStatuses] = useState<
    Record<string, { status: 'not-started' | 'in-progress' | 'completed'; liveUrl?: string; repoUrl?: string }>
  >(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const updateProjectDetails = (
    projectId: string,
    status: 'not-started' | 'in-progress' | 'completed',
    liveUrl?: string,
    repoUrl?: string
  ) => {
    setProjectStatuses((prev) => {
      const updated = {
        ...prev,
        [projectId]: {
          status,
          liveUrl: liveUrl !== undefined ? liveUrl : prev[projectId]?.liveUrl || '',
          repoUrl: repoUrl !== undefined ? repoUrl : prev[projectId]?.repoUrl || '',
        },
      };
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
      return updated;
    });
  };

  // 10. Job readiness audit
  const [readinessPillars, setReadinessPillars] = useState<JobReadinessPillar[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.READINESS);
      return saved ? JSON.parse(saved) : INITIAL_JOB_READINESS;
    } catch {
      return INITIAL_JOB_READINESS;
    }
  });

  const toggleReadinessItem = (itemId: string) => {
    setReadinessPillars((prev) => {
      const updated = prev.map((pillar) => ({
        ...pillar,
        items: pillar.items.map((item) =>
          item.id === itemId ? { ...item, completed: !item.completed } : item
        ),
      }));
      localStorage.setItem(STORAGE_KEYS.READINESS, JSON.stringify(updated));
      return updated;
    });
  };

  // 11. Roadmap with custom tasks injected and workload scaled to weekly study hours
  const roadmap = useMemo(() => {
    const weeklyHours = profile?.weeklyHours || 12;
    // Scale base hours ratio: if user has 20 hours vs base 12, multiplier is 20/12
    return rawRoadmap.map((quarter) => {
      const userCustomTasks = customTasks[quarter.id] || [];
      const scaledHours = Math.round((quarter.baseHoursPerWeek / 12) * weeklyHours);
      return {
        ...quarter,
        baseHoursPerWeek: scaledHours,
        practice: [...quarter.practice, ...userCustomTasks],
      };
    });
  }, [rawRoadmap, customTasks, profile?.weeklyHours]);

  // Current quarter object
  const currentQuarter = useMemo(() => {
    const found = roadmap.find((q) => q.id === selectedQuarterId);
    return found || roadmap[0];
  }, [roadmap, selectedQuarterId]);

  // Overall Statistics computation
  const stats: OverallStats = useMemo(() => {
    let totalTasks = 0;
    let completedTasks = 0;
    let totalSkills = 0;
    let completedSkills = 0;
    let totalProjects = 0;
    let completedProjects = 0;

    roadmap.forEach((q) => {
      // Skills
      q.skills.forEach((s) => {
        totalTasks++;
        totalSkills++;
        if (completedTaskIds.has(s.id)) {
          completedTasks++;
          completedSkills++;
        }
      });
      // Practice
      q.practice.forEach((p) => {
        totalTasks++;
        if (completedTaskIds.has(p.id)) completedTasks++;
      });
      // Milestones
      q.milestones.forEach((m) => {
        totalTasks++;
        if (completedTaskIds.has(m.id)) completedTasks++;
      });
      // Career actions
      q.careerActions.forEach((c) => {
        totalTasks++;
        if (completedTaskIds.has(c.id)) completedTasks++;
      });
      // Projects
      q.projects.forEach((proj) => {
        totalProjects++;
        const state = projectStatuses[proj.id]?.status || proj.status;
        if (state === 'completed') {
          completedProjects++;
        }
      });
    });

    const percentComplete = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    return {
      totalTasks,
      completedTasks,
      percentComplete,
      totalProjects,
      completedProjects,
      totalSkills,
      completedSkills,
    };
  }, [roadmap, completedTaskIds, projectStatuses]);

  // Export JSON
  const exportData = (): string => {
    const payload = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      profile,
      language,
      theme,
      completedTaskIds: Array.from(completedTaskIds),
      notes,
      projectStatuses,
      customTasks,
      readinessPillars,
      selectedQuarterId,
    };
    return JSON.stringify(payload, null, 2);
  };

  // Import JSON
  const importData = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (data.profile) {
        setProfileState(data.profile);
        localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(data.profile));
      }
      if (data.completedTaskIds && Array.isArray(data.completedTaskIds)) {
        const set = new Set<string>(data.completedTaskIds);
        setCompletedTaskIds(set);
        localStorage.setItem(STORAGE_KEYS.COMPLETED_TASKS, JSON.stringify(Array.from(set)));
      }
      if (data.notes) {
        setNotes(data.notes);
        localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(data.notes));
      }
      if (data.projectStatuses) {
        setProjectStatuses(data.projectStatuses);
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(data.projectStatuses));
      }
      if (data.customTasks) {
        setCustomTasks(data.customTasks);
        localStorage.setItem(STORAGE_KEYS.CUSTOM_TASKS, JSON.stringify(data.customTasks));
      }
      if (data.readinessPillars) {
        setReadinessPillars(data.readinessPillars);
        localStorage.setItem(STORAGE_KEYS.READINESS, JSON.stringify(data.readinessPillars));
      }
      return true;
    } catch (err) {
      console.error('Failed to import JSON data:', err);
      return false;
    }
  };

  // Reset all data
  const resetAllData = () => {
    Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
    setProfileState(null);
    setCompletedTaskIds(new Set());
    setNotes({});
    setProjectStatuses({});
    setCustomTasks({});
    setReadinessPillars(INITIAL_JOB_READINESS);
    setActiveTab('dashboard');
  };

  // Change Track helper
  const changeTrack = (newTrack: CareerTrack) => {
    if (!profile) return;
    const updated: UserProfile = { ...profile, track: newTrack };
    setProfile(updated);
    const newRoadmap = getRoadmapForTrack(newTrack);
    if (newRoadmap.length > 0) {
      setSelectedQuarterId(newRoadmap[0].id);
    }
  };

  return (
    <RoadmapContext.Provider
      value={{
        profile,
        setProfile,
        language,
        setLanguage,
        theme,
        setTheme,
        activeTab,
        setActiveTab,
        selectedQuarterId,
        setSelectedQuarterId,
        roadmap,
        completedTaskIds,
        toggleTask,
        notes,
        addNote,
        updateNote,
        deleteNote,
        projectStatuses,
        updateProjectDetails,
        customTasks,
        addCustomTask,
        deleteCustomTask,
        readinessPillars,
        toggleReadinessItem,
        stats,
        currentQuarter,
        exportData,
        importData,
        resetAllData,
        changeTrack,
      }}
    >
      {children}
    </RoadmapContext.Provider>
  );
};

export const useRoadmap = () => {
  const context = useContext(RoadmapContext);
  if (!context) {
    throw new Error('useRoadmap must be used within a RoadmapProvider');
  }
  return context;
};
