// React.FC is already a generic type
// So {} enable to add an additional generic type
// to the already existing generic type (=merging both generic types)

import Todo from "../models/types";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

interface TodoProps {
  items: Todo[];
  onDeleteTodo: (todoId: number) => void
}
const Todos: React.FC<TodoProps> = ({items, onDeleteTodo}) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        
        <TodoItem key={item.id} todo={item} onDeleteTodo={onDeleteTodo.bind(null, item.id)} /> 
    ))}
    </ul>
  );
};

export default Todos;
