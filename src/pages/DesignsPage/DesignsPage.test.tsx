import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";
import DesignsPage from "./DesignsPage";
import apiClient from "../../api/apiClient";
import { designsMock } from "../../mocks/designsMocks";

jest.mock("../../api/apiClient");

describe("Given a DesignsPage component", () => {
  describe("When rendered and the data is being loaded", () => {
    test("Then it should show a loader", () => {
      apiClient.get = jest.fn().mockResolvedValue({ data: designsMock });

      renderWithProviders(<DesignsPage />);

      const loaderElement = screen.getByRole("progressbar");

      expect(loaderElement).toBeInTheDocument();
    });
  });
});
