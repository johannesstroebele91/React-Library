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
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
