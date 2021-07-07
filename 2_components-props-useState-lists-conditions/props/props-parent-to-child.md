- [1. Basics](#1-basics)
- [2. STANDARD EXAMPLE WITH TS](#2-standard-example-with-ts)
  - [2.1. Parent component](#21-parent-component)
  - [2.2. Child component](#22-child-component)
- [3. Destructuring props](#3-destructuring-props)
  - [3.1. Standard case with destructuring](#31-standard-case-with-destructuring)
  - [3.2. Other case without destructuring](#32-other-case-without-destructuring)
- [4. Outsourcing props](#4-outsourcing-props)
- [5. Automatically adding all props to a HTML element](#5-automatically-adding-all-props-to-a-html-element)

# 1. Basics

Data can be passed from the parent component

- to the child component
- via props and an interface for TS

A generic types in functional components can be used

- to explicitly add additional data to be passed
- which are then combined with the props object
- e.g. `const Todos = (props) => {}`

# 2. STANDARD EXAMPLE WITH TS

Data can be passed from a parent to a child component as follows

**See the following Git Commit [113ce035f92da3a1d32429b12b5253d0df407707](https://github.com/johannesstroebele91/React-Library/commit/113ce035f92da3a1d32429b12b5253d0df407707)**

## 2.1. Parent component

```javascript
// 1. Delcaring data for passing it to a child component
interface ExpensesProps {
  expenses: Expense[];
}

const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {
  return (
    <>
      {/* 2. Passing data to a child component */}
      {/* 2.1. Via an object */}
      <ExpenseItem expenses={expenses}></ExpenseItem>
      {/* 2.2. Via variables */}
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
    </>
  );
};
```

## 2.2. Child component

The variables received from the parent component

- can be used in the child component
- using 2 steps

```javascript
// 1. Props interface for TS
// 1.1. For an object
interface ExpenseItemProps {
  expenses: Expense;
}

// 1.2. For variables
interface ExpenseItemProps {
  title: string;
  amount: number;
  date: Date;
}
const ExpenseItem: React.FC<ExpenseItemProps> = ({ expenses }) => {
  // 2. Displays the variables
  // 2.1. of the object
  return (
    <Card>
      <h2>{expenses.title}</h2> // 2.2. alt: {title}
      <div>${expenses.price}</div> // 2.2. alt: {price}
      <div>${expenses.amount}</div> // 2.2. alt: {amount}
    </Card>
  );
};
```

# 3. Destructuring props

## 3.1. Standard case with destructuring

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

Todos.tsx

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

## 3.2. Other case without destructuring

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

# 4. Outsourcing props

Props can be outsourced to a types.ts file

```javascript
// types.ts
interface TodoProps {
  id: string;
  text: string;
}
/* Alternative Type
type Todo = {
  id: string;
  text: string;
} */
export default TodoProps;
```

# 5. Automatically adding all props to a HTML element

All props can be added automatically

- to an HTML element of a child component
- via props from the parent component

Parent component: MealItemsForm.tsx

```javascript
...
return <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
...
```

Child component: Input:tsx

```javascript
interface InputProps {
  input: any;
  label: string;
}
const Input: React.FC<InputProps> = ({ label, input, ...props }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};
```
