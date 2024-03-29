import { useEffect } from "react";
import NoQUotesFound from "./../components/quotes/NoQuotesFound";
import QuoteList from "./../components/quotes/QuoteList";
import LoadingSpinner from "./../components/UI/LoadingSpinner";
import useHttp from "./../hooks/use-http";
import { getAllQuotes } from "./../lib/api";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    <div className="centered">
      <LoadingSpinner />
    </div>;
  }
  if (error) {
    return <p className="centered focus">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQUotesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
