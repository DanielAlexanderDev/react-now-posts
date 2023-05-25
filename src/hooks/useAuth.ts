import { authContext } from '@/context/authContext'
import { useContext } from 'react'

export const useAuth = () => {
  const context = useContext(authContext)
  return context
}
