# 1) Basics = lifting the state up

Data can also be passed to the parent from a child (lifting the data)

- by passing data variable via a function
- e.g. onAddExpense(expenseData)

**IMPORTANT**

Data cannot be directly passed via a variable

- but only via a function
- which both the parent and the child point to

# 2) Example uncontrolled components

TODO might needs fixing, revise later

Means the component does not controll the state
- and therefore the respective value
- that should are needed in the child component
- are handeled in the child
- NOT the parent component

**See the following Github Commit: [113ce035f92da3a1d32429b12b5253d0df407707](https://github.com/johannesstroebele91/React-Library/commit/113ce035f92da3a1d32429b12b5253d0df407707)**

## 2.1) Child component (ExpensesFilter)

A Props interface needs to be defined

- for the passing the function
- e.g. onSaveExpenseData

The variable which points to the **function `onSaveExpenseData`**

- needs to be destructured first `({ onChangeDateFilter })`
- before it can be used to pass the data `onChangeDateFilter(event.target.value);`

Props interfaces can be special for

- buttons (e.g. `interface ButtonProps { type: "button" | "submit" | "reset" | undefined; }`)
- function: for passing data (e.g. for id it is `interface SomeComponentProps { onChange: (id: number) => void }` )

```javascript
interface ExpensesFilterProps {
  onChangeDateFilter: (enteredFilterDate: string) => void;
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
        </select>
      </div>
    </div>
  );
};
```

## 2.2) Parent component (Expenses)

The variable `onChangeDateFilter` that points to a function

- needs to be passed `onChangeDateFilter={filterChangeHandler}`
- and the needed function stated `const filterChangeHandler = (selectedYear: string) => {};`

```javascript
const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {
  // 3) Save the data in a state
  // (for making it possible to re-render page when changes occur)
  // And initializing the value e.e.g '2020'
  const [filteredYear, setFilteredYear] = useState("2020");

  // 2) Processes the passed function
  const filterChangeHandler = (selectedYear: string) => {
    console.log(selectedYear);
  };

  return (
    <>
      <Card className="expenses">
        {/* 1) Receives the passed function from the child*/}
        <ExpensesFilter onChangeDateFilter={filterChangeHandler} />
        {/* ... */}
      </Card>
    </>
  );
};
```

# 3) Example controlled components

Means that the respective value that should be passed and changes to it

- are NOT handeled in the child
- BUT the parent component

## 3.1) Child component (ExpensesFilter)

Step 1 and 2 like before

- The props for the `selectedFilteredYear`
  - needs to be added for considering the changed state in the parent
- And the value attribute
  - needs to be added to the `select` button for two-way-binding

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
```

## 3.2) Parent component (Expenses)

The steps 1 and two as before

- Step 3 for declaring the state
- Step 4 actually creates a the state of the respective variable (triggers a re-rendering of the page)
- Step 5 controlls the component (additional step that ensures that data is the same in both components)

```javascript
interface ExpensesProps {
  expenses: Expense[];
}

const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {
  // 3) Save the data in a state
  // (for making it possible to re-render page when changes occur)
  // And initializing the value e.e.g '2020'
  const [filteredYear, setFilteredYear] = useState("2020");
  // 2) Processes the passed function
  const filterChangeHandler = (selectedYear: string) => {
    console.log(selectedYear);
    // 4) Creates a new state of the respective variable
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
        {/* ... */}
      </Card>
    </>
  );
};
```
