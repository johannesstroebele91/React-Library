import "ExpenseItem.css";
import ExpenseForm from "./ExpenseForm";

const ExpenseItem: React.FC = () => {
  return (
    <div className="new-expense">
      <ExpenseForm/>
    </div>
  );
};
export default ExpenseItem;
