- [1) Style Attribute](#1-style-attribute)
- [2) Inline styling](#2-inline-styling)
- [3) Styling via style objects](#3-styling-via-style-objects)
- [4) Styling via className](#4-styling-via-classname)


Setup styles in a  conditional & dynamic way (e.g. change style if user enterer invalid input)
scoping styles (style only is available for the component and not globally)
- styled components (3rd party library): setup pre-styled components with their own scoped styles
- css modules

# 1) Style Attribute

- enables to style the HTML elements
- px is not needed (React adds it automatically)

# 2) Inline styling

- In JSX, JavaScript expressions are written inside curly braces,
- and since JavaScript objects also use curly braces,
- the styling in the example above is written inside two sets of curly braces {{}}.

```javascript
<div style={{flexWrap: 'nowrap'}}>
```

# 3) Styling via style objects

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

# 4) Styling via className

- classes are passed as strings via the "className" prop
- depend on props/state for dynamically rendering UI
- have better performance than inline styles due to caching of css files

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
