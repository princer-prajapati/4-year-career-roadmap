import React, { useState } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { translations } from '../data/translations';
import { TRACKS_DATA } from '../data/tracksData';
import {
  UserProfile,
  CareerTrack,
  SkillLevel,
  LearningStyle,
  EducationStage,
} from '../types';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  Clock,
  Briefcase,
  AlertTriangle,
  X,
} from 'lucide-react';

interface OnboardingWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrackComparison: () => void;
}

export const OnboardingWizard: React.FC<OnboardingWizardProps> = ({
  isOpen,
  onClose,
  onOpenTrackComparison,
}) => {
  const { language, setProfile, profile, setActiveTab } = useRoadmap();
  const t = translations[language];

  const [step, setStep] = useState<number>(1);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form states
  const [name, setName] = useState<string>(profile?.name || '');
  const [stage, setStage] = useState<EducationStage>(profile?.stage || 'college-early');
  const [currentRole, setCurrentRole] = useState<string>(profile?.currentRole || '');
  const [track, setTrack] = useState<CareerTrack>(profile?.track || 'software-engineering');
  const [skillLevel, setSkillLevel] = useState<SkillLevel>(profile?.skillLevel || 'beginner');
  const [weeklyHours, setWeeklyHours] = useState<number>(profile?.weeklyHours || 14);
  const [learningStyle, setLearningStyle] = useState<LearningStyle>(profile?.learningStyle || 'mixed');
  const [targetLocation, setTargetLocation] = useState<string>(profile?.targetLocation || 'India Tech Hubs (Bangalore / NCR / Pune / Hyd) & Remote');
  const [targetSalaryAspiration, setTargetSalaryAspiration] = useState<string>(
    profile?.targetSalaryAspiration || '₹12L - ₹25L PA / $70k-$110k (Aspirational)'
  );

  if (!isOpen) return null;

  const handleNext = () => {
    setErrorMsg(null);
    if (step === 1) {
      if (!name.trim()) {
        setErrorMsg(language === 'en' ? 'Please enter your name or nickname to proceed.' : 'Kripya aage badhne ke liye apna naam likhein.');
        return;
      }
    }
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Submit & Generate
      const newProfile: UserProfile = {
        name: name.trim(),
        stage,
        currentRole: currentRole.trim() || (language === 'en' ? 'Student / Aspiring Engineer' : 'Student / Learner'),
        track,
        skillLevel,
        weeklyHours,
        learningStyle,
        targetLocation,
        targetSalaryAspiration,
        startDate: new Date().toISOString(),
      };
      setProfile(newProfile);
      setActiveTab('dashboard');
      onClose();
    }
  };

  const handleBack = () => {
    setErrorMsg(null);
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 my-8 relative transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Bar & Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
            <span>
              {t.step} {step} {t.of} 4
            </span>
            <span>{Math.round((step / 4) * 100)}%</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-teal-600 dark:bg-teal-400 h-full transition-all duration-300 rounded-full"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Education Stage & Role */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {language === 'en' ? 'Where are you starting from?' : 'Aap abhi kahan par hain?'}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {language === 'en'
                  ? 'We calibrate your 4-year schedule based on your current background.'
                  : 'Aapke background ke mutabiq hum roadmap ke shuruati saal adjust karenge.'}
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 rounded-lg text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {language === 'en' ? 'Your Name or Preferred Nickname *' : 'Aapka Naam ya Nickname *'}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={language === 'en' ? 'e.g. Rahul, Priya, Alex' : 'Jaise Rahul, Priya, Alex'}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                {language === 'en' ? 'Current Education or Career Stage' : 'Aapka Current Stage'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'college-early', en: '1st or 2nd Year College Student', hi: 'College 1st / 2nd Year (Ideal Time)' },
                  { id: 'college-late', en: '3rd or 4th Year College Student', hi: 'College 3rd / 4th Year (Placement Rush)' },
                  { id: 'non-cs-grad', en: 'Non-CS Graduate (B.Com/Mech/Civil/Arts)', hi: 'Non-CS Graduate (Zero tech background)' },
                  { id: 'career-switcher', en: 'Career Switcher (Currently in non-tech role)', hi: 'Non-tech job se tech me switch' },
                  { id: 'self-taught', en: 'Self-Taught / Bootcamp Student', hi: 'Self-taught learner / Bootcamp' },
                  { id: 'junior-dev', en: 'Junior Developer (Seeking higher compensation)', hi: 'Junior developer targeting high-tier roles' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStage(item.id as EducationStage)}
                    className={`p-3 text-left border rounded-lg transition-all cursor-pointer ${
                      stage === item.id
                        ? 'border-teal-600 bg-teal-50/60 dark:bg-teal-950/40 dark:border-teal-500 ring-1 ring-teal-500'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                    }`}
                  >
                    <div className="text-xs font-medium text-slate-900 dark:text-slate-100">
                      {language === 'en' ? item.en : item.hi}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {language === 'en' ? 'Current Role or Branch (Optional)' : 'Current Role ya College Branch (Optional)'}
              </label>
              <input
                type="text"
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value)}
                placeholder={language === 'en' ? 'e.g. B.Tech CSE 2nd Sem, B.Sc, Operations Associate' : 'Jaise B.Tech CS 2nd Year, BCA, QA Tester'}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        )}

        {/* Step 2: Preferred Track */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {language === 'en' ? 'Select Your High-Growth IT Track' : 'Apna Tech Career Track Chunein'}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {language === 'en'
                    ? 'Every track has distinct project and interview requirements.'
                    : 'Aap is track ko aage jaakar settings se kabhi bhi badal sakte hain.'}
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenTrackComparison}
                className="text-xs text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 font-semibold shrink-0 cursor-pointer pt-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Compare All' : 'Tracks Compare'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
              {Object.entries(TRACKS_DATA).map(([trackKey, meta]) => {
                const isSelected = track === trackKey;
                return (
                  <button
                    key={trackKey}
                    type="button"
                    onClick={() => setTrack(trackKey as CareerTrack)}
                    className={`p-3 text-left border rounded-lg transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-teal-600 bg-teal-50/60 dark:bg-teal-950/40 dark:border-teal-500 ring-1 ring-teal-500'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                        <span>{meta.title[language]}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 ml-1" />}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {meta.subtitle[language]}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <span>Coding: {meta.codingIntensity}</span>
                      <span>·</span>
                      <span>Math: {meta.mathIntensity}</span>
                    </div>
                  </button>
                );
              })}

              {/* Not sure card */}
              <button
                type="button"
                onClick={() => setTrack('not-sure')}
                className={`p-3 text-left border rounded-lg transition-all cursor-pointer ${
                  track === 'not-sure'
                    ? 'border-teal-600 bg-teal-50/60 dark:bg-teal-950/40 dark:border-teal-500 ring-1 ring-teal-500'
                    : 'border-dashed border-slate-300 dark:border-slate-700 hover:border-slate-400 bg-slate-50/50 dark:bg-slate-900/50'
                }`}
              >
                <div className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                  <span>{language === 'en' ? 'I am Not Sure Yet' : 'Main abhi sure nahi hoon'}</span>
                  {track === 'not-sure' && <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  {language === 'en'
                    ? 'Start with universal Year-1 programming foundations. You can pick your track later!'
                    : 'Universal Year-1 fundamentals se shuru karein, aage jaakar track lock kar sakte hain.'}
                </p>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Skill Level, Hours & Style */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {language === 'en' ? 'Pacing & Learning Preferences' : 'Time & Seekhne Ka Tarika'}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {language === 'en'
                  ? 'We scale quarterly project complexity to your weekly study capacity.'
                  : 'Aapke available weekly ghanton ke hisaab se roadmap ka workload adjust hoga.'}
              </p>
            </div>

            {/* Current skill level */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                {language === 'en' ? 'Current Skill Level' : 'Current Coding Knowledge'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'beginner', en: 'Beginner', hi: 'Beginner (Zero)', desc: language === 'en' ? 'No coding experience' : 'Pehle kabhi code nahi kiya' },
                  { id: 'intermediate', en: 'Intermediate', hi: 'Intermediate', desc: language === 'en' ? 'Knows basic syntax' : '1 language ke syntax aate hain' },
                  { id: 'advanced', en: 'Advanced', hi: 'Advanced', desc: language === 'en' ? 'Built projects, DSA basics' : 'Projects banaye hain' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSkillLevel(item.id as SkillLevel)}
                    className={`p-3 text-left border rounded-lg transition-all cursor-pointer ${
                      skillLevel === item.id
                        ? 'border-teal-600 bg-teal-50/60 dark:bg-teal-950/40 dark:border-teal-500'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{item[language]}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Weekly study hours */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  <span>{language === 'en' ? 'Weekly Study Hours Commitment' : 'Hafte me kitne ghante de sakte hain?'}</span>
                </label>
                <span className="text-xs font-bold text-teal-700 dark:text-teal-400 tabular-nums">
                  {weeklyHours} {t.hoursPerWeek}
                </span>
              </div>
              <input
                type="range"
                min="6"
                max="35"
                step="2"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>6 hrs (Working / Tight schedule)</span>
                <span>14-18 hrs (Balanced student pace)</span>
                <span>30+ hrs (Intensive full-time)</span>
              </div>
            </div>

            {/* Preferred learning style */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                {language === 'en' ? 'Preferred Learning Style' : 'Kaise seekhna pasand hai?'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'projects', en: 'Projects First', hi: 'Projects First' },
                  { id: 'videos', en: 'Video Courses', hi: 'Video Courses' },
                  { id: 'reading', en: 'Docs & Books', hi: 'Docs & Books' },
                  { id: 'mixed', en: 'Mixed / Balanced', hi: 'Mixed / Balanced' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLearningStyle(item.id as LearningStyle)}
                    className={`py-2 px-3 text-center border rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      learningStyle === item.id
                        ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 font-semibold'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {item[language]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Location & Salary Aspiration (Honest Disclaimers) */}
        {step === 4 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {language === 'en' ? 'Goals & Realistic Expectations' : 'Location & Aspirational Goal'}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {language === 'en'
                  ? 'Clarify your target location and aspirational goals without false promises.'
                  : 'Aspirations ko calibrate karein bina kisi jhoote vaade ke.'}
              </p>
            </div>

            {/* Honest disclaimer callout */}
            <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 rounded-lg text-xs text-amber-800 dark:text-amber-200 space-y-1">
              <div className="font-semibold flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 shrink-0" />
                <span>{language === 'en' ? 'Important Transparency Note' : 'Zaruri Soochana'}</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {language === 'en'
                  ? 'Salaries are strictly aspirational targets and depend heavily on geography, company tier (product vs services vs startup), macroeconomic cycles, and your interview execution. No roadmap can guarantee a specific CTC.'
                  : 'Compensation target purely ek aspirational goal hai jo aapki problem-solving ability, market condition aur location par nirbhar karega. Yeh koi guarantee nahi hai.'}
              </p>
            </div>

            {/* Location Preference */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {language === 'en' ? 'Target Geographic Preference' : 'Target Location / Remote Preference'}
              </label>
              <select
                value={targetLocation}
                onChange={(e) => setTargetLocation(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              >
                <option value="India Tech Hubs (Bangalore / NCR / Pune / Hyd) & Remote">
                  India Tech Hubs (Bangalore / NCR / Pune / Hyderabad) & Remote
                </option>
                <option value="India Tier-2 / Tier-3 Cities (Remote Only)">India Tier-2 / Tier-3 Cities (Remote Only)</option>
                <option value="Global Remote (US / Europe / APAC)">Global Remote (US / Europe / APAC remote contracts)</option>
                <option value="International Relocation (US / Europe / Middle East / Singapore)">
                  International Relocation (US / Europe / Middle East / Singapore)
                </option>
              </select>
            </div>

            {/* Optional Aspirational Salary Range */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {language === 'en' ? 'Aspirational Target Range (Optional)' : 'Aspirational Target Range (Optional)'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  {
                    id: 'tier1',
                    label: '₹8L - ₹15L PA / $50k-$75k',
                    sub: language === 'en' ? 'Solid Product / High-Growth Startup' : 'Solid Startup / Good MNC'
                  },
                  {
                    id: 'tier2',
                    label: '₹15L - ₹25L PA / $75k-$110k',
                    sub: language === 'en' ? 'Tier-1 Tech / Fast-growth Scaleup' : 'Top Tier Product Companies'
                  },
                  {
                    id: 'tier3',
                    label: '₹25L - ₹45L+ PA / $110k-$160k+',
                    sub: language === 'en' ? 'Big Tech / Elite Remote / Unicorn' : 'FAANG / Top Tier Unicorns'
                  },
                  {
                    id: 'skillsFirst',
                    label: language === 'en' ? 'Focus on Mastery First' : 'Pehle Skills & Projects',
                    sub: language === 'en' ? 'Compensation follows proven mastery' : 'Skills achhi hogi toh package khud aayega'
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTargetSalaryAspiration(item.label)}
                    className={`p-2.5 text-left border rounded-lg transition-all cursor-pointer ${
                      targetSalaryAspiration === item.label
                        ? 'border-teal-600 bg-teal-50/60 dark:bg-teal-950/40 text-slate-900 dark:text-white ring-1 ring-teal-500'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-semibold">{item.label}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Buttons footer */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t.back}</span>
            </button>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={handleNext}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg transition-all shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <span>{step === 4 ? t.getStarted : t.next}</span>
            {step === 4 ? <Sparkles className="w-4 h-4" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
