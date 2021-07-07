import { useState } from "react";
import Expense from "../../../../models/types";
import Card from "../../../Utility/Card";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

// !!! STEP 1-3: RECEDING DATA FROM THE PARENT

// 1. Interface for receiving data via props in TS
interface ExpenseItemProps {
  expense: Expense;
}

// 2. Generic types are used to use the interface for the props on the component
// 3. Obj destructuring enables to easily access variables from the props (e.g. ({title}))
const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense }) => {
  // !!! STEP 5-7: CREATE A NEW STATE FOR THE DECLARED VARIABLE USING AN INPUT
  // 4. Declare useState
  const [amountExpenseItem, setAmount] = useState(expense.amount);

  // 6. Update state
  const clickHandler = () => {
    setAmount(amountExpenseItem + 1.;

    // WARNING! value doesn't update right away for the next line
    // BUT only after the next re-render
    console.log(amountExpenseItem);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={expense.date} />
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          {/* 7. Use the variable in the new state */}
          <div className="expense-item__price">${amountExpenseItem}</div>
        </div>
        {/* 5. Trigger the change of state */}
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
