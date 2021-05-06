# Basics

Data can also be passed to the parent from a child

- using variable that points to a function
- e.g. saveExpenseDataHandler

# Example

**Github Commit: ?**

## 2.1) Child component

A Props interface needs to be defined

- for the passing the function
- e.g. onSaveExpenseData

The variable which points to the function `onSaveExpenseData`
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

```javascript
interface NewExpenseProps {
  onAddExpense: (expenseData: Expense) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({ onAddExpense }) => {
  /* Handels the passed data,
    1) by creating a variable
    2) that points at the function */
  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/* Passes data via the onSaveExpenseData function*/}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
```
