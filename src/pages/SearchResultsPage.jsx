import { Link } from "react-router-dom";

function SearchResultsPage({ query }) {
  return (
    <div className="container search-results">
      <h1 className="search-title">Search Results</h1>
      <p>You searched for: {query}</p>

      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default SearchResultsPage;
