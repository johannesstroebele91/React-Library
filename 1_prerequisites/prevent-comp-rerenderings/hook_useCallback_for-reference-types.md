- [1) Goal](#1-goal)
- [2) How it works](#2-how-it-works)
- [3) Example](#3-example)

# 1) Goal

The hook useCallback enables to tell React

- to re-execute a certain component
- only under certain circumstances
- e.g. when a props of references types changed
- `props.onClick === props.previous.onClick` // Output: true

# 2) How it works

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

# 3) Example

The hook can be used in 2 steps:

1. tell React that this function will never change (why? we have to know!)
2. Specify the dependencies similar to the useEffect hook
   - btw. functions like setShowParagraph do not need to be stated
   - because they are saved already by React in memory

```javascript
const toggleParagraphHandler = useCallback(() => {
  setShowParagraph((prevShowParagraph) => !prevShowParagraph); // cleaner way to use prevState
}, []);
```
