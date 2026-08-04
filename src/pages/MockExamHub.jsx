import { Link } from 'react-router-dom'
import { getAllExams } from '../data/exams'
import { MODULES } from '../data/curriculum'

export default function MockExamHub() {
  const exams = getAllExams()

  return (
    <div>
      <h1 className="page-title">Đề thi thử</h1>
      <p className="page-sub">
        Ba đề luyện thi đầy đủ theo đúng cơ cấu phân bố của kỳ đánh giá chính thức: 60 câu · 90 phút.
      </p>

      <div className="card">
        <h2>Cơ cấu phân bố</h2>
        <ul className="item-list">
          {MODULES.map((m) => (
            <li key={m.code}>
              <strong>Module {m.code}</strong> — {m.name} ({m.pct})
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>Đề thi có sẵn</h2>
        {exams.length === 0 && <p>Đề thi đang được bổ sung. Quay lại sau.</p>}
        {exams.map((exam) => (
          <div key={exam.id} className="day-card">
            <div className="day-num" style={{ background: 'var(--teal)', borderColor: 'var(--teal)', color: '#fff' }}>
              {exam.questions.length}
            </div>
            <div className="day-info">
              <div className="day-title">{exam.title}</div>
              <div className="day-sub">
                {exam.timeMinutes} phút · {exam.questions.length} câu · Các module A–D
              </div>
            </div>
            <Link to={`/exam/${exam.id}`} className="btn btn-primary">
              Bắt đầu →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}