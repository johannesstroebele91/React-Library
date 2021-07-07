import { useState } from "react";
import "./ExpenseForm.css";
import Expense from "../../models/types";

interface ExpenseFormProps {
  onSaveExpenseData: (enteredExpenseData: Expense) => void;
  onCloseNewExpenseForm: () => void;
}
/* Data is passed, via pointer at a function, to the parent
  1. `ExpenseFormProps`
  2. `onSaveExpenseData`
  3. and later `onSaveExpenseData(expenseData)` */
const ExpenseForm: React.FC<ExpenseFormProps> = ({
  onSaveExpenseData,
  onCloseNewExpenseForm,
}) => {
  // !!! STEP 1-4: A STATE CAN BE CHANGED USING AN INPUT AND THE VALUES PASSED TO A PARENT COMPONENT (EXPENSES)
  // !!! STEP 5: A FORM CAN BE SUBMITTED HERE AND ITS VALUE PASSED TO THE PARENT
  // !!! STEP 6: THE VALUES OF A CHILD AND PARENT COMPONENT CAN BE CONTROLLED USING 2-WAY-BINDING
  // !!! STEP 7: Manages conditional content regarding a cancel button

  // 1. Declare useState
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 3. Update state
  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event: any) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event: any) => {
    setEnteredDate(event.target.value);
  };

  // 5. Submit the form
  const submitHandler = (event: any) => {
    // Call preventDefault() to prevent page reload (automatic HTTP request)
    event.preventDefault();

    // Create a updated object from received values
    const expenseData: Expense = {
      id: "e" + Math.floor(Math.random() * 1000).toString(),
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate), // parses the date string into a Date object
    };
    onSaveExpenseData(expenseData);
    // Clears the input after the form was submitted
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    // Close form for adding new expense after finish
    onCloseNewExpenseForm();
  };

  return (
    <form onSubmit={submitHandler}>
      {/* ↑↑↑ 4. Trigger the form Submit the form */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* 2. Trigger the change of state using onChange */}
          {/* 6. Get and change user input using 2-way-binding */}
          <input
            value={enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* 7. Cancel the adding of a new expense using conditions */}
        <button
          onClick={() => {
            onCloseNewExpenseForm();
          }}
        >
          Cancel
        </button>
        {/*6. Submit the form */}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
