- [1) Basics](#1-basics)
- [2) Problems](#2-problems)
- [3) Solution](#3-solution)
- [4) Children props](#4-children-props)

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

# 4) Children props

Children props holds all of the content

- that gets passed between the opening and closing tag
- of the custom component

Example Wrapper

```javascript
const Wrapper = (props: any) => {
  return props.children;
};

export default Wrapper;
```

Example Other Custom Components (e.g. AddUser)

```javascript

import Wrapper from "..."

const AddUser: React.FC<AdduserProps> = ({ onAddUser }) => {
  return (
    <Wrapper>
      {showErrorModal && (
        <ErrorModal
          onCloseModal={closeModalHandler}
          title={errorModal.title}
          message={errorModal.message}
        />
      )}
      <Card className={classes.input}>
        {/* The module.css can be accessed using classes.input */}
        <form onSubmit={addUserHandler}>
          {/* htmlFor connects label to the input id*/}
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={(event: any) => setEnteredUsername(event.target.value)}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={(event: any) => setEnteredAge(event.target.value)}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
```