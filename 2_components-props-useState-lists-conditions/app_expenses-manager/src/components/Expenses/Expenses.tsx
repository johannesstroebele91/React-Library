import "./Expenses.css";
import Expense from "../../models/types";
import Card from "../Utility/Card";
import ExpensesFilter from "./ExpensesList/ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";

// !!! STEP 1: Props for receiving data from the parent
// !!! STEP 2+3: A VALUE CAN BE PASSED FROM THE CHILD (ExpensesFilter) TO THIS PARENT COMPONENT
// !!! STEP 4+5: A STATE CAN BE UPDATED USING THE NEW INPUT FROM THE CHILD
// !!! STEP 6: A COMPONENT CAN BE CONTROLLED TO ENSURE THAT BOTH CHILD AND PARENT HAVE THE SAME DATA

// 1. Props for receiving data from the parent
interface ExpensesProps {
  expenses: Expense[];
}

const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {
  // 5. Save the data in a state
  // (for making it possible to re-render page when changes occur)
  // And initializing the value e.e.g '2020'
  const [filteredYear, setFilteredYear] = useState("2021");
  // 4. Processes the passed function
  const filterChangeHandler = (selectedYear: string) => {
    console.log(selectedYear);
    // 6. Updates the state
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <>
      <Card className="expenses">
        {/* 3. Receives the passed function from the child*/}
        {/* 7. In order to ensure that both the parent and the child have the same data
         * data (e.g. 'filteredYear') should be back
         * via two-way-binding
         * RESULT: 2020 is the default as stated above */}
        <ExpensesFilter
          onChangeDateFilter={filterChangeHandler}
          selectedFilteredYear={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </>
  );
};
export default Expenses;
