import React from "react";
import "./ExpensesFilter.css";

interface ExpensesFilterProps {
  onChangeDateFilter: (enteredFilterDate: string) => void;
  selectedFilteredYear: string;
}

const ExpensesFilter: React.FC<ExpensesFilterProps> = ({
  onChangeDateFilter,
  selectedFilteredYear,
}) => {
  // !!! STEPS 1-2: UPDATES THE STATE IN THE PARENT COMPONENT (EXPENSES) USING A CHANGE IN THE CHILD COMPONENT
  // !!! STEP 3: A VARIABLE IS CONTROLLED USING THE PARENT COMPONENT WITH 2-WAY-BINDING
  // 1. Send the function with the value,
  // That should be passed,
  // to the parent component (Expenses)
  const filterChangeHandler = (event: any) => {
    onChangeDateFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* 2. Trigger the change of state using onChange */}
        {/* 3. Controlls a variable in the child component using two way binding */}
        <select onChange={filterChangeHandler} value={selectedFilteredYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
