import React, { useState } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { translations } from '../data/translations';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  const { language } = useRoadmap();
  const t = translations[language];
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/60 px-4 py-2 text-xs text-slate-700 dark:text-slate-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
          <span className="font-semibold text-slate-900 dark:text-slate-100">{t.realityNotice}:</span>
          <span className="hidden sm:inline text-slate-600 dark:text-slate-300 line-clamp-1">{t.realityNoticeText}</span>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1 shrink-0 font-medium cursor-pointer"
        >
          {expanded ? (
            <>
              {language === 'en' ? 'Less' : 'Chhota karein'} <ChevronUp className="w-3 h-3" />
            </>
          ) : (
            <>
              {language === 'en' ? 'Read Policy' : 'Pura padhein'} <ChevronDown className="w-3 h-3" />
            </>
          )}
        </button>
      </div>

      {expanded && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
          <p>{t.realityNoticeText}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-500 dark:text-slate-400 pt-1">
            <span>· {language === 'en' ? 'No guaranteed packages or job promises' : 'Koi fake salary guarantee nahi'}</span>
            <span>· {language === 'en' ? 'Timelines are adaptable guidelines' : 'Timeline aapke time ke mutabiq flexible hai'}</span>
            <span>· {language === 'en' ? 'All user data stays private in local browser' : 'Aapka data sirf aapke browser me rehta hai'}</span>
          </div>
        </div>
      )}
    </div>
  );
};
