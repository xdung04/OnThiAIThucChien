import { useState } from 'react'
import { getAllEssaySections } from '../data/essays'
import { CodeBlock } from '../components/ui'

function EssayCard({ q, index, isOpen, onToggle }) {
  const isMvp = q.section === 'mvp'
  return (
    <div className="essay-card">
      <div className="quiz-q-top">
        <span className="quiz-q-num">Câu {index + 1}</span>
        <span className="quiz-q-topic">{q.topic}</span>
        <span className={`quiz-q-type ${q.difficulty === 'Khó' ? 'hard' : ''}`}>
          {q.difficulty === 'Khó' ? 'Khó' : 'Trung bình'}
        </span>
      </div>
      <p className="essay-question">{q.question}</p>
      {q.code && <CodeBlock code={q.code} />}

      <button className={`btn ${isOpen ? 'btn-primary' : 'btn-outline'} reveal-btn`} onClick={onToggle}>
        {isOpen ? '🙈 Ẩn đáp án' : '✍ Xem đáp án'}
      </button>

      {isOpen && (
        <div className="answer-box">
          <div className="answer-title">✅ Đáp án mẫu</div>
          <p className="answer-text">{q.answerText}</p>
          {q.steps && q.steps.length > 0 && (
            <>
              <div className="howto-title">{isMvp ? '🗂 Khung trả lời gợi ý' : '🔎 Cách làm từng bước'}</div>
              <ol className="answer-steps">
                {q.steps.map((st, i) => (
                  <li key={i}>{st}</li>
                ))}
              </ol>
            </>
          )}
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
        Đọc đề → tự làm ra giấy → bấm “✍ Xem đáp án” để so với đáp án mẫu và lời giải từng bước. Không
        chấm điểm tự động — bạn tự chấm theo gợi ý. Số nhỏ, phù hợp để tính tay.
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
            <span className="badge">✍ tự luận · tính tay</span>
          </div>

          <div className="essay-toolbar">
            <button className="btn btn-teal" onClick={() => revealSectionAll(true)}>
              👁 Hiện tất cả đáp án
            </button>
            <button className="btn btn-outline" onClick={() => revealSectionAll(false)}>
              🙈 Ẩn tất cả đáp án
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