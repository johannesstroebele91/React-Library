- [Switch](#switch)
- [Example](#example)
  - [App.js](#appjs)
  - [ProductDetails.js](#productdetailsjs)

# Switch

Enables to show only one active page at a time

- (not show all pages at the same time),
- HAS the problem that it matches any path that begins in the same way
- and not the exact path
- the attribute exact handles that only the full path is matched

# Example

## App.js

```javascript
import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <main>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
```

## ProductDetails.js

```javascript
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId);
  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
```
