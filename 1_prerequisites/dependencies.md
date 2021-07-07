# 1. Basics

- From a dependency or library,
  - functions and variables can be accessed
  - e.g. `ReactDOM.render( <React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root')`
- Dependencies are injected using import statements
  - e.g. `import ReactDOM from 'react-dom';` imports a ReactDOM object from the 'react-dom' third party library
- such libraries need to be stated in the package.json before being able to use
- the case of react library can it be skipped in react projects (`import React from 'react';`)

# 2. React dependency

- React does not need to be imported

  - in modern React (created with `create-react-app`)
  - but needed to be previously
  - now magic happens behind the scenes

## 2.1. Without magic

- React needs to be imported always
- After the definition of the wrapper root element
  - ,which is the first element,
  - an infinite number of elements can be defined
- This also explains why only one thing needs to be returned
  a) an array could be returned but not multiple elements side by side like it would be here
  b) a wrapper is used here (has child elements)

```javascript
import React from "react";
return React.createElement(
  "div",
  { className: "none" },
  React.createElement("h2", {}, "Expense Tracker"),
  React.createElement(Expenses, { items: expenses })
);
```

## 2.2. With magic

- React does not need to be imported
- And writing code is much faster

```javascript
return (
  <div className="none">
    <h2>Expense Tracker</h2>
    <Expenses item={expenses} />
  </div>
);
```
