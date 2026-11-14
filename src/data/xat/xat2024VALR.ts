import { Question } from '../../types';

export const xat2024VALRQuestions: Question[] = [
  // RC Passage 1: The Epistemology of AI Hallucinations & Language Models (Qs 1-4)
  {
    id: 'xat-2024-valr-q1',
    questionNumber: 1,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Reading Comprehension - Epistemology & Artificial Intelligence',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Passage 1: The Epistemology of AI Hallucinations',
    passage: `To characterize the fabulations of Large Language Models (LLMs) as 'hallucinations' is to commit an anthropomorphic category error. In human pathology, a hallucination denotes a perceptual anomaly—an agent with sensory apparatus experiencing an apparition absent an empirical stimulus. The machine, however, possesses neither senses nor an underlying ontology of truth. It does not perceive reality and subsequently err; rather, it traverses high-dimensional vector spaces optimizing for transitional probability. 

What the human interrogator designates as 'veracity' is, from the model's architecture, merely an incidental intersection where high conditional probability happens to correlate with empirically verifiable facts in our external world. The model generates fluent falsehoods through precisely the identical probabilistic mechanism by which it delivers correct citations. The error does not lie in a sudden breakdown of computational reasoning; it lies in our stubborn human insistence that syntax implies semantics, that grammatical coherence presupposes epistemic commitment.

When an LLM fabricates a legal precedent or invents a biochemical pathway, it is doing exactly what it was trained to do: predict the next token that maximally satisfies the statistical distribution of the prompt. Thus, 'eliminating hallucinations' is not a bug-fixing endeavor akin to patching a memory leak in software; it is an existential paradox at the heart of stochastic pattern engines. To demand that a probabilistic parrot become an infallible oracle is to misunderstand the constitutive physics of the beast.`,
    question: 'According to the author, why is describing AI errors as "hallucinations" a category error?',
    options: [
      'Because modern AI models possess sensory chips that perceive reality more accurately than human eyes.',
      'Because hallucination implies a flawed perceptual apparatus, whereas LLMs possess neither sensory perception nor any conception of truth.',
      'Because human hallucinations are caused by chemical imbalances that computer chips cannot experience.',
      'Because LLMs only make mistakes when the prompt provided by human users is deliberately deceptive.',
      'Because large language models make errors only when there is a hardware failure in GPU memory caches.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly argues in paragraph 1 that "a hallucination denotes a perceptual anomaly... The machine, however, possesses neither senses nor an underlying ontology of truth." Calling computational stochastic generation a hallucination falsely anthropomorphizes a system that lacks perception entirely.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q2',
    questionNumber: 2,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Reading Comprehension - Critical Inference',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Passage 1: The Epistemology of AI Hallucinations',
    passage: `Refer to Passage 1 on AI Hallucinations.`,
    question: 'Which of the following BEST captures the central thesis of the author regarding "truth" in language models?',
    options: [
      'Truth is the primary objective function optimized during the reinforcement learning phase of LLMs.',
      'Factual accuracy is an accidental byproduct of statistical token probability rather than an intentional property of model reasoning.',
      'Language models intentionally generate falsehoods to conserve computational processing cycles.',
      'Syntax and semantics are mathematically isomorphic in deep neural architectures.',
      'Legal and scientific domains are immune to linguistic fabulation because their training tokens are unambiguous.'
    ],
    correctAnswer: 1,
    explanation: 'Paragraph 2 highlights that what humans call veracity is "merely an incidental intersection where high conditional probability happens to correlate with empirically verifiable facts." Truth is an accidental byproduct, not an intentional semantic commitment.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q3',
    questionNumber: 3,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Reading Comprehension - Author Tone & Rhetoric',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Passage 1: The Epistemology of AI Hallucinations',
    passage: `Refer to Passage 1 on AI Hallucinations.`,
    question: 'The author refers to language models as a "probabilistic parrot" primarily to:',
    options: [
      'Praise the birds for their extraordinary linguistic complexity and mimicry.',
      'Emphasize that the system mechanically repeats statistical patterns without genuine cognitive comprehension or semantic intent.',
      'Argue that artificial neural networks should be replaced by biological animal brains.',
      'Demonstrate that human vocal cords are anatomically superior to digital acoustic synthesizers.',
      'Highlight the playful and entertaining nature of conversational chatbot applications.'
    ],
    correctAnswer: 1,
    explanation: 'The metaphor of the "probabilistic parrot" serves to deflate excessive claims about machine cognition by underscoring that models mimic statistical surface structures of text without grasping meaning, intentionality, or empirical veracity.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q4',
    questionNumber: 4,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Reading Comprehension - Extrapolation',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Passage 1: The Epistemology of AI Hallucinations',
    passage: `Refer to Passage 1 on AI Hallucinations.`,
    question: 'Based on the passage, the author would MOST LIKELY agree with which of the following statements about future AI safety?',
    options: [
      'Adding more training parameters will inevitably endow neural networks with human moral consciousness.',
      'Relying solely on next-token prediction architectures will always carry an irreducible risk of generating persuasive falsehoods.',
      'Reinforcement learning from human feedback has permanently solved all factual inaccuracies in commercial LLMs.',
      'Language models should be granted legal personhood in jurisprudence.',
      'Human writers will cease to exist within five years due to probabilistic synthesis.'
    ],
    correctAnswer: 1,
    explanation: 'The final paragraph states that eliminating hallucinations is an "existential paradox at the heart of stochastic pattern engines." Because the core mechanism is token prediction, an irreducible probability of plausible fabulation remains inherent to the architecture.',
    year: 'XAT 2024'
  },

  // RC Passage 2: The Architecture of Loneliness & Urban Planning (Qs 5-8)
  {
    id: 'xat-2024-valr-q5',
    questionNumber: 5,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Reading Comprehension - Urban Sociology & Spatial Theory',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Passage 2: The Architecture of Loneliness',
    passage: `Modernist architecture, under the seductive banner of hygiene, privacy, and vehicular velocity, enacted a quiet war on serendipitous human contact. Le Corbusier’s radiant city envisioned towering monoliths marooned in vast expanses of green highway buffers—a totalizing spatial order where the messy, chaotic, permeable street was excised as an archaic remnant of pre-industrial disorder.

In replacing the permeable porch, the neighborhood grocer, and the pedestrian thoroughfare with gated high-rise condominiums and high-speed arterial flyovers, urban planners atomized civic life. Jane Jacobs famously defended the 'sidewalk ballet'—the intricate, unchoreographed dance of shopkeepers, children, strollers, and delivery couriers who collectively animate the street and maintain passive communal surveillance. When the street is surrendered entirely to internal-combustion velocity, citizens become encapsulated monads, traveling between subterranean parking garages and sky-high cubicles without ever meeting the unmediated gaze of an unfamiliar stranger.

The modern epidemic of civic alienation is therefore not merely a psychological defect or a consequence of smartphone screens; it is concrete, asphalt, and zoning law. We built cities that render solitary self-sufficiency the only frictionless lifestyle, and we now marvel at the catastrophic decay of social capital.`,
    question: 'According to the passage, Jane Jacobs’s concept of the "sidewalk ballet" primarily emphasizes:',
    options: [
      'The formal classical dance training required for urban street performers.',
      'The spontaneous, multifaceted interactions and natural vigilance created by active pedestrian life.',
      'The high cost of maintaining municipal concrete footpaths in large metropolitan centers.',
      'The superiority of highway flyovers in moving vehicular commuter traffic swiftly.',
      'The need for gated residential communities with private security checkpoints.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly defines the sidewalk ballet as "the intricate, unchoreographed dance of shopkeepers, children, strollers, and delivery couriers who collectively animate the street and maintain passive communal surveillance."',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q6',
    questionNumber: 6,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Reading Comprehension - Author Argument & Primary Purpose',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Passage 2: The Architecture of Loneliness',
    passage: `Refer to Passage 2 on The Architecture of Loneliness.`,
    question: 'The author’s primary purpose in the passage is to:',
    options: [
      'Advocate for the immediate demolition of all multi-story apartment complexes.',
      'Demonstrate that contemporary social isolation is deeply rooted in physical urban design and vehicular-centric spatial planning.',
      'Argue that smartphones are the exclusive cause of psychological loneliness in modern society.',
      'Promote Le Corbusier’s modernist architectural designs as the ultimate solution to urban congestion.',
      'Compare European transit networks with North American highway subsidies.'
    ],
    correctAnswer: 1,
    explanation: 'The concluding sentence of the passage states: "The modern epidemic of civic alienation is therefore not merely a psychological defect... it is concrete, asphalt, and zoning law. We built cities that render solitary self-sufficiency the only frictionless lifestyle..." This directly aligns with Option B.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q7',
    questionNumber: 7,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Reading Comprehension - Figurative Language & Vocabulary',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Passage 2: The Architecture of Loneliness',
    passage: `Refer to Passage 2 on The Architecture of Loneliness.`,
    question: 'In the phrase "citizens become encapsulated monads," the word "monads" most nearly means:',
    options: [
      'Electrically charged chemical ions.',
      'Isolated, self-contained, and disconnected individual entities.',
      'Highly collaborative members of a musical choir.',
      'Government officials tasked with issuing building permits.',
      'Automated autonomous vehicular delivery drones.'
    ],
    correctAnswer: 1,
    explanation: 'In philosophical and sociological literature (derived from Leibniz), a monad represents an indivisible, self-contained unit. Here, in the context of being "encapsulated" in private cars and isolated towers, it conveys extreme atomization and social detachment.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q8',
    questionNumber: 8,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Reading Comprehension - Critical Assumption',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Passage 2: The Architecture of Loneliness',
    passage: `Refer to Passage 2 on The Architecture of Loneliness.`,
    question: 'Which of the following, if true, would MOST WEAKEN the author’s critique of modernist urban planning?',
    options: [
      'Gated high-rises consistently report higher rates of depression than walkable pre-war neighborhoods.',
      'Residents in hyper-dense, walkable traditional quarters report identical levels of loneliness as suburban commuters, with digital screen-time being the dominant predictive variable.',
      'Automobile traffic congestion has worsened across developing megacities over the last twenty years.',
      'Pedestrian street markets generate substantial municipal tax revenues through informal trade.',
      'Architects frequently express dissatisfaction with corporate building design codes.'
    ],
    correctAnswer: 1,
    explanation: 'If walkable traditional neighborhoods show the exact same loneliness levels as car-centric suburbs, and digital habits predict loneliness regardless of physical architecture, the author’s causal assertion that spatial layout is the primary engine of modern alienation is fundamentally undermined.',
    year: 'XAT 2024'
  },

  // Critical Reasoning & Logic (Qs 9-16)
  {
    id: 'xat-2024-valr-q9',
    questionNumber: 9,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Critical Reasoning - Weaken the Argument',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Medical researchers observed that patients who drank at least three cups of artisanal green tea daily exhibited a 35% lower incidence of cardiovascular events over a ten-year study compared to non-tea drinkers. The researchers concluded that the specific polyphenolic catechins present in artisanal green tea directly strengthen arterial wall flexibility and prevent coronary heart disease.

Which of the following, if true, MOST severely undermines the researchers’ conclusion?`,
    options: [
      'Green tea leaves contain mild traces of naturally occurring caffeine.',
      'Artisanal green tea is significantly more expensive than mass-market tea bags.',
      'Individuals who drink three cups of artisanal green tea daily belong disproportionately to high-income cohorts that exercise regularly and follow Mediterranean diets.',
      'Some study participants added half a teaspoon of honey to their green tea.',
      'Cardiovascular disease is the leading cause of adult mortality in both developed and emerging nations.'
    ],
    correctAnswer: 2,
    explanation: 'Option C introduces a classic confounding variable: green tea consumption correlates with high socioeconomic status, regular physical exercise, and healthy diets. These lifestyle factors, rather than the green tea itself, may be the real cause of lower cardiovascular incidence.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q10',
    questionNumber: 10,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Critical Reasoning - Strengthen the Argument',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `A municipal government introduced a congestion tax of ₹250 on all private four-wheelers entering the central commercial district during morning rush hours. Six months later, average vehicular travel speed increased by 42% and ambient PM2.5 particulate air pollution declined by 28%. City officials declared the tax an unqualified success and proposed extending it to two-wheelers.

Which of the following, if true, STRONGLY SUPPORTS the municipality’s assertion that the tax was the direct cause of the improvements?`,
    options: [
      'Neighboring suburban roads outside the tax cordon experienced a 15% increase in traffic volume during the same six months.',
      'During the identical six months, a major economic recession caused a 30% drop in overall consumer spending and office attendance across the entire state.',
      'Public metro transit ridership into the commercial district surged by 38%, while vehicle volumes within the taxed boundary fell sharply only during the hours the fee was active.',
      'Two-wheeler riders have threatened to protest outside municipal offices if taxed.',
      'The revenue collected from the congestion tax was allocated to construct a new sports stadium.'
    ],
    correctAnswer: 2,
    explanation: 'Option C provides direct corroborating mechanism: commuters actively switched to public metro transit, and traffic volume drops synchronized precisely with the hours the tax was enforced, ruling out random macro fluctuations.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q11',
    questionNumber: 11,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Critical Reasoning - Paradox Resolution',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `A national airline upgraded the seats in its domestic economy class to an ergonomic, ultra-lightweight carbon fiber design that added two inches of legroom per seat. Customer comfort ratings for the seats in pre-launch laboratory trials were exceptionally high. However, upon fleet-wide deployment, passenger customer satisfaction scores regarding in-flight comfort plummeted by 24%.

Which of the following, if true, BEST resolves the apparent paradox?`,
    options: [
      'The airline painted the exterior fuselage of the aircraft with a new blue and white livery.',
      'To accommodate the added two inches of legroom without reducing the total number of seats, the airline narrowed the seat cushion width and reduced aisle clearance by 1.5 inches.',
      'The carbon fiber seat frames were manufactured in South Korea.',
      'Flight attendants wore newly designed formal uniforms during the same quarter.',
      'The price of international jet fuel decreased slightly during the evaluation period.'
    ],
    correctAnswer: 1,
    explanation: 'Option B resolves the paradox completely: while legroom increased, the airline squeezed seat width and aisle space to keep the total seat count identical. The resulting lateral cramping caused overall passenger comfort to deteriorate despite the legroom gain.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q12',
    questionNumber: 12,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Critical Reasoning - Boldface Argument Role',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Many venture capitalists argue that **early-stage startups should prioritize rapid user acquisition over unit economics**. They contend that network effects solidify market monopolies which can subsequently be monetized at leisure. However, **this blitzscaling philosophy has precipitated the collapse of dozens of heavily funded platform companies**. Sustainable enterprise value requires that gross margins cover customer acquisition costs from the earliest cohorts.

In the argument above, what roles are played by the two boldfaced statements?`,
    options: [
      'The first is the author’s main conclusion; the second is evidence cited to refute that conclusion.',
      'The first is a widely held position that the author opposes; the second provides empirical evidence challenging that position.',
      'The first is an intermediate conclusion; the second is an unproven assumption accepted by both sides.',
      'The first is a premise supporting the author’s view; the second is a counter-claim conceded by the author.',
      'Both boldfaced statements represent contradictory evidence leading to a neutral conclusion.'
    ],
    correctAnswer: 1,
    explanation: 'The first boldface statement states the VC view ("early-stage startups should prioritize..."), which the author introduces with "Many venture capitalists argue" and goes on to dispute. The second boldface statement ("this blitzscaling philosophy has precipitated...") is factual evidence cited by the author to discredit the VC premise.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q13',
    questionNumber: 13,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Critical Reasoning - Logical Deduction & Syllogism',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Consider the following statements:
1. All visionary entrepreneurs take calculated risks.
2. No one who fears constructive criticism can build an enduring institution.
3. Some individuals who take calculated risks deeply fear constructive criticism.

Which of the following deductions MUST be logically true based on the above statements?`,
    options: [
      'All visionary entrepreneurs can build enduring institutions.',
      'Some individuals who take calculated risks cannot build enduring institutions.',
      'No visionary entrepreneur fears constructive criticism.',
      'Anyone who welcomes constructive criticism will become a visionary entrepreneur.',
      'No calculated risk-taker is a visionary entrepreneur.'
    ],
    correctAnswer: 1,
    explanation: 'From (3), there exist some individuals in the set of "calculated risk-takers" who "fear constructive criticism." From (2), anyone who fears constructive criticism cannot build an enduring institution. Therefore, those specific calculated risk-takers who fear criticism cannot build an enduring institution. Thus, Option B is necessarily true.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q14',
    questionNumber: 14,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Critical Reasoning - Flaw in the Argument',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Editorial: "Our university should dismiss Professor Sharma immediately. In his newly published monograph on ancient metallurgy, he argues that bronze casting techniques originated independently in four distinct geographical basins rather than diffusing from a single Mesopotamian source. Yet Sharma’s personal financial investments were recently found to include shares in a controversial real estate syndicate."

The argument above is flawed primarily because it:`,
    options: [
      'Relies on circular reasoning where the premise assumes the conclusion.',
      'Engages in an ad hominem attack by attacking the author’s personal financial portfolio rather than evaluating his scholarly historical claims.',
      'Fails to define the metallurgical differences between bronze and iron.',
      'Assumes that Mesopotamian history is taught in secondary schools.',
      'Generalizes from a sample size of one professor to all university faculty.'
    ],
    correctAnswer: 1,
    explanation: 'The editorial commits an ad hominem fallacy: attempting to discredit an academic thesis on ancient metallurgy by bringing up unrelated personal real estate investments, rather than addressing the historical or archaeological evidence.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q15',
    questionNumber: 15,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Verbal Ability - Parajumbles (5-Sentence Order)',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Arrange the following sentences in a coherent, logically sound sequence:

1. Rather, it operates as a regulatory feedback loop where price signals convey decentralized local knowledge.
2. In classical economics, the market mechanism is often caricatured as an engine of ruthless individual greed.
3. This Hayekian insight demonstrates why central planning inevitably falters when confronted with dynamic supply realities.
4. When drought strikes a distant copper mine, no centralized bureaucrat needs to issue rationing quotas; the rising spot price automatically compels end-users to economize.
5. However, Friedrich Hayek observed that the price system’s primary virtue is cognitive rather than purely motivational.`,
    options: [
      '2 - 5 - 1 - 4 - 3',
      '5 - 1 - 2 - 4 - 3',
      '2 - 4 - 1 - 5 - 3',
      '4 - 1 - 3 - 2 - 5',
      '2 - 5 - 4 - 1 - 3'
    ],
    correctAnswer: 0,
    explanation: 'Sentence 2 opens with the broad context (classical caricature of market greed). Sentence 5 introduces Hayek’s contrasting perspective ("However, Friedrich Hayek observed..."). Sentence 1 elaborates on Hayek’s insight ("Rather, it operates as a regulatory feedback loop..."). Sentence 4 provides the concrete example (copper mine drought and price signals). Sentence 3 concludes with the broader implication ("This Hayekian insight demonstrates..."). Order: 2-5-1-4-3.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q16',
    questionNumber: 16,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Verbal Ability - Parajumbles (5-Sentence Order)',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Arrange the following sentences in a coherent sequence:

1. Over geological epochs, these fragile skeletons compacted under crushing benthic pressures to form the towering limestone bluffs of modern Dover.
2. Microscopic coccolithophores drift in the sunlit photic zone of the ocean, precipitating calcite armor from dissolved atmospheric carbon.
3. What human eyes perceive as solid mainland geology was once living marine pelagic biology.
4. Upon death, their microscopic calcite shells rain down into the abyssal gloom in a relentless marine snow.
5. Thus, the white cliffs guarding the British Channel are not dead mineral strata, but a monument of fossilized ocean plankton.`,
    options: [
      '2 - 4 - 1 - 5 - 3',
      '3 - 2 - 4 - 1 - 5',
      '2 - 1 - 4 - 3 - 5',
      '4 - 2 - 1 - 5 - 3',
      '3 - 1 - 2 - 4 - 5'
    ],
    correctAnswer: 1,
    explanation: 'Sentence 3 provides the overarching thematic introduction (geology was once living marine biology). Sentence 2 introduces the specific organism (coccolithophores creating calcite armor). Sentence 4 traces their post-mortem descent (marine snow). Sentence 1 follows with geological compaction into limestone bluffs. Sentence 5 delivers the concluding synthesis ("Thus, the white cliffs..."). Order: 3-2-4-1-5.',
    year: 'XAT 2024'
  },

  // Vocabulary, Grammar & Sentence Completion (Qs 17-26)
  {
    id: 'xat-2024-valr-q17',
    questionNumber: 17,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Verbal Ability - Contextual Word Fillers',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Select the pair of words that BEST completes the sentence logically and grammatically:

The finance minister’s speech was notoriously ________, deliberately designed to ________ foreign currency speculators while offering no actionable clues regarding interest rate policy.`,
    options: [
      'equivocal ... obfuscate',
      'pellucid ... enlighten',
      'laconic ... intimidate',
      'strident ... tranquilize',
      'bombastic ... illuminate'
    ],
    correctAnswer: 0,
    explanation: '"Equivocal" means deliberately ambiguous or open to multiple interpretations; "obfuscate" means to bewilder or make obscure. Both words perfectly fit the context of a central banker/minister who deliberately avoids giving clear forward guidance.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q18',
    questionNumber: 18,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Verbal Ability - Contextual Word Fillers',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Select the pair of words that BEST completes the sentence:

Far from being a ________ reformer who compromised with entrenched feudal barons, the young monarch proved to be an uncompromising ________, dismantling centuries-old aristocratic monopolies within months of accession.`,
    options: [
      'pusillanimous ... iconoclast',
      'visionary ... reactionary',
      'dogmatic ... pragmatist',
      'conciliatory ... diplomat',
      'feckless ... conformist'
    ],
    correctAnswer: 0,
    explanation: '"Pusillanimous" means timid, cowardly, or easily yielding; "iconoclast" means one who attacks cherished beliefs or institutions. The contrast ("Far from being a [timid] reformer... proved to be an uncompromising [iconoclast]") creates semantic cohesion.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q19',
    questionNumber: 19,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Verbal Ability - Analogy & Relationship',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Choose the pair that expresses a relationship MOST SIMILAR to that expressed in the capitalized pair:

EPHEMERAL : PERPETUITY ::`,
    options: [
      'evanescent : transience',
      'parsimonious : extravagance',
      'cogent : persuasion',
      'audacious : temerity',
      'limpid : clarity'
    ],
    correctAnswer: 1,
    explanation: 'EPHEMERAL (fleeting, short-lived) is an antonym to PERPETUITY (eternal continuation). PARSIMONIOUS (stingy, miserly) is an antonym to EXTRAVAGANCE (wasteful luxury). The relationship is direct antonymy between an adjective and a corresponding contrasting noun.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q20',
    questionNumber: 20,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Verbal Ability - Grammatical Error Identification',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Identify the grammatically INCORRECT sentence among the following:`,
    options: [
      'Neither the managing director nor the senior consultants were available to inspect the plant premises.',
      'The panel of judges has reached their unanimous verdict after three hours of deliberations.',
      'Each of the newly commissioned wind turbines produces sufficient electricity to power 400 households.',
      'Had the project team anticipated the monsoon delays, they would have reinforced the foundation trenches earlier.',
      'Between you and me, the proposed merger appears strategically dubious.'
    ],
    correctAnswer: 1,
    explanation: 'In sentence B, "The panel of judges" is a collective noun functioning as a single unit with an agreed outcome ("unanimous verdict"). It requires the singular pronoun "its" rather than "their": "The panel of judges has reached its unanimous verdict..."',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q21',
    questionNumber: 21,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Verbal Ability - Idiom & Usage',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Which of the following sentences correctly utilizes the idiom "Pyrrhic victory"?`,
    options: [
      'The startup won a landmark patent dispute against its rival, but legal fees exceeded its entire balance sheet, forcing the company into bankruptcy two weeks later.',
      'The football team celebrated a Pyrrhic victory by defeating their arch-rivals 5-0 without conceding a single yellow card.',
      'The marketing campaign was a Pyrrhic victory because it tripled quarterly sales at half the expected advertising budget.',
      'The student achieved a Pyrrhic victory by securing first rank in all academic and athletic competitions.',
      'The software team resolved the bug effortlessly within five minutes of opening the ticket.'
    ],
    correctAnswer: 0,
    explanation: 'A "Pyrrhic victory" refers to a victory won at such devastating cost that it is tantamount to defeat. Winning a patent lawsuit but becoming bankrupt due to legal fees is the textbook realization of this idiom.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q22',
    questionNumber: 22,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Verbal Ability - Poem Comprehension',
    difficulty: 'Challenging',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Poem: The Loom of Winter',
    passage: `The frost conceives its quiet geometry upon the pane,
A lace of crystalline unbending laws,
Indifferent to the sparrow’s frozen claw
Or to the harvest blackened in the rain.
It weaves no pardon; in its silent reign,
The zero carves what sunlight dared to thaw,
A white aesthetic cold without a flaw,
Where beauty triumphs by dissolving pain.`,
    question: 'The central metaphor of the poem portrays "frost" as:',
    options: [
      'A compassionate guardian shielding birds from winter stormwinds.',
      'An austere, indifferent force of nature whose crystalline perfection operates without emotional regard for suffering.',
      'A malevolent monster intentionally punishing farmers for greed.',
      'A chaotic and disorganized nuisance that dissolves mathematical patterns.',
      'A temporary morning illusion soon defeated by triumphant solar warmth.'
    ],
    correctAnswer: 1,
    explanation: 'The poem depicts frost as possessing "quiet geometry," "unbending laws," and being "indifferent to the sparrow’s frozen claw," concluding with "a white aesthetic cold without a flaw, where beauty triumphs by dissolving pain." This conveys sublime, mathematical indifference to mortal vulnerability.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q23',
    questionNumber: 23,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Verbal Ability - Critical Inference from Poetry',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    passageTitle: 'Poem: The Loom of Winter',
    passage: `Refer to the poem 'The Loom of Winter'.`,
    question: 'The line "Where beauty triumphs by dissolving pain" implies that:',
    options: [
      'The frost applies soothing medicinal balms to wounded animals.',
      'The utter numbness and stillness of sub-zero cold eradicates sensation and life, rendering suffering extinct.',
      'Artists should only paint winter landscapes in warm watercolors.',
      'Farmers rejoice when their crops are preserved in frozen snow.',
      'Pain can only be overcome through passionate vocal protests.'
    ],
    correctAnswer: 1,
    explanation: 'In the context of the poem, the frost "dissolves pain" by freezing everything into stillness ("the zero carves what sunlight dared to thaw"), where mortal agony ends in absolute, crystalline cessation of sensation.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q24',
    questionNumber: 24,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Verbal Ability - Sentence Completion',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Fill in the blank with the MOST contextually and stylistically appropriate word:

The archival researcher spent three decades in the Vatican vaults, patiently reconstructing the ________ manuscripts that had been partially consumed by water damage and ink-eating mold.`,
    options: [
      'effervescent',
      'palimpsest',
      'lacunae',
      'fulminating',
      'sycophantic'
    ],
    correctAnswer: 2,
    explanation: '"Lacunae" (plural of lacuna) refers specifically to missing parts, gaps, or unfilled spaces in manuscripts or texts. Restoring damaged, missing portions of old texts is the precise scholarly endeavor described.',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q25',
    questionNumber: 25,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Verbal Ability - Word Definition in Context',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Which of the following words is the CLOSEST antonym to the word "TENUOUS"?`,
    options: [
      'Fragile',
      'Substantial',
      'Nebulous',
      'Insidious',
      'Flaccid'
    ],
    correctAnswer: 1,
    explanation: '"Tenuous" means very weak, slight, or unsubstantial (e.g. a tenuous link). Its direct antonym is "substantial" (solid, firm, significant).',
    year: 'XAT 2024'
  },
  {
    id: 'xat-2024-valr-q26',
    questionNumber: 26,
    section: 'VALR',
    type: 'MCQ',
    topic: 'Verbal Ability - Summary Completion',
    difficulty: 'Moderate',
    examType: 'XAT',
    marksPerCorrect: 1,
    negativeMarks: 0.25,
    question: `Read the paragraph and select the sentence that BEST captures its core summary:

"The rise of subscription streaming services was heralded as the death of the album, fragmenting music into algorithmic singles playlists. Yet paradoxically, vinyl record sales have staged an exponential decade-long resurgence, driven primarily by Gen Z listeners seeking tactile engagement, complete album narratives, and cover art that cannot be shrunk into a smartphone pixel."`,
    options: [
      'Digital streaming has completely replaced physical vinyl manufacturing globally.',
      'Gen Z listeners refuse to listen to music through smartphones or digital headphones.',
      'Despite digital streaming’s focus on isolated singles, vinyl has revived as listeners seek tactile, complete album experiences.',
      'Vinyl records offer worse sound quality than modern compressed MP3 audio files.',
      'Musicians have stopped composing long-form albums due to lack of financial incentives.'
    ],
    correctAnswer: 2,
    explanation: 'Option C encapsulates both key elements of the passage: the dominance of digital singles streaming and the paradoxical counter-rebound of vinyl driven by the desire for tangible, holistic album engagement.',
    year: 'XAT 2024'
  }
];
