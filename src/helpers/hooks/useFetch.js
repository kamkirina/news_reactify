import { useEffect, useState } from "react";

export const useFetch = (fetchFunction, params) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const paramsToString = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetchFunction(params);
        setData(response);
      } catch (error) {
        setError(error);

        //console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunction, paramsToString]);

  return { data, error, isLoading };
};
