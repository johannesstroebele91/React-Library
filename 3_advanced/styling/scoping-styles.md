# 1) Standard in React

The stanard case in react is

- that css files are not scoped
- so all of the classes are available globally (the whole app)
- BUT you need to be VERY CAREFULL in larger projects

# 2) Approaches for scoping css

## 2.1) Styled Components Package (3rd party library)

Styled Components

- scopes the styling
- by generating unique class names

Ref: [https://styled-components.com/](https://styled-components.com/)

1. Quit the server
2. Install the package `npm install --save styled-components`
3. Install the necessary types `npm i --save-dev @types/styled-components`
4. Install the extension "vscode-styled-components"
5. Use it like in the example
6. It needs to be used by declaring it via
   - e.g. ` const Button = styled.button``;  `
   - but other HTML elements like `styled.h1`, ... are also possible

Example

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

```javascript
import "./Button.css";
import styled from "styled-components";

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

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

## 2.2) ???
