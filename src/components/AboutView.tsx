import React from 'react';
import {
  Award,
  CheckCircle2,
  Clock,
  HelpCircle,
  Heart,
  Shield,
  Zap,
  BookOpen,
  Calculator,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  FileCheck,
} from 'lucide-react';
import { AdBanner } from './AdBanner';

interface AboutViewProps {
  onStartFullMock?: () => void;
  onStartSectionals?: () => void;
  onOpenSupport?: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onStartFullMock,
  onStartSectionals,
  onOpenSupport,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-6 sm:py-8 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 animate-in fade-in duration-200 space-y-8 sm:space-y-10 transition-colors">
      {/* Clean Compact Header */}
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            About CBTMocks
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            cbtmocks.online
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Democratizing Competitive Exam Prep for Every Aspirant
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-3xl leading-relaxed">
          High-caliber Computer Based Test (CBT) practice should never be locked behind expensive ₹10,000 coaching paywalls or tied to invasive telemarketing. CBTMocks was built to give every student in India unrestricted, authentic exam simulation for free.
        </p>
      </div>

      {/* The Origin Story & Anti-Paywall Manifesto */}
      <section className="space-y-6">
        <div className="border-l-4 border-blue-600 pl-4">
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            The Problem: Commercial Coaching Paywalls &amp; Student Exploitation
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Why we decided to create an independent, open alternative for Indian competitive exam aspirants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="p-6 bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 rounded-3xl space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 flex items-center justify-center font-bold text-base">
              ⚠️
            </div>
            <h3 className="text-base font-bold text-rose-950 dark:text-rose-200">
              The Predatory Coaching Institute Model
            </h3>
            <p className="text-xs sm:text-sm text-rose-900/90 dark:text-rose-300/90 leading-relaxed">
              Every year, over 3 lakh students register for the Common Admission Test (CAT) and related entrance exams (XAT, SNAP). Commercial test series providers (IMS, TIME, Career Launcher, Cracku) provide 1 or 2 "free demo tests" strictly as lead-generation bait. Once a student finishes, their account is locked behind a ₹5,000 to ₹15,000 paywall.
            </p>
            <p className="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">
              Worse, mandatory phone number registration results in aggressive sales calls, WhatsApp marketing blasts, and emotional pressure tactics on students during their most critical preparation months.
            </p>
          </div>

