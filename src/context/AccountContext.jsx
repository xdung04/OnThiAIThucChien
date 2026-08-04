import { createContext, useContext, useState, useCallback } from 'react'
import { ACCOUNTS } from '../data/accounts'

const AccountContext = createContext(null)
const ACTIVE_KEY = 'vinplay-active-user'

function loadActive() {
  try {
    const id = localStorage.getItem(ACTIVE_KEY)
    return ACCOUNTS.find((a) => a.id === id) || ACCOUNTS[0]
  } catch {
    return ACCOUNTS[0]
  }
}

export function AccountProvider({ children }) {
  const [activeUser, setActiveUserState] = useState(loadActive)

  const setActiveUser = useCallback((user) => {
    setActiveUserState(user)
    try {
      localStorage.setItem(ACTIVE_KEY, user.id)
    } catch {
      /* storage unavailable */
    }
  }, [])

  return (
    <AccountContext.Provider value={{ activeUser, setActiveUser, accounts: ACCOUNTS }}>
      {children}
    </AccountContext.Provider>
  )
}

export function useAccount() {
  const ctx = useContext(AccountContext)
  if (!ctx) throw new Error('useAccount must be used within AccountProvider')
  return ctx
}
