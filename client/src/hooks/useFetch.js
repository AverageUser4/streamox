import { useState, useEffect } from 'react';

/*
  url - url of resource
  parseJSON - bool indicating whether data should be parsed with data.json()
*/
function useFetch(url, parseJSON = true) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsFetching(true);

        let data = await fetch(url, { credentials: 'include', signal: controller.signal });

        if(parseJSON) {
          data = await data.json();
        }

        setData(data);
        setIsFetching(false);
      } catch(error) {
        if(error.name !== 'AbortError') {
          console.error(error);
          setIsError(true);
          setIsFetching(false);
        }
      }
    }

    fetchData();

    return () => { 
      controller.abort() 
    };
  }, [url, parseJSON]);

  return { isFetching, isError, data };
}

export { useFetch };