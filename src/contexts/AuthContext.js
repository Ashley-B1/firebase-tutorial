import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase-config';
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [ loading, setLoading ] = useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => {
    return auth.signOut();
  }

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  }

  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  }

  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      // we won't render until our user is set for the first time
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
