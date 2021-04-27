# 1) Declarative approach (used by React)

- Developer need only to define the desired target state(s) of a component
- React generats and runs the actual JS DOM instructions automatically
- which in turn update what is visible on the page
- Example of a desired target state see below
  - React generats and runs the actual JS DOM instructions
  - And the updated version of the page is visible in the browser

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

- A lot of code needed to be written
- and this multiple times
- and corrected if updated when changes occur

```javascript
function App() {
  const paragraph = document.createElement("p");
  paragraph.textContent = "This is text";
  document.getElementById("root").append(paragraph);
}
```
