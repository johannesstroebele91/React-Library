// some import name needs to be declard to use a module.css file
import classes from "./AddUser.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import { useState } from "react";

interface AdduserProps {
  onAddUser: (username: string, age: number) => void;
}

const AddUser: React.FC<AdduserProps> = ({ onAddUser }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event: any) => {
    // Call preventDefault() to prevent page reload (automatic HTTP request)
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    // Pass new user to the parent (cast age to number)
    onAddUser(enteredUsername, +enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card className={classes.input}>
      {/* The module.css can be accessed using classes.input */}
      <form onSubmit={addUserHandler}>
        {/* htmlFor connects label to the input id*/}
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={(event: any) => setEnteredUsername(event.target.value)}
          value={enteredUsername}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={(event: any) => setEnteredAge(event.target.value)}
          value={enteredAge}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
