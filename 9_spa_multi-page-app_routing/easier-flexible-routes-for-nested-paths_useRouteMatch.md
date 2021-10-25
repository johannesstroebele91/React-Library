# Basics

Ref: https://css-tricks.com/the-hooks-of-react-router/

useRouteMatch enables to

- makes it easier and secure to adapt to changes for nested routes
- by enabling to match the current URL
- in the same way that a <Route> would

This substantially reduces

- necessary corrections
- if a more upper level route changes (e.g. quote instead of quotes)

It behaves similar to location object

- but

# Example:

console.log of match object

```
params: {quoteId: 'q2'}
path: "/quotes/:quoteId"
url: "/quotes/q2"
```

console.log of location object

```
hash: ""
key: "9egc26"
pathname: "/quotes/q2/comments"
search: ""
state: undefined
```

QuoteDetail.js

```javascript
const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const quote = DUMMY_QUOTES.find((q) => q.id === params.quoteId);
  console.log(match);
  if (!quote) {
    return <p>No quote found.</p>;
  }
  console.log(params.quoteId);
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
```
