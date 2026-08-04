// Quiz registry — auto-discovers all quiz files in ./quizzes/
const modules = import.meta.glob('./quizzes/*.js', { eager: true })

export function getQuiz(id) {
  for (const mod of Object.values(modules)) {
    if (mod.default.id === id) return mod.default
  }
  return null
}

export function getAllQuizzes() {
  return Object.values(modules).map((mod) => mod.default)
}