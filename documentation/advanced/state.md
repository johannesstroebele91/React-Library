# 1) Relevance

- Without changes to the state
  - an app is in the end just static
- State enable apps to be
  1. interactive: can react to clicks and date entered by users
  2. reactive: app changes when certain things happen
- It is fully controlled by the component
- It should be treated as immutable!

# 2) Approach

You need to specify

- how to react to user events (e.g. clicks and event handlers)
- AND how these events trigger a change in the state

[Example see ExpenseItem file](../../react-as-spa-ts/general-version/src/components/Expenses/ExpenseItem/ExpenseItem.tsx)

## 2.1) React to user events

- HTML elements that can be interactive with
- can trigger user events, which can be viewed:
- https://developer.mozilla.org/en-US/docs/Web/API/Element
- An important HTMl element is a [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
  - represents a clickable button, used to submit forms
  - React exposes all default events as props which start with on
  - e.g. onClick (event listener for an click)
    - It is important that the onClick function expects an
      a) a arrow functions to directly trigger a function inside the {}
      b) or a pointer that points to the handler (!!! NOT A FUNCTION CALL)
      - because if a function would be called (e.g. `onClick={greet()}`)
      - then JS would execute this when the button gets parsed (when the JSX code is returned)
      - AND not when the click occurs (!!! WHAT WE WANT)

## 2.2) How to trigger change in the state

### 2.2.1) useState

**The React function `useState` allows to define values as a state**

It is one of the most important **React hooks**

- all name of hooks start with "use"
- all must be called inside of the React component function
- NOT outside these functions
- OR nested function (only 1 exception)

The value that should be monitored for change

- needs to be passed as a parameter for function
- e.g. amount

**Approach**

a) New changes are assigned by calling a function

- wherefore useState is returning an array
- where the first value is the variable itself
- and the second value is the update function
  -> array destructuring helps to store both values in separate variables

`const [amountExpenseItem, setAmount] = useState(amount);`

b) Trigger change of state and re-render

- it done by clicking on a button (`<button onClick={clickHandler}>Change Title</button>`)
- and using the 2. parameter setAmount in the click handler

```javascript
const clickHandler = () => {
    setAmount(amountExpenseItem + 1);
    console.log(amountExpenseItem);
  };
```

**WARNING!**

- value doesn't update right away for the next ling
- only after the next re-render

### 2.2.2) setState

- `this.setState()` enables to update the state asynchronously
  - which also triggers a re-render
  - e.g. if the click a button should update UI
- can only be set directly in the constructor
- multiple calls are batched (merged) for performance improvements (IMPORTANT!!!)
- the setState() function has 2 parameters
- Only add the state you want to update!!!

**The following parameters can be passed to setState()**

1. parameter can be a function, or an object

   a) functions:

   - use if you want to update based on the previous state
   - e.g. multiple calls for this.setState()
   - should be mostly used,
   - because for objects all setState functions are merged
   - which would make no sense

   b) object:

   - only need to add the state that should be updated
   - e.g. this.setState(peter.phone='01722831'

2. parameter is a callback function
   - enables to change something after the state was altered
   - this is because setState() is an async function
