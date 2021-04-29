import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/types";

// Only the App.tsx gets changed in an React app
function App() {
  const todos: Todo[] = [
    { id: new Date().toISOString(), text: "Learn React" },
    { id: new Date().toISOString(), text: "Learn TypeScript" },
  ];
  return (
    <>
      <h1>Todo App</h1>
      <Todos items={todos} />
    </>
  );
}

export default App;
