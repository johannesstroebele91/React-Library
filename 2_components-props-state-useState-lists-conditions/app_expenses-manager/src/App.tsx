import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import INITIAL_EXPENSES from "./mock-data";
import Expense from "./models/types";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  // TODO render lists of data dynamically
  const addExpenseHandler = (expense: Expense) => {
    // USING THE PREVIOUS STATE
    // 1. The initial state populates the expenses variable with INITIAL_EXPENSES
    // 2. When the new state is created `setExpenses()`
    // the old state of the expense is passed via prevExpenses
    // And the new state for the variable added via expense
    setExpenses((prevExpenses: Expense[]) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};
export default App;
