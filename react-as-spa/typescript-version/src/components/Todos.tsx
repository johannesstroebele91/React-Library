// React.FC is already a generic type
// So {} enable to add an additional generic type
// to the already existing generic type (=merging both generic types)

import Todo from "../models/types";
import TodoItem from "./Todo/TodoItem";

interface TodoProps {
  items: Todo[];
}
const Todos: React.FC<TodoProps> = ({items}) => {
  return (
    <>
      {items.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </>
  );
};

export default Todos;
