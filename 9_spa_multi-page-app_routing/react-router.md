- [Basics](#basics)
- [Example](#example)
  - [MainHeader.js](#mainheaderjs)
  - [App.js](#appjs)
  - [index.js](#indexjs)
- [Hightlight active link via NavLinks](#hightlight-active-link-via-navlinks)
  - [Example](#example-1)

# Basics

Is a package apart from React

- that handles the client-side routing of pages
- INSTEAD of traditional sever-side routing

Is in a general convention

- to put all pages
- into a "pages" instead of the "component folder

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
      <Route path="/"></Route>
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

# Hightlight active link via NavLinks

The component NavLink from react-router-dom

- enables to show which component
- is currently active

It requires to be added to the

- component via NavLink & activeClassName
- and the css class like ".header a.active"

## Example

import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
return (

<header className={classes.header}>
<ul>
<li>
<NavLink activeClassName={classes.active} to="/">
Home
</NavLink>
</li>
<li>
<NavLink activeClassName={classes.active} to="/welcome">
Welcome
</NavLink>
</li>
<li>
<NavLink activeClassName={classes.active} to="/products">
Products
</NavLink>
</li>
</ul>
</header>
);
};

export default MainHeader;
