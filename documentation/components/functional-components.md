# Basics

- are just basic JavaScript functions (regular or arrow function)
- are called "dumb" or "stateless"
  - because they have NO state and only accept data
  - Can accept and use props
  - no lifecycle methods (e.g. componentDidMount)
  - no render method (simply return the UI)
  - no "refs" keyword to reference elements
- mostly used for simple representational UI
  - e.g. input component
  - used if no state management is needed
- can use React Hooks (enables to use state / logic, but more complicated)

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Peter" />
      <Welcome name="Nora" />
    </div>
  );
}
```
