# 1) Basics = lifting the state up

Data can also be passed to the parent from a child (lifting the data)

- by passing data variable via a function
- e.g. onAddExpense(expenseData)

**IMPORTANT**

Data cannot be directly passed via a variable

- but only via a function
- which both the parent and the child point to

# 2) Approach

## 2.1) Child Element

- Step 1 and 2 normally
- Only props needs to be added for considering the state

## 2.2) Parent Element

- Step 1 and 2 normally
- Step 3 for declaring the state
- Step 4 actually saves the state ensures two way binding
- Step 5 is an additional step that implements two-way-binding

# 3) Example

**Github Commit: [85398735667fa06154a9ac8ca0ba776f8e0dcb91](https://github.com/johannesstroebele91/React-Library/commit/85398735667fa06154a9ac8ca0ba776f8e0dcb91)**

## 3.1) Child component

A Props interface needs to be defined

- for the passing the function
- e.g. onSaveExpenseData

The variable which points to the **function `onSaveExpenseData`**

- needs to be destructured first `({ onSaveExpenseData })`
- before it can be used to pass the data `onSaveExpenseData(expenseData);`

```javascript
interface ExpensesFilterProps {
  onChangeDateFilter: (enteredFilterDate: string) => void;
  selectedFilteredYear: string;
}

const ExpensesFilter: React.FC<ExpensesFilterProps> = ({
  onChangeDateFilter,
  selectedFilteredYear,
}) => {
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
        <select onChange={filterChangeHandler}>
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
```

## 3.2) Parent component (Expenses)

The variable `onSaveExpenseData` that points to a function

- needs to be passed `onSaveExpenseData={saveExpenseDataHandler}`
- and the needed function stated `const saveExpenseDataHandler = (enteredExpenseData: Expense) => {};`

```javascript
const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {
  // 3) Save the data in a state
  // (for making it possible to re-render page when changes occur)
  // And initializing the value e.e.g '2020'
  const [filteredYear, setFilteredYear] = useState("2020");

  // 2) Processes the passed function
  const filterChangeHandler = (selectedYear: string) => {
    console.log(selectedYear);

    // 4) Update state
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
        <ExpensesFilter
          onChangeDateFilter={filterChangeHandler}
          selectedFilteredYear={filteredYear}
        />
        ...{" "}
      </Card>
    </>
  );
};
```
