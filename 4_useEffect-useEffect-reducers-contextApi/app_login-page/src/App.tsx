import { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

// Only the App.tsx gets changed in an React app
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // !!! useEffect to persit data through reloads and app restarts in 4 steps

  // 2) Declare useEffect for persiting data
  useEffect(() => {
    // 3) Work with the previously declared item of the localStorage
    const storedUserLoggedInData = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInData === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email: string, password: string) => {
    // TODO functionality for checking email and password
    // 1) Create a key value pair in the local storage
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // 4) Remove key afterwards from local storage
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
  );
}

export default App;
