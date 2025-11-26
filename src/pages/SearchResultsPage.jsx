import { Link } from "react-router-dom";

function SearchResultsPage({ query }) {
  return (
    <div className="container search-results">
      <h3 className="search-title">Search Results</h3>
      <p>
        You searched for: <span>{query}</span>
      </p>

      <Link to="/" className="return-link">
        <span>Go back to Home</span> →
      </Link>
    </div>
  );
}

export default SearchResultsPage;
