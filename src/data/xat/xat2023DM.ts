import { Question } from '../../types';

export const xat2023DMQuestions: Question[] = [
  // Caselet 1: Medix Diagnostic Accuracy & Whistleblower (Qs 1-3)
  {
    id: 'xat-2023-dm-q1',
    questionNumber: 1,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Professional Ethics & Whistleblowing',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 1: Medix Pathology and Machine Calibration Anomaly',
    passage: `Dr. Shweta is the chief quality pathologist at Medix Diagnostic Labs, a healthcare chain running 80 diagnostic centers across North India. During a routine internal quality audit, she discovers that one of the high-throughput automated biochemistry analyzers in the central lab had an uncalibrated optical sensor for six weeks.

Consequently, approximately 4,200 liver function test (LFT) reports issued during this period understated serum bilirubin and ALT enzyme levels by an average of 18%. In about 5% of cases (approx 210 patients), this inaccuracy could lead attending physicians to miss early signs of toxic hepatitis or liver damage.

When Shweta brings this to the attention of Medix Managing Director, Pradeep Goel, he argues: "Most doctors correlate lab numbers with clinical symptoms anyway. Issuing a public recall will destroy our IPO valuation scheduled for next month, invite medical council sanctions, and cause mass panic. Just recalibrate the sensor quietly tonight and move forward."`,
    question: 'Which of the following courses of action should Dr. Shweta take?',
    options: [
      'Agree with the Managing Director to protect company value, since 95% of patients are unaffected.',
      'Refuse to suppress the error, insist that Medix confidentially contact the ordering physicians of the affected 4,200 patients to offer free priority re-tests, and state that she will resign and report the matter to accreditation bodies if patient safety is compromised.',
      'Leak the story immediately to social media tabloids and publish names of patients online.',
      'Secretly alter the electronic health records in the database to fake calibration logs.',
      'Resign immediately without leaving any documentation so she avoids personal legal liability.'
    ],
    correctAnswer: 1,
    explanation: 'Option B upholds medical ethics and duty of care without unnecessary public sensationalism: contacting the treating physicians directly enables proactive patient safeguarding (free re-testing), while making her ethical boundary unambiguous to management.',
    year: 'XAT 2023'
  },
  {
    id: 'xat-2023-dm-q2',
    questionNumber: 2,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Crisis Communication & Public Trust',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 1: Medix Pathology and Machine Calibration Anomaly',
    passage: `Refer to the Medix Pathology caselet. Pradeep Goel agrees to contact treating doctors but worries that if competitors learn about the re-testing program, they will spread malicious rumors to cancel hospital tie-ups.`,
    question: 'Which of the following communication strategies BEST shields Medix from predatory competitor propaganda?',
    options: [
      'Deny any test discrepancies if questioned by doctors and claim the re-tests are part of a celebratory customer loyalty contest.',
      'Proactively host a medical symposium explaining Medix’s rigorous continuous quality audit protocol, framing the doctor-outreach as evidence of gold-standard voluntary quality governance.',
      'Bribe local competitor sales reps to keep quiet.',
      'Sue competitors in advance for anticipated defamation.',
      'Threaten to stop testing samples for any hospital that questions the re-test program.'
    ],
    correctAnswer: 1,
    explanation: 'Option B transforms a potential reputational liability into an ethical asset. Framing voluntary discovery and proactive clinician communication as proof of peerless transparency disarms bad-faith competitor gossip.',
    year: 'XAT 2023'
  },
  {
    id: 'xat-2023-dm-q3',
    questionNumber: 3,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Process Audit & Quality Assurance',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 1: Medix Pathology and Machine Calibration Anomaly',
    passage: `Refer to the Medix Pathology caselet. An enquiry reveals that the optical sensor drift was caused because the laboratory technician skipped the mandatory daily two-point calibration protocol to meet tight 6 AM dispatch deadlines set by the logistics head.`,
    question: 'How should management structurally prevent recurrence of this failure?',
    options: [
      'Fire the laboratory technician immediately and mandate 14-hour work shifts.',
      'Implement an automated software interlock that prevents the analyzer from processing clinical patient batches unless daily digital calibration passes benchmark tolerance, paired with reviewing unrealistic dispatch SLAs.',
      'Abolish morning dispatch deadlines entirely and deliver all reports 48 hours late.',
      'Instruct lab technicians to report test values based on visual inspection rather than machine printouts.',
      'Ban pathologists from auditing machine calibration logs in the future.'
    ],
    correctAnswer: 1,
    explanation: 'Option B eliminates the systemic root cause through Poka-Yoke (fail-safe software interlocks that physically prevent running patient samples without verified calibration) alongside addressing the operational incentive conflict (unrealistic dispatch SLAs).',
    year: 'XAT 2023'
  },

  // Caselet 2: FinServe Microfinance Over-indebtedness (Qs 4-6)
  {
    id: 'xat-2023-dm-q4',
    questionNumber: 4,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Financial Inclusion & Ethical Lending',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 2: FinServe Microfinance and Rural Borrower Stress',
    passage: `FinServe is a non-banking financial company (NBFC-MFI) operating in eastern India, extending unsecured micro-loans to women’s Joint Liability Groups (JLGs). Over the past three years, loan disbursements grew at 45% CAGR, boosting FinServe’s stock price.

However, an independent ground report reveals severe borrower distress in three rural districts:
- Over 40% of women borrowers have taken simultaneous loans from 4 to 6 different lenders to repay older loans (debt spiraling).
- In response to rising default rates, FinServe’s ground collection recovery agents have started sitting outside borrowers’ homes from dawn till dusk, confiscating livestock and shouting in public.
- Two borrowers attempted self-harm following aggressive collection tactics.

Branch manager Kavita is pressured by regional leadership to maintain 99.2% recovery figures for her annual performance appraisal.`,
    question: 'What immediate executive intervention should FinServe’s Managing Director order?',
    options: [
      'Encourage recovery agents to be more aggressive before the media picks up the news.',
      'Immediately suspend aggressive doorstep shaming, enforce the MFI Fair Practices Code, restructure repayment schedules for distressed borrowers, and mandate integration with credit bureaus to cap multi-lending per household.',
      'Write off all loans in the state and shut down all rural operations permanently.',
      'Blame the female borrowers for financial greed and file police cases against them.',
      'Replace all female recovery agents with private bouncers.'
    ],
    correctAnswer: 1,
    explanation: 'Option B halts abusive, reputation-threatening collection practices immediately, reinstates regulatory Fair Practices compliance, provides humane debt restructuring, and implements structural credit bureau safeguards against debt trapping.',
    year: 'XAT 2023'
  },
  {
    id: 'xat-2023-dm-q5',
    questionNumber: 5,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Incentives & Key Performance Indicators',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 2: FinServe Microfinance and Rural Borrower Stress',
    passage: `Refer to the FinServe caselet. The incentive structure for branch loan officers currently awards 70% of bonus weightage to disbursement volume and 30% to on-time monthly collections, with 0% weightage given to borrower financial health or credit bureau verification compliance.`,
    question: 'How should the Chief Human Resources Officer (CHRO) redesign loan officer KPIs to promote responsible lending?',
    options: [
      'Increase disbursement bonus weightage to 90% to grow through the crisis.',
      'Tie bonus incentives to borrower repayment capacity assessment, credit bureau multi-lending adherence, audit compliance, and long-term portfolio quality rather than raw disbursement volume.',
      'Abolish all salaries and pay staff only on commission per recovery.',
      'Rank branches publicly based on how many livestock units they confiscate.',
      'Mandate that loan officers personally pay for any borrower default.'
    ],
    correctAnswer: 1,
    explanation: 'Option B realigns organizational incentives with sustainable, responsible financial inclusion: incentivizing rigorous pre-lending credit checks and underwriting quality rather than reckless volume chasing.',
    year: 'XAT 2023'
  },
  {
    id: 'xat-2023-dm-q6',
    questionNumber: 6,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Regulatory Relations & Crisis Audit',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 2: FinServe Microfinance and Rural Borrower Stress',
    passage: `Refer to the FinServe caselet. The Reserve Bank of India (RBI) issues a show-cause notice regarding customer harassment complaints and threatens to suspend FinServe’s NBFC operating license.`,
    question: 'What is FinServe’s MOST constructive response to the central bank regulator?',
    options: [
      'Claim that the complaints are a political conspiracy by opposition parties to obtain loan waivers.',
      'Submit an unconditional apology, present an externally audited corrective action plan detailing terminated rogue recovery agencies, board-approved debt restructuring norms, and an independent customer grievance ombudsman.',
      'Threaten to challenge RBI’s regulatory authority in the Supreme Court.',
      'Lobby ministers to pressure the RBI governor to drop the inquiry.',
      'Shut down customer helpline phones so no further complaints reach official ears.'
    ],
    correctAnswer: 1,
    explanation: 'Option B is the gold standard for institutional crisis management with statutory regulators: acknowledging deficiencies without evasion, demonstrating concrete corrective actions (firing rogue recovery agents), and establishing independent compliance oversight.',
    year: 'XAT 2023'
  },

  // Caselet 3: AutoDrive EV Battery Fire & Supply Chain Recall (Qs 7-9)
  {
    id: 'xat-2023-dm-q7',
    questionNumber: 7,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Product Recall & Consumer Safety',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 3: AutoDrive Motors Electric Scooter Battery Fire',
    passage: `AutoDrive Motors recently launched 'Flash 100', an electric two-wheeler that quickly garnered 45,000 bookings across urban India. During peak summer temperatures in May, three Flash 100 scooters catch fire while parked in residential garages in Nagpur and Chennai. Fortunately, no lives are lost, but video footage goes viral online.

Preliminary forensic engineering indicates that the lithium-ion battery packs, supplied by an overseas vendor, experienced thermal runaway due to insufficient thermal interface gel between cylindrical cells during 46°C ambient conditions.

AutoDrive’s Marketing VP proposes: "Issue a statement blaming users for charging their scooters under direct sunlight using unauthorized extension cables. A full recall of 12,000 delivered units will cost ₹65 crore and wipe out two years of company profits."`,
    question: 'Which of the following decisions should CEO Rohan Mehra make?',
    options: [
      'Adopt the Marketing VP’s advice to blame users and prevent financial losses.',
      'Issue an immediate voluntary safety recall of all 12,000 delivered scooters for battery inspection and thermal management retrofit, deploy an OTA software update capping maximum charging speed during high ambient temperatures, and publicly commit to customer safety.',
      'Secretly recall only the three scooters that caught fire and offer their owners brand new cars.',
      'Discontinue the electric vehicle business and revert to manufacturing diesel scooters.',
      'Delete all social media channels of the company to prevent videos from spreading.'
    ],
    correctAnswer: 1,
    explanation: 'Option B is the only ethically and commercially sustainable decision: thermal runaway in passenger vehicles is life-threatening. A decisive voluntary recall paired with immediate OTA software limits protects human lives, preserves long-term brand equity, and complies with safety standards.',
    year: 'XAT 2023'
  },
  {
    id: 'xat-2023-dm-q8',
    questionNumber: 8,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Vendor Accountability & Sourcing',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 3: AutoDrive Motors Electric Scooter Battery Fire',
    passage: `Refer to the AutoDrive Motors caselet. AutoDrive discovers that the battery vendor intentionally substituted a cheaper thermal compound without notifying AutoDrive to protect their own manufacturing margins.`,
    question: 'How should AutoDrive legally and commercially manage this supplier breach?',
    options: [
      'Forgive the vendor because international supply chains are complex.',
      'Invoke contractual indemnification clauses to recover recall and retrofit expenses, initiate breach of contract litigation, and diversify battery cell procurement to certified domestic gigafactory partners.',
      'Send company security guards to assault the supplier’s sales representative.',
      'Keep purchasing from the supplier without changes because they offer cheap prices.',
      'Keep the supplier breach secret from AutoDrive’s own engineering team.'
    ],
    correctAnswer: 1,
    explanation: 'Option B enforces strict contractual liability, recoups monetary damages for the recall, and eliminates supply vulnerability by pivoting to certified, auditable battery manufacturing partners.',
    year: 'XAT 2023'
  },
  {
    id: 'xat-2023-dm-q9',
    questionNumber: 9,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Customer Trust Rebuilding',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 3: AutoDrive Motors Electric Scooter Battery Fire',
    passage: `Refer to the AutoDrive Motors caselet. Following the recall announcement, 30% of existing customers who booked the scooter request cancellation and full refund of their ₹5,000 booking tokens.`,
    question: 'Which of the following customer retention policies is MOST balanced?',
    options: [
      'Refuse all refunds and threaten customers with legal penalties.',
      'Honor all refund requests immediately with zero cancellation fees, while offering customers who choose to stay an extended 5-year battery warranty, free roadside assistance, and transparent progress updates on battery safety testing.',
      'Double the scooter booking price to discourage poor customers.',
      'Promise customers that future scooters will come equipped with fire extinguishers attached to the handlebars.',
      'Ignore customer emails and turn off phone support lines.'
    ],
    correctAnswer: 1,
    explanation: 'Option B respects consumer choice (frictionless refund honoring builds goodwill), while creating high-value, confidence-restoring incentives (5-year battery warranty, transparent safety validation) for customers who remain loyal.',
    year: 'XAT 2023'
  },

  // Caselet 4: EduTech Content Plagiarism & Author Attribution (Qs 10-12)
  {
    id: 'xat-2023-dm-q10',
    questionNumber: 10,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Intellectual Property & Academic Integrity',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 4: LearnQuick EdTech and Content Copyright Dispute',
    passage: `LearnQuick is a fast-growing competitive exam preparation portal with 250,000 paid subscribers. A prominent independent mathematics author, Prof. K. N. Rao, discovers that LearnQuick’s flagship Quantitative Aptitude study modules copy 85 original problems and step-by-step explanatory diagrams verbatim from his copyrighted 2018 textbook without citation or licensing.

Prof. Rao sends a formal legal cease-and-desist notice demanding ₹50 lakh in damages and an immediate withdrawal of the study modules.

LearnQuick’s content team reveals that a junior freelance curriculum developer, who was paid ₹25,000 per chapter, had lifted the questions directly from Prof. Rao’s book without conducting original problem design. The freelance contract contained an indemnification clause stating that freelancers are solely liable for copyright infringements.`,
    question: 'How should LearnQuick’s management handle Prof. Rao’s legal notice?',
    options: [
      'Forward the legal notice to the junior freelancer and tell Prof. Rao to collect money from the freelancer.',
      'Acknowledge the infringement immediately, replace the plagiarized questions in the online modules, offer Prof. Rao a fair licensing royalty or financial settlement, and publicly credit him as a senior curriculum consultant.',
      'Deny all claims and assert that mathematics formulas cannot be copyrighted under any circumstances.',
      'Counter-sue Prof. Rao for attempting to extort a successful startup.',
      'Shut down the platform and liquidate company bank accounts.'
    ],
    correctAnswer: 1,
    explanation: 'Option B recognizes institutional vicarious liability: a commercial educational company cannot hide behind an underpaid freelancer when profiting from stolen IP. Settling fairly, replacing the infringed material, and crediting the author resolves legal exposure and restores academic credibility.',
    year: 'XAT 2023'
  },
  {
    id: 'xat-2023-dm-q11',
    questionNumber: 11,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Internal Review & Content Governance',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 4: LearnQuick EdTech and Content Copyright Dispute',
    passage: `Refer to the LearnQuick caselet. To ensure no other subject modules (DILR, Verbal) contain undetected plagiarized material, management must establish an internal verification protocol.`,
    question: 'Which of the following internal governance mechanisms is MOST comprehensive?',
    options: [
      'Rely exclusively on student complaints to identify stolen content.',
      'Deploy automated cross-referencing plagiarism software across all question banks, require signed provenance declarations from creators, and institute a mandatory peer-review audit before publishing new modules.',
      'Prohibit content developers from reading any competitor books or references.',
      'Fire all content developers and use generative AI to produce 10,000 questions overnight without human checks.',
      'Reduce question bank size to only 10 questions per subject.'
    ],
    correctAnswer: 1,
    explanation: 'Option B institutes systemic editorial safeguards: automated similarity scanning, strict author chain-of-custody provenance records, and professional peer-review audits.',
    year: 'XAT 2023'
  },
  {
    id: 'xat-2023-dm-q12',
    questionNumber: 12,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Freelancer Accountability & Fairness',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 4: LearnQuick EdTech and Content Copyright Dispute',
    passage: `Refer to the LearnQuick caselet. The junior freelancer admits to copying because the content manager gave him a deadline of 3 days to deliver 100 complex Olympiad-level questions, threatening non-payment if delayed.`,
    question: 'What managerial action should the Chief Content Officer take regarding the content manager?',
    options: [
      'Promote the content manager for enforcing tight turnaround times.',
      'Reprimand the content manager for creating coercive, unrealistic deadlines that directly incentivized unethical shortcuts, and recalibrate realistic content creation timelines.',
      'Fire both the freelancer and content manager without conducting any inquiry.',
      'Force the content manager to write 500 questions in 24 hours as punishment.',
      'Ignore the issue since Prof. Rao has already been approached.'
    ],
    correctAnswer: 1,
    explanation: 'Option B targets the root organizational cause: unrealistic management deadlines and coercive pressure inevitably drive junior personnel toward unethical behavior. Correcting management practice and establishing reasonable timelines prevents future systemic breaches.',
    year: 'XAT 2023'
  },

  // Caselet 5: CloudKitchen Franchise Quality Drift (Qs 13-15)
  {
    id: 'xat-2023-dm-q13',
    questionNumber: 13,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Franchise Operations & Brand Integrity',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 5: SpiceCrafters Cloud Kitchen Franchise Conflict',
    passage: `SpiceCrafters is a fast-growing cloud kitchen brand known for signature slow-cooked Lucknowi biryanis, operating 50 franchise kitchens across Mumbai and Pune. Franchisees pay an 8% royalty on gross revenues and are contractually required to purchase standardized spice paste pouches and marinated meat exclusively from SpiceCrafters’ central commissary.

In recent months, customer ratings on food delivery apps for eight franchise outlets in Pune drop from 4.4 to 3.1 stars. Secret mystery shopper audits reveal:
- The eight franchisees secretly substituted local low-grade cooking oil and frozen broiler chicken to evade central commissary shipping charges and boost their operating margins.
- Portions were reduced by 20%, and food was being prepared in unhygienic conditions.

When served notice, the Pune franchisee association threatens to break away, withhold all royalties, and launch a copycat brand using SpiceCrafters’ menu names.`,
    question: 'How should SpiceCrafters leadership decisively handle this franchisee revolt?',
    options: [
      'Capitulate completely and allow all 50 franchisees to source ingredients from any local vendor they want.',
      'Enforce food safety and trademark clauses strictly: issue immediate termination and trademark de-listing notices to the non-compliant kitchens, inspect food hygiene, and transfer territorial delivery rights to compliant dark kitchens.',
      'Poison the rival food supplies to deter copycat brands.',
      'Ignore food ratings because online reviews are largely manipulated.',
      'Offer the rogue franchisees an exemption from all royalty payments for two years.'
    ],
    correctAnswer: 1,
    explanation: 'Option B protects core brand value and customer health. In culinary franchising, food safety, ingredient standardization, and taste consistency are non-negotiable. Allowing sub-par ingredients destroys brand equity across all 50 outlets. Decisive trademark enforcement and territorial reassignment is essential.',
    year: 'XAT 2023'
  },
  {
    id: 'xat-2023-dm-q14',
    questionNumber: 14,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Supply Chain Economics & Franchisee Viability',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 5: SpiceCrafters Cloud Kitchen Franchise Conflict',
    passage: `Refer to the SpiceCrafters caselet. Compliant franchisees in other cities report that central commissary logistics costs have risen by 22% due to rising fuel prices, eroding their operating profitability even when customer ratings remain high.`,
    question: 'Which of the following supply chain interventions BEST restores franchisee profitability without compromising recipe consistency?',
    options: [
      'Allow franchisees to omit expensive saffron and cardamom spices from the biryani.',
      'Establish a decentralized regional cold-chain distribution hub in Pune to cut long-distance transport costs and negotiate bulk enterprise procurement pricing passed on directly to franchisees.',
      'Double the retail delivery prices on Zomato and Swiggy.',
      'Require franchisees to operate without electricity during afternoon hours.',
      'Reduce meat portions across all outlets by 50%.'
    ],
    correctAnswer: 1,
    explanation: 'Option B addresses the genuine cost driver (long-distance transit expenses) by setting up a regional hub and leveraging enterprise economies of scale, directly lowering franchisee input costs while safeguarding standardized recipe quality.',
    year: 'XAT 2023'
  },
  {
    id: 'xat-2023-dm-q15',
    questionNumber: 15,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Customer Reputation Repair',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 5: SpiceCrafters Cloud Kitchen Franchise Conflict',
    passage: `Refer to the SpiceCrafters caselet. Customers in Pune who received substandard biryani post critical reviews warning neighbors to avoid ordering from SpiceCrafters.`,
    question: 'How should SpiceCrafters win back customer confidence in the Pune market?',
    options: [
      'Create 10,000 fake bot reviews to drown out negative feedback.',
      'Publicly announce the opening of a company-operated flagship kitchen in Pune with an open-kitchen live stream, offer full refunds and complimentary replacement orders to past dissatisfied customers, and display FSSAI hygiene audit certifications.',
      'Threaten food reviewers with legal lawsuits.',
      'Change the brand name in Pune every week to confuse customers.',
      'Stop delivering food in Pune altogether.'
    ],
    correctAnswer: 1,
    explanation: 'Option B employs radical transparency and proactive restitution: taking direct operational ownership, reimbursing disappointed customers with complimentary flagship meals, and proving kitchen hygiene via third-party FSSAI ratings.',
    year: 'XAT 2023'
  },

  // Caselet 6: BioWaste Incinerator & Urban Slum Displacement (Qs 16-18)
  {
    id: 'xat-2023-dm-q16',
    questionNumber: 16,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Urban Ecology & Social Justice',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 6: CleanCity Waste-to-Energy Plant and Informal Ragpickers',
    passage: `CleanCity Infra operates a municipal Waste-to-Energy (WTE) incineration plant processing 1,000 tonnes of municipal solid waste daily. To generate electricity efficiently, the incinerator requires high-calorific unsegregated waste, particularly dry plastics, cardboard, and rubber.

However, an estimated 2,500 informal waste pickers (ragpickers) who have lived around the municipal landfill for three decades make their livelihood by hand-segregating and recycling plastics and paper before waste reaches the incinerator. 

CleanCity’s operations director reports that waste-picker scavenging reduces incoming dry combustible waste by 30%, causing the furnace temperature to drop below statutory thresholds and reducing power generation revenues by ₹40 lakh per month. He requests the municipal corporation to deploy armed security guards to completely ban and fence out all ragpickers from the landfill.`,
    question: 'Which of the following approaches by CleanCity’s CEO BEST balances plant viability and human livelihood?',
    options: [
      'Erect barbed wire fences and use armed private guards to evict all informal waste pickers immediately.',
      'Integrate the informal waste pickers by formalizing them into a salaried municipal materials recovery workforce, providing PPE and health insurance, and training them to divert non-recyclable high-calorific rejects to the incinerator while monetizing high-grade plastics through organized recyclers.',
      'Shut down the waste-to-energy plant and let the landfill burn in the open air.',
      'Dump toxic incinerator ash directly into the ragpickers’ residential shanties.',
      'Bribe local community leaders to relocate their families to another state.'
    ],
    correctAnswer: 1,
    explanation: 'Option B represents enlightened inclusive governance: formalizing the informal recycling economy dignifies the ragpickers with living wages, safety gear, and healthcare while systematically routing high-calorific sorted waste into the incinerator, achieving both social justice and plant efficiency.',
    year: 'XAT 2023'
  },
  {
    id: 'xat-2023-dm-q17',
    questionNumber: 17,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Environmental Pollution & Emissions Control',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 6: CleanCity Waste-to-Energy Plant and Informal Ragpickers',
    passage: `Refer to the CleanCity caselet. Environmental NGOs test ambient air quality near the plant and find elevated levels of dioxins and furans, highly toxic carcinogens produced by improper chlorinated plastic combustion. The State Pollution Control Board issues an inspection notice.`,
    question: 'What is CleanCity’s MOST responsible technical and regulatory response?',
    options: [
      'Turn off emissions monitoring sensors when inspectors visit.',
      'Invest in continuous emissions monitoring systems (CEMS) connected directly to the regulator’s public portal, install activated carbon injection and baghouse filters, and maintain combustion chamber temperatures above 850°C to destroy dioxins.',
      'Claim that dioxins are harmless natural vitamins.',
      'Transfer the incinerator machinery to an unauthorized forest zone.',
      'Sue the environmental NGOs for publishing scientific lab results.'
    ],
    correctAnswer: 1,
    explanation: 'Option B addresses the hazardous emission problem through scientifically proven abatement technology (activated carbon, temperature controls above 850°C) and real-time public telemetry data, ensuring compliance with environmental standards.',
    year: 'XAT 2023'
  },
  {
    id: 'xat-2023-dm-q18',
    questionNumber: 18,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Community Health & CSR',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 6: CleanCity Waste-to-Energy Plant and Informal Ragpickers',
    passage: `Refer to the CleanCity caselet. Community elders express fear that child respiratory illnesses in nearby slums are directly attributable to the plant.`,
    question: 'Which of the following initiatives should CleanCity implement through its CSR budget?',
    options: [
      'Distribute free television sets to families so they stay indoors with windows shut.',
      'Fund a community mobile health clinic providing free pediatric respiratory checkups, distribute HEPA air purifiers to local schools, and conduct independent third-party epidemiological health impact studies.',
      'Deny that children ever get sick in the city.',
      'Offer cash payments to families on the condition that they do not visit public hospitals.',
      'Organize firework celebrations to distract the community.'
    ],
    correctAnswer: 1,
    explanation: 'Option B demonstrates genuine stakeholder empathy and public health commitment: continuous medical monitoring, tangible mitigation for schools, and transparent epidemiological research.',
    year: 'XAT 2023'
  },

  // Caselet 7: FinTech Credit Scoring & Algorithmic Discrimination (Qs 19-21)
  {
    id: 'xat-2023-dm-q19',
    questionNumber: 19,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Algorithmic Fairness & Financial Inclusion',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 7: PaisaFast FinTech and Smartphone Scraping Credit Score',
    passage: `PaisaFast is an instant personal loan app catering to young urban gig workers. Because borrowers lack formal credit history (CIBIL score), PaisaFast’s proprietary algorithm analyzes smartphone metadata—including SMS transactional receipts, battery charging habits, phone contact density, and app installation categories—to generate an alternate credit score.

A whistleblower data scientist leaks internal analysis showing that:
- Applicants who charge their phones before battery drops below 15% are awarded 40 higher credit points than those who frequently let their phones die (viewed as a proxy for personal conscientiousness).
- However, gig delivery workers who work 14-hour continuous shifts frequently experience depleted smartphone batteries while on duty, resulting in 65% higher loan rejection rates for delivery drivers compared to sedentary call-center employees with identical net earnings.
- Furthermore, the algorithm penalizes applicants who have blue-collar trade contacts in their address book.`,
    question: 'Which of the following steps should PaisaFast’s Chief Risk Officer (CRO) take immediately?',
    options: [
      'Praise the algorithm for finding creative non-linear correlations and expand battery tracking to include screen brightness.',
      'Immediately decommission proxy variables that correlate with socioeconomic status and job type rather than genuine repayment capacity (such as battery depletion and contact book demographics), and retrain models on actual cash-flow and bank transaction records.',
      'Fire the whistleblower data scientist and file criminal complaints for trade secret theft.',
      'Charge delivery gig workers double interest rates to compensate for their low battery charging habits.',
      'Sell the biased credit algorithm to traditional public sector banks.'
    ],
    correctAnswer: 1,
    explanation: 'Option B corrects spurious, discriminatory algorithmic proxies: penalizing delivery workers for battery depletion when battery drainage is an intrinsic part of mobile fieldwork is irrational and unfairly exclusionary. Grounding underwriting in verified cash flows eliminates systemic bias.',
    year: 'XAT 2023'
  },
  {
    id: 'xat-2023-dm-q20',
    questionNumber: 20,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Consumer Data Privacy & Consent',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 7: PaisaFast FinTech and Smartphone Scraping Credit Score',
    passage: `Refer to the PaisaFast caselet. The Digital Personal Data Protection (DPDP) authority issues new guidelines prohibiting mobile lending apps from accessing full smartphone contact lists and location telemetry without explicit, purpose-limited user consent.`,
    question: 'How should PaisaFast re-architect its customer onboarding flow?',
    options: [
      'Bury contact list consent inside a 40-page terms-of-service document with pre-checked boxes.',
      'Comply with data minimization principles: remove contact book scraping, implement RBI-sanctioned Account Aggregator (AA) framework for encrypted bank statement consent, and explain clearly how financial data is evaluated.',
      'Trick users into granting full permissions by withholding app functionality unless all phone permissions are allowed.',
      'Shift company headquarters to an offshore tax haven to evade Indian data protection laws.',
      'Store customer contact lists on public unencrypted cloud servers.'
    ],
    correctAnswer: 1,
    explanation: 'Option B adheres strictly to statutory data minimization and consumer protection laws by adopting the regulated Account Aggregator ecosystem, ensuring explicit consent and ethical credit evaluation.',
    year: 'XAT 2023'
  },
  {
    id: 'xat-2023-dm-q21',
    questionNumber: 21,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Responsible Growth & Market Reputation',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 7: PaisaFast FinTech and Smartphone Scraping Credit Score',
    passage: `Refer to the PaisaFast caselet. PaisaFast wants to build a dedicated product line for the 5 million delivery and rideshare gig workers in India that aligns with their fluctuating earnings cycle.`,
    question: 'Which product feature would BEST meet gig workers’ financial needs while maintaining low delinquency?',
    options: [
      'Offer fixed high-EMI monthly loans with steep late payment penalties.',
      'Introduce flexible micro-credit lines with dynamic daily or weekly auto-debits tied directly to gig platform payout cycles, zero pre-payment penalties, and automated interest freezes during monsoon or platform downtime.',
      'Require gig workers to surrender their motorcycles as collateral before disbursing ₹2,000.',
      'Mandate that gig workers work 18 hours every day to remain eligible for loans.',
      'Disburse loans in lottery scratch tickets rather than bank transfers.'
    ],
    correctAnswer: 1,
    explanation: 'Option B demonstrates customer-centric product design: synchronizing debt service with high-frequency gig income cycles (daily/weekly debits) reduces default probability and supports financial inclusion.',
    year: 'XAT 2023'
  }
];
