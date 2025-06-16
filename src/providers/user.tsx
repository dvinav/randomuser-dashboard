import { createContext, useState, ReactNode } from 'react'

type UserInfo = {
  id: string
  username: string
  email: string
  isAdmin: boolean
}

export type UserContextType = {
  userInfo: UserInfo | null
  setUserInfo: (user: UserInfo | null) => void
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  return <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>
}
