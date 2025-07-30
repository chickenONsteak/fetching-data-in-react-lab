import React, { useRef, useState } from "react";

const StarshipSearch = (props) => {
  const [prevSearchTerm, setPrevSearchTerm] = useState("");
  const prevSearchRef = useRef();

  const handleSearch = () => {
    props.getSearch(prevSearchTerm);
    prevSearchRef.current = prevSearchTerm;
    setPrevSearchTerm("");
  };

  const handleReset = () => {
    setPrevSearchTerm("");
    props.getSearch(prevSearchTerm);
  };

  return (
    <div className="container">
      <h2>Search</h2>
      <div className="row">
        <label className="col-md-2">Search Term:</label>
        <input
          className="col-md-4"
          type="text"
          onChange={(event) => setPrevSearchTerm(event.target.value)}
          value={prevSearchTerm || ""}
        />
        <button className="col-md-1" onClick={(event) => handleSearch(event)}>
          Search
        </button>
      </div>
      {/* use ternary operator to determine what to display */}
      {prevSearchRef.current ? (
        <div className="row">
          <div className="col-md-6">
            Your previous search: {prevSearchRef.current}
          </div>
          <button className="col-md-1" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : (
        <div>Search for a starship by name</div>
      )}
    </div>
  );
};

export default StarshipSearch;
