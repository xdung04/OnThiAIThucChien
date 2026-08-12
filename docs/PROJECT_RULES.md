# PROJECT RULES

## Mission

This website is **NOT** an AI course.

It is an **assessment playbook** for the VinGroup Practical AI Talent Program entrance assessment.

The goal is to help a complete beginner pass the assessment in **7 days** — not to teach AI comprehensively.

## Target Audience

- Complete beginners with little or no programming background
- Candidates preparing for the VinGroup Practical AI Talent Program entrance assessment
- Learners with only 7 days available before the assessment
- Learners who want to optimize for passing, not for deep understanding

## Learning Philosophy

### Learn Wide, Not Deep

- Cover the confirmed assessment scope broadly
- Keep everything beginner-friendly
- Avoid academic explanations
- Avoid mathematical proofs
- Avoid unnecessary theory
- Prioritize reading code over writing code
- Prioritize predicting outputs over deriving formulas

## Content Rules

1. **Scope is fixed.** Only include topics supported by:
   - The official assessment outline, OR
   - Confirmed reports from previous candidates
2. **Never expand the syllabus** just because a topic is common in AI courses.
3. **When uncertain, exclude the topic.**
4. Every lesson must follow the 10-section template exactly.
5. Every lesson must be completable in 10–20 minutes.
6. Every quiz must have 5–10 questions.
7. Every mini test must have 15–20 questions.
8. Mock exams must follow the module distribution:
   - Module A: 25%
   - Module B: 35%
   - Module C: 25%
   - Module D: 15%
9. Mock exams are 60 questions / 90 minutes (per the official assessment format).
10. Content language is **Vietnamese** (code stays in Python; variable names stay in English).
9. Never generate LeetCode-style algorithm questions.

## Writing Rules

- Short paragraphs
- Bullet points preferred
- Maximum 150 words per section
- Beginner-friendly language
- Python examples under 20 lines
- Include estimated reading time
- Include difficulty level
- Include importance level
- Include assessment tips
- Include a quiz at the end
- Include a cheat sheet at the end

## Forbidden Topics

Unless explicitly requested, never include:

- RNN, Transformer, Attention
- GAN, Diffusion
- LLM, Prompt Engineering, LangChain, RAG
- PyTorch, TensorFlow
- SVM, Decision Tree, Random Forest, KNN, Naive Bayes
- PCA, SVD
- Advanced Linear Algebra
- Full calculus / optimization theory (only the hand-computable basics are included: derivative of simple polynomials, gradient sign)

> Note: **Clustering (K-Means)**, **Calculus/Optimization basics (Derivative, Gradient Descent)** and **CNN/Convolution basics (Kernel/Filter, Convolution, Feature Map, Stride, Padding, Output Size)** are explicitly part of the scope per the roadmap (tính tay / hand-computable, no-calculator MCQ). CNN/Convolution was added to Day 7 by explicit user request.

## Development Workflow

1. **Plan** — confirm scope and structure before building.
2. **Docs first** — maintain PROJECT_RULES, ROADMAP, STYLE_GUIDE, DECISION_LOG, REFERENCES, CHANGELOG.
3. **Build in milestones** — docs → skeleton → days 1–3 → days 4–5 → day 6 → mock exams → day 7 → QA.
4. **Data-driven content** — lessons and quizzes live in data files, rendered by shared components.
5. **QA before completion** — scope audit, question counts, module distribution, link check, build test.
6. **Track decisions** — record every scope decision in DECISION_LOG.md.
7. **Track changes** — record every update in CHANGELOG.md.