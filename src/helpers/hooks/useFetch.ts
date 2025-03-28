import { useEffect, useState } from "react";

interface fetchFunction<P, T> {
  (params?: P): Promise<T>;
}

interface useFetchResult<T> {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T, P>(
  fetchFunction: fetchFunction<P, T>,
  params?: P
): useFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [error, setError] = useState<Error | null>(null);

  const paramsToString = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetchFunction(params);
        setData(response);
      } catch (error) {
        setError(error as Error);

        //console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunction, paramsToString]);

  return { data, error, isLoading };
};
