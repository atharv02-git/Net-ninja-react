import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url);
        if(!res.ok){
          throw new Error(res.statusText)
        }
        const json = await res.json();

        setIsPending(false);
        setData(json);
        setIsError(null)
      } catch (err) {
        setIsPending(false);
        setIsError("Oops, Could not fetch the data :(");
        console.log(err.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, isError};
  //   or return {dataNameToBeReturned: data}
};
