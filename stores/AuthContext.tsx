import { createContext, useEffect, useState } from "react";
import netlifyIdentity from 'netlify-identity-widget'

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
  const [user, setUser] = useState(null)

  useEffect(() => {
    // init netlify identity connection
    netlifyIdentity.init()
  }, [])

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider