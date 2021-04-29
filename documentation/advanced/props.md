# 1) Basics

- **Goal** is to make components reusable
- **Props** are input / parameters that the component can accept
  - e.g. "Hello" Button
  - e.g. "Goodbye" Button
- Should be treated as an immutable object
  - NEVER overwrite the props value!
  - because it should come from the caller
- Enables to pass data to a custom data
  - by adding a props (properties or attributes)
- Inside of the component
  - you can get access these props
  - and use them

# 2) Props in TypeScript

## 2.1) Problems

- Data passed to a child via props
- not only includes the passed data
- but the other information (e.g. children)
- which would be cubersom to define one by one
- every time props are passed

```javascript
function Todos(props: any) {
  return (
    <ul>
      {}
      <li>Learn React</li>
      <li>Learn TypeScript</li>
    </ul>
  );
}
export default Todos;
```

## 2.2) Solution

- (`const Todos: React.FC<> = (props) => {}`
- Using a generic types in functional components
- to explicitly add additional data to be passed
- which are then combined with the props object

### 2.3) Example: with objects and a type
**This is the recommended approach**
```javascript
// types.ts
type Todo = {
  id: string;
  text: string;

}
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

### 2.4) Example: with objects and a class
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

### 2.5) Example: without objects
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