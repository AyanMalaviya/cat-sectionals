import { Question } from '../types';

export const dilr2021Slot1Questions: Question[] = [
  // SET 1: Tech Campus Hiring & Multi-Round Assessment (Questions 1 to 5)
  {
    id: 'dilr21-s1-q1',
    questionNumber: 1,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Matrix & Constraints',
    difficulty: 'Moderate',
    passageTitle: 'Set 1: Tech Campus Recruitment Assessments',
    passage: `Four candidates—Aarav, Bipasha, Chetan, and Divya—were evaluated across four rounds: Coding, System Design, Data Structures (DS), and Behavioral HR. Each round was scored on a scale of 10 to 50 (in multiples of 5).
The following clues are known:
1. No candidate received the same score in two different rounds, and no two candidates received the same score in any round.
2. Aarav scored 45 in Coding, which was the highest in that round.
3. Chetan scored 25 in System Design, which was the lowest in that round.
4. Bipasha’s aggregate score across all four rounds was 155, which was the highest overall total.
5. In Data Structures, Divya scored 40 points, and Bipasha scored 10 points higher than Chetan.
6. In Behavioral HR, Aarav scored 30 points, while Divya scored 50 points.
7. The sum of all four scores in Coding was 140 points.
8. Chetan’s score in Coding was 35 points.`,
    question: 'What was the score obtained by Candidate Divya in the Coding round?',
    options: ['20 points', '25 points', '30 points', '15 points'],
    correctAnswer: 0,
    explanation: `Let's analyze the Coding round:
Total Coding sum = 140 (Clue 7).
Aarav(Coding) = 45 (Clue 2, highest).
Chetan(Coding) = 35 (Clue 8).
Remaining sum for Bipasha and Divya = 140 - (45 + 35) = 140 - 80 = 60 points.
All scores are multiples of 5 and distinct.
Possible pairs for {Bipasha, Divya}: (40, 20) or (35, 25 - Chetan is 35 so invalid) or (30, 30 - invalid).
So the pair must be 40 and 20.
Who scored 40 and who scored 20?
From Clue 4: Bipasha has the highest aggregate score = 155.
If Bipasha scored 20 in Coding, her remaining 3 rounds must average (155 - 20)/3 = 45 points each, which would require scores like (45, 50, 40), but in HR Divya scored 50 (so Bipasha cannot score 50 in HR).
Thus, Bipasha scored 40 in Coding, and Divya scored 20 in Coding.`
  },
  {
    id: 'dilr21-s1-q2',
    questionNumber: 2,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Matrix & Constraints',
    difficulty: 'Moderate',
    passageTitle: 'Set 1: Tech Campus Recruitment Assessments',
    passage: `[Refer to Set 1: Tech Campus Recruitment Assessments]`,
    question: 'What was Bipasha’s score in the Coding round?',
    options: ['40 points', '35 points', '45 points', '30 points'],
    correctAnswer: 0,
    explanation: `From the deduction in Question 1:
Aarav = 45, Chetan = 35, Divya = 20, Bipasha = 40.
Total Coding = 45 + 35 + 20 + 40 = 140.
Hence, Bipasha scored 40 points in Coding.`
  },
  {
    id: 'dilr21-s1-q3',
    questionNumber: 3,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Matrix & Constraints',
    difficulty: 'Moderate',
    passageTitle: 'Set 1: Tech Campus Recruitment Assessments',
    passage: `[Refer to Set 1: Tech Campus Recruitment Assessments]`,
    question: 'What was Candidate Divya’s score in the Behavioral HR round?',
    correctAnswer: '50',
    explanation: `Clue 6 explicitly states: "In Behavioral HR, Aarav scored 30 points, while Divya scored 50 points."`
  },
  {
    id: 'dilr21-s1-q4',
    questionNumber: 4,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Matrix & Constraints',
    difficulty: 'Hard',
    passageTitle: 'Set 1: Tech Campus Recruitment Assessments',
    passage: `[Refer to Set 1: Tech Campus Recruitment Assessments]`,
    question: 'In Data Structures, if Divya scored 40 and the four scores were 25, 30, 35, 40, what did Chetan score in Data Structures?',
    options: ['25 points', '30 points', '35 points', '20 points'],
    correctAnswer: 0,
    explanation: `From Clue 5: In Data Structures, Divya scored 40.
Bipasha scored 10 points higher than Chetan: Bipasha(DS) = Chetan(DS) + 10.
From available scores {25, 30, 35}:
The only pair with a difference of 10 is 35 and 25.
Therefore, Bipasha scored 35, and Chetan scored 25.
Aarav then scored 30.
Hence, Chetan scored 25 points in Data Structures.`
  },
  {
    id: 'dilr21-s1-q5',
    questionNumber: 5,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Matrix & Constraints',
    difficulty: 'Moderate',
    passageTitle: 'Set 1: Tech Campus Recruitment Assessments',
    passage: `[Refer to Set 1: Tech Campus Recruitment Assessments]`,
    question: 'Which round had the highest individual score of 50 awarded to Candidate Divya?',
    options: ['Behavioral HR', 'System Design', 'Coding', 'Data Structures'],
    correctAnswer: 0,
    explanation: `Clue 6 explicitly confirms that Divya scored 50 points in Behavioral HR.`
  },

  // SET 2: Electric Vehicle Fleet Analytics (Questions 6 to 10)
  {
    id: 'dilr21-s1-q6',
    questionNumber: 6,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Tables & Energy Efficiency',
    difficulty: 'Moderate',
    passageTitle: 'Set 2: Electric Vehicle Fleet Efficiency and Range',
    passage: `An urban taxi fleet operates four models of Electric Vehicles (EVs): Model E1, E2, E3, and E4.
The table below displays Battery Capacity (kWh), Energy Consumption Rate (Wh/km), and Daily Distance Traveled (km) per vehicle:

Model | Battery Capacity (kWh) | Energy Consumption (Wh/km) | Daily Distance Traveled (km) | Fleet Size (Vehicles)
E1    | 40                     | 160                        | 200                          | 50
E2    | 60                     | 200                        | 240                          | 40
E3    | 75                     | 250                        | 250                          | 30
E4    | 90                     | 300                        | 270                          | 20

Notes:
1. 1 kWh = 1,000 Wh.
2. Full Charge Range (km) = (Battery Capacity in Wh) / (Energy Consumption in Wh/km).
3. Daily Energy Consumed per vehicle (kWh) = (Daily Distance × Energy Consumption) / 1,000.`,
    question: 'What is the Full Charge Range (in km) of an E2 vehicle on a single 100% charge?',
    options: ['300 km', '250 km', '320 km', '280 km'],
    correctAnswer: 0,
    explanation: `Battery capacity of E2 = 60 kWh = 60,000 Wh.
Energy Consumption = 200 Wh/km.
Range = 60,000 / 200 = 300 km.`
  },
  {
    id: 'dilr21-s1-q7',
    questionNumber: 7,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Aggregate Energy',
    difficulty: 'Moderate',
    passageTitle: 'Set 2: Electric Vehicle Fleet Efficiency and Range',
    passage: `[Refer to Set 2: Electric Vehicle Fleet Efficiency and Range]`,
    question: 'What is the total daily energy consumed (in kWh) by all 50 vehicles of Model E1 combined?',
    options: ['1600 kWh', '1800 kWh', '2000 kWh', '1500 kWh'],
    correctAnswer: 0,
    explanation: `For one E1 vehicle:
Daily Distance = 200 km.
Consumption = 160 Wh/km.
Daily Energy per E1 = (200 × 160) / 1000 = 32 kWh.
For all 50 vehicles of Model E1:
Total Energy = 50 × 32 = 1,600 kWh.`
  },
  {
    id: 'dilr21-s1-q8',
    questionNumber: 8,
    section: 'DILR',
    type: 'TITA',
    topic: 'Data Interpretation - Full Charge Range',
    difficulty: 'Moderate',
    passageTitle: 'Set 2: Electric Vehicle Fleet Efficiency and Range',
    passage: `[Refer to Set 2: Electric Vehicle Fleet Efficiency and Range]`,
    question: 'What is the Full Charge Range (in km) of Model E1 on a single complete charge?',
    correctAnswer: '250',
    explanation: `Capacity of E1 = 40 kWh = 40,000 Wh.
Energy Consumption = 160 Wh/km.
Full Range = 40,000 / 160 = 250 km.`
  },
  {
    id: 'dilr21-s1-q9',
    questionNumber: 9,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Multi-Fleet Comparison',
    difficulty: 'Moderate',
    passageTitle: 'Set 2: Electric Vehicle Fleet Efficiency and Range',
    passage: `[Refer to Set 2: Electric Vehicle Fleet Efficiency and Range]`,
    question: 'Which model requires more than 100% of its battery capacity to cover its daily distance traveled without mid-day recharging?',
    options: ['None of the models', 'Model E4', 'Model E3', 'Model E1'],
    correctAnswer: 0,
    explanation: `Let's check daily consumption vs battery capacity for each model:
- E1: Daily distance = 200 km. Full range = 40,000/160 = 250 km. (200 < 250, no recharge needed).
- E2: Daily distance = 240 km. Full range = 60,000/200 = 300 km. (240 < 300, no recharge needed).
- E3: Daily distance = 250 km. Full range = 75,000/250 = 300 km. (250 < 300, no recharge needed).
- E4: Daily distance = 270 km. Full range = 90,000/300 = 300 km. (270 < 300, no recharge needed).
Every model can cover its daily distance on a single full charge without mid-day recharging!
Hence, 'None of the models'.`
  },
  {
    id: 'dilr21-s1-q10',
    questionNumber: 10,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Fleet Totals',
    difficulty: 'Hard',
    passageTitle: 'Set 2: Electric Vehicle Fleet Efficiency and Range',
    passage: `[Refer to Set 2: Electric Vehicle Fleet Efficiency and Range]`,
    question: 'What is the total combined fleet size (number of vehicles) across all four EV models?',
    options: ['140 vehicles', '150 vehicles', '130 vehicles', '160 vehicles'],
    correctAnswer: 0,
    explanation: `Total vehicles = 50 (E1) + 40 (E2) + 30 (E3) + 20 (E4) = 140 vehicles.`
  },

  // SET 3: Cricket Triangular Tournament (Questions 11 to 15)
  {
    id: 'dilr21-s1-q11',
    questionNumber: 11,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Tournaments & Net Run Rates',
    difficulty: 'Moderate',
    passageTitle: 'Set 3: Tri-Series Cricket Championship',
    passage: `Three national teams—India, Australia, and England—played a triangular ODI tournament where each team played every other team twice (total of 4 matches per team, 6 matches in total).
Points rule:
- Win = 4 points
- Tie / No Result = 2 points
- Loss = 0 points

Points Table at the end of the group stage:
Team      | Matches | Won | Lost | Tied | Total Points
India     | 4       | 3   | 1    | 0    | 12
Australia | 4       | 2   | 2    | 0    | 8
England   | 4       | 1   | 3    | 0    | 4

Additional Information:
1. No match ended in a tie or wash-out.
2. England won exactly one match, which was against Australia.`,
    question: 'How many matches did India win against Australia in the tournament?',
    options: ['1 match', '2 matches', '0 matches', 'Cannot be determined'],
    correctAnswer: 0,
    explanation: `Let's analyze all matches:
Total matches = 6:
- India vs Australia: 2 matches
- India vs England: 2 matches
- Australia vs England: 2 matches

From Clue 2: England won exactly one match, against Australia.
Since England played 4 and won 1, England lost both of their matches against India!
So India won 2 matches against England.
India's total wins = 3.
Since India won 2 against England, India won 3 - 2 = 1 match against Australia!
Wait: Clue says India won 1 against Australia and lost 1 against Australia?
Let's check Australia's record: Australia played 4, won 2, lost 2.
Australia lost 1 to England (Clue 2). Australia won 1 against England (since England lost 3).
Now Australia's matches against India: Australia must have 1 win and 1 loss against India!
Then Australia total wins = 1 (vs Eng) + 1 (vs Ind) = 2 wins.
India total wins = 2 (vs Eng) + 1 (vs Aus) = 3 wins.
Matches won by India against Australia = 1 match!
Wait: Option 0 is '1 match' if we make it Option 0.`
  },
  {
    id: 'dilr21-s1-q12',
    questionNumber: 12,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Tournaments & Net Run Rates',
    difficulty: 'Moderate',
    passageTitle: 'Set 3: Tri-Series Cricket Championship',
    passage: `[Refer to Set 3: Tri-Series Cricket Championship]`,
    question: 'Which team defeated India in their only defeat of the tournament?',
    options: ['Australia', 'England', 'Both', 'None'],
    correctAnswer: 0,
    explanation: `From the deduction in Question 11:
India played 4 matches: Won 3 and Lost 1.
India won both matches against England.
Therefore, India's only loss was against Australia.`
  },
  {
    id: 'dilr21-s1-q13',
    questionNumber: 13,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Tournaments & Net Run Rates',
    difficulty: 'Moderate',
    passageTitle: 'Set 3: Tri-Series Cricket Championship',
    passage: `[Refer to Set 3: Tri-Series Cricket Championship]`,
    question: 'How many matches did England lose against India in the tournament?',
    correctAnswer: '2',
    explanation: `England lost 3 matches in total. One loss was to Australia, and two losses were to India.`
  },
  {
    id: 'dilr21-s1-q14',
    questionNumber: 14,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Tournaments & Net Run Rates',
    difficulty: 'Moderate',
    passageTitle: 'Set 3: Tri-Series Cricket Championship',
    passage: `[Refer to Set 3: Tri-Series Cricket Championship]`,
    question: 'What was the win-loss head-to-head record between Australia and England across their two encounters?',
    options: ['1 win for Australia, 1 win for England', '2 wins for Australia', '2 wins for England', 'Both drawn'],
    correctAnswer: 0,
    explanation: `England won one match against Australia (Clue 2).
Australia won the other match against England.
Head-to-head record was 1-1.`
  },
  {
    id: 'dilr21-s1-q15',
    questionNumber: 15,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Tournaments & Net Run Rates',
    difficulty: 'Moderate',
    passageTitle: 'Set 3: Tri-Series Cricket Championship',
    passage: `[Refer to Set 3: Tri-Series Cricket Championship]`,
    question: 'Which two teams qualified for the Final (top 2 teams on the points table)?',
    options: ['India and Australia', 'India and England', 'Australia and England', 'All three tied'],
    correctAnswer: 0,
    explanation: `India finished 1st with 12 points, and Australia finished 2nd with 8 points. England was eliminated with 4 points.`
  },

  // SET 4: Metro Transit Lines & Transfer Optimization (Questions 16 to 20)
  {
    id: 'dilr21-s1-q16',
    questionNumber: 16,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Routes & Networks',
    difficulty: 'Moderate',
    passageTitle: 'Set 4: Capital Metro Transit Network',
    passage: `A city has three operational metro lines:
- Red Line: Station R1 -> R2 -> Interchange X -> R3 -> R4
- Blue Line: Station B1 -> Interchange X -> B2 -> Interchange Y -> B3
- Green Line: Station G1 -> G2 -> Interchange Y -> G3

Travel time between any two adjacent stations on the same line is 4 minutes.
Changing lines at an interchange (X or Y) takes a fixed transfer penalty of 5 minutes.`,
    question: 'What is the shortest total journey time (in minutes) from Station R1 to Station R4 on the Red Line?',
    options: ['16 minutes', '18 minutes', '20 minutes', '12 minutes'],
    correctAnswer: 0,
    explanation: `Path on Red Line: R1 -> R2 -> X -> R3 -> R4.
There are 4 station-to-station segments:
1. R1 to R2: 4 mins
2. R2 to X: 4 mins
3. X to R3: 4 mins
4. R3 to R4: 4 mins
Total time = 4 × 4 = 16 minutes (no line interchange needed).`
  },
  {
    id: 'dilr21-s1-q17',
    questionNumber: 17,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Routes & Networks',
    difficulty: 'Hard',
    passageTitle: 'Set 4: Capital Metro Transit Network',
    passage: `[Refer to Set 4: Capital Metro Transit Network]`,
    question: 'What is the total travel time from Station R2 on the Red Line to Station B2 on the Blue Line?',
    options: ['13 minutes', '12 minutes', '15 minutes', '10 minutes'],
    correctAnswer: 0,
    explanation: `Route: R2 -> Interchange X (Red Line) -> Transfer at X -> X -> B2 (Blue Line).
Travel segments:
- R2 to X: 4 mins
- Transfer at Interchange X: 5 mins
- X to B2: 4 mins
Total travel time = 4 + 5 + 4 = 13 minutes.`
  },
  {
    id: 'dilr21-s1-q18',
    questionNumber: 18,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Routes & Networks',
    difficulty: 'Moderate',
    passageTitle: 'Set 4: Capital Metro Transit Network',
    passage: `[Refer to Set 4: Capital Metro Transit Network]`,
    question: 'What is the travel time (in minutes) from Station B1 to Station B3 on the Blue Line without any line changes?',
    correctAnswer: '16',
    explanation: `Blue Line path: B1 -> X -> B2 -> Y -> B3.
Number of segments = 4.
Travel time = 4 × 4 = 16 minutes.`
  },
  {
    id: 'dilr21-s1-q19',
    questionNumber: 19,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Routes & Networks',
    difficulty: 'Hard',
    passageTitle: 'Set 4: Capital Metro Transit Network',
    passage: `[Refer to Set 4: Capital Metro Transit Network]`,
    question: 'What is the total travel time from Station R3 (Red Line) to Station G3 (Green Line)?',
    options: ['26 minutes', '28 minutes', '24 minutes', '30 minutes'],
    correctAnswer: 0,
    explanation: `Route:
1. R3 -> X (Red Line): 4 mins
2. Transfer at Interchange X: 5 mins
3. X -> B2 -> Y (Blue Line): 2 segments = 8 mins
4. Transfer at Interchange Y: 5 mins
5. Y -> G3 (Green Line): 4 mins
Total time = 4 + 5 + 8 + 5 + 4 = 26 minutes.`
  },
  {
    id: 'dilr21-s1-q20',
    questionNumber: 20,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Routes & Networks',
    difficulty: 'Moderate',
    passageTitle: 'Set 4: Capital Metro Transit Network',
    passage: `[Refer to Set 4: Capital Metro Transit Network]`,
    question: 'Which interchange station connects the Blue Line and the Green Line?',
    options: ['Interchange Y', 'Interchange X', 'Interchange Z', 'Station B2'],
    correctAnswer: 0,
    explanation: `The problem statement states:
- Blue Line passes through Interchange X and Interchange Y.
- Green Line passes through Interchange Y.
Hence, Interchange Y connects the Blue Line and the Green Line.`
  }
];
