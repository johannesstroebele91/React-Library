# 1) Basics

A functional component in React

- is practically just a JS function (regular or arrow function)
- which returns HTML code and is exported 

# 2) Functionalities 
- are called "dumb" or "stateless"
  - because they have NO state and only accept data
  - Can accept and use props
  - no lifecycle methods (e.g. componentDidMount)
  - no render method (simply return the UI)
  - no "refs" keyword to reference elements
- today: the new stanard
  - use React Hooks to manage the state
- prior only used for simple representational UI
  - e.g. input component
  - used if no state management is needed

Example:

```javascript
import React from "react";

function Example(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Example;
```

# 3) Usage of components
* The component created above can be imported
* using an import statement
* and inserting it into the HTML
* like any other HTML element using:
  * `<Example/>`
  * or `<Example></Example>`
Example:

```javascript
import React from "react";
import Example from './Example';

function App() {
  return (
    <div>
      <Example/> // short spelling
      <Example></Example> // long spelling
    </div>
  );
}

export default App;

```