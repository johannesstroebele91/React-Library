- [1) Standard in React](#1-standard-in-react)
- [2) Approaches for scoping css](#2-approaches-for-scoping-css)
  - [2.1) Styled Components Package (3rd party library)](#21-styled-components-package-3rd-party-library)
    - [2.1.1) Standard example](#211-standard-example)
    - [2.1.2) Conditions example using props inside of styles](#212-conditions-example-using-props-inside-of-styles)
    - [2.1.3) Conditions example without props](#213-conditions-example-without-props)
  - [2.2) CSS Modules](#22-css-modules)

# 1) Standard in React

The stanard case in react is

- that css files are not scoped
- so all of the classes are available globally (the whole app)
- BUT you need to be VERY CAREFULL in larger projects

# 2) Approaches for scoping css

## 2.1) Styled Components Package (3rd party library)

Enable to embed css into JSX/TSX files

### 2.1.1) Standard example

**Setup**

Styled Components scopes the styling by generating unique class names

Ref: [https://styled-components.com/](https://styled-components.com/)

1. Quit the server
2. Install the package `npm install --save styled-components`
3. Install the necessary types `npm i --save-dev @types/styled-components`
4. Install the extension "vscode-styled-components"
5. Use it like in the example
6. It needs to be used by declaring it via
   - e.g. ` const Button = styled.button``;  `
   - but other HTML elements like `styled.h1`, ... are also possible

**Example**

See components Button and CourseInput in [Git Commit d4a3b4b47d2d394f4f90768b4542f729046d2be1](https://github.com/johannesstroebele91/React-Library/commit/d4a3b4b47d2d394f4f90768b4542f729046d2be1)

` const Button = styled.button``;  `

The button from `styled.button`

- is a special method on this styled object
- styled: a object that is imported from the package
- button: a method on the styled object

This special method is called

- via back ticks `` (default javascript syntax)
- to pass the content in a special way to the button method
- (but is besides that executed as a normal function)
  tact template literal syntax

Styles need to be written

- without {} for the respective tag
- and & used for states such as "focus", ...

Media Queries

- are written like normally
- e.g. shown below

```javascript
import "./Button.css";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
};

export default Button;
```

**BEFORE**

```javascript
import "./Button.css";

const Button = (props: any) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
```

### 2.1.2) Conditions example using props inside of styles

This is done using:

- in the HTML (e.g. `<FormControl invalid={!isValid}>`)
- and defining conditional CSS inside the respective styled components
- and defining a FormControlProps regarding TypeScript (e.g. interface FormControlProps {invalid:boolean;})

FormControl

```javascript
import { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";

interface FormControlProps {
  invalid: boolean;
}
const FormControl =
  styled.div <
  FormControlProps >
  `
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ invalid }) => (invalid ? "red" : "black")}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${({ invalid }) => (invalid ? "red" : "#ccc")};
    background: ${({ invalid }) => (invalid ? "salmon" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

// CourseInput

interface onAddGoalProps {
  onAddGoal: (enteredValue: string) => void;
}

const CourseInput: React.FC<onAddGoalProps> = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: any) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
    setEnteredValue("");
    setIsValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
```

### 2.1.3) Conditions example without props

This is done using:

- in the HTML part (e.g. `<FormControl className={isValid && "invalid"}>`)
- and defining separate invalid classes using the styled components
- and defining a FormControlProps regarding TypeScript (TODO currently workaround using `<any>`)

**CourseInput component**

TODO interface props needs to be fixed!!!

```javascript
const FormControl =
  styled.div <
  any >
  `
&.invalid label {
  color: red
}
&.invalid input {
  border-color: red;
  background: salmon;
}
`;

interface onAddGoalProps {
  onAddGoal: (enteredValue: string) => void;
}

const CourseInput: React.FC<onAddGoalProps> = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: any) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
    setEnteredValue("");
    setIsValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* from-control class does not need to be set as before */}
      {/* because the styles are already attached via "styles components" */}
      {/* The case for " */}
      <FormControl className={isValid && "invalid"}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
```

## 2.2) CSS Modules

Reference: [CSS Modules from create-react-app](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

CSS Modules enable to separate the css of components from each other

Projects needs to be setup to support these modules

- in a special way
- which is supported if `create-react-app` was used to create the app
