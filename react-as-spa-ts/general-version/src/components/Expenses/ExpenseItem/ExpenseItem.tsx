import { useState } from "react";
import Card from "../../Utility/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

interface ExpenseItemProps {
  title: string;
  amount: number;
  date: Date;
}

// PROPS: For passing props in TS it is
// NECESSARY to create a Interface for passed values (e.g. ExpenseItemProps)
// Fore easier access destructuring the values is used (e.g. ({title}))
const ExpenseItem: React.FC<ExpenseItemProps> = ({ title, amount, date }) => {
  // STATE: 1. Initialize useState with an initial value (e.g. amount)
  // STATE: 2. Store with array destructuring in separate variables the two returned values
  const [amountExpenseItem, setAmount] = useState(amount);

  // DECLARE: Declaring the passed data AGAIN like this
  // to be able to change the variable by the event handler
  // PROBLEM: this does not re-render the UI
  let amountExpense = title;

  const clickHandler = () => {
    // STATE: 3. Call the 2. value updating function (setAmount)
    // whenever the state should change
    setAmount(amountExpenseItem + 1);

    // WARNING! value doesn't update right away for the next line
    // BUT only after the next re-render
    console.log(amountExpenseItem);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* STATE: 4. Use the 1. value (e.g. amountExpenseItem)
         * for outputting data in the HTML*/}
        <div className="expense-item__price">${amountExpenseItem}</div>
      </div>
      {/* ONCLICK: is a event handler 
          -  which expects a function that gets executed
          -  when its triggered by an event
      -  DO NOT CALL A FUNCTION!
          -  because it would be only called once, when the JSX code is returned initially
          -  AND NOT when the click occurs - SOLUTION:
            -  a) a arrow functions to directly trigger a function inside the {} 
            -  b) or point to the handler (!!! NOT A FUNCTION CALL)*/}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
