import { Question } from '../types';

export const dilr2022Slot3Questions: Question[] = [
  // SET 1: Hospital Resident Doctor Shifts (Questions 1 to 5)
  {
    id: 'dilr22-s3-q1',
    questionNumber: 1,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Scheduling & Constraints',
    difficulty: 'Moderate',
    passageTitle: 'Set 1: Hospital Resident Doctor Night Shifts',
    passage: `Five resident doctors—Dr. Ananya, Dr. Bhavin, Dr. Chitra, Dr. Deepak, and Dr. Esha—were scheduled for night duties across five consecutive days from Monday to Friday. Exactly one doctor was on duty each night.
The following rules and preferences governed their roster:
1. Dr. Chitra was on duty exactly two days before Dr. Deepak.
2. Dr. Bhavin was on duty on either Tuesday or Wednesday.
3. Dr. Ananya was on duty on a day earlier in the week than Dr. Esha.
4. Neither Dr. Ananya nor Dr. Esha was on duty on Monday.
5. Dr. Deepak was not on duty on Friday.`,
    question: 'On which day of the week was Dr. Chitra on duty?',
    options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    correctAnswer: 0,
    explanation: `Let's analyze the days: Mon (1), Tue (2), Wed (3), Thu (4), Fri (5).
Doctors: A, B, C, D, E.
Clue 1: C is 2 days before D: so possible (C, D) pairs are:
- (Mon, Wed)
- (Tue, Thu)
- (Wed, Fri) -> but Clue 5 states D was NOT on duty on Friday. So (Wed, Fri) is ruled out!
Thus, (C, D) is either (Mon, Wed) or (Tue, Thu).

Case 1: C is on Mon (Day 1) and D is on Wed (Day 3).
Remaining days: Tue (2), Thu (4), Fri (5).
Remaining doctors: A, B, E.
Clue 2: B is on either Tue or Wed. Since D is on Wed, B MUST be on Tuesday!
Now remaining days: Thu and Fri.
Remaining doctors: A and E.
Clue 3: A is on duty on a day earlier than E.
So A is on Thursday and E is on Friday.
Check Clue 4: "Neither A nor E was on Monday." Satisfied (C is on Monday!).
All constraints are fully satisfied!
Roster:
- Monday: Dr. Chitra
- Tuesday: Dr. Bhavin
- Wednesday: Dr. Deepak
- Thursday: Dr. Ananya
- Friday: Dr. Esha

Let's test Case 2: C on Tue, D on Thu.
Remaining days: Mon, Wed, Fri.
Clue 4: Neither A nor E is on Monday -> so B must be on Monday!
However, Clue 2 says B is on either Tuesday or Wednesday. Contradiction!
Therefore, Case 1 is the unique valid schedule.
Dr. Chitra was on duty on Monday.`
  },
  {
    id: 'dilr22-s3-q2',
    questionNumber: 2,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Scheduling & Constraints',
    difficulty: 'Moderate',
    passageTitle: 'Set 1: Hospital Resident Doctor Night Shifts',
    passage: `[Refer to Set 1: Hospital Resident Doctor Night Shifts]`,
    question: 'Who was on duty on Friday?',
    options: ['Dr. Esha', 'Dr. Deepak', 'Dr. Ananya', 'Dr. Bhavin'],
    correctAnswer: 0,
    explanation: `From the unique schedule determined in Question 1:
Monday: Dr. Chitra
Tuesday: Dr. Bhavin
Wednesday: Dr. Deepak
Thursday: Dr. Ananya
Friday: Dr. Esha.
Hence, Dr. Esha was on duty on Friday.`
  },
  {
    id: 'dilr22-s3-q3',
    questionNumber: 3,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Scheduling & Constraints',
    difficulty: 'Moderate',
    passageTitle: 'Set 1: Hospital Resident Doctor Night Shifts',
    passage: `[Refer to Set 1: Hospital Resident Doctor Night Shifts]`,
    question: 'How many days elapsed between Dr. Bhavin\'s shift and Dr. Esha\'s shift? (Count intermediate days between them)',
    correctAnswer: '2',
    explanation: `Dr. Bhavin worked on Tuesday. Dr. Esha worked on Friday.
The intermediate days between Tuesday and Friday are Wednesday and Thursday.
Therefore, exactly 2 days elapsed between their shifts.`
  },
  {
    id: 'dilr22-s3-q4',
    questionNumber: 4,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Scheduling & Constraints',
    difficulty: 'Moderate',
    passageTitle: 'Set 1: Hospital Resident Doctor Night Shifts',
    passage: `[Refer to Set 1: Hospital Resident Doctor Night Shifts]`,
    question: 'Which doctor was on duty on Thursday?',
    options: ['Dr. Ananya', 'Dr. Chitra', 'Dr. Bhavin', 'Dr. Deepak'],
    correctAnswer: 0,
    explanation: `Dr. Ananya was scheduled on Thursday.`
  },
  {
    id: 'dilr22-s3-q5',
    questionNumber: 5,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Scheduling & Constraints',
    difficulty: 'Moderate',
    passageTitle: 'Set 1: Hospital Resident Doctor Night Shifts',
    passage: `[Refer to Set 1: Hospital Resident Doctor Night Shifts]`,
    question: 'Which pair of doctors were on duty on adjacent days?',
    options: ['Dr. Chitra and Dr. Bhavin', 'Dr. Chitra and Dr. Deepak', 'Dr. Bhavin and Dr. Esha', 'Dr. Ananya and Dr. Chitra'],
    correctAnswer: 0,
    explanation: `Dr. Chitra was on duty on Monday and Dr. Bhavin was on duty on Tuesday. They worked on consecutive (adjacent) days.`
  },

  // SET 2: CleanTech Energy Production and Grid Contribution (Questions 6 to 10)
  {
    id: 'dilr22-s3-q6',
    questionNumber: 6,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Energy & Multi-Variable Ratios',
    difficulty: 'Moderate',
    passageTitle: 'Set 2: CleanTech Regional Power Generation',
    passage: `A regional power authority manages four renewable plants: Solar, Wind, Hydro, and Biomass.
The table below provides total annual energy generated (in Megawatt-hours, MWh) and the transmission loss percentage for three consecutive years (2020, 2021, and 2022):

Source   | 2020 Generation (MWh) | 2020 Loss % | 2021 Generation (MWh) | 2021 Loss % | 2022 Generation (MWh) | 2022 Loss %
Solar    | 1200                  | 10%         | 1500                  | 8%          | 2000                  | 5%
Wind     | 1800                  | 12%         | 2000                  | 10%         | 2400                  | 8%
Hydro    | 3000                  | 5%          | 3200                  | 5%          | 3500                  | 4%
Biomass  | 800                   | 15%         | 900                   | 12%         | 1000                  | 10%

Note:
Effective Energy Delivered to Grid = Generation × (1 - Transmission Loss % / 100).`,
    question: 'What was the Effective Energy Delivered to the Grid by the Wind plant in 2022?',
    options: ['2208 MWh', '2160 MWh', '2240 MWh', '2300 MWh'],
    correctAnswer: 0,
    explanation: `Wind plant generation in 2022 = 2400 MWh.
Transmission Loss % = 8%.
Effective delivered fraction = 100% - 8% = 92% = 0.92.
Effective Energy Delivered = 2400 × 0.92 = 2208 MWh.`
  },
  {
    id: 'dilr22-s3-q7',
    questionNumber: 7,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Percentage Growth',
    difficulty: 'Moderate',
    passageTitle: 'Set 2: CleanTech Regional Power Generation',
    passage: `[Refer to Set 2: CleanTech Regional Power Generation]`,
    question: 'Which source experienced the highest percentage growth in total energy generated from 2020 to 2022?',
    options: ['Solar', 'Wind', 'Biomass', 'Hydro'],
    correctAnswer: 0,
    explanation: `Percentage growth from 2020 to 2022:
- Solar: (2000 - 1200) / 1200 = 800 / 1200 = 66.67%.
- Wind: (2400 - 1800) / 1800 = 600 / 1800 = 33.33%.
- Hydro: (3500 - 3000) / 3000 = 500 / 3000 = 16.67%.
- Biomass: (1000 - 800) / 800 = 200 / 800 = 25.0%.
Solar recorded the highest percentage growth at 66.67%.`
  },
  {
    id: 'dilr22-s3-q8',
    questionNumber: 8,
    section: 'DILR',
    type: 'TITA',
    topic: 'Data Interpretation - Loss Calculation',
    difficulty: 'Moderate',
    passageTitle: 'Set 2: CleanTech Regional Power Generation',
    passage: `[Refer to Set 2: CleanTech Regional Power Generation]`,
    question: 'What was the total energy lost in transmission (in MWh) across all four sources combined in 2020?',
    correctAnswer: '606',
    explanation: `Calculate 2020 losses for each source:
- Solar loss = 10% of 1200 = 120 MWh.
- Wind loss = 12% of 1800 = 216 MWh.
- Hydro loss = 5% of 3000 = 150 MWh.
- Biomass loss = 15% of 800 = 120 MWh.
Total transmission loss = 120 + 216 + 150 + 120 = 606 MWh.`
  },
  {
    id: 'dilr22-s3-q9',
    questionNumber: 9,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Ratio Calculation',
    difficulty: 'Moderate',
    passageTitle: 'Set 2: CleanTech Regional Power Generation',
    passage: `[Refer to Set 2: CleanTech Regional Power Generation]`,
    question: 'What was the ratio of Effective Energy Delivered by Solar to that by Hydro in 2022?',
    options: ['19 : 33.6', '1 : 2', '4 : 7', '19 : 35'],
    correctAnswer: 0,
    explanation: `Solar 2022 Effective = 2000 × (1 - 0.05) = 2000 × 0.95 = 1900 MWh.
Hydro 2022 Effective = 3500 × (1 - 0.04) = 3500 × 0.96 = 3360 MWh.
Ratio = 1900 / 3360 = 190 / 336 = 19 / 33.6 (or 95 / 168).`
  },
  {
    id: 'dilr22-s3-q10',
    questionNumber: 10,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Aggregate Analysis',
    difficulty: 'Moderate',
    passageTitle: 'Set 2: CleanTech Regional Power Generation',
    passage: `[Refer to Set 2: CleanTech Regional Power Generation]`,
    question: 'In 2021, what percentage of the total energy generated was contributed by the Hydro plant?',
    options: ['42.1%', '45.3%', '38.5%', '40.0%'],
    correctAnswer: 0,
    explanation: `Total generation in 2021 = 1500 + 2000 + 3200 + 900 = 7600 MWh.
Hydro generation in 2021 = 3200 MWh.
Percentage contribution = (3200 / 7600) × 100% = (32 / 76) × 100% = (8 / 19) × 100% ≈ 42.105% ≈ 42.1%.`
  },

  // SET 3: Chess Tournament Rating Points (Questions 11 to 15)
  {
    id: 'dilr22-s3-q11',
    questionNumber: 11,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Tournaments and Point Tables',
    difficulty: 'Hard',
    passageTitle: 'Set 3: Grandmaster Blitz Chess Invitational',
    passage: `Five chess grandmasters—Carlsen, Nakamura, Ding, Nepo, and Firouzja—competed in a single round-robin blitz championship.
Scoring:
- Win: 1.0 point
- Draw: 0.5 points
- Loss: 0 points

Facts known after all 10 games were played:
1. Carlsen finished alone in first place with 3.5 points, having conceded no losses.
2. Nakamura and Ding tied for second place with 2.5 points each.
3. Nepo finished fourth with 1.5 points.
4. Firouzja finished fifth with 0.0 points (lost all games).
5. The game between Nakamura and Ding ended in a draw.`,
    question: 'How many games did Carlsen win during the championship?',
    options: ['3 wins', '4 wins', '2 wins', '1 win'],
    correctAnswer: 0,
    explanation: `Each player plays 4 games in total.
Carlsen scored 3.5 points out of 4 with 0 losses.
Let \\( w \\) be wins and \\( d \\) be draws.
\\( w + d = 4 \\)
\\( 1 \\times w + 0.5 \\times d = 3.5 \\)
\\( w + 0.5(4 - w) = 3.5 \\implies 0.5w + 2 = 3.5 \\implies 0.5w = 1.5 \\implies w = 3 \\).
Carlsen won 3 games and drew 1 game.`
  },
  {
    id: 'dilr22-s3-q12',
    questionNumber: 12,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Tournaments and Point Tables',
    difficulty: 'Moderate',
    passageTitle: 'Set 3: Grandmaster Blitz Chess Invitational',
    passage: `[Refer to Set 3: Grandmaster Blitz Chess Invitational]`,
    question: 'Which player drew against Carlsen?',
    options: ['Either Nakamura or Ding', 'Nepo', 'Firouzja', 'Nobody (Carlsen drew no games)'],
    correctAnswer: 0,
    explanation: `Carlsen has 1 draw.
Firouzja lost all games (0 points), so Firouzja did not draw with Carlsen.
If Nepo drew with Carlsen: Nepo has 1.5 points. Nepo defeated Firouzja (1 pt), leaving 0.5 points.
If Carlsen drew with Nakamura or Ding:
Nakamura and Ding scored 2.5 points each.
They both defeated Firouzja (1 pt each).
They drew with each other (0.5 pt each). Total so far: 1.5 pts.
Each needs 1 more point. One could have beaten Nepo (1 pt) and lost to Carlsen (0 pt) = 2.5.
The other could have drawn with Nepo (0.5 pt) and drawn with Carlsen (0.5 pt) = 2.5.
Hence, Carlsen drew against either Nakamura or Ding.`
  },
  {
    id: 'dilr22-s3-q13',
    questionNumber: 13,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Tournaments and Point Tables',
    difficulty: 'Moderate',
    passageTitle: 'Set 3: Grandmaster Blitz Chess Invitational',
    passage: `[Refer to Set 3: Grandmaster Blitz Chess Invitational]`,
    question: 'What was the total number of draws across all 10 games in the tournament?',
    correctAnswer: '3',
    explanation: `Total points awarded in any game:
- Win/Loss match awards: 1 + 0 = 1 point.
- Draw match awards: 0.5 + 0.5 = 1 point.
Sum of all points scored by all 5 players = 3.5 + 2.5 + 2.5 + 1.5 + 0 = 10.0 points.
Each draw game involves 2 players each getting 0.5 points.
Drawn games:
1. Nakamura vs Ding (0.5 - 0.5)
2. Carlsen vs (Nakamura or Ding) (0.5 - 0.5)
3. Nepo vs (the other of Nakamura or Ding) (0.5 - 0.5).
Total draws in the championship = 3 games.`
  },
  {
    id: 'dilr22-s3-q14',
    questionNumber: 14,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Tournaments and Point Tables',
    difficulty: 'Moderate',
    passageTitle: 'Set 3: Grandmaster Blitz Chess Invitational',
    passage: `[Refer to Set 3: Grandmaster Blitz Chess Invitational]`,
    question: 'How many wins did Nepo achieve in the tournament?',
    options: ['1 win', '0 wins', '2 wins', '3 wins'],
    correctAnswer: 0,
    explanation: `Nepo total score = 1.5 points.
Nepo defeated Firouzja (Firouzja lost every game), earning 1.0 point.
Nepo drew 1 game (against Nakamura or Ding), earning 0.5 point.
Nepo lost to Carlsen and to one of Nakamura/Ding.
Total wins for Nepo = 1 win.`
  },
  {
    id: 'dilr22-s3-q15',
    questionNumber: 15,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Tournaments and Point Tables',
    difficulty: 'Moderate',
    passageTitle: 'Set 3: Grandmaster Blitz Chess Invitational',
    passage: `[Refer to Set 3: Grandmaster Blitz Chess Invitational]`,
    question: 'What was the result of the match between Nepo and Firouzja?',
    options: ['Nepo won', 'Firouzja won', 'Draw', 'Match abandoned'],
    correctAnswer: 0,
    explanation: `Firouzja scored 0 points in the tournament (losing all 4 games). Hence, Nepo won against Firouzja.`
  },

  // SET 4: Data Flow & Server Bandwidth Pipeline (Questions 16 to 20)
  {
    id: 'dilr22-s3-q16',
    questionNumber: 16,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Networks and Maximum Flow',
    difficulty: 'Moderate',
    passageTitle: 'Set 4: Cloud Server Content Delivery Network (CDN)',
    passage: `A cloud streaming service routes video data from Origin Server (O) to Destination Cache (D) through intermediary edge relays: A, B, and C.
The directed channels and maximum bandwidth capacity (in Gigabits per second, Gbps) are:
- O -> A : 40 Gbps
- O -> B : 50 Gbps
- A -> B : 20 Gbps
- A -> C : 30 Gbps
- B -> C : 25 Gbps
- B -> D : 35 Gbps
- C -> D : 45 Gbps

Data packets cannot be stored or buffered at intermediate relays A, B, or C (Flow In = Flow Out at each intermediate relay).`,
    question: 'What is the theoretical maximum data throughput (in Gbps) that can be sent simultaneously from Origin O to Destination D?',
    options: ['80 Gbps', '75 Gbps', '90 Gbps', '70 Gbps'],
    correctAnswer: 0,
    explanation: `Let's use the Max-Flow Min-Cut theorem:
Total outgoing capacity from Origin O = Capacity(O->A) + Capacity(O->B) = 40 + 50 = 90 Gbps.
Total incoming capacity into Destination D = Capacity(B->D) + Capacity(C->D) = 35 + 45 = 80 Gbps.
Let's trace internal flows:
Channels into C: from A (max 30) and from B (max 25). Max input into C = 30 + 25 = 55 Gbps.
Channel out of C to D = 45 Gbps.
So C can send at most 45 Gbps to D.
B can send at most 35 Gbps to D.
Can we achieve 40 + 35 = 75 Gbps?
Let O send 35 to B and 40 to A:
From A (receives 40): sends 20 to B, sends 20 to C. (Flow into A = 40, flow out = 40).
Now B receives: 35 from O + 20 from A = 55 Gbps.
B sends: 35 to D and 20 to C. (Flow into B = 55, flow out = 35 + 20 = 55).
Now C receives: 20 from A + 20 from B = 40 Gbps.
C sends: 40 to D (Capacity is 45, so 40 is valid!).
Total arriving at D = 35 (from B) + 40 (from C) = 75 Gbps!
Can we send 80?
For D to receive 80: B must send 35 to D and C must send 45 to D.
If C sends 45, C must receive 45.
A can send at most 30 to C.
Then B must send at least 15 to C.
Then B must send 35 to D + 15 to C = 50.
B can receive up to 50 from O, plus from A.
If B receives 50 from O, O->B is saturated at 50.
If A sends 30 to C, A has 10 left (receives 40 from O). A sends 10 to B.
Then B receives 50 + 10 = 60.
B sends 35 to D and 25 to C!
Then C receives 30 from A + 25 from B = 55 Gbps!
C sends 45 Gbps to D!
Total to D = 35 (from B) + 45 (from C) = 80 Gbps!
Wait: Flow balance at C: In = 55, Out to D = 45 -> but condition says Flow In = Flow Out!
To make Flow In = Flow Out at C:
Let A send 25 to C and 15 to B (Total out of A = 40, In = 40).
B receives 50 (from O) + 15 (from A) = 65.
B sends 35 to D + 20 to C = 55 -> leftover 10? No, Flow In must equal Flow Out!
If B receives from O: \\( x \\le 50 \\), from A: \\( y \\le 20 \\). Total in = \\( x + y \\).
Out of B = 35 (to D) + \\( z \\) (to C) where \\( z \\le 25 \\).
Max out of B = 35 + 25 = 60.
Out of A: to B is \\( y \\), to C is \\( w \\le 30 \\). In to A is \\( u \\le 40 \\). So \\( u = y + w \\).
Into C: \\( w + z \\). Out of C: to D is \\( v \\le 45 \\). So \\( w + z = v \\le 45 \\).
Total flow into D is \\( 35 + v \\).
Since \\( v = w + z \\le 45 \\), max total flow into D = \\( 35 + 45 = 80 \\)?
Let's check if \\( w + z = 45 \\) is possible with \\( u = y + w \\le 40 \\) and \\( x + y = 35 + z \\) with \\( x \\le 50 \\):
If \\( w = 25 \\), then \\( y = 40 - 25 = 15 \\).
We need \\( z = 45 - 25 = 20 \\).
Then Out of B = 35 + 20 = 55.
In to B = \\( x + y = x + 15 = 55 \\implies x = 40 \\le 50 \\)!
All conditions hold:
- O->A = 40 <= 40
- O->B = 40 <= 50
- A->C = 25 <= 30
- A->B = 15 <= 20
- B->C = 20 <= 25
- B->D = 35 <= 35
- C->D = 45 <= 45
Total flow into D = 35 + 45 = 80 Gbps!
Hence, the maximum data throughput is 80 Gbps.`
  },
  {
    id: 'dilr22-s3-q17',
    questionNumber: 17,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Networks and Maximum Flow',
    difficulty: 'Moderate',
    passageTitle: 'Set 4: Cloud Server Content Delivery Network (CDN)',
    passage: `[Refer to Set 4: Cloud Server Content Delivery Network (CDN)]`,
    question: 'When the maximum flow of 80 Gbps is pushed through the network, how much flow passes through the link O -> A?',
    options: ['40 Gbps', '30 Gbps', '25 Gbps', '35 Gbps'],
    correctAnswer: 0,
    explanation: `To achieve 80 Gbps:
Flow out of C to D must be 45 Gbps (max capacity).
Flow out of B to D must be 35 Gbps (max capacity).
C receives 45 Gbps = A->C + B->C.
Since B->C is at most 25, A->C must be at least 20 Gbps.
For B to satisfy In = Out: In = O->B + A->B, Out = 35 + B->C.
Max O->B is 50.
To supply C with 45 Gbps while B sends 35 Gbps to D, A must operate at its full link capacity O->A = 40 Gbps.`
  },
  {
    id: 'dilr22-s3-q18',
    questionNumber: 18,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Networks and Maximum Flow',
    difficulty: 'Moderate',
    passageTitle: 'Set 4: Cloud Server Content Delivery Network (CDN)',
    passage: `[Refer to Set 4: Cloud Server Content Delivery Network (CDN)]`,
    question: 'If the direct connection B -> D fails completely (capacity becomes 0), what is the new maximum possible flow (in Gbps) from O to D?',
    correctAnswer: '45',
    explanation: `If link B -> D fails, all data arriving at D must come exclusively via C -> D.
The capacity of link C -> D is 45 Gbps.
Therefore, D cannot receive more than 45 Gbps under any circumstances.
Can 45 Gbps reach C? Yes, A->C (25) + B->C (20) = 45 Gbps.
Thus, the new maximum possible flow is 45 Gbps.`
  },
  {
    id: 'dilr22-s3-q19',
    questionNumber: 19,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Networks and Maximum Flow',
    difficulty: 'Moderate',
    passageTitle: 'Set 4: Cloud Server Content Delivery Network (CDN)',
    passage: `[Refer to Set 4: Cloud Server Content Delivery Network (CDN)]`,
    question: 'What is the cut capacity of the cut separating {O, A} and {B, C, D}?',
    options: ['100 Gbps', '90 Gbps', '80 Gbps', '110 Gbps'],
    correctAnswer: 0,
    explanation: `Edges going from {O, A} to {B, C, D}:
- O -> B : capacity 50 Gbps
- A -> B : capacity 20 Gbps
- A -> C : capacity 30 Gbps
Cut capacity = Capacity(O->B) + Capacity(A->B) + Capacity(A->C) = 50 + 20 + 30 = 100 Gbps.`
  },
  {
    id: 'dilr22-s3-q20',
    questionNumber: 20,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Networks and Maximum Flow',
    difficulty: 'Moderate',
    passageTitle: 'Set 4: Cloud Server Content Delivery Network (CDN)',
    passage: `[Refer to Set 4: Cloud Server Content Delivery Network (CDN)]`,
    question: 'If Relay A undergoes maintenance and its incoming capacity from O is reduced to 20 Gbps, what is the maximum flow that can reach D?',
    options: ['70 Gbps', '65 Gbps', '60 Gbps', '75 Gbps'],
    correctAnswer: 0,
    explanation: `If O -> A is capped at 20 Gbps:
Total flow leaving O = O->A (20) + O->B (50) = 70 Gbps.
Since the total source output cannot exceed 70 Gbps, Destination D cannot receive more than 70 Gbps.
Flow assignment: O->A = 20, all 20 goes A->C.
O->B = 50, B sends 35 to D and 15 to C.
Then C receives 20 (from A) + 15 (from B) = 35 Gbps.
C sends 35 to D.
Total at D = 35 (from B) + 35 (from C) = 70 Gbps.
Hence, the maximum flow is 70 Gbps.`
  }
];
