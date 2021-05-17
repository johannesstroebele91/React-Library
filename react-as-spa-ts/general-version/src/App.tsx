import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses/Expenses";
import expenses from "./mock-data";
import Expense from "./models/types";

const App = () => {
  // TODO render lists of data dynamically
  const addExpenseHandler = (expense: Expense) => {
    console.log("In app.tsx");
    console.log(expense);
    console.log(expenses);
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
