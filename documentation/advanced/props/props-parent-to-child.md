# 1) Basics
- (`const Todos: React.FC<> = (props) => {}`
- Using a generic types in functional components
- to explicitly add additional data to be passed
- which are then combined with the props object

# 2) Examples

**See the following [Project](../../react-as-spa-ts/props-../../react-as-spa-ts/props-version/src/App.tsx)**

## 2.1) Example: With objects and a interface with props destructuring
**This is the recommended approach**
```javascript
// types.ts
interface Todo {
  id: string;
  text: string;

}
/* Alternative Type
type Todo = {
  id: string;
  text: string;

} */
export default Todo;

// App.tsx
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

// Todos.tsx
interface TodoProps {
  items: Todo;
}

// Destructions is happening like "{ items, onDeleteTodo }"
// AND NOT LIKE { items}, {onDeleteTodo }
const Todos: React.FC<TodoProps> = ({ items, onDeleteTodo }) => {
  return (
    <>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
      <button onClick="onDeleteTodo()">Add</button>
    </>
  );
};
export default Todos;
```

## 2.2) Example: with objects and a class without props destructuring
**This is a good approach**
```javascript
// types.ts
class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;

// App.tsx
function App() {
  const todos = [ new Todo('Learn React'), new Todo('Learn TypeScript')]
  return (
    <>
      <h1>Todo App</h1>
      <Todos items={todos} />
    </>
  );
}
export default App;

// Todos.tsx
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
```

## 2.3) Example: without objects
**This is a outdated approach**
```javascript
// App.tsx
    <>
      <h1>Todo App</h1>
      <Todos items={["Learn TypeScript", "Learn React"]} />
    </>

// Todos.tsx

export default const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
};

```