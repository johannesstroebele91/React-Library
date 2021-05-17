import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Expense from "../../models/types";

interface NewExpenseProps {
  onAddExpense: (expenseData: Expense) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({onAddExpense}) => {
  // !!! STEPS 1-3: UPDATE THE STATE WITH THE DATA FROM THE CHILD COMPONENT

    /* 2) Handels the passed data,
      - by creating a variable
      - that points at the function */
  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
    };

    // 3) Updates the state
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/* 1) Receives the data from the child component*/}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
