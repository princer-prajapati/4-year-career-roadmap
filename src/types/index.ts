export type Language = 'en' | 'hi';

export type CareerTrack =
  | 'software-engineering'
  | 'data-science'
  | 'ai-ml'
  | 'cloud-devops'
  | 'cybersecurity'
  | 'product-ux'
  | 'not-sure';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export type LearningStyle = 'projects' | 'videos' | 'reading' | 'mixed';

export type EducationStage =
  | 'college-early'
  | 'college-late'
  | 'non-cs-grad'
  | 'career-switcher'
  | 'self-taught'
  | 'junior-dev';

export interface UserProfile {
  name: string;
  stage: EducationStage;
  currentRole: string;
  track: CareerTrack;
  skillLevel: SkillLevel;
  weeklyHours: number;
  learningStyle: LearningStyle;
  targetLocation: string;
  targetSalaryAspiration: string;
  startDate: string; // ISO string
}

export type TaskCategory = 'skill' | 'practice' | 'project' | 'career' | 'milestone';

export interface RoadmapTask {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  category: TaskCategory;
  description?: {
    en: string;
    hi: string;
  };
  completed: boolean;
  completedAt?: string;
  isCustom?: boolean;
}

export interface RoadmapProject {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  technologies: string[];
  portfolioImpact: {
    en: string;
    hi: string;
  };
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'not-started' | 'in-progress' | 'completed';
  liveUrl?: string;
  repoUrl?: string;
}

export interface ResourceLink {
  id: string;
  title: string;
  type: string;
  url: string;
  free: boolean;
  notes?: string;
}

export interface QuarterNote {
  id: string;
  text: string;
  createdAt: string;
  updatedAt?: string;
}

export interface RoadmapQuarter {
  id: string; // e.g. "y1q1"
  year: number; // 1, 2, 3, 4
  quarter: number; // 1, 2, 3, 4
  title: {
    en: string;
    hi: string;
  };
  focus: {
    en: string;
    hi: string;
  };
  whyItMatters: {
    en: string;
    hi: string;
  };
  baseHoursPerWeek: number;
  skills: RoadmapTask[];
  practice: RoadmapTask[];
  projects: RoadmapProject[];
  careerActions: RoadmapTask[];
  milestones: RoadmapTask[];
  resources: ResourceLink[];
}

export interface TrackMetadata {
  id: CareerTrack;
  title: {
    en: string;
    hi: string;
  };
  subtitle: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  mathIntensity: 'Low' | 'Medium' | 'High';
  codingIntensity: 'Low' | 'Medium' | 'High';
  jobMarketDemand: {
    en: string;
    hi: string;
  };
  typicalRoles: string[];
  bestSuitedFor: {
    en: string;
    hi: string;
  };
  keyTools: string[];
}

export interface JobReadinessItem {
  id: string;
  pillarId: string;
  title: {
    en: string;
    hi: string;
  };
  explanation: {
    en: string;
    hi: string;
  };
  actionTip: {
    en: string;
    hi: string;
  };
  completed: boolean;
}

export interface JobReadinessPillar {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  targetImpact: {
    en: string;
    hi: string;
  };
  items: JobReadinessItem[];
}
