import { createContext, useContext } from 'react'
import { useProgress } from '../hooks/useProgress'
import { useMistakes } from '../hooks/useMistakes'
import { useAccount } from './AccountContext'

const PlaybookContext = createContext(null)

export function PlaybookProvider({ children }) {
  const { activeUser } = useAccount()
  // Key theo activeUser.id để toàn bộ state progress/mistakes được tải lại
  // khi chuyển tài khoản — mỗi người có số liệu riêng.
  return (
    <PlaybookInner key={activeUser.id} activeUserId={activeUser.id}>
      {children}
    </PlaybookInner>
  )
}

function PlaybookInner({ activeUserId, children }) {
  const progress = useProgress(activeUserId)
  const mistakes = useMistakes(activeUserId)
  return (
    <PlaybookContext.Provider value={{ ...progress, ...mistakes, activeUserId }}>
      {children}
    </PlaybookContext.Provider>
  )
}

export function usePlaybook() {
  const ctx = useContext(PlaybookContext)
  if (!ctx) throw new Error('usePlaybook must be used within PlaybookProvider')
  return ctx
}
