import React from 'react';
import { X, ShieldCheck, FileText, Info, Mail, AlertTriangle, ExternalLink, Heart } from 'lucide-react';

export type LegalTab = 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTab;
  onTabChange: (tab: LegalTab) => void;
  onClose: () => void;
  onOpenSupport?: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  activeTab,
  onTabChange,
  onClose,
  onOpenSupport,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl text-slate-900 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              {activeTab === 'about' && <Info className="w-5 h-5" />}
              {activeTab === 'contact' && <Mail className="w-5 h-5" />}
              {activeTab === 'privacy' && <ShieldCheck className="w-5 h-5" />}
              {activeTab === 'terms' && <FileText className="w-5 h-5" />}
              {activeTab === 'disclaimer' && <AlertTriangle className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                {activeTab === 'about' && 'About CBTMocks — 100% Free Mock Tests'}
                {activeTab === 'contact' && 'Contact Us & Student Support'}
                {activeTab === 'privacy' && 'Privacy Policy & Cookie Disclosures'}
                {activeTab === 'terms' && 'Terms of Service & Fair Use'}
                {activeTab === 'disclaimer' && 'Non-Affiliation Disclaimer'}
              </h2>
              <p className="text-[11px] text-slate-500">
                cbtmocks.online • Open Educational Resource for Competitive Exams
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-white px-6 overflow-x-auto shrink-0 gap-1 sm:gap-2">
          <button
            onClick={() => onTabChange('about')}
            className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'about'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>About Us</span>
          </button>

          <button
            onClick={() => onTabChange('contact')}
            className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'contact'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </button>

          <button
            onClick={() => onTabChange('privacy')}
            className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'privacy'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => onTabChange('terms')}
            className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'terms'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms of Service</span>
          </button>

          <button
            onClick={() => onTabChange('disclaimer')}
            className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'disclaimer'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Disclaimer</span>
          </button>
        </div>

        {/* Tab Content (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* TAB: ABOUT US */}
          {activeTab === 'about' && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                <h3 className="font-bold text-blue-900 text-base mb-1">
                  Our Mission: 100% Free Mock Tests Without Paywalls
                </h3>
                <p className="text-blue-800 text-xs sm:text-sm">
                  CBTMocks (<a href="https://cbtmocks.online" className="underline font-semibold">cbtmocks.online</a>) was founded with a single mission: to democratize competitive exam preparation in India. Every student deserves access to authentic, high-caliber Computer Based Test (CBT) practice without being forced to pay ₹5,000 to ₹15,000 for coaching test series.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  1. The Problem With Commercial Test Series
                </h4>
                <p>
                  Most commercial coaching institutes provide only 1 or 2 sample mocks as marketing bait, then lock their remaining tests behind expensive paywalls. To make matters worse, they mandate phone number registration and bombard students with aggressive sales calls.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  2. What CBTMocks Delivers
                </h4>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>62+ Full Tests (866+ Questions):</strong> Covering CAT Quantitative Aptitude (QA), Data Interpretation &amp; Logical Reasoning (DILR), and Verbal Ability &amp; Reading Comprehension (VARC).</li>
                  <li><strong>Zero Paywalls &amp; Zero Signups:</strong> Instant 1-click test practice without phone numbers, email collection, or passwords.</li>
                  <li><strong>Authentic TCS iON CBT Environment:</strong> Exact 40-minute countdown timers, real question palette statuses (Answered, Not Answered, Marked for Review), and official marking schemes (+3 / -1 for MCQs, +3 / 0 for TITA).</li>
                  <li><strong>Built-In Virtual Calculator:</strong> Full on-screen BODMAS precision calculator matching the official CAT exam interface.</li>
                  <li><strong>Detailed Solutions &amp; Instant Percentile:</strong> Step-by-step mathematical explanations, question-by-question time tracking, and performance analytics.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  3. Expansion Roadmap (XAT, SNAP, NMAT &amp; Beyond)
                </h4>
                <p>
                  While our initial launch focuses on CAT sectional papers from 2020 through 2026 specimen mocks, we are actively developing dedicated sectional modules for <strong>XAT (Decision Making)</strong>, <strong>SNAP</strong>, <strong>NMAT</strong>, and other major Indian competitive examinations.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  4. Independent &amp; Community Driven
                </h4>
                <p>
                  CBTMocks is maintained independently by passionate educators and former aspirants. All server and hosting costs are sustained through non-intrusive advertising and voluntary community donations.
                </p>
              </div>
            </div>
          )}

          {/* TAB: CONTACT US */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  Get in Touch With Us
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  We welcome questions, bug reports, question corrections, feature suggestions, and educational partnerships.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-slate-200 rounded-2xl bg-white shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>Email Support</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">
                    For feedback, question corrections, copyright matters, or inquiries:
                  </p>
                  <a
                    href="mailto:ayanmalaviya111@gmail.com"
                    className="text-xs sm:text-sm font-mono font-bold text-blue-600 hover:underline break-all"
                  >
                    ayanmalaviya111@gmail.com
                  </a>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Response time: Usually within 24 to 48 hours.
                  </p>
                </div>

                <div className="p-4 border border-slate-200 rounded-2xl bg-white shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                    <Heart className="w-4 h-4 text-rose-500" />
                    <span>Support Free Mocks (UPI)</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">
                    Directly support server hosting and content development:
                  </p>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-800 break-all block">
                    ayanmalaviya111@okhdfcbank
                  </span>
                  {onOpenSupport && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenSupport();
                      }}
                      className="mt-3 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl border border-rose-200 transition"
                    >
                      Open UPI QR Code
                    </button>
                  )}
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
                <strong>Reporting a Question Error?</strong> Please mention the Test Title, Question Number, and the rationale or formula discrepancy. We audit and push question updates regularly.
              </div>
            </div>
          )}

          {/* TAB: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-4 text-slate-600">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                <strong>Effective Date:</strong> November 14, 2026 • <strong>Website:</strong> https://cbtmocks.online
              </div>

              <p>
                At CBTMocks, the privacy of our visitors is of paramount importance to us. This Privacy Policy document outlines the types of information that is received and collected by CBTMocks and how it is used.
              </p>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  1. Zero Personal Data Collection
                </h4>
                <p>
                  CBTMocks does not require user registration, email address verification, mobile numbers, passwords, or payment credentials. You can access all 62+ mock tests and practice tools completely anonymously.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  2. Local Browser Storage (LocalStorage)
                </h4>
                <p>
                  To provide seamless mock test functionality (such as saving in-progress tests, tracking test attempt history, calculating percentiles, and saving bookmarked questions), our application utilizes standard browser LocalStorage. This data remains strictly stored on your own device and is never transmitted to or stored on external servers.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  3. Google AdSense &amp; Third-Party Cookies
                </h4>
                <p className="mb-2">
                  CBTMocks may display advertisements served by Google AdSense and its certified advertising partners to support ongoing server and bandwidth costs.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li>Google, as a third-party vendor, uses cookies to serve ads on our site.</li>
                  <li>Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.</li>
                  <li>Users may opt out of personalized advertising by visiting Google Ad Settings at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">google.com/settings/ads</a> or through the Network Advertising Initiative opt-out page at <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">aboutads.info/choices/</a>.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  4. Log Files
                </h4>
                <p>
                  Like most standard web servers, our hosting infrastructure automatically logs standard technical data including internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, platform type, and date/time stamps. This data is non-personally identifiable and is used solely for site administration, bot mitigation, and server performance monitoring.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  5. Children's Online Privacy (COPPA Compliance)
                </h4>
                <p>
                  CBTMocks is an educational platform intended for secondary and post-secondary students preparing for competitive entrance exams. We do not knowingly collect any personally identifiable information from children under the age of 13.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  6. Contact Us Regarding Privacy
                </h4>
                <p>
                  If you have questions or require further information regarding our Privacy Policy, please contact us at <a href="mailto:ayanmalaviya111@gmail.com" className="text-blue-600 font-semibold underline">ayanmalaviya111@gmail.com</a>.
                </p>
              </div>
            </div>
          )}

          {/* TAB: TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <div className="space-y-4 text-slate-600">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                <strong>Terms of Service &amp; End User Agreement</strong> • Last Updated: November 2026
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  1. Acceptance of Terms
                </h4>
                <p>
                  By accessing or practicing on CBTMocks (<a href="https://cbtmocks.online" className="text-blue-600 underline">cbtmocks.online</a>), you agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of the website.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  2. Educational &amp; Free Open-Access Purpose
                </h4>
                <p>
                  CBTMocks is provided exclusively as a free, non-commercial educational resource for students preparing for competitive examinations. All questions, past year paper simulations, explanations, and interface tools are intended for practice, academic benchmarking, and diagnostic self-assessment.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  3. Simulation Accuracy &amp; Percentile Disclaimer
                </h4>
                <p>
                  While our mock tests, question distributions, scoring algorithms (+3 marks for correct answers, -1 for wrong MCQs, 0 penalty for TITA), and virtual calculator accurately replicate the official Computer Based Test (CBT) environment, percentile estimates and score projections are diagnostic approximations based on historical cutoffs and should not be construed as guaranteed performance in official examinations.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  4. Intellectual Property &amp; Fair Use
                </h4>
                <p>
                  All software code, UI designs, virtual calculator widgets, and custom explanatory content are the property of CBTMocks. Past year examination questions are utilized under fair educational use for candidate preparation and evaluation.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  5. Prohibited Conduct
                </h4>
                <p>
                  Users may not engage in automated data scraping, distributed denial-of-service (DDoS) attacks, unauthorized attempts to tamper with server infrastructure, or misuse of the platform's resources.
                </p>
              </div>
            </div>
          )}

          {/* TAB: DISCLAIMER */}
          {activeTab === 'disclaimer' && (
            <div className="space-y-4 text-slate-600">
              <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl">
                <h3 className="font-bold text-amber-900 text-base mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  Independent Educational Platform Disclaimer
                </h3>
                <p className="text-amber-800 text-xs sm:text-sm">
                  CBTMocks is an independent student-led open educational initiative. Please review the following trademark and institutional disclaimers:
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  1. Non-Affiliation with IIMs or CAT
                </h4>
                <p>
                  <strong>CAT (Common Admission Test)</strong> is a registered trademark of the Indian Institutes of Management (IIMs). CBTMocks is not affiliated with, authorized by, sponsored by, or endorsed by any Indian Institute of Management or the CAT Convenor.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  2. Non-Affiliation with TCS iON
                </h4>
                <p>
                  <strong>TCS iON</strong> is a registered trademark of Tata Consultancy Services Limited. Our test interface is an independent web-based educational simulation developed to help aspirants familiarize themselves with standard computer-based test layout conventions.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  3. Non-Affiliation with Other Exam Bodies
                </h4>
                <p>
                  XAT is conducted by XLRI Jamshedpur; SNAP is conducted by Symbiosis International (Deemed University); NMAT is conducted by GMAC. References to these exams are purely for descriptive educational categorization.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  4. Non-Affiliation with Commercial Coaching Institutes
                </h4>
                <p>
                  CBTMocks has no commercial affiliation with TIME, IMS Learning Resources, Career Launcher, Cracku, Oliveboard, or Unacademy.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>100% Free Open Educational Portal</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition shadow-2xs"
          >
            Back to Free Mock Tests
          </button>
        </div>
      </div>
    </div>
  );
};
