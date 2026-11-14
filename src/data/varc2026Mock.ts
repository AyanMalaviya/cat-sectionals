import { Question } from '../types';

export const varc2026MockQuestions: Question[] = [
  // RC Set 1: Questions 1 to 4 (Craftsmanship, Automation, and Human Work in an Industrial Age)
  {
    id: 'varc26-mock-q1',
    questionNumber: 1,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 1: Craftsmanship, Efficiency and the Human Need for Meaningful Work',
    passage: `In debates over the future of labor, craftsmanship is frequently romanticized as a nostalgic refuge from the cold efficiency of assembly lines and automated systems. Traditional definitions portray the artisan as a holistic creator who oversees a product from inception to completion, exercising nuanced personal judgment and deriving direct psychological fulfillment from material mastery. In contrast, corporate industrialization fragments tasks into narrow, repetitive gestures optimized strictly for velocity and consistency.

Yet, historians of labor caution that the historical link between craft and creative liberty is far from automatic. Medieval craft guilds, for instance, operated as rigid monopolies that enforced suffocating hierarchies, prolonged apprenticeships, and stifled methodological innovations to protect their commercial hegemony. The guild master was often less an autonomous creative spirit than a regulatory gatekeeper enforcing orthodoxy. Creativity flourished not because of the institutional apparatus of craft, but frequently in defiance of it.

In contemporary workplaces, the ethos of craftsmanship is experiencing a revival, not through retrograde rejection of technology, but through its integration. In high-complexity domains like software architecture and bespoke design, practitioners blend computational power with tactile intuition. Letting machines execute deterministic, high-throughput operations liberates human cognition to grapple with ambiguity, aesthetic harmony, and structural ethics. The crucial lesson is that craft thrives only when autonomy is preserved; once craft becomes bureaucratized or subordinated to purely algorithmic metrics, its vital spark is extinguished.`,
    question: 'According to the passage, the historical examination of medieval craft guilds reveals that:',
    options: [
      'The relationship between craftsmanship and uninhibited creative innovation was not inherently guaranteed.',
      'Guilds were egalitarian collectives that championed radical artistic and technical experimentation.',
      'Industrial assembly lines were directly modeled upon the pedagogical methods of medieval master artisans.',
      'Technological automation was systematically embraced by guilds to reduce the burden of apprentice labor.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 2 explicitly states that "the historical link between craft and creative liberty is far from automatic" because medieval guilds operated as rigid monopolies that enforced suffocating hierarchies and stifled methodological innovations.'
  },
  {
    id: 'varc26-mock-q2',
    questionNumber: 2,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 1: Craftsmanship, Efficiency and the Human Need for Meaningful Work',
    passage: `[Refer to Passage 1: Craftsmanship, Efficiency and the Human Need for Meaningful Work]`,
    question: 'Which of the following would the author most likely recommend for designing modern workplace roles?',
    options: [
      'Assigning repetitive deterministic computations to machines while granting human workers autonomy for ambiguous and ethical problem-solving.',
      'A complete abolition of computational tools in favor of purely manual, pre-industrial fabrication processes.',
      'Imposing strict bureaucratic oversight and standardized performance metrics on creative design workflows.',
      'Re-establishing guild-like trade monopolies to regulate entry into software engineering professions.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 3 highlights that: "Letting machines execute deterministic, high-throughput operations liberates human cognition to grapple with ambiguity, aesthetic harmony, and structural ethics." This directly supports Option 1.'
  },
  {
    id: 'varc26-mock-q3',
    questionNumber: 3,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 1: Craftsmanship, Efficiency and the Human Need for Meaningful Work',
    passage: `[Refer to Passage 1: Craftsmanship, Efficiency and the Human Need for Meaningful Work]`,
    question: 'The author characterizes corporate industrialization primarily as a system that:',
    options: [
      'Deconstructs holistic production into atomized, standardized actions prioritizing speed and uniformity over individual fulfillment.',
      'Fosters creative experimentation by decentralizing decision-making to shop-floor workers.',
      'Replicates the artistic freedom of medieval artisans on a continental economic scale.',
      'Eliminates the necessity for any quality control or managerial supervision.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 1 notes that "corporate industrialization fragments tasks into narrow, repetitive gestures optimized strictly for velocity and consistency," contrasting this with the holistic oversight of the artisan.'
  },
  {
    id: 'varc26-mock-q4',
    questionNumber: 4,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Challenging',
    passageTitle: 'RC Passage 1: Craftsmanship, Efficiency and the Human Need for Meaningful Work',
    passage: `[Refer to Passage 1: Craftsmanship, Efficiency and the Human Need for Meaningful Work]`,
    question: 'All of the following can be inferred from the passage EXCEPT:',
    options: [
      'Bureaucratization and rigid performance measurement generally nurture and amplify the creative essence of craftsmanship.',
      'The modern renaissance of craft does not require a Luddite abandonment of advanced computational tools.',
      'Medieval apprentices faced prolonged periods of institutional subordination before attaining master status.',
      'Holistic product ownership provides psychological fulfillment that fragmented assembly work often lacks.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 3 explicitly concludes that "once craft becomes bureaucratized or subordinated to purely algorithmic metrics, its vital spark is extinguished." Therefore, stating that bureaucratization nurtures craft is false and is the correct EXCEPT choice.'
  },

  // RC Set 2: Questions 5 to 8 (Deep-Sea Hydrothermal Ecosystems and Polymetallic Nodule Mining)
  {
    id: 'varc26-mock-q5',
    questionNumber: 5,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 2: Deep-Sea Benthic Ecology and the Geopolitics of Seabed Mining',
    passage: `The Clarion-Clipperton Zone (CCZ), an abyssal plain stretching five thousand kilometers across the central Pacific, has emerged as the frontier of a bitter clash between clean-energy metal demands and oceanic conservation. Scattered across this seabed, four thousand meters beneath the photic zone, are trillions of polymetallic nodules—potato-sized accretions of manganese, nickel, cobalt, and rare earth elements precipitated over millions of years around shark teeth or shell fragments. As terrestrial reserves dwindle and electric vehicle battery supply chains face geopolitical bottlenecks, mining syndicates argue that harvesting these nodules is essential for global decarbonization.

However, marine biologists argue that abyssal plains are far from the biological deserts they were once assumed to be. In an environment characterized by crushing hydrostatic pressure, perpetual darkness, and near-freezing temperatures, biological metabolic rates are extraordinarily languid. Deep-sea glass sponges, xenophyophores, and sessile invertebrates rely on the nodules as the sole hard substrate in a landscape of fine biogenic sediment. Experimental dredging tracks cut in the 1970s remain starkly uncolonized today, indicating that benthic ecosystem recovery operates on millennia timescales rather than decades.

Furthermore, nodule extraction generates immense benthic sediment plumes. When industrial harvesting machines churn the ocean floor, they suspend microscopic particles that can drift for hundreds of nautical miles. These plumes choke the delicate filtration apparatus of deep-sea suspension feeders and disrupt bioluminescent communication networks vital for pelagic predators. The prospective trade-off is stark: mitigating atmospheric carbon concentrations by sacrificing the planet's least understood and most fragile biogeochemical cradle.`,
    question: 'The author discusses experimental dredging tracks from the 1970s primarily to illustrate that:',
    options: [
      'Disturbances to the abyssal benthic ecosystem leave long-lasting ecological scars that do not recover within human generational timeframes.',
      'Early mining technologies were far less efficient at extracting polymetallic nodules than contemporary submersibles.',
      'Fine biogenic sediments settle rapidly back onto the ocean floor without causing lasting ecological disruption.',
      'Glass sponges and xenophyophores preferentially inhabit artificial vehicle tracks over natural nodules.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 2 explains that dredging tracks cut in the 1970s remain uncolonized today, proving that "benthic ecosystem recovery operates on millennia timescales rather than decades."'
  },
  {
    id: 'varc26-mock-q6',
    questionNumber: 6,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 2: Deep-Sea Benthic Ecology and the Geopolitics of Seabed Mining',
    passage: `[Refer to Passage 2: Deep-Sea Benthic Ecology and the Geopolitics of Seabed Mining]`,
    question: 'Based on the passage, why are polymetallic nodules ecologically indispensable to abyssal organisms?',
    options: [
      'They provide the solitary firm attachment surface in an otherwise vast expanse of soft sediment.',
      'They emit chemical bioluminescence that guides pelagic predators through the photic zone.',
      'They metabolize heavy metals into consumable organic nutrients for deep-sea fish.',
      'They shelter abyssal plain species from dangerous hydrostatic water pressure.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 2 states that "sessile invertebrates rely on the nodules as the sole hard substrate in a landscape of fine biogenic sediment."'
  },
  {
    id: 'varc26-mock-q7',
    questionNumber: 7,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 2: Deep-Sea Benthic Ecology and the Geopolitics of Seabed Mining',
    passage: `[Refer to Passage 2: Deep-Sea Benthic Ecology and the Geopolitics of Seabed Mining]`,
    question: 'What is the "stark trade-off" highlighted in the concluding sentence of the passage?',
    options: [
      'Achieving atmospheric decarbonization via electric vehicle minerals at the expense of irreversible damage to fragile deep-sea biomes.',
      'Balancing geopolitical sovereignty over international waters against multinational commercial profits.',
      'Choosing between expensive terrestrial battery recycling and subsidized ocean exploration.',
      'Promoting deep-sea oil drilling while banning polymetallic nodule harvesting.'
    ],
    correctAnswer: 0,
    explanation: 'The final sentence frames the dilemma directly: "mitigating atmospheric carbon concentrations by sacrificing the planet\'s least understood and most fragile biogeochemical cradle."'
  },
  {
    id: 'varc26-mock-q8',
    questionNumber: 8,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Challenging',
    passageTitle: 'RC Passage 2: Deep-Sea Benthic Ecology and the Geopolitics of Seabed Mining',
    passage: `[Refer to Passage 2: Deep-Sea Benthic Ecology and the Geopolitics of Seabed Mining]`,
    question: 'Which of the following, if true, would most weaken the argument of the mining syndicates presented in the first paragraph?',
    options: [
      'Rapid advancements in sodium-ion and solid-state battery chemistry eliminate the reliance on cobalt and nickel for grid and EV energy storage.',
      'Terrestrial mining of nickel in tropical rainforests continues to face stringent environmental regulations.',
      'International maritime bodies impose a uniform 10% royalty tax on all minerals extracted from international waters.',
      'Deep-sea submersibles require higher electrical energy to operate under four thousand meters of water pressure.'
    ],
    correctAnswer: 0,
    explanation: 'The mining syndicates justify nodule extraction on the grounds that nickel and cobalt are irreplaceable for battery supply chains. If alternative batteries (like sodium-ion) eliminate the need for these metals entirely, the core premise for opening seabed mining collapses.'
  },

  // RC Set 3: Questions 9 to 12 (Evolutionary Linguistics and the Emergence of Symbolic Syntax)
  {
    id: 'varc26-mock-q9',
    questionNumber: 9,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 3: Evolutionary Linguistics and the Emergence of Recursive Syntax',
    passage: `The evolutionary origin of human language remains one of science's most intractable puzzles, largely because speech leaves no fossils. For decades, generative grammarians led by Noam Chomsky posited the 'saltationist' or sudden-mutation hypothesis: a solitary macromutation roughly eighty thousand years ago abruptly gifted Homo sapiens with 'Merge'—the computational capacity to recursively combine two syntactic elements into a hierarchical structure. In this view, syntax did not evolve gradually for communicative utility, but emerged instantaneously as an internal tool for conceptual thought.

Conversely, evolutionary biologists and functional linguists argue that language evolved through gradual, adaptationist natural selection. They propose that proto-language began as an open-ended repertoire of multimodal gestures and iconic vocalizations among early hominins coordinating cooperative foraging. As social group sizes expanded, the cognitive burden of grooming and maintaining coalitions favored vocal grooming over physical touch. Selection pressures gradually favored grammaticalized conventions to resolve semantic ambiguities, such as distinguishing whether 'the leopard stalked the hunter' or 'the hunter stalked the leopard.'

Recent neuroimaging of primate vocal tracts and hominin cranial endocasts offers support for this gradualist mosaic model. The anatomical prerequisites for speech—the descent of the larynx and fine motor innervation of the hypoglossal nerve—evolved hundreds of thousands of years before the purported Chomskyan macromutation. Rather than a singular grammatical explosion, language represents a convergence of exaptations: neural circuits originally evolved for hierarchical motor planning, tool manufacture, and auditory pattern analysis were co-opted and culturally refined across millennia.`,
    question: 'The author contrasts Chomsky\'s "saltationist" model with the gradualist model primarily on the basis of:',
    options: [
      'Whether recursive syntax arose instantaneously through a single macromutation or developed incrementally through natural selection and cultural adaptation.',
      'Whether speech evolved exclusively in Neanderthals or was uniquely confined to modern European hominins.',
      'Whether animal communication systems possess written grammatical alphabets.',
      'Whether language was developed solely for vocal grooming or exclusively for stone tool knapping.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraphs 1 and 2 directly establish this dichotomy: Chomsky posits an abrupt single mutation generating recursive "Merge," whereas functionalists argue for gradual, multi-stage adaptationist selection.'
  },
  {
    id: 'varc26-mock-q10',
    questionNumber: 10,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 3: Evolutionary Linguistics and the Emergence of Recursive Syntax',
    passage: `[Refer to Passage 3: Evolutionary Linguistics and the Emergence of Recursive Syntax]`,
    question: 'In the context of the third paragraph, the term "exaptation" refers to:',
    options: [
      'A biological trait or neural circuit that originally evolved for one function and was subsequently co-opted for a novel utility.',
      'A maladaptive genetic defect that inhibits linguistic vocal articulation.',
      'The sudden extinction of ancestral hominin species due to climatic shifts.',
      'A grammatical rule that is uniformly shared across every documented human language.'
    ],
    correctAnswer: 0,
    explanation: 'The passage explains exaptation by showing how "neural circuits originally evolved for hierarchical motor planning, tool manufacture... were co-opted and culturally refined across millennia" for language.'
  },
  {
    id: 'varc26-mock-q11',
    questionNumber: 11,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 3: Evolutionary Linguistics and the Emergence of Recursive Syntax',
    passage: `[Refer to Passage 3: Evolutionary Linguistics and the Emergence of Recursive Syntax]`,
    question: 'According to the second paragraph, grammaticalized conventions developed in early hominins in order to:',
    options: [
      'Disambiguate thematic roles and clarify relational meaning in complex social communications.',
      'Replace all manual gesture systems with standardized alphabetic writing.',
      'Allow solitary hunters to compute abstract mathematical concepts in isolation.',
      'Facilitate genetic hybridization between Homo sapiens and archaic hominins.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 2 notes that selection favored grammatical conventions to "resolve semantic ambiguities, such as distinguishing whether \'the leopard stalked the hunter\' or \'the hunter stalked the leopard.\'"'
  },
  {
    id: 'varc26-mock-q12',
    questionNumber: 12,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Challenging',
    passageTitle: 'RC Passage 3: Evolutionary Linguistics and the Emergence of Recursive Syntax',
    passage: `[Refer to Passage 3: Evolutionary Linguistics and the Emergence of Recursive Syntax]`,
    question: 'Which of the following findings would pose the greatest challenge to Chomsky\'s macromutation hypothesis?',
    options: [
      'Fossil evidence confirming that Neanderthals possessed identical vocal tract anatomy, FoxP2 gene variants, and complex hierarchical symbolic burials long before eighty thousand years ago.',
      'Laboratory experiments demonstrating that modern chimpanzees cannot learn recursive Shakespearean sonnets.',
      'A neurological study showing that listening to speech activates the temporal lobes of human infants.',
      'The discovery of stone handaxes exhibiting geometric bilateral symmetry.'
    ],
    correctAnswer: 0,
    explanation: 'Chomsky\'s saltationist hypothesis asserts that Homo sapiens underwent a unique, solitary macromutation around 80,000 years ago that created hierarchical syntax. Demonstrating that Neanderthals possessed the identical genetic, anatomical, and symbolic faculties hundreds of thousands of years earlier completely refutes the recent solitary mutation model.'
  },

  // RC Set 4: Questions 13 to 16 (Digital Copyright, Streaming Platforms and Vanishing Culture)
  {
    id: 'varc26-mock-q13',
    questionNumber: 13,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 4: Digital Ephemerality, Platform Enclosure, and the Vanishing Archive',
    passage: `The transition from physical cultural media (vinyl records, paperbacks, and DVDs) to subscription streaming services was heralded as the ultimate democratization of human culture. For a modest monthly fee, users gained instantaneous access to an ostensibly boundless universal library. Yet, beneath this frictionless convenience lies a radical and precarious legal restructuring: consumers no longer purchase ownership of cultural goods; they merely rent revocable, ephemeral licenses to access corporate servers.

This shift has created profound vulnerabilities for cultural preservation. When media corporations merge, restructure, or seek corporate tax write-offs, they frequently purge back-catalogs overnight. Movies, television series, and video games are unceremoniously wiped from platform servers, leaving no physical artifact or legal avenue for public access. Unlike physical copies that survive in public libraries, second-hand bookstores, and personal collections regardless of a studio's financial health, streaming media exists entirely at the whim of platform balance sheets and algorithmic curation.

This enclosure is enforced by draconian Digital Rights Management (DRM) regimes and anti-circumvention provisions in copyright legislation, such as Section 1201 of the US Digital Millennium Copyright Act. Even when games or films face complete digital extinction, archivists and academic institutions are legally prohibited from bypassing encryption to preserve the code. We are currently living through a paradoxical dark age: producing more cultural data than any civilization in history, yet tethering its survival to proprietary corporate clouds programmed to self-delete whenever profit margins dictate.`,
    question: 'The author\'s primary thesis regarding the transition to streaming platforms is that:',
    options: [
      'The demise of physical ownership in favor of corporate licensing has left modern cultural heritage vulnerable to abrupt digital extinction.',
      'Streaming platforms are economically superior to physical bookstores and DVD rental stores in supporting independent artists.',
      'Consumers have rejected digital streaming and are uniformly returning to vinyl records and paperbacks.',
      'Copyright laws should be strengthened to prevent academic institutions from inspecting server code.'
    ],
    correctAnswer: 0,
    explanation: 'The entire passage argues that replacing physical ownership with revocable licensing allows corporations to delete cultural artifacts overnight, threatening public preservation.'
  },
  {
    id: 'varc26-mock-q14',
    questionNumber: 14,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Hard',
    passageTitle: 'RC Passage 4: Digital Ephemerality, Platform Enclosure, and the Vanishing Archive',
    passage: `[Refer to Passage 4: Digital Ephemerality, Platform Enclosure, and the Vanishing Archive]`,
    question: 'How does the survival of physical cultural media differ from streaming media, according to the second paragraph?',
    options: [
      'Physical media can endure decentralized in libraries and private collections independent of corporate decisions, whereas streaming content depends entirely on platform server maintenance.',
      'Physical media possesses infinite longevity that is completely immune to physical decay or fire.',
      'Physical media is legally exempt from all national and international copyright regulations.',
      'Physical media is subsidized by streaming platforms to preserve historical fidelity.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 2 contrasts physical copies surviving in "public libraries, second-hand bookstores, and personal collections" with streaming content that exists "entirely at the whim of platform balance sheets."'
  },
  {
    id: 'varc26-mock-q15',
    questionNumber: 15,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Moderate',
    passageTitle: 'RC Passage 4: Digital Ephemerality, Platform Enclosure, and the Vanishing Archive',
    passage: `[Refer to Passage 4: Digital Ephemerality, Platform Enclosure, and the Vanishing Archive]`,
    question: 'The author cites Section 1201 of the Digital Millennium Copyright Act to demonstrate:',
    options: [
      'How legal prohibitions on bypassing encryption actively hinder archivists from rescuing and preserving endangered digital media.',
      'The government\'s successful establishment of a comprehensive universal digital archive.',
      'A legislative framework that guarantees consumers permanent perpetual ownership of their streaming playlists.',
      'The complete elimination of software piracy in international commercial markets.'
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 3 highlights that anti-circumvention provisions mean that even when digital works face extinction, "archivists and academic institutions are legally prohibited from bypassing encryption to preserve the code."'
  },
  {
    id: 'varc26-mock-q16',
    questionNumber: 16,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension',
    difficulty: 'Challenging',
    passageTitle: 'RC Passage 4: Digital Ephemerality, Platform Enclosure, and the Vanishing Archive',
    passage: `[Refer to Passage 4: Digital Ephemerality, Platform Enclosure, and the Vanishing Archive]`,
    question: 'The term "paradoxical dark age" in the final sentence highlights the contradiction between:',
    options: [
      'The unprecedented volume of cultural production and its extreme institutional fragility due to corporate cloud dependencies.',
      'The high cost of digital broadband and the falling prices of consumer televisions.',
      'The scientific brilliance of medieval monks and the computational ignorance of modern developers.',
      'The expansion of public university libraries alongside decreasing student enrollment.'
    ],
    correctAnswer: 0,
    explanation: 'The final sentence states: "We are currently living through a paradoxical dark age: producing more cultural data than any civilization in history, yet tethering its survival to proprietary corporate clouds programmed to self-delete."'
  },

  // Verbal Ability Section: Questions 17 to 24
  // Para-Summary Questions (17 to 19)
  {
    id: 'varc26-mock-q17',
    questionNumber: 17,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Moderate',
    question: `Read the paragraph below and choose the option that most concisely captures its core argument:

Biological senescence was long regarded as an evolutionary puzzle: why would natural selection preserve a process that inexorably leads to somatic decay and mortality? The prevailing evolutionary answer lies in the 'antagonistic pleiotropy' hypothesis. Natural selection operates with immense vigor on traits that enhance reproductive fitness in early life, while its evolutionary grip weakens dramatically in post-reproductive years. Consequently, alleles that confer a decisive competitive or reproductive advantage in youth—such as robust calcium deposition or heightened hormone surges—are aggressively favored, even if their pleiotropic side-effects cause arterial calcification and cellular degeneration decades later. Evolution does not prioritize long-term bodily preservation; it prioritizes early reproductive transmission.`,
    options: [
      'Antagonistic pleiotropy explains senescence because natural selection strongly favors genetic alleles boosting early-life reproductive success, even if those same alleles cause inevitable somatic decay in post-reproductive old age.',
      'Somatic decay in older organisms is an accidental biological error that natural selection is gradually evolving to eradicate.',
      'Calcium deposition and hormone surges are harmful genetic mutations that reduce the life expectancy of prehistoric hominins.',
      'Natural selection exerts identical evolutionary pressure across every stage of an organism\'s lifespan from birth to death.'
    ],
    correctAnswer: 0,
    explanation: 'Option 1 concisely captures the core mechanism: antagonistic pleiotropy shows that natural selection prioritizes early-life reproductive fitness over post-reproductive somatic longevity.'
  },
  {
    id: 'varc26-mock-q18',
    questionNumber: 18,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Hard',
    question: `Read the paragraph below and choose the option that most concisely captures its core argument:

In behavioral economics, the 'sunk cost fallacy' describes the cognitive bias where individuals persist in a failing endeavor because of previously invested resources (money, time, or emotional energy) that cannot be recovered. Economists prescribe that rational decision-making should evaluate only prospective marginal costs and marginal benefits. However, evolutionary psychologists argue that sunk cost persistence is not merely irrational noise; in ancestral environments characterized by high unpredictability and reputational accountability, abandoning projects prematurely signaled unreliability and loss of social capital. Honoring commitments, even costly ones, served as a credible fitness signal to cooperative group members.`,
    options: [
      'While classical economics dismisses the sunk cost fallacy as irrational, evolutionary psychology suggests persistence in costly commitments functioned as a vital reputation and fitness signal in social groups.',
      'Behavioral economics has proven that human beings are incapable of calculating prospective marginal costs and benefits.',
      'Ancestral hunter-gatherers had unlimited economic resources and therefore never suffered from financial sunk costs.',
      'Reputational accountability is completely unnecessary in modern institutional decision-making.'
    ],
    correctAnswer: 0,
    explanation: 'Option 1 accurately captures the synthesis between the economic definition of the sunk cost fallacy and the evolutionary perspective explaining its adaptive social-signaling function.'
  },
  {
    id: 'varc26-mock-q19',
    questionNumber: 19,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Moderate',
    question: `Read the paragraph below and choose the option that most concisely captures its core argument:

Urban heat islands—metropolitan zones experiencing significantly elevated temperatures relative to surrounding rural hinterlands—are primarily artifacts of pavement albedo and vegetative loss. Dark asphalt and concrete absorb shortwave solar radiation during daylight hours and continuously re-radiate it as thermal infrared at night. Simultaneously, the removal of tree canopies halts evapotranspiration, the natural microclimatic cooling mechanism of vegetation. Urban re-greening initiatives, including reflective cool roofs and bioswales, are not merely aesthetic enhancements; they constitute essential thermodynamic infrastructure that lowers peak grid electrical demand and mitigates urban heat-wave mortality.`,
    options: [
      'Urban heat islands caused by low-albedo materials and deforested landscapes can be mitigated by reflective surfaces and urban forestry, which function as vital cooling infrastructure.',
      'Metropolitan cities should permanently ban all concrete construction and replace roads with dirt tracks.',
      'Global warming is exclusively caused by dark asphalt pavements in North American cities.',
      'Evapotranspiration is a toxic chemical process that raises nocturnal city temperatures.'
    ],
    correctAnswer: 0,
    explanation: 'Option 1 accurately summarizes both the thermodynamic cause (low-albedo materials and loss of evapotranspiration) and the infrastructural solution (cool roofs, bioswales, urban trees).'
  },

  // Para Jumbles / Sentence Sequencing (Questions 20 to 22) - TITA
  {
    id: 'varc26-mock-q20',
    questionNumber: 20,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Para Jumbles',
    difficulty: 'Moderate',
    question: `The four sentences (labelled 1, 2, 3, 4) below, when properly sequenced, form a coherent paragraph. Decide on the proper sequence of the sentences and key in the numerical sequence (e.g., 2143):

1. This subterranean mycelial web connects individual trees across vast forested acreages into a cooperative superorganism.
2. For centuries, silviculturists viewed forest trees as solitary Darwinian combatants engaged in cutthroat competition for sunlight and root space.
3. Through this network, elder 'mother trees' nourish seedlings, shuttle defense carbon to dying neighbors, and transmit biochemical distress warnings.
4. Recent mycorrhizal discoveries, however, have dismantled this hyper-individualistic view by unveiling extensive underground fungal threads.`,
    options: [],
    correctAnswer: '2413',
    explanation: 'Sentence 2 introduces the traditional historical perspective (trees viewed as solitary combatants). Sentence 4 introduces the contrasting modern discovery ("however, have dismantled... mycorrhizal discoveries... underground fungal threads"). Sentence 1 refers directly to these threads ("This subterranean mycelial web connects..."). Sentence 3 explains the specific functional benefits delivered through this network ("Through this network, elder mother trees nourish..."). Proper sequence: 2413.'
  },
  {
    id: 'varc26-mock-q21',
    questionNumber: 21,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Para Jumbles',
    difficulty: 'Hard',
    question: `The four sentences (labelled 1, 2, 3, 4) below, when properly sequenced, form a coherent paragraph. Decide on the proper sequence of the sentences and key in the numerical sequence:

1. Rather than being passive spectators, the readers actively reconstruct the emotional trajectories of fictional protagonists in their own neural circuitry.
2. Cognitive literary theorists term this immersive phenomenon 'embodied simulation.'
3. When we read of a character grasping an icy banister or shuddering with dread, our motor and sensory cortices fire in empathetic resonance.
4. It demonstrates that imaginative engagement with fiction is a physical, sensory dialogue rather than a dry linguistic decoding.`,
    options: [],
    correctAnswer: '3124',
    explanation: 'Sentence 3 introduces the concrete psychological observation (reading about sensory actions triggers motor/sensory cortices). Sentence 1 explains what this reveals about the readers (they actively reconstruct emotional trajectories). Sentence 2 introduces the theoretical term for this ("Cognitive literary theorists term this immersive phenomenon \'embodied simulation\'"). Sentence 4 delivers the overarching concluding insight ("It demonstrates that imaginative engagement..."). Proper sequence: 3124.'
  },
  {
    id: 'varc26-mock-q22',
    questionNumber: 22,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Para Jumbles',
    difficulty: 'Challenging',
    question: `The four sentences (labelled 1, 2, 3, 4) below, when properly sequenced, form a coherent paragraph. Decide on the proper sequence of the sentences and key in the numerical sequence:

1. The resulting algorithmic feedback loops trap consumers inside epistemic echo chambers optimized solely to harvest dwell time.
2. Social media algorithms are primarily calibrated to maximize user engagement and ad-impression dwell time.
3. Because provocative indignation triggers visceral human attention far more reliably than nuanced consensus, platforms disproportionately amplify outrage.
4. Over time, civic discourse fractures as mutually antagonistic tribes consume irreconcilable factual realities.`,
    options: [],
    correctAnswer: '2314',
    explanation: 'Sentence 2 establishes the core operational goal of social media platforms (maximize engagement/dwell time). Sentence 3 explains the psychological lever exploited to achieve this (provocative outrage captures visceral attention). Sentence 1 explains the direct systemic consequence (algorithmic feedback loops creating echo chambers). Sentence 4 summarizes the broader democratic aftermath (fractured civic discourse and antagonistic tribes). Proper sequence: 2314.'
  },

  // Odd Sentence Out (Questions 23 to 24)
  {
    id: 'varc26-mock-q23',
    questionNumber: 23,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Odd Sentence Out',
    difficulty: 'Moderate',
    question: `Five sentences are given below. Four of them, when properly sequenced, form a coherent paragraph. Identify the sentence that does NOT fit into the paragraph and key in its number (e.g., 5):

1. Circadian rhythms are orchestrated by the suprachiasmatic nucleus, a master pacemaker located in the anterior hypothalamus.
2. Exposure to short-wavelength blue light from digital displays suppresses nocturnal melatonin secretion, delaying phase transitions.
3. This disruption has been linked to metabolic dysregulation, impaired memory consolidation, and cardiovascular strain.
4. Industrialized societies have largely abandoned seasonal agricultural calendars in favor of artificial indoor shifts.
5. Consequently, preserving darkness prior to sleep is a critical biological hygiene imperative for maintaining neuroendocrine homeostasis.`,
    options: [],
    correctAnswer: '4',
    explanation: 'Sentences 1, 2, 3, and 5 form a tight, coherent physiological paragraph about the master circadian clock, blue light suppression of melatonin, resulting metabolic/health harms, and the resulting biological hygiene imperative. Sentence 4 shifts the topic to broader economic/historical sociology (seasonal agricultural calendars vs indoor shifts) and is the odd sentence out.'
  },
  {
    id: 'varc26-mock-q24',
    questionNumber: 24,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Odd Sentence Out',
    difficulty: 'Hard',
    question: `Five sentences are given below. Four of them, when properly sequenced, form a coherent paragraph. Identify the sentence that does NOT fit into the paragraph and key in its number:

1. Quantum entanglement describes a physical phenomenon where pairs or groups of particles interact in ways such that the quantum state of each particle cannot be described independently of the state of the others.
2. Even when separated by immense interstellar expanses, a measurement performed on one entangled particle instantaneously dictates the conjugate outcome of its partner.
3. Albert Einstein famously ridiculed this non-local connection, labeling it "spooky action at a distance" because it appeared to violate the relativistic cosmic speed limit of light.
4. In classical Newtonian mechanics, deterministic clockwork trajectories guaranteed that every future state could be predicted with complete certainty given initial conditions.
5. Subsequent experimental tests of Bell\'s inequality have overwhelmingly vindicated quantum mechanics, proving that physical reality is fundamentally non-local.`,
    options: [],
    correctAnswer: '4',
    explanation: 'Sentences 1, 2, 3, and 5 form a coherent narrative detailing the definition of quantum entanglement, its instantaneous non-local correlation across distances, Einstein\'s skeptical "spooky action" objection, and Bell\'s inequality experiments vindicating non-locality. Sentence 4 digresses into classical Newtonian determinism and is the odd sentence out.'
  }
];
