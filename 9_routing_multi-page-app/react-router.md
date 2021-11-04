- [Basics](#basics)
- [Example](#example)
  - [MainHeader.js](#mainheaderjs)
  - [App.js](#appjs)
  - [index.js](#indexjs)

# Basics

Is a package apart from React

- that handles the client-side routing of pages
- INSTEAD of traditional sever-side routing

Is in a general convention

- to put all pages
- into a "pages" instead of the "component folder

The attribute exact

- is extremely important
- for handling e.g. how the stanard URL `https://<someName>/` is handled
- because if <Route path="/"> would be written without `exact`
- the path would always match!
- THEREFORE USE <Route path="/" exact>

# Example

## MainHeader.js

The Link component from react-router-dom

- prevents the new requests / page load
- and adds an event listener
- so the URL change can be managed with React

```javascript
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <h1>Pages</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
```

## App.js

```javascript
import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <div>
      <MainHeader />
      <Route path="/" exact></Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
```

## index.js

```javascript
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```
