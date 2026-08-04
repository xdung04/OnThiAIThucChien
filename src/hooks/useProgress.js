import { useState, useCallback } from 'react'
import { DAYS } from '../data/curriculum'

function storageKey(userId) {
  return userId ? `vinplay-progress:${userId}` : 'vinplay-progress'
}

function loadProgress(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {}
  } catch {
    return {}
  }
}

export function useProgress(userId) {
  const key = storageKey(userId)
  const [progress, setProgress] = useState(() => loadProgress(key))

  const markLessonComplete = useCallback(
    (slug) => {
      setProgress((prev) => {
        const next = { ...prev, [slug]: true }
        localStorage.setItem(key, JSON.stringify(next))
        return next
      })
    },
    [key]
  )

  const markQuizComplete = useCallback(
    (quizId, score, total) => {
      setProgress((prev) => {
        const next = {
          ...prev,
          [`quiz:${quizId}`]: { score, total, date: Date.now() },
        }
        localStorage.setItem(key, JSON.stringify(next))
        return next
      })
    },
    [key]
  )

  const isLessonComplete = useCallback(
    (slug) => Boolean(progress[slug]),
    [progress]
  )

  const resetProgress = useCallback(() => {
    localStorage.removeItem(key)
    setProgress({})
  }, [key])

  // Total tracked units: lessons of day 1-6 + day7 tips lesson .
  const totalUnits = DAYS.reduce((acc, d) => acc + d.lessons.length, 0)
  const completedUnits = DAYS.reduce((acc, d) => {
    return (
      acc +
      d.lessons.filter((l) => l.slug && progress[l.slug]).length +
      (d.quizId && progress[`quiz:${d.quizId}`] ? 1 : 0)
    )
  }, 0)

  const percent = totalUnits ? Math.round((completedUnits / totalUnits) * 100) : 0

  // Today's lesson = first incomplete unit in day order.
  const todayLesson = (() => {
    for (const day of DAYS) {
      for (const lesson of day.lessons) {
        if (lesson.slug && !progress[lesson.slug]) {
          return { day: day.day, lesson, quizId: day.quizId, path: `/lesson/${lesson.slug}` }
        }
      }
    }
    return null
  })()

  const doneDays = DAYS.filter(
    (d) =>
      d.lessons.every((l) => !l.slug || progress[l.slug]) &&
      (!d.quizId || progress[`quiz:${d.quizId}`])
  ).map((d) => d.day)

  return {
    progress,
    percent,
    todayLesson,
    doneDays,
    isLessonComplete,
    markLessonComplete,
    markQuizComplete,
    resetProgress,
  }
}