- [1. Basics](#1-basics)
- [2. Use cases](#2-use-cases)
- [3. Approach](#3-approach)
- [4. Issues resetting useRef](#4-issues-resetting-useref)
- [5. Example](#5-example)
- [6. Making refs work for custom components (forwardRef)](#6-making-refs-work-for-custom-components-forwardref)

# 1. Basics

Refs enables to get user input (like useState)

- so it gives you access to other DOM element
- and enables you to work with them
- (setup a connection btw a HTML element and JS/TS code)

# 2. Use cases

Simlar as for useState for e.g. managing inputs

- BUT it is much quicker than useState
- if the goal is to only READ a value
- NOT write it

useRef enables to build uncontrolled component

- where the internal state (value in them)
- is not controlled by React
- but it relies on the default behavior of the input
- and the value is just fetched by a React feature

# 3. Approach

1. import { useRef } from "react";
2. declare ref using useRef();
   1. initialize with null and tell TypeScript that an HTMLInputElement is expected
   2. (e.g. `const usernameInputRef = useRef<HTMLInputElement>(null);`)
3. connect TS to HTML element using ref={} attribute (e.g. `<input ref={usernameInputRef}>`)
4. Reading data from the input (e.g. `const enteredUsername = usernameInputRef.current?.value;`)
5. Use the value `enteredUsername` as needed
6. Inputs needs to be resetted directly by manipulating the DOM
   1. which would normally not be advised (but here its ok)
   2. e.g. `usernameInputRef.current!.value = "";`

# 4. Issues resetting useRef

To reset useRef

- you need to either manipulate the DOM
- e.g. `usernameInputRef.current!.value = "";`
- which is bad practice
  - you should leave such stuff normally to React,
  - but here not possible

Alternatively this can be done using

- a reset function on the form (e.g. `formRef.current.reset();` )
- which needs to be reflected in the HTML (e.g. `form ref={formRef}`)
- Ref: https://stackoverflow.com/a/62413386/11823182

# 5. Example

useRef can be used using these 6 steps:

```javascript
  // 1. import useRef
import { useRef } from "react";

const AddUser: React.FC<AdduserProps> = ({ onAddUser }) => {

  // 2. Declare useRef()
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const addUserHandler = (event: any) => {
    event.preventDefault();

    // 4. Reading data from the input
    const enteredUsername = usernameInputRef.current?.value;
    const enteredAge = ageInputRef.current?.value;

   // 5. Use the value
    if (enteredUsername !== undefined || enteredAge !== undefined) {
      }
      // Pass new user to the parent (cast age to number)
      onAddUser(enteredUsername!, +enteredAge!);

      // 6. WARNING: Reset the value directly in the DOM
      // Such operations should normally be only done by React
      // THEREFORE this is an edge case
      usernameInputRef.current!.value = "";
      ageInputRef.current!.value = "";
    }

  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          {/* 3. Use ref to connect the TS to the HTML element */}
          <input id="username" type="text" ref={usernameInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    <>
  );
};
```

# 6. Making refs work for custom components (forwardRef)

See [useImperativeHandle-hook.md](../../4_useEffect-useEffect-useReducer-useRef-contextApi/hooks/useImperativeHandle-hook.md) for a detailed explanation

Problem is that ref does not work

- for custom components
- out of the box

Instead in the respective custom component

- by passing the ref to the custom component
- and changing the custom component using React.forwardRef
- as shown in another [Input.tsx file for the food order app](../../4_useEffect-useEffect-useReducer-useRef-contextApi/app_food-order-system/src/components/UI/Input/Input.tsx)
