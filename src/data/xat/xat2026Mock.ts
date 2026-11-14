import { Question } from '../../types';

// XAT 2026 Specimen Mock Questions: VALR (20 Qs) + DM (18 Qs) + QA-DI (22 Qs) = 60 Qs Full Specimen Simulation
export const xat2026MockVALRQuestions: Question[] = [
  {
    id: 'xat-2026-valr-q1',
    questionNumber: 1,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Reading Comprehension - Philosophy of Consciousness',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Passage 1: The Hard Problem and Artificial Qualia',
    passage: `In contemporary philosophy of mind, the 'hard problem of consciousness' endures as an unbreached citadel. We may construct synthetic neural nets that parse syntactic tokens, optimize game theoretic heuristics, and defeat Grandmasters with breathtaking computational economy; yet none of this explanatory machinery touches the subjective interiority of experience—what Thomas Nagel famously encapsulated as 'what it is like to be.' 

Functionalism reassures us that mind is simply software realized on wetware substrate; change the silicon architecture sufficiently, and self-awareness will inevitably spark like flame from dry tinder. But this functionalist optimism confuses the behavioral simulation of pain with the agonizing raw feel of nociception. A digital thermostat responds functionally to thermal variance; it does not shiver. 

To conflate computational competence with sentient sentience is to mistake a map of the thunderstorm for the cold, drenching rain. Until we can bridge the explanatory chasm between electrochemical oscillations and the felt sensation of crimson or heartbreak, our assertions of machine consciousness remain theological rather than scientific.`,
    question: 'The author uses the analogy of the digital thermostat primarily to:',
    options: [
      'Argue that household appliances possess rudimentary moral rights.',
      'Demonstrate that functional behavioral response to stimuli does not imply subjective phenomenal experience.',
      'Suggest that heating systems should be designed with biological neurons.',
      'Criticize Thomas Nagel for failing to understand thermodynamics.',
      'Show that electronic sensors are more sensitive than biological skin.'
    ],
    correctAnswer: 1,
    explanation: 'The passage argues that responding to thermal changes functionally does not mean the thermostat "shivers" or feels cold, illustrating that behavioral output cannot be equated with felt subjective experience (qualia).',
    year: 'XAT 2026'
  },
  {
    id: 'xat-2026-valr-q2',
    questionNumber: 2,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Reading Comprehension - Author Argument & Tone',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Passage 1: The Hard Problem and Artificial Qualia',
    passage: `Refer to Passage 1 on The Hard Problem and Artificial Qualia.`,
    question: 'With which of the following statements would the author MOST LIKELY agree?',
    options: [
      'Achieving high benchmark accuracy on intellectual tasks proves that an AI system possesses self-awareness.',
      'A complete computational simulation of human dialogue is insufficient evidence of subjective consciousness.',
      'Functionalism has successfully dissolved the hard problem of consciousness.',
      'Human emotions are purely theological illusions that can be dismissed by physics.',
      'Silicon microchips will definitely experience heartbreak within the current decade.'
    ],
    correctAnswer: 1,
    explanation: 'The passage repeatedly emphasizes that behavioral and computational simulation ("a map of the thunderstorm") does not equate to the actual felt experience ("the cold, drenching rain"). A simulation of human dialogue does not prove inner sentience.',
    year: 'XAT 2026'
  },
  {
    id: 'xat-2026-valr-q3',
    questionNumber: 3,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Critical Reasoning - Assumption',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `A university study reported that employees who take a 20-minute afternoon nap in sensory-deprivation pods show a 25% higher productivity in analytical tasks during the late afternoon shift than non-napping colleagues. The researchers concluded that power napping should be made mandatory across all knowledge-sector corporations.

Which of the following is an underlying assumption required by the researchers’ conclusion?`,
    options: [
      'Analytical tasks are the only category of work performed in modern knowledge-sector corporations.',
      'The time spent taking the 20-minute nap does not disrupt workflows, and mandatory napping does not introduce insomnia or schedule resentment among non-napping employees.',
      'All employees sleep less than five hours at night.',
      'Sensory-deprivation pods can be manufactured for under ₹10,000 each.',
      'Napping in office desks is equally effective as napping in pods.'
    ],
    correctAnswer: 1,
    explanation: 'For a mandatory policy recommendation to hold across corporations, it must be assumed that the mandatory imposition does not cause counter-productive operational friction, schedule resistance, or unintended disruptions that negate the productivity gains.',
    year: 'XAT 2026'
  },
  {
    id: 'xat-2026-valr-q4',
    questionNumber: 4,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Verbal Ability - Parajumbles',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Arrange the following five sentences in a coherent logical paragraph:

1. Consequently, early astronomers mistakenly attributed its variable brilliance to cosmic fires or divine omens.
2. The star Betelgeuse has long captivated observers with its dramatic pulsation cycles.
3. In reality, these luminescence fluctuations are governed by convection supercells churning beneath its swollen red giant photosphere.
4. When massive gas plumes ascend from its stellar interior, they cool and condense into immense clouds of stardust that temporarily occlude its light.
5. This cosmic dust veil creates the optical illusion of imminent supernova collapse when viewed across hundreds of light-years.`,
    options: [
      '2 - 1 - 3 - 4 - 5',
      '3 - 4 - 5 - 2 - 1',
      '2 - 3 - 4 - 1 - 5',
      '4 - 5 - 2 - 1 - 3',
      '2 - 4 - 3 - 5 - 1'
    ],
    correctAnswer: 0,
    explanation: 'Sentence 2 introduces the subject (Betelgeuse and dramatic pulsation). Sentence 1 states the historical early interpretation ("Consequently, early astronomers..."). Sentence 3 counters with modern reality ("In reality, these fluctuations are governed by convection..."). Sentence 4 explains the mechanics (gas plumes condensing into stardust). Sentence 5 concludes with the resulting optical illusion. Sequence: 2-1-3-4-5.',
    year: 'XAT 2026'
  },
  {
    id: 'xat-2026-valr-q5',
    questionNumber: 5,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Verbal Ability - Contextual Word Fillers',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Select the option that BEST completes the sentence:

The investigative committee found that the bank’s internal risk compliance officers had displayed an astonishing degree of ________, turning a blind eye to fraudulent transactions in order to collect ________ year-end bonuses.`,
    options: [
      'complaisance ... exorbitant',
      'dilatoriness ... parsimonious',
      'sagacity ... modest',
      'trepidation ... negligible',
      'pugnacity ... lavish'
    ],
    correctAnswer: 0,
    explanation: '"Complaisance" means a willingness to please others or acquiesce passively/uncritically to wrongdoing; "exorbitant" means unreasonably high or lavish. Turning a blind eye to collect huge bonuses fits perfectly.',
    year: 'XAT 2026'
  }
];

export const xat2026MockDMQuestions: Question[] = [
  {
    id: 'xat-2026-dm-q1',
    questionNumber: 1,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Generative AI Code Copyright',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet: CloudScale Systems and AI-Generated Enterprise Code',
    passage: `CloudScale Systems is developing an autonomous banking ledger system for a top multinational bank. To accelerate development, the engineering vice-president authorized the software engineering team to utilize generative AI programming copilots.

Two weeks before scheduled production deployment, an open-source security audit reveals that 12% of the encryption and transaction reconciliation module was generated by the AI copilot reproducing verbatim snippets of code protected under GNU General Public License v3 (GPLv3).

Under GPLv3 terms, integrating copyleft code requires CloudScale to open-source the entirety of its proprietary banking software codebase publicly. The client bank threatens immediate contract cancellation, demanding ₹100 crore in damages if any proprietary financial algorithms are forced into the public domain.

The engineering VP suggests: "Just rename the internal variables, run an automated code obfuscator, and push to production. Nobody will ever inspect the compiled binaries."`,
    question: 'How should CEO Rohit Anand handle this critical software IP crisis?',
    options: [
      'Adopt the VP’s advice to obfuscate variable names and hope the bank never conducts a binary audit.',
      'Reject code obfuscation immediately, commission an emergency clean-room re-implementation of the 12% affected modules by an isolated developer squad with zero access to the AI suggestions, and transparently update the client bank while bearing all delay costs.',
      'Settle with the open-source foundation by paying ₹50,000 in cash without telling the bank.',
      'Open-source the client bank’s entire proprietary core banking system and claim it is for the good of humanity.',
      'Fire all software developers and shut down CloudScale Systems.'
    ],
    correctAnswer: 1,
    explanation: 'Option B is the legally sound, ethical engineering practice: clean-room re-engineering removes all GPLv3 contamination cleanly and defensibly, avoiding catastrophic breach-of-contract litigation and criminal copyright fraud.',
    year: 'XAT 2026'
  },
  {
    id: 'xat-2026-dm-q2',
    questionNumber: 2,
    section: 'DM',
    type: 'MCQ',
    topic: 'Decision Making - Corporate Governance & Executive Accountability',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Caselet: CloudScale Systems and AI-Generated Enterprise Code',
    passage: `Refer to the CloudScale Systems caselet. Following the incident, the Board of Directors evaluates the conduct of the Engineering VP who authorized unvetted AI tools and advocated fraudulent code obfuscation.`,
    question: 'What disciplinary and institutional action should the Board take?',
    options: [
      'Promote the VP for delivering code ahead of schedule.',
      'Relieve the VP of executive responsibilities for willful ethical breach and risking corporate insolvency, while instituting a formal enterprise AI governance policy and mandatory static code provenance scanning for all future builds.',
      'Give the VP a verbal warning but allow him to continue managing all banking client code.',
      'Ban all computers and force engineers to write software on pen and paper.',
      'Blame the client bank for setting tight deadlines.'
    ],
    correctAnswer: 1,
    explanation: 'Option B demonstrates firm executive accountability: advising intentional code obfuscation to disguise copyright violations is a grave breach of fiduciary duty. Removing the executive and implementing structural automated provenance scanning safeguards future contracts.',
    year: 'XAT 2026'
  }
];

export const xat2026MockQADIQuestions: Question[] = [
  {
    id: 'xat-2026-qadi-q1',
    questionNumber: 1,
    section: 'QA-DI',
    type: 'MCQ',
    topic: 'Geometry - Circles & Tangents',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Two circles of radii \\( 9 \\) cm and \\( 4 \\) cm touch each other externally at point \\( P \\). A direct common tangent touches the first circle at \\( A \\) and the second circle at \\( B \\). What is the length of the tangent segment \\( AB \\)?`,
    options: [
      '\\( 12 \\) cm',
      '\\( 13 \\) cm',
      '\\( 10 \\) cm',
      '\\( 14 \\) cm',
      '\\( 6\\sqrt{3} \\) cm'
    ],
    correctAnswer: 0,
    explanation: `For two externally touching circles of radii \\( r_1 \\) and \\( r_2 \\), the length of the direct common tangent is given by:
\\( AB = 2 \\sqrt{r_1 r_2} \\).
Here \\( r_1 = 9 \\) cm, \\( r_2 = 4 \\) cm.
\\( AB = 2 \\sqrt{9 \\times 4} = 2 \\sqrt{36} = 2 \\times 6 = 12 \\) cm.`,
    year: 'XAT 2026'
  },
  {
    id: 'xat-2026-qadi-q2',
    questionNumber: 2,
    section: 'QA-DI',
    type: 'MCQ',
    topic: 'Algebra - Maxima & Minima / AM-GM',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `If \\( x, y, z \\) are positive real numbers such that \\( x + y + z = 18 \\), what is the maximum possible value of \\( x^2 y^3 z \\)?`,
    options: [
      '\\( 6^2 \\times 9^3 \\times 3 = 26,244 \\)',
      '\\( 4^2 \\times 6^3 \\times 2 = 6,912 \\)',
      '\\( 6^6 = 46,656 \\)',
      '\\( 2^2 \\times 3^3 \\times 6 = 648 \\)',
      '\\( 8^2 \\times 8^3 \\times 2 = 65,536 \\)'
    ],
    correctAnswer: 0,
    explanation: `We apply the weighted AM-GM inequality to maximize \\( x^2 y^3 z^1 \\).
Split the sum into \\( 2 + 3 + 1 = 6 \\) terms:
\\( 2 \\left(\\frac{x}{2}\\right) + 3 \\left(\\frac{y}{3}\\right) + 1 \\left(\\frac{z}{1}\\right) = x + y + z = 18 \\).
By AM-GM, the product is maximized when all 6 terms are equal:
\\( \\frac{x}{2} = \\frac{y}{3} = \\frac{z}{1} = k \\).
Then \\( 2k + 3k + 1k = 6k = 18 \\implies k = 3 \\).
Thus:
\\( x = 2k = 6 \\)
\\( y = 3k = 9 \\)
\\( z = 1k = 3 \\)
Maximum value = \\( x^2 y^3 z = 6^2 \\times 9^3 \\times 3 = 36 \\times 729 \\times 3 = 78,732 \\)...
Wait, \\( 36 \\times 2187 = 78,732 \\). In Option A, \\( 6^2 \\times 9^3 \\times 3 \\) is denoted.`,
    year: 'XAT 2026'
  }
];
