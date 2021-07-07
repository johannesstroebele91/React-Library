- [1. Basics of multiple states](#1-basics-of-multiple-states)
  - [1.1. Example](#11-example)
  - [2.2. Trigger the submit](#22-trigger-the-submit)
  - [2.3. Submit the form](#23-submit-the-form)
- [2. Controlled component (2-way-binding)](#2-controlled-component-2-way-binding)
  - [2.1. Parent component: ExpenseForm](#21-parent-component-expenseform)
  - [2.2. Child component: ExpensesFilter](#22-child-component-expensesfilter)
- [3. Usage of a previous state](#3-usage-of-a-previous-state)

# 1. Basics of multiple states

## 1.1. Example

A state for a form submission

- that uses multiple states
- can be implemented in 6 steps (2 additional ones)

```javascript
interface ExpenseFormProps {
  onSaveExpenseData: (enteredExpenseData: Expense) => void;
}
/* Data is passed, via pointer at a function, to the parent
  1. `ExpenseFormProps`
  2. `onSaveExpenseData`
  3. and later `onSaveExpenseData(expenseData)` */
const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSaveExpenseData }) => {
  // !!! A FORM CAN BE SUBMITTED IN 5 STEPS USING STATE

  // 1. Declare useState
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 3. Create a new state triggered by the user input
  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event: any) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event: any) => {
    setEnteredDate(event.target.value);
  };

  // 5. Submit the form
  const submitHandler = (event: any) => {
    // Call preventDefault() to prevent page reload (automatic HTTP request)
    event.preventDefault();

    // Create a updated object from received values
    const expenseData: Expense = {
      id: "e" + Math.floor(Math.random() * 1000).toString(),
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate), // parses the date string into a Date object
    };
    onSaveExpenseData(expenseData);
    // Clears the input after the form was submitted
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      {/* ↑↑↑ 4. Trigger the form Submit the form */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* 2. Trigger the change of state using onChange */}
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* 4. Submit the form */}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
```

## 2.2. Trigger the submit

- Add onSubmit to the form `<form onSubmit={submitHandler}>`
- Add the submit button `<button type="submit">Add Expense</button>`

## 2.3. Submit the form

Create a submit handler

- for managing the submit

```javascript
const submitHandler = (event: any) => {
  // **Problem** is that submit button triggers a page reload
  // Because the browser automatically sends a request
  // when a form is submitted to the server
  // which triggers a page reload
  // **Solution** call preventDefault()
  event.preventDefault();

  // Create a updated object from received values
  const expenseData: Expense = {
    id: "e" + Math.floor(Math.random() * 1000).toString(),
    title: enteredTitle,
    amount: parseFloat(enteredAmount),
    date: new Date(enteredDate), // parses the date string into a Date object
  };
  console.log(expenseData);
  // Clears the input after the form was submitted
  setEnteredTitle("");
  setEnteredAmount("");
  setEnteredDate("");
};
```

# 2. Controlled component (2-way-binding)

React enables to get user input AND change it

- Passes the value back into the input
- using 2-way-binding (e.g. value={enteredTitle})

Example

- Passes the value back into the input when the form is submitted
- and clear the input values (see step b)
- using two-way-binding (e.g. value={enteredTitle})
- `<input value={enteredTitle} type="text" onChange={titleChangeHandler} />`

It can be implemented with a 6. additional step

This is in contrast to implementations

- where React does not controll the state
- e.g. using [useRef](./../../../3_advanced/state/useRef.md)

## 2.1. Parent component: ExpenseForm

A parent and child component can be controlled

- to ensure that both child and parent have the same data (e.g. `selectedFilteredYear`)
- by passing the changed value from the parent to the child again

```javascript
  // 3. Save the data in a state
  // (for making it possible to re-render page when changes occur)
  // And initializing the value e.e.g '2020'
  const [filteredYear ,setFilteredYear] = useState('2020');
  // 2. Processes the passed function
  const filterChangeHandler = (selectedYear: string) => {
    console.log(selectedYear)
    // 4. Create a new state
    setFilteredYear(selectedYear);
  };

  return (
    <>
      <Card className="expenses">
        {/* 1. Receives the passed function from the child*/}
        {/* 5. In order to ensure that both the parent and the child have the same data
              * data (e.g. 'filteredYear') should be back
              * via two-way-binding
              * RESULT: 2020 is the default as stated above */}
        <ExpensesFilter onChangeDateFilter={filterChangeHandler} selectedFilteredYear={filteredYear} />
        {/* ... */}
      </Card>
    </>
  );
};
```

## 2.2. Child component: ExpensesFilter

The change data from the parent (e.g. `selectedFilteredYear`)

- is passed via props
- and used via `value={selectedFilteredYear}` to updated the input
- which triggered the change of the state

```javascript
interface ExpensesFilterProps {
  onChangeDateFilter: (enteredFilterDate: string) => void;
  selectedFilteredYear: string;
}

const ExpensesFilter: React.FC<ExpensesFilterProps> = ({
  onChangeDateFilter,
  selectedFilteredYear,
}) => {
  // !!! STEPS 1-2: CREATE A NEW STATE IN THE PARENT COMPONENT (EXPENSES) USING A CHANGE IN THE CHILD COMPONENT
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
```

# 3. Usage of a previous state

The problem is that

- the previous state of the variable, which state is monitored, is forgotten
- in case a new state is created via set function (e.g. setHabitsLists)

Solution

- declaring the set
  // 1. The initial state populates the expenses variable with INITIAL_EXPENSES
  // 2. When the new state is created `setExpenses()`
  // the old state of the expense is passed via prevExpenses
  // And the new state for the variable added via expense
  setExpenses((prevExpenses) => [...prevExpenses, expense])

The solution is to modify the `set` function

- by not declaring it static
- but dynamic
- facilitating the previous state by passing it through an arrow function)

Example from Habillo:

See the git Commit: [113ce035f92da3a1d32429b12b5253d0df407707](https://github.com/johannesstroebele91/React-Library/commit/113ce035f92da3a1d32429b12b5253d0df407707))

The `prevState` variable is used with an arrow function

- (not habits or habitsLists!!!)
- because otherwise this would lead to a solution which would forget the previous state!

```javascript
// 1. Declare useState with variable and set function
// 2. Initialize the variable with an initial value (e.g. habits)
const [habitsLists, setHabitsLists] = useState(INITIAL_HABITS);

const onFinish = (habit: Habit) => {
  // 3.1. RIGHT :)
  // Call the set state method to create a new state for the variable (re-render page)
  // use prevState to pass the old state to the new state of the variable
  setHabitsLists((prevState) => [...prevState, habit]);

  // 3.2. WRONG :(
  // Using the variable that the state was declared with
  // Forgets the old state
  setHabitsLists([INITIAL_HABITS, habit]);
};
```
