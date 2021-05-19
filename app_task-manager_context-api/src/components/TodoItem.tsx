import Todo from "../models/types";
import classes from "./TodoItem.module.css";
interface TodoProps {
  todo: Todo;
  onDeleteTodo: () => void;
}

// Passing todo variable AND the onDeleteTodo function
// The parameter "event: React.MouseEvent" is optional
const TodoItem: React.FC<TodoProps> = ({ todo, onDeleteTodo }) => {
  return (
    <li
      className={classes.item}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      onClick={onDeleteTodo}
    >
      <span>{todo.text}</span>
      <button className="button">Delete</button>
    </li>
  );
};

export default TodoItem;
