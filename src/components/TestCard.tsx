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
    QA: { bg: 'bg-blue-600', text: 'text-blue-700', border: 'border-blue-200', lightBg: 'bg-blue-50' },
    VARC: { bg: 'bg-emerald-600', text: 'text-emerald-700', border: 'border-emerald-200', lightBg: 'bg-emerald-50' },
    DILR: { bg: 'bg-purple-600', text: 'text-purple-700', border: 'border-purple-200', lightBg: 'bg-purple-50' },
  };

  const style = sectionStyles[test.section] || {
    bg: 'bg-slate-700',
    text: 'text-slate-700',
    border: 'border-slate-200',
    lightBg: 'bg-slate-50',
  };

  return (
    <div className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-200 shadow-xs hover:shadow-lg flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold border ${style.lightBg} ${style.text} ${style.border}`}>
              {test.section}
            </span>
            <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              {test.year}
            </span>
            {test.topicTag && (
              <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded flex items-center gap-1">
                <Tag className="w-3 h-3" />
                <span>{test.topicTag}</span>
              </span>
            )}
            {!test.topicTag && (
              <span className="text-[11px] text-slate-500 font-medium">
                {test.slot}
              </span>
            )}
          </div>

          <span className="text-[11px] font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
            {test.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition mb-2 leading-snug">
          <MathText text={test.title} />
        </h3>

        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
          <MathText text={test.description} />
        </p>

        {/* Test Parameters */}
        <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs mb-4">
          <div className="flex items-center gap-1.5 text-slate-700 font-medium">
            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>{test.durationMinutes} Mins</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700 font-medium">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>{test.questionsCount} Qs</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700 font-medium">
            <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{test.totalMarks} Marks</span>
          </div>
        </div>

        {/* Previous Attempt Summary from Local Storage */}
        {hasAttempted && bestAttempt && (
          <div className="mb-4 p-3 bg-blue-50/60 border border-blue-200 rounded-xl flex items-center justify-between text-xs">
            <div>
              <div className="text-[11px] text-slate-500 font-medium">Previous Best Score</div>
              <div className="font-bold text-slate-900 font-mono text-sm">
                {bestAttempt.totalMarks} / {bestAttempt.maxMarks}{' '}
                <span className="text-emerald-700 font-semibold text-xs">
                  ({Math.round((bestAttempt.totalMarks / bestAttempt.maxMarks) * 100)}%)
                </span>
              </div>
            </div>

            {onReviewPastTest && latestAttempt && (
              <button
                onClick={() => onReviewPastTest(latestAttempt)}
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-2 flex items-center gap-1"
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
              ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
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
