import React from "react";

const StarshipCard = (props) => {
  return (
    <div className="container" key={props.idx}>
      <h3>{props.name}</h3>
      <div>{props.class}</div>
      <div>{props.manufacturer}</div>
      <div>{props.model}</div>
    </div>
  );
};

export default StarshipCard;
