- [1. Inline styling `style={{}}`](#1-inline-styling-style)
- [2. Regular CSS selectors](#2-regular-css-selectors)
- [3. Class Modules](#3-class-modules)
- [4. Style objects](#4-style-objects)

**Types of stylings for HTML elements**

# 1. Inline styling `style={{}}`

- In JSX, JavaScript expressions are written inside double curly braces {},
  - So styles in React are writting inside two sets of curly braces {{}}
  - due to the styling being a JavaScript object
- "px" is not needed
  - because React adds it automatically
  - e.g. `<div style={{'font-size': '5px'}}></div>`

**Approaches**

a) Camel case

```javascript
<div style={{ fontSize: 5 }}></div>
```

b) stringified

```javascript
<div style={{ "font-size": 5 }}></div>
```

# 2. Regular CSS selectors

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
div button {
  margin: 0;
}
```

# 3. Class Modules

Class modules can be used

- by adding module between the file name and css (e.g. Header.module.css)
- importing the styles via some individual name (e.g. import classes from "Header.module.css")
- and using the classes object (e.g. {classes.header})
- IMPORTANT: classes with a dash `-` can be also accessed (e.g. className={classes["main-image"]})

Example see Header.tsx components

```javascript
import classes from "Header.module.css";
...
<header {classes.header}>
  <img className={classes["main-image"]}/>
</header>
```

An external can be merged with an internal class

- by passing down a class
- and merging this class with another class using
  - props `<Card className={classes.input}>`
  - and `${}` -> (e.g. `className={`${classes.card} ${className}`}`)

Example see AddUser and Card components in [Git Commit: ]()

**AddUser**

```javascript
import classes from "./AddUser.module.css";
...
<Card className={classes.input}>
```

**Card**

```javascript
import classes from "./Card.module.css";
interface CardProps {
  className: any;
}
const Card: React.FC<CardProps> = ({ children, className }) => {
  // children props enables to access the content
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};
```

# 4. Style objects

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

```

```
