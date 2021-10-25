import {
  Link,
  Route,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Leaning React is fun!" },
  { id: "q2", author: "Peter", text: "Leaning React is great!" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const location = useLocation();
  const quote = DUMMY_QUOTES.find((q) => q.id === params.quoteId);
  console.log(match);
  if (!quote) {
    return <p>No quote found.</p>;
  }
  console.log(location);
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
export default QuoteDetail;
