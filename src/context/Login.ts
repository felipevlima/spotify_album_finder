import { createContext, useContext } from 'react';

export interface LoginType {
  token: string;
}

export interface LoginContextTypes {
  login: LoginType;
  setCurrentLogin: (currentLogin: any) => void;
}

const LOGIN_CONTEXT_DEFAULT_VALUE = {
  login: {} as LoginType,
  setCurrentLogin: () => {},
};

export const LoginContext = createContext<LoginContextTypes>(LOGIN_CONTEXT_DEFAULT_VALUE);

export const useLoginContext = () => useContext(LoginContext);
