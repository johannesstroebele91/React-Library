import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Expense from "../../models/types";
import { useState } from "react";

interface NewExpenseProps {
  onAddExpense: (expenseData: Expense) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({ onAddExpense }) => {
  // !!! STEPS 1-3: UPDATE THE STATE WITH THE DATA FROM THE CHILD COMPONENT
  // !!! STEPS 4-6: CONDITIONAL CONTENT
  /* 2. Handels the passed data,
    - by creating a variable
    - that points at the function */
  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
    };

    // 3. Updates the state
    onAddExpense(expenseData);
  };

  // 5. Declare state for showNewExpenseForm condition
  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);
  // 6. Manage state with 2-way-biding for considering the cancel button in ExpenseForm
  const showNewExpenseFormHandler = () => {
    setShowNewExpenseForm(false);
  };
  return (
    <div className="new-expense">
      {/* 1. Receives the data from the child component*/}
      {/* 4. Declare conditional content */}
      {showNewExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCloseNewExpenseForm={showNewExpenseFormHandler}
        />
      )}
      {!showNewExpenseForm && (
        <button onClick={() => setShowNewExpenseForm(true)}>
          Add New Expense
        </button>
      )}
    </div>
  );
};
export default NewExpense;
