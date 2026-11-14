import React from 'react';
import { TestResult, SectionalTest } from '../../types';
import { CheckCircle2, XCircle, MinusCircle, Clock, Award, Target, RotateCcw, ArrowRight } from 'lucide-react';
import { AdBanner } from '../AdBanner';

interface ScorecardProps {
  result: TestResult;
  test: SectionalTest;
  onReviewSolutions: () => void;
  onRetakeTest: () => void;
  onGoHome: () => void;
}

export const Scorecard: React.FC<ScorecardProps> = ({
  result,
  test,
  onReviewSolutions,
  onRetakeTest,
  onGoHome,
}) => {
  const minutesTaken = Math.floor(result.totalTimeSeconds / 60);
  const secondsTaken = result.totalTimeSeconds % 60;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white text-slate-900 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 mb-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200 mb-2">
              {result.section} Test Result
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              {result.testTitle}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Completed on {new Date(result.timestamp).toLocaleDateString()} at{' '}
              {new Date(result.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block mb-0.5">
              Total Score
            </span>
            <div className="text-4xl md:text-5xl font-black text-blue-700 font-mono">
              {result.totalMarks}{' '}
              <span className="text-base font-normal text-slate-400 font-sans">
                / {result.maxMarks}
              </span>
            </div>
          </div>
        </div>

        {/* Essential Metrics Grid: Correct, Incorrect, Unattempted, Time */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
          <div className="bg-white border border-emerald-200 rounded-2xl p-4 shadow-2xs">
            <div className="flex items-center justify-between text-xs text-emerald-800 font-bold mb-1">
              <span>Correct</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl md:text-3xl font-black text-slate-900 font-mono">
              {result.correctCount}
            </div>
            <div className="text-[11px] text-emerald-700 font-medium mt-1">
              +{result.correctCount * 3} marks
            </div>
          </div>

          <div className="bg-white border border-rose-200 rounded-2xl p-4 shadow-2xs">
            <div className="flex items-center justify-between text-xs text-rose-800 font-bold mb-1">
              <span>Incorrect</span>
              <XCircle className="w-4 h-4 text-rose-600" />
            </div>
            <div className="text-2xl md:text-3xl font-black text-slate-900 font-mono">
              {result.incorrectCount}
            </div>
            <div className="text-[11px] text-rose-700 font-medium mt-1">
              {result.correctCount + result.incorrectCount} attempted
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs">
            <div className="flex items-center justify-between text-xs text-slate-600 font-bold mb-1">
              <span>Unattempted</span>
              <MinusCircle className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-2xl md:text-3xl font-black text-slate-900 font-mono">
              {result.unattemptedCount}
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">
              0 marks change
            </div>
          </div>

          <div className="bg-white border border-blue-200 rounded-2xl p-4 shadow-2xs">
            <div className="flex items-center justify-between text-xs text-blue-800 font-bold mb-1">
              <span>Time Taken</span>
              <Clock className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl md:text-3xl font-black text-slate-900 font-mono">
              {minutesTaken}:{secondsTaken < 10 ? `0${secondsTaken}` : secondsTaken}
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">
              of {test.durationMinutes}:00 mins
            </div>
          </div>
        </div>
      </div>

      {/* Recommended CAT Sectional Booster Partner Banner */}
      <AdBanner slot="scorecard-banner" className="mb-8" />

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onReviewSolutions}
          className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-xl font-bold text-sm transition shadow-sm flex items-center justify-center gap-2"
        >
          <span>Review Responses & Answers</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={onRetakeTest}
          className="w-full sm:w-auto px-7 py-3.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 shadow-2xs"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Retake Test</span>
        </button>

        <button
          onClick={onGoHome}
          className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 rounded-xl font-semibold text-sm transition"
        >
          Back to Tests
        </button>
      </div>
    </div>
  );
};
