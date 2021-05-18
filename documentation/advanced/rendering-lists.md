- [1) Rendering a small or specific number of array elements](#1-rendering-a-small-or-specific-number-of-array-elements)
  - [1.1) Parent component](#11-parent-component)
  - [1.2) Child component](#12-child-component)
- [2) Rendering a large or unspecific number of array elements](#2-rendering-a-large-or-unspecific-number-of-array-elements)
  - [2.1) Parent component](#21-parent-component)
  - [2.2) Child component](#22-child-component)

# 1) Rendering a small or specific number of array elements

## 1.1) Parent component

Array of objects

```javascript
const expenses: Expenses[] = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
```

Injecting data per array into an component dynamically

```javascript
const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {
  return (
    <>
      {/* 2) Passing data to a child component */}
      {/* 2.1) Via an object: BEST FOR TYPESCRIPT DUE TO PROPS INTERFACE NEEDED!!! */}
      <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      {/* 2.2) Via variables: BEST FOR JAVASCRIPT DUE TO NOT PROPS INTERFACE!!! */}
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </>
  );
};
```

## 1.2) Child component

Using data from the parent in the child components

```javascript

// 1) Interface for receiving data via props in TS
interface ExpenseItemProps {
  expense: Expense;
    /* Alt:
  title: string;
  amount: number;
  price: amount;
  */
}

// 2) Generic types are used to use the interface for the props on the component
// 3) Obj destructuring enables to easily access variables from the props (e.g. ({title}))
const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense /* Alt: via variables: title, amount, date */ }) => {
      return (
        <h2>{expense.title}</h2> // Alt: {title}
        <div>{expense.amount}</div> // Alt: {amount}
        <div>{expense.price}</div> // Alt: {price}
  );
};
```

# 2) Rendering a large or unspecific number of array elements

## 2.1) Parent component

Array of objects

```javascript
const expenses: Expenses[] = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
```

Injecting data per array into an component dynamically

```javascript
const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {
  return (
    <>
      {/* 2) Passing data to a child component */}
      {/* 2.1) Via an object */}
      {expenses.map(expense => <ExpenseItem expense={expense} />}
      {/* 2.2) Via variables */}
      {expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} price={expense.price}/>}
    </>
  );
};
```

## 2.2) Child component

The same as for [1.2 child component](./rendering-lists.md)
