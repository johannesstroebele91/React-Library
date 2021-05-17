# 1) Declare useState

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

# 2) Create a new state

Call the 2. value (updating function)

- whenever the state should change (e.g. click event = `<button onClick={clickHandler}>Change Title</button>`)
- which triggers the re-executing of the component function

**Value does not directly get updated**

- value doesn't update right away for e.g. the next line using clg
- and only after the next re-render

**Persist old values**

- by passing all values to the new object,
- and afterwards update the respective value

REASON:
- if they are not stated (e.g. only enteredTitle: event.target.value)
- they would be thrown away for the new state

To persist old values two approaches can be used

a) prevState version (better) ensures that always the lastest State is manipulated

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

# 3) Use new value

- Use the 1. value (e.g. amountExpenseItem)
- for outputting data in the HTML
- e.g. `<input onChange={amountChangeHandler} type="text" min="0.01" step="0.01" />`
