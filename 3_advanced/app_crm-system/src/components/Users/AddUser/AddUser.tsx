// some import name needs to be declard to use a module.css file
import classes from "./AddUser.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
// 1) Import useRef
import { useState, useRef } from "react";
import ErrorModal from "../../UI/Modal/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";

interface AdduserProps {
  onAddUser: (username: string, age: number) => void;
}

const AddUser: React.FC<AdduserProps> = ({ onAddUser }) => {
  // !!! useRef in 6 steps

  // 2) Declare useRef()
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  // useState
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorModal, setErrorModal] = useState<{
    title: string;
    message: string;
  }>({ title: "", message: "" });

  const addUserHandler = (event: any) => {
    // Call preventDefault() to prevent page reload (automatic HTTP request)
    event.preventDefault();

    // 4) Reading data from the input
    const enteredUsername = usernameInputRef.current?.value;
    const enteredAge = ageInputRef.current?.value;

    // 5) Use value
    if (enteredUsername !== undefined || enteredAge !== undefined) {
      // Check for refs not being undefined
      if (
        enteredUsername!.trim().length === 0 ||
        enteredAge!.trim().length === 0
      ) {
        setErrorModal({
          title: "Invalid input",
          message: "No username was entered",
        });
        setShowErrorModal(true);
        return;
      }
      if (+enteredAge! < 1) {
        setErrorModal({
          title: "Invalid age",
          message: "The age of the user is invalid",
        });
        setShowErrorModal(true);
        return;
      }
      // Pass new user to the parent (cast age to number)
      onAddUser(enteredUsername!, +enteredAge!);

      // 6) WARNING: Reset the value directly in the DOM
      // Such operations should normally be only done by React
      // THEREFORE this is an edge case
      usernameInputRef.current!.value = "";
      ageInputRef.current!.value = "";
    }
  };

  const closeModalHandler = () => {
    setShowErrorModal(false);
    if (errorModal.message === "The age of the user is invalid") {
      ageInputRef.current!.value = "";
    }
  };

  return (
    <Wrapper>
      {showErrorModal && (
        <ErrorModal
          onCloseModal={closeModalHandler}
          title={errorModal.title}
          message={errorModal.message}
        />
      )}
      <Card className={classes.input}>
        {/* The module.css can be accessed using classes.input */}
        <form onSubmit={addUserHandler}>
          {/* htmlFor connects label to the input id*/}
          <label htmlFor="username">Username</label>
          {/* 3) Use ref to connect the TS to the HTML element */}
          <input id="username" type="text" ref={usernameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
