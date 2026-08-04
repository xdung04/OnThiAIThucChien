import { Link } from 'react-router-dom'
import { usePlaybook } from '../context/PlaybookContext'
import { CodeBlock } from '../components/ui'

export default function MistakesReview() {
  const { mistakes, clearMistakes } = usePlaybook()

  return (
    <div>
      <h1 className="page-title">Ôn lỗi sai</h1>
      <p className="page-sub">
        Mọi câu bạn trả lời sai đều được lưu tự động tại đây theo từng tài khoản. Xem lại để tránh
        lặp lại những lỗi tương tự.
      </p>

      {mistakes.length === 0 ? (
        <div className="card empty-state">
          <p>🎉 Chưa có lỗi sai nào được ghi nhận.</p>
          <p>Hãy làm quiz hoặc đề thi thử — những câu sai sẽ hiện ra ở đây.</p>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <span className="badge badge-importance">{mistakes.length} lỗi sai đã lưu</span>
            <button className="btn btn-outline" onClick={clearMistakes}>
              🗑 Xóa toàn bộ lỗi sai
            </button>
          </div>

          {mistakes.map((m, i) => (
            <div key={i} className="quiz-question">
              <div className="quiz-q-top">
                <span className="quiz-q-num">#{i + 1}</span>
                <span className="quiz-q-topic">{m.topic || m.module ? `Module ${m.module} · ${m.topic}` : m.topic}</span>
                <span className="quiz-q-type">{m.source}</span>
              </div>
              <p>{m.question}</p>
              {m.code && <CodeBlock code={m.code} />}
              <div className="quiz-feedback wrong">
                <div>
                  <strong>Câu trả lời của bạn:</strong> {m.userAnswer || '(trống)'}
                </div>
                <div>
                  <strong>Đáp án đúng:</strong> {m.correctAnswer}
                </div>
                {m.explanation && (
                  <div className="mt-1">
                    <strong>Giải thích:</strong> {m.explanation}
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="mt-2">
            <Link to="/review" className="btn btn-primary">
              → Đi tới Ôn điểm yếu
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}