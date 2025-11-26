import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchPage.css";

export default function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query);
    navigate("/search");
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-box">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          let cleanedValue = e.target.value.replace(/[^A-Za-z0-9.# ]/g, "");
          cleanedValue =
            cleanedValue.charAt(0).toUpperCase() + cleanedValue.slice(1);
          cleanedValue = cleanedValue.slice(0, 25);
          setQuery(cleanedValue);
        }}
        placeholder="Search Here"
        pattern="[A-Za-z0-9.# ]+"
      />
      {query.trim() !== "" && (
        <button className="search-btn" type="submit">
          <i className="fas fa-search"></i>
        </button>
      )}
    </form>
  );
}
