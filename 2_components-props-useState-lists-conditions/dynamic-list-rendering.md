- [1) Basics](#1-basics)
- [2) Keys](#2-keys)
- [3) Example Data: array of objects](#3-example-data-array-of-objects)
- [4) Rendering a small or specific number of array elements](#4-rendering-a-small-or-specific-number-of-array-elements)
  - [4.1) Parent component](#41-parent-component)
  - [4.2) Child component](#42-child-component)
- [5) Rendering a large or unspecific number of array elements](#5-rendering-a-large-or-unspecific-number-of-array-elements)
  - [5.1) Parent component](#51-parent-component)
  - [5.2) Child component](#52-child-component)
- [6) Rendering filtered items](#6-rendering-filtered-items)
  - [6.1) Alongside the map function](#61-alongside-the-map-function)
  - [6.2) Separate from the map function](#62-separate-from-the-map-function)

# 1) Basics

Dynamic lists in React can be created from arrays using

- the `map()` function
- e.g. `someArray.map((element) => { <CustomComponent passedValue={element} />} )`

# 2) Keys

Is required for React to correctly

- identify and update (if needed) the list elements
- AND needs to be unique (e.g. id)

It enables to

- avoid bugs with the state (most importantly!!!)
- and unnecessary performance issues (needs to render twice to check the order)
- e.g. `someArray.map((element) => { <CustomComponent key={element.id} passedValue={element} />} )`

If no unique values are present

- the second argument `index` of the map((item, index) => {...}` function can be used
- e.g. map((item, index) => {<CustomComponent key={index} passedValue={element} />})`

# 3) Example Data: array of objects

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

# 4) Rendering a small or specific number of array elements

## 4.1) Parent component

Injecting data per array into an component dynamically

```javascript
const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {
  return (
    <>
      {/* 2) Passing data to a child component */}
      {/* 2.1) Via an object: BEST FOR TYPESCRIPT DUE TO PROPS INTERFACE NEEDED!!! */}
      <ExpenseItem key={expenses[0].id} expense={expenses[0]}></ExpenseItem>
      <ExpenseItem key={expenses[1].id} expense={expenses[1]}></ExpenseItem>
      {/* 2.2) Via variables: BEST FOR JAVASCRIPT DUE TO NOT PROPS INTERFACE!!! */}
      <ExpenseItem
        key={expenses[2].id}
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        key={expenses[3].id}
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </>
  );
};
```

## 4.2) Child component

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

# 5) Rendering a large or unspecific number of array elements

## 5.1) Parent component

Injecting data per array into an component dynamically

```javascript
const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {
  return (
    <>
      {/* 2) Passing data to a child component */}
      {/* 2.1) Via an object */}
      {expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)}
      {/* 2.2) Via variables */}
      {expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} price={expense.price}/>)}
    </>
  );
};
```

## 5.2) Child component

The same as for [1.2 child component](./rendering-lists.md)

# 6) Rendering filtered items

## 6.1) Alongside the map function

Directly filtering the array alongside the map function

```javascript
{
  expenses
    .filter(
      (filteredExpense: Expense) =>
        filteredExpense.date.getFullYear().toString() === filteredYear
    )
    .map((expense) => <ExpenseItem key={expense.id} expense={expense} />);
}
```

## 6.2) Separate from the map function

Separate the filter by declaring another variable and filtering it

```javascript
const filteredExpenses = expenses.filter(
  (expense) => expense.date.getFullYear().toString() === filteredYear
);
```

Using the filtered variable for mapping

```javascript
{
  filteredExpenses.map((filteredExpenses) => (
    <ExpenseItem key={filteredExpenses.id} expense={filteredExpenses} />
  ));
}
```
