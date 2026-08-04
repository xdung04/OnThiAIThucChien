# CHANGELOG

All notable project updates are tracked here.

## [0.2.0] — 2026-08-04 — Multi-account, 60-question Exams & Vietnamese Content

### Added
- **Multi-account system** — 3 accounts (Dũng, An, Minh); each user keeps separate progress and mistake history in `localStorage`.
- **Mock exams upgraded to 60 questions / 90 minutes** — all 3 exams now match the real assessment, keeping the module distribution A=15 / B=21 / C=15 / D=9.
- **Content fully translated to Vietnamese** — 16 lessons (10-section template), ~20 quiz files, 3 mock exams, and all UI text.

### Changed
- `docs/STYLE_GUIDE.md` — Mock Exam Rule updated: 60 questions / 90 minutes (was 20 / 30).
- `docs/PROJECT_RULES.md` — content language is now Vietnamese; exam format updated.
- `docs/ROADMAP.md` — Day 7 full mock is now a 60-question / 90-minute exam.
- `docs/DECISION_LOG.md` — added the new scope decisions.

### Planned (next)
- QA: build test, question count, module distribution, link check.

## [0.1.0] — 2026-08-04 — Project Initialization

### Added

- `docs/PROJECT_RULES.md` — mission, audience, learning philosophy, content/writing rules, forbidden topics, development workflow
- `docs/ROADMAP.md` — 7-day study plan organized by days with checklists
- `docs/STYLE_GUIDE.md` — lesson template, tone, code style, quiz/mock exam rules
- `docs/DECISION_LOG.md` — initial scope and design decisions
- `docs/REFERENCES.md` — official, community, and documentation references
- `docs/CHANGELOG.md` — this file

### Planned (next milestones)

- Scaffold Vite + React project (router, layout, styles)
- Quiz/Exam/LessonTemplate engines
- Lessons + quiz data for Days 1–3
- Lessons + quiz data for Days 4–5
- Day 6 lessons + mini mock
- 3 mock exams (25/35/25/15 module split)
- Day 7 assessment hub, cheat sheets, review dashboard
- QA: build, scope audit, question counts, link check