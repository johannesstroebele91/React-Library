import { useState } from "react";
import "./ExpenseForm.css";
import Expense from "../../models/types";
const ExpenseForm: React.FC = () => {
  // !!! STATE CAN BE USED IN 6 STEPS (Step 5 is skipped)

  // 1) Declare useState
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 3) Update the state
  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event: any) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event: any) => {
    setEnteredDate(event.target.value);
  };

  // 6) Submit the form
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
    console.log(expenseData);
    // Clears the input after the form was submitted
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      {/* ↑↑↑ 6) Submit the form */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* 2) Trigger the change of state using onChange */}
          {/* 6) Get and change user input using 2-way-binding */}
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
        {/*6) Submit the form */}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
