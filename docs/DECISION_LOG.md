# DECISION LOG

Records every scope and design decision.

## Initial Decisions

| Date | Decision | Reason |
|---|---|---|
| 2026-08-12 | Added CNN & Convolution basics to Day 7 (Kernel/Filter, Convolution, Feature Map, Stride, Padding, Output Size) — basic, no-calculator MCQ level | Explicitly requested by user; overrides the old Forbidden Topic that excluded CNN. Replaces the old Day 7 assessment-tips lesson; Day 7 now has a single CNN lesson and no quiz |
| 2026-08-11 | Day 5 deepened + extended (tính tay / no-calculator focus) | User requested Day 5 content go deeper per an "AI Roadmap — mục tiêu thi không dùng máy tính" |
| 2026-08-11 | Added new Day 5 lessons: Derivative, Gradient Descent, K-Means | Explicitly requested; overrides the old Forbidden Topics that excluded Clustering & Calculus |
| 2026-08-11 | Deepened Linear/Logistic Regression lessons & quizzes with hand-computation (ŷ, residual, SSE, MSE, R²; z, sigmoid, probability, threshold) | To match the deeper Day 5 scope |
| 2026-08-11 | Deepened Day 3 Statistics with worked variance/std hand-calc | Roadmap covers statistics hand-computation |
| 2026-08-11 | Updated Module C of all 3 mock exams to reflect deeper Day 5 (kept A=15/B=21/C=15/D=9) | Mock exams should test what Day 5 now teaches |
| 2026-08-04 | 3 accounts (Dũng, An, Minh) | Site is shared with 2 more people; each keeps their own progress/mistakes |
| 2026-08-04 | Mock exams = 60 questions / 90 minutes | Matches the real assessment format; keeps the 25/35/25/15 module split (A15/B21/C15/D9) |
| 2026-08-04 | Content language = Vietnamese | To fit the learners who use this playbook |
| Day 0 | Beginner level only | Target audience is complete beginners |
| Day 0 | Learn Wide, Not Deep | 7 days only; optimize for passing the assessment |
| Day 0 | NumPy is high priority | Confirmed repeatedly by previous candidates |
| Day 0 | Pandas is high priority | Confirmed repeatedly by previous candidates |
| Day 0 | Matrix concepts tested mainly through Python code | Previous candidates report `np.dot`, `np.transpose`, `np.linalg.inv` style questions |
| Day 0 | Prioritize reading code over writing code | Assessment is mostly read-code/predict-output |
| Day 0 | MVP is product thinking only | Confirmed topic is MVP design, not broader product management |
| Day 0 | Do not introduce advanced AI topics | CNN, RNN, Transformer, LLM, etc. excluded; no candidate evidence they appear |
| Day 0 | Stack: Vite + React + React Router (HashRouter) | User requested React; Vite is the fastest React scaffolding; HashRouter works on any static host |
| Day 0 | Data-driven content architecture | Lessons/quizzes/exams stored as JS data files, rendered by shared components to guarantee consistent structure |
| Day 0 | Progress & mistakes stored in localStorage | No backend; static site; per-device persistence |

## Scope Exclusions (always revisit before adding a topic)

A topic may only be added if supported by:

1. The official assessment outline, OR
2. Confirmed reports from previous candidates.

Otherwise it is excluded.