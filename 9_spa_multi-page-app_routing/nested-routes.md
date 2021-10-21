# Nesting routes

Enables to handle not just pages side by side

- but also pages inside of a route
- by defining Route inside a Route

# Example normal nested routes

In the App.js could be a Route

- and also in one of the routes could be one
- e.g. in the Welcome.js component

For this to happen

- start of the path of the sub-route
- needs to be the same as the route that is higher up
- e.g. "/welcome/new-user"

```javascript
<Route path="/welcome/new-user">
  <Comments />
</Route>
```

# Example Dynamic nested routes

```javascript
<Route path="/quotes/:productId/comments">
  <Comments />
</Route>
```

```javascript
<Route path={`quotes/${params.quoteId}/comments`}>
  <Comments />
</Route>
```
