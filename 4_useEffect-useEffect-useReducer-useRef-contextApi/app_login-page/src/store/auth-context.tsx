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

  // !!! useEffect to persit data through reloads and app restarts in 3 steps

  // 2. Declare useEffect for persiting data
  useEffect(
    () => {
      // 2.1. Side-effect function: Work with the previously declared item of the localStorage
      const storedUserLoggedInData = localStorage.getItem("isLoggedIn");
      if (storedUserLoggedInData === "1") {
        setIsLoggedIn(true);
      }
    }, // 2.2. Dependency array: controls when the function is executed
    []
  );

  const loginHandler = (email: string, password: string) => {
    // TODO functionality for checking email and password
    // 1. Create a key value pair in the local storage
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // 3. Remove key afterwards from local storage
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

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
