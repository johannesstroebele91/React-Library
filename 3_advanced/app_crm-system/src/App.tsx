import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";
import User from "./models/types";

// Only the App.tsx gets changed in an React app
function App() {
  const INITIAL_USERS: User[] = [
    { id: 1, username: "Max", age: 32 },
    { id: 2, username: "Lena", age: 53 },
  ];

  // Initialize with an array of empty states e.g. useState([])
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);

  const newUserHandler = (username: string, age: number) => {
    setUsers((prevState) => [
      ...prevState,
      { id: Math.floor(Math.random() * 100 + 1), username: username, age: age },
    ]);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>CRM System</h1>
      <AddUser onAddUser={newUserHandler} />
      <UsersList users={users} />
    </>
  );
}

export default App;
