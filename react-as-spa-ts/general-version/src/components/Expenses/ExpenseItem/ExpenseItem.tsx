import { useState } from "react";
import Card from "../../Utility/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

interface ExpenseItemProps {
  title: string;
  amount: number;
  date: Date;
}

// Using Props with TS
// Specifying the passed values by
// !!! 1) Creating a Interface for the passed values (NECESSARY)
// 2) And destructuring the values to make them more easy to access
const ExpenseItem: React.FC<ExpenseItemProps> = ({ title, amount, date }) => {
  /* useState allows to define values as state
  - New changes are assigned by calling a function 
    - wherefore useState is returning an array
    - where the first value is the variable itself 
    - and the second value is the update function
      -> array destructuring helps to store both values in separate variables */
  const [amountExpenseItem, setAmount] = useState(amount);

  /* Declaring the passed data AGAIN in the component to
      - enables to change the variables by the event handler
      - e.g. e.g. let amountExpense = amount;
    - PROBLEM: this does not re-render the UI
      - is here done by using the useState above
      - (e.g. const [amountExpenseItem, setAmount] = useState(amount);)
   */

  const clickHandler = () => {
    // This function enables to update the state (re-render the page)
    // by calling the setAmount function defined before
    // Instead of assigning the value (e.g. amountExpenseItem = amountExpenseItem +1;)

    setAmount(amountExpenseItem + 1);

    // WARNING!
    // value doesn't update right away for the next ling
    // only after the next re-render

    console.log(amountExpenseItem);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amountExpenseItem}</div>
      </div>
      {/* onClick is a event handler which
       * expects a function that gets executed when its triggered, so
       a) a arrow functions to directly trigger a function inside the {} 
       b) or point to the handler (!!! NOT A FUNCTION CALL) 
        * because if a function would be called (e.g. `onClick={greet()}`)
        * then JS would execute this when the button gets parsed (when the JSX code is returned)
        * AND not when the click occurs (!!! WHAT WE WANT)
        * React does this magic behind the scenes for you
        * Naming conventions start with the event (e.g "click") and ends with "Handler"
*/}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
