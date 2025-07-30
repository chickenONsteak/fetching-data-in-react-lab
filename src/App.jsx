import React, { useEffect, useState } from "react";
import useFetch from "./services/starshipService";

function App() {
  const [starshipsData, setStarshipsData] = useState([]);
  const fetchData = useFetch();

  const getStarshipsData = async () => {
    const retrievedData = await fetchData("https://swapi.info/api/starships");
    setStarshipsData(retrievedData);
  };

  useEffect(() => {
    getStarshipsData;
  }, []);

  return (
    <>
      {starshipsData.map((starship) => (
        <div>{JSON.stringify(starship)}</div>
      ))}
    </>
  );
}

export default App;
