import { createContext, useContext, useState, ReactNode } from 'react'

type UserInfo = {
  id: string
  username: string
  email: string
  isAdmin: boolean
}

type UserContextType = {
  userInfo: UserInfo | null
  setUserInfo: (user: UserInfo | null) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  return <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>
}

export const useUser = (): UserContextType => {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUser must be used within UserProvider')
  return context
}
