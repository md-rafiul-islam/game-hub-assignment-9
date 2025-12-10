import React, { createContext } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const AuthProvider = ({ children }) => {
  const userInfo = {
    signUp,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
