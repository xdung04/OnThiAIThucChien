import { useState } from 'react'
import { usePlaybook } from '../context/PlaybookContext'
import { ScoreBanner } from './ui'
import QuestionCard from './QuestionCard'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export default function Quiz({ quiz, source }) {
  const { addMistake, markQuizComplete } = usePlaybook()
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleAnswer = (qid, value) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }))
  }

  const isCorrect = (q, user) => {
    if (q.type === 'short-answer') {
      return q.acceptedAnswers.map((a) => String(a).toLowerCase()).includes(String(user).trim().toLowerCase())
    }
    return user === q.answerIndex
  }

  const allAnswered = quiz.questions.every((q) => answers[q.id] !== undefined && answers[q.id] !== '')

  const submit = () => {
    if (!allAnswered) return
    setSubmitted(true)
    let score = 0
    quiz.questions.forEach((q) => {
      const user = answers[q.id]
      if (isCorrect(q, user)) {
        score += 1
      } else {
        addMistake({
          source,
          qid: q.id,
          topic: q.topic,
          question: q.question,
          code: q.code,
          userAnswer: q.type === 'short-answer' ? user : LETTERS[user],
          correctAnswer:
            q.type === 'short-answer'
              ? q.acceptedAnswers.join(' / ')
              : `${LETTERS[q.answerIndex]}. ${q.options[q.answerIndex]}`,
          explanation: q.explanation || q.answerText || '',
        })
      }
    })
    markQuizComplete(source, score, quiz.questions.length)
  }

  const unansweredCount = quiz.questions.filter(
    (q) => answers[q.id] === undefined || answers[q.id] === ''
  ).length

  return (
    <div>
      {quiz.questions.map((q, i) => (
        <QuestionCard
          key={q.id}
          q={q}
          index={i}
          answered={submitted}
          selected={answers[q.id]}
          onAnswer={handleAnswer}
        />
      ))}

      {!submitted && (
        <button
          className="btn btn-primary btn-block"
          onClick={submit}
          disabled={!allAnswered}
        >
          Nộp bài quiz {!allAnswered && `(${unansweredCount} chưa trả lời)`}
        </button>
      )}

      {submitted && (
        <div className="mt-2" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <ScoreBanner
            score={quiz.questions.filter((q) => isCorrect(q, answers[q.id])).length}
            total={quiz.questions.length}
          />
          <button
            className="btn btn-teal"
            onClick={() => {
              setAnswers({})
              setSubmitted(false)
            }}
          >
            🔁 Làm lại quiz
          </button>
        </div>
      )}
    </div>
  )
}