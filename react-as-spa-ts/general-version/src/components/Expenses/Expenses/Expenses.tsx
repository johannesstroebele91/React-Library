import "./Expenses.css";
import Expense from '../../../models/types';
import Card from "../../Utility/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

interface ExpensesProps {
  expenses: Expense[];
}

const Expenses: React.FC<ExpensesProps> = ({expenses}) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
};
export default Expenses;
