- [1) Explanation](#1-explanation)
- [2) Relevance](#2-relevance)
  - [2.1) Defining what effects ARE NOT there for](#21-defining-what-effects-are-not-there-for)
  - [2.2) Defining what effects ARE there for](#22-defining-what-effects-are-there-for)
  - [2.3) Differences](#23-differences)
- [3) Approach via `useEffect()` hook](#3-approach-via-useeffect-hook)
- [4) Example](#4-example)
- [5) Relevance of useEffect](#5-relevance-of-useeffect)
- [6) How to see the items in the local storage](#6-how-to-see-the-items-in-the-local-storage)

# 1) Explanation

The useEffect hook enables to

- store a state where it persists the reload
- and every time the app start
- the app checks if a state was persited

The state can be stored in the browser storage via

- local storage: easy to use
- cookies: a little more difficult

# 2) Relevance

## 2.1) Defining what effects ARE NOT there for

Effects (aka side-effects) are not for things that mainly React is there for such as:

- render the UI
- react to user input
- re-render the UI based on the input

In more detail:

- evaluate & Render JSX
- manage State & Props
- React to User Events & Input
- re-evaluate Component upon State & Prop Chances

## 2.2) Defining what effects ARE there for

Effects solve the following tasks

- things that happen outside of the normal component evaluation and render cycle
- especially since they might block/delay rendering (e.g http requests)
- So they are not there to bringing something onto the screen
- but help to make that happen indirectly

**Examples**

- sending HTTP requests to backend servers
- storing something in the browser storage (e.g. local storage)
- set & manage timers or intervals
- handling potential errors

## 2.3) Differences

Often these side-effects (e.g. HTTP requests)

- should be called only once
- AND NOT each time the app re-renders
- which is the STANARD React behavior

So, they need to be handeling separately from React

- because it would create bad behaviors such as
- bugs, loops, too many http requests, or re-execute unfinished http requests


# 3) Approach via `useEffect()` hook

1. Create a key value pair in the local storage

   1. Set the value of the key isLoggedIn to 1 to indicate that user is logged in
   2. `e.g. localStorage.setItem("isLoggedIn", "1");`
      1. argument: identifier as a string (e.g. isLoggedIn)
      2. argument: place of storage as a string (e.g. '1' that the user is logged in, '0' not )

2. Declare useEffect for persiting data

   1. `() => {...}` declares a function (side-effect code)
      - that should be executed after every component evaluation
      - if the specified dependencies changed
   2. `[dependencies]` is an array of dependencies
      1. Without dependencies it only runs once
      2. at the start (e.g. `[]`)

3. Work with the previously declared item of the localStorage
   1. This can be done inside of the side-effect code
   2. e.g. get the value of they key from the local storage to work with it
4. Remove the item after it is no longer needed

# 4) Example

The hook useEffect can be used
- to persit data through reloads and app restarts
- in 4 steps

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

# 5) Relevance of useEffect

- The 3) step needs to be moved
  - inside of the useEffect arrow function
  - to because it would create an infinitive loop
- Writing it inside enates to execute the function only,
  - if the dependencies, specified in the 2. argument of useEffect, gets changed
  - and checks this dependency only after each rendering of the component

# 6) How to see the items in the local storage

1. Go to Developer Tools
2. Application
3. Local Storage
