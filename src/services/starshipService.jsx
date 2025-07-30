const useFetch = () => {
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
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

  return fetchData;
};

export default useFetch;
