import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";

import apiClient from "../../api/apiClient";
import { designsMock } from "../../mocks/designsMocks";
import SetoutsPage from "./SetoutsPage";

jest.mock("../../api/apiClient");

describe("Given a SetoutsPage component", () => {
  describe("When rendered and the data is being loaded", () => {
    test("Then it should show a loader", () => {
      apiClient.get = jest.fn().mockResolvedValue({ data: designsMock });

      renderWithProviders(<SetoutsPage />);

      const loaderElement = screen.getByRole("progressbar");

      expect(loaderElement).toBeInTheDocument();
    });
  });
});
