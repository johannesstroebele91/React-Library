- [1. Basics](#1-basics)
- [2. State updates](#2-state-updates)
- [3. Postponed state update via scheduling](#3-postponed-state-update-via-scheduling)
- [4. Reasons for postponing updates](#4-reasons-for-postponing-updates)
- [5. Managing order of state changes](#5-managing-order-of-state-changes)
- [6. State batching - calling state updateing functions successively](#6-state-batching---calling-state-updateing-functions-successively)

# 1. Basics

Reference: https://academind.com/tutorials/what-is-state

The state (e.g. via useState, useReducer) in React is

- NOT lost
- or needs to be reinitialize
- because React saves the state and the values
- as long as it is rendered in the DOM

However!

- the state of conditional component might be deleted
- when they are not rendered

# 2. State updates

The starting point is a code with

- an React component (e.g. component named <MyProduct/>)
- where a state is managed via useState (e.g. state named 'DVD')
- that is eventually updated (e.g. setNewProduct('Book') -> changes the product from 'DVD' to 'Book')

# 3. Postponed state update via scheduling

State updates happen not immediately

- but are only schedule via the setter function (e.g. setNewProduct('Book'))
- as can be seen in the following example
- (most often the time is neglegible)

What happens behind the curtain is

- that the state 'DVD' is NOT instantly updated with 'Book'
- after setNewProduct finishes execution
- BUT these state updating function (e.g. setNewProduct)
- only SCHEDULE a state update with the data 'Book' for later

# 4. Reasons for postponing updates

A state update can be postponed because of

- other performance intensive tasks at the same moment
- and tasks that have a higher priority
- and follows an order only for state updates of the same type

Example

- user input has a higher priority
- than changing some text on the screen

# 5. Managing order of state changes

React manages the order of state changes but you can adapt the order via:

1.  Declaring dependencies for hooks like useEffect, ...
    - (e.g. `useSomeHook(() => {... setFormIsValid(emailIsValid && passwordIsValid)}, [emailIsValid, passwordIsValid])`)
    - you are guaranteed to get the latest state
2.  AND Passing a parameter (e.g. prevShowParagraph)
    - to the setShowParagraph() function
    - enables to ensure that the previous and the current state
    - are available for managing them
    - as can be seen in this example:

App.tsx in app_how-react-works

```javascript
const toggleParagraphHandler () => {
  if (allowToggle) {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }
};
```

# 6. State batching - calling state updateing functions successively

Calling multiple state updating functions successively

- those functions are batched together
- and are scheduled in order
  - Therefore JUST "1" SCHEDULED updating process!
  - and JUST "1" component re-execution

Example

```javascript
const navigateHandler = (navPath) => {
  setCurrentNavPath(navPath);
  // State of navPath was not updated here, but only scheduled
  setDrawerIsOpen(false);
};
```
