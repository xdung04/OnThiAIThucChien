import { Link } from 'react-router-dom'
import { usePlaybook } from '../context/PlaybookContext'
import { getAllLessons } from '../data/lessons'

export default function ReviewDashboard() {
  const { mistakes, progress, percent } = usePlaybook()

  // Group mistakes by topic
  const byTopic = {}
  mistakes.forEach((m) => {
    const key = m.topic || 'General'
    byTopic[key] = (byTopic[key] || 0) + 1
  })
  const topics = Object.entries(byTopic).sort((a, b) => b[1] - a[1])

  const lessons = getAllLessons()
  const incomplete = lessons.filter((l) => !progress[l.slug])

  return (
    <div>
      <h1 className="page-title">Ôn điểm yếu</h1>
      <p className="page-sub">
        Tập trung ôn luyện cuối cùng vào những chủ đề bạn mắc nhiều lỗi nhất.
      </p>

      <div className="card">
        <h2>Chủ đề yếu nhất của bạn</h2>
        {topics.length === 0 ? (
          <p>Chưa phát hiện chủ đề yếu. Hãy làm quiz và đề thi thử để xây dựng danh sách này.</p>
        ) : (
          <ul className="item-list">
            {topics.map(([topic, count]) => (
              <li key={topic}>
                <strong>{topic}</strong> — {count} lỗi
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="card">
        <h2>Bài học chưa hoàn thành</h2>
        {incomplete.length === 0 ? (
          <p>🎉 Đã hoàn thành tất cả bài học! Bạn đã sẵn sàng cho kỳ đánh giá.</p>
        ) : (
          <ul className="item-list">
            {incomplete.map((l) => (
              <li key={l.slug}>
                <Link to={`/lesson/${l.slug}`}>{l.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="card">
        <h2>Tiến độ tổng thể</h2>
        <div className="progress-label">
          <span>Mức hoàn thành</span>
          <span>{percent}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${percent}%` }} />
        </div>
        <div className="mt-2" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Link to="/cheat-sheets" className="btn btn-teal">📋 Ôn bảng công thức</Link>
          <Link to="/mock-exams" className="btn btn-primary">📝 Làm đề thi thử</Link>
        </div>
      </div>
    </div>
  )
}