import React from "react";
import { Link } from "react-router-dom";
import articles from "./data/articles.json";
import withSearch from "./withSearch";

function Articles({ searchTerm, listedData, handleChange }) {
  return (
    <>
      <input
        placeholder="Search"
        className="search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul className="articles">
        {listedData.map((article) => (
          <li>
            <Link to={"articles/" + article.slug}>
              <h3>{article.title}</h3>
            </Link>
            <small>{article.author}</small>
          </li>
        ))}
      </ul>
    </>
  );
}

export default withSearch(Articles, articles);
