/* eslint-disable react/prop-types */
import { createContext } from 'react'

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const auth=true
    const name='avinash'
  return (
    <AuthContext.Provider value={[auth,name]}>
        {children}
      
    </AuthContext.Provider>
  )
}

export default AuthProvider
