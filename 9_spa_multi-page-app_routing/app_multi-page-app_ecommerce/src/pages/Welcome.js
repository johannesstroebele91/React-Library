import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Route path="/welcome/new-user">
        <p>Welcome new user</p>
      </Route>
    </>
  );
};

export default Welcome;
