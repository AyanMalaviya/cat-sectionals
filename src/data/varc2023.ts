import { Question } from '../types';

export const varc2023Slot2Questions: Question[] = [
  // RC Set 1: Questions 1 to 4 (Philosophy of Technology and Human Agency)
  {
    id: 'varc23-s2-q1',
    questionNumber: 1,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 1: Technology, Artificial Intelligence and the Illusion of Autonomy',
    passage: `In contemporary philosophy of technology, the deterministic presumption that technological evolution is an autonomous force driving societal change is increasingly contested. Classical determinists posited that technology advances along an inexorable trajectory governed solely by internal technical logic, leaving human culture to passively adapt. However, sociotechnical theorists counter that technologies are deeply socially constructed—artifacts embody the prevailing power dynamics, commercial interests, and institutional biases of their creators.

Yet, this constructivist perspective encounters a troubling paradox with modern generative artificial intelligence and algorithmic governance. Once deployed, complex neural networks exhibit emergent behaviors that transcend the predictive foresight of their human designers. The opacity of 'black-box' systems creates an epistemic asymmetry: users, and often developers themselves, cannot trace the causal pathways through which an algorithm synthesizes vast corpora to reach specific verdicts.

Consequently, while the genesis of technology remains human-driven, its operational reality exerts an autonomous conditioning effect on human cognition. By pre-sorting choices, anticipating desires, and standardizing information architecture, digital algorithms subtly circumscribe the boundaries of human agency. Thus, human autonomy is neither completely eradicated nor uninhibited; rather, it is negotiated within an increasingly algorithmic habitus that nudges human decision-making along commercially pre-configured grooves.`,
    question: 'According to the passage, why does modern generative artificial intelligence pose a challenge to the sociotechnical constructivist view?',
    options: [
      'Because its emergent behaviors and opaque causal pathways make it operate beyond the foresight and traceable design of its human creators.',
      'Because classical determinism has proven that computational algorithms follow inevitable biological evolution.',
      'Because commercial interests have completely withdrawn from directing the development of neural network architectures.',
      'Because human cognition is entirely immune to the subtle architectural conditioning of digital platforms.'
    ],
    correctAnswer: 0,
    explanation: 'The passage explicitly states in paragraph 2 that the constructivist perspective encounters a paradox with modern generative AI because complex neural networks exhibit emergent behaviors that transcend the predictive foresight of designers, and the opacity of "black-box" systems means causal pathways cannot be traced.'
  },
  {
    id: 'varc23-s2-q2',
    questionNumber: 2,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 1: Technology, Artificial Intelligence and the Illusion of Autonomy',
    passage: `[Refer to Passage 1: Technology, Artificial Intelligence and the Illusion of Autonomy]`,
    question: 'Which of the following best captures the author’s stance on the nature of human autonomy in an algorithmic society?',
    options: [
      'It is a constrained agency that operates within behavioral boundaries pre-structured by algorithmic systems.',
      'It has been utterly extinguished by insurmountable machine intelligence.',
      'It remains entirely sovereign because humans are the sole creators of software architectures.',
      'It is expanding exponentially due to the democratization of generative knowledge systems.'
    ],
    correctAnswer: 0,
    explanation: 'In the final paragraph, the author writes: "human autonomy is neither completely eradicated nor uninhibited; rather, it is negotiated within an increasingly algorithmic habitus that nudges human decision-making along commercially pre-configured grooves." This aligns directly with Option 1.'
  },
  {
    id: 'varc23-s2-q3',
    questionNumber: 3,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 1: Technology, Artificial Intelligence and the Illusion of Autonomy',
    passage: `[Refer to Passage 1: Technology, Artificial Intelligence and the Illusion of Autonomy]`,
    question: 'The term "epistemic asymmetry" as used in the second paragraph most nearly refers to:',
    options: [
      'The knowledge gap between the algorithmic system\'s internal decision pathways and human comprehension.',
      'The educational disparity between elite computer scientists and average digital consumers.',
      'The economic difference between large tech corporations and governmental regulators.',
      'The mathematical error margin between training data and testing validation sets.'
    ],
    correctAnswer: 0,
    explanation: 'The author explains the epistemic asymmetry immediately after introducing it: "users, and often developers themselves, cannot trace the causal pathways through which an algorithm synthesizes vast corpora to reach specific verdicts." Hence, it refers to the knowledge gap about how the system arrives at decisions.'
  },
  {
    id: 'varc23-s2-q4',
    questionNumber: 4,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 1: Technology, Artificial Intelligence and the Illusion of Autonomy',
    passage: `[Refer to Passage 1: Technology, Artificial Intelligence and the Illusion of Autonomy]`,
    question: 'Which of the following, if true, would most weaken the author’s argument regarding algorithmic conditioning of human choices?',
    options: [
      'Studies demonstrating that users routinely alter their behaviors and seek uncurated sources to counteract recommendation algorithms.',
      'Findings showing that modern neural networks consume increasingly massive quantities of electrical energy.',
      'Evidence that digital platforms are owned by a small consortium of venture capital conglomerates.',
      'Proof that algorithms are capable of generating creative poetry indistinguishable from human writing.'
    ],
    correctAnswer: 0,
    explanation: 'The author argues that algorithms subtly circumscribe human agency and nudge human decision-making along pre-configured grooves. If users routinely resist, alter behaviors, and deliberately seek uncurated sources, it directly weakens the claim that algorithmic conditioning effectively restricts autonomy.'
  },

  // RC Set 2: Questions 5 to 8 (Ecological Economics & Urban Rewilding)
  {
    id: 'varc23-s2-q5',
    questionNumber: 5,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 2: Ecological Economics and the Urban Rewilding Movement',
    passage: `The conventional narrative of urban planning has long operated under an anthropocentric paradigm of separation: cities are designated as synthetic domains of human productivity, while nature is cordoned off into designated rural enclaves or manicured parks. This Cartesian bifurcation between the built environment and ecological biosphere has accelerated habitat fragmentation, urban heat islands, and severe biodiversity collapse.

In response, ecological economists and radical urbanists advocate for 'urban rewilding'—not merely planting ornamental flora, but actively restoring functional ecological processes and trophic networks within metropolitan grids. Unlike traditional urban conservation, which attempts to freeze ecosystems into static historical museum-pieces, rewilding embraces ecological autonomy, allowing dynamic natural succession to regenerate microclimates and flood resilience.

However, critics from municipal finance argue that urban land values require dense real-estate capitalization. To reconcile this, ecological economics proposes accounting for ecosystem services—quantifying the monetary value of natural stormwater drainage, carbon sequestration, and mental health dividends. While monetization risks reducing ecological intrinsic value to balance-sheet utilitarianism, it provides a pragmatic calculus that forces urban development policies to internalize externalities previously dismissed as free natural goods.`,
    question: 'The author distinguishes "urban rewilding" from traditional urban conservation primarily on the grounds that urban rewilding:',
    options: [
      'Facilitates self-sustaining ecological processes and succession rather than preserving static historical states.',
      'Prioritizes ornamental beautification and structured lawn maintenance over wild flora.',
      'Relies exclusively on voluntary municipal donations rather than real estate taxes.',
      'Prohibits any form of human residency or infrastructure inside urban limits.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 2 highlights: "Unlike traditional urban conservation, which attempts to freeze ecosystems into static historical museum-pieces, rewilding embraces ecological autonomy, allowing dynamic natural succession to regenerate microclimates and flood resilience."'
  },
  {
    id: 'varc23-s2-q6',
    questionNumber: 6,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 2: Ecological Economics and the Urban Rewilding Movement',
    passage: `[Refer to Passage 2: Ecological Economics and the Urban Rewilding Movement]`,
    question: 'Why does the author consider the monetization of ecosystem services to be a "pragmatic calculus"?',
    options: [
      'Because it compels economic planning to account for environmental costs and benefits that were previously ignored.',
      'Because it proves that natural biodiversity is worthless unless converted into commercial real estate.',
      'Because it eliminates all need for ecological science in municipal budgeting.',
      'Because it guarantees immediate monetary profits to private hedge funds.'
    ],
    correctAnswer: 0,
    explanation: 'The passage concludes: "it provides a pragmatic calculus that forces urban development policies to internalize externalities previously dismissed as free natural goods."'
  },
  {
    id: 'varc23-s2-q7',
    questionNumber: 7,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 2: Ecological Economics and the Urban Rewilding Movement',
    passage: `[Refer to Passage 2: Ecological Economics and the Urban Rewilding Movement]`,
    question: 'The passage implies that the "Cartesian bifurcation" between cities and nature has resulted in:',
    options: [
      'Degraded metropolitan ecological health, intensified heat islands, and disrupted habitats.',
      'The complete elimination of urban poverty and homelessness across modern cities.',
      'Enhanced natural pollination and expanded migratory corridors for endangered species.',
      'A harmonious integration of economic productivity and wilderness stewardship.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 1 explicitly notes: "This Cartesian bifurcation between the built environment and ecological biosphere has accelerated habitat fragmentation, urban heat islands, and severe biodiversity collapse."'
  },
  {
    id: 'varc23-s2-q8',
    questionNumber: 8,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 2: Ecological Economics and the Urban Rewilding Movement',
    passage: `[Refer to Passage 2: Ecological Economics and the Urban Rewilding Movement]`,
    question: 'Which of the following concerns does the author raise regarding the valuation of "ecosystem services"?',
    options: [
      'It threatens to downgrade nature\'s intrinsic ethical worth into pure economic utilitarianism.',
      'It cannot be computed using modern computational linear algebra.',
      'It artificially inflates the wages of municipal gardening personnel.',
      'It prevents real estate developers from building any further housing units.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 3 notes: "While monetization risks reducing ecological intrinsic value to balance-sheet utilitarianism, it provides a pragmatic calculus..." Hence, the author flags the concern of reducing intrinsic value to utilitarian balance sheets.'
  },

  // RC Set 3: Questions 9 to 12 (Linguistic Relativity & Spatial Cognition)
  {
    id: 'varc23-s2-q9',
    questionNumber: 9,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 3: Linguistic Relativity and Spatial Cognition',
    passage: `The Sapir-Whorf hypothesis, in its dogmatic formulation, asserted that language acts as a prison-house of thought: the structural taxonomy of one's native tongue strictly determines the parameters of what one can conceive. While extreme linguistic determinism has been roundly discredited by modern cognitive neuroscience, a refined, neo-Whorfian paradigm has gained empirical legitimacy, particularly in the domain of spatial cognition.

Consider how different speech communities encode spatial relationships. Indo-European languages predominantly rely on egocentric coordinates—orienting objects relative to the observer\'s bodily axes: "to my left," "behind you." In sharp contrast, speakers of languages like Guugu Yimithirr (an Australian Aboriginal tongue) employ absolute, geocentric coordinates at all times: "the ant is north of your foot," "turn eastwards."

Cross-cultural experiments indicate that this linguistic requirement cultivates profoundly divergent cognitive reflexes. Geocentric speakers maintain an internal mental compass with astonishing fidelity; even when blindfolded or placed in subterranean chambers, their dead-reckoning ability far outstrips egocentric speakers. This proves that language does not imprison thought, but habituates the mind to attend continuously to specific environmental cues.`,
    question: 'The author uses the contrast between Indo-European languages and Guugu Yimithirr primarily to demonstrate that:',
    options: [
      'Linguistic structures habituate speakers to continuously register specific spatial cues in their environment.',
      'Aboriginal languages are genetically superior in spatial mathematics compared to European languages.',
      'The strict Sapir-Whorf hypothesis of absolute determinism was entirely correct in all facets.',
      'Egocentric coordinates are more evolutionary advantageous than geocentric navigation.'
    ],
    correctAnswer: 0,
    explanation: 'The final sentence summarizes the purpose: "This proves that language does not imprison thought, but habituates the mind to attend continuously to specific environmental cues."'
  },
  {
    id: 'varc23-s2-q10',
    questionNumber: 10,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 3: Linguistic Relativity and Spatial Cognition',
    passage: `[Refer to Passage 3: Linguistic Relativity and Spatial Cognition]`,
    question: 'Based on the passage, the primary distinction between "linguistic determinism" and the "neo-Whorfian paradigm" is that the latter:',
    options: [
      'Views language as shaping habitual cognitive focus rather than rigidly imprisoning the boundaries of conception.',
      'Denies any relationship whatsoever between language and mental processing.',
      'Suggests that only written alphabets, not spoken idioms, alter neurological pathways.',
      'Restricts linguistic influence solely to color perception rather than spatial navigation.'
    ],
    correctAnswer: 0,
    explanation: 'The passage contrasts the dogmatic claim that language "strictly determines the parameters of what one can conceive" with the modern neo-Whorfian view where language "habituates the mind to attend continuously to specific environmental cues."'
  },
  {
    id: 'varc23-s2-q11',
    questionNumber: 11,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 3: Linguistic Relativity and Spatial Cognition',
    passage: `[Refer to Passage 3: Linguistic Relativity and Spatial Cognition]`,
    question: 'The superior dead-reckoning ability of Guugu Yimithirr speakers in subterranean chambers is cited as evidence that:',
    options: [
      'The constant linguistic mandate to express directions geocentrically fosters an internalized, durable sense of orientation.',
      'Subterranean environments possess unique magnetic fields perceptible only to indigenous populations.',
      'Egocentric speakers cannot learn basic geographic concepts without satellite receivers.',
      'Language completely replaces the physiological necessity of the inner ear vestibular system.'
    ],
    correctAnswer: 0,
    explanation: 'Because Guugu Yimithirr constantly forces speakers to speak in absolute directions, their cognitive training produces an internalized mental compass that functions even without visual landmarks.'
  },
  {
    id: 'varc23-s2-q12',
    questionNumber: 12,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 3: Linguistic Relativity and Spatial Cognition',
    passage: `[Refer to Passage 3: Linguistic Relativity and Spatial Cognition]`,
    question: 'An egocentric speaker placed in a revolving room who rotates 180 degrees would describe a cup in front of them as "in front of me", whereas a geocentric speaker would note that:',
    options: [
      'The cup is in the opposite cardinal direction relative to the room than it was before the rotation.',
      'The cup has vanished because bodily axes are the only true coordinates.',
      'The cup is still "in front" regardless of geomagnetic north.',
      'The rotation renders human spatial terminology completely invalid.'
    ],
    correctAnswer: 0,
    explanation: 'For an egocentric speaker, the cup is still in front of their body. For a geocentric speaker, orientation is fixed to cardinal directions (North, South, East, West), so rotating the person or object changes its cardinal relation.'
  },

  // RC Set 4: Questions 13 to 16 (Historiography & Archival Silences)
  {
    id: 'varc23-s2-q13',
    questionNumber: 13,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 4: Archival Silences and Subaltern Historiography',
    passage: `For over a century, orthodox archival historiography operated under the positivist premise that historical truth was preserved intact within state archives, awaiting only the disinterested scrutiny of the scholar. The archive was conceptualized as a pristine neutral repository of empirical traces.

Critical historians, influenced by post-colonial theory and Michel-Rolph Trouillot’s seminal critique, have dismantled this empiricist fantasy. The archive is not an accidental agglomeration of artifacts; it is an active technology of state power. What gets written, cataloged, preserved, and subsequently classified is fundamentally conditioned by what ruling hegemonies deem legible and significant.

Consequently, official archives are characterized as much by systemic 'silences' as by documented speech. The lives, rebellions, and vernacular epistemologies of enslaved laborers, women, and subaltern classes were rarely granted bureaucratic inscription, except through the forensic distortions of police registers, criminal indictments, or commercial inventories. To recover these lost trajectories, the contemporary historian must practice 'reading along the archival grain' and 'against the grain'—interrogating the very ideological omissions and bureaucratic anxieties embedded within the parchment.`,
    question: 'According to the passage, the orthodox positivist view of archives was flawed because it:',
    options: [
      'Treated the state archive as an impartial mirror of reality rather than an ideological instrument of power.',
      'Ignored all legal and bureaucratic documents in favor of oral mythologies.',
      'Refused to employ professional academic scholars to examine historical records.',
      'Assumed that subaltern classes possessed greater political authority than colonial administrations.'
    ],
    correctAnswer: 0,
    explanation: 'The passage argues that positivism presumed archives were "pristine neutral repository of empirical traces", ignoring that the archive is actually an "active technology of state power" reflecting ruling hegemonies.'
  },
  {
    id: 'varc23-s2-q14',
    questionNumber: 14,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 4: Archival Silences and Subaltern Historiography',
    passage: `[Refer to Passage 4: Archival Silences and Subaltern Historiography]`,
    question: 'What does the author imply about how subaltern subjects appear in official colonial records?',
    options: [
      'Their presence is mediated through judicial or punitive apparatuses rather than self-articulated testimonies.',
      'They were routinely granted editorial authority over the preservation of provincial records.',
      'Their spiritual and vernacular poems were meticulously preserved by colonial archivists.',
      'They were completely and physically absent from any criminal or fiscal records.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 3 notes: "The lives, rebellions, and vernacular epistemologies... were rarely granted bureaucratic inscription, except through the forensic distortions of police registers, criminal indictments, or commercial inventories."'
  },
  {
    id: 'varc23-s2-q15',
    questionNumber: 15,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 4: Archival Silences and Subaltern Historiography',
    passage: `[Refer to Passage 4: Archival Silences and Subaltern Historiography]`,
    question: 'The practice of "reading against the archival grain" implies that a historian should:',
    options: [
      'Examine archival records with an acute awareness of ideological omissions and systemic biases.',
      'Physically examine the cotton fiber and chemical texture of the manuscript paper.',
      'Discard all written records and rely solely on modern speculative fiction.',
      'Accept administrative reports at face value without cross-examination.'
    ],
    correctAnswer: 0,
    explanation: 'Reading against the grain means interrogating ideological omissions, state anxieties, and biases embedded in the records to uncover silenced histories.'
  },
  {
    id: 'varc23-s2-q16',
    questionNumber: 16,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 4: Archival Silences and Subaltern Historiography',
    passage: `[Refer to Passage 4: Archival Silences and Subaltern Historiography]`,
    question: 'The primary purpose of the passage is to:',
    options: [
      'Critique the naive belief in archival neutrality and propose a methodologically critical approach to historical evidence.',
      'Argue that all historical research before the twenty-first century should be legally banned.',
      'Demonstrate how ancient manuscripts are conserved against insect degradation.',
      'Praise colonial administrative efficiency in cataloging subaltern labor productivity.'
    ],
    correctAnswer: 0,
    explanation: 'The passage directly critiques the positivist faith in neutral archives and demonstrates how critical historians interrogate archival silences and power dynamics.'
  },

  // Verbal Ability Section: Questions 17 to 24
  // Question 17: Para Summary
  {
    id: 'varc23-s2-q17',
    questionNumber: 17,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Moderate',
    question: `Read the paragraph below and choose the option that best summarizes it:

"For centuries, classical economic models operated on the axiom of the 'Homo Economicus'—a perfectly rational agent possessing complete information who maximizes individual utility without cognitive distortion. Behavioral economists, however, systematically demonstrated that human cognition is governed by heuristics: mental shortcuts that, while evolutionarily advantageous for rapid decision-making in primal habitats, systematically trigger cognitive biases such as loss aversion, hyperbolic discounting, and confirmation bias in modern financial landscapes. Consequently, economic policy design has shifted toward 'libertarian paternalism' or nudging, which preserves freedom of choice while subtly structuring choice architecture to favor long-term welfare."`,
    options: [
      'Because human decision-making relies on evolutionary heuristics prone to modern financial biases, economic policymaking has evolved from assuming absolute rationality to designing choice architecture that guides better outcomes.',
      'Homo Economicus remains the undisputed gold standard for formulating national taxation policies and individual retirement schemes.',
      'Heuristics were catastrophic evolutionary defects that prevented ancient humans from securing food or surviving predators.',
      'Nudging is an authoritarian governmental tool designed to eliminate free markets and force citizens into state-mandated investments.'
    ],
    correctAnswer: 0,
    explanation: 'Option 1 captures all essential components: the shift from the myth of Homo Economicus due to evolutionary heuristics and cognitive biases, and the resulting adoption of choice architecture (nudging) to facilitate welfare.'
  },

  // Question 18: Para Summary
  {
    id: 'varc23-s2-q18',
    questionNumber: 18,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Hard',
    question: `Read the paragraph below and choose the option that best summarizes it:

"In quantum biology, researchers investigate whether non-trivial quantum phenomena—such as coherence, tunneling, and entanglement—play functional roles in living organisms. Traditionally, physicists assumed that warm, macroscopic biological environments would immediately destroy delicate quantum superpositions through environmental decoherence. However, discoveries in avian magnetoreception and photosynthetic energy transfer suggest that evolution has engineered specialized molecular microenvironments that sustain quantum coherence long enough to optimize biochemical efficiency."`,
    options: [
      'Contrary to longstanding assumptions that biological heat destroys quantum states, living systems appear to have evolved specialized structures that utilize quantum effects to optimize vital processes.',
      'Avian navigation is the only biological process that relies completely on classical macroscopic mechanics rather than atomic interactions.',
      'Quantum mechanics has entirely replaced biochemical pathways in all physiological domains of multicellular organisms.',
      'Environmental decoherence occurs only in synthetic physics laboratories and is completely non-existent inside animal tissue.'
    ],
    correctAnswer: 0,
    explanation: 'Option 1 encapsulates both the challenge to previous assumptions (decoherence in warm biological tissue) and the evolutionary reality (specialized molecular structures enabling functional quantum optimization).'
  },

  // Question 19: Para Jumble (TITA)
  {
    id: 'varc23-s2-q19',
    questionNumber: 19,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Para Jumble',
    difficulty: 'Moderate',
    question: `The four sentences below (labeled 1, 2, 3, 4) when properly sequenced, yield a coherent paragraph. Decide on the proper order and type in the 4-digit sequence:

1. This micro-level genetic adaptation explains how Tibetan populations can thrive in hypoxic environments without suffering from elevated hematocrit levels.
2. In particular, the EPAS1 gene variant, acquired through archaic introgression from Denisovans, plays a central role in regulating hemoglobin synthesis under low oxygen pressure.
3. High-altitude adaptation provides one of the clearest demonstrations of natural selection acting on human populations over relatively recent evolutionary timescales.
4. By modulating red blood cell production, this allele averts the severe cardiovascular complications associated with altitude sickness and chronic thrombosis.`,
    correctAnswer: '3241',
    explanation: `Sentence 3 introduces the overarching theme: high-altitude adaptation as a demonstration of natural selection.
Sentence 2 specifies the genetic mechanism: the EPAS1 gene variant introgressed from Denisovans.
Sentence 4 elaborates on the exact physiological function of this allele (modulating red blood cell production to avert complications).
Sentence 1 concludes by linking this micro-level genetic adaptation to the Tibetan population's survival in hypoxic conditions.
Hence, the coherent sequence is 3241.`
  },

  // Question 20: Para Jumble (TITA)
  {
    id: 'varc23-s2-q20',
    questionNumber: 20,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Para Jumble',
    difficulty: 'Hard',
    question: `The four sentences below (labeled 1, 2, 3, 4) when properly sequenced, yield a coherent paragraph. Decide on the proper order and type in the 4-digit sequence:

1. Rather than treating cities as finished architectural monuments, this approach views urban centers as complex adaptive organisms.
2. The concept of generative urbanism challenges the rigid, top-down zoning blueprints that dominated twentieth-century modernist planning.
3. Small, localized civic interventions can trigger emergent spatial self-organization across neighborhoods.
4. Under this organic perspective, resilient urban form emerges from decentralized interactions among residents, informal economies, and public spaces.`,
    correctAnswer: '2143',
    explanation: `Sentence 2 introduces "generative urbanism" and contrasts it with 20th-century modernist top-down planning.
Sentence 1 connects directly via "this approach", defining it as viewing urban centers as complex adaptive organisms.
Sentence 4 continues "Under this organic perspective", explaining how resilient form emerges from decentralized interactions.
Sentence 3 provides the practical consequence: small, localized civic interventions triggering emergent self-organization.
The sequence is 2143.`
  },

  // Question 21: Odd Sentence Out (TITA)
  {
    id: 'varc23-s2-q21',
    questionNumber: 21,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Odd Sentence Out',
    difficulty: 'Moderate',
    question: `Four of the following five sentences (labeled 1, 2, 3, 4, 5) form a coherent paragraph about semiconductor manufacturing. Identify the sentence that does not fit into the logical flow and type its number:

1. Extreme ultraviolet (EUV) lithography has become the technological linchpin of modern leading-edge semiconductor fabrication.
2. By utilizing light with a wavelength of just 13.5 nanometers, EUV systems can carve microscopic circuit features onto silicon wafers at sub-2-nanometer scales.
3. The geopolitical concentration of advanced EUV machinery within a single Dutch manufacturer underscores the extreme fragility of global tech supply chains.
4. Copper-based interconnects were historically preferred over aluminum due to their superior electrical conductivity and lower electromigration risks.
5. Without these hyper-precise photolithographic instruments, sustaining the historical cadence of Moore’s Law would be physically impossible.`,
    correctAnswer: '4',
    explanation: `Sentences 1, 2, 3, and 5 all specifically address the technological, physical, and geopolitical centrality of EUV lithography in sub-nanometer chip fabrication.
Sentence 4 diverges into a historical comparison between copper and aluminum interconnects, which does not relate to EUV photolithography systems.
Hence, 4 is the odd sentence out.`
  },

  // Question 22: Odd Sentence Out (TITA)
  {
    id: 'varc23-s2-q22',
    questionNumber: 22,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Odd Sentence Out',
    difficulty: 'Moderate',
    question: `Four of the following five sentences (labeled 1, 2, 3, 4, 5) form a coherent paragraph on musicology and neuroscience. Identify the odd sentence out and type its number:

1. Auditory neuroscience reveals that rhythm perception engages not only the auditory cortex but also motor control networks including the basal ganglia and cerebellum.
2. Even in the absence of overt physical movement, our neurological motor circuits simulate the rhythmic cadence of musical tempos.
3. Vinyl records experience mechanical surface wear over time, resulting in harmonic distortion known as needle crackle.
4. This predictive motor coupling explains why human infants spontaneously synchronize their body movements to periodic beats.
5. Our evolutionary entrainment to shared acoustic timing may have originated as a mechanism for reinforcing social cohesion and collaborative hunting.`,
    correctAnswer: '3',
    explanation: `Sentences 1, 2, 4, and 5 trace the neurobiological connection between rhythm perception, internal motor circuit simulation, and evolutionary social entrainment.
Sentence 3 is about mechanical vinyl record degradation and needle crackle, which is an external audio fidelity topic completely outside neuroscience.
Hence, 3 is the odd sentence out.`
  },

  // Question 23: Sentence Placement (MCQ)
  {
    id: 'varc23-s2-q23',
    questionNumber: 23,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Sentence Placement',
    difficulty: 'Moderate',
    question: `Consider the following sentence:
"When water supplies become saline, these specialized halophytic plants actively transport and sequester excess sodium ions into internal cell vacuoles."

Where does this sentence best fit in the passage below?
[1] Mangrove forests inhabit brackish coastal environments that would be fatal to most terrestrial vegetation. [2] Their survival depends on sophisticated biochemical adaptations that regulate osmotic pressure and salt concentrations. [3] By storing salt safely inside vacuoles away from metabolic enzymes, the plant preserves cellular photosynthesis without tissue toxicity. [4] Through these evolutionary innovations, mangrove biomes create vibrant estuaries that buffer shorelines against catastrophic storm surges.`,
    options: ['Position [1]', 'Position [2]', 'Position [3]', 'Position [4]'],
    correctAnswer: 2,
    explanation: `The sentence describes how halophytic plants actively transport and sequester sodium ions into cell vacuoles.
Position [3] comes immediately before "By storing salt safely inside vacuoles away from metabolic enzymes...", directly explaining what vacuoles are being referred to and creating a seamless causal chain.`
  },

  // Question 24: Para Summary (MCQ)
  {
    id: 'varc23-s2-q24',
    questionNumber: 24,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Moderate',
    question: `Read the paragraph below and select the option that best captures its essence:

"In evolutionary biology, the Red Queen hypothesis posits that an organism must constantly adapt, evolve, and proliferate not merely to gain reproductive advantage, but simply to survive against co-evolving competing organisms in an ever-shifting environment. The metaphor, borrowed from Lewis Carroll’s 'Through the Looking-Glass', where the Red Queen tells Alice that 'it takes all the running you can do, to keep in the same place', illuminates the perpetual arms race between hosts and parasites. Neither adversary can permanently triumph; rather, genetic variation generated by sexual reproduction provides the dynamic diversity necessary to prevent lethal pathogen specialization."`,
    options: [
      'The Red Queen hypothesis illustrates that continuous evolutionary adaptation is an imperative survival requirement driven by reciprocal arms races against co-evolving competitors.',
      'Hosts eventually evolve supreme biological antibodies that eradicate all parasitic threats permanently.',
      'Lewis Carroll wrote Through the Looking Glass as a literal textbook for nineteenth-century geneticists.',
      'Asexual reproduction provides far greater genetic flexibility to counter predatory parasites than sexual reproduction.'
    ],
    correctAnswer: 0,
    explanation: 'Option 1 captures the core message: evolutionary adaptation is a perpetual necessity ("running in place") fueled by reciprocal co-evolutionary arms races with competitors and parasites.'
  }
];
