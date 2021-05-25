// some import name needs to be declard to use a module.css file
import classes from "./AddUser.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

const AddUser: React.FC = () => {
  const addUserHandler = (event: any) => {
    // Call preventDefault() to prevent page reload (automatic HTTP request)
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      {/* The module.css can be accessed using classes.input */}
      <form onSubmit={addUserHandler}>
        {/* htmlFor connects label to the input id*/}
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
