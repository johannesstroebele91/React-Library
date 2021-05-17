import { useState } from "react";
import Card from "../../Utility/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

interface ExpenseItemProps {
  title: string;
  amount: number;
  date: Date;
}

// PROPS: Passing props in TS NEEDS a Props Interface (e.g. ExpenseItemProps)
// Obj destructuring can be used for easier access of variables (e.g. ({title}))
const ExpenseItem: React.FC<ExpenseItemProps> = ({ title, amount, date }) => {
  //
  // !!! STATE CAN BE USED IN 5 STEPS
  // 
  // 1. Declare useState
  const [amountExpenseItem, setAmount] = useState(amount);

  // 4. Update state
  const clickHandler = () => {
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
        {/* 5. Use the updated variable */}
        <div className="expense-item__price">${amountExpenseItem}</div>
      </div>
      {/* 3. Trigger the change of state */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
