import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

// Only the App.tsx gets changed in an React app
function App() {
  return (
    <div style={{ width: "40rem", margin: '0 auto' }}>
      <h1>Todo App</h1>
      {/* IMPORTANT: need to wrap that use the context with the TodosContextProvider */}
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}
export default App;
