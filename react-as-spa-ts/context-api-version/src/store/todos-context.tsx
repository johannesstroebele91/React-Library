import React, { useState } from "react";
import Todo from "../models/types";

interface TodosContextObj {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: number) => {},
});

const TodosContextProvider: React.FC = (props) => {
  // useState()
  // Don't get back only todos but the state updating function "setTodos"
  // By destructuring an array

  // The kind of data managed by the useState can be specified
  // by using generic types "useState<Todo>([])"
  const [todos, setTodos] = useState<Todo[]>([]);

  // ADD TODO
  // Handels the function given back from "NewTodo.tsx"
  // The data received can then be used to change dynamically change the todos
  const addTodoHandler = (todoText: string) => {
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 20),
      text: todoText,
    };

    // Update the state from the previous state
    // Add newTodo to the existing array of todos
    // by concating the newTodo to the prevTodos
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  // DELETE TODO
  // Get the Id of the todo that needs to be deleted
  // and pass only the Todos that do not have this ID
  const deleteTodoHandler = (todoId: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
