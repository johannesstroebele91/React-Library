import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Expense from "../../models/types";

interface NewExpenseProps {
  onAddExpense: (expenseData: Expense) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({onAddExpense}) => {
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
export default NewExpense;
