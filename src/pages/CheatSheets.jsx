import { Link } from 'react-router-dom'
import { getAllLessons } from '../data/lessons'

export default function CheatSheets() {
  const lessons = getAllLessons().filter((l) => l.cheatSheet && l.cheatSheet.length > 0)

  return (
    <div>
      <h1 className="page-title">Tổng hợp công thức</h1>
      <p className="page-sub">
        Tất cả ý chính của mọi bài học gom về một chỗ. Xem lại những thứ này ngay trước kỳ
        đánh giá.
      </p>

      {lessons.length === 0 && <p>Bảng công thức đang được bổ sung cùng từng bài học.</p>}

      {lessons.map((lesson) => (
        <div key={lesson.slug} className="card">
          <h2>
            <Link to={`/lesson/${lesson.slug}`}>{lesson.title}</Link>
          </h2>
          <table className="cheat-table">
            <thead>
              <tr>
                <th>Khái niệm</th>
                <th>Ý chính</th>
              </tr>
            </thead>
            <tbody>
              {lesson.cheatSheet.map((row, i) => (
                <tr key={i}>
                  <td>
                    <strong>{row.term || row[0]}</strong>
                  </td>
                  <td>
                    <code>{row.def || row[1]}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}