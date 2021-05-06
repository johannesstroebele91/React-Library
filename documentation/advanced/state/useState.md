- [1) Basics](#1-basics)
- [2) Approach](#2-approach)
  - [2.1) Multiple States](#21-multiple-states)
    - [2.2.1) Declare useState](#221-declare-usestate)
    - [2.2.2) Trigger the change of state](#222-trigger-the-change-of-state)
    - [2.2.4) Update state](#224-update-state)
    - [2.2.5) Use new value](#225-use-new-value)
    - [2.2.6) Submission of a form](#226-submission-of-a-form)
  - [2.2) One State](#22-one-state)
    - [2.2.1) Declare useState](#221-declare-usestate-1)
    - [2.2.2) Update state](#222-update-state)
    - [2.2.3) Use new value](#223-use-new-value)
- [3) Use Cases](#3-use-cases)

# 1) Basics

**The React function `useState` allows to define values as a state**

It is one of the most important **React hooks**

- all name of hooks start with "use"
- all must be called inside of the React component function
- NOT outside these functions
- OR nested function (only 1 exception)

The value that should be monitored for change

- needs to be passed as a parameter for function
- e.g. amount

# 2) Approach

## 2.1) Multiple States

### 2.2.1) Declare useState

- Initialize useState with an initial value (e.g. amount)
- Store with array destructuring in separate variables the two returned values
  a) value is the variable itself
  b) value is the update function
- `const` can be used because React throws away all variables for each new state
- e.g. `const [enteredTitle, setEnteredTitle] = useState("");`

### 2.2.2) Trigger the change of state

Whenever the state should change

- it needs to be triggered in some form
- e.g. by an event handler such as click event:
  - `<input onChange={titleChangeHandler}</input>`

**DO NOT CALL A FUNCTION!**

- because it would be only called once, when the JSX code is returned initially
- AND NOT when the click occurs - SOLUTION:
- a) a arrow functions to directly trigger a function inside the {}
- b) or point to the handler (!!! NOT A FUNCTION CALL)\*/}

### 2.2.4) Update state

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

### 2.2.5) Use new value

- Use the 1. value (e.g. amountExpenseItem)
- for outputting data in the HTML
- e.g. `<p>{amountExpenseItem}</p>`

### 2.2.6) Submission of a form

a) Trigger the submit

- Add onSubmit to the form `<form onSubmit={submitHandler}>`
- Add the submit button `<button type="submit">Add Expense</button>`

b) Create a submit handler

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

c) Add a value using 2-way-binding

- enables to get user input AND change it
  - Passes the value back into the input
  - using two-way-binding (e.g. value={enteredTitle})
- Example
  - Passes the value back into the input when the form is submitted
  - and clear the input values (see step b)
  - using two-way-binding (e.g. value={enteredTitle})
  - `<input value={enteredTitle} type="text" onChange={titleChangeHandler} />`

## 2.2) One State

**Preferred approach by Maximilian Scharzmüller**

### 2.2.1) Declare useState

- Initialize useState with an initial value (e.g. amount)
- Store with array destructuring in separate variables the two returned values
  a) value is the variable itself
  b) value is the update function
- `const` can be used because React throws away all variables for each new state
- In case of user input, it is empty '' in the beginning
- The goal is NOT to re-render the file,
  - but to store values in a variable
  - that is detached from the lifecycle
- Example:

```javascript
const [userInput, setUserInput] = useState({
  enteredTitle: "",
  enteredAmount: "",
  enteredDate: "",
});
```

### 2.2.2) Update state

- Call the 2. value (updating function)
  - whenever the state should change (e.g. click event = `<button onClick={clickHandler}>Change Title</button>`)
  - which triggers the re-executing of the component function
- **Value does not directly get updated**
  - value doesn't update right away for e.g. the next line using clg
  - and only after the next re-render
- **Persist old values**
  - by passing all values to the new object,
  - and afterwards update the respective value
  - REASON:
    - if they are not stated (e.g. only enteredTitle: event.target.value)
    - they would be thrown away for the new state
  - To persist old values two approaches can be used
    a) prevState version (better)
    - ensures that always the lastest State is manipulated
    ```javascript
    const titleChangeHandler = (event: any) => {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredTitle: event.target.value,
        };
      });
    };
    ```
    b) insecure version (worse) - "...input" can be used
    ```javascript
    const amountChangeHandler = (event: any) => {
      setUserInput({
        ...userInput,
        enteredAmount: event.target.value,
      });
    };
    ```

### 2.2.3) Use new value

- Use the 1. value (e.g. amountExpenseItem)
- for outputting data in the HTML
- e.g. `<input onChange={amountChangeHandler} type="text" min="0.01" step="0.01" />`

# 3) Use Cases

The state might be updated for the following cases:

- user events (e.g. click)
- Http requests ( update the state based on the Http response we got back)
- setTimeout() (updating state because a timer expired)
- ...
