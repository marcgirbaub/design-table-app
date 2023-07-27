import { ApiResponseStructure, infoType } from "../../types/types";
import apiClient from "../../api/apiClient";

interface useApiStructure {
  getData: (infoType: infoType) => Promise<{
    data: ApiResponseStructure;
  }>;
}

const useApi = (): useApiStructure => {
  const getData = async (infoType: infoType) => {
    const { data } = await apiClient.get<ApiResponseStructure>(infoType);

    return { data };
  };

  return { getData };
};

export default useApi;
