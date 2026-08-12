import { Link } from 'react-router-dom'
import { DAYS, MODULES } from '../data/curriculum'
import { usePlaybook } from '../context/PlaybookContext'

export default function Home() {
  const { percent, todayLesson, doneDays, mistakes } = usePlaybook()

  return (
    <div>
      <div className="hero">
        <h1>Vin AI Assessment Playbook</h1>
        <p>
          Kế hoạch luyện thi tập trung 7 ngày cho kỳ đánh giá đầu vào Chương trình
          VinGroup Practical AI Talent. Học rộng, không học sâu — tối ưu để vượt qua.
        </p>
        <div className="hero-badges">
          <span className="badge badge-tip">📅 7 ngày</span>
          <span className="badge badge-time">🎯 Bám sát kỳ đánh giá</span>
          <span className="badge badge-importance">🚀 Thân thiện người mới</span>
        </div>
      </div>

      <TodayCard todayLesson={todayLesson} />
      <ProgressCard doneDays={doneDays} percent={percent} mistakes={mistakes} />
      <StudyPlan doneDays={doneDays} />
      <Modules />
      <QuickNav />
      <Updates />
    </div>
  )
}

function TodayCard({ todayLesson }) {
  return (
    <div className="card">
      <h2>Bài học hôm nay</h2>
      {todayLesson ? (
        <div>
          <p>
            <strong>Ngày {todayLesson.day}:</strong> {todayLesson.lesson.title} (
            {todayLesson.lesson.time})
          </p>
          <Link to={todayLesson.path} className="btn btn-primary mt-1">
            → Bắt đầu bài học
          </Link>
        </div>
      ) : (
        <p>
          🎉 Đã hoàn thành tất cả bài học! Hãy làm một <Link to="/mock-exams">đề thi thử</Link> để
          kiểm tra bạn đã sẵn sàng chưa.
        </p>
      )}
    </div>
  )
}

function ProgressCard({ doneDays, percent, mistakes }) {
  return (
    <div className="card">
      <h2>Tiến độ của bạn</h2>
      <div className="progress-label">
        <span>
          Đã hoàn thành {doneDays.length} / {DAYS.length} ngày
        </span>
        <span>{percent}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
      {mistakes.length > 0 && (
        <p className="mt-1" style={{ color: 'var(--warning)' }}>
          ⚠ Có {mistakes.length} lỗi sai được lưu — hãy ôn lại trước khi thi.
        </p>
      )}
    </div>
  )
}

function StudyPlan({ doneDays }) {
  const done = (d) => doneDays.includes(d.day)
  return (
    <div className="card">
      <h2>Kế hoạch học 7 ngày</h2>
      {DAYS.map((d) => (
        <Link
          key={d.day}
          to={d.path}
          className="day-card"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div
            className="day-num"
            style={done(d) ? { background: 'var(--success)', color: '#fff', borderColor: 'var(--success)' } : {}}
          >
            {d.day}
          </div>
          <div className="day-info">
            <div className="day-title">
              Ngày {d.day} · {d.title}
            </div>
            <div className="day-sub">
              {d.sub} · {done(d) ? '✓ Đã hoàn thành' : `${d.lessons.length} bài học`}
            </div>
          </div>
          <span className="btn btn-outline">Mở →</span>
        </Link>
      ))}
    </div>
  )
}

function Modules() {
  return (
    <div className="card">
      <h2>Các module đánh giá</h2>
      <div className="grid-2">
        {MODULES.map((m) => (
          <div key={m.code} className="card" style={{ marginBottom: 0 }}>
            <h3>Module {m.code}</h3>
            <p style={{ fontSize: '0.9rem' }}>{m.name}</p>
            <ul className="item-list">
              <li>
                Tỷ trọng: <strong>{m.pct}</strong>
              </li>
              <li>
                Học vào: <strong>{m.days}</strong>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function QuickNav() {
  return (
    <div className="card">
      <h2>Điều hướng nhanh</h2>
      <div className="grid-2">
        <Link to="/mock-exams" className="btn btn-primary btn-block">📝 Đề thi thử</Link>
        <Link to="/cheat-sheets" className="btn btn-teal btn-block">📋 Tổng hợp công thức</Link>
        <Link to="/review" className="btn btn-outline btn-block">🔁 Ôn điểm yếu</Link>
        <Link to="/essay-review" className="btn btn-outline btn-block">✍ Ôn tập tự luận</Link>
        <Link to="/quizzes" className="btn btn-outline btn-block">❌ Ôn lỗi sai</Link>
      </div>
    </div>
  )
}

function Updates() {
  return (
    <div className="card">
      <h2>Cập nhật mới nhất</h2>
      <ul className="item-list">
        <li>
          <strong>v0.2.0</strong> — Thêm hệ thống 3 tài khoản, đề thi thử 60 câu/90 phút và
          nội dung tiếng Việt.
        </li>
        <li>Toàn bộ bài học và quiz được dịch sang tiếng Việt.</li>
        <li>
          Lỗi sai tự lưu theo từng tài khoản — xem tại <Link to="/quizzes">Ôn lỗi sai</Link>.
        </li>
      </ul>
    </div>
  )
}