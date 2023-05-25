import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { PublicUserInterface } from '@/types/types'

interface UserContextInterface {
  userInfo: PublicUserInterface
  setUser: (data: PublicUserInterface) => void
}

export const userContext = createContext<UserContextInterface>(
  {} as UserContextInterface
)

interface Props {
  children: ReactNode
}
export const useUserInfo = () => {
  const context = useContext(userContext)
  return context
}

export const UserProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState<PublicUserInterface>({
    _id: '',
    email: '',
    lastName: '',
    name: '',
    createdAt: '',
  })

  const getUserInfo = () => {
    try {
      const localUserInfo = window.localStorage.getItem('user_info')
      if (!localUserInfo) return null
      setUserInfo(JSON.parse(localUserInfo))
    } catch (error) {
      console.log(error)
    }
  }
  const setUser = (data: PublicUserInterface) => {
    window.localStorage.setItem('user_info', JSON.stringify(data))
  }
  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <userContext.Provider value={{ userInfo, setUser }}>
      {children}
    </userContext.Provider>
  )
}
