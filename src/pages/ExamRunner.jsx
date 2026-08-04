import { useParams, Link } from 'react-router-dom'
import { getExam } from '../data/exams'
import Exam from '../components/Exam'

export default function ExamRunner() {
  const { id } = useParams()
  const exam = getExam(id)

  if (!exam) {
    return (
      <div className="card">
        <h1>Không tìm thấy đề thi</h1>
        <p>
          Xem các đề có sẵn tại trang <Link to="/mock-exams">Đề thi thử</Link>.
        </p>
      </div>
    )
  }

  return <Exam key={exam.id} exam={exam} />
}