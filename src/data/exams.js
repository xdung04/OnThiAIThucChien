// Exam registry — auto-discovers all exam files in ./exams/
const modules = import.meta.glob('./exams/*.js', { eager: true })

export function getExam(id) {
  for (const mod of Object.values(modules)) {
    if (mod.default.id === id) return mod.default
  }
  return null
}

export function getAllExams() {
  return Object.values(modules).map((mod) => mod.default)
}