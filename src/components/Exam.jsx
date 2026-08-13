import { useEffect, useState } from 'react'
import { usePlaybook } from '../context/PlaybookContext'
import { CodeBlock, ScoreBanner } from './ui'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export default function Exam({ exam }) {
  const { addMistake, markQuizComplete } = usePlaybook()
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(exam.timeMinutes * 60)

  useEffect(() => {
    if (submitted) return
    const t = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(t)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(t)
  }, [submitted])

  useEffect(() => {
    if (timeLeft === 0 && !submitted) finish()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft])

  const finish = () => {
    if (submitted) return
    setSubmitted(true)
    let score = 0
    exam.questions.forEach((q) => {
      const user = answers[q.id]
      const correct = q.type === 'short-answer'
        ? q.acceptedAnswers.map((a) => String(a).toLowerCase()).includes(String(user || '').trim().toLowerCase())
        : user === q.answerIndex
      if (correct) score += 1
      else
        addMistake({
          source: exam.id,
          qid: q.id,
          topic: q.topic,
          question: q.question,
          code: q.code,
          module: q.module,
          userAnswer: q.type === 'short-answer' ? user || '(blank)' : user === undefined ? '(blank)' : LETTERS[user],
          correctAnswer:
            q.type === 'short-answer'
              ? q.acceptedAnswers.join(' / ')
              : `${LETTERS[q.answerIndex]}. ${q.options[q.answerIndex]}`,
          explanation: q.explanation || '',
        })
    })
    markQuizComplete(`${exam.id}-score`, score, exam.questions.length)
  }

  const answeredCount = Object.keys(answers).length
  const q = exam.questions[idx]
  const mm = Math.floor(timeLeft / 60)
  const ss = String(timeLeft % 60).padStart(2, '0')

  if (!q) return <p>Đề thi không có câu hỏi.</p>

  return (
    <div>
      <div className="exam-header">
        <div>
          <h1 className="page-title">{exam.title}</h1>
          <p className="page-sub">{exam.description}</p>
        </div>
        <div className={`exam-timer ${timeLeft < 120 ? 'low' : ''}`}>
          ⏱ {mm}:{ss}
        </div>
      </div>

      {!submitted && (
        <>
          {q.code ? (
            <div className="exam-question">
              <div className="quiz-q-top">
                <span className="quiz-q-num">Q{idx + 1} / {exam.questions.length}</span>
                <span className="quiz-q-topic">Module {q.module} · {q.topic}</span>
                <span className="quiz-q-type">{q.type}</span>
              </div>
              <p>{q.question}</p>
              <CodeBlock code={q.code} />
              <Options q={q} selected={answers[q.id]} onSelect={(v) => setAnswers((p) => ({ ...p, [q.id]: v }))} />
            </div>
          ) : (
            <div className="exam-question">
              <div className="quiz-q-top">
                <span className="quiz-q-num">Q{idx + 1} / {exam.questions.length}</span>
                <span className="quiz-q-topic">Module {q.module} · {q.topic}</span>
                <span className="quiz-q-type">{q.type}</span>
              </div>
              <p>{q.question}</p>
              <Options q={q} selected={answers[q.id]} onSelect={(v) => setAnswers((p) => ({ ...p, [q.id]: v }))} />
            </div>
          )}

          <div className="exam-nav">
            {exam.questions.map((_, i) => (
              <button
                key={i}
                className={`exam-dot ${answers[exam.questions[i].id] !== undefined ? 'answered' : ''} ${i === idx ? 'current' : ''}`}
                onClick={() => setIdx(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button className="btn btn-outline" disabled={idx === 0} onClick={() => setIdx((i) => i - 1)}>
              ← Câu trước
            </button>
            {idx < exam.questions.length - 1 ? (
              <button className="btn btn-primary" onClick={() => setIdx((i) => i + 1)}>
                Câu sau →
              </button>
            ) : (
              <button className="btn btn-primary" onClick={() => setAnswers((p) => p)} disabled>
                Câu cuối
              </button>
            )}
            <button className="btn btn-teal" onClick={finish} disabled={answeredCount !== exam.questions.length}>
              Nộp bài ({answeredCount}/{exam.questions.length} đã trả lời)
            </button>
          </div>
        </>
      )}

      {submitted && <Results exam={exam} answers={answers} onRetry={() => { setIdx(0); setAnswers({}); setSubmitted(false); setTimeLeft(exam.timeMinutes * 60) }} />}
    </div>
  )
}

function Options({ q, selected, onSelect }) {
  if (q.type === 'short-answer') {
    return (
      <input
        className="short-answer-input"
        placeholder="Nhập câu trả lời…"
        value={selected || ''}
        onChange={(e) => onSelect(e.target.value)}
      />
    )
  }
  return (
    <div>
      {q.options.map((opt, i) => (
        <div key={i} className={selected === i ? 'quiz-option selected' : 'quiz-option'} onClick={() => onSelect(i)}>
          <span className="letter">{LETTERS[i]}.</span>
          <span>{opt}</span>
        </div>
      ))}
    </div>
  )
}

function isCorrect(q, user) {
  if (q.type === 'short-answer') {
    return q.acceptedAnswers.map((a) => String(a).toLowerCase()).includes(String(user || '').trim().toLowerCase())
  }
  return user === q.answerIndex
}

function fmtUser(q, user) {
  if (q.type === 'short-answer') return user || '(trống)'
  return user === undefined ? '(trống)' : `${LETTERS[user]}. ${q.options[user]}`
}

function fmtCorrect(q) {
  if (q.type === 'short-answer') return q.acceptedAnswers.join(' / ')
  return `${LETTERS[q.answerIndex]}. ${q.options[q.answerIndex]}`
}

function Results({ exam, answers, onRetry }) {
  const [showWrong, setShowWrong] = useState(false)
  const results = exam.questions.map((q, i) => ({ q, i, correct: isCorrect(q, answers[q.id]) }))
  const score = results.filter((r) => r.correct).length
  const wrongCount = results.length - score

  const modules = ['A', 'B', 'C', 'D'].map((m) => {
    const qs = exam.questions.filter((q) => q.module === m)
    return {
      module: m,
      correct: qs.filter((q) => isCorrect(q, answers[q.id])).length,
      total: qs.length,
      pct: qs.length ? Math.round((qs.filter((q) => isCorrect(q, answers[q.id])).length / qs.length) * 100) : 0,
    }
  })

  const visible = showWrong ? results.filter((r) => !r.correct) : results

  return (
    <div>
      <ScoreBanner score={score} total={exam.questions.length} />
      <div className="card">
        <h2>Phân tích theo module</h2>
        <div className="module-breakdown">
          {modules.map((m) => (
            <div key={m.module} className="module-row">
              <span className="module-name">Module {m.module}</span>
              <div className="module-bar">
                <div className="module-bar-fill" style={{ width: `${m.pct}%` }} />
              </div>
              <span className="module-pct">{m.pct}%</span>
              <span style={{ width: 60, textAlign: 'right', fontSize: '0.8rem' }}>
                {m.correct}/{m.total}
              </span>
            </div>
          ))}
        </div>
        {score / exam.questions.length >= 0.6 && (
          <p className="mt-1">✅ Trên 60% — dấu hiệu tốt, bạn đã sẵn sàng.</p>
        )}
      </div>

      <div className="card">
        <div className="results-head">
          <h2>📋 Rà soát câu hỏi</h2>
          {wrongCount > 0 && (
            <button className="btn btn-outline" onClick={() => setShowWrong((v) => !v)}>
              {showWrong ? `Hiện tất cả (${results.length})` : `Chỉ xem câu sai (${wrongCount})`}
            </button>
          )}
        </div>
        {visible.length === 0 ? (
          <p>🎉 Không có câu nào cần xem lại.</p>
        ) : (
          visible.map(({ q, i, correct }) => (
            <div key={q.id} className="quiz-question">
              <div className="quiz-q-top">
                <span className="quiz-q-num">Q{i + 1} / {exam.questions.length}</span>
                <span className="quiz-q-topic">Module {q.module} · {q.topic}</span>
                <span className={`badge ${correct ? 'badge-pass' : 'badge-fail'}`}>
                  {correct ? '✅ Đúng' : '❌ Sai'}
                </span>
              </div>
              <p>{q.question}</p>
              {q.code && <CodeBlock code={q.code} />}
              <div className={`quiz-feedback ${correct ? 'correct' : 'wrong'}`}>
                <div>
                  <strong>Câu trả lời của bạn:</strong> {fmtUser(q, answers[q.id])}
                </div>
                {!correct && (
                  <div>
                    <strong>Đáp án đúng:</strong> {fmtCorrect(q)}
                  </div>
                )}
                {q.explanation && (
                  <div className="mt-1">
                    <strong>Giải thích:</strong> {q.explanation}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <button className="btn btn-teal" onClick={onRetry}>🔁 Làm lại đề thi</button>
    </div>
  )
}