          <div className="p-6 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 rounded-3xl space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-bold text-base">
              🌱
            </div>
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-200">
              The CBTMocks Solution: Open &amp; Respectful Education
            </h3>
            <p className="text-xs sm:text-sm text-emerald-900/90 dark:text-emerald-300/90 leading-relaxed">
              CBTMocks (<strong>cbtmocks.online</strong>) was engineered from the ground up to guarantee that <strong>every single mock test remains 100% free forever</strong>. No sample baits, no tier restrictions, and no hidden subscriptions.
            </p>
            <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
              We never require phone numbers, credit cards, or accounts. A student in a small town with limited finances gets the exact same authentic exam simulation as someone paying lakhs at elite coaching centres.
            </p>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Matrix */}
      <section className="space-y-4">
        <div className="border-l-4 border-indigo-600 pl-4">
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
            <span>CBTMocks vs Commercial Coaching Test Series</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Direct comparison showing why independent, open-access preparation is superior for students.
          </p>
        </div>

        <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-sm bg-white dark:bg-slate-900 -mx-1 px-1 sm:mx-0 sm:px-0">
          <table className="w-full text-left text-xs sm:text-sm min-w-[520px]">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-3 px-4">Feature / Metric</th>
                <th className="py-3 px-4 text-blue-700 dark:text-blue-300 bg-blue-50/80 dark:bg-blue-950/60">CBTMocks (cbtmocks.online)</th>
                <th className="py-3 px-4 text-slate-500 dark:text-slate-400">Commercial Coaching Institutes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Total Free Mock Tests</td>
                <td className="py-3 px-4 font-extrabold text-emerald-700 dark:text-emerald-400 bg-blue-50/30 dark:bg-blue-950/20">
                  86+ Full Tests (1,000+ Questions)
                </td>
                <td className="py-3 px-4 text-slate-500 dark:text-slate-400">
                  Only 1 or 2 demo tests (rest locked)
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Pricing &amp; Hidden Charges</td>
                <td className="py-3 px-4 font-extrabold text-emerald-700 dark:text-emerald-400 bg-blue-50/30 dark:bg-blue-950/20">
                  ₹0 (100% Free Forever)
                </td>
                <td className="py-3 px-4 text-rose-600 dark:text-rose-400 font-semibold">
                  ₹5,000 to ₹15,000+ per season
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Registration &amp; Privacy</td>
                <td className="py-3 px-4 font-extrabold text-emerald-700 dark:text-emerald-400 bg-blue-50/30 dark:bg-blue-950/20">
                  Instant 1-Click Practice • No phone number requested
                </td>
                <td className="py-3 px-4 text-slate-500 dark:text-slate-400">
                  Mandatory mobile numbers + sales call harassment
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">120-Min Full Mocks &amp; Transitions</td>
                <td className="py-3 px-4 font-extrabold text-emerald-700 dark:text-emerald-400 bg-blue-50/30 dark:bg-blue-950/20">
                  Official 3-Section Format (VARC → DILR → QA) + Pause &amp; Resume
                </td>
                <td className="py-3 px-4 text-slate-500 dark:text-slate-400">
                  Often rigid, non-pausable or behind premium packs
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Real Exam Simulation</td>
                <td className="py-3 px-4 font-extrabold text-emerald-700 dark:text-emerald-400 bg-blue-50/30 dark:bg-blue-950/20">
                  Exact TCS iON CBT Interface + Draggable Virtual Calculator
                </td>
                <td className="py-3 px-4 text-slate-500 dark:text-slate-400">
                  Basic custom web viewers; varied calculator fidelity
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Official Past Year Papers (PYQ)</td>
                <td className="py-3 px-4 font-extrabold text-emerald-700 dark:text-emerald-400 bg-blue-50/30 dark:bg-blue-950/20">
                  Full 2020–2026 Slot Papers with +3/-1 and TITA Scoring
                </td>
                <td className="py-3 px-4 text-slate-500 dark:text-slate-400">
                  Frequently sold as separate paid book bundles
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Operating Model</td>
                <td className="py-3 px-4 font-extrabold text-emerald-700 dark:text-emerald-400 bg-blue-50/30 dark:bg-blue-950/20">
                  Student-first non-profit ethos • Voluntary UPI Support
                </td>
                <td className="py-3 px-4 text-slate-500 dark:text-slate-400">
                  For-profit edtech corporate revenue targets
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CBT Exam Strategy & Methodology Guide */}
      <section className="space-y-6">
        <div className="border-l-4 border-amber-500 pl-4">
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            The Computer Based Test (CBT) Strategy Guide
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            How to use CBTMocks effectively to build stamina, sectional pacing, and score 99+ percentile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-3">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
              1. 40-Minute Sectional Discipline
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              In CAT, you cannot switch between sections at will. Once the 40-minute timer for VARC starts, you must maintain intense focus until the clock runs down, followed immediately by DILR and QA. Practicing with strict 40-minute CBT countdowns eliminates mid-test fatigue.
            </p>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
              2. Round 1 vs Round 2 Question Selection
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The biggest mistake aspirants make is getting trapped in complex calculations. Use our Question Palette: complete easy 1-minute questions in Round 1 (marking them <strong>Answered</strong>), flag moderate ones as <strong>Marked for Review</strong>, and leave hard time-traps unattempted.
            </p>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
              3. Virtual Calculator Mastery
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The on-screen virtual calculator evaluates expressions according to strict BODMAS operator precedence. Use it for complex 4-digit division or compound percentages, but never rely on it for simple mental math that takes away valuable seconds.
            </p>
          </div>
        </div>

        {/* Scoring Scheme Table */}
        <div className="p-6 bg-gradient-to-r from-slate-900 to-indigo-950 dark:from-slate-950 dark:to-indigo-950 text-white rounded-3xl space-y-4 border border-slate-800">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="font-extrabold text-base">Official CAT Marking Scheme Matrix</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
              <div className="text-emerald-400 font-black text-lg">+3 Marks</div>
              <div className="font-bold mt-1">Correct Answer</div>
              <p className="text-slate-300 mt-1">Awarded for every correct MCQ and TITA response.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
              <div className="text-rose-400 font-black text-lg">-1 Mark</div>
              <div className="font-bold mt-1">Incorrect MCQ</div>
              <p className="text-slate-300 mt-1">Negative marking applied to wrong Multiple Choice selections.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
              <div className="text-blue-300 font-black text-lg">0 Penalty</div>
              <div className="font-bold mt-1">TITA (Type In The Answer)</div>
              <p className="text-slate-300 mt-1">Zero penalty for wrong numeric entries. Never leave a TITA blank!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-6">
        <div className="border-l-4 border-emerald-600 pl-4">
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Common questions answered with complete transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
              Are all 86+ mock tests genuinely free?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Yes, 100% free with zero caveats. We will never lock tests after you take 1 or 2, and we do not have a "Pro" or "VIP" paid subscription tier. Every full mock, sectional paper, and topic quiz is open to everyone.
            </p>
          </div>

          <div className="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
              Why don't you require phone numbers or sign-up?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Because we respect student privacy. You came here to practice tests, not to receive promotional phone calls, SMS alerts, or coaching sales pitches. All your test attempts and bookmarks are stored safely on your own device via local storage.
            </p>
          </div>

          <div className="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
              How does the Section Break &amp; Resume feature work?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              During 120-minute Full Mocks, an optional transition break modal appears between sections. You can either proceed immediately to the next section or pause the exam to resume later. If you prefer continuous exam simulation, toggle it OFF with our glowing switch in the header or check "Don't show again".
            </p>
          </div>

          <div className="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
              Are other exams like XAT and SNAP coming?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Yes! We are actively authoring modules for <strong>XAT Decision Making &amp; VALR</strong>, <strong>SNAP speed tests</strong>, and <strong>NMAT adaptive sets</strong>. Our domain <strong>cbtmocks.online</strong> was chosen specifically to represent all major Indian competitive exams.
            </p>
          </div>

          <div className="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
              How is CBTMocks maintained and funded?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              CBTMocks is an independent open educational resource founded and maintained by <strong>Ayan Malaviya</strong>. Server costs and development are sustained through unobtrusive Google AdSense banners (never during active tests!) and voluntary community donations.
            </p>
          </div>

          <div className="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
              Can I contribute missing slot question papers?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Yes, please! If you have official CAT question paper PDFs or response keys for missing slots (such as CAT 2024 Slots or CAT 2023 Slot 1 VARC), email them to us and our team will convert them into live CBT tests for all students.
            </p>
          </div>
        </div>
      </section>

      {/* Community & Support Banner */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-900 border-2 border-blue-200 dark:border-blue-900/60 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-current" />
            <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
              Support the 100% Free Mission
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            If CBTMocks has helped you practice without paying thousands to coaching centers, consider supporting our monthly server and domain costs via UPI:
          </p>
          <div className="inline-block px-3 py-1 bg-white dark:bg-slate-800 border border-blue-300 dark:border-blue-700 rounded-xl font-mono font-bold text-xs text-blue-800 dark:text-blue-300 shadow-2xs">
            ayanmalaviya111@okhdfcbank
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {onOpenSupport && (
            <button
              onClick={onOpenSupport}
              className="flex-1 md:flex-none px-5 py-3 bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Donate via UPI</span>
            </button>
          )}

          {onStartFullMock && (
            <button
              onClick={onStartFullMock}
              className="flex-1 md:flex-none px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
            >
              <span>Take a Full Mock (120m)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* AdSense Placement (Non-Exam View) */}
      <AdBanner slot="bottom-leaderboard" className="mt-8" />
    </div>
  );
};
