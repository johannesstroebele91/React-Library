# Basics

Data can also be passed to the parent from a child

- using variable that points to a function
- e.g. saveExpenseDataHandler

Which means you are lifting the data or the state up
  - data gets passed from the child
  - to the parent, where it can be used

**HOWEVER** 

- if it es necessary to change
  - the state of the parent
  - based on the child
  - a function needs to be passed (not a variable!)

# Example

**Github Commit: [85398735667fa06154a9ac8ca0ba776f8e0dcb91](https://github.com/johannesstroebele91/React-Library/commit/85398735667fa06154a9ac8ca0ba776f8e0dcb91)**

## 2.1) Child component

A Props interface needs to be defined

- for the passing the function
- e.g. onSaveExpenseData

The variable which points to the **function `onSaveExpenseData`**

- needs to be destructured first `({ onSaveExpenseData })`
- before it can be used to pass the data `onSaveExpenseData(expenseData);`

```javascript
interface ExpenseFormProps {
  onSaveExpenseData: (enteredExpenseData: Expense) => void;
}
const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSaveExpenseData }) => {
  const submitHandler = (event: any) => {
    const expenseData: Expense = {
      id: "e" + Math.floor(Math.random() * 1000).toString(),
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate),
    };
    //
    onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <button type="submit">Add Expense</button>
    </form>
  );
};
```

## 2.2) Parent component

The variable `onSaveExpenseData` that points to a function

- needs to be passed `onSaveExpenseData={saveExpenseDataHandler}`
- and the needed function stated `const saveExpenseDataHandler = (enteredExpenseData: Expense) => {};`

```javascript
interface NewExpenseProps {
  onAddExpense: (expenseData: Expense) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
```
