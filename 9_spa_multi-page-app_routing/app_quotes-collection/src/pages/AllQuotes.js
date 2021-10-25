import QuoteList from "./../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Leaning React is fun!" },
  { id: "q2", author: "Peter", text: "Leaning React is great!" },
];

const AllQuotes = () => {
  return (
    <div className="centered">
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
};

export default AllQuotes;
