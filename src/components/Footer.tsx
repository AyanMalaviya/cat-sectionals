import React from 'react';
import { BookOpen, ShieldCheck, Heart, Mail, FileText, Info, Award, HelpCircle } from 'lucide-react';
import { LegalTab } from './LegalModal';

interface FooterProps {
  onOpenLegalTab: (tab: LegalTab) => void;
  onSelectTab: (tab: 'full-mocks' | 'tests' | 'topic-wise' | 'history' | 'bookmarks' | 'about') => void;
  onOpenCalculator: () => void;
  onOpenSupport: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegalTab,
  onSelectTab,
  onOpenCalculator,
  onOpenSupport,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs mt-16">
      {/* Top Banner: Free Mock Test Value Proposition */}
      <div className="bg-slate-950/80 border-b border-slate-800/80 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-extrabold text-sm sm:text-base">
              <span>🎯 100% Free Mock Tests for Competitive Exams</span>
              <span className="bg-blue-600/30 text-blue-400 border border-blue-500/30 text-[10px] px-2 py-0.5 rounded-full font-bold">
                NO PAYWALL
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-2xl">
              Break expensive ₹10,000 coaching paywalls. Practice 100+ authentic free mock tests with official CBT countdowns, virtual calculator, and detailed solutions.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectTab('tests')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition shadow-md shadow-blue-900/30"
            >
              Start Free Mock
            </button>
            <button
              onClick={onOpenSupport}
              className="px-4 py-2 bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 font-bold rounded-xl text-xs transition flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
              <span>Support (UPI)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="CBTMocks Free Mock Test Logo"
                className="w-9 h-9 rounded-xl shadow-md object-contain bg-white/10 p-0.5"
                width={36}
                height={36}
              />
              <div>
                <span className="font-extrabold text-base text-white tracking-tight">
                  CBTMocks
                </span>
                <span className="text-[10px] font-bold text-blue-400 block -mt-0.5">
                  cbtmocks.online
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              An open-access educational platform built by competitive exam aspirants for aspirants. We believe quality mock test preparation should be a right, not a luxury locked behind paywalls.
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="px-2.5 py-1 bg-slate-800 rounded-lg border border-slate-700/60">
                ✨ 100+ Free Mock Tests
              </span>
              <span className="px-2.5 py-1 bg-slate-800 rounded-lg border border-slate-700/60">
                ⚡ 2,000+ Questions
              </span>
              <span className="px-2.5 py-1 bg-slate-800 rounded-lg border border-slate-700/60">
                🔒 Zero Signups
              </span>
              <span className="px-2.5 py-1 bg-slate-800 rounded-lg border border-slate-700/60">
                ₹0 Always Free
              </span>
            </div>
          </div>

          {/* Free Mock Tests Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>Free Mock Tests</span>
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onSelectTab('full-mocks')}
                  className="hover:text-blue-400 transition text-left font-bold text-slate-200"
                >
                  ⏱️ Official Full Mocks (120m)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('tests')}
                  className="hover:text-blue-400 transition text-left"
                >
                  Free CAT Mock Tests CBT
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('tests')}
                  className="hover:text-blue-400 transition text-left"
                >
                  Quantitative Aptitude Mocks (QA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('tests')}
                  className="hover:text-blue-400 transition text-left"
                >
                  DILR 40-Min Sectional Mocks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('tests')}
                  className="hover:text-blue-400 transition text-left"
                >
                  VARC Reading Comprehension Mocks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('topic-wise')}
                  className="hover:text-blue-400 transition text-left"
                >
                  Topic-Wise Free Mock Quizzes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="hover:text-blue-400 transition text-left text-blue-300 font-semibold flex items-center gap-1"
                >
                  <span>🎯 Our Mission &amp; Strategy Guide</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Tools & Features Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              <span>Tools &amp; Analytics</span>
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={onOpenCalculator}
                  className="hover:text-blue-400 transition text-left"
                >
                  Virtual On-Screen Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('history')}
                  className="hover:text-blue-400 transition text-left"
                >
                  Mock Test Attempt History
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('bookmarks')}
                  className="hover:text-blue-400 transition text-left"
                >
                  Bookmarked Questions &amp; Formulas
                </button>
              </li>
              <li>
                <a
                  href="/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition text-left"
                >
                  LLM &amp; AI Search Context (llms.txt)
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition text-left"
                >
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Column (Google AdSense Mandatory) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Legal &amp; Policies</span>
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onOpenLegalTab('about')}
                  className="hover:text-blue-400 transition text-left flex items-center gap-1"
                >
                  <Info className="w-3 h-3 text-slate-500" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalTab('contact')}
                  className="hover:text-blue-400 transition text-left flex items-center gap-1"
                >
                  <Mail className="w-3 h-3 text-slate-500" />
                  <span>Contact Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalTab('privacy')}
                  className="hover:text-blue-400 transition text-left flex items-center gap-1"
                >
                  <ShieldCheck className="w-3 h-3 text-slate-500" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalTab('terms')}
                  className="hover:text-blue-400 transition text-left flex items-center gap-1"
                >
                  <FileText className="w-3 h-3 text-slate-500" />
                  <span>Terms of Service</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalTab('disclaimer')}
                  className="hover:text-blue-400 transition text-left flex items-center gap-1"
                >
                  <HelpCircle className="w-3 h-3 text-slate-500" />
                  <span>Disclaimer</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Disclaimers & Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-[11px] text-slate-400 space-y-2">
          <p className="leading-relaxed text-slate-400">
            <strong>Disclaimer:</strong> CAT (Common Admission Test) is a registered trademark of the Indian Institutes of Management (IIMs). TCS iON is a trademark of Tata Consultancy Services. CBTMocks (cbtmocks.online) is an independent open educational resource and is not affiliated with, endorsed by, or sponsored by IIMs, TCS, XLRI, Symbiosis, or any commercial coaching institute. All practice questions are provided under fair use for educational self-assessment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-400">
            <div>
              © 2026 CBTMocks (<a href="https://cbtmocks.online" className="text-blue-400 hover:underline">cbtmocks.online</a>). All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="/privacy.html" className="hover:text-white transition">Privacy</a>
              <a href="/terms.html" className="hover:text-white transition">Terms</a>
              <a href="/about.html" className="hover:text-white transition">About</a>
              <a href="/contact.html" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
