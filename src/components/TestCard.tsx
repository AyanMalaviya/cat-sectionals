import React from 'react';
import { SectionalTest, TestResult } from '../types';
import { Clock, HelpCircle, Award, Play, RotateCcw, Tag, ArrowRight } from 'lucide-react';
import { MathText } from './MathText';

interface TestCardProps {
  test: SectionalTest;
  pastAttempts: TestResult[];
  onStartTest: (test: SectionalTest) => void;
  onReviewPastTest?: (result: TestResult) => void;
}

export const TestCard: React.FC<TestCardProps> = ({
  test,
  pastAttempts,
  onStartTest,
  onReviewPastTest,
}) => {
  const hasAttempted = pastAttempts.length > 0;
  const bestAttempt = hasAttempted
    ? [...pastAttempts].sort((a, b) => b.totalMarks - a.totalMarks)[0]
    : null;
  const latestAttempt = hasAttempted
    ? [...pastAttempts].sort((a, b) => b.timestamp - a.timestamp)[0]
    : null;

  const sectionStyles: Record<string, { bg: string; text: string; border: string; lightBg: string }> = {
    QA: { bg: 'bg-blue-600', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800', lightBg: 'bg-blue-50 dark:bg-blue-950/70' },
    VARC: { bg: 'bg-emerald-600', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-200 dark:border-emerald-800', lightBg: 'bg-emerald-50 dark:bg-emerald-950/70' },
    DILR: { bg: 'bg-purple-600', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800', lightBg: 'bg-purple-50 dark:bg-purple-950/70' },
  };

  const style = sectionStyles[test.section] || {
    bg: 'bg-slate-700',
    text: 'text-slate-700 dark:text-slate-300',
    border: 'border-slate-200 dark:border-slate-700',
    lightBg: 'bg-slate-50 dark:bg-slate-800',
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-200 shadow-xs hover:shadow-lg flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold border ${style.lightBg} ${style.text} ${style.border}`}>
              {test.section}
            </span>
            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
              {test.year}
            </span>
            {test.topicTag && (
              <span className="text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 px-2 py-0.5 rounded flex items-center gap-1">
                <Tag className="w-3 h-3" />
                <span>{test.topicTag}</span>
              </span>
            )}
            {!test.topicTag && (
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                {test.slot}
              </span>
            )}
          </div>

          <span className="text-[11px] font-medium text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/70 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
            {test.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition mb-2 leading-snug">
          <MathText text={test.title} />
        </h3>

        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
          <MathText text={test.description} />
        </p>

        {/* Test Parameters */}
        <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 text-xs mb-4">
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
            <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>{test.durationMinutes} Mins</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>{test.questionsCount} Qs</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
            <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{test.totalMarks} Marks</span>
          </div>
        </div>

        {/* Previous Attempt Summary from Local Storage */}
        {hasAttempted && bestAttempt && (
          <div className="mb-4 p-3 bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 rounded-xl flex items-center justify-between text-xs">
            <div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Previous Best Score</div>
              <div className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm">
                {bestAttempt.totalMarks} / {bestAttempt.maxMarks}{' '}
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-xs">
                  ({Math.round((bestAttempt.totalMarks / bestAttempt.maxMarks) * 100)}%)
                </span>
              </div>
            </div>

            {onReviewPastTest && latestAttempt && (
              <button
                onClick={() => onReviewPastTest(latestAttempt)}
                className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-2 flex items-center gap-1"
              >
                <span>View Solutions</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="pt-2">
        <button
          onClick={() => onStartTest(test)}
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs ${
            hasAttempted
              ? 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700'
              : 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-blue-600/20'
          }`}
        >
          {hasAttempted ? (
            <>
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Test ({test.durationMinutes}m)</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Start Test ({test.durationMinutes}m)</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
