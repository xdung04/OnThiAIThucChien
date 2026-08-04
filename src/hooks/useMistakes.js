import { useState, useCallback } from 'react'

function storageKey(userId) {
  return userId ? `vinplay-mistakes:${userId}` : 'vinplay-mistakes'
}

function loadMistakes(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || []
  } catch {
    return []
  }
}

export function useMistakes(userId) {
  const key = storageKey(userId)
  const [mistakes, setMistakes] = useState(() => loadMistakes(key))

  // Thêm lỗi, loại bỏ trùng theo source + id câu hỏi.
  const addMistake = useCallback(
    (mistake) => {
      setMistakes((prev) => {
        const dupKey = `${mistake.source}:${mistake.qid}`
        const next = prev.filter((m) => `${m.source}:${m.qid}` !== dupKey)
        next.push({ ...mistake, date: Date.now() })
        localStorage.setItem(key, JSON.stringify(next))
        return next
      })
    },
    [key]
  )

  const clearMistakes = useCallback(() => {
    localStorage.removeItem(key)
    setMistakes([])
  }, [key])

  return { mistakes, addMistake, clearMistakes }
}