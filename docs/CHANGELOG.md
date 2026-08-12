# CHANGELOG

All notable project updates are tracked here.

## [0.4.0] — 2026-08-12 — Replaced Day 7 with basic CNN & Convolution

### Added
- **New Day 7 lesson**: `day7-cnn-convolution` (10-section template, Vietnamese) covering CNN / Convolution, Kernel/Filter, Convolution operation, Feature Map, Stride, Padding, and hand-computed Output Size — basic level for no-calculator multiple-choice questions.
- **New Day 7 quiz**: `day7-cnn-convolution` — **6 multiple-choice questions** (no-calculator, small hand-computed numbers), wired into the lesson and the Day 7 page (replaces the previous `noQuiz` flag).

### Changed
- **`day7-assessment-tips`** ("Mẹo làm bài") removed from Day 7.
- **`src/data/curriculum.js`**: Day 7 retitled to "CNN & Học sâu (cơ bản)" (Module C · Kiến thức AI); now lists a single lesson (`day7-cnn-convolution`) with quiz `day7-cnn-convolution` ("Kiểm tra nhanh Ngày 7"); the non-linked entries "Tổng hợp công thức" / "Ôn điểm yếu" were removed.

### Docs
- `docs/PROJECT_RULES.md` — removed CNN from Forbidden Topics; noted CNN/Convolution basics are now in scope (Day 7, explicit request).
- `docs/DECISION_LOG.md` — recorded the new CNN/Convolution decision.
- `docs/ROADMAP.md` — Day 7 checklist updated to the CNN/Convolution scope.

## [0.3.1] — 2026-08-11 — Day 5 "dễ nhớ" (mnemonics, flows, examples)

### Changed
- **`day5-linear-regression`**: thêm mẹo nhớ & ví dụ tay — "Dự đoán = điểm bắt đầu + độ dốc × x", "Residual = REAL − PREDICTED", "SSE = Square rồi Sum", "MSE = SSE / số điểm"; ví dụ ŷ=2+3x→14, actual [3,5,8] vs predicted [2,6,7]→SSE=3; flow tính tay thuộc lòng.
- **`day5-logistic-regression`**: thêm 2 tầng Linear→Sigmoid→Probability→Threshold→Class, "3 điều phải thuộc" về σ(z), mẹo cực mạnh "threshold 0.5 → chỉ cần dấu z", và **threshold có thể đổi** (P=0.7 vs thr 0.8/0.6).
- **`day5-gradient-descent`**: thêm vòng học Prediction→Loss→Gradient→Update→tốt hơn và mẹo "dấu − = đi ngược gradient để xuống Cost".
- **`day5-derivative`**: liên hệ đạo hàm của Cost = Gradient (input của Gradient Descent).
- **`day5-kmeans`**: thêm flow nhớ nhanh K → khoảng cách → gán gần nhất → centroid → hội tụ.

### Mock exams
- Module C của `mock-exam-1/2/3`: bổ sung câu hỏi **threshold thay đổi** (so P với threshold, không phải 0.5 cố định) — thay câu z-sign cũ, giữ nguyên A=15/B=21/C=15/D=9.

## [0.3.0] — 2026-08-11 — Deepened Day 5 (tính tay) + Updated Mock Exams

### Added
- **New Day 5 lessons**: `day5-derivative`, `day5-gradient-descent`, `day5-kmeans` (all 10-section template, Vietnamese).
- **New Day 5 quizzes**: `day5-derivative`, `day5-gradient-descent`, `day5-kmeans` (5 questions each).

### Changed
- **`day5-linear-regression`** deepened: `ŷ = b₀ + b₁x` prediction, residual `e = y − ŷ`, `SSE = Σe²`, `MSE = SSE/n`, R² meaning & model comparison.
- **`day5-logistic-regression`** deepened: `z = b₀ + b₁x`, sigmoid `σ(z)` with `σ(0) = 0.5`, probability → threshold 0.5 → class 0/1.
- **`day3-statistics`** lesson + quiz: added worked hand-calculation of variance/std.
- **`day5.js`** quick test extended with hand-calc items for the new topics.
- **Mock exams (`mock-exam-1/2/3`)**: Module C (15) rewritten to test the deeper Day 5 content (ŷ, residual, SSE, MSE, R², z, sigmoid, threshold, derivative, gradient descent, K-Means). Module counts kept at A=15 / B=21 / C=15 / D=9.
- **`src/data/curriculum.js`**: Day 5 now lists 7 lessons.

### Docs
- `docs/ROADMAP.md` — Day 5 checklist updated with tính-tay skills.
- `docs/PROJECT_RULES.md` — Clustering and Calculus/Optimization Math removed from Forbidden Topics (K-Means, Derivative, Gradient Descent are now in scope).
- `docs/DECISION_LOG.md` — recorded the new decisions.

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