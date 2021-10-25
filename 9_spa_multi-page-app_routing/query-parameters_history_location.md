# basics

Query parameters

- enable to pass extra data
- into the page that was loaded

These parameters are optional

# useHistory

This hook gives access

- to the history object
- which allows to change and manage the URL

# useLocation

This hook gives access

- to the location object
- which includes information about the currently loaded page
- search includes the query parameters

URLSearchParams can be used

- to extract the data
- from the query params

As shown in the example,

- the URL can then be changed
- to consider the query parameters (e.g. ascending)
- and show it in the URL

# Example: QuoteList.js

```javascript
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  // Extracting data from query params (e.g. search)
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push("/quotes?sort=" + (isSortingAscending ? "desc" : "asc"));
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : " Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};
```
