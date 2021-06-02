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

Example in App.tsx of [app_task-manager](../4_useEffect-useEffect-reducers-contextApi/app_task-manager/src/App.tsx) and only available in git commit: []()

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

1. React hook (typically)



2. Consumers

[Reference](https://reactjs.org/docs/context.html#contextconsumer)

The Provider component accepts a value prop
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
