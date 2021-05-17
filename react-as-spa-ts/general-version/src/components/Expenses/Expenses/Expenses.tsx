import "./Expenses.css";
import Expense from "../../../models/types";
import Card from "../../Utility/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

interface ExpensesProps {
  expenses: Expense[];
}

const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {

  // !!! STEP 1+2: A VALUE CAN BE PASSED FROM THE CHILD (ExpensesFilter) TO THIS PARENT COMPONENT
  // !!! STEP 3+4: A STATE CAN BE UPDATED USING THE NEW INPUT FROM THE CHILD
  // !!! STEP 5: A COMPONENT CAN BE CONTROLLED TO ENSURE THAT BOTH CHILD AND PARENT HAVE THE SAME DATA

  // 3) Save the data in a state
  // (for making it possible to re-render page when changes occur)
  // And initializing the value e.e.g '2020'
  const [filteredYear ,setFilteredYear] = useState('2020');
  // 2) Processes the passed function
  const filterChangeHandler = (selectedYear: string) => {
    console.log(selectedYear)
    // 4) Updates the state
    setFilteredYear(selectedYear);
  };

  return (
    <>
      <Card className="expenses">
        {/* 1) Receives the passed function from the child*/}
        {/* 5) In order to ensure that both the parent and the child have the same data
              * data (e.g. 'filteredYear') should be back
              * via two-way-binding
              * RESULT: 2020 is the default as stated above */}
        <ExpensesFilter onChangeDateFilter={filterChangeHandler} selectedFilteredYear={filteredYear} />
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
    </>
  );
};
export default Expenses;
