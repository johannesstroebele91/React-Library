# Components

## 1. Basics

* Enable to split the app into independent reusable pieces
* Are isolated from each other
* The name may be capitalized (e.g. NewsFeed)
* Can only have 1 parent element
    * e.g. ```<div className=""parent""></div>```
    * An empty parent element can be created using ```javascript<React.Fragment></React.Fragment>``` or ```<></>```)

## 2. Types of Components

### 2.1. Class Components

* Are called "smart" or stateful
* They have a state,
    * which is why they can implement logic for controlling the state
    * such as lifecycle methods e.g. do sth. when the components renders, mounts, update ...
* Are dependent on the parent class React.Component
* Enables to inject data into the component
    * by passing props down to the class component
    * props are accessible via "this.props"
* Has "refs" keyword to reference elements in the components (instead of document.getelementbyid() )

```javascript
class Welcome extends React.Component {

    // Render methods return the UI
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

### 2.2. Functional Components

* Are just basic JavaScript functions (regular or arrow function)
* Are called "dumb" or "stateless"
    * because they have NO state and only accept data
    * Can accept and use props
    * No lifecycle methods (e.g. componentDidMount)
    * No render method (simply return the UI)
    * No "refs" keyword to reference elements
* Mostly used for simple representational UI
    * e.g. input component
    * Used if no state management is needed
* Can use React Hooks (enables to use state / logic, but more complicated)

```javascript
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Peter"/>
            <Welcome name="Nora"/>
        </div>
    );
}
```

## 3. Props

* Are input / parameters that the component can accept
* Make a component reusable
    * e.g. "Hello" Button
    * e.g. "Goodbye" Button
* Should be treated as an immutable object
    * NEVER overwrite the props value!
    * because it should come from the caller

## 4. Style Attribute
* enables to style the HTML elements
* px is not needed (React adds it automatically)

# 4.1. Styling via style objects
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

# 4.2. Styling via className
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
