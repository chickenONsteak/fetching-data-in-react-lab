import React, { useEffect, useState } from "react";
import useFetch from "./services/starshipService";
import StarshipList from "./components/StarshipList/StarshipList";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";

function App() {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const fetchData = useFetch();

  const getStarshipsData = async () => {
    const retrievedData = await fetchData("https://swapi.info/api/starships");
    setStarshipsData(retrievedData);
    setDisplayedStarships(retrievedData);
  };

  useEffect(() => {
    getStarshipsData();
  }, []);

  const handleSearch = (searchInput) => {
    const filteredSpaceships = starshipsData.filter((starship) => {
      const lowerCaseName = starship.name.toLowerCase();
      const lowerCaseSearch = searchInput.toLowerCase();
      return lowerCaseName.includes(lowerCaseSearch);
    });
    setDisplayedStarships(filteredSpaceships);
  };

  return (
    <div className="container">
      <h1>Star Wars API</h1>
      <StarshipSearch
        getSearch={handleSearch}
        listOfStarships={displayedStarships}
      />

      {/* <div>Number of results: {displayedStarships.length}</div> */}
      <StarshipList listOfStarships={displayedStarships} />
    </div>
  );
}

export default App;
