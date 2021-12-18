import { createContext, useEffect, useState } from "react";
import netlifyIdentity from 'netlify-identity-widget'

export const AuthContext = createContext({
  user: null,
  login: () => { },
  logout: () => { },
  authReady: false
})

// export const AuthContext = createContext({
//   user: null,
//   login: () => { },
//   logout: () => { },
//   authReady: false
// })

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<string | null | undefined | number>(null)

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


  const context = { user, login, logout }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider