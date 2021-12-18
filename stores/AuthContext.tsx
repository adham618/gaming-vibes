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
      console.log("ddd")
    })
    // init netlify identity connection
    netlifyIdentity.init()
  }, [])

  const login = () => {
    netlifyIdentity.open()
  }


  const context = { user, login }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider