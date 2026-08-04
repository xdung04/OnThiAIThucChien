// Lesson registry — auto-discovers all lesson files in ./lessons/
const modules = import.meta.glob('./lessons/*.js', { eager: true })

export function getLesson(slug) {
  for (const mod of Object.values(modules)) {
    if (mod.default.slug === slug) return mod.default
  }
  return null
}

export function getAllLessons() {
  return Object.values(modules).map((mod) => mod.default)
}