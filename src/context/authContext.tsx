import { createContext, ReactNode, useState } from 'react'

interface AuthContextInterface {
  userIsAuth: boolean
  activateAuth: (token: string) => void
  removeAuth: () => void
}

interface ContextProps {
  children: ReactNode
}

export const authContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
)

export const Provider = ({ children }: ContextProps) => {
  const [isAuth, setIsAuth] = useState(
    () => window.sessionStorage.getItem('sess_id_token_notes') !== null
  )

  const value = {
    userIsAuth: isAuth,
    activateAuth: (token: string) => {
      setIsAuth(true)
      window.sessionStorage.setItem('sess_id_token_notes', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('sess_id_token_notes')
      window.localStorage.removeItem('user_info')
    },
  }
  return <authContext.Provider value={value}>{children}</authContext.Provider>
}
