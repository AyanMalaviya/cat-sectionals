# CAT Sectional & Topic-Wise Mock Test Portal

A high-fidelity React application designed for CAT (Common Admission Test) MBA aspirants. Built with a clean, high-contrast white aesthetic, readable typography, and authentic TCS iON test simulation features.

Practice official Previous Years Questions (PYQs) across **Quantitative Aptitude (QA)**, **Verbal Ability & Reading Comprehension (VARC)**, and **Data Interpretation & Logical Reasoning (DILR)** under strict 40-minute sectional conditions, or take targeted **Topic-Wise Quizzes** combining the best curated questions.

---

## 🚀 Key Features

### 1. Clean White Background & High-Readability Fonts
- **Clean White Theme**: Crisp white surfaces (`#ffffff`), subtle borders, and deep slate-900 typography for high contrast.
- **Enhanced Reading Font for Passages**: Reading Comprehension passages use the **Lora** serif typography with comfortable spacing and line height (`leading-relaxed`), eliminating eye strain during long passage analysis.
- **Split Screen for Passages & Set Data**: Passages and caselets remain side-by-side with questions in an independent scroll pane.

### 2. Full 40-Minute Sectional Tests (Official PYQs)
- **CAT 2023 Slot 1 QA** (22 Questions, 40 Mins, 66 Marks)
- **CAT 2023 Slot 2 VARC** (24 Questions, 40 Mins, 72 Marks)
- **CAT 2023 Slot 1 DILR** (20 Questions, 40 Mins, 60 Marks)
- **CAT 2022 Slot 1 QA** (22 Questions, 40 Mins, 66 Marks)
- **CAT 2022 Slot 2 VARC** (24 Questions, 40 Mins, 72 Marks)
- **CAT 2022 Slot 3 DILR** (20 Questions, 40 Mins, 60 Marks)
- **CAT 2021 Slot 1 QA** (22 Questions, 40 Mins, 66 Marks)
- **CAT 2021 Slot 1 VARC** (24 Questions, 40 Mins, 72 Marks)
- **CAT 2021 Slot 1 DILR** (20 Questions, 40 Mins, 60 Marks)

### 3. Curated Topic-Wise Quiz Sets (Best Questions Combined)
Focused practice sets combining the highest-yield CAT questions by domain:
- **Arithmetic Mastery (The CAT Core)**: 10 Questions, 20 Mins (TSD, Work-Time, Profit & Loss, Percentages, Mixtures, Escalators).
- **Algebra & Functions Elite Challenge**: 10 Questions, 20 Mins (Logarithms, Quadratics, Maxima-Minima, Sequences AP/GP, Modulus Inequalities).
- **Geometry & Mensuration Benchmark Set**: 10 Questions, 20 Mins (Incircle radius, Tangents, Coordinate geometry, Recasting, Chords).
- **Numbers, P&C & Probability Challenge**: 10 Questions, 20 Mins (Euler totient remainders, Factorial powers, Gap method, Dice probability).
- **Philosophy & Technology RC Masterset**: 8 Questions (2 Passages), 20 Mins.
- **Science, Ecology & Anthropology RC Masterset**: 8 Questions (2 Passages), 20 Mins.
- **Verbal Ability Power Pack**: 8 Questions, 16 Mins (Para Jumbles TITA, Para Summaries, Odd Sentence Out, Sentence Placement).
- **Matrix & Constraint Satisfaction (DILR)**: 10 Questions (2 Sets), 20 Mins.
- **Games & Tournaments Master Set (DILR)**: 10 Questions (2 Sets), 20 Mins.
- **Data Interpretation: Growth, Ratios & Revenue**: 10 Questions (2 Sets), 20 Mins.
- **Routes, Networks & Optimization Flows**: 10 Questions (2 Sets), 20 Mins.

### 4. Official CAT Marking Scheme & Percentile Estimation
- **MCQ**: +3.00 for Correct, -1.00 for Incorrect, 0.00 for Unattempted.
- **TITA (Non-MCQ)**: +3.00 for Correct, 0.00 for Incorrect (No negative marking), 0.00 for Unattempted.
- **Historical Percentile Estimator**: Computes realistic sectional percentiles based on actual CAT score-to-percentile curves.

### 5. Local Storage Memory & "Tests Given" History
- **Tests Given History**: Records every attempt with timestamp, score, accuracy, time taken, and question-by-question responses.
- **Session Auto-Save & Recovery**: Prevents progress loss if the browser tab is accidentally refreshed.
- **Bookmarked Questions Bank**: Star tricky questions during or after a test for dedicated pre-exam revision.
- **Detailed Step-by-Step Solutions**: Complete mathematical formulas and reasoning rationale for every single question.

---

## 🛠️ How to Run

1. Open a terminal in `d:\CAT Sectionals`.
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173/` in your browser.
