- [1) Basics](#1-basics)
  - [1.1) Declare useState](#11-declare-usestate)
  - [1.2) Trigger the new state](#12-trigger-the-new-state)
  - [1.3) Create a new state](#13-create-a-new-state)
  - [1.4) Use new value](#14-use-new-value)
- [2) Submission of a form](#2-submission-of-a-form)
  - [2.1) Trigger the submit](#21-trigger-the-submit)
  - [2.2) Submit the form](#22-submit-the-form)
- [3) Controlled component (2-way-binding)](#3-controlled-component-2-way-binding)
  - [3.1) Parent component: ExpenseForm](#31-parent-component-expenseform)
  - [3.2) Child component: ExpenseForm](#32-child-component-expenseform)
- [4) Usage of a previous state](#4-usage-of-a-previous-state)

# 1) Basics

A State of variables can be changed in 4 steps as shown below in the example

ExpenseItem

```javascript
const ExpenseItem: React.FC<ExpenseItemProps> = ({ title, amount, date }) => {
  // 1) Declare useState
  const [amountExpenseItem, setAmount] = useState(amount);

  // 3) Create a new state
  const clickHandler = () => {
    setAmount(amountExpenseItem + 1);

    // WARNING! value doesn't update right away for the next line
    // BUT only after the next re-render
    console.log(amountExpenseItem);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* 4. Displays the variable based on the the new state */}
        <div className="expense-item__price">${amountExpenseItem}</div>
      </div>
      {/* 2) Trigger the change of state */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
```

## 1.1) Declare useState

- Initialize useState with an initial value (e.g. amount)
- Store with array destructuring in separate variables the two returned values
  a) value is the variable itself
  b) value is the update function
- `const` can be used because React throws away all variables for each new state
- e.g. `const [enteredTitle, setEnteredTitle] = useState("");`

## 1.2) Trigger the new state

Whenever the state should change

- it needs to be triggered in some form
- e.g. by an event handler such as click event:
  - `<input onChange={titleChangeHandler}</input>`

**DO NOT CALL A FUNCTION!**

- because it would be only called once, when the JSX code is returned initially
- AND NOT when the click occurs - SOLUTION:
- a) a arrow functions to directly trigger a function inside the {}
- b) or point to the handler (!!! NOT A FUNCTION CALL)\*/}

## 1.3) Create a new state

- Call the 2. value (updating function)

- **WARNING!**
  - a change in the variable doesn't create a new state
  - right away for the next line
  - but only after the next re-render
- event.target.value
  - saves the WHOLE string, not only the character
  - is always a string (even if input is a number)

```javascript
const titleChangeHandler = (event: any) => {
  setEnteredTitle(event.target.value);
};
```

## 1.4) Use new value

- Use the 1. value (e.g. amountExpenseItem)
- for outputting data in the HTML
- e.g. `<p>{amountExpenseItem}</p>`

# 2) Submission of a form

A state for a form submission can be implemented in 6 steps (2 additional ones)

```javascript
interface ExpenseFormProps {
  onSaveExpenseData: (enteredExpenseData: Expense) => void;
}
/* Data is passed, via pointer at a function, to the parent
  1) `ExpenseFormProps`
  2) `onSaveExpenseData`
  3) and later `onSaveExpenseData(expenseData)` */
const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSaveExpenseData }) => {
  // !!! A FORM CAN BE SUBMITTED IN 5 STEPS USING STATE

  // 1) Declare useState
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 3) Create a new state triggered by the user input
  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event: any) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event: any) => {
    setEnteredDate(event.target.value);
  };

  // 5) Submit the form
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
      {/* ↑↑↑ 4) Trigger the form Submit the form */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* 2) Trigger the change of state using onChange */}
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
        {/* 4) Submit the form */}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
```

## 2.1) Trigger the submit

- Add onSubmit to the form `<form onSubmit={submitHandler}>`
- Add the submit button `<button type="submit">Add Expense</button>`

## 2.2) Submit the form

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

# 3) Controlled component (2-way-binding)

Enables to get user input AND change it

- Passes the value back into the input
- using 2-way-binding (e.g. value={enteredTitle})

Example

- Passes the value back into the input when the form is submitted
- and clear the input values (see step b)
- using two-way-binding (e.g. value={enteredTitle})
- `<input value={enteredTitle} type="text" onChange={titleChangeHandler} />`

It can be implemented with a 6) additional step

## 3.1) Parent component: ExpenseForm

A parent and child component can be controlled

- to ensure that both child and parent have the same data (e.g. `selectedFilteredYear`)
- by passing the changed value from the parent to the child again

```javascript
  // 3) Save the data in a state
  // (for making it possible to re-render page when changes occur)
  // And initializing the value e.e.g '2020'
  const [filteredYear ,setFilteredYear] = useState('2020');
  // 2) Processes the passed function
  const filterChangeHandler = (selectedYear: string) => {
    console.log(selectedYear)
    // 4) Create a new state
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
        {/* ... */}
      </Card>
    </>
  );
};
```

## 3.2) Child component: ExpenseForm

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
        {/* 3) Controlls a variable in the child component using two way binding */}
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

# 4) Usage of a previous state

Most often, the previous state of a component

- should be remembered
- for using it in the next state

The solution is to modify the `set` function

- by not declaring it static
- but dynamic
- facilitating the previous state by passing it through an arrow function)

Example from Habillo:

(Commit: [bbbeebe8c0cda8029a41b834783e38e394e0430b](https://github.com/johannesstroebele91/Habillo/commit/bbbeebe8c0cda8029a41b834783e38e394e0430b))

The `prevState` variable is used with an arrow function
- (not habits or habitsLists!!!)
- because otherwise this would lead to a solution which would forget the previous state!

```javascript
// Declare useState
const [habitsLists, setHabitsLists] = useState(habits);

const onFinish = (habit: Habit) => {
  // Set new state to re-render site for reconsidering new add habit
  setHabitsLists((prevState) => [...prevState, habit]);
};
```
