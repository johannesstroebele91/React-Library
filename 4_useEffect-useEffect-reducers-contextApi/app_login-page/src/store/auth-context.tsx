import React, { useState, useEffect } from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
  onLogout: () => void;
  onLogin: (email: string, password: string) => void;
}
const AuthContext = React.createContext<AuthContextProps>({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(true);
  };

  useEffect(
    () => {
      // 2.1) Side-effect function: Work with the previously declared item of the localStorage
      const storedUserLoggedInData = localStorage.getItem("isLoggedIn");
      if (storedUserLoggedInData === "1") {
        setIsLoggedIn(true);
      }
    }, // 2.2) Dependency array: controls when the function is executed
    []
  );

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
