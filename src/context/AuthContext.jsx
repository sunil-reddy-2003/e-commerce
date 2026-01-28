import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [redirectAfterLogin, setRedirectAfterLogin] = useState(null);


  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn ,redirectAfterLogin, setRedirectAfterLogin}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
