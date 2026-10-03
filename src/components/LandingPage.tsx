import React from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { translations } from '../data/translations';
import { TRACKS_DATA } from '../data/tracksData';
import {
  Compass,
  ArrowRight,
  ShieldAlert,
  Code2,
  GitBranch,
  Layers,
  Award,
  BookMarked,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

interface LandingPageProps {
  onOpenOnboarding: () => void;
  onOpenTrackModal: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onOpenOnboarding, onOpenTrackModal }) => {
  const { language, profile, setActiveTab } = useRoadmap();
  const t = translations[language];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="pt-10 sm:pt-16 pb-10 text-center max-w-4xl mx-auto px-4">
        {/* Subtle kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-900/60 px-3.5 py-1.5 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>
            {language === 'en'
              ? 'Honest, Step-by-Step 4-Year Engineering Blueprint'
              : 'Tech Me High Package Ke Liye Realistic 4-Saal Ka Blueprint'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          {language === 'en' ? (
            <>
              From Broad Ambition to a <span className="text-teal-600 dark:text-teal-400">Verifiable 4-Year</span> Tech Career
            </>
          ) : (
            <>
              "High Package Chahiye" se lekar <span className="text-teal-600 dark:text-teal-400">Pura 4-Saal Ka Plan</span>
            </>
          )}
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {language === 'en'
            ? 'Stop jumping between random tutorials. Turn your tech career goal into 16 structured quarters of DSA, production projects, internships, system design, and negotiation.'
            : 'Random YouTube videos dekhna band karein. Coding fundamentals se lekar live projects, real internships aur mock interviews tak har quarter ka clear roadmap.'}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenOnboarding}
            className="w-full sm:w-auto px-6 py-3.5 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-semibold text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{profile ? t.viewExistingBtn : t.buildRoadmapBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenTrackModal}
            className="w-full sm:w-auto px-5 py-3.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-slate-500" />
            <span>{t.tracksCompare}</span>
          </button>
        </div>

        {/* Honest reality disclaimer bar */}
        <div className="mt-10 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-left max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <span className="font-semibold text-slate-900 dark:text-white">
                {language === 'en' ? 'Our Transparency Standard:' : 'Hamara Transparency Promise:'}
              </span>
              <p className="leading-relaxed">
                {language === 'en'
                  ? 'We do not sell shortcuts, course bundles, or fake 50 LPA placement guarantees. Your real outcome will depend on your consistent problem-solving practice, depth of projects, location, market timing, and communication.'
                  : 'Hum koi fake 40 LPA guarantee ya course nahi bechte. Selection aapki continuous problem-solving consistency, real projects aur interview execution par hi depend karega.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Year Phased Arc Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {language === 'en' ? 'The 4-Year Phased Arc' : '4-Saal Ka Sequential Plan'}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            {language === 'en'
              ? 'Organized into 16 quarters so you always know what to study this week.'
              : 'Har saal 4 quarters me bata hua hai, taaki confusion na ho ki abhi kya karna hai.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              year: 'Year 1',
              title: { en: 'Foundations & Tooling', hi: 'Foundations & Small Projects' },
              desc: {
                en: 'Programming fundamentals (C++/Java/Python), Git, Big-O, Linear Data Structures, basic web APIs, and building first working CLI & full-stack apps.',
                hi: 'Programming logic, Git/GitHub, Time complexity, Stacks/Queues aur pehli functional full-stack application.',
              },
              icon: Code2,
              hours: '10-12 hrs/wk',
            },
            {
              year: 'Year 2',
              title: { en: 'Systems & First Internship', hi: 'Core CS & Pehli Internship' },
              desc: {
                en: 'Tree/Graph algorithms, Operating Systems, Computer Networks, DBMS indexing, unit testing, and landing your first tech internship.',
                hi: 'Graphs/DP, OS threads, SQL indexing, Docker containers aur summer internship crack karna.',
              },
              icon: GitBranch,
              hours: '12-14 hrs/wk',
            },
            {
              year: 'Year 3',
              title: { en: 'Scale, Architecture & PPOs', hi: 'System Design & PPO Offers' },
              desc: {
                en: 'High-Level System Design (caching, queues, sharding), Low-Level Design (LLD), microservices on AWS, and converting internships into return offers (PPO).',
                hi: 'System Design (Redis, Kafka, Scaling), LLD design patterns, AWS deployment aur return offer (PPO) secure karna.',
              },
              icon: Layers,
              hours: '14-16 hrs/wk',
            },
            {
              year: 'Year 4',
              title: { en: 'Placement Blitz & Negotiation', hi: 'Job Blitz & Offer Negotiation' },
              desc: {
                en: 'Outbound employee referral campaigns, live coding drills, behavioral STAR stories, multiple competing offers, and salary negotiation.',
                hi: '50+ companies me referral pipeline, timed mock interviews, multiple offer letters aur compensation negotiation.',
              },
              icon: Award,
              hours: '14-16 hrs/wk',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-teal-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded">
                      {item.year}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    {item.title[language]}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc[language]}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 font-mono">
                  {item.hours}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Available Career Tracks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {language === 'en' ? '6 Tailored Career Tracks' : '6 Career Tracks Ka Curated Curriculum'}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {language === 'en'
                ? 'Each track comes with its own projects, math depth, and interview prep modules.'
                : 'Har track ke alag portfolio projects aur interview requirements hote hain.'}
            </p>
          </div>
          <button
            onClick={onOpenTrackModal}
            className="text-xs text-teal-600 dark:text-teal-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>{language === 'en' ? 'Compare all tracks side-by-side →' : 'Sabhi tracks compare karein →'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(TRACKS_DATA).map(([key, trackMeta]) => {
            return (
              <div
                key={key}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:shadow-sm transition-all"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    {trackMeta.title[language]}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {trackMeta.subtitle[language]}
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 w-24 shrink-0 text-[11px]">Coding:</span>
                      <span className="font-medium">{trackMeta.codingIntensity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 w-24 shrink-0 text-[11px]">Math:</span>
                      <span className="font-medium">{trackMeta.mathIntensity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 w-24 shrink-0 text-[11px]">Core Tools:</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                        {trackMeta.keyTools.slice(0, 3).join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => {
                      if (!profile) {
                        onOpenOnboarding();
                      } else {
                        setActiveTab('quarters');
                      }
                    }}
                    className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{language === 'en' ? 'Explore 16 Quarters' : '16 Quarters Dekhein'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 dark:bg-slate-950 text-white rounded-2xl p-6 sm:p-10 border border-slate-800">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">
              {language === 'en'
                ? 'Everything You Need in One Browser Dashboard'
                : 'Job Preparation Ke Saare Tools Ek Jagah'}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
              {language === 'en'
                ? 'Built for focus and zero distraction. No sign-ups required, all data securely saved in your browser localStorage.'
                : 'Zero distraction, koi account password ka jhanjhat nahi. Aapka data aapke browser me securely save rehta hai.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center">
                <CheckCircle className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold">
                {language === 'en' ? 'Interactive Checklists' : 'Trackable Task Checklists'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'en'
                  ? 'Mark tasks, add personal reflections, journal bugs, and add your own custom assignments.'
                  : 'Tasks complete mark karein, personal notes likhein aur custom tasks add karein.'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center">
                <BookMarked className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold">
                {language === 'en' ? 'Real Project Deliverables' : 'Authentic Portfolio Projects'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'en'
                  ? 'Build systems with Docker, WebSockets, Redis, and cloud deploy rather than copy-paste tutorial clones.'
                  : 'Docker, WebSockets aur Redis wale projects banayein jo recruiter ke samne stand out karein.'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold">
                {language === 'en' ? 'Job Readiness Audit' : 'Job Readiness Audit'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'en'
                  ? 'Audit yourself across 6 critical pillars: DSA, Live Projects, ATS Resume, System Design, STAR Stories, and Referrals.'
                  : 'DSA, projects, ATS resume, system design aur referrals ke 6 pillars par khud ko rate karein.'}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              {language === 'en'
                ? 'Ready to formulate your career trajectory?'
                : 'Apna customized roadmap generate karne ke liye tayar?'}
            </span>
            <button
              onClick={onOpenOnboarding}
              className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              {profile ? t.viewExistingBtn : t.buildRoadmapBtn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
