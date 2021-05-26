- [1) Basics](#1-basics)
- [2) WARNING!!!](#2-warning)
- [3) Example](#3-example)
  - [3.1) Example with input](#31-example-with-input)
  - [3.2) Declare useState](#32-declare-usestate)
    - [3.2.1) Example for primitive types (e.g. string, ...)](#321-example-for-primitive-types-eg-string-)
    - [3.2.2) Example for reference types (e.g. objects, ...)](#322-example-for-reference-types-eg-objects-)
  - [3.3) Trigger the new state](#33-trigger-the-new-state)
  - [3.4) Create a new state](#34-create-a-new-state)
    - [3.4.2) Example for primitive types (e.g. string, ...)](#342-example-for-primitive-types-eg-string-)
    - [3.4.2) Example for reference types (e.g. objects, ...)](#342-example-for-reference-types-eg-objects-)
  - [3.5) Use new value](#35-use-new-value)
- [4) Approach](#4-approach)
  - [4.1) Multiple States](#41-multiple-states)
  - [4.2) One State](#42-one-state)
- [5) Use Cases](#5-use-cases)

# 1) Basics

The function useState is needed because React

- does not re-render the page by itself
- if the value of a variable changes

So useState monitors a variable for change

- by creating a new state (NOT UPDATE A STATE)

The function useState returns an array with exactly two elements

1. element: name of the variable which state should be change
2. element: is always a function

- which you can call to set a new value for your state.
- Calling that function will then also trigger React to re-evaluate the component

# 2) WARNING!!!

Because a new state is created

- old values are not automatically passed,
- but like in this explanation [4) Usage of a previous state](./../useState/useState-multiple-states.md)

It is one of the most important **React hooks**

- all name of hooks start with "uf"
- all must be called inside of the React component function
- NOT outside these functions
- OR nested function (only 1 exception)

# 3) Example

## 3.1) Example with input

A State of variables can be changed in 7 steps as shown below in the example

```javascript
const ExpenseForm: React.FC = () => {
  // 1) Declare useState
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event: any) => {
    // 4) Check if state was really changed
    if (enteredTitle.trim().length === 0) {
      return;
    }
    // 5) Create a new state
    setEnteredTitle(event.target.value);
    // WARNING! value doesn't update right away for the next line
    // BUT only after the next re-render
    console.log(amountExpenseItem);

    // 6) Reset states
    setEnteredTitle("");
  };
  return (
    <>
      <label>Title</label>
      {/* 2) Trigger the change of state using onChange */}
      {/* 7) Feed the new state back into the input via value */}
      <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
      {/* ALT for step 7) Displays the variable based on the the new state */}
      <p>{amountExpenseItem}</p>
    </>
  );
};
```

## 3.2) Declare useState

Initialize useState with an initial value (e.g. amount)

- `const` can be used because React throws away all variables for each new state

### 3.2.1) Example for primitive types (e.g. string, ...)

```javascript
const [enteredTitle, setEnteredTitle] = useState("");
```

Store with array destructuring in separate variables the two returned values
a) value is the variable itself
b) value is the update function

### 3.2.2) Example for reference types (e.g. objects, ...)

- IMPORTANT! the type state needs to be declared
- and the state initialized!

```javascript
  const [errorModal, setErrorModal] = useState<{
    title: string;
    message: string;
  }>({ title: "", message: "" });
```

## 3.3) Trigger the new state

Whenever the state should change

- it needs to be triggered in some form
- e.g. by an event handler such as click event:
  - `<input onChange={titleChangeHandler}</input>`

**DO NOT CALL A FUNCTION!**

- because it would be only called once, when the JSX code is returned initially
- AND NOT when the click occurs - SOLUTION:
- a) a arrow functions to directly trigger a function inside the {}
- b) or point to the handler (!!! NOT A FUNCTION CALL)\*/}

## 3.4) Create a new state

- Call the 2. value (updating function)

- **WARNING!**
  - a change in the variable doesn't create a new state
  - right away for the next line
  - but only after the next re-render
- event.target.value
  - saves the WHOLE string, not only the character
  - is always a string (even if input is a number)

### 3.4.2) Example for primitive types (e.g. string, ...)

```javascript
const titleChangeHandler = (event: any) => {
  setEnteredTitle(event.target.value);
};
```

### 3.4.2) Example for reference types (e.g. objects, ...)

```javascript
setErrorModal({
  title: "Invalid age",
  message: "The age of the user is invalid",
});
```

## 3.5) Use new value

- Use the 1. value (e.g. amountExpenseItem)
- for outputting data in the HTML
- e.g. `<p>{amountExpenseItem}</p>`

# 4) Approach

## 4.1) Multiple States

- **Preferred approach by Maximilian Scharzmüller**
- See [useState-multiple-states](useState-multiple-states)
- See the following git Commit: [113ce035f92da3a1d32429b12b5253d0df407707](<[Github](https://github.com/johannesstroebele91/React-Library/commit/113ce035f92da3a1d32429b12b5253d0df407707)>)

## 4.2) One State

- See [useState-one-state](useState-one-state.md)
- See Github Commit: [113ce035f92da3a1d32429b12b5253d0df407707](<[Github](https://github.com/johannesstroebele91/React-Library/commit/113ce035f92da3a1d32429b12b5253d0df407707)>)

# 5) Use Cases

A new state might be needed for the following reasons:

- user events (e.g. click)
- Http requests ( create a new state based on the Http response we got back)
- setTimeout() (updating state because a timer expired)
- ...
