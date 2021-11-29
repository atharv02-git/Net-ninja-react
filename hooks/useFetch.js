import { useState, useEffect } from "react";

export const useFetch = (url) => {
  //creating a pending state for loading data in a page
  // useState to catch error
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Aborting Fetch Requests
    const controller = new AbortController();

    const fetchData = async () => {
      //instead of using callBack function we are creating fetch data which is an async function to eliminate looping error. nOW while fettching if there is any error the res.ok prop is false it will throw an error then the catch block will catch the error and it will log the actual error message

      setIsPending(true);
      try {
        const res = await fetch(url, { signal: controller.signal});
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const json = await res.json();

        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError("Oops, cannot fetch the data :(");
        console.log(err.message);
      }
    };

    fetchData();
    // Invoking the fetch data function

    // Cleanup function for abort controller
    return () => {
        controller.abort()
    };
  }, [url]);

  return { data, isPending, error };
};
