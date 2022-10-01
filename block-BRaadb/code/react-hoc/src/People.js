import React from "react";

import people from "./data/got.json";
import withSearch from "./withSearch";

function People({ searchTerm, listedData, handleChange }) {
  return (
    <>
      <input
        placeholder="Search"
        className="search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul className="people">
        {listedData.map((sp) => (
          <SinglePerson {...sp} />
        ))}
      </ul>
    </>
  );
}

function SinglePerson(props) {
  return (
    <li className="card">
      <div className="info">
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
      <p>{props.description}</p>
      <a href={props.wikiLink}>Learn More!</a>
    </li>
  );
}

export default withSearch(
  People,
  people.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
  }, [])
);
