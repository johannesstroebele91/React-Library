# Styling
## 1. Style Attribute
* enables to style the HTML elements
* px is not needed (React adds it automatically)

# 1.1. Styling via style objects
* most often used to dynamically add styles at render time (e.g. changing position from top to left)

```javascript
class HomePage extends React.Component {

    render() {
        
        // Styling object    
        const style: React.CSSProperties = {
            padding: '5px',
            border: '1px solid black',
            width: '500px'
        };

        return (
            <div style={style}>Hello World</div>
        );
    }
}
```

# 1.2. Styling via className
* Classes are passed as strings via the "className" prop 
* depend on props/state for dynamically rendering UI
* have better performance than inline styles due to caching of css files

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
