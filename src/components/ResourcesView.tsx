import React, { useState } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { translations } from '../data/translations';
import {
  BookOpen,
  ExternalLink,
  Search,
  Code2,
  Database,
  Cpu,
  Cloud,
  Shield,
  Layers,
} from 'lucide-react';

interface ResourceEntry {
  title: string;
  category: string;
  type: 'Platform' | 'Book' | 'Course' | 'Documentation';
  description: {
    en: string;
    hi: string;
  };
  url: string;
  free: boolean;
}

const MASTER_RESOURCES: ResourceEntry[] = [
  {
    title: 'NeetCode 150 & Interactive DSA Roadmap',
    category: 'Software Engineering',
    type: 'Platform',
    description: {
      en: 'Pattern-by-pattern visual roadmap covering the most frequent interview problems.',
      hi: 'Sabse popular interview DSA patterns ki step-by-step video practice list.',
    },
    url: 'https://neetcode.io/roadmap',
    free: true,
  },
  {
    title: 'System Design Primer (Donne Martin)',
    category: 'Software Engineering',
    type: 'Book',
    description: {
      en: 'The definitive open-source guide to designing scalable distributed systems.',
      hi: 'Scalable distributed systems aur caching/load balancing ka best open-source guide.',
    },
    url: 'https://github.com/donnemartin/system-design-primer',
    free: true,
  },
  {
    title: 'Full Stack Open (University of Helsinki)',
    category: 'Software Engineering',
    type: 'Course',
    description: {
      en: 'World-class modern web development with React, Node.js, TypeScript, and CI/CD.',
      hi: 'University of Helsinki ka world-class free modern full stack web course.',
    },
    url: 'https://fullstackopen.com/en/',
    free: true,
  },
  {
    title: 'PortSwigger Web Security Academy',
    category: 'Cybersecurity',
    type: 'Platform',
    description: {
      en: 'Hands-on interactive labs for mastering web application security and OWASP Top 10.',
      hi: 'Web penetration testing aur SQLi/XSS attacks sikhane wale live interactive labs.',
    },
    url: 'https://portswigger.net/web-security',
    free: true,
  },
  {
    title: 'TryHackMe Cyber Defense & Pentest Rooms',
    category: 'Cybersecurity',
    type: 'Platform',
    description: {
      en: 'Gamified virtual security machines covering network analysis, Linux privesc, and SIEM.',
      hi: 'Gamified cybersecurity rooms jo step-by-step terminal security sikhate hain.',
    },
    url: 'https://tryhackme.com/',
    free: true,
  },
  {
    title: 'Andrej Karpathy: Neural Networks Zero to Hero',
    category: 'AI & Machine Learning',
    type: 'Course',
    description: {
      en: 'Deep learning mechanics explained from micrograd autograd engine up to GPTs.',
      hi: 'Karpathy ka famous video series jo scratch se backprop aur transformers sikhata hai.',
    },
    url: 'https://karpathy.ai/zero-to-hero.html',
    free: true,
  },
  {
    title: 'Hugging Face NLP & Deep Learning Course',
    category: 'AI & Machine Learning',
    type: 'Documentation',
    description: {
      en: 'Official interactive tutorials on fine-tuning LLMs, Transformers, and PyTorch.',
      hi: 'Modern Transformers, LLMs aur Hugging Face libraries ka official interactive course.',
    },
    url: 'https://huggingface.co/learn',
    free: true,
  },
  {
    title: 'StrataScratch SQL & Data Science Questions',
    category: 'Data Science',
    type: 'Platform',
    description: {
      en: 'Real data analyst and science questions asked by Airbnb, Netflix, and Meta.',
      hi: 'Top tech companies ke real interview SQL aur Python data questions.',
    },
    url: 'https://www.stratascratch.com/',
    free: true,
  },
  {
    title: 'Google Site Reliability Engineering (SRE) Book',
    category: 'Cloud & DevOps',
    type: 'Book',
    description: {
      en: 'How Google operates production systems, incident response, and error budgets.',
      hi: 'Google production systems kaise manage karta hai, free full book online available.',
    },
    url: 'https://sre.google/sre-book/table-of-contents/',
    free: true,
  },
  {
    title: 'Kubernetes Interactive Tutorials',
    category: 'Cloud & DevOps',
    type: 'Documentation',
    description: {
      en: 'Browser-based terminal tutorials to practice Pods, Deployments, and Services.',
      hi: 'Browser me hi live Kubernetes cluster command line practice.',
    },
    url: 'https://kubernetes.io/docs/tutorials/',
    free: true,
  },
  {
    title: 'Lenny\'s Newsletter Product Archive',
    category: 'Product & UX',
    type: 'Book',
    description: {
      en: 'World-class product strategy, roadmaps, PRD templates, and growth frameworks.',
      hi: 'Silicon Valley ke top PMs ke real PRD templates aur launch frameworks.',
    },
    url: 'https://www.lennysnewsletter.com/',
    free: true,
  },
  {
    title: 'Refactoring Guru: Design Patterns & Clean Code',
    category: 'Software Engineering',
    type: 'Documentation',
    description: {
      en: 'Visual breakdowns of Singleton, Factory, Strategy, Observer, and SOLID principles.',
      hi: 'OOP Design Patterns ka sabse clear visual guide with interactive diagrams.',
    },
    url: 'https://refactoring.guru/design-patterns',
    free: true,
  },
];

export const ResourcesView: React.FC = () => {
  const { language } = useRoadmap();
  const t = translations[language];

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  const categories = [
    'all',
    'Software Engineering',
    'Data Science',
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Cybersecurity',
    'Product & UX',
  ];

  const filtered = MASTER_RESOURCES.filter((res) => {
    if (selectedCategory !== 'all' && res.category !== selectedCategory) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const titleMatch = res.title.toLowerCase().includes(q);
      const descMatch = (res.description[language] || res.description.en).toLowerCase().includes(q);
      if (!titleMatch && !descMatch) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span>High-Signal Learning Hub</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-600" />
            <span>{t.resources}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {language === 'en'
              ? 'Zero affiliate spam or paid course promotions. Only authoritative documentation, free books, and interactive problem platforms.'
              : 'Zero spam, koi paid course promotion nahi. Sirf official docs, free kitabein aur verified practice platforms.'}
          </p>
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
            placeholder={language === 'en' ? 'Search learning platforms...' : 'Resources search karein...'}
            className="w-full pl-8 pr-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-teal-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1 self-start sm:self-auto text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-teal-600 font-semibold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {cat === 'all' ? t.filterAll : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs hover:border-teal-500 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>{item.category}</span>
                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded font-mono">
                  {item.type}
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 flex items-center justify-between gap-2">
                <span>{item.title}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 shrink-0" />
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description[language] || item.description.en}
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-teal-600 dark:text-teal-400 font-semibold">
              <span>{language === 'en' ? 'Open Resource' : 'Resource Kholein'}</span>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Free Access</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
