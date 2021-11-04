- [Redirecting](#redirecting)
- [Example](#example)
- [History.Push](#historypush)
- [Example](#example-1)

# Redirecting

<Redirect/> enables to redirect users when clicking on a link

- to another page automatically
- which can come in handy if e.g. data on a page is not available

# Example

```javascript
import { Redirect, Route, Switch } from "react-router-dom";
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
          <Redirect to="/welcome" />
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

`history.push` enables to redirect users

- when a certain function is called

# History.Push

`history.push` enables to redirect users

- when a certain function is called

# Example

```javascript
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    // Redirects the user to the specified URL
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuote;
```
