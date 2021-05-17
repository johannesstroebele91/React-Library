- [1) Basics = pass state data via props](#1-basics--pass-state-data-via-props)
- [2) STANDARD EXAMPLE WITH TS](#2-standard-example-with-ts)
- [3) Destructuring props](#3-destructuring-props)
  - [3.1) Standard case with destructuring](#31-standard-case-with-destructuring)
  - [3.2) Other case without destructuring](#32-other-case-without-destructuring)
- [4) Outsourcing props](#4-outsourcing-props)

# 1) Basics = pass state data via props

- (`const Todos: React.FC<> = (props) => {}`
- Using a generic types in functional components
- to explicitly add additional data to be passed
- which are then combined with the props object

# 2) STANDARD EXAMPLE WITH TS

**See the following [Project](../../react-as-spa-ts/props-../../react-as-spa-ts/props-version/src/App.tsx)**

Passing props in TS can be achieved in 4 steps

For TS a props interface is needed (e.g. ExpenseItemProps)

```javascript
interface ExpenseItemProps {
  title: string;
  amount: number;
  date: Date;
}
const ExpenseItem: React.FC<ExpenseItemProps> = ({ title, amount, date }) => {
  // !!! STEP 1-4: CREATE A NEW STATE OF VARIABLES TRIGGERED BY AN INPUT

  // 1) Declare useState
  const [amountExpenseItem, setAmount] = useState(amount);

  // 3) Creates a new state state
  const clickHandler = () => {
    setAmount(amountExpenseItem + 1);

    // WARNING! value doesn't create a new state right away for the next line
    // BUT only after the next re-render
    console.log(amountExpenseItem);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* 4) Use to display the variable */}
        <div className="expense-item__price">${amountExpenseItem}</div>
      </div>
      {/* 2) Trigger the change of state */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
```

# 3) Destructuring props

## 3.1) Standard case with destructuring

Objects can be destructured for easier access

- of one variable (e.g. `({title})`
- or multiples variables `({ title, amount, date })`)

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

## 3.2) Other case without destructuring

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

# 4) Outsourcing props

Props can be outsourced to a types.ts file

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
