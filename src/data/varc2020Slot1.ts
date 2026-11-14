import { Question } from '../types';

export const varc2020Slot1Questions: Question[] = [
  // RC PASSAGE 1: Anarchism, Coercion, and Political Legitimacy (4 Questions)
  {
    id: 'varc20-s1-q1',
    questionNumber: 1,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Political Philosophy',
    difficulty: 'Challenging',
    context: `Direction for Questions 1 to 4:
The passage below is followed by questions. Choose the most appropriate answer based on the passage.

Anarchism is typically conceptualized not merely as the absence of state apparatus, but as a rigorous moral refusal to accept hierarchical authority without justification. To the philosophical anarchist, the state does not possess a presumptive right to command simply because it enforces stability or claims democratic legitimacy. Unlike classical liberals who imagine a social contract forged through implicit consent, anarchists argue that genuine political obligation requires explicit, autonomous agreement—a standard that no modern coercive state can realistically satisfy.

Central to the anarchist critique is the distinction between authority and power. Power is the empirical capacity to enforce compliance through sanctions, penal codes, or physical coercion. Authority, by contrast, is the normative right to be obeyed solely on the basis of who issues the command. When a government compels citizens to pay taxes under penalty of imprisonment, it demonstrates sovereign power, not legitimate moral authority. As Robert Paul Wolff famously contended, if moral autonomy demands that each individual act according to their own deliberative reason, then submitting unconditionally to external state authority inherently abdicates moral agency.

Yet this philosophical rejection of the state does not imply hostility toward order or social cooperation. Anarchist thinkers from Peter Kropotkin to contemporary anti-authoritarians argue that human beings are naturally inclined toward mutual aid, decentralized federation, and voluntary coordination. Order arising organically from below, rooted in reciprocal interest and shared social norms, is viewed as infinitely more robust—and undeniably more ethical—than order imposed from above through legislative mandates and monopolized violence.`,
    question: 'According to the passage, why do philosophical anarchists reject the classical liberal concept of the social contract?',
    options: [
      'Because they believe genuine political obligation requires explicit, autonomous consent rather than assumed or implicit compliance.',
      'Because they view order arising organically as inherently dangerous without legislative enforcement.',
      'Because they argue that classical liberals conflate moral autonomy with economic prosperity.',
      'Because democratic institutions always result in penal codes that suppress physical coercion.'
    ],
    correctAnswer: 0,
    explanation: `The first paragraph directly states: "Unlike classical liberals who imagine a social contract forged through implicit consent, anarchists argue that genuine political obligation requires explicit, autonomous agreement—a standard that no modern coercive state can realistically satisfy."`
  },
  {
    id: 'varc20-s1-q2',
    questionNumber: 2,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Political Philosophy',
    difficulty: 'Moderate',
    context: `Refer to the Anarchism passage.`,
    question: 'Based on the passage, the essential distinction between "power" and "authority" is that:',
    options: [
      'Power relies on the empirical capacity to enforce compliance through sanctions, whereas authority is the normative right to be obeyed.',
      'Power requires moral consensus among citizens, whereas authority relies entirely on physical coercion.',
      'Power is exercised exclusively through democratic legislatures, while authority exists solely in penal systems.',
      'Authority enables individuals to abdicate moral agency, while power preserves deliberative reason.'
    ],
    correctAnswer: 0,
    explanation: `The second paragraph defines power as "the empirical capacity to enforce compliance through sanctions, penal codes, or physical coercion," contrasted with authority as "the normative right to be obeyed solely on the basis of who issues the command."`
  },
  {
    id: 'varc20-s1-q3',
    questionNumber: 3,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Political Philosophy',
    difficulty: 'Hard',
    context: `Refer to the Anarchism passage.`,
    question: 'Which of the following, if true, would most seriously challenge the perspective of Robert Paul Wolff as cited in the passage?',
    options: [
      'If engaging in democratic deliberation and voluntary submission to majority consensus is itself an autonomous exercise of moral reason.',
      'If state tax revenues are exclusively utilized to construct decentralized federations and community centers.',
      'If modern legal codes incorporate heavier criminal sanctions against monopolized violence.',
      'If human beings in pre-state conditions frequently engaged in predatory competition rather than mutual aid.'
    ],
    correctAnswer: 0,
    explanation: `Wolff argues that submitting to external authority abdicates moral autonomy. If democratically consenting to obey external law is shown to be an active, autonomous exercise of moral reason, his fundamental conflict between autonomy and authority dissolves.`
  },
  {
    id: 'varc20-s1-q4',
    questionNumber: 4,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Political Philosophy',
    difficulty: 'Moderate',
    context: `Refer to the Anarchism passage.`,
    question: 'The author mentions Peter Kropotkin primarily to demonstrate that:',
    options: [
      'Anarchist philosophy envisions social order and robust cooperation flourishing through organic mutual aid rather than top-down coercion.',
      'Philosophical anarchism is fundamentally incompatible with communal solidarity and economic interdependence.',
      'Classical liberal thinkers failed to account for empirical penal codes in their contracts.',
      'Decentralized federations invariably collapse when subjected to coercive external pressures.'
    ],
    correctAnswer: 0,
    explanation: `Kropotkin is invoked in the third paragraph to prove that anarchism does not mean chaos, but rather posits that human beings naturally coordinate through mutual aid and decentralized federation.`
  },

  // RC PASSAGE 2: Marine Biology & Acoustic Plasticity in Seals (4 Questions)
  {
    id: 'varc20-s1-q5',
    questionNumber: 5,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Evolutionary Biology',
    difficulty: 'Moderate',
    context: `Direction for Questions 5 to 8:
Vocal learning—the ability to modify acoustic signals in response to environmental input—is an extraordinarily rare evolutionary trait among non-human mammals. While songbirds, cetaceans (whales and dolphins), and bats have long documented capacities for acoustic mimicry, terrestrial and semi-aquatic pinnipeds were traditionally viewed as vocal non-learners, limited to genetically hardwired grunts, barks, and roars. However, recent neurobiological and bioacoustic studies on young harbor seals (*Phoca vitulina*) have radically upended this paradigm.

In controlled bioacoustic playback trials, harbor seal pups exposed to elevated ambient noise demonstrated a flexible modulation of their fundamental frequency (pitch), dropping their vocal emissions to escape the masking frequency of marine engine noise or raising it above low-frequency wave turbulence. This acoustic plasticity is not merely reflexive volume adjustment (the Lombard effect); it represents deliberate structural adaptation of spectral harmonics. 

Neurologists trace this acoustic sophistication to specialized direct motor-cortical projections in the pinniped brain. In most terrestrial mammals, vocal cords are governed primarily by midbrain and hindbrain autonomic centers, precluding fine conscious modulation. Harbor seals, however, exhibit direct neural connectivity between the telencephalon (forebrain motor cortex) and larynx-controlling motor neurons. This neurological hardware mirrors the direct cortical-laryngeal pathways seen in humans and songbirds, suggesting that mammalian vocal learning arose independently through convergent evolutionary adaptation driven by the demanding acoustic ecology of ocean habitats.`,
    question: 'The primary purpose of the passage is to:',
    options: [
      'Highlight unexpected vocal learning capabilities in harbor seals and explain the behavioral and neural mechanisms underpinning them.',
      'Compare the vocal communication of songbirds with that of deep-sea cetaceans under varying ambient turbulence.',
      'Argue that the Lombard effect is exclusively restricted to terrestrial mammals with autonomic midbrain pathways.',
      'Demonstrate that human speech evolved directly from semi-aquatic pinnipeds through shared ancestral lineages.'
    ],
    correctAnswer: 0,
    explanation: `The passage introduces harbor seals as an exception to traditional views, demonstrating their acoustic pitch modulation and tracing it to direct cortical-laryngeal neural projections.`
  },
  {
    id: 'varc20-s1-q6',
    questionNumber: 6,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Evolutionary Biology',
    difficulty: 'Moderate',
    context: `Refer to the Marine Biology passage.`,
    question: 'According to the passage, how does the vocal behavior of harbor seal pups differ from the classic Lombard effect?',
    options: [
      'It involves deliberate structural adaptation of spectral harmonics and pitch rather than merely reflexive volume shifts.',
      'It is controlled exclusively by hindbrain autonomic reflexes without cortical motor activation.',
      'It occurs only when ambient ocean noise is completely eliminated from experimental habitats.',
      'It restricts vocal pitch modulation to high-frequency marine engine interference.'
    ],
    correctAnswer: 0,
    explanation: `The second paragraph notes: "This acoustic plasticity is not merely reflexive volume adjustment (the Lombard effect); it represents deliberate structural adaptation of spectral harmonics."`
  },
  {
    id: 'varc20-s1-q7',
    questionNumber: 7,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Evolutionary Biology',
    difficulty: 'Hard',
    context: `Refer to the Marine Biology passage.`,
    question: 'The phrase "convergent evolutionary adaptation" implies that:',
    options: [
      'Harbor seals, humans, and songbirds evolved direct cortical vocal pathways independently in response to environmental demands.',
      'Harbor seals inherited their neural laryngeal pathways from a common ancestral mammal shared directly with songbirds.',
      'Cetaceans and pinnipeds interbred to develop complex vocal mimicry in marine ecosystems.',
      'Direct motor-cortical connections are universal among all non-human terrestrial mammals.'
    ],
    correctAnswer: 0,
    explanation: `Convergent evolution occurs when unrelated or distantly related lineages develop similar traits independently due to adapting to similar ecological niches or functions.`
  },
  {
    id: 'varc20-s1-q8',
    questionNumber: 8,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Evolutionary Biology',
    difficulty: 'Moderate',
    context: `Refer to the Marine Biology passage.`,
    question: 'Which of the following anatomical features enables harbor seals to achieve conscious pitch modulation?',
    options: [
      'Direct neural connectivity between the forebrain motor cortex and larynx-controlling motor neurons.',
      'Autonomic hindbrain centers completely isolated from the telencephalon.',
      'Enlarged respiratory tracts adapted for high-frequency echolocation.',
      'Reflexive middle-ear muscle contractions suppressing ambient boat noise.'
    ],
    correctAnswer: 0,
    explanation: `The third paragraph states that harbor seals possess "direct neural connectivity between the telencephalon (forebrain motor cortex) and larynx-controlling motor neurons."`
  },

  // RC PASSAGE 3: Economic Inequality & The Neolithic Revolution (4 Questions)
  {
    id: 'varc20-s1-q9',
    questionNumber: 9,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Economic Anthropology',
    difficulty: 'Challenging',
    context: `Direction for Questions 9 to 12:
For decades, classical anthropology adhered to a straightforward narrative regarding the origins of socio-economic inequality: the Neolithic Revolution, by replacing nomadic hunting and foraging with sedentary cereal agriculture, generated storable crop surpluses. These granaries, in turn, permitted an elite non-producing class—priests, warriors, and administrators—to monopolize grain reserves, enforce property rights, and institutionalize hereditary inequality. Sedentism, in this view, was the original sin of structural hierarchy.

Recent comparative bioarchaeological and cross-cultural analyses, however, reveal this orthodoxy to be fatally oversimplified. Many early agrarian societies remained stubbornly egalitarian for millennia following the domestication of emmer and barley. In several settlements across the Fertile Crescent, house floor areas, grave goods, and dietary isotope profiles show virtually identical wealth distributions across centuries of intensive cultivation. Inequality did not inevitably track caloric surplus; rather, it crystallized only when specific institutional mechanisms emerged to translate economic surplus into coercive political leverage.

Crucially, the ecological nature of the crop determined the ease of elite extraction. Cereals—wheat, barley, and maize—mature simultaneously, are visible above ground, and must be harvested and stored in centralized silos, rendering them exceptionally vulnerable to tax assessments and military confiscation. By contrast, root and tuber crops (like cassava, yams, and potatoes) ripen asynchronously, remain hidden below the soil, and rot rapidly once harvested. Agrarian societies dependent on root crops rarely developed hereditary dynasties or despotic tax regimes, illustrating that technology and ecology constrain, but do not autonomously dictate, the emergence of institutional injustice.`,
    question: 'Which of the following statements best captures the central argument of the passage?',
    options: [
      'Agricultural surplus alone did not cause economic inequality; rather, specific ecological crop traits and institutional mechanisms facilitated elite exploitation.',
      'Sedentary agriculture immediately and uniformly established hereditary dynasties throughout ancient human civilizations.',
      'Egalitarian hunter-gatherer societies were economically superior to cereal-producing settlements in the Fertile Crescent.',
      'Root and tuber cultivation was abandoned because it prevented administrative elites from collecting sufficient tax revenues.'
    ],
    correctAnswer: 0,
    explanation: `The passage explains that surplus alone didn't generate inequality (many societies remained egalitarian), but the ecological characteristics of cereal crops (visibility, storage) paired with institutional coercion enabled elite exploitation.`
  },
  {
    id: 'varc20-s1-q10',
    questionNumber: 10,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Economic Anthropology',
    difficulty: 'Moderate',
    context: `Refer to the Neolithic Revolution passage.`,
    question: 'According to the passage, why did root and tuber crops rarely give rise to despotic taxation regimes?',
    options: [
      'They ripened asynchronously, grew underground, and spoiled rapidly once unearthed, impeding centralized confiscation.',
      'They yielded far fewer calories per hectare than wheat or barley, preventing population growth.',
      'They were cultivated exclusively by nomadic foragers who refused to construct permanent dwellings.',
      'They required complex religious rituals that forbade elite monopolization.'
    ],
    correctAnswer: 0,
    explanation: `Paragraph 3 specifies: "root and tuber crops... ripen asynchronously, remain hidden below the soil, and rot rapidly once harvested. Agrarian societies dependent on root crops rarely developed hereditary dynasties or despotic tax regimes."`
  },
  {
    id: 'varc20-s1-q11',
    questionNumber: 11,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Economic Anthropology',
    difficulty: 'Hard',
    context: `Refer to the Neolithic Revolution passage.`,
    question: 'The author uses archaeological evidence from the Fertile Crescent to demonstrate that:',
    options: [
      'Sedentary cereal farming could coexist with economic egalitarianism for extended historical periods.',
      'Nomadic foraging societies possessed significantly greater wealth disparities than early farming villages.',
      'Grave goods and dietary profiles are unreliable indicators of historical living standards.',
      'Emmer and barley could only be cultivated under authoritarian administrative oversight.'
    ],
    correctAnswer: 0,
    explanation: `Paragraph 2 shows that in several Fertile Crescent settlements, identical house areas and grave goods existed for centuries during intensive cultivation, proving agriculture did not immediately create hierarchy.`
  },
  {
    id: 'varc20-s1-q12',
    questionNumber: 12,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Economic Anthropology',
    difficulty: 'Moderate',
    context: `Refer to the Neolithic Revolution passage.`,
    question: 'The author would most likely agree with which of the following assertions regarding social institutions?',
    options: [
      'Ecological conditions influence the feasibility of institutional coercion, but social structures are not strictly determined by technology alone.',
      'All agricultural societies eventually succumb to totalitarian tax collection systems.',
      'Material surpluses inevitably produce hereditary ruling classes irrespective of crop biology.',
      'Nomadism is the only sociological framework capable of preventing social hierarchy.'
    ],
    correctAnswer: 0,
    explanation: `The final sentence concludes: "technology and ecology constrain, but do not autonomously dictate, the emergence of institutional injustice."`
  },

  // RC PASSAGE 4: Elephant Sociality & Infrasonic Communication (4 Questions)
  {
    id: 'varc20-s1-q13',
    questionNumber: 13,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Animal Cognition',
    difficulty: 'Moderate',
    context: `Direction for Questions 13 to 16:
African savannah elephants (*Loxodonta africana*) inhabit complex fission-fusion societies spanning vast geographic ranges. The integrity of these social networks relies heavily on the matriarch: the oldest, most experienced female who serves as a living repository of socio-ecological memory. Research over multiple decades has established that herds led by older matriarchs exhibit superior drought survival rates and more discerning discriminatory reactions to predatory threats, notably distinguishing between peaceful pastoralists and dangerous poachers.

A crucial mechanism enabling this collective cohesion across tens of kilometers is infrasonic acoustic signaling. Elephants emit low-frequency rumbles below 20 Hertz—frequencies inaudible to human ears—that propagate through both air and the upper layers of soil. When sound waves travel seismically through the ground, elephants detect these acoustic pulses via specialized pacinian corpuscles located in the skin of their trunk tips and the soles of their feet. By calculating slight time-of-arrival delays between fore and hind feet, elephants accurately triangulate the compass direction and approximate distance of distant kin.

The tragic extermination of older matriarchs by trophy hunters and poachers shatters this intricate sensory architecture. Deprived of the matriarch’s accumulated cognitive repertoire, orphaned herds exhibit hyper-vigilance, erratic migration trajectories, and severe social trauma. The collapse of elephant matriarchies demonstrates that wildlife conservation cannot treat individuals as interchangeable biological units; the preservation of culture, ecological memory, and communicative transmission is essential for species preservation.`,
    question: 'The primary purpose of the passage is to:',
    options: [
      'Detail the physiological mechanisms of elephant communication and emphasize the critical ecological role of matriarchal leadership.',
      'Explain how seismic wave velocity varies between savannah soil and atmospheric air columns.',
      'Argue that trophy hunting improves herd resilience by eliminating aged, unproductive matriarchs.',
      'Demonstrate that infrasonic sound detection is unique to African savannah elephants among all terrestrial quadrupeds.'
    ],
    correctAnswer: 0,
    explanation: `The author explores elephant matriarchal leadership, their infrasonic and seismic communication systems, and the grave conservation consequences when older matriarchs are lost.`
  },
  {
    id: 'varc20-s1-q14',
    questionNumber: 14,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Animal Cognition',
    difficulty: 'Moderate',
    context: `Refer to the Elephant Sociality passage.`,
    question: 'How do elephants triangulate the direction and distance of seismic infrasonic rumbles?',
    options: [
      'By utilizing time-of-arrival delay differences across pacinian corpuscles in their trunk tips and feet.',
      'By emitting high-frequency ultrasonic clicks echoing off savannah vegetation.',
      'By observing migratory flight paths of predatory bird species.',
      'By relying on magnetic receptors located in their tusks.'
    ],
    correctAnswer: 0,
    explanation: `Paragraph 2 explicitly states: "By calculating slight time-of-arrival delays between fore and hind feet [via pacinian corpuscles], elephants accurately triangulate the compass direction and approximate distance of distant kin."`
  },
  {
    id: 'varc20-s1-q15',
    questionNumber: 15,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Animal Cognition',
    difficulty: 'Hard',
    context: `Refer to the Elephant Sociality passage.`,
    question: 'According to the passage, the removal of older matriarchs leads to which of the following consequences for the herd?',
    options: [
      'Social disorganization, loss of ecological navigation memory, and hyper-vigilance.',
      'Rapid takeover by male bulls and immediate transition to permanent sedentary grazing.',
      'Enhanced reproductive fecundity due to reduced competition for pasture resources.',
      'Complete loss of auditory sensitivity to airborne vocal rumbles.'
    ],
    correctAnswer: 0,
    explanation: `Paragraph 3 details that orphaned herds deprived of the matriarch’s cognitive repertoire suffer "hyper-vigilance, erratic migration trajectories, and severe social trauma."`
  },
  {
    id: 'varc20-s1-q16',
    questionNumber: 16,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Reading Comprehension - Animal Cognition',
    difficulty: 'Moderate',
    context: `Refer to the Elephant Sociality passage.`,
    question: 'The author implies that wildlife conservation strategies are flawed when they:',
    options: [
      'Treat individual animals as interchangeable demographic numbers while disregarding generational culture and social memory.',
      'Invest resources in protecting large contiguous tracts of savannah grasslands.',
      'Measure seismic soil vibration using artificial seismological sensors.',
      'Prioritize anti-poaching enforcement near pastoralist communities.'
    ],
    correctAnswer: 0,
    explanation: `The final sentence asserts: "wildlife conservation cannot treat individuals as interchangeable biological units; the preservation of culture, ecological memory, and communicative transmission is essential."`
  },

  // VERBAL ABILITY: Para Summary (3 Questions)
  {
    id: 'varc20-s1-q17',
    questionNumber: 17,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Moderate',
    context: `The passage given below is followed by four alternative summaries. Choose the option that best captures the essence of the passage.`,
    question: `Modern cities increasingly deploy algorithmic predictive policing systems to forecast criminal behavior. Trained on historical arrest data, these software tools identify geographical "hot spots" for heightened surveillance. However, because historical arrest records reflect past discretionary policing biases—such as disproportionately targeting marginalized neighborhoods—the algorithms amplify and automate these historical prejudices under a veneer of computational objectivity, creating self-fulfilling surveillance feedback loops.`,
    options: [
      'Predictive policing algorithms perpetuate and institutionalize historical human biases because they are trained on prejudiced historical arrest data, falsely presenting discrimination as computational neutrality.',
      'Algorithmic policing is far more reliable and unbiased than human patrol officers when allocating limited police department resources in dangerous hot spots.',
      'Historical arrest records provide the most objective foundation for urban safety software, eliminating human discretion from criminal justice.',
      'Marginalized neighborhoods intentionally generate feedback loops to disrupt algorithmic surveillance technologies deployed by city administrators.'
    ],
    correctAnswer: 0,
    explanation: `Option A accurately distills the entire passage: predictive algorithms automate past prejudices because they train on biased data, cloaking discrimination in computational objectivity.`
  },
  {
    id: 'varc20-s1-q18',
    questionNumber: 18,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Challenging',
    context: `The passage given below is followed by four alternative summaries. Choose the option that best captures the essence of the passage.`,
    question: `For decades, medical training conceptualized the placebo effect as an annoying methodological nuisance—a statistical noise factor to be eliminated in randomized drug trials. However, contemporary neuroscience demonstrates that placebo responses trigger genuine neurochemical cascades, including endogenous endorphin synthesis and dopamine secretion. Far from being psychological self-delusion, the expectation of healing mobilizes tangible physiological pathways, suggesting that the clinical encounter itself holds measurable therapeutic efficacy.`,
    options: [
      'The placebo effect is not mere statistical noise but a measurable physiological reaction involving neurochemical release triggered by the expectation of healing.',
      'Randomized pharmaceutical drug trials should eliminate placebo controls because modern medications are inherently superior to mental expectation.',
      'Endorphin synthesis only occurs when patients ingest pharmaceutical analgesics under direct supervision of medical professionals.',
      'Placebo responses prove that modern pharmaceutical medicine is completely unnecessary for biological healing.'
    ],
    correctAnswer: 0,
    explanation: `Option A captures both parts: moving from a "nuisance" view to understanding placebo as an authentic neurochemical, physiological response driven by healing expectations.`
  },
  {
    id: 'varc20-s1-q19',
    questionNumber: 19,
    section: 'VARC',
    type: 'MCQ',
    topic: 'Verbal Ability - Para Summary',
    difficulty: 'Moderate',
    context: `The passage given below is followed by four alternative summaries. Choose the option that best captures the essence of the passage.`,
    question: `Industrial agriculture relies overwhelmingly on monocultural cereal cultivation, requiring heavy applications of synthetic fertilizers and chemical pesticides. While this model yielded unprecedented short-term caloric surpluses during the twentieth century, it has severely depleted topsoil biodiversity, exhausted freshwater aquifers, and rendered crops fragile to climate shocks. Regenerative polyculture, which mimics natural ecosystem interactions, restores soil organic matter and offers long-term food security despite lower initial yields.`,
    options: [
      'Although industrial monoculture delivered short-term grain yields, its ecological destruction makes regenerative polyculture essential for sustainable long-term food security.',
      'Synthetic chemical fertilizers are the sole method available to prevent global famine and freshwater depletion in modern farming.',
      'Regenerative polyculture achieves immediate record caloric harvests without requiring natural ecosystem interactions.',
      'Topsoil biodiversity will naturally recover even if industrial monocultural practices are expanded across all continents.'
    ],
    correctAnswer: 0,
    explanation: `Option A succinctly summarizes the tradeoff: industrial monoculture produced short-term surpluses at catastrophic environmental cost, making regenerative polyculture the viable path forward.`
  },

  // VERBAL ABILITY: Para Jumbles (3 Questions)
  {
    id: 'varc20-s1-q20',
    questionNumber: 20,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Para Jumble',
    difficulty: 'Hard',
    question: `The four sentences (labelled 1, 2, 3, 4) given below, when properly sequenced, form a coherent paragraph. Decide on the proper sequence of the order of the sentences and key in the sequence of four numbers as your answer.
1. Without these communal reference points, linguistic communication degenerates into private solipsism.
2. Ludwig Wittgenstein argued in his later philosophy that language derives its meaning exclusively from social usage.
3. Instead of representing an internal realm of private mental concepts, words function like pieces in a game governed by public conventions.
4. Hence, the very idea of a "private language"—one whose terms can only be known by a single individual—is conceptually incoherent.`,
    correctAnswer: '2314',
    explanation: `Sentence 2 introduces Wittgenstein's core philosophical premise (language meaning from social usage). Sentence 3 elaborates on this contrast (not private mental concepts, but public conventions). Sentence 1 states the consequence of lacking these communal conventions. Sentence 4 concludes logically with 'Hence' declaring private language incoherent. Sequence: 2-3-1-4.`
  },
  {
    id: 'varc20-s1-q21',
    questionNumber: 21,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Para Jumble',
    difficulty: 'Moderate',
    question: `The four sentences (labelled 1, 2, 3, 4) given below, when properly sequenced, form a coherent paragraph. Decide on the proper sequence of the order of the sentences and key in the sequence of four numbers as your answer.
1. When these microscopic plastic fragments enter marine food webs, they adsorb toxic persistent organic pollutants.
2. Each year, millions of metric tons of consumer plastics enter the world's oceans through riverine discharge.
3. These apex predators, including commercial fish species, subsequently accumulate harmful chemical concentrations that end up on human dinner plates.
4. Over time, ultraviolet radiation and ocean turbulence pulverize these debris into microplastics.`,
    correctAnswer: '2413',
    explanation: `Sentence 2 establishes the origin (millions of tons of plastic entering oceans). Sentence 4 explains what happens next over time (pulverized into microplastics). Sentence 1 explains microplastics entering marine food webs and adsorbing toxins. Sentence 3 completes the trophic chain reaching apex predators and humans. Sequence: 2-4-1-3.`
  },
  {
    id: 'varc20-s1-q22',
    questionNumber: 22,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Para Jumble',
    difficulty: 'Hard',
    question: `The four sentences (labelled 1, 2, 3, 4) given below, when properly sequenced, form a coherent paragraph. Decide on the proper sequence of the order of the sentences and key in the sequence of four numbers as your answer.
1. This optical illusion arises because the human brain evaluates size relative to horizon landmarks like trees and buildings.
2. When the moon sits low on the horizon, it appears dramatically larger than when perched high at zenith.
3. Yet photographic measurements demonstrate that the angular diameter of the lunar disc remains precisely identical in both positions.
4. In the absence of foreground terrestrial cues at zenith, the perceptual system erroneously scales the celestial body down.`,
    correctAnswer: '2314',
    explanation: `Sentence 2 introduces the phenomenon (moon appears larger on horizon than zenith). Sentence 3 introduces the paradox (photographic measurements show size is identical). Sentence 1 explains why (the optical illusion arises from evaluating size relative to horizon landmarks). Sentence 4 contrasts this with zenith where foreground cues are absent. Sequence: 2-3-1-4.`
  },

  // VERBAL ABILITY: Odd Sentence Out (2 Questions)
  {
    id: 'varc20-s1-q23',
    questionNumber: 23,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Odd Sentence Out',
    difficulty: 'Moderate',
    question: `Five jumbled up sentences (labelled 1, 2, 3, 4, 5) are given below. Four of them can be put together to form a coherent paragraph. Identify the odd sentence that does not fit into the paragraph and key in its number as your answer.
1. The rapid development of quantum computers threatens the mathematical foundations of modern public-key cryptography.
2. Shor's algorithm, when executed on a fault-tolerant quantum system, can factor large integers exponentially faster than classical supercomputers.
3. Consequently, encryption standards like RSA and elliptic-curve cryptography will become vulnerable to decryption.
4. Optical fiber communications continue to increase bandwidth efficiency across transatlantic data conduits.
5. In response, cryptographers are urgently developing post-quantum algorithms based on lattice geometry and multivariate polynomials.`,
    correctAnswer: '4',
    explanation: `Sentences 1, 2, 3, and 5 form a coherent narrative detailing the cryptographic threat posed by quantum computers and the development of post-quantum encryption. Sentence 4 discusses transatlantic optical fiber bandwidth, which is unrelated to the quantum decryption theme.`
  },
  {
    id: 'varc20-s1-q24',
    questionNumber: 24,
    section: 'VARC',
    type: 'TITA',
    topic: 'Verbal Ability - Odd Sentence Out',
    difficulty: 'Moderate',
    question: `Five jumbled up sentences (labelled 1, 2, 3, 4, 5) are given below. Four of them can be put together to form a coherent paragraph. Identify the odd sentence that does not fit into the paragraph and key in its number as your answer.
1. In ancient Sparta, state education (the agoge) prioritized martial obedience, physical austerity, and collective endurance above all else.
2. Young boys were removed from their familial homes at age seven to live in communal military barracks.
3. Athenian maritime commerce, by contrast, catalyzed the rapid emergence of democratic voting assemblies and merchant naval guilds.
4. Literacy and musical training were strictly subordinated to physical drills designed to forge fearless hoplite phalanxes.
5. Through this rigorous social conditioning, the Spartan polis subordinated individual identity entirely to military survival.`,
    correctAnswer: '3',
    explanation: `Sentences 1, 2, 4, and 5 describe the Spartan military education system (agoge). Sentence 3 abruptly shifts focus to Athenian maritime trade and democratic assemblies, making it the odd sentence out.`
  }
];
