import { User } from '@/types/randomUser'
import { useCallback, useEffect, useState } from 'react'

const LOCAL_KEY = 'user'

const useUser = () => {
  const [user, setUser] = useState<User | null>(null)

  // read user from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY)
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch {
        localStorage.removeItem(LOCAL_KEY)
      }
    }
  }, [])

  const saveUser = useCallback((data: User) => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data))
    setUser(data)
  }, [])

  const clearUser = useCallback(() => {
    localStorage.removeItem(LOCAL_KEY)
    setUser(null)
  }, [])

  return { user, setUser: saveUser, clearUser }
}

export default useUser
