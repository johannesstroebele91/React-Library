# 1) Basics

The hook useReducer enables to manage more complex states

- than with the useState hook
- BUT is in turn more complex to use

# 2) Use cases

- multiple states that belong together (e.g. enteredEmail and emailIsValid)
  - managing the same thing
  - just different aspects of it
  - e.g. with useState this could lead to errors
    - because one state could not be updated
    - at the time another state is using it
- multiple states that change together (e.g. setFormIsValid)
  - or are related (dependencies to other states)

# 3) useState vs useReducer

Most of the time you know when you need to use useReducer

- it is practically always used when useState becomes
- cumbersome, error-prone to use and manage,
- easy to write bad, inefficient, buggy code
- or you getting a lot of bugs/ unintentional behaviors

## 3.1) useState: for easier cases

- great for independent pieces of state / data
- great if state updates are easy and limited to a few kinds of updates
- great due to simpler to write (not an overkill)

## 3.2) useReducer: for complex cases

- great for an object as a state
- great for more complex state updates (useReducer function can contain complex updating state logic)
- great because you are guaranteed to work with the lastest state snapshot
- great if you have related pieces of state / data (e.g. form input state)

# 4) Explanation

const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);

useReducer()

- Always returns an array with two values [state, dispatchFn]
- which is why array destructuring can be used here
- to pull out these values and store them in separate constances

state

- is a snapshot used
- in the component re-render cycle

dispatchFn

- is a function that can be used to dispatch
- a new action (i.e. trigger an update of a state)

reducerFn

- this reducerFn (so called reducer function)
  - if automatically triggered
  - once an action is dispatched (via the dispatchFn())
  - which then gets the latest state snapshot
  - and returns the new, updated state

initialState

- an initial state can be set like with useState

initFn

- a function to set the initial state programatically
- in case the initial state is more complex
- e.g. the result of an HTTP request

# 5) Example

This example enables to update a state based on another state (guarantees that code does not run too early)

1. Declare useReducer and initialize
2. Declare useReducer function for the state logic
   1. it can be create oustide of the scope of the component function
   2. because it does not need to interact with
   3. anything inside the component function
3. Use the state in the component as before
4. Use the dispatchFn to update the state as before
5. useEffect enables to updating a state based on another state
6. Stopping unnecessary reruns of the useEffect hook
   1. because if just the value changed, but not the validity
   2. it does not need to run again
   3. The syntax enables to pull out a property of a state object via object destructuring

```javascript
// 2) Declare useReducer function for the state logic
const emailReducer = (state: any, action: any) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state: any, action: any) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props: any) => {
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  // 1) Declare useReducer and initialize
  const [emailState, dispatchEmail] = useReducer<
    React.Reducer<
      { value: string; isValid: boolean },
      { type: string; val?: boolean }
    >
  >(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer<
    React.Reducer<
      { value: string; isValid: boolean },
      { type: string; val?: boolean }
    >
  >(passwordReducer, {
    value: "",
    isValid: false,
  });

  // 6) Stopping unnecessary reruns of the useEffect hook
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // 5) useEffect enables to updating a state based on another state
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  // 3) and 4) use the state and the dispatchFn as before
  const emailChangeHandler = (event: any) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

  };

  const passwordChangeHandler = (event: any) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    formIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};
```
