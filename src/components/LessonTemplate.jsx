import { Link } from 'react-router-dom'
import { usePlaybook } from '../context/PlaybookContext'
import { getDayByLessonSlug } from '../data/curriculum'
import { CodeBlock, MetaRow, Callout } from './ui'
import Quiz from './Quiz'

function Bullets({ items }) {
  if (typeof items === 'string') return <p>{items}</p>
  return (
    <ul className="item-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

function Section({ title, children }) {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  )
}

export default function LessonTemplate({ lesson, quiz }) {
  const { isLessonComplete, markLessonComplete } = usePlaybook()
  const day = getDayByLessonSlug(lesson.slug)
  const done = isLessonComplete(lesson.slug)

  return (
    <div>
      <div className="badge-row">
        <Link to={day ? day.path : '/'} className="badge">
          ◀ Ngày {day?.day}
        </Link>
        <span className="badge">{lesson.module}</span>
        <span className="badge badge-tip">{done ? '✓ Đã hoàn thành' : 'Chưa hoàn thành'}</span>
      </div>

      <h1 className="page-title">{lesson.title}</h1>
      <p className="page-sub">{lesson.subtitle}</p>
      <MetaRow lesson={lesson} />

      <Section title="1. Mục tiêu học tập">
        <Bullets items={lesson.objectives} />
        <Callout type="assessment">🎯 {lesson.assessmentTip}</Callout>
      </Section>

      <Section title="2. Khái niệm là gì?">
        <Bullets items={lesson.whatIsIt} />
      </Section>

      <Section title="3. Vì sao quan trọng?">
        <Bullets items={lesson.whyImportant} />
      </Section>

      <Section title="4. Ý chính">
        <Bullets items={lesson.keyConcepts} />
      </Section>

      <Section title="5. Ví dụ Python">
        {!lesson.examples || lesson.examples.length === 0
          ? (<p>Bài học này không có ví dụ mã.</p>)
          : lesson.examples.map((ex, i) => (
              <div key={i}>
                <CodeBlock code={ex.code} note={ex.note} />
              </div>
            ))}
      </Section>

      <Section title="6. Câu hỏi thường gặp">
        <Bullets items={lesson.assessmentQs} />
      </Section>

      <Section title="7. Lỗi thường gặp">
        <Bullets items={lesson.mistakes} />
      </Section>

      <Section title="8. Tóm tắt nhanh">
        <Bullets items={lesson.summary} />
      </Section>

      <Section title="9. Kiểm tra nhanh">
        {quiz ? <Quiz quiz={quiz} source={lesson.slug} /> : <p>Không tìm thấy dữ liệu quiz.</p>}
      </Section>

      <Section title="10. Bảng công thức">
        <table className="cheat-table">
          <thead>
            <tr><th>Khái niệm</th><th>Ý chính</th></tr>
          </thead>
          <tbody>
            {lesson.cheatSheet.map((row, i) => (
              <tr key={i}>
                <td><strong>{row.term || row[0]}</strong></td>
                <td><code>{row.def || row[1]}</code></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      {!done ? (
        <button className="btn btn-success btn-block" onClick={() => markLessonComplete(lesson.slug)}>
          ✓ Đánh dấu hoàn thành bài học
        </button>
      ) : (
        <div className="callout" style={{ borderLeftColor: '#16a34a' }}>
          ✅ Đã hoàn thành bài học. Làm tốt lắm!
        </div>
      )}
    </div>
  )
}