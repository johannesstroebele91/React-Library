# 1) Basics

- Stands for JS/TS XML
  - cause HTML is XML in the end
- JSX/TSX wants users to be able to
  - write code that can be read by most browsers
  - and is user-friendly to write
- JSX/TSX files enable you to use HTML in JS files
  - which is normally not possible
- React goes through each file (starting from the App.tsx/js/jsx)
  - when the application is initialized
  - DOES NOT automatically update, when sth changes
  - e.g. button is clicked  
  - but you need to tell React to CHANGE THE STATE
# 2) How JSX/TSX (React) works

In the end, the React code (JSX/TSX files)

- gets transformed behind the scenes into JS
- which can be seen in the `developer tools -> sources -> main.chunk.js`
- (JSX/TSX is just syntactic sugar)

```javascript
function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
```

# 3) ReactDOM dependency

- the method ReactDOM.render() is called from the react-dom' third party library
- which takes two arguments
  1. `<App />` component which references the App.js/ts file using the syntax JSX/TSX
  2. `document.getElementById('root')`
     - is called via the default JS DOM API to get the element 'root'
     - in the `public/index.html` folder
     - It includes the 'root' element,
     - which ReactDOM uses to render the element `<App />` in this place

# 4) React dependency

- React does not need to be imported

  - in modern React (created with `create-react-app`)
  - but needed to be previously
  - now magic happens behind the scenes

## 4.1) Without magic

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

## 4.2) With magic

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
