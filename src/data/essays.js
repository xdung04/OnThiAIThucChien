// Essay review registry — auto-discovers all essay files in ./essays/
// Mỗi file phải export default { id, label, order, desc, questions: [...] }.
const modules = import.meta.glob('./essays/*.js', { eager: true })

export function getAllEssaySections() {
  return Object.values(modules)
    .map((m) => m.default)
    .sort((a, b) => a.order - b.order)
    .map((m) => ({ id: m.id, label: m.label, desc: m.desc, questions: m.questions }))
}

export function getEssaySection(id) {
  return getAllEssaySections().find((s) => s.id === id) || null
}