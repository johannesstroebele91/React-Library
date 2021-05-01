// React.FC is already a generic type
// So {} enable to add an additional generic type
// to the already existing generic type (=merging both generic types)

import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosContext.items.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          onDeleteTodo={todosContext.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
