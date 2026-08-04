import { CodeBlock } from './ui'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

function optionClass(q, optIdx, answered, selected) {
  if (!answered) return selected === optIdx ? 'selected' : ''
  if (optIdx === q.answerIndex) return 'correct'
  if (selected === optIdx) return 'wrong'
  return ''
}

export default function QuestionCard({ q, index, answered, selected, onAnswer }) {
  const isCorrect = q.type === 'short-answer' || selected === q.answerIndex

  return (
    <div className="quiz-question">
      <div className="quiz-q-top">
        <span className="quiz-q-num">Q{index + 1}</span>
        <span className="quiz-q-topic">{q.topic}</span>
        <span className="quiz-q-type">{q.type}</span>
      </div>
      <p>{q.question}</p>
      {q.code && <CodeBlock code={q.code} />}

      {q.type === 'short-answer' ? (
        <input
          className="short-answer-input"
          placeholder="Nhập câu trả lời rồi bấm Nộp…"
          value={selected || ''}
          disabled={answered}
          onChange={(e) => onAnswer(q.id, e.target.value)}
        />
      ) : (
        <div>
          {q.options.map((opt, i) => (
            <div
              key={i}
              className={`quiz-option ${optionClass(q, i, answered, selected)}`}
              onClick={() => !answered && onAnswer(q.id, i)}
            >
              <span className="letter">{LETTERS[i]}.</span>
              <span>{opt}</span>
            </div>
          ))}
        </div>
      )}

      {answered && (
        <div className={`quiz-feedback ${q.type === 'short-answer' ? '' : isCorrect ? 'correct' : 'wrong'}`}>
          <strong>{isCorrect ? '✓ Đúng' : '✗ Sai'}</strong>
          {q.explanation && <span> {q.explanation}</span>}
          {!q.explanation && q.answerText && <span> {q.answerText}</span>}
          {q.type !== 'short-answer' && !isCorrect && (
            <div className="mt-1">
              <strong>
                Đáp án đúng: {LETTERS[q.answerIndex]}. {q.options[q.answerIndex]}
              </strong>
            </div>
          )}
          {q.type === 'short-answer' && (
            <div className="mt-1">
              <strong>Chấp nhận: {q.acceptedAnswers.join(' / ')}</strong>
            </div>
          )}
          {q.tip && <div className="mt-1">💡 {q.tip}</div>}
        </div>
      )}
    </div>
  )
}