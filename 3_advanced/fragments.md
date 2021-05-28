# 1) Explanation

You can't return more than 1 "root" JSX element

- but of course that 1 root element can have multiple children
- This is due to the normal JS syntax
- that functions can only return
  - 1 element
  - or an object/array of elements

# 2) Examples

## 2) Working examples

### 2.1) React Fragments

This syntaxes down below render empty wrapper components

- that inject the nested elements
- via the children props

**Shortcut for React Fragments (project needs to be setup for this)**

```javascript
return (
  <>
    <h2>Hi there!</h2>
    <p>This does not work!</p>
  </>
);
```

**Standard (always works)**

```javascript
return (
  <React.Fragment>
    <h2>Hi there!</h2>
    <p>This does not work!</p>
  </React.Fragment>
);
```

### 2.2) Using a DIV

- if they have semantic or structural meaning

```javascript
return (
  <div className="header">
    <h2>Hi there!</h2>
    <p>This does not work!</p>
  </div>
);
```

### 2.3) Using a custom Wrapper component

A custom wrapper component can be used to

- pass all of the content between the opening and closing tag
- via the [children props](../2_basics/props/props-basics.md)
- without creating a unnecessary HTML element
- BUT is unnecessary due to [React fragments](#21-react-fragments)

Example Wrapper

```javascript
const Wrapper = (props: any) => {
  return props.children;
};

export default Wrapper;
```

Example Other Custom Components (e.g. AddUser)

```javascript
import Wrapper from "...";

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

## 3) Bad examples

### 3.1) Using a DIV without semantic or structural meaning

- if a <div> is not needed as a return element (e.g. for semantic or structural meaning)
- this approach will lead to "<div> soup" (aka tons of unnecessary <div>s)

```javascript
return (
  <div>
    <h2>Hi there!</h2>
    <p>This does not work!</p>
  </div>
);
```

### 3.2) Using an ARRAY

- need to remove "{}" because it is an array
- and also need to provide a key for each element as shown below
- (like a key is needed for dynamic mapping )

```javascript
return (
  [
    <h2 key="h2">Hi there!</h2>
    <p key="p">This does not work!</p>
  ]
);
```

```javascript
return (
    React.createElement('h2', {}, 'Hi there!')
    React.createElement('p', {}, 'This does not work!')
    );
```
