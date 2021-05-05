# 1) Declarative approach (used by React)

For this approach only the desired target state(s)
- of a component needs to be defined
- and react figures out the steps by itself

React generats and runs the actual JS DOM instructions
- And the updated version of the page is visible in the browser

Example of a desired target state see below

```javascript
function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
```

# 2) Imperative approach (used by VanillaJS)

- For this approach used by VanillaJS
- a lot of code needs to be written
- and this multiple times
- and corrected if updated when changes occur
- Example:

```javascript
function App() {
  const paragraph = document.createElement("p");
  paragraph.textContent = "This is text";
  document.getElementById("root").append(paragraph);
}
```
