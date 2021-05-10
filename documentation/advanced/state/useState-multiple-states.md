- [1) Declare useState](#1-declare-usestate)
- [2) Trigger the change of state](#2-trigger-the-change-of-state)
- [3) Update state](#3-update-state)
- [4) Use new value](#4-use-new-value)
- [5) Submission of a form](#5-submission-of-a-form)
  - [5.1) Trigger the submit](#51-trigger-the-submit)
  - [5.2) Create a submit handler](#52-create-a-submit-handler)
  - [5.1) Add a value using 2-way-binding](#51-add-a-value-using-2-way-binding)
- [6) Usage of a previous state](#6-usage-of-a-previous-state)

# 1) Declare useState

- Initialize useState with an initial value (e.g. amount)
- Store with array destructuring in separate variables the two returned values
  a) value is the variable itself
  b) value is the update function
- `const` can be used because React throws away all variables for each new state
- e.g. `const [enteredTitle, setEnteredTitle] = useState("");`

# 2) Trigger the change of state

Whenever the state should change

- it needs to be triggered in some form
- e.g. by an event handler such as click event:
  - `<input onChange={titleChangeHandler}</input>`

**DO NOT CALL A FUNCTION!**

- because it would be only called once, when the JSX code is returned initially
- AND NOT when the click occurs - SOLUTION:
- a) a arrow functions to directly trigger a function inside the {}
- b) or point to the handler (!!! NOT A FUNCTION CALL)\*/}

# 3) Update state

- Call the 2. value (updating function)

- **WARNING!**
  - value doesn't update right away for the next line
  - only after the next re-render
- event.target.value
  - saves the WHOLE string, not only the character
  - is always a string (even if input is a number)

```javascript
const titleChangeHandler = (event: any) => {
  setEnteredTitle(event.target.value);
};
```

# 4) Use new value

- Use the 1. value (e.g. amountExpenseItem)
- for outputting data in the HTML
- e.g. `<p>{amountExpenseItem}</p>`

# 5) Submission of a form

## 5.1) Trigger the submit

- Add onSubmit to the form `<form onSubmit={submitHandler}>`
- Add the submit button `<button type="submit">Add Expense</button>`

## 5.2) Create a submit handler

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

## 5.1) Add a value using 2-way-binding

- enables to get user input AND change it
  - Passes the value back into the input
  - using two-way-binding (e.g. value={enteredTitle})
- Example
  - Passes the value back into the input when the form is submitted
  - and clear the input values (see step b)
  - using two-way-binding (e.g. value={enteredTitle})
  - `<input value={enteredTitle} type="text" onChange={titleChangeHandler} />`

# 6) Usage of a previous state

Most often, the previous state of a component
* should be remembered
* for using it in the next state

The solution is to modify the `set` function
* by not declaring it static
* but dynamic
* facilitating the previous state by passing it through an arrow function)

Example from Habillo: (Commit: [bbbeebe8c0cda8029a41b834783e38e394e0430b](https://github.com/johannesstroebele91/Habillo/commit/bbbeebe8c0cda8029a41b834783e38e394e0430b))
* prevState with an arrow function is used
* not habits or habitsLists
  * these variables would lead to a solution
  * which would forget the previous state!

```javascript
  // Declare useState
  const [habitsLists, setHabitsLists] = useState(habits);

  const onFinish = (habit: Habit) => {
    // Set new state to re-render site for reconsidering new add habit
    setHabitsLists((prevState) => ( [...prevState, habit]));
  };
```
