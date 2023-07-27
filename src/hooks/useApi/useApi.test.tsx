import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import { infoType } from "../../types/types";
import { designsMock } from "../../mocks/designsMocks";
import apiClient from "../../api/apiClient";

jest.mock("../../api/apiClient");

describe("Given a useApi hook", () => {
  describe("When the getData function is called with the designs", () => {
    test("Then it should return an isLoading property equal to false", async () => {
      const {
        result: {
          current: { getData },
        },
      } = renderHook(() => useApi());

      apiClient.get = jest.fn().mockResolvedValue({ data: designsMock });

      const { data } = await getData(infoType.designs);

      expect(data).toEqual(designsMock);
    });
  });
});
