// React.FC is already a generic type
// So {} enable to add an additional generic type
// to the already existing generic type (=merging both generic types)
import Todo from "../models/types";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </>
  );
};

export default Todos;
