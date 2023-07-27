import { ApiResponseStructure, infoType } from "../../types/types";
import apiClient from "../../api/apiClient";

interface UseApiStructure {
  getData: (infoType: infoType) => Promise<{
    data: ApiResponseStructure;
  }>;
}

const useApi = (): UseApiStructure => {
  const getData = async (infoType: infoType) => {
    const { data } = await apiClient.get<ApiResponseStructure>(infoType);

    return { data };
  };

  return { getData };
};

export default useApi;
