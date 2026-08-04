import { useParams, Link } from 'react-router-dom'
import { getDay } from '../data/curriculum'
import { getLesson } from '../data/lessons'
import { getQuiz } from '../data/quizzes'
import { usePlaybook } from '../context/PlaybookContext'
import Quiz from '../components/Quiz'
import { Callout } from '../components/ui'

export default function DayHub() {
  const { dayNum } = useParams()
  const day = getDay(Number(dayNum))
  const { isLessonComplete, progress } = usePlaybook()

  if (!day) {
    return (
      <div className="card">
        <h1>Không tìm thấy ngày</h1>
        <p>Vui lòng quay lại <Link to="/">trang chủ</Link>.</p>
      </div>
    )
  }

  const quiz = day.quizId ? getQuiz(day.quizId) : null
  const quizResult = progress[`quiz:${day.quizId}`]
  const allLessonsDone = day.lessons.every((l) => !l.slug || isLessonComplete(l.slug))

  return (
    <div>
      <div className="badge-row">
        <Link to="/" className="badge">◀ Trang chủ</Link>
        <span className="badge">{day.sub}</span>
        <span className="badge badge-tip">
          {allLessonsDone && (!day.quizId || quizResult) ? '✓ Đã xong ngày' : 'Đang học'}
        </span>
      </div>

      <h1 className="page-title">Ngày {day.day} — {day.title}</h1>
      <p className="page-sub">
        {day.lessons.length} bài học · {day.quizId ? (day.isMiniMock ? 'Thi thử nhỏ' : 'Kiểm tra nhanh') : 'Không có quiz'}
      </p>

      <div className="card">
        <h2>Bài học</h2>
        {day.lessons.map((lesson, i) => {
          if (!lesson.slug) {
            return (
              <div key={i} className="day-card">
                <div className="day-num">→</div>
                <div className="day-info">
                  <div className="day-title">{lesson.title}</div>
                  <div className="day-sub">{lesson.time}</div>
                </div>
              </div>
            )
          }
          const done = isLessonComplete(lesson.slug)
          return (
            <Link
              key={i}
              to={`/lesson/${lesson.slug}`}
              className="day-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                className="day-num"
                style={done ? { background: 'var(--success)', color: '#fff', borderColor: 'var(--success)' } : {}}
              >
                {done ? '✓' : i + 1}
              </div>
              <div className="day-info">
                <div className="day-title">{lesson.title}</div>
                <div className="day-sub">{lesson.time} · {done ? 'Đã hoàn thành' : 'Chưa bắt đầu'}</div>
              </div>
              <span className="btn btn-outline">Mở →</span>
            </Link>
          )
        })}
      </div>

      {day.quizId && quiz && (
        <div className="card">
          <h2>{day.quizTitle}</h2>
          {quizResult && (
            <div className="callout">
              Điểm gần nhất: <strong>{quizResult.score} / {quizResult.total}</strong> — luyện thêm để
              cải thiện! Lỗi sai đã lưu tại <Link to="/quizzes">Ôn lỗi sai</Link>.
            </div>
          )}
          <Quiz quiz={quiz} source={day.quizId} />
        </div>
      )}

      {!day.quizId && (
        <div className="card">
          <h2>Ôn tập cuối</h2>
          <p>
            Trọng tâm các ngày cuối: làm một <Link to="/mock-exams">đề thi thử</Link>, ôn{' '}
            <Link to="/cheat-sheets">bảng công thức</Link>, và kiểm tra các{' '}
            <Link to="/review">điểm yếu</Link>.
          </p>
        </div>
      )}
    </div>
  )
}