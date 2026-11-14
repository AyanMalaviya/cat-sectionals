import { Question } from '../types';

export const varc2021Slot1Questions: Question[] = [
  // RC Set 1: Questions 1 to 4 (Maya Civilization and Collapse Theories)
  {
    id: 'varc21-s1-q1',
    questionNumber: 1,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 1: The Complex Dynamics of Classic Maya Collapse',
    passage: `The dramatic ninth-century abandonment of Classic Maya urban centers in the southern lowlands of Mesoamerica has long captured archaeological imagination. Early twentieth-century scholarship tended toward monocausal catastrophes—hypothesizing a solitary peasant revolution, an unprecedented pandemic, or abrupt seismic upheaval. Over recent decades, however, high-resolution paleoclimatological data and sediment cores from Lake Chichancanab have rewritten this simplistic script.

Drought was undoubtedly a catalyst, but its effects were profoundly modulated by anthropogenic landscape modifications. Through centuries of relentless deforestation, terrace construction, and wetland drainage to feed burgeoning urban populations, the Maya altered regional albedo and evapotranspiration cycles, inadvertently suppressing local rainfall.

Furthermore, environmental stress intersected lethally with socio-political rigidity. Late Classic Maya city-states were engaged in an escalatory competitive arms race: divine kings (k\'uhul ajawob) constructed increasingly grandiose pyramids and waged endemic warfare to capture royal prisoners for ritual sacrifice. When climatic dry spells caused multi-year agricultural deficits, ruling elites doubled down on monumental expenditure rather than redistributing grain reserves. The collapse was therefore not an external environmental asteroid strike, but a systemic socio-ecological breakdown where cultural institutions proved maladaptive to ecological realities.`,
    question: 'The author argues that the "Classic Maya collapse" is best conceptualized as:',
    options: [
      'A synergistic socio-ecological crisis triggered by climatic droughts exacerbated by environmental overexploitation and political inflexibility.',
      'A sudden catastrophic natural earthquake that obliterated lowlands overnight.',
      'A peaceful voluntary migration to northern highland territories driven solely by spiritual prophecies.',
      'An external invasion orchestrated by European colonial powers in the ninth century.'
    ],
    correctAnswer: 0,
    explanation: 'The author concludes that the collapse was a systemic socio-ecological breakdown where drought, human environmental modifications (deforestation), and rigid political structures interacted.'
  },
  {
    id: 'varc21-s1-q2',
    questionNumber: 2,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 1: The Complex Dynamics of Classic Maya Collapse',
    passage: `[Refer to Passage 1: The Complex Dynamics of Classic Maya Collapse]`,
    question: 'How did anthropogenic environmental modifications worsen the drought conditions faced by the Maya?',
    options: [
      'Widespread deforestation and landscape alterations changed regional albedo and depressed rainfall cycles.',
      'The Maya built excessive deep underground wells that completely drained global oceanic water tables.',
      'Sediment cores were removed from lakes, causing localized volcanic eruptions.',
      'Peasants ceased farming completely in protest against royal grain taxes.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 2 notes: "Through centuries of relentless deforestation... the Maya altered regional albedo and evapotranspiration cycles, inadvertently suppressing local rainfall."'
  },
  {
    id: 'varc21-s1-q3',
    questionNumber: 3,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 1: The Complex Dynamics of Classic Maya Collapse',
    passage: `[Refer to Passage 1: The Complex Dynamics of Classic Maya Collapse]`,
    question: 'The author mentions the response of the Maya ruling elites to agricultural deficits primarily to illustrate:',
    options: [
      'The maladaptive ideological rigidity of the ruling class during existential environmental pressures.',
      'The superior nutritional benefits of ceremonial fasting during famine years.',
      'How royal architecture permanently mitigated regional climatic shifts.',
      'The absolute equality of resources distributed across peasant households.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 3 highlights that when droughts hit, elites doubled down on monumental expenditures and prestige warfare instead of distributing food, demonstrating that political institutions were maladaptive.'
  },
  {
    id: 'varc21-s1-q4',
    questionNumber: 4,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 1: The Complex Dynamics of Classic Maya Collapse',
    passage: `[Refer to Passage 1: The Complex Dynamics of Classic Maya Collapse]`,
    question: 'The term "monocausal catastrophes" in the first paragraph refers to theories that:',
    options: [
      'Attribute a complex historical event to a single, isolated explanatory factor.',
      'Acknowledge multifaceted interactions between sociology and biology.',
      'Reject the validity of physical carbon dating and paleoclimatology.',
      'Focus exclusively on twentieth-century industrial events.'
    ],
    correctAnswer: 0,
    explanation: 'Monocausal means single-cause (e.g. solely a peasant revolt, or solely a pandemic, or solely an earthquake) rather than a systemic multi-variable explanation.'
  },

  // RC Set 2: Questions 5 to 8 (Utopia, Surveillance & Panopticism)
  {
    id: 'varc21-s1-q5',
    questionNumber: 5,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 2: Bentham’s Panopticon and Modern Surveillance Capitalism',
    passage: `When Jeremy Bentham drafted his architectural blueprint for the Panopticon in 1787, he conceived it as a model prison where a central inspection tower could observe all circular perimeter cells without inmates knowing whether they were being watched at any given second. As Michel Foucault famously demonstrated in 'Discipline and Punish', the brilliant perversity of the Panopticon lay not in physical violence, but in the psychological internalization of the gaze. Because observation was a permanent possibility, the inmate became the principle of their own subjection, policing themselves at all times.

In the twenty-first century, digital sociologist Shoshana Zuboff points out that surveillance has undergone an epistemic mutation: we have migrated from the Panopticon of punitive confinement to the omnipresent Panopticon of digital consumer convenience. Under 'Surveillance Capitalism', digital platforms do not merely monitor behavior to discipline citizens into docile conformity; rather, they unilaterally extract behavioral surplus—every click, geolocation ping, micro-pause, and emotional valence—as free raw material.

This extracted behavioral data is fed into machine intelligence factories to produce 'prediction products' that anticipate what we will feel, buy, and believe. Here, the architectural watchtower has dissolved into the very software fabric of our everyday lives. Bentham’s prisoner knew the tower existed; modern digital consumers voluntarily download the tracking apparatus, trading cognitive sovereignty for personalized streaming playlists and predictive text.`,
    question: 'According to the passage, how does modern "Surveillance Capitalism" fundamentally differ from Bentham\'s classical Panopticon?',
    options: [
      'It extracts behavioral surplus for commercial prediction rather than merely disciplining bodies through visible institutional confinement.',
      'It completely eliminates all electronic devices in favor of stone watchtowers.',
      'It operates solely within state prisons and has no interface with civilian life.',
      'It is maintained by physical chains rather than algorithmic networks.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 2 and 3 contrast Bentham\'s punitive disciplinary confinement with modern surveillance capitalism, which extracts behavioral surplus to produce commercial prediction products with user consent.'
  },
  {
    id: 'varc21-s1-q6',
    questionNumber: 6,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 2: Bentham’s Panopticon and Modern Surveillance Capitalism',
    passage: `[Refer to Passage 2: Bentham’s Panopticon and Modern Surveillance Capitalism]`,
    question: 'Foucault argued that the core efficacy of the Panopticon stemmed from:',
    options: [
      'The psychological internalization of permanent potential scrutiny leading individuals to self-police.',
      'The physical brutality and torture inflicted by central wardens on inmates.',
      'The total absence of walls, allowing inmates to escape into nature.',
      'The economic profits generated by selling inmate handicrafts in open markets.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 1 explains: "the psychological internalization of the gaze. Because observation was a permanent possibility, the inmate became the principle of their own subjection, policing themselves at all times."'
  },
  {
    id: 'varc21-s1-q7',
    questionNumber: 7,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 2: Bentham’s Panopticon and Modern Surveillance Capitalism',
    passage: `[Refer to Passage 2: Bentham’s Panopticon and Modern Surveillance Capitalism]`,
    question: 'The author describes users downloading tracking apparatuses as trading "cognitive sovereignty" for:',
    options: [
      'Personalized consumer conveniences and algorithmic predictive recommendations.',
      'Guaranteed permanent financial immunity from national taxes.',
      'Direct ownership of semiconductor manufacturing facilities.',
      'Total freedom from all social and legal responsibilities.'
    ],
    correctAnswer: 0,
    explanation: 'The final sentence states: "modern digital consumers voluntarily download the tracking apparatus, trading cognitive sovereignty for personalized streaming playlists and predictive text."'
  },
  {
    id: 'varc21-s1-q8',
    questionNumber: 8,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 2: Bentham’s Panopticon and Modern Surveillance Capitalism',
    passage: `[Refer to Passage 2: Bentham’s Panopticon and Modern Surveillance Capitalism]`,
    question: 'The term "behavioral surplus" in the second paragraph refers to:',
    options: [
      'Digital behavioral traces and interactions collected beyond what is strictly necessary for service optimization.',
      'The extra physical exercise performed by prisoners in prison courtyards.',
      'Excess agricultural grain produced by automated farming tractors.',
      'Unsold inventory stored in corporate distribution warehouses.'
    ],
    correctAnswer: 0,
    explanation: 'In Zuboff\'s theory, behavioral surplus is the vast excess of digital signals (clicks, pauses, location, tone) extracted as free raw material for behavioral prediction algorithms.'
  },

  // RC Set 3: Questions 9 to 12 (Evolutionary Epistemology & Niche Construction)
  {
    id: 'varc21-s1-q9',
    questionNumber: 9,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 3: Niche Construction and Evolutionary Feedback',
    passage: `Standard Neo-Darwinian evolutionary theory long portrayed organisms as passive clay sculpted by external selective environments. The environment poses challenges—arid heat, agile predators, pathogen vectors—and through natural selection, well-adapted genotypes survive to transmit their alleles.

Over the past three decades, evolutionary biologists such as Richard Lewontin, John Odling-Smee, and Kevin Laland have mounted a foundational challenge through 'Niche Construction Theory' (NCT). Organisms do not merely adapt to pre-existing ecological niches; they actively construct, modify, and demolish environmental niches through their own metabolic and behavioral activities.

Consider beavers building dams: they flood valleys, create novel lacustrine ecosystems, transform hydrology, and alter nutrient sedimentation. In doing so, beavers do not just change their immediate surroundings; they create a radically altered selective landscape for their descendants and countless other species. Selection pressure is not an autonomous external force acting on genes; it is a bidirectional feedback loop where organisms co-direct their own evolutionary trajectories. For humans, cultural evolution represents the ultimate form of niche construction: by engineering cities, medicines, legal institutions, and agricultural monocultures, our species continuously re-architects the genomic pressures governing future human generations.`,
    question: 'Niche Construction Theory (NCT) departs from classical Neo-Darwinism primarily by asserting that:',
    options: [
      'Organisms actively reshape their ecological environments, thereby generating new selective pressures in a bidirectional feedback loop.',
      'Organisms are completely incapable of affecting their surrounding biological ecosystems.',
      'Genetic mutations occur exclusively in response to moral intentions and ethical desires.',
      'Beavers are the only mammalian species governed by natural selection.'
    ],
    correctAnswer: 0,
    explanation: 'The passage explains that unlike classical Neo-Darwinism (which viewed organisms as passive clay), NCT demonstrates that organisms actively construct and alter niches, creating bidirectional evolutionary feedback.'
  },
  {
    id: 'varc21-s1-q10',
    questionNumber: 10,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 3: Niche Construction and Evolutionary Feedback',
    passage: `[Refer to Passage 3: Niche Construction and Evolutionary Feedback]`,
    question: 'The author uses the example of beaver dams to prove that:',
    options: [
      'An organism\'s architectural modifications can generate a durable legacy of altered selective pressures across generations.',
      'Beavers have surpassed humans in industrial civil engineering capabilities.',
      'Aquatic ecosystems are entirely immune to physical sedimentation or hydrological change.',
      'Natural selection ceased operating in freshwater rivers during the Holocene epoch.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 3 notes: "In doing so, beavers do not just change their immediate surroundings; they create a radically altered selective landscape for their descendants and countless other species."'
  },
  {
    id: 'varc21-s1-q11',
    questionNumber: 11,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 3: Niche Construction and Evolutionary Feedback',
    passage: `[Refer to Passage 3: Niche Construction and Evolutionary Feedback]`,
    question: 'According to the passage, why is human cultural evolution considered "the ultimate form of niche construction"?',
    options: [
      'Because human cultural inventions such as medicine and agriculture profoundly restructure the selective pressures operating on the human genome.',
      'Because humans have completely eradicated the laws of thermodynamics.',
      'Because cultural artifacts exist outside the physical universe of biological organisms.',
      'Because humans are the only species that builds shelters for protection against predators.'
    ],
    correctAnswer: 0,
    explanation: 'The final sentence explains: "by engineering cities, medicines, legal institutions, and agricultural monocultures, our species continuously re-architects the genomic pressures governing future human generations."'
  },
  {
    id: 'varc21-s1-q12',
    questionNumber: 12,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 3: Niche Construction and Evolutionary Feedback',
    passage: `[Refer to Passage 3: Niche Construction and Evolutionary Feedback]`,
    question: 'Which of the following, if true, would provide the strongest empirical support for Niche Construction Theory?',
    options: [
      'Earthworms altering soil chemistry and pH, which in turn selects for novel respiratory adaptations in descendant earthworm populations.',
      'A meteor hitting an uninhabited desert island and wiping out endemic flora.',
      'A species of lizard failing to survive a sudden ice age due to lack of genetic variation.',
      'Solar radiation levels remaining constant over ten million astronomical years.'
    ],
    correctAnswer: 0,
    explanation: 'Earthworms modifying soil chemistry and that modified soil selecting for new traits in their own descendants perfectly exemplifies an organism creating its own altered selective environment.'
  },

  // RC Set 4: Questions 13 to 16 (Comparative Aesthetics & The Japanese Concept of Wabi-Sabi)
  {
    id: 'varc21-s1-q13',
    questionNumber: 13,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 4: Wabi-Sabi and the Aesthetics of Impermanence',
    passage: `In Western classical aesthetics, beauty has historically been equated with symmetry, geometric proportionality, and immaculate permanency. From the Parthenon in Athens to the Renaissance ideals of Alberti and Leonardo, the artistic masterpiece sought to triumph over the indignities of time—freezing flawless forms into unyielding marble or permanent oil pigments.

In stark contrast, traditional Japanese aesthetic philosophy, rooted deeply in Zen Buddhism and Daoism, crystallized around 'wabi-sabi'—the veneration of that which is imperfect, impermanent, and incomplete. Emerging alongside the medieval tea ceremony (chado) popularized by master Sen no Rikyu, wabi-sabi elevated rough, asymmetrical Raku ceramic bowls with visible cracks, unvarnished wooden pillars bearing insect scars, and weathered moss-covered stone lanterns.

Central to wabi-sabi is the practice of 'kintsugi' (golden joinery), where fractured pottery is repaired with lacquer dusted with powdered gold, silver, or platinum. Rather than disguising the breakage or treating the fracture as a regrettable defect to be concealed, kintsugi transforms the site of trauma into an exquisite historical narrative of the object’s journey. Beauty does not exist despite damage and transience; beauty exists precisely because of them.`,
    question: 'The author contrasts Western classical aesthetics with Japanese wabi-sabi primarily in terms of their views on:',
    options: [
      'Permanence, symmetry, and perfection versus impermanence, asymmetry, and transience.',
      'The monetary value of oil canvases versus ceramic dinner plates.',
      'Whether artists should be paid in gold coins or government grain subsidies.',
      'The complete elimination of religious themes from classical sculpture.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 1 contrasts Western ideals (symmetry, geometric proportionality, immaculate permanency) with wabi-sabi (imperfection, impermanence, incompleteness, and transience).'
  },
  {
    id: 'varc21-s1-q14',
    questionNumber: 14,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 4: Wabi-Sabi and the Aesthetics of Impermanence',
    passage: `[Refer to Passage 4: Wabi-Sabi and the Aesthetics of Impermanence]`,
    question: 'The art of "kintsugi" exemplifies wabi-sabi because it:',
    options: [
      'Illuminates and celebrates the history of damage and repair rather than concealing it.',
      'Melted broken ceramic shards into uniform industrial glass blocks.',
      'Discards imperfect tea bowls in accordance with ancient monastic rituals.',
      'Mandates that all art must be carved exclusively out of marble stones.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 3 explains: "Rather than disguising the breakage... kintsugi transforms the site of trauma into an exquisite historical narrative... Beauty exists precisely because of them."'
  },
  {
    id: 'varc21-s1-q15',
    questionNumber: 15,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 4: Wabi-Sabi and the Aesthetics of Impermanence',
    passage: `[Refer to Passage 4: Wabi-Sabi and the Aesthetics of Impermanence]`,
    question: 'Which of the following architectural choices would best embody the philosophy of wabi-sabi?',
    options: [
      'A tea pavilion built with unpolished, knotty cedar timbers that age and gray naturally with morning rains.',
      'A corporate skyscraper lined with mirror-finish reflective stainless steel panels polished daily.',
      'A palace with perfectly identical classical ionic columns replicated using laser sensors.',
      'A concrete monument coated in waterproof plastic paint to prevent moss growth.'
    ],
    correctAnswer: 0,
    explanation: 'An unpolished, knotty cedar timber pavilion that naturally weathers and ages embraces impermanence, asymmetry, and natural imperfection.'
  },
  {
    id: 'varc21-s1-q16',
    questionNumber: 16,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 4: Wabi-Sabi and the Aesthetics of Impermanence',
    passage: `[Refer to Passage 4: Wabi-Sabi and the Aesthetics of Impermanence]`,
    question: 'The author implies that the Western quest to "triumph over the indignities of time" reflects an underlying desire to:',
    options: [
      'Deny or defy human mortality and physical decay through unchanging artistic form.',
      'Encourage citizens to study archaeology and geology in universities.',
      'Lower the financial cost of producing theatrical drama scripts.',
      'Completely eradicate tea consumption across the Mediterranean basin.'
    ],
    correctAnswer: 0,
    explanation: 'Freezing flawless forms into unyielding marble to "triumph over the indignities of time" symbolizes an effort to resist transience, decay, and mortality.'
  },

  // Verbal Ability Section: Questions 17 to 24
  {
    id: 'varc21-s1-q17',
    questionNumber: 17,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Moderate',
    question: `Read the paragraph below and choose the option that best summarizes it:

"In economic history, the 'Jevons Paradox' occurs when technological progress increases the efficiency with which a resource is utilized, but the falling cost of using that resource accelerates its overall rate of consumption rather than decreasing it. First observed by William Stanley Jevons in 1865 regarding coal efficiency in Watt's steam engines, this paradox poses a profound dilemma for modern sustainability policies. Policy initiatives that assume higher vehicular fuel efficiency will automatically slash national gasoline consumption often fail because cheaper per-mile driving encourages commuters to travel longer distances and purchase heavier sports utility vehicles."`,
    options: [
      'Technological efficiency improvements do not automatically conserve resources because lower operational costs frequently induce increased aggregate usage, as demonstrated by the Jevons Paradox.',
      'Coal powered steam engines were banned by British authorities in 1865 to prevent atmospheric pollution.',
      'Purchasing sports utility vehicles is mandatory under contemporary municipal transport bylaws.',
      'Energy efficiency technologies have succeeded in reducing worldwide electricity consumption to absolute zero.'
    ],
    correctAnswer: 0,
    explanation: 'Option 1 captures the essence: the Jevons paradox demonstrates that technological efficiency lowers costs, which often leads to greater overall consumption rather than conservation.'
  },
  {
    id: 'varc21-s1-q18',
    questionNumber: 18,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Hard',
    question: `Read the paragraph below and choose the option that best summarizes it:

"For decades, sleep was viewed by evolutionary biologists as an evolutionary absurdity—a dangerous state of profound unconsciousness where an organism cannot forage, reproduce, or defend itself against predators. Recent neurological research, however, reveals that sleep functions as an essential brain maintenance cycle driven by the glymphatic system. During deep slow-wave sleep, interstitial space between brain cells expands by sixty percent, allowing cerebrospinal fluid to flush away toxic metabolic waste products, including amyloid-beta peptides linked to neurodegenerative disorders like Alzheimer’s."`,
    options: [
      'Far from being an evolutionary liability, sleep provides vital neural homeostasis through the glymphatic system, which flushes away hazardous metabolic toxins from the brain.',
      'Animals in predatory environments have completely ceased sleeping to maximize foraging hours.',
      'Alzheimer’s disease is exclusively caused by exercising too much during daytime hours.',
      'Slow-wave sleep was an artificial laboratory construct invented by modern pharmacological firms.'
    ],
    correctAnswer: 0,
    explanation: 'Option 1 directly addresses the shift from viewing sleep as a liability to understanding its essential restorative function via the glymphatic flushing of toxic proteins.'
  },
  {
    id: 'varc21-s1-q19',
    questionNumber: 19,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Para Jumble',
    difficulty: 'Moderate',
    question: `The four sentences below (labeled 1, 2, 3, 4) when properly sequenced, yield a coherent paragraph. Decide on the proper order and type in the 4-digit sequence:

1. By actively inhibiting the growth of neighboring plant shoots, these root exudates ensure uninterrupted access to soil hydration.
2. In arid ecosystems, creosote bushes employ a sophisticated form of biochemical warfare known as allelopathy.
3. Over decades, this chemical territoriality creates regular, honeycomb-like spatial spacing patterns across desert plains.
4. Their deep root networks release phenolic chemicals into the surrounding subterranean rhizosphere.`,
    correctAnswer: '2413',
    explanation: `Sentence 2 introduces the subject and mechanism: creosote bushes employing biochemical warfare (allelopathy) in arid ecosystems.
Sentence 4 describes what they do: their roots release phenolic chemicals into the rhizosphere.
Sentence 1 explains the functional purpose: inhibiting neighboring plant growth to secure hydration.
Sentence 3 presents the macro ecological outcome: creating regular honeycomb spatial spacing patterns across the desert.
Sequence: 2413.`
  },
  {
    id: 'varc21-s1-q20',
    questionNumber: 20,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Para Jumble',
    difficulty: 'Hard',
    question: `The four sentences below (labeled 1, 2, 3, 4) when properly sequenced, yield a coherent paragraph. Decide on the proper order and type in the 4-digit sequence:

1. Consequently, these celestial timepieces allow astrophysicists to test Einstein’s general relativity under extreme gravitational conditions.
2. Pulsars are rapidly rotating, highly magnetized neutron stars formed in the cataclysmic wake of supernova explosions.
3. As they spin, they emit focused beams of electromagnetic radiation from their magnetic poles like cosmic lighthouses.
4. Because their immense angular momentum produces rotation periods of extraordinary mechanical stability, their pulse arrivals can be timed with atomic precision.`,
    correctAnswer: '2341',
    explanation: `Sentence 2 defines what pulsars are: rapidly rotating magnetized neutron stars from supernovas.
Sentence 3 describes their physical behavior: emitting beams of radiation like cosmic lighthouses as they spin.
Sentence 4 explains their rotational stability: enormous angular momentum allowing atomic-precision timing.
Sentence 1 concludes with the scientific payoff: allowing astrophysicists to test general relativity under extreme conditions.
Sequence: 2341.`
  },
  {
    id: 'varc21-s1-q21',
    questionNumber: 21,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Odd Sentence Out',
    difficulty: 'Moderate',
    question: `Four of the following five sentences (labeled 1, 2, 3, 4, 5) form a coherent paragraph about cryptocurrency proof-of-work. Identify the odd sentence out and type its number:

1. The proof-of-work consensus mechanism secures decentralized blockchains by requiring computational hardware to solve cryptographic hash puzzles.
2. Miners race to find a cryptographic nonce that yields a block hash satisfying the network’s current difficulty target.
3. This computationally intensive verification process prevents sybil attacks and double-spending across the distributed ledger.
4. High-yield municipal bonds provide fixed coupon interest payments guaranteed by provincial tax authorities.
5. However, this algorithmic security comes at the staggering cost of massive gigawatt-scale electrical energy consumption.`,
    correctAnswer: '4',
    explanation: `Sentences 1, 2, 3, and 5 discuss blockchain proof-of-work, cryptographic nonces, security against sybil attacks, and high electrical consumption.
Sentence 4 discusses municipal government bonds and fixed coupon interest payments, which is completely out of place.
Hence, 4 is the odd sentence out.`
  },
  {
    id: 'varc21-s1-q22',
    questionNumber: 22,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Odd Sentence Out',
    difficulty: 'Moderate',
    question: `Four of the following five sentences (labeled 1, 2, 3, 4, 5) form a coherent paragraph on fungal cordyceps biology. Identify the odd sentence out and type its number:

1. The parasitic fungus Ophiocordyceps unilateralis infects carpenter ants and takes mechanical control of the host’s central nervous system.
2. The fungal mycelium manipulates the host ant to climb high onto a forest branch and clamp its jaws into the underside of a leaf in a characteristic 'death grip'.
3. Once the ant expires, a fruiting fungal stroma bursts out of the host\'s skull to shower infective spores over the colony trails below.
4. Solar eclipses occur when the moon passes directly between the Sun and the Earth during the daytime.
5. This macabre behavioral hijacking provides an extraordinary evolutionary example of extended phenotypic manipulation.`,
    correctAnswer: '4',
    explanation: `Sentences 1, 2, 3, and 5 describe the parasitic fungus Ophiocordyceps, its neurological manipulation of ants, and extended phenotype theory.
Sentence 4 is about solar eclipses in astronomy.
Hence, 4 is the odd sentence out.`
  },
  {
    id: 'varc21-s1-q23',
    questionNumber: 23,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Sentence Placement',
    difficulty: 'Moderate',
    question: `Consider the following sentence:
"By selectively allowing certain wavelengths of infrared light to pass while reflecting others, these nanomaterials passively reject solar heat gain."

Where does this sentence best fit in the paragraph below?
[1] Passive daytime radiative cooling is an emerging technology that cools buildings below ambient air temperatures without electricity. [2] Specially engineered photonic metamaterials can be laminated onto building roofs and facades. [3] At the same time, they emit thermal radiation directly into outer space through the Earth\'s 'atmospheric transparency window'. [4] This zero-energy thermal dissipation could revolutionize architectural climate control in tropical metropolises.`,
    options: ['Position [1]', 'Position [2]', 'Position [3]', 'Position [4]'],
    correctAnswer: 2,
    explanation: `Position [3] directly follows Sentence 2 introducing photonic metamaterials, explaining how they passively reject solar heat gain, immediately followed by Sentence 3 stating "At the same time, they emit thermal radiation directly into outer space...".`
  },
  {
    id: 'varc21-s1-q24',
    questionNumber: 24,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Moderate',
    question: `Read the paragraph below and choose the option that best summarizes it:

"In evolutionary genetics, the 'hygiene hypothesis' posits that the dramatic rise in autoimmune diseases, allergic asthma, and inflammatory bowel syndromes in post-industrial societies is a consequence of excessive sanitation and diminished childhood exposure to symbiotic microorganisms. For millions of years, the mammalian immune system co-evolved alongside helminthic parasites, gut microbiota, and environmental soil microbes. Deprived of these evolutionary 'old friends' that historically trained regulatory T-cells to modulate inflammatory responses, the sanitized modern immune system misdirects its defensive aggression against harmless harmless environmental allergens or self-tissue."`,
    options: [
      'The hygiene hypothesis suggests that hyper-sanitized modern lifestyles deprive the immune system of historical microbial training partners, triggering a surge in autoimmune and allergic disorders.',
      'Industrial sanitizers and soaps should be declared illegal by public healthcare organizations.',
      'Helminths and gut microbes have been proven to cause 100% of human deaths in post-industrial nations.',
      'Autoimmune diseases were far more prevalent during ancient prehistoric eras than in modern cities.'
    ],
    correctAnswer: 0,
    explanation: 'Option 1 captures the thesis: modern hyper-sanitization deprives the immune system of co-evolved microbial exposure needed to train regulatory T-cells, triggering autoimmune and allergic conditions.'
  }
];
