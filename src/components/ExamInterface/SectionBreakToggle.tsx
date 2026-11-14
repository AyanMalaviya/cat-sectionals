import React from 'react';
import { Coffee, Sparkles } from 'lucide-react';

interface SectionBreakToggleProps {
  enabled: boolean;
  onToggle: () => void;
  showLabel?: boolean;
  className?: string;
}

export const SectionBreakToggle: React.FC<SectionBreakToggleProps> = ({
  enabled,
  onToggle,
  showLabel = true,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 select-none ${className}`}
      title={
        enabled
          ? 'Section Break Prompt is ON (Will prompt to pause or start next section when timer ends)'
          : 'Section Break Prompt is OFF (Will auto-advance to next section without prompting)'
      }
    >
      {showLabel && (
        <div className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer" onClick={onToggle}>
          <Coffee className={`w-3.5 h-3.5 transition-colors ${enabled ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
          <span className="hidden sm:inline text-slate-700 dark:text-slate-300">Break Prompt</span>
          <span
            className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded transition-all ${
              enabled
                ? 'bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-bold'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
            }`}
          >
            {enabled ? 'ON' : 'OFF'}
          </span>
        </div>
      )}

      {/* Animated Glowing Toggle Switch (Moves Left / Right & Glows Light) */}
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-all duration-300 ease-in-out focus:outline-hidden ${
          enabled
            ? 'bg-blue-600 ring-2 ring-blue-400/60 shadow-[0_0_16px_rgba(37,99,235,0.85)] scale-105'
            : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 shadow-none ring-0'
        }`}
      >
        <span className="sr-only">Toggle Section Break Prompt</span>

        {/* Sliding thumb that moves left (translate-x-0) and right (translate-x-5) */}
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-300 ease-in-out flex items-center justify-center ${
            enabled ? 'translate-x-5 shadow-blue-900/40' : 'translate-x-0'
          }`}
        >
          {enabled && (
            <Sparkles className="w-2.5 h-2.5 text-blue-600 animate-spin-slow" />
          )}
        </span>
      </button>
    </div>
  );
};
