import { Question } from '../../types';

export const xat2024DMQuestions: Question[] = [
  // Caselet 1: NeoPharma Patent & Orphan Drug Dilemma (Qs 1-3)
  {
    id: 'xat-2024-dm-q1',
    questionNumber: 1,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Corporate Ethics & Public Health',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 1: NeoPharma and the Lifesaving Orphan Drug',
    passage: `NeoPharma is a mid-sized Indian pharmaceutical firm that spent ₹120 crore over six years developing 'CardioZ', a breakthrough therapy for a rare congenital pediatric cardiac disorder affecting approximately 2,500 children annually in India. Without CardioZ, mortality by age five is nearly 80%. 

The production cost per annual treatment course is ₹4.5 lakh. NeoPharma originally planned to price CardioZ at ₹14 lakh per course to recoup R&D investments within three years, ensuring venture capital backers achieve their promised IRR of 22%. 

However, public health advocacy groups petition the Union Health Ministry to invoke compulsory licensing or impose a price cap of ₹5 lakh per course. Meanwhile, an international non-profit offers to subsidize ₹3 lakh per course for up to 1,000 underprivileged patients annually for three years, on the condition that NeoPharma commits to supplying the medicine at cost-plus-15% (₹5.18 lakh) after year three. 

Dr. Alok Verma, the CEO and co-founder of NeoPharma, faces intense pressure from venture capitalists to reject the non-profit offer, export 70% of production to high-margin Southeast Asian private hospitals, and challenge any potential price caps in the High Court.`,
    question: 'Which of the following actions, if taken by Dr. Alok Verma, BEST balances long-term organizational viability, pediatric patient welfare, and investor trust?',
    options: [
      'Reject the non-profit offer, challenge the price cap in court, and donate 5% of profits to an independent patient charity.',
      'Accept the non-profit subsidy for 1,000 underprivileged children, sell the remaining domestic doses at ₹12 lakh with transparent pricing, and allocate export revenue to bridge investor ROI expectations.',
      'Accept the government price cap unconditionally, write off past R&D expenditure as corporate social responsibility, and exit rare disease research.',
      'Halt domestic manufacturing completely and shift all production assets to generic fever medications where margins are predictable and litigation-free.',
      'Sell the exclusive worldwide patent rights of CardioZ immediately to a global multinational conglomerate and distribute the proceeds as special dividends to investors.'
    ],
    correctAnswer: 1,
    explanation: 'Option B strikes the most judicious balance across all competing stakeholders: it guarantees immediate lifesaving access to 1,000 underprivileged children through the NGO subsidy, preserves domestic availability at an economically viable price, and leverages higher-margin foreign exports to satisfy venture capital returns without abandoning the firm’s core mission.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-dm-q2',
    questionNumber: 2,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Negotiation & Government Relations',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 1: NeoPharma and the Lifesaving Orphan Drug',
    passage: `Refer to the previous context on NeoPharma and CardioZ. The Union Health Ministry invites Dr. Verma for an urgent consultative dialogue prior to deciding on compulsory licensing. The ministry officials emphasize that infant mortality reduction is a key national priority, but also acknowledge the need to encourage domestic R&D in biotechnology.`,
    question: 'Which of the following proposals presented by Dr. Verma to the Health Ministry is MOST likely to secure a win-win resolution?',
    options: [
      'Warn the ministry that any price interference will lead to an immediate freeze on all private sector biotech investments across India.',
      'Offer a tiered procurement model where the government procures CardioZ in bulk for state pediatric ICUs at ₹5.2 lakh per course, while granting NeoPharma fast-track regulatory clearance for its upcoming pipeline therapies.',
      'Demand full tax exemption for NeoPharma across all its product lines for the next fifteen years in exchange for supplying 500 free doses.',
      'Propose that the government purchase NeoPharma’s R&D division at replacement cost and assume all future manufacturing liabilities.',
      'Request the ministry to delay any pricing policy discussions by two years until overseas patent filings are fully monetized.'
    ],
    correctAnswer: 1,
    explanation: 'Option B represents principled negotiation: bulk institutional procurement at a sustainable volume price (₹5.2 lakh) satisfies the Ministry’s public health goals, while fast-track regulatory clearance provides tangible business value to NeoPharma without demanding unilateral fiscal hand-outs.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-dm-q3',
    questionNumber: 3,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Investor Management & Governance',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 1: NeoPharma and the Lifesaving Orphan Drug',
    passage: `Refer to the NeoPharma caselet. Two senior directors representing the venture capital firm threaten to table a motion of no-confidence against Dr. Verma at the upcoming board meeting if he agrees to any domestic price concessions below ₹10 lakh per course.`,
    question: 'How should Dr. Verma BEST handle this internal boardroom conflict?',
    options: [
      'Leak the venture capitalists’ threats to national television media to create public outrage and force their resignations.',
      'Present a comprehensive five-year financial model demonstrating that bulk public procurement combined with international licensing yields higher cumulative NPV and lower litigation risk than an aggressive domestic pricing strategy.',
      'Resign immediately from the CEO post and start a competing charitable foundation to treat affected children.',
      'Surrender completely to the VC directors’ demands and double the domestic price to ₹20 lakh per course to maximize immediate quarterly cash flows.',
      'Lock out the venture capital nominees from attending board meetings by altering the company’s articles of association unilaterally.'
    ],
    correctAnswer: 1,
    explanation: 'Option B is the professional, fiduciary response. Board directors are persuaded through rigorous financial and risk-adjusted models (NPV, volume certainty, brand equity, avoiding patent revocation) rather than adversarial media leaks, resignation, or illegal procedural lockouts.',
    year: 'XAT 2024'
  },

  // Caselet 2: EcoCraft Artisans & E-Commerce Platform Dispute (Qs 4-6)
  {
    id: 'xat-2024-dm-q4',
    questionNumber: 4,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Vendor Relationships & Platform Governance',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 2: EcoCraft and the Rural Artisans Cooperative',
    passage: `EcoCraft is an ethical luxury e-commerce platform that sells handmade Dokra metal art and terracotta pottery sourced from 400 rural artisan families across Odisha and West Bengal. EcoCraft positions itself to urban buyers as a fair-trade platform returning 70% of retail proceeds directly to artisan clusters.

Over the last six months, customer return rates have risen from 3% to 14% due to breakage during transit and minor dimensional variations between website photographs and physical items. Urban customers have posted scathing reviews on social media, accusing EcoCraft of "substandard quality masquerading as ethnic charm."

EcoCraft’s operations director, Raghav, proposes standardizing shapes using silicone casting dies, imposing a 20% penalty on artisan clusters for any returned defective piece, and hiring a third-party automated packaging contractor that increases packaging costs by 18%. 

The artisan cooperative leader, Shambhu, protests that handcrafted Dokra inherently possesses unique variations, and that monetary penalties will push families back into the clutches of exploitative local moneylenders.`,
    question: 'Which of the following interventions by EcoCraft’s management would MOST effectively resolve the return crisis while honoring its fair-trade ethos?',
    options: [
      'Implement Raghav’s proposal fully to instill modern factory discipline among rural artisans.',
      'Introduce engineered protective packaging, train artisans on packaging techniques, and update product listings with disclaimers and 360-degree videos celebrating unique handcrafted variations.',
      'Discontinue Dokra metal art sales entirely and replace them with mass-produced machine-made brass souvenirs.',
      'Ban all customer returns on the website and delete negative reviews across social media platforms.',
      'Transfer all financial liability of customer returns directly to the logistics delivery partners.'
    ],
    correctAnswer: 1,
    explanation: 'Option B addresses both root causes of the returns: physical transit damage is resolved through specialized protective packaging and training, while customer expectation mismatch is solved transparently via realistic media and education, protecting artisan livelihood and fair-trade integrity.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-dm-q5',
    questionNumber: 5,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Crisis Management & Quality Control',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 2: EcoCraft and the Rural Artisans Cooperative',
    passage: `Refer to the EcoCraft caselet. A prominent design influencer with 800,000 followers receives a broken terracotta vase and posts a viral unboxing video claiming EcoCraft is an "exploitative greenwashing scam that delivers trash in broken boxes." Within 24 hours, over 2,000 orders are cancelled.`,
    question: 'Which of the following responses by EcoCraft is the MOST appropriate immediate crisis response?',
    options: [
      'Sue the influencer for defamation and demand immediate removal of the video under threat of penal action.',
      'Post a defensive comment stating that true connoisseurs of ethnic craft understand that fragility is part of traditional clay art.',
      'Acknowledge the packaging failure publicly, replace the influencer’s order with a curated intact masterwork, publish an open letter detailing their artisan mission, and invite the influencer to visit the artisan village.',
      'Offer a flat 50% discount to all customers who cancelled their orders to win back sales volume.',
      'Issue a press release blaming the logistics courier company and publicly terminating their shipping contract.'
    ],
    correctAnswer: 2,
    explanation: 'Option C exhibits high emotional intelligence and proactive accountability: admitting fault, replacing the damaged piece, authenticating their mission transparently, and converting a critic into an advocate through first-hand immersion.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-dm-q6',
    questionNumber: 6,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Strategic Capacity Building',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 2: EcoCraft and the Rural Artisans Cooperative',
    passage: `Refer to the EcoCraft caselet. Shambhu requests a ₹25 lakh zero-interest advance working capital loan from EcoCraft to construct a community kiln and buy raw clay in bulk before the monsoon season. EcoCraft’s cash reserves currently stand at ₹40 lakh.`,
    question: 'Which of the following decisions by the CEO is the MOST prudent?',
    options: [
      'Reject the loan request outright, as an e-commerce platform should never act as a lending institution.',
      'Disburse the full ₹25 lakh cash immediately from company reserves without requiring any repayment milestones.',
      'Partner with a rural micro-finance institution or CSR foundation to co-fund ₹15 lakh, advance ₹10 lakh against pre-booked seasonal orders, and establish a milestone-based clay inventory tracking system.',
      'Demand 51% equity stake in the artisan cooperative society in exchange for providing the loan.',
      'Advise Shambhu to borrow from local micro-lenders at standard commercial interest rates of 36% per annum.'
    ],
    correctAnswer: 2,
    explanation: 'Option C protects EcoCraft’s working capital liquidity (avoiding deploying 62.5% of reserves in one go), shares credit risk with specialized institutions, and links company advances directly to future inventory procurement.',
    year: 'XAT 2024'
  },

  // Caselet 3: TechSprint Hybrid Work Policy Conflict (Qs 7-9)
  {
    id: 'xat-2024-dm-q7',
    questionNumber: 7,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - HR Policy & Employee Retention',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 3: TechSprint Systems and Return-to-Office Mandate',
    passage: `TechSprint Systems is a Bengaluru-based enterprise SaaS firm with 1,200 software engineers. During 2021-2023, the firm operated under a 100% remote work policy, which allowed it to hire top engineering talent from Tier-2 and Tier-3 cities at competitive compensation.

In early 2024, the newly appointed Chief Operating Officer (COO), Vikram Seth, issues a mandatory directive: "All employees must report to the Bengaluru headquarters for a minimum of 3 days a week starting in 30 days. Non-compliance will result in forfeiture of annual performance bonuses and termination."

The directive triggers widespread discontent. Over 180 senior developers, including three lead architects responsible for the upcoming version of TechSprint’s flagship product, submit joint resignation letters. Internal survey data reveals:
- 65% of engineers cite exorbitant Bengaluru house rent and traffic gridlock as reasons for reluctance.
- Female employee attrition is projected to double if full flexibility is withdrawn.
- However, client project deliverable velocity had dropped by 18% over the past two quarters, with multiple sprint delays attributed to asynchronous communication friction.`,
    question: 'Which of the following options should CEO Ananya Sen adopt to resolve this impasse effectively?',
    options: [
      'Enforce the COO’s 3-day mandate strictly to maintain organizational hierarchy and discipline.',
      'Transition to an outcome-driven hybrid model: allow cross-functional teams to decide their co-located collaboration days, establish regional satellite co-working spaces in Pune, Hyderabad, and Kochi, and establish strict sprint milestone accountability.',
      'Accept all 180 resignations immediately and outsource product maintenance to offshore freelance contractors.',
      'Revert permanently to 100% remote work and scrap all sprint velocity monitoring to pacify senior engineers.',
      'Offer a one-time cash retention bonus of ₹10 lakh to only the three lead architects while maintaining the mandatory return policy for all other engineers.'
    ],
    correctAnswer: 1,
    explanation: 'Option B balances operational productivity (solving collaboration bottlenecks through targeted co-location) with talent preservation and employee well-being (regional hubs, team autonomy, objective output metrics), preventing catastrophic key-person attrition.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-dm-q8',
    questionNumber: 8,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Leadership & Change Management',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 3: TechSprint Systems and Return-to-Office Mandate',
    passage: `Refer to the TechSprint caselet. Vikram Seth, the COO, feels his executive authority has been undermined because the CEO paused his return-to-office directive following the mass resignation threat. He intimates to Ananya that "if managers cannot enforce presence, we will foster a culture of entitled insubordination."`,
    question: 'How should Ananya Sen BEST address Vikram’s concerns while steering the organization forward?',
    options: [
      'Reprimand Vikram publicly in an all-hands meeting for issuing arbitrary draconian edicts without consulting HR.',
      'Align privately with Vikram on the business objective (improving client delivery velocity and cross-team communication) while coaching him on collaborative change leadership and involving him in designing the regional hub framework.',
      'Terminate Vikram’s employment immediately to demonstrate to software engineers that employee comfort is paramount.',
      'Authorize Vikram to fire the 10 most vocal dissenting engineers to assert his authority.',
      'Appoint an external human resources consultant to take over all operational responsibilities from Vikram.'
    ],
    correctAnswer: 1,
    explanation: 'Option B exemplifies mature executive leadership: it redirects the conversation from personal ego and compliance to shared business objectives (sprint delivery velocity), respects the COO’s role while counseling constructive leadership, and avoids toxic public shaming.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-dm-q9',
    questionNumber: 9,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Team Performance & Evaluation',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 3: TechSprint Systems and Return-to-Office Mandate',
    passage: `Refer to the TechSprint caselet. Investigation into the 18% drop in sprint delivery velocity reveals that the decline was concentrated in two specific product modules where product managers scheduled an average of 26 hours of unstructured Zoom meetings per developer per week, leaving insufficient uninterrupted time for deep coding.`,
    question: 'Given this new finding, which of the following actions is MOST logical?',
    options: [
      'Increase coding hours by mandating weekend shifts for developers in those two modules.',
      'Institute a "No-Meeting Core Focus" protocol (e.g. reserving Tuesday and Thursday exclusively for uninterrupted development), streamline backlog refinement, and evaluate sprint throughput before mandating physical relocations.',
      'Abolish the product manager role entirely and let software engineers interact directly with commercial clients.',
      'Assume the data is flawed and proceed with forcing all employees to return to the Bengaluru office.',
      'Reduce client sprint deliverables by 50% so engineers can attend all meetings without stress.'
    ],
    correctAnswer: 1,
    explanation: 'Option B tackles the proven systemic bottleneck: meeting fatigue and context switching. Introducing structured "no-meeting focus blocks" directly cures the root cause identified by empirical data rather than treating symptoms with blunt physical mandates.',
    year: 'XAT 2024'
  },

  // Caselet 4: GreenInfra Environmental Offset & Tribal Land Rights (Qs 10-12)
  {
    id: 'xat-2024-dm-q10',
    questionNumber: 10,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Environmental Governance & Community Relations',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 4: GreenInfra Solar Park and Sacred Grove',
    passage: `GreenInfra Ltd. has been awarded a 500 MW solar park project in Rajasthan. The project enjoys state government support and international ESG financing. However, the transmission corridor connecting the solar park to the central power substation passes through 18 hectares of community land that includes a centuries-old sacred grove ('Oran') protected by local pastoral communities.

The Oran houses a unique ecosystem supporting endangered Great Indian Bustards and provides monsoon grazing for over 8,000 camels and sheep. The local village council ('Gram Sabha') unanimously passes a resolution refusing permission for tree cutting and overhead transmission towers.

GreenInfra’s chief engineer estimates that re-routing the transmission line around the sacred grove will:
- Lengthen the corridor by 14 kilometers.
- Increase project capital cost by ₹42 crore (a 4.8% escalation).
- Cause a six-month delay in commercial commissioning, triggering a potential contractual penalty of ₹12 crore from the State Electricity Distribution Company.

Local administrative officials assure GreenInfra that they can use police force to clear the land under historical eminent domain provisions.`,
    question: 'Which course of action should GreenInfra’s Board of Directors adopt?',
    options: [
      'Use state administrative force to construct the transmission towers through the grove quickly before media notices.',
      'Re-route the transmission corridor around the sacred grove while simultaneously petitioning the electricity regulator and state government for a waiver of delay penalties on force majeure / environmental conservation grounds.',
      'Cancel the entire 500 MW solar project and forfeit all earnest money deposits.',
      'Cut down only half the trees in the sacred grove at night to avoid confrontations with the pastoralists.',
      'Offer cash compensation of ₹50,000 directly to each village elder in secret to convince them to revoke the Gram Sabha resolution.'
    ],
    correctAnswer: 1,
    explanation: 'Option B demonstrates long-term ethical stewardship and risk mitigation. Forcing an infrastructure corridor through an ecologically sensitive sacred grove violates ESG financing covenants, risks violent local resistance and severe legal injunctions. Re-routing while seeking regulatory penalty relief is the sustainable, compliant path.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-dm-q11',
    questionNumber: 11,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Stakeholder Engagement & CSR',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 4: GreenInfra Solar Park and Sacred Grove',
    passage: `Refer to the GreenInfra caselet. The pastoral community demands long-term guarantees that the solar park will not deplete groundwater tables used by their livestock. The solar panels require periodic washing to remove desert dust and maintain photovoltaic efficiency.`,
    question: 'Which of the following operational measures BEST addresses the community’s water depletion anxiety while maintaining solar efficiency?',
    options: [
      'Promise the villagers that solar panels do not require any water and ignore the dust accumulation.',
      'Invest in robotic dry-cleaning technology for the solar arrays and construct rainwater harvesting check dams around the grazing zones using CSR funds.',
      'Drill ten unauthorized deep borewells across the perimeter during night hours.',
      'Bribe local irrigation department officers to divert river canal water away from farming villages into the solar plant.',
      'Threaten to withdraw all employment promises if the villagers continue to raise water inquiries.'
    ],
    correctAnswer: 1,
    explanation: 'Option B directly solves the technical operational challenge via automated waterless robotic cleaning while affirmatively improving the community’s water security through rainwater harvesting check dams.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-dm-q12',
    questionNumber: 12,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Financial & Contractual Negotiation',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 4: GreenInfra Solar Park and Sacred Grove',
    passage: `Refer to the GreenInfra caselet. The State Electricity Distribution Company initially rejects GreenInfra’s penalty waiver petition, stating that power purchase agreements (PPAs) are strictly binding commercial documents.`,
    question: 'What is GreenInfra’s MOST persuasive argument in appellate review before the State Electricity Regulatory Commission (SERC)?',
    options: [
      'Assert that private companies have a constitutional right to disregard contractual terms whenever convenient.',
      'Demonstrate that re-routing was legally compelled by the Wildlife Protection Act and National Green Tribunal precedents protecting the Great Indian Bustard, constituting a legitimate statutory Force Majeure event.',
      'Threaten to dismantle the entire solar park and sell the photovoltaic panels as scrap.',
      'Argue that since solar energy is green, electricity laws do not apply to renewable power developers.',
      'Offer kickbacks to the commissioners of the regulatory tribunal.'
    ],
    correctAnswer: 1,
    explanation: 'Option B presents an unassailable legal and regulatory foundation: compliance with mandatory environmental statutes and Supreme Court / NGT directives on endangered species qualifies as a recognized Force Majeure / Change in Law circumstance under standard PPA jurisprudence.',
    year: 'XAT 2024'
  },

  // Caselet 5: EdSmart AI Proctoring & Student Privacy Scandal (Qs 13-15)
  {
    id: 'xat-2024-dm-q13',
    questionNumber: 13,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Data Privacy & Algorithmic Bias',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 5: EdSmart Technologies and Algorithmic Proctoring',
    passage: `EdSmart Technologies licenses an AI-driven remote examination proctoring software to over 40 Indian universities. The software monitors webcam feeds, eye gaze tracking, background acoustic levels, and keystroke dynamics to generate a real-time 'Integrity Risk Score' (0-100) during online tests.

During national end-term examinations, several complaints surface:
1. Students from darker skin tones were flagged for "face not detected" at three times the rate of fair-skinned peers due to training dataset demographic skew.
2. Students with neurodivergent conditions (e.g. ADHD, mild motor tics) were flagged as "suspicious head motion" and automatically locked out of exams by the software.
3. Over 600 students were disqualified automatically across 12 universities without human audit, leading to student protests outside university gates.

EdSmart’s Chief Technology Officer, Rajesh, asserts: "Our algorithm has a 96% aggregate accuracy on standard benchmarks. Disabling automatic lockouts will open the floodgates to mass cheating, damaging our brand value among university chancellors."`,
    question: 'Which of the following actions should EdSmart’s CEO order with IMMEDIATE effect?',
    options: [
      'Back the CTO fully and issue a public statement that student protests are orchestrated by failed students seeking grace marks.',
      'Suspend fully autonomous lockouts immediately, institute mandatory multi-tiered human proctor review for any algorithmically flagged anomaly, and retrain computer vision models with diverse demographic datasets.',
      'Shut down the company and delete all exam records to prevent civil liability.',
      'Sue the protesting students for defamation and hacking.',
      'Lower the algorithm threshold so that zero students are flagged, regardless of whether cheating takes place.'
    ],
    correctAnswer: 1,
    explanation: 'Option B institutes essential procedural justice and technological ethics: fully autonomous disqualifications with documented algorithmic demographic bias are indefensible. Adding human oversight ensures fair process while retaining proctoring capabilities, paired with retraining the skewed vision model.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-dm-q14',
    questionNumber: 14,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - University Client Relations',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 5: EdSmart Technologies and Algorithmic Proctoring',
    passage: `Refer to the EdSmart caselet. Three premier private universities demand that EdSmart conduct re-examinations for all affected 600 students within 10 days at EdSmart’s sole expense, threatening to cancel multi-crore enterprise subscriptions otherwise.`,
    question: 'How should EdSmart respond to these university clients?',
    options: [
      'Refuse to cooperate and invoke arbitration clauses in the contract.',
      'Accept the re-examination demand, deploy certified human invigilators alongside assisted AI tools at EdSmart’s expense, and offer the universities a service credit to rebuild institutional trust.',
      'Demand that the universities pay 200% fees for re-examinations since the students triggered the system alerts.',
      'Blame the students’ webcams and internet service providers for all glitches.',
      'Advise the universities to award full marks to all 600 students without holding any re-test.'
    ],
    correctAnswer: 1,
    explanation: 'Option B prioritizes customer retention, institutional reputation, and accountability. Absorbing the immediate cost of human-supervised re-testing preserves multi-crore recurring SaaS contracts and prevents catastrophic customer churn.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-dm-q15',
    questionNumber: 15,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Product Roadmap & Inclusion',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 5: EdSmart Technologies and Algorithmic Proctoring',
    passage: `Refer to the EdSmart caselet. The Chief Product Officer proposes adding an explicit "Accommodation Profile" in EdSmart’s software allowing students with medical, neurodivergent, or lighting constraints to register beforehand with university authorization, adjusting heuristic sensitivity parameters accordingly.`,
    question: 'Which of the following is the STRONGEST argument in favor of this product feature?',
    options: [
      'It allows EdSmart to charge a 40% premium fee for accessibility-enabled licenses.',
      'It aligns product design with universal accessibility principles, mitigates discrimination liabilities, and prevents false-positive lockouts without diluting exam integrity.',
      'It ensures that neurodivergent students are exempt from taking any examinations.',
      'It eliminates the need for software engineering updates to the core computer vision engine.',
      'It satisfies student unions without requiring actual changes in proctoring behavior.'
    ],
    correctAnswer: 1,
    explanation: 'Option B articulates the compelling strategic and ethical rationale: accessibility accommodations prevent discriminatory algorithmic exclusion, align with global educational equity benchmarks, and reduce operational friction while upholding security standards.',
    year: 'XAT 2024'
  },

  // Caselet 6: BioFuel Agro-Processing & Smallholder Farmer Dilemma (Qs 16-18)
  {
    id: 'xat-2024-dm-q16',
    questionNumber: 16,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Supply Chain Contracts & Price Volatility',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 6: BioFuel India and Sugarcane Farmer Contracts',
    passage: `BioFuel India operates a 150 KLPD ethanol distillery supplying state oil marketing companies (OMCs) under mandatory 20% ethanol blending targets. To ensure steady feedstock, BioFuel India entered into three-year forward supply agreements with 3,500 smallholder sugarcane farmers at a fixed rate of ₹3,150 per metric tonne (MT).

A severe regional drought in year two drastically reduces overall sugarcane harvest by 40%. The spot market price for sugarcane surges to ₹4,200 per MT as competing jaggery and sugar mills bid aggressively for available cane.

Consequently, over 60% of contracted farmers begin side-selling their cane to unorganized jaggery crushers for immediate cash, leaving BioFuel India’s distillery running at just 38% capacity. If the distillery fails to deliver contracted ethanol quotas to oil marketing companies, it faces liquidated damages of ₹8 crore and potential blacklisting.

Managing Director Tarun Bedi convenes an emergency executive committee. The legal counsel advises filing police complaints and confiscating tractor trolleys under contract violation clauses.`,
    question: 'Which of the following approaches by Tarun Bedi is MOST likely to secure feedstock supply while maintaining long-term farmer relationships?',
    options: [
      'Execute the legal counsel’s advice: seize farmers’ tractors using local police to deter contract breach.',
      'Announce an immediate drought relief incentive bonus of ₹600 per MT over the contract price, disburse 48-hour electronic payments, and provide subsidized organic fertilizer for the next sowing cycle.',
      'Shut down the distillery indefinitely and sue the state oil marketing companies for setting unrealistic blending targets.',
      'Match the black market spot price of ₹4,200 per MT unconditionally, even if it results in operational insolvency for BioFuel India.',
      'Repudiate all farmer contracts and import raw corn starch from Brazil at exorbitant air freight costs.'
    ],
    correctAnswer: 1,
    explanation: 'Option B represents practical agricultural supply chain diplomacy. Pure coercive legal action against 3,500 local farmers guarantees violent agrarian backlash and permanent loss of supply. A market-adaptive incentive bonus (₹3,750 total) bridges the spot price gap, while rapid digital settlement and fertilizer support re-establishes farmer loyalty.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-dm-q17',
    questionNumber: 17,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Regulatory & OMC Renegotiation',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 6: BioFuel India and Sugarcane Farmer Contracts',
    passage: `Refer to the BioFuel India caselet. Tarun Bedi meets the joint procurement committee of the public sector Oil Marketing Companies (OMCs) to discuss the raw material cost surge caused by regional drought.`,
    question: 'Which argument presented by Tarun is MOST likely to persuade OMCs to grant price relief or delivery extensions?',
    options: [
      'Insist that OMCs have infinite state funds and should cover all private sector losses without question.',
      'Present meteorological drought declaration notifications from the state revenue department, demonstrate audited cost escalations, and propose utilizing the OMC ethanol price indexation formula linked to Fair & Remunerative Price (FRP) adjustments.',
      'Threaten to stop producing ethanol entirely and leave oil refineries unable to meet national blending mandates.',
      'Claim that BioFuel India’s management has high-level political connections that will penalize OMC officers.',
      'Blame the national central bank’s monetary policy for the price of sugarcane.'
    ],
    correctAnswer: 1,
    explanation: 'Option B relies on verified institutional evidence (statutory drought gazettes, audited accounts) and references sanctioned regulatory indexation formulas, providing OMC procurement executives a defensible framework to approve adjustments.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-dm-q18',
    questionNumber: 18,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Strategic Risk Diversification',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 6: BioFuel India and Sugarcane Farmer Contracts',
    passage: `Refer to the BioFuel India caselet. To prevent future vulnerability to single-crop climate shocks, BioFuel India considers investing ₹35 crore to retrofit its distillery for dual-feedstock processing, allowing it to utilize surplus damaged foodgrains (rice/maize) alongside sugarcane molasses.`,
    question: 'Which of the following considerations poses the GREATEST strategic risk to this multi-feedstock diversification?',
    options: [
      'Engineers might need three weeks of training on fermentation enzyme management.',
      'Government policies regarding allocating surplus grain for ethanol fluctuates sharply during inflationary food crises, risking sudden raw material bans.',
      'Distillery factory walls will need fresh coats of paint after retrofitting.',
      'The company website will need to update its mission statement.',
      'Local truck drivers may prefer hauling sugarcane over grain sacks.'
    ],
    correctAnswer: 1,
    explanation: 'Option B highlights the paramount strategic vulnerability in grain-based biofuel: food-versus-fuel regulatory policy risks. In developing economies, foodgrain inflation often prompts governments to abruptly restrict or ban grain diversion for ethanol, stranding heavy capital investments.',
    year: 'XAT 2024'
  },

  // Caselet 7: UrbanNest Co-Living Safety & Community Conflict (Qs 19-21)
  {
    id: 'xat-2024-dm-q19',
    questionNumber: 19,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Resident Safety & Resident Association Relations',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 7: UrbanNest Co-Living and Resident Welfare Association',
    passage: `UrbanNest operates a 120-bed premium co-living property in a quiet residential enclave in Gurugram, housing young IT, consulting, and finance professionals. The property operates in a standalone building leased from an NRI owner with commercial guest-house municipal approvals.

The neighboring Resident Welfare Association (RWA), consisting mostly of senior citizen homeowners, submits an ultimatum to the local municipal council and police:
- Complaining about late-night food deliveries, ride-share cab honking between 11 PM and 3 AM, and young residents smoking outside property gates.
- Demanding a strict 10 PM entry curfew for all UrbanNest tenants, mandatory police verification stamped on tenant identity badges, and closure of the property's rooftop lounge.

Three female residents of UrbanNest write an open petition to UrbanNest management stating that many of them work US/UK client shifts returning home at 1 AM, and any patriarchal 10 PM curfew violates their personal liberty, safety, and tenancy agreement.`,
    question: 'Which of the following actions by UrbanNest management BEST navigates this neighborhood dispute?',
    options: [
      'Impose the RWA’s 10 PM curfew immediately and lock out any resident who returns late.',
      'Create a designated indoor soundproofed common lounge and rear-gate drop-off zone, station a round-the-clock private security marshal to eliminate street noise and gate idling, and hold a mediated monthly coordination meeting with RWA elders.',
      'Organize a noisy retaliatory street protest with residents outside the RWA president’s home.',
      'Evict all female residents who work night shifts to avoid controversy.',
      'Bribe local beat constables to harass RWA members into silence.'
    ],
    correctAnswer: 1,
    explanation: 'Option B directly addresses the legitimate civic complaints (street noise, late-night cabs, gate congregation) through physical reconfiguration and active security management without infringing upon the constitutional liberties and contractual rights of working professionals.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-dm-q20',
    questionNumber: 20,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Security Protocol & Tenant Autonomy',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 7: UrbanNest Co-Living and Resident Welfare Association',
    passage: `Refer to the UrbanNest caselet. A male resident hosts five unregistered non-resident friends in his studio unit at 2 AM on a Tuesday, playing loud music and disturbing floor neighbors. When the night security guard knocks, the resident aggressively shouts: "I pay ₹38,000 rent per month and I can host whoever I want in my private room!"`,
    question: 'How should UrbanNest property management handle this specific disciplinary incident?',
    options: [
      'Ignore the incident because the resident is a high-paying premium tenant.',
      'Physically assault the guest and throw the resident’s luggage into the street immediately.',
      'Issue an official written notice citing the lease agreement’s guest hours and quiet-hours policy, impose the stipulated contract violation fine, and inform the tenant that repeat offenses will lead to lease termination and deposit forfeiture.',
      'Ban all visitors permanently for all 120 residents of the building.',
      'Call national media and post the resident’s personal details on social media forums.'
    ],
    correctAnswer: 2,
    explanation: 'Option C enforces contractually documented community guidelines in a proportionate, legally binding manner: formal notice, contractual financial penalty, and explicit notice of eviction consequences upon recidivism.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-dm-q21',
    questionNumber: 21,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Brand Building & Community Integration',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet 7: UrbanNest Co-Living and Resident Welfare Association',
    passage: `Refer to the UrbanNest caselet. UrbanNest wants to establish enduring goodwill with the senior citizen neighborhood community rather than merely managing conflicts reactively.`,
    question: 'Which of the following initiatives would MOST effectively foster positive community integration?',
    options: [
      'Host free weekend digital literacy and smartphone workshops conducted by tech-savvy residents for senior citizen neighbors, paired with maintaining neighborhood green parks through UrbanNest’s gardening staff.',
      'Offer senior citizens free loud music concerts on the UrbanNest rooftop terrace every Friday night.',
      'Install high-decibel surveillance alarms along the boundary wall facing neighboring bungalows.',
      'Send legal notices to every homeowner demanding that they stay inside their homes after dark.',
      'Offer to buy every property in the entire neighborhood above market rates.'
    ],
    correctAnswer: 0,
    explanation: 'Option A bridges demographic divides constructively through reciprocal value creation: young residents share valuable modern digital skills with senior neighbors while company resources maintain neighborhood infrastructure (parks), turning erstwhile adversaries into community allies.',
    year: 'XAT 2024'
  }
];
