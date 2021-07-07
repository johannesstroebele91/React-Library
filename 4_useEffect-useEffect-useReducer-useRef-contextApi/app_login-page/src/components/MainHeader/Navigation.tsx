import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const Navigation = (props: any) => {
  // 1. Declare variable with useContext() using the AuthContext
  const context = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {/* 2. Use the parameters via context. */}
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
