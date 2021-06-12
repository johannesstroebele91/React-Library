- [1) Approaches for useEffect](#1-approaches-for-useeffect)
- [2) Use cases for different dependencies](#2-use-cases-for-different-dependencies)
  - [2.1) Completely empty dependencies ``](#21-completely-empty-dependencies-)
  - [2.2) Empty array dependencies `[]`](#22-empty-array-dependencies-)
  - [2.3) Specific dependencies `[enteredEmail, enteredPassword]`](#23-specific-dependencies-enteredemail-enteredpassword)
- [3) Cleanup function](#3-cleanup-function)
  - [3.1) Completely empty dependencies WITH CLEANUP FUNCTION](#31-completely-empty-dependencies-with-cleanup-function)
  - [3.2) Empty array dependencies WITH CLEANUP FUNCTION](#32-empty-array-dependencies-with-cleanup-function)
  - [3.3) Specific dependencies `[enteredEmail, enteredPassword]` WITH CLEANUP FUNCTION](#33-specific-dependencies-enteredemail-enteredpassword-with-cleanup-function)
- [4) Adding Nested Properties As Dependencies To useEffect](#4-adding-nested-properties-as-dependencies-to-useeffect)

# 1) Approaches for useEffect

Code of project changed, therefore refer to git commit: [27ef5348f073c6a4d80138814c5a591eab3afee1](https://github.com/johannesstroebele91/React-Library/commit/27ef5348f073c6a4d80138814c5a591eab3afee1)

1. Create a key value pair in the local storage
   1. Set the value of the key isLoggedIn to 1 to indicate that user is logged in
   2. `e.g. localStorage.setItem("isLoggedIn", "1");`
      1. argument: identifier as a string (e.g. isLoggedIn)
      2. argument: place of storage as a string (e.g. '1' that the user is logged in, '0' not )
2. Declare useEffect for persiting data (function gets only executed if the dependencies got changed )
   1. “Side-effect function" `() => {...}`
      1. is executed after every component evaluation
      2. if the specified dependencies changed
      3. Enables to work with the previously declared item of the localStorage
      4. e.g. get the value of they key from the local storage to work with it
   2. Dependency array `[dependencies]`
      1. **Use cases for different dependencies are stated below**
3. Optional: Remove the item after it is no longer needed

**IMPORTANT to know for step 2.1**

- that the effect function needs to be moved
  - inside of the useEffect arrow function
  - because it would otherwise create an infinitive loop
- Writing it inside enables to executes the function only,
  - if the dependencies, specified in the 2. argument of useEffect, gets changed
  - whereby this dependency is only checked for each rendering of the component

# 2) Use cases for different dependencies

The useEffect use can be mostly used in these ways

## 2.1) Completely empty dependencies ``

Triggers the effect function

- after each time the components renders
  - so after the initial rendering
  - AND also after each additional rendering

```javascript
useEffect(() => {
  console.log("Effect running");
});
```

## 2.2) Empty array dependencies `[]`

Triggers the execution of the effect function,

- only once, after the component got rendered for the first time

See App.tsx in [app_login-page](./app_login-page/src/App.tsx)

```javascript
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 2) Declare useEffect for persiting data
  useEffect(() => {
    // 3) Work with the previously declared item of the localStorage
    const storedUserLoggedInData = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInData === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email: string, password: string) => {
    // TODO functionality for checking email and password
    // 1) Create a key value pair in the local storage
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // 4) Remove key afterwards from local storage
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
  );
}
```

## 2.3) Specific dependencies `[enteredEmail, enteredPassword]`

Triggers the effect function

- each time the specified variables or functions
- (mostly state and props) change

DON'T add these dependencies

- setState functions, cause React guarantees that they never change
- built-in" APIs or functions like fetch(), localStorage
  - because these are functions are built-into the browser and hence available globally
  - and are not related to the React component render cycle (do not change)
- variables or functions you might've defined OUTSIDE of your components
  - e.g. you create a new helper function in a separate file

Login.tsx in [app_login-page](./app_login-page/src/App.tsx) shows how this can be done in 3 steps:

```javascript
const Login = (props: any) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  // 1) Example of useEffect being used for updating the React state
  useEffect(() => {
    // 2) Specify the effect function that should be executed
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  }, // 3) Specify the dependencies that should be monitored for changes
  [enteredEmail, enteredPassword]);

  ...
}
```

Additional Timer example:

timerIsActive

- is added as a dependency
- because it's component state that may change
- when the component changes
- (e.g. because the state was updated)

timerDuration

- is added as a dependency
- because it's a prop value of that component
- so it may change if a parent component changes that value
- (causing this MyComponent component to re-render as well)

setTimerIsActive

- is NOT added as a dependency
- because it's that exception
- State updating functions could be added
- but don't have to be added
- since React guarantees that the functions themselves never change

myTimer

- is NOT added as a dependency
- because it's not a component-internal variable
- (i.e. not some state or a prop value)
- it's defined outside of the component and changing it (no matter where)
- wouldn't cause the component to be re-evaluated

setTimeout

- is NOT added as a dependency
- because a built-in API (built-into the browser) does not change
- because it's independent from React and your components

```javascript
import { useEffect, useState } from "react";

let myTimer;

const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);

  const { timerDuration } = props; // using destructuring to pull out specific props values

  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
};
```

# 3) Cleanup function

Ref: [Effects with and without cleanup](https://reactjs.org/docs/hooks-effect.html)

For example, we might want to set up a subscription

- to some external data source
- which is why is important to clean up the data
- so a memory leak is NOT introduced

IMPORTANT!

- the cleanup function gets executed
- before the actual "effect function"

## 3.1) Completely empty dependencies WITH CLEANUP FUNCTION

TODO add what that does

```javascript
useEffect(() => {
  console.log("Effect running");
  return (() => }{
  console.log("Effect cleaned up");
  })
});
```

## 3.2) Empty array dependencies WITH CLEANUP FUNCTION

TODO add what that does

```javascript
useEffect(() => {
  console.log("Effect running");
  return (() => }{
  console.log("Effect cleaned up");
  })
}, []);
```

## 3.3) Specific dependencies `[enteredEmail, enteredPassword]` WITH CLEANUP FUNCTION

1. Add a `setTimeout()` function and paste the effect function inside
2. Return a cleanup function at the end of the effect function
   1. e.g. `return () => { clearTimeout(identifierTimer);};`
   2. In order to not have multiple timers running at the same time
      1. because each timer needs to be saved
      2. and cleared if the next timer starts before it finishes

This can be done in 5 steps as can be seen in Login.tsx in [app_login-page](./app_login-page/src/App.tsx):

```javascript
const Login = (props: any) => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    // 1) Example of useEffect being used for updating the React state (specify dependencies)
    useEffect(
    () => {
        // 4) Wait for 1000ms until we execute a function
        const identifierTimer = setTimeout(() => {
        console.log("Form validity check");
        // 2) Specify the effect function that should be executed
        setFormIsValid(
            enteredEmail.includes("@") && enteredPassword.trim().length > 6
        );
        }, 1000);

        // 5) Run a Cleanup function, to clear the timer in case it did not finish in time
        return () => {
        console.log("cleanup");
        clearTimeout(identifierTimer);
        };
    }, // 3) Specify the dependencies that should be monitored for changes
    [enteredEmail, enteredPassword]
    );
  ...
}
```

# 4) Adding Nested Properties As Dependencies To useEffect

It is a common approach to

- use Object destructuring
- to add object properties as dependencies
- to useEffect()

```javascript
const { someProperty } = someObject;
useEffect(() => {
  // code that only uses someProperty ...
}, [someProperty]);
```

IMPORTANT!

- the key thing is NOT that destructuring can be used
- BUT specific properties instead of the entire object can be passed as a dependency
- which is why this solution would also work

```javascript
useEffect(() => {
  // code that only uses someProperty ...
}, [someObject.someProperty]);
```

WARNING!

- this solution should be avoided
- because the effect function would re-run
- whenever any property of someObject changes,
- so not just the one property (someProperty)

```javascript
useEffect(() => {
  // code that only uses someProperty ...
}, [someObject]);
```
