- [1) Basics](#1-basics)
- [2) Naming conventions](#2-naming-conventions)
- [3) Approach](#3-approach)
- [3.1) Creating data store](#31-creating-data-store)
- [3.2) Accessing the data store](#32-accessing-the-data-store)
    - [3.2.1) Provide context](#321-provide-context)
    - [3.2.2) Listen to context](#322-listen-to-context)
      - [3.2.2.1) React hook (more elegant)](#3221-react-hook-more-elegant)
      - [3.2.2.2) Consumers (less elegant)](#3222-consumers-less-elegant)
- [4. Context API limitations](#4-context-api-limitations)

# 1) Basics

The context API (React Context) enables to

- manage app-wide or component-wide states
- via a behind-the-scenes state storage
- which helps to manage data in multiple places
- that would be **inconvenient** to supply via props

The reason for this is that

- forwarding data via multiple "middle man" components (props chains)
- leads to many components having "unnecessary data"

It is possible to use

- one or multiple contexts
- for managing data

# 2) Naming conventions

The folder containing then needed files for this

- are often called
- context, state, or storage

The files inside

- are written small letters and using dash (e.g. auth-context.tsx)
- because they are not a custom component (e.g. MainHeader.tsx)

# 3) Approach

# 3.1) Creating data store

Text as a default state

```javascript
React.createContext("My state!");
```

Object as a default state which enables to:

- manage certain states
- that are defined as properties
- which have a key and a value (is the initial state)

```javascript
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
```

What createContext() returns is

- an object that contains
- a component or multiple components

# 3.2) Accessing the data store

### 3.2.1) Provide context

- Enables also to
  - make the nested data changeable
  - by passing down the value attribute on the Provider
  - each time the data gets changed

The context can be provided

- by wrapping it around the respective component
- that should be able to tab into/ listen the content
- e.g. wrapping the App.tsx file
  - will provide it to the WHOLE app!!!
  - so all of the children are provided with the context

This can be done by

- not only wrapping the object containing components
- but using `.Provider` to access a property that address all of the child components
- and specifying the value that should be used from the content ([Reference](https://de.reactjs.org/docs/context.html))
- e.g. `value={isLoggedIn: isLoggedIn}`
  - 1. isLoggedIn: is the name of the variable that gets passed to the other componente
  - 2. isLoggedIn: is the state specified

Example in App.tsx of [app_task-manager](../4_useEffect-useEffect-reducers-contextApi/app_task-manager/src/App.tsx) and only available in git commit: [be0ac9ed7c7219ca1468ac579079caf7c170e943](https://github.com/johannesstroebele91/React-Library/commit/be0ac9ed7c7219ca1468ac579079caf7c170e943)

```javascript
...
const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={isLoggedIn}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthCon.Provider>
  );
...
```

### 3.2.2) Listen to context

You can listen to the store, context, or state using the:

#### 3.2.2.1) React hook (more elegant)

Enables to manage the state

- can be used to change the function that manages the state
  Approach

1. Expose the context to the respective components
   1. And pass the respective parameters into it
   2. e.g. `<someContextComponent.Provider value={{isLoggedIn: isLoggedIn}}></someContextComponent.Provider>`
2. Declare useContext and pass the context into it `useContext(someContextComponent)`
3. Use the parameters via `context.isLoggedIn`

Example in App.tsx of [app_task-manager](../4_useEffect-useEffect-reducers-contextApi/app_task-manager/src/App.tsx) of the [Git Commit]()

```javascript
import AuthContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }} // provide the parameters via AuthContext
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}
```

Example in Navigation.tsx of [app_task-manager](../4_useEffect-useEffect-reducers-contextApi/app_task-manager/src/App.tsx)

```javascript
const Navigation = (props: any) => {
  // 1) Declare variable with useContext() using the AuthContext
  const context = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <p>
        {/* 2) Use the parameters via context. */}
        {context.isLoggedIn && (
      </p>
      <nav>
  );
};
```

**Outsourcing app management using an the context component**

The context component can also be used to outsource logic

- by creating a separate context management component
- thereby seperating probably complex logic from the App.tsx
- which makes it leaner in the end

1. Oursourcing code to the auth-context.tsx into a new provider component
2. Removing unnecessary code from the App.tsx
3. Wrapping the App.tsx with the provider

```javascript
interface AuthContextProps {
  isLoggedIn: boolean;
  onLogout: () => void;
  onLogin: (email: string, password: string) => void;
}
const AuthContext =
  React.createContext <
  AuthContextProps >
  {
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
  };

export const AuthContextProvider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // !!! useEffect to persit data through reloads and app restarts in 3 steps

  // 2) Declare useEffect for persiting data
  useEffect(
    () => {
      // 2.1) Side-effect function: Work with the previously declared item of the localStorage
      const storedUserLoggedInData = localStorage.getItem("isLoggedIn");
      if (storedUserLoggedInData === "1") {
        setIsLoggedIn(true);
      }
    }, // 2.2) Dependency array: controls when the function is executed
    []
  );

  const loginHandler = (email: string, password: string) => {
    // TODO functionality for checking email and password
    // 1) Create a key value pair in the local storage
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // 3) Remove key afterwards from local storage
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
```

2. Removing unnecessary code from the App.tsx

```javascript
function App() {
  const context = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </>
  );
```

3. Wrap the App component with the provider component

```javascript
ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
```

#### 3.2.2.2) Consumers (less elegant)

[Reference](https://reactjs.org/docs/context.html#contextconsumer)

The Provider component **accepts** a value prop

- to be passed to consuming components
- that are descendants of this Provider.

One Provider can be connected to many consumers

- Providers can be nested
- to override values deeper within the tree.

All consumers that are descendants of a Provider

- will re-render
- whenever the Provider’s value prop changes.

Example in Navigation.tsx of [app_task-manager](../4_useEffect-useEffect-reducers-contextApi/app_task-manager/src/App.tsx)

```javascript
const Navigation = (props: any) => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {context.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {context.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {context.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};
```

# 4. Context API limitations

It is only create for app-wide (component-wide) state management

- so state that affects multiple components
- but NOT a replacement for component configuration

Therefore, it is unfavorable to use it if you want

- to make reusable components
  - props are better for ensuring that component stay reusable
  - e.g. `Button` component
- also not for high frequency changess
  - context API is not optimized for that
  - e.g. state changes every second or faster
  - solution are e.g. Apollo or Redux
- to configure components
  - via props
  - aka short "prop chains" should not be recplaced
