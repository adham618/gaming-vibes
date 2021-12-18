import { createContext, useEffect, useState } from "react";
import netlifyIdentity from 'netlify-identity-widget'
type AuthContext =
  {
    user: null,
    login: () => void,
    logout: () => void,
    authReady: boolean
  }
export const AuthContext = createContext({
  user: null,
  login: () => { },
  logout: () => { },
  authReady: false
})

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<string | null | undefined | number>(null)
  const [authReady, setAuthReady] = useState<boolean>(false)

  useEffect(() => {

    netlifyIdentity.on('login', (user: any) => {
      setUser(user)
      netlifyIdentity.close()
      console.log("login")
    })

    netlifyIdentity.on('logout', () => {
      setUser(null)
      console.log("logout")
    })
    // authReady
    netlifyIdentity.on('init', (user: any) => {
      setUser(user)
      setAuthReady(true)
      console.log("init")
    })
    // init netlify identity connection
    netlifyIdentity.init()

    return () => {
      netlifyIdentity.off('login')
      netlifyIdentity.off('logout')
    }
  }, [])

  const login = () => {
    netlifyIdentity.open()
  }
  const logout = () => {
    netlifyIdentity.logout()
  }


  const context = { user, login, logout, authReady }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider