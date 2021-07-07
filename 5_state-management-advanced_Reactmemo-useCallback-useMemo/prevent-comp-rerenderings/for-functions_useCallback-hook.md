- [1. Goal](#1-goal)
- [2. How it works](#2-how-it-works)
- [3. Example](#3-example)
- [4. Dependencies](#4-dependencies)

# 1. Goal

The hook useCallback enables

- memorize function via React
- thereby to stop React from re-execute functions
- multiple times during the re-render cycles of a component

So changing a function only

- when the previous function does not match the new function
- after the state update
- e.g. when a props of references types changed
- `props.onClick === props.previous.onClick` // Output: true

# 2. How it works

useCallback does that by enabling to

- store a function across component executions
- This allows to tell React to save a function in memory
  - (this function is then not re-created for every execution)
  - which leads to e.g. `props.onClick === props.previous.onClick` yielding true
    - This is due to the pointer for the function
    - staying the same before and afterwards changes of the props

Without useCallback obj1 does not equal obj2

- let obj1 = {};
- let obj2 = {};
- obj1 === obj2 // Output: false

With useCallback the function gets saved in Reacts' internal storage

- and compare only this function
- obj2 = obj1 // Assigning the ob
- obj2 === obj1 // Output: true

# 3. Example

The hook can be used in 2 steps:

1. tell React that this function will never change (why? we have to know!)
2. Specify the dependencies similar to the useEffect hook
   - btw. functions like setShowParagraph do not need to be stated
   - because they are saved already by React in memory

Example in App.tsx of app_simple-toggle-button

```javascript
const toggleParagraphHandler = useCallback(() => {
  setShowParagraph((prevShowParagraph) => !prevShowParagraph); // cleaner way to use prevState
}, []);
```

# 4. Dependencies

Specify the dependencies similar to the useEffect hook

1. important! functions like setShowParagraph
   - do not need to be stated
   - because they are saved already by React in memory
2. on the other hand, variables that are needed in the function
   - need to be added e.g. allowToggle
   - which results in the function not being skipped,
   - but actually it is re-executed if e.g. allowToggle changes

Example in App.tsx of app_simple-toggle-button

```javascript
const toggleParagraphHandler = useCallback(() => {
  if (allowToggle) {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph); // cleaner way to use prevState
  }
}, [allowToggle]);
```
