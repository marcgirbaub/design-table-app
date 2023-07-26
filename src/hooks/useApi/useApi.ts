import { useCallback, useState } from "react";
import { ApiResponseStructure, infoType } from "../../types/types";
import apiClient from "../../api/apiClient";

interface useApiStructure {
  getData: (infoType: infoType) => Promise<{
    isLoading: boolean;
    data: ApiResponseStructure;
    isError: boolean;
    error: string;
  }>;
}

const useApi = (): useApiStructure => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ApiResponseStructure>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const getData = useCallback(async (infoType: infoType) => {
    try {
      setIsLoading(true);

      const response = await apiClient.get(infoType);

      setData(response.data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(`There was an error getting the ${infoType}`);
    }

    return { isLoading, data, isError, error };
  }, []);

  return { getData };
};

export default useApi;
