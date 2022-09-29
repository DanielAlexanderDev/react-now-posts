import { createContext, ReactNode, useState } from "react";

interface AuthContextInterface {
  isAuth: boolean;
  activateAuth: (token: string) => void;
  removeAuth: () => void;
}

interface ContextProps {
  children: ReactNode;
}

export const authContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const Provider = ({ children }: ContextProps) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("sess_id_token_notes") ? true : false;
  });

  const value = {
    isAuth,
    activateAuth: (token: string) => {
      setIsAuth(true);
      window.sessionStorage.setItem("sess_id_token_notes", token);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem("sess_id_token_notes");
    },
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
