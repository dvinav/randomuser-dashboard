import { UserContext, UserContextType } from '@/providers/user'
import { useContext } from 'react'

const useUser = (): UserContextType => {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUser must be used within UserProvider')
  return context
}

export default useUser
