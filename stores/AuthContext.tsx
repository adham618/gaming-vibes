import { createContext } from "react";

type AuthContext<Context> = {
  user: null,
  login: () => void,
  logout: () => void,
  authReady: boolean,
}

export const AuthContext = createContext({
  user: null,
  login: () => { },
  logout: () => { },
  authReady: false
})

const AuthContextProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider value={AuthContext}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider