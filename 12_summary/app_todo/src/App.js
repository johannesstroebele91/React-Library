import { useState } from "react";
import Todo from "./components/Todo";
let DUMMYTODOS = [
  { title: "learn react", text: "learn" },
  { title: "master react", text: "master" },
  { title: "explore react", text: "explore" },
];

function App() {
  const [todos, setTodos] = useState(DUMMYTODOS);
  const deleteTodo = (index) => {
    setTodos(todos.splice(index, 1));
    console.log(todos);
  };
  return (
    <>
      <h1>My Todos</h1>
      {todos.map((todo, index) => (
        <Todo
          key={todo.title}
          title={todo.title}
          text={todo.text}
          index={index}
          onDeleteTodo={deleteTodo}
        />
      ))}
    </>
  );
}

export default App;
