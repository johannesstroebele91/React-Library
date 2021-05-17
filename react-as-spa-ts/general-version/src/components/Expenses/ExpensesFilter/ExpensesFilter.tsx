import React, { useState } from "react";
import "./ExpensesFilter.css";

interface ExpensesFilterProps {
  onChangeDateFilter: (enteredFilterDate: string) => void;
  selectedFilteredYear: string;
}

const ExpensesFilter: React.FC<ExpensesFilterProps> = ({ onChangeDateFilter, selectedFilteredYear }) => {

  // 1) Send the function with the value,
  // That should be passed,
  // to the parent component (Expenses)
  const filterChangeHandler = (event: any) => {
    onChangeDateFilter(event.target.value);

  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* 2) Trigger the change of state using onChange */}
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
