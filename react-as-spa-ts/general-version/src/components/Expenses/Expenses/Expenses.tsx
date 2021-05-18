import "./Expenses.css";
import Expense from "../../../models/types";
import Card from "../../Utility/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

// !!! STEP 1: Props for receiving data from the parent
// !!! STEP 2: Data can be passed down to a child component via props
// !!! STEP 3+4: A VALUE CAN BE PASSED FROM THE CHILD (ExpensesFilter) TO THIS PARENT COMPONENT
// !!! STEP 4+6: A STATE CAN BE UPDATED USING THE NEW INPUT FROM THE CHILD
// !!! STEP 7: A COMPONENT CAN BE CONTROLLED TO ENSURE THAT BOTH CHILD AND PARENT HAVE THE SAME DATA

// 1) Props for receiving data from the parent
interface ExpensesProps {
  expenses: Expense[];
}

const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {
  // 5) Save the data in a state
  // (for making it possible to re-render page when changes occur)
  // And initializing the value e.e.g '2020'
  const [filteredYear, setFilteredYear] = useState("2020");
  // 4) Processes the passed function
  const filterChangeHandler = (selectedYear: string) => {
    console.log(selectedYear);
    // 6) Updates the state
    setFilteredYear(selectedYear);
  };

  return (
    <>
      <Card className="expenses">
        {/* 3) Receives the passed function from the child*/}
        {/* 7) In order to ensure that both the parent and the child have the same data
         * data (e.g. 'filteredYear') should be back
         * via two-way-binding
         * RESULT: 2020 is the default as stated above */}
        <ExpensesFilter
          onChangeDateFilter={filterChangeHandler}
          selectedFilteredYear={filteredYear}
        />
        {/* 1) Passing data to a child component */}
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>
    </>
  );
};
export default Expenses;
