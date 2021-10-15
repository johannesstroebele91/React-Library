# Hightlight active link via NavLinks

The component NavLink from react-router-dom

- enables to show which component
- is currently active

It requires to be added to the

- component via NavLink & activeClassName
- and the css class like ".header a.active"

## Example

## MainHeader.js

```javascript
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
```

## MainHeader.module.css

```CSS
.header a:hover,
.header a:active,
.header a.active {
  color: #95bcf0;
  padding-bottom: 0.25rem;
  border-bottom: 4px solid #95bcf0;
}
```
