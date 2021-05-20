- [1) Inline styling `style={{}}`](#1-inline-styling-style)
- [2) Regular CSS selectors](#2-regular-css-selectors)
- [3) Style objects](#3-style-objects)
- [TODO MOVE SOMEWHERE ELSE](#todo-move-somewhere-else)
- [6) styled components (3rd party library)](#6-styled-components-3rd-party-library)
- [7) Issue Global Scope of Styling](#7-issue-global-scope-of-styling)

# 1) Inline styling `style={{}}`

- In JSX, JavaScript expressions are written inside double curly braces {},
  - So styles in React are writting inside two sets of curly braces {{}}
  - due to the styling being a JavaScript object
- "px" is not needed
  - because React adds it automatically
  - e.g. `<div style={{'font-size': '5px'}}></div>`
- Spelling:
  a) option: camel case: e.g. `<div style={{fontSize: 5}}></div>`
  b) option: stringified: e.g. `<div style={{'font-size': 5}}></div>`

# 2) Regular CSS selectors

- classes are passed as strings via the "className" prop
- depend on props/state for dynamically rendering UI
- have better performance than inline styles due to caching of css files
- e.g. className, idName

```javascript
class HomePage extends React.Component {
    render() {
        return (
            <!-- Add className to add styles to HTML elements-->
            <div className={"button-styling"}>
              Hello
            </div>
        );
    }
}
```

```css
/* Id selector */
#form-control {
  margin: 0;
}

/* Class selector */
.button-styling {
  margin: 0;
}
/* Tag/element selector */
div {
  margin: 0;
}
div button { margin: 0; }
```
# 3) Style objects

- most often used to dynamically add styles at render time (e.g. changing position from top to left)

```javascript
class HomePage extends React.Component {
  render() {
    // Styling object
    const style: React.CSSProperties = {
      padding: "5px",
      border: "1px solid black",
      width: "500px",
    };

    return <div style={style}>Hello World</div>;
  }
}
```

# TODO MOVE SOMEWHERE ELSE

# 6) styled components (3rd party library)

setup pre-styled components with their own scoped styles

# 7) Issue Global Scope of Styling

Scoping styles (style only is available for the component and not globally)
