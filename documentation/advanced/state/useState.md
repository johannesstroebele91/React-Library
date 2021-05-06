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

1. Initialize useState with an initial value (e.g. amount)
2. Store with array destructuring in separate variables the two returned values
   a) value is the variable itself
   b) value is the update function

- always get new snapshot of the state, so `const` can be set here
- `const [amountExpenseItem, setAmount] = useState(amount);`

3. Call the 2. value (updating function)
   - whenever the state should change (e.g. click event = `<button onClick={clickHandler}>Change Title</button>`)
   - which triggers the re-executing of the component function
   - **WARNING!**
     - value doesn't update right away for the next line
     - only after the next re-render

    ```javascript
    const clickHandler = () => {
    setAmount(amountExpenseItem + 1);
    console.log(amountExpenseItem);
    };
    ```

4. Use the 1. value (e.g. amountExpenseItem) for outputting data in the HTML
   `<p>{amountExpenseItem}</p>`

# 3) Use Cases
The state might be updated for the following cases:
 - user events (e.g. click)
 - Http requests ( update the state based on the Http response we got back)
 - setTimeout() (updating state because a timer expired)
 - ...

