import { createContext, ReactNode, useState } from "react";

interface UserInfoInterface {
  sub: string;
  name: string;
  email: string;
  iat: number;
}

interface UserContextInterface {
  userInfo: UserInfoInterface | null;
  getUserInfo: (token: string) => void;
}

export const userContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState(null);

  const value = {
    userInfo,
    getUserInfo: (token: string) => {},
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
