import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    //instead of using callBack function we are creating fetch data which is an async function to eliminate looping error
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();

      setData(json);
    };

    fetchData();
    // Invoking the fetch data function
  }, [url]);

  return { data };
};