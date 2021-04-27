# Basics

- are called "smart" or stateful
- they have a state,
  - which is why they can implement logic for controlling the state
  - such as lifecycle methods e.g. do sth. when the components renders, mounts, update ...
- are dependent on the parent class React.Component
- enables to inject data into the component
  - by passing props down to the class component
  - props are accessible via "this.props"
- has "refs" keyword to reference elements in the components (instead of document.
- getelementbyid() )

```javascript
class Welcome extends React.Component {
  // Render methods return the UI
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
