import Expense from "../../../models/types";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

interface ExpensesListProps {
  filteredExpenses: Expense[];
}
const ExpensesList: React.FC<ExpensesListProps> = ({ filteredExpenses }) => {
  //Conditional content
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {
        filteredExpenses.map((filteredExpenses) => (
          <ExpenseItem key={filteredExpenses.id} expense={filteredExpenses} />
        ))
      }
    </ul>
  );
};

export default ExpensesList;
