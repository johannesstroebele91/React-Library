- [1) Basics](#1-basics)
- [2) Problems](#2-problems)
- [3) Solution](#3-solution)
  - [3.1) Example: with objects and a interface with props destructuring](#31-example-with-objects-and-a-interface-with-props-destructuring)
  - [3.2) Example: with objects and a class without props destructuring](#32-example-with-objects-and-a-class-without-props-destructuring)
  - [3.3) Example: without objects](#33-example-without-objects)
 
# 1) Basics

- The goal is to pass data between components
  - thereby making components reusable
- **Props** are input / parameters that the component can accept
  - by enabling to pass data to a custom data
  - through props (properties or attributes)
  - which then can be accessed inside the component
- Should be treated as an immutable object
  - NEVER overwrite the props value!
  - because it should come from the caller
- Such dynamic date can be outputted
  - i.e. in the returned JSX code
  - by using `{}` which a JS expression in between them


# 2) Problems

- Data passed to via props
  - not only includes the passed data
  - but other information (e.g. children)

```javascript
function Todos(props: any) {
  return (
    <ul>
      {}
      <li>Learn React</li>
      <li>Learn TypeScript</li>
    </ul>
  );
}
export default Todos;
```

# 3) Solution

[Pass data from parent to child](./props-parent-to-child.md)
[Pass data from child to parent](./props-child-to-parent.md)

