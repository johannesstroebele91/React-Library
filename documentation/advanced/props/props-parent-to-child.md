- [1) Basics = pass state data via props](#1-basics--pass-state-data-via-props)
- [2) Examples](#2-examples)
  - [2.1) Example with objects](#21-example-with-objects)
  - [2.2) Example without objects](#22-example-without-objects)
# 1) Basics = pass state data via props

- (`const Todos: React.FC<> = (props) => {}`
- Using a generic types in functional components
- to explicitly add additional data to be passed
- which are then combined with the props object

# 2) Examples

**See the following [Project](../../react-as-spa-ts/props-../../react-as-spa-ts/props-version/src/App.tsx)**

## 2.1) Example with objects

**This is the recommended approach**

Types

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
```

App.tsx

```javascript
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
```

a) Todos.tsx with destructuring (recommended)

- Destructions is happening like `{ items, onDeleteTodo }`
- AND NOT LIKE { items}, {onDeleteTodo }

```javascript
interface TodoProps {
  items: Todo;
}

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

b) Todos.tsx with destructuring (also possible, but not the standard)

```javascript
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

## 2.2) Example without objects

**This is a outdated approach**

App.tsx

```javascript
<>
  <h1>Todo App</h1>
  <Todos items={["Learn TypeScript", "Learn React"]} />
</>
```

Todos.tsx

```javascript
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
