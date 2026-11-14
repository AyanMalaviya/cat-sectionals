import { Question } from '../types';

export const varc2022Slot2Questions: Question[] = [
  // RC Set 1: Questions 1 to 4 (Stoicism, Cynicism and Hellenistic Ethics)
  {
    id: 'varc22-s2-q1',
    questionNumber: 1,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 1: Hellenistic Philosophy: Stoic Virtue vs Cynic Asceticism',
    passage: `In the fractured aftermath of the Peloponnesian War and the decline of the autonomous Athenian polis, classical Hellenistic philosophy pivoted from cosmological speculation toward therapeutic ethics. In an era marked by geopolitical instability and imperial subjugation, schools such as Stoicism and Cynicism sought to answer an urgent existential question: how can the individual attain tranquility (ataraxia) and flourishing (eudaimonia) when external circumstances are beyond personal control?

While both schools agreed that conventional social accouterments—wealth, prestige, and political power—were fundamentally indifferent (adiaphora) to virtue, they diverged profoundly in their methodological enactment. The Cynics, exemplified by Diogenes of Sinope, advocated radical shamelessness (anaideia) and active confrontation with civilized norms. Diogenes lived in a ceramic pithos in the marketplace, openly deflating aristocratic pretensions and championing a return to unmediated animal nature. For Cynics, social conventions were poisonous fabrications that enslaved human freedom.

Stoics, however, rejected this confrontational asceticism. Thinkers like Chrysippus, Epictetus, and Marcus Aurelius posited that humans are inherently rational social animals intended by Nature (Logos) to participate constructively in the cosmopolis—the universal community of reason. Rather than abandoning society, the Stoic practiced internal emotional detunement: differentiating strictly between what is within our control (prohairesis: our beliefs, desires, and moral intentions) and what is not. Virtue did not demand living like a beast in the street, but ruling one\'s own internal mind while dutifully discharging social obligations.`,
    question: 'The passage highlights that Stoicism and Cynicism fundamentally diverged on:',
    options: [
      'Whether achieving ethical virtue requires repudiating social participation or fulfilling civic duty through internal mastery.',
      'Whether external material wealth was of supreme moral value in achieving human flourishing.',
      'Whether cosmological astronomy should completely replace ethical inquiries in Hellenistic academies.',
      'Whether human beings possess any capacity whatsoever for rational deliberation.'
    ],
    correctAnswer: 0,
    explanation: 'The passage contrasts the Cynics (who advocated radical abandonment and confrontation with social conventions) with the Stoics (who believed humans are social animals meant to constructively participate in the cosmopolis while maintaining internal emotional discipline).'
  },
  {
    id: 'varc22-s2-q2',
    questionNumber: 2,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 1: Hellenistic Philosophy: Stoic Virtue vs Cynic Asceticism',
    passage: `[Refer to Passage 1: Hellenistic Philosophy: Stoic Virtue vs Cynic Asceticism]`,
    question: 'According to the passage, the concept of "prohairesis" in Stoic thought pertains to:',
    options: [
      'The realm of human moral judgment, beliefs, and internal volitional agency within one\'s control.',
      'The accumulation of political prestige and hereditary imperial titles.',
      'Living outdoors in an unvarnished ceramic storage jar in public squares.',
      'The cosmic biological force that governs celestial planetary orbits.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 3 explicitly identifies prohairesis: "differentiating strictly between what is within our control (prohairesis: our beliefs, desires, and moral intentions) and what is not."'
  },
  {
    id: 'varc22-s2-q3',
    questionNumber: 3,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 1: Hellenistic Philosophy: Stoic Virtue vs Cynic Asceticism',
    passage: `[Refer to Passage 1: Hellenistic Philosophy: Stoic Virtue vs Cynic Asceticism]`,
    question: 'What historical catalyst prompted Hellenistic philosophy to shift toward therapeutic ethics?',
    options: [
      'Geopolitical instability, the disintegration of the autonomous polis, and imperial subjugation.',
      'The invention of the Gutenberg printing press and mechanical navigation.',
      'The total triumph of Athenian naval hegemony across the Mediterranean basin.',
      'A religious decree ordering all citizens to adopt mandatory monotheistic doctrines.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 1 explains: "In the fractured aftermath of the Peloponnesian War and the decline of the autonomous Athenian polis... marked by geopolitical instability and imperial subjugation, classical Hellenistic philosophy pivoted from cosmological speculation toward therapeutic ethics."'
  },
  {
    id: 'varc22-s2-q4',
    questionNumber: 4,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 1: Hellenistic Philosophy: Stoic Virtue vs Cynic Asceticism',
    passage: `[Refer to Passage 1: Hellenistic Philosophy: Stoic Virtue vs Cynic Asceticism]`,
    question: 'The author refers to conventional social accouterments as "adiaphora" to denote that both Stoics and Cynics considered them:',
    options: [
      'Morally indifferent and non-essential for the attainment of authentic virtue.',
      'The single most critical foundation for achieving spiritual enlightenment.',
      'Inherently evil and worthy of capital legal punishment.',
      'Strictly reserved for foreign ambassadors and religious clergymen.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 2 notes: "conventional social accouterments—wealth, prestige, and political power—were fundamentally indifferent (adiaphora) to virtue."'
  },

  // RC Set 2: Questions 5 to 8 (Biomimicry and Architecture)
  {
    id: 'varc22-s2-q5',
    questionNumber: 5,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 2: Biomimetic Architecture and Passive Thermoregulation',
    passage: `For most of modern history, architectural engineering approached climatic control through an adversarial thermodynamic logic: enclose the envelope and overpower the external environment through brute mechanical energy—namely, high-load HVAC heating and refrigeration compressors. This reliance on energy-intensive mechanical cooling accounts for nearly twenty percent of worldwide building electrical consumption, generating colossal carbon emissions.

Biomimetic architecture offers an alternative by looking at natural organisms that have solved complex thermodynamic challenges through passive morphological design. The most famous exemplar is the Eastgate Centre in Harare, Zimbabwe, engineered by Mick Pearce. Inspired by the passive thermoregulation of macrotermes bellicosus (African termite mounds), the building maintains a constant internal temperature despite external desert extremes ranging from 1°C at night to 40°C during the day.

Termite mounds are not solid mounds; they are dynamic porous networks of conduits that harness diurnal chimney effects. Hot air generated by metabolic activity and solar warmth rises through central chimneys, sucking cooler ambient air into lower subterranean channels. By replicating this passive convective circulatory system with concrete slabs and night-flushing fans, the Eastgate Centre consumes thirty-five percent less energy than conventional Harare office towers.`,
    question: 'The author critiques modern HVAC engineering primarily because it:',
    options: [
      'Relies on high-load mechanical energy consumption to overpower local climate rather than leveraging passive design.',
      'Fails to incorporate sufficient synthetic refrigerant chemicals in developing nations.',
      'Draws inspiration exclusively from African termite ventilation tunnels.',
      'Is significantly cheaper to manufacture than biological building envelopes.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 1 explains that traditional architecture tackled climatic control by enclosing envelopes and overpowering external climate with brute mechanical force and high-load HVAC units.'
  },
  {
    id: 'varc22-s2-q6',
    questionNumber: 6,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 2: Biomimetic Architecture and Passive Thermoregulation',
    passage: `[Refer to Passage 2: Biomimetic Architecture and Passive Thermoregulation]`,
    question: 'How do termite mounds maintain steady internal temperatures in volatile environments?',
    options: [
      'Through passive convective chimney effects that vent rising warm air and draw cooler air through subterranean conduits.',
      'By migrating underground during daylight and surfacing only at midnight.',
      'By secreting chemical refrigerants along the outer crust of the termite mound.',
      'Through electrical fans driven by symbiotic bacterial photosynthesis.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 3 describes the mechanism: "porous networks of conduits that harness diurnal chimney effects. Hot air... rises through central chimneys, sucking cooler ambient air into lower subterranean channels."'
  },
  {
    id: 'varc22-s2-q7',
    questionNumber: 7,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 2: Biomimetic Architecture and Passive Thermoregulation',
    passage: `[Refer to Passage 2: Biomimetic Architecture and Passive Thermoregulation]`,
    question: 'Which of the following, if implemented, would best exemplify the biomimetic architectural principles discussed?',
    options: [
      'Designing residential facade tiles whose micro-grooves mimic lotus leaves to shed water and clean dirt passively without chemical detergents.',
      'Installing heavy industrial diesel generators inside basement parking facilities to power air conditioners.',
      'Covering entire glass skyscrapers in dark plastic film to absorb maximum midday solar thermal heat.',
      'Mandating that all office employees work only during night hours to avoid daytime heat.'
    ],
    correctAnswer: 0,
    explanation: 'Biomimicry refers to copying passive morphological and functional traits of living organisms (e.g. lotus leaf micro-texture for self-cleaning) to solve engineering challenges sustainably without brute energy.'
  },
  {
    id: 'varc22-s2-q8',
    questionNumber: 8,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 2: Biomimetic Architecture and Passive Thermoregulation',
    passage: `[Refer to Passage 2: Biomimetic Architecture and Passive Thermoregulation]`,
    question: 'The author mentions the 35% energy reduction of the Eastgate Centre to demonstrate:',
    options: [
      'The tangible economic and ecological viability of passive biomimetic engineering in large commercial structures.',
      'That Zimbabwe is the only country where termite mounds can be physically constructed.',
      'That modern office towers cannot accommodate computer systems without air conditioning.',
      'The total failure of natural ventilation in hot climates.'
    ],
    correctAnswer: 0,
    explanation: 'The 35% metric validates the thesis that biomimetic passive design provides a real, high-performance solution that slashes energy consumption.'
  },

  // RC Set 3: Questions 9 to 12 (Anthropology of Gift Economies)
  {
    id: 'varc22-s2-q9',
    questionNumber: 9,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 3: Marcel Mauss and the Gift Economy',
    passage: `In contemporary capitalist orthodoxy, exchange is conceptualized as an impersonal, transactional encounter: a buyer and seller interact momentarily, clear market balances through the neutral medium of fiat currency, and part ways with no lingering moral or interpersonal ties. In his foundational 1925 anthropological treatise 'The Gift' (Essai sur le don), Marcel Mauss disrupted this commercial conceit by demonstrating that in archaic and traditional societies, gift exchange is never 'free' or unburdened; rather, it constitutes a 'total social phenomenon'.

Analyzing practices like the Potlatch of Pacific Northwest Indigenous peoples and the Kula ring of the Trobriand Islanders, Mauss demonstrated that gifts carry a tripartite moral imperative: the obligation to give, the obligation to receive, and the obligation to reciprocate. A gift is not an alienated commodity; it retains a spiritual trace of the giver—what the Maori conceptualize as the 'hau' (the spirit of the gift).

By accepting a gift, the recipient enters an asymmetric state of indebtedness. Refusing to accept signifies a declaration of social hostility, while failing to reciprocate implies moral and social subjugation. Consequently, gift economies were not naive barter systems preceding money, but intricate socio-political technologies designed to weave enduring networks of solidarity, alliance, and reciprocal interdependence.`,
    question: 'According to Marcel Mauss, which of the following is true regarding gift exchange in traditional societies?',
    options: [
      'It binds participants through a threefold moral obligation: to give, receive, and reciprocate.',
      'It operates purely on the spontaneous benevolence of individuals without any social compulsion.',
      'It was an inefficient precursor to barter that completely disappeared prior to the Bronze Age.',
      'It severed all interpersonal relationships between the exchanging clans.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 2 explicitly states: "Mauss demonstrated that gifts carry a tripartite moral imperative: the obligation to give, the obligation to receive, and the obligation to reciprocate."'
  },
  {
    id: 'varc22-s2-q10',
    questionNumber: 10,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 3: Marcel Mauss and the Gift Economy',
    passage: `[Refer to Passage 3: Marcel Mauss and the Gift Economy]`,
    question: 'The author terms the gift a "total social phenomenon" because:',
    options: [
      'It simultaneously integrates religious, legal, political, moral, and economic dimensions of communal life.',
      'It requires the participation of every human being on the planet without exception.',
      'It accounts for 100% of global industrial gross domestic product.',
      'It is totally devoid of any psychological emotion or cultural rituals.'
    ],
    correctAnswer: 0,
    explanation: 'In anthropological theory and Mauss\'s formulation, a "total social phenomenon" weaves all threads of society—kinship, law, politics, morality, and economy—into a unified collective fabric.'
  },
  {
    id: 'varc22-s2-q11',
    questionNumber: 11,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 3: Marcel Mauss and the Gift Economy',
    passage: `[Refer to Passage 3: Marcel Mauss and the Gift Economy]`,
    question: 'What is the psychological or political consequence of failing to reciprocate an accepted gift in Mauss’s framework?',
    options: [
      'The recipient incurs an ongoing moral debt and acknowledges social subordination to the giver.',
      'The recipient is automatically rewarded with chieftainship over neighboring clans.',
      'The giver is forced into perpetual exile from the village.',
      'All commercial trade between nations is immediately declared illegal.'
    ],
    correctAnswer: 0,
    explanation: 'The passage highlights: "By accepting a gift, the recipient enters an asymmetric state of indebtedness... failing to reciprocate implies moral and social subjugation."'
  },
  {
    id: 'varc22-s2-q12',
    questionNumber: 12,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 3: Marcel Mauss and the Gift Economy',
    passage: `[Refer to Passage 3: Marcel Mauss and the Gift Economy]`,
    question: 'The Maori concept of "hau" illustrates that in gift economies:',
    options: [
      'Transferred objects are believed to retain an inseparable spiritual link to the original owner.',
      'Commodities must be melted down into copper ingots before change of ownership.',
      'The exchange value of cattle is tied strictly to gold commodity pegs.',
      'Gifts are regarded as completely disposable refuse after twenty-four hours.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 2 explains: "A gift is not an alienated commodity; it retains a spiritual trace of the giver—what the Maori conceptualize as the \'hau\' (the spirit of the gift)."'
  },

  // RC Set 4: Questions 13 to 16 (Neuroplasticity and Cultural Scaffolding)
  {
    id: 'varc22-s2-q13',
    questionNumber: 13,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 4: Neuronal Recycling and Cultural Inventions',
    passage: `Human cultural inventions such as reading, mathematics, and musical notation appeared far too recently in hominid history—merely five to six thousand years ago—for natural selection to have evolved specialized cortical brain modules dedicated to them. Yet, neuroimaging consistently demonstrates that adult brains process written orthography in a highly dedicated, anatomically invariant cortical region: the Visual Word Form Area (VWFA) located in the left ventral occipitotemporal cortex.

Cognitive neuroscientist Stanislas Dehaene proposed the 'neuronal recycling hypothesis' to resolve this apparent evolutionary paradox. Rather than postulating blank-slate plasticity or genetically predetermined reading genes, the hypothesis posits that cultural inventions invade and repurpose evolutionary older neural circuits that originally evolved for ecologically adjacent purposes.

In the case of literacy, the VWFA originally evolved in primates for invariant visual object recognition—identifying tree branches, animal silhouettes, and topographical contours regardless of lighting or angle. Writing systems, therefore, did not evolve arbitrarily; rather, human cultural scripts were unconsciously shaped over millennia to match the pre-existing junction-detecting wiring of the primate visual cortex. Cultural evolution molded alphabet shapes to fit the primate brain, just as the brain reshaped its synaptic connections to accommodate cultural scripts.`,
    question: 'The "neuronal recycling hypothesis" primarily seeks to resolve which apparent evolutionary dilemma?',
    options: [
      'How dedicated cortical regions exist for reading despite reading having emerged too recently for genetic evolutionary selection.',
      'Why human beings possess binocular vision while reptiles possess monocular vision.',
      'How early hominids survived without spoken language in Pleistocene savannahs.',
      'Why modern children learn to operate touchscreen tablets faster than adult primates.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 1 and 2 introduce the dilemma: cultural reading emerged only 5,000 years ago (far too recent for natural selection), yet we have dedicated cortical areas for it. Neuronal recycling explains this by showing that existing circuits are repurposed.'
  },
  {
    id: 'varc22-s2-q14',
    questionNumber: 14,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 4: Neuronal Recycling and Cultural Inventions',
    passage: `[Refer to Passage 4: Neuronal Recycling and Cultural Inventions]`,
    question: 'According to the passage, the Visual Word Form Area (VWFA) originally evolved in primates to facilitate:',
    options: [
      'Invariant visual object and contour recognition in natural habitats.',
      'Complex algebraic calculations and matrix manipulations.',
      'Auditory echo-location in subterranean cave systems.',
      'Coordination of vocal chords for polyphonic singing.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 3 states: "the VWFA originally evolved in primates for invariant visual object recognition—identifying tree branches, animal silhouettes, and topographical contours regardless of lighting or angle."'
  },
  {
    id: 'varc22-s2-q15',
    questionNumber: 15,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 4: Neuronal Recycling and Cultural Inventions',
    passage: `[Refer to Passage 4: Neuronal Recycling and Cultural Inventions]`,
    question: 'The author asserts that the shapes of human alphabetic scripts:',
    options: [
      'Were culturally selected over generations to exploit the pre-existing visual contour preferences of the primate cortex.',
      'Were transmitted across continents by extraterrestrial linguistic visitors.',
      'Are completely arbitrary and bear no connection whatsoever to neurological architecture.',
      'Were designed solely to conserve black ink during Gutenberg press operations.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 3 notes: "human cultural scripts were unconsciously shaped over millennia to match the pre-existing junction-detecting wiring of the primate visual cortex."'
  },
  {
    id: 'varc22-s2-q16',
    questionNumber: 16,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 4: Neuronal Recycling and Cultural Inventions',
    passage: `[Refer to Passage 4: Neuronal Recycling and Cultural Inventions]`,
    question: 'Which of the following phrases best captures the reciprocal relationship between culture and the human brain described in the text?',
    options: [
      'A co-evolutionary dynamic where cultural artifacts adapt to neurological constraints while neural circuits rewire to assimilate cultural tools.',
      'A one-directional conquest where genetics rigidly commands all artistic and literary creations.',
      'A total triumph of cultural blank-slate conditioning over biological substrate.',
      'An unbridgeable hostility between technology and mammalian physiology.'
    ],
    correctAnswer: 0,
    explanation: 'The conclusion sums it up: "Cultural evolution molded alphabet shapes to fit the primate brain, just as the brain reshaped its synaptic connections to accommodate cultural scripts."'
  },

  // Verbal Ability Section: Questions 17 to 24
  {
    id: 'varc22-s2-q17',
    questionNumber: 17,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Moderate',
    question: `Read the paragraph below and choose the option that best summarizes it:

"In traditional manufacturing, economies of scale dictate that unit costs decline only with massive, repetitive production runs of identical goods. Additive manufacturing—commonly known as 3D printing—fundamentally overturns this industrial paradigm. Because 3D printers build components layer by layer directly from digital CAD files without requiring custom molds, tooling dies, or assembly line retooling, the marginal cost of producing the first item is virtually identical to that of the ten-thousandth item. Consequently, additive manufacturing democratizes hyper-customized, low-volume fabrication, enabling decentralized on-demand manufacturing close to end consumers."`,
    options: [
      'By decoupling unit production costs from volume through tool-less digital fabrication, 3D printing enables cost-effective, decentralized production of customized goods.',
      'Traditional mass manufacturing will permanently eradicate 3D printing because dies and molds are infinitely cheaper to produce.',
      'CAD software has made mechanical engineers entirely obsolete in aeronautical industries.',
      'Additive manufacturing is solely used for making small plastic toys and has no industrial utility.'
    ],
    correctAnswer: 0,
    explanation: 'Option 1 captures the thesis: 3D printing overturns economies of scale by using tool-less digital fabrication, making customized, decentralized, low-volume production economical.'
  },
  {
    id: 'varc22-s2-q18',
    questionNumber: 18,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Hard',
    question: `Read the paragraph below and choose the option that best summarizes it:

"In astrophysics, the Fermi Paradox asks a haunting question: given the billions of sun-like stars in our galaxy that are billions of years older than our Sun, why have we detected no interstellar probes, radio transmissions, or alien megastructures? One prominent explanation is the 'Great Filter' hypothesis. It posits that there exists an evolutionary bottleneck somewhere along the trajectory from prebiotic chemistry to an interstellar civilization that is astronomically difficult to surpass. If the Filter lies in our evolutionary past—such as the emergence of abiogenesis or eukaryotic life—humanity may be uniquely fortunate and solitary. If the Filter lies in our technological future—such as catastrophic nuclear destruction or rogue synthetic pathogens—our long-term survival prospects are exceptionally bleak."`,
    options: [
      'The Great Filter hypothesis explains the cosmic silence by proposing an evolutionary barrier; whether that barrier lies in humanity’s past or future determines our likelihood of survival.',
      'Humanity has already achieved interstellar colonization and maintains diplomatic embassies with extraterrestrial species.',
      'The Fermi Paradox has been conclusively solved by the discovery of Dyson spheres in neighboring galaxies.',
      'Radio astronomy is fundamentally flawed because signals cannot travel through interstellar vacuum.'
    ],
    correctAnswer: 0,
    explanation: 'Option 1 accurately reflects the paradox, the concept of the Great Filter as an evolutionary bottleneck, and the dual implications of it lying in our past vs our future.'
  },
  {
    id: 'varc22-s2-q19',
    questionNumber: 19,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Para Jumble',
    difficulty: 'Moderate',
    question: `The four sentences below (labeled 1, 2, 3, 4) when properly sequenced, yield a coherent paragraph. Decide on the proper order and type in the 4-digit sequence:

1. By acting as acoustic shields, these thick canopies attenuate ambient highway noise, thereby reducing stress hormones in surrounding residential communities.
2. Urban forestry initiatives are increasingly recognized not merely as decorative landscaping, but as vital public health infrastructure.
3. Furthermore, the transpiration of mature trees creates localized microclimate cooling, lowering ambient summer temperatures by several degrees.
4. When strategically planted along traffic arteries, urban tree canopies intercept airborne particulate matter like PM2.5, preventing cardiopulmonary illnesses.`,
    correctAnswer: '2413',
    explanation: `Sentence 2 introduces the central theme: urban forestry as vital public health infrastructure.
Sentence 4 provides the first major health benefit when planted along traffic arteries: intercepting airborne particulate matter (PM2.5).
Sentence 1 expands on this road-adjacent role: acting as acoustic shields to attenuate highway noise.
Sentence 3 introduces an additional distinct ecological benefit ("Furthermore, the transpiration..."), rounding out the paragraph.
Sequence: 2413.`
  },
  {
    id: 'varc22-s2-q20',
    questionNumber: 20,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Para Jumble',
    difficulty: 'Hard',
    question: `The four sentences below (labeled 1, 2, 3, 4) when properly sequenced, yield a coherent paragraph. Decide on the proper order and type in the 4-digit sequence:

1. This symbiotic network, colloquially dubbed the 'Wood Wide Web', enables trees to exchange carbon, nitrogen, and defensive signaling molecules across vast subterranean distances.
2. Classical forestry once regarded forest stands as cut-throat arenas of solitary individual trees competing for sunlight and soil nutrients.
3. However, contemporary mycology reveals that forest ecosystems are deeply interconnected through mycorrhizal fungal networks.
4. Older, well-established 'mother trees' can even use these hyphal pathways to nurse shaded seedlings by shunting vital sugars directly to their roots.`,
    correctAnswer: '2314',
    explanation: `Sentence 2 sets up the old paradigm: classical forestry viewing trees as solitary competitors.
Sentence 3 introduces the revolutionary pivot ("However..."): contemporary mycology showing trees interconnected via mycorrhizal networks.
Sentence 1 defines and names this network: the "Wood Wide Web" through which carbon and nutrients are exchanged.
Sentence 4 gives a specific example of this exchange: "mother trees" nursing seedlings via hyphal pathways.
Sequence: 2314.`
  },
  {
    id: 'varc22-s2-q21',
    questionNumber: 21,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Odd Sentence Out',
    difficulty: 'Moderate',
    question: `Four of the following five sentences (labeled 1, 2, 3, 4, 5) form a coherent paragraph about ocean acidification. Identify the odd sentence out and type its number:

1. As anthropogenic carbon dioxide emissions surge, approximately thirty percent of this atmospheric carbon is absorbed directly into the global oceans.
2. Dissolved carbon dioxide reacts with seawater to form carbonic acid, systematically depressing oceanic pH levels in a process known as ocean acidification.
3. Deep-sea geothermal hydrothermal vents spew superheated mineral compounds that support chemosynthetic extremophile bacteria.
4. This shifting marine chemistry reduces the saturation state of carbonate ions, which marine calcifiers rely upon to build protective aragonite shells.
5. Consequently, coral reefs, mollusks, and pteropods face shell dissolution and impaired larval development across marine ecosystems.`,
    correctAnswer: '3',
    explanation: `Sentences 1, 2, 4, and 5 form a direct causal chain explaining atmospheric CO2 absorption, carbonic acid formation, drop in pH, reduction of carbonate ions, and catastrophic shell dissolution for calcifiers.
Sentence 3 discusses deep-sea hydrothermal vents and chemosynthetic bacteria, which is unrelated to anthropogenic ocean acidification.
Hence, 3 is the odd sentence out.`
  },
  {
    id: 'varc22-s2-q22',
    questionNumber: 22,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Odd Sentence Out',
    difficulty: 'Moderate',
    question: `Four of the following five sentences (labeled 1, 2, 3, 4, 5) form a coherent paragraph on historical cartography. Identify the odd sentence out and type its number:

1. Medieval European mappa mundi were not designed to be accurate geographic navigation charts, but theological diagrams illustrating sacred history.
2. Jerusalem was almost invariably positioned at the exact geometric center of these circular world maps to reflect its theological centrality in Christendom.
3. East was positioned at the top of the parchment rather than North, pointing viewers toward the terrestrial paradise of Eden.
4. Silicon-based microchips operate on binary logic gates etched with photolithographic lasers.
5. In these theological cartographies, biblical events, mythical monsters, and geographic regions coexisted within a unified cosmological narrative.`,
    correctAnswer: '4',
    explanation: `Sentences 1, 2, 3, and 5 discuss medieval mappa mundi, their theological orientation (Jerusalem at center, East at top), and their sacred geography.
Sentence 4 is about silicon microchips and binary logic gates, which is absurdly out of place.
Hence, 4 is the odd sentence out.`
  },
  {
    id: 'varc22-s2-q23',
    questionNumber: 23,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Sentence Placement',
    difficulty: 'Moderate',
    question: `Consider the following sentence:
"Without this protective magnetic envelope, ionizing cosmic rays and fierce solar winds would strip away atmospheric gases into interplanetary space."

Where does this sentence best fit in the paragraph below?
[1] Earth\'s iron core generates a planetary geodynamo that produces an expansive geomagnetic field around our world. [2] This magnetosphere extends tens of thousands of kilometers into space, acting as an invisible planetary shield. [3] Mars, which lost its internal magnetic dynamo billions of years ago, suffered precisely this catastrophic atmospheric erosion, transforming into a desolate, arid desert. [4] Life on Earth has thus flourished under the protective aegis of our planet\'s internal molten engine.`,
    options: ['Position [1]', 'Position [2]', 'Position [3]', 'Position [4]'],
    correctAnswer: 2,
    explanation: `Position [3] is perfect: The sentence states what happens "Without this protective magnetic envelope... strip away atmospheric gases".
The very next sentence (Sentence 3) directly connects by providing the tragic counterpart: "Mars, which lost its internal magnetic dynamo billions of years ago, suffered precisely this catastrophic atmospheric erosion..."`
  },
  {
    id: 'varc22-s2-q24',
    questionNumber: 24,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Moderate',
    question: `Read the paragraph below and choose the option that best summarizes it:

"In software engineering, the 'broken windows theory'—adapted from criminology—posits that unchecked code smells, neglected unit test failures, and poor architectural compromises create a cultural environment where bad practices rapidly compound. When developers observe that existing code quality standards are unenforced and substandard code is routinely merged, their psychological threshold for introducing hasty shortcuts drops significantly. Conversely, teams that enforce rigorous automated linting, zero-tolerance policies for broken test builds, and continuous refactoring foster a culture of craftsmanship where quality standards are collectively safeguarded."`,
    options: [
      'Neglecting minor coding flaws fosters an environment where technical debt rapidly compounds, whereas enforcing strict engineering discipline sustains high standards of software craftsmanship.',
      'Software bugs are primarily caused by physical damage to laptop screens and operating keyboards in office cubicles.',
      'Automated linting tools should be banned by software companies to allow engineers complete creative freedom.',
      'Unit testing is an outdated paradigm that has been replaced by manual QA testers in modern cloud companies.'
    ],
    correctAnswer: 0,
    explanation: 'Option 1 captures the thesis: just like the broken windows theory, tolerating small code flaws causes quality degradation to cascade, while enforcing continuous testing and linting maintains architectural integrity.'
  }
];
