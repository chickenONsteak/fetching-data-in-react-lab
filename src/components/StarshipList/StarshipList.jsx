import React from "react";
import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = (props) => {
  return (
    <div className="container">
      <h2>Starships</h2>
      <div>Number of results: {props.listOfStarships.length}</div>
      {props.listOfStarships.map((starship, idx) => {
        return (
          <StarshipCard
            name={starship.name}
            class={starship.starship_class}
            manufacturer={starship.manufacturer}
            model={starship.model}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default StarshipList;
