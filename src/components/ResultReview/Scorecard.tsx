import React from 'react';
import { TestResult, SectionalTest, SectionType } from '../../types';
import { CheckCircle2, XCircle, MinusCircle, Clock, Award, Target, RotateCcw, ArrowRight } from 'lucide-react';
import { estimatePercentile, estimateFullMockPercentile } from '../../utils/storage';
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
  const isFullMock = test.category === 'full-mock' || result.section === 'FULL' || test.isFullMock;

  // Compute 3-section metrics if Full Mock
  const sectionBreakdown = isFullMock
    ? (['VARC', 'DILR', 'QA'] as const).map((sec) => {
        const secQs = test.questions.filter((q) => q.section === sec);
        let correct = 0;
        let incorrect = 0;
        let marks = 0;

        secQs.forEach((q) => {
          const ans = result.answers[q.id];
          if (ans?.isCorrect) {
            correct++;
            marks += ans.marksAwarded || 3;
          } else if (ans && ans.response !== null && ans.response !== undefined && String(ans.response).trim() !== '') {
            incorrect++;
            marks += ans.marksAwarded || (q.type === 'MCQ' ? -1 : 0);
          }
        });

        const attempted = correct + incorrect;
        const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
        const maxMarks = secQs.length * 3;
        const percentile = estimatePercentile(marks, sec);

        const titles: Record<string, string> = {
          VARC: 'Verbal Ability & Reading Comprehension',
          DILR: 'Data Interpretation & Logical Reasoning',
          QA: 'Quantitative Aptitude',
        };

        return {
          section: sec,
          name: titles[sec] || sec,
          totalQuestions: secQs.length,
          maxMarks,
          attempted,
          correct,
          incorrect,
          marks,
          accuracy,
          percentile,
        };
      })
    : [];

  const overallPercentile = isFullMock
    ? estimateFullMockPercentile(result.totalMarks)
    : result.estimatedPercentile;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white text-slate-900 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 mb-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200 mb-2">
              {isFullMock ? 'Full 3-Section CBT Mock' : `${result.section} Sectional Test`} Result
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              {result.testTitle}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Completed on {new Date(result.timestamp).toLocaleDateString()} at{' '}
              {new Date(result.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>

          <div className="flex items-center gap-4 text-left sm:text-right">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block mb-0.5">
                Total Score
              </span>
              <div className="text-3xl md:text-4xl font-black text-blue-700 font-mono">
                {result.totalMarks}{' '}
                <span className="text-base font-normal text-slate-400 font-sans">
                  / {result.maxMarks}
                </span>
              </div>
            </div>

            <div className="border-l border-slate-200 pl-4">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block mb-0.5">
                Est. Percentile
              </span>
              <div className="text-3xl md:text-4xl font-black text-emerald-700 font-mono">
                {overallPercentile}%ile
              </div>
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

        {/* 3-Section Breakdown Table for Full Mock */}
        {isFullMock && sectionBreakdown.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-600" />
              <span>Sectional Performance Breakdown (VARC → DILR → QA)</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Section</th>
                    <th className="py-2.5 px-3">Score / Max</th>
                    <th className="py-2.5 px-3">Attempted</th>
                    <th className="py-2.5 px-3">Accuracy</th>
                    <th className="py-2.5 px-3 text-right">Sectional %ile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {sectionBreakdown.map((row) => (
                    <tr key={row.section} className="hover:bg-slate-50/50">
                      <td className="py-2.5 px-3 font-bold text-slate-900">
                        {row.section}: {row.name}
                      </td>
                      <td className="py-2.5 px-3 font-mono font-bold text-blue-700">
                        {row.marks} <span className="font-normal text-slate-400">/ {row.maxMarks}</span>
                      </td>
                      <td className="py-2.5 px-3">
                        {row.attempted} / {row.totalQuestions} ({row.correct} correct)
                      </td>
                      <td className="py-2.5 px-3 font-semibold">
                        {row.accuracy}%
                      </td>
                      <td className="py-2.5 px-3 text-right font-bold text-emerald-700">
                        {row.percentile}%ile
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50/40 font-bold text-slate-900 border-t-2 border-slate-200">
                    <td className="py-2.5 px-3">Overall Total</td>
                    <td className="py-2.5 px-3 font-mono text-blue-700">
                      {result.totalMarks} / {result.maxMarks}
                    </td>
                    <td className="py-2.5 px-3">
                      {result.correctCount + result.incorrectCount} / {test.questionsCount}
                    </td>
                    <td className="py-2.5 px-3">
                      {result.accuracy}%
                    </td>
                    <td className="py-2.5 px-3 text-right text-emerald-700">
                      {overallPercentile}%ile
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

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

      {/* Bottom Ad Unit (Only rendered when real Google AdSense ID is configured) */}
      <AdBanner slot="scorecard-bottom" className="mt-10" />
    </div>
  );
};
