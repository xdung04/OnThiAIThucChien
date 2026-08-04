import { useState } from 'react'

export function CodeBlock({ code, note }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <div>
      <div className="code-block">
        <button
          className="btn btn-outline"
          style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', fontSize: '0.72rem', padding: '0.2rem 0.5rem' }}
          onClick={copy}
        >
          {copied ? 'Đã sao chép ✓' : 'Sao chép'}
        </button>
        <pre>{code}</pre>
      </div>
      {note && <p className="code-note">{note}</p>}
    </div>
  )
}

export function Badge({ children, variant }) {
  return <span className={`badge badge-${variant || ''}`}>{children}</span>
}

export function MetaRow({ lesson, tip }) {
  const diffMap = {
    Beginner: '🟢 Mức cơ bản',
    Easy: '🟡 Dễ',
    Medium: '🟠 Trung bình',
  }
  const impMap = {
    High: '🔴 Quan trọng cao',
    Medium: '🟠 Quan trọng trung bình',
    Low: '⚪ Ít quan trọng',
  }
  return (
    <div className="badge-row">
      <Badge variant="time">⏱ {lesson.time}</Badge>
      <Badge variant="difficulty">{diffMap[lesson.difficulty] || lesson.difficulty}</Badge>
      <Badge variant="importance">{impMap[lesson.importance] || lesson.importance}</Badge>
      {tip !== false && <Badge variant="tip">💡 Mẹo làm bài</Badge>}
    </div>
  )
}

export function Callout({ type = 'default', children }) {
  return <div className={`callout ${type !== 'default' ? type : ''}`}>{children}</div>
}

export function ScoreBanner({ score, total }) {
  const pct = total ? Math.round((score / total) * 100) : 0
  const label =
    pct >= 80
      ? 'Xuất sắc! Sẵn sàng làm bài 🎯'
      : pct >= 60
        ? 'Tốt, tiếp tục trau dồi 💪'
        : 'Ôn lại và làm lại 📖'
  return (
    <div className="score-banner">
      <div className="score">
        {score} / {total}
      </div>
      <div className="sub">
        {pct}% — {label}
      </div>
    </div>
  )
}