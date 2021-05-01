import Todo from "../models/types";
import classes from "./TodoItem.module.css";

interface TodoProps {
  todo: Todo;
}
const TodoItem: React.FC<TodoProps> = ({ todo }) => {
  return <li className={classes.item}>{todo.text}</li>;
};

export default TodoItem;
