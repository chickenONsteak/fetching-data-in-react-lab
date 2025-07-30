import { useState } from "react";

const useFetch = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const controller = new AbortController();

  const fetchData = async (url, signal) => {
    // setIsLoading(true);

    try {
      const response = await fetch(url, { signal });

      if (!response.ok) {
        throw new Error("Failed to fetch starships.");
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.log(error);
      throw new Error("network error");
    }
  };
  // setIsLoading(false);

  return fetchData;
};

export default useFetch;
