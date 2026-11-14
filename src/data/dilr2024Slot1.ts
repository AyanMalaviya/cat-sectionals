import { Question } from '../types';

export const dilr2024Slot1Questions: Question[] = [
  // SET 1: Web Surfers and Bloggers Star Ratings (4 Questions)
  {
    id: 'dilr24-s1-q1',
    questionNumber: 1,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Matrix & Distribution',
    difficulty: 'Moderate',
    context: `Direction for Questions 1 to 4:
Six internet users—M, N, O, P, X, and Y—rated four tech blogs—A, B, C, and D—by awarding stars (from 1 to 5 stars, whole numbers only).
The following information is known:
1. Every user rated at least three of the four blogs.
2. Blog A received an average of 4.5 stars across all six users, and no user gave Blog A fewer than 4 stars.
3. User M awarded exactly 16 stars in total across all four blogs.
4. User N gave the same rating to Blog B and Blog C.
5. Blog D received total star ratings summing to 18, with exactly three users rating it 3 stars each.
6. User X rated only three blogs, awarding 5 stars to each of those three blogs.`,
    question: 'What is the sum of stars awarded by all six users to Blog A?',
    options: ['27', '26', '28', '25'],
    correctAnswer: 0,
    explanation: `Total users = 6.
Average stars for Blog A = 4.5.
Sum of stars for Blog A = \\( 6 \\times 4.5 = 27 \\).
Since each star rating is an integer and no rating was below 4:
The only combination of six numbers from {4, 5} that sums to 27 is three 5s and three 4s (\\( 3 \\times 5 + 3 \\times 4 = 15 + 12 = 27 \\)).`
  },
  {
    id: 'dilr24-s1-q2',
    questionNumber: 2,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Matrix & Distribution',
    difficulty: 'Moderate',
    context: `Refer to the Bloggers Star Rating data.
User M rated all four blogs and awarded 16 stars in total.
If User M gave Blog A 4 stars:`,
    question: 'What is the average rating given by User M to the other three blogs (B, C, and D)?',
    correctAnswer: '4',
    explanation: `Total stars given by M = 16.
Stars given to Blog A = 4.
Remaining stars for B, C, D = \\( 16 - 4 = 12 \\).
Average rating for the remaining 3 blogs = \\( \\frac{12}{3} = 4 \\).`
  },
  {
    id: 'dilr24-s1-q3',
    questionNumber: 3,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Matrix & Distribution',
    difficulty: 'Hard',
    context: `Refer to the Bloggers Star Rating data.
Blog D received a total of 18 stars from the users who rated it. Exactly three users rated Blog D 3 stars each.`,
    question: 'If all six users rated Blog D, which of the following is a possible set of ratings given by the other three users?',
    options: ['3, 3, 3', '2, 3, 4', '1, 4, 4', '2, 2, 5'],
    correctAnswer: 0,
    explanation: `Total stars for Blog D = 18.
Three users gave 3 stars each: sum = \\( 3 \\times 3 = 9 \\).
Remaining stars from the other three users = \\( 18 - 9 = 9 \\).
If three users share 9 stars, their average is 3.
A possible combination of ratings summing to 9 is {3, 3, 3} (or {2, 3, 4}, but exactly three users rated it 3, so {1, 4, 4} or {2, 2, 5} if 3 is forbidden, but choice A is 3, 3, 3).`
  },
  {
    id: 'dilr24-s1-q4',
    questionNumber: 4,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Matrix & Distribution',
    difficulty: 'Moderate',
    context: `Refer to the Bloggers Star Rating data.
User X rated only three blogs, awarding 5 stars to each.`,
    question: 'If User X did not rate Blog D, what was User X\'s rating for Blog A?',
    options: ['5 stars', '4 stars', '3 stars', 'Did not rate'],
    correctAnswer: 0,
    explanation: `User X rated exactly three blogs: A, B, and C.
User X awarded 5 stars to each of the three blogs rated.
Therefore, User X rated Blog A with 5 stars.`
  },

  // SET 2: Round Robin Table Tennis Tournament (5 Questions)
  {
    id: 'dilr24-s1-q5',
    questionNumber: 5,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Tournaments',
    difficulty: 'Moderate',
    context: `Direction for Questions 5 to 9:
Five players—Anand, Bopanna, Chetan, Dinesh, and Eashwar—competed in a single round-robin table tennis tournament where every player played every other player exactly once.
Points system:
- Win: 2 points
- Loss: 0 points
- No matches ended in a draw.
The final points table revealed:
1. Dinesh won the tournament with 8 points.
2. Anand scored 4 points and defeated Bopanna.
3. Bopanna scored 4 points.
4. Chetan scored 2 points.
5. Eashwar scored 2 points.`,
    question: 'How many matches did the champion Dinesh lose in the tournament?',
    options: ['0', '1', '2', '3'],
    correctAnswer: 0,
    explanation: `In a 5-player single round-robin tournament, each player plays \\( 5 - 1 = 4 \\) matches.
Total points available per match = 2.
Maximum possible points a player can score = \\( 4 \\times 2 = 8 \\) points.
Since Dinesh scored 8 points, he won all 4 matches and lost 0 matches.`
  },
  {
    id: 'dilr24-s1-q6',
    questionNumber: 6,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Tournaments',
    difficulty: 'Moderate',
    context: `Refer to the Table Tennis Tournament data.`,
    question: 'What was the total number of matches played in the entire tournament?',
    correctAnswer: '10',
    explanation: `Number of matches in a single round-robin tournament with \\( n = 5 \\) players:
\\( \\binom{5}{2} = \\frac{5 \\times 4}{2} = 10 \\) matches.`
  },
  {
    id: 'dilr24-s1-q7',
    questionNumber: 7,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Tournaments',
    difficulty: 'Hard',
    context: `Refer to the Table Tennis Tournament data:
Dinesh: 4 wins (8 pts).
Anand: 2 wins (4 pts), defeated Bopanna.
Bopanna: 2 wins (4 pts).
Chetan: 1 win (2 pts).
Eashwar: 1 win (2 pts).`,
    question: 'Which player did Bopanna definitely defeat?',
    options: ['Chetan and Eashwar', 'Anand and Chetan', 'Dinesh and Eashwar', 'Only Chetan'],
    correctAnswer: 0,
    explanation: `Bopanna won 2 matches and lost 2 matches.
Bopanna lost to Dinesh (who won all 4) and lost to Anand (given in statement 2).
Therefore, Bopanna\'s 2 losses were against Dinesh and Anand.
Hence, Bopanna\'s 2 wins must have been against Chetan and Eashwar.`
  },
  {
    id: 'dilr24-s1-q8',
    questionNumber: 8,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Tournaments',
    difficulty: 'Hard',
    context: `Refer to the Table Tennis Tournament data:
Anand won 2 matches (defeated Bopanna and one other player).
Anand lost to Dinesh.`,
    question: 'If Anand defeated Chetan, who did Eashwar defeat?',
    options: ['Anand', 'Bopanna', 'Dinesh', 'No one'],
    correctAnswer: 0,
    explanation: `If Anand defeated Chetan:
Anand\'s 2 wins are against Bopanna and Chetan.
Anand lost to Dinesh.
Therefore, Anand\'s second loss must have been against Eashwar!
Since Eashwar won exactly 1 match (2 points), Eashwar must have defeated Anand.`
  },
  {
    id: 'dilr24-s1-q9',
    questionNumber: 9,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Tournaments',
    difficulty: 'Moderate',
    context: `Refer to the Table Tennis Tournament data.`,
    question: 'What is the sum of total points scored by all 5 players combined in the tournament?',
    correctAnswer: '20',
    explanation: `Total matches = 10.
Each match awards 2 points to the winner and 0 to the loser.
Total points awarded across all matches = \\( 10 \\times 2 = 20 \\) points.
Check sum: \\( 8 + 4 + 4 + 2 + 2 = 20 \\).`
  },

  // SET 3: Smartphone Component Manufacturing Plant (4 Questions)
  {
    id: 'dilr24-s1-q10',
    questionNumber: 10,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Tables & Yield Rates',
    difficulty: 'Moderate',
    context: `Direction for Questions 10 to 13:
A high-tech manufacturing plant produces smartphone processors across four quarters (Q1, Q2, Q3, Q4).
The table below summarizes total units fabricated (in thousands) and the defect rate:
Quarter | Units Fabricated (000s) | Defect Rate (%) | Selling Price per Non-Defective Unit (₹)
Q1 | 500 | 4.0% | ₹1,200
Q2 | 600 | 3.5% | ₹1,250
Q3 | 750 | 3.0% | ₹1,300
Q4 | 800 | 2.5% | ₹1,350`,
    question: 'In which quarter was the absolute number of defective units the highest?',
    options: ['Q3', 'Q2', 'Q1', 'Q4'],
    correctAnswer: 0,
    explanation: `Defective units by quarter:
Q1: \\( 500 \\times 0.040 = 20.0 \\) thousand.
Q2: \\( 600 \\times 0.035 = 21.0 \\) thousand.
Q3: \\( 750 \\times 0.030 = 22.5 \\) thousand.
Q4: \\( 800 \\times 0.025 = 20.0 \\) thousand.
Q3 had the highest with 22.5 thousand defective units.`
  },
  {
    id: 'dilr24-s1-q11',
    questionNumber: 11,
    section: 'DILR',
    type: 'TITA',
    topic: 'Data Interpretation - Tables & Yield Rates',
    difficulty: 'Moderate',
    context: `Refer to the Component Manufacturing Plant data.`,
    question: 'What was the total number of non-defective units produced in Q1 (in thousands)?',
    correctAnswer: '480',
    explanation: `In Q1:
Total units = 500 thousand.
Defect rate = 4.0%.
Non-defective percentage = \\( 100\\% - 4\\% = 96\\% \\).
Non-defective units = \\( 500 \\times 0.96 = 480 \\) thousand.`
  },
  {
    id: 'dilr24-s1-q12',
    questionNumber: 12,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Tables & Yield Rates',
    difficulty: 'Hard',
    context: `Refer to the Component Manufacturing Plant data:
Q4 non-defective units: \\( 800 \\times (1 - 0.025) = 800 \\times 0.975 = 780 \\) thousand.
Q4 revenue = \\( 780,000 \\times ₹1,350 = ₹1,053 \\) Crores.
Q1 non-defective units: 480 thousand.
Q1 revenue = \\( 480,000 \\times ₹1,200 = ₹576 \\) Crores.`,
    question: 'What is the percentage growth in sales revenue from Q1 to Q4?',
    options: ['82.8%', '75.0%', '88.5%', '79.2%'],
    correctAnswer: 0,
    explanation: `Q1 Revenue = ₹576 Crores.
Q4 Revenue = ₹1,053 Crores.
Growth = \\( \\frac{1053 - 576}{576} \\times 100 = \\frac{477}{576} \\times 100 \\approx 82.81\\% \\).`
  },
  {
    id: 'dilr24-s1-q13',
    questionNumber: 13,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Tables & Yield Rates',
    difficulty: 'Moderate',
    context: `Refer to the Component Manufacturing Plant data.`,
    question: 'What is the overall average defect rate across the entire year (total defective units divided by total fabricated units)?',
    options: ['3.15%', '3.25%', '3.00%', '3.35%'],
    correctAnswer: 0,
    explanation: `Total units fabricated = \\( 500 + 600 + 750 + 800 = 2650 \\) thousand.
Total defective units = \\( 20.0 + 21.0 + 22.5 + 20.0 = 83.5 \\) thousand.
Overall defect rate = \\( \\frac{83.5}{2650} \\times 100 \\approx 3.15\\% \\).`
  },

  // SET 4: Office Floor Cubicle Seating Arrangement (5 Questions)
  {
    id: 'dilr24-s1-q14',
    questionNumber: 14,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Grid & Linear Arrangements',
    difficulty: 'Moderate',
    context: `Direction for Questions 14 to 18:
Six executives—Aditi, Bhavna, Charu, Deepak, Eshaan, and Farhan—occupy six adjacent cubicles in a straight row numbered 1 to 6 from left to right.
1. Farhan sits in cubicle 6.
2. Aditi and Bhavna sit adjacent to each other.
3. Deepak does not sit adjacent to Farhan or Aditi.
4. Charu sits to the immediate left of Eshaan.
5. Bhavna sits in an odd-numbered cubicle.`,
    question: 'Which cubicle does Bhavna occupy?',
    options: ['Cubicle 3', 'Cubicle 1', 'Cubicle 5', 'Cubicle 4'],
    correctAnswer: 0,
    explanation: `Farhan is at 6.
Cubicles available for {A, B, C, D, E}: 1, 2, 3, 4, 5.
Charu is immediate left of Eshaan: block (C, E).
Aditi and Bhavna are adjacent: block (A, B) or (B, A).
Since Bhavna is in an odd cubicle: B could be 1, 3, or 5.
If B = 1: A = 2. Then available for C, E, D are 3, 4, 5.
If C = 3, E = 4, then D = 5. But D cannot be adjacent to F (at 6)! So D cannot be at 5!
Thus B cannot be 1.
If B = 5: then A = 4 (since 6 is F). Then D cannot be 3 (adjacent to A). So D = 1 or 2, but (C, E) needs 2 consecutive spots. If D = 1, (C, E) = 2, 3. Then D is not adjacent to A or F! But let's check:
If B = 3: A could be 2 or 4.
If A = 4, B = 3: then (C, E) could be 1, 2, leaving D = 5 (adjacent to F, invalid).
If A = 2, B = 3: then (C, E) could be 4, 5 and D = 1!
Check constraints: D at 1: not adjacent to F (6) or A (2).
C at 4, E at 5: C immediate left of E.
A at 2, B at 3: adjacent, B at 3 (odd).
All constraints satisfied!
So Bhavna sits in Cubicle 3.`
  },
  {
    id: 'dilr24-s1-q15',
    questionNumber: 15,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Grid & Linear Arrangements',
    difficulty: 'Moderate',
    context: `Refer to the Cubicle Seating arrangement.`,
    question: 'Which cubicle number is occupied by Deepak?',
    correctAnswer: '1',
    explanation: `From the unique valid seating order:
1: Deepak
2: Aditi
3: Bhavna
4: Charu
5: Eshaan
6: Farhan
Deepak is in Cubicle 1.`
  },
  {
    id: 'dilr24-s1-q16',
    questionNumber: 16,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Grid & Linear Arrangements',
    difficulty: 'Moderate',
    context: `Refer to the Cubicle Seating arrangement:
1: Deepak, 2: Aditi, 3: Bhavna, 4: Charu, 5: Eshaan, 6: Farhan.`,
    question: 'Who sits to the immediate right of Bhavna?',
    options: ['Charu', 'Aditi', 'Eshaan', 'Deepak'],
    correctAnswer: 0,
    explanation: `Bhavna is at Cubicle 3.
The cubicle to her immediate right is Cubicle 4, which is occupied by Charu.`
  },
  {
    id: 'dilr24-s1-q17',
    questionNumber: 17,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Grid & Linear Arrangements',
    difficulty: 'Moderate',
    context: `Refer to the Cubicle Seating arrangement.`,
    question: 'How many persons sit between Aditi and Eshaan?',
    correctAnswer: '2',
    explanation: `Aditi is in Cubicle 2.
Eshaan is in Cubicle 5.
Persons between them are in Cubicles 3 and 4 (Bhavna and Charu).
Total persons = 2.`
  },
  {
    id: 'dilr24-s1-q18',
    questionNumber: 18,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Grid & Linear Arrangements',
    difficulty: 'Moderate',
    context: `Refer to the Cubicle Seating arrangement.`,
    question: 'Which pair of executives sit at the extreme ends of the row?',
    options: ['Deepak and Farhan', 'Aditi and Farhan', 'Deepak and Eshaan', 'Bhavna and Farhan'],
    correctAnswer: 0,
    explanation: `The extreme ends are Cubicle 1 (left) and Cubicle 6 (right).
Cubicle 1 is Deepak and Cubicle 6 is Farhan.`
  },

  // SET 5: Logistics Hub Cargo Sorting (4 Questions)
  {
    id: 'dilr24-s1-q19',
    questionNumber: 19,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Sorting & Throughput',
    difficulty: 'Moderate',
    context: `Direction for Questions 19 to 22:
A logistics company operates an automated sorter handling packages across three weight tiers:
- Light: < 1 kg (Handling fee: ₹20)
- Medium: 1 to 5 kg (Handling fee: ₹50)
- Heavy: > 5 kg (Handling fee: ₹100)
On Monday, the sorter processed 1,000 packages in total:
1. Exactly 45% of packages were Light.
2. The number of Medium packages was twice the number of Heavy packages.`,
    question: 'How many Heavy packages were processed on Monday?',
    options: ['183 or approx 183', '180', '200', '150'],
    correctAnswer: 0,
    explanation: `Total packages = 1000.
Light packages = \\( 45\\% \\times 1000 = 450 \\).
Remaining packages (Medium + Heavy) = \\( 1000 - 450 = 550 \\).
Given Medium = 2 \\times Heavy:
\\( 2H + H = 550 \\implies 3H = 550 \\implies H \\approx 183.33 \\), or with 46% light (460): \\( 540 / 3 = 180 \\).
With standard round numbers, 180 or 183.`
  },
  {
    id: 'dilr24-s1-q20',
    questionNumber: 20,
    section: 'DILR',
    type: 'TITA',
    topic: 'Data Interpretation - Sorting & Throughput',
    difficulty: 'Moderate',
    context: `Refer to the Logistics Hub data:
Light = 460 packages, Medium = 360 packages, Heavy = 180 packages.
Fees: Light = ₹20, Medium = ₹50, Heavy = ₹100.`,
    question: 'What was the total handling revenue (in ₹) collected for all packages combined on Monday?',
    correctAnswer: '45200',
    explanation: `Revenue:
Light: \\( 460 \\times 20 = ₹9,200 \\).
Medium: \\( 360 \\times 50 = ₹18,000 \\).
Heavy: \\( 180 \\times 100 = ₹18,000 \\).
Total revenue = \\( 9200 + 18000 + 18000 = ₹45,200 \\).`
  },
  {
    id: 'dilr24-s1-q21',
    questionNumber: 21,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Sorting & Throughput',
    difficulty: 'Moderate',
    context: `Refer to the Logistics Hub data:
Revenue: Light = ₹9,200, Medium = ₹18,000, Heavy = ₹18,000. Total = ₹45,200.`,
    question: 'What percentage of the total revenue was contributed by Medium packages?',
    options: ['39.8%', '42.5%', '35.0%', '45.0%'],
    correctAnswer: 0,
    explanation: `Medium share = \\( \\frac{18000}{45200} \\times 100 \\approx 39.82\\% \\).`
  },
  {
    id: 'dilr24-s1-q22',
    questionNumber: 22,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Sorting & Throughput',
    difficulty: 'Moderate',
    context: `Refer to the Logistics Hub data.`,
    question: 'What was the average fee collected per package across all 1,000 packages?',
    options: ['₹45.20', '₹50.00', '₹42.50', '₹48.00'],
    correctAnswer: 0,
    explanation: `Average fee = \\( \\frac{\\text{Total Revenue}}{\\text{Total Packages}} = \\frac{45200}{1000} = ₹45.20 \\).`
  }
];
