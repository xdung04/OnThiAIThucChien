import { useState } from 'react'
import { getAllEssaySections } from '../data/essays'
import { CodeBlock } from '../components/ui'

function EssayCard({ q, index, isOpen, onToggle }) {
  // NumPy/Pandas dùng schema "viết code" (answerCode); MVP dùng schema tự luận (answerText).
  const isCoding = Boolean(q.answerCode)

  return (
    <div className="essay-card">
      <div className="quiz-q-top">
        <span className="quiz-q-num">Câu {index + 1}</span>
        <span className="quiz-q-topic">{q.topic}</span>
        <span className={`quiz-q-type ${q.difficulty === 'Khó' ? 'hard' : ''}`}>
          {q.difficulty === 'Khó' ? 'Khó' : 'Trung bình'}
        </span>
      </div>

      <p className="essay-question">{q.problem || q.question}</p>

      {isCoding && (
        <>
          {q.signature && (
            <div className="sig-block">
              <span className="sig-label">Hàm cần viết</span>
              <code>{q.signature}</code>
            </div>
          )}

          {q.examples && q.examples.length > 0 && (
            <div className="examples-wrap">
              {q.examples.map((ex, i) => (
                <div className="example-block" key={i}>
                  <div className="example-io">
                    <span className="io-label">Input</span>
                    <code>{ex.input}</code>
                  </div>
                  <div className="example-io">
                    <span className="io-label">Output</span>
                    <code>{ex.output}</code>
                  </div>
                </div>
              ))}
            </div>
          )}

          {q.constraints && <div className="constraints">📏 Ràng buộc: {q.constraints}</div>}

          <textarea
            className="code-editor"
            rows={6}
            spellCheck={false}
            placeholder="Viết lời giải của bạn ở đây… (tự luyện — không chấm điểm tự động)"
          />
        </>
      )}

      <button className={`btn ${isOpen ? 'btn-primary' : 'btn-outline'} reveal-btn`} onClick={onToggle}>
        {isOpen ? '🙈 Ẩn đáp án' : isCoding ? '✍ Xem lời giải' : '✍ Xem đáp án'}
      </button>

      {isOpen && (
        <div className="answer-box">
          {isCoding ? (
            <>
              <div className="answer-title">✅ Lời giải mẫu</div>
              <CodeBlock code={q.answerCode} />
              <div className="howto-title">🔎 Giải thích</div>
              <ol className="answer-steps">
                {q.steps.map((st, i) => (
                  <li key={i}>{st}</li>
                ))}
              </ol>
            </>
          ) : (
            <>
              <div className="answer-title">✅ Đáp án mẫu</div>
              <p className="answer-text">{q.answerText}</p>
              {q.steps && q.steps.length > 0 && (
                <>
                  <div className="howto-title">🗂 Khung trả lời gợi ý</div>
                  <ol className="answer-steps">
                    {q.steps.map((st, i) => (
                      <li key={i}>{st}</li>
                    ))}
                  </ol>
                </>
              )}
            </>
          )}

          {q.edgeCases && <div className="edge-box">⚠ Trường hợp biên: {q.edgeCases}</div>}
          {q.tip && <div className="answer-tip">💡 {q.tip}</div>}
        </div>
      )}
    </div>
  )
}

export default function EssayReview() {
  const sections = getAllEssaySections()
  const [active, setActive] = useState(sections[0]?.id || 'numpy')
  const [revealed, setRevealed] = useState({})

  const section = sections.find((s) => s.id === active) || sections[0]

  const toggle = (id) => setRevealed((prev) => ({ ...prev, [id]: !prev[id] }))

  const revealSectionAll = (show) => {
    setRevealed((prev) => {
      const next = { ...prev }
      section.questions.forEach((q) => {
        next[q.id] = show
      })
      return next
    })
  }

  return (
    <div>
      <h1 className="page-title">Ôn tập tự luận</h1>
      <p className="page-sub">
        NumPy & Pandas là dạng bài lập trình kiểu LeetCode: đọc đề → tự viết code vào ô → bấm
        “✍ Xem lời giải” để so với code mẫu và giải thích từng bước. MVP là câu tự luận viết đoạn. Số
        nhỏ, phù hợp để tính tay.
      </p>

      <div className="tabs">
        {sections.map((s) => (
          <button
            key={s.id}
            className={`tab-btn ${s.id === active ? 'active' : ''}`}
            onClick={() => setActive(s.id)}
          >
            {s.label} <span className="tab-count">{s.questions.length} câu</span>
          </button>
        ))}
      </div>

      {section && (
        <div className="essay-section">
          <div className="essay-meta">
            <span className="badge badge-tip">{section.desc}</span>
            <span className="badge">✍ tự luyện · tự chấm</span>
          </div>

          <div className="essay-toolbar">
            <button className="btn btn-teal" onClick={() => revealSectionAll(true)}>
              👁 Hiện tất cả lời giải
            </button>
            <button className="btn btn-outline" onClick={() => revealSectionAll(false)}>
              🙈 Ẩn tất cả lời giải
            </button>
          </div>

          {section.questions.map((q, i) => (
            <EssayCard key={q.id} q={q} index={i} isOpen={!!revealed[q.id]} onToggle={() => toggle(q.id)} />
          ))}
        </div>
      )}
    </div>
  )
}