# 1) Relevance

**Without changes to the state an app is in the end static**

State enable apps to be

1. interactive: can react to clicks and date entered by users
2. reactive: app changes when certain things happen

The state is fully controlled by the component

- should be treated as immutable
- and is on a PER COMPONENT bases
- even for multiple e.g. ExpenseItem components

Problem example:

- Variables can be altered
  - by the event handler
  - by declaring them in the component
  - like this `let amountExpense = title;`
- BUT: this does not re-render the UI
  - only the values in the console are updated
  - **SOLUTION: STATE!!!**

WARNING:
- only a new state is created by this method
- not the old state updated
- so the old variables from the previous state needs to passed
- to the new state

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