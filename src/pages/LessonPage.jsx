import { useParams, Link } from 'react-router-dom'
import { getLesson } from '../data/lessons'
import { getQuiz } from '../data/quizzes'
import LessonTemplate from '../components/LessonTemplate'

export default function LessonPage() {
  const { slug } = useParams()
  const lesson = getLesson(slug)

  if (!lesson) {
    return (
      <div className="card">
        <h1>Không tìm thấy bài học</h1>
        <p>
          Quay lại <Link to="/">trang chủ</Link> hoặc xem{' '}
          <Link to="/day/1">kế hoạch 7 ngày</Link>.
        </p>
      </div>
    )
  }

  const quiz = lesson.quizId ? getQuiz(lesson.quizId) : null

  return <LessonTemplate lesson={lesson} quiz={quiz} />
